import Image from "next/image";

export default function PainPoint() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-[#f0f0f0] p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Nỗi Đau Làn Da?</h3>
            <p className="text-gray-600 mb-4">
              Bạn ám ảnh với các loại kem chống nắng làm da đổ dầu lênh láng, bít tắc lỗ chân lông gây mụn ẩn? Hay những loại kem nâng tone giả trân, trắng bệch?
            </p>
            <div className="text-4xl">😩</div>
          </div>
          <div className="bg-brand-green-dark p-8 md:p-12 flex flex-col justify-center text-white">
            <h3 className="text-2xl font-bold mb-4">Giải Pháp Từ Madagascar</h3>
            <p className="text-brand-cream mb-4">
              Skin1004 Madagascar Centella Air-Fit Plus là "phao cứu sinh" với kết cấu lỏng nhẹ, thấm nhanh, kiềm dầu 24h và nâng tone tự nhiên trong trẻo.
            </p>
            <div className="text-4xl">✨</div>
          </div>
        </div>
      </div>
    </section>
  );
}
