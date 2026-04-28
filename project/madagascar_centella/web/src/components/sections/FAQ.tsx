"use client";
import { useState } from "react";
import { productData } from "@/lib/data";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-dark mb-12">
          Câu Hỏi <span className="text-brand-green-dark">Thường Gặp</span>
        </h2>
        <div className="space-y-4">
          {productData.faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between bg-brand-cream hover:bg-brand-light transition"
              >
                <span className="font-bold text-brand-dark">{faq.question}</span>
                {openIdx === idx ? <ChevronUp className="text-brand-green-dark" /> : <ChevronDown className="text-brand-green-dark" />}
              </button>
              {openIdx === idx && (
                <div className="p-5 bg-white text-gray-600 text-sm border-t border-gray-100 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
