"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { X, Star, PlayCircle } from 'lucide-react';

export default function FeedbackWall() {
  const [activeMedia, setActiveMedia] = useState<{ type: 'image' | 'video', src: string } | null>(null);

  const reviews = [
    {
      id: 1,
      name: 'y*****2',
      date: '2026-04-16 09:11',
      option: 'Xanh 150ml x 2',
      content: 'Sản phẩm giống như hình ảnh trên Shopee. Rất hài lòng và sẽ quay lại lần sau nha! Sản phẩm chất lượng tốt, giá không đau ví.',
      media: [
        { type: 'image', src: '/review/image_review/review1_image1.jpg' },
        { type: 'video', src: '/review/image_review/review1_video.mp4' },
      ]
    },
    {
      id: 2,
      name: 'n*****._',
      date: '2026-04-05 10:17',
      option: 'Xanh Fullbox 150ml',
      content: 'đóng gói siêu kĩ càng, mình mua sale rẻ mà dung tích rất là to nên là siêu tiết kiệm và đáng yêu và đáng mua',
      media: [
        { type: 'image', src: '/review/image_review/review2_image1.jpg' },
        { type: 'video', src: '/review/image_review/review2_video.mp4' },
      ]
    },
    {
      id: 3,
      name: 'n*****4',
      date: '2026-01-13 21:42',
      option: 'Xanh Fullbox 150ml',
      content: 'Giao hàng nhanh lắm, mình dùng hơn tuần r mới quay lại đánh giá, giá mình thấy khá rẻ so với chất lượng dùng trc makeup ổn nha',
      media: [
        { type: 'image', src: '/review/image_review/review3_image1.jpg' },
        { type: 'video', src: '/review/image_review/review3_video.mp4' },
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="phan-hoi">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Đánh Giá Thực Tế Từ Khách Hàng</h2>
          <div className="flex justify-center items-center gap-2 text-yellow-400">
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <span className="text-slate-800 font-bold ml-2">4.9/5 (74.390+ Đánh giá)</span>
          </div>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="flex text-yellow-400 text-sm">
                    <Star fill="currentColor" className="w-4 h-4" /><Star fill="currentColor" className="w-4 h-4" /><Star fill="currentColor" className="w-4 h-4" /><Star fill="currentColor" className="w-4 h-4" /><Star fill="currentColor" className="w-4 h-4" />
                  </div>
                </div>
                <div className="ml-auto text-xs text-gray-400 text-right">
                  {review.date} <br /> Phân loại: {review.option}
                </div>
              </div>
              <p className="text-slate-700 mb-4">{review.content}</p>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {review.media.map((m, idx) => (
                  <div 
                    key={idx} 
                    className="relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer shrink-0 border border-gray-200"
                    onClick={() => setActiveMedia({ type: m.type as any, src: m.src })}
                  >
                    {m.type === 'image' ? (
                      <Image src={m.src} alt="Review media" fill className="object-cover" />
                    ) : (
                      <>
                        <video src={m.src} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <PlayCircle className="text-white w-8 h-8" />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Media Viewer */}
      {activeMedia && (
        <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4">
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 z-10" onClick={() => setActiveMedia(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-4xl max-h-[80vh] flex items-center justify-center">
            {activeMedia.type === 'image' ? (
              <img src={activeMedia.src} alt="Review full" className="max-w-full max-h-[80vh] object-contain" />
            ) : (
              <video src={activeMedia.src} controls autoPlay className="max-w-full max-h-[80vh]"></video>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
