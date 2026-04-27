"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/Button";

// Tỉnh/Thành mockup data (can be replaced with real API later)
const provinces = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Cần Thơ"];
const districts: Record<string, string[]> = {
  "Hà Nội": ["Ba Đình", "Hoàn Kiếm", "Tây Hồ", "Cầu Giấy", "Đống Đa"],
  "Hồ Chí Minh": ["Quận 1", "Quận 3", "Quận 10", "Tân Bình", "Bình Thạnh"],
};

export const openOrderModal = (comboId: number = 2) => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-order-modal", { detail: { comboId } }));
  }
};

export function OrderModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCombo, setSelectedCombo] = useState(2); // Default to best seller
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.comboId) {
        setSelectedCombo(customEvent.detail.comboId);
      }
      setIsOpen(true);
      setIsSuccess(false);
    };

    window.addEventListener("open-order-modal", handleOpen);
    return () => window.removeEventListener("open-order-modal", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  const getComboPrice = (id: number) => {
    if (id === 1) return 171500;
    if (id === 2) return 171500 * 2 * 0.8;
    if (id === 3) return 171500 * 3 * 0.6;
    return 171500;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg overflow-hidden bg-white rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {isSuccess ? (
            <div className="p-10 text-center flex flex-col items-center relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 bg-gray-50 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6"
              >
                <CheckCircle2 className="w-10 h-10" />
              </motion.div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Đặt Hàng Thành Công!</h2>
              <p className="text-gray-600 mb-8">
                Cảm ơn bạn đã tin tưởng Mistine. Chuyên viên của chúng tôi sẽ liên hệ trong 15 phút tới để xác nhận đơn hàng.
              </p>
              <Button onClick={() => setIsOpen(false)} className="w-full">
                Quay Lại Trang Chủ
              </Button>
            </div>
          ) : (
            <div className="flex flex-col max-h-[90vh]">
              {/* Header - Fixed */}
              <div className="px-6 py-5 border-b border-gray-100 bg-white sticky top-0 z-20 flex-shrink-0 flex justify-between items-start">
                <div>
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 pr-8">Hoàn Tất Đặt Hàng</h2>
                  <p className="text-sm text-gray-500 mt-1">Nhận ngay ưu đãi miễn phí vận chuyển</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body - Scrollable */}
              <div className="p-6 overflow-y-auto flex-1">
                <form id="orderForm" onSubmit={handleSubmit} className="space-y-6">
                  {/* Combo Selection */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Chọn Gói Ưu Đãi</label>
                    <div className="grid gap-3">
                      {[
                        { id: 1, name: "Mua Thử (1 hộp)", price: 171500, label: "Giá gốc" },
                        { id: 2, name: "Tiết Kiệm (2 hộp)", price: 171500 * 2 * 0.8, label: "Giảm 20%" },
                        { id: 3, name: "Toàn Diện (3 hộp)", price: 171500 * 3 * 0.6, label: "Giảm 40% + Quà" },
                      ].map((combo) => (
                        <label
                          key={combo.id}
                          className={`relative flex items-center justify-between p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                            selectedCombo === combo.id
                              ? "border-primary bg-primary/5"
                              : "border-gray-200 hover:border-primary/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="combo"
                            value={combo.id}
                            checked={selectedCombo === combo.id}
                            onChange={() => setSelectedCombo(combo.id)}
                            className="hidden"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">{combo.name}</p>
                            <p className="text-sm text-primary font-medium">{combo.label}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900">
                              {combo.price.toLocaleString("vi-VN")}đ
                            </p>
                          </div>
                          {combo.id === 2 && (
                            <div className="absolute -top-3 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                              BÁN CHẠY
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Thông Tin Nhận Hàng</label>
                    <input
                      required
                      type="text"
                      placeholder="Họ và tên"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Số điện thoại"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none"
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <select
                        required
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none bg-white"
                      >
                        <option value="">Tỉnh/Thành</option>
                        {provinces.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      <select
                        required
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        disabled={!province}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none bg-white disabled:bg-gray-50 disabled:opacity-50"
                      >
                        <option value="">Quận/Huyện</option>
                        {(districts[province] || []).map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                    
                    <input
                      required
                      type="text"
                      placeholder="Địa chỉ cụ thể (Số nhà, tên đường, phường/xã)"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none"
                    />
                  </div>
                </form>
              </div>

              {/* Footer - Fixed */}
              <div className="p-6 bg-white border-t border-gray-100 flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 font-medium">Tổng thanh toán:</span>
                  <span className="text-2xl font-bold text-primary">
                    {getComboPrice(selectedCombo).toLocaleString("vi-VN")}đ
                  </span>
                </div>

                <Button
                  form="orderForm"
                  type="submit"
                  size="xl"
                  className="w-full shadow-lg hover:shadow-xl transition-shadow"
                  disabled={isLoading}
                >
                  {isLoading ? "Đang xử lý..." : "XÁC NHẬN ĐẶT HÀNG"}
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
