import Link from "next/link";
import { products } from "@/lib/constants";

// Mỗi combo 1 tông màu riêng để phân biệt trực quan — chỉ áp dụng cho khối
// Combo này (không đổi bảng màu chung của trang). Lặp lại nếu có > 3 combo.
const THEMES = [
  {
    badge: "bg-amber-400 text-black",
    border: "border-amber-400",
    audience: "text-amber-400",
    price: "text-amber-400",
    button: "bg-amber-400 hover:bg-amber-300 text-black",
  },
  {
    badge: "bg-zinc-200 text-black",
    border: "border-zinc-500",
    audience: "text-zinc-300",
    price: "text-zinc-100",
    button: "bg-zinc-100 hover:bg-white text-black",
  },
  {
    badge: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    border: "border-purple-500",
    audience: "text-purple-400",
    price: "text-purple-400",
    button: "bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white",
  },
];

export function ComboShowcase() {
  const combos = products.filter((p) => p.category === "combo");
  if (combos.length === 0) return null;

  const maxSavingPercent = Math.max(
    ...combos.map((c) => {
      const original = Number(c.comboOriginalPrice?.replace(/\D/g, "") ?? 0);
      if (!original) return 0;
      return Math.round(((original - c.amount) / original) * 100);
    })
  );

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold tracking-widest text-accent2">GÓI COMBO</span>
        <h2 className="text-2xl md:text-3xl font-extrabold mt-3">
          Gói combo toàn diện — tiết kiệm đến {maxSavingPercent}%
        </h2>
        <p className="text-txt2 text-sm mt-3">
          Đóng gói sẵn nhiều sản phẩm liên quan theo từng mục tiêu, nhận trong 1 lần thanh toán.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        {combos.map((combo, index) => {
          const theme = THEMES[index % THEMES.length];
          return (
            <div
              key={combo.slug}
              className={`card-hover relative flex flex-col rounded-2xl p-7 bg-card2 border-2 ${theme.border}`}
            >
              {combo.comboAudience && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap ${theme.badge}`}
                >
                  {combo.comboAudience}
                </span>
              )}
              <h3 className="font-bold text-lg mb-2 mt-2">{combo.name}</h3>
              <p className="text-txt2 text-sm leading-relaxed mb-5">{combo.tagline}</p>

              <ul className="space-y-2.5 text-sm text-txt2 mb-6 flex-1">
                {combo.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className={`shrink-0 font-bold ${theme.audience}`}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-6">
                <span className={`text-3xl font-extrabold ${theme.price}`}>{combo.price}</span>
                <span className="text-txt2 text-sm font-medium">{combo.priceSuffix}</span>
                {combo.comboOriginalPrice && (
                  <span className="block text-txt2 text-sm line-through mt-1">
                    {combo.comboOriginalPrice}đ
                  </span>
                )}
              </p>

              <Link
                href={`/san-pham/${combo.slug}`}
                className={`block text-center font-semibold py-3 rounded-full transition-transform active:scale-95 ${theme.button}`}
              >
                Sở hữu ngay
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
