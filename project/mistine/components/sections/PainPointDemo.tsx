"use client";

import React from "react";
import { motion } from "framer-motion";

export function VisualDemo() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Thực Tế Chứng Minh
          </h2>
          <p className="text-lg text-gray-600">Trải nghiệm chất kem mỏng nhẹ, dễ tán và che phủ hoàn hảo.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video bg-gray-100"
        >
          <img
            src="/images/foundation_demo.png"
            alt="Foundation application demo"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg text-center">
              Dễ Dàng Tán Đều - Không Khô Mốc
            </h3>
            <p className="text-white/90 text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
              Chất kem dạng lỏng (Liquid) với độ ẩm dồi dào, tan ngay vào da chỉ sau vài thao tác cơ bản.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function PainPoint() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Bạn Đang Mệt Mỏi Vì...
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lớp trang điểm mau trôi, đổ bóng dầu chỉ sau 2 tiếng? Hay những vết mụn, quầng thâm khiến bạn tự ti?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-gray-100 shadow-sm">
              <img src="/images/pain_point_before.png" alt="Da bóng dầu" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="text-gray-900 text-xl font-bold mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                VẤN ĐỀ THƯỜNG GẶP
              </div>
              <ul className="text-gray-600 space-y-2 font-medium">
                <li>• Da bóng nhẫy dầu, xỉn màu</li>
                <li>• Lớp nền mốc, sần sùi (Cakey)</li>
                <li>• Lộ rõ lỗ chân lông và khuyết điểm</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border-4 border-primary/20 shadow-xl">
              <img src="/images/pain_point_after.png" alt="Da hoàn hảo với Mistine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
              <div className="text-primary text-xl font-bold mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                GIẢI PHÁP TỪ MISTINE
              </div>
              <ul className="text-gray-800 space-y-2 font-medium">
                <li>✓ Da láng mịn, kiềm dầu suốt 36H</li>
                <li>✓ Lớp finish mỏng nhẹ, tự nhiên</li>
                <li>✓ Che phủ hoàn hảo 90% khuyết điểm</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
