"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { aiGiftToolsCount } from "@/lib/aiGiftTools";

const SEEN_KEY = "gift_popup_seen";
const UNLOCKED_KEY = "gift_unlocked";

export function GiftPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const alreadySeen = localStorage.getItem(SEEN_KEY) === "true";
    const alreadyUnlocked = localStorage.getItem(UNLOCKED_KEY) === "true";
    if (alreadySeen || alreadyUnlocked) return;

    const timer = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    localStorage.setItem(SEEN_KEY, "true");
    setVisible(false);
    setTimeout(() => setMounted(false), 250);
  }

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5 transition-opacity duration-300"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        background: "rgba(10, 10, 13, 0.7)",
      }}
      onClick={dismiss}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative glow bg-card border border-border rounded-3xl p-8 md:p-10 max-w-sm w-full text-center transition-transform duration-300"
        style={{ transform: visible ? "scale(1)" : "scale(0.92)" }}
      >
        <button
          onClick={dismiss}
          aria-label="Đóng"
          className="btn-ghost absolute top-4 right-4 w-8 h-8 rounded-full border border-border flex items-center justify-center text-txt2"
        >
          ✕
        </button>

        <div className="w-14 h-14 rounded-2xl grad-btn flex items-center justify-center mx-auto mb-5 text-2xl">
          🎁
        </div>
        <span className="inline-block text-xs font-semibold tracking-wide text-accent2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-4">
          QUÀ TẶNG MIỄN PHÍ
        </span>
        <h3 className="text-xl font-extrabold mb-3">
          Nhận ngay <span className="grad-text">{aiGiftToolsCount}+ Trợ lý AI</span>
        </h3>
        <p className="text-txt2 text-sm leading-relaxed mb-6">
          Bộ sưu tập trợ lý AI chuyên biệt theo từng ngành nghề, tuyển chọn sẵn — hoàn toàn miễn
          phí cho bạn.
        </p>
        <Link
          href="/qua-tang"
          onClick={dismiss}
          className="grad-btn block text-white font-semibold px-7 py-3.5 rounded-full"
        >
          Nhận quà miễn phí →
        </Link>
      </div>
    </div>
  );
}
