import { aiPartnerBrands } from "@/lib/constants";

export function BrandMarquee() {
  const items = [...aiPartnerBrands, ...aiPartnerBrands];

  return (
    <section className="bg-card2/40 border-y border-border py-10 md:py-12 overflow-hidden">
      <h2 className="text-center text-lg md:text-2xl font-extrabold tracking-tight mb-8 px-5">
        Công cụ <span className="grad-text">AI</span>{" "}
        tôi sử dụng &amp; giới thiệu
      </h2>
      <div className="overflow-hidden">
        <div className="flex w-max gap-4 marquee-track">
          {items.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="card-hover shrink-0 flex items-center gap-2.5 bg-card border border-border rounded-full pl-2 pr-5 py-2"
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-extrabold text-white shrink-0"
                style={{ background: brand.color }}
              >
                {brand.mark}
              </span>
              <span className="font-semibold text-sm whitespace-nowrap">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
