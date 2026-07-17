"use client";

import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/constants";
import { MenuIcon } from "@/components/ui/Icons";

export function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 rounded-lg grad-btn flex items-center justify-center font-black text-white text-sm">
            AI
          </span>
          <span className="font-extrabold text-base sm:text-lg tracking-tight whitespace-nowrap">
            KOL <span className="grad-text">AI SYSTEM</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-txt2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link hover:text-txt">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={siteConfig.zaloUrl}
            target="_blank"
            rel="noopener"
            className="hidden md:inline-block text-sm font-semibold text-txt2 hover:text-txt transition-colors whitespace-nowrap"
          >
            {siteConfig.phoneDisplay}
          </a>
          <a
            href="#lien-he"
            className="grad-btn text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full whitespace-nowrap"
          >
            Tư vấn ngay
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-lg border border-border btn-ghost"
            aria-label="Mở menu"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        className="lg:hidden overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 ease-in-out"
        style={{
          maxHeight: open ? 400 : 0,
          opacity: open ? 1 : 0,
        }}
      >
        <nav className="flex flex-col px-5 py-4 gap-4 text-sm font-medium text-txt2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close} className="hover:text-txt">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
