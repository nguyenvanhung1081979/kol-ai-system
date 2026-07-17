import Link from "next/link";
import { heroStats } from "@/lib/constants";
import { HeroVisual } from "@/components/ui/HeroVisual";

export function Hero() {
  return (
    <section id="top" className="relative glow overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-wide text-accent2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
            HỆ THỐNG AI DÀNH CHO KOL
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Bứt phá nội dung
            <br />
            cùng <span className="grad-text">AI System</span>
          </h1>
          <p className="text-txt2 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Vừng Ali Shop mang đến giải pháp AI toàn diện: sáng tạo nội dung, tự động hoá quy
            trình và bộ công cụ AI thực chiến — giúp KOL và doanh nghiệp tăng trưởng nhanh,
            chuyên nghiệp hơn.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#lien-he" className="grad-btn text-white font-semibold px-7 py-3.5 rounded-full">
              Tư vấn miễn phí
            </Link>
            <Link
              href="/#dich-vu"
              className="btn-ghost border border-border text-txt2 font-semibold px-7 py-3.5 rounded-full"
            >
              Xem dịch vụ
            </Link>
          </div>
        </div>

        <HeroVisual />
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-border pt-10">
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold grad-text">{stat.value}</p>
              <p className="text-txt2 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
