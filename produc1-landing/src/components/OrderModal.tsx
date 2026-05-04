"use client";

import { useOrder } from "@/context/OrderContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const OPTIONS = [
  {
    id: 0,
    title: "Xanh Fullbox 150ml",
    price: 165000,
    originalPrice: 209000,
    discount: "-21%",
    image: "/assets/image/option/option1.jpeg",
  },
  {
    id: 1,
    title: "Xanh 150ml x 2",
    price: 355000,
    originalPrice: 399000,
    discount: "-11%",
    image: "/assets/image/option/option2.jpeg",
  },
];

export default function OrderModal() {
  const { isModalOpen, closeModal, selectedOption, setSelectedOption } = useOrder();
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset state after close
      setTimeout(() => {
        setIsSuccess(false);
        setQuantity(1);
      }, 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setOrderId(Math.floor(Math.random() * 90000) + 10000 + "");
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="bg-white w-full max-w-md rounded-[32px] overflow-hidden flex flex-col max-h-[90vh] shadow-2xl"
          >
            {/* Header */}
            <div className="relative px-6 py-4 bg-teal-50 flex items-center justify-between shrink-0 border-b border-teal-100">
              <h3 className="text-xl font-bold text-teal-800">
                {isSuccess ? "Đặt Hàng Thành Công" : "Xác Nhận Đơn Hàng"}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-teal-100 rounded-full transition-colors text-teal-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto scrollbar-hide flex-1">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle className="w-20 h-20 text-teal-500 mb-4" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Cảm ơn bạn!</h4>
                  <p className="text-gray-600 mb-4">
                    Đơn hàng <span className="font-bold text-teal-600">#BYD{orderId}</span> của bạn đã được ghi nhận.
                  </p>
                  <p className="text-sm text-gray-500 bg-teal-50 p-4 rounded-2xl">
                    Chúng tôi sẽ gọi điện xác nhận trong vòng 15 phút tới. Bạn vui lòng chú ý điện thoại nhé!
                  </p>
                </div>
              ) : (
                <form id="order-form" onSubmit={handleSubmit} className="space-y-6">
                  {/* Product Selection */}
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-gray-700">Chọn Sản Phẩm</label>
                    <div className="space-y-2">
                      {OPTIONS.map((opt) => (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedOption(opt.id)}
                          className={`relative p-3 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                            selectedOption === opt.id
                              ? "border-teal-500 bg-teal-50/50"
                              : "border-gray-100 hover:border-teal-200"
                          }`}
                        >
                          <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                            <Image src={opt.image} alt={opt.title} fill className="object-cover" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-800 leading-tight">{opt.title}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-teal-600 font-bold">
                                {opt.price.toLocaleString("vi-VN")}đ
                              </span>
                              <span className="text-xs text-gray-400 line-through">
                                {opt.originalPrice.toLocaleString("vi-VN")}đ
                              </span>
                            </div>
                          </div>
                          {/* Radio visual */}
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedOption === opt.id ? 'border-teal-500' : 'border-gray-300'}`}>
                            {selectedOption === opt.id && <div className="w-2.5 h-2.5 bg-teal-500 rounded-full" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-2xl">
                    <span className="font-bold text-gray-700">Số lượng:</span>
                    <div className="flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-1">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="w-4 text-center font-bold">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="space-y-4">
                    <label className="block text-sm font-bold text-gray-700">Thông Tin Giao Hàng</label>
                    <input
                      required
                      type="text"
                      placeholder="Họ và tên"
                      className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-teal-500 focus:bg-white outline-none transition-colors"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Số điện thoại"
                      className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-teal-500 focus:bg-white outline-none transition-colors"
                    />
                    
                    {/* Dummy Dropdowns for Address */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <select required className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-teal-500 outline-none appearance-none cursor-pointer">
                          <option value="">Tỉnh/Thành</option>
                          <option value="hanoi">Hà Nội</option>
                          <option value="hcm">TP.HCM</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                      <div className="relative">
                        <select required className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-teal-500 outline-none appearance-none cursor-pointer">
                          <option value="">Quận/Huyện</option>
                          <option value="1">Quận 1</option>
                          <option value="caugiay">Cầu Giấy</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    
                    <textarea
                      required
                      placeholder="Địa chỉ chi tiết (Số nhà, đường...)"
                      rows={2}
                      className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-teal-500 focus:bg-white outline-none transition-colors resize-none"
                    />
                  </div>
                </form>
              )}
            </div>

            {/* Footer */}
            {!isSuccess && (
              <div className="p-4 border-t border-gray-100 bg-white shrink-0">
                <div className="flex justify-between items-center mb-4 px-2">
                  <span className="text-gray-500 font-medium">Tổng thanh toán:</span>
                  <span className="text-2xl font-extrabold text-teal-600">
                    {((OPTIONS[selectedOption]?.price || 0) * quantity).toLocaleString("vi-VN")}đ
                  </span>
                </div>
                <button
                  type="submit"
                  form="order-form"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-teal-500/30 flex justify-center items-center gap-2 transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "HOÀN TẤT ĐẶT HÀNG"
                  )}
                </button>
              </div>
            )}
            
            {isSuccess && (
               <div className="p-4 border-t border-gray-100 bg-white shrink-0">
                  <button
                  onClick={closeModal}
                  className="w-full py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-2xl font-bold text-lg transition-all"
                >
                  Đóng
                </button>
               </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
