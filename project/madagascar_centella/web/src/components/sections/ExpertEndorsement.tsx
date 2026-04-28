import Image from "next/image";

export default function ExpertEndorsement() {
  return (
    <section className="py-16 bg-brand-light">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-brand-green flex-shrink-0">
            <Image
              src="/images/expert_endorsement.png"
              alt="Chuyên gia da liễu"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-brand-orange font-bold text-lg mb-2">Bác sĩ Da Liễu - Dr. Ji Eun</div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Khuyên Dùng Cho Da Nhạy Cảm</h3>
            <p className="text-gray-600 italic text-lg relative">
              <span className="text-4xl text-brand-green-dark absolute -top-4 -left-4 opacity-50">"</span>
              Skin1004 Madagascar Centella là một trong số ít các loại kem chống nắng trên thị trường đáp ứng được cả 3 tiêu chí: Màng lọc chống nắng mạnh mẽ, kết cấu mỏng nhẹ không gây bít tắc lỗ chân lông, và khả năng làm dịu da viêm mụn xuất sắc nhờ chiết xuất rau má vùng Madagascar.
              <span className="text-4xl text-brand-green-dark absolute -bottom-4 opacity-50">"</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
