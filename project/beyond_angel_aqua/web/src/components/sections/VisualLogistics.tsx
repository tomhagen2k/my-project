"use client";

import { Truck, Box } from "lucide-react";

export default function VisualLogistics() {
  return (
    <section className="py-16 bg-[#f9fdfa] border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 uppercase">
            Giao Hàng Tốc Độ - Đóng Gói Chuẩn Mực
          </h2>
          <p className="text-gray-600">Sản phẩm được bảo vệ an toàn tuyệt đối khi đến tay bạn</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-[#4bb3e3]">
              <Box size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Đóng Gói Kỹ Càng</h3>
            <p className="text-gray-600">
              Mỗi đơn hàng đều được đội ngũ kho Beyond kiểm tra cẩn thận, bọc chống sốc nhiều lớp trước khi giao cho đơn vị vận chuyển.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-500">
              <Truck size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Giao Hàng Nhanh Chóng</h3>
            <p className="text-gray-600">
              Hàng luôn có sẵn tại kho nội địa. Xử lý và giao hàng ngay khi nhận được đơn, thời gian giao hàng từ 1-3 ngày trên toàn quốc.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
