"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, XCircle, Star, ShoppingCart, ShieldCheck, 
  Clock, Package, ThumbsUp, X, ChevronDown, Award, PlayCircle 
} from "lucide-react";

// --- Dữ liệu ---
const IMAGES = {
  product: "/images/product/1.jpeg",
  expert: "/images/ai/mistine_expert_1_1777378778482.png",
  algae: "/images/ai/mistine_ingredient_algae_1777378962118.png",
  moisture: "/images/ai/mistine_ingredient_moisture_1777379437841.png",
  visualDemo: "/images/ai/mistine_visual_demo_1777379035997.png",
  lifestyle: "/images/ai/mistine_lifestyle_1_1777378697107.png",
  gallery: [
    "/images/product/1.jpeg",
    "/images/product/2.jpeg",
    "/images/product/3.jpeg",
    "/images/product/4.jpeg",
  ],
  logistics: "/images/product/5.jpg" // giả sử
};

// --- Components ---
const Lightbox = ({ src, onClose }: { src: string | null, onClose: () => void }) => {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white p-2" onClick={onClose}><X size={32}/></button>
      <div className="relative w-full max-w-4xl aspect-square md:aspect-video" onClick={e => e.stopPropagation()}>
        {src.endsWith('.mp4') ? (
          <video src={src} controls autoPlay className="w-full h-full object-contain" />
        ) : (
          <Image src={src} alt="Zoomed" fill className="object-contain" />
        )}
      </div>
    </div>
  );
};

