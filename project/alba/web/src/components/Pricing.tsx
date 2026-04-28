"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useOrder } from "@/context/OrderContext";
import { Timer, Gift, ShieldCheck, Box } from "lucide-react";

export default function Pricing() {
  const { openModal } = useOrder();
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 45, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else if (m > 0) { s = 59; m--; }
        else if (h > 0) { s = 59; m = 59; h--; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="promotion" className="py-20 bg-pink-50/30">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Ưu Đãi Đặc Biệt
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Sở hữu ngay kem chống nắng d'Alba với giá cực hời. Đừng bỏ lỡ!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
          
          {/* Main Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-pink-100/50 border-2 border-pink-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              Khuyên dùng
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-24 h-24 bg-pink-50 rounded-2xl p-2 shrink-0">
                <img src="/images/e29dd27d-3a95-46ba-8ab3-75d6d16b5914.jpeg" className="w-full h-full object-cover rounded-xl mix-blend-multiply" alt="d'Alba Sun Cream" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">d'Alba Waterfull Tone-up</h3>
                <p className="text-gray-500 text-sm">Tuýp 50ml sử dụng ~2 tháng</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-4xl lg:text-5xl font-black text-pink-500">524.000đ</span>
                <span className="text-lg text-gray-400 line-through">816.000đ</span>
              </div>
              <div className="inline-block bg-orange-100 text-orange-600 font-bold px-3 py-1 rounded-full text-sm">
                Tiết kiệm 292.000đ
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium"><Gift className="w-5 h-5 text-pink-400" /> Miễn phí vận chuyển toàn quốc</li>
              <li className="flex items-center gap-3 text-gray-700 font-medium"><ShieldCheck className="w-5 h-5 text-pink-400" /> Nhận hàng kiểm tra trước khi thanh toán</li>
            </ul>

            {/* Urgency */}
            <div className="bg-pink-50 rounded-2xl p-4 mb-6 flex items-center justify-between border border-pink-100">
              <div className="flex items-center gap-2 text-pink-600 font-bold">
                <Timer className="w-5 h-5 animate-pulse" />
                Kết thúc sau:
              </div>
              <div className="flex gap-2 font-mono font-bold text-lg text-pink-600">
                <span className="bg-white px-2 py-1 rounded shadow-sm">{String(timeLeft.h).padStart(2, '0')}</span>:
                <span className="bg-white px-2 py-1 rounded shadow-sm">{String(timeLeft.m).padStart(2, '0')}</span>:
                <span className="bg-white px-2 py-1 rounded shadow-sm">{String(timeLeft.s).padStart(2, '0')}</span>
              </div>
            </div>

            <button 
              onClick={openModal}
              className="w-full py-4 bg-gradient-to-r from-pink-500 to-coral-400 hover:from-pink-600 hover:to-coral-500 text-white font-bold text-lg rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-95"
            >
              ĐẶT MUA NGAY 
            </button>
            <div className="text-center text-sm text-gray-400 mt-3 font-medium">Chỉ còn 15 suất ưu đãi cuối cùng</div>
          </motion.div>

          {/* Logistics & Trust Badges */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Cam Kết Chính Hãng 100%</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Đền bù 111% nếu phát hiện hàng giả, hàng nhái. Yên tâm sử dụng.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Box className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Đóng Gói Tiêu Chuẩn</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Hàng hóa được bọc chống sốc 3 lớp an toàn tuyệt đối. Hợp tác cùng GHTK, Viettel Post.</p>
                <div className="mt-3 flex gap-2">
                  {/* Dummy logos */}
                  <div className="px-3 py-1 bg-gray-100 rounded text-xs font-bold text-gray-500">GHTK</div>
                  <div className="px-3 py-1 bg-gray-100 rounded text-xs font-bold text-gray-500">Shopee Express</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">15 Ngày Đổi Trả</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Đổi trả miễn phí trong 15 ngày nếu sản phẩm có lỗi từ nhà sản xuất.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
