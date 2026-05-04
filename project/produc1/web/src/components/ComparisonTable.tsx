import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Sự Khác Biệt Rõ Rệt</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="p-4 md:p-6 font-bold text-slate-500 text-lg w-1/3">Tiêu Chí</th>
                <th className="p-4 md:p-6 font-bold text-primary text-xl w-1/3 bg-primary-light/10 text-center">BEYOND ANGEL AQUA</th>
                <th className="p-4 md:p-6 font-bold text-slate-400 text-xl w-1/3 text-center">Kem Dưỡng Thông Thường</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-4 md:p-6 font-semibold">Khả năng giữ ẩm</td>
                <td className="p-4 md:p-6 text-center bg-primary-light/10"><span className="font-bold text-green-600">Lên đến 24 giờ</span></td>
                <td className="p-4 md:p-6 text-center text-slate-500">Chỉ 2-4 giờ</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 md:p-6 font-semibold">Cảm giác trên da</td>
                <td className="p-4 md:p-6 flex justify-center bg-primary-light/10"><CheckCircle className="text-green-500 w-6 h-6" /></td>
                <td className="p-4 md:p-6"><div className="flex justify-center"><XCircle className="text-red-400 w-6 h-6" /></div></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 md:p-6 font-semibold">Phục hồi màng lipid</td>
                <td className="p-4 md:p-6 flex justify-center bg-primary-light/10"><CheckCircle className="text-green-500 w-6 h-6" /></td>
                <td className="p-4 md:p-6"><div className="flex justify-center"><XCircle className="text-red-400 w-6 h-6" /></div></td>
              </tr>
              <tr>
                <td className="p-4 md:p-6 font-semibold">Phù hợp da nhạy cảm</td>
                <td className="p-4 md:p-6 flex justify-center bg-primary-light/10"><CheckCircle className="text-green-500 w-6 h-6" /></td>
                <td className="p-4 md:p-6"><div className="flex justify-center"><XCircle className="text-red-400 w-6 h-6" /></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
