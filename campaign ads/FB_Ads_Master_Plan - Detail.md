# Giai Đoạn 1 - Phần 1: Facebook Ads Hoạt Động Như Thế Nào?

Chào bạn, đây là tài liệu đào sâu vào **Phần 1 của Giai Đoạn 1**. Việc hiểu được cách Facebook vận hành phía sau bức màn sẽ giúp bạn không bị bỡ ngỡ và đưa ra các quyết định chính xác hơn khi chạy quảng cáo, thay vì chỉ "nhấn nút chạy và cầu nguyện".

Tài liệu này được viết rất chi tiết để bạn có cái nhìn từ cơ bản đến chuyên sâu về thuật toán. Hãy đọc kỹ từng phần nhé.

---

## 1. Bản Chất Của Quảng Cáo Facebook: Cuộc Chiến Của "Phiên Đấu Giá" (The Auction)

Nhiều người nghĩ rằng: *"Ai có nhiều tiền hơn, trả giá cao hơn thì quảng cáo của người đó sẽ được hiển thị nhiều hơn"*. Điều này **KHÔNG HOÀN TOÀN ĐÚNG** với Facebook.

Mỗi khi người dùng mở Facebook và lướt News Feed, hệ thống của Facebook có hàng ngàn quảng cáo muốn hiển thị vào vị trí đó. Để quyết định quảng cáo nào được hiển thị, Facebook sẽ mở một "Phiên đấu giá" chớp nhoáng (chỉ tính bằng mili-giây).

Khác với đấu giá truyền thống (ai trả tiền cao nhất sẽ thắng), Facebook đánh giá người thắng cuộc dựa trên **Giá Trị Tổng Thể (Total Value)**. 

Facebook phải cân bằng 2 yếu tố cốt lõi:
1. **Lợi ích của nhà quảng cáo:** Phải mang lại kết quả (đơn hàng, tin nhắn) để họ tiếp tục chi tiền.
2. **Trải nghiệm của người dùng:** Nếu quảng cáo quá phiền phức hoặc rác, người dùng sẽ bỏ Facebook sang nền tảng khác (như TikTok).

### Công thức tính Giá Trị Tổng Thể (Total Value):

> **Total Value = Giá Thầu (Bid) + Tỉ lệ hành động ước tính (Estimated Action Rates) + Chất lượng quảng cáo (Ad Quality)**

Quảng cáo nào có **Total Value cao nhất** sẽ giành được lượt hiển thị. Hãy cùng bóc tách 3 yếu tố này:

#### A. Giá Thầu (Advertiser Bid)
Đây là số tiền bạn sẵn sàng trả để có được kết quả (một lượt hiển thị, một lượt click, một tin nhắn).
- Thường thì Facebook sẽ tự động đấu thầu giúp bạn (chiến lược chi phí thấp nhất) để tiêu hết ngân sách bạn đặt ra và mang về kết quả rẻ nhất có thể.
- **Lưu ý:** Ngân sách lớn giúp bạn vào được nhiều phiên đấu giá hơn, nhưng nếu 2 yếu tố dưới đây của bạn kém, bạn vẫn sẽ thua một người có ngân sách nhỏ bé nhưng nội dung xuất sắc.

#### B. Tỉ lệ hành động ước tính (Estimated Action Rates - EAR)
Đây là dự đoán của trí tuệ nhân tạo (AI) Facebook về việc: **"Liệu người dùng này có thực hiện hành động mà bạn mong muốn (click, nhắn tin, mua hàng) khi nhìn thấy quảng cáo không?"**.
- Facebook phân tích hàng ngàn điểm dữ liệu của người dùng (họ thích xem gì lúc mấy giờ, họ hay bấm vào nút Mua Ngay hay chỉ xem video, họ có hay chat với các shop không...).
- Nếu bạn chạy quảng cáo mục tiêu "Nhắn tin", Facebook sẽ ưu tiên phân phối quảng cáo của bạn cho những người có thói quen "thích inbox hỏi giá". 

#### C. Chất lượng quảng cáo & Độ phù hợp (Ad Quality & Relevance)
Đây là "Vũ khí bí mật" của nhà quảng cáo. Bạn có thể hạ gục đối thủ nhiều tiền bằng cách làm tốt yếu tố này.
- **Điểm cộng:** Người dùng dừng lại xem video lâu, thả tim, bình luận tích cực, click vào link, tốc độ load website của bạn nhanh.
- **Điểm trừ:** Người dùng lướt qua ngay lập tức, nhấn nút "Ẩn quảng cáo", báo cáo (report) quảng cáo, hình ảnh chứa quá nhiều chữ (text), nội dung giật tít câu view (clickbait) kiểu lừa đảo.

**🌟 Ví Dụ Minh Họa Thực Tế Về Phiên Đấu Giá:**
Giả sử có 2 cửa hàng cùng bán "Áo thun nam" nhắm đến tệp nam 18-24 tuổi ở Hà Nội:
- **Cửa hàng A (Người giàu):** Đặt giá thầu 100.000đ cho 1 tin nhắn. Nhưng ảnh chụp áo nhăn nhúm, tối tăm, chữ viết sai chính tả.
- **Cửa hàng B (Người nghèo):** Đặt giá thầu chỉ 30.000đ cho 1 tin nhắn. Nhưng họ làm một video cực kỳ hài hước quay cảnh mặc áo này đi hẹn hò, nam chính đẹp trai, video sáng sủa, âm nhạc bắt tai.
**Kết quả:** Khi một người dùng (nam, 20 tuổi) lướt News Feed, Facebook sẽ cho quảng cáo của **Cửa hàng B** hiển thị, dù họ trả tiền ít hơn hẳn. Vì video của B khiến người dùng xem lâu (Tăng Ad Quality) và người dùng này có xu hướng hay tương tác với video hài (Tăng EAR). 

> [!TIP]
> **Kết luận cho phần Đấu giá:** Để quảng cáo rẻ và hiệu quả, đừng chỉ nghĩ đến việc tăng ngân sách. **Hãy tập trung vào việc tạo ra Nội dung (Content) thực sự chất lượng và đánh trúng tâm lý của khách hàng.** Một nội dung hay sẽ làm tăng EAR và Ad Quality, kéo Total Value lên cao, từ đó giá thầu (chi phí) sẽ tự động giảm xuống.

---

## 2. Quá Trình Machine Learning (Máy Học) Của Facebook

Bạn đã bao giờ nghe ai đó nói: *"Đừng tắt quảng cáo đi bật lại, để cho nó học đi"* chưa? Đây là lúc chúng ta nói về **Learning Phase (Giai đoạn Máy học)**.

Khi bạn lên một chiến dịch mới, Facebook AI chưa biết chính xác ai là người sẽ thích quảng cáo của bạn nhất trong cái tệp đối tượng rộng lớn mà bạn chọn. Vì vậy, AI cần một quá trình thử nghiệm và học hỏi.

### A. Giai đoạn Máy học (Learning Phase) diễn ra như thế nào?
- Khi vừa bật quảng cáo, bạn sẽ thấy trạng thái là "Đang máy học".
- Lúc này, Facebook sẽ phân phối quảng cáo của bạn tới nhiều nhóm nhỏ khác nhau để "thử phản ứng". Vì đang thử nghiệm, chi phí (CPA - cost per action) trong giai đoạn này thường **RẤT BIẾN ĐỘNG**. Có thể hôm nay tin nhắn rất rẻ, ngày mai lại đắt gấp 3 lần. Đó là chuyện bình thường.
- **Điều kiện tốt nghiệp:** Để thoát khỏi giai đoạn máy học và hệ thống ổn định, một Nhóm quảng cáo (Ad Set) cần đạt được khoảng **50 Kết Quả Mục Tiêu (Ví dụ: 50 lượt nhắn tin) trong vòng 7 ngày**. 
- Tại sao lại là con số 50? Vì Facebook cần một lượng mẫu đủ lớn để tìm ra điểm chung của 50 người này (Ví dụ: 50 người này đều hay online lúc 10h đêm và thích xem Tiktok), từ đó AI sẽ tạo ra mô hình để đi tìm những người giống hệt như vậy với giá rẻ hơn.

### B. Tình trạng Máy học bị giới hạn (Learning Limited)
Nếu sau 7 ngày mà nhóm quảng cáo không gom đủ 50 kết quả, nó sẽ rơi vào trạng thái "Máy học bị giới hạn". Lúc này, thuật toán sẽ phân phối kém thông minh hơn và chi phí thường sẽ cao lên.
**Nguyên nhân:**
1. Ngân sách của bạn quá nhỏ, không đủ tiền để mua 50 kết quả trong 7 ngày.
2. Đối tượng khách hàng (Target) của bạn quá hẹp, AI không đủ không gian để tìm người.
3. Nội dung của bạn kém, ít người tương tác.
**Cách xử lý:** Đừng quá hoảng loạn. Nếu thấy chi phí vẫn có lãi, bạn cứ để chạy tiếp. Nếu lỗ, hãy thay đổi nội dung mới hoặc nới rộng ngân sách/tệp đối tượng.

### C. Những "Tối Kỵ" làm Reset (Khởi động lại) quá trình Máy Học
Trong quá trình AI đang học, bạn phải rất hạn chế việc "chọc ngoáy" vào chiến dịch. Những hành động sau được tính là **Significant Edits (Chỉnh sửa đáng kể)** và sẽ làm chiến dịch học lại từ đầu (bạn mất thời gian và tiền bạc đã bỏ ra trước đó):
1. Đổi mục tiêu chiến dịch.
2. Đổi Target (thêm bớt sở thích, đổi độ tuổi).
3. Đổi nội dung quảng cáo (thay ảnh, video, đổi chữ).
4. Thay đổi ngân sách quá đột ngột (tăng/giảm quá 20% ngân sách so với ban đầu).
*(Nếu muốn tăng ngân sách an toàn: Mỗi ngày chỉ nên tăng 15-20% để AI làm quen dần)*.

**🌟 Ví Dụ Minh Họa Thực Tế Về Giai Đoạn Máy Học:**
Bạn mở một quán trà sữa mới và phát tờ rơi (chạy quảng cáo) ở một khu vực đông dân cư. 
- **Ngày 1-3 (Đang máy học):** Bạn đưa tờ rơi cho bất kỳ ai đi ngang qua (học sinh, sinh viên, người già, nhân viên văn phòng). Bạn phát hiện ra cứ 10 người già thì chẳng ai mua, nhưng cứ 10 học sinh thì có 3 người mua. Lúc này bạn mất khá nhiều tiền in tờ rơi nhưng bán được ít (Chi phí cao, biến động).
- **Ngày 4-7 (Tích lũy đủ dữ liệu):** Nhờ việc ghi chép lại đặc điểm của những người đã mua (gom đủ 50 khách hàng), bạn nhận ra chân dung khách hàng chuẩn nhất là "Học sinh cấp 3, hay đi nhóm 2-3 người lúc 5h chiều". 
- **Sau ngày 7 (Thoát máy học):** Bạn không phát tờ rơi lung tung nữa, bạn chỉ đứng trước cổng trường cấp 3 lúc 5h chiều. Lúc này, chi phí in tờ rơi giảm hẳn mà lượng khách mua lại tăng vọt và ổn định. (Đó chính là lúc AI của Facebook đã khôn lên).
Tuy nhiên, nếu đến ngày thứ 8 bạn bất ngờ đổi tờ rơi thành bán "Cà phê đen đá" (Đổi Content) hoặc chuyển sang đứng ở cổng công ty IT (Đổi Target), bạn sẽ phải bắt đầu học lại từ đầu xem ai thích cà phê đen đá.

---

## 3. Các Vị Trí Hiển Thị (Placements) Trong Hệ Sinh Thái Meta

Facebook (hiện tại gọi là Meta) không chỉ có mỗi app Facebook. Họ sở hữu Instagram, Messenger và mạng lưới đối tác rộng lớn. Quảng cáo của bạn có thể xuất hiện ở rất nhiều nơi, mỗi nơi có một đặc thù riêng.

### A. Phân tích các vị trí "Đẻ ra tiền" chính:

#### 1. Facebook News Feed & Instagram Feed (Bảng tin)
- **Đặc điểm:** Người dùng lướt từ trên xuống, đan xen giữa bài viết của bạn bè là quảng cáo.
- **Tâm lý người dùng:** Đang cập nhật thông tin. Họ có thể dừng lại lâu để xem một bức ảnh nhiều chi tiết hoặc đọc một đoạn văn dài.
- **Định dạng tốt nhất:** Hình ảnh sắc nét, Video tỉ lệ 1:1 (Vuông) hoặc 4:5 (Dọc nhẹ), Carousel (Album ảnh). Vị trí này thường đem lại tỉ lệ chuyển đổi mua hàng (Conversion Rate) cao nhất.

#### 2. Reels & Stories (Video ngắn dọc 9:16)
- **Đặc điểm:** Vị trí "hot" nhất hiện tại. Trải nghiệm lấp đầy màn hình điện thoại (full-screen).
- **Tâm lý người dùng:** Giải trí chớp nhoáng, "chuyển kênh" cực nhanh nếu không thấy thú vị.
- **Định dạng bắt buộc:** Video dọc 9:16. 
- **Bí quyết:** 3 giây đầu tiên (Hook) phải cực kỳ cuốn hút, giật gân hoặc có yếu tố bất ngờ để họ không vuốt qua. Tuyệt đối không dùng video ngang (16:9) chèn vào vị trí này, nhìn sẽ rất nghiệp dư và rẻ tiền.

#### 3. Messenger (Hộp thư)
- **Đặc điểm:** Quảng cáo hiện ngay giữa các cuộc trò chuyện.
- **Tâm lý người dùng:** Đang có nhu cầu giao tiếp cá nhân, dễ bị xao nhãng.
- **Ứng dụng:** Rất tốt cho chiến dịch Retargeting (Tiếp thị lại). Ví dụ: Khách đã xem sản phẩm nhưng chưa mua, bạn bắn quảng cáo tặng Mã Giảm Giá ngay vào hòm thư của họ. Tỉ lệ click sẽ rất cao.

#### 4. Audience Network (Mạng đối tác)
- **Đặc điểm:** Facebook liên kết với các app (trò chơi, tiện ích) hoặc website khác để hiển thị quảng cáo của bạn ngoài nền tảng Facebook.
- **Ưu điểm:** Giá rất rẻ (CPM cực thấp) vì có rất nhiều chỗ hiển thị.
- **Nhược điểm chí mạng:** Rất nhiều "rác". Người dùng chơi game thường bị buộc phải xem video quảng cáo hoặc lỡ tay click nhầm để tắt.
> [!WARNING]
> **Lời khuyên thực chiến:** Nếu mục tiêu của bạn là ra tin nhắn, ra đơn hàng có chất lượng, **HÃY TẮT Audience Network** đi. Nó thường tốn tiền vô ích và mang lại lượng click ảo (người ta vào web rồi thoát ra ngay lập tức).

### B. Vị trí tự động (Advantage+ Placements) vs Vị trí thủ công

Khi set quảng cáo, Facebook sẽ luôn khuyên bạn chọn **"Advantage+ Placements" (Vị trí tự động)**. 
- **Ưu điểm:** AI của Facebook sẽ tự dạo quanh tất cả các vị trí, ở đâu đang có giá hiển thị rẻ và có khách hàng, nó sẽ dồn tiền vào đó.
- **Khi nào dùng Thủ công (Manual Placements)?** Khi bạn có thiết kế riêng biệt. Ví dụ: Bạn quay 1 video Tiktok dọc 9:16, bạn nên chọn thủ công và chỉ tích vào Reels/Story. Nếu để tự động, AI bê video 9:16 này ném vào News Feed máy tính, nó bị cắt xén hai đầu nhìn rất xấu, giảm chất lượng quảng cáo nghiêm trọng.

**🌟 Ví Dụ Minh Họa Thực Tế Về Vị Trí Hiển Thị:**
Bạn đang bán "Khóa học tiếng Anh cho người đi làm" trị giá 10 triệu đồng.
- **Nếu bạn chọn vị trí Reels/Story:** Người dùng lướt Reels đa phần để giải trí sau giờ làm, tâm lý cực kỳ vội vàng. Nếu video của bạn dài 3 phút và nói đạo lý nhàm chán, họ vuốt qua trong 0.5 giây. Trừ khi 3 giây đầu bạn có một yếu tố cực kỳ sốc (ví dụ: "Đừng đi làm nữa nếu bạn không biết 3 câu tiếng Anh này!").
- **Nếu bạn chọn vị trí News Feed:** Người dùng đang ngồi máy tính ở văn phòng, họ có thể dừng lại đọc một bài viết dài 1000 chữ về lộ trình học, xem một tấm ảnh Infographic chi tiết và sau đó điền form tư vấn.
- **Kết luận:** Tùy thuộc vào giá sản phẩm và thói quen tiêu thụ nội dung, việc vứt quảng cáo khóa học 10 triệu vào giữa lúc người ta đang xem video nhảy múa giải trí (Reels) có thể không mang lại hiệu quả cao bằng việc viết một bài PR sâu sắc trên Bảng tin (News Feed).

