import React from 'react';
import { ShieldCheck, RefreshCw, Truck } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'CAM KẾT CHÍNH HÃNG',
      desc: 'Hoàn tiền 111% nếu phát hiện hàng giả, hàng nhái.'
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary" />,
      title: 'ĐỔI TRẢ TRONG 7 NGÀY',
      desc: 'Hỗ trợ đổi trả miễn phí theo đúng quy định của Shopee.'
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: 'KIỂM TRA HÀNG',
      desc: 'Được kiểm tra hàng trước khi thanh toán nhận hàng.'
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-primary-light/20 p-3 rounded-2xl shrink-0">
                {badge.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">{badge.title}</h4>
                <p className="text-sm text-slate-600">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
