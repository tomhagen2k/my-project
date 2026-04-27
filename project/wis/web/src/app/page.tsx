"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle, XCircle, ShieldCheck, Truck, ChevronDown, X, Clock, ThumbsUp, ShoppingCart, User, Phone, MapPin, Award } from "lucide-react";
import Image from "next/image";

// Sample Data for Reviews
const reviews = [
  {
    id: 1,
    name: "v*****3",
    rating: 5,
    date: "2024-09-03",
    variant: "Sữa Rửa Mặt Axit Ami",
    content: "Sữa rửa mặt dùng rất tốt, làm sạch da của tôi rất sạch sẽ, kem dưỡng da có tác dụng làm trắng da. Cảm ơn cửa hàng",
    media: [
      { type: "image", url: "/image_review/review1_image1.webp" },
      { type: "video", url: "/image_review/review1_video.mp4" }
    ]
  },
  {
    id: 2,
    name: "eg852hwfxj",
    rating: 5,
    date: "2024-08-20",
    variant: "Sữa Rửa Mặt Axit Ami",
    content: "Công suất lớn, có thể sử dụng lâu.Kiên trì sử dụng trong hai tháng, tôi cảm thấy làn da của tôi đã được cải thiện rất nhiều và làn da của tôi thân thiện với nước đã được cân bằng.",
    media: [
      { type: "image", url: "/image_review/review2_image1.webp" },
      { type: "image", url: "/image_review/review2_image2.webp" },
      { type: "image", url: "/image_review/review2_image3.webp" }
    ]
  },
  {
    id: 3,
    name: "bp3hqi3t3p",
    rating: 5,
    date: "2024-08-10",
    variant: "Sữa Rửa Mặt Axit Ami",
    content: "Công thức thành phần khoa học an toàn, sữa rửa mặt sử dụng thuận tiện, vệ sinh tốt, rửa mặt xong cũng không căng thẳng. Tôi rất hài lòng~",
    media: [
      { type: "image", url: "/image_review/review3_image1.webp" },
      { type: "image", url: "/image_review/review3_image2.webp" }
    ]
  }
];

