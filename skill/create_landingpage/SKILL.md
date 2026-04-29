# SKILL: CREATE_LANDINGPAGE - XÂY DỰNG LANDING PAGE TỐI ƯU CHUYỂN ĐỔI

Skill này hướng dẫn AI cách thức tiếp nhận một **Đường dẫn thư mục (Folder Path)** chứa dữ liệu sản phẩm (Mô tả, Hình ảnh, Video, Đánh giá), phân tích nội dung và xây dựng một trang Landing Page cao cấp sử dụng công nghệ Next.js & Tailwind CSS.

---

## 🎯 MỤC TIÊU CỐT LÕI
Biến bất kỳ đường dẫn sản phẩm TMĐT nào thành một trang Landing Page chuyên nghiệp, có chiều sâu về nội dung và choáng ngợp về thị giác, nhằm tối ưu hóa tỷ lệ chuyển đổi đơn hàng.

---

## 🛠 QUY TRÌNH THỰC THI (WORKFLOW)

Khi nhận được đầu vào là một **Đường dẫn Thư mục (Folder Path)**, hệ thống phải thực hiện theo trình tự nghiêm ngặt sau. 

> [!IMPORTANT]
> **ĐIỀU KIỆN TIÊN QUYẾT BẮT BUỘC:** Trang Landing Page đầu ra PHẢI HIỂN THỊ ĐỦ 19 HẠNG MỤC NỘI DUNG bên dưới. Việc thiếu sót bất kỳ hạng mục nào (ngay cả khi dữ liệu đầu vào nghèo nàn) đều bị coi là KHÔNG ĐẠT YÊU CẦU. Nếu thiếu dữ liệu, AI PHẢI chủ động sử dụng kiến thức ngành hoặc công cụ `generate_image` để lấp đầy khoảng trống đó.

### Bước 1: Nghiên cứu & Trích xuất chi tiết từ Thư mục đầu vào

Hệ thống truy cập thư mục được cung cấp, đọc tất cả các tệp văn bản và xem xét các tệp hình ảnh/video để phân bổ vào 19 hạng mục nội dung tiêu chuẩn:

#### 1. Sticky Header (Thanh điều hướng cố định)
*   **Mục đích:** Giúp khách hàng truy cập nhanh các phần quan trọng và tạo nhận diện thương hiệu.
*   **Cấu trúc cụ thể (BẮT BUỘC):**
    *   **Desktop:** [Logo (Trái)] - [Menu Text: THÔNG TIN, PHẢN HỒI, KHUYẾN MÃI (Giữa)] - [Nút MUA NGAY (Phải)].
    *   **Mobile (BẮT BUỘC):** [Logo (Trái)] - [Nút MUA NGAY (Cạnh Hamburger)] - [Hamburger Menu Icon (Phải)].
    *   **Hamburger Menu:** Khi bấm vào phải mở ra Drawer/Overlay chứa các link điều hướng lớn, dễ bấm.
    *   **Hiệu ứng:** 
        *   Nền Header dùng Glassmorphism, chữ đổi màu khi cuộn.
        *   **Nút MUA NGAY (BẮT BUỘC):** Phải có hiệu ứng thu hút thị giác (VD: Rung nhẹ - wiggle định kỳ, hoặc hiệu ứng tỏa sáng - pulse/glow mượt mà) để thôi thúc khách hàng hành động.

#### 2. Hero Section (Phần mở đầu bùng nổ)
*   **Mục đích:** Giữ chân khách hàng trong 3 giây đầu tiên.
*   **Cấu trúc cụ thể:**
    *   **Tên sản phẩm (BẮT BUỘC):** Phải hiển thị tên đầy đủ của sản phẩm (lấy từ trường "Tên sản phẩm" trong file `description`) phía trên Headline. Hiển thị dưới dạng badge/tag nhỏ hoặc sub-label để người đọc nhận diện ngay sản phẩm. KHÔNG được bỏ qua hoặc rút gọn tên sản phẩm.
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

#### 5. Pain Point & Solution (Chứng minh hiệu quả Before & After)
*   **Mục đích:** Đánh vào tâm lý lo lắng và ngay lập tức đưa ra bằng chứng thuyết phục về hiệu quả sản phẩm.
*   **Cấu trúc cụ thể (BẮT BUỘC):**
    *   **Bố cục So sánh (Comparison Layout):** Đối với các ngành hàng có kết quả nhìn thấy được (Mỹ phẩm, làm đẹp, vệ sinh nhà cửa, sửa chữa...), Section này PHẢI được trình bày dưới dạng **Before & After (Trước và Sau)**.
    *   **QUY TRÌNH THỰC THI BẮT BUỘC (MANDATORY STEPS):**
        1. **Kiểm tra dữ liệu gốc:** AI phải rà soát toàn bộ thư mục `image` để tìm ảnh có nội dung so sánh thực tế giữa tình trạng trước và sau khi dùng sản phẩm.
        2. **Tự động tạo ảnh bằng AI:** Nếu dữ liệu đầu vào KHÔNG có ảnh so sánh rõ rệt, AI BẮT BUỘC sử dụng công cụ `generate_image` để tạo một bức ảnh split-screen. 
        3. **Yêu cầu thị giác:** Ảnh phải chia đôi rõ rệt. Bên trái (Before) thể hiện tình trạng vấn đề (VD: da đen sạm, quần áo bẩn, thiết bị cũ). Bên phải (After) thể hiện sự thay đổi ngoạn mục (VD: da trắng rạng rỡ, sạch bóng, như mới) sau khi sử dụng sản phẩm.
    *   **QUY TẮC HIỂN THỊ HÌNH ẢNH (BẮT BUỘC):**
        *   **Tính toàn vẹn của kết quả:** Tuyệt đối KHÔNG được sử dụng khối màu đặc (solid color block) che khuất hoàn toàn ảnh "Sau". Ảnh "Sau" phải hiển thị rõ rệt gương mặt/vấn đề đã được giải quyết.
        *   **Xử lý Text Overlay:** Nếu đè chữ lên ảnh "Sau", bắt buộc sử dụng lớp phủ Gradient mờ (Transparent Gradient) để chữ dễ đọc nhưng KHÔNG được làm mờ chủ thể kết quả.
        *   **Đồng nhất chủ thể:** Ảnh Before và After phải có cùng tỷ lệ zoom và vị trí chủ thể.
    *   **Bố cục Mobile:** Trên Mobile, ưu tiên xếp chồng: Ảnh Before/After (chia đôi) ở trên, Khối nội dung giải thích ở dưới. Tuyệt đối không để nội dung đè lên ảnh.
    *   **Văn phong:** Sử dụng câu hỏi xoáy vào nỗi đau và câu khẳng định về giải pháp đột phá.

