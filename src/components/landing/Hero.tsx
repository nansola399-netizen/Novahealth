import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UnifiedSearchBar } from "./UnifiedSearchBar";
import heroMedical from "@/assets/hero_medical.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Abstract Background Shapes - More blended & slower */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Defer heavy blur effects or use simple opacity */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 mix-blend-multiply opacity-30 animate-pulse duration-[10000ms]" style={{ contentVisibility: 'auto' }} />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/4 mix-blend-multiply opacity-30 duration-[12000ms]" style={{ contentVisibility: 'auto' }} />
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-blue-100/50 px-5 py-2.5 rounded-full mb-10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-foreground/70 tracking-wide">Trusted by 10,000+ Patients</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-8 tracking-tighter text-balance">
              Complete Healthcare.{" "}
              <span className="block text-gradient-premium mt-2 pb-2">One Platform.</span>
            </h1>

            <p className="text-sm md:text-base font-medium text-slate-500 mb-6 max-w-lg mx-auto lg:mx-0 tracking-wide">
              Trusted healthcare access across India • Verified doctors • 24/7 emergency support
            </p>

            <p className="text-xl text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0 font-normal leading-relaxed tracking-tight">
              Connect with top-rated doctors, book instant ambulances, and manage your health records - all in one secure place.
            </p>

            <div className="w-full max-w-lg lg:max-w-none">
              <UnifiedSearchBar />
            </div>

            <div className="mt-16 flex items-center justify-center lg:justify-start gap-10 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-full bg-blue-50 text-secondary">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Verified Doctors</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                </div>
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual - High Impact Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/20 to-teal-200/20 rounded-full blur-[80px] transform scale-90" />

            <div className="relative z-10">
              <motion.img
                src={heroMedical}
                alt="Nova Health Doctors"
                width={700}
                height={700}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto drop-shadow-2xl"
                // Simplified initial animation to reduce main thread work during LCP
                animate={{ y: [0, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                  delay: 2 // Defer the start of the floating animation
                }}
                whileHover={{
                  scale: 1.02,
                  rotate: 0.5,
                  filter: "brightness(1.02)",
                  transition: { duration: 0.5, ease: "easeOut" }
                }}
              />
            </div>

            {/* Decorative Elements around image */}
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-primary/5 rounded-full blur-[100px] z-0 mix-blend-multiply" />
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-secondary/5 rounded-full blur-[100px] z-0 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
