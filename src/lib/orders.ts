import { Redis } from "@upstash/redis";

export type OrderStatus = "pending" | "paid" | "expired";

export type MetaAttribution = {
  fbp?: string;
  fbc?: string;
  eventSourceUrl?: string;
  clientIpAddress?: string;
  clientUserAgent?: string;
};

export type Order = {
  code: string;
  productSlug: string;
  productName: string;
  amount: number;
  blobPathname: string;
  buyerName: string;
  buyerPhone: string;
  metaAttribution?: MetaAttribution;
  status: OrderStatus;
  createdAt: number;
  paidAt?: number;
  downloadUrl?: string;
};

const PENDING_TTL_SECONDS = 60 * 60; // 1h to complete payment
const PAID_TTL_SECONDS = 60 * 60 * 24 * 30; // keep paid orders 30 days

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
  metaAttribution?: MetaAttribution;
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

  return updated;
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

// Chạy 1 lần sau khi triển khai tính năng tra cứu theo SĐT: quét lại toàn bộ
// đơn "paid" đã tồn tại từ trước (chưa có chỉ mục SĐT vì tính năng này chưa
// từng ghi chỉ mục cho các đơn đó) và bổ sung chỉ mục cho chúng.
export async function backfillPhoneIndex(): Promise<{ scanned: number; indexed: number }> {
  const client = redis();
  if (!client) throw new Error("Orders store chưa được cấu hình.");

  let cursor = "0";
  let scanned = 0;
  let indexed = 0;

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
      }
    }
  } while (cursor !== "0");

  return { scanned, indexed };
}