#### 6. Technology & Ingredients (Công nghệ & Thành phần)
*   **Mục đích:** Lý giải "Tại sao sản phẩm lại tốt như vậy?".
*   **Cấu trúc cụ thể (BẮT BUỘC):**
    *   Phải liệt kê chi tiết các thành phần chính (Key Ingredients) được trích xuất từ dữ liệu.
    *   Ảnh Macro cận cảnh các nguyên liệu quý hoặc ảnh minh họa sạch.
    *   Sơ đồ hóa công nghệ dưới dạng icon (VD: Hạt phấn Nano, Màng lọc UV).
    *   Văn phong: Sử dụng các thuật ngữ chuyên môn nhưng dễ hiểu, nhấn mạnh công dụng của từng thành phần.
    *   **Bố cục:** Bắt buộc dùng Card Grid (Ảnh trên, Text dưới) để đảm bảo tính chuyên nghiệp.
    *   **Tính liên quan của hình ảnh (CRITICAL):** Mỗi thành phần liệt kê PHẢI có hình ảnh minh họa liên quan mật thiết. TUYỆT ĐỐI KHÔNG dùng ảnh sản phẩm chung chung cho các thẻ thành phần.
    *   **Sử dụng AI:** Nếu không có ảnh thành phần cụ thể, AI PHẢI dùng `generate_image` để tạo ảnh bối cảnh theo công thức: **[Ảnh sản phẩm thực tế làm tham chiếu] + [Mô tả về nguyên liệu tươi/nguồn gốc thành phần]**. 
    *   *Ví dụ:* Nếu thành phần là Vitamin C, ảnh phải là quả cam tươi đặt cạnh sản phẩm. Nếu là HA, ảnh phải là các giọt nước tinh thể đặt cạnh sản phẩm.
    *   **Chất lượng hiển thị:** Ảnh trong Card Ingredients phải lớn, rõ nét trên cả Desktop và Mobile. Sử dụng `h-64` hoặc `h-72` để tăng diện tích hiển thị ảnh. Phải đảm bảo rằng khi hiển thị trên Mobile thì ảnh cũng sẽ hiển thị full và không bị cắt bất cứ phần nào.
    *   Bố cục: Card Grid chuẩn (Ảnh lớn ở trên, Text ở dưới).

#### 7. Visual Product Gallery (Bộ sưu tập hình ảnh thực tế / Lifestyle)
*   **Mục đích:** Cho khách hàng thấy rõ mọi góc cạnh và sự chân thực của sản phẩm trong cuộc sống.
*   **Cấu trúc cụ thể (BẮT BUỘC):**
    *   **Tính "Thực tế" (Authenticity):** Gallery PHẢI là ảnh Lifestyle (sản phẩm trong bối cảnh sử dụng thật). TUYỆT ĐỐI KHÔNG đưa các thông tin khô khan như chính sách vận chuyển, kho bãi hay infographic kỹ thuật vào section này.
    *   **Sử dụng AI tạo bối cảnh:** Nếu dữ liệu chỉ có ảnh sản phẩm nền trắng, AI PHẢI dùng `generate_image` để đặt sản phẩm vào bối cảnh thực tế đời thường (Lifestyle).
    *   *Ví dụ:* Với mỹ phẩm, đặt trên bàn trang điểm sang trọng. Với đồ gia dụng, đặt trong không gian bếp ấm cúng.
    *   **QUY TẮC PHÂN LOẠI ẢNH BẮT BUỘC (Gallery Classification):**
    *   AI PHẢI phân tích nội dung từng ảnh trong thư mục dữ liệu và phân loại thành các nhóm: (a) Ảnh sản phẩm thuần túy (chụp góc cạnh, bao bì, chất sản phẩm), (b) Ảnh Giải thưởng / Bằng sáng chế / Chứng nhận, (c) Ảnh Infographic / Thông số kỹ thuật.
    *   **Ảnh nhóm (b) - Giải thưởng & Bằng sáng chế:** TUYỆT ĐỐI KHÔNG đưa vào Gallery chung. Phải tách ra thành một section riêng biệt (đặt gần section "Trust Badges & Guarantees" hoặc sau "Expert Endorsement") với tiêu đề như "Giải Thưởng & Chứng Nhận Uy Tín" để tối đa hóa tác dụng tạo lòng tin. Ảnh giải thưởng/bằng sáng chế khi đứng riêng sẽ nổi bật và có tác dụng thuyết phục mạnh mẽ hơn rất nhiều so với khi bị trộn lẫn với ảnh sản phẩm.
    *   **Ảnh nhóm (c) - Infographic:** Có thể dùng trong Gallery nhưng phải sử dụng `object-contain` để hiển thị đầy đủ nội dung.
    *   **Ảnh nhóm (a):** Đây mới là ảnh chính cho Gallery. Sắp xếp theo trình tự mạch lạc (tổng quan → chi tiết → cận cảnh chất sản phẩm).

#### 8. Application & Guide (Hướng dẫn sử dụng & Các bước thực hiện)
*   **Mục đích:** Giúp khách hàng hình dung việc sử dụng dễ dàng và đạt hiệu quả cao nhất.
*   **Cấu trúc cụ thể (BẮT BUỘC):**
    *   **Quy trình các bước (Steps):** Phải trình bày dưới dạng "Bước 1 - Bước 2 - Bước 3..." với icon hoặc hình ảnh minh họa nhỏ cho từng bước.
    *   **Hướng dẫn chi tiết:** Cung cấp thông tin về liều lượng, tần suất và các lưu ý quan trọng khi dùng sản phẩm.
    *   Nếu là mỹ phẩm: Bảng swatches màu hoặc ảnh minh họa kết cấu (texture) trên da.

