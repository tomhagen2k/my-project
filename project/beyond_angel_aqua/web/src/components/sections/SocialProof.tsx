"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#4bb3e3] to-[#89CFF0] text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div className="flex-1 border-b md:border-b-0 md:border-r border-white/30 pb-6 md:pb-0 md:pr-8">
            <h3 className="text-4xl md:text-6xl font-black mb-2">95<span className="text-2xl">%</span></h3>
            <p className="text-lg md:text-xl font-medium opacity-90">Khách hàng nhận thấy da ẩm mượt hơn sau lần đầu sử dụng</p>
          </div>
          
          <div className="flex-1 pb-6 md:pb-0">
            <h3 className="text-4xl md:text-6xl font-black mb-2">10.000<span className="text-2xl">+</span></h3>
            <p className="text-lg md:text-xl font-medium opacity-90">Sản phẩm đã được bán ra trên toàn quốc</p>
          </div>

          <div className="flex-1 md:pl-8 md:border-l border-white/30">
            <div className="flex justify-center md:justify-start text-[#facc15] gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-lg md:text-xl font-medium opacity-90">Đánh giá 5 sao từ người dùng Shopee</p>
          </div>

        </div>
      </div>
    </section>
  );
}
