import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ProductPurchase } from "@/components/sections/ProductPurchase";
import { products } from "@/lib/constants";
import { productIcons } from "@/components/ui/Icons";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
  };
}

const steps = [
  { title: "Chuyển khoản đúng số tiền", desc: "Quét mã QR hoặc chuyển khoản thủ công theo thông tin bên dưới." },
  { title: "Nhắn Zalo xác nhận", desc: "Gửi ảnh biên lai chuyển khoản qua Zalo để đội ngũ xác nhận thanh toán." },
  { title: "Nhận sản phẩm & hướng dẫn", desc: "Được kích hoạt và hướng dẫn sử dụng chi tiết trong vòng 24h." },
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const Icon = productIcons[product.icon];

  return (
    <>
      <Header />

      <section className="relative glow overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 md:px-8 pt-16 pb-16 md:pt-24 md:pb-20 text-center">
          <div className="w-16 h-16 rounded-2xl grad-btn flex items-center justify-center mx-auto mb-6">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <span className="inline-block text-xs font-semibold tracking-wide text-accent2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
            SẢN PHẨM
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            {product.name}
          </h1>
          <p className="text-txt2 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            {product.longDescription}
          </p>
          <p className="mb-8">
            {product.originalPrice && (
              <span className="text-txt2 text-lg line-through mr-2">{product.originalPrice}đ</span>
            )}
            <span className="text-3xl font-extrabold grad-text">{product.price}</span>
            <span className="text-txt2 text-base font-medium">{product.priceSuffix}</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#mua-ngay" className="grad-btn text-white font-semibold px-7 py-3.5 rounded-full">
              Mua ngay
            </a>
            <Link
              href="/san-pham"
              className="btn-ghost border border-border text-txt2 font-semibold px-7 py-3.5 rounded-full"
            >
              Xem sản phẩm khác
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-accent2">TÍNH NĂNG</span>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-3">Sản phẩm này làm được gì?</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {product.features.map((feature) => (
            <div
              key={feature}
              className="card-hover flex gap-3 bg-card border border-border rounded-2xl p-5"
            >
              <span className="shrink-0 text-accent2 font-bold">✓</span>
              <p className="text-txt2 text-sm leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card2/40 border-y border-border">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-accent2">LỢI ÍCH</span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-3">Vì sao nên chọn?</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {product.benefits.map((benefit) => (
              <div
                key={benefit}
                className="card-hover flex gap-3 bg-card border border-border rounded-2xl p-5"
              >
                <span className="shrink-0 text-accent2 font-bold">✓</span>
                <p className="text-txt2 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mua-ngay" className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20">
        {product.externalUrl ? (
          <>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold tracking-widest text-accent2">MUA NGAY</span>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-3">Hoàn tất đơn hàng</h2>
            </div>
            <div className="card-hover max-w-md mx-auto bg-card border border-border rounded-3xl p-8 md:p-10 text-center">
              <p className="text-txt2 text-sm leading-relaxed mb-6">
                Sản phẩm này được đặt mua trên trang riêng — thanh toán tự động, sách và tài
                nguyên đi kèm gửi thẳng về email của bạn ngay sau khi thanh toán thành công.
              </p>
              <a
                href={product.externalUrl}
                target="_blank"
                rel="noopener"
                className="grad-btn block text-white font-semibold px-7 py-3.5 rounded-full"
              >
                Đặt mua trên trang chính thức →
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold tracking-widest text-accent2">CÁCH MUA HÀNG</span>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-3">3 bước nhận sản phẩm</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 mb-14 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="card-hover flex gap-4 bg-card border border-border rounded-2xl p-6"
                >
                  <span className="shrink-0 w-9 h-9 rounded-full grad-btn text-white font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold mb-1.5 text-sm">{step.title}</h3>
                    <p className="text-txt2 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <ProductPurchase product={product} />
          </>
        )}
      </section>

      <Footer />
    </>
  );
}
