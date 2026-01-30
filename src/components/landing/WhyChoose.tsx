import { motion } from "framer-motion";
import {
  BadgeCheck,
  Zap,
  MapPinned,
  Wallet,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Providers",
    description:
      "All doctors and service providers are thoroughly verified and credentialed",
  },
  {
    icon: Zap,
    title: "Emergency-First Design",
    description:
      "Built for speed when every second counts - one-tap emergency response",
  },
  {
    icon: MapPinned,
    title: "Location-Based Discovery",
    description:
      "Find the nearest healthcare services with real-time availability",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description:
      "No hidden costs - see all charges upfront before you book",
  },
  {
    icon: ShieldCheck,
    title: "Secure Data Handling",
    description:
      "Your medical data is encrypted and handled with utmost privacy",
  },
];

export const WhyChoose = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Nova Health Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on trust, designed for reliability, focused on you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
