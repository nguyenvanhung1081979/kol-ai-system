export const siteConfig = {
  name: "VUNGALISHOP AI",
  shopName: "Vừng Ali Shop",
  phone: "0912919686",
  phoneDisplay: "0912 919 686",
  zaloUrl: "https://zalo.me/0912919686",
  email: "hungvannguyen@gmail.com",
  fanpageUrl: "https://www.facebook.com/vungalishop",
  tiktokUrl: "https://www.tiktok.com/@vungalishop",
};

export const bankInfo = {
  bankName: "TPBank",
  bankBin: "970423",
  accountNumber: "01604753001",
  accountName: "NGUYEN VAN HUNG",
};

export type NavItem =
  | { label: string; href: string; external?: boolean; children?: undefined }
  | {
      label: string;
      href?: undefined;
      external?: undefined;
      children: { label: string; href: string; external?: boolean }[];
    };

export const navLinks: NavItem[] = [
  {
    label: "Sách của tôi",
    children: [
      {
        label: "Mật mã khởi nghiệp AI",
        href: "https://matmakhoinghiepai.vercel.app/",
        external: true,
      },
    ],
  },
  { label: "Tra cứu AI", href: "https://aihub-vungalishop.vercel.app/", external: true },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Thanh toán", href: "/#thanh-toan" },
  {
    label: "Quà tặng khách hàng đã mua",
    children: [
      { label: "Công cụ", href: "/qua-tang" },
      { label: "Prompt", href: "/kho-prompt" },
    ],
  },
  { label: "Liên hệ", href: "/#lien-he" },
];

export const footerLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "Dịch vụ", href: "/#dich-vu" },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Bảng giá", href: "/#bang-gia" },
  { label: "Thanh toán", href: "/#thanh-toan" },
  { label: "Quà tặng AI Tools", href: "/qua-tang" },
  { label: "Kho Prompt AI", href: "/kho-prompt" },
  { label: "Kiến thức", href: "/#blog" },
  { label: "Sách của tôi", href: "https://matmakhoinghiepai.vercel.app/", external: true },
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
      "Thay vì tự mày mò giữa hàng trăm công cụ AI trên thị trường, đội ngũ VUNGALISHOP AI tuyển chọn, kiểm chứng và cấu hình sẵn bộ công cụ phù hợp nhất với nhu cầu của bạn — tiết kiệm thời gian thử-sai và chi phí đăng ký thừa thãi.",
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
      "Không phải cứ dùng AI là hiệu quả — cần đúng lộ trình, đúng ưu tiên. Đội ngũ VUNGALISHOP AI tư vấn chiến lược ứng dụng AI bài bản, từ đánh giá hiện trạng đến triển khai thí điểm và nhân rộng, giúp bạn đầu tư đúng chỗ và đo lường được kết quả.",
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

export type ProductIcon = "photo" | "video" | "canvas" | "vip" | "audio";

export type Product = {
  slug: string;
  icon: ProductIcon;
  name: string;
  tagline: string;
  price: string;
  priceSuffix: string;
  /** Số tiền thuần (VNĐ) dùng cho QR/đối soát thanh toán tự động, phải khớp `price`. */
  amount: number;
  /** Đường dẫn blob riêng tư chứa file sản phẩm, dùng để sinh link tải sau khi thanh toán. Để trống nếu sản phẩm là dạng mở khoá nội dung (contentUnlock). */
  blobPathname: string;
  /** true = sau khi thanh toán, mở khoá hiển thị nội dung ngay trên trang thay vì trả link tải file. */
  contentUnlock?: boolean;
  longDescription: string;
  features: string[];
  benefits: string[];
};

