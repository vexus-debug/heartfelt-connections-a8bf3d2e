import Layout from "@/components/Layout";

// Journey section imports
import HeroSection from "@/components/home/HeroSection";
import EmpathySection from "@/components/home/EmpathySection";
import SanctuarySection from "@/components/home/SanctuarySection";
import MassageJourneySection from "@/components/home/MassageJourneySection";
import FacialJourneySection from "@/components/home/FacialJourneySection";
import BodyTreatmentsSection from "@/components/home/BodyTreatmentsSection";
import FinishingTouchSection from "@/components/home/FinishingTouchSection";

import TestimonialsSection from "@/components/home/TestimonialsSection";
import LocationsSection from "@/components/home/LocationsSection";
import FinalCTASection from "@/components/home/FinalCTASection";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Journey Section 1: Empathy - Gold Background */}
      <EmpathySection />

      {/* Journey Section 2: Sanctuary - Black Background */}
      <SanctuarySection />

      {/* Journey Section 3: Massage - Gold Background */}
      <MassageJourneySection />

      {/* Journey Section 4: Facials - Black Background */}
      <FacialJourneySection />

      {/* Journey Section 5: Body Treatments - Gold Background */}
      <BodyTreatmentsSection />

      {/* Journey Section 6: Finishing Touch - Black Background */}
      <FinishingTouchSection />


      {/* Journey Section 8: Testimonials - Black Background */}
      <TestimonialsSection />

      {/* Journey Section 9: Locations - Gold Background */}
      <LocationsSection />

      {/* Journey Section 10: Final CTA - Black Background */}
      <FinalCTASection />
    </Layout>
  );
};

export default Index;
