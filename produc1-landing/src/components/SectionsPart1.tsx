"use client";

import { useOrder } from "@/context/OrderContext";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Section1_StickyHeader() {
  const { openModal } = useOrder();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-[0_8px_32px_0_rgba(20,184,166,0.1)]">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/assets/image/logo.png" alt="Beyond Logo" width={100} height={30} className="object-contain" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-teal-900 font-medium text-sm">
            <a href="#thong-tin" className="hover:text-teal-500 transition-colors">THÔNG TIN</a>
            <a href="#phan-hoi" className="hover:text-teal-500 transition-colors">PHẢN HỒI</a>
            <a href="#khuyen-mai" className="hover:text-teal-500 transition-colors">KHUYẾN MÃI</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={openModal}
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-full shadow-lg shadow-teal-500/30 animate-pulse hover:scale-105 transition-transform"
            >
              MUA NGAY
            </button>
            <button
              onClick={openModal}
              className="md:hidden px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-full shadow-md text-sm animate-pulse"
            >
              MUA NGAY
            </button>
            <button className="md:hidden text-teal-900 p-1" onClick={() => setIsMenuOpen(true)}>
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Hamburger Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col p-6">
          <div className="flex justify-between items-center mb-8">
            <Image src="/assets/image/logo.png" alt="Beyond Logo" width={100} height={30} className="object-contain" />
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-500 p-2">
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-2xl font-bold text-teal-900">
            <a href="#thong-tin" onClick={() => setIsMenuOpen(false)}>THÔNG TIN</a>
            <a href="#phan-hoi" onClick={() => setIsMenuOpen(false)}>PHẢN HỒI</a>
            <a href="#khuyen-mai" onClick={() => setIsMenuOpen(false)}>KHUYẾN MÃI</a>
          </div>
        </div>
      )}
    </>
  );
}

export function Section2_Hero() {
  const { openModal } = useOrder();
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-b from-teal-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-4">
            Kem Dưỡng Ẩm Beyond Angel Aqua Moisture Cream 150ml
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-teal-950 leading-tight mb-4">
            Cấp Ẩm Sâu <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">24H</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Phục hồi màng lipid, làm dịu tức thì làn da mệt mỏi với phức hợp Tri-Sap và nguồn năng lượng thanh khiết từ đảo Ulleung.
          </p>
          <button
            onClick={openModal}
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-bold text-lg shadow-xl shadow-teal-500/40 hover:-translate-y-1 transition-transform animate-[wiggle_2s_infinite]"
          >
            NHẬN ƯU ĐÃI NGAY
          </button>
        </div>
        
        {/* Right: Media */}
        <div className="flex-1 relative w-full max-w-md mx-auto aspect-square md:aspect-[4/5] z-10">
          <div className="absolute inset-0 bg-teal-200/30 rounded-full blur-3xl" />
          <Image src="/assets/image/1.jpeg" alt="Beyond Angel Aqua Cream" fill className="object-contain drop-shadow-2xl z-10 hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </section>
  );
}

export function Section3_CoreValue() {
  const values = [
    { num: "+24h", text: "Độ ẩm mượt" },
    { num: "0%", text: "Kích ứng da" },
    { num: "3", text: "Loại nhựa cây" },
    { num: "2", text: "Loại Hyaluronic" },
  ];
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-[32px] bg-teal-50/50 border border-teal-100 text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-teal-600 mb-2">{v.num}</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{v.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Section4_VisualDemo() {
  return (
    <section className="py-16 bg-teal-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-900 mb-8">Trải Nghiệm Kết Cấu Thanh Mát</h2>
        <div className="relative aspect-[4/3] md:aspect-video rounded-[32px] overflow-hidden shadow-2xl bg-black">
          <video
            src="/assets/image/Kem Dưỡng Ẩm Beyond Angel  Aqua Moisture Cream 150ml.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg text-center px-4">
              Tan Chảy Trên Da <br/> <span className="text-teal-300">Nhẹ Như Nước</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section5_PainPointSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-900 mb-4">Làn Da Mệt Mỏi, Thiếu Nước?</h2>
        <p className="text-lg text-gray-600 mb-10">Beyond Angel Aqua mang đến sự thay đổi ngoạn mục nhờ khả năng phục hồi màng lipid tức thì.</p>
        
        <div className="relative rounded-[32px] overflow-hidden shadow-xl aspect-square md:aspect-[21/9] bg-gray-100">
           <Image src="/assets/ai/before_after_split_1777878244271.png" alt="Before and After" fill className="object-cover md:object-contain" />
           {/* Labels */}
           <div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white px-4 py-1 rounded-full text-sm font-bold">TRƯỚC</div>
           <div className="absolute top-4 right-4 bg-teal-500/80 backdrop-blur text-white px-4 py-1 rounded-full text-sm font-bold">SAU</div>
        </div>
      </div>
    </section>
  );
}

export function Section6_TechnologyIngredients() {
  const ingredients = [
    {
      title: "Tri-Sap Complex",
      desc: "Nhựa bạch dương, tre gai & nho cấp ẩm, làm dịu da.",
      img: "/assets/ai/ingredient_trisap_1777878260842.png"
    },
    {
      title: "Hyaluronic Acid x2",
      desc: "Cấp nước thanh lọc da, thúc đẩy tái tạo tế bào mới.",
      img: "/assets/ai/ingredient_ha_1777878275393.png"
    },
    {
      title: "Panthenol (B5)",
      desc: "Dưỡng ẩm làm dịu, phục hồi thương tổn, ngăn mất nước.",
      img: "/assets/ai/ingredient_panthenol_1777878293357.png"
    },
    {
      title: "Thực Vật Đảo Ulleung",
      desc: "Chiết xuất tinh khiết giàu dưỡng chất nuôi dưỡng da khỏe.",
      img: "/assets/ai/ingredient_ulleung_1777878309586.png"
    }
  ];

  return (
    <section id="thong-tin" className="py-20 bg-teal-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-teal-900 mb-12">Thành Phần Tinh Khiết Từ Thiên Nhiên</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((ing, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-teal-50 flex flex-col"
            >
              <div className="relative w-full h-64 bg-gray-50">
                <Image src={ing.img} alt={ing.title} fill className="object-contain p-2" />
              </div>
              <div className="p-6 text-center flex-1">
                <h3 className="text-xl font-bold text-teal-800 mb-2">{ing.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{ing.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Section7_LifestyleGallery() {
  const images = [
    "/assets/ai/lifestyle_1_1777878331574.png",
    "/assets/ai/lifestyle_2_1777878347762.png",
    "/assets/ai/lifestyle_3_1777878361927.png",
    "/assets/ai/lifestyle_4_1777878377996.png"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-teal-900 mb-12">Trải Nghiệm Beyond Angel Aqua Mỗi Ngày</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-[32px] overflow-hidden group">
              <Image src={img} alt={`Lifestyle ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
