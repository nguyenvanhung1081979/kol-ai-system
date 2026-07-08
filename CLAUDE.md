# KOL AI SYSTEM — Website

Website giới thiệu các dịch vụ AI của KOL AI SYSTEM: hệ thống công cụ/giải pháp AI dành cho KOL, nhà sáng tạo nội dung và doanh nghiệp (sáng tạo nội dung, tự động hoá, công cụ AI...).

## Thông tin công ty

- **Tên cửa hàng:** Vừng Ali Shop
- **Số điện thoại:** 0912919686
- **Email:** hungvannguyen@gmail.com
- **Fanpage:** https://www.facebook.com/vungalishop
- **Tiktok:** https://www.tiktok.com/@vungalishop

*Dùng thông tin này cho các khu vực: header (nút liên hệ), footer (thông tin liên hệ + social links), trang liên hệ, schema/meta SEO (structured data tổ chức).*

## Tech stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** dùng `next/font` để tối ưu tải font, ưu tiên 1 font sans hiện đại (VD: Inter, Be Vietnam Pro — cần hỗ trợ tiếng Việt có dấu đầy đủ)
- **Deploy:** Vercel (mặc định của Next.js)

## Lệnh thường dùng

```bash
npm run dev       # chạy dev server
npm run build      # build production
npm run lint       # kiểm tra lint
```

*(Cập nhật lại phần này nếu project init dùng package manager khác như pnpm/yarn.)*

## Định hướng thiết kế

Tham khảo phong cách từ ảnh mẫu `maulamwebsite.png` (site "Ông Chú MMO") nhưng **áp dụng có chọn lọc**: ảnh mẫu thiên về phong cách gaming/MMO khá rối (nhiều badge, nhiều card chồng lớp, hiệu ứng glow mạnh). Với KOL AI SYSTEM, mục tiêu là **tối giản – hiện đại – chuyên nghiệp**, nên giữ lại nền tảng dark theme + accent màu nổi bật, nhưng:

- Giảm mật độ thông tin trên mỗi màn hình, tăng khoảng trắng (whitespace)
- Hạn chế số lượng badge/nhãn/hiệu ứng glow trên cùng 1 khu vực
- Ưu tiên bố cục rõ ràng, phân cấp thị giác (visual hierarchy) rành mạch thay vì nhồi nhét card
- Hiệu ứng chuyển động/hover tinh tế, không lạm dụng

### Bảng màu (dark theme)

| Vai trò | Màu | Ghi chú |
|---|---|---|
| Nền chính | `#0A0A0D` – `#0D0D12` | gần đen, hơi ngả tím/đỏ rất nhẹ |
| Nền card/section | `#15151B` – `#1A1A22` | tối hơn nền 1 bậc, border mỏng `#26262E` |
| Accent chính | `#E8342B` → `#FF5A3C` (gradient đỏ–cam) | dùng cho CTA, tiêu đề nhấn, số liệu nổi bật — dùng tiết chế |
| Text chính | `#F5F5F7` | tiêu đề, nội dung quan trọng |
| Text phụ | `#9A9AA5` | mô tả, caption |
| Border/divider | `#26262E` | mỏng, độ tương phản thấp |
| Success/khác (nếu cần) | dùng tông xanh lá/vàng nhạt, chỉ cho badge trạng thái | không lạm dụng nhiều màu |

### Typography

- Heading: đậm (bold/extrabold), tracking hơi rộng cho tiêu đề lớn, dùng gradient màu accent cho 1–2 từ khoá quan trọng (giống hero "AI Dễ Ẹc" trong ảnh mẫu) — chỉ dùng ở hero, không lạm dụng toàn trang
- Body: weight regular/medium, màu text phụ, line-height thoáng (1.6–1.7) để giữ cảm giác chuyên nghiệp, dễ đọc
- Kích thước theo scale rõ ràng: hero H1 lớn, section title vừa, body nhỏ gọn

### Bố cục & component tham khảo từ ảnh mẫu

Các pattern sau lấy cảm hứng từ ảnh mẫu, đơn giản hoá lại cho phù hợp mục tiêu tối giản:

