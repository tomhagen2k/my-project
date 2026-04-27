"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, RefreshCcw, PackageCheck, Users, Trophy } from "lucide-react";

export function ApplicationGuide() {
  const steps = [
    { title: "Bước 1", desc: "Lấy một lượng kem vừa đủ ra mu bàn tay." },
    { title: "Bước 2", desc: "Chấm đều kem lên 5 điểm trên khuôn mặt." },
    { title: "Bước 3", desc: "Dùng mút hoặc cọ tán đều từ trong ra ngoài." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16">Hướng Dẫn Sử Dụng</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center space-y-4"
            >
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialProofCounters() {
  return (
    <section className="py-12 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">74.390+</div>
            <div className="text-primary-foreground/80 font-medium">Khách hàng tin dùng</div>
          </div>
          <div className="text-center border-x border-white/20 px-12 md:px-24">
            <div className="text-4xl md:text-5xl font-bold mb-2">4.9/5</div>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <div className="text-primary-foreground/80 font-medium">Đánh giá hài lòng</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">36H</div>
            <div className="text-primary-foreground/80 font-medium">Bền màu suốt ngày dài</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  );
}

export function TrustLogistics() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">Cam Kết & <span className="text-primary">Vận Chuyển</span></h2>
            <div className="grid gap-6">
              {[
                { icon: ShieldCheck, title: "100% Chính Hãng", desc: "Hoàn tiền 111% nếu phát hiện hàng giả." },
                { icon: RefreshCcw, title: "Đổi Trả 15 Ngày", desc: "Lỗi 1 đổi 1 nhanh chóng, tiện lợi." },
                { icon: PackageCheck, title: "Đóng Gói Kỹ Lưỡng", desc: "3 lớp chống sốc, bảo vệ sản phẩm tuyệt đối." },
                { icon: Truck, title: "Giao Hàng Toàn Quốc", desc: "Hợp tác với GHTK, Viettel Post, Shopee Express." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <img src="/images/8.jpg" alt="Quy trình vận chuyển" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-8 -left-8 bg-accent text-white px-8 py-4 rounded-2xl shadow-xl font-bold flex items-center gap-3">
              <Trophy className="w-6 h-6" />
              <span>Thương Hiệu Được Yêu Thích 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
