import Link from "next/link";
import { services } from "@/lib/constants";
import { serviceIcons } from "@/components/ui/Icons";

export function Services() {
  return (
    <section id="dich-vu" className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-semibold tracking-widest text-accent2">
          DỊCH VỤ CỦA CHÚNG TÔI
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Hệ thống AI thực chiến</h2>
        <p className="text-txt2 leading-relaxed">
          Từ sáng tạo nội dung đến tự động hoá vận hành — giải pháp AI được thiết kế riêng cho
          KOL và doanh nghiệp.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon];
          return (
            <div
              key={service.slug}
              className="card-hover bg-card border border-border rounded-2xl p-6"
            >
              <div className="w-11 h-11 rounded-xl grad-btn flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-txt2 text-sm leading-relaxed mb-4">{service.desc}</p>
              <Link
                href={`/dich-vu/${service.slug}`}
                className="text-accent2 text-sm font-semibold hover:underline"
              >
                Tìm hiểu thêm →
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
