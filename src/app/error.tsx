"use client";

import { siteConfig } from "@/lib/constants";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center">
        <p className="grad-text text-5xl font-black tracking-tight mb-6">Rất tiếc</p>
        <h1 className="text-2xl font-extrabold mb-4">Đã có lỗi xảy ra</h1>
        <p className="text-txt2 leading-relaxed mb-10">
          Có sự cố ngoài ý muốn khi tải trang. Vui lòng thử lại hoặc liên hệ đội ngũ hỗ trợ nếu
          lỗi vẫn tiếp diễn.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="grad-btn text-white font-semibold px-7 py-3.5 rounded-full"
          >
            Thử lại
          </button>
          <a
            href={siteConfig.zaloUrl}
            target="_blank"
            rel="noopener"
            className="btn-ghost border border-border font-semibold px-7 py-3.5 rounded-full"
          >
            Chat Zalo hỗ trợ
          </a>
        </div>
      </div>
    </section>
  );
}
