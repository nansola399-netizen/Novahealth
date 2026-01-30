import { motion } from "framer-motion";
import { Search, CheckCircle, Calendar, MapPin } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Search Services",
    description: "Find healthcare services by your location",
  },
  {
    icon: CheckCircle,
    step: "2",
    title: "Choose Provider",
    description: "Select from verified healthcare providers",
  },
  {
    icon: Calendar,
    step: "3",
    title: "Book Instantly",
    description: "Book appointment or activate emergency",
  },
  {
    icon: MapPin,
    step: "4",
    title: "Track Real-Time",
    description: "Monitor service status in real time",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4 block">Process</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            How Nova <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Simplified healthcare access designed for emergencies and routine care alike.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-blue-100 to-transparent dashed-line" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center group"
              >
                {/* Step Circle */}
                <div className="relative z-10 w-32 h-32 mx-auto mb-8 transition-transform duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-xl group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative h-full w-full bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-50">
                    <step.icon className="h-10 w-10 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md border-4 border-white">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px] mx-auto opacity-80">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
