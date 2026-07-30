import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { products } from "@/lib/constants";
import { productIcons } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description:
    "Skill và công cụ AI trọn gói từ KOL AI SYSTEM: chỉnh sửa ảnh AI, edit video AI, Omni Flow Canvas — mua một lần, dùng lâu dài.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <section className="relative glow overflow-hidden">
        <div className="max-w-3xl mx-auto px-5 md:px-8 pt-16 pb-14 md:pt-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-wide text-accent2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
            SẢN PHẨM
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Công cụ <span className="grad-text">AI trọn gói</span>, dùng ngay
          </h1>
          <p className="text-txt2 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Mua một lần, sử dụng lâu dài — không cần chờ triển khai, không ràng buộc gói thuê bao.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const Icon = productIcons[product.icon];
            return (
              <div
                key={product.slug}
                className="card-hover flex flex-col bg-card border border-border rounded-2xl p-6"
              >
                <div className="w-11 h-11 rounded-xl grad-btn flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-bold text-lg mb-2">{product.name}</h2>
                <p className="text-txt2 text-sm leading-relaxed mb-5 flex-1">{product.tagline}</p>
                <p className="mb-5">
                  {product.originalPrice && (
                    <span className="text-txt2 text-sm line-through mr-1.5">
                      {product.originalPrice}đ
                    </span>
                  )}
                  <span className="text-2xl font-extrabold grad-text">{product.price}</span>
                  <span className="text-txt2 text-sm font-medium">{product.priceSuffix}</span>
                </p>
                <Link
                  href={`/san-pham/${product.slug}`}
                  className="grad-btn text-white text-center font-semibold py-3 rounded-full"
                >
                  Xem chi tiết →
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
