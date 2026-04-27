# SKILL: CREATE_LANDINGPAGE - XÂY DỰNG LANDING PAGE TỐI ƯU CHUYỂN ĐỔI

Skill này hướng dẫn AI cách thức tiếp nhận một link sản phẩm, phân tích nội dung và xây dựng một trang Landing Page cao cấp sử dụng công nghệ Next.js & Tailwind CSS.

---

## 🎯 MỤC TIÊU CỐT LÕI
Biến bất kỳ đường dẫn sản phẩm TMĐT nào thành một trang Landing Page chuyên nghiệp, có chiều sâu về nội dung và choáng ngợp về thị giác, nhằm tối ưu hóa tỷ lệ chuyển đổi đơn hàng.

---

## 🛠 QUY TRÌNH THỰC THI (WORKFLOW)

Khi nhận được đầu vào là một **Link Sản Phẩm**, hệ thống phải thực hiện theo trình tự nghiêm ngặt sau (TUYỆT ĐỐI KHÔNG ĐƯỢC LƯỢC BỎ BẤT KỲ MỤC NÀO):

### Bước 1: Nghiên cứu & Trích xuất chi tiết (19 Nội dung tiêu chuẩn)

Tài liệu này quy định chi tiết 19 thành phần nội dung cần thiết để xây dựng một Landing Page bán hàng chuyên nghiệp:

#### 1. Sticky Header (Thanh điều hướng cố định)
*   **Mục đích:** Giúp khách hàng truy cập nhanh các phần quan trọng mà không cần cuộn ngược lên.
*   **Cấu trúc cụ thể:**
    *   3 Tab chính: **THÔNG TIN - PHẢN HỒI - KHUYẾN MÃI**.
    *   Hiệu ứng: Chữ đổi màu hoặc có gạch chân khi cuộn đến phần tương ứng.
    *   Nút "MUA NGAY" nhỏ ở góc phải (chỉ hiện khi cuộn qua Hero Section).

#### 2. Hero Section (Phần mở đầu bùng nổ)
*   **Mục đích:** Giữ chân khách hàng trong 3 giây đầu tiên.
*   **Cấu trúc cụ thể:**
    *   **Headline:** Font chữ đậm, lớn, chứa lợi ích lớn nhất (VD: "Da mịn màng không tì vết suốt 16h").
    *   **Sub-headline:** Giải thích ngắn gọn cách thức đạt được lợi ích đó.
    *   **Media:** Ảnh sản phẩm tách nền lung linh hoặc video ngắn 2-3s giới thiệu tổng quan.
    *   **CTA:** Nút "NHẬN ƯU ĐÃI NGAY" màu nổi bật (Đỏ/Cam), có hiệu ứng rung nhẹ.

#### 3. Core Value Proposition (Giá trị cốt lõi bằng con số)
*   **Mục đích:** Dùng con số để khẳng định chất lượng một cách khoa học.
*   **Cấu trúc cụ thể:**
    *   Hiển thị 3-4 khối tròn hoặc vuông chứa các con số ấn tượng (VD: +96% độ ẩm, 0% kích ứng, 16h bền màu).
    *   Mỗi con số kèm theo một mô tả ngắn 5-7 chữ bên dưới.

#### 4. Visual Demo (Video/GIF trực quan)
*   **Mục đích:** Chứng minh tính năng sản phẩm "mắt thấy tai nghe".
*   **Cấu trúc cụ thể:**
    *   Video/GIF tự động phát (Auto-play).
    *   Nội dung: Test chống nước, test độ che phủ trên da thật, hoặc test độ bền khi va chạm.
    *   Phải có text đè lên video để giải thích hành động (VD: "Thách thức mọi cơn mưa").

#### 5. Pain Point & Solution (Nỗi đau và Giải pháp)
*   **Mục đích:** Đánh vào tâm lý lo lắng và đưa ra "phao cứu sinh".
*   **Cấu trúc cụ thể:**
    *   Sử dụng ảnh chia đôi màn hình (Split screen).
    *   Bên trái: Vấn đề (VD: Da sạm, mụn, nếp nhăn) với tông màu tối.
    *   Bên phải: Kết quả sau khi dùng sản phẩm với tông màu sáng, rạng rỡ.

