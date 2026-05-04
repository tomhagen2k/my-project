import React from 'react';

export default function CoreValue() {
  const values = [
    { value: '24h', desc: 'Duy trì độ ẩm' },
    { value: '150ml', desc: 'Dung tích cực lớn' },
    { value: '100%', desc: 'Chính hãng Hàn Quốc' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {values.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-6 bg-primary-light/10 rounded-[2rem] border border-primary-light/30">
              <span className="text-3xl md:text-5xl font-extrabold text-primary mb-2">{item.value}</span>
              <span className="text-sm md:text-base text-slate-600 font-medium text-center">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
