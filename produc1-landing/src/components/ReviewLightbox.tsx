"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Media {
  type: "image" | "video";
  src: string;
}

interface ReviewLightboxProps {
  mediaList: Media[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewLightbox({ mediaList, initialIndex, isOpen, onClose }: ReviewLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  const nextMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % mediaList.length);
  };

  const prevMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

  const currentMedia = mediaList[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          {mediaList.length > 1 && (
            <>
              <button
                onClick={prevMedia}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </>
          )}

          {/* Counter */}
          {mediaList.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 bg-black/50 px-4 py-1 rounded-full text-sm">
              {currentIndex + 1} / {mediaList.length}
            </div>
          )}

          {/* Media Container */}
          <div className="w-full max-w-4xl max-h-[80vh] flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            {currentMedia?.type === "image" ? (
              <div className="relative w-full h-[70vh]">
                <Image
                  src={currentMedia.src}
                  alt="Review Media"
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <video
                src={currentMedia?.src}
                controls
                autoPlay
                className="max-h-[70vh] max-w-full"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
