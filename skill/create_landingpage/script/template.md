# Kết Quả Nội Dung Landing Page: Mặt Nạ Mắt WIS Crystal Smooth

Dưới đây là nội dung chi tiết cho từng section của Landing Page, được trích xuất và tối ưu hóa từ dữ liệu Shopee WIS Official.

---

## 1. Sticky Header
*   **Menu:** [THÔNG TIN] | [PHẢN HỒI] | [KHUYẾN MÃI]
*   **Action:** Nút "MUA NGAY" màu cam nổi bật ở góc phải.

## 2. Hero Section
*   **Tên sản phẩm (BẮT BUỘC hiển thị):** Mặt Nạ Mắt WIS Crystal Smooth Eye Patch *(lấy nguyên văn từ file description, hiển thị dưới dạng badge/tag phía trên Headline)*
*   **Headline:** ĐÁNH BAY QUẦNG THÂM - ĐÔI MẮT RẠNG RỠ CHỈ SAU 15 PHÚT
*   **Sub-headline:** Mặt nạ mắt WIS Crystal Smooth - Trải nghiệm "Ice Mask" mát lạnh, xóa tan bọng mắt và nếp nhăn tức thì.
*   **Media:** Ảnh hũ mặt nạ màu xanh sapphire sang trọng, bên cạnh là những miếng gel pha lê trong suốt.
*   **CTA:** [NHẬN ƯU ĐÃI 46% NGAY]

## 3. Core Value Proposition
*   **Huy hiệu 1:** 60 Miếng (30 Cặp) - Chăm sóc đôi mắt suốt 1 tháng.
*   **Huy hiệu 2:** +98% Độ ẩm - Cấp nước tức thì cho vùng da mắt mỏng manh.
*   **Huy hiệu 3:** 100% Cảm giác mát lạnh - Giảm sưng bọng mắt ngay khi chạm vào da.

## 4. Visual Demo
*   **QUY TẮC NỘI DUNG:** Video/GIF phải thể hiện ĐÚNG hành động mô tả (VD: tán kem, bóc mặt nạ). Nếu không có video thực tế phù hợp, PHẢI dùng `generate_image` để tạo ảnh thay thế hoặc đổi text mô tả cho khớp với video (VD: giới thiệu bao bì).
*   **Nội dung Video/GIF:** Cảnh một cô gái bóc miếng mặt nạ gel pha lê màu xanh, đắp nhẹ nhàng lên vùng mắt. Miếng gel ôm sát, không bị rơi khi di chuyển.

## 5. Pain Point & Solution
*   **Nỗi đau:** "Bạn mệt mỏi vì đôi mắt 'Gấu Trúc' sau những đêm thức khuya làm việc hay lướt điện thoại?"
*   **Giải pháp:** WIS Crystal Smooth - Không chỉ là mặt nạ mắt, đó là "liều thuốc bổ" phục hồi sinh khí cho cửa sổ tâm hồn của bạn.
*   **Lưu ý thiết kế:** Áp dụng bố cục **Split (chia đôi màn hình)**. Tuyệt đối KHÔNG đè HTML text lên ảnh có sẵn text/đồ họa phức tạp. Sử dụng ảnh gốc dạng `object-contain` một bên, bên còn lại là khối màu solid chứa văn bản.

## 6. Technology & Ingredients (Bố cục Card Grid)
*   **Thành phần 1: Chiết xuất rễ Hoàng Liên.** (Ảnh phía trên: `object-contain`). Giúp thắt chặt cơ da, giảm tình trạng chảy xệ vùng bọng mắt.
*   **Thành phần 2: Rau má (Centella Asiatica).** (Ảnh phía trên: `object-contain`). Làm dịu tức thì, giảm kích ứng cho vùng da nhạy cảm nhất.
*   **Thành phần 3: Cải bắp nhăn.** (Ảnh phía trên: `object-contain`). Nuôi dưỡng bề mặt da mịn màng, làm mờ các vết chân chim nhỏ.
*   **QUY TẮC ẢNH AI TRONG CARD:** Khi dùng `generate_image` tạo ảnh minh họa cho Card, prompt PHẢI yêu cầu nội dung chính (chủ thể, text) nằm tập trung ở vùng trung tâm ảnh với safe margin xung quanh. Chỉ định tỷ lệ khung hình phù hợp với kích thước Card (VD: "landscape 16:9"). Nếu ảnh chứa text, BẮT BUỘC dùng `object-contain` thay vì `object-cover`.

