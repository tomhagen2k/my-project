"use client";

import { useState } from "react";
import { X, CheckCircle, Package } from "lucide-react";
import { useOrder } from "@/context/OrderContext";

export default function OrderModal() {
  const { isModalOpen, closeModal } = useOrder();
  const [step, setStep] = useState<"form" | "success">("form");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  if (!isModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep("success");
    }, 1500);
  };

  const price = 524000;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div
        className="absolute inset-0"
        onClick={closeModal}
      ></div>

      <div className="relative bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex-none p-5 border-b border-gray-100 flex items-center justify-between bg-white z-10">
          <h2 className="text-xl font-bold text-gray-900">
            {step === "form" ? "Hoàn Tất Đặt Hàng" : "Đặt Hàng Thành Công"}
          </h2>
          <button
            onClick={closeModal}
            className="p-2 bg-gray-100 text-gray-500 hover:text-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 bg-gray-50/50">
          {step === "form" ? (
            <form id="orderForm" onSubmit={handleSubmit} className="space-y-6">
              {/* Product Info */}
              <div className="bg-white p-4 rounded-2xl border border-pink-100/50 shadow-sm flex gap-4">
                <div className="w-20 h-20 bg-pink-50 rounded-xl overflow-hidden flex-none">
                  <img src="/images/e29dd27d-3a95-46ba-8ab3-75d6d16b5914.jpeg" alt="d'Alba Sun Cream" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">Kem chống nắng nâng tông da d'Alba Waterfull Tone-up Sun Cream</h3>
                  <div className="text-pink-500 font-bold mt-1">{price.toLocaleString("vi-VN")}đ</div>
                  <div className="text-gray-400 text-xs line-through">816.000đ</div>
                </div>
              </div>

              {/* Quantity */}
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                <span className="font-medium text-gray-700">Số lượng:</span>
                <div className="flex items-center gap-3 bg-gray-50 p-1 rounded-full">
                  <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm text-gray-600">-</button>
                  <span className="w-8 text-center font-semibold text-gray-900">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm text-gray-600">+</button>
                </div>
              </div>

              {/* Customer Info */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-200 focus:border-pink-500 outline-none transition-all" placeholder="Nhập họ và tên của bạn" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-200 focus:border-pink-500 outline-none transition-all" placeholder="Nhập số điện thoại" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ nhận hàng</label>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-pink-200">
                      <option value="">Tỉnh/Thành phố</option>
                      <option value="HN">Hà Nội</option>
                      <option value="HCM">TP. Hồ Chí Minh</option>
                    </select>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-pink-200">
                      <option value="">Quận/Huyện</option>
                      <option value="1">Quận 1</option>
                      <option value="2">Quận 2</option>
                    </select>
                  </div>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-200 focus:border-pink-500 outline-none transition-all" placeholder="Số nhà, Tên đường, Phường/Xã" />
                </div>
              </div>
            </form>
          ) : (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Đặt hàng thành công!</h3>
              <p className="text-gray-500 mb-6 px-4">
                Cảm ơn bạn đã đặt hàng. Đội ngũ d'Alba sẽ liên hệ với bạn qua số điện thoại trong vòng 15 phút tới để xác nhận đơn hàng.
              </p>
              <div className="bg-gray-50 p-4 rounded-xl w-full border border-gray-100 flex items-center gap-4 text-left">
                <Package className="text-pink-400" />
                <div>
                  <div className="text-sm text-gray-500">Mã đơn hàng</div>
                  <div className="font-bold text-gray-900">#DALBA{Math.floor(Math.random() * 10000)}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {step === "form" && (
          <div className="flex-none p-5 border-t border-gray-100 bg-white z-10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 font-medium">Tổng thanh toán:</span>
              <span className="text-2xl font-bold text-pink-500">{(price * quantity).toLocaleString("vi-VN")}đ</span>
            </div>
            <button
              form="orderForm"
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-500 to-coral-400 hover:from-pink-600 hover:to-coral-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "XÁC NHẬN ĐẶT HÀNG"
              )}
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">Thanh toán khi nhận hàng (COD)</p>
          </div>
        )}
      </div>
    </div>
  );
}
