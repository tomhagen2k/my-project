"use client";

import { useState } from "react";
import Image from "next/image";
import ReviewLightbox, { MediaItem } from "@/components/ui/ReviewLightbox";
import { PlayCircle } from "lucide-react";

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  option: string;
  content: string;
  media: MediaItem[];
}

const REVIEWS: Review[] = [
  {
    id: 1,
    author: "yenchiii211312",
    rating: 5,
    date: "2026-04-16 09:11",
    option: "Xanh 150ml x 2",
    content: "Sản phẩm giống như hình ảnh trên Shopee. Rất hài lòng và sẽ quay lại lần sau nha! Sản phẩm chất lượng tốt, giá không đau ví.",
    media: [
      { type: "image", src: "/images/review/review1_image1.jpg" },
      { type: "video", src: "/videos/review/review1_video.mp4" }
    ]
  },
  {
    id: 2,
    author: "ngocdiepppp._",
    rating: 5,
    date: "2026-04-05 10:17",
    option: "Xanh Fullbox 150ml",
    content: "đóng gói siêu kĩ càng, mình mua sale rẻ mà dung tích rất là to nên là siêu tiết kiệm và đáng yêu và đáng mua",
    media: [
      { type: "image", src: "/images/review/review2_image1.jpg" },
      { type: "video", src: "/videos/review/review2_video.mp4" }
    ]
  },
  {
    id: 3,
    author: "n*****4",
    rating: 5,
    date: "2026-01-13 21:42",
    option: "Xanh Fullbox 150ml",
    content: "Giao hàng nhanh lắm, mình dùng hơn tuần r mới quay lại đánh giá, giá mình thấy khá rẻ so với chất lượng dùng trc makeup ổn nha",
    media: [
      { type: "image", src: "/images/review/review3_image1.jpg" },
      { type: "video", src: "/videos/review/review3_video.mp4" }
    ]
  }
];

export default function FeedbackWall() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState<MediaItem[]>([]);
  const [initialIndex, setInitialIndex] = useState(0);

  const openMedia = (mediaArray: MediaItem[], idx: number) => {
    setCurrentMedia(mediaArray);
    setInitialIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
            Khách Hàng Nói Gì?
          </h2>
          <p className="text-lg text-gray-600">Những đánh giá chân thực từ người dùng Shopee</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-[#fcfdfd] border border-gray-100 rounded-[32px] p-6 shadow-xl shadow-blue-50/50 hover:shadow-2xl transition-shadow flex flex-col h-full">
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4bb3e3] to-blue-200 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-bold text-gray-800">{review.author}</div>
                  <div className="flex text-[#facc15] text-sm">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-400 mb-4 pb-4 border-b border-gray-100">
                {review.date} | Phân loại: {review.option}
              </div>

              <p className="text-gray-700 flex-1 mb-6 leading-relaxed">
                "{review.content}"
              </p>

              {/* Media Grid */}
              {review.media.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mt-auto">
                  {review.media.map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => openMedia(review.media, idx)}
                      className="relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-gray-200 group"
                    >
                      {item.type === "image" ? (
                        <Image src={item.src} alt="Review Image" fill className="object-cover group-hover:scale-110 transition-transform" />
                      ) : (
                        <>
                          <video src={item.src} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                            <PlayCircle className="text-white w-8 h-8 opacity-80" />
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <ReviewLightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        media={currentMedia} 
        initialIndex={initialIndex}
      />
    </section>
  );
}
