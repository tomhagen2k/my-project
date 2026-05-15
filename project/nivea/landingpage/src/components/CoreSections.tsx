"use client";

import React from "react";
import { motion } from "framer-motion";
import { useOrder } from "./OrderProvider";
import { Droplet, Shield, Clock } from "lucide-react";

export const Hero = () => {
  const { openModal } = useOrder();

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-nivea-light to-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-nivea-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-nivea-blue/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start order-2 md:order-1"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-nivea-blue/10 text-nivea-blue font-bold text-xs md:text-sm tracking-wide mb-6">
              KEM DƯỠNG MỀM DA NIVEA SOFT CRÈME (200 ML)
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Làn da ẩm mượt suốt năm, <br className="hidden md:block"/>
              <span className="text-gradient">Bất chấp hanh khô</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Giải pháp dưỡng ẩm tối ưu từ Đức với chiết xuất Dầu Jojoba & Vitamin E. Giúp tái tạo da khô ráp, mang lại sự mềm mịn màng căng mướt mà không gây bết dính.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={openModal}
                className="bg-nivea-blue hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-nivea-blue/30 animate-pulse transition-all flex items-center justify-center gap-2 text-lg"
              >
                NHẬN ƯU ĐÃI NGAY
              </button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm font-medium text-slate-500">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`/image/${i+1}.jpeg`} className="w-full h-full object-cover" alt="User" />
                  </div>
                ))}
              </div>
              <p>Hàng ngàn chị em đã tin dùng</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-square rounded-[3rem] bg-white shadow-2xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-nivea-light to-transparent opacity-50 mix-blend-multiply"></div>
              <img 
                src="/image/1.jpeg" 
                alt="NIVEA Soft Crème" 
                className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Floating badges */}
              <div className="absolute top-10 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl z-20 flex items-center gap-2">
                <span className="text-yellow-500">★</span>
                <span className="font-bold text-slate-800">4.9/5</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export const CoreValue = () => {
  const stats = [
    { icon: <Droplet className="text-nivea-blue" size={32} />, num: "100%", text: "Cấp Ẩm Sâu", desc: "Giữ da luôn mướt mịn" },
    { icon: <Shield className="text-nivea-blue" size={32} />, num: "0%", text: "Kích Ứng", desc: "An toàn cho da nhạy cảm" },
    { icon: <Clock className="text-nivea-blue" size={32} />, num: "24h", text: "Dưỡng Ẩm", desc: "Hiệu quả suốt cả ngày" },
  ];

  return (
    <section className="py-16 bg-white relative z-20 -mt-8 mx-4 md:mx-auto max-w-5xl rounded-[2.5rem] shadow-xl shadow-slate-200/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 rounded-full bg-nivea-light flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2">
              {s.icon}
            </div>
            <h3 className="text-3xl font-extrabold text-slate-800 mb-1">{s.num}</h3>
            <h4 className="text-lg font-bold text-nivea-blue mb-2">{s.text}</h4>
            <p className="text-slate-500 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const VisualDemo = () => {
  return (
    <section id="thong-tin" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
          Chất kem mềm mịn, <span className="text-nivea-blue">thẩm thấu tức thì</span>
        </h2>
        <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
          Công thức kem nhẹ nhàng hấp thu hiệu quả qua da, không gây cảm giác bết dính và bí da, mang lại trải nghiệm thư giãn ngay lần chạm đầu tiên.
        </p>
        
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-black">
          <video 
            src="/image/Kem Dưỡng Mềm Da NIVEA Soft Crème (200 ml) - 89050.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full aspect-video object-cover opacity-90"
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
            <p className="text-white text-xl font-medium tracking-wide">Trải nghiệm sự mềm mại đích thực</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const BeforeAfter = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            Đẩy lùi khô ráp, <span className="text-nivea-blue">đánh thức làn da</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Cải thiện tình trạng khô da, nứt nẻ và các hiện tượng bong tróc da mùa đông, làm mềm da một cách hiệu quả chỉ sau thời gian ngắn.
          </p>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl max-w-3xl mx-auto">
          <img src="/image/ai/nivea_before_after.png" alt="Before and After" className="w-full h-auto object-cover" />
          
          <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <p className="text-white font-bold text-sm">TRƯỚC: Da khô, nứt nẻ</p>
          </div>
          <div className="absolute bottom-6 right-6 bg-nivea-blue/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <p className="text-white font-bold text-sm">SAU: Ẩm mượt, rạng rỡ</p>
          </div>
        </div>
      </div>
    </section>
  );
};
