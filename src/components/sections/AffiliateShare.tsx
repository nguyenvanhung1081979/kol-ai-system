"use client";

import { useState, type FormEvent } from "react";
import { CopyIcon } from "@/components/ui/Icons";
import { copyToClipboard } from "@/lib/clipboard";

export function AffiliateShare() {
  const [phone, setPhone] = useState("");
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);

  function handleGenerate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!phone.trim()) return;
    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("ref", phone.trim());
    setLink(url.toString());
    setCopied(false);
  }

  async function handleCopy() {
    await copyToClipboard(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="max-w-md mx-auto mt-6 bg-card border border-border rounded-2xl p-6">
      <p className="font-bold text-sm mb-1">Chia sẻ sản phẩm này, nhận 30% hoa hồng</p>
      <p className="text-txt2 text-xs leading-relaxed mb-4">
        Nhập số điện thoại của bạn để tạo link chia sẻ. Ai mua hàng lần đầu qua link này trong
        vòng 30 ngày, bạn được ghi nhận 30% hoa hồng — không cần đăng ký trước.
      </p>
      <form onSubmit={handleGenerate} className="flex gap-2 mb-3">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          type="tel"
          placeholder="SĐT của bạn"
          className="flex-1 min-w-0 bg-card2 border border-border rounded-xl px-3 py-2 text-sm outline-none transition-colors focus:border-accent"
        />
        <button
          type="submit"
          className="btn-ghost shrink-0 border border-border text-xs font-semibold px-4 py-2 rounded-xl transition-transform active:scale-95"
        >
          Tạo link
        </button>
      </form>
      {link && (
        <div className="flex items-center gap-2 bg-card2 border border-border rounded-xl px-3 py-2">
          <p className="flex-1 min-w-0 truncate text-xs text-txt2">{link}</p>
          <button
            onClick={handleCopy}
            className={`shrink-0 btn-ghost border border-border text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-transform ${
              copied ? "scale-95" : ""
            }`}
          >
            <CopyIcon className="w-3.5 h-3.5" />
            <span>{copied ? "Đã sao chép ✓" : "Sao chép"}</span>
          </button>
        </div>
      )}
    </div>
  );
}