---

## TỔNG KẾT BÀI 1

- Bạn không cần phải có ngân sách khủng nhất để chiến thắng. Hãy làm **Nội dung xuất sắc** để có điểm chất lượng cao.
- Khi chạy Ads, hãy kiên nhẫn. **Đừng sửa chiến dịch liên tục**, hãy để máy học. Nếu muốn sửa, hãy sao chép ra một nhóm mới để thử nghiệm.
- Hiểu rõ định dạng nội dung của mình (ảnh vuông hay video dọc) để **chọn vị trí hiển thị (Placement) cho phù hợp**, tránh tốn tiền vứt qua cửa sổ.

> [!IMPORTANT]
> **Hãy comment/nhận xét:** Bạn cảm thấy cách giải thích này đã đủ chi tiết và dễ hiểu chưa? Có phần nào (ví dụ: máy học, hay giá thầu) bạn còn thấy mơ hồ và cần giải thích bằng một ví dụ cụ thể của ngành hàng bạn định bán không? Sau khi bạn phản hồi, chúng ta sẽ qua bài 2 của Giai đoạn 1: Hành trình khách hàng nhé.

---


# Giai Đoạn 1 - Phần 2: Hành Trình Khách Hàng (Customer Journey) & Phễu Marketing

Chào bạn, chào mừng đến với Phần 2. Rất nhiều người khi bắt đầu chạy Facebook Ads đã gặp thất bại thảm hại, tiêu tốn hàng chục triệu đồng chỉ vì một sai lầm duy nhất: **Họ bắt khách hàng phải mua hàng ngay ở lần gặp đầu tiên.**

Tài liệu này sẽ giúp bạn hiểu rõ tâm lý khách hàng từ lúc "Người dưng" biến thành "Người mua", từ đó thiết kế các chiến dịch quảng cáo bám sát từng giai đoạn tâm lý này.

---

## 1. Hành Trình Khách Hàng Là Gì & Tại Sao Lại Quan Trọng?

**Sai lầm phổ biến của người mới chạy Ads:** 
Bạn nhập về một lô quần áo mới. Bạn lập tức chạy một bài quảng cáo có nội dung: *"Áo sơ mi đẹp, giá rẻ chỉ 199k, mua ngay!"* và nhắm mục tiêu toàn quốc. Kết quả: Rất nhiều người thấy, nhưng không ai mua.

**Tại sao?** Vì bạn đang cố cầu hôn một người mà bạn vừa mới làm quen. Bạn chưa cho họ lý do tại sao họ cần cái áo đó, shop bạn có uy tín không, chất vải có tốt không... 

**Hành trình khách hàng** là chuỗi các "điểm chạm" tâm lý và hành động của một người, tính từ khoảnh khắc họ chưa biết bạn là ai, cho đến khi họ khao khát sản phẩm của bạn, móc hầu bao để mua, và quay lại mua nhiều lần nữa.

Để mô hình hóa hành trình này trên Facebook Ads, chúng ta sử dụng **Phễu Marketing (Marketing Funnel)**.

---

## 2. Cấu Trúc Phễu Marketing 3 Tầng (TOFU - MOFU - BOFU)

Một chiến lược Facebook Ads bài bản sẽ chia khách hàng thành 3 luồng (tương ứng với 3 nhiệt độ: Lạnh - Ấm - Nóng) để có cách "chăm sóc" khác nhau.

### Tầng 1: TOFU (Top of Funnel) - Giai đoạn Nhận thức (Awareness)
Đây là tệp **Khách Hàng Lạnh**. Họ chưa biết bạn là ai, thậm chí họ chưa biết là họ đang có nhu cầu mua sản phẩm.
- **Mục tiêu của quảng cáo:** Khơi gợi vấn đề (Nỗi đau), thu hút sự chú ý, giáo dục thị trường. TẠO RA NHU CẦU.
- **Nội dung (Content):** KHÔNG BÁN HÀNG. Nội dung phải mang tính giải trí, hữu ích, chia sẻ kiến thức hoặc kể một câu chuyện đồng cảm. Thường là định dạng Video ngắn.
- **Mục tiêu (Campaign Objective) trên Facebook:** Lượt xem video, Lượt tương tác, Lượt tiếp cận.

> **🌟 Ví Dụ Thực Tế Tầng 1:**
> Bạn bán Thực phẩm chức năng (TPCN) trị rụng tóc.
> - **Content sai lầm:** "Thuốc mọc tóc ABC, giảm giá 50% hôm nay". (Khách sẽ lướt qua vì họ chưa tin TPCN).
> - **Content TOFU chuẩn:** Một video Reels kể chuyện: "3 thói quen gội đầu sai lầm khiến bạn hói trước tuổi 30". Trong video hoàn toàn chỉ chia sẻ kiến thức y khoa hữu ích. Không hề ép mua sản phẩm.
> - **Kết quả:** Những người bị rụng tóc sẽ dừng lại xem hết video. Bạn đã gom được một tệp "Khách Hàng Lạnh" bắt đầu biết đến thương hiệu của bạn.

---

### Tầng 2: MOFU (Middle of Funnel) - Giai đoạn Cân nhắc (Consideration)
Đây là tệp **Khách Hàng Ấm**. Họ đã nhận thức được vấn đề của mình, họ đã biết bạn là ai (nhờ xem video ở Tầng 1), và bây giờ họ đang cân nhắc xem giải pháp của bạn có tốt không, có đáng tin hay không.
- **Mục tiêu của quảng cáo:** Xây dựng niềm tin, chứng minh sự chuyên nghiệp, so sánh tính ưu việt của sản phẩm.
- **Nội dung (Content):** Feedback (phản hồi) của khách hàng cũ, Video review đập hộp chân thực, Giấy chứng nhận chất lượng, Bài viết phân tích thành phần sản phẩm.
- **Mục tiêu trên Facebook:** Lưu lượng truy cập (Traffic vào Website để đọc thêm), Tương tác với bài viết.

> **🌟 Ví Dụ Thực Tế Tầng 2 (Tiếp tục ví dụ trị rụng tóc):**
> Bạn dùng tính năng "Đối tượng tùy chỉnh (Custom Audience)" của Facebook để gom TẤT CẢ những ai đã xem trên 50% thời lượng của cái video TOFU ở trên. Sau đó, bạn chỉ chạy quảng cáo hiển thị riêng cho nhóm người này.
> - **Content MOFU:** Một bài viết chi tiết kèm hình ảnh so sánh: "Tại sao TPCN ABC lại hiệu quả hơn các loại dầu gội bưởi thông thường trên thị trường? Review từ 100 khách hàng đã mọc tóc sau 2 tháng".
> - **Kết quả:** Khách hàng thấy sản phẩm uy tín, được nhiều người khen, họ bắt đầu tin tưởng shop của bạn hơn đối thủ.

---

### Tầng 3: BOFU (Bottom of Funnel) - Giai đoạn Chuyển đổi (Conversion)
Đây là tệp **Khách Hàng Nóng**. Họ đã tin bạn, họ đã khao khát sản phẩm, thứ duy nhất họ cần bây giờ là MỘT CÚ HÍCH để rút thẻ ra thanh toán.
- **Mục tiêu của quảng cáo:** Chốt sale trực tiếp, vượt qua rào cản về giá, tạo sự cấp bách (Urgency).
- **Nội dung (Content):** Hard-sale (Bán hàng trực tiếp). Đưa ra lời chào hàng không thể từ chối: Mã giảm giá (Voucher), Freeship, Quà tặng kèm, Cảnh báo cháy hàng (Chỉ còn 10 suất cuối).
- **Mục tiêu trên Facebook:** Doanh số (Chuyển đổi trên Web), Tương tác tin nhắn (Inbox mua hàng).

> **🌟 Ví Dụ Thực Tế Tầng 3 (Chốt hạ TPCN rụng tóc):**
> Bạn tiếp tục lọc ra những người đã click vào bài Review ở Tầng 2, hoặc những người đã inbox nhưng chưa mua để chạy quảng cáo cuối cùng (Retargeting).
> - **Content BOFU:** "FLASH SALE CUỐI TUẦN: Giảm ngay 30% liệu trình mọc tóc chuyên sâu cho 50 khách hàng đầu tiên. Tặng kèm serum dưỡng tóc. Mua Ngay!".
> - **Kết quả:** Tỉ lệ chốt đơn ở bước này sẽ cực kỳ cao vì khách hàng đã trải qua giai đoạn giáo dục và xây dựng niềm tin trước đó.

---

## 3. Kỹ Thuật "Trượt Phễu" (Retargeting) Trong Facebook Ads

Bạn có thể thấy, điều làm nên sức mạnh của Facebook Ads không phải là quảng cáo ngẫu nhiên, mà là khả năng **Tiếp thị lại (Retargeting/Remarketing)**. 

Facebook cung cấp cho bạn một công cụ cực kỳ mạnh mẽ tên là **Pixel** (Gắn vào Website) và **Custom Audience** (Ghi nhận hành vi trên Fanpage/Video).

Nhờ hệ thống này, bạn có thể tạo ra các "Phễu tự động":
1. **Quảng cáo A (Hút phễu):** Hiện cho 1.000.000 người lạ xem video.
2. **Quảng cáo B (Nuôi dưỡng):** Facebook tự động ghi nhận 50.000 người đã xem hết video, chỉ hiển thị bài Review cho 50.000 người này (Tiết kiệm ngân sách tối đa).
3. **Quảng cáo C (Chốt đơn):** Ghi nhận 2.000 người đã vào website nhưng thoát ra chưa mua. Bám đuổi họ bằng quảng cáo Freeship suốt 7 ngày.

*(Lưu ý: Chúng ta sẽ học chi tiết cách cài đặt các tệp đối tượng này ở Giai Đoạn 4).*

---

## TỔNG KẾT BÀI 2

1. **Đừng bao giờ "bức tử" khách hàng bằng những bài viết chốt sale (BOFU) khi họ vẫn đang là khách hàng lạnh (TOFU).**
2. Người mới chạy Ads thường đốt tiền vì chỉ chạy duy nhất 1 tầng BOFU (chạy tin nhắn bán hàng thẳng). Hãy chia ngân sách (Ví dụ: 20% cho video thu hút TOFU, 30% cho Review MOFU, 50% cho chốt Sale BOFU).
3. Sức mạnh thực sự của Facebook nằm ở khả năng phân tập khách hàng và bám đuổi (Retargeting). Bạn cần học cách xây dựng Nội dung chuỗi thay vì chỉ 1 bài viết đơn lẻ.

> [!IMPORTANT]
> **Nhận xét của bạn:** 
> Việc chia khách hàng thành 3 nhiệt độ (Lạnh - Ấm - Nóng) và cung cấp nội dung tương ứng có phù hợp với tư duy bán hàng của bạn không? Sản phẩm mà bạn định bán có giá trị cao (Cần phễu dài để thuyết phục) hay giá trị thấp (Cần phễu ngắn, dễ chốt ngay từ vòng đầu)? Hãy cho tôi biết để các bài tiếp theo tôi sẽ tối ưu chiến lược riêng cho mức giá sản phẩm của bạn!


---


# Giai Đoạn 1 - Phần 3: Chính Sách Quảng Cáo & Nguyên Tắc "Sống Còn"

Chào bạn, đây là bài học cuối cùng và cũng là bài **QUAN TRỌNG NHẤT** của Giai đoạn 1. 

Ở các bài trước, chúng ta nói về việc làm sao để bán được hàng. Nhưng ở bài này, chúng ta sẽ nói về việc làm sao để... **được phép bán hàng**. Có rất nhiều người chuẩn bị ngân sách cả trăm triệu, nội dung quay dựng tuyệt đẹp, nhưng vừa bấm "Chạy quảng cáo" thì tài khoản đỏ lòm, bị khóa (vô hiệu hóa) vĩnh viễn. 

Tài liệu này sẽ trang bị cho bạn "áo giáp" để sinh tồn trong môi trường kiểm duyệt cực kỳ gắt gao của AI Facebook.

---

## 1. Tại Sao Tài Khoản Của Bạn Lại Bị "Chết" (Vô Hiệu Hóa)?

Việc kiểm duyệt quảng cáo của Facebook chủ yếu do **Trí tuệ nhân tạo (AI - Bot)** thực hiện, rất hiếm khi có người thật xét duyệt ở vòng đầu. AI sẽ quét qua:
- **Phần Text (Văn bản):** Nó đọc chữ trên bài viết, chữ nằm bên trong hình ảnh, và cả lời nói trong video của bạn (Voice-to-text).
- **Phần Hình ảnh/Video:** Nó phân tích xem ảnh có yếu tố hở hang, bạo lực hay vi phạm bản quyền không.
- **Trang đích (Website/Landing Page):** Nếu bạn chạy quảng cáo kéo người dùng về web, AI sẽ chui cả vào web của bạn để quét. Đừng nghĩ rằng lách ở bài quảng cáo là xong.

Ngoài ra, tài khoản còn bị khóa do:
- **Người dùng báo cáo (Report):** Nếu quảng cáo của bạn bị nhiều người bấm nút "Ẩn" hoặc "Báo cáo nội dung rác/lừa đảo".
- **Bất thường hệ thống:** Đang ở Việt Nam tự nhiên dùng thẻ IP Mỹ để thanh toán, hoặc thẻ Visa bị từ chối thanh toán nhiều lần do hết tiền (Facebook ghét nhất nợ tiền).

---

## 2. Các Lỗi Vi Phạm Chính Sách (VPCS) "Tử Thần" Thường Gặp

Dưới đây là những lỗi phổ biến nhất khiến 90% người mới bay màu tài khoản.

### A. Lỗi Cam Kết, Nói Quá Sự Thật & Before/After (Trước/Sau)
Facebook cấm tuyệt đối việc bạn "hứa hẹn" hoặc "cam kết" một kết quả cụ thể, đặc biệt là trong lĩnh vực Sức khỏe, Sắc đẹp và Tài chính. Facebook cũng cấm các hình ảnh so sánh Trước - Sau khi sử dụng sản phẩm.

> **❌ Ví dụ Vi Phạm:** 
> - "Cam kết hết sạch mụn 100% chỉ sau 3 ngày".
> - "Giảm ngay 5kg trong 1 tuần không cần ăn kiêng".
> - Ghép 2 bức ảnh: Một bên mặt đầy mụn đen sạm, một bên láng o trắng bóc.
>
> **✅ Cách lách (Cách diễn đạt an toàn):**
> - "Lấy lại làn da tự tin và rạng rỡ để đón Tết". (Hướng tới cảm xúc thay vì cam kết).
> - "Hành trình thay đổi vóc dáng kiên trì của khách hàng A". (Chỉ đưa hình ảnh hiện tại đẹp đẽ của họ, hoặc review bằng video thay vì ghép ảnh Before/After).

### B. Lỗi Đặc Điểm Cá Nhân (Personal Attributes)
Bạn KHÔNG ĐƯỢC chỉ đích danh hay ám chỉ về độ tuổi, giới tính, tôn giáo, tình trạng tài chính, khiếm khuyết cơ thể hoặc tình trạng y tế của người xem quảng cáo. Facebook cho rằng việc này làm người dùng cảm thấy bị theo dõi và xâm phạm đời tư.

> **❌ Ví dụ Vi Phạm:**
> - "Bạn đang bị hói đầu ở tuổi 30?". (Ám chỉ khiếm khuyết cơ thể & tuổi).
> - "Là mẹ bỉm sữa, bạn không có tiền tiêu?". (Ám chỉ tình trạng tài chính & giới tính).
> - "Bạn đang nợ xấu cần vay vốn?".
>
> **✅ Cách lách (Chuyển sang kể chuyện hoặc nói về sản phẩm thay vì nói về người xem):**
> - "Sản phẩm A giúp hỗ trợ những mái tóc thưa mỏng trở nên dày hơn".
> - "Giải pháp tăng thu nhập ngay tại nhà dành riêng cho các mẹ bỉm".

