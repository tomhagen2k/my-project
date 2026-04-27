"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TechIngredients() {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Bí Mật Từ Đại Dương & Thiên Nhiên
          </h2>
          <p className="text-lg text-gray-600">
            Sự kết hợp hoàn hảo giữa trang điểm và dưỡng da. Công nghệ kiềm dầu 2 tác động giúp da luôn ráo mịn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video bg-gray-50 flex items-center justify-center p-6">
              <img src="/images/2.jpeg" alt="Tảo Địa Trung Hải" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-bold">1</div>
                <h3 className="text-2xl font-bold text-gray-900">Tảo Địa Trung Hải</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Chiết xuất quý giá từ sâu dưới đại dương giúp kiểm soát lượng bã nhờn cực kỳ mạnh mẽ. Cơ chế khóa nước thông minh ngăn ngừa tình trạng đổ dầu mà không làm khô da.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video bg-gray-50 flex items-center justify-center p-6">
              <img src="/images/3.jpeg" alt="Màng Lọc Blue Shield 5.0" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-lg font-bold">2</div>
                <h3 className="text-2xl font-bold text-gray-900">Màng Lọc Blue Shield 5.0</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Công nghệ màng lọc thế hệ mới nhất của Mistine. Hạt phấn siêu mịn len lỏi lấp đầy lỗ chân lông, tạo lớp màng bảo vệ thoáng khí, giữ lớp nền tệp vào da suốt 36H.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const images = [
    "/images/gallery_1.png",
    "/images/gallery_2.png",
    "/images/gallery_3.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Thiết Kế Tinh Tế & Cao Cấp
          </h2>
          <p className="text-lg text-gray-600">Góc nhìn cận cảnh về sản phẩm và chất kem</p>
        </div>

        <div className="flex flex-col gap-6">
          <motion.div 
            className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-gray-50 relative shadow-xl"
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={images[activeIndex]} 
              alt="Mistine Premium Detail" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <div className="flex gap-4 justify-center mt-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-2xl overflow-hidden w-24 h-24 md:w-32 md:h-32 border-4 transition-all ${
                  activeIndex === idx ? "border-primary shadow-lg scale-110 z-10" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
