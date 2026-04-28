"use client";

import { motion } from "framer-motion";

const images = [
  "/images/b79629c0-0338-413a-b809-6cc1b8f7d601.jpeg",
  "/images/7f9cff61-4f37-45da-be59-cbff7b63ec4b.jpeg",
  "/images/b630679f-db64-4ab5-bffd-0f29f5991981.jpeg",
  "/images/fb9969d5-e9ae-4659-b759-26897c26aaaa.jpeg",
  "/images/e3c5afda-efca-413f-b77d-a6ddbed7bb88.jpeg"
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Góc Nhìn Chân Thực
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Vẻ đẹp thanh lịch từ bao bì đến chất kem. d'Alba không chỉ là mỹ phẩm, mà là phong cách sống tinh tế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 ${
                idx === 0 ? "md:col-span-2 lg:col-span-2 aspect-video" : "aspect-square"
              }`}
            >
              <img 
                src={img} 
                alt={`d'Alba Sun Cream ${idx + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