### C. Lỗi Zoom Cận Cảnh Bộ Phận Cơ Thể & Hở Hang (Gợi Dục)
Dù bạn bán đồ lót hay mỹ phẩm, việc quay/chụp quá sát vào da thịt sẽ bị AI đánh dấu là "Gợi dục" hoặc "Tạo cảm giác khó chịu".

> **❌ Ví dụ Vi Phạm:**
> - Zoom cận cảnh vào một cái mụn mủ đang nặn (Kinh dị/Khó chịu).
> - Ảnh mặc Bikini tạo dáng khêu gợi, chụp cận vào vòng 1 hoặc vòng 3.
>
> **✅ Cách lách:**
> - Chụp toàn thân (Full-body shot) để tỷ lệ da thịt hiển thị trên ảnh giảm xuống.
> - Quay video thay vì chụp ảnh tĩnh, vì video chuyển cảnh liên tục AI sẽ khó bắt lỗi "cận cảnh" hơn là một bức ảnh zoom sát.

### D. Lỗi Vi Phạm Thương Hiệu & Bản Quyền
- **Hình ảnh/Text:** Bán giày Fake Nike, túi Fake Dior, iPhone xách tay nhưng ghi thẳng tên thương hiệu hoặc để lộ rõ logo to đùng trong ảnh.
- **Âm thanh:** Dùng nhạc đang trending trên TikTok dính bản quyền thương mại đập sang Facebook sẽ bị tắt tiếng hoặc cấm chạy. 

*(Giải pháp: Luôn dùng nhạc trong Thư viện miễn phí của Facebook, hoặc dùng nhạc Lofi không bản quyền. Với hàng VNXK/Fake, phải che logo hoặc dùng góc chụp nghệ thuật khuất logo).*

---

## 3. Cách "Lách" Từ Ngữ Nhạy Cảm (Kỹ Thuật Viết Content)

Trước đây, người ta hay dùng cách chèn kí tự lạ để lách (Ví dụ: `Tr.ị M.ụ.n`, `Gi.ả.m Câ.n`). Nhưng hiện tại AI Facebook đã đọc được hết và nếu cố tình dùng nhiều, tài khoản sẽ chết càng nhanh vì lỗi "Cố tình lách hệ thống".

**Kỹ thuật sống còn hiện tại là: "Nói Giảm, Nói Tránh, Dùng Từ Đồng Nghĩa"**

- Thay vì dùng từ **"Trị/Chữa bệnh"**: Hãy dùng từ "Hỗ trợ", "Cải thiện", "Đẩy lùi", "Giải pháp", "Chăm sóc".
- Thay vì dùng từ **"Giảm cân/Mỡ"**: Hãy dùng từ "Lấy lại vóc dáng", "Thon gọn", "Eo thon", "Nhẹ nhàng cơ thể".
- Thay vì dùng từ **"Sẹo/Nám/Mụn"**: Hãy dùng từ "Khuyết điểm trên da", "Vết thâm".
- Tuyệt đối tránh các từ nhạy cảm như: Y tế, Bác sĩ, Cam kết, 100%, Thuốc, Covid, Cho vay, Phá sản...

---

## 4. Bạn Cần Làm Gì Khi Tài Khoản "Đỏ Lòe" (Bị Khóa)?

Cho dù bạn cẩn thận đến mấy, đôi khi AI Facebook... bị "điên" và khóa nhầm (Trảm nhầm còn hơn bỏ sót). Lúc đó, bạn cần nhớ 3 nguyên tắc thép sau:

1. **KHÔNG HOẢNG LOẠN TẠO TÀI KHOẢN MỚI NGAY LẬP TỨC:** Nếu bạn bị khóa, bạn lập tức tạo 1 tài khoản Facebook khác trên cùng 1 cái máy tính đó, cùng mạng Wifi đó, và add đúng cái thẻ Visa vừa bị khóa vào -> Facebook sẽ quét IP và khóa tiếp cái mới trong vòng 1 nốt nhạc.
2. **Kháng cáo (Appeal):** Facebook luôn có nút "Yêu cầu xem xét lại" (Kháng nghị). Bạn chỉ cần bấm vào đó, xác minh danh tính bằng CCCD/Hộ chiếu. Nếu bạn sạch, trong vòng 24-48h tài khoản sẽ về.
3. **Luôn có "Kế hoạch B" (Dàn tài nguyên dự phòng):** Người chạy Ads chuyên nghiệp không bao giờ có đúng 1 con số 0. Họ luôn mua hoặc nuôi dự phòng thêm 2-3 tài khoản Facebook, 2-3 Fanpage phụ. Tài khoản A chết, họ lập tức mang Fanpage qua tài khoản B chạy tiếp không để việc kinh doanh bị gián đoạn.

---

## TỔNG KẾT BÀI 3 VÀ GIAI ĐOẠN 1

- Luật chơi của Facebook rất khắt khe. Việc hiểu chính sách còn quan trọng hơn cả việc setup kỹ thuật.
- Hãy thay đổi tư duy viết content: Thay vì giật gân, cam kết quá đà, hãy đánh vào cảm xúc, sự uy tín và hình ảnh chân thực.
- Xác định tâm lý: **Bị khóa tài khoản là một phần tất yếu của nghề chạy Ads.** Đừng nản chí, hãy chuẩn bị trước tài nguyên dự phòng.

> [!IMPORTANT]
> **Nhận xét của bạn:** 
> Sản phẩm bạn định bán có rơi vào nhóm rủi ro cao không (Ví dụ: Mỹ phẩm, TPCN, Quần áo thương hiệu, Dịch vụ tài chính...)? Nếu có, bạn đang lo lắng nhất về loại vi phạm nào? Hãy chia sẻ để tôi tư vấn cách "lách" cụ thể cho đúng ngành hàng của bạn nhé!
> 
> ***Chúc mừng bạn đã hoàn thành Giai đoạn 1 (Tư duy & Nền tảng). Khi bạn xem xong phần này, hãy phản hồi lại và chúng ta sẽ bước sang Giai đoạn 2 - Bắt đầu làm quen với hệ thống kỹ thuật và các thuật ngữ phức tạp!***

---

# Giai Đoạn 2 - Phần 1: Các Thuật Ngữ Cơ Bản Cần Thuộc Lòng

Chào mừng bạn bước sang **Giai Đoạn 2**. Ở giai đoạn này, chúng ta sẽ bắt đầu tiếp xúc với "bảng điều khiển" của Facebook Ads (Trình quản lý quảng cáo). 

Để lái được xe, bạn phải biết đâu là vô lăng, đâu là chân phanh. Trong Facebook Ads, nếu bạn không hiểu ý nghĩa của các con số báo cáo, bạn sẽ giống như một người mù ném tiền qua cửa sổ. Tài liệu này sẽ giúp bạn hiểu ngôn ngữ của dân chạy Ads chuyên nghiệp.

---

## Nhóm 1: Các Chỉ Số Về Chi Phí (Cost Metrics)
*Đây là các chỉ số cho biết bạn đang phải trả bao nhiêu tiền cho Facebook để mua từng loại hành động của khách hàng.*

### 1. CPM (Cost Per Mille) - Chi phí cho 1.000 lượt hiển thị
- **Định nghĩa:** Số tiền bạn phải trả để quảng cáo của bạn hiện lên màn hình người dùng 1.000 lần.
- **Ý nghĩa sống còn:** Đây là chỉ số gốc rễ quyết định quảng cáo của bạn đắt hay rẻ. Facebook thu tiền bạn dựa trên số lần hiển thị (CPM) chứ không thu tiền dựa trên số tin nhắn bạn có được.
- **Phân tích:** 
  - Nếu CPM là 50.000đ. Tức là cứ 1 hiển thị bạn mất 50đ.
  - **CPM cao (Ví dụ > 100.000đ):** Nghĩa là bạn đang chen chân vào một tệp khách hàng quá nhỏ, hoặc đang tranh giành với quá nhiều đối thủ giàu có (như đợt Black Friday hoặc dịp Lễ Tết).

### 2. CPC (Cost Per Click) - Chi phí cho 1 lượt Click
- **Định nghĩa:** Số tiền trung bình bạn trả cho mỗi lần khách hàng bấm vào quảng cáo (Bấm vào xem ảnh, bấm vào link web, bấm nút gửi tin nhắn).
- **Phân tích:** CPC = Tổng chi phí / Số lượt click. Nếu CPC quá đắt, có nghĩa là quảng cáo của bạn hiển thị nhưng người ta không muốn bấm vào.

### 3. CPA / CPL (Cost Per Action / Cost Per Lead) - Chi phí / Kết quả
- **Định nghĩa:** Số tiền bạn mất để có được 1 KẾT QUẢ MỤC TIÊU. 
  - Nếu bạn chạy mục tiêu Tin nhắn, CPA chính là giá 1 tin nhắn (Cost Per Message). 
  - Nếu bạn chạy mục tiêu Điền Form, CPA là giá 1 số điện thoại (Cost Per Lead).
- **Phân tích:** Đây là con số bạn sẽ theo dõi hàng ngày để quyết định xem có nên tắt hay bật quảng cáo. Giá 1 tin nhắn (CPA) nằm trong ngưỡng bạn có lãi thì chạy tiếp, nếu lỗ thì tắt.

---

## Nhóm 2: Các Chỉ Số Về Hiệu Quả (Performance Metrics)
*Chi phí đắt hay rẻ đôi khi không quan trọng bằng việc hiệu quả mang lại như thế nào. Đây là các chỉ số "Bắt bệnh" quảng cáo.*

### 1. CTR (Click-Through Rate) - Tỉ lệ Click
- **Định nghĩa:** Trong 100 người thấy quảng cáo của bạn, có bao nhiêu người bấm vào nó? (Công thức: Số Click / Số Hiển thị).
- **Ý nghĩa sống còn:** CTR đo lường **Sức Hấp Dẫn Của Nội Dung**. 
  - CTR > 5%: Quảng cáo rất hấp dẫn, đánh trúng tâm lý.
  - CTR < 1%: Quảng cáo cực kỳ nhàm chán, khách hàng lướt qua ngay lập tức. Cần phải thay đổi Hình ảnh/Video hoặc 3 giây đầu tiên ngay.

### 2. CR (Conversion Rate) - Tỉ lệ Chuyển Đổi
- **Định nghĩa:** Trong 100 người nhắn tin (hoặc vào web) cho bạn, có bao nhiêu người thực sự MUA HÀNG?
- **Phân tích:** Đây là chỉ số đánh giá kỹ năng chốt sale của bạn (hoặc chất lượng trang Web). Nếu 100 tin nhắn mà chốt được 10 đơn -> CR = 10%. 
- Rất nhiều người chạy Ads ra cả ngàn tin nhắn giá rất rẻ, nhưng CR = 0% vì toàn là khách hàng rác (trẻ trâu vào nhắn linh tinh).

### 3. ROAS (Return On Ad Spend) - Lợi nhuận trên chi phí quảng cáo
- **Định nghĩa:** Tỉ lệ doanh thu kiếm được trên số tiền bỏ ra chạy Ads. 
- **Công thức:** ROAS = Doanh thu / Chi phí quảng cáo.
- **Ví dụ thực tế:** Hôm nay bạn bỏ ra 1.000.000đ chạy Ads, chốt được đơn và thu về 5.000.000đ tiền hàng. -> ROAS = 5 (Bỏ 1 đồng ăn 5 đồng).
- **Ý nghĩa:** Đây là "Trùm cuối" của mọi chỉ số. Đừng quan tâm tin nhắn đắt hay rẻ, CTR cao hay thấp. Miễn là ROAS > Điểm hòa vốn của bạn, chiến dịch đó đang thành công!

### 4. Frequency (Tần Suất)
- **Định nghĩa:** Trung bình một người đã nhìn thấy quảng cáo của bạn bao nhiêu lần.
- **Phân tích:** Nếu Tần suất = 3, nghĩa là trung bình 1 khách đã xem quảng cáo này 3 lần. Nếu tần suất vượt quá 3 hoặc 4, quảng cáo sẽ rơi vào trạng thái "Bão hòa" (Ad Fatigue) gây nhàm chán, khách hàng sẽ ghét và Report bạn. Lúc này cần đổi content mới.

---

## Nhóm 3: Thuật Ngữ Về Cấu Trúc Hệ Thống (Structure)
*Hệ thống Facebook Ads được chia làm 3 tầng lồng vào nhau, giống như một cái Thư Mục Mẹ chứa các Thư Mục Con.*

### Tầng 1: Campaign (Chiến Dịch) - BẠN MUỐN GÌ?
- Ở tầng cao nhất này, Facebook chỉ hỏi bạn 1 câu: Mục tiêu của bạn là gì? 
- Bạn có thể chọn: "Tôi muốn người ta nhắn tin", "Tôi muốn người ta vào Web", hoặc "Tôi muốn càng nhiều người xem video càng tốt".

### Tầng 2: Ad Set (Nhóm Quảng Cáo) - BẠN TÌM AI & TRẢ BAO NHIÊU?
- Nằm trong Chiến dịch. Ở đây bạn cấu hình:
  1. **Ngân sách (Budget):** 500k/ngày.
  2. **Nhắm mục tiêu (Targeting/Audience):** Nam, 18-24 tuổi, thích đá bóng, ở Hà Nội.
  3. **Vị trí hiển thị (Placement):** Chỉ chạy trên Reels và Story.

### Tầng 3: Ad (Bài Quảng Cáo) - HỌ SẼ XEM CÁI GÌ?
- Nằm trong Nhóm Quảng cáo. Đây là nơi bạn tải Hình ảnh, Video, viết Text và gắn nút Kêu gọi hành động (Ví dụ: Nút Gửi Tin Nhắn).
- *Lưu ý: 1 Chiến dịch có thể chứa nhiều Nhóm Quảng Cáo. 1 Nhóm Quảng Cáo có thể chứa nhiều Bài Quảng Cáo.*

---

## 🌟 VÍ DỤ THỰC TẾ: BẮT BỆNH QUẢNG CÁO DỰA VÀO CHỈ SỐ

Hãy tưởng tượng bạn là Bác sĩ, và đây là bệnh án của 2 chiến dịch:

**Trường hợp 1: Bệnh "Click-bait" (Câu view rác)**
- **Triệu chứng:** CPM cực rẻ (20.000đ), CTR cực cao (15%). Nhưng CPA (Giá tin nhắn) lại lên tới 100.000đ/tin, và không chốt được đơn nào (CR = 0).
- **Chẩn đoán:** Quảng cáo của bạn có tính giật gân, tò mò (Ví dụ: "Click vào xem sự thật chấn động"). Người ta tò mò bấm vào rất nhiều (CTR cao), nhưng bấm vào xong thấy bạn bán áo thun, họ cảm thấy bị lừa nên thoát ra luôn, không ai nhắn tin (CPA đắt).

**Trường hợp 2: Bệnh "Content thảm họa" hoặc "Nhầm Target"**
- **Triệu chứng:** CPM bình thường (50.000đ), nhưng CTR lẹt đẹt 0.5%, và không có tin nhắn nào.
- **Chẩn đoán:** 100 người lướt qua mới có chưa tới 1 người bấm vào xem. Lỗi do hình ảnh của bạn quá mờ nhạt, nội dung không có sức hút. Hoặc bạn đang mang bán "Đồng hồ Rolex 500 triệu" cho sinh viên năm nhất (Sai target).

---

## TỔNG KẾT BÀI 1 GIAI ĐOẠN 2

Việc nắm vững các chỉ số giống như bạn đang đọc "sức khỏe" của dòng tiền. Đừng chỉ nhìn vào một chỉ số duy nhất (ví dụ cứ thấy giá tin nhắn rẻ là vui), hãy nhìn vào bức tranh tổng thể (ROAS) để biết mình thực sự đang lãi hay lỗ.

> [!IMPORTANT]
> **Nhận xét của bạn:** 
> Trong số các thuật ngữ và chỉ số trên, bạn cảm thấy chỉ số nào khó hiểu nhất? Bạn có muốn tôi đưa ra một bài toán tính chi phí và lợi nhuận (ROAS) giả định cho mức giá sản phẩm thực tế của bạn không? Hãy để lại bình luận nhé! Mọi thứ đang bắt đầu thực tế hơn rồi đấy.

---

# Giai Đoạn 2 - Phần 2: Cấu Trúc Tài Nguyên & Trình Quản Lý Quảng Cáo

