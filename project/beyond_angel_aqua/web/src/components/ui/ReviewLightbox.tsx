"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface ReviewLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  media: MediaItem[];
  initialIndex?: number;
}

export default function ReviewLightbox({ isOpen, onClose, media, initialIndex = 0 }: ReviewLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, initialIndex]);

  if (!isOpen) return null;

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const currentMedia = media[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full"
        >
          <X size={32} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
          {media.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevMedia(); }}
                className="absolute left-4 md:left-10 text-white/70 hover:text-white p-3 bg-black/50 hover:bg-black/80 rounded-full transition-all z-10"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextMedia(); }}
                className="absolute right-4 md:right-10 text-white/70 hover:text-white p-3 bg-black/50 hover:bg-black/80 rounded-full transition-all z-10"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <div className="relative w-full max-w-4xl h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {currentMedia.type === "image" ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={currentMedia.src}
                      alt="Review media"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  <video
                    src={currentMedia.src}
                    controls
                    autoPlay
                    className="max-w-full max-h-full outline-none"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Indicators */}
          {media.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {media.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
