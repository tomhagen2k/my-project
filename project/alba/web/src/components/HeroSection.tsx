"use client";

import { motion } from "framer-motion";
import { useOrder } from "@/context/OrderContext";
import { Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { openModal } = useOrder();

  return (
    <section id="info" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-pink-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-100/50 text-pink-600 text-sm font-semibold border border-pink-200/50">
              <Sparkles className="w-4 h-4" />
              <span>Kem chống nắng nâng tông da d'Alba Waterfull Tone-up Sun Cream SPF 50+</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              BẢO VỆ TOÀN DIỆN <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-coral-400">
                NÂNG TÔNG CĂNG BÓNG
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Kem chống nắng "3 trong 1" thuần chay hoàn hảo. Bảo vệ da khỏi tia cực tím với SPF 50+ PA++++, đồng thời làm lớp lót trang điểm mang lại làn da trắng hồng tự nhiên, rạng rỡ suốt ngày dài.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-coral-400 hover:from-pink-600 hover:to-coral-500 text-white font-bold rounded-2xl shadow-xl shadow-pink-500/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
              >
                NHẬN ƯU ĐÃI NGAY
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span>Cam kết chính hãng 100%</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/40 to-orange-100/40 rounded-full blur-3xl transform scale-110 -z-10"></div>
            
            <div className="relative aspect-[4/5] lg:aspect-square w-full max-w-md mx-auto">
              <img 
                src="/images/e29dd27d-3a95-46ba-8ab3-75d6d16b5914.jpeg" 
                alt="d'Alba Waterfull Tone-up Sun Cream"
                className="w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white/50 rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20"
              >
                <div className="font-black text-2xl text-pink-500">SPF 50+</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Bảo vệ tối đa</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