#### 6. Technology & Ingredients (Công nghệ & Thành phần)
*   **Mục đích:** Lý giải "Tại sao sản phẩm lại tốt như vậy?".
*   **Cấu trúc cụ thể:**
    *   Ảnh Macro cận cảnh các nguyên liệu quý.
    *   Sơ đồ hóa công nghệ dưới dạng icon (VD: Hạt phấn Nano, Màng lọc UV).
    *   Văn phong: Sử dụng các thuật ngữ chuyên môn nhưng dễ hiểu.

#### 7. Visual Product Gallery (Bộ sưu tập hình ảnh chi tiết)
*   **Mục đích:** Cho khách hàng thấy rõ mọi góc cạnh sản phẩm.
*   **Cấu trúc cụ thể:**
    *   Slider hoặc Grid ảnh chất lượng cực cao.
    *   Ảnh chụp các góc: Nắp, thân, đáy, chất kem bên trong, bao bì hộp giấy.

#### 8. Application & Guide (Hướng dẫn sử dụng & Chọn mẫu)
*   **Mục đích:** Giúp khách hàng hình dung việc sử dụng dễ dàng.
*   **Cấu trúc cụ thể:**
    *   Bước 1 - Bước 2 - Bước 3 kèm hình ảnh minh họa nhỏ.
    *   Nếu là mỹ phẩm: Bảng swatches màu trên các tông da khác nhau.

#### 9. Comparison Table (Bảng so sánh trực quan)
*   **Mục đích:** Khẳng định vị thế độc tôn so với đối thủ.
*   **Cấu trúc cụ thể:**
    *   Bảng 2 cột: **SẢN PHẨM CỦA CHÚNG TÔI** vs **SẢN PHẨM KHÁC**.
    *   Sử dụng dấu TÍCH XANH (V) cho ưu điểm của mình và dấu GẠCH CHÉO ĐỎ (X) cho nhược điểm đối thủ.
    *   So sánh về: Giá, Thành phần, Độ bền, Quà tặng, Bảo hành.

#### 10. Expert Endorsement (Chứng thực chuyên gia)
*   **Mục đích:** Mượn uy tín người nổi tiếng/có chuyên môn để tạo lòng tin.
*   **Cấu trúc cụ thể:**
    *   Ảnh chân dung chuyên gia (mặc áo blouse hoặc đồ chuyên dụng).
    *   Họ tên + Chức danh (Tiến sĩ, Bác sĩ, Celeb).
    *   Đoạn trích dẫn ngắn (Quote) khẳng định sự hài lòng về sản phẩm.

#### 11. Feedback Wall (Bức tường phản hồi Shopee Style)
*   **Mục đích:** Tạo lòng tin bằng bằng chứng xã hội thực tế.
*   **Cấu trúc cụ thể:**
    *   Hiển thị tối thiểu 3-5 thẻ đánh giá.
    *   Mỗi thẻ bao gồm:
        *   Tên khách hàng ẩn danh (VD: `m*****n`).
        *   Đánh giá 5 sao vàng.
        *   Phân loại hàng đã mua.
        *   Nội dung text thực tế: "Shop tư vấn nhiệt tình, hàng dùng rất thích...".
        *   **Bộ Media thực tế:** 
            *   Ít nhất 1 Video ngắn (5-10s) quay thực tế sản phẩm.
            *   Bộ 3 ảnh: 1 ảnh vỏ hộp, 1 ảnh trên tay, 1 ảnh sử dụng thực tế.

#### 12. Social Proof Counters (Con số ấn tượng)
*   **Mục đích:** Tạo hiệu ứng đám đông (FOMO).
*   **Cấu trúc cụ thể:**
    *   Dòng chữ chạy hoặc số nhảy: "Đã có 74.390+ khách hàng tin dùng".
    *   Điểm đánh giá trung bình: "4.9/5 sao".

