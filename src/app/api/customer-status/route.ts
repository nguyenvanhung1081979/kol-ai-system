import { NextResponse } from "next/server";
import { isOrdersConfigured, isPhoneCustomer } from "@/lib/orders";

// Dùng cho các trang quà tặng (/qua-tang, /kho-prompt): kiểm tra SĐT đã từng
// mua ít nhất 1 sản phẩm nào đó chưa. Không yêu cầu mật khẩu — cùng mức độ lộ
// thông tin như /api/orders/lookup đang có (chỉ trả về true/false theo SĐT).
export async function POST(request: Request) {
  if (!isOrdersConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Hệ thống xác thực khách hàng chưa được cấu hình." },
      { status: 503 }
    );
  }

  const body = (await request.json().catch(() => null)) as { phone?: string } | null;
  const phone = body?.phone?.trim() ?? "";
  if (!phone) {
    return NextResponse.json({ ok: false, error: "Thiếu số điện thoại." }, { status: 400 });
  }

  const isCustomer = await isPhoneCustomer(phone);
  return NextResponse.json({ ok: true, isCustomer });
}
