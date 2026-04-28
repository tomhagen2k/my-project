"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { productData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-b from-brand-light to-brand-cream">
      <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <div className="inline-block bg-brand-green-dark/10 text-brand-green-dark px-3 py-1 rounded-full text-xs font-bold mb-4">
            {productData.name}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-4">
            Bảo Vệ Toàn Diện <br/>
            <span className="text-brand-green-dark">Dịu Nhẹ Làn Da</span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
            {productData.shortDesc}
          </p>
          <a href="#dat-hang" className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white text-lg font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all animate-pulse">
            NHẬN ƯU ĐÃI NGAY
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 md:order-2 relative aspect-square md:aspect-auto md:h-[500px]"
        >
          <Image
            src={productData.gallery[0]}
            alt={productData.name}
            fill
            className="object-cover rounded-3xl shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
