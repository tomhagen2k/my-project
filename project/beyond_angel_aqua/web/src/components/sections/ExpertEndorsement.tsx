"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExpertEndorsement() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-100">
          
          {/* Expert Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-md"
          >
            <div className="relative aspect-[3/4] w-full rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/images/ai/expert.png" 
                alt="Chuyên gia da liễu khuyên dùng" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Endorsement Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-sm font-bold text-[#4bb3e3] tracking-widest uppercase mb-4">Chứng Thực Chuyên Gia</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
              Khuyên dùng bởi các <br/> Bác sĩ Da Liễu hàng đầu
            </h3>
            
            <div className="relative mb-8">
              <span className="absolute -top-6 -left-6 text-6xl text-gray-200 font-serif leading-none opacity-50">"</span>
              <p className="text-xl md:text-2xl text-gray-700 font-medium italic leading-relaxed relative z-10 pl-6 border-l-4 border-[#4bb3e3]">
                Một làn da khỏe mạnh bắt đầu từ màng ẩm vững chắc. Beyond Angel Aqua không chỉ cấp nước mà còn phục hồi sâu từ bên trong với chiết xuất thực vật thuần khiết. Đây là liệu pháp dưỡng ẩm an toàn, dịu nhẹ mà tôi thường khuyên dùng cho mọi loại da, kể cả da nhạy cảm nhất.
              </p>
            </div>
            
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex text-[#facc15] gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