#### 9. Comparison Table (Bảng so sánh trực quan)
*   **Mục đích:** Khẳng định vị thế độc tôn so với đối thủ.
*   **Cấu trúc cụ thể (BẮT BUỘC):**
    *   Bảng 2 cột: **SẢN PHẨM CỦA CHÚNG TÔI** vs **SẢN PHẨM KHÁC**.
    *   Sử dụng dấu TÍCH XANH (V) cho ưu điểm của mình và dấu GẠCH CHÉO ĐỎ (X) cho nhược điểm đối thủ.
    *   So sánh về: Giá, Thành phần, Độ bền, Quà tặng, Bảo hành.

#### 10. Expert Endorsement (Chứng thực chuyên gia)
*   **Mục đích:** Mượn uy tín người nổi tiếng/có chuyên môn để tạo lòng tin.
*   **Cấu trúc cụ thể:**
    *   **Ảnh chân dung chuyên gia (BẮT BUỘC):** Sử dụng ảnh bác sĩ/chuyên gia trang điểm cầm sản phẩm. Nếu không có, PHẢI dùng `generate_image` để tạo.
    *   Họ tên + Chức danh (Tiến sĩ, Bác sĩ, Makeup Artist).
    *   Đoạn trích dẫn ngắn (Quote) khẳng định sự hài lòng về chất lượng sản phẩm.
*   **QUY TẮC HÌNH ẢNH SẢN PHẨM TRONG TAY CHUYÊN GIA (Product Accuracy):**
    *   Khi dùng `generate_image` để tạo ảnh chuyên gia, sản phẩm trong tay chuyên gia PHẢI giống với sản phẩm thực tế đang được quảng bá. AI PHẢI truyền ảnh sản phẩm gốc (từ thư mục dữ liệu đầu vào) vào tham số `ImagePaths` của tool `generate_image` để làm hình ảnh tham chiếu (reference).
    *   **Prompt phải mô tả chi tiết sản phẩm:** Bao gồm màu sắc bao bì, hình dạng chai/tuýp/hũ, logo thương hiệu, để AI tạo ra hình ảnh sản phẩm trong tay chuyên gia trùng khớp tối đa với sản phẩm thật.
    *   Tuyệt đối KHÔNG được để sản phẩm trong ảnh chuyên gia trông khác biệt hoàn toàn so với sản phẩm thực tế (sai màu, sai hình dạng, sai nhãn hiệu). Nếu kết quả gen ảnh lần đầu chưa giống, AI PHẢI gen lại với prompt chi tiết hơn.

#### 11. Feedback Wall (Bức tường phản hồi Shopee Style)
*   **Mục đích:** Tạo lòng tin bằng bằng chứng xã hội thực tế.
*   **Yêu cầu dữ liệu đầy đủ:** Phải hiển thị toàn bộ nội dung được cung cấp trong thư mục data.
*   **QUY TẮC BẮT BUỘC (MAPPING DATA & INTERACTION):**
    *   AI phải duyệt TOÀN BỘ file trong thư mục `review/image_review`.
    *   Đối với mỗi Review, AI PHẢI lấy TẤT CẢ các file có tiền tố tương ứng (Ví dụ: Nếu có `review1_image1`, `review1_image2`, `review1_image3`, `review1_video.mp4` thì PHẢI đưa toàn bộ 4 file này vào media array của review 1). Tuyệt đối không được bỏ sót bất kỳ tệp nào.
    *   **Tính năng Media Viewer (BẮT BUỘC):** Cho phép người dùng nhấn vào bất kỳ ảnh hoặc video nào để xem ở dạng phóng lớn (Fullscreen Popup/Lightbox). Giao diện xem lớn phải có nút đóng (Icon X) và cho phép chuyển đổi giữa các ảnh/video trong cùng một review (nếu có).
    *   Bao gồm: Tên ẩn danh (Shopee style), Số sao, Ngày giờ, Phân loại, Mô tả text, và BỘ MEDIA THỰC TẾ đầy đủ.

#### 12. Social Proof Counters (Con số ấn tượng)
*   **Mục đích:** Tạo hiệu ứng đám đông (FOMO).
*   **Cấu trúc cụ thể:**
    *   Dòng chữ chạy hoặc số nhảy: "Đã có 74.390+ khách hàng tin dùng".
    *   Điểm đánh giá trung bình: "4.9/5 sao".

#### 13. FAQ Section (Câu hỏi thường gặp)
*   **Mục đích:** Xóa bỏ những nghi ngại cuối cùng.
*   **Cấu trúc cụ thể (BẮT BUỘC):**
    *   Dạng Accordion (Bấm vào để hiện câu trả lời).
    *   Tối thiểu 4 câu hỏi về: Độ an toàn, Thời gian giao hàng, Chính sách đổi trả, Cách kiểm tra hàng chính hãng.

#### 14. Tiered Pricing (Bảng giá ưu đãi)
*   **Option 1: [Tên gói].** Giá: [Giá]. (Ảnh: `image/option/option1`).
*   **Option 2: [Tên gói].** Giá: [Giá]. (Ảnh: `image/option/option2`).
*   **Option 3: [Tên gói].** Giá: [Giá]. (Ảnh: `image/option/option3`).
*   **Lưu ý:** Số lượng Option hiển thị (1, 2 hoặc 3) phải khớp chính xác với dữ liệu trong file `description`. AI PHẢI trích xuất chính xác số lượng và thông tin giá từ đây.
    *   **Hình ảnh sản phẩm theo Option (MANDATORY):** AI phải ưu tiên tìm ảnh trong thư mục `image/option`. 
        *   Nếu là Option 1: Tìm file có tên `option1` (ví dụ: `option1.jpg`, `option1.png`).
        *   Nếu là Option 2: Tìm file có tên `option2`.
        *   Nếu là Option 3: Tìm file có tên `option3`.
        *   Nếu không có ảnh trong thư mục `image/option`, AI dùng ảnh sản phẩm chính hoặc gen ảnh combo minh họa.
    *   **Thiết kế:** Gói hời nhất (thường là mua nhiều nhất) phải có nhãn "BÁN CHẠY NHẤT" hoặc "NÊN DÙNG" và nổi bật hơn các gói khác.

