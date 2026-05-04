"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    { q: 'Sản phẩm có gây kích ứng cho da nhạy cảm không?', a: 'Sản phẩm hoàn toàn an toàn và được thiết kế không gây kích ứng, làm dịu da tức thì, phù hợp với mọi loại da kể cả da nhạy cảm.' },
    { q: 'Hạn sử dụng của sản phẩm là bao lâu?', a: 'Hạn sử dụng là 36 tháng kể từ ngày sản xuất. Thông tin ngày sản xuất được in rõ ràng trên thân chai.' },
    { q: 'Tôi có thể dùng kem như mặt nạ ngủ được không?', a: 'Rất tốt! Bạn có thể dùng kem thoa một lớp dày hơn bình thường 2-3 lần/tuần trước khi ngủ (để qua đêm) để cấp ẩm sâu và phục hồi da mạnh mẽ.' },
    { q: 'Chính sách đổi trả như thế nào?', a: 'Chúng tôi hỗ trợ đổi trả miễn phí trong vòng 7 ngày theo đúng quy định nếu hàng còn nguyên vẹn, chưa qua sử dụng hoặc có lỗi từ nhà sản xuất.' }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-center">Câu Hỏi Thường Gặp</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <button 
                className="w-full px-6 py-4 flex justify-between items-center text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-bold text-lg">{faq.q}</span>
                {openIdx === idx ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIdx === idx && (
                <div className="px-6 py-4 bg-white text-slate-600 border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
