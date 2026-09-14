import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Faq } from "@/components/sections/Faq";
import { ProductsCatalog } from "@/components/sections/ProductsCatalog";
import { heroStats } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description:
    "Skill và công cụ AI trọn gói từ VUNGALISHOP AI: chỉnh sửa ảnh AI, edit video AI, Omni Flow Canvas, Kho AI Kinh Doanh VIP — mua một lần, dùng lâu dài.",
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

        <div className="max-w-4xl mx-auto px-5 md:px-8 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-border pt-10">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-extrabold grad-text">{stat.value}</p>
                <p className="text-txt2 text-xs md:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductsCatalog />
      <Faq />
      <Footer />
    </>
  );
}
