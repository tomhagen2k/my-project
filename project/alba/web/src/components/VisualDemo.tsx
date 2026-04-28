"use client";

import { motion } from "framer-motion";

export default function VisualDemo() {
  return (
    <section className="py-20 bg-pink-50/30">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Hiệu Quả Nâng Tông Tức Thì
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Trải nghiệm chất kem mỏng nhẹ, thấm nhanh không bết dính. Da sáng hồng rạng rỡ ngay từ lần chạm đầu tiên.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full aspect-video object-cover"
          >
            <source src="/images/dAlba Official Kem chống nắng nâng tông da Waterfull Tone-up Sun.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-8">
            <h3 className="text-white text-xl lg:text-2xl font-bold">
              Thách thức nắng hè - Da rạng rỡ tự nhiên
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
