import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const expectedPassword = process.env.OWNER_UNLOCK_PASSWORD;
  if (!expectedPassword) {
    return NextResponse.json({ ok: false, error: "Chưa cấu hình." }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  const password = body?.password ?? "";

  if (password !== expectedPassword) {
    return NextResponse.json({ ok: false, error: "Sai mật khẩu." }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}
