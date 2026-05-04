"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ChevronDown, Star, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ReviewLightbox from "./ReviewLightbox";

export function Section8_AwardsPatents() {
  return (
    <section className="bg-teal-900 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Chứng Nhận An Toàn Da Liễu</h2>
        <div className="relative w-full max-w-4xl mx-auto aspect-video md:aspect-[21/9]">
          <Image src="/assets/ai/award_cert_1777878394350.png" alt="Awards and Certifications" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
}

export function Section9_ApplicationGuide() {
  const steps = [
    { step: "Bước 1", title: "Làm Sạch", desc: "Sử dụng trên làn da sạch, sau bước toner/tinh chất." },
    { step: "Bước 2", title: "Thoa Đều", desc: "Lấy một lượng kem vừa đủ, thoa đều lên toàn bộ khuôn mặt." },
    { step: "Bước 3", title: "Massage", desc: "Vỗ nhẹ để dưỡng chất thẩm thấu sâu vào da." },
    { step: "Mặt Nạ", title: "Ngủ", desc: "Thoa lớp kem dày hơn (2-3 lần/tuần) để qua đêm như mặt nạ ngủ." },
  ];

  return (
    <section className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-teal-900 mb-12">Hướng Dẫn Sử Dụng Đúng Chuẩn</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-teal-200 -z-10" />
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-teal-500/30">
                {s.step}
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm px-4">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Section10_ComparisonTable() {
  const features = [
    { name: "Cấp ẩm kéo dài suốt 24h", beyond: true, other: false },
    { name: "Phức hợp 3 loại nhựa cây", beyond: true, other: false },
    { name: "An toàn cho da nhạy cảm", beyond: true, other: true },
    { name: "Kết cấu nhẹ, không bết dính", beyond: true, other: false },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-teal-900 mb-12">Sự Khác Biệt Vượt Trội</h2>
        <div className="overflow-hidden rounded-[32px] border border-gray-200 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-teal-50">
                <th className="p-4 font-bold text-teal-900 border-b border-gray-200 w-1/2">Tiêu Chí</th>
                <th className="p-4 font-extrabold text-teal-600 text-center border-b border-l border-gray-200 bg-teal-100">BEYOND ANGEL AQUA</th>
                <th className="p-4 font-bold text-gray-500 text-center border-b border-l border-gray-200">SẢN PHẨM KHÁC</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 border-b border-gray-200 text-gray-700 font-medium">{f.name}</td>
                  <td className="p-4 border-b border-l border-gray-200 bg-teal-50/50 text-center">
                    {f.beyond ? <CheckCircle2 className="w-6 h-6 text-teal-500 mx-auto" /> : <XCircle className="w-6 h-6 text-red-400 mx-auto" />}
                  </td>
                  <td className="p-4 border-b border-l border-gray-200 text-center">
                    {f.other ? <CheckCircle2 className="w-6 h-6 text-teal-500 mx-auto" /> : <XCircle className="w-6 h-6 text-red-400 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Section11_ExpertEndorsement() {
  return (
    <section className="py-20 bg-teal-950 text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 relative aspect-square w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl">
          <Image src="/assets/ai/expert_doctor_1777878415111.png" alt="Expert Doctor" fill className="object-cover" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="text-teal-400 font-bold mb-2">CHUYÊN GIA DA LIỄU KHUYÊN DÙNG</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">&quot;Giải pháp phục hồi màng lipid hoàn hảo&quot;</h2>
          <p className="text-lg text-gray-300 mb-8 italic">
            &quot;Với các làn da khô ráp, nhạy cảm hay căng thẳng vì mất nước, việc cấp ẩm thông thường là chưa đủ. Beyond Angel Aqua với phức hợp Tri-Sap và Hyaluronic Acid là sự kết hợp tuyệt vời để vừa cấp nước sâu, vừa khóa ẩm và phục hồi hàng rào bảo vệ da một cách dịu nhẹ nhất.&quot;
          </p>
          <div>
            <div className="font-bold text-xl text-white">Tiến sĩ, Bác sĩ Anna Nguyễn</div>
            <div className="text-teal-400 text-sm">Chuyên Khoa Da Liễu Thẩm Mỹ</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section12_FeedbackWall() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxMedia, setLightboxMedia] = useState<{type: "image"|"video", src: string}[]>([]);

  const reviews = [
    {
      name: "yenchiii211312",
      rating: 5,
      date: "2026-04-16 09:11",
      option: "Xanh 150ml x 2",
      text: "Sản phẩm giống như hình ảnh trên Shopee. Rất hài lòng và sẽ quay lại lần sau nha! Sản phẩm chất lượng tốt, giá không đau ví.",
      media: [
        { type: "image", src: "/assets/review/image_review/review1_image1.jpg" },
        { type: "video", src: "/assets/review/image_review/review1_video.mp4" },
      ]
    },
    {
      name: "ngocdiepppp._",
      rating: 5,
      date: "2026-04-05 10:17",
      option: "Xanh Fullbox 150ml",
      text: "đóng gói siêu kĩ càng, mình mua sale rẻ mà dung tích rất là to nên là siêu tiết kiệm và đáng yêu và đáng mua",
      media: [
        { type: "image", src: "/assets/review/image_review/review2_image1.jpg" },
        { type: "video", src: "/assets/review/image_review/review2_video.mp4" },
      ]
    },
    {
      name: "n*****4",
      rating: 5,
      date: "2026-01-13 21:42",
      option: "Xanh Fullbox 150ml",
      text: "Giao hàng nhanh lắm, mình dùng hơn tuần r mới quay lại đánh giá, giá mình thấy khá rẻ so với chất lượng dùng trc makeup ổn nha",
      media: [
        { type: "image", src: "/assets/review/image_review/review3_image1.jpg" },
        { type: "video", src: "/assets/review/image_review/review3_video.mp4" },
      ]
    }
  ];

  const openMedia = (mediaArray: {type: "image"|"video", src: string}[]) => {
    setLightboxMedia(mediaArray);
    setLightboxOpen(true);
  };

  return (
    <section id="phan-hoi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-teal-900 mb-12">Khách Hàng Đã Nói Gì?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold uppercase">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold">{r.name}</div>
                  <div className="flex text-yellow-400">
                    {[...Array(r.rating)].map((_, idx) => <Star key={idx} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-400 mb-3">{r.date} | Phân loại hàng: {r.option}</div>
              <p className="text-gray-700 text-sm flex-1 mb-4">{r.text}</p>
              
              {r.media.length > 0 && (
                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                  {r.media.map((m, mIdx) => (
                    <div 
                      key={mIdx} 
                      className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden cursor-pointer group"
                      onClick={() => openMedia(r.media)}
                    >
                      {m.type === "image" ? (
                        <Image src={m.src} alt="Review" fill className="object-cover group-hover:scale-110 transition-transform" />
                      ) : (
                        <>
                          <video src={m.src} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ReviewLightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        mediaList={lightboxMedia} 
        initialIndex={0} 
      />
    </section>
  );
}

export function Section13_SocialProofCounters() {
  return (
    <section className="bg-teal-500 py-6 overflow-hidden relative">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex whitespace-nowrap items-center text-white font-extrabold text-xl md:text-2xl"
      >
        {/* Repeat content to create seamless loop */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-8">✨ Đã có 74.390+ khách hàng tin dùng</span>
            <span className="mx-8">✨ Đánh giá 4.9/5 Sao trên Shopee</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export function Section14_FAQSection() {
  const faqs = [
    { q: "Sản phẩm có an toàn cho da nhạy cảm không?", a: "Sản phẩm được chứng nhận an toàn da liễu, 0% kích ứng, phù hợp cho mọi loại da kể cả da nhạy cảm nhất." },
    { q: "Thời gian giao hàng là bao lâu?", a: "Chúng tôi giao hàng siêu tốc trong 2-3 ngày làm việc. Tại Hà Nội nhận hàng ngay trong ngày." },
    { q: "Có hỗ trợ đổi trả nếu sản phẩm lỗi không?", a: "Bạn được hỗ trợ đổi trả miễn phí trong vòng 7 ngày nếu sản phẩm có lỗi từ nhà sản xuất hoặc do vận chuyển (yêu cầu có video mở hàng)." },
    { q: "Làm sao để biết hàng chính hãng?", a: "Sản phẩm có tem phụ tiếng Việt và tem chống hàng giả. Cam kết đền bù 111% nếu phát hiện hàng nhái." },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-teal-900 mb-12">Câu Hỏi Thường Gặp</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-teal-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center bg-teal-50/30 hover:bg-teal-50 transition-colors"
              >
                <span className="font-bold text-teal-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-teal-500 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === i && (
                <div className="p-6 bg-white text-gray-600 border-t border-teal-50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
