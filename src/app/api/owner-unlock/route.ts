import { NextResponse } from "next/server";
import { products } from "@/lib/constants";
import { getProductDownloadUrl, isBlobConfigured } from "@/lib/downloads";

export async function POST(request: Request) {
  const expectedPassword = process.env.OWNER_UNLOCK_PASSWORD;
  if (!expectedPassword) {
    return NextResponse.json({ ok: false, error: "Chưa cấu hình." }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as
    | { password?: string; productSlug?: string }
    | null;
  const password = body?.password ?? "";

  if (password !== expectedPassword) {
    return NextResponse.json({ ok: false, error: "Sai mật khẩu." }, { status: 401 });
  }

  // Sản phẩm dạng file tải về (không phải contentUnlock): chủ shop mở khoá cũng cần
  // một link tải thật, không chỉ đổi trạng thái UI. Sinh link qua đúng hàm webhook
  // thanh toán đang dùng — không đụng gì tới đơn hàng/Redis, chỉ đọc file trên Blob.
  const product = products.find((p) => p.slug === body?.productSlug);
  if (product?.blobPathname && isBlobConfigured()) {
    try {
      const downloadUrl = await getProductDownloadUrl(product.blobPathname);
      return NextResponse.json({ ok: true, downloadUrl });
    } catch (error) {
      console.error("Lỗi khi sinh link tải cho chủ shop:", error);
      return NextResponse.json(
        { ok: false, error: "Không sinh được link tải, thử lại." },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