## 7. Visual Product Gallery
*   **Lưu ý bộ lọc:** Đã tự động kiểm tra và lọc bỏ các ảnh bị lặp lại thông điệp (chỉ khác màu vỏ).
*   **PHÂN LOẠI BẮT BUỘC:** Đã phân loại ảnh thành 3 nhóm: (a) Ảnh sản phẩm thuần túy, (b) Ảnh giải thưởng/bằng sáng chế/chứng nhận, (c) Ảnh infographic. Ảnh nhóm (b) đã được tách riêng thành section "Giải Thưởng & Chứng Nhận Uy Tín" để tối đa hóa uy tín.
*   **Ảnh 1 (Gallery):** Cận cảnh chất gel pha lê trong suốt, lấp lánh ánh xanh (Sử dụng `object-cover` cho ảnh bối cảnh/lifestyle).
*   **Ảnh 2 (Gallery):** Hũ sản phẩm có nắp đậy 2 lớp chắc chắn, tặng kèm thìa lấy mặt nạ vệ sinh.
*   **Ảnh 3 (Gallery - AI Generated):** Ảnh Swatch chất gel trên tay người mẫu, được tạo thêm bằng tool `generate_image` để làm phong phú gallery do ảnh gốc nghèo nàn.

## 7b. Giải Thưởng & Chứng Nhận Uy Tín (Tách từ Gallery)
*   **Nguồn:** Các ảnh nhóm (b) đã được tách ra từ bước phân loại Gallery.
*   **Thiết kế:** Section riêng biệt với tiêu đề nổi bật, hiển thị các ảnh giải thưởng/bằng sáng chế/chứng nhận bằng `object-contain` để hiển thị đầy đủ.
*   **Vị trí:** Đặt gần "Trust Badges & Guarantees" hoặc sau "Expert Endorsement" để củng cố lòng tin.

## 8. Application & Guide
*   **Bước 1:** Làm sạch mặt và thấm khô.
*   **Bước 2:** Dùng thìa lấy 2 miếng mặt nạ và đắp lên vùng dưới mắt.
*   **Bước 3:** Thư giãn 15-20 phút, sau đó gỡ ra và vỗ nhẹ để tinh chất thẩm thấu (Không cần rửa lại).

## 9. Comparison Table
| Tiêu chí | WIS Crystal Smooth | Mặt nạ giấy thông thường |
| :--- | :--- | :--- |
| **Chất liệu** | Gel pha lê (Hydrogel) ôm sát | Giấy mỏng, dễ bay hơi |
| **Cảm giác** | Mát lạnh sâu, giảm sưng | Bình thường, dễ bị khô |
| **Đa năng** | Dùng cho mắt, trán, cổ, khóe miệng | Chỉ dùng cho mắt |
| **Giá trị** | Hũ 60 miếng tiết kiệm | Gói lẻ đắt đỏ |

## 10. Expert Endorsement (Sử dụng ảnh AI chuyên nghiệp)
*   **Ảnh chuyên gia (AI Generated):** Chân dung một chuyên gia trang điểm nổi tiếng, mặc vest lịch lãm, tay cầm hũ mặt nạ WIS giới thiệu trước ống kính.
*   **BẮT BUỘC - SẢN PHẨM PHẢI GIỐNG THỰC TẾ:** Khi gọi `generate_image`, đã truyền ảnh sản phẩm gốc vào `ImagePaths` để làm tham chiếu. Prompt mô tả chi tiết bao bì sản phẩm (hình dạng hũ, màu xanh sapphire, logo WIS) để đảm bảo sản phẩm trong tay chuyên gia trùng khớp với sản phẩm thực tế.
*   **Quote:** "Chúng tôi tin rằng việc chăm sóc vùng da mắt nên là một trải nghiệm thư giãn như tại Spa. WIS mang công nghệ Hydrogel tối tân nhất vào hũ mặt nạ Crystal Smooth để ai cũng có thể trẻ hóa đôi mắt tại nhà." - *Đội ngũ chuyên gia Da liễu WIS.*

## 11. Feedback Wall (Map chính xác Media)
*   **Khách hàng `c*****t`:** "Mua vì thấy quảng cáo TikTok, dùng thử thấy mát lạnh rất thích, bọng mắt có vẻ bớt sưng sau khi ngủ dậy." (Media Map: `review1_video.mp4`, `review1_image1.webp`).
*   **Khách hàng `0*****c`:** "Chất gel mềm mịn, đắp lên rất phê. Giao hàng nhanh, shop đóng gói kỹ." (Media Map: `review2_image1.webp`).
*   **Khách hàng `t*****u`:** "Đã dùng 1 tuần, thấy mắt đỡ mỏi hơn hẳn, quầng thâm cũng nhạt bớt. Đáng đồng tiền bát gạo." (Media Map: `review3_video.mp4`, `review3_image1.webp`, `review3_image2.webp`).

