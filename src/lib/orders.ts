import { Redis } from "@upstash/redis";

export type OrderStatus = "pending" | "paid" | "expired";

export type Order = {
  code: string;
  productSlug: string;
  productName: string;
  amount: number;
  blobPathname: string;
  buyerName: string;
  buyerPhone: string;
  status: OrderStatus;
  createdAt: number;
  paidAt?: number;
  downloadUrl?: string;
  /** SĐT của CTV giới thiệu (nếu khách vào qua link ?ref=), đọc từ localStorage phía client. */
  refPhone?: string;
};

export type AffiliateSale = {
  refPhone: string;
  orderCode: string;
  productSlug: string;
  productName: string;
  amount: number;
  commission: number;
  paidAt: number;
};

const PENDING_TTL_SECONDS = 60 * 60; // 1h to complete payment
const PAID_TTL_SECONDS = 60 * 60 * 24 * 30; // keep paid orders 30 days
// Hoa hồng CTV: 30% cố định, chỉ tính cho đơn ĐẦU TIÊN của khách được giới
// thiệu (xét qua isPhoneCustomer — nếu khách đã là customer từ trước thì đơn
// này không phải lần mua đầu, không tính hoa hồng dù có refPhone).
const AFFILIATE_COMMISSION_RATE = 0.3;

function redis(): Redis | null {
  // Vercel's Upstash-for-Redis marketplace integration provisions these under the
  // legacy Vercel KV naming (KV_REST_API_*) rather than UPSTASH_REDIS_REST_*.
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export function isOrdersConfigured() {
  return redis() !== null;
}

function orderKey(code: string) {
  return `order:${code}`;
}

// Chuẩn hoá số điện thoại về dạng 0xxxxxxxxx để tra cứu không phụ thuộc cách
// khách gõ (có khoảng trắng, +84, 84...).
export function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("84") && digits.length > 9) {
    return `0${digits.slice(2)}`;
  }
  if (!digits.startsWith("0") && digits.length === 9) {
    return `0${digits}`;
  }
  return digits;
}

function phoneIndexKey(productSlug: string, phone: string) {
  return `order-by-phone:${productSlug}:${normalizePhone(phone)}`;
}

// Cờ đánh dấu "SĐT này đã từng mua ít nhất 1 sản phẩm" — lưu VĨNH VIỄN (không
// đặt ex), tách biệt với chỉ mục order-by-phone theo từng sản phẩm ở trên (chỉ
// giữ 30 ngày cùng đơn hàng). Nếu dùng chung 1 chỗ lưu có hạn 30 ngày để xét
// điều kiện "đã mua hàng" cho các trang quà tặng, khách mua lâu hơn 30 ngày sẽ
// bị khoá lại quà tặng dù đã trả tiền thật — đây là chỗ tách riêng để tránh lỗi đó.
function customerKey(phone: string) {
  return `customer:${normalizePhone(phone)}`;
}

// Sổ hoa hồng CTV — lưu VĨNH VIỄN theo mã đơn (không đặt ex), tách biệt khỏi
// dữ liệu đơn hàng 30 ngày, để báo cáo hoa hồng không bị mất theo thời gian.
function affiliateSaleKey(orderCode: string) {
  return `affiliate-sale:${orderCode}`;
}

function generateOrderCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // không dùng ký tự dễ nhầm (0/O, 1/I)
  let code = "VAS";
  for (let i = 0; i < 6; i++) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return code;
}

export async function createOrder(input: {
  productSlug: string;
  productName: string;
  amount: number;
  blobPathname: string;
  buyerName: string;
  buyerPhone: string;
  refPhone?: string;
}): Promise<Order> {
  const client = redis();
  if (!client) throw new Error("Orders store chưa được cấu hình.");

  const code = generateOrderCode();
  const order: Order = {
    code,
    ...input,
    status: "pending",
    createdAt: Date.now(),
  };

  await client.set(orderKey(code), order, { ex: PENDING_TTL_SECONDS });
  return order;
}

export async function getOrder(code: string): Promise<Order | null> {
  const client = redis();
  if (!client) return null;
  const order = await client.get<Order>(orderKey(code));
  return order ?? null;
}

