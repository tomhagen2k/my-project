"use client";
import React, { useState } from 'react';
import StickyHeader from '@/components/StickyHeader';
import HeroSection from '@/components/HeroSection';
import CoreValue from '@/components/CoreValue';
import VisualDemo from '@/components/VisualDemo';
import PainPointSolution from '@/components/PainPointSolution';
import Ingredients from '@/components/Ingredients';
import Gallery from '@/components/Gallery';
import Awards from '@/components/Awards';
import ApplicationGuide from '@/components/ApplicationGuide';
import ComparisonTable from '@/components/ComparisonTable';
import ExpertEndorsement from '@/components/ExpertEndorsement';
import FeedbackWall from '@/components/FeedbackWall';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import TrustBadges from '@/components/TrustBadges';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import UrgencyElements from '@/components/UrgencyElements';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const openModal = (optionId?: number) => {
    if (optionId !== undefined) {
      setSelectedOption(optionId);
    }
    setIsModalOpen(true);
  };

  return (
    <main className="relative bg-white overflow-hidden">
      <StickyHeader onOrderClick={() => openModal()} />
      <SocialProof />
      <HeroSection onOrderClick={() => openModal()} />
      <CoreValue />
      <VisualDemo />
      <PainPointSolution />
      <Ingredients />
      <Gallery />
      <Awards />
      <ApplicationGuide />
      <ComparisonTable />
      <ExpertEndorsement />
      <FeedbackWall />
      <FAQ />
      <Pricing onOrderClick={openModal} />
      <TrustBadges />
      <Footer />
      <UrgencyElements onOrderClick={() => openModal()} />
      {isModalOpen && (
        <OrderModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          initialOption={selectedOption}
        />
      )}
    </main>
  );
}
