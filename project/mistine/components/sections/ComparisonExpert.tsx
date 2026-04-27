"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Star, Quote } from "lucide-react";

export function ComparisonTable() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16">Sự Khác Biệt Từ Mistine</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-100">
                <th className="py-6 px-4 text-left text-xl font-bold">Tiêu chí</th>
                <th className="py-6 px-4 text-center text-xl font-bold text-primary bg-primary/5 rounded-t-2xl">Mistine Foundation</th>
                <th className="py-6 px-4 text-center text-xl font-bold text-gray-400">Sản phẩm khác</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Độ kiềm dầu", mistine: true, other: false, desc: "Lên đến 12h" },
                { label: "Độ che phủ", mistine: true, other: true, desc: "Tự nhiên, không dày" },
                { label: "Chỉ số chống nắng", mistine: true, other: false, desc: "SPF 30 PA++" },
                { label: "Cảm giác trên da", mistine: true, other: false, desc: "Mỏng nhẹ, không bí" },
              ].map((item, i) => (
                <tr key={i} className="border-b border-gray-50">
                  <td className="py-6 px-4 font-medium text-gray-700">{item.label}</td>
                  <td className="py-6 px-4 text-center bg-primary/5">
                    <div className="flex flex-col items-center">
                      <Check className="text-green-500 w-6 h-6 mb-1" />
                      <span className="text-xs text-primary font-medium">{item.desc}</span>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center">
                    {item.other ? <Check className="text-gray-300 w-6 h-6 mx-auto" /> : <X className="text-red-400 w-6 h-6 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function ExpertEndorsement() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-gray-100">
              <img src="/images/expert_holding.png" alt="Chuyên gia trang điểm" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] z-10 border border-gray-50">
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm font-bold text-gray-900 italic">"Lớp nền hoàn hảo nhất cho khí hậu nóng ẩm tại Việt Nam."</p>
            </div>
          </div>
          <div className="space-y-8">
            <Quote className="w-16 h-16 text-primary/20" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
              Lời Khuyên Từ <span className="text-primary">Chuyên Gia</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              "Tôi luôn khuyên các khách hàng của mình sử dụng Mistine vì khả năng tệp vào da cực tốt. Không chỉ che phủ, nó còn bảo vệ da khỏi tia UV và ánh sáng xanh - điều mà rất ít loại foundation cùng tầm giá làm được."
            </p>
            <div>
              <p className="text-xl font-bold text-gray-900">Trần Minh Quân</p>
              <p className="text-gray-500 font-medium">Chuyên gia trang điểm (10 năm kinh nghiệm)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