#### 13. FAQ Section (Câu hỏi thường gặp)
*   **Mục đích:** Xóa bỏ những nghi ngại cuối cùng.
*   **Cấu trúc cụ thể:**
    *   Dạng Accordion (Bấm vào để hiện câu trả lời).
    *   Tối thiểu 4 câu hỏi về: Độ an toàn, Thời gian giao hàng, Chính sách đổi trả, Cách kiểm tra hàng chính hãng.

#### 14. Tiered Pricing (Chiến thuật bảng giá Combo)
*   **Mục đích:** Thúc đẩy khách hàng mua nhiều hơn để nhận ưu đãi.
*   **Cấu trúc cụ thể:**
    *   3 khối giá: Mua 1 (Giá gốc) - Mua 2 (Giảm 20%) - Mua 3 (Hời nhất - Giảm 40% + Quà).
    *   Gói hời nhất phải có nhãn "BÁN CHẠY NHẤT" hoặc "NÊN DÙNG".

#### 15. Urgency Elements (Yếu tố tạo sự gấp rút)
*   **Mục đích:** Khiến khách hàng ra quyết định ngay lập tức.
*   **Cấu trúc cụ thể:**
    *   Đồng hồ đếm ngược (Countdown Timer).
    *   Thanh tiến độ: "Chỉ còn 15 suất quà tặng cuối cùng".
    *   Popup thông báo đơn hàng ảo: "A vừa đặt hàng 2 phút trước".

#### 16. Integrated Order Form (Form đặt hàng trực tiếp)
*   **Mục đích:** Giảm tỷ lệ thoát trang khi chuyển hướng giỏ hàng.
*   **Cấu trúc cụ thể:**
    *   **Trình chọn sản phẩm:** Phải có ảnh minh họa cho từng Combo ngay trong form.
    *   **Trường thông tin:** Họ tên, SĐT, Địa chỉ chi tiết.
    *   **Tính năng Dropdown:** Phải tích hợp API hoặc dữ liệu chọn sẵn **Tỉnh/Thành -> Quận/Huyện -> Phường/Xã** để tránh sai địa chỉ.
    *   Nút bấm lớn: "XÁC NHẬN ĐẶT HÀNG & NHẬN ƯU ĐÃI".

#### 17. Trust Badges & Guarantees (Cam kết & Bảo hành)
*   **Mục đích:** Giảm rủi ro cho khách hàng.
*   **Cấu trúc cụ thể:**
    *   Dãy icon cam kết: Đổi trả 7 ngày, Kiểm hàng trước khi trả tiền, Bảo hành 12 tháng.
    *   Hình ảnh Thẻ Bảo Hành của thương hiệu.

#### 18. Visual Logistics (Quy trình đóng gói & Vận chuyển)
*   **Mục đích:** Chứng minh sự chuyên nghiệp và uy tín của shop.
*   **Cấu trúc cụ thể:**
    *   Ảnh/Video nhân viên đóng gói hàng có lớp chống sốc dày.
    *   Hình ảnh các đối tác vận chuyển lớn (GHTK, Viettel Post, v.v.).


#### 19. Post-Purchase Experience (Trang cảm ơn & Xác nhận)
*   **Mục đích:** Chuyên nghiệp hóa quy trình và giảm tỷ lệ đơn ảo.
*   **Cấu trúc cụ thể:**
    *   Một trang riêng hiện ra sau khi đặt hàng thành công.
    *   Nội dung: "Cảm ơn bạn đã đặt hàng!", "Mã đơn hàng: #12345", "Chúng tôi sẽ gọi điện xác nhận trong vòng 15 phút tới. Hãy chú ý điện thoại nhé!".
    *   Có thể thêm một video ngắn cảm ơn từ chủ shop hoặc hướng dẫn sử dụng nhanh.

### Bước 2: Xử lý nội dung chi tiết (Quy trình thực hiện)

Dưới đây là cách thức hệ thống xử lý thông tin từ một link sản phẩm TMĐT (Shopee/Lazada) để tạo ra 19 nội dung chuẩn chuyển đổi:

