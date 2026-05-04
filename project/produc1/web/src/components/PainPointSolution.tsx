import React from 'react';
import Image from 'next/image';

export default function PainPointSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Làn Da Của Bạn Đang Kêu Cứu?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Đánh bay nỗi lo da khô ráp, bong tróc và mệt mỏi với giải pháp cấp ẩm chuyên sâu.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 bg-gray-100 rounded-[2.5rem] p-8 flex flex-col justify-center h-full">
            <h3 className="text-2xl font-bold mb-4 text-red-500">Trước Khi Sử Dụng</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2"><span className="text-xl">❌</span> Da thô ráp, thiếu sức sống</li>
              <li className="flex items-center gap-2"><span className="text-xl">❌</span> Màng lipid tổn thương do mất nước</li>
              <li className="flex items-center gap-2"><span className="text-xl">❌</span> Dễ bị kích ứng và căng thẳng</li>
            </ul>
            
            <h3 className="text-2xl font-bold mb-4 text-primary">Sau Khi Sử Dụng Beyond Angel Aqua</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><span className="text-xl">✅</span> Da căng mướt, ngậm nước 24h</li>
              <li className="flex items-center gap-2"><span className="text-xl">✅</span> Hàng rào bảo vệ da được phục hồi</li>
              <li className="flex items-center gap-2"><span className="text-xl">✅</span> Làm dịu tức thì, giảm mệt mỏi cho da</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image src="/image/generated/pain_point_solution.png" alt="Before and After" fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-bold">TRƯỚC</div>
              <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-bold">SAU</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