Chào bạn, ở phần này chúng ta sẽ nói về **"Đồ nghề"** của một nhà quảng cáo. Rất nhiều người mới thường nhầm lẫn giữa Facebook cá nhân, Fanpage và Tài khoản quảng cáo. Nếu không nắm rõ cấu trúc này, đến lúc bị khóa tài khoản, bạn sẽ hoang mang không biết mất cái gì và cần phải gỡ ở đâu.

Hãy tưởng tượng bạn đang mở một công ty. Tài liệu này sẽ hướng dẫn bạn cách tổ chức "phòng ban" trên hệ thống của Facebook một cách chuyên nghiệp và an toàn nhất.

---

## 1. Bản Đồ Tài Nguyên Facebook: Ai Là Chủ Của Ai?

Để có thể chạy được quảng cáo, bạn cần có ít nhất 3 thành phần sau ghép lại với nhau:

1. **Profile cá nhân (VIA/Clone):** Đây chính là tài khoản Facebook bạn dùng để lướt dạo hàng ngày, có tên, ngày sinh, bạn bè. Trong thuật ngữ chạy Ads, người ta thường gọi đây là VIA (Tài khoản người thật) hoặc Clone (Tài khoản ảo).
   - *Vai trò:* Là "Nhân viên" nắm chìa khóa để đi vào phòng điều khiển quảng cáo.
2. **Fanpage (Trang doanh nghiệp):** Là "Cửa hàng" nơi bạn trưng bày sản phẩm. Khách hàng nhìn thấy quảng cáo là nhìn thấy hình ảnh của Fanpage chứ không phải Profile cá nhân của bạn.
   - *Vai trò:* Đại diện thương hiệu, tiếp nhận tin nhắn, bình luận.
3. **Tài khoản quảng cáo (Ad Account):** Là cái "Ví tiền". Nơi chứa thẻ Visa của bạn, ghi nhận lịch sử tiêu tiền, lưu trữ các tệp đối tượng và số liệu quảng cáo.

> **Ví dụ dễ hiểu:** Profile cá nhân của bạn tên Nguyễn Văn A, làm "Giám đốc". Giám đốc A tạo ra một "Cửa hàng" (Fanpage Bán Giày). Sau đó, Giám đốc A dùng "Ví tiền" (Tài khoản quảng cáo) để trả tiền cho Facebook, yêu cầu Facebook phát tờ rơi quảng bá cho cái Cửa hàng kia.

---

## 2. Tài Khoản Cá Nhân vs Trình Quản Lý Kinh Doanh (Business Manager - BM)

Đây là nơi bắt đầu phân cấp giữa "nghiệp dư" và "chuyên nghiệp".

### A. Tài Khoản Quảng Cáo Cá Nhân (Personal Ad Account)
Mỗi Profile Facebook (VIA) mặc định sẽ được Facebook tặng sẵn một Tài khoản quảng cáo cá nhân.
- **Ưu điểm:** Có sẵn, lên camp (chiến dịch) nhanh, dễ sử dụng cho người mới bán lẻ vài đơn/ngày.
- **Nhược điểm:**
  - Rất yếu, cực kỳ dễ bị Facebook khóa.
  - Mỗi người chỉ có đúng 1 tài khoản, chết là xong.
  - Không thể chia sẻ dữ liệu (như tệp khách hàng) cho tài khoản khác.

### B. Trình Quản Lý Kinh Doanh (Business Manager - Gọi tắt là BM)
BM giống như một "Tòa nhà trụ sở công ty". Trong tòa nhà này, bạn có thể tạo ra nhiều Phòng ban, nhét nhiều Nhân viên vào, và có nhiều Két sắt khác nhau.
- **Cấu trúc của BM:** 
  - Một BM có thể chứa nhiều **Tài khoản quảng cáo** (từ 1, 3, 5 cho đến hàng ngàn tài khoản tùy độ uy tín).
  - Một BM có thể ôm và quản lý nhiều **Fanpage**.
  - Một BM có thể cấp quyền cho nhiều **Profile cá nhân** vào làm Admin hoặc Nhân viên (Nhân viên này chạy tài khoản A, nhân viên kia quản lý Page B).
- **Tại sao bạn BẮT BUỘC phải dùng BM nếu muốn đi đường dài?**
  - **Khó chết hơn:** BM có sự uy tín (Trust) cao hơn tài khoản cá nhân.
  - **Sở hữu Pixel:** Chỉ BM mới giữ được con Pixel (công cụ lưu trữ dữ liệu website) một cách an toàn và chia sẻ được Pixel cho các tài khoản khác cùng dùng.
  - **Làm việc nhóm:** Chủ doanh nghiệp nắm quyền Admin BM, phân quyền cho nhân viên chạy Ads mà không sợ nhân viên "cuỗm" mất tài khoản hay cướp Fanpage.

---

## 3. "Bộ Não" Của Quảng Cáo Chuyển Đổi: Facebook Pixel & CAPI

Nếu bạn chỉ chạy quảng cáo mục tiêu **Nhắn tin (Messenger)**, bạn có thể không cần quan tâm đến phần này. Nhưng nếu bạn muốn xây dựng hệ thống tự động, khách tự vào Website/Landing Page điền Form hoặc thanh toán, thì **PIXEL LÀ MẠNG SỐNG.**

### A. Facebook Pixel Là Gì?
- Pixel là một đoạn mã code nhỏ (do Facebook cấp) để bạn gắn ẩn vào trong Website của mình.
- **Tác dụng (Gián điệp theo dõi):** Khi có một khách hàng bấm từ Facebook vào Website của bạn, Pixel sẽ đi theo người đó như hình với bóng. 
  - Nó ghi lại: Khách này ở lại Web 2 phút, lướt đọc đến dòng số 5, bấm vào nút "Thêm vào giỏ hàng" nhưng... ĐÓNG TRÌNH DUYỆT (không mua nữa).
  - Sau đó, Pixel báo cáo về Facebook. Facebook sẽ dùng tệp những người "Thêm vào giỏ nhưng không mua" này để bạn chạy **Retargeting (Tiếp thị lại)** đuổi theo họ bằng một mã Giảm giá.
- Thậm chí, sau khi Pixel học được chân dung của 100 người đã mua hàng thành công trên Web, nó sẽ thông minh đến mức tự đi tìm hàng ngàn người có đặc điểm y hệt như 100 người kia ở ngoài kia.

### B. Conversions API (CAPI) Là Gì?
- Từ năm 2021, Apple ra mắt iOS 14, chặn quyền theo dõi của Facebook. Các trình duyệt như Chrome, Safari cũng chặn Pixel theo dõi người dùng. Con Pixel bỗng nhiên bị "mù". Khách vào web mua hàng nhưng Pixel không bắt được tín hiệu.
- Để giải quyết, Facebook đẻ ra **CAPI (Conversions API)**. 
- Thay vì theo dõi trên trình duyệt của người dùng (dễ bị chặn), CAPI gửi dữ liệu trực tiếp từ **Máy chủ (Server) website của bạn thẳng về Máy chủ của Facebook**. 
- **Kết luận:** Hiện nay, để chạy chuyển đổi Website mượt mà, bạn BẮT BUỘC phải cài đặt song song cả Pixel và CAPI.

---

## 4. Chiến Lược "Bày Binh Bố Trận" Tài Nguyên Chống Khóa Dây Chuyền

Thuật toán Facebook có cơ chế **"Khóa liên đới" (Quét dây chuyền)**. Nghĩa là: Một thẻ Visa bị lỗi -> Khóa tài khoản dùng thẻ đó -> Khóa luôn BM chứa tài khoản đó -> Khóa luôn cái Profile cá nhân đang làm Admin BM đó. Đi tong toàn bộ cơ đồ!

Để tránh cảnh này, dân chuyên nghiệp có một nguyên tắc: **CÁCH LY TÀI NGUYÊN (Chia để trị).**

1. **Profile Cầm Nắm (Via Tổng):** Là Profile chỉ dùng để cầm quyền quản trị (Admin) của BM và Fanpage. Profile này tuyệt đối KHÔNG ĐƯỢC CHẠY QUẢNG CÁO. Chỉ dùng để backup, cất trong két sắt.
2. **Profile Lên Camp (Via Nhân Viên):** Là Profile bạn dùng hàng ngày để setup quảng cáo. Bạn chỉ cấp quyền "Nhân viên" cho nó. Nếu nó bị Facebook khóa vì chạy vi phạm, hệ thống BM và Fanpage vẫn an toàn, bạn lấy Profile tổng kick nó ra và thay nhân viên khác vào.
3. **BM Chứa Pixel (BM Tổng):** Một BM riêng biệt chỉ dùng để tạo Pixel và giữ dữ liệu khách hàng. Không dùng để chạy quảng cáo. Sau đó, Share con Pixel này sang BM khác để chạy. Lỡ BM chạy bị khóa, dữ liệu mồ hôi nước mắt trong Pixel vẫn còn nguyên vẹn ở BM Tổng.

*(Tất nhiên, nếu bạn mới bắt đầu với số vốn nhỏ, bạn không cần làm phức tạp đến mức này. Hãy bắt đầu bằng 1 BM đơn giản trước. Nhưng hiểu tư duy "cách ly" sẽ giúp bạn đi rất xa).*

---

## TỔNG KẾT BÀI 2 GIAI ĐOẠN 2

- Đừng dùng tài khoản cá nhân để kinh doanh lâu dài. Hãy học cách tạo và sử dụng **Business Manager (BM)**.
- **Pixel và CAPI** là đôi mắt của bạn nếu bạn muốn bán hàng tự động trên Website/Landing Page.
- Đừng để một Profile duy nhất cầm toàn bộ quyền lực, hãy có tài khoản dự phòng và phân quyền thông minh.

> [!IMPORTANT]
> **Nhận xét của bạn:** 
> 1. Hiện tại bạn đã có sẵn Fanpage hay tài khoản Business Manager nào chưa, hay bạn sẽ phải tạo mới hoàn toàn từ đầu?
> 2. Kế hoạch sắp tới của bạn là chốt đơn qua Tin nhắn Messenger (Chat thủ công) hay sẽ xây dựng Website/Landing Page (Để Pixel tự động làm việc)? 
> 
> *Việc bạn trả lời câu hỏi 2 rất quan trọng, nó sẽ quyết định xem ở các bước cấu hình sau, chúng ta có cần phải đau đầu học về code tích hợp Pixel hay không.*
> 
> Khi bạn xem xong phần này, chúng ta sẽ kết thúc Giai đoạn 2 và chuyển sang **Giai đoạn 3 (Nghiên cứu đối thủ & Chuẩn bị Content)** rất thú vị nhé!

---

# Giai Đoạn 3 - Phần 1: Nghiên Cứu Khách Hàng Mục Tiêu (Target Audience)

Chào mừng bạn đến với **Giai Đoạn 3**. Nếu Giai đoạn 1 và 2 là phần "Xương sống" thì Giai đoạn 3 chính là "Linh hồn" của quảng cáo. 

Rất nhiều người than phiền: *"Tại sao tôi set quảng cáo giống hệt đối thủ, target giống hệt, ngân sách như nhau mà tôi lỗ còn họ lãi?"*. Câu trả lời 90% nằm ở việc: Họ hiểu khách hàng hơn bạn, và nội dung của họ nói trúng tim đen khách hàng hơn.

Tài liệu này sẽ giúp bạn thay đổi hoàn toàn tư duy về "Target" trong Facebook Ads hiện đại.

---

## 1. Sự Thật Bất Ngờ: "Target Sở Thích" Đã Chết?

Vào khoảng năm 2017-2018, người ta tôn sùng những "Thầy dạy Ads" có khả năng tìm ra "Tệp Target ẩn". Ví dụ: Bán đồ mẹ bỉm sữa thì không target "Bỉm sữa" mà đi target "Hút mỡ bụng", "Spa sau sinh". 

Nhưng ở thời điểm hiện tại (với sự lên ngôi của AI Facebook), điều này đã không còn đúng nữa!

- AI của Facebook hiện tại cực kỳ thông minh. Thậm chí nếu bạn **KHÔNG TARGET BẤT CỨ SỞ THÍCH NÀO (Gọi là Target Broad - Thả rông)**, Facebook vẫn tự biết mang quảng cáo của bạn phân phối đến đúng người cần mua.
- **Tại sao?** Vì Facebook "đọc" được hình ảnh của bạn, "nghe" được video của bạn và phân tích chữ viết của bạn. 
- **Tư duy mới (Quan trọng):** `CONTENT IS THE NEW TARGET` (Nội dung chính là Target). Bạn làm nội dung về chó, Facebook sẽ tự đi tìm người yêu chó. Bạn không cần phải cất công đi gõ chữ "Yêu chó" vào ô nhắm mục tiêu nữa.

*(Tuy nhiên, điều đó không có nghĩa là chúng ta không cần nghiên cứu khách hàng. Chúng ta nghiên cứu để VIẾT NỘI DUNG cho đúng, chứ không phải để điền vào ô Target của Facebook).*

---

## 2. Cách Vẽ Chân Dung Khách Hàng (Customer Persona)

Để viết được nội dung chạm tới cảm xúc, bạn phải biến một tệp khách hàng vô hình thành một con người cụ thể. Hãy trả lời 4 câu hỏi sau:

### A. Nhân khẩu học (Demographics) - Họ là ai?
- Tuổi, Giới tính, Vị trí địa lý, Thu nhập, Tình trạng hôn nhân.
- *Lưu ý:* Hãy mở rộng độ tuổi. Đừng nghĩ chỉ có người 18-25 mới mua áo thun của bạn. Người 40 tuổi vẫn có thể mua áo thun đó cho con trai họ.

### B. Hành vi & Sở thích (Psychographics) - Họ làm gì?
- Họ dùng điện thoại hệ điều hành gì? Họ hay online lúc mấy giờ? Họ thường theo dõi Fanpage của những người nổi tiếng nào?

### C. Nỗi đau (Pain Points) - Họ sợ gì?
- Đây là **Chìa Khóa Chốt Sale**. Sản phẩm của bạn giải quyết nỗi thất vọng hay sự khó chịu nào của họ?

### D. Mong muốn (Desires) - Họ mơ ước gì?
- Sau khi dùng sản phẩm của bạn, cuộc sống của họ sẽ tốt đẹp lên như thế nào? (Họ không mua mũi khoan, họ mua cái lỗ trên tường. Họ không mua mỹ phẩm, họ mua sự tự tin trước đám đông).

> **🌟 VÍ DỤ THỰC TẾ: VẼ CHÂN DUNG KHÁCH HÀNG**
> **Sản phẩm:** Khóa học Yoga Online tại nhà (Giá 500k).
> 
> **- Bức chân dung hời hợt (Dẫn đến Content nhạt nhẽo):** Nữ, 25-45 tuổi, sống ở Thành phố, thích thể thao, yoga.
> -> *Content sẽ viết:* "Bán khóa học Yoga 500k, giảm giá hôm nay, mua ngay". (Rất khó chốt đơn).
> 
> **- Bức chân dung sâu sắc (Dẫn đến Content sát thủ):** Chị Hoa, 32 tuổi, nhân viên văn phòng. 
>   - *Nỗi đau:* Ngồi máy tính 8 tiếng/ngày nên đau mỏi vai gáy kinh khủng. Về nhà phải chăm con nhỏ, nấu cơm nên không có thời gian ra phòng tập. Mặc quần áo thấy mỡ bụng nên rất tự ti với chồng.
>   - *Mong muốn:* Muốn có một bài tập chỉ 15 phút/ngày ngay trong phòng ngủ để hết đau vai và bụng thon lại.
> -> *Content sẽ viết:* "Hết đau mỏi vai gáy chỉ với 15 phút mỗi tối ngay tại phòng ngủ - Giải pháp hoàn hảo cho dân văn phòng bận rộn chăm con". (Chắc chắn chị Hoa sẽ mua!).

---

## 3. Nghệ Thuật "Do Thám" Đối Thủ Bằng Thư Viện Quảng Cáo (Ads Library)

Bạn không bao giờ phải sáng tạo lại cái bánh xe từ đầu. Nếu có người đang bán cùng sản phẩm với bạn, hãy xem họ đang làm gì và làm tốt hơn họ.

Facebook cung cấp một công cụ miễn phí 100% tên là **Thư viện quảng cáo (Meta Ads Library)**. Đây là nơi minh bạch toàn bộ các quảng cáo đang chạy trên nền tảng.

