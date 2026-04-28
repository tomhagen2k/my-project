"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useOrder } from "@/context/OrderContext";

export default function StickyHeader() {
  const { openModal } = useOrder();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-white/70 border-b border-pink-100/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tighter text-gray-900 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          d'Alba
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => handleScrollTo("info")} className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors">
            THÔNG TIN
          </button>
          <button onClick={() => handleScrollTo("feedback")} className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors">
            PHẢN HỒI
          </button>
          <button onClick={() => handleScrollTo("promotion")} className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors">
            KHUYẾN MÃI
          </button>
        </nav>

        {isScrolled && (
          <button
            onClick={openModal}
            className="hidden md:block bg-gradient-to-r from-pink-500 to-coral-400 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            MUA NGAY
          </button>
        )}
      </div>
    </motion.header>
  );
}
