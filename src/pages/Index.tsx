import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WhyChoose } from "@/components/landing/WhyChoose";
import { EmergencySection } from "@/components/landing/EmergencySection";
import { WhoWeServe } from "@/components/landing/WhoWeServe";
import { LeadCaptureForm } from "@/components/landing/LeadCaptureForm";
import { TrustSection } from "@/components/landing/TrustSection";
import { MobileAppSection } from "@/components/landing/MobileAppSection";
import { Footer } from "@/components/landing/Footer";
import { EmergencyModal } from "@/components/landing/EmergencyModal";
import { FloatingEmergencyBtn } from "@/components/landing/FloatingEmergencyBtn";

const Index = () => {
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onEmergencyClick={() => setEmergencyModalOpen(true)} />
      <main>
        <MobileAppSection />
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChoose />
        <EmergencySection onEmergencyClick={() => setEmergencyModalOpen(true)} />
        <WhoWeServe />
        <LeadCaptureForm />
        <TrustSection />
      </main>
      <Footer />
      <FloatingEmergencyBtn onEmergencyClick={() => setEmergencyModalOpen(true)} />
      <EmergencyModal
        open={emergencyModalOpen}
        onOpenChange={setEmergencyModalOpen}
      />
    </div>
  );
};

export default Index;