1. **Header:** logo trái, menu ngang, 1 CTA nổi bật bên phải (nút gradient đỏ–cam)
2. **Hero section:** tiêu đề lớn + gradient nhấn từ khoá, mô tả ngắn, 1–2 CTA, có thể kèm hình minh hoạ/visual AI bên phải
3. **Thanh stats:** vài con số nổi bật (VD: số dịch vụ, số khách hàng, năm kinh nghiệm) — dùng font số lớn, tối giản, không cần nền phức tạp
4. **Grid dịch vụ/tính năng:** 3–4 card đều nhau, mỗi card: icon, tiêu đề ngắn, mô tả 1–2 dòng, link "Tìm hiểu thêm"
5. **Bảng giá / gói dịch vụ:** card so sánh gói, nhấn 1 gói nổi bật bằng border/badge accent
6. **Bảng xếp hạng / showcase sản phẩm AI:** danh sách card ngang có rank, tên, mô tả ngắn, rating hoặc trạng thái, 1 CTA
7. **Blog/insight section:** card bài viết (ảnh + tiêu đề + mô tả ngắn), dùng cho tin tức/kiến thức AI
8. **FAQ:** accordion đơn giản
9. **Footer:** logo + mô tả ngắn, các cột link, form đăng ký nhận tin, social links

Không bắt buộc copy y hệt bố cục ảnh mẫu — ưu tiên tinh giản số section, chỉ giữ những phần thực sự phục vụ mục tiêu giới thiệu dịch vụ AI của KOL AI SYSTEM.

## Nội dung & giọng văn

- Ngôn ngữ chính: **Tiếng Việt** (có dấu đầy đủ, chuẩn chính tả)
- Giọng văn: chuyên nghiệp, tự tin, súc tích — tránh văn phong "chợ búa"/giật tít quá đà như site tham khảo (site mẫu thiên hướng MMO, giọng văn suồng sã — không phù hợp định vị "chuyên nghiệp" của KOL AI SYSTEM)
- CTA rõ ràng, hành động cụ thể (VD: "Đặt lịch tư vấn", "Xem demo", "Bắt đầu dùng thử")

## Cấu trúc thư mục (Next.js App Router)

```
src/
  app/                # routes (page.tsx theo từng route)
  components/
    ui/               # component dùng chung, nhỏ, không phụ thuộc business logic
    sections/         # các section lớn của trang (Hero, Services, Pricing, FAQ...)
  lib/                # helpers, constants (VD: bảng màu, nội dung tĩnh)
  styles/             # global css, tailwind config liên quan
public/               # ảnh, favicon, static assets
```

## Quy tắc bắt buộc

- **Screenshot đối chiếu design:** Sau mỗi thay đổi lớn về UI (thêm/sửa section, đổi layout, đổi bảng màu...), phải chụp screenshot trang đã build và so sánh trực quan với ảnh design gốc (`maulamwebsite.png` hoặc file design cập nhật sau này) để đảm bảo đúng tinh thần thiết kế trước khi coi là hoàn thành.
- **Tối ưu mobile bắt buộc:** Mọi section phải responsive tốt trên mobile (không chỉ desktop). Luôn kiểm tra ở các breakpoint nhỏ (viewport ~375px) sau khi build/sửa UI — không chỉ dựa vào Tailwind `md:`/`lg:` mà không test thực tế.
- **Animation cho mọi action click:** Mọi phần tử có thể click (button, link, card, menu, tab, accordion...) phải có animation/feedback khi tương tác (hover, active, transition khi mở/đóng...). Dùng Tailwind transition utilities (`transition`, `duration-*`, `ease-*`, `hover:`, `active:`) hoặc thư viện animation nhẹ (VD: Framer Motion) khi cần hiệu ứng phức tạp hơn — tránh trạng thái click "cứng", không phản hồi.

## Quy ước code

- Component dùng PascalCase, file `.tsx`
- Ưu tiên Server Component mặc định, chỉ thêm `"use client"` khi cần state/interactivity (accordion FAQ, menu mobile, form...)
- Style bằng Tailwind utility classes, tránh CSS tuỳ biến trừ khi cần hiệu ứng đặc thù (gradient text, glow...)
- Tách nội dung tĩnh (copy, danh sách dịch vụ, FAQ...) ra file trong `lib/` để dễ chỉnh sửa nội dung mà không đụng vào component
