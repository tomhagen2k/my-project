import React from 'react';
import Image from 'next/image';

export default function Pricing({ onOrderClick }: { onOrderClick: (optionId: number) => void }) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-light/20" id="khuyen-mai">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-800">Ưu Đãi Đặc Biệt</h2>
          <p className="text-slate-600">Chọn gói phù hợp với bạn. Tiết kiệm hơn khi mua Combo!</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {/* Option 1 */}
          <div className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col relative overflow-hidden">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
              <Image src="/image/option/option1.jpeg" alt="Xanh Fullbox 150ml" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">Xanh Fullbox 150ml</h3>
            <div className="flex items-end justify-center gap-2 mb-6">
              <span className="text-4xl font-extrabold text-accent">165.000₫</span>
              <span className="text-lg text-gray-400 line-through mb-1">209.000₫</span>
            </div>
            <ul className="space-y-3 mb-8 text-slate-600 text-sm flex-1">
              <li className="flex items-center gap-2">✔️ Dung tích 150ml</li>
              <li className="flex items-center gap-2">✔️ Giảm 21% so với giá gốc</li>
            </ul>
            <button 
              onClick={() => onOrderClick(1)}
              className="w-full bg-slate-800 text-white py-4 rounded-xl font-bold hover:bg-slate-900 transition-colors"
            >
              CHỌN GÓI NÀY
            </button>
          </div>

          {/* Option 2 */}
          <div className="flex-1 bg-white rounded-3xl p-8 shadow-2xl border-2 border-accent flex flex-col relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 rounded-bl-xl font-bold text-sm z-10 shadow-md">
              BÁN CHẠY NHẤT
            </div>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
              <Image src="/image/option/option2.jpeg" alt="Xanh 150ml x 2" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">Combo Xanh 150ml x 2</h3>
            <div className="flex items-end justify-center gap-2 mb-6">
              <span className="text-4xl font-extrabold text-accent">355.000₫</span>
              <span className="text-lg text-gray-400 line-through mb-1">399.000₫</span>
            </div>
            <ul className="space-y-3 mb-8 text-slate-600 text-sm flex-1">
              <li className="flex items-center gap-2 font-bold text-accent">✔️ Mua 2 hộp siêu tiết kiệm</li>
              <li className="flex items-center gap-2">✔️ Dùng thỏa thích hoặc làm quà tặng</li>
              <li className="flex items-center gap-2">✔️ Miễn phí vận chuyển toàn quốc</li>
            </ul>
            <button 
              onClick={() => onOrderClick(2)}
              className="w-full bg-gradient-to-r from-accent to-orange-500 text-white py-4 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all animate-pulse shadow-accent/40"
            >
              MUA COMBO ƯU ĐÃI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
