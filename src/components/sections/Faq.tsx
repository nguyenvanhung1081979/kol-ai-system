"use client";

import { useState } from "react";
import { faqs } from "@/lib/constants";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-widest text-accent2">HỎI ĐÁP</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3">Anh/chị hay hỏi gì?</h2>
      </div>

      <div className="space-y-3">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.q}
              data-open={isOpen}
              className="faq-item bg-card border border-border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold"
              >
                <span>{item.q}</span>
                <span className="faq-icon shrink-0 text-accent2 text-xl leading-none">+</span>
              </button>
              <div
                className="px-5 text-txt2 text-sm leading-relaxed overflow-hidden transition-[max-height] duration-300 ease-in-out"
                style={{ maxHeight: isOpen ? 200 : 0 }}
              >
                <p className="pb-5">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
