"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useOrder } from "./OrderProvider";

export const Header = () => {
  const { openModal } = useOrder();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 glassmorphism transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/image/logo.png" alt="NIVEA Logo" className="h-10 md:h-12 object-contain" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700">
            <a href="#thong-tin" className="hover:text-nivea-blue transition-colors">THÔNG TIN</a>
            <a href="#phan-hoi" className="hover:text-nivea-blue transition-colors">PHẢN HỒI</a>
            <a href="#khuyen-mai" className="hover:text-nivea-blue transition-colors">KHUYẾN MÃI</a>
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <button 
              onClick={openModal}
              className="bg-nivea-blue text-white px-5 md:px-8 py-2 md:py-3 rounded-full font-bold shadow-lg shadow-nivea-blue/30 animate-pulse hover:bg-blue-800 transition-colors text-sm md:text-base"
            >
              MUA NGAY
            </button>
            <button 
              className="md:hidden text-slate-700 p-1"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsMenuOpen(false)}>
        <div 
          className={`absolute top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-5 flex justify-end border-b border-slate-100">
            <button onClick={() => setIsMenuOpen(false)} className="text-slate-500">
              <X size={28} />
            </button>
          </div>
          <div className="p-6 flex flex-col gap-6 text-lg font-semibold text-slate-800">
            <a href="#thong-tin" onClick={() => setIsMenuOpen(false)}>Thông Tin Sản Phẩm</a>
            <a href="#phan-hoi" onClick={() => setIsMenuOpen(false)}>Phản Hồi Khách Hàng</a>
            <a href="#khuyen-mai" onClick={() => setIsMenuOpen(false)}>Khuyến Mãi Đặc Biệt</a>
            <button onClick={() => { setIsMenuOpen(false); openModal(); }} className="mt-4 bg-nivea-blue text-white py-4 rounded-2xl w-full">
              NHẬN ƯU ĐÁI NGAY
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src="/image/logo.png" alt="NIVEA Logo" className="h-12 mb-6 brightness-0 invert opacity-80" />
          <p className="text-sm leading-relaxed mb-4 max-w-sm">
            NIVEA - Thương hiệu chăm sóc da hàng đầu thế giới với hơn 100 năm kinh nghiệm, mang đến giải pháp dưỡng ẩm tối ưu cho mọi loại da.
          </p>
          <p className="font-semibold text-white">CÔNG TY TNHH NIVEA VIETNAM (Placeholder)</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase">Liên hệ</h4>
          <ul className="space-y-3 text-sm">
            <li>Hotline: <span className="text-white font-semibold">1900 xxxx</span></li>
            <li>Email: support@nivea-vn.placeholder</li>
            <li>Địa chỉ: Tầng 15, Tòa nhà Placeholder, Quận 1, TP. HCM</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase">Chính sách</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Chính sách đổi trả</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kiểm tra đơn hàng</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} NIVEA Vietnam. All rights reserved.
      </div>
    </footer>
  );
};

export const StickyBottomBar = () => {
  const { openModal } = useOrder();
  
  return (
    <div className="fixed bottom-0 left-0 w-full z-30 md:hidden bg-white/90 backdrop-blur-lg border-t border-slate-200 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 line-through">229.000đ</span>
          <span className="text-lg font-bold text-nivea-blue leading-none">197.000đ</span>
        </div>
        <button 
          onClick={openModal}
          className="flex-1 bg-gradient-to-r from-nivea-blue to-nivea-accent text-white py-3 rounded-full font-bold shadow-lg shadow-nivea-blue/30 animate-pulse text-sm"
        >
          NHẬN ƯU ĐÃI NGAY
        </button>
      </div>
    </div>
  );
};