#### 15. Urgency Elements (Yếu tố tạo sự gấp rút)
*   **Mục đích:** Khiến khách hàng ra quyết định ngay lập tức.
*   **Cấu trúc cụ thể:**
    *   Đồng hồ đếm ngược (Countdown Timer).
    *   Thanh tiến độ: "Chỉ còn 15 suất quà tặng cuối cùng".
    *   Popup thông báo đơn hàng ảo: "A vừa đặt hàng 2 phút trước".

#### 16. Integrated Order Form (Form đặt hàng trực tiếp)
*   **Mục đích:** Giảm tỷ lệ thoát trang khi chuyển hướng giỏ hàng.
*   **Cấu trúc cụ thể (BẮT BUỘC):**
    *   Sử dụng Popup Modal với cấu trúc vững chắc để chống vỡ giao diện: `max-h-[90vh]`. 
    *   **BẮT BUỘC:** Phải có nút đóng (Icon X) ở góc trên bên phải và cho phép đóng khi nhấn ra vùng overlay bên ngoài.
    *   Phân chia Modal thành 3 phần rõ ràng: Header (Tiêu đề, cố định), Body (Form nội dung, `overflow-y-auto`), Footer (Nút Submit, cố định).
    *   Trình chọn sản phẩm, Trường thông tin (Họ tên, SĐT, Địa chỉ), Dropdown 3 cấp (Tỉnh -> Huyện -> Xã).

#### 17. Trust & Guarantees (Cam kết & Tin cậy)
*   **Mục đích:** Xây dựng lòng tin tuyệt đối và loại bỏ rào cản mua hàng cuối cùng.
*   **Cấu trúc cụ thể (BẮT BUỘC):**
    *   Chỉ hiển thị đúng **3 thẻ cam kết** súc tích (Tuyệt đối không làm rườm rà thêm phần vận chuyển, kho bãi).
    *   **Thẻ 1:** CAM KẾT CHÍNH HÃNG - Hoàn tiền 111% nếu phát hiện hàng giả, hàng nhái.
    *   **Thẻ 2:** ĐỔI TRẢ TRONG 7 NGÀY - Hỗ trợ đổi trả miễn phí theo đúng quy định của Shopee.
    *   **Thẻ 3:** KIỂM TRA HÀNG - Được kiểm tra hàng trước khi thanh toán nhận hàng.
    *   **Thiết kế (BẮT BUỘC):** Hiển thị dạng thẻ dọc (Icon bên trái trong khối hình học mềm mại, Tiêu đề và Mô tả bên phải). Nền thẻ trắng sạch sẽ, bo góc lớn.

#### 18. Post-Purchase Experience (Trang cảm ơn & Xác nhận)
*   **Mục đích:** Chuyên nghiệp hóa quy trình và giảm tỷ lệ đơn ảo.
*   **Cấu trúc cụ thể:**
    *   Một trang riêng hiện ra sau khi đặt hàng thành công.
    *   Nội dung: "Cảm ơn bạn đã đặt hàng!", "Mã đơn hàng: #12345", "Chúng tôi sẽ gọi điện xác nhận trong vòng 15 phút tới. Hãy chú ý điện thoại nhé!".
    *   Có thể thêm một video ngắn cảm ơn từ chủ shop hoặc hướng dẫn sử dụng nhanh.

#### 19. Footer (Chân trang Công ty & Bản quyền)
*   **Mục đích:** Tăng độ uy tín pháp lý, cung cấp thông tin liên hệ, hoàn thiện trải nghiệm trang web chuyên nghiệp.
*   **Cấu trúc cụ thể (BẮT BUỘC):**
    *   **Logo & Tên thương hiệu:** Hiển thị logo và slogan ngắn của thương hiệu.
    *   **Thông tin Công ty:** Tên công ty sở hữu thương hiệu, địa chỉ văn phòng/kho hàng.
    *   **Thông tin liên hệ:** Số điện thoại CSKH (hotline), địa chỉ Email hỗ trợ.
    *   **Liên kết nhanh:** Các anchor link đến các section chính (Về sản phẩm, Đánh giá, Khuyến mãi, Chính sách đổi trả).
    *   **Chính sách:** Dòng chữ nhỏ về Chính sách bảo mật và Điều khoản sử dụng.
    *   **Bản quyền:** Dòng © [Năm hiện tại] [Tên thương hiệu]. All rights reserved.
*   **Lưu ý dữ liệu:** Nếu file `description` không cung cấp thông tin công ty, AI PHẢI tự đề xuất thông tin placeholder hợp lý (VD: hotline 1900-xxxx, email support@[thương-hiệu].com) và đánh dấu rõ để chủ shop điền vào sau.

---

## 🖼 QUY TẮC XỬ LÝ HÌNH ẢNH & VIDEO CHUYÊN SÂU

Để đảm bảo trang Landing Page có chất lượng thị giác cao cấp và đồng nhất với dữ liệu khách hàng cung cấp, AI phải tuân thủ nghiêm ngặt các quy tắc sau:

### 1. Nguyên tắc Ưu tiên & Lọc Trùng (Asset Priority & Filtering)
*   **Bắt buộc:** Luôn luôn sử dụng các hình ảnh và video có sẵn trong thư mục dữ liệu đầu vào làm tài liệu gốc. 
*   **Lọc trùng lặp:** AI phải phân tích nội dung ảnh (đặc biệt trong phần Gallery). Nếu các ảnh có chứa văn bản (text) giống hệt nhau hoặc bố cục lặp lại nhàm chán (chỉ khác màu vỏ sản phẩm), AI CHỈ CHỌN 1 ẢNH ĐẠI DIỆN. 
*   Tuyệt đối không hiển thị một loạt ảnh có chung nội dung text gây cảm giác thiếu chuyên nghiệp.

