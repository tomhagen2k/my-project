"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { openOrderModal } from "../OrderModal";
import { Button } from "../ui/Button";
import { Check, ShieldCheck, Truck, RotateCcw } from "lucide-react";

export function PricingFAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const combos = [
    {
      id: 1,
      name: "MUA THỬ",
      subtitle: "Trải nghiệm chất lượng",
      price: 171500,
      originalPrice: 171500,
      features: ["1 Hộp Kem Nền 30g", "Kiểm tra hàng trước khi nhận"],
      isBest: false,
    },
    {
      id: 2,
      name: "TIẾT KIỆM (Nên Dùng)",
      subtitle: "Giảm 20% cho hộp thứ 2",
      price: 274400,
      originalPrice: 343000,
      features: ["2 Hộp Kem Nền 30g", "Miễn phí vận chuyển", "Tặng kèm 2 mút tán kem"],
      isBest: true,
    },
    {
      id: 3,
      name: "TOÀN DIỆN",
      subtitle: "Giảm 40% siêu hời",
      price: 308700,
      originalPrice: 514500,
      features: ["3 Hộp Kem Nền 30g", "Miễn phí vận chuyển", "Tặng kèm bộ cọ trang điểm"],
      isBest: false,
    },
  ];

  const faqs = [
    { q: "Sản phẩm có gây bí da hay lên mụn không?", a: "Hoàn toàn không. Mistine Blue Shield 5.0 chứa các thành phần tự nhiên và không chứa dầu khoáng, kết hợp công nghệ Blue Shield tạo lớp màng bảo vệ thoáng khí, không gây bít tắc lỗ chân lông." },
    { q: "Tôi nên chọn tông màu nào?", a: "LF110/LF100 phù hợp với làn da sáng, LP110S dành cho da trắng hồng, và NN120 dành cho da ngăm hoặc trung bình. Nếu phân vân, nhân viên của chúng tôi sẽ tư vấn kỹ khi gọi xác nhận đơn." },
    { q: "Thời gian giao hàng là bao lâu?", a: "Đơn hàng sẽ được giao tận tay bạn trong vòng 2-4 ngày làm việc tùy khu vực. Bạn có thể kiểm tra hàng trước khi thanh toán." },
    { q: "Sản phẩm có thực sự kiềm dầu 36H không?", a: "Có. Nhờ chiết xuất Tảo Địa Trung Hải, kem nền giúp kiểm soát bã nhờn mạnh mẽ. Với làn da siêu dầu, thời gian duy trì hiệu quả ở mức hoàn hảo nhất là khoảng 12-16 tiếng." },
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Bảng Giá Ưu Đãi Đặc Biệt
          </h2>
          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            Đặt hàng hôm nay để nhận ngay mức giá tốt nhất cùng quà tặng độc quyền từ Mistine.
          </p>
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full font-bold text-sm animate-pulse">
            ⏳ Ưu đãi kết thúc sau: 04:23:15
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch mb-24">
          {combos.map((combo) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-8 rounded-3xl bg-white border-2 transition-all ${
                combo.isBest ? "border-primary shadow-2xl scale-105 z-10" : "border-gray-100 shadow-sm hover:border-primary/50"
              }`}
            >
              {combo.isBest && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  BÁN CHẠY NHẤT
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{combo.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{combo.subtitle}</p>
              </div>

              <div className="text-center mb-8">
                {combo.originalPrice > combo.price && (
                  <div className="text-gray-400 line-through text-lg">
                    {combo.originalPrice.toLocaleString("vi-VN")}đ
                  </div>
                )}
                <div className="text-4xl font-black text-primary">
                  {combo.price.toLocaleString("vi-VN")}đ
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {combo.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={combo.isBest ? "primary" : "outline"} 
                className="w-full"
                onClick={() => openOrderModal(combo.id)}
              >
                CHỌN GÓI NÀY
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-24 border-t border-b border-gray-100 py-12">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-gray-900">Cam Kết Chính Hãng 100%</h4>
            <p className="text-sm text-gray-500">Đền bù gấp 10 lần nếu phát hiện hàng giả.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <Truck className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-gray-900">Kiểm Tra Trước Khi Nhận</h4>
            <p className="text-sm text-gray-500">Được xem hàng trước khi thanh toán.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
              <RotateCcw className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-gray-900">Đổi Trả Miễn Phí 7 Ngày</h4>
            <p className="text-sm text-gray-500">Hỗ trợ đổi trả nếu hàng lỗi do nhà sản xuất.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Câu Hỏi Thường Gặp</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-colors ${activeFaq === idx ? "border-primary" : "border-gray-200"}`}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold text-gray-900 bg-white hover:bg-gray-50"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  {faq.q}
                  <span className={`transform transition-transform ${activeFaq === idx ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden bg-gray-50"
                    >
                      <div className="px-6 py-4 text-gray-600 border-t border-gray-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
