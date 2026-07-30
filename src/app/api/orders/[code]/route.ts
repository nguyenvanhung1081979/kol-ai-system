import { NextResponse } from "next/server";
import { getOrder } from "@/lib/orders";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;
  const order = await getOrder(code.toUpperCase());

  if (!order) {
    return NextResponse.json({ ok: false, error: "Không tìm thấy đơn hàng." }, { status: 404 });
  }

  return NextResponse.json({
    ok: true,
    status: order.status,
    downloadUrl: order.status === "paid" ? order.downloadUrl : undefined,
  });
}
