import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function StickyHeader({ onOrderClick }: { onOrderClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-2 shadow-sm' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 max-w-5xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/image/logo.png" alt="Beyond Logo" width={100} height={30} className="object-contain" />
          </div>
          
          <nav className="hidden md:flex gap-8 items-center text-sm font-semibold tracking-wider">
            <a href="#thong-tin" className="hover:text-primary transition-colors">THÔNG TIN</a>
            <a href="#phan-hoi" className="hover:text-primary transition-colors">PHẢN HỒI</a>
            <a href="#khuyen-mai" className="hover:text-primary transition-colors">KHUYẾN MÃI</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={onOrderClick}
              className="bg-accent text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-orange-500 transition-all animate-pulse shadow-accent/50 text-sm"
            >
              MUA NGAY
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col p-6 animate-in fade-in">
          <div className="flex justify-between items-center mb-10">
            <Image src="/image/logo.png" alt="Beyond Logo" width={100} height={30} className="object-contain" />
            <button onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8" /></button>
          </div>
          <nav className="flex flex-col gap-6 text-2xl font-bold">
            <a href="#thong-tin" onClick={() => setIsMenuOpen(false)}>THÔNG TIN SẢN PHẨM</a>
            <a href="#phan-hoi" onClick={() => setIsMenuOpen(false)}>ĐÁNH GIÁ THỰC TẾ</a>
            <a href="#khuyen-mai" onClick={() => setIsMenuOpen(false)}>ƯU ĐÃI ĐẶC BIỆT</a>
          </nav>
        </div>
      )}
    </>
  );
}