export const products: Product[] = [
  {
    slug: "skill-chinh-sua-anh-ai",
    icon: "photo",
    name: "Skill tạo ảnh đẹp đăng Facebook",
    tagline:
      "Tự động chèn tiêu đề + badge thương hiệu lên ảnh chuẩn phong cách mạng xã hội — không cần biết thiết kế.",
    price: "99.000",
    priceSuffix: "đ / trọn đời",
    amount: 99000,
    blobPathname: "skill-tu-dong-lam-hinh-anh-va-dang-bai-fb.zip",
    longDescription:
      "Skill AI tích hợp vào Claude Code, tự động biến ảnh gốc thành ảnh đăng mạng xã hội chuyên nghiệp: chèn tiêu đề nổi bật, tô sáng từ khoá quan trọng và gắn badge thương hiệu riêng của bạn — chỉ cần gửi ảnh và nội dung, nhận về file ảnh hoàn chỉnh chuẩn kích thước Facebook/Instagram.",
    features: [
      "Tự động trích tiêu đề từ bài viết dài, không cần tự viết lại",
      "Tô sáng (neon) đúng 1 từ khoá quan trọng nhất trong tiêu đề",
      "Gắn badge thương hiệu/logo riêng ở góc ảnh, tuỳ biến theo yêu cầu",
      "Xuất đúng chuẩn 1080x1350 (4:5) cho Facebook/Instagram",
      "Xử lý hàng loạt nhiều ảnh + nhiều tiêu đề cùng lúc",
    ],
    benefits: [
      "Tiết kiệm thời gian thiết kế ảnh đăng bài mỗi ngày",
      "Không cần biết Photoshop hay kỹ năng thiết kế",
      "Đồng bộ phong cách hình ảnh trên toàn kênh nội dung",
      "Tuỳ biến theo đúng bộ nhận diện thương hiệu của bạn",
    ],
  },
  {
    slug: "skill-edit-video-ai",
    icon: "video",
    name: "Skill Edit Video Tự Động",
    tagline:
      "Tự động dựng video talking-head chuyên nghiệp: transcribe, chèn slide minh hoạ đúng lúc, ghép hoàn chỉnh.",
    price: "499.000",
    priceSuffix: "đ / trọn đời",
    amount: 499000,
    blobPathname: "Sara-Edit-Video-Skill-v4-CHATGPT.zip",
    longDescription:
      "Skill AI tích hợp vào Claude Code, nhận video bạn quay (nói chuyện trước camera) và tự động transcribe, phân tích nội dung để chèn slide minh hoạ (so sánh, số liệu, tóm tắt...) đúng thời điểm, dựng bố cục webcam + slide chuyên nghiệp và xuất ra video hoàn chỉnh — không cần dựng thủ công.",
    features: [
      "Tự động transcribe video và nhận diện đoạn cần minh hoạ",
      "Tự tạo slide động: bảng so sánh, danh sách, số liệu, tóm tắt",
      "Bố cục webcam trái + slide phải chuẩn video chia sẻ kiến thức",
      "Giới hạn thông minh: chỉ chèn slide khi thực sự cần thiết",
      "Xuất video hoàn chỉnh chuẩn Full HD, sẵn sàng đăng tải",
    ],
    benefits: [
      "Rút ngắn thời gian dựng video từ hàng giờ xuống còn vài phút thao tác",
      "Không cần biết dựng video hay kỹ năng motion design",
      "Video chuyên nghiệp, dễ theo dõi, tăng khả năng giữ chân người xem",
      "Phù hợp video chia sẻ kiến thức, đào tạo, review, hướng dẫn",
    ],
  },
  {
    slug: "ai-edit-video-hang-loat",
    icon: "video",
    name: "AI Edit Video Hàng Loạt",
    tagline:
      "Bộ Skill AI 3-trong-1 tự động dựng video từ nguồn thô trên Google Drive — phụ đề, hiệu ứng âm thanh, nhận diện thương hiệu, xuất thành phẩm hàng loạt, không cần dựng thủ công.",
    price: "999.000",
    priceSuffix: "đ / trọn đời",
    amount: 999000,
    blobPathname: "Sara-Video-Workflow-Handover.zip",
    longDescription:
      "Đóng gói toàn bộ quy trình dựng video thành một quy trình tự động, chỉ cần một câu lệnh: lấy video nguồn từ Google Drive, tạo transcript có timestamp thực, làm phụ đề tiếng Việt theo lời nói, xác định đoạn nội dung quan trọng để chèn chữ động và hình minh hoạ đúng thời điểm, chọn hiệu ứng âm thanh phù hợp từ kho 113 SFX theo ngữ nghĩa, cân bằng giọng nói — nhạc nền — hiệu ứng, gắn nhận diện thương hiệu, dựng thumbnail dọc, render MP4 và tự động đưa thành phẩm vào thư mục trên Google Drive.",
    features: [
      "Tự động lấy video nguồn từ Google Drive, chuẩn bị môi trường dựng",
      "Tạo transcript có timestamp thực và phụ đề tiếng Việt theo lời nói",
      "Xác định đoạn nội dung quan trọng, chèn chữ động và hình minh hoạ đúng thời điểm",
      "Chọn hiệu ứng âm thanh phù hợp từ kho 113 SFX theo ngữ nghĩa, cân bằng âm thanh tổng thể",
      "Gắn nhận diện thương hiệu, tạo thumbnail dọc, render MP4 và đưa thành phẩm lên Drive",
    ],
    benefits: [
      "Xử lý được nhiều video theo một quy trình thống nhất, không cần dựng thủ công từng video",
      "Phù hợp chủ shop, người bán hàng, KOC/KOL và đội nhóm sản xuất TikTok/Reels/Shorts",
      "Tiết kiệm thời gian nghe lại video, cắt ghép, tìm hiệu ứng, cân chỉnh âm thanh thủ công",
      "Một lần mua, dùng trọn đời — video dài hoặc số lượng lớn xử lý tuần tự tuỳ cấu hình máy",
    ],
  },
  {
    slug: "omni-flow-canvas",
    icon: "canvas",
    name: "Tạo Video AI đồng nhất nhân vật",
    tagline:
      "Canvas dựng sẵn trên nền tảng Flow (Google Labs) — tạo video AI nhanh hơn mà không cần dựng từ đầu.",
    price: "99.000",
    priceSuffix: "đ / trọn đời",
    amount: 99000,
    blobPathname: "omni-flow-canvas.zip",
    longDescription:
      "Bản canvas đã được cấu hình sẵn trên nền tảng Flow của Google Labs — công cụ tạo video AI bằng giao diện kéo-thả trực quan. Thay vì mất thời gian dựng canvas từ con số 0, bạn nhận bản canvas đã tối ưu sẵn, chỉ cần thay nội dung/ý tưởng của mình vào và tạo video ngay.",
    features: [
      "Canvas kéo-thả trực quan trên nền tảng Flow (Google Labs)",
      "Quy trình các bước tạo video AI đã được sắp xếp sẵn, tối ưu",
      "Áp dụng ngay cho nội dung của bạn, không cần dựng lại từ đầu",
      "Tiết kiệm thời gian làm quen với công cụ mới",
      "Được hướng dẫn cách tuỳ chỉnh canvas theo nhu cầu riêng",
    ],
    benefits: [
      "Rút ngắn thời gian làm quen và dựng quy trình từ đầu",
      "Tận dụng sức mạnh AI tạo video mới nhất từ Google Labs",
      "Phù hợp cả người mới bắt đầu lẫn người đã quen làm video AI",
      "Được hướng dẫn sử dụng và tuỳ chỉnh sau khi nhận canvas",
    ],
  },
  {
    slug: "flow-tao-video-hang-loat",
    icon: "canvas",
    name: "Flow tạo Videos AI hàng loạt",
    tagline:
      "Canvas dựng sẵn trên nền tảng Flow (Google Labs) — tạo hàng loạt video AI cùng lúc, không cần dựng từng video riêng lẻ.",
    price: "200.000",
    priceSuffix: "đ / trọn đời",
    amount: 200000,
    blobPathname: "flow-tao-video-hang-loat.zip",
    longDescription:
      "Bản canvas đã được cấu hình sẵn trên nền tảng Flow của Google Labs, tối ưu riêng cho việc tạo nhiều video AI cùng lúc theo hàng loạt thay vì dựng từng video một. Thay vì mất thời gian dựng quy trình từ đầu, bạn nhận bản canvas đã tối ưu sẵn, chỉ cần thay nội dung/ý tưởng của mình vào và tạo video hàng loạt ngay.",
    features: [
      "Canvas Flow (Google Labs) tối ưu sẵn cho tạo video hàng loạt",
      "Quy trình các bước đã được sắp xếp sẵn, tạo nhiều video cùng lúc",
      "Áp dụng ngay cho nội dung của bạn, không cần dựng lại từ đầu",
      "Tiết kiệm thời gian dựng từng video riêng lẻ theo cách thủ công",
      "Được hướng dẫn cách tuỳ chỉnh canvas theo nhu cầu riêng",
    ],
    benefits: [
      "Rút ngắn đáng kể thời gian sản xuất khi cần ra nhiều video cùng lúc",
      "Tận dụng sức mạnh AI tạo video mới nhất từ Google Labs",
      "Phù hợp kênh cần ra nội dung video tần suất cao, số lượng lớn",
      "Được hướng dẫn sử dụng và tuỳ chỉnh sau khi nhận canvas",
    ],
  },
  {
    slug: "sara-model-studio",
    icon: "photo",
    name: "Skill tạo ảnh và poster bán hàng",
    tagline:
      "Bộ Skill AI 5-trong-1 tạo ảnh, poster và video giới thiệu sản phẩm — chỉ cần gửi ảnh và yêu cầu bằng tiếng Việt, không cần biết thiết kế.",
    price: "200.000",
    priceSuffix: "đ / trọn đời",
    amount: 200000,
    blobPathname: "sara-model-studio.zip",
    longDescription:
      "Bộ Skill AI 5 trong 1 dành cho người bán hàng, xây thương hiệu cá nhân và làm nội dung — cài trực tiếp vào ChatGPT, chỉ cần gửi ảnh và yêu cầu bằng tiếng Việt. Từ hoán đổi người mẫu Sara vào ảnh sản phẩm, tạo nhiều góc ảnh, dựng storyboard/video giới thiệu, đến thiết kế poster và banner bán hàng — tất cả trong một bộ công cụ duy nhất, kèm tài liệu hướng dẫn và bộ câu lệnh mẫu cho người mới.",
    features: [
      "Hoán đổi người mẫu Sara vào ảnh sản phẩm/tham chiếu, giữ nguyên logo và bao bì",
      "Tạo nhiều góc ảnh riêng (multishot) từ một ảnh gốc, không ghép lưới",
      "Dựng storyboard và kịch bản video giới thiệu sản phẩm",
      "Thiết kế poster đơn hoặc cả chiến dịch 10 poster cho một sản phẩm",
      "Tạo thumbnail, banner, ảnh bán hàng và hình landing page theo nhận diện VungAliShop",
      "Kèm hướng dẫn dành cho người mới + 30 câu lệnh mẫu, dùng ngay trên ChatGPT",
    ],
    benefits: [
      "Không cần biết thiết kế hay tiếng Anh — chỉ cần gửi ảnh và mô tả bằng tiếng Việt",
      "Thay thế quy trình dựng ảnh/video bán hàng thủ công tốn nhiều giờ mỗi lần",
      "Đồng bộ nhận diện thương hiệu trên toàn bộ ảnh, poster, video giới thiệu",
      "Một lần mua, dùng trọn đời, cài đặt đơn giản kể cả với người không rành công nghệ",
    ],
  },
  {
    slug: "skill-113-hieu-ung-am-thanh",
    icon: "audio",
    name: "Skill 113 hiệu ứng âm thanh",
    tagline:
      "Kho 113 file hiệu ứng âm thanh tuyển chọn sẵn — dùng ngay cho video, content mạng xã hội, không cần tự đi tìm.",
    price: "99.000",
    priceSuffix: "đ / trọn đời",
    amount: 99000,
    blobPathname: "Kho-Am-Thanh-113-file.zip",
    longDescription:
      "Bộ sưu tập 113 file hiệu ứng âm thanh (sound effect) được tuyển chọn sẵn, sẵn sàng dùng ngay cho video ngắn, nội dung mạng xã hội và các sản phẩm truyền thông khác — thay vì mất thời gian tự tìm kiếm, tải lẻ tẻ từ nhiều nguồn khác nhau.",
    features: [
      "113 file hiệu ứng âm thanh đa dạng chủ đề, chất lượng sẵn sàng dùng ngay",
      "Phù hợp video ngắn, content mạng xã hội, video giới thiệu sản phẩm",
      "Tải trọn bộ 1 lần, dùng nhiều dự án khác nhau",
      "Không cần tự tìm kiếm, so sánh chất lượng từng file rời rạc",
    ],
    benefits: [
      "Tiết kiệm thời gian tìm và tải hiệu ứng âm thanh cho từng video",
      "Đồng bộ chất lượng âm thanh trên các sản phẩm nội dung",
      "Một lần mua, dùng trọn đời, không phát sinh phí ẩn",
    ],
  },
  {
    slug: "tao-landing-page-ban-hang",
    icon: "canvas",
    name: "Tạo Landing Page Bán Hàng Từ A-Z",
    tagline:
      "Bộ Skill AI dựng landing page bán hàng hoàn chỉnh cùng Claude Code — có thanh toán chuyển khoản tự động xác nhận, giao sản phẩm số tự động, deploy lên Vercel — đúc kết từ hệ thống đã vận hành và test bằng giao dịch thật.",
    price: "3.000.000",
    priceSuffix: "đ / trọn đời",
    amount: 3000000,
    blobPathname: "skill-tao-landing-page-ban-hang.zip",
    longDescription:
      "Bộ skill Claude Code hướng dẫn từng bước, kèm template code sẵn, để dựng một landing page bán hàng nhiều gói cho sản phẩm/dịch vụ của riêng bạn: từ thu thập yêu cầu, thiết kế giao diện, đến hệ thống thanh toán chuyển khoản tự động xác nhận qua webhook ngân hàng (SePay/Casso/PayOS), giao sản phẩm số tự động theo từng gói, báo đơn hàng qua Telegram, và deploy lên Vercel — đúc kết từ chính hệ thống website này, đã triển khai và kiểm thử bằng giao dịch thật. Kèm tài liệu hướng dẫn sử dụng riêng cho người không biết code — chỉ cần ra lệnh và trả lời câu hỏi khi được hỏi.",
    features: [
      "Template code sẵn (giao diện + backend thanh toán) làm điểm khởi đầu, không cần viết từ đầu",
      "Thanh toán chuyển khoản tự động xác nhận qua webhook ngân hàng, tính tiền ở server chống gian lận",
      "Giao đúng file/bundle riêng cho từng gói, mở khoá tải theo đúng trạng thái đơn hàng",
      "Tự động báo đơn hàng mới qua Telegram, deploy lên Vercel + GitHub qua dòng lệnh",
      "Kèm hướng dẫn sử dụng riêng cho người không biết code — chỉ cần trả lời câu hỏi khi được hỏi",
    ],
    benefits: [
      "Rút ngắn thời gian dựng trang bán hàng có thanh toán tự động từ nhiều tuần xuống còn vài giờ",
      "Không cần biết lập trình — chỉ cần trả lời các câu hỏi khi Claude Code hỏi",
      "Đúc kết từ hệ thống thực tế đã vận hành, tránh các lỗi bảo mật/thanh toán thường gặp",
      "Dùng lại được nhiều lần cho nhiều sản phẩm/dịch vụ khác nhau, một lần mua dùng mãi mãi",
    ],
  },
  {
    slug: "kho-ai-kinh-doanh-vip",
    icon: "vip",
    name: "Kho AI Kinh Doanh VIP",
    tagline:
      "70+ App AI Studio tạo ảnh/video chuyên sâu + kho prompt bán hàng — mở khoá xem ngay trên trang, không cần chờ.",
    price: "499.000",
    priceSuffix: "đ / trọn đời",
    amount: 499000,
    blobPathname: "",
    contentUnlock: true,
    longDescription:
      "Bộ sưu tập hơn 70 App AI Studio chuyên sâu để tạo ảnh, video, thiết kế — cùng kho prompt bán hàng, xử lý từ chối, chăm sóc khách hàng và sáng tạo nội dung được tuyển chọn sẵn. Thanh toán xong, toàn bộ danh mục mở khoá ngay trên trang này — không cần chờ, không cần tải file.",
    features: [
      "70+ App AI Studio tạo ảnh/video chuyên sâu, đa chủ đề",
      "Kho prompt bán hàng, xử lý từ chối, CSKH, sáng tạo nội dung có sẵn",
      "Hướng dẫn kỹ thuật viết prompt Veo 3.1 chuyên sâu đi kèm",
      "Mở khoá xem ngay trên trang sau khi thanh toán, không cần chờ link",
      "Truy cập lại bất cứ lúc nào trên cùng trình duyệt, không giới hạn số lần dùng",
    ],
    benefits: [
      "Tiết kiệm hàng chục giờ tự mày mò và gom nhặt công cụ AI rời rạc",
      "Có ngay kho prompt kinh doanh thực chiến, dùng được ngay",
      "Phù hợp người làm nội dung, sáng tạo, bán hàng cần công cụ AI đa dạng",
      "Một lần mua, dùng lâu dài, không phát sinh phí ẩn",
    ],
  },
];

