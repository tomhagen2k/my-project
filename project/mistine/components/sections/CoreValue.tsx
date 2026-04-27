"use client";

import React from "react";
import { motion } from "framer-motion";

export function CoreValue() {
  const metrics = [
    { value: "36H", label: "Kiềm Dầu Liên Tục" },
    { value: "100%", label: "Không Trôi Nước" },
    { value: "96%", label: "Độ Ẩm Tự Nhiên" },
    { value: "0%", label: "Kích Ứng Da" },
  ];

  return (
    <section id="info" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Sự Khác Biệt Bằng Số Liệu Khoa Học
          </h2>
          <p className="text-lg text-gray-600">
            Không chỉ là lời hứa, Mistine chứng minh chất lượng qua những con số thực tế được kiểm nghiệm trên hàng ngàn khách hàng.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="text-5xl md:text-6xl font-black text-primary mb-4 group-hover:scale-110 transition-transform">
                {metric.value}
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-700 text-center uppercase tracking-wider">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
