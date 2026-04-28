"use client";
import { useState } from "react";
import StickyHeader from "@/components/sections/StickyHeader";
import Hero from "@/components/sections/Hero";
import CoreValues from "@/components/sections/CoreValues";
import VisualDemo from "@/components/sections/VisualDemo";
import PainPoint from "@/components/sections/PainPoint";
import TechIngredients from "@/components/sections/TechIngredients";
import Comparison from "@/components/sections/Comparison";
import Application from "@/components/sections/Application";
import ProductGallery from "@/components/sections/ProductGallery";
import ExpertEndorsement from "@/components/sections/ExpertEndorsement";
import FeedbackWall from "@/components/sections/FeedbackWall";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import TrustBadges from "@/components/sections/TrustBadges";
import Footer from "@/components/sections/Footer";
import OrderModal from "@/components/sections/OrderModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCombo, setSelectedCombo] = useState<string | undefined>(undefined);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleOrder = (comboId?: string) => {
    setSelectedCombo(comboId);
    setIsModalOpen(true);
  };

  const handleOrderSuccess = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl max-w-md w-full text-center shadow-2xl">
          <div className="w-20 h-20 bg-green-100 text-brand-green-dark rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
            ✓
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Đặt Hàng Thành Công!</h2>
          <p className="text-gray-600 mb-8">
            Cảm ơn bạn đã tin tưởng Skin1004. Đội ngũ CSKH sẽ liên hệ với bạn qua số điện thoại trong vòng 15 phút tới để xác nhận đơn hàng.
          </p>
          <button 
            onClick={() => setShowSuccess(false)}
            className="w-full py-3 bg-brand-green-dark text-white rounded-xl font-bold hover:bg-green-800 transition"
          >
            Quay Lại Trang Chủ
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative">
      <StickyHeader />
      
      <div onClick={() => handleOrder()} className="contents">
        {/* We use a wrapper or just pass down the handler if components have their own buttons. 
            Hero and Pricing have their own buttons, we need to bind them. 
            But Hero uses an anchor tag currently. Let's fix Hero to accept onOrder. */}
      </div>

      {/* Hero Section */}
      <div className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-b from-brand-light to-brand-cream">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="inline-block bg-brand-green-dark/10 text-brand-green-dark px-3 py-1 rounded-full text-xs font-bold mb-4">
              Kem Chống Nắng Skin1004 Madagascar Centella Air-Fit Suncream Plus
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-4">
              Bảo Vệ Toàn Diện <br/>
              <span className="text-brand-green-dark">Dịu Nhẹ Làn Da</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              Vẫn mạnh mẽ và đột phá, SKIN1004 đã nâng cấp nhiều tính năng mới vượt trội với thành phần đơn giản, phù hợp mọi loại da, đặc biệt da mụn nhạy cảm.
            </p>
            <button onClick={() => handleOrder()} className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white text-lg font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all animate-pulse">
              NHẬN ƯU ĐÃI NGAY
            </button>
          </div>

          <div className="order-1 md:order-2 relative aspect-square md:aspect-auto md:h-[500px]">
            <img src="/images/product/1.jpeg" alt="Hero" className="object-cover rounded-3xl shadow-2xl w-full h-full" />
          </div>
        </div>
      </div>

      <CoreValues />
      <VisualDemo />
      <PainPoint />
      <TechIngredients />
      <Comparison />
      <Application />
      <ProductGallery />
      <ExpertEndorsement />
      <FeedbackWall />
      <Pricing onOrder={handleOrder} />
      <FAQ />
      <TrustBadges />
      <Footer />

      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedComboId={selectedCombo}
        onSuccess={handleOrderSuccess}
      />
    </main>
  );
}
