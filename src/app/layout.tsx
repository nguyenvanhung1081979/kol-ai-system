import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KOL AI SYSTEM — Hệ thống AI dành cho KOL & Nhà sáng tạo nội dung",
  description:
    "KOL AI SYSTEM bởi Vừng Ali Shop — Giải pháp AI toàn diện: sáng tạo nội dung, tự động hoá, công cụ AI cho KOL và doanh nghiệp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} antialiased`}>
      <body className="bg-bg text-txt font-sans">{children}</body>
    </html>
  );
}
