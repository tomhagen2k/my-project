"use client";

import React, { useState } from "react";
import { X, CheckCircle, ShieldCheck } from "lucide-react";
import { useOrder } from "./OrderProvider";

export const OrderModal = () => {
  const { isOpen, closeModal, isSuccess, setSuccess } = useOrder();
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={closeModal}></div>
      
      <div className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur z-10">
          <h3 className="font-bold text-xl text-slate-800">Xác nhận đơn hàng</h3>
          <button onClick={closeModal} className="p-2 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle size={80} className="text-green-500 mb-6" />
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Đặt Hàng Thành Công!</h2>
              <p className="text-slate-600 mb-6">Cảm ơn bạn đã đặt hàng. Mã đơn hàng của bạn là <b>#NV{Math.floor(Math.random() * 100000)}</b>.<br/>Chúng tôi sẽ gọi điện xác nhận trong vòng 15 phút tới.</p>
              <button onClick={closeModal} className="w-full bg-slate-100 text-slate-800 font-bold py-3.5 rounded-2xl">
                Đóng
              </button>
            </div>
          ) : (
            <form id="orderForm" onSubmit={handleSubmit} className="space-y-6">
              
              {/* Product Selection */}
              <div className="bg-nivea-light/50 p-4 rounded-2xl border border-nivea-blue/10">
                <div className="flex gap-4 items-center">
                  <img src="/image/option/option1.webp" alt="Option 1" className="w-20 h-20 object-cover rounded-xl shadow-sm" />
                  <div className="flex-1">
                    <div className="inline-block px-2 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded mb-1">GIẢM 14%</div>
                    <h4 className="font-bold text-sm text-slate-800 leading-tight mb-1">Kem Dưỡng Mềm Da NIVEA Soft Crème (200 ml)</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-nivea-blue">197.000đ</span>
                      <span className="text-xs text-slate-400 line-through">229.000đ</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Họ và tên *</label>
                  <input required type="text" placeholder="Nhập họ và tên của bạn" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-nivea-blue/50 focus:border-nivea-blue transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Số điện thoại *</label>
                  <input required type="tel" placeholder="Nhập số điện thoại" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-nivea-blue/50 focus:border-nivea-blue transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Địa chỉ nhận hàng *</label>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <select required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-nivea-blue/50 appearance-none">
                      <option value="">Chọn Tỉnh/Thành</option>
                      <option value="1">Hà Nội</option>
                      <option value="2">TP. Hồ Chí Minh</option>
                    </select>
                    <select required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-nivea-blue/50 appearance-none">
                      <option value="">Chọn Quận/Huyện</option>
                      <option value="1">Quận 1</option>
                      <option value="2">Cầu Giấy</option>
                    </select>
                  </div>
                  <input required type="text" placeholder="Số nhà, tên đường, phường/xã..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-nivea-blue/50 focus:border-nivea-blue transition-all" />
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl flex items-start gap-3 text-sm text-slate-600">
                <ShieldCheck className="text-green-500 shrink-0" size={20} />
                <p>Cam kết bảo mật thông tin. Bạn được <b>kiểm tra hàng trước khi thanh toán</b>.</p>
              </div>

            </form>
          )}
        </div>

        {/* Footer */}
        {!isSuccess && (
          <div className="p-4 border-t border-slate-100 bg-white sticky bottom-0 z-10">
            <button 
              form="orderForm"
              type="submit"
              disabled={loading}
              className="w-full bg-nivea-blue hover:bg-blue-800 text-white font-bold py-4 rounded-2xl shadow-xl shadow-nivea-blue/20 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "HOÀN TẤT ĐẶT HÀNG"
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
