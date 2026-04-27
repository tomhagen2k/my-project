"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { openOrderModal } from "../OrderModal";
import { Button } from "../ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 100);
    });
  }, [scrollY]);

  const navItems = [
    { label: "THÔNG TIN", href: "#info" },
    { label: "PHẢN HỒI", href: "#reviews" },
    { label: "KHUYẾN MÃI", href: "#pricing" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="font-serif font-bold text-xl md:text-2xl tracking-tighter text-primary">
          MISTINE
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-gray-800 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Button size="sm" onClick={() => openOrderModal(2)}>
              MUA NGAY
            </Button>
          </motion.div>
          
          {/* Mobile Menu Icon (Simple version) */}
          <button className="md:hidden p-2 text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
