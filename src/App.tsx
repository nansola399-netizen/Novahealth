import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Terms from "./pages/Terms";
import SearchResults from "./pages/SearchResults";
import DoctorConsultations from "./pages/DoctorConsultations";
import EmergencyServices from "./pages/EmergencyServices";
import AmbulanceBooking from "./pages/AmbulanceBooking";
import LabDiagnostics from "./pages/LabDiagnostics";
import HomeNursing from "./pages/HomeNursing";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import GetEarlyAccess from "./pages/GetEarlyAccess";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/doctor-consultations" element={<DoctorConsultations />} />
          <Route path="/emergency-services" element={<EmergencyServices />} />
          <Route path="/ambulance-booking" element={<AmbulanceBooking />} />
          <Route path="/lab-diagnostics" element={<LabDiagnostics />} />
          <Route path="/home-nursing" element={<HomeNursing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/get-early-access" element={<GetEarlyAccess />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
