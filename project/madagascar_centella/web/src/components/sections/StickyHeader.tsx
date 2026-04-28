"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function StickyHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [showBuyButton, setShowBuyButton] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 500) {
      setShowBuyButton(true);
    } else {
      setShowBuyButton(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl text-brand-green-dark">SKIN1004</div>
        <nav className="hidden md:flex gap-6 text-sm font-semibold text-brand-dark">
          <a href="#thong-tin" className="hover:text-brand-green transition">THÔNG TIN</a>
          <a href="#phan-hoi" className="hover:text-brand-green transition">PHẢN HỒI</a>
          <a href="#khuyen-mai" className="hover:text-brand-green transition">KHUYẾN MÃI</a>
        </nav>
        {showBuyButton && (
          <a href="#dat-hang" className="bg-brand-orange text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:opacity-90 transition shadow-lg">
            <ShoppingCart size={16} /> MUA NGAY
          </a>
        )}
      </div>
    </motion.header>
  );
}
