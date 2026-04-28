import { productData } from "@/lib/data";

interface PricingProps {
  onOrder: (comboId?: string) => void;
}

export default function Pricing({ onOrder }: PricingProps) {
  return (
    <section id="khuyen-mai" className="py-16 bg-brand-light">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-dark mb-12">
          Chọn Gói <span className="text-brand-orange">Ưu Đãi</span> Của Bạn
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {productData.pricing.map((combo) => (
            <div 
              key={combo.id} 
              className={`relative bg-white rounded-3xl p-6 shadow-lg flex flex-col ${combo.isBestSeller ? 'border-4 border-brand-orange scale-105 z-10' : 'border border-gray-100'}`}
            >
              {combo.isBestSeller && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  NÊN DÙNG NHẤT
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-brand-green-dark font-bold text-lg mb-1">{combo.name}</div>
                <div className="text-gray-500 text-sm mb-4">{combo.desc}</div>
                <div className="text-3xl font-extrabold text-brand-dark mb-1">
                  {combo.price.toLocaleString('vi-VN')}đ
                </div>
                <div className="text-gray-400 line-through text-sm">
                  {combo.originalPrice.toLocaleString('vi-VN')}đ
                </div>
              </div>
              
              <div className="mt-auto">
                <button 
                  onClick={() => onOrder(combo.id)}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${combo.isBestSeller ? 'bg-brand-orange text-white hover:bg-orange-600 shadow-lg' : 'bg-brand-green-dark text-white hover:bg-green-800'}`}
                >
                  ĐẶT MUA NGAY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
