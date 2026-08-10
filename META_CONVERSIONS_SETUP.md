# Meta Conversions API — đo đơn đã thanh toán

Code chỉ gửi `Purchase` sau khi webhook SePay xác nhận đúng mã đơn và đúng số tiền. Mã đơn `VAS...`
được dùng làm `event_id` để tránh Meta tính trùng một giao dịch.

## Cấu hình

1. Vào **Meta Events Manager** và chọn đúng Pixel/Dataset của Vừng Ali Shop.
2. Mở **Settings → Conversions API → Set up manually → Generate access token**.
3. Thêm các biến Production trong Vercel:

| Tên biến | Giá trị |
|---|---|
| `META_PIXEL_ID` | ID Pixel/Dataset trong Events Manager |
| `META_CONVERSIONS_API_TOKEN` | Access token vừa tạo; không ghi vào mã nguồn |
| `META_GRAPH_API_VERSION` | `v26.0` (không bắt buộc; code mặc định dùng v26.0) |
| `META_TEST_EVENT_CODE` | Mã ở tab Test Events; chỉ thêm khi kiểm thử, sau đó phải xoá |

4. Redeploy Production.

## Kiểm thử

1. Mở **Events Manager → Test Events**.
2. Tạo một đơn mới trên website và thanh toán đúng số tiền.
3. Xác nhận `Purchase` có `event_id` trùng mã đơn, `currency = VND` và `value` đúng giá sản phẩm.
4. Xoá `META_TEST_EVENT_CODE` rồi redeploy lại để các đơn thật đi vào báo cáo chính thức.

Nếu thiếu hai biến bắt buộc (`META_PIXEL_ID`, `META_CONVERSIONS_API_TOKEN`) hoặc Meta tạm lỗi,
việc xác nhận thanh toán và giao sản phẩm vẫn chạy bình thường; hệ thống chỉ ghi log/cảnh báo rằng
sự kiện quảng cáo chưa gửi được.
