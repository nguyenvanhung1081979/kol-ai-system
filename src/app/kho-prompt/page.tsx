import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PromptGate } from "@/components/sections/PromptGate";
import { videoPromptsCount } from "@/lib/videoPrompts";

export const metadata: Metadata = {
  title: `Kho ${videoPromptsCount}+ Prompt tạo video AI dành cho khách hàng`,
  description:
    "Kho prompt dựng sẵn để tạo video AI: video thời trang người mẫu nam/nữ và video gia đình phong cách Pixar. Dành riêng cho khách hàng đã mua sản phẩm tại Vừng Ali Shop.",
};

export default function PromptPage() {
  return (
    <>
      <Header />
      <PromptGate />
      <Footer />
    </>
  );
}
