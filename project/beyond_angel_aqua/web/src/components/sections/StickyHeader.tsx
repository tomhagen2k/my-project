"use client";

import { useState, useEffect } from "react";
import { useOrder } from "@/components/OrderContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useOrder();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "thong-tin", label: "THÔNG TIN" },
    { id: "phan-hoi", label: "PHẢN HỒI" },
    { id: "khuyen-mai", label: "KHUYẾN MÃI" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? "glass-dark py-3 shadow-lg" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer flex items-center"
          >
            <Image 
              src="/logo.png" 
              alt="Tom Hagen Logo" 
              width={200} 
              height={60} 
              className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-bold uppercase text-gray-800 hover:text-brand transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => openModal()}
              animate={{ 
                scale: isScrolled ? [1, 1.05, 1] : 1,
                rotate: isScrolled ? [0, -1, 1, -1, 0] : 0,
                boxShadow: isScrolled ? [
                  "0 0 0 0 rgba(75, 179, 227, 0)",
                  "0 0 0 15px rgba(75, 179, 227, 0.4)",
                  "0 0 0 0 rgba(75, 179, 227, 0)"
                ] : "none"
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                isScrolled 
                  ? "bg-brand text-white shadow-lg scale-100 opacity-100" 
                  : "bg-white/80 text-brand scale-95 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto border border-brand/20"
              }`}
            >
              MUA NGAY
            </motion.button>

            {/* Hamburger Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 pt-20 pb-10 px-6 glass-dark md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-2xl font-black text-gray-900 hover:text-brand transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                openModal();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-5 bg-brand text-white rounded-full font-black text-xl shadow-xl shadow-brand/30 mt-4"
            >
              NHẬN ƯU ĐÃI NGAY
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