#### 1. Sticky Header (Thanh điều hướng)
*   **Cách xử lý:** Không lấy trực tiếp từ link. Tự tạo ra dựa trên 3 điểm chạm quan trọng nhất của khách hàng: Thông tin sản phẩm (để hiểu), Phản hồi (để tin), Khuyến mãi (để mua).
*   **Bước thực hiện:** Thiết lập các neo (anchor links) tương ứng với các section chính trên trang.

#### 2. Hero Section (Phần mở đầu)
*   **Cách xử lý:** 
    1.  **Ảnh:** Lấy ảnh bìa sản phẩm đẹp nhất từ link. Nếu ảnh có nền rối, hệ thống phải đề xuất tách nền và đặt vào bối cảnh sang trọng.
    2.  **Headline:** Phân tích tiêu đề Shopee (thường dài và chứa từ khóa SEO) để chắt lọc thành 1 câu duy nhất đánh vào lợi ích cao nhất.
    3.  **Sub-headline:** Lấy các tính năng bổ trợ (VD: "Giảm thâm sau 7 ngày") làm đoạn mô tả ngắn.
    4.  **Nút CTA:** Tạo nút nổi bật với văn phong thúc giục.

#### 3. Core Value Proposition (Giá trị cốt lõi)
*   **Cách xử lý:** Rà soát phần mô tả sản phẩm (Description) để tìm các con số thống kê hoặc các chứng nhận kỹ thuật.
*   **Bước thực hiện:** Chuyển đổi các thông số kỹ thuật khô khan thành các "huy hiệu" (Badges) có số liệu cụ thể (VD: 96% người dùng thấy hiệu quả).

#### 4. Visual Demo (Video/GIF)
*   **Cách xử lý:** Tìm kiếm video giới thiệu trong gallery Shopee. 
*   **Bước thực hiện:** Nếu không có video, hệ thống sẽ đề xuất kịch bản cho 1 đoạn GIF ngắn (VD: Cảnh bóc mặt nạ và đắp lên mắt) để tạo sự trực quan.

#### 5. Pain Point & Solution (Nỗi đau & Giải pháp)
*   **Cách xử lý:** Phân tích các từ khóa về vấn đề mà sản phẩm giải quyết (VD: thâm quầng, bọng mắt, nếp nhăn).
*   **Bước thực hiện:** Tạo ra sự đối lập bằng cách đặt câu hỏi về nỗi đau (Bạn có đang mệt mỏi vì đôi mắt gấu trúc?) và đưa ra sản phẩm là giải pháp cứu cánh.

#### 6. Technology & Ingredients (Thành phần & Công nghệ)
*   **Cách xử lý:** Trích xuất các thành phần chính từ bảng thành phần (Ingredients).
*   **Bước thực hiện:** Tra cứu công dụng của từng thành phần (VD: Centella Asiatica - làm dịu da) và trình bày dưới dạng ảnh Macro kèm text giải thích khoa học.

#### 7. Visual Product Gallery (Bộ sưu tập ảnh)
*   **Cách xử lý:** Tải về và chọn lọc tất cả ảnh trong phần mô tả sản phẩm.
*   **Bước thực hiện:** Sắp xếp theo trình tự: Ảnh bao bì -> Ảnh chất kem -> Ảnh khi sử dụng để khách hàng có cái nhìn toàn diện.

#### 8. Application & Guide (Hướng dẫn sử dụng)
*   **Cách xử lý:** Lấy các bước hướng dẫn từ nhà sản xuất.
*   **Bước thực hiện:** Chuyển đổi thành dạng Infographic (Bước 1, Bước 2, Bước 3) với icon minh họa dễ hiểu.

#### 9. Comparison Table (Bảng so sánh)
*   **Cách xử lý:** Tự phân tích các sản phẩm cùng phân khúc giá rẻ trên thị trường.
*   **Bước thực hiện:** Liệt kê các tiêu chí mà sản phẩm này vượt trội hơn (VD: Độ dày mặt nạ, lượng tinh chất, chứng nhận an toàn).

