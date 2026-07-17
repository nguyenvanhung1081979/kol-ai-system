import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";
import { FacebookIcon, TiktokIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-10 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link href="/#top" className="flex items-center gap-2 mb-4">
            <span className="w-9 h-9 rounded-lg grad-btn flex items-center justify-center font-black text-white text-sm">
              AI
            </span>
            <span className="font-extrabold text-lg">
              KOL <span className="grad-text">AI SYSTEM</span>
            </span>
          </Link>
          <p className="text-txt2 text-sm leading-relaxed max-w-sm mb-5">
            Thương hiệu bởi <strong className="text-txt">{siteConfig.shopName}</strong> — giải
            pháp AI toàn diện dành cho KOL, nhà sáng tạo nội dung và doanh nghiệp.
          </p>
          <div className="flex gap-3">
            <a
              href={siteConfig.fanpageUrl}
              target="_blank"
              rel="noopener"
              className="social-icon w-10 h-10 rounded-full border border-border flex items-center justify-center"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.tiktokUrl}
              target="_blank"
              rel="noopener"
              className="social-icon w-10 h-10 rounded-full border border-border flex items-center justify-center"
              aria-label="Tiktok"
            >
              <TiktokIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Liên kết</h4>
          <ul className="space-y-3 text-sm text-txt2">
            {navLinks
              .filter((l) => l.href !== "/#faq" && l.href !== "/#lien-he")
              .map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-txt transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Liên hệ</h4>
          <ul className="space-y-3 text-sm text-txt2">
            <li>{siteConfig.shopName}</li>
            <li>
              <a
                href={siteConfig.zaloUrl}
                target="_blank"
                rel="noopener"
                className="hover:text-txt transition-colors"
              >
                Zalo: {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-txt transition-colors"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-txt2">
          <p>© 2026 KOL AI SYSTEM — {siteConfig.shopName}. All rights reserved.</p>
          <p>Made with AI ❤ for KOL Vietnam</p>
        </div>
      </div>
    </footer>
  );
}
