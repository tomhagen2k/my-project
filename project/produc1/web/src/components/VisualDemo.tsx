import React from 'react';

export default function VisualDemo() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-800">Trải Nghiệm Cấp Ẩm Đỉnh Cao</h2>
        <p className="text-slate-600 mb-10 max-w-2xl mx-auto">Chất kem mỏng nhẹ, thấm nhanh không bết dính. Phục hồi và làm dịu làn da mệt mỏi ngay tức thì.</p>
        
        <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
          <video 
            src="/image/Kem Dưỡng Ẩm Beyond Angel  Aqua Moisture Cream 150ml.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-8">
            <p className="text-white font-bold text-xl drop-shadow-md">Kết cấu mỏng nhẹ - Thẩm thấu tức thì</p>
          </div>
        </div>
      </div>
    </section>
  );
}