### Cách sử dụng Thư Viện Quảng Cáo (Spy Ads):
1. Truy cập vào link: `facebook.com/ads/library`
2. Chọn Quốc gia: **Việt Nam**. Danh mục: **Tất cả quảng cáo**.
3. Gõ tên Fanpage của đối thủ lớn nhất của bạn, HOẶC gõ từ khóa sản phẩm (Ví dụ: "Áo sơ mi nam").
4. Facebook sẽ liệt kê TẤT CẢ các bài quảng cáo mà họ đang chạy ngay lúc này.

### Cách đọc vị đối thủ:
- **Nguyên lý "Sống thọ là sống khỏe":** Hãy nhìn vào ngày bắt đầu chạy của quảng cáo. Nếu một bài quảng cáo được đối thủ duy trì chạy suốt 3-4 tháng mà chưa tắt -> **Chắc chắn bài đó đang mang lại siêu lợi nhuận.** Hãy nghiên cứu thật kỹ hình ảnh, góc quay video và text của bài đó.
- **Nguyên lý "Biến tấu":** Tuyệt đối KHÔNG LẤY CẮP 100% video/ảnh của đối thủ về chạy lại. AI Facebook sẽ đánh dấu đó là nội dung trùng lặp (Copy) và phân phối cực kỳ đắt. 
- **Cách làm:** Hãy xem đối thủ đang dùng "Góc bán hàng (Angle)" nào. Nếu đối thủ đang bán Robot hút bụi bằng cách xoáy vào nỗi đau "Bụi mịn gây viêm mũi cho trẻ em", bạn hãy làm video xoáy vào nỗi đau "Cãi nhau với chồng vì phân công quét nhà". Hãy tạo ra sự khác biệt!

---

## 4. Xác Định USP (Unique Selling Proposition) Của Bạn

Sau khi vẽ chân dung khách và xem đối thủ, bạn phải tìm ra **Điểm Bán Hàng Độc Nhất (USP)**. 

Giữa một rừng quảng cáo trên News Feed, lý do gì khách hàng phải dừng lại và nhắn tin cho bạn chứ không phải cho người khác?
- Bạn có bán rẻ hơn không?
- Bạn có bảo hành 1 đổi 1 tận nhà không?
- Bạn có miễn phí vận chuyển không?
- Đóng gói của bạn có như một hộp quà sang trọng không?
- Hoặc đơn giản: Bạn không có gì khác biệt về sản phẩm, nhưng Video của bạn do chính bạn quay, bạn nói chuyện rất duyên dáng, hài hước và chân thành? (Sự chân thành (Authenticity) đang là USP mạnh nhất trên nền tảng Video ngắn hiện nay).

---

## TỔNG KẾT BÀI 1 GIAI ĐOẠN 3

- Đừng ám ảnh bởi việc phải tìm ra "Target chuẩn". Hãy dồn 200% sức lực vào việc tìm ra "Nỗi đau chuẩn" của khách hàng.
- Nắm vững công cụ **Ads Library** để không bao giờ bị bí ý tưởng (Tắc idea). Đối thủ chính là người thầy tốt nhất của bạn.
- Bán hàng trên Facebook hiện tại không chỉ là cạnh tranh về sản phẩm, mà là **cạnh tranh về sự chú ý**.

> [!IMPORTANT]
> **Bài Tập Thực Hành Cho Bạn:** 
> Dựa vào ngành hàng bạn sắp kinh doanh, hãy viết ra đây 1 "Nỗi đau lớn nhất" của khách hàng và 1 "Điểm khác biệt (USP)" mà bạn định dùng để đánh bại đối thủ. 
> Tôi sẽ nhận xét và cùng bạn hoàn thiện nó, trước khi chúng ta bước sang Bài 2 (Cách viết Content AIDA/PAS và thiết kế Video nghìn đơn)!

---

# Giai Đoạn 3 - Phần 2: Xây Dựng Nội Dung Quảng Cáo (Ad Creative)

Chào bạn, đây là **TRÁI TIM** của toàn bộ khóa học này. Nếu bạn chỉ được phép chọn học giỏi duy nhất một kỹ năng trong Facebook Ads, thì đó bắt buộc phải là kỹ năng **Làm Nội Dung (Creative)**. 

Bất chấp bạn target giỏi đến đâu, cài đặt chiến dịch tinh vi cỡ nào, nếu hình ảnh/video của bạn trông "phèn", nhàm chán hoặc giống hệt 100 người khác trên mạng, bạn vẫn sẽ thất bại thảm hại.

Ở thời điểm hiện tại, **Content (Nội dung) quyết định 80% sự thành công của chiến dịch.** Khách hàng không mua sản phẩm, họ mua **câu chuyện và cảm xúc** mà nội dung của bạn mang lại.

Tài liệu này sẽ mổ xẻ chi tiết "tới tận xương tủy" cách tạo ra những quảng cáo ra đơn ầm ầm.

---

## 1. Giải Phẫu Một Bài Quảng Cáo Hoàn Hảo

Một bài quảng cáo Facebook gồm 3 phần chính, và chúng có độ ưu tiên hoàn toàn khác nhau:
1. **Visual (Hình ảnh / Video):** Chiếm **80%** sự chú ý. Đây là thứ đập vào mắt người dùng đầu tiên khi họ đang lướt điện thoại với tốc độ chóng mặt. Nhiệm vụ của nó là "Dừng ngón tay lướt" (Stop the scroll).
2. **Headline (Tiêu đề chữ):** Chiếm **15%** sự chú ý. Gồm 3-5 dòng text đầu tiên hiển thị trước nút "Xem thêm" (See more). Nhiệm vụ của nó là kéo họ vào đọc tiếp.
3. **Body Text & CTA (Nội dung chi tiết & Kêu gọi hành động):** Chiếm **5%** sự chú ý. Nếu người ta đã bấm "Xem thêm" và đọc đến đây, nghĩa là họ đã có nhu cầu. Nhiệm vụ của phần này là thuyết phục và chốt hạ.

=> **Kết luận:** Nếu hình ảnh/video của bạn không đủ sức giữ chân khách hàng lại, thì dù bạn viết hay đến mức đạt giải Nobel Văn học, cũng không ai thèm đọc.

---

## 2. Kỹ Thuật Sản Xuất Visual (Hình Ảnh & Video) 

### A. Kỷ Nguyên Của Video Ngắn (Reels/Shorts)
Video dạng dọc (9:16) hiện đang là định dạng được Facebook ưu tiên hiển thị số 1 và mang lại tỷ lệ chuyển đổi cao nhất, rẻ nhất. 

**Nguyên tắc "3 Giây Sinh Tử" (The Hook):** 
Khách hàng chỉ cho bạn đúng 3 giây để quyết định xem họ có lướt qua hay không. Nếu 3 giây đầu video bạn chỉ để logo công ty, hoặc quay phong cảnh lãng mạn vô thưởng vô phạt -> BẠN ĐÃ THUA.

> **Cách làm 3 Giây Đầu (Hook) Sát Thủ:**
> 1. **Chỉ thẳng vào Nỗi đau:** *(Hình ảnh một cô gái nhăn nhó cầm nắm tóc rụng)* + Lời thoại: "Đừng bao giờ gội đầu vào ban đêm nếu bạn không muốn hói như tôi!"
> 2. **Tạo sự tò mò/Gây sốc:** *(Hành động đập vỡ một quả trứng lên màn hình điện thoại)* + Lời thoại: "Màn hình ốp lưng cường lực 50k này thực sự bá đạo đến mức nào?"
> 3. **Hứa hẹn kết quả:** *(Hình ảnh before/after ngầm)* + Lời thoại: "Chỉ với 15 phút mỗi ngày, tôi đã dọn sạch căn nhà 3 tầng mà không tốn một giọt mồ hôi."

**Cấu trúc Video Chuẩn Chốt Đơn (15s - 60s):**
1. **Hook (0-3s):** Gây chú ý mãnh liệt.
2. **Body (3-45s):** Đưa ra vấn đề -> Giải pháp (sản phẩm của bạn) -> Chứng minh bằng kết quả thực tế (Đập hộp, test nước, test lửa, review chân thực).
3. **CTA (45-60s):** Kêu gọi hành động ngay lập tức (Nhấp vào link, Inbox ngay để nhận ưu đãi).

### B. Kỹ Thuật Thiết Kế Hình Ảnh
Nếu bạn không có khả năng làm Video, bạn vẫn có thể dùng Ảnh tĩnh. Tuy nhiên, xin hãy nhớ các quy tắc sau:
1. **Quy tắc độ tương phản:** Nếu ảnh của bạn trùng màu với màu xanh/trắng của giao diện Facebook, nó sẽ chìm nghỉm. Hãy dùng các mảng màu nóng, có độ tương phản cao (Vàng, Cam, Đỏ) để gây sự chú ý.
2. **Quy tắc 20% Text:** Mặc dù Facebook đã bỏ luật cấm "Ảnh chứa quá 20% chữ", nhưng thực tế chứng minh ảnh chứa chữ chằng chịt, nhồi nhét thông tin vẫn bị AI bóp tương tác. Hãy để hình ảnh lên tiếng, phần chữ chỉ đóng vai trò nhấn mạnh USP (Ví dụ: "GIẢM 50%").
3. **Định dạng Carousel (Album Cuộn):** Cực kỳ phù hợp để bán Thời trang, Mỹ phẩm hoặc Bất động sản. Khách hàng rất thích vuốt ngang để xem nhiều mẫu mã. Mỗi bức ảnh trong Carousel hãy mô tả một ưu điểm khác nhau của sản phẩm.

---

## 3. Kỹ Thuật Viết Copywriting (Viết Lời Quảng Cáo) Bằng Công Thức

Đừng bao giờ viết theo bản năng kiểu: "Sản phẩm A nhập khẩu, giá rẻ, mua đi". Hãy dùng các công thức Tâm lý học đã được chứng minh hiệu quả qua hàng thập kỷ.

### CÔNG THỨC 1: PAS (Problem - Agitate - Solution)
*Phù hợp cực kỳ cho các sản phẩm "Thuốc đắng dã tật" (Trị mụn, giảm béo, khóa học làm giàu, dịch vụ vệ sinh...).*

1. **Problem (Vấn Đề):** Gọi tên nỗi đau ngay dòng đầu tiên.
   - *Ví dụ:* Bạn có đang ám ảnh vì mùi hôi chân mỗi khi cởi giày ở công ty?
2. **Agitate (Kích Động):** Xát muối vào nỗi đau đó, cho họ thấy nếu không giải quyết thì hậu quả sẽ tệ thế nào.
   - *Ví dụ:* Không dám đi cafe bệt, đồng nghiệp xa lánh, đánh mất sự tự tin khi đi gặp đối tác chỉ vì một mùi hương khó chịu. Càng dùng xịt khử mùi hóa học, chân càng đổ mồ hôi nhiều hơn.
3. **Solution (Giải Pháp):** Đưa sản phẩm của bạn ra như một vị cứu tinh.
   - *Ví dụ:* Đừng lo! Bột khử mùi thảo dược ABC chiết xuất 100% thiên nhiên sẽ giúp bạn đánh bay mùi hôi chỉ sau 1 đêm. Khô ráo, thoáng mát cả tuần.

### CÔNG THỨC 2: AIDA (Attention - Interest - Desire - Action)
*Phù hợp cho các sản phẩm Thời trang, Gia dụng, Thức ăn (Sản phẩm thiên về cảm xúc, làm đẹp).*

1. **Attention (Gây Chú Ý):** Giật tít bằng ưu đãi lớn hoặc hình ảnh cực đẹp.
   - *Ví dụ:* XẢ KHO LỚN NHẤT NĂM - ĐỒNG GIÁ ÁO POLO NAM 99K!
2. **Interest (Thích Thú):** Đưa ra các tính năng hay ho của sản phẩm.
   - *Ví dụ:* Chất vải Nano siêu mát mẻ, chống nhăn tuyệt đối. Quẳng vào máy giặt thoải mái không bao giờ phai màu.
3. **Desire (Khao Khát):** Tặng thêm giá trị hoặc dùng hiệu ứng đám đông.
   - *Ví dụ:* Hơn 10.000 anh em đã trải nghiệm và gọi đây là "Chiếc áo quốc dân". Mặc đi làm cũng lịch sự, mặc đi chơi lại cực kỳ năng động.
4. **Action (Hành Động):** Hối thúc chốt sale.
   - *Ví dụ:* Chỉ còn đúng 50 suất áp dụng đồng giá 99k + FREESHIP. Inbox ngay chiều cao cân nặng để shop giữ size!

---

## 4. Nghệ Thuật Đặt Lời Kêu Gọi Hành Động (Call-To-Action - CTA)

Bạn dắt khách hàng đi một chặng đường dài, họ rất thích sản phẩm rồi, nhưng bạn lại quên bảo họ phải làm gì tiếp theo -> HỌ SẼ LƯỚT ĐI CHỖ KHÁC.

Nguyên tắc của CTA là: **RÕ RÀNG, ĐƠN GIẢN, VÀ CẤP BÁCH.**
- **Sử dụng sự khan hiếm (Scarcity):** "Chỉ dành cho 99 người đầu tiên bình luận", "Flash Sale kết thúc vào 12h đêm nay". (Lưu ý: Không dùng nếu sợ vi phạm chính sách nói quá, hãy khéo léo).
- **Tránh bắt khách hàng làm quá nhiều bước:** Đừng viết "Hãy like page, share bài viết này, tag 3 người bạn và inbox cho chúng tôi". Họ rất lười. Chỉ cần "Click vào link dưới đây để mua" hoặc "Nhắn tin ngay để nhận tư vấn miễn phí".

---

## 5. Bí Quyết Của Chuyên Gia: A/B Testing Bằng Tư Duy "Gắn Mồi"

Một sai lầm rất lớn là dồn toàn bộ tiền vào 1 Video duy nhất và 1 bài Text duy nhất. Bạn thấy nó hay, nhưng chưa chắc khách hàng thấy hay.

Hãy tạo ra sự đa dạng (A/B Testing):
- **Test nhiều Hook khác nhau:** Bạn chỉ cần quay 1 video dài 1 phút phần Body, nhưng hãy quay 3 cái 3 giây đầu (Hook) khác nhau để ghép vào đầu video đó. Facebook sẽ chạy 3 phiên bản này, và bạn sẽ nhanh chóng biết được câu giật tít nào hiệu quả nhất với khách.
- **Test nhiều hình dáng (Format):** Chạy thử 1 chiến dịch với 1 Video, 1 chiến dịch với 1 Ảnh đơn, 1 chiến dịch với Album ảnh. Để xem khách hàng của bạn thích đọc chữ hay thích xem phim.

---

## TỔNG KẾT BÀI 2 GIAI ĐOẠN 3

Hãy luôn nhớ rằng, khách hàng dùng Facebook để **GIẢI TRÍ VÀ KẾT NỐI**, chứ họ không mở Facebook lên để **MUA SẮM** (Họ mua sắm trên Shopee/Tiktok). 
Do đó, nếu quảng cáo của bạn trông "quá giống một cái quảng cáo ép bán hàng", họ sẽ lướt qua. Hãy làm cho quảng cáo của bạn trông giống như một câu chuyện thú vị, một đoạn review chân thật, hoặc một thông tin giải trí hữu ích.

> [!IMPORTANT]
> **Nhận xét của bạn:** 
> Phần này thực sự rất đồ sộ. Hãy cho tôi biết: Điểm yếu lớn nhất của bạn hiện tại là gì? (Bạn mù tịt về quay dựng Video, hay bạn không biết cách viết chữ sao cho mượt mà, hay bạn chưa biết thiết kế ảnh?). 
> Căn cứ vào điểm yếu/điểm mạnh của bạn, tôi sẽ đưa ra lời khuyên nên tập trung vào định dạng (Format) nào cho đỡ tốn sức nhất. 
> 
> *Khi bạn hoàn thành phần này, xin chúc mừng, bạn đã vượt qua những cửa ải khó khăn nhất về mặt Tư duy. Giai đoạn 4 sắp tới sẽ là lúc chúng ta mở máy tính lên và BẤM NÚT TẠO CHIẾN DỊCH (Setup Kỹ Thuật)!*

---

# Giai Đoạn 4 - Phần 1: Cấu Trúc Thiết Lập Một Chiến Dịch Chuẩn Mực

Chào mừng bạn bước vào **Giai Đoạn Thực Chiến (Giai Đoạn 4)**. Lúc này, toàn bộ tư duy chiến lược, chân dung khách hàng và nội dung video/hình ảnh của bạn đã sẵn sàng. Việc của chúng ta bây giờ là "nạp" tất cả những vũ khí đó vào hệ thống của Facebook một cách chính xác nhất.

