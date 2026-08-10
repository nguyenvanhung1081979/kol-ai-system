import { NextResponse } from "next/server";
import { getOrder, markOrderPaid } from "@/lib/orders";
import type { Order } from "@/lib/orders";
import { getProductDownloadUrl, isBlobConfigured } from "@/lib/downloads";
import { sendTelegramMessage } from "@/lib/telegram";
import { sendMetaPurchase } from "@/lib/meta-conversions";

type SePayPayload = {
  gateway?: string;
  transactionDate?: string;
  accountNumber?: string;
  content?: string;
  transferType?: "in" | "out";
  transferAmount?: number;
  referenceCode?: string;
};

// Mã đơn hàng do createOrder() sinh ra: "VAS" + 6 ký tự trong bộ chữ/số đã lọc.
const ORDER_CODE_PATTERN = /VAS[A-Z0-9]{6}/;

function extractOrderCode(content: string): string | null {
  const normalized = content.toUpperCase().replace(/\s+/g, "");
  const match = normalized.match(ORDER_CODE_PATTERN);
  return match ? match[0] : null;
}

async function reportPurchaseToMeta(order: Order) {
  try {
    const result = await sendMetaPurchase(order);
    if (result.sent && result.eventsReceived < 1) {
      throw new Error("Meta không xác nhận đã nhận sự kiện Purchase.");
    }
  } catch (error) {
    console.error(`Không thể gửi Meta Purchase cho đơn ${order.code}:`, error);
    await sendTelegramMessage(
      `⚠️ Đơn ${order.code} đã thanh toán và đã giao hàng, nhưng chưa gửi được Purchase cho Meta. Thanh toán của khách không bị ảnh hưởng; cần kiểm tra cấu hình Meta Conversions API.`
    );
  }
}

export async function POST(request: Request) {
  const expectedApiKey = process.env.SEPAY_WEBHOOK_APIKEY;
  if (!expectedApiKey) {
    console.error("SEPAY_WEBHOOK_APIKEY chưa được cấu hình.");
    return NextResponse.json({ success: false }, { status: 503 });
  }

  const authHeader = request.headers.get("authorization") ?? "";
  if (authHeader !== `Apikey ${expectedApiKey}`) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const payload = (await request.json()) as SePayPayload;

  // Không phải tiền vào tài khoản -> bỏ qua nhưng vẫn báo nhận thành công cho SePay.
  if (payload.transferType !== "in" || !payload.content) {
    return NextResponse.json({ success: true });
  }

  const code = extractOrderCode(payload.content);
  if (!code) {
    return NextResponse.json({ success: true });
  }

  const order = await getOrder(code);
  if (!order) {
    console.error(`Webhook SePay: không tìm thấy đơn hàng ${code}`);
    return NextResponse.json({ success: true });
  }

  if (order.status === "paid") {
    return NextResponse.json({ success: true });
  }

  if (payload.transferAmount !== order.amount) {
    await sendTelegramMessage(
      `⚠️ Cảnh báo: giao dịch nội dung "${code}" có số tiền ${payload.transferAmount?.toLocaleString(
        "vi-VN"
      )}đ không khớp đơn hàng (${order.amount.toLocaleString("vi-VN")}đ) — sản phẩm ${
        order.productName
      }, KH ${order.buyerName} (${order.buyerPhone}). Cần kiểm tra thủ công.`
    );
    return NextResponse.json({ success: true });
  }

  // Sản phẩm dạng mở khoá nội dung (contentUnlock) không có file — không cần sinh link Blob,
  // trang sẽ tự hiển thị nội dung khi trạng thái đơn = paid.
  if (!order.blobPathname) {
    const paidOrder = await markOrderPaid(code, "");
    if (paidOrder) await reportPurchaseToMeta(paidOrder);
    await sendTelegramMessage(
      `✅ Thanh toán thành công!\nĐơn: ${code}\nSản phẩm: ${order.productName}\nKhách: ${order.buyerName} - ${order.buyerPhone}\nSố tiền: ${order.amount.toLocaleString(
        "vi-VN"
      )}đ`
    );
    return NextResponse.json({ success: true });
  }

  if (!isBlobConfigured()) {
    console.error("BLOB_READ_WRITE_TOKEN chưa được cấu hình, không thể sinh link tải.");
    await sendTelegramMessage(
      `✅ Đã nhận thanh toán đơn ${code} (${order.productName}, ${order.buyerName} - ${order.buyerPhone}) nhưng CHƯA sinh được link tải (thiếu cấu hình Blob). Cần gửi thủ công.`
    );
    return NextResponse.json({ success: true });
  }

  try {
    const downloadUrl = await getProductDownloadUrl(order.blobPathname);
    const paidOrder = await markOrderPaid(code, downloadUrl);
    if (paidOrder) await reportPurchaseToMeta(paidOrder);
    await sendTelegramMessage(
      `✅ Thanh toán thành công!\nĐơn: ${code}\nSản phẩm: ${order.productName}\nKhách: ${order.buyerName} - ${order.buyerPhone}\nSố tiền: ${order.amount.toLocaleString(
        "vi-VN"
      )}đ`
    );
  } catch (error) {
    console.error("Lỗi khi sinh link tải / cập nhật đơn hàng:", error);
    await sendTelegramMessage(
      `⚠️ Đã nhận thanh toán đơn ${code} nhưng lỗi khi sinh link tải. Cần xử lý thủ công cho ${order.buyerName} (${order.buyerPhone}).`
    );
  }

  return NextResponse.json({ success: true });
}
