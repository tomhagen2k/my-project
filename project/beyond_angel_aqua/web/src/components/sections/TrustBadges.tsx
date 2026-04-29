"use client";

import { ShieldCheck, RefreshCcw, PackageCheck } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: <ShieldCheck size={32} className="text-[#4bb3e3]" />,
      title: "CAM KẾT CHÍNH HÃNG",
      desc: "Hoàn tiền 111% nếu phát hiện hàng giả, hàng nhái."
    },
    {
      icon: <RefreshCcw size={32} className="text-[#4bb3e3]" />,
      title: "ĐỔI TRẢ TRONG 7 NGÀY",
      desc: "Hỗ trợ đổi trả miễn phí theo đúng quy định của Shopee."
    },
    {
      icon: <PackageCheck size={32} className="text-[#4bb3e3]" />,
      title: "KIỂM TRA HÀNG",
      desc: "Được kiểm tra hàng trước khi thanh toán nhận hàng."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-[#f9fdfa] border border-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 shrink-0 bg-blue-50 rounded-full flex items-center justify-center">
                {badge.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm md:text-base mb-1">{badge.title}</h4>
                <p className="text-sm text-gray-500 leading-tight">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
