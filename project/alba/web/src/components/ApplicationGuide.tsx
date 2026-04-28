"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Làm Sạch Da",
    desc: "Rửa mặt sạch và thực hiện các bước dưỡng da cơ bản của bạn.",
    icon: "💧"
  },
  {
    title: "Thoa Đều",
    desc: "Lấy một lượng kem vừa đủ, thoa đều lên mặt và cổ. Có thể dùng làm kem lót trang điểm.",
    icon: "✨"
  },
  {
    title: "Hoàn Thiện",
    desc: "Vỗ nhẹ để kem thẩm thấu hoàn toàn, mang lại làn da căng bóng và được bảo vệ tối đa.",
    icon: "🌟"
  }
];

export default function ApplicationGuide() {
  return (
    <section className="py-20 bg-pink-50/50">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Sử Dụng Dễ Dàng
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-pink-200 -z-10"></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl shadow-xl shadow-pink-100 mb-6 border-4 border-pink-50">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bước {idx + 1}: {step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
