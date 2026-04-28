import { ShieldCheck, Truck, RotateCcw } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand-green-dark mb-4">
            <ShieldCheck size={32} />
          </div>
          <h3 className="font-bold text-brand-dark mb-2">Cam Kết Chính Hãng 100%</h3>
          <p className="text-xs text-gray-500">Hoàn tiền 111% nếu phát hiện hàng giả, hàng nhái.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand-green-dark mb-4">
            <RotateCcw size={32} />
          </div>
          <h3 className="font-bold text-brand-dark mb-2">15 Ngày Đổi Trả Miễn Phí</h3>
          <p className="text-xs text-gray-500">Áp dụng cho sản phẩm còn nguyên seal từ nhà sản xuất.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand-green-dark mb-4">
            <Truck size={32} />
          </div>
          <h3 className="font-bold text-brand-dark mb-2">Kiểm Hàng Trước Khi Nhận</h3>
          <p className="text-xs text-gray-500">Được đồng kiểm cùng shipper trước khi thanh toán.</p>
        </div>
      </div>
    </section>
  );
}
