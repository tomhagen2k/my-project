import { Check, X } from "lucide-react";

export default function Comparison() {
  const criteria = [
    { name: "Thành phần", us: "Chiết xuất Rau Má Madagascar cao cấp", others: "Hóa chất tổng hợp" },
    { name: "Khả năng làm dịu", us: "Làm dịu tức thì, giảm đỏ", others: "Bình thường" },
    { name: "Độ mỏng nhẹ", us: "Thấm nhanh, không nhờn rít", others: "Dễ gây bít tắc" },
    { name: "Nâng tone", us: "Tự nhiên, trong trẻo", others: "Trắng bệch, giả trân" },
    { name: "An toàn", us: "0% cồn, 0% hương liệu", others: "Có chứa cồn khô" }
  ];

  return (
    <section className="py-16 bg-brand-light">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-dark mb-12">
          Tại Sao Chọn <span className="text-brand-green-dark">Skin1004?</span>
        </h2>
        
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-brand-green-dark text-white p-6 font-bold text-center">
            <div className="text-left">TIÊU CHÍ</div>
            <div>SKIN1004</div>
            <div>SẢN PHẨM KHÁC</div>
          </div>
          
          <div className="divide-y divide-gray-100">
            {criteria.map((item, idx) => (
              <div key={idx} className="grid grid-cols-3 p-6 items-center text-center">
                <div className="text-left font-bold text-gray-700 text-sm md:text-base">{item.name}</div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Check size={20} />
                  </div>
                  <span className="text-xs text-brand-green-dark font-medium">{item.us}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                    <X size={20} />
                  </div>
                  <span className="text-xs text-gray-400">{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
