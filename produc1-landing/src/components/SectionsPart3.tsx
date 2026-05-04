"use client";

import { useOrder } from "@/context/OrderContext";
import { ShieldCheck, RefreshCcw, Box, Clock } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Section15_16_PricingUrgency() {
  const { openModal, setSelectedOption } = useOrder();
  
  const handleBuy = (id: number) => {
    setSelectedOption(id);
    openModal();
  };

  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 45, s: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
          }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="khuyen-mai" className="py-20 bg-teal-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/image/1.jpeg')] opacity-10 bg-cover bg-center blur-sm" />
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Urgency */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-full font-bold animate-pulse mb-6 shadow-xl shadow-red-500/20">
            <Clock className="w-5 h-5" />
            <span>ƯU ĐÃI KẾT THÚC SAU:</span>
            <span>{String(timeLeft.h).padStart(2, '0')}:{String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Gói Giải Pháp Cấp Ẩm Tối Ưu</h2>
          <p className="text-teal-200">Chỉ còn 15 suất quà tặng cuối cùng - Đặt hàng ngay!</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Option 1 */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col transform hover:-translate-y-2 transition-transform relative">
            <div className="absolute top-4 right-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full z-10 text-sm">
              GIẢM 21%
            </div>
            <div className="relative aspect-square w-full bg-gray-50 p-6">
              <Image src="/assets/image/option/option1.jpeg" alt="Xanh Fullbox 150ml" fill className="object-contain p-4" />
            </div>
            <div className="p-8 flex-1 flex flex-col text-center">
              <h3 className="text-2xl font-bold text-teal-900 mb-2">Xanh Fullbox 150ml</h3>
              <div className="flex justify-center items-end gap-2 mb-6">
                <span className="text-4xl font-extrabold text-teal-600">165.000đ</span>
                <span className="text-lg text-gray-400 line-through mb-1">209.000đ</span>
              </div>
              <button 
                onClick={() => handleBuy(0)}
                className="mt-auto w-full py-4 rounded-2xl font-bold text-teal-900 bg-teal-100 hover:bg-teal-200 transition-colors"
              >
                CHỌN GÓI NÀY
              </button>
            </div>
          </div>

          {/* Option 2 (Best Seller) */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col transform hover:-translate-y-2 transition-transform relative border-4 border-teal-400">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-teal-400 text-white font-black px-6 py-1.5 rounded-b-xl z-10 text-sm tracking-wider">
              MUA NHIỀU NHẤT
            </div>
            <div className="absolute top-4 right-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full z-10 text-sm">
              GIẢM 11%
            </div>
            <div className="relative aspect-square w-full bg-gray-50 p-6 pt-10">
              <Image src="/assets/image/option/option2.jpeg" alt="Xanh 150ml x 2" fill className="object-contain p-4" />
            </div>
            <div className="p-8 flex-1 flex flex-col text-center">
              <h3 className="text-2xl font-bold text-teal-900 mb-2">Xanh 150ml x 2 (Siêu Tiết Kiệm)</h3>
              <div className="flex justify-center items-end gap-2 mb-6">
                <span className="text-4xl font-extrabold text-teal-600">355.000đ</span>
                <span className="text-lg text-gray-400 line-through mb-1">399.000đ</span>
              </div>
              <button 
                onClick={() => handleBuy(1)}
                className="mt-auto w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 shadow-lg shadow-teal-500/30 transition-all animate-pulse"
              >
                MUA NGAY GÓI NÀY
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export function Section18_TrustGuarantees() {
  const guarantees = [
    { icon: ShieldCheck, title: "CAM KẾT CHÍNH HÃNG", desc: "Hoàn tiền 111% nếu phát hiện hàng giả, hàng nhái." },
    { icon: RefreshCcw, title: "ĐỔI TRẢ TRONG 7 NGÀY", desc: "Hỗ trợ đổi trả miễn phí trong vòng 7 ngày." },
    { icon: Box, title: "KIỂM TRA HÀNG", desc: "Được kiểm tra hàng trước khi thanh toán nhận hàng." },
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guarantees.map((g, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-teal-50 flex items-start gap-4">
              <div className="bg-teal-100 text-teal-600 p-3 rounded-2xl shrink-0">
                <g.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-teal-900 mb-1">{g.title}</h3>
                <p className="text-sm text-gray-600">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Section20_Footer() {
  return (
    <footer className="bg-teal-950 pt-16 pb-24 md:pb-8 text-teal-100/70 border-t border-teal-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-teal-800/50 pb-12">
          <div className="md:col-span-2 text-center md:text-left">
             <div className="inline-block bg-white p-2 rounded-xl mb-6">
                <Image src="/assets/image/logo.png" alt="Beyond Logo" width={120} height={40} className="object-contain" />
             </div>
             <p className="mb-6 max-w-sm mx-auto md:mx-0">Beyond Angel Aqua - Dòng sản phẩm chăm sóc da với độ ẩm hợp lý, không gây kích ứng trong khi vẫn giữ độ ẩm và làm dịu hiệu quả.</p>
             <div className="space-y-2">
               <p><strong className="text-white">Công ty TNHH BEYOND COSMETICS VIỆT NAM</strong></p>
               <p>Địa chỉ: Tòa nhà văn phòng, Quận Cầu Giấy, Thành phố Hà Nội</p>
             </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Liên Kết Nhanh</h4>
            <ul className="space-y-4">
              <li><a href="#thong-tin" className="hover:text-white transition-colors">Về sản phẩm</a></li>
              <li><a href="#phan-hoi" className="hover:text-white transition-colors">Đánh giá khách hàng</a></li>
              <li><a href="#khuyen-mai" className="hover:text-white transition-colors">Gói ưu đãi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo hành</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Tổng Đài Hỗ Trợ</h4>
            <div className="space-y-4">
              <div>
                 <div className="text-sm">Hotline (Miễn phí)</div>
                 <div className="text-2xl font-bold text-white">1900 8888</div>
              </div>
              <div>
                 <div className="text-sm">Email</div>
                 <div className="text-lg font-bold text-white">support@beyond.com.vn</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Beyond. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Chính sách bảo mật</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function StickyBottomBar() {
  const { openModal } = useOrder();
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur border-t border-gray-200 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <button 
        onClick={openModal}
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold text-lg shadow-lg shadow-teal-500/30 animate-[pulse_2s_infinite]"
      >
        NHẬN ƯU ĐÃI NGAY
      </button>
    </div>
  );
}
