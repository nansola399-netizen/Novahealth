import { motion } from "framer-motion";
import { Ambulance, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmergencySectionProps {
  onEmergencyClick: () => void;
}

const features = [
  {
    icon: Ambulance,
    title: "Instant Request",
    description: "One-tap ambulance or blood request",
  },
  {
    icon: MapPin,
    title: "Auto GPS Sharing",
    description: "Location shared automatically",
  },
  {
    icon: Users,
    title: "Family Notification",
    description: "Instant alerts to your loved ones",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock emergency support",
  },
];

export const EmergencySection = ({ onEmergencyClick }: EmergencySectionProps) => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/80 via-white to-red-50/40" />

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-red-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-60" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-red-50/60 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-red-100 text-emergency px-5 py-2.5 rounded-full mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="font-bold text-xs tracking-widest uppercase">Emergency Response</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.05] tracking-tighter">
              Instant Help When <br />
              <span className="text-emergency drop-shadow-sm">Every Second Counts</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-light tracking-tight max-w-lg">
              Press one button to trigger our rapid response network. We coordinate ambulances, hospitals, and blood banks instantly.
            </p>

            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-emergency rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500 animate-pulse"></div>
              <Button
                size="lg"
                onClick={onEmergencyClick}
                className="relative bg-emergency hover:bg-red-600 text-white text-lg px-12 py-8 rounded-2xl shadow-xl shadow-red-500/20 hover:shadow-2xl hover:shadow-red-500/30 hover:-translate-y-1 transition-all duration-300 border border-white/20"
              >
                Request Immediate Help
              </Button>
            </div>

            <p className="mt-8 text-sm font-medium text-muted-foreground flex items-center gap-3 bg-white/50 backdrop-blur-sm inline-flex py-2 px-4 rounded-full border border-red-50">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" /> Average response time: &lt; 15 mins
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/80 backdrop-blur-lg p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-red-50/50 hover:border-red-100 hover:shadow-[0_15px_30px_rgb(239,68,68,0.08)] transition-all duration-300 group h-full"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emergency group-hover:text-white transition-colors duration-300 shadow-sm">
                  <feature.icon className="h-7 w-7 text-emergency group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-3 group-hover:text-emergency transition-colors tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium opacity-80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
