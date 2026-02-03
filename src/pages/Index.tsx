import { useState, Suspense, lazy } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { MobileAppSection } from "@/components/landing/MobileAppSection";

// Lazy load below-the-fold components
const Services = lazy(() => import("@/components/landing/Services").then(module => ({ default: module.Services })));
const HowItWorks = lazy(() => import("@/components/landing/HowItWorks").then(module => ({ default: module.HowItWorks })));
const WhyChoose = lazy(() => import("@/components/landing/WhyChoose").then(module => ({ default: module.WhyChoose })));
const EmergencySection = lazy(() => import("@/components/landing/EmergencySection").then(module => ({ default: module.EmergencySection })));
const WhoWeServe = lazy(() => import("@/components/landing/WhoWeServe").then(module => ({ default: module.WhoWeServe })));
const LeadCaptureForm = lazy(() => import("@/components/landing/LeadCaptureForm").then(module => ({ default: module.LeadCaptureForm })));
const TrustSection = lazy(() => import("@/components/landing/TrustSection").then(module => ({ default: module.TrustSection })));
const Footer = lazy(() => import("@/components/landing/Footer").then(module => ({ default: module.Footer })));
const EmergencyModal = lazy(() => import("@/components/landing/EmergencyModal").then(module => ({ default: module.EmergencyModal })));
const EarlyAccessModal = lazy(() => import("@/components/landing/EarlyAccessModal").then(module => ({ default: module.EarlyAccessModal })));
const FloatingEmergencyBtn = lazy(() => import("@/components/landing/FloatingEmergencyBtn").then(module => ({ default: module.FloatingEmergencyBtn })));

const Index = () => {
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onEmergencyClick={() => setEmergencyModalOpen(true)} />
      <main>
        <MobileAppSection onJoinWaitlist={() => setEarlyAccessOpen(true)} />
        <Hero />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Services />
          <HowItWorks />
          <WhyChoose />
          <EmergencySection onEmergencyClick={() => setEmergencyModalOpen(true)} />
          <WhoWeServe />
          <LeadCaptureForm />
          <TrustSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <FloatingEmergencyBtn onEmergencyClick={() => setEmergencyModalOpen(true)} />
        <EmergencyModal
          open={emergencyModalOpen}
          onOpenChange={setEmergencyModalOpen}
        />
        <EarlyAccessModal
          open={earlyAccessOpen}
          onOpenChange={setEarlyAccessOpen}
        />
      </Suspense>
    </div>
  );
};

export default Index;
