"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function PainPoint() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Giải Pháp Hoàn Hảo Cho Làn Da
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Bạn mệt mỏi với các loại kem chống nắng gây bí bách, để lại vệt trắng hay khiến da xỉn màu vào cuối ngày?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Nỗi đau */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-gray-50 rounded-[2rem] p-8 lg:p-12 border border-gray-100 relative overflow-hidden group w-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-6 text-gray-500">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Kem chống nắng thông thường</h3>
              <ul className="space-y-4">
                {[
                  "Gây bết dính, nặng mặt khi bôi dầy",
                  "Để lại vệt trắng kém tự nhiên",
                  "Da đổ dầu, xỉn màu xuống tone nhanh",
                  "Gây bít tắc lỗ chân lông, dễ lên mụn"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Giải pháp */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-gradient-to-br from-pink-50 to-orange-50 rounded-[2rem] p-8 lg:p-12 border border-pink-100 relative overflow-hidden shadow-xl shadow-pink-100/50 group w-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-pink-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">d'Alba Waterfull Tone-up</h3>
              <ul className="space-y-4">
                {[
                  "Kết cấu lỏng nhẹ, thấm nhanh ráo mịn",
                  "Nâng tông trắng hồng tự nhiên rạng rỡ",
                  "Dưỡng ẩm sâu, kiểm soát dầu thừa",
                  "Bảo vệ da 3 trong 1: Chống nắng, dưỡng da, lót trang điểm"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-800 font-medium">
                    <span className="text-pink-500 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
