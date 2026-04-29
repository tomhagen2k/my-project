"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "Sản phẩm có dùng được cho da nhạy cảm không?",
      a: "Có, thành phần chiết xuất từ thiên nhiên lành tính với công thức 0% kích ứng, được kiểm nghiệm da liễu an toàn cho cả làn da nhạy cảm nhất."
    },
    {
      q: "Hạn sử dụng của sản phẩm là bao lâu?",
      a: "Hạn sử dụng là 36 tháng kể từ ngày sản xuất. Ngày sản xuất và hạn sử dụng chi tiết được in trên thân chai."
    },
    {
      q: "Bao lâu thì có hiệu quả?",
      a: "Bạn sẽ cảm nhận ngay làn da dịu mát và ẩm mượt sau lần sử dụng đầu tiên, và thấy rõ hiệu quả phục hồi hàng rào bảo vệ da, da căng mướt lâu dài sau 2 tuần sử dụng đều đặn."
    },
    {
      q: "Tôi có thể dùng sản phẩm này làm mặt nạ ngủ được không?",
      a: "Hoàn toàn được. Bạn có thể thoa lớp kem dày hơn bình thường vào buổi tối trước khi ngủ 2-3 lần/tuần để cấp nước sâu và làm dịu da khẩn cấp."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-lg text-gray-600">Giải đáp thắc mắc để bạn yên tâm sử dụng</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border-2 rounded-[24px] overflow-hidden transition-colors duration-300 ${openIdx === idx ? 'border-[#4bb3e3]' : 'border-gray-100 hover:border-blue-100'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-bold text-lg text-gray-800 pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`text-[#4bb3e3] shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 bg-[#fcfdfd]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