Nếu setup kỹ thuật sai, bạn có thể mang một video cực kỳ hay đi phân phối cho toàn người dùng rác (clone), hoặc đốt tiền gấp 3 lần bình thường mà không ra kết quả. Tài liệu này sẽ là một cuốn "sách hướng dẫn sử dụng" chi tiết từng nút bấm trên Trình quản lý quảng cáo (Ads Manager).

---

## 1. Ôn Tập Bức Tranh Tổng Thể (Hệ Thống 3 Tầng)

Để setup, bạn phải luôn nhớ cấu trúc hình cây này. Đừng bao giờ gom tất cả mọi thứ vào 1 cục.
- **Tầng 1: Chiến dịch (Campaign) -> BẠN MUỐN ĐẠT MỤC TIÊU GÌ?**
- **Tầng 2: Nhóm Quảng cáo (Ad Set) -> BẠN MUỐN PHÂN PHỐI CHO AI VÀ CHI BAO NHIÊU TIỀN?**
- **Tầng 3: Quảng cáo (Ad) -> BẠN MUỐN HỌ NHÌN THẤY NỘI DUNG GÌ?**

Một chiến dịch chuẩn mực để thử nghiệm (A/B Testing) thường áp dụng cấu trúc **1-3-3** hoặc **1-1-3**:
- 1 Chiến dịch.
- Chứa 3 Nhóm Quảng Cáo (Để test 3 tệp khách hàng khác nhau: Sinh viên / Dân văn phòng / Mẹ bỉm).
- Mỗi Nhóm chứa 3 Quảng cáo (3 video/hình ảnh khác nhau). 
*(Hệ thống sẽ tự động tìm ra Video nào tốt nhất ở Tệp nào và dồn tiền vào đó).*

---

## 2. TẦNG 1: CẤP ĐỘ CHIẾN DỊCH (CAMPAIGN)

Khi bạn bấm nút màu xanh "Tạo (Create)" trong Ads Manager, hệ thống sẽ hỏi bạn chọn Mục Tiêu.

### A. Chọn Mục Tiêu (Objective): Nguyên Tắc "Gieo Nhân Nào Gặt Quả Nấy"
Facebook AI rất nghe lời. Bạn bảo nó làm gì, nó làm CỰC KỲ ĐÚNG cái đó.
- Bạn chọn mục tiêu **"Lượt tương tác (Engagement)"**: Nó sẽ mang quảng cáo đến những người có thói quen bấm Like dạo, Share dạo, Comment dạo. (Đừng mong họ mua hàng).
- Bạn chọn mục tiêu **"Lưu lượng truy cập (Traffic)"**: Nó sẽ mang quảng cáo đến những người thích bấm vào Link để sang trình duyệt web, rồi họ lại đi ra. Rất rẻ nhưng tỉ lệ chuyển đổi thấp.
- Bạn chọn mục tiêu **"Lượt tương tác tin nhắn (Messages)"**: Nó tìm những người có thói quen inbox cho các Fanpage để hỏi giá. **(Nếu bạn bán qua Fanpage, hãy chọn cái này).**
- Bạn chọn mục tiêu **"Doanh số / Chuyển đổi (Sales)"**: Nó dựa vào Pixel để đi tìm những người có thói quen điền Form đăng ký hoặc bấm nút Thanh toán trên Website. **(Nếu bạn có Landing Page, BẮT BUỘC dùng cái này).**

### B. Ngân Sách Chiến Dịch Advantage (CBO) vs Ngân Sách Nhóm (ABO)
Ở cuối phần cài đặt Chiến dịch, sẽ có một nút bật tắt tên là "Ngân sách chiến dịch Advantage" (Trang chuyên ngành gọi là CBO).
- **Nếu bạn TẮT (ABO):** Bạn sẽ cài đặt ngân sách ở từng Nhóm quảng cáo. (Ví dụ Nhóm A 100k, Nhóm B 100k, Nhóm C 100k. Tổng 300k). -> *Dùng khi bạn muốn chủ động bắt Facebook tiêu đều tiền để test xem tệp nào ngon thực sự.*
- **Nếu bạn BẬT (CBO):** Bạn đặt cục tiền 300k ở Chiến dịch. AI của Facebook sẽ tự quyết định xem nên chia tiền cho Nhóm A, B, hay C. Có thể nó thấy Nhóm B đang ra tin nhắn rẻ nhất, nó vã hết 280k vào Nhóm B, và cho A, C mỗi nhóm 10k. -> *Dùng khi bạn đã chạy ổn định và muốn giao phó hoàn toàn cho máy học AI.*

> **Lời khuyên cho người mới:** Hãy TẮT CBO đi (tức là chạy ABO) để bạn tự kiểm soát số tiền chi cho việc test các tệp khách hàng.

---

## 3. TẦNG 2: CẤP ĐỘ NHÓM QUẢNG CÁO (AD SET)

Đây là nơi cấu hình phức tạp nhất. Hãy làm tuần tự các bước:

### A. Lịch Chạy & Ngân Sách (Budget & Schedule)
- **Ngân sách Hàng ngày (Daily Budget):** Chạy bao nhiêu tiêu bấy nhiêu mỗi ngày. Rất linh hoạt, muốn tắt lúc nào cũng được. *(Nên dùng).*
- **Ngân sách Trọn đời (Lifetime Budget):** Đặt cục tiền (VD: 10 triệu) bắt chạy trong đúng 1 tháng. Ưu điểm: Cho phép bạn chọn "Khung giờ chạy" (Ví dụ chỉ chạy từ 8h sáng đến 10h đêm). Nhược điểm: Khó tăng giảm ngân sách linh hoạt.
- **Lưu ý Lịch chạy:** Luôn hẹn giờ để chiến dịch **Bắt đầu vào lúc 0h00 sáng ngày hôm sau**. Tại sao? Vì nếu bạn duyệt quảng cáo lúc 8h tối với ngân sách 500k/ngày, Facebook sẽ cố "đốt" sạch 500k của bạn chỉ trong vòng 4 tiếng (từ 8h tối đến 12h đêm). Nó sẽ phân phối vội vàng đến tệp rác. Hãy hẹn giờ bắt đầu từ 0h sáng để nó phân phối từ từ nguyên một ngày.

### B. Nhắm Mục Tiêu (Targeting / Audience)
- **Vị trí (Location):** Toàn quốc hoặc cắm ghim (Drop Pin) quanh cửa hàng của bạn 5-10km.
- **Tuổi & Giới tính:** Hãy để rộng (Ví dụ 20-50) nếu sản phẩm của bạn mang tính đại chúng.
- **Nhắm mục tiêu chi tiết (Detailed Targeting):**
  - **Sở thích/Hành vi:** (Ví dụ: Thích mỹ phẩm, Hay đi du lịch). Như đã nói ở bài trước, không nên lạm dụng quá nhiều. Chỉ chọn 1-2 sở thích cốt lõi để "mớm" dữ liệu ban đầu cho AI.
  - **LOẠI TRỪ (Exclude) - Cực kỳ quan trọng:** Đa số người dùng rác, nick ảo (clone) nằm ở tệp những người đi "nuôi nick" hoặc chạy quảng cáo ảo. Bạn NÊN loại trừ: *"Quản trị viên Fanpage", "Người dùng thiết bị thanh toán (90 ngày)", "Sử dụng thiết bị di động 1-3 tháng"*. Hành động này giúp lọc bớt một lượng lớn "Trẻ trâu" inbox trêu đùa.

### C. Vị Trí Hiển Thị (Placements)
- Như đã học ở bài trước, nếu bạn chỉ có Video dọc 9:16, hãy chọn **Vị trí thủ công (Manual Placements)**, tắt Facebook Feed máy tính và Audience Network đi, chỉ giữ lại Reels, Story và Feed điện thoại để tránh bị cắt xén hình ảnh.

---

## 4. TẦNG 3: CẤP ĐỘ QUẢNG CÁO (AD)

Đây là bước tải "Giao diện" lên để khách hàng xem.

1. **Chọn Fanpage:** Đảm bảo chọn đúng cái Fanpage bạn định bán hàng.
2. **Thiết lập quảng cáo:** Bạn có thể Tải video/ảnh mới lên (Create Ad), hoặc Dùng bài viết đã đăng sẵn trên Fanpage (Use Existing Post). *Mẹo: Dùng bài đăng sẵn trên Fanpage để tích lũy hàng ngàn lượt Like, Share, Comment (gọi là Seeding), tạo uy tín xã hội cực tốt.*
3. **Thêm Nội dung:**
   - **Đa phương tiện (Media):** Nhấn Thêm ảnh/Thêm video.
   - **Văn bản chính (Primary Text):** Dán đoạn Copywriting (PAS hoặc AIDA) vào đây.
   - **Tiêu đề (Headline):** Dòng chữ in đậm ngắn gọn nằm kế bên nút bấm. (Ví dụ: "GIẢM NGAY 50% CHO 50 KHÁCH ĐẦU TIÊN").
4. **Nút kêu gọi hành động (CTA):** Chọn nút "Gửi Tin Nhắn" (Send Message) hoặc "Đăng ký" (Sign Up).
5. **Mẫu Tin Nhắn (Message Template):** Lên kịch bản tự động khi khách bấm vào. Thay vì để câu mặc định "Tôi có thể mua hàng không?", hãy sửa thành câu mồi: *"Chào shop, tôi muốn nhận ưu đãi giảm 30% hôm nay"*. Khách chỉ cần bấm 1 phát là gửi ngay.

---

## 5. BƯỚC CUỐI CÙNG: RÀ SOÁT & BẤM "ĐĂNG" (PUBLISH)

Đừng vội bấm nút màu xanh lá cây ở góc dưới màn hình. Hãy làm 1 thao tác:
- Mở mục **Bản Xem Trước (Ad Preview)** nằm bên tay phải màn hình.
- Bấm vào từng nền tảng: Xem nó hiển thị trên Reels có bị chữ che khuất mặt người không? Xem nó hiển thị trên News Feed có bị cắt mất chân người mẫu không? Xem 3 dòng văn bản đầu tiên có bị chìm không?

Nếu mọi thứ hoàn hảo -> Nhấn nút **Đăng (Publish)**. Quá trình Xét duyệt (Review) của AI sẽ diễn ra trong vòng từ 1 tiếng đến 24 tiếng. Khi chuyển sang chữ **Hoạt động (Active)**, xin chúc mừng, tiền của bạn bắt đầu được trừ!

---

## TỔNG KẾT BÀI 1 GIAI ĐOẠN 4

Setup chiến dịch không khó, nó giống như điền vào một cái Form đăng ký. Cái khó là điền cái gì để AI hiểu đúng ý mình.

**3 Quy tắc vàng khi Setup:**
1. Hẹn giờ chạy vào 0h sáng hôm sau để tối ưu tiền cắn đều nguyên ngày.
2. Tắt CBO (chạy ABO) khi đang test để kiểm soát ngân sách.
3. Luôn luôn kiểm tra Bản xem trước (Preview) trước khi Publish.

> [!IMPORTANT]
> **Nhận xét của bạn:** 
> Việc setup này có quá nhiều thuật ngữ trên giao diện (CBO, ABO, Placement...). Bạn có cảm thấy bị "ngợp" hay rắc rối ở chỗ nào không? 
> Nếu bạn dự định chạy chiến dịch đầu tiên, bạn sẽ thiết lập ngân sách là bao nhiêu một ngày để test? Hãy đưa ra con số và tôi sẽ góp ý xem nó có đủ để AI "thoát máy học" không nhé!
> 
> *Sau khi bạn tiêu hóa hết phần này, chúng ta sẽ sang Bài 2: Các kỹ thuật nhắm đối tượng (Audiences) chuyên sâu (Retargeting, Lookalike)!*

---

# Giai Đoạn 4 - Phần 2: Các Tệp Đối Tượng (Audiences) - "Vũ Khí Tối Thượng"

Chào bạn, nếu Nội dung (Content) là "Mồi câu", thì Tệp đối tượng (Audience) chính là "Ao cá". Mồi ngon đến mấy mà thả nhầm vào ao không có cá thì cũng chịu chết.

Bài học này cực kỳ quan trọng, bởi vì sự khác biệt giữa "Thợ chạy Ads" và "Chuyên gia" nằm ở khả năng điều khiển các Tệp đối tượng này để thiết lập Phễu tiếp thị lại (Retargeting), thay vì chỉ biết chạy quảng cáo cho tệp khách hàng lạnh (Core Audience).

Facebook cung cấp cho chúng ta 3 loại "Ao cá". Hãy cùng đi sâu vào từng loại:

---

## 1. Core Audience (Đối Tượng Cốt Lõi) - "Ao Cá Chung"

Đây là tệp Khách Hàng Lạnh (Cold Traffic). Họ chưa từng biết đến bạn. Bạn lọc ra những người này dựa vào các tiêu chí mặc định của Facebook: Vị trí địa lý, Độ tuổi, Giới tính, và Sở thích/Hành vi.

### A. Cách sử dụng Core Audience hiệu quả hiện nay:
- Đa số người mới thường nhồi nhét 10-20 sở thích vào ô Target. Điều này làm AI Facebook bị rối loạn.
- **Kỹ thuật Target Broad (Thả rông):** Đối với các sản phẩm đại chúng (Quần áo, Đồ ăn, Đồ gia dụng), hãy để trống hoàn toàn ô Sở thích. Chỉ khoanh vùng Tuổi và Giới tính. Hãy để nội dung quảng cáo tự đi tìm khách hàng.
- **Kỹ thuật Target Chéo (Cross-targeting):** Đừng target trực diện. Ví dụ, bạn bán Quần áo thiết kế nữ giá cao (2 triệu/bộ). Nếu bạn target "Thời trang, mua sắm", bạn sẽ dính toàn học sinh sinh viên thích đồ rẻ. Hãy target chéo sang: *"Đầu tư bất động sản, Xe hơi cao cấp, Khu nghỉ dưỡng 5 sao, Thẩm mỹ viện"*. Những người quan tâm đến các thứ này mới là người có tiền để mua áo của bạn!

---

## 2. Custom Audience (Đối Tượng Tùy Chỉnh) - "Ao Cá Nhà Nuôi"

Đây là tệp Khách Hàng Ấm/Nóng (Warm/Hot Traffic). Đây là tệp **ĐẺ RA NHIỀU TIỀN NHẤT** với chi phí rẻ nhất, vì họ ĐÃ TƯƠNG TÁC với thương hiệu của bạn. Việc của bạn là tạo các Tệp Custom Audience này và dùng nó để thiết lập các Chiến dịch bám đuổi (Retargeting).

Bạn có thể tạo Custom Audience từ 2 nguồn:

### A. Nguồn từ chính Facebook (Không cần Website/Pixel):
1. **Tệp những người xem Video:** Bạn có thể bảo Facebook gom lại những người đã xem **50%, 75% hoặc 95%** một video quảng cáo cũ của bạn.
   - *Chiến lược:* Một người lướt qua video 3 giây thì chưa chắc họ quan tâm. Nhưng một người xem hết 75% video giới thiệu sản phẩm thì chắc chắn họ có nhu cầu. Lập tức chạy một bài quảng cáo có "Mã Giảm Giá" chỉ hiển thị riêng cho cái tệp xem 75% này.
2. **Tệp tương tác Fanpage:** Gom lại những người đã Like, Share, Comment hoặc đã Inbox cho Page trong 30 ngày qua nhưng CHƯA MUA. Chạy bám đuổi họ bằng Freeship.

### B. Nguồn từ Website (Bắt buộc phải cài Pixel):
Pixel giống như một con chip theo dõi dán vào lưng khách hàng khi họ vào web của bạn.
1. **Tệp PageView (Xem trang):** Những người đã vào Landing Page đọc bài rồi thoát ra.
2. **Tệp Add To Cart (Thêm vào giỏ):** Khách đã chọn màu sắc, kích cỡ, bỏ vào giỏ hàng rồi nhưng tiếc tiền nên thoát ra.
   - *Chiến lược kinh điển:* Chạy quảng cáo bám đuổi tệp này với nội dung: *"Giỏ hàng của bạn đang chờ kìa! Hoàn tất thanh toán trong 24h để nhận ngay mã giảm 100k nhé!"*. Tỉ lệ chuyển đổi ở bước này có thể lên tới 30-40%.
