"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export const Ingredients = () => {
  return (
    <section className="py-20 bg-nivea-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            Sức mạnh kép từ <span className="text-nivea-blue">Thiên nhiên</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Sự kết hợp hoàn hảo giữa các thành phần lành tính, an toàn cho mọi loại da, đặc biệt là da nhạy cảm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden group">
            <div className="h-64 sm:h-72 overflow-hidden relative">
              <img src="/image/ai/nivea_jojoba_oil.png" alt="Jojoba Oil" className="w-full h-full object-contain bg-slate-50 transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Dầu Jojoba (Jojoba Oil)</h3>
              <p className="text-slate-600 leading-relaxed">
                Chứa các axit amin và protein đặc biệt, rất hữu dụng trong việc duy trì độ đàn hồi của da. Thấm sâu và cấp ẩm mạnh mẽ, giúp bề mặt da luôn căng bóng, mềm mại mà không hề bóng nhờn.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden group">
            <div className="h-64 sm:h-72 overflow-hidden relative">
              <img src="/image/ai/nivea_vitamin_e.png" alt="Vitamin E" className="w-full h-full object-contain bg-slate-50 transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Vitamin E Nguyên Chất</h3>
              <p className="text-slate-600 leading-relaxed">
                Đóng vai trò như một chất chống oxy hóa tuyệt vời, Vitamin E giúp duy trì độ ẩm tối ưu cho da, bảo vệ da khỏi tác nhân gây hại từ môi trường, mang lại làn da sáng khỏe tự nhiên.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Lifestyle = () => {
  const images = [
    { src: "/image/ai/nivea_lifestyle_1.png", alt: "NIVEA Soft trên bàn trang điểm" },
    { src: "/image/ai/nivea_lifestyle_2.png", alt: "NIVEA Soft trong phòng tắm" },
    { src: "/image/ai/nivea_lifestyle_3.png", alt: "NIVEA Soft trên giường lụa" },
    { src: "/image/ai/nivea_lifestyle_4.png", alt: "NIVEA Soft bên bàn trà sáng" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            NIVEA Soft <span className="text-nivea-blue">Trong Không Gian Của Bạn</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Đồng hành cùng bạn mỗi ngày, mang lại sự chăm sóc nâng niu nhất cho làn da dù ở bất kỳ đâu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div key={i} className="aspect-square rounded-3xl overflow-hidden shadow-lg group relative">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Guide = () => {
  const steps = [
    {
      num: "01",
      title: "Làm sạch da",
      desc: "Rửa sạch và lau khô vùng da cần dưỡng (mặt, tay, hoặc toàn thân)."
    },
    {
      num: "02",
      title: "Lấy lượng vừa đủ",
      desc: "Lấy một lượng kem Nivea Soft vừa đủ, chấm lên 5 điểm trên mặt hoặc thoa đều trên cơ thể."
    },
    {
      num: "03",
      title: "Massage nhẹ nhàng",
      desc: "Massage nhẹ nhàng từng vòng tròn nhỏ giúp dưỡng chất thẩm thấu sâu hơn vào da."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 text-center mb-16">
          3 Bước Chăm Sóc <span className="text-nivea-blue">Mỗi Ngày</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 bg-white p-8 rounded-[2rem] shadow-xl relative mt-8 md:mt-0">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-nivea-blue to-nivea-accent text-white font-bold text-2xl flex items-center justify-center shadow-lg shadow-nivea-blue/30 border-4 border-white">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-slate-800 text-center mt-6 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-center text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Comparison = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 text-center mb-12">
          Sự Lựa Chọn <span className="text-nivea-blue">Vượt Trội</span>
        </h2>

        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
            <div className="p-4 md:p-6 font-semibold text-slate-500 text-sm md:text-base">Tiêu chí</div>
            <div className="p-4 md:p-6 font-bold text-nivea-blue text-center bg-nivea-light border-l border-r border-slate-200 text-sm md:text-base">NIVEA Soft Crème</div>
            <div className="p-4 md:p-6 font-semibold text-slate-500 text-center text-sm md:text-base">Kem dưỡng thông thường</div>
          </div>
          
          {[
            ["Chất kem", "Mềm mịn, thấm nhanh không bết dính", "Đặc, gây bí bách và nhờn rít"],
            ["Độ ẩm", "Sâu 16h+, có Jojoba Oil", "Ngắn hạn, dễ khô lại"],
            ["Đa dụng", "Dùng cho cả mặt, tay, toàn thân", "Thường chỉ chuyên biệt 1 vùng"],
            ["Mùi hương", "Thơm nhẹ dịu mát", "Nồng mùi hóa học"],
            ["Độ an toàn", "Phù hợp mọi loại da, kể cả da dầu", "Có thể gây kích ứng"],
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
              <div className="p-4 md:p-6 text-slate-700 font-medium text-sm md:text-base">{row[0]}</div>
              <div className="p-4 md:p-6 bg-nivea-light/30 border-l border-r border-slate-100 flex items-center justify-center text-center">
                <CheckCircle2 className="text-nivea-blue mr-2 shrink-0" size={20} />
                <span className="text-sm md:text-base font-semibold text-slate-800">{row[1]}</span>
              </div>
              <div className="p-4 md:p-6 flex items-center justify-center text-center">
                <XCircle className="text-red-400 mr-2 shrink-0" size={20} />
                <span className="text-sm md:text-base text-slate-500">{row[2]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
