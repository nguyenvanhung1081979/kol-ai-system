import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { siteConfig, bankInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng",
  description:
    "Điều khoản sử dụng dịch vụ của KOL AI SYSTEM — Vừng Ali Shop: phạm vi dịch vụ, thanh toán, đổi/huỷ gói và trách nhiệm các bên.",
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "1. Phạm vi dịch vụ",
    body: [
      "KOL AI SYSTEM (thương hiệu bởi " +
        siteConfig.shopName +
        ") cung cấp các dịch vụ: sáng tạo nội dung AI, tự động hoá quy trình, bộ công cụ AI Tools và tư vấn triển khai AI cho KOL, nhà sáng tạo nội dung và doanh nghiệp.",
      "Nội dung, tài nguyên miễn phí (quà tặng AI Tools, kho prompt) được cung cấp nhằm mục đích tham khảo và hỗ trợ công việc, không đi kèm cam kết kết quả cụ thể ngoài các thoả thuận dịch vụ có phí.",
    ],
  },
  {
    heading: "2. Đăng ký & sử dụng",
    body: [
      "Khi điền form đăng ký nhận tư vấn hoặc tài nguyên miễn phí, bạn cam kết cung cấp thông tin chính xác để chúng tôi có thể liên hệ hỗ trợ.",
      "Việc sử dụng website đồng nghĩa bạn đồng ý với Điều khoản sử dụng và Chính sách bảo mật của chúng tôi.",
    ],
  },
  {
    heading: "3. Thanh toán",
    body: [
      `Đối với các gói dịch vụ có phí, thanh toán được thực hiện qua chuyển khoản ngân hàng theo thông tin: ${bankInfo.bankName} — ${bankInfo.accountNumber} — ${bankInfo.accountName}, hoặc theo thoả thuận cụ thể với đội ngũ tư vấn.`,
      "Sau khi nhận được thanh toán, đội ngũ sẽ liên hệ xác nhận và triển khai theo lộ trình đã thống nhất.",
    ],
  },
  {
    heading: "4. Đổi, huỷ gói dịch vụ",
    body: [
      "Khách hàng có thể yêu cầu nâng cấp, hạ cấp hoặc huỷ gói dịch vụ đang sử dụng bằng cách liên hệ trực tiếp đội ngũ hỗ trợ qua Zalo hoặc email.",
      "Chính sách hoàn tiền (nếu có) được áp dụng theo thoả thuận cụ thể tại thời điểm đăng ký từng gói dịch vụ, do tính chất tuỳ biến của dịch vụ AI triển khai theo yêu cầu.",
    ],
  },
  {
    heading: "5. Trách nhiệm các bên",
    body: [
      "KOL AI SYSTEM nỗ lực đảm bảo chất lượng tư vấn và triển khai theo đúng cam kết trong từng gói dịch vụ, nhưng không chịu trách nhiệm với kết quả kinh doanh phát sinh từ các yếu tố ngoài phạm vi dịch vụ đã cung cấp.",
      "Khách hàng có trách nhiệm cung cấp thông tin, tài nguyên cần thiết (nếu có) để đội ngũ triển khai đúng tiến độ.",
    ],
  },
  {
    heading: "6. Thay đổi điều khoản",
    body: [
      "Điều khoản này có thể được cập nhật theo thời gian để phù hợp với thực tế vận hành. Phiên bản mới nhất luôn được đăng tải tại trang này.",
      `Mọi thắc mắc, vui lòng liên hệ ${siteConfig.email} hoặc Zalo ${siteConfig.phoneDisplay}.`,
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-16 pb-24 md:pt-24 md:pb-28">
        <span className="text-xs font-semibold tracking-widest text-accent2">PHÁP LÝ</span>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Điều khoản sử dụng</h1>
        <p className="text-txt2 leading-relaxed mb-12">
          Cập nhật lần cuối: 01/2026. Vui lòng đọc kỹ các điều khoản dưới đây trước khi sử dụng
          dịch vụ của {siteConfig.shopName}.
        </p>
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-lg font-bold mb-3">{s.heading}</h2>
              <div className="space-y-3 text-txt2 text-sm leading-relaxed">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
