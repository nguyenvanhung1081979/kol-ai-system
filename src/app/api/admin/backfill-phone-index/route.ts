import { NextResponse } from "next/server";
import { backfillPhoneIndex, isOrdersConfigured } from "@/lib/orders";

// Endpoint nội bộ, chạy 1 lần: bổ sung chỉ mục tra cứu theo SĐT cho các đơn
// "paid" đã tồn tại trước khi tính năng tra cứu được triển khai. Dùng chung
// mật khẩu với "Chủ shop mở khoá" — không lộ thêm secret mới.
export async function POST(request: Request) {
  const expectedPassword = process.env.OWNER_UNLOCK_PASSWORD;
  if (!expectedPassword) {
    return NextResponse.json({ ok: false, error: "Chưa cấu hình." }, { status: 503 });
  }
  if (!isOrdersConfigured()) {
    return NextResponse.json({ ok: false, error: "Orders chưa được cấu hình." }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  const password = body?.password ?? "";
  if (password !== expectedPassword) {
    return NextResponse.json({ ok: false, error: "Sai mật khẩu." }, { status: 401 });
  }

  const result = await backfillPhoneIndex();
  return NextResponse.json({ ok: true, ...result });
}
