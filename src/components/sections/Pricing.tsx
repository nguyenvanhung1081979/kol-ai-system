import { pricingPlans } from "@/lib/constants";

export function Pricing() {
  return (
    <section id="bang-gia" className="bg-card2/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest text-accent2">BẢNG GIÁ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">
            Gói dịch vụ phù hợp mọi nhu cầu
          </h2>
          <p className="text-txt2 leading-relaxed">
            Chọn gói phù hợp với quy mô kênh và mục tiêu tăng trưởng của bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`card-hover relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-card2 border-2 border-accent md:-translate-y-3"
                  : "bg-card border border-border"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 grad-btn text-white text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
              <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
              <p className="text-txt2 text-sm mb-6">{plan.desc}</p>
              <p className="text-4xl font-extrabold mb-6">
                {plan.highlighted ? (
                  <span className="grad-text">{plan.price}</span>
                ) : (
                  plan.price
                )}
                {plan.priceSuffix && (
                  <span className="text-base font-medium text-txt2">{plan.priceSuffix}</span>
                )}
              </p>
              <ul className="space-y-3 text-sm text-txt2 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-accent2">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#lien-he"
                className={`block text-center font-semibold py-3 rounded-full ${
                  plan.highlighted
                    ? "grad-btn text-white"
                    : "btn-ghost border border-border"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
