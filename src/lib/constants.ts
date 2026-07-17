export const siteConfig = {
  name: "KOL AI SYSTEM",
  shopName: "Vừng Ali Shop",
  phone: "0912919686",
  phoneDisplay: "0912 919 686",
  zaloUrl: "https://zalo.me/0912919686",
  email: "hungvannguyen@gmail.com",
  fanpageUrl: "https://www.facebook.com/vungalishop",
  tiktokUrl: "https://www.tiktok.com/@vungalishop",
};

export const bankInfo = {
  bankName: "Vietcombank",
  bankBin: "970436",
  accountNumber: "0541000305083",
  accountName: "NGUYEN VAN HUNG",
};

export const navLinks = [
  { label: "Dịch vụ", href: "#dich-vu" },
  { label: "Bảng giá", href: "#bang-gia" },
  { label: "Thanh toán", href: "#thanh-toan" },
  { label: "Công cụ AI", href: "#cong-cu" },
  { label: "Kiến thức", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Liên hệ", href: "#lien-he" },
];

export const heroStats = [
  { value: "500+", label: "Khách hàng tin dùng" },
  { value: "50+", label: "Dịch vụ & công cụ AI" },
  { value: "5", label: "Năm kinh nghiệm" },
  { value: "24/7", label: "Hỗ trợ tận tâm" },
];

export type ServiceIcon = "content" | "automation" | "tools" | "consult";

export const services: { icon: ServiceIcon; title: string; desc: string }[] = [
  {
    icon: "content",
    title: "Sáng tạo nội dung AI",
    desc: "Viết kịch bản, caption, hình ảnh AI phục vụ sản xuất nội dung hàng loạt, đúng chất riêng của bạn.",
  },
  {
    icon: "automation",
    title: "Tự động hoá quy trình",
    desc: "Xây dựng workflow AI tự động cho đăng bài, chăm sóc khách hàng và vận hành kênh.",
  },
  {
    icon: "tools",
    title: "Bộ công cụ AI Tools",
    desc: "Tuyển chọn & tối ưu công cụ AI hàng đầu, sẵn sàng ứng dụng ngay vào công việc.",
  },
  {
    icon: "consult",
    title: "Tư vấn triển khai AI",
    desc: "Đồng hành cùng đội ngũ, tư vấn lộ trình ứng dụng AI phù hợp với mục tiêu kinh doanh.",
  },
];

export const pricingPlans = [
  {
    name: "Cơ bản",
    desc: "Dành cho KOL mới bắt đầu",
    price: "1.990.000",
    priceSuffix: "đ/tháng",
    highlighted: false,
    features: ["5 công cụ AI cơ bản", "Hỗ trợ qua email", "Báo cáo hàng tháng"],
    cta: "Chọn gói này",
  },
  {
    name: "Chuyên nghiệp",
    desc: "Dành cho KOL & team nội dung",
    price: "4.990.000",
    priceSuffix: "đ/tháng",
    highlighted: true,
    badge: "PHỔ BIẾN NHẤT",
    features: [
      "Toàn bộ công cụ AI",
      "Tự động hoá quy trình",
      "Hỗ trợ ưu tiên 24/7",
      "Tư vấn chiến lược riêng",
    ],
    cta: "Chọn gói này",
  },
  {
    name: "Doanh nghiệp",
    desc: "Giải pháp theo yêu cầu riêng",
    price: "Liên hệ",
    priceSuffix: "",
    highlighted: false,
    features: ["Triển khai AI tuỳ chỉnh", "Đội ngũ chuyên trách", "Cam kết SLA"],
    cta: "Liên hệ tư vấn",
  },
];

export const aiTools = [
  {
    rank: 1,
    name: "AI Content Studio",
    desc: "Tạo caption, kịch bản video tự động theo phong cách cá nhân",
  },
  {
    rank: 2,
    name: "AutoFlow AI",
    desc: "Tự động hoá đăng bài đa nền tảng và chăm sóc khách hàng",
  },
  {
    rank: 3,
    name: "Visual AI Pro",
    desc: "Tạo hình ảnh, thumbnail chuẩn thương hiệu chỉ trong vài giây",
  },
];

export const blogPosts = [
  {
    tag: "AI",
    title: "5 xu hướng AI content năm 2026",
    desc: "Những thay đổi lớn trong cách KOL sáng tạo nội dung với sự hỗ trợ của AI.",
  },
  {
    tag: "GPT",
    title: "Ứng dụng AI vào quy trình vận hành",
    desc: "Hướng dẫn tự động hoá các tác vụ lặp lại giúp tiết kiệm thời gian.",
  },
  {
    tag: "KOL",
    title: "Case study: Tăng trưởng nhờ AI",
    desc: "Câu chuyện thực tế từ khách hàng đã triển khai hệ thống AI cùng chúng tôi.",
  },
];

export const faqs = [
  {
    q: "KOL AI SYSTEM phù hợp với ai?",
    a: "Phù hợp với KOL, nhà sáng tạo nội dung, và doanh nghiệp muốn ứng dụng AI để tăng tốc sản xuất nội dung và tự động hoá vận hành.",
  },
  {
    q: "Thời gian triển khai mất bao lâu?",
    a: "Tuỳ gói dịch vụ, thời gian triển khai thường từ 3–7 ngày làm việc sau khi thống nhất yêu cầu.",
  },
  {
    q: "Có hỗ trợ dùng thử trước khi mua không?",
    a: "Có. Bạn có thể đăng ký tư vấn miễn phí và trải nghiệm demo trước khi quyết định.",
  },
  {
    q: "Tôi có thể huỷ hoặc đổi gói dịch vụ không?",
    a: "Hoàn toàn được. Bạn có thể nâng cấp, hạ cấp hoặc huỷ gói bất kỳ lúc nào, liên hệ đội ngũ hỗ trợ để được xử lý nhanh chóng.",
  },
];