const faqs = [
  { q: "Da nhạy cảm có dùng được không?", a: "Hoàn toàn dùng được. Sản phẩm chứa Axit Amin dịu nhẹ, độ pH cân bằng với làn da, không chứa cồn hay paraben gây kích ứng." },
  { q: "Một tuýp 100g dùng được bao lâu?", a: "Với dung tích 100g lớn, bạn có thể sử dụng đều đặn từ 2 - 3 tháng tùy theo lượng dùng mỗi ngày." },
  { q: "Sản phẩm có gây khô da sau khi rửa không?", a: "Không. Nhờ thành phần Axit Amin, sữa rửa mặt làm sạch sâu lỗ chân lông nhưng vẫn giữ lại lớp màng ẩm tự nhiên, không gây cảm giác khô căng hay rát da." },
  { q: "Thời gian giao hàng là bao lâu?", a: "Thời gian giao hàng từ 2-4 ngày làm việc tùy khu vực. Chúng tôi có chính sách kiểm tra hàng trước khi thanh toán." }
];

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("info");
  const [timeLeft, setTimeLeft] = useState(3600);
  const [selectedCombo, setSelectedCombo] = useState(2); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setIsSuccessOpen(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-sky-50 text-slate-800 font-sans overflow-x-hidden pb-20 md:pb-0">
      
      {/* 1. Sticky Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-2xl text-cyan-600">+WIS+</div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#info" className={`hover:text-cyan-600 transition-colors ${activeTab === 'info' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-slate-600'}`} onClick={() => setActiveTab('info')}>Thông tin</a>
            <a href="#feedback" className={`hover:text-cyan-600 transition-colors ${activeTab === 'feedback' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-slate-600'}`} onClick={() => setActiveTab('feedback')}>Phản hồi</a>
            <a href="#pricing" className={`hover:text-cyan-600 transition-colors ${activeTab === 'pricing' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-slate-600'}`} onClick={() => setActiveTab('pricing')}>Khuyến mãi</a>
          </nav>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:block bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-cyan-500/30 transition-transform active:scale-95 text-sm">
            MUA NGAY
          </button>
        </div>
      </header>

      <main className="pt-16 max-w-4xl mx-auto">
        
        {/* 2. Hero Section */}
        <section id="info" className="relative px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
          <motion.div className="flex-1 space-y-6 z-10" initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="space-y-2">
              <span className="inline-block bg-white/80 backdrop-blur-sm border border-cyan-200 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">
                Sữa rửa mặt +WIS+ làm sạch lỗ chân lông axit amin 100g
              </span>
              <div className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold tracking-wide ml-2">
                MỚI RA MẮT
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
              Da Sạch Sâu - Ẩm Mịn <br className="hidden md:block"/> <span className="text-cyan-500">Cùng Axit Amin</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-md">
              Công thức làm sạch dịu nhẹ với lớp bọt xốp mịn, cuốn trôi bã nhờn tận sâu lỗ chân lông mà không gây cảm giác khô căng hay rát da.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold py-4 px-8 rounded-full shadow-[0_8px_32px_0_rgba(249,115,22,0.4)] hover:shadow-[0_8px_32px_0_rgba(249,115,22,0.6)] transform hover:-translate-y-1 transition-all animate-pulse">
                NHẬN ƯU ĐÃI NGAY
              </button>
              <p className="text-sm text-slate-500 mt-3 flex items-center justify-center md:justify-start gap-1">
                <Clock size={14} /> Ưu đãi kết thúc sau: <span className="font-bold text-red-500">{formatTime(timeLeft)}</span>
              </p>
            </div>
          </motion.div>
          <motion.div className="flex-1 relative w-full max-w-sm mx-auto" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
             <div className="absolute inset-0 bg-cyan-200/50 rounded-full blur-3xl -z-10 transform scale-90"></div>
             <Image src="/image/1.jpeg" alt="Sữa rửa mặt WIS" width={500} height={500} className="w-full h-auto object-contain rounded-3xl mix-blend-multiply" />
          </motion.div>
        </section>

        {/* 3. Core Value Proposition */}
        <section className="px-4 py-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "100g", desc: "Dung tích lớn, tiết kiệm" },
              { num: "0%", desc: "Cồn, Paraben, kích ứng" },
              { num: "98%", desc: "Khách hàng hài lòng" },
              { num: "pH 5.5", desc: "Cân bằng hoàn hảo" }
            ].map((item, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-md border border-white/40 p-6 rounded-3xl text-center shadow-sm">
                <div className="text-3xl font-extrabold text-cyan-600 mb-2">{item.num}</div>
                <div className="text-sm font-medium text-slate-600">{item.desc}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* 4. Visual Demo */}
        <section className="px-4 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-8">
            <h2 className="text-3xl font-extrabold mb-4">Trải Nghiệm Lớp Bọt Sạch Sâu</h2>
            <p className="text-slate-600">Thách thức mọi bã nhờn và cặn trang điểm</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-black/5 w-full">
            <video 
              src="/image/video.mp4" 
              autoPlay loop muted playsInline 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white text-xl md:text-2xl font-bold">Làm sạch sâu - Dịu nhẹ mỗi ngày</h3>
            </div>
          </motion.div>
        </section>

        {/* 5. Pain Point & Solution */}
        <section className="px-4 py-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="grid md:grid-cols-2 gap-6 rounded-3xl overflow-hidden bg-white shadow-xl">
            <div className="p-8 md:p-12 bg-slate-100 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Da Bạn Đang Gặp Vấn Đề?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><XCircle className="text-red-500 flex-shrink-0" /> <span className="text-slate-600">Lỗ chân lông to, nhiều dầu nhờn</span></li>
                <li className="flex items-center gap-3"><XCircle className="text-red-500 flex-shrink-0" /> <span className="text-slate-600">Cảm giác khô rát, căng cứng sau khi rửa</span></li>
                <li className="flex items-center gap-3"><XCircle className="text-red-500 flex-shrink-0" /> <span className="text-slate-600">Da xỉn màu, thường xuyên nổi mụn</span></li>
              </ul>
            </div>
            <div className="p-8 md:p-12 bg-cyan-50 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-cyan-800">Giải Pháp Từ WIS Amino Acid</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><CheckCircle className="text-green-500 flex-shrink-0" /> <span className="text-slate-600">Sạch sâu bã nhờn, thông thoáng tức thì</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="text-green-500 flex-shrink-0" /> <span className="text-slate-600">Giữ màng ẩm tự nhiên, da mềm mịn</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="text-green-500 flex-shrink-0" /> <span className="text-slate-600">Ngăn ngừa mụn, làm sáng da</span></li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* 6. Technology & Ingredients */}
        <section className="px-4 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl font-extrabold mb-4">Khoa Học Chăm Sóc Da</h2>
            <p className="text-slate-600">Thành phần tinh túy tạo nên sự khác biệt</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col">
              <div className="h-56 bg-gradient-to-br from-cyan-50 to-blue-50 relative w-full">
                <Image src="/amino_acid.png" alt="Amino Acids" fill className="object-contain p-4" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-cyan-700 mb-2">Hệ Thống Axit Amin (Amino Acids)</h3>
                <p className="text-slate-600">Thành phần làm sạch thế hệ mới, lấy đi bụi bẩn và bã nhờn mà không phá vỡ hàng rào bảo vệ da, giúp da luôn giữ được độ ẩm tự nhiên, không hề khô rát.</p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col">
              <div className="h-56 bg-gradient-to-br from-blue-50 to-cyan-50 relative w-full">
                <Image src="/micro_foam.png" alt="Micro Foam Technology" fill className="object-contain p-4" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Công Nghệ Tạo Bọt Vi Mô</h3>
                <p className="text-slate-600">Cấu trúc bọt xốp mịn màng len lỏi sâu vào từng lỗ chân lông, cuốn trôi mọi cặn bã và lớp trang điểm nhẹ, trả lại làn da sạch sẽ láng mịn rạng ngời.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 7. Visual Product Gallery (chỉ ảnh sản phẩm, tách riêng ảnh giải thưởng) */}
        <section className="px-4 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-8">
            <h2 className="text-3xl font-extrabold mb-4">Góc Nhìn Chân Thực</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['2.jpeg', '3.jpeg', '6.jpg', '8.jpeg'].map((img, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                <Image src={`/image/${img}`} alt={`WIS Gallery ${i+1}`} fill className="object-contain p-2" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7b. Giải Thưởng & Chứng Nhận Uy Tín (tách từ Gallery) */}
        <section className="px-4 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Award size={18} /> Uy Tín Quốc Tế
            </div>
            <h2 className="text-3xl font-extrabold mb-4">Giải Thưởng & Chứng Nhận</h2>
            <p className="text-slate-600">Thương hiệu hàng đầu được công nhận toàn cầu</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="relative rounded-3xl overflow-hidden shadow-lg bg-white border border-amber-100 hover:shadow-xl transition-shadow">
              <Image src="/image/7.jpeg" alt="Giải thưởng WIS" width={600} height={600} className="w-full h-auto object-contain" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="relative rounded-3xl overflow-hidden shadow-lg bg-white border border-amber-100 hover:shadow-xl transition-shadow">
              <Image src="/image/9.jpeg" alt="Bằng sáng chế WIS" width={600} height={600} className="w-full h-auto object-contain" />
            </motion.div>
          </div>
        </section>

        {/* 8. Application & Guide */}
        <section className="px-4 py-16 bg-white/50 rounded-3xl mx-4 my-8 backdrop-blur-sm border border-white/60 shadow-sm">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl font-extrabold mb-4">4 Bước Rạng Rỡ Mỗi Ngày</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Làm ướt", desc: "Rửa mặt bằng nước ấm để lỗ chân lông mở ra." },
              { step: 2, title: "Tạo bọt", desc: "Lấy một lượng vừa đủ và xoa đều tạo bọt mịn." },
              { step: 3, title: "Massage", desc: "Massage nhẹ nhàng lên mặt theo hình xoắn ốc." },
              { step: 4, title: "Rửa sạch", desc: "Rửa lại bằng nước sạch và lau khô bằng khăn mềm." }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="text-center relative">
                <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-4 border-white shadow-sm z-10 relative">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-cyan-100 -z-0"></div>}
              </motion.div>
            ))}
          </div>
        </section>

        {/* 9. Comparison Table */}
        <section className="px-4 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl font-extrabold mb-4">Sự Khác Biệt Rõ Rệt</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="p-4 md:p-6 bg-slate-50 border-b w-1/3 text-slate-500 font-bold">Tiêu chí</th>
                  <th className="p-4 md:p-6 bg-cyan-50 border-b w-1/3 text-cyan-700 font-bold border-l border-cyan-100 text-center">Sữa Rửa Mặt +WIS+</th>
                  <th className="p-4 md:p-6 bg-slate-50 border-b w-1/3 text-slate-500 font-bold border-l border-slate-100 text-center">Sản Phẩm Thường</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Thành phần chính", "Axit Amin dịu nhẹ", "Chất tạo bọt nhân tạo mạnh"],
                  ["Cảm giác sau rửa", "Ẩm mượt, mềm mại", "Khô rát, căng cứng"],
                  ["Độ pH", "pH 5.5 cân bằng", "pH cao, tính kiềm mạnh"],
                  ["Phù hợp", "Mọi loại da (kể cả nhạy cảm)", "Da khỏe"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0">
                    <td className="p-4 md:p-6 font-medium text-slate-700">{row[0]}</td>
                    <td className="p-4 md:p-6 bg-cyan-50/50 border-l border-cyan-100 text-center font-semibold text-cyan-700">
                      <div className="flex flex-col items-center gap-1">
                        <CheckCircle size={20} className="text-cyan-500 hidden md:block" />
                        {row[1]}
                      </div>
                    </td>
                    <td className="p-4 md:p-6 border-l border-slate-100 text-center text-slate-500">
                      <div className="flex flex-col items-center gap-1">
                        <XCircle size={20} className="text-slate-300 hidden md:block" />
                        {row[2]}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </section>

        {/* 10. Expert Endorsement */}
        <section className="px-4 py-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl overflow-hidden shadow-xl border border-cyan-100 flex flex-col md:flex-row">
            <div className="md:w-2/5 relative h-96 md:h-auto">
              <Image src="/expert.png" alt="Chuyên gia da liễu Dr. Emily Carter" fill className="object-cover object-top" />
            </div>
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">"Sự lựa chọn hoàn hảo bảo vệ hàng rào da"</h3>
              <p className="text-slate-600 mb-6 italic leading-relaxed text-lg">
                "Nhiều người nghĩ rằng rửa mặt phải có cảm giác sạch bong kin kít mới là tốt. Thực tế, điều đó phá vỡ hàng rào bảo vệ da tự nhiên của bạn. Tôi luôn khuyên các bệnh nhân của mình sử dụng sữa rửa mặt có gốc Axit Amin như WIS. Nó làm sạch sâu bã nhờn, bụi bẩn nhưng vẫn để lại một màng ẩm mượt tuyệt vời, giúp da cân bằng, khỏe mạnh và hạn chế tối đa việc nổi mụn."
              </p>
              <div>
                <p className="font-bold text-cyan-800 text-xl">Dr. Emily Carter</p>
                <p className="text-sm text-cyan-600 font-medium">Chuyên gia Da Liễu Quốc Tế</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 11. Feedback Wall & 12. Counters */}
        <section id="feedback" className="px-4 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2 text-yellow-400">
               <span className="text-4xl font-extrabold text-slate-800 mr-2">4.9/5</span>
               {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={28} />)}
            </div>
            <p className="text-slate-600 font-medium text-lg">Đã có 10,000+ khách hàng tin dùng và để lại đánh giá tích cực</p>
          </motion.div>
          
          <div className="grid gap-6">
            {reviews.map((review) => (
              <motion.div key={review.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-bold">
                      <User size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{review.name}</p>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(review.rating)].map((_, idx) => <Star key={idx} fill="currentColor" size={14} />)}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-400 text-right">
                    <p>{review.date}</p>
                    <p className="mt-1 hidden md:block">Phân loại: {review.variant}</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-6 text-base leading-relaxed">{review.content}</p>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {review.media.map((media, idx) => (
                    <div key={idx} className="flex-shrink-0 w-28 h-28 relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                      {media.type === 'image' ? (
                        <Image src={media.url} alt={`Review ${review.id} media`} fill className="object-cover" />
                      ) : (
                        <video src={media.url} className="w-full h-full object-cover" controls={true} muted playsInline />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 13. FAQ Section */}
        <section className="px-4 py-12 max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl font-extrabold mb-4">Câu Hỏi Thường Gặp</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                  <button onClick={() => setIsOpen(!isOpen)} className="w-full px-6 py-5 flex items-center justify-between font-bold text-left text-slate-800 hover:bg-slate-50 transition-colors">
                    {faq.q}
                    <ChevronDown className={`transition-transform text-cyan-600 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 14. Tiered Pricing & 15. Urgency */}
        <section id="pricing" className="px-4 py-16 bg-gradient-to-b from-cyan-50 to-white rounded-[3rem] mx-2 shadow-inner border border-cyan-100/50 mt-12 mb-20 md:mb-0">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-800">Chọn Ưu Đãi Của Bạn</h2>
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-bold text-sm md:text-base animate-pulse">
              🔥 Chỉ còn 15 suất quà tặng cuối cùng trong ngày!
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Combo 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl flex flex-col mt-4 md:mt-8">
              <h3 className="text-xl font-bold text-slate-800 text-center mb-2">Dùng Thử</h3>
              <p className="text-center text-slate-500 text-sm mb-6">1 Tuýp 100g</p>
              <div className="text-center mb-8 pb-6 border-b border-slate-100">
                <span className="text-4xl font-extrabold text-cyan-600">149k</span>
                <span className="text-slate-400 line-through text-sm ml-2">250k</span>
              </div>
              <ul className="text-sm text-slate-600 space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-green-500 flex-shrink-0" /> Miễn phí vận chuyển</li>
                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-green-500 flex-shrink-0" /> Dùng được ~2 tháng</li>
              </ul>
              <button onClick={() => { setSelectedCombo(1); setIsModalOpen(true); }} className="w-full py-4 rounded-full font-bold text-cyan-600 bg-cyan-50 hover:bg-cyan-100 transition-colors">
                CHỌN MUA
              </button>
            </motion.div>

            {/* Combo 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="bg-gradient-to-b from-cyan-500 to-cyan-600 rounded-[2rem] p-1 shadow-2xl flex flex-col relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap uppercase tracking-wide">
                Bán Chạy Nhất
              </div>
              <div className="bg-white rounded-[1.85rem] p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-cyan-800 text-center mb-2 mt-2">Chăm Sóc Đều Đặn</h3>
                <p className="text-center text-slate-500 text-sm mb-6">2 Tuýp 100g</p>
                <div className="text-center mb-8 pb-6 border-b border-slate-100">
                  <span className="text-5xl font-extrabold text-cyan-600">269k</span>
                  <span className="text-slate-400 line-through text-sm ml-2">500k</span>
                </div>
                <ul className="text-sm text-slate-600 space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 font-bold text-slate-800"><CheckCircle size={20} className="text-red-500 flex-shrink-0" /> Tiết kiệm ngay 29k</li>
                  <li className="flex items-center gap-3"><CheckCircle size={20} className="text-green-500 flex-shrink-0" /> Miễn phí vận chuyển</li>
                  <li className="flex items-center gap-3"><CheckCircle size={20} className="text-green-500 flex-shrink-0" /> Dùng được ~4 tháng</li>
                </ul>
                <button onClick={() => { setSelectedCombo(2); setIsModalOpen(true); }} className="w-full py-4 rounded-full font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-lg">
                  MUA NGAY
                </button>
              </div>
            </motion.div>

            {/* Combo 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl flex flex-col mt-4 md:mt-8">
              <h3 className="text-xl font-bold text-slate-800 text-center mb-2">Siêu Tiết Kiệm</h3>
              <p className="text-center text-slate-500 text-sm mb-6">3 Tuýp 100g</p>
              <div className="text-center mb-8 pb-6 border-b border-slate-100">
                <span className="text-4xl font-extrabold text-cyan-600">359k</span>
                <span className="text-slate-400 line-through text-sm ml-2">750k</span>
              </div>
              <ul className="text-sm text-slate-600 space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 font-bold text-slate-800"><CheckCircle size={20} className="text-red-500 flex-shrink-0" /> Mua 3 giá sỉ tốt nhất</li>
                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-green-500 flex-shrink-0" /> Miễn phí vận chuyển</li>
                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-green-500 flex-shrink-0" /> Dùng được ~6 tháng</li>
              </ul>
              <button onClick={() => { setSelectedCombo(3); setIsModalOpen(true); }} className="w-full py-4 rounded-full font-bold text-cyan-600 bg-cyan-50 hover:bg-cyan-100 transition-colors">
                CHỌN MUA
              </button>
            </motion.div>
          </div>
        </section>

        {/* 17. Trust Badges & 18. Logistics */}
        <section className="px-4 py-12 pb-24 md:pb-12">
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center"><ShieldCheck size={32} /></div>
              <p className="text-sm font-bold text-slate-700">Chính hãng 100%</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><Truck size={32} /></div>
              <p className="text-sm font-bold text-slate-700">Kiểm tra khi nhận</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center"><ThumbsUp size={32} /></div>
              <p className="text-sm font-bold text-slate-700">Đổi trả 7 ngày</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-sm border border-slate-100 bg-white p-4">
             <div className="flex items-center gap-4 text-slate-600 text-sm font-medium mb-2 justify-center">
                <span>Đóng gói cẩn thận chống sốc 3 lớp</span>
                <span>•</span>
                <span>Giao hàng toàn quốc siêu tốc</span>
             </div>
             <div className="h-40 w-full bg-slate-100 rounded-2xl relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=800&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-40"></div>
                 <div className="z-10 flex gap-4">
                    <span className="px-4 py-2 bg-white/80 rounded-lg shadow-sm font-bold text-slate-700 backdrop-blur-sm">Giao Hàng Tiết Kiệm</span>
                    <span className="px-4 py-2 bg-white/80 rounded-lg shadow-sm font-bold text-slate-700 backdrop-blur-sm">Viettel Post</span>
                 </div>
             </div>
          </div>
        </section>

      </main>

      {/* 20. Footer */}
      <footer className="bg-slate-800 text-slate-300 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="text-2xl font-extrabold text-white mb-2">+WIS+</div>
              <p className="text-xs text-slate-400 italic mb-4">"Khoa học chăm sóc da, trao gửi vẻ đẹp thật"</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Công Ty TNHH Phân Phối Mỹ Phẩm WIS Việt Nam<br />
                <span className="text-xs italic text-slate-500">(Cập nhật địa chỉ chính thức)</span>
              </p>
            </div>
            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Liên hệ CSKH</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-cyan-400 flex-shrink-0" />
                  <span>Hotline: <a href="tel:19006868" className="text-cyan-400 hover:text-cyan-300 font-semibold">1900-6868</a></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 text-base">✉</span>
                  <span>Email: <a href="mailto:support@wisvietnam.com" className="text-cyan-400 hover:text-cyan-300">support@wisvietnam.com</a></span>
                </li>
                <li className="text-xs text-slate-500 italic">Hỗ trợ từ 8:00 - 22:00 hàng ngày</li>
              </ul>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Liên kết nhanh</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#info" className="hover:text-cyan-400 transition-colors">→ Về sản phẩm</a></li>
                <li><a href="#feedback" className="hover:text-cyan-400 transition-colors">→ Đánh giá khách hàng</a></li>
                <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">→ Ưu đãi hôm nay</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">→ Chính sách đổi trả</a></li>
              </ul>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} +WIS+ Vietnam. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-300 transition-colors">Chính sách bảo mật</a>
              <span>·</span>
              <a href="#" className="hover:text-slate-300 transition-colors">Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Buy Button */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 p-4 z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
         <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold py-3.5 rounded-full shadow-lg transform active:scale-95 transition-all">
            NHẬN ƯU ĐÃI NGAY
         </button>
      </div>

      {/* 16. Integrated Order Form (Modal) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={() => setIsModalOpen(false)}></div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden relative z-10"
            >
              {/* Header Fixed */}
              <div className="relative px-6 py-5 border-b border-slate-100 bg-cyan-50 flex justify-between items-center shrink-0">
                <h3 className="text-xl font-bold text-cyan-800 flex items-center gap-2">
                  <ShoppingCart size={22} /> Đặt Hàng Nhanh
                </h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 bg-white hover:bg-slate-100 rounded-full text-slate-500 transition-colors shadow-sm">
                  <X size={20} />
                </button>
              </div>
              
              {/* Body Scroll */}
              <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
                <form id="orderForm" onSubmit={handleOrderSubmit} className="space-y-6">
                  {/* Combo Selection */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">1. Chọn Ưu Đãi</label>
                    <div className="space-y-3">
                      {[
                        { id: 1, label: "1 Tuýp Dùng Thử", price: "149.000đ" },
                        { id: 2, label: "2 Tuýp Chăm Sóc (Bán Chạy)", price: "269.000đ" },
                        { id: 3, label: "3 Tuýp Giá Sỉ", price: "359.000đ" }
                      ].map(combo => (
                        <label key={combo.id} className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-colors ${selectedCombo === combo.id ? 'border-cyan-500 bg-cyan-50 shadow-sm' : 'border-slate-100 hover:border-cyan-200'}`}>
                          <div className="flex items-center gap-3">
                            <input type="radio" name="combo" checked={selectedCombo === combo.id} onChange={() => setSelectedCombo(combo.id)} className="w-5 h-5 text-cyan-600 focus:ring-cyan-500 border-slate-300" />
                            <span className="font-bold text-slate-800">{combo.label}</span>
                          </div>
                          <span className="font-extrabold text-cyan-700 text-lg">{combo.price}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="space-y-4">
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">2. Thông tin nhận hàng</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><User size={20} className="text-slate-400" /></div>
                      <input type="text" required placeholder="Họ và tên của bạn" className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-white outline-none transition-all font-medium" />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Phone size={20} className="text-slate-400" /></div>
                      <input type="tel" required placeholder="Số điện thoại liên hệ" className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-white outline-none transition-all font-medium" />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><MapPin size={20} className="text-slate-400" /></div>
                      <input type="text" required placeholder="Địa chỉ chi tiết (Số nhà, đường...)" className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-white outline-none transition-all font-medium" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                         <select required className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:bg-white outline-none appearance-none text-slate-700 font-medium font-sans">
                           <option value="" disabled selected>Tỉnh/Thành</option>
                           <option value="HN">Hà Nội</option>
                           <option value="HCM">TP. Hồ Chí Minh</option>
                           <option value="DN">Đà Nẵng</option>
                         </select>
                         <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                      <div className="relative">
                         <select required className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:bg-white outline-none appearance-none text-slate-700 font-medium font-sans">
                           <option value="" disabled selected>Quận/Huyện</option>
                           <option value="Q1">Quận 1</option>
                           <option value="CG">Cầu Giấy</option>
                         </select>
                         <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Footer Fixed */}
              <div className="p-5 border-t border-slate-100 bg-white shrink-0">
                <button type="submit" form="orderForm" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xl py-4 rounded-2xl shadow-[0_8px_24px_rgba(6,182,212,0.3)] hover:shadow-[0_12px_28px_rgba(6,182,212,0.4)] transform hover:-translate-y-0.5 transition-all">
                  XÁC NHẬN ĐẶT HÀNG
                </button>
                <p className="text-center text-xs text-slate-400 mt-4 font-medium"><ShieldCheck size={14} className="inline mr-1" /> Thông tin của bạn được bảo mật tuyệt đối</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 19. Post-Purchase Experience (Success Modal) */}
      <AnimatePresence>
        {isSuccessOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={() => setIsSuccessOpen(false)}></div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white w-full max-w-sm rounded-[2rem] p-8 text-center shadow-2xl relative z-10">
              <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Đặt Hàng Thành Công!</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Cảm ơn bạn đã tin tưởng WIS. Đơn hàng của bạn đã được ghi nhận. Chuyên viên của chúng tôi sẽ gọi điện xác nhận trong vòng <span className="font-bold text-cyan-600">15 phút</span> tới. Vui lòng để ý điện thoại nhé!
              </p>
              <button onClick={() => setIsSuccessOpen(false)} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-4 rounded-xl transition-colors">
                Hoàn tất
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
