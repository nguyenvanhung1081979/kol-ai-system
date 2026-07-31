import Link from "next/link";
import { products } from "@/lib/constants";
import { productIcons } from "./Icons";

export function HeroVisual() {
  const [basic1, basic2, basic3, vip] = products;
  const featured = [basic1, basic2, basic3];
  const VipIcon = productIcons[vip.icon];

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="glow absolute inset-0 rounded-3xl" />
      <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur overflow-hidden p-5 sm:p-6">
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" aria-hidden="true">
          <defs>
            <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#F5F5F7" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute w-40 h-40 rounded-full bg-accent/20 blur-3xl -top-10 -left-10" />

        <div className="relative">
          <p className="text-xs font-semibold tracking-wide text-accent2 mb-4">
            SẢN PHẨM NỔI BẬT
          </p>
          <div className="space-y-2.5">
            {featured.map((product) => {
              const Icon = productIcons[product.icon];
              return (
                <Link
                  key={product.slug}
                  href={`/san-pham/${product.slug}`}
                  className="card-hover flex items-center gap-3 bg-card2/80 border border-border rounded-xl px-3.5 py-3"
                >
                  <span className="w-9 h-9 rounded-lg grad-btn flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5 text-white" />
                  </span>
                  <span className="min-w-0 flex-1 text-sm font-semibold truncate">
                    {product.name}
                  </span>
                  <span className="text-accent2 text-sm font-bold shrink-0">{product.price}đ</span>
                </Link>
              );
            })}
            <Link
              href={`/san-pham/${vip.slug}`}
              className="card-hover flex items-center gap-3 bg-accent/10 border border-accent/40 rounded-xl px-3.5 py-3"
            >
              <span className="w-9 h-9 rounded-lg grad-btn flex items-center justify-center shrink-0">
                <VipIcon className="w-4.5 h-4.5 text-white" />
              </span>
              <span className="min-w-0 flex-1 text-sm font-semibold truncate">{vip.name}</span>
              <span className="text-accent2 text-sm font-bold shrink-0">{vip.price}đ</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
