"use client";

import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import CoreValues from "@/components/CoreValues";
import VisualDemo from "@/components/VisualDemo";
import PainPoint from "@/components/PainPoint";
import Ingredients from "@/components/Ingredients";
import Gallery from "@/components/Gallery";
import ApplicationGuide from "@/components/ApplicationGuide";
import ComparisonTable from "@/components/ComparisonTable";
import ExpertEndorsement from "@/components/ExpertEndorsement";
import FeedbackWall from "@/components/FeedbackWall";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <StickyHeader />
      
      <HeroSection />
      <CoreValues />
      <VisualDemo />
      <PainPoint />
      <Ingredients />
      <Gallery />
      <ApplicationGuide />
      <ComparisonTable />
      <ExpertEndorsement />
      <FeedbackWall />
      <FAQ />
      <Pricing />
      
      <Footer />
      
      <OrderModal />
    </main>
  );
}
