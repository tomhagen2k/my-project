"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FeedbackWall() {
  const reviews = [
    {
      id: 1,
      user: "q*****7",
      rating: 5,
      date: "2026-02-13 14:17",
      variant: "Xanh lam-LF110",
      content: "Mình đã nhận được hàng, sản phẩm được đóng gói rất cẩn thận, không bị móp méo hay hư hại gì. Giao hàng nhanh hơn dự kiến, shipper thân thiện. Sản phẩm đúng như mô tả của shop, chất lượng ổn so với mức giá, hoàn toàn hài lòng với trải nghiệm mua sắm lần này. Shop phản hồi tin nhắn nhanh, tư vấn nhiệt tình, hỗ trợ rất tốt trong suốt quá trình đặt hàng. Mình đã dùng thử và thấy ổn, hi vọng dùng lâu dài vẫn sẽ bền. Sẽ tiếp tục ủng hộ shop trong các đơn tiếp theo. Cảm ơn shop nhiều!",
      media: [
        { type: "video", src: "/videos/review1_video.mp4" },
        { type: "image", src: "/images/review1_image1.webp" },
        { type: "image", src: "/images/review1_image2.webp" },
      ]
    },
    {
      id: 2,
      user: "l*****8",
      rating: 5,
      date: "2026-02-05 15:25",
      variant: "Vàng 3.0-LF100",
      attributes: [
        { label: "Kiểm soát dầu", value: "tốt" },
        { label: "Che phủ", value: "che phủ ok vẫn giữ đc sự mỏng nhẹ" },
        { label: "Chất lượng", value: "thấm nhanh, dễ tán" }
      ],
      content: "Hàng giao nhanh, đóng gói cẩn thận, đc tặng kèm theo mút, chất kem dễ tán thấm nhanh, có độ lỏng nhất định, che phủ ok, màu k trắng lắm vs da mik, nma giá hạt dẻ nên mua nhé",
      media: [
        { type: "video", src: "/videos/review2_video.mp4" },
        { type: "image", src: "/images/review2_image1.webp" },
      ]
    },
    {
      id: 3,
      user: "l*****h",
      rating: 5,
      date: "2026-02-04 18:24",
      variant: "Xanh lam-LP110S",
      attributes: [
        { label: "Kiểm soát dầu", value: "khá tốt" },
        { label: "Che phủ", value: "tốt" },
        { label: "Chất lượng", value: "tuyệt vời" }
      ],
      content: "ooiiii chất kem lỏng mê, tán ra siêu dễ siêu mịn, dc tặng kèm bông mút hihii 🥰🥰, bà nào sợ màu tối quá hoặc sáng quá, thì LP110 trắng hồng này là lựa chọn tuyệt nhất nhenn 🤩 date xa tha hồ dùng 💯",
      media: [
        { type: "video", src: "/videos/review3_video.mp4" },
        { type: "image", src: "/images/review3_image1.webp" },
        { type: "image", src: "/images/review3_image2.webp" }
      ]
    }
  ];

  const [expandedMedia, setExpandedMedia] = useState<string | null>(null);

  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Đánh Giá Từ Khách Hàng
          </h2>
          <div className="flex items-center justify-center gap-4 text-xl">
            <div className="flex text-yellow-400">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <span className="font-bold">4.9/5</span>
            <span className="text-gray-500 text-base">(74.390+ Đánh giá)</span>
          </div>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 flex-shrink-0">
                  {review.user[0].toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{review.user}</div>
                  <div className="flex text-yellow-400 text-sm mt-1">★★★★★</div>
                  <div className="text-xs text-gray-400 mt-1 flex items-center gap-2">
                    <span>{review.date}</span>
                    <span>|</span>
                    <span>Phân loại hàng: {review.variant}</span>
                  </div>

                  {review.attributes && (
                    <div className="mt-4 space-y-1 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                      {review.attributes.map((attr, idx) => (
                        <div key={idx}>
                          <span className="font-semibold">{attr.label}: </span>
                          {attr.value}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 text-gray-800 leading-relaxed">
                    {review.content}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {review.media.map((m, idx) => (
                      <div 
                        key={idx} 
                        className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:border-primary relative"
                        onClick={() => setExpandedMedia(m.src)}
                      >
                        {m.type === "video" ? (
                          <>
                            <video src={m.src} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                              <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center">
                                <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-gray-900 border-b-4 border-b-transparent ml-1" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <img src={m.src} alt="Review media" className="w-full h-full object-cover" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expandedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedMedia(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <div className="max-w-4xl max-h-[90vh] w-full relative">
              <button 
                className="absolute -top-10 right-0 text-white text-xl"
                onClick={() => setExpandedMedia(null)}
              >
                Đóng (X)
              </button>
              {expandedMedia.endsWith(".mp4") ? (
                <video src={expandedMedia} controls autoPlay className="w-full h-full object-contain" />
              ) : (
                <img src={expandedMedia} alt="Expanded review" className="w-full h-full object-contain" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