const StickyHeader = ({ onOrder }: { onOrder: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? "glass-panel py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center max-w-4xl">
        <div className="font-bold text-xl text-brand-600">MISTINE</div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#thong-tin" className="hover:text-brand-600 transition">THÔNG TIN</a>
          <a href="#phan-hoi" className="hover:text-brand-600 transition">PHẢN HỒI</a>
          <a href="#khuyen-mai" className="hover:text-brand-600 transition">KHUYẾN MÃI</a>
        </div>
        <AnimatePresence>
          {isScrolled && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
              onClick={onOrder}
              className="bg-brand-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg hover:bg-brand-700"
            >
              MUA NGAY
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const HeroSection = ({ onOrder }: { onOrder: () => void }) => (
  <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-brand-50 to-white" id="thong-tin">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="w-full md:w-1/2">
        <span className="inline-block px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-xs font-bold mb-4">
          Kem nền Mistine Kem Lót 30g 36H
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
          Lớp Nền Hoàn Hảo <br/> <span className="text-brand-600">Kiềm Dầu 24H</span>
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Phiên bản mới nhất với chiết xuất tảo Địa Trung Hải. Kiểm soát dầu bên ngoài, ức chế dầu bên trong. Nuôi dưỡng làn da mỏng manh của bạn.
        </p>
        <button onClick={onOrder} className="w-full md:w-auto bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-brand-500/30 hover:scale-105 transition-transform flex items-center justify-center gap-2">
          <ShoppingCart size={20} /> NHẬN ƯU ĐÃI NGAY
        </button>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full md:w-1/2 relative aspect-square md:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">
        <Image src={IMAGES.product} alt="Mistine Foundation" fill className="object-cover" />
      </motion.div>
    </div>
  </section>
);

const CoreValue = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto max-w-4xl px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { value: "24H", label: "Bền màu không trôi" },
          { value: "30g", label: "Dung tích siêu tiết kiệm" },
          { value: "100%", label: "Tảo tự nhiên" },
          { value: "0%", label: "Gây kích ứng da" }
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-[32px] bg-brand-50 border border-brand-100">
            <div className="text-3xl md:text-4xl font-extrabold text-brand-600 mb-2">{item.value}</div>
            <div className="text-sm text-gray-600 font-medium">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const VisualDemo = () => (
  <section className="py-16 bg-pastel-bg">
    <div className="container mx-auto max-w-4xl px-4 text-center">
      <h2 className="text-3xl font-extrabold mb-8">Thách Thức Mọi Khuyết Điểm</h2>
      <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl">
        <Image src={IMAGES.visualDemo} alt="Demo che phủ" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
           <div className="text-white font-bold text-xl md:text-3xl drop-shadow-md">Che phủ mỏng nhẹ - Lớp finish lỳ mịn</div>
        </div>
      </div>
    </div>
  </section>
);

const PainPoint = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto max-w-4xl px-4 text-center">
      <h2 className="text-3xl font-extrabold mb-4">Bạn Mệt Mỏi Vì Lớp Nền Nhanh Trôi?</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Đừng để làn da bóng dầu và những vết thâm mụn làm mất đi sự tự tin của bạn.</p>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-gray-100 p-8 rounded-[32px] text-left">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Nỗi lo thường trực:</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><XCircle className="text-red-400" size={20}/> Da đổ dầu liên tục sau 2 tiếng.</li>
            <li className="flex items-center gap-2"><XCircle className="text-red-400" size={20}/> Kem nền bị mốc, loang lổ khi ra mồ hôi.</li>
            <li className="flex items-center gap-2"><XCircle className="text-red-400" size={20}/> Lộ rõ vết thâm mụn, tàn nhang.</li>
          </ul>
        </div>
        <div className="bg-brand-50 border-2 border-brand-100 p-8 rounded-[32px] text-left">
          <h3 className="text-xl font-bold mb-4 text-brand-600">Giải pháp từ Mistine 36H:</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><CheckCircle className="text-green-500" size={20}/> Công nghệ kiềm dầu kép ức chế bã nhờn.</li>
            <li className="flex items-center gap-2"><CheckCircle className="text-green-500" size={20}/> Bám chặt vào da, không trôi khi gặp nước.</li>
            <li className="flex items-center gap-2"><CheckCircle className="text-green-500" size={20}/> Che phủ khuyết điểm hoàn hảo, mỏng nhẹ.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Ingredients = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto max-w-5xl px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Sức Mạnh Từ Thiên Nhiên</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-[32px] overflow-hidden bg-brand-50 border border-brand-100 shadow-lg">
          <div className="relative h-64 w-full"><Image src={IMAGES.algae} alt="Tảo biển" fill className="object-cover" /></div>
          <div className="p-8">
            <h3 className="text-xl font-bold mb-2">Tảo Địa Trung Hải</h3>
            <p className="text-gray-600">Kiểm soát dầu thừa hiệu quả, ức chế tiết bã nhờn từ sâu bên trong.</p>
          </div>
        </div>
        <div className="rounded-[32px] overflow-hidden bg-brand-50 border border-brand-100 shadow-lg">
          <div className="relative h-64 w-full"><Image src={IMAGES.moisture} alt="Cấp ẩm" fill className="object-cover" /></div>
          <div className="p-8">
            <h3 className="text-xl font-bold mb-2">Phức hợp Siêu Cấp Ẩm</h3>
            <p className="text-gray-600">Giữ nước cho da liên tục, chống mốc nền (cakey) hiệu quả.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Gallery = ({ onZoom }: { onZoom: (src: string) => void }) => (
  <section className="py-16 bg-brand-50">
    <div className="container mx-auto max-w-5xl px-4">
      <h2 className="text-3xl font-extrabold text-center mb-12">Vẻ Đẹp Hoàn Mỹ</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2 row-span-2 relative aspect-square rounded-[32px] overflow-hidden cursor-pointer" onClick={() => onZoom(IMAGES.lifestyle)}>
           <Image src={IMAGES.lifestyle} alt="Lifestyle" fill className="object-cover hover:scale-105 transition" />
        </div>
        {IMAGES.gallery.map((img, i) => (
          <div key={i} className="relative aspect-square rounded-[24px] overflow-hidden shadow-sm cursor-pointer" onClick={() => onZoom(img)}>
             <Image src={img} alt="Gallery" fill className="object-cover hover:scale-105 transition" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ApplicationGuide = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto max-w-4xl px-4 text-center">
      <h2 className="text-3xl font-extrabold mb-12">3 Bước Để Có Lớp Nền Điểm 10</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[{ step: "1", title: "Làm Sạch", desc: "Rửa mặt sạch và dùng toner cân bằng." },
          { step: "2", title: "Chấm Kem", desc: "Lấy lượng kem vừa đủ, chấm 5 điểm." },
          { step: "3", title: "Tán Đều", desc: "Dùng mút ẩm tán đều từ trong ra ngoài." }].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-2xl font-bold mb-4">{item.step}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ComparisonTable = () => (
  <section className="py-16 bg-pastel-bg">
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-3xl font-extrabold text-center mb-12">Tại Sao Chọn Mistine?</h2>
      <div className="bg-white rounded-[32px] shadow-xl overflow-hidden border border-gray-100">
        <div className="grid grid-cols-3 bg-gray-50 p-4 font-bold text-center border-b">
          <div>Tiêu Chí</div><div className="text-brand-600">Mistine 36H</div><div className="text-gray-400">Kem nền khác</div>
        </div>
        {[
          { label: "Kiềm dầu", us: true }, { label: "Độ bền màu", us: true },
          { label: "Chống nước", us: true }, { label: "Dưỡng da", us: true }
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-3 p-4 text-center border-b last:border-0 items-center">
            <div className="font-medium text-left px-4">{row.label}</div>
            <div className="flex justify-center"><CheckCircle className="text-green-500" /></div>
            <div className="flex justify-center"><XCircle className="text-red-400" /></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ExpertEndorsement = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto max-w-4xl px-4 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/3 relative aspect-square rounded-[32px] overflow-hidden shadow-lg">
        <Image src={IMAGES.expert} alt="Chuyên gia" fill className="object-cover" />
      </div>
      <div className="w-full md:w-2/3">
        <Award className="text-pastel-accent w-12 h-12 mb-4" />
        <h2 className="text-2xl font-bold mb-4">"Lớp nền hoàn hảo cho phái đẹp"</h2>
        <p className="text-gray-600 text-lg italic mb-6">"Mistine 36H chính là câu trả lời. Chiết xuất tảo Địa Trung Hải thực sự làm nên sự khác biệt."</p>
        <div className="font-bold">Elena Trần</div>
        <div className="text-sm text-gray-500">Chuyên gia trang điểm quốc tế</div>
      </div>
    </div>
  </section>
);

const FeedbackWall = ({ onZoom }: { onZoom: (src: string) => void }) => {
  const reviews = [
    { name: "qu***47", rating: 5, date: "2026-02-13", variant: "Xanh lam-LF110", text: "Mình đã nhận được hàng, đóng gói rất cẩn thận. Giao hàng nhanh. Chất lượng ổn so với giá, hoàn toàn hài lòng. Sẽ tiếp tục ủng hộ shop.", media: ["/images/review/review1_image1.webp", "/images/review/review1_image2.webp", "/images/review/review1_video.mp4"] },
    { name: "l***8", rating: 5, date: "2026-02-05", variant: "Vàng 3.0-LF100", text: "Thấm nhanh, dễ tán. Hàng giao nhanh, đc tặng kèm theo mút. Che phủ ok, giá hạt dẻ nên mua nhé.", media: ["/images/review/review2_image1.webp", "/images/review/review2_video.mp4"] },
    { name: "l***h", rating: 5, date: "2026-02-04", variant: "Xanh lam-LP110S", text: "Chất kem lỏng mê, tán ra siêu dễ siêu mịn. Có kèm bông mút. LP110 trắng hồng này là lựa chọn tuyệt nhất.", media: ["/images/review/review3_image1.webp", "/images/review/review3_image2.webp", "/images/review/review3_video.mp4"] }
  ];

  return (
    <section className="py-16 bg-brand-50" id="phan-hoi">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12">Khách Hàng Nói Gì?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-6 rounded-[32px] shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">{rev.name}</span>
                <div className="flex text-yellow-400"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/></div>
              </div>
              <div className="text-xs text-gray-400 mb-4">{rev.date} | {rev.variant}</div>
              <p className="text-sm text-gray-700 mb-4 flex-grow">{rev.text}</p>
              <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
                {rev.media.map((m, j) => (
                  <div key={j} className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer" onClick={() => onZoom(m)}>
                    {m.endsWith('.mp4') ? (
                      <>
                        <video src={m} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30"><PlayCircle className="text-white w-6 h-6"/></div>
                      </>
                    ) : (
                      <Image src={m} alt="review" fill className="object-cover" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => (
  <div className="bg-brand-600 text-white py-4 overflow-hidden whitespace-nowrap relative">
    <motion.div animate={{ x: ["100%", "-100%"] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="flex gap-12 text-lg font-medium">
      <span>⭐ 4.9/5 Đánh giá trung bình</span><span>🔥 Đã bán hơn 15.000+ sản phẩm</span><span>✨ 98% Khách hàng hài lòng</span><span>⭐ 4.9/5 Đánh giá trung bình</span>
    </motion.div>
  </div>
);

const FAQ = () => {
  const faqs = [
    { q: "Kem nền này có gây bít tắc lỗ chân lông không?", a: "Không. Sản phẩm chứa các thành phần tự nhiên an toàn, kết cấu mỏng nhẹ giúp da thông thoáng." },
    { q: "Da khô có sử dụng được không?", a: "Có. Mistine 36H có dòng sản phẩm nắp Bạc dành riêng cho da khô với khả năng cấp ẩm sâu." },
    { q: "Thời gian giao hàng là bao lâu?", a: "Thời gian giao hàng từ 2-4 ngày tùy theo khu vực của bạn." },
    { q: "Tôi có được kiểm tra hàng trước khi nhận không?", a: "Có, bạn hoàn toàn được quyền kiểm tra sản phẩm trước khi thanh toán cho shipper." },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12">Câu Hỏi Thường Gặp</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-gray-50 p-6 rounded-[24px] cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg list-none">
                {faq.q} <ChevronDown className="transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const UrgencyElements = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);
  const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="bg-red-50 text-red-600 py-3 text-center font-bold text-sm border-b border-red-100 flex items-center justify-center gap-2">
      <Clock size={16} /> ƯU ĐÃI KẾT THÚC SAU: <span className="bg-red-600 text-white px-2 py-1 rounded">{m}:{s}</span> (Chỉ còn 15 suất quà tặng)
    </div>
  );
};

const Pricing = ({ onOrder }: { onOrder: () => void }) => (
  <section className="py-16 bg-white" id="khuyen-mai">
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-3xl font-extrabold text-center mb-12">Chọn Gói Ưu Đãi Của Bạn</h2>
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="p-6 rounded-[32px] border border-gray-200 text-center">
          <h3 className="font-bold text-xl mb-2">Mua Thử</h3>
          <div className="text-3xl font-extrabold text-brand-600 mb-4">171.500đ</div>
          <p className="text-sm text-gray-500 mb-6">1 Lọ Kem Nền 30g</p>
          <button onClick={onOrder} className="w-full py-3 rounded-full border-2 border-brand-600 text-brand-600 font-bold hover:bg-brand-50 transition">CHỌN MUA</button>
        </div>
        <div className="p-8 rounded-[32px] border-2 border-brand-600 bg-brand-50 text-center relative transform md:scale-105 shadow-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">BÁN CHẠY NHẤT</div>
          <h3 className="font-bold text-xl mb-2">Tiết Kiệm</h3>
          <div className="text-3xl font-extrabold text-brand-600 mb-2">320.000đ</div>
          <div className="text-sm line-through text-gray-400 mb-4">343.000đ</div>
          <p className="text-sm text-gray-600 mb-6 font-medium">2 Lọ + Tặng 1 Mút Tán</p>
          <button onClick={onOrder} className="w-full py-4 rounded-full bg-brand-600 text-white font-bold hover:bg-brand-700 shadow-lg transition animate-pulse">ĐẶT HÀNG NGAY</button>
        </div>
        <div className="p-6 rounded-[32px] border border-gray-200 text-center">
          <h3 className="font-bold text-xl mb-2">Toàn Diện</h3>
          <div className="text-3xl font-extrabold text-brand-600 mb-2">450.000đ</div>
          <div className="text-sm line-through text-gray-400 mb-4">514.500đ</div>
          <p className="text-sm text-gray-500 mb-6">3 Lọ + Freeship</p>
          <button onClick={onOrder} className="w-full py-3 rounded-full border-2 border-brand-600 text-brand-600 font-bold hover:bg-brand-50 transition">CHỌN MUA</button>
        </div>
      </div>
    </div>
  </section>
);

const TrustBadges = () => (
  <section className="py-12 bg-gray-50 border-y border-gray-200">
    <div className="container mx-auto max-w-4xl px-4 flex justify-around flex-wrap gap-6 text-center">
      <div className="flex flex-col items-center"><ShieldCheck className="text-brand-600 w-10 h-10 mb-2"/><span className="font-bold text-sm">Bảo hành 1 đổi 1</span></div>
      <div className="flex flex-col items-center"><Package className="text-brand-600 w-10 h-10 mb-2"/><span className="font-bold text-sm">Kiểm hàng trước thu tiền</span></div>
      <div className="flex flex-col items-center"><ThumbsUp className="text-brand-600 w-10 h-10 mb-2"/><span className="font-bold text-sm">Hoàn tiền 111% nếu giả</span></div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm">
    <div className="container mx-auto px-4">
      <div className="font-bold text-2xl text-white mb-4">MISTINE OFFICIAL</div>
      <p className="mb-2">Sự lựa chọn của tôi, niềm đam mê của tôi.</p>
      <div className="flex justify-center gap-4 mb-8">
        <span>Hotline: 1900-xxxx</span> | <span>Email: support@mistine.vn</span>
      </div>
      <div className="mb-4 space-x-4">
        <a href="#" className="hover:text-white">Chính sách bảo mật</a>
        <a href="#" className="hover:text-white">Điều khoản sử dụng</a>
      </div>
      <p>© 2026 Mistine Vietnam. All rights reserved.</p>
    </div>
  </footer>
);

const OrderModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="bg-white rounded-[32px] w-full max-w-md relative flex flex-col max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white z-10">
          <h3 className="font-bold text-lg">Hoàn Tất Đặt Hàng</h3>
          <button onClick={onClose} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"><X size={18}/></button>
        </div>
        <div className="p-6 overflow-y-auto">
          {success ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle size={32} /></div>
              <h4 className="font-bold text-xl mb-2">Đặt Hàng Thành Công!</h4>
              <p className="text-gray-600">Mã đơn: #MST{Math.floor(Math.random()*10000)}<br/>Chúng tôi sẽ gọi xác nhận trong 15 phút.</p>
              <button onClick={onClose} className="mt-8 w-full py-3 bg-brand-600 text-white rounded-full font-bold">ĐÓNG</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gói Sản Phẩm</label>
                <select className="w-full p-3 bg-gray-50 border rounded-2xl outline-none focus:border-brand-600">
                  <option>1 Lọ (171.500đ)</option><option>2 Lọ + Tặng Mút (320.000đ)</option><option>3 Lọ + Freeship (450.000đ)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Họ Tên</label>
                <input required type="text" className="w-full p-3 bg-gray-50 border rounded-2xl outline-none focus:border-brand-600" placeholder="Nguyễn Văn A" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Số Điện Thoại</label>
                <input required type="tel" className="w-full p-3 bg-gray-50 border rounded-2xl outline-none focus:border-brand-600" placeholder="0901234567" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Địa Chỉ Nhận Hàng (Tỉnh/Huyện/Xã)</label>
                <textarea required rows={2} className="w-full p-3 bg-gray-50 border rounded-2xl outline-none focus:border-brand-600 resize-none" placeholder="Số nhà, Phường/Xã, Quận/Huyện, Tỉnh/TP"></textarea>
              </div>
              <button disabled={loading} type="submit" className="w-full py-4 mt-4 bg-brand-600 text-white rounded-full font-bold shadow-lg hover:bg-brand-700 flex justify-center items-center">
                {loading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"/> : "XÁC NHẬN MUA HÀNG (COD)"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default function LandingPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <main className="relative bg-background">
      <UrgencyElements />
      <StickyHeader onOrder={() => setModalOpen(true)} />
      <HeroSection onOrder={() => setModalOpen(true)} />
      <SocialProof />
      <CoreValue />
      <PainPoint />
      <VisualDemo />
      <Ingredients />
      <Gallery onZoom={setLightboxSrc} />
      <ApplicationGuide />
      <ComparisonTable />
      <ExpertEndorsement />
      <FeedbackWall onZoom={setLightboxSrc} />
      <FAQ />
      <Pricing onOrder={() => setModalOpen(true)} />
      <TrustBadges />
      <Footer />
      <OrderModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </main>
  );
}
