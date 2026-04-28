"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ExpertEndorsement() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-50/50 to-orange-50/50">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl border border-white flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-xl">
              <img 
                src="/ai_images/expert_dermatologist_1777387132826.png" 
                alt="Chuyên gia Da liễu" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <Quote className="w-16 h-16 text-pink-200" />
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Sự lựa chọn hoàn hảo cho làn da nhạy cảm.
            </h2>
            <p className="text-lg text-gray-600 italic">
              "Tôi luôn khuyên dùng d'Alba Waterfull Tone-up Sun Cream cho các khách hàng của mình. Không chỉ vì màng lọc UV quang phổ rộng xuất sắc, mà còn vì chiết xuất Nấm Truffle trắng giúp chống oxy hóa và duy trì độ ẩm cả ngày dài. Làn da của bạn không chỉ được bảo vệ, mà còn được nuôi dưỡng từ sâu bên trong."
            </p>
            <div>
              <div className="font-bold text-xl text-gray-900">Dr. Lee Soo Jin</div>
              <div className="text-pink-500 font-medium">Chuyên gia Da liễu - Viện Da liễu Seoul</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
