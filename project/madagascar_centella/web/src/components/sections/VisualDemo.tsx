export default function VisualDemo() {
  return (
    <section className="py-12 bg-brand-light">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-dark mb-8">
          Chất Kem <span className="text-brand-green-dark">Mỏng Nhẹ</span> Tựa Không Khí
        </h2>
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/product/Kem Chống Nắng Skin1004 Madagascar Centella Air-Fit Suncream Plu.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-end pb-8">
            <p className="text-white text-xl md:text-2xl font-bold text-center px-4 drop-shadow-md">
              Dễ dàng tán đều, không vón cục
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
