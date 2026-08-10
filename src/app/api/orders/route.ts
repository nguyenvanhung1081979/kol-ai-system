import { NextResponse } from "next/server";
import { products, bankInfo } from "@/lib/constants";
import { createOrder, isOrdersConfigured } from "@/lib/orders";

type CreateOrderPayload = {
  productSlug: string;
  name: string;
  phone: string;
  fbclid?: string;
};

function cookieValue(cookieHeader: string, name: string): string | undefined {
  for (const part of cookieHeader.split(";")) {
    const [key, ...valueParts] = part.trim().split("=");
    if (key === name) {
      try {
        return decodeURIComponent(valueParts.join("="));
      } catch {
        return undefined;
      }
    }
  }
  return undefined;
}

function safeMetaCookie(value: string | undefined): string | undefined {
  if (!value || value.length > 255 || !/^fb\.\d+\.\d+\..+$/.test(value)) return undefined;
  return value;
}

function safeFbclid(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  if (!trimmed || trimmed.length > 500 || !/^[A-Za-z0-9_-]+$/.test(trimmed)) return undefined;
  return trimmed;
}

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
    const cookieHeader = request.headers.get("cookie") ?? "";
    const fbp = safeMetaCookie(cookieValue(cookieHeader, "_fbp"));
    const cookieFbc = safeMetaCookie(cookieValue(cookieHeader, "_fbc"));
    const fbclid = safeFbclid(body.fbclid);
    const fbc = cookieFbc ?? (fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined);
    const clientIpAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip")?.trim() ||
      undefined;
    const clientUserAgent = request.headers.get("user-agent")?.slice(0, 500) || undefined;

    const order = await createOrder({
      productSlug: product.slug,
      productName: product.name,
      amount: product.amount,
      blobPathname: product.blobPathname,
      buyerName: body.name.trim(),
      buyerPhone: body.phone.trim(),
      metaAttribution: {
        fbp,
        fbc,
        eventSourceUrl: `${new URL(request.url).origin}/san-pham/${product.slug}`,
        clientIpAddress,
        clientUserAgent,
      },
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
