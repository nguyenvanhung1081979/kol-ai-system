"use client";

import { useMemo, useState, useSyncExternalStore, type FormEvent } from "react";
import { videoPromptGroups, videoPromptsCount } from "@/lib/videoPrompts";

const STORAGE_KEY = "prompt_unlocked";

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
          service: "Kho Prompt AI Video",
          message: `Đăng ký nhận kho ${videoPromptsCount}+ prompt tạo video AI miễn phí`,
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
            QUÀ TẶNG MIỄN PHÍ
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Kho <span className="grad-text">{videoPromptsCount}+ Prompt</span> tạo video AI
          </h1>
          <p className="text-txt2 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Prompt dựng sẵn cho video thời trang người mẫu (nam & nữ) và video gia đình phong
            cách Pixar — chỉ cần copy và dán vào công cụ AI video yêu thích. Điền thông tin bên
            dưới để mở khoá.
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
              <label htmlFor="prompt-name" className="text-txt2 text-xs mb-1.5 block">
                Họ tên *
              </label>
              <input
                id="prompt-name"
                name="name"
                required
                placeholder="Nguyễn Văn A"
                className="w-full bg-card2 border border-border rounded-xl px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="prompt-phone" className="text-txt2 text-xs mb-1.5 block">
                Số điện thoại *
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
