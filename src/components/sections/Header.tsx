"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";
import { MenuIcon } from "@/components/ui/Icons";

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function DesktopNavDropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="nav-link hover:text-txt flex items-center gap-1"
        aria-expanded={open}
      >
        {label}
        <ChevronIcon
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-[opacity,transform] duration-200 ease-out"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translate(-50%, 0)" : "translate(-50%, -6px)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div className="bg-card border border-border rounded-xl py-2 min-w-[9rem] shadow-xl">
          {items.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-txt2 hover:text-txt hover:bg-card2 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/#top" className="flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 rounded-lg grad-btn flex items-center justify-center font-black text-white text-sm">
            AI
          </span>
          <span className="font-extrabold text-base sm:text-lg tracking-tight whitespace-nowrap">
            KOL <span className="grad-text">AI SYSTEM</span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-txt2 whitespace-nowrap">
          {navLinks.map((link) =>
            link.children ? (
              <DesktopNavDropdown key={link.label} label={link.label} items={link.children} />
            ) : (
              <Link key={link.href} href={link.href} className="nav-link hover:text-txt">
                {link.label}
              </Link>
            )
          )}
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
          <Link
            href="/#lien-he"
            className="grad-btn text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full whitespace-nowrap"
          >
            Tư vấn ngay
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-lg border border-border btn-ghost"
            aria-label="Mở menu"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        className="xl:hidden overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 ease-in-out"
        style={{
          maxHeight: open ? 480 : 0,
          opacity: open ? 1 : 0,
        }}
      >
        <nav className="flex flex-col px-5 py-4 gap-4 text-sm font-medium text-txt2">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className="text-txt font-semibold mb-2">{link.label}</p>
                <div className="flex flex-col gap-3 pl-3 border-l border-border">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={close}
                      className="hover:text-txt"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} onClick={close} className="hover:text-txt">
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
