"use client";

import { motion } from "framer-motion";

export default function ApplicationGuide() {
  const steps = [
    {
      num: "1",
      title: "Làm Sạch Da",
      desc: "Sử dụng trên làn da đã được làm sạch và cân bằng sau bước tinh chất (Serum/Ampoule)."
    },
    {
      num: "2",
      title: "Thoa Đều Kem",
      desc: "Lấy một lượng kem vừa đủ (cỡ hạt đậu) thoa đều lên toàn bộ khuôn mặt và cổ."
    },
    {
      num: "3",
      title: "Vỗ Nhẹ & Thư Giãn",
      desc: "Vỗ nhẹ để dưỡng chất thẩm thấu. Nếu dùng làm mặt nạ ngủ, thoa lớp dày hơn và để qua đêm 2-3 lần/tuần."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f0f9ff]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">HƯỚNG DẪN SỬ DỤNG</h2>
          <p className="text-lg text-gray-600">3 bước đơn giản để làn da căng mọng nước</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-blue-100 rounded-full z-0"></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center flex-1 z-10 px-4 mb-10 md:mb-0"
            >
              <div className="w-24 h-24 rounded-full bg-white border-8 border-[#e0f4ff] shadow-lg flex items-center justify-center mb-6">
                <span className="text-4xl font-black text-[#4bb3e3]">{step.num}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
