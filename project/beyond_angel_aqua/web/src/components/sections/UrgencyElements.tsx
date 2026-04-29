"use client";

import { useState, useEffect } from "react";
import { Timer, AlertCircle } from "lucide-react";

export default function UrgencyElements() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#e06c64] to-[#f28b82] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
          
          <div className="flex items-center gap-3">
            <Timer size={32} className="animate-pulse" />
            <div>
              <div className="text-sm font-medium uppercase tracking-wider opacity-90">Ưu Đãi Kết Thúc Sau</div>
              <div className="text-2xl font-black tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <AlertCircle size={20} className="text-yellow-200" />
              <span className="font-bold text-lg">Chỉ còn lại 18 sản phẩm khuyến mãi!</span>
            </div>
            <div className="w-full max-w-[250px] h-2 bg-black/20 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-300 w-[18%] rounded-full shadow-[0_0_10px_rgba(253,224,71,0.8)]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
