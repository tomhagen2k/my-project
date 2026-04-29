"use client";

import Image from "next/image";

export default function ProductGallery() {
  const images = [
    "/images/ai/lifestyle_1.png",
    "/images/ai/lifestyle_2.png",
    "/images/ai/lifestyle_3.png",
    "/images/6.jpeg",
    "/images/3.jpeg",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
            Góc Nhìn Chân Thực
          </h2>
          <p className="text-lg text-gray-500">Thiết kế tinh tế, sang trọng từ mọi góc độ</p>
        </div>

        {/* Mobile: Stack vertical, Desktop: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Large main image */}
          <div className="relative w-full h-full rounded-[32px] overflow-hidden md:col-span-2 md:row-span-2 group">
            <Image src={images[0]} alt="Lifestyle Beyond Angel Aqua 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          
          {images.slice(1).map((src, idx) => (
            <div key={idx} className="relative w-full h-full rounded-[32px] overflow-hidden group">
              <Image src={src} alt={`Lifestyle ${idx+2}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