#### 10. Expert Endorsement (Chứng thực chuyên gia)
*   **Cách xử lý:** Tìm kiếm xem sản phẩm có được bác sĩ hay celeb nào khuyên dùng không.
*   **Bước thực hiện:** Nếu không có, hệ thống sẽ xây dựng phần này dưới dạng "Lời khuyên từ đội ngũ chuyên gia" hoặc trích dẫn các tiêu chuẩn kiểm nghiệm lâm sàng.

#### 11. Feedback Wall (Bức tường phản hồi Shopee Style)
*   **Cách xử lý:** Truy cập phần "Đánh giá" trên Shopee.
*   **Bước thực hiện:** 
    1.  Lọc lấy 5 đánh giá có tâm nhất (có ảnh và text chi tiết).
    2.  Lấy ảnh thực tế khách chụp để đảm bảo tính khách quan.
    3.  Viết lại tên khách dạng ẩn danh (`a*****1`) để giống Shopee 100%.

#### 12. Social Proof Counters (Con số ấn tượng)
*   **Cách xử lý:** Lấy số lượng đã bán và điểm đánh giá trung bình từ Shopee.
*   **Bước thực hiện:** Thiết kế dưới dạng một dải băng (Banner) chạy ngang trang để tạo hiệu ứng đám đông.

#### 13. FAQ Section (Câu hỏi thường gặp)
*   **Cách xử lý:** Tổng hợp từ phần "Hỏi đáp" hoặc các thắc mắc thường gặp của khách hàng trong comment.
*   **Bước thực hiện:** Soạn thảo 4-5 cặp Câu hỏi - Câu trả lời ngắn gọn, tập trung vào việc xóa bỏ nỗi lo (VD: Có bị cay mắt không?).

#### 14. Tiered Pricing (Bảng giá Combo)
*   **Cách xử lý:** Xem giá gốc và các mã giảm giá hiện có trên Shopee.
*   **Bước thực hiện:** Thiết kế 3 gói: Mua thử (1 hộp), Tiết kiệm (2 hộp), Chăm sóc toàn diện (3 hộp) với mức giảm giá tăng dần.

#### 15. Urgency Elements (Yếu tố gấp rút)
*   **Cách xử lý:** Tự tạo dựa trên chiến dịch marketing.
*   **Bước thực hiện:** Cài đặt đồng hồ đếm ngược và thông báo "Chỉ còn X suất quà tặng" để kích thích khách hành động ngay.

#### 16. Integrated Order Form (Form đặt hàng)
*   **Cách xử lý:** Xây dựng cấu trúc form tối giản.
*   **Bước thực hiện:** Tích hợp bộ chọn địa chỉ (Tỉnh/Huyện/Xã) và tự động tính toán tổng tiền dựa trên Combo khách chọn.

#### 17. Trust Badges & Guarantees (Cam kết)
*   **Cách xử lý:** Lấy các cam kết của Shop (Yêu thích/Mall) và chính sách trả hàng của sàn.
*   **Bước thực hiện:** Biến chúng thành các huy hiệu uy tín (VD: 15 ngày trả hàng, Đền 111% nếu hàng giả).

#### 18. Visual Logistics (Đóng gói & Vận chuyển)
*   **Cách xử lý:** Tìm ảnh khách hàng chụp quá trình nhận hàng hoặc ảnh shop tự chụp kho hàng.
*   **Bước thực hiện:** Trình bày hình ảnh hộp hàng có chống sốc và logo các đơn vị vận chuyển (GHTK, Viettel Post).

#### 19. Post-Purchase Experience (Trang cảm ơn)
*   **Cách xử lý:** Tự xây dựng kịch bản chăm sóc khách hàng sau mua.
*   **Bước thực hiện:** Thiết kế giao diện thông báo đặt hàng thành công kèm lời nhắc nhân viên sẽ gọi điện xác nhận trong 15 phút.

---

## 🎨 NGUYÊN LÝ THIẾT KẾ CAO CẤP (DESIGN PRINCIPLES)

