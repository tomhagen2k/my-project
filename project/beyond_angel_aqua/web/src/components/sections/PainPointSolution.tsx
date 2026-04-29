"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PainPointSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            DA KHÔ CĂNG, BONG TRÓC & MỆT MỎI?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khi da mất nước, hàng rào bảo vệ suy yếu dẫn đến tình trạng lão hóa sớm và xỉn màu. 
            Kem Dưỡng Beyond Angel Aqua là giải pháp phục hồi độ ẩm tức thì.
          </p>
        </div>

        <div className="flex flex-col md:flex-row rounded-[40px] overflow-hidden shadow-2xl bg-[#f8fbff] border border-blue-50">
          {/* Before */}
          <div className="flex-1 relative aspect-square md:aspect-auto md:h-[600px]">
            <Image 
              src="/images/ai/before_after.png" 
              alt="Da khô sạm" 
              fill 
              className="object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold text-lg tracking-widest uppercase shadow-lg">TRƯỚC</span>
            </div>
          </div>
          
          {/* After Text Content */}
          <div className="flex-1 p-10 md:p-16 flex flex-col justify-center relative">
            {/* Background Image After */}
            <div className="absolute inset-0 opacity-10">
               <Image src="/images/ai/before_after.png" alt="Da căng bóng" fill className="object-cover object-right" />
            </div>
            
            <div className="relative z-10">
              <span className="inline-block bg-[#4bb3e3] text-white px-6 py-2 rounded-full font-bold text-lg tracking-widest uppercase shadow-lg mb-8">SAU 2 TUẦN</span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Làn Da Ẩm Mượt <br/>
                <span className="text-[#4bb3e3]">Căng Bóng Rạng Rỡ</span>
              </h3>
              <ul className="space-y-5">
                <li className="flex items-center text-lg text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-[#4bb3e3] font-bold">✓</div>
                  Phục hồi màng lipid bảo vệ da
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-[#4bb3e3] font-bold">✓</div>
                  Ngậm nước căng đầy, xóa mờ nếp nhăn li ti
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-[#4bb3e3] font-bold">✓</div>
                  Làm dịu tức thì tình trạng ửng đỏ, căng rát
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
