"use client";

import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Leaf } from "lucide-react";

export default function ValueProposition() {
  const values = [
    {
      icon: <Droplets className="w-8 h-8 text-[#4bb3e3]" />,
      title: "Cấp Ẩm 24H",
      desc: "Giữ nước tại các tầng biểu bì"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#e06c64]" />,
      title: "0% Kích Ứng",
      desc: "Lành tính cho mọi loại da"
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "20.000 Giờ",
      desc: "Nuôi dưỡng từ thực vật Ulleung"
    }
  ];

  return (
    <section className="py-12 bg-white relative -mt-6 z-20">
      <div className="container mx-auto px-4">
        <div className="glass rounded-[32px] p-6 md:p-10 shadow-xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center border-4 border-white shadow-md">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