### 1. Bố cục Thích ứng (Adaptive Layout Logic)
Tuyệt đối không gò bó giao diện. Ưu tiên thiết kế "phá vỡ khung" (Break the grid) và tràn viền. AI phải chọn bố cục dựa trên ngành hàng:
*   **Hình khối hữu cơ (Organic Shapes):** Mỹ phẩm, Làm đẹp, Sức khỏe (Tạo sự mềm mại).
*   **Đối xứng (Symmetry):** Gia dụng, Y tế (Tạo sự tin cậy).
*   **Bất đối xứng/Lớp chồng (Asymmetry):** Công nghệ, Thời trang (Tạo sự hiện đại).
*   **Tối giản (Minimalist):** Hàng xa xỉ, cao cấp.
*   **Linh hoạt:** Giao diện phải tối ưu để phù hợp hiển thị cho cả thiết bị di động và máy tính

**QUY TẮC BỐ CỤC TỐI ƯU CHO TỪNG NGÀNH HÀNG:**

*   **A. Ngành Mỹ phẩm & Làm đẹp (Cosmetics & Beauty)**
    *   **Nguyên tắc:** "Organic Softness" (Mềm mại hữu cơ).
    *   **Yêu cầu:**
        *   Không dùng khung viền cứng (Borders). Các card hoặc section phải có bo góc (Border-radius) lớn (tối thiểu 32px).
        *   Phối màu Pastel (Màu kem sữa) kết hợp với màuAccent nổi bật (Vàng kim, Hồng san hô).
        *   Sử dụng hiệu ứng **Glassmorphism** (Mờ ảo) cho các nút Call-to-Action.
        *   **Cấu trúc:** Ưu tiên bố cục Split View (Chia đôi màn hình 50/50) ở Hero Section để hiển thị song song Sản phẩm (Trái) và Lợi ích (Phải).

*   **B. Ngành Công nghệ & Thiết bị (Tech & Gadgets)**
    *   **Nguyên tắc:** "Sharp & Premium" (Sắc sảo & Cao cấp).
    *   **Yêu cầu:**
        *   Sử dụng Grid Layout (Lưới) đối xứng và gọn gàng.
        *   Màu sắc chủ đạo: Đen (Black/Dark mode), Xám (Grey), Trắng (White).
        *   Hiệu ứng **Deep Shadows** (Đổ bóng sâu) để tạo chiều sâu 3D cho sản phẩm.
        *   Font chữ: Sans-serif hiện đại, góc cạnh (Ví dụ: Inter, Roboto).
        *   **Cấu trúc:** Bố cục chồng lớp (Stacking) và hiệu ứng Parallax khi cuộn trang.

*   **C. Ngành Thực phẩm & Đồ uống (Food & Beverage)**
    *   **Nguyên tắc:** "Appetizing & Warm" (Ngọt ngào & Ấm cúng).
    *   **Yêu cầu:**
        *   Bảng màu ấm: Vàng nắng, Cam đất, Đỏ cam (Kích thích vị giác).
        *   Sử dụng ảnh chụp cận cảnh (Macro) chất lượng cao.
        *   Thiết kế dạng "Z-pattern" để hướng dẫn ánh mắt người đọc theo đường cong tự nhiên khi đọc văn bản.
        *   Không dùng quá nhiều hiệu ứng làm nặng trang, ưu tiên sự chân thực.

*   **D. Ngành Thời trang & Phụ kiện (Fashion & Accessories)**
    *   **Nguyên tắc:** "Editorial & Elegant" (Biên tập & Sang trọng).
    *   **Yêu cầu:**
        *   Tỷ lệ khung hình dọc (Vertical Ratio) cho ảnh sản phẩm (Giống Instagram).
        *   Sử dụng khoảng trắng (White Space) rộng rãi để tạo cảm giác cao cấp.
        *   Font chữ Serif (Có chân) cho các tiêu đề lớn để tăng tính thời trang.
        *   Sử dụng ảnh Mockup (Trình chiếu sản phẩm lên người mẫu).

*   **E. Ngành Gia dụng & Nội thất (Home & Living)**
    *   **Nguyên tắc:** "Comfort & Trust" (Tiện nghi & Tin cậy).
    *   **Yêu cầu:**
        *   Ưu tiên Layout đối xứng (Symmetry).
        *   Sử dụng màu sắc trung tính, trang nhã (Beige, Navy, White).
        *   Hiển thị hình ảnh sản phẩm trong không gian thực tế (Lifestyle).
        *   **Cấu trúc:** Bố cục dạng Card (Thẻ) dễ quét qua thông tin.


