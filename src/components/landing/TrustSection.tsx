import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Eye, CheckCircle2 } from "lucide-react";
import trustSecurity from "@/assets/trust_security.png";

const trustItems = [
  {
    icon: Lock,
    title: "Secure Data Handling",
    description: "256-bit encryption for all medical data",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "Strict controls on who views records",
  },
  {
    icon: FileCheck,
    title: "Full Compliance",
    description: "Adhering to global healthcare standards",
  },
  {
    icon: Eye,
    title: "Patient Privacy",
    description: "Your data is yours. We never share it.",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-blue-50/20 via-white to-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-100/50 to-transparent opacity-50" />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 p-4 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <motion.img
                src={trustSecurity}
                alt="Secure Healthcare Platform"
                className="w-full h-auto drop-shadow-lg rounded-[2rem]"
                whileHover={{
                  scale: 1.02,
                  rotate: -0.5,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 z-20">
                <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white flex items-center gap-4 animate-bounce duration-[4000ms]">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 border border-green-100">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm tracking-tight">ISO 27001 Certified</h4>
                    <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mt-0.5">Global Standard</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-50 to-teal-50 rounded-full blur-[120px] opacity-70" />
          </motion.div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tighter leading-[1.05]">
                Uncompromised <br />
                <span className="text-gradient-premium">Security & Trust</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed tracking-tight max-w-lg">
                We understand that health data is sensitive. That's why we've built our platform with a security-first architecture from day one.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {trustItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col gap-4"
                >
                  <div className="w-14 h-14 bg-blue-50/50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
