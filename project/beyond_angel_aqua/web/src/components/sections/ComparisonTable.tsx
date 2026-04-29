"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
            Sự Khác Biệt
          </h2>
          <p className="text-lg text-gray-600">Lựa chọn thông minh cho làn da của bạn</p>
        </div>

        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-6 md:p-8 w-1/3 text-lg font-bold text-gray-500 uppercase tracking-wider">Tiêu Chí</th>
                <th className="p-6 md:p-8 w-1/3 border-x border-gray-100 bg-[#e0f4ff]/50">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-xl md:text-2xl font-black text-[#4bb3e3] mb-2">BEYOND ANGEL AQUA</span>
                    <span className="text-xs bg-[#4bb3e3] text-white px-3 py-1 rounded-full uppercase tracking-widest font-bold">Lựa chọn của bạn</span>
                  </div>
                </th>
                <th className="p-6 md:p-8 w-1/3 text-center text-xl font-bold text-gray-400">Kem Thông Thường</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-lg">
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 md:p-8 font-semibold text-gray-800">Khả năng cấp ẩm</td>
                <td className="p-6 md:p-8 border-x border-gray-100 bg-[#e0f4ff]/20 text-center">
                  <div className="flex flex-col items-center">
                    <CheckCircle2 className="text-[#4bb3e3] mb-2" size={28} />
                    <span className="font-medium text-gray-800">Cấp ẩm sâu 24H với HA kép</span>
                  </div>
                </td>
                <td className="p-6 md:p-8 text-center text-gray-500">
                  <div className="flex flex-col items-center opacity-70">
                    <XCircle className="text-gray-400 mb-2" size={28} />
                    <span>Chỉ ẩm bề mặt, mau khô</span>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 md:p-8 font-semibold text-gray-800">Thành phần</td>
                <td className="p-6 md:p-8 border-x border-gray-100 bg-[#e0f4ff]/20 text-center">
                  <div className="flex flex-col items-center">
                    <CheckCircle2 className="text-[#4bb3e3] mb-2" size={28} />
                    <span className="font-medium text-gray-800">Thực vật Ulleung, Tri-Sap Complex</span>
                  </div>
                </td>
                <td className="p-6 md:p-8 text-center text-gray-500">
                  <div className="flex flex-col items-center opacity-70">
                    <XCircle className="text-gray-400 mb-2" size={28} />
                    <span>Chứa cồn, dễ gây kích ứng</span>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 md:p-8 font-semibold text-gray-800">Độ thẩm thấu</td>
                <td className="p-6 md:p-8 border-x border-gray-100 bg-[#e0f4ff]/20 text-center">
                  <div className="flex flex-col items-center">
                    <CheckCircle2 className="text-[#4bb3e3] mb-2" size={28} />
                    <span className="font-medium text-gray-800">Dạng kem mỏng nhẹ, làm dịu tức thì</span>
                  </div>
                </td>
                <td className="p-6 md:p-8 text-center text-gray-500">
                  <div className="flex flex-col items-center opacity-70">
                    <XCircle className="text-gray-400 mb-2" size={28} />
                    <span>Chất kem dày, gây bí da</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