export type QuickProductLink = {
  label: string;
  href: string;
  icon: "book" | ProductIcon;
  external?: boolean;
};

export const quickProductLinks: QuickProductLink[] = [
  {
    label: "Sách của tôi",
    href: "https://matmakhoinghiepai.vercel.app/",
    icon: "book",
    external: true,
  },
  ...products.map((product) => ({
    label: product.name,
    href: `/san-pham/${product.slug}`,
    icon: product.icon,
  })),
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

export type BlogPost = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  sections: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "5-xu-huong-ai-content-nam-2026",
    tag: "AI",
    title: "5 xu hướng AI content năm 2026",
    desc: "Những thay đổi lớn trong cách KOL sáng tạo nội dung với sự hỗ trợ của AI.",
    date: "10/01/2026",
    readTime: "5 phút đọc",
    sections: [
      {
        heading: "1. Video ngắn dựng sẵn kịch bản bằng AI",
        body: "Thay vì mất hàng giờ lên ý tưởng và viết kịch bản, AI có thể tạo ra hàng chục phương án kịch bản video ngắn chỉ trong vài phút, giúp KOL chọn lọc và sản xuất nhanh hơn nhiều lần. Xu hướng năm 2026 là kết hợp prompt chuyên biệt theo từng nền tảng (TikTok, Reels, Shorts) để tối ưu tỉ lệ giữ chân người xem ngay từ 3 giây đầu.",
      },
      {
        heading: "2. Nhân vật ảo và người dẫn AI nhất quán",
        body: "Công nghệ tạo nhân vật AI nhất quán qua nhiều video (consistent character) ngày càng phổ biến, cho phép xây dựng một 'gương mặt thương hiệu' ảo xuất hiện đều đặn mà không cần quay dựng thủ công liên tục — tiết kiệm chi phí sản xuất đáng kể cho các kênh đăng bài dày đặc.",
      },
      {
        heading: "3. Cá nhân hoá nội dung theo từng nhóm khán giả",
        body: "AI giúp phân tích hành vi khán giả và tự động điều chỉnh góc độ nội dung (tone, độ dài, định dạng) phù hợp với từng nhóm nhỏ thay vì sản xuất một phiên bản chung cho tất cả — tăng đáng kể tỉ lệ tương tác so với cách làm truyền thống.",
      },
      {
        heading: "4. AI hỗ trợ săn xu hướng theo thời gian thực",
        body: "Các công cụ AI theo dõi xu hướng mạng xã hội theo thời gian thực giúp KOL nắm bắt chủ đề đang lên sớm hơn, thay vì chạy theo trend khi nó đã bão hoà. Đây là lợi thế cạnh tranh rõ rệt cho những kênh cần tốc độ ra nội dung nhanh.",
      },
      {
        heading: "5. Kết hợp người thật và AI, không thay thế hoàn toàn",
        body: "Xu hướng bền vững nhất không phải là để AI làm thay 100%, mà là dùng AI xử lý phần lặp lại, tốn thời gian (dựng khung kịch bản, chỉnh sửa, tạo biến thể), để KOL dành nhiều thời gian hơn cho phần thể hiện cá tính và kết nối thật với khán giả — yếu tố AI không thể thay thế.",
      },
    ],
  },
  {
    slug: "ung-dung-ai-vao-quy-trinh-van-hanh",
    tag: "GPT",
    title: "Ứng dụng AI vào quy trình vận hành",
    desc: "Hướng dẫn tự động hoá các tác vụ lặp lại giúp tiết kiệm thời gian.",
    date: "18/01/2026",
    readTime: "6 phút đọc",
    sections: [
      {
        heading: "Vì sao nên tự động hoá quy trình lặp lại",
        body: "Phần lớn thời gian vận hành của một kênh nội dung hoặc doanh nghiệp nhỏ bị tiêu tốn vào các tác vụ lặp đi lặp lại: lên lịch đăng bài, trả lời tin nhắn tương tự nhau, tổng hợp báo cáo thủ công. Tự động hoá những phần này không làm mất đi sự cá nhân hoá — ngược lại, nó giải phóng thời gian để tập trung vào việc cần con người ra quyết định.",
      },
      {
        heading: "Bắt đầu từ đâu trước",
        body: "Nên ưu tiên tự động hoá theo thứ tự: (1) đăng bài đa nền tảng theo lịch cố định, (2) trả lời các câu hỏi thường gặp của khách hàng, (3) tổng hợp số liệu tương tác/doanh thu định kỳ. Đây là ba nhóm việc tốn nhiều thời gian nhất nhưng lại dễ tự động hoá nhất vì có quy tắc rõ ràng.",
      },
      {
        heading: "Chọn công cụ phù hợp thay vì chạy theo trend",
        body: "Không phải công cụ AI nào 'hot' cũng phù hợp với quy mô và ngân sách của bạn. Nguyên tắc chọn công cụ nên dựa trên: mức độ tích hợp với nền tảng đang dùng, chi phí trên mỗi tác vụ tự động, và thời gian học sử dụng — một công cụ mạnh nhưng khó dùng thường bị bỏ dở sau vài tuần.",
      },
      {
        heading: "Đo lường hiệu quả sau khi tự động hoá",
        body: "Sau khi triển khai, nên theo dõi ít nhất hai chỉ số: thời gian tiết kiệm được mỗi tuần và tỉ lệ lỗi/sai sót so với làm thủ công. Nếu một quy trình tự động không tiết kiệm thời gian rõ rệt sau một tháng, cần xem lại cách cấu hình thay vì bỏ cuộc hoàn toàn.",
      },
    ],
  },
  {
    slug: "case-study-tang-truong-nho-ai",
    tag: "KOL",
    title: "Case study: Tăng trưởng nhờ AI",
    desc: "Mô hình triển khai điển hình mà VUNGALISHOP AI áp dụng cho khách hàng, minh hoạ quy trình và kết quả có thể đạt được.",
    date: "25/01/2026",
    readTime: "4 phút đọc",
    sections: [
      {
        heading: "Bối cảnh trước khi triển khai",
        body: "Đây là mô hình triển khai điển hình cho một kênh nội dung quy mô nhỏ (dưới 5 người), gặp khó khăn phổ biến: sản xuất nội dung chậm do khâu lên ý tưởng và viết kịch bản tốn nhiều thời gian, đội ngũ mỏng nên không đủ người trực fanpage liên tục để chăm sóc khách hàng.",
      },
      {
        heading: "Giải pháp AI đã áp dụng",
        body: "Kết hợp ba phần: (1) hệ thống AI hỗ trợ sinh kịch bản và caption theo đúng giọng văn thương hiệu, (2) workflow tự động hoá đăng bài và trả lời tin nhắn cơ bản ngoài giờ hành chính, (3) bộ công cụ AI Tools được tuyển chọn sẵn để rút ngắn thời gian dựng hình ảnh sản phẩm.",
      },
      {
        heading: "Kết quả điển hình có thể đạt được",
        body: "Với mô hình triển khai tương tự, thời gian sản xuất một video ngắn thường giảm từ vài giờ xuống còn khoảng 30-45 phút, và thời gian phản hồi khách hàng ngoài giờ được rút ngắn đáng kể nhờ tự động hoá phần trả lời cơ bản. Kết quả thực tế sẽ khác nhau tuỳ ngành hàng và mức độ đầu tư triển khai.",
      },
      {
        heading: "Bài học rút ra",
        body: "Yếu tố quyết định không phải là dùng công cụ AI nào, mà là xây dựng đúng quy trình trước khi tự động hoá. Áp dụng AI vào một quy trình lộn xộn sẽ chỉ khiến sự lộn xộn đó diễn ra nhanh hơn — vì vậy bước tư vấn và chuẩn hoá quy trình luôn đi trước bước triển khai công cụ.",
      },
    ],
  },
];

