import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { services } from "@/lib/constants";
import { serviceIcons } from "@/components/ui/Icons";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — KOL AI SYSTEM`,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.icon];

  return (
    <>
      <Header />

      <section className="relative glow overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 md:px-8 pt-16 pb-16 md:pt-24 md:pb-20 text-center">
          <div className="w-16 h-16 rounded-2xl grad-btn flex items-center justify-center mx-auto mb-6">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <span className="inline-block text-xs font-semibold tracking-wide text-accent2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
            DỊCH VỤ
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            {service.title}
          </h1>
          <p className="text-txt2 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {service.longDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#lien-he"
              className="grad-btn text-white font-semibold px-7 py-3.5 rounded-full"
            >
              Tư vấn miễn phí
            </Link>
            <Link
              href="/#dich-vu"
              className="btn-ghost border border-border text-txt2 font-semibold px-7 py-3.5 rounded-full"
            >
              Xem tất cả dịch vụ
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-accent2">LỢI ÍCH</span>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-3">
            Vì sao nên chọn dịch vụ này?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {service.benefits.map((benefit) => (
            <div
              key={benefit}
              className="card-hover flex gap-3 bg-card border border-border rounded-2xl p-5"
            >
              <span className="shrink-0 text-accent2 font-bold">✓</span>
              <p className="text-txt2 text-sm leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card2/40 border-y border-border">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-accent2">QUY TRÌNH</span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-3">Triển khai như thế nào?</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {service.process.map((step, index) => (
              <div
                key={step.title}
                className="card-hover flex gap-4 bg-card border border-border rounded-2xl p-6"
              >
                <span className="shrink-0 w-9 h-9 rounded-full grad-btn text-white font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold mb-1.5">{step.title}</h3>
                  <p className="text-txt2 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