### 2. Quy tắc Xử lý Hậu kỳ & Chèn Text (Strict Text Overlay Rules)
*   **CẤM ĐÈ TEXT LÊN ẢNH PHỨC TẠP:** Tuyệt đối KHÔNG sử dụng HTML/CSS (absolute positioning) để đè chữ lên trên các bức ảnh gốc ĐÃ CÓ SẴN TEXT hoặc có đồ họa lộn xộn. Nếu AI phát hiện ảnh gốc đã có text (như nhãn chai, hoặc infographic có sẵn), AI PHẢI chủ động xóa các badge đè lên hoặc dùng AI gen lại ảnh sạch.
*   **Sử dụng Split Layout:** Nếu ảnh gốc có thông tin, hãy dùng bố cục chia đôi (Một bên để ảnh `object-contain`, một bên là khối màu solid chứa văn bản giải thích).
*   **Tạo ảnh sạch:** Nếu buộc phải chèn text, AI PHẢI dùng tool `generate_image` để tạo ra một bức ảnh có khoảng trống (clean space/background) trước khi đè text.

### 3. Quy tắc Hiển thị Ảnh (Display Property Rules)
*   **Ảnh Infographic / Chứa Text:** BẮT BUỘC sử dụng class `object-contain` (hoặc `aspect-auto`) để hiển thị toàn bộ nội dung ảnh, KHÔNG bị cắt xén. Nếu ảnh bị cắt khiến người dùng không đọc được text bên trong, AI PHẢI dùng tool `generate_image` để tạo lại ảnh mới phù hợp hoặc đổi sang ảnh sạch không có text.
*   **Ảnh Bối cảnh (Lifestyle):** Mới được phép sử dụng `object-cover` và `aspect-square` hoặc `aspect-video`.

### 4. Quy tắc Bổ sung & Sáng tạo (AI Generation)
*   **Điều kiện:** Nếu số lượng hình ảnh cung cấp nghèo nàn hoặc bị lặp lại quá nhiều, AI PHẢI dùng công cụ `generate_image`.
*   **Mục tiêu:** Tạo thêm các ảnh Lifestyle sang trọng, ảnh Swatch (bôi thử lên tay), ảnh Macro cận cảnh chất kem... để làm phong phú phần Gallery và Visual Demo.

### 5. Quy tắc Kích Thước Ảnh AI Phù Hợp Khung Hiển Thị (AI Image Dimension Matching)
*   **Nguyên tắc cốt lõi:** Khi dùng `generate_image` để tạo ảnh minh họa cho các section sử dụng bố cục Card Grid (như Technology & Ingredients), AI PHẢI đảm bảo ảnh được gen có tỷ lệ khung hình (aspect ratio) và bố cục nội dung phù hợp với vùng hiển thị thực tế trên giao diện.
*   **QUY TẮC BẮT BUỘC:**
    *   Nếu Card sử dụng vùng ảnh có chiều cao cố định (VD: `h-48`, `h-56`) với `object-cover`, AI PHẢI gen ảnh có nội dung chính (chủ thể, text nếu có) nằm tập trung ở VÙNG TRUNG TÂM của ảnh, tránh đặt nội dung quan trọng ở các viền/góc vì chúng sẽ bị cắt xén.
    *   Nếu ảnh AI chứa text (VD: infographic), PHẢI sử dụng `object-contain` thay vì `object-cover` để đảm bảo toàn bộ nội dung được hiển thị.
    *   **Prompt mô tả phải bao gồm yêu cầu bố cục:** VD: "Nội dung chính nằm ở trung tâm ảnh, không có text quan trọng ở viền ảnh", "Tỷ lệ ngang 16:9", hoặc "Tỷ lệ vuông 1:1" tùy theo khung hiển thị đích.
*   **Kiểm tra:** Sau khi gen ảnh, AI PHẢI tự xem lại ảnh kết hợp với kích thước vùng hiển thị để đảm bảo không có nội dung quan trọng bị cắt mất. Nếu bị cắt, PHẢI gen lại hoặc chuyển sang dùng `object-contain`.

---

### Bước 2: Xử lý nội dung & Hình ảnh chuyên sâu (Quy trình thực hiện)

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
*   **QUY TẮC BẮT BUỘC:** Video phải có nội dung tương quan chặt chẽ với tiêu đề/mô tả của section. Nếu section nói về "Chất kem mỏng nhẹ" thì video phải thể hiện cảnh tán kem, không được dùng video cảnh vận chuyển hay đóng gói.
*   **Bước thực hiện:** Nếu không có video phù hợp, hệ thống sẽ đề xuất kịch bản cho 1 đoạn GIF ngắn hoặc dùng AI để gen nội dung tương ứng.

#### 5. Pain Point & Solution (Nỗi đau & Giải pháp)
*   **Cách xử lý:** Phân tích các từ khóa về vấn đề mà sản phẩm giải quyết.
*   **Bước thực hiện:** 
    1. Tạo ra sự đối lập bằng cách đặt câu hỏi về nỗi đau.
    2. **QUAN TRỌNG:** Sử dụng ảnh sạch (Không đè text lên ảnh có chi tiết phức tạp). Nếu dùng ảnh Infographic có sẵn text, phải dùng `object-contain`. Tốt nhất nên dùng bố cục Split (Một bên ảnh `object-contain`, một bên text màu solid).

#### 6. Technology & Ingredients (Thành phần & Công nghệ)
*   **Cách xử lý:** Trích xuất các thành phần chính từ bảng thành phần (Ingredients).
*   **Bước thực hiện (Bố cục chuẩn):** BẮT BUỘC sử dụng dạng **Card Grid Layout**. Mỗi thành phần là một thẻ (Card) độc lập bao gồm: Ảnh minh họa (phía trên) + Tiêu đề + Mô tả chi tiết (phía dưới). Tuyệt đối không sắp xếp ảnh trôi nổi (floating) lộn xộn cạnh văn bản gây mất cấu trúc.