export async function markOrderPaid(code: string, downloadUrl: string): Promise<Order | null> {
  const client = redis();
  if (!client) return null;
  const order = await client.get<Order>(orderKey(code));
  if (!order) return null;

  // Xét TRƯỚC khi đánh dấu customer bên dưới: nếu khách đã là customer từ
  // trước (đã có đơn "paid" khác trước đây) thì đơn lần này không phải lần
  // mua đầu tiên -> không tính hoa hồng CTV dù có refPhone.
  const wasAlreadyCustomer = await isPhoneCustomer(order.buyerPhone);

  const updated: Order = { ...order, status: "paid", paidAt: Date.now(), downloadUrl };
  await client.set(orderKey(code), updated, { ex: PAID_TTL_SECONDS });

  // Cho phép khách tra cứu lại đơn đã thanh toán bằng SĐT nếu mất dữ liệu trình
  // duyệt (đóng tab trước khi kịp lưu localStorage, đổi máy, xoá cache...).
  // Đây là chỉ mục phụ, không được để lỗi ở bước này làm hỏng việc đơn đã được
  // đánh dấu "paid" ở trên (bước quan trọng nhất, đã chạy xong).
  try {
    await client.set(phoneIndexKey(updated.productSlug, updated.buyerPhone), code, {
      ex: PAID_TTL_SECONDS,
    });
  } catch (error) {
    console.error("Lỗi khi ghi chỉ mục tra cứu theo SĐT:", error);
  }

  try {
    await client.set(customerKey(updated.buyerPhone), "1");
  } catch (error) {
    console.error("Lỗi khi đánh dấu khách hàng theo SĐT:", error);
  }

  if (updated.refPhone && !wasAlreadyCustomer) {
    try {
      const sale: AffiliateSale = {
        refPhone: normalizePhone(updated.refPhone),
        orderCode: updated.code,
        productSlug: updated.productSlug,
        productName: updated.productName,
        amount: updated.amount,
        commission: Math.round(updated.amount * AFFILIATE_COMMISSION_RATE),
        paidAt: updated.paidAt ?? Date.now(),
      };
      await client.set(affiliateSaleKey(updated.code), sale);
    } catch (error) {
      console.error("Lỗi khi ghi nhận hoa hồng CTV:", error);
    }
  }

  return updated;
}

// Dùng cho các trang quà tặng (/qua-tang, /kho-prompt): xét "khách đã từng
// mua ít nhất 1 sản phẩm nào đó chưa", không quan tâm sản phẩm cụ thể hay đơn
// hàng còn tồn tại trong Redis hay không (cờ này không có hạn 30 ngày).
export async function isPhoneCustomer(phone: string): Promise<boolean> {
  const client = redis();
  if (!client) return false;
  // Dùng exists() thay vì get()+so sánh chuỗi: Upstash REST client tự parse
  // JSON khi đọc, nên giá trị "1" lưu vào sẽ đọc ra là number 1 chứ không
  // phải string "1" — so sánh === "1" luôn sai dù cờ đã được ghi đúng.
  const count = await client.exists(customerKey(phone));
  return count > 0;
}

export async function findPaidOrderByPhone(
  productSlug: string,
  phone: string
): Promise<Order | null> {
  const client = redis();
  if (!client) return null;
  const code = await client.get<string>(phoneIndexKey(productSlug, phone));
  if (!code) return null;
  const order = await client.get<Order>(orderKey(code));
  if (!order || order.status !== "paid") return null;
  return order;
}

// Báo cáo hoa hồng CTV cho chủ shop: quét toàn bộ affiliate-sale:*, gộp theo
// refPhone. Dùng cho API nội bộ bảo vệ bằng mật khẩu chủ shop.
export async function getAffiliateStats(): Promise<
  { refPhone: string; totalCommission: number; totalSales: number; sales: AffiliateSale[] }[]
> {
  const client = redis();
  if (!client) throw new Error("Orders store chưa được cấu hình.");

  const byPhone = new Map<string, AffiliateSale[]>();
  let cursor = "0";

  do {
    const [nextCursor, keys] = await client.scan(cursor, {
      match: "affiliate-sale:*",
      count: 100,
    });
    cursor = String(nextCursor);
    for (const key of keys) {
      const sale = await client.get<AffiliateSale>(key);
      if (!sale) continue;
      const list = byPhone.get(sale.refPhone) ?? [];
      list.push(sale);
      byPhone.set(sale.refPhone, list);
    }
  } while (cursor !== "0");

  return Array.from(byPhone.entries())
    .map(([refPhone, sales]) => ({
      refPhone,
      totalSales: sales.length,
      totalCommission: sales.reduce((sum, s) => sum + s.commission, 0),
      sales: sales.sort((a, b) => b.paidAt - a.paidAt),
    }))
    .sort((a, b) => b.totalCommission - a.totalCommission);
}

// Chạy 1 lần sau khi triển khai tính năng tra cứu theo SĐT: quét lại toàn bộ
// đơn "paid" đã tồn tại từ trước (chưa có chỉ mục SĐT vì tính năng này chưa
// từng ghi chỉ mục cho các đơn đó) và bổ sung chỉ mục cho chúng.
export async function backfillPhoneIndex(): Promise<{
  scanned: number;
  indexed: number;
  markedCustomers: number;
}> {
  const client = redis();
  if (!client) throw new Error("Orders store chưa được cấu hình.");

  let cursor = "0";
  let scanned = 0;
  let indexed = 0;
  let markedCustomers = 0;

  do {
    const [nextCursor, keys] = await client.scan(cursor, { match: "order:*", count: 100 });
    cursor = String(nextCursor);
    for (const key of keys) {
      const order = await client.get<Order>(key);
      scanned++;
      if (order && order.status === "paid") {
        await client.set(phoneIndexKey(order.productSlug, order.buyerPhone), order.code, {
          ex: PAID_TTL_SECONDS,
        });
        indexed++;
        await client.set(customerKey(order.buyerPhone), "1");
        markedCustomers++;
      }
    }
  } while (cursor !== "0");

  return { scanned, indexed, markedCustomers };
}
