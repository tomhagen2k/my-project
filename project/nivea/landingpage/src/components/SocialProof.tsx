"use client";

import React, { useState } from "react";
import { Star, ChevronDown, ChevronUp, Play, X } from "lucide-react";

export const Expert = () => {
  return (
    <section className="py-20 bg-nivea-light/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row items-center border border-white">
          <div className="w-full md:w-1/2 h-80 md:h-[500px]">
            <img src="/image/ai/nivea_expert.png" alt="Chuyên gia khuyên dùng" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-14">
            <div className="flex gap-1 text-yellow-400 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" />)}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 leading-tight">
              "Bí quyết dưỡng ẩm tối ưu trong những ngày thời tiết hanh khô."
            </h3>
            <p className="text-slate-600 mb-8 italic text-lg leading-relaxed">
              "NIVEA Soft không chỉ cấp ẩm bề mặt mà nhờ Jojoba Oil và Vitamin E, nó còn nuôi dưỡng sâu từ bên trong, phục hồi hàng rào bảo vệ da mạnh mẽ. Đặc biệt phù hợp ngay cả với da nhạy cảm."
            </p>
            <div>
              <p className="font-bold text-slate-900 text-lg">BS. Nguyễn Thị Mai</p>
              <p className="text-nivea-blue font-medium">Chuyên gia Da Liễu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Feedback = () => {
  const [activeMedia, setActiveMedia] = useState<{type: 'img' | 'vid', src: string} | null>(null);

  const reviews = [
    {
      name: "elise.fam", date: "2024-06-29 13:25",
      text: "Chất lượng thì khỏi bàn nhỉ, mịn, nhanh thẩm thấu, mát da. Giao hành nhanh chóng, gói hàng cẩn thận. Sẽ ủng hộ lâu dài",
      media: [
        { type: "vid", src: "/review/review2_video.mp4" },
        { type: "img", src: "/review/review2_image1.webp" },
        { type: "img", src: "/review/review2_image2.webp" },
        { type: "img", src: "/review/review2_image3.webp" },
        { type: "img", src: "/review/review2_image4.webp" },
        { type: "img", src: "/review/review2_image5.webp" },
      ]
    },
    {
      name: "quynh_hoa93", date: "2021-11-25 16:45",
      text: "Chất lượng sản phẩm tuyệt vời, đóng gói sản phẩm đẹp chắc chắn, shop phục vụ rất tốt, rất đáng tiền, thời gian giao hàng nhanh",
      media: [
        { type: "vid", src: "/review/review1_video.mp4" },
        { type: "img", src: "/review/review1_image1.webp" },
        { type: "img", src: "/review/review1_image2.webp" },
        { type: "img", src: "/review/review1_image3.webp" },
      ]
    },
    {
      name: "w*****0", date: "2021-10-13 17:03",
      text: "Shop giao hàng nhanh, được đóng gói có xốp bảo vệ. Sản phẩm có mùi thơm, không hắc. Mình chưa sử dụng sản phẩm nên chưa đánh giá chất lượng.",
      media: [
        { type: "vid", src: "/review/review3_video.mp4" },
        { type: "img", src: "/review/review3_image1.webp" },
        { type: "img", src: "/review/review3_image2.webp" },
        { type: "img", src: "/review/review3_image3.webp" },
        { type: "img", src: "/review/review3_image4.webp" },
        { type: "img", src: "/review/review3_image5.webp" },
      ]
    }
  ];

  return (
    <section id="phan-hoi" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 text-center mb-12">
          Đánh Giá Thực Tế Từ <span className="text-nivea-blue">Khách Hàng</span>
        </h2>

        <div className="space-y-6">
          {reviews.map((rv, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 uppercase">
                  {rv.name.substring(0,2)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{rv.name}</h4>
                  <div className="flex gap-0.5 text-yellow-400">
                    {[1,2,3,4,5].map(j => <Star key={j} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <div className="ml-auto text-xs text-slate-400">{rv.date}</div>
              </div>
              <p className="text-slate-600 mb-4">{rv.text}</p>
              
              <div className="flex flex-wrap gap-2">
                {rv.media.map((m, j) => (
                  <div 
                    key={j} 
                    className="w-20 h-20 rounded-xl overflow-hidden cursor-pointer relative border border-slate-100"
                    onClick={() => setActiveMedia({ type: m.type as any, src: m.src })}
                  >
                    {m.type === "vid" ? (
                      <>
                        <video src={m.src} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <Play className="text-white drop-shadow-md" size={24} fill="currentColor" />
                        </div>
                      </>
                    ) : (
                      <img src={m.src} alt="Review" className="w-full h-full object-cover" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeMedia && (
        <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white bg-black/50 p-2 rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setActiveMedia(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl max-h-[80vh] w-full flex justify-center items-center">
            {activeMedia.type === "img" ? (
              <img src={activeMedia.src} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
            ) : (
              <video src={activeMedia.src} autoPlay controls className="max-w-full max-h-[80vh] rounded-lg outline-none" />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export const SocialCounters = () => {
  return (
    <section className="py-12 bg-nivea-blue text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-around items-center gap-8 text-center">
        <div>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-2">74.390+</h3>
          <p className="text-nivea-light font-medium uppercase tracking-wider">Khách hàng tin dùng</p>
        </div>
        <div className="w-px h-16 bg-white/20 hidden md:block"></div>
        <div>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-2">4.9/5</h3>
          <div className="flex gap-1 text-yellow-400 justify-center mb-1">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <p className="text-nivea-light font-medium uppercase tracking-wider">Điểm đánh giá trung bình</p>
        </div>
      </div>
    </section>
  );
};

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  
  const faqs = [
    { q: "Sản phẩm có dùng được cho da mặt không?", a: "Hoàn toàn dùng được. NIVEA Soft được thiết kế an toàn để sử dụng cho cả da mặt, tay và toàn thân." },
    { q: "Da dầu mụn có dùng được không?", a: "Với chất kem nhẹ, thấm nhanh, NIVEA Soft phù hợp với mọi loại da, cung cấp độ ẩm cần thiết mà không gây bít tắc lỗ chân lông." },
    { q: "Bao lâu thì nhận được hàng?", a: "Thời gian giao hàng từ 2-4 ngày tùy khu vực. Chúng tôi sẽ gọi điện xác nhận sau khi bạn đặt hàng." },
    { q: "Làm sao để biết hàng chính hãng?", a: "Sản phẩm cam kết chính hãng 100%. Bạn được quyền kiểm tra mã vạch và xem hàng trước khi thanh toán." }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">Câu Hỏi Thường Gặp</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center font-bold text-slate-800"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                {open === i ? <ChevronUp className="text-nivea-blue" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
