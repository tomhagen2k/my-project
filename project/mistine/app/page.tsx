import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { CoreValue } from "@/components/sections/CoreValue";
import { VisualDemo, PainPoint } from "@/components/sections/PainPointDemo";
import { TechIngredients, Gallery } from "@/components/sections/TechGallery";
import { FeedbackWall } from "@/components/sections/FeedbackWall";
import { PricingFAQ } from "@/components/sections/PricingFAQ";
import { ComparisonTable, ExpertEndorsement } from "@/components/sections/ComparisonExpert";
import { ApplicationGuide, SocialProofCounters, TrustLogistics } from "@/components/sections/LogisticsGuide";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      {/* 1. Header (Sticky) */}
      <Header />
      
      {/* 2. Hero Section */}
      <Hero />
      
      {/* 3. Core Value Prop & 12. Social Proof Counters */}
      <CoreValue />
      <SocialProofCounters />
      
      {/* 4. Visual Demo & 5. Pain Point & Solution */}
      <PainPoint />
      <VisualDemo />
      
      {/* 6. Tech & Ingredients & 7. Visual Gallery */}
      <TechIngredients />
      <Gallery />
      
      {/* 8. Application & Guide */}
      <ApplicationGuide />
      
      {/* 9. Comparison Table */}
      <ComparisonTable />
      
      {/* 10. Expert Endorsement */}
      <ExpertEndorsement />
      
      {/* 11. Feedback Wall */}
      <FeedbackWall />
      
      {/* 13. FAQ, 14. Tiered Pricing, 15. Urgency */}
      <PricingFAQ />
      
      {/* 17. Trust Badges & 18. Visual Logistics */}
      <TrustLogistics />
      
      {/* Footer (Post-Purchase & Branding) */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">MISTINE THAILAND</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Sự lựa chọn hoàn hảo cho lớp nền tự nhiên, kiềm dầu bất chấp mọi thời tiết.</p>
          <div className="text-sm text-gray-500">
            © 2026 Mistine Official. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
