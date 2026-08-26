import { NextResponse } from "next/server";
import { getAffiliateStats, isOrdersConfigured } from "@/lib/orders";

// API nội bộ cho chủ shop xem báo cáo hoa hồng CTV theo từng SĐT giới thiệu.
// Dùng chung mật khẩu với "Chủ shop mở khoá" — không lộ thêm secret mới.
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

  const stats = await getAffiliateStats();
  return NextResponse.json({ ok: true, affiliates: stats });
}