#### 7. Visual Product Gallery (Bộ sưu tập ảnh / Góc nhìn chân thực)
*   **Cách xử lý:** Tải về và chọn lọc tất cả ảnh trong phần mô tả sản phẩm. BẮT BUỘC phải kiểm tra nội dung ảnh xem có thực sự liên quan đến tiêu đề hiển thị hay không. Nếu không liên quan, phải dùng AI tạo ảnh mới thay thế.
*   **Bước thực hiện:** 
    1. Lọc bỏ các ảnh trùng lặp về nội dung text hoặc chỉ khác màu vỏ.
    2. **PHÂN LOẠI BẮT BUỘC:** Phân loại ảnh thành 3 nhóm: (a) Ảnh sản phẩm thuần túy, (b) Ảnh giải thưởng/bằng sáng chế/chứng nhận, (c) Ảnh infographic. Ảnh nhóm (b) PHẢI được tách ra thành section riêng "Giải Thưởng & Chứng Nhận" để tối đa hóa tác dụng tạo lòng tin. KHÔNG trộn lẫn ảnh giải thưởng vào Gallery sản phẩm.
    3. **Tạo ảnh Lifestyle bằng AI:** BẮT BUỘC dùng `generate_image` để tạo ít nhất 2-3 ảnh sản phẩm trong bối cảnh thực tế đời thường (Lifestyle) nếu ảnh gốc khô khan. Đảm bảo ảnh sinh ra phải liên quan sát nhất với nội dung "Góc nhìn chân thực".
    4. **Quy tắc hiển thị Mobile:** Để người dùng có cảm giác nhiều ảnh và nhìn rõ hơn, mỗi ảnh trên Mobile phải hiển thị tràn chiều ngang màn hình (`w-full`) và các ảnh được xếp lần lượt từ trên xuống dưới liền nhau.

#### 8. Application & Guide (Hướng dẫn sử dụng)
*   **Cách xử lý:** Chuyển đổi hướng dẫn thành quy trình trực quan.
*   **Bước thực hiện:** Chuyển đổi thành dạng "Bước 1 - 2 - 3" với icon và mô tả ngắn gọn.

#### 9. Comparison Table (Bảng so sánh)
*   **Cách xử lý:** BẮT BUỘC phải có bảng so sánh để làm nổi bật ưu thế.
*   **Bước thực hiện:** Tạo bảng so sánh các tiêu chí: Thành phần, Công dụng, Giá cả, Trải nghiệm người dùng giữa "Sản phẩm của chúng tôi" và "Sản phẩm thông thường khác". Dùng dấu V xanh và X đỏ để trực quan hóa.

#### 10. Expert Endorsement (Chứng thực chuyên gia)
*   **Cách xử lý:** Tìm kiếm xem sản phẩm có được bác sĩ hay celeb nào khuyên dùng không.
*   **QUY TẮC BẮT BUỘC:** Section này phải có hình ảnh chuyên gia đang cầm sản phẩm hoặc đang giới thiệu sản phẩm một cách chuyên nghiệp. 
*   **Sử dụng AI:** Nếu dữ liệu đầu vào không có ảnh chuyên gia phù hợp, AI PHẢI dùng tool `generate_image` để tạo ra một bức ảnh chân dung chuyên gia cao cấp, mặc đồ bảo hộ/áo blouse, tay cầm sản phẩm hoặc đang thao tác với sản phẩm.
*   **SẢN PHẨM PHẢI GIỐNG THỰC TẾ:** Khi gen ảnh, AI PHẢI truyền ít nhất 1 ảnh sản phẩm gốc từ thư mục dữ liệu vào tham số `ImagePaths` của `generate_image` để đảm bảo sản phẩm trong tay chuyên gia trùng khớp với sản phẩm thực tế (đúng màu sắc, hình dạng, logo). Prompt phải mô tả chi tiết đặc điểm bao bì sản phẩm.
*   **Bước thực hiện:** Kết hợp ảnh chân dung chuyên gia (đã gen) với đoạn trích dẫn (Quote) khẳng định sự hài lòng về sản phẩm.

#### 11. Feedback Wall (Bức tường phản hồi Shopee Style)
*   **Cách xử lý:** Đồng bộ 100% dữ liệu từ thư mục `review/image_review` được cung cấp.
*   **Bước thực hiện:** 
    1.  QUY TẮC BẤT DI BẤT DỊCH: Đọc chính xác danh sách file trong thư mục review.
    2.  Map chính xác file (VD: `review1_video.mp4` và `review1_image1.webp` VÀO ĐÚNG review ID 1). KHÔNG tự ý gán ảnh bừa bãi.
    3.  Làm ẩn danh tên khách hàng (`a*****1`) và giữ nguyên nội dung text đánh giá thực tế.

#### 12. Social Proof Counters (Con số ấn tượng)
*   **Cách xử lý:** Lấy số lượng đã bán và điểm đánh giá trung bình từ Shopee.
*   **Bước thực hiện:** Thiết kế dưới dạng một dải băng (Banner) chạy ngang trang để tạo hiệu ứng đám đông.

#### 13. FAQ Section (Câu hỏi thường gặp)
*   **Cách xử lý:** Tổng hợp từ phần "Hỏi đáp" hoặc các thắc mắc thường gặp của khách hàng trong comment.
*   **Bước thực hiện:** Soạn thảo 4-5 cặp Câu hỏi - Câu trả lời ngắn gọn, tập trung vào việc xóa bỏ nỗi lo (VD: Có bị cay mắt không?).

#### 14. Tiered Pricing (Bảng giá Combo)
*   **Cách xử lý:** Lấy thông tin các gói ưu đãi từ file `description`.
*   **Bước thực hiện:** 
    1. AI phải đọc và lấy linh hoạt số lượng lựa chọn mua hàng dựa trên nội dung mô tả (có thể là 1, 2, hoặc 3 gói). 
    2. **Mapping ảnh:** BẮT BUỘC lấy ảnh từ thư mục `image/option` tương ứng với từng option (`option1`, `option2`, `option3`). Nếu không có thư mục này hoặc file này, AI mới được phép dùng ảnh sản phẩm chung hoặc dùng `generate_image` để tạo ảnh combo (Ví dụ: gen ảnh 2 chai kem đặt cạnh nhau cho gói mua 2).
    3. Xác định gói "Hời nhất" để gắn tag nổi bật.

#### 15. Urgency Elements (Yếu tố gấp rút)
*   **Cách xử lý:** Tự tạo dựa trên chiến dịch marketing.
*   **Bước thực hiện:** Cài đặt đồng hồ đếm ngược và thông báo "Chỉ còn X suất quà tặng" để kích thích khách hành động ngay.

