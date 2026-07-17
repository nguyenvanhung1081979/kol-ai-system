"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Đăng ký nhận tin",
          service: "Newsletter",
          message: `Email đăng ký: ${email}`,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-green-400 font-medium whitespace-nowrap">
        Đã đăng ký thành công ✓
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      <input
        type="email"
        name="email"
        required
        placeholder="Email của bạn"
        className="bg-card border border-border rounded-full px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent w-full sm:w-64"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="grad-btn shrink-0 text-white text-sm font-semibold px-6 py-2.5 rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Đang gửi..." : "Đăng ký"}
      </button>
      {status === "error" && (
        <p className="text-accent2 text-xs sm:hidden">Có lỗi, vui lòng thử lại.</p>
      )}
    </form>
  );
}
