import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PromptGate } from "@/components/sections/PromptGate";
import { videoPromptsCount } from "@/lib/videoPrompts";

export const metadata: Metadata = {
  title: `Kho ${videoPromptsCount}+ Prompt tạo video AI miễn phí — KOL AI SYSTEM`,
  description:
    "Nhận miễn phí kho prompt dựng sẵn để tạo video AI: video thời trang người mẫu nam/nữ và video gia đình phong cách Pixar. Copy và dùng ngay.",
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
