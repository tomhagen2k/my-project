"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Tại Sao Chọn d'Alba?
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-xl shadow-pink-50 border border-gray-100 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 border-b border-gray-100 bg-gray-50 text-gray-500 font-semibold w-1/3">Tiêu chí</th>
                  <th className="p-6 border-b border-gray-100 bg-pink-50 text-pink-600 font-bold w-1/3 text-lg">d'Alba Waterfull Tone-up</th>
                  <th className="p-6 border-b border-gray-100 bg-gray-50 text-gray-500 font-semibold w-1/3">KCN Thông Thường</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {[
                  ["Kết cấu", "Lỏng nhẹ, thấm nhanh", "Đặc, dễ gây bí da"],
                  ["Hiệu ứng da", "Nâng tông hồng hào tự nhiên", "Trắng bệch hoặc không đều màu"],
                  ["Thành phần", "100% Thuần chay, Truffle trắng", "Hóa chất tổng hợp"],
                  ["Công dụng", "3 trong 1 (Chống nắng, lót, dưỡng)", "Chỉ chống nắng đơn thuần"],
                  ["Lớp Finish", "Căng bóng rạng rỡ (Glowy)", "Khô khan hoặc bóng dầu"]
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-6 border-b border-gray-100 font-medium text-gray-700">{row[0]}</td>
                    <td className="p-6 border-b border-gray-100 bg-pink-50/30">
                      <div className="flex items-center gap-2 text-pink-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" />
                        <span>{row[1]}</span>
                      </div>
                    </td>
                    <td className="p-6 border-b border-gray-100">
                      <div className="flex items-center gap-2 text-gray-500">
                        <XCircle className="w-5 h-5 text-gray-400 shrink-0" />
                        <span>{row[2]}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
