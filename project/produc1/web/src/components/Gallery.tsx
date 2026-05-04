import React from 'react';
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Phong Cách Sống Cùng Beyond Angel Aqua</h2>
          <p className="text-slate-600">Sản phẩm thực tế - Đẹp tinh tế từng góc cạnh.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden">
            <Image src="/image/generated/lifestyle_product.png" alt="Lifestyle 1" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
              <Image src="/image/3.jpeg" alt="Product detail" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
              <Image src="/image/6.jpeg" alt="Texture" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
