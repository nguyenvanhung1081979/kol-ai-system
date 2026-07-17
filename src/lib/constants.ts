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
  { label: "Dịch vụ", href: "/#dich-vu" },
  { label: "Bảng giá", href: "/#bang-gia" },
  { label: "Thanh toán", href: "/#thanh-toan" },
  { label: "Công cụ AI", href: "/#cong-cu" },
  { label: "Quà tặng AI", href: "/qua-tang" },
  { label: "Kho Prompt AI", href: "/kho-prompt" },
  { label: "Kiến thức", href: "/#blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Liên hệ", href: "/#lien-he" },
];

export const heroStats = [
  { value: "500+", label: "Khách hàng tin dùng" },
  { value: "50+", label: "Dịch vụ & công cụ AI" },
  { value: "5", label: "Năm kinh nghiệm" },
  { value: "24/7", label: "Hỗ trợ tận tâm" },
];

export type ServiceIcon = "content" | "automation" | "tools" | "consult";

export type Service = {
  slug: string;
  icon: ServiceIcon;
  title: string;
  desc: string;
  longDescription: string;
  benefits: string[];
  process: { title: string; desc: string }[];
};

export const services: Service[] = [
  {
    slug: "sang-tao-noi-dung-ai",
    icon: "content",
    title: "Sáng tạo nội dung AI",
    desc: "Viết kịch bản, caption, hình ảnh AI phục vụ sản xuất nội dung hàng loạt, đúng chất riêng của bạn.",
    longDescription:
      "Hệ thống AI được huấn luyện theo giọng văn và phong cách riêng của bạn, giúp sản xuất kịch bản video, caption, ý tưởng nội dung và hình ảnh với tốc độ gấp nhiều lần cách làm thủ công — mà vẫn giữ đúng chất riêng, không bị 'nhàm' như nội dung AI đại trà.",
    benefits: [
      "Rút ngắn thời gian lên ý tưởng và viết nội dung từ hàng giờ xuống còn vài phút",
      "Giữ nhất quán giọng văn, phong cách thương hiệu trên mọi nền tảng",
      "Đa dạng định dạng: kịch bản video, caption, blog, hình ảnh AI",
      "Sản xuất nội dung hàng loạt mà vẫn đảm bảo chất lượng",
    ],
    process: [
      { title: "Phân tích phong cách & mục tiêu", desc: "Đội ngũ tìm hiểu chất riêng, đối tượng khán giả và mục tiêu nội dung của bạn." },
      { title: "AI tạo bản nháp nội dung", desc: "Hệ thống AI sản xuất kịch bản, caption, hình ảnh theo đúng định hướng đã thống nhất." },
      { title: "Tinh chỉnh & phê duyệt", desc: "Bạn xem, góp ý và chốt phiên bản cuối cùng cùng đội ngũ hỗ trợ." },
      { title: "Xuất bản & đo lường", desc: "Nội dung được đăng tải và theo dõi hiệu quả để tối ưu cho lần sau." },
    ],
  },
  {
    slug: "tu-dong-hoa-quy-trinh",
    icon: "automation",
    title: "Tự động hoá quy trình",
    desc: "Xây dựng workflow AI tự động cho đăng bài, chăm sóc khách hàng và vận hành kênh.",
    longDescription:
      "Thiết kế các workflow AI tự động hoá những tác vụ lặp lại — từ lên lịch đăng bài đa nền tảng, trả lời tin nhắn khách hàng, đến tổng hợp báo cáo — giúp bạn và đội ngũ tập trung vào việc sáng tạo và ra quyết định thay vì thao tác thủ công.",
    benefits: [
      "Tiết kiệm hàng chục giờ vận hành mỗi tuần",
      "Giảm sai sót do thao tác thủ công lặp lại",
      "Phản hồi khách hàng tức thì, không bỏ lỡ tin nhắn",
      "Vận hành nhiều kênh cùng lúc mà không cần tăng nhân sự",
    ],
    process: [
      { title: "Khảo sát quy trình hiện tại", desc: "Xác định các bước lặp lại, tốn thời gian nhất trong vận hành của bạn." },
      { title: "Thiết kế workflow tự động", desc: "Xây dựng luồng tự động hoá phù hợp với công cụ và kênh bạn đang dùng." },
      { title: "Tích hợp công cụ AI", desc: "Kết nối AI vào workflow để xử lý nội dung, tin nhắn, dữ liệu tự động." },
      { title: "Giám sát & tối ưu liên tục", desc: "Theo dõi hiệu quả vận hành và điều chỉnh workflow khi cần." },
    ],
  },
  {
    slug: "bo-cong-cu-ai-tools",
    icon: "tools",
    title: "Bộ công cụ AI Tools",
    desc: "Tuyển chọn & tối ưu công cụ AI hàng đầu, sẵn sàng ứng dụng ngay vào công việc.",
    longDescription:
      "Thay vì tự mày mò giữa hàng trăm công cụ AI trên thị trường, đội ngũ KOL AI SYSTEM tuyển chọn, kiểm chứng và cấu hình sẵn bộ công cụ phù hợp nhất với nhu cầu của bạn — tiết kiệm thời gian thử-sai và chi phí đăng ký thừa thãi.",
    benefits: [
      "Tuyển chọn công cụ AI phù hợp đúng nhu cầu, không lãng phí",
      "Tối ưu chi phí bản quyền/subscription giữa nhiều lựa chọn",
      "Luôn cập nhật công cụ mới nhất trên thị trường",
      "Được hướng dẫn sử dụng thực chiến, không chỉ lý thuyết",
    ],
    process: [
      { title: "Đánh giá nhu cầu", desc: "Xác định công việc cụ thể bạn cần AI hỗ trợ: nội dung, hình ảnh, dữ liệu..." },
      { title: "Đề xuất bộ công cụ", desc: "Gợi ý danh sách công cụ AI phù hợp nhất, kèm phân tích chi phí – hiệu quả." },
      { title: "Đào tạo sử dụng", desc: "Hướng dẫn thao tác thực tế để bạn làm chủ công cụ nhanh chóng." },
      { title: "Hỗ trợ vận hành", desc: "Đồng hành xử lý vướng mắc trong quá trình sử dụng lâu dài." },
    ],
  },
  {
    slug: "tu-van-trien-khai-ai",
    icon: "consult",
    title: "Tư vấn triển khai AI",
    desc: "Đồng hành cùng đội ngũ, tư vấn lộ trình ứng dụng AI phù hợp với mục tiêu kinh doanh.",
    longDescription:
      "Không phải cứ dùng AI là hiệu quả — cần đúng lộ trình, đúng ưu tiên. Đội ngũ KOL AI SYSTEM tư vấn chiến lược ứng dụng AI bài bản, từ đánh giá hiện trạng đến triển khai thí điểm và nhân rộng, giúp bạn đầu tư đúng chỗ và đo lường được kết quả.",
    benefits: [
      "Lộ trình ứng dụng AI rõ ràng, đúng ưu tiên kinh doanh",
      "Giảm rủi ro đầu tư sai công cụ hoặc sai thời điểm",
      "Đội ngũ đồng hành dài hạn, không chỉ tư vấn một lần",
      "Đo lường được hiệu quả (ROI) sau mỗi giai đoạn triển khai",
    ],
    process: [
      { title: "Đánh giá hiện trạng", desc: "Phân tích quy trình, nguồn lực và mục tiêu kinh doanh hiện tại của bạn." },
      { title: "Xây dựng lộ trình AI", desc: "Đề xuất lộ trình ứng dụng AI theo từng giai đoạn, ưu tiên tác động cao trước." },
      { title: "Triển khai thí điểm", desc: "Áp dụng thử ở quy mô nhỏ để kiểm chứng hiệu quả trước khi mở rộng." },
      { title: "Nhân rộng & đo lường ROI", desc: "Mở rộng áp dụng toàn diện và theo dõi kết quả đầu tư theo số liệu cụ thể." },
    ],
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