#### 16. Integrated Order Form (Form đặt hàng)
*   **Cách xử lý:** Xây dựng Modal Form tối ưu không bao giờ bị vỡ giao diện.
*   **Bước thực hiện:** 
    1. Thiết kế Popup chia 3 phần: Header (Fixed), Body (Scroll với `max-h-[80vh]`), Footer (Fixed nút Submit).
    2. Tích hợp bộ chọn địa chỉ 3 cấp (Tỉnh/Huyện/Xã) và hiển thị trực quan các gói Combo kèm giá tự động tính.
    3. **Chọn số lượng:** BẮT BUỘC thêm ô chọn số lượng (Quantity Selector: - 1 +) cho mỗi option mua hàng. Giao diện phải được thiết kế cân đối, gọn gàng cho cả Mobile lẫn Web.

#### 17. Trust Badges & Guarantees (Cam kết & Tin cậy)
*   **Cách xử lý:** BẮT BUỘC hiển thị 3 cam kết chuẩn: Chính hãng, Đổi trả, Kiểm hàng.
*   **Bước thực hiện:** Thiết kế dưới dạng danh sách dọc các Card trắng bo góc. Mỗi card bao gồm Icon bên trái và nội dung text bên phải. Tuyệt đối KHÔNG thêm các thông tin logistics rườm rà.


#### 18. Post-Purchase Experience (Trang cảm ơn)
*   **Cách xử lý:** Tự xây dựng kịch bản chăm sóc khách hàng sau mua.
*   **Bước thực hiện:** Thiết kế giao diện thông báo đặt hàng thành công kèm lời nhắc nhân viên sẽ gọi điện xác nhận trong 15 phút.

#### 19. Footer (Chân trang)
*   **Cách xử lý:** Tổng hợp thông tin thương hiệu và liên hệ.
*   **Bước thực hiện:** Hiển thị Logo, địa chỉ, hotline và các liên kết nhanh để hoàn thiện trang Landing Page chuyên nghiệp.

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
*   **BẮT BUỘC:** Kiểm tra hiển thị trên thiết bị di động (chiều rộng < 450px).
*   **Độ tương phản & Readability (CRITICAL):** Trên Mobile, AI phải đảm bảo độ tương phản cao cho tất cả văn bản. 
    *   Nếu sử dụng Text Gradient (hồng/cam/xanh) trên nền sáng, PHẢI tăng độ đậm (font-bold) và kích thước chữ. 
    *   Tuyệt đối KHÔNG để chữ mảnh (font-light/thin) kết hợp với màu sắc nhạt trên nền trắng.
*   **Navigation:** Trên Mobile (screen < 768px), bắt buộc sử dụng **Hamburger Menu** (Icon 3 gạch) bên phải và Logo bên trái. Tuyệt đối không để text menu tràn lan gây đè chữ.
*   **Typography:** Tiêu đề H1/H2 trên mobile không được vượt quá `text-3xl` hoặc `text-4xl` để tránh tràn dòng/vỡ layout.
*   **Padding/Gap:** Đảm bảo container trên mobile luôn có `px-4` hoặc `px-6`. Khoảng cách giữa các phần tử (Gap) tối thiểu là `gap-4`.
*   **Sticky Order Bar (BẮT BUỘC TRÊN MOBILE):** Giao diện Mobile luôn luôn phải hiển thị cố định một nút "Nhận ưu đãi ngay" (hoặc thanh bar nhỏ) ở dưới cùng màn hình (`bottom-0`, `fixed` hoặc `sticky`) để người dùng có thể nhấn vào và đặt hàng bất cứ lúc nào.
*   **Image Optimization:** Mọi hình ảnh phải được bao bọc trong các thẻ Container có tỉ lệ khung hình (Aspect Ratio) cố định để tránh tình trạng nhảy bố cục (Layout Shift).

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
"Hãy sử dụng skill **create_landingpage** để xây dựng trang Landing Page dựa trên dữ liệu trong thư mục này: [Đường dẫn thư mục tại đây]"

---

## 🚫 CÁC LỖI CẦN TRÁNH VÀ QUY TẮC BẮT BUỘC (CRITICAL MISTAKES)

Để đảm bảo hiệu quả chuyển đổi cao nhất và giao diện không bị vỡ/lỗi thẩm mỹ, AI phải tuyệt đối tuân thủ các quy định sau:

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

### 4. Lặp nội dung trong Gallery
*   **Nguyên nhân:** Lấy toàn bộ ảnh trong thư mục mà không lọc sự trùng lặp về nội dung/văn bản.
*   **QUY TẮC BẮT BUỘC:** 
    *   Bộ lọc thông minh: AI phải kiểm tra nội dung ảnh. Nếu phát hiện các ảnh trùng lặp thông điệp (chỉ khác màu vỏ), chỉ chọn 1 ảnh đại diện.
    *   Bắt buộc chủ động dùng `generate_image` để tạo thêm các góc chụp mới (VD: Swatch ra tay, chất kem zoom cận cảnh, bối cảnh sang trọng) để làm phong phú Gallery nếu ảnh gốc nghèo nàn.

### 5. Vỡ giao diện Popup Đặt Hàng (Order Modal) & Lỗi Navigation Mobile
*   **Nguyên nhân:** Code Modal thiếu giới hạn chiều cao hoặc Header Mobile để text menu tràn lan gây đè chữ/xấu giao diện.
*   **QUY TẮC BẮT BUỘC:** 
    *   **Order Modal:** Bắt buộc dùng `max-h-[90vh]`, chia 3 phần Header, Body, Footer rõ rệt.
    *   **Navigation Mobile:** TUYỆT ĐỐI KHÔNG để menu dạng text dàn hàng ngang trên mobile. Bắt buộc dùng Hamburger Menu (icon 3 gạch) và Logo thương hiệu. Việc vi phạm điều này sẽ bị coi là lỗi thẩm mỹ nghiêm trọng.
