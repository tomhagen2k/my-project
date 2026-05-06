"use client";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, CheckCircle, ChevronDown, Star } from "lucide-react";
import Image from "next/image";

export function Header({ onOpenModal }: { onOpenModal: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphism py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Nivea Logo" width={100} height={40} className="object-contain" />
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-800">
          <a href="#thong-tin" className="hover:text-nivea-blue transition-colors">THÔNG TIN</a>
          <a href="#phan-hoi" className="hover:text-nivea-blue transition-colors">PHẢN HỒI</a>
          <a href="#khuyen-mai" className="hover:text-nivea-blue transition-colors">KHUYẾN MÃI</a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenModal}
            className="hidden md:flex animate-pulse bg-[#0032A0] text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-500/30 items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            MUA NGAY
          </button>

          <button
            onClick={onOpenModal}
            className="md:hidden animate-pulse bg-[#0032A0] text-white px-4 py-2 rounded-full font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-500/30 text-sm"
          >
            MUA NGAY
          </button>

          <button
            className="md:hidden text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 py-4 flex flex-col px-4 gap-4">
          <a href="#thong-tin" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-slate-50 rounded-lg">THÔNG TIN</a>
          <a href="#phan-hoi" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-slate-50 rounded-lg">PHẢN HỒI</a>
          <a href="#khuyen-mai" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-slate-50 rounded-lg">KHUYẾN MÃI</a>
        </div>
      )}
    </header>
  );
}

export function OrderModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-8 text-center flex flex-col items-center justify-center h-full">
            <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Đặt Hàng Thành Công!</h2>
            <p className="text-slate-600 mb-6">Mã đơn hàng của bạn là: <span className="font-bold text-blue-600">#NV{Math.floor(Math.random() * 10000)}</span></p>
            <p className="text-sm text-slate-500 mb-8">Chúng tôi sẽ gọi điện xác nhận trong vòng 15 phút tới. Hãy chú ý điện thoại nhé!</p>
            <button
              onClick={onClose}
              className="w-full py-3 bg-[#0032A0] text-white rounded-xl font-bold hover:bg-blue-800 transition-colors"
            >
              Tiếp Tục Mua Sắm
            </button>
          </div>
        ) : (
          <>
            <div className="p-6 pb-4 border-b border-slate-100 shrink-0">
              <h2 className="text-xl font-bold text-slate-800 text-center">ĐĂNG KÝ NHẬN ƯU ĐÃI</h2>
              <p className="text-sm text-center text-slate-500 mt-1">Hoàn tất form bên dưới để đặt hàng</p>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <form id="orderForm" onSubmit={handleSubmit} className="space-y-4">
                <div className="p-4 border-2 border-blue-100 rounded-xl bg-blue-50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">BÁN CHẠY NHẤT</div>
                  <div className="flex gap-4 items-center">
                    <Image src="/images/option/option1.webp" alt="Nivea Soft" width={60} height={60} className="rounded-lg object-cover" />
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm">Kem Dưỡng NIVEA Soft (200ml)</h3>
                      <div className="flex items-end gap-2 mt-1">
                        <span className="font-bold text-[#0032A0] text-lg">197.000đ</span>
                        <span className="text-xs text-slate-400 line-through mb-1">229.000đ</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <input required type="text" placeholder="Họ và tên của bạn" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                  <input required type="tel" placeholder="Số điện thoại" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none appearance-none bg-transparent">
                        <option value="">Tỉnh/Thành phố</option>
                        <option value="hn">Hà Nội</option>
                        <option value="hcm">TP. Hồ Chí Minh</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none appearance-none bg-transparent">
                        <option value="">Quận/Huyện</option>
                        <option value="q1">Quận 1</option>
                        <option value="bd">Ba Đình</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  <input required type="text" placeholder="Địa chỉ cụ thể (Số nhà, Tên đường...)" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
              </form>
            </div>

            <div className="p-4 border-t border-slate-100 shrink-0 bg-slate-50">
              <button
                form="orderForm"
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-[#0032A0] text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>HOÀN TẤT ĐẶT HÀNG <span className="text-blue-200">| 197.000đ</span></>
                )}
              </button>
              <p className="text-center text-xs text-slate-500 mt-3">Cam kết bảo mật thông tin khách hàng tuyệt đối</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
