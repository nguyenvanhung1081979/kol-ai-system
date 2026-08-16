"use client";

import Link from "next/link";
import { useMemo, useState, useSyncExternalStore, type FormEvent } from "react";
import { videoPromptGroups, videoPromptsCount } from "@/lib/videoPrompts";

// v2: đổi từ "điền thông tin nhận miễn phí" sang "xác thực đã mua hàng" — đổi
// tên key để những lượt unlock kiểu cũ (miễn phí) không còn hiệu lực nữa.
const STORAGE_KEY = "prompt_unlocked_v2";

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

function PromptCard({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const temp = document.createElement("textarea");
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="card-hover bg-card border border-border rounded-xl p-4">
      <p className="text-txt2 text-sm leading-relaxed mb-3">{text}</p>
      <button
        onClick={handleCopy}
        className={`btn-ghost border border-border text-xs font-semibold px-3.5 py-1.5 rounded-full ${
          copied ? "scale-95" : ""
        }`}
      >
        {copied ? "Đã sao chép ✓" : "Sao chép prompt"}
      </button>
    </div>
  );
}

export function PromptGate() {
  const unlockedFromStorage = useUnlockedFromStorage();
  const [justUnlocked, setJustUnlocked] = useState(false);
  const unlocked = unlockedFromStorage || justUnlocked;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [notCustomer, setNotCustomer] = useState(false);
  const [query, setQuery] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") ?? "").trim();

    setStatus("loading");
    setErrorMsg("");
    setNotCustomer(false);

    try {
      const res = await fetch("/api/customer-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Kiểm tra thất bại");

      if (!json.isCustomer) {
        setNotCustomer(true);
        setStatus("idle");
        return;
      }

      localStorage.setItem(STORAGE_KEY, "true");
      setJustUnlocked(true);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Có lỗi xảy ra, vui lòng thử lại.");
    }
  }

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return videoPromptGroups;
    return videoPromptGroups
      .map((g) => ({
        ...g,
        categories: g.categories
          .map((c) => ({
            ...c,
            prompts: c.prompts.filter(
              (p) => p.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)
            ),
          }))
          .filter((c) => c.prompts.length > 0),
      }))
      .filter((g) => g.categories.length > 0);
  }, [query]);

  if (!unlocked) {
    return (
      <section className="relative glow overflow-hidden">
        <div className="max-w-3xl mx-auto px-5 md:px-8 pt-16 pb-10 md:pt-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-wide text-accent2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
            QUÀ TẶNG DÀNH CHO KHÁCH HÀNG
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Kho <span className="grad-text">{videoPromptsCount}+ Prompt</span> tạo video AI
          </h1>
          <p className="text-txt2 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Prompt dựng sẵn cho video thời trang người mẫu (nam & nữ) và video gia đình phong
            cách Pixar — chỉ cần copy và dán vào công cụ AI video yêu thích. Dành riêng cho khách
            hàng đã mua sản phẩm tại Vừng Ali Shop — nhập số điện thoại đã dùng khi mua hàng để mở
            khoá.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-5 md:px-8 pb-10">
          <div className="grid sm:grid-cols-3 gap-4">
            {videoPromptGroups.map((g) => {
              const count = g.categories.reduce((s, c) => s + c.prompts.length, 0);
              return (
                <div
                  key={g.id}
                  className="relative bg-card border border-border rounded-2xl p-5 overflow-hidden"
                >
                  <p className="font-bold text-sm mb-1">{g.title}</p>
                  <p className="text-txt2 text-xs">{count} prompt</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-md mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4"
          >
            <div>
              <label htmlFor="prompt-phone" className="text-txt2 text-xs mb-1.5 block">
                Số điện thoại đã dùng khi mua hàng *
              </label>
              <input
                id="prompt-phone"
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
              {status === "loading" ? "Đang kiểm tra..." : "Kiểm tra đơn hàng →"}
            </button>
            {status === "error" && (
              <p className="text-sm text-center text-accent2 bg-accent/10 border border-accent/30 rounded-xl px-4 py-2.5">
                {errorMsg}
              </p>
            )}
            {notCustomer && (
              <p className="text-sm text-center text-accent2 bg-accent/10 border border-accent/30 rounded-xl px-4 py-2.5">
                Bạn chưa có đơn hàng nào tại Vừng Ali Shop.{" "}
                <Link href="/san-pham" className="underline font-semibold">
                  Xem sản phẩm →
                </Link>
              </p>
            )}
            <p className="text-txt2 text-xs text-center">
              Quà tặng dành riêng cho khách hàng đã mua sản phẩm — không phát sinh phí thêm.
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
          Kho <span className="grad-text">{videoPromptsCount}+ Prompt</span> của bạn
        </h1>
        <p className="text-txt2 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Bấm &quot;Sao chép prompt&quot; rồi dán vào công cụ AI video bạn đang dùng.
        </p>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm prompt theo từ khoá..."
          aria-label="Tìm prompt theo từ khoá"
          className="w-full max-w-md mx-auto block bg-card2 border border-border rounded-full px-5 py-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-8 pb-20 md:pb-28 space-y-14">
        {filteredGroups.length === 0 && (
          <p className="text-center text-txt2 text-sm">Không tìm thấy prompt phù hợp.</p>
        )}
        {filteredGroups.map((g) => (
          <div key={g.id}>
            <div className="mb-6">
              <h2 className="text-xl font-extrabold">{g.title}</h2>
              <p className="text-txt2 text-xs mt-1">{g.note}</p>
            </div>
            <div className="space-y-8">
              {g.categories.map((c) => (
                <div key={c.category}>
                  <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                    {c.category}
                    <span className="text-txt2 text-xs font-normal">({c.prompts.length})</span>
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {c.prompts.map((p, i) => (
                      <PromptCard key={i} text={p} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
