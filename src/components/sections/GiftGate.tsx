"use client";

import { useMemo, useState, useSyncExternalStore, type FormEvent } from "react";
import { aiGiftCategories, aiGiftToolsCount } from "@/lib/aiGiftTools";

const STORAGE_KEY = "gift_unlocked";

type Status = "idle" | "loading" | "error";

function subscribeNoop() {
  return () => {};
}

function useUnlockedFromStorage() {
  return useSyncExternalStore(
    subscribeNoop,
    () => localStorage.getItem(STORAGE_KEY) === "true",
    () => false
  );
}

export function GiftGate() {
  const unlockedFromStorage = useUnlockedFromStorage();
  const [justUnlocked, setJustUnlocked] = useState(false);
  const unlocked = unlockedFromStorage || justUnlocked;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [query, setQuery] = useState("");

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
          service: "Quà tặng AI Tools",
          message: `Đăng ký nhận quà tặng ${aiGiftToolsCount}+ trợ lý AI miễn phí`,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Gửi thất bại");

      localStorage.setItem(STORAGE_KEY, "true");
      setJustUnlocked(true);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Có lỗi xảy ra, vui lòng thử lại.");
    }
  }

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return aiGiftCategories;
    return aiGiftCategories
      .map((cat) => ({
        ...cat,
        tools: cat.tools.filter((t) => t.name.toLowerCase().includes(q)),
      }))
      .filter((cat) => cat.tools.length > 0);
  }, [query]);

  if (!unlocked) {
    return (
      <section className="relative glow overflow-hidden">
        <div className="max-w-3xl mx-auto px-5 md:px-8 pt-16 pb-10 md:pt-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-wide text-accent2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
            QUÀ TẶNG MIỄN PHÍ
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Trọn bộ <span className="grad-text">{aiGiftToolsCount}+ Trợ lý AI</span> chuyên biệt
          </h1>
          <p className="text-txt2 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Tuyển chọn sẵn theo từng ngành nghề — CSKH, content, kinh doanh, thiết kế, giáo dục và
            hơn thế nữa. Điền thông tin bên dưới để mở khoá toàn bộ danh sách miễn phí.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-5 md:px-8 pb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiGiftCategories.map((cat) => (
              <div
                key={cat.category}
                className="relative bg-card border border-border rounded-2xl p-5 overflow-hidden"
              >
                <p className="font-bold text-sm mb-1">{cat.category}</p>
                <p className="text-txt2 text-xs">{cat.tools.length} công cụ</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-md mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4"
          >
            <div>
              <label htmlFor="gift-name" className="text-txt2 text-xs mb-1.5 block">
                Họ tên *
              </label>
              <input
                id="gift-name"
                name="name"
                required
                placeholder="Nguyễn Văn A"
                className="w-full bg-card2 border border-border rounded-xl px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="gift-phone" className="text-txt2 text-xs mb-1.5 block">
                Số điện thoại *
              </label>
              <input
                id="gift-phone"
                name="phone"
                required
                type="tel"
                placeholder="09xx xxx xxx"
                className="w-full bg-card2 border border-border rounded-xl px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="grad-btn w-full text-white font-semibold px-7 py-3.5 rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Đang mở khoá..." : "Mở khoá miễn phí →"}
            </button>
            {status === "error" && (
              <p className="text-sm text-center text-accent2 bg-accent/10 border border-accent/30 rounded-xl px-4 py-2.5">
                {errorMsg}
              </p>
            )}
            <p className="text-txt2 text-xs text-center">
              Chúng tôi sẽ không spam. Thông tin chỉ dùng để gửi quà tặng và tư vấn khi cần.
            </p>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="relative glow overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 md:px-8 pt-16 pb-10 md:pt-24 text-center">
        <span className="inline-block text-xs font-semibold tracking-wide text-accent2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
          CẢM ƠN BẠN 🎁
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
          Trọn bộ <span className="grad-text">{aiGiftToolsCount}+ Trợ lý AI</span> của bạn
        </h1>
        <p className="text-txt2 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Bấm vào từng công cụ để mở trong tab mới. Lưu trang này lại để dùng dần nhé.
        </p>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm công cụ theo tên..."
          className="w-full max-w-md mx-auto block bg-card2 border border-border rounded-full px-5 py-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-8 pb-20 md:pb-28 space-y-10">
        {filteredCategories.length === 0 && (
          <p className="text-center text-txt2 text-sm">Không tìm thấy công cụ phù hợp.</p>
        )}
        {filteredCategories.map((cat) => (
          <div key={cat.category}>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              {cat.category}
              <span className="text-txt2 text-xs font-normal">({cat.tools.length})</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {cat.tools.map((tool) => (
                <a
                  key={tool.link + tool.name}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover bg-card border border-border rounded-xl px-4 py-3 text-sm font-medium flex items-center justify-between gap-2"
                >
                  <span className="truncate">{tool.name}</span>
                  <span className="shrink-0 text-accent2">↗</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
