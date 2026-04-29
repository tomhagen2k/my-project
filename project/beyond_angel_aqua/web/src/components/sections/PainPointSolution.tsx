"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PainPointSolution() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="feedback">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            DA KHÔ CĂNG, BONG TRÓC & MỆT MỎI?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Khi da mất nước, hàng rào bảo vệ suy yếu dẫn đến tình trạng lão hóa sớm và xỉn màu. 
            Kem Dưỡng Beyond Angel Aqua là giải pháp phục hồi độ ẩm tức thì.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white border border-blue-50"
        >
          {/* Comparison Image Container */}
          <div className="lg:w-7/12 relative aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden">
            <Image 
              src="/images/ai/before_after_new.png" 
              alt="So sánh trước và sau khi sử dụng Beyond Angel Aqua" 
              fill 
              className="object-cover"
              priority
            />
            {/* Labels */}
            <div className="absolute top-6 left-6">
              <span className="bg-black/40 backdrop-blur-md text-white px-5 py-1.5 rounded-full font-bold text-sm tracking-widest uppercase border border-white/20">
                TRƯỚC
              </span>
            </div>
            <div className="absolute top-6 right-6 text-right">
              <span className="bg-blue-500/80 backdrop-blur-md text-white px-5 py-1.5 rounded-full font-bold text-sm tracking-widest uppercase border border-blue-400/20">
                SAU 2 TUẦN
              </span>
            </div>
          </div>
          
          {/* Content Block */}
          <div className="lg:w-5/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-[#f8fbff] to-white relative">
            <div className="relative z-10">
              <div className="w-16 h-1 bg-[#4bb3e3] mb-8 rounded-full" />
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                Làn Da Ẩm Mượt <br/>
                <span className="text-[#4bb3e3]">Căng Bóng Rạng Rỡ</span>
              </h3>
              
              <ul className="space-y-6">
                {[
                  "Phục hồi màng lipid bảo vệ da",
                  "Ngậm nước căng đầy, xóa mờ nếp nhăn li ti",
                  "Làm dịu tức thì tình trạng ửng đỏ, căng rát"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-start text-lg text-gray-700"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1 text-[#4bb3e3] flex-shrink-0">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-8 border-t border-blue-100/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <div className="w-full h-full bg-blue-400" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    <span className="font-bold text-gray-900">1.200+</span> khách hàng đã thay đổi diện mạo
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
