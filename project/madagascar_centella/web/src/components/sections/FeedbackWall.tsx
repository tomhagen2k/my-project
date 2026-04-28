"use client";
import { useState } from "react";
import Image from "next/image";
import { productData } from "@/lib/data";
import { X, PlayCircle } from "lucide-react";

export default function FeedbackWall() {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<"image" | "video">("image");

  const openMedia = (url: string, type: "image" | "video") => {
    setSelectedMedia(url);
    setMediaType(type);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  return (
    <section id="phan-hoi" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-dark mb-12">
          Hàng Ngàn Khách Hàng <span className="text-brand-green-dark">Hài Lòng</span>
        </h2>
        
        <div className="space-y-6">
          {productData.reviews.map((review) => (
            <div key={review.id} className="bg-brand-cream p-6 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-500">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-bold text-brand-dark">{review.name}</div>
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span>|</span>
                    <span>Phân loại: {review.variant}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 text-sm">{review.content}</p>
              
              <div className="flex flex-wrap gap-2">
                {review.video && (
                  <div 
                    className="relative w-20 h-20 bg-black rounded-lg overflow-hidden cursor-zoom-in group"
                    onClick={() => openMedia(review.video!, "video")}
                  >
                    <video src={review.video} className="w-full h-full object-cover opacity-80" muted />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="text-white w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                )}
                {review.images.map((img, i) => (
                  <div 
                    key={i} 
                    className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200 cursor-zoom-in"
                    onClick={() => openMedia(img, "image")}
                  >
                    <Image src={img} alt="review image" fill className="object-cover hover:scale-110 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Media Viewer */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={closeMedia}>
          <button 
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-[210]"
            onClick={(e) => { e.stopPropagation(); closeMedia(); }}
          >
            <X size={32} />
          </button>
          
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {mediaType === "image" ? (
              <div className="relative w-full h-full aspect-auto min-h-[300px]">
                <img 
                  src={selectedMedia} 
                  alt="Fullscreen view" 
                  className="max-w-full max-h-[90vh] object-contain mx-auto shadow-2xl rounded-lg"
                />
              </div>
            ) : (
              <video 
                src={selectedMedia} 
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" 
                controls 
                autoPlay 
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