### 2. Hiệu ứng & Tương tác (Premium Interactivity)
*   **Glassmorphism (Cưỡng chế):** Sử dụng các lớp sau cho Header và Card: `backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]`.
*   **Soft & Deep Shadows:** Sử dụng `shadow-2xl` hoặc custom shadow để tạo độ nổi khối (depth) cho sản phẩm.
*   **Scroll Reveal:** Sử dụng thư viện như `framer-motion` hoặc `Intersection Observer` để các section hiện ra mượt mà với hiệu ứng `opacity` và `y-offset`.
*   **Typography Scale:** Tiêu đề (H1, H2) phải có `font-extrabold` và kích thước tối thiểu `text-4xl` trên Mobile và `text-6xl` trên Desktop.
*   **Màu sắc:** Tự động chọn bảng màu dựa trên ảnh sản phẩm (Color Palette Extraction). Luôn sử dụng `linear-gradient` cho các nút bấm và background để tăng tính thẩm mỹ.

### 3. Tối ưu Hiển thị & Di động (Mobile-First Enforcement)
*   **Navigation:** Trên Mobile (screen < 768px), bắt buộc sử dụng **Hamburger Menu** (Icon 3 gạch) bên phải và Logo bên trái. Tuyệt đối không để text menu tràn lan gây đè chữ.
*   **Sticky Order Bar:** Khi người dùng cuộn qua Hero Section, một thanh "Mua ngay" mỏng phải xuất hiện cố định ở trên cùng hoặc dưới cùng màn hình (chứa ảnh nhỏ, tên sản phẩm, giá ưu đãi và nút Mua).
*   **Image Optimization:** Mọi hình ảnh phải được bao bọc trong các thẻ Container có tỉ lệ khung hình (Aspect Ratio) cố định để tránh tình trạng nhảy bố cục (Layout Shift) khi tải trang.

---

## 🏗 YÊU CẦU THỰC THI KỸ THUẬT (EXECUTION)

*   **Framework:** React (Next.js) + Tailwind CSS + Framer Motion (cho hiệu ứng).
*   **Conversion Flow (BẮT BUỘC):** 
    *   **Toàn bộ nút CTA** (Hero, Pricing, Sticky Bar) phải kích hoạt cùng một **OrderModal** (Popup).
    *   Modal phải chứa Form đặt hàng đầy đủ: Chọn Combo, Thông tin cá nhân, Dropdown địa chỉ 3 cấp (Tỉnh -> Huyện -> Xã).
    *   Sử dụng `state` để hiển thị trạng thái Loading (Spinner) và Success (Checkmark) sau khi gửi form.
*   **Responsive:** Đảm bảo điểm số Core Web Vitals cao, hình ảnh được tối ưu hóa bằng `next/image`.

---

## 📊 TIÊU CHUẨN ĐÁNH GIÁ (TEMPLATE THAM KHẢO)
Hệ thống phải so sánh kết quả đầu ra với tệp mẫu chuẩn:
*/Volumes/Work/my-project/skill/create_landingpage/script/template.md*

---

## ⚡ CÂU LỆNH KÍCH HOẠT (TRIGGER)
"Hãy sử dụng skill **create_landingpage** để xây dựng trang Landing Page cho sản phẩm tại link này: [Dán link sản phẩm tại đây]"

---

## 🚫 CÁC LỖI CẦN TRÁNH (COMMON MISTAKES)

Để đảm bảo hiệu quả chuyển đổi cao nhất, tuyệt đối tránh các sai lầm sau:

### 1. Về Nội dung (Content)
*   **Tham chữ (Text-heavy):** Viết quá nhiều đoạn văn dài. Khách hàng thường chỉ lướt xem ảnh và tiêu đề.
*   **Thiếu Social Proof thực tế:** Chỉ dùng ảnh catalogue mà không có ảnh thật từ người dùng.
*   **Nội dung chưa tối ưu:** Sử dụng ngôn ngữ quá kỹ thuật thay vì tập trung vào lợi ích (Benefit) cho khách hàng.