3. **Tệp Purchase (Đã mua hàng):** Những khách hàng đã thanh toán thành công.
   - *Chiến lược:* Phải LOẠI TRỪ (Exclude) tệp này ra khỏi các chiến dịch tìm kiếm khách mới. Khách vừa mua xong mà hôm sau lại thấy bạn chạy quảng cáo cái áo đó, họ sẽ thấy phiền. Nhưng sau 1 tháng, bạn có thể mang tệp này ra chạy quảng cáo bán chéo một sản phẩm khác (Ví dụ: Tháng trước mua áo, tháng này bám đuổi bán quần).

---

## 3. Lookalike Audience (Đối Tượng Tương Tự - Tệp LAL) - "Thuật Cấp Số Nhân"

Nếu bạn chạy quảng cáo lâu ngày, tệp Khách Hàng Lạnh (Core Audience) của bạn sẽ cạn kiệt, còn tệp Khách Hàng Ấm (Custom Audience) thì quá nhỏ không đủ để mở rộng quy mô. Đây là lúc bạn dùng vũ khí tối thượng: **Lookalike Audience (LAL)**.

### A. Bản chất của Lookalike là gì?
Hãy tưởng tượng bạn đưa cho Facebook danh sách Số điện thoại của 1.000 khách hàng VIP (những người đã mua hàng của bạn trong năm qua). Bạn bảo Facebook: *"Này AI, đây là 1000 khách ruột của tôi. Hãy quét 70 triệu dân Việt Nam dùng Facebook, và tìm ra cho tôi 1 triệu người mới có tính cách, sở thích, thu nhập GIỐNG HỆT 1000 người này"*.

Đó chính là LAL! AI của Facebook phân tích siêu việt hơn con người hàng ngàn lần. Việc chạy tệp LAL hiệu quả hơn rất nhiều so với việc bạn tự ngồi nghĩ xem khách hàng thích cái gì để điền vào ô Target sở thích.

### B. Các mức độ Lookalike (1% đến 10%)
Khi tạo LAL, Facebook cho bạn chọn từ 1% đến 10% dân số quốc gia:
- **LAL 1%:** Tệp khoảng 700.000 người. Đây là tệp có độ chính xác CAO NHẤT (giống tệp gốc nhất), tỉ lệ chốt đơn rất cao nhưng quy mô tệp hơi nhỏ.
- **LAL 10%:** Tệp rất lớn (hàng triệu người), nhưng độ chính xác sẽ loãng ra.
- *Lời khuyên:* Hãy bắt đầu test với tệp LAL 1% trước. Nếu ngon, tăng lên LAL 2%, 3%.

### C. Quy Trình Trưởng Thành Của Một Chiến Dịch "Triệu Đô"
Các "Shark" chạy Ads tiền tỷ mỗi tháng đều đi theo đúng lộ trình này:
1. **Giai đoạn 1 (Thu thập data):** Chạy Core Audience (Target sở thích Broad) chấp nhận lãi mỏng hoặc hòa vốn để lấy data (Tin nhắn / Số điện thoại / Lượt mua trên Pixel).
2. **Giai đoạn 2 (Tạo tệp tùy chỉnh):** Gom nhóm những người đã mua hàng thành một Tệp Custom Audience.
3. **Giai đoạn 3 (Nhân bản & Vít ngân sách):** Dùng cái tệp Custom Audience (Toàn khách mua) ở trên để tạo ra Tệp Lookalike 1%. Đem tệp Lookalike 1% này vào một chiến dịch mới và tăng ngân sách mạnh tay (Scaling). Lúc này chi phí sẽ cực rẻ và đơn nổ liên tục vì Facebook đã tìm đúng tệp khách.

---

## TỔNG KẾT BÀI 2 GIAI ĐOẠN 4

Nếu bạn chỉ biết dùng Core Audience (Gõ chữ Sở thích), bạn mới đang học cấp 1 trong nghề chạy Ads.
Khi bạn biết dùng Custom Audience để Retargeting, bạn lên cấp 2.
Khi bạn làm chủ được Lookalike Audience để vít ngân sách lớn, bạn đã tốt nghiệp Đại học và có thể tự tin quản lý ngân sách hàng chục triệu mỗi ngày.

> [!IMPORTANT]
> **Nhận xét của bạn:** 
> Phần này thực sự rất nặng về tính chiến thuật. Hãy cho tôi biết:
> 1. Hiện tại bạn đã có sẵn data khách hàng cũ nào chưa (Ví dụ: danh sách SĐT, Email của khách đã từng mua hàng)? Nếu có, chúng ta có thể tạo Tệp Lookalike ngay từ ngày đầu tiên mà không cần chờ đợi!
> 2. Bạn dự tính sẽ xây dựng chiến dịch Retargeting như thế nào cho sản phẩm của mình?
> 
> *Hãy thảo luận cùng tôi. Sau khi xong phần này, chúng ta sẽ kết thúc Giai đoạn 4 và bước sang Giai đoạn 5 (Tối cao): Đo lường, đọc chỉ số, tối ưu và Scaling nới rộng ngân sách.*

---

# Giai Đoạn 5 - Phần 1: Quy Trình Test (A/B Testing) - Đi Tìm "Bài Win"

Chào mừng bạn đến với Giai đoạn 5! Nếu ở Giai đoạn 4, bạn đã biết cách "lên đạn", thì ở Giai đoạn 5 này, bạn sẽ học cách "bắn tỉa" sao cho trúng đích nhất và tiết kiệm đạn nhất.

Trong giới chạy quảng cáo, không ai dám vỗ ngực tự xưng: *"Tôi nhìn phát là biết video này kiểu gì cũng nổ đơn ngập mặt"*. Tất cả những người chuyên nghiệp đều phải dựa vào những con số để quyết định, và công cụ để tìm ra những con số đó chính là **Thử nghiệm phân tách (A/B Testing)**.

---

## 1. Nguyên Tắc Vàng Của A/B Testing: "Quy Tắc Một Biến Số"

A/B Testing hiểu đơn giản là bạn cho chạy 2 hoặc nhiều phương án khác nhau cùng một lúc để xem phương án nào rẻ hơn, ra nhiều đơn hơn.

> **❗ NGUYÊN TẮC TỬ THẦN:** Trong 1 lần Test, bạn **CHỈ ĐƯỢC PHÉP THAY ĐỔI DUY NHẤT 1 BIẾN SỐ**, và phải giữ nguyên tất cả các yếu tố còn lại.

- **Ví dụ Sai lầm:** Bạn lên Chiến dịch 1 (Hình ảnh cô gái mặc váy + Target sinh viên). Sau đó lên Chiến dịch 2 (Hình ảnh váy để trên sàn nhà + Target dân văn phòng). Ngày hôm sau, Chiến dịch 2 rẻ hơn rất nhiều. **Lỗi:** Bạn không thể biết nó rẻ là do hình ảnh trên sàn nhà đẹp hơn, hay là do tệp dân văn phòng dễ mua đồ hơn. Bạn bị rối trí.
- **Cách làm Đúng:** Nếu muốn test Nội dung, hãy CỐ ĐỊNH Target. Nếu muốn test Target, hãy CỐ ĐỊNH Nội dung.

---

## 2. Giai Đoạn 1: Test Nội Dung (Creative Testing)

Như đã nhắc đi nhắc lại, Nội dung chiếm 80% thành bại. Do đó, bước đầu tiên bao giờ cũng phải là đi tìm một nội dung xuất sắc (Dân chạy Ads gọi là **Bài Win**).

### A. Phương pháp Setup Test Nội Dung
- **CỐ ĐỊNH:** 1 Nhóm quảng cáo (Ví dụ: Ngân sách 300k, Target thả rông toàn quốc, Nữ 20-40 tuổi).
- **THAY ĐỔI:** Nhét 3 Bài quảng cáo (Ad) có nội dung khác nhau vào Nhóm này.
  - *Ví dụ:* Bạn giữ nguyên một video giới thiệu sản phẩm dài 1 phút, nhưng bạn sửa lại **3 giây đầu tiên (Hook)** thành 3 đoạn khác nhau:
    - Ad 1 (Hook gây sốc): Đập vỡ sản phẩm.
    - Ad 2 (Hook câu hỏi): "Bạn có đang bế tắc vì...?".
    - Ad 3 (Hook review): "Đây là món đồ đáng tiền nhất tôi từng mua...".

### B. Vấn đề của AI Facebook khi Test theo cách này
Nếu bạn nhét 3 Ad vào 1 Nhóm, Facebook AI thường có một tật xấu: Mới chạy được 1 tiếng, nó thấy Ad số 1 có vẻ nhiều người click, nó sẽ **dồn toàn bộ 99% ngân sách** vào Ad số 1 và bỏ đói Ad 2, Ad 3. Kết quả là bài test không công bằng.

### C. Giải pháp chuyên gia: Dynamic Creative (Nội dung động)
Ở cấp độ Nhóm quảng cáo, có một nút gạt tên là **Nội dung động (Dynamic Creative)**. Khi bật nút này, thay vì tạo 3 bài Ad riêng lẻ, Facebook cho phép bạn tải lên CÙNG LÚC:
- 3 Hình ảnh/Video khác nhau.
- 3 Đoạn Văn bản chính (Primary Text) khác nhau.
- 3 Tiêu đề (Headline) khác nhau.
Hệ thống sẽ tự động trộn chéo chúng với nhau (Ví dụ: Trộn Video 1 với Text 2 và Tiêu đề 3) để hiển thị cho khách hàng. Sau 3 ngày, Facebook sẽ báo cáo cho bạn biết sự kết hợp nào (Combo nào) mang lại nhiều tin nhắn/chuyển đổi với giá rẻ nhất.

---

## 3. Giai Đoạn 2: Test Tệp Đối Tượng (Audience Testing)

Sau khi kết thúc Giai đoạn 1, bạn đã tìm ra được một "Video Bán Hàng Bá Đạo Nhất". Việc bây giờ là mang Video đó đi rải khắp các tệp khách hàng để xem tệp nào chốt đơn sướng nhất.

### A. Phương pháp Setup Test Target
- **CỐ ĐỊNH:** Chỉ dùng duy nhất 1 Bài quảng cáo (Bài Win vừa tìm được ở Giai đoạn 1).
- **THAY ĐỔI:** Tạo 3 Nhóm quảng cáo (Ad Set) có Target hoàn toàn khác nhau.
  - Nhóm 1: Target thả rông (Broad) - Để AI tự bơi.
  - Nhóm 2: Target chi tiết (Sở thích/Hành vi).
  - Nhóm 3: Target tệp tương tự (Lookalike 1% của tệp đã xem video 75%).
- **LƯU Ý:** Bắt buộc phải tắt CBO (Ngân sách chiến dịch) và **bật ABO** (Đặt ngân sách cho từng nhóm). Ví dụ cho mỗi nhóm đúng 100k/ngày để ép Facebook phải tiêu tiền công bằng cho cả 3 nhóm.

---

## 4. Nghệ Thuật Đọc Số Liệu Và Ra Quyết Định

Rất nhiều người rớt nước mắt vì vừa bật quảng cáo lên, thấy 2 tiếng sau tin nhắn đắt quá liền vội vàng tắt đi. **Sự kiên nhẫn là chìa khóa của A/B Testing.**

### A. Thời gian test bao lâu là đủ?
- Đừng bao giờ đánh giá một chiến dịch khi nó chạy chưa đủ **24 tiếng**. Trong 1 ngày đầu, chi phí sẽ nhảy múa rất điên rồ vì máy học đang dò đường.
- Thời gian lý tưởng để đọc kết quả là **sau 48 - 72 giờ**, hoặc khi mỗi nhóm tiêu hết một lượng tiền đủ lớn (Ví dụ: Bằng đúng giá trị lợi nhuận của 1 sản phẩm).

### B. Chọn người chiến thắng dựa vào chỉ số nào?
Đừng chọn người chiến thắng chỉ dựa vào Giá 1 tin nhắn (CPA). Hãy nhìn vào phễu:
1. **Chỉ số Sức hút (CTR):** Nhóm nào/Bài nào có CTR > 5%? (Nghĩa là khách cực kỳ thích nội dung đó).
2. **Chỉ số Chuyển đổi (CR):** Nhóm nào ra nhiều tin nhắn, mà tỉ lệ khách cho số điện thoại/chốt đơn cao nhất? (Đôi khi giá 1 tin nhắn của Nhóm 1 là 50k, Nhóm 2 là 20k. Nhưng 10 tin nhắn của Nhóm 1 chốt được 8 đơn, còn Nhóm 2 chốt được 0 đơn do toàn trẻ trâu. Rõ ràng Nhóm 1 mới là người chiến thắng).
3. **Trùm cuối - Lợi nhuận (ROAS):** Nhóm/Bài nào sau 3 ngày đem lại lợi nhuận cao nhất cho túi tiền của bạn? Hãy giữ nó lại, và dũng cảm TẮT NGAY LẬP TỨC các nhóm lỗ.

---

## TỔNG KẾT BÀI 1 GIAI ĐOẠN 5

A/B Testing không phải là sự may rủi, nó là Toán học và Thống kê.
- Test Nội dung trước -> Có bài Win -> Mang bài Win đi Test Target -> Tìm ra Target Win -> Ghép Bài Win + Target Win lại để đổ tiền vào chạy lớn (Scaling).
- Hãy lạnh lùng với những con số. Một video bạn cực kỳ tâm đắc, nhưng chạy test 3 ngày ròng rã mà lỗ sấp mặt, hãy nhẫn tâm tắt nó đi. Khách hàng luôn đúng!

> [!IMPORTANT]
> **Nhận xét của bạn:** 
> Giữa việc Test Nội Dung (làm nhiều video khác nhau) và Test Target (chia nhiều nhóm độ tuổi/sở thích), bạn cảm thấy bước nào khó khăn hơn đối với năng lực hiện tại của mình? 
> Nếu bạn dự định làm 1 video bán hàng sắp tới, bạn định test 3 cái Hook (3 giây đầu) như thế nào? Hãy thử nháp 3 ý tưởng Hook đó ra đây nhé!
> 
> *Sau khi hiểu rõ Quy trình Test này, chúng ta sẽ bước sang Bài 2: Đọc bảng chỉ số chẩn đoán "Bệnh" và Kỹ thuật Tăng ngân sách (Scaling) không bị chết camp!*

---

# Giai Đoạn 5 - Phần 2: Đọc Chỉ Số & Chẩn Đoán "Bệnh" Quảng Cáo

Chào bạn, chào mừng đến với phòng khám của "Bác sĩ Ads". Ở bài trước, bạn đã biết các chỉ số có ý nghĩa gì. Nhưng khi chúng kết hợp với nhau trong thực tế, nó sẽ báo hiệu cho bạn biết chiến dịch của bạn đang "mắc bệnh" ở khâu nào.

Đa số người mới khi thấy quảng cáo không ra đơn là vội vàng đổ lỗi cho "Facebook hôm nay bão". Sự thật là mọi trục trặc đều có nguyên nhân rõ ràng trên bảng chỉ số. Hãy cùng bắt bệnh nhé!

---

## BỆNH 1: CHI PHÍ HIỂN THỊ ĐẮT ĐỎ (CPM CAO)

**Triệu chứng:** Giá 1 tin nhắn (CPA) đắt lòi mắt. Bạn nhìn sang cột CPM thấy chi phí hiển thị lên tới 100.000đ - 200.000đ / 1.000 lượt. (Bình thường ngành của bạn chỉ 40k-50k).
*(Lưu ý: CPM đắt rẻ tùy thuộc vào ngành hàng. Bán BĐS CPM 150k là bình thường, nhưng bán quần áo mà CPM 150k là có vấn đề).*

**Nguyên nhân:**
1. **Target quá hẹp:** Bạn cố target vào nhóm "Nữ, 25 tuổi, thích Hermes, sống tại 1 con phố nhỏ". Tệp chỉ có 10.000 người, AI sẽ tốn rất nhiều tiền để cố đào bới tìm người trong tệp đó cho bạn.
2. **Cạnh tranh quá khốc liệt:** Đang là dịp Black Friday, Lễ Tết. Ai cũng bung tiền chạy, phiên đấu giá bị đẩy lên cao chót vót.
3. **Chất lượng quảng cáo (Ad Quality) tệ hại:** Thuật toán Facebook quét thấy video của bạn giật gân, vi phạm nhẹ chính sách, hoặc chứa quá nhiều text. Nó "phạt" bạn bằng cách đẩy giá hiển thị lên thật cao để hạn chế người xem.

