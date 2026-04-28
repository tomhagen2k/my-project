import { CheckCircle2 } from "lucide-react";

export default function Application() {
  const steps = [
    {
      step: "BƯỚC 01",
      title: "Làm sạch da",
      desc: "Làm sạch mặt với sữa rửa mặt dịu nhẹ và thấm khô bằng khăn mềm."
    },
    {
      step: "BƯỚC 02",
      title: "Thoa kem",
      desc: "Lấy một lượng kem vừa đủ, chấm 5 điểm trên mặt và thoa đều theo chiều từ trong ra ngoài."
    },
    {
      step: "BƯỚC 03",
      title: "Vỗ nhẹ",
      desc: "Vỗ nhẹ để kem thẩm thấu hoàn toàn. Nên thoa trước khi ra ngoài 15-20 phút."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-dark mb-12">
          Hướng Dẫn <span className="text-brand-green-dark">Sử Dụng</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((item, idx) => (
            <div key={idx} className="relative p-8 rounded-3xl bg-brand-light border border-brand-green/20 text-center flex flex-col items-center shadow-sm">
              <div className="absolute -top-4 bg-brand-green-dark text-white px-4 py-1 rounded-full text-xs font-bold">
                {item.step}
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-green-dark mb-4 shadow-md">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-cream p-6 rounded-3xl border-l-4 border-brand-orange">
          <h4 className="font-bold text-brand-orange mb-2 uppercase text-sm tracking-wider">Lưu ý quan trọng:</h4>
          <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
            <li>Nên thoa lại kem sau mỗi 2-3 giờ nếu hoạt động liên tục ngoài trời.</li>
            <li>Sử dụng ngay cả khi ở trong nhà để bảo vệ da khỏi ánh sáng xanh.</li>
            <li>Đậy nắp kín sau khi sử dụng và bảo quản nơi khô ráo, thoáng mát.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
