"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Sản phẩm có dùng được cho da nhạy cảm không?",
    a: "Hoàn toàn được. Kem chống nắng d'Alba chứa 100% thành phần thuần chay, kết hợp với chiết xuất Rau Má (Centella Asiatica) giúp làm dịu da, rất an toàn và phù hợp cho cả làn da nhạy cảm nhất."
  },
  {
    q: "Kem chống nắng nâng tông d'Alba có bị vệt trắng không?",
    a: "Không. Đây là dòng kem lai vật lý & hóa học, kết cấu mỏng nhẹ thẩm thấu rất nhanh, giúp da trắng hồng tự nhiên mà không để lại vệt trắng hay cảm giác bết dính."
  },
  {
    q: "Sản phẩm có thể thay thế kem nền không?",
    a: "Sản phẩm có tác dụng 3 trong 1: chống nắng, dưỡng da và làm lót trang điểm. Với hiệu ứng nâng tone căng bóng glowy, bạn hoàn toàn có thể dùng d'Alba như một lớp nền mỏng nhẹ tự nhiên cho ngày thường."
  },
  {
    q: "Mất bao lâu để nhận được hàng?",
    a: "Thời gian giao hàng dự kiến từ 2-4 ngày làm việc. Chúng tôi sẽ gọi điện xác nhận đơn hàng ngay sau khi bạn đặt."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        
        {/* Social Proof Counter */}
        <div className="bg-gradient-to-r from-pink-500 to-coral-400 rounded-3xl p-8 lg:p-12 text-center text-white shadow-xl shadow-pink-200 mb-16 transform -rotate-1 hover:rotate-0 transition-transform">
          <div className="text-4xl lg:text-5xl font-black mb-2">12.500+</div>
          <div className="text-lg font-medium opacity-90">Khách hàng tin dùng và trải nghiệm</div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Câu Hỏi Thường Gặp
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${open === idx ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-gray-50/50"
                  >
                    <p className="p-6 pt-0 text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