**Đơn thuốc:**
- Nới rộng Target ra (Thử thả rông Broad).
- Chỉnh sửa lại Content: Cắt bớt phần text lộn xộn trên ảnh, thay nhạc nền khác nếu sợ vi phạm bản quyền.

---

## BỆNH 2: KHÔNG AI THÈM BẤM VÀO (CTR THẤP < 1%)

**Triệu chứng:** CPM rẻ, phân phối đều đặn, nhưng lẹt đẹt cả ngày chả ai bấm vào xem, không có tin nhắn nào.

**Nguyên nhân:**
1. **Bệnh "Nội dung tàng hình":** Ảnh hoặc Video của bạn quá chìm nghỉm trên News Feed (Màu sắc nhờ nhợt, 3 giây đầu video chán ngắt như đọc kinh). Khách hàng lướt qua nó với tốc độ ánh sáng.
2. **Sai Tệp (Wrong Audience):** Nội dung rất hay, nhưng phân phối nhầm người. Bạn mang dao cạo râu đi bán cho phụ nữ bỉm sữa.

**Đơn thuốc:**
- Thay gấp Hình ảnh/Video mới. Làm cái Hook (3 giây đầu) thật sốc, dùng tông màu nóng (Vàng, Cam, Đỏ).
- Kiểm tra lại Target xem có bị lệch tệp không.

---

## BỆNH 3: TIN NHẮN RẺ BẤT THƯỜNG, NHƯNG KHÔNG CHỐT ĐƯỢC ĐƠN (CR BẰNG 0)

Đây là căn bệnh ức chế nhất.
**Triệu chứng:** Điện thoại rung liên tục báo tin nhắn đến. Giá tin nhắn siêu rẻ (Chỉ 10k-15k/tin). CTR cực kỳ cao (10-15%). Bạn khấp khởi mừng thầm, nhưng chat mỏi tay 50 khách thì: Khách xem giá xong "đã xem", khách nhắn mỗi chữ "Chấm", hoặc khách hỏi những câu ngô nghê như trẻ con. Chốt đơn bằng 0.

**Nguyên nhân:**
1. **Lỗi "Che Giá" (Baiting):** Bạn bán cái áo 800k nhưng bạn không để giá trên bài viết, ghi là "Inbox để có giá tốt". Khách tò mò bấm vào cực đông (làm tin nhắn rẻ bèo), nhưng nghe báo 800k họ chạy mất dép vì họ chỉ có 200k.
2. **Content Câu View Quá Đà:** Bạn làm cái video hài hước quá mức, khách bấm vào vì muốn xem video hài chứ không hề muốn mua hàng.
3. **Lỗi Chăm Sóc Khách (Sale):** Quảng cáo làm tốt nhiệm vụ kéo khách xịn về, nhưng nhân viên Sale của bạn trả lời chậm sau 2 tiếng, hoặc nói chuyện cộc lốc làm khách bỏ đi.

**Đơn thuốc:**
- Nếu bán hàng đắt tiền: **GHI THẲNG GIÁ LÊN ẢNH/BÀI VIẾT**. Cách này giúp xua đuổi những tệp khách không có tiền, CTR sẽ giảm, giá tin nhắn có thể đắt lên (30k/tin), nhưng 10 người nhắn thì 5 người mua! (Lọc phễu ngay từ vòng gửi xe).
- Bật tính năng Target Loại trừ (Loại trừ thiết bị di động dưới 3 tháng, loại trừ độ tuổi dưới 20) để bớt tệp "trẻ trâu".

---

## BỆNH 4: CHI PHÍ TĂNG VỌT SAU VÀI NGÀY (BÃO HÒA NỘI DUNG - AD FATIGUE)

**Triệu chứng:** Chiến dịch chạy ngày 1, ngày 2 cực kỳ mượt, giá tin nhắn 30k. Đến ngày 3 giá tin nhắn lên 50k. Ngày 4 lên 90k, CTR tụt dốc không phanh. Bạn nhìn vào chỉ số **Tần suất (Frequency)** thấy nó tăng lên mức 2.5 - 3.0.

**Nguyên nhân:**
1. Tệp khách hàng của bạn đã bị vắt kiệt. 
2. Ví dụ tệp của bạn có 100.000 người, trong 3 ngày Facebook đã hiển thị sạch sành sanh cho 100.000 người này. Nhóm người có nhu cầu mua ĐÃ MUA. Những người còn lại dứt khoát không mua. 
3. Sang ngày thứ 4, AI bí quá đành mang cái quảng cáo đó đi hiển thị lại cho những người cũ lần thứ 2, thứ 3 (Làm tăng chỉ số Tần suất). Khách xem lại lần 2 họ thấy chán, không thèm bấm nữa -> CTR giảm -> Chi phí tăng vọt.

**Đơn thuốc:**
- Đừng cố đấm ăn xôi. Khi Tần suất > 2.5 và giá đắt lên, **HÃY TẮT NGAY CHIẾN DỊCH.**
- Tung ra một Content (Video/Ảnh) hoàn toàn mới mẻ để đập lại vào tệp cũ.
- Hoặc giữ nguyên Content cũ, nhưng mở rộng Target (Tạo tệp Lookalike bự hơn) để Facebook đi tìm hồ cá mới cho bạn.

---

## TỔNG KẾT BÀI 2 GIAI ĐOẠN 5

Việc đọc báo cáo quảng cáo không phải là ngồi nhìn những con số vô tri vô giác. Mỗi con số đang kể cho bạn nghe một câu chuyện về tâm lý khách hàng. 

- **CPM** nói cho bạn biết bạn đang chơi trong cái ao cạnh tranh đến mức nào.
- **CTR** nói cho bạn biết khách hàng có đang thích mồi câu của bạn không.
- **CPA & CR** nói cho bạn biết mồi câu của bạn có lọc đúng loại cá bạn cần không, hay toàn kéo rác về.
- **Tần suất (Frequency)** nhắc bạn biết khi nào khách hàng bắt đầu "ngán" bạn đến tận cổ.

> [!IMPORTANT]
> **Nhận xét của bạn:** 
> Trong số 4 "căn bệnh" trên, nếu là bạn, bạn sẽ sợ gặp căn bệnh nào nhất? Hãy thử tưởng tượng và bình luận bên dưới. 
> 
> *Khi bạn đã hiểu tường tận cách bắt bệnh này, chúng ta sẽ đi đến bài HỌC CUỐI CÙNG (Bài 3 Giai đoạn 5): Kỹ thuật Tăng Ngân Sách (Scaling) để nhân x5, x10 lợi nhuận mà không bị "sập" chiến dịch!*

---

# Giai Đoạn 5 - Phần 3: Tối Ưu Hóa & Mở Rộng Quy Mô (Scaling)

Chúc mừng bạn đã đi đến bài học cuối cùng! Đây là "Trùm cuối" của hệ thống kiến thức Facebook Ads.

Hãy tưởng tượng bạn vừa tìm ra một mỏ vàng (Bài Win + Target Win ở Bài 1). Mỗi ngày bạn bỏ vào 500k tiền quảng cáo và thu về 3 triệu tiền lãi. Mọi thứ quá tuyệt vời! Bạn nghĩ: *"Nếu mình bỏ 5 triệu 1 ngày, mình sẽ kiếm được 30 triệu tiền lãi!"*. 

Và bạn vào Trình quản lý quảng cáo, sửa 500k thành 5.000.000đ. 

**KẾT QUẢ:** Ngày hôm sau giá tin nhắn đắt gấp 5 lần, không chốt được đơn nào, tài khoản âm nặng, chiến dịch "sập" hoàn toàn.

Tại sao lại như vậy? Bài học này sẽ giải quyết bài toán khó nhất: **Làm sao để tiêu nhiều tiền hơn mà vẫn giữ được lợi nhuận?**

---

## 1. Sai Lầm Chết Người Khi "Vít Ngân Sách"

Khi bạn tăng ngân sách quá đột ngột (Ví dụ tăng > 20%), Facebook AI sẽ bị "sốc". Nó hiểu rằng: *"Chủ nhân đang có rất nhiều tiền và đang rất vội. Mình phải tiêu hết chỗ tiền này thật nhanh"*. 
Nó sẽ không thèm phân phối quảng cáo chậm rãi đến những người thực sự muốn mua nữa, mà nó sẽ rải quảng cáo như mưa xuống tất cả mọi người, kể cả tệp rác. 
Bên cạnh đó, việc sửa ngân sách quá lớn được tính là **Significant Edit (Chỉnh sửa đáng kể)**, nó làm RESET toàn bộ quá trình máy học. Mỏ vàng của bạn chính thức bị sụp đổ.

Để giải quyết, các chuyên gia dùng 2 phương pháp Scaling sau:

---

## 2. Kỹ Thuật 1: Scaling Dọc (Vertical Scaling) - "Chậm mà chắc"

**Bản chất:** Bạn tăng trực tiếp ngân sách vào cái Nhóm Quảng Cáo / Chiến dịch đang ra lãi đó.

**Nguyên tắc vàng "Không quá 20%":**
- Mỗi lần tăng ngân sách, bạn chỉ được phép tăng tối đa **15% - 20%** so với ngân sách hiện tại.
- **Thời điểm tăng:** Hãy tăng vào lúc **12h00 đêm (0h00)** hoặc rạng sáng. Không bao giờ được tăng vào lúc giữa trưa hay chiều (Facebook sẽ cố đốt hết số tiền tăng thêm trong nửa ngày còn lại gây đắt đỏ).
- *Ví dụ:* Hôm nay chạy 500.000đ (Thấy ngon) -> 12h đêm sửa thành 600.000đ -> Chạy 2 ngày thấy vẫn ngon -> 12h đêm sửa thành 720.000đ.
- Nếu tăng lên 720k mà thấy đắt hẳn lên, hãy sửa lùi lại mốc 600k ngay.

**Ưu/Nhược điểm:**
- *Ưu điểm:* Cực kỳ an toàn, hệ thống máy học (AI) được làm quen dần dần nên không bị sốc.
- *Nhược điểm:* Quá chậm. Nếu bạn đang có trend (Ví dụ áo bóng đá vô địch), bạn cần bung mạnh 10 triệu/ngày ngay lập tức thì cách này không đáp ứng kịp.

---

## 3. Kỹ Thuật 2: Scaling Ngang (Horizontal Scaling) - "Thuật Phân Thân"

Đây là bí kíp thực sự để đẩy mạnh doanh số trong thời gian ngắn mà không làm chết chiến dịch gốc.
**Bản chất:** TUYỆT ĐỐI KHÔNG SỬA NGÂN SÁCH của nhóm đang ngon (Giữ nguyên con ngỗng đẻ trứng vàng). Thay vào đó, chúng ta tạo ra nhiều không gian khác nhau để tiêu tiền.

### A. Cách 1: Nhân bản nhóm quảng cáo (Duplicate)
- Bạn đang có Nhóm A chạy 500k rất ngon. Bạn giữ nguyên Nhóm A.
- Bạn chọn Nhóm A, bấm **Sao chép (Duplicate)** ra thêm 5 nhóm giống hệt (A1, A2, A3, A4, A5). Bạn đặt mỗi nhóm mới này ngân sách 500k. Tổng ngân sách của bạn đã là 3 triệu/ngày.
- **Tại sao lại sao chép?** Mặc dù Target giống hệt nhau, nhưng AI sẽ đi lấy ngẫu nhiên những tệp người dùng khác nhau trong cái ao cá đó. 
- **Cách quản lý:** Đến cuối ngày, bạn vào kiểm tra. Sẽ có 2 nhóm ra đơn rẻ, 3 nhóm giá rất đắt. Hãy **TẮT 3 nhóm đắt đi**, và giữ lại 2 nhóm rẻ. Vậy là bạn đã tiêu được 1tr5 mà vẫn giữ được giá tin rẻ.

### B. Cách 2: Mở rộng tệp đối tượng (Audience Expansion)
Nếu cái "Ao" của bạn (Target cũ) đã hết cá, việc bạn ném thêm tiền vào cũng không ra cá. Hãy đi tìm cái Ao khác.
- Đang chạy Tệp Sở thích (Thấy ngon) -> Đổ thêm tiền vào để tạo 1 chiến dịch chạy Tệp Lookalike 1%.
- Đang chạy Tệp Lookalike 1% (Rất ngon) -> Đổ thêm tiền vào tạo nhóm chạy Lookalike 2% -> 5%.

### C. Cách 3: Thử nghiệm định dạng/vị trí mới
- Đang chạy Video ngang ở News Feed (Thấy ngon) -> Đổ thêm tiền mướn Editor cắt lại Video đó thành khổ dọc 9:16 và tạo chiến dịch chạy thử trên Reels.

---

## 4. Giải Phóng Sức Lao Động: Quy Tắc Tự Động (Automated Rules)

Khi bạn Scaling và có tới 50 nhóm quảng cáo đang chạy cùng lúc, bạn không thể ngồi F5 màn hình 24/24 để xem nhóm nào đắt để tắt. Hãy sử dụng tính năng **Quy tắc (Rules)** của Facebook. Nó giống như con Bot thay bạn canh gác kho tiền.

**Vào mục: Quy tắc tự động (Automated Rules) trên Ads Manager:**

- **Rule 1: Con Bot Cắt Lỗ (Stop Loss)**
  - *Cài đặt:* Nếu (Chi tiêu > 100.000đ) VÀ (Số lượt nhắn tin < 1) -> Hành động: **Tắt Nhóm quảng cáo**.
  - *Ý nghĩa:* Mày tiêu hết 100k của tao rồi mà không ra nổi 1 tin nhắn, tự động tắt đi để tao khỏi mất thêm tiền.
- **Rule 2: Con Bot Cắt Lỗ Cấp 2 (Bảo vệ ROAS)**
  - *Cài đặt:* Nếu (CPA / Giá tin nhắn > 50.000đ) -> Hành động: **Tắt Nhóm quảng cáo**.
  - *Ý nghĩa:* Dù mày ra tin nhắn, nhưng đắt quá giới hạn chịu đựng (50k) thì tao cũng tắt.
- **Rule 3: Con Bot Bơm Tiền (Scaling)**
  - *Cài đặt:* Nếu (Giá tin nhắn < 20.000đ) VÀ (Giờ = 0h00 sáng) -> Hành động: **Tăng ngân sách hàng ngày lên 20%**.

*Chỉ với 3 Rule này, bạn hoàn toàn có thể đi ngủ một cách ngon lành mà không sợ sáng mai thức dậy tài khoản bị trừ sạch tiền trong khi đơn bằng 0.*

---

## TỔNG KẾT KHÓA HỌC & GIAI ĐOẠN 5

Đến đây, bạn đã hoàn thiện toàn bộ bức tranh của một nhà quảng cáo Facebook (Meta Ads) thực thụ. Hãy nhớ lại:
- **Giai đoạn 1:** Bạn hiểu luật chơi (Đấu giá, Máy học, Placements) và Hành trình khách hàng.
- **Giai đoạn 2:** Bạn nắm vững Thuật ngữ (CPM, CTR, ROAS) và cách bố trí Tài nguyên an toàn (BM, Pixel).
- **Giai đoạn 3:** Bạn học cách vẽ Chân dung khách hàng và kỹ thuật sát thủ: Làm Content (Video Hook 3 giây, công thức PAS/AIDA).
- **Giai đoạn 4:** Bạn thiết lập chiến dịch (Campaign) chuẩn mực và hiểu sâu về phễu Tệp đối tượng (Custom, Lookalike).
- **Giai đoạn 5:** Bạn biết cách A/B Testing tìm Bài Win, Bắt bệnh khi camp lỗi, và Vít ngân sách (Scaling) lớn mà không bị sập.

> [!IMPORTANT]
> **Nhận xét tổng kết của bạn:** 
> Việc đẩy ngân sách từ vài trăm ngàn lên vài triệu/ngày luôn là rào cản tâm lý lớn nhất. Sau khi đọc xong phần Scaling này, bạn đã thấy tự tin hơn chưa?
> Bạn đánh giá kỹ thuật Scaling Dọc hay Scaling Ngang (Nhân bản nhóm) sẽ phù hợp với mình hơn ở giai đoạn mới bắt đầu?
> 
> ***Cảm ơn bạn đã đồng hành suốt lộ trình vô cùng dài và nhiều kiến thức này. Nếu bạn đã sẵn sàng, hãy chọn ra sản phẩm đầu tiên và bắt tay vào lên Campaign thực tế nhé. Tôi luôn ở đây để hỗ trợ bạn sửa Content hoặc phân tích số liệu!***

---
