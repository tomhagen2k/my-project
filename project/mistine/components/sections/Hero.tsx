"use client";

import React from "react";
import { motion } from "framer-motion";
import { openOrderModal } from "../OrderModal";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Background blobs for Organic Softness */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-40 left-0 -ml-40 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
            Phiên Bản Mới - Blue Shield 5.0
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
            Lớp Nền Hoàn Hảo <br />
            <span className="text-primary italic text-3xl sm:text-5xl md:text-7xl">Suốt 36H</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Kiềm dầu đỉnh cao, không trôi trong nước. Phức hợp Tảo Địa Trung Hải nuôi dưỡng làn da từ bên trong, cho lớp finish mỏng nhẹ tự nhiên như da thật.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="xl" onClick={() => openOrderModal(2)} className="animate-pulse-slow">
              NHẬN ƯU ĐÃI NGAY
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★★★★★</span>
              <span>4.9/5 Sao</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <div>74,390+ đã bán</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[500px] md:h-[700px] w-full flex items-center justify-center"
        >
          <div className="absolute inset-0 organic-shape bg-gradient-to-br from-primary/10 to-secondary/30 scale-90" />
          <img
            src="/images/image1.webp"
            alt="Kem Nền Mistine"
            className="relative z-10 w-full h-full object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-700"
          />
          
          {/* Floating badges - Positioned further away to avoid bottle text overlap */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-10 right-0 md:-right-10 glass px-5 py-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-white/40"
          >
            <div className="text-3xl font-bold text-primary">36H</div>
            <div className="text-xs font-bold leading-tight uppercase tracking-tighter">Kiềm<br/>Dầu</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-0 md:-left-10 glass px-5 py-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-white/40"
          >
            <div className="text-3xl font-bold text-accent">0%</div>
            <div className="text-xs font-bold leading-tight uppercase tracking-tighter">Gây<br/>Kích Ứng</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
