import { NextResponse } from "next/server";
import { products } from "@/lib/constants";
import { findPaidOrderByPhone, isOrdersConfigured } from "@/lib/orders";

type LookupPayload = {
  productSlug: string;
  phone: string;
};

export async function POST(request: Request) {
  if (!isOrdersConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Thanh toán tự động chưa được cấu hình." },
      { status: 503 }
    );
  }

  const body = (await request.json()) as LookupPayload;

  const product = products.find((p) => p.slug === body.productSlug);
  if (!product) {
    return NextResponse.json({ ok: false, error: "Sản phẩm không tồn tại." }, { status: 404 });
  }
  if (!body.phone?.trim()) {
    return NextResponse.json({ ok: false, error: "Thiếu số điện thoại." }, { status: 400 });
  }

  const order = await findPaidOrderByPhone(product.slug, body.phone.trim());
  if (!order) {
    return NextResponse.json(
      { ok: false, error: "Không tìm thấy đơn hàng đã thanh toán với số điện thoại này." },
      { status: 404 }
    );
  }

  return NextResponse.json({
    ok: true,
    code: order.code,
    downloadUrl: order.downloadUrl,
  });
}
