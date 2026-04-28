"use client";

import { motion } from "framer-motion";
import { Shield, Leaf, Sun } from "lucide-react";

const values = [
  {
    icon: <Sun className="w-8 h-8 text-pink-500" />,
    number: "SPF 50+",
    desc: "Chỉ số chống nắng tối đa, bảo vệ da khỏi tia UVA/UVB."
  },
  {
    icon: <Leaf className="w-8 h-8 text-pink-500" />,
    number: "100%",
    desc: "Thuần chay, thành phần thực vật nguyên chất an toàn."
  },
  {
    icon: <Shield className="w-8 h-8 text-pink-500" />,
    number: "37%",
    desc: "Vitamin C cung cấp dưỡng chất, bảo vệ tế bào da."
  }
];

export default function CoreValues() {
  return (
    <section className="py-16 bg-white relative -mt-10 z-20">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-50/50 p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-pink-50 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">{val.number}</h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[200px] mx-auto">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
