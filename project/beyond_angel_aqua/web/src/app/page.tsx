"use client";

import StickyHeader from "@/components/sections/StickyHeader";
import HeroSection from "@/components/sections/HeroSection";
import ValueProposition from "@/components/sections/ValueProposition";
import VisualDemo from "@/components/sections/VisualDemo";
import PainPointSolution from "@/components/sections/PainPointSolution";
import TechIngredients from "@/components/sections/TechIngredients";
import ProductGallery from "@/components/sections/ProductGallery";
import ApplicationGuide from "@/components/sections/ApplicationGuide";
import ComparisonTable from "@/components/sections/ComparisonTable";
import ExpertEndorsement from "@/components/sections/ExpertEndorsement";
import FeedbackWall from "@/components/sections/FeedbackWall";
import SocialProof from "@/components/sections/SocialProof";
import FAQSection from "@/components/sections/FAQSection";
import TieredPricing from "@/components/sections/TieredPricing";
import UrgencyElements from "@/components/sections/UrgencyElements";
import TrustBadges from "@/components/sections/TrustBadges";
import VisualLogistics from "@/components/sections/VisualLogistics";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden">
      <StickyHeader />
      
      {/* Sections */}
      <div className="w-full" id="thong-tin">
        <HeroSection />
        <ValueProposition />
        <VisualDemo />
        <PainPointSolution />
        <TechIngredients />
        <ProductGallery />
        <ApplicationGuide />
        <ComparisonTable />
        <ExpertEndorsement />
      </div>

      <div className="w-full" id="phan-hoi">
        <FeedbackWall />
        <SocialProof />
      </div>

      <div className="w-full" id="khuyen-mai">
        <UrgencyElements />
        <TieredPricing />
        <TrustBadges />
        <FAQSection />
        <VisualLogistics />
      </div>

      <Footer />
    </main>
  );
}
