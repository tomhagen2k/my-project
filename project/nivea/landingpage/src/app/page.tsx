import React from "react";
import { OrderProvider } from "@/components/OrderProvider";
import { Header, Footer, StickyBottomBar } from "@/components/LayoutComponents";
import { OrderModal } from "@/components/OrderModal";
import { Hero, CoreValue, VisualDemo, BeforeAfter } from "@/components/CoreSections";
import { Ingredients, Lifestyle, Guide, Comparison } from "@/components/ProductDetails";
import { Expert, Feedback, SocialCounters, FAQ } from "@/components/SocialProof";
import { Pricing, TrustGuarantees } from "@/components/Conversion";

export default function Home() {
  return (
    <OrderProvider>
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-nivea-blue/20">
        <Header />
        
        <main>
          <Hero />
          <CoreValue />
          <VisualDemo />
          <BeforeAfter />
          <Ingredients />
          <Lifestyle />
          <Guide />
          <Comparison />
          <Expert />
          <Feedback />
          <SocialCounters />
          <FAQ />
          <Pricing />
          <TrustGuarantees />
        </main>
        
        <Footer />
        <StickyBottomBar />
        <OrderModal />
      </div>
    </OrderProvider>
  );
}
