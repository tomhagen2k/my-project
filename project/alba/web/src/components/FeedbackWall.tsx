"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X } from "lucide-react";

const reviews = [
  {
    name: "x***0",
    rating: 5,
    date: "04-04-2023",
    content: "Kem chống nắng White Truffle Waterfull Tone-Up Sun Cream. Sản phẩm chứa thành phần nấm Truffle Trắng an toàn và lành tính. Texture sản phẩm mỏng nhẹ, khi apply lên da mình thấy thấm cũng kha khá nhanh, không gây bết dính hay nặng mặt gì cả. Điều mình thích nhất là độ nâng tone khá là tự nhiên nhẹ nhàng, thích hợp cho các bạn học sinh sinh viên sử dụng đi học đi chơi, da vẫn tươi tắn nè.",
    media: [
      { type: "image", src: "/reviews/review1_image1.jpeg" },
      { type: "image", src: "/reviews/review1_image2.jpeg" },
      { type: "image", src: "/reviews/review1_image3.jpeg" },
      { type: "image", src: "/reviews/review1_image4.jpeg" },
      { type: "image", src: "/reviews/review1_image5.jpeg" }
    ]
  },
  {
    name: "b***1",
    rating: 5,
    date: "23-03-2023",
    content: "Kem chống nắng giúp nâng tone nhẹ nhàng tự nhiên và giúp lớp nền mịn hơn. Bôi lên không bị bết dính, cảm giác khá thoáng mịn, mùi thơm. Sẽ mua lại trong dịp tới!",
    media: [
      { type: "video", src: "/reviews/review2_video.mp4" }
    ]
  },
  {
    name: "d***7",
    rating: 5,
    date: "03-04-2023",
    content: "Kem chống nắng vừa nâng tone, dưỡng ẩm cho da. Mình sử dụng ko thấy bết dính với bị vệt trắng như kcn khác, đến chiều da mình vẫn trắng hồng tươi tắn luôn á troii 😆",
    media: [
      { type: "image", src: "/reviews/review3_image1.webp" },
      { type: "video", src: "/reviews/review3_video.mp4" }
    ]
  }
];

export default function FeedbackWall() {
  const [activeMedia, setActiveMedia] = useState<{type: string, src: string} | null>(null);

  return (
    <section id="feedback" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Đánh Giá Từ Khách Hàng
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl font-bold text-gray-900">4.9</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
          </div>
          <p className="text-gray-500">Dựa trên hàng ngàn đánh giá thực tế trên Shopee</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="flex text-yellow-400 text-sm my-1">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <div className="text-xs text-gray-400">{review.date}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-4">{review.content}</p>
              
              {review.media && review.media.length > 0 && (
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {review.media.map((m, i) => (
                    <div 
                      key={i} 
                      onClick={() => setActiveMedia(m)}
                      className="w-16 h-16 rounded-xl overflow-hidden shrink-0 cursor-pointer relative border border-gray-100 hover:opacity-80 transition-opacity"
                    >
                      {m.type === "video" ? (
                        <>
                          <video src={m.src} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-pink-500 border-b-4 border-b-transparent ml-1"></div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <img src={m.src} className="w-full h-full object-cover" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/90 flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setActiveMedia(null)}
              className="absolute top-4 right-4 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {activeMedia.type === "video" ? (
                <video src={activeMedia.src} controls autoPlay className="max-w-full max-h-full rounded-lg" />
              ) : (
                <img src={activeMedia.src} className="max-w-full max-h-full object-contain rounded-lg" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
