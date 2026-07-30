import { NextResponse } from "next/server";
import { products, bankInfo } from "@/lib/constants";
import { createOrder, isOrdersConfigured } from "@/lib/orders";

type CreateOrderPayload = {
  productSlug: string;
  name: string;
  phone: string;
};

export async function POST(request: Request) {
  if (!isOrdersConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Thanh toán tự động chưa được cấu hình." },
      { status: 503 }
    );
  }

  const body = (await request.json()) as CreateOrderPayload;

  const product = products.find((p) => p.slug === body.productSlug);
  if (!product) {
    return NextResponse.json({ ok: false, error: "Sản phẩm không tồn tại." }, { status: 404 });
  }
  if (!body.name?.trim() || !body.phone?.trim()) {
    return NextResponse.json({ ok: false, error: "Thiếu họ tên hoặc số điện thoại." }, { status: 400 });
  }

  try {
    const order = await createOrder({
      productSlug: product.slug,
      productName: product.name,
      amount: product.amount,
      blobPathname: product.blobPathname,
      buyerName: body.name.trim(),
      buyerPhone: body.phone.trim(),
    });

    return NextResponse.json({
      ok: true,
      code: order.code,
      amount: order.amount,
      bankBin: bankInfo.bankBin,
      accountNumber: bankInfo.accountNumber,
      accountName: bankInfo.accountName,
      bankName: bankInfo.bankName,
    });
  } catch (error) {
    console.error("Lỗi khi tạo đơn hàng:", error);
    return NextResponse.json({ ok: false, error: "Không thể tạo đơn hàng." }, { status: 502 });
  }
}
