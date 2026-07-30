import Link from "next/link";
import { products } from "@/lib/constants";
import { productIcons } from "@/components/ui/Icons";

export function Products() {
  return (
    <section id="san-pham" className="bg-card2/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest text-accent2">SẢN PHẨM</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">
            Công cụ AI sẵn sàng dùng ngay
          </h2>
          <p className="text-txt2 leading-relaxed">
            Skill và công cụ AI trọn gói, mua một lần dùng lâu dài — không cần chờ triển khai.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-txt2 text-sm leading-relaxed mb-5 flex-1">{product.tagline}</p>
                <p className="mb-5">
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
      </div>
    </section>
  );
}
