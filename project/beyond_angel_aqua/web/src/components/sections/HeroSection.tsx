"use client";

import { motion } from "framer-motion";
import { useOrder } from "@/components/OrderContext";
import Image from "next/image";

export default function HeroSection() {
  const { openModal } = useOrder();

  return (
    <section className="relative w-full pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#e0f4ff] to-white">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-[-10%] w-64 h-64 bg-[#4bb3e3]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-[-10%] w-72 h-72 bg-[#f28b82]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#4bb3e3]/10 text-[#4bb3e3] font-bold text-sm tracking-wide mb-6 border border-[#4bb3e3]/20">
                Kem Dưỡng Ẩm Beyond Angel Aqua Moisture Cream 150ml
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              DƯỠNG ẨM SÂU 24H <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4bb3e3] to-[#73c8ef]">
                PHỤC HỒI LÀN DA CĂNG BÓNG
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Giải pháp thanh lọc và làm dịu tức thì với phức hợp Tri-Sap Complex tự nhiên. Cho làn da ẩm và mềm mại với sự chăm sóc nhẹ nhàng.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button 
                onClick={() => openModal()}
                className="group relative px-8 py-5 bg-[#e06c64] text-white rounded-full font-black text-xl overflow-hidden shadow-2xl shadow-[#e06c64]/30 hover:scale-105 transition-all w-full md:w-auto"
              >
                <div className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-[-20deg] group-hover:translate-x-[400%] transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center">
                  NHẬN ƯU ĐÃI NGAY
                  <svg className="w-6 h-6 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </span>
              </button>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            className="flex-1 w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative aspect-square w-full organic-shape bg-white/40 p-4 shadow-xl border border-white backdrop-blur-sm">
              <div className="w-full h-full relative rounded-[32px] overflow-hidden">
                <Image 
                  src="/images/8.jpeg" 
                  alt="Kem Dưỡng Ẩm Beyond Angel Aqua Moisture Cream" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
