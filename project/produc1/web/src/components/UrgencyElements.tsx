"use client";
import React, { useState, useEffect } from 'react';

export default function UrgencyElements({ onOrderClick }: { onOrderClick: () => void }) {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [fakeOrder, setFakeOrder] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const names = ['Linh T.', 'Ngọc H.', 'Phương A.', 'Mai N.', 'Thảo V.'];
    const interval = setInterval(() => {
      const name = names[Math.floor(Math.random() * names.length)];
      setFakeOrder(`${name} vừa đặt Combo Xanh 150ml x 2`);
      setTimeout(() => setFakeOrder(null), 4000);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      {/* Sticky Bottom Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-[40] flex justify-between items-center md:hidden">
        <div>
          <div className="text-xs text-slate-500 font-bold mb-1">Thời gian ưu đãi còn:</div>
          <div className="flex gap-1 text-accent font-extrabold text-lg">
            <span className="bg-red-100 px-1.5 rounded">{String(minutes).padStart(2, '0')}</span> :
            <span className="bg-red-100 px-1.5 rounded">{String(seconds).padStart(2, '0')}</span>
          </div>
        </div>
        <button 
          onClick={onOrderClick}
          className="bg-gradient-to-r from-accent to-orange-500 text-white px-6 py-3 rounded-xl font-bold animate-pulse shadow-lg shadow-accent/50"
        >
          MUA NGAY
        </button>
      </div>

      {/* Fake Order Popup */}
      {fakeOrder && (
        <div className="fixed bottom-24 md:bottom-6 left-4 z-[45] bg-white text-sm font-bold text-slate-800 px-4 py-3 rounded-lg shadow-2xl border-l-4 border-accent animate-in fade-in slide-in-from-bottom-4">
          🛒 {fakeOrder}
        </div>
      )}
    </>
  );
}
