"use client";

import React from "react";
import { useOrder } from "./OrderProvider";
import { ShieldCheck, RefreshCw, Box } from "lucide-react";

export const Pricing = () => {
  const { openModal } = useOrder();

  return (
    <section id="khuyen-mai" className="py-24 bg-gradient-to-b from-white to-nivea-light/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full font-bold text-sm mb-6 animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            ƯU ĐÃI GIỚI HẠN
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            Mua Ngay Để Nhận Ưu Đãi Tốt Nhất
          </h2>
          <p className="text-slate-600">Khuyến mãi chỉ áp dụng cho 100 khách hàng đầu tiên trong ngày hôm nay.</p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 relative">
          <div className="absolute top-0 right-0 bg-nivea-blue text-white font-bold text-xs py-1 px-8 translate-x-6 translate-y-4 rotate-45 shadow-md">
            BÁN CHẠY NHẤT
          </div>
          <div className="p-8 pb-0">
            <img src="/image/option/option1.webp" alt="NIVEA Soft 200ml" className="w-full h-64 object-contain" />
          </div>
          <div className="p-8 text-center bg-gradient-to-b from-transparent to-slate-50">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Kem Dưỡng NIVEA Soft (200 ml)</h3>
            <p className="text-slate-500 mb-6">Dung tích lớn, tiết kiệm tối đa, dùng cho cả gia đình</p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-2xl text-slate-400 line-through font-medium">229.000đ</span>
              <span className="text-5xl font-extrabold text-nivea-blue">197.000đ</span>
            </div>
            
            <button 
              onClick={openModal}
              className="w-full bg-nivea-blue hover:bg-blue-800 text-white font-bold py-5 rounded-2xl shadow-xl shadow-nivea-blue/30 transition-all text-lg mb-4"
            >
              ĐẶT HÀNG NGAY - CHỈ 197K
            </button>
            <p className="text-sm text-green-600 font-medium flex items-center justify-center gap-1">
              <ShieldCheck size={16} /> Miễn phí vận chuyển toàn quốc
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TrustGuarantees = () => {
  const trusts = [
    { icon: <ShieldCheck className="text-nivea-blue" size={40} />, title: "CAM KẾT CHÍNH HÃNG", desc: "Hoàn tiền 111% nếu phát hiện hàng giả, hàng nhái." },
    { icon: <RefreshCw className="text-nivea-blue" size={40} />, title: "ĐỔI TRẢ TRONG 7 NGÀY", desc: "Hỗ trợ đổi trả miễn phí trong vòng 7 ngày đầu." },
    { icon: <Box className="text-nivea-blue" size={40} />, title: "KIỂM TRA HÀNG", desc: "Được kiểm tra hàng trước khi thanh toán nhận hàng." }
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trusts.map((t, i) => (
            <div key={i} className="flex items-center gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-white p-3 rounded-2xl shadow-sm shrink-0">
                {t.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">{t.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
