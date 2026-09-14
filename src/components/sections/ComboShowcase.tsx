import Link from "next/link";
import { products } from "@/lib/constants";

export function ComboShowcase() {
  const combos = products.filter((p) => p.category === "combo");
  if (combos.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold tracking-widest text-accent2">GÓI COMBO</span>
        <h2 className="text-2xl md:text-3xl font-extrabold mt-3">
          Mua theo combo, tiết kiệm hơn mua lẻ
        </h2>
        <p className="text-txt2 text-sm mt-3">
          Đóng gói sẵn nhiều sản phẩm liên quan theo từng mục tiêu, nhận trong 1 lần thanh toán.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        {combos.map((combo) => (
          <div
            key={combo.slug}
            className={`card-hover relative flex flex-col rounded-2xl p-7 ${
              combo.comboBadge
                ? "bg-card2 border-2 border-accent md:-translate-y-3"
                : "bg-card border border-border"
            }`}
          >
            {combo.comboBadge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 grad-btn text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                {combo.comboBadge}
              </span>
            )}
            <h3 className="font-bold text-lg mb-2">{combo.name}</h3>
            <p className="text-txt2 text-sm leading-relaxed mb-5">{combo.tagline}</p>

            <ul className="space-y-2.5 text-sm text-txt2 mb-6 flex-1">
              {combo.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="shrink-0 text-accent2 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="mb-6">
              <span className="text-3xl font-extrabold grad-text">{combo.price}</span>
              <span className="text-txt2 text-sm font-medium">{combo.priceSuffix}</span>
              {combo.comboOriginalPrice && (
                <span className="block text-txt2 text-sm line-through mt-1">
                  {combo.comboOriginalPrice}đ
                </span>
              )}
            </p>

            <Link
              href={`/san-pham/${combo.slug}`}
              className={`block text-center font-semibold py-3 rounded-full transition-transform active:scale-95 ${
                combo.comboBadge ? "grad-btn text-white" : "btn-ghost border border-border"
              }`}
            >
              Sở hữu ngay
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
