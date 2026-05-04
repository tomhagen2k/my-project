import React from 'react';

export default function ApplicationGuide() {
  const steps = [
    { step: 1, title: 'Làm Sạch', desc: 'Sử dụng sau bước làm sạch và tinh chất.' },
    { step: 2, title: 'Thoa Kem', desc: 'Lấy một lượng vừa đủ thoa đều lên da.' },
    { step: 3, title: 'Mặt Nạ Ngủ', desc: 'Dùng lớp dày hơn 2-3 lần/tuần trước khi ngủ.' },
  ];

  return (
    <section className="py-20 bg-primary-light/20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-12">Cách Sử Dụng Hiệu Quả</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-primary -z-10"></div>
          {steps.map((item, idx) => (
            <div key={idx} className="flex-1 bg-white p-8 rounded-[2rem] shadow-xl relative">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-4 border-white shadow-lg -mt-16">
                {item.step}
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
