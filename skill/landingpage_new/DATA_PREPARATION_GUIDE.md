# HƯỚNG DẪN CHUẨN BỊ DỮ LIỆU ĐẦU VÀO CHO LANDING PAGE

Tài liệu này quy định cách cấu trúc thư mục và nội dung dữ liệu để AI (Skill: `landingpage_new`) có thể tiếp nhận và xây dựng trang Landing Page tối ưu nhất.

---

## 📂 CẤU TRÚC THƯ MỤC TỔNG QUÁT
Mỗi sản phẩm mới cần tạo một thư mục riêng (Ví dụ: `project/ten-san-pham/`) với cấu trúc như sau:
- `description`: File text chứa mô tả chi tiết sản phẩm.
- `image/`: Thư mục chứa ảnh và video sản phẩm.
    - `option/`: Thư mục con chứa ảnh cho từng gói sản phẩm (Combo).
- `review/`: Thư mục chứa dữ liệu phản hồi khách hàng.
    - `description`: File text chứa nội dung review.
    - `image_review/`: Thư mục con chứa ảnh/video thực tế của khách.

---

## 📝 1. CHI TIẾT FILE `description`
Nội dung lấy từ Shopee, Website chính thức hoặc tự biên soạn. Bắt buộc phải theo định dạng sau:

### Các phần bắt buộc:
1.  **Tên sản phẩm:** Phải nằm ở dòng đầu tiên.
2.  **Phân loại (Option):** Liệt kê các gói mua hàng. Mỗi gói bao gồm: Tên gói, Giá gốc, % Giảm giá, Giá bán thực tế.
3.  **Thông tin chi tiết:** Công dụng, thành phần, hướng dẫn sử dụng.

**Ví dụ:**
```text
Sản phẩm: Kem Dưỡng Mềm Da NIVEA Soft Crème (200 ml)
Phân loại (Option):
* Kem Dưỡng Mềm Da NIVEA Soft (200 ml) Giá gốc 229.000đ, Giảm 14%, Giá bán 197.000đ
* [Gói khác nếu có]...

THÔNG TIN SẢN PHẨM: ...
CÔNG DỤNG: ...
HƯỚNG DẪN SỬ DỤNG: ...
```

---

## 🖼️ 2. CHI TIẾT THƯ MỤC `image/`
Đây là nơi chứa toàn bộ "nguyên liệu" hình ảnh/video để AI lựa chọn đưa vào 20 section của trang.

### Thư mục `image/option/` (BẮT BUỘC):
Chứa ảnh đại diện cho các gói sản phẩm đã liệt kê trong file `description`.
- **Quy tắc đặt tên:** `option1.webp` (tương ứng gói 1), `option2.webp` (gói 2),...
- **Định dạng:** Ưu tiên `.webp` hoặc `.png` tách nền để chuyên nghiệp hơn.

### Thư mục `image/` (Gốc):
- Chứa các ảnh Lifestyle, ảnh chụp mọi góc cạnh của sản phẩm, ảnh infographics có sẵn.
- Chứa video giới thiệu/test sản phẩm (nếu có).
- AI sẽ tự động chọn lọc những ảnh đẹp nhất để đưa vào Gallery và các phần mô tả.

---

## ⭐ 3. CHI TIẾT THƯ MỤC `review/`
Phần này cực kỳ quan trọng để tạo lòng tin (Social Proof). Nên lấy ít nhất 3 review chất lượng từ Shopee.

### File `review/description`:
Chứa nội dung chữ của các review.
- **Quy tắc:** Đánh số thứ tự Review 1, Review 2,... rõ ràng.
- Bao gồm: Tên khách hàng, Số sao đánh giá, Ngày tháng, Nội dung phản hồi.

### Thư mục `review/image_review/` (BẮT BUỘC):
Chứa toàn bộ ảnh và video đi kèm của các review trên.
- **Quy tắc đặt tên (Quan trọng):**
    - Ảnh của review 1: `review1_image1.webp`, `review1_image2.webp`,...
    - Video của review 1: `review1_video.mp4`
    - Tương tự cho review 2: `review2_image1.webp`, `review2_video.mp4`,...

---

## 💡 MỘT SỐ LƯU Ý QUAN TRỌNG
1. **Chất lượng:** Ảnh review nên là ảnh chụp thật bằng điện thoại (không cần quá trau chuốt) để tạo sự chân thực.
2. **Video:** Nếu có video review, AI sẽ ưu tiên hiển thị ở vị trí đầu tiên trong bộ media của review đó.
3. **AI Generation:** Nếu bạn thiếu ảnh thành phần (VD: tinh dầu Jojoba) hoặc ảnh bác sĩ, AI sẽ tự động tạo sinh dựa trên ảnh sản phẩm bạn cung cấp trong thư mục `image/`. Vì vậy, hãy đảm bảo có ít nhất 1-2 ảnh sản phẩm rõ nét nhất ở thư mục gốc.
