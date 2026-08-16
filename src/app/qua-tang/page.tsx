import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { GiftGate } from "@/components/sections/GiftGate";
import { aiGiftToolsCount } from "@/lib/aiGiftTools";

export const metadata: Metadata = {
  title: `Quà tặng: ${aiGiftToolsCount}+ Trợ lý AI dành cho khách hàng`,
  description: `Bộ sưu tập hơn ${aiGiftToolsCount} trợ lý AI chuyên biệt theo từng ngành nghề: CSKH, content, kinh doanh, thiết kế, giáo dục và hơn thế nữa — dành riêng cho khách hàng đã mua sản phẩm tại Vừng Ali Shop.`,
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
