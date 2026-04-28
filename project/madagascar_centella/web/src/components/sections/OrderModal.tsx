"use client";
import { useState, useEffect } from "react";
import { productData } from "@/lib/data";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedComboId?: string;
  onSuccess: () => void;
}

export default function OrderModal({ isOpen, onClose, selectedComboId, onSuccess }: OrderModalProps) {
  const [comboId, setComboId] = useState(selectedComboId || productData.pricing[1].id);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedComboId) {
      setComboId(selectedComboId);
    }
  }, [selectedComboId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Giả lập API call
    setTimeout(() => {
      setLoading(false);
      onClose();
      onSuccess();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-3xl w-full max-w-md max-h-[90vh] flex flex-col shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Fixed */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white rounded-t-3xl z-10">
          <h2 className="text-xl font-bold text-brand-dark">Hoàn Tất Đặt Hàng</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200">
            X
          </button>
        </div>

        {/* Body Scrollable */}
        <div className="p-6 overflow-y-auto flex-1">
          <form id="orderForm" onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Chọn Sản Phẩm</label>
              <div className="space-y-2">
                {productData.pricing.map(combo => (
                  <label key={combo.id} className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${comboId === combo.id ? 'border-brand-orange bg-orange-50' : 'border-gray-200'}`}>
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="combo" 
                        value={combo.id} 
                        checked={comboId === combo.id}
                        onChange={() => setComboId(combo.id)}
                        className="w-4 h-4 text-brand-orange"
                      />
                      <div>
                        <div className="font-bold text-sm text-gray-800">{combo.name}</div>
                        <div className="text-xs text-gray-500">{combo.desc}</div>
                      </div>
                    </div>
                    <div className="font-bold text-brand-orange">{combo.price.toLocaleString('vi-VN')}đ</div>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Họ và Tên</label>
                <input required type="text" className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-brand-green-dark" placeholder="Nhập họ và tên..." />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Số Điện Thoại</label>
                <input required type="tel" className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-brand-green-dark" placeholder="09xxxx..." />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Địa Chỉ Giao Hàng</label>
                <div className="grid grid-cols-2 gap-2 mt-1 mb-2">
                  <select required className="p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm">
                    <option value="">Tỉnh/Thành</option>
                    <option value="HN">Hà Nội</option>
                    <option value="HCM">TP. Hồ Chí Minh</option>
                  </select>
                  <select required className="p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm">
                    <option value="">Quận/Huyện</option>
                    <option value="1">Quận 1</option>
                    <option value="2">Đống Đa</option>
                  </select>
                </div>
                <input required type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-brand-green-dark" placeholder="Số nhà, tên đường..." />
              </div>
            </div>
            
          </form>
        </div>

        {/* Footer Fixed */}
        <div className="p-4 border-t border-gray-100 sticky bottom-0 bg-white rounded-b-3xl">
          <button 
            type="submit" 
            form="orderForm"
            disabled={loading}
            className="w-full py-4 bg-brand-orange text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-orange-600 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? "ĐANG XỬ LÝ..." : "XÁC NHẬN ĐẶT HÀNG"}
          </button>
          <div className="text-center text-xs text-gray-400 mt-2">
            Thanh toán khi nhận hàng (COD)
          </div>
        </div>

      </div>
    </div>
  );
}
