"use client";

import { useState, type FormEvent } from "react";
import { services, siteConfig } from "@/lib/constants";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Gửi thất bại");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Có lỗi xảy ra, vui lòng thử lại.");
    }
  }

  return (
    <section id="lien-he" className="max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
      <div className="glow bg-card border border-border rounded-3xl p-8 md:p-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Sẵn sàng bứt phá cùng AI?</h2>
          <p className="text-txt2 mb-8">
            Để lại thông tin, đội ngũ KOL AI SYSTEM sẽ liên hệ tư vấn miễn phí trong 24h.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener"
              className="grad-btn text-white font-semibold px-7 py-3.5 rounded-full"
            >
              Chat Zalo: {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.fanpageUrl}
              target="_blank"
              rel="noopener"
              className="btn-ghost border border-border font-semibold px-7 py-3.5 rounded-full"
            >
              Nhắn Fanpage
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-txt2 text-xs mb-1.5 block">
                Họ tên *
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Nguyễn Văn A"
                className="w-full bg-card2 border border-border rounded-xl px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-txt2 text-xs mb-1.5 block">
                Số điện thoại *
              </label>
              <input
                id="phone"
                name="phone"
                required
                type="tel"
                placeholder="09xx xxx xxx"
                className="w-full bg-card2 border border-border rounded-xl px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="text-txt2 text-xs mb-1.5 block">
              Dịch vụ quan tâm
            </label>
            <select
              id="service"
              name="service"
              className="w-full bg-card2 border border-border rounded-xl px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
              defaultValue=""
            >
              <option value="">-- Chọn dịch vụ --</option>
              {services.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Khác">Khác</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="text-txt2 text-xs mb-1.5 block">
              Lời nhắn
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Bạn cần hỗ trợ gì?"
              className="w-full bg-card2 border border-border rounded-xl px-4 py-2.5 text-sm outline-none resize-none transition-colors focus:border-accent"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="grad-btn w-full text-white font-semibold px-7 py-3.5 rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Đang gửi..." : "Gửi thông tin"}
          </button>

          {status === "success" && (
            <p className="text-sm text-center text-green-400 bg-green-400/10 border border-green-400/30 rounded-xl px-4 py-2.5">
              Đã gửi thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-center text-accent2 bg-accent/10 border border-accent/30 rounded-xl px-4 py-2.5">
              {errorMsg} Vui lòng thử lại hoặc nhắn trực tiếp qua Zalo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
