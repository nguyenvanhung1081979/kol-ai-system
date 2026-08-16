import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { siteConfig } from "@/lib/constants";

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="relative glow overflow-hidden">
        <div className="max-w-2xl mx-auto px-5 md:px-8 py-24 md:py-32 text-center">
          <p className="grad-text text-6xl md:text-8xl font-black tracking-tight mb-6">404</p>
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
            Không tìm thấy trang bạn cần
          </h1>
          <p className="text-txt2 leading-relaxed mb-10">
            Trang này có thể đã bị xoá hoặc đường dẫn không còn tồn tại. Quay lại trang chủ hoặc
            liên hệ đội ngũ VUNGALISHOP AI để được hỗ trợ.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="grad-btn text-white font-semibold px-7 py-3.5 rounded-full">
              Về trang chủ
            </Link>
            <a
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener"
              className="btn-ghost border border-border font-semibold px-7 py-3.5 rounded-full"
            >
              Chat Zalo hỗ trợ
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
