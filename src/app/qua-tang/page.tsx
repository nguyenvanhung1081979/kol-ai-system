import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { GiftGate } from "@/components/sections/GiftGate";
import { aiGiftToolsCount } from "@/lib/aiGiftTools";

export const metadata: Metadata = {
  title: `Quà tặng: ${aiGiftToolsCount}+ Trợ lý AI miễn phí — KOL AI SYSTEM`,
  description:
    "Nhận miễn phí bộ sưu tập hơn 170 trợ lý AI chuyên biệt theo từng ngành nghề: CSKH, content, kinh doanh, thiết kế, giáo dục và hơn thế nữa.",
};

export default function GiftPage() {
  return (
    <>
      <Header />
      <GiftGate />
      <Footer />
    </>
  );
}
