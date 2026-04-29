"use client";

import { motion } from "framer-motion";

export default function VisualDemo() {
  return (
    <section className="py-16 bg-[#fafafa]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            CHẠM LÀ MÁT - TÁN LÀ MƯỚT
          </h2>
          <p className="text-gray-600 md:text-lg">Trải nghiệm chất kem mỏng nhẹ, tan nhanh như nước trên da</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative organic-shape overflow-hidden shadow-2xl aspect-video w-full bg-black/5"
        >
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/Kem Dưỡng Ẩm Beyond Angel  Aqua Moisture Cream 150ml.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
          
          {/* Overlay Text for Demo */}
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <p className="text-white text-xl md:text-2xl font-bold">Thẩm thấu tức thì, không gây bết dính</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
