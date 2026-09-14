"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products, type ProductCategory } from "@/lib/constants";
import { productIcons } from "@/components/ui/Icons";

const CATEGORY_TABS: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "Tất cả sản phẩm" },
  { id: "photo", label: "Ảnh & Poster" },
  { id: "video", label: "Video AI" },
  { id: "content", label: "Nội dung & Kinh doanh" },
  { id: "vip", label: "Tài nguyên VIP" },
];

// Combo đã có khối riêng (ComboShowcase) ngay phía trên — không lặp lại ở đây.
const singleProducts = products.filter((p) => p.category !== "combo");

export function ProductsCatalog() {
  const [activeTab, setActiveTab] = useState<ProductCategory | "all">("all");

  const filtered = useMemo(() => {
    if (activeTab === "all") return singleProducts;
    return singleProducts.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORY_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
              activeTab === tab.id
                ? "grad-btn text-white"
                : "bg-card border border-border text-txt2 hover:text-txt hover:border-accent/40"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => {
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
              <p className="text-txt2 text-sm leading-relaxed mb-4">{product.tagline}</p>
              <ul className="space-y-1.5 mb-5 flex-1">
                {product.features.slice(0, 2).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs text-txt2">
                    <span className="shrink-0 text-accent2 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-5">
                <span className="text-2xl font-extrabold grad-text">{product.price}</span>
                <span className="text-txt2 text-sm font-medium">{product.priceSuffix}</span>
              </p>
              <Link
                href={`/san-pham/${product.slug}`}
                className="grad-btn text-white text-center font-semibold py-3 rounded-full transition-transform active:scale-95"
              >
                Xem chi tiết →
              </Link>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-txt2 text-sm mt-10">Không có sản phẩm phù hợp.</p>
      )}
    </section>
  );
}
