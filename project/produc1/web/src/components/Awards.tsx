import React from 'react';
import Image from 'next/image';

export default function Awards() {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold mb-8">Chứng Nhận & Nguồn Gốc</h2>
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-full max-w-2xl aspect-[3/4] md:aspect-video rounded-2xl overflow-hidden border-2 border-white/20">
            <Image src="/image/4.jpeg" alt="Bill of Lading / Certificate" fill className="object-contain bg-white" />
          </div>
          <p className="text-slate-300 max-w-xl mx-auto">Sản phẩm nhập khẩu chính hãng, có bill hãng đầy đủ, đảm bảo nguồn gốc xuất xứ rõ ràng từ Hàn Quốc.</p>
        </div>
      </div>
    </section>
  );
}
