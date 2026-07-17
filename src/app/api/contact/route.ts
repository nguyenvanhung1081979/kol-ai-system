import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  phone: string;
  service?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name?.trim() || !body.phone?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Thiếu họ tên hoặc số điện thoại." },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("GOOGLE_SHEETS_WEBHOOK_URL chưa được cấu hình.");
    return NextResponse.json(
      { ok: false, error: "Hệ thống lưu dữ liệu chưa sẵn sàng." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name.trim(),
        phone: body.phone.trim(),
        service: body.service ?? "",
        message: body.message ?? "",
      }),
    });

    if (!res.ok) {
      throw new Error(`Webhook trả về status ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lỗi khi gửi dữ liệu tới Google Sheet:", error);
    return NextResponse.json(
      { ok: false, error: "Không thể lưu dữ liệu, vui lòng thử lại sau." },
      { status: 502 }
    );
  }
}
