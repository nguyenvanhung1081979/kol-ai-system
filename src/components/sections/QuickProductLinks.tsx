import Link from "next/link";
import { quickProductLinks } from "@/lib/constants";
import { productIcons } from "@/components/ui/Icons";

export function QuickProductLinks() {
  return (
    <section className="max-w-5xl mx-auto px-5 md:px-8 pb-14 md:pb-16">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {quickProductLinks.map((item) => {
          const Icon = productIcons[item.icon];
          return (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="card-hover group flex flex-col items-center gap-2.5 w-20 md:w-24"
            >
              <span className="w-14 h-14 md:w-16 md:h-16 rounded-2xl grad-btn flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </span>
              <span className="text-txt2 group-hover:text-txt text-xs font-medium text-center leading-snug transition-colors">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
