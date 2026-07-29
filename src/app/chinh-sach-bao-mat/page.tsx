import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chính sách bảo mật",
  description:
    "Chính sách bảo mật thông tin khách hàng của KOL AI SYSTEM — Vừng Ali Shop: dữ liệu thu thập, mục đích sử dụng và quyền của bạn.",
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "1. Thông tin chúng tôi thu thập",
    body: [
      "Khi bạn điền form tư vấn, đăng ký nhận quà tặng, đăng ký kho prompt hoặc đăng ký nhận tin qua email trên website, chúng tôi thu thập: họ tên, số điện thoại và/hoặc email bạn cung cấp.",
      "Chúng tôi không thu thập thông tin thanh toán (số thẻ, tài khoản ngân hàng của bạn) qua website — giao dịch chuyển khoản được thực hiện trực tiếp qua ứng dụng ngân hàng của bạn theo thông tin tài khoản công khai tại mục Thanh toán.",
    ],
  },
  {
    heading: "2. Mục đích sử dụng thông tin",
    body: [
      "Thông tin bạn cung cấp chỉ được dùng để: liên hệ tư vấn dịch vụ, gửi quà tặng/tài nguyên miễn phí bạn đã đăng ký, và gửi tin tức/ưu đãi liên quan đến AI nếu bạn đăng ký nhận tin.",
      "Chúng tôi không bán, cho thuê hoặc trao đổi thông tin của bạn với bên thứ ba vì mục đích quảng cáo.",
    ],
  },
  {
    heading: "3. Lưu trữ & bảo mật",
    body: [
      "Dữ liệu được lưu trữ trên hệ thống nội bộ (Google Sheets được bảo vệ quyền truy cập) phục vụ công tác chăm sóc khách hàng của đội ngũ KOL AI SYSTEM / Vừng Ali Shop.",
      "Chúng tôi áp dụng các biện pháp hợp lý để bảo vệ thông tin khỏi truy cập trái phép, mất mát hoặc sử dụng sai mục đích.",
    ],
  },
  {
    heading: "4. Quyền của bạn",
    body: [
      "Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xoá thông tin cá nhân đã cung cấp bất kỳ lúc nào bằng cách liên hệ trực tiếp qua Zalo hoặc email bên dưới.",
      "Bạn có thể ngừng nhận email/tin nhắn tư vấn bất kỳ lúc nào khi thông báo cho chúng tôi.",
    ],
  },
  {
    heading: "5. Liên hệ",
    body: [
      `Mọi thắc mắc về chính sách bảo mật, vui lòng liên hệ ${siteConfig.shopName} qua email ${siteConfig.email} hoặc Zalo ${siteConfig.phoneDisplay}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-16 pb-24 md:pt-24 md:pb-28">
        <span className="text-xs font-semibold tracking-widest text-accent2">PHÁP LÝ</span>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Chính sách bảo mật</h1>
        <p className="text-txt2 leading-relaxed mb-12">
          Cập nhật lần cuối: 01/2026. {siteConfig.shopName} (thương hiệu KOL AI SYSTEM) cam kết
          bảo vệ thông tin cá nhân của khách hàng theo chính sách dưới đây.
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
