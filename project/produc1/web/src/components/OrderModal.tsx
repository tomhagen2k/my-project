import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOption?: number | null;
}

export default function OrderModal({ isOpen, onClose, initialOption }: OrderModalProps) {
  const [step, setStep] = useState(1);
  const [option, setOption] = useState(initialOption || 1);
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); // Move to success step
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in slide-in-from-bottom-4">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b shrink-0">
          <h3 className="font-bold text-lg">{step === 1 ? 'Thông Tin Đặt Hàng' : 'Đặt Hàng Thành Công'}</h3>
          <button onClick={onClose} className="p-1 bg-gray-100 rounded-full hover:bg-gray-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-4 shrink">
          {step === 1 ? (
            <form id="orderForm" onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              <div className="space-y-3">
                <label className="font-semibold text-sm">Chọn Gói Sản Phẩm</label>
                <div 
                  className={`flex items-center gap-3 p-3 border-2 rounded-xl cursor-pointer transition-all ${option === 1 ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
                  onClick={() => setOption(1)}
                >
                  <div className="relative w-16 h-16 rounded-md overflow-hidden shrink-0">
                    <Image src="/image/option/option1.jpeg" alt="Option 1" fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">Xanh Fullbox 150ml</h4>
                    <div className="flex gap-2 items-center">
                      <span className="text-accent font-bold">165.000₫</span>
                      <span className="text-gray-400 text-xs line-through">209.000₫</span>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${option === 1 ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                    {option === 1 && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                  </div>
                </div>

                <div 
                  className={`flex items-center gap-3 p-3 border-2 rounded-xl cursor-pointer transition-all ${option === 2 ? 'border-accent bg-accent/5' : 'border-gray-200'}`}
                  onClick={() => setOption(2)}
                >
                  <div className="relative w-16 h-16 rounded-md overflow-hidden shrink-0">
                    <Image src="/image/option/option2.jpeg" alt="Option 2" fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm">Xanh 150ml x 2</h4>
                      <span className="bg-accent text-white text-[10px] px-1.5 py-0.5 rounded uppercase font-bold">Bán Chạy Nhất</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-accent font-bold">355.000₫</span>
                      <span className="text-gray-400 text-xs line-through">399.000₫</span>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${option === 2 ? 'border-accent bg-accent' : 'border-gray-300'}`}>
                    {option === 2 && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-sm">Số lượng:</span>
                <div className="flex items-center gap-3 border rounded-lg p-1">
                  <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 flex justify-center items-center bg-gray-100 rounded">-</button>
                  <span className="font-bold w-4 text-center">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 flex justify-center items-center bg-gray-100 rounded">+</button>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t">
                <input type="text" placeholder="Họ và Tên (*)" required className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none" />
                <input type="tel" placeholder="Số Điện Thoại (*)" required className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none" />
                <div className="flex gap-2">
                  <select required className="w-1/2 border rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none bg-white">
                    <option value="">Tỉnh/Thành</option>
                    <option value="HN">Hà Nội</option>
                    <option value="HCM">Hồ Chí Minh</option>
                  </select>
                  <select required className="w-1/2 border rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none bg-white">
                    <option value="">Quận/Huyện</option>
                    <option value="1">Quận 1</option>
                    <option value="2">Quận Đống Đa</option>
                  </select>
                </div>
                <input type="text" placeholder="Địa chỉ chi tiết (Số nhà, tên đường...)" required className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Đặt Hàng Thành Công!</h2>
              <p className="text-gray-600 mb-4">Mã đơn hàng: <strong>#882910</strong></p>
              <p className="text-sm text-gray-500">
                Cảm ơn bạn đã tin tưởng. Chuyên viên của chúng tôi sẽ gọi điện xác nhận trong vòng 15 phút tới.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t shrink-0">
          {step === 1 ? (
            <button form="orderForm" type="submit" className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg transition-colors">
              XÁC NHẬN ĐẶT HÀNG - {option === 1 ? (165000 * quantity).toLocaleString('vi-VN') : (355000 * quantity).toLocaleString('vi-VN')}₫
            </button>
          ) : (
            <button onClick={onClose} className="w-full bg-gray-200 text-gray-800 font-bold py-3.5 rounded-xl hover:bg-gray-300 transition-colors">
              Đóng Cửa Sổ
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
