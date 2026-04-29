"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOption: number;
}

const OPTIONS = [
  { id: 0, title: "Xanh Fullbox 150ml", price: 165000, oldPrice: 209000, discount: 21, image: "/images/option/option1.jpeg" },
  { id: 1, title: "Xanh 150ml x 2", price: 355000, oldPrice: 399000, discount: 11, image: "/images/option/option2.jpeg" },
];

export default function OrderModal({ isOpen, onClose, defaultOption }: OrderModalProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [selectedOpt, setSelectedOpt] = useState(defaultOption);
  const [quantity, setQuantity] = useState(1);

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");

  useEffect(() => {
    if (isOpen) {
      setStatus("idle");
      setSelectedOpt(defaultOption);
      setQuantity(1);
    }
  }, [isOpen, defaultOption]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  const currentOption = OPTIONS[selectedOpt] || OPTIONS[0];
  const totalPrice = currentOption.price * quantity;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleOverlayClick}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header Fixed */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white/80 backdrop-blur-md z-10 sticky top-0">
            <h2 className="text-xl font-bold text-gray-800">Hoàn Tất Đặt Hàng</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors bg-gray-50 hover:bg-gray-100 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body Scrollable */}
          <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle size={80} className="text-[#4bb3e3] mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Đặt hàng thành công!</h3>
                <p className="text-gray-600">
                  Cảm ơn bạn! Đội ngũ Beyond sẽ liên hệ với bạn qua số <b>{phone}</b> trong thời gian sớm nhất để xác nhận đơn hàng.
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 w-full py-4 bg-[#4bb3e3] text-white rounded-full font-bold shadow-lg shadow-[#4bb3e3]/30"
                >
                  ĐÓNG
                </button>
              </div>
            ) : (
              <form id="order-form" onSubmit={handleSubmit} className="space-y-6">
                {/* Options Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">CHỌN SẢN PHẨM</label>
                  <div className="space-y-3">
                    {OPTIONS.map((opt, idx) => (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedOpt(idx)}
                        className={`p-3 rounded-2xl border-2 cursor-pointer transition-all flex gap-4 ${
                          selectedOpt === idx ? "border-[#4bb3e3] bg-[#f0f9ff]" : "border-gray-100 bg-white hover:border-[#4bb3e3]/50"
                        }`}
                      >
                        <div className="w-20 h-20 relative rounded-xl overflow-hidden bg-gray-100 shrink-0">
                          <Image src={opt.image} alt={opt.title} fill className="object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                          <h4 className="font-bold text-gray-800 line-clamp-1">{opt.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[#e06c64] font-bold">{opt.price.toLocaleString("vi-VN")}₫</span>
                            <span className="text-gray-400 text-sm line-through">{opt.oldPrice.toLocaleString("vi-VN")}₫</span>
                          </div>
                          <span className="text-xs text-[#4bb3e3] font-semibold bg-[#e0f4ff] self-start px-2 py-0.5 rounded-md mt-1">Giảm {opt.discount}%</span>
                        </div>
                        <div className="flex items-center pr-2">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedOpt === idx ? "border-[#4bb3e3]" : "border-gray-300"}`}>
                            {selectedOpt === idx && <div className="w-3 h-3 bg-[#4bb3e3] rounded-full" />}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <label className="text-sm font-bold text-gray-700">SỐ LƯỢNG</label>
                  <div className="flex items-center bg-white border border-gray-200 rounded-full overflow-hidden">
                    <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50">-</button>
                    <span className="w-10 text-center font-semibold text-gray-800">{quantity}</span>
                    <button type="button" onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50">+</button>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="space-y-4 pt-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider block border-t border-gray-100 pt-6">THÔNG TIN NHẬN HÀNG</label>
                  
                  <div>
                    <input
                      required
                      type="text"
                      placeholder="Họ và tên của bạn"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4bb3e3]/50 focus:border-[#4bb3e3] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      required
                      type="tel"
                      placeholder="Số điện thoại"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4bb3e3]/50 focus:border-[#4bb3e3] transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <select required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4bb3e3]/50 text-gray-700">
                      <option value="">Tỉnh/Thành</option>
                      <option value="HN">Hà Nội</option>
                      <option value="HCM">TP. Hồ Chí Minh</option>
                      <option value="DN">Đà Nẵng</option>
                    </select>
                    <select required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4bb3e3]/50 text-gray-700">
                      <option value="">Quận/Huyện</option>
                      <option value="1">Quận 1</option>
                      <option value="3">Quận 3</option>
                      <option value="BT">Bình Thạnh</option>
                    </select>
                  </div>
                  <div>
                    <input
                      required
                      type="text"
                      placeholder="Địa chỉ chi tiết (Số nhà, tên đường, phường/xã)"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4bb3e3]/50 focus:border-[#4bb3e3] transition-all"
                    />
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Footer Fixed */}
          {status !== "success" && (
            <div className="p-5 border-t border-gray-100 bg-white/90 backdrop-blur-md z-10 sticky bottom-0">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 font-medium">Tổng thanh toán:</span>
                <span className="text-2xl font-black text-[#e06c64]">{totalPrice.toLocaleString("vi-VN")}₫</span>
              </div>
              <button
                type="submit"
                form="order-form"
                disabled={status === "submitting"}
                className="w-full py-4 bg-gradient-to-r from-[#4bb3e3] to-[#89CFF0] hover:to-[#4bb3e3] text-white rounded-full font-bold text-lg shadow-lg shadow-[#4bb3e3]/30 transition-all flex items-center justify-center transform active:scale-[0.98]"
              >
                {status === "submitting" ? (
                  <><Loader2 className="animate-spin mr-2" /> ĐANG XỬ LÝ...</>
                ) : (
                  "XÁC NHẬN ĐẶT HÀNG"
                )}
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