### 6. Lỗi thiếu hạng mục nội dung (Missing Mandatory Sections)
*   **Nguyên nhân:** AI bỏ qua các mục như "Expert Endorsement" vì cho rằng không có đủ dữ liệu.
*   **QUY TẮC BẮT BUỘC:** Landing Page phải có ĐỦ 19 MỤC. Nếu thiếu dữ liệu thực tế, AI phải tự biên soạn nội dung dựa trên tiêu chuẩn chung của ngành (VD: Cam kết chất lượng, Phản hồi khách hàng) và dùng ảnh AI để minh họa. Tuyệt đối không được bỏ trống hoặc lược bỏ section.

### 7. Lỗi hiển thị ảnh (Image Distortion)
*   **Nguyên nhân:** Lạm dụng class `aspect-square` và `object-cover` khiến các ảnh có chứa thông tin ở viền bị cắt xén (crop).
*   **QUY TẮC BẮT BUỘC:** 
    *   Với các ảnh mang tính thông tin (Infographic, có chứa text), bắt buộc sử dụng `object-contain` thay vì `object-cover`.
    *   Chỉ dùng `object-cover` cho các ảnh chụp bối cảnh (Lifestyle) hoặc ảnh nền (Background).

### 8. Bố cục nội dung chưa hợp lý (Layout Logic)
*   **Nguyên nhân:** Các section như "Bí mật từ đại dương" được chia cột tự do nhưng thiếu sự gắn kết giữa hình ảnh và phần giải thích.
*   **QUY TẮC BẮT BUỘC:** Tiêu chuẩn hóa bố cục cho section "Công nghệ & Thành phần": Yêu cầu sử dụng dạng **Card Grid** (Mỗi thành phần là một thẻ bao gồm: Ảnh ở trên + Tiêu đề + Mô tả ở dưới) để đảm bảo tính thống nhất. KHÔNG xếp ảnh nổi trôi lộn xộn.

### 9. Lỗi đè Text lên ảnh có sẵn Text (Text Overlap)
*   **Nguyên nhân:** Đè text lên ảnh mà không kiểm tra ảnh gốc đã có text hay chưa, dẫn đến giao diện bị rối mắt.
*   **QUY TẮC BẮT BUỘC:** Tuyệt đối KHÔNG đè HTML text (absolute positioning) lên trên các ảnh đã có sẵn text/đồ họa phức tạp.
*   **Giải pháp:** 
    *   Phân tích ảnh gốc: Nếu ảnh gốc có text tiếng Trung/tiếng Anh, AI PHẢI sử dụng tool `generate_image` để tạo ra ảnh nền sạch (clean background).
    *   Ưu tiên sử dụng bố cục Split (chia đôi: 1 bên ảnh gốc không đè chữ, 1 bên là khối màu solid chứa text).

### 10. Trộn lẫn ảnh Giải thưởng/Bằng sáng chế vào Gallery sản phẩm (Award Mixing)
*   **Nguyên nhân:** AI đưa tất cả ảnh từ thư mục dữ liệu vào cùng một Gallery mà không phân loại nội dung, khiến ảnh giải thưởng/bằng sáng chế bị lẫn giữa các ảnh sản phẩm, mất đi tác dụng tạo uy tín.
*   **QUY TẮC BẮT BUỘC:**
    *   AI PHẢI xem xét nội dung từng ảnh để nhận diện ảnh giải thưởng, bằng sáng chế, chứng nhận (thường có hình cúp, huy chương, giấy chứng nhận, logo tổ chức kiểm định).
    *   Các ảnh này PHẢI được tách ra thành một section độc lập (VD: "Giải Thưởng & Chứng Nhận Uy Tín") với thiết kế nổi bật, đặt gần các section tạo lòng tin (Trust Badges, Expert Endorsement).
    *   KHÔNG BAO GIỜ trộn chung ảnh giải thưởng vào Grid/Slider Gallery sản phẩm.

### 11. Sản phẩm trong ảnh chuyên gia không giống thực tế (Expert Product Mismatch)
*   **Nguyên nhân:** Khi gen ảnh chuyên gia bằng AI, prompt không mô tả đủ chi tiết sản phẩm hoặc không truyền ảnh sản phẩm gốc làm tham chiếu, dẫn đến sản phẩm trong tay chuyên gia khác hoàn toàn so với sản phẩm thực tế.
*   **QUY TẮC BẮT BUỘC:**
    *   Khi gọi `generate_image`, AI PHẢI truyền ít nhất 1 ảnh sản phẩm gốc (chọn ảnh rõ nhất từ thư mục dữ liệu) vào tham số `ImagePaths` để AI gen ảnh có sản phẩm trùng khớp.
    *   Prompt PHẢI mô tả chi tiết đặc điểm bao bì: hình dạng (tuýp, chai, hũ), màu sắc chủ đạo, vị trí logo, kiểu nắp.
    *   Sau khi gen, AI PHẢI tự so sánh ảnh kết quả với ảnh sản phẩm gốc. Nếu sản phẩm trông khác biệt rõ rệt, PHẢI gen lại với prompt chi tiết hơn.

### 12. Ảnh AI bị cắt xén nội dung trong Card Layout (AI Image Cropping in Cards)
*   **Nguyên nhân:** AI gen ảnh có nội dung (text, chủ thể) trải đều khắp bức ảnh, nhưng khi hiển thị trong Card có chiều cao cố định (`h-48`, `h-56`) với `object-cover`, phần viền bị cắt mất khiến text hoặc nội dung quan trọng không hiển thị.
*   **QUY TẮC BẮT BUỘC:**
    *   Khi gen ảnh cho Card Grid (như section Technology & Ingredients), prompt PHẢI yêu cầu nội dung chính tập trung ở vùng trung tâm ảnh, để lại biên an toàn (safe margin) xung quanh.
    *   Nếu ảnh AI chứa text, BẮT BUỘC sử dụng `object-contain` thay vì `object-cover` để không mất nội dung.
    *   AI PHẢI chỉ định tỷ lệ khung hình phù hợp trong prompt (VD: "landscape 16:9", "square 1:1") để khớp với vùng hiển thị đích.
    *   Sau khi gen, PHẢI kiểm tra ảnh có bị cắt nội dung khi đặt vào layout hay không. Nếu có, gen lại hoặc điều chỉnh CSS sang `object-contain`.
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