export const faqs = [
  {
    q: "VUNGALISHOP AI phù hợp với ai?",
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

export type AiPartnerBrand = { name: string; mark: string; color: string };

// Các nền tảng AI được dùng/tích hợp trong quy trình làm việc — không phải quan hệ đại sứ/đối tác chính thức.
export const aiPartnerBrands: AiPartnerBrand[] = [
  { name: "Gemini Omni", mark: "✦", color: "linear-gradient(135deg,#4285F4,#9B72CB)" },
  { name: "Affitor", mark: "A", color: "#2563EB" },
  { name: "Lumeflow AI", mark: "L", color: "linear-gradient(135deg,#EC4899,#F43F5E)" },
  { name: "Minimax Audio", mark: "♪", color: "#DC2626" },
  { name: "Seedance 2", mark: "S", color: "linear-gradient(135deg,#14B8A6,#0EA5E9)" },
  { name: "Higgsfield AI", mark: "H", color: "#84CC16" },
  { name: "TopView AI", mark: "▲", color: "#7C3AED" },
  { name: "Focusee AI", mark: "F", color: "linear-gradient(135deg,#06B6D4,#3B82F6)" },
  { name: "Lovable AI", mark: "♥", color: "#F43F5E" },
  { name: "Claude AI", mark: "AI", color: "#3B3B44" },
];
