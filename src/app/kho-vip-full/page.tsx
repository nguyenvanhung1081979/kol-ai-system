import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { VipContentFull } from "@/components/sections/VipContentFull";

export const metadata: Metadata = {
  title: "Kho AI Kinh Doanh VIP — Bản đầy đủ",
  robots: { index: false, follow: false },
};

export default function KhoVipFullPage() {
  return (
    <>
      <Header />
      <VipContentFull />
      <Footer />
    </>
  );
}
