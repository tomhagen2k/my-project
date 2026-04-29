"use client";

import { useOrder } from "@/components/OrderContext";
import Image from "next/image";

export default function TieredPricing() {
  const { openModal } = useOrder();

  const options = [
    {
      id: 0,
      title: "Xanh Fullbox 150ml",
      price: 165000,
      oldPrice: 209000,
      discount: 21,
      image: "/images/option/option1.jpeg",
      isPopular: true
    },
    {
      id: 1,
      title: "Combo Xanh 150ml x 2",
      price: 355000,
      oldPrice: 399000,
      discount: 11,
      image: "/images/option/option2.jpeg",
      isPopular: false
    }
  ];

  return (
    <section className="py-20 bg-[#f9fdfa]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
            CHỌN GÓI ƯU ĐÃI
          </h2>
          <p className="text-lg text-gray-600">Tiết kiệm hơn khi mua combo ngay hôm nay</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {options.map((opt, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-[40px] p-8 md:p-10 shadow-xl transition-transform hover:-translate-y-2 border-2 ${
                opt.isPopular ? 'border-[#4bb3e3] shadow-[#4bb3e3]/20' : 'border-transparent'
              }`}
            >
              {opt.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#4bb3e3] to-[#89CFF0] text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg">
                  BÁN CHẠY NHẤT
                </div>
              )}

              <div className="relative w-full aspect-square mb-8 rounded-[32px] overflow-hidden bg-gray-50 p-6">
                <Image src={opt.image} alt={opt.title} fill className="object-contain p-6 hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{opt.title}</h3>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-3xl font-black text-[#e06c64]">{opt.price.toLocaleString("vi-VN")}₫</span>
                  <span className="text-lg text-gray-400 line-through">{opt.oldPrice.toLocaleString("vi-VN")}₫</span>
                </div>
                <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm font-bold">
                  Tiết kiệm {opt.discount}%
                </span>
              </div>

              <button 
                onClick={() => openModal(opt.id)}
                className={`w-full py-5 rounded-full font-bold text-lg shadow-lg transition-all ${
                  opt.isPopular 
                    ? 'bg-gradient-to-r from-[#4bb3e3] to-[#89CFF0] text-white shadow-[#4bb3e3]/40 hover:shadow-[#4bb3e3]/60 hover:scale-105' 
                    : 'bg-white text-[#4bb3e3] border-2 border-[#4bb3e3] hover:bg-blue-50 hover:scale-105'
                }`}
              >
                MUA NGAY
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
