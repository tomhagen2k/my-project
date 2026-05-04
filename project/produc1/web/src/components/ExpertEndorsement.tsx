import React from 'react';
import Image from 'next/image';

export default function ExpertEndorsement() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-square md:aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image src="/image/generated/expert_endorsement.png" alt="Chuyên gia khuyên dùng" fill className="object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">Góc Nhìn Chuyên Gia</div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
              "Giải pháp cấp ẩm tối ưu cho làn da tổn thương"
            </h2>
            <p className="text-xl text-slate-300 italic mb-8 border-l-4 border-primary pl-6">
              "Kem dưỡng ẩm Beyond Angel Aqua không chỉ cấp nước vượt trội với Hyaluronic Acid mà còn sở hữu phức hợp Tri-Sap Complex giúp phục hồi màng lipid một cách mạnh mẽ. Đây là một lựa chọn hoàn hảo ngay cả với những làn da nhạy cảm nhất."
            </p>
            <div>
              <h4 className="font-bold text-2xl">Dr. Ji Yeon</h4>
              <p className="text-primary-light">Chuyên gia Da Liễu Cao Cấp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
