import React from 'react';
import Image from 'next/image';

export default function HeroSection({ onOrderClick }: { onOrderClick: () => void }) {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-primary-light/30 to-white" id="thong-tin">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/image/5.jpeg" alt="Beyond Angel Aqua Moisture Cream" fill className="object-cover" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase">
              BEYOND ANGEL AQUA MOISTURE CREAM 150ML
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-slate-800">
              Da Ẩm Mịn <br className="hidden md:block"/> <span className="text-gradient">Suốt 24 Giờ</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">
              Phục hồi màng lipid, làm dịu da tức thì và cấp ẩm sâu với công thức Tri-Sap Complex và Hyaluronic Acid. Không gây kích ứng.
            </p>
            <button 
              onClick={onOrderClick}
              className="w-full md:w-auto bg-gradient-to-r from-accent to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-accent/30 hover:shadow-2xl hover:scale-105 transition-all"
            >
              NHẬN ƯU ĐÃI NGAY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