### 2. Về Thiết kế (Design)
*   **Gò bó khung hình (Boxy Design):** Sử dụng quá nhiều đường kẻ ngang, khung bao quanh khiến trang web trông cũ kỹ và bị chia cắt.
*   **Sai tông màu ngành hàng:** VD: Dùng màu sắc rực rỡ, góc cạnh cho các sản phẩm spa/mỹ phẩm (cần sự mềm mại).
*   **Hình ảnh chất lượng thấp:** Sử dụng ảnh bị vỡ nét (Pixelated) hoặc ảnh có watermark của đối thủ.

### 3. Về Kỹ thuật & Chuyển đổi (Technical)
*   **Tốc độ tải chậm:** Hình ảnh quá nặng chưa qua tối ưu hóa khiến trang web load lâu > 3 giây.
*   **Form quá phức tạp:** Yêu cầu quá nhiều thông tin không cần thiết (VD: Email, Ngày sinh) làm tăng tỷ lệ bỏ cuộc.
*   **Nút CTA mờ nhạt:** Nút mua hàng không nổi bật so với nền hoặc bị chìm vào bố cục.
*   **Lỗi hiển thị di động:** Nội dung bị tràn viền hoặc chữ quá nhỏ trên điện thoại.

---

## 🧪 KỊCH BẢN KIỂM THỬ (TEST SCRIPT)

Hệ thống phải tự kiểm tra chất lượng sản phẩm đầu ra theo các kịch bản sau trước khi bàn giao:

### 1. Kiểm thử Nội dung (Content Accuracy Test)
*   **Kịch bản:** Đối chiếu kết quả trích xuất với Link sản phẩm gốc.
*   **Tiêu chuẩn:**
    *   Đầy đủ 19 hạng mục nội dung.
    *   Không có lỗi chính tả, văn phong mượt mà, đúng ngôn ngữ yêu cầu.
    *   Thông số kỹ thuật (Thành phần, Công dụng) phải chính xác 100% so với mô tả gốc.

### 2. Kiểm thử Thiết kế (Design Logic Test)
*   **Kịch bản:** Kiểm tra sự tương thích giữa ngành hàng và bố cục đã chọn.
*   **Tiêu chuẩn:**
    *   Sản phẩm mỹ phẩm phải dùng "Organic Shapes", không dùng viền cứng.
    *   Sản phẩm công nghệ phải dùng Grid đối xứng và hiệu ứng đổ bóng sâu.
    *   Đúng bảng màu (Color Palette) đã định nghĩa cho từng ngành hàng.

### 3. Kiểm thử Chuyển đổi (Conversion Flow Test)
*   **Kịch bản:** Mô phỏng hành trình đặt hàng của người dùng.
*   **Tiêu chuẩn:**
    *   Bấm vào bất kỳ nút CTA nào cũng phải hiện ra Modal đặt hàng (không chuyển trang).
    *   Form đặt hàng phải có đầy đủ Dropdown Tỉnh/Thành và tự động tính toán giá Combo.
    *   Trang Cảm ơn hiện ra ngay sau khi nhấn "Xác nhận đặt hàng".

### 4. Kiểm thử Hiển thị (Responsive Test)
*   **Kịch bản:** Kiểm tra hiển thị trên ít nhất 2 kích thước (Mobile và Desktop).
*   **Tiêu chuẩn:**
    *   Trên Mobile: Các phần tử được xếp chồng dọc, cỡ chữ tiêu đề phù hợp, không bị tràn viền ngang.
    *   Trên Desktop: Tận dụng không gian rộng, ảnh lớn, hiệu ứng Glassmorphism rõ nét.

### 5. Kiểm thử Hiệu ứng (Interaction Test)
*   **Kịch bản:** Cuộn trang chậm từ trên xuống dưới.
*   **Tiêu chuẩn:**
    *   Các section hiện ra mượt mà nhờ hiệu ứng Scroll Reveal.
    *   Sticky Header hoạt động ổn định và đổi màu tab khi cuộn.
