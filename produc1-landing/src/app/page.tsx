import {
  Section1_StickyHeader,
  Section2_Hero,
  Section3_CoreValue,
  Section4_VisualDemo,
  Section5_PainPointSolution,
  Section6_TechnologyIngredients,
  Section7_LifestyleGallery,
} from "@/components/SectionsPart1";
import {
  Section8_AwardsPatents,
  Section9_ApplicationGuide,
  Section10_ComparisonTable,
  Section11_ExpertEndorsement,
  Section12_FeedbackWall,
  Section13_SocialProofCounters,
  Section14_FAQSection,
} from "@/components/SectionsPart2";
import {
  Section15_16_PricingUrgency,
  Section18_TrustGuarantees,
  Section20_Footer,
  StickyBottomBar,
} from "@/components/SectionsPart3";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Section1_StickyHeader />
      <Section2_Hero />
      <Section3_CoreValue />
      <Section4_VisualDemo />
      <Section5_PainPointSolution />
      <Section6_TechnologyIngredients />
      <Section7_LifestyleGallery />
      <Section8_AwardsPatents />
      <Section9_ApplicationGuide />
      <Section10_ComparisonTable />
      <Section11_ExpertEndorsement />
      <Section12_FeedbackWall />
      <Section13_SocialProofCounters />
      <Section14_FAQSection />
      <Section15_16_PricingUrgency />
      <Section18_TrustGuarantees />
      <Section20_Footer />
      <StickyBottomBar />
    </main>
  );
}
