import Image from "next/image";

export default function ProductGallery() {
  const galleryImages = [
    { src: "/images/lifestyle_makeup.png", alt: "Sản phẩm trên bàn trang điểm" },
    { src: "/images/lifestyle_handbag.png", alt: "Sản phẩm trong túi xách" },
    { src: "/images/product/1.jpeg", alt: "Cận cảnh sản phẩm" },
    { src: "/images/product/2.jpg", alt: "Chất kem sản phẩm" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-dark mb-4">
          Hình Ảnh <span className="text-brand-green-dark">Thực Tế</span>
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Khám phá Skin1004 Madagascar Centella trong bối cảnh đời thường, minh chứng cho sự tinh tế và tiện dụng.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="relative aspect-square rounded-[2rem] overflow-hidden shadow-lg group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-xs font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
