# Kích hoạt thanh toán tự động cho trang Sản phẩm

Trang `/san-pham/[slug]` đã có sẵn code cho luồng thanh toán tự động (khách chuyển khoản → SePay
báo webhook → hệ thống tự xác nhận, gửi Telegram, hiện link tải). **Hiện tại chưa có gì được kích
hoạt** — trang vẫn đang chạy luồng thủ công cũ (QR tĩnh + nhắn Zalo) vì 4 dịch vụ dưới đây chưa
được cấu hình. Cần làm đủ cả 4 bước thì luồng tự động mới bật.

## 1. Upstash Redis (lưu trạng thái đơn hàng)

1. Vào Vercel Dashboard → project `vungalishop` → tab **Storage** → **Create Database** →
   **Marketplace Database Providers** → **Upstash** → **Upstash for Redis**.
2. Chọn Primary Region gần Việt Nam (VD Singapore), giữ gói **Free**, bấm Continue → Connect to
   Project → chọn đúng project `vungalishop`, **để trống ô Custom Prefix**, bấm **Connect**.
3. Vercel tự thêm các biến môi trường vào project theo tên gọi kiểu Vercel KV cũ:
   `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `KV_REST_API_READ_ONLY_TOKEN`, `KV_URL`, `REDIS_URL`.
   Code đã được viết để tự đọc đúng `KV_REST_API_URL` / `KV_REST_API_TOKEN` — không cần đổi tên gì.

## 2. Vercel Blob (lưu file sản phẩm + sinh link tải có hạn)

1. Vercel Dashboard → **Storage** → **Create Database** → **Blob** → chọn **Private** (không phải
   Public) khi được hỏi access mode.
2. Vercel tự thêm biến `BLOB_READ_WRITE_TOKEN` vào project.
3. Upload file sản phẩm (nén .zip) vào đúng đường dẫn đã khai báo trong
   `src/lib/constants.ts` (field `blobPathname` của từng sản phẩm):
   - `products/skill-chinh-sua-anh-ai.zip`
   - `products/skill-edit-video-ai.zip`
   - `products/omni-flow-canvas.zip`

   Cách upload nhanh nhất là dùng Vercel CLI:
   ```bash
   vercel blob put "products/skill-chinh-sua-anh-ai.zip" --pathname "products/skill-chinh-sua-anh-ai.zip" --access private
   ```
   hoặc qua giao diện Storage → Blob → Upload trên dashboard.

   > ⚠️ Xem file `vungalishop-products/README.md` (repo riêng) — sản phẩm "Skill Edit Video AI" và
   > "Omni Flow Canvas" hiện **chưa có file/nội dung hoàn chỉnh để đóng gói**, cần bổ sung trước khi
   > upload.

## 3. SePay (nhận diện chuyển khoản tự động)

Tài khoản nhận tiền của trang là **TPBank `01604753001`** (đổi từ Vietcombank vì Vietcombank cá
nhân chưa được SePay hỗ trợ tự liên kết qua web — đang "Sắp ra mắt"). Dùng chung tài khoản SePay
đã có sẵn (đã kết nối TPBank này từ trước cho dự án khác) — không cần đăng ký SePay mới.

1. Đăng nhập [sepay.vn](https://sepay.vn) bằng tài khoản hiện có.
2. Vào mục **Tích hợp WebHooks** → **Thêm webhook**:
   - Ngân hàng: chọn đúng **TPBank `01604753001`** (quan trọng — chọn nhầm sẽ nhận cả giao dịch
     của dự án khác)
   - Loại sự kiện: tiền vào (incoming)
   - URL: `https://vungalishop.vercel.app/api/webhooks/sepay`
   - Xác thực: chọn **API Key**, tự đặt 1 chuỗi bí mật (vd chuỗi random dài) — đây chính là giá
     trị sẽ điền vào biến `SEPAY_WEBHOOK_APIKEY` ở bước 5.
3. Lưu lại.

## 4. Telegram Bot (thông báo đơn hàng)

1. Mở Telegram, chat với **@BotFather** → gõ `/newbot` → đặt tên bot → nhận **bot token**
   (dạng `123456789:AAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`).
2. Tìm bot vừa tạo trong Telegram, bấm **Start** (nhắn 1 tin bất kỳ) để bot nhận được tin từ bạn.
3. Lấy **chat ID** của bạn: mở trình duyệt, truy cập
   `https://api.telegram.org/bot<TOKEN_VỪA_TẠO>/getUpdates`, tìm trường `"chat":{"id": ...}` trong
   kết quả JSON — đó là `TELEGRAM_CHAT_ID`.

## 5. Thêm biến môi trường vào Vercel

Vào Vercel Dashboard → project → **Settings → Environment Variables**, thêm (Production):

| Tên biến | Giá trị |
|---|---|
| `SEPAY_WEBHOOK_APIKEY` | Chuỗi bí mật bạn đặt ở bước 3.2 |
| `TELEGRAM_BOT_TOKEN` | Token lấy ở bước 4.1 |
| `TELEGRAM_CHAT_ID` | Chat ID lấy ở bước 4.3 |

(`UPSTASH_REDIS_REST_URL/TOKEN` và `BLOB_READ_WRITE_TOKEN` đã tự có từ bước 1–2 nếu tạo qua
Vercel Marketplace.)

Sau khi thêm, **redeploy lại project** (Deployments → nút "..." → Redeploy) để biến môi trường có
hiệu lực.

## Sau khi hoàn tất

- Trang `/san-pham/[slug]` sẽ tự chuyển sang form "Tạo đơn — Lấy mã QR" thay vì hiện QR tĩnh ngay.
- Test thử 1 giao dịch thật (chuyển khoản đúng nội dung mã đơn) để xác nhận: Telegram có báo,
  trang tự hiện nút "Tải sản phẩm ngay".
- Nếu có bước nào lỗi, hệ thống tự rơi về lại luồng thủ công (QR tĩnh + Zalo) — không làm hỏng trải
  nghiệm mua hàng hiện tại.
