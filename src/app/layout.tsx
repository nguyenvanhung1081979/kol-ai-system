import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/constants";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://kol-ai-system.vercel.app";
const title = "KOL AI SYSTEM — Hệ thống AI dành cho KOL & Nhà sáng tạo nội dung";
const description =
  "KOL AI SYSTEM bởi Vừng Ali Shop — Giải pháp AI toàn diện: sáng tạo nội dung, tự động hoá, công cụ AI cho KOL và doanh nghiệp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — KOL AI SYSTEM",
  },
  description,
  keywords: [
    "AI cho KOL",
    "công cụ AI",
    "tự động hoá nội dung",
    "sáng tạo nội dung AI",
    "KOL AI SYSTEM",
    "Vừng Ali Shop",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "KOL AI SYSTEM",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KOL AI SYSTEM",
  alternateName: siteConfig.shopName,
  url: siteUrl,
  description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  sameAs: [siteConfig.fanpageUrl, siteConfig.tiktokUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-bg text-txt font-sans">{children}</body>
    </html>
  );
}