## 12. Social Proof Counters
*   **Số liệu:** "Hơn 8.800+ đánh giá 5 sao từ người dùng Shopee - Đã bán 15.000+ hũ trên toàn khu vực."

## 13. FAQ Section
*   **Hỏi:** Da nhạy cảm có dùng được không?
*   **Đáp:** Có. Với chiết xuất rau má lành tính, sản phẩm an toàn cho mọi loại da.
*   **Hỏi:** Một hũ dùng được bao lâu?
*   **Đáp:** Một hũ gồm 60 miếng (30 cặp), nếu dùng hàng ngày bạn có thể sử dụng liên tục trong 1 tháng.

## 14. Tiered Pricing
*   **Gói 1: Mua thử.** 1 Hũ giá 140.800đ (Tiết kiệm 46%).
*   **Gói 2: Liệu trình 2 tháng.** 2 Hũ giá 260.000đ (Tặng 1 mặt nạ môi).
*   **Gói 3: Chăm sóc toàn diện.** 3 Hũ giá 360.000đ (Freeship + Tặng 2 mặt nạ môi).

## 15. Urgency Elements
*   **Đếm ngược:** [Ưu đãi kết thúc sau 00:14:55]
*   **Thông báo:** "Chỉ còn 24 hũ cuối cùng với giá 140.800đ!"

## 16. Integrated Order Form (Cấu trúc chống vỡ max-h-[90vh])
*   **Cấu trúc UI Bắt Buộc:** 
    *   Sử dụng Popup Modal chia 3 phần rõ rệt. Đảm bảo padding và gap đủ lớn để trên mobile không bị dính chữ.
    *   **BẮT BUỘC:** Phải có nút đóng (Icon X) và cho phép đóng khi nhấn ra ngoài vùng Modal (Overlay click).
*   **Header (Fixed top):** Tiêu đề "Hoàn Tất Đặt Hàng".
*   **Body (overflow-y-auto):** 
    * Fields: Họ tên | Số điện thoại | Combo lựa chọn | Địa chỉ (Dropdown: Tỉnh -> Huyện -> Xã)
*   **Footer (Fixed bottom):** [XÁC NHẬN ĐẶT HÀNG - THANH TOÁN KHI NHẬN HÀNG].

## 17. Trust Badges & Guarantees
*   [HOÀN TIỀN 111% NẾU PHÁT HIỆN HÀNG GIẢ]
*   [15 NGÀY ĐỔI TRẢ MIỄN PHÍ]
*   [KIỂM TRA HÀNG TRƯỚC KHI THANH TOÁN]

## 18. Visual Logistics
*   **Hình ảnh:** Ảnh chụp các hộp hàng WIS được quấn bong bóng chống sốc cẩn thận, dán tem niêm phong Official Store. Logo: GHTK, Shopee Express.

## 19. Post-Purchase Experience
*   **Thông báo:** "Đặt hàng thành công! Đội ngũ WIS sẽ liên hệ với bạn trong vòng 15 phút để xác nhận đơn hàng. Cảm ơn bạn đã tin dùng sản phẩm của chúng tôi!"

## 20. Footer (Chân trang & Bản quyền)
*   **Logo & Thương hiệu:** +WIS+ Professional — *"Khoa học chăm sóc da, trao gửi vẻ đẹp thật"*
*   **Tên công ty:** Công Ty TNHH Phân Phối Mỹ Phẩm WIS Việt Nam *(placeholder — chủ shop cập nhật)*
*   **Địa chỉ:** 123 Đường Láng, Quận Đống Đa, Hà Nội *(placeholder)*
*   **Hotline CSKH:** 1900-6868 *(placeholder)*
*   **Email hỗ trợ:** support@wisvietnam.com *(placeholder)*
*   **Liên kết nhanh:** [Về sản phẩm] | [Đánh giá khách hàng] | [Ưu đãi hôm nay] | [Chính sách đổi trả]
*   **Bản quyền:** © 2025 +WIS+ Vietnam. All rights reserved.
*   **Lưu ý:** Các thông tin đánh dấu *(placeholder)* cần được chủ shop cập nhật trước khi công khai trang.
