import { motion } from "framer-motion";
import { Building2, Microscope, Activity, Stethoscope, HeartPulse, Building } from "lucide-react";

const partners = [
    { name: "City General Hospital", icon: Building2 },
    { name: "Precision Diagnostics", icon: Microscope },
    { name: "Rapid Response EMS", icon: Activity },
    { name: "Family Health Clinic", icon: Stethoscope },
    { name: "MediNet Systems", icon: HeartPulse },
    { name: "Nova Labs", icon: Building },
    // Duplicate for seamless loop
    { name: "City General Hospital", icon: Building2 },
    { name: "Precision Diagnostics", icon: Microscope },
    { name: "Rapid Response EMS", icon: Activity },
    { name: "Family Health Clinic", icon: Stethoscope },
    { name: "MediNet Systems", icon: HeartPulse },
    { name: "Nova Labs", icon: Building },
];

export const PartnersSection = () => {
    return (
        <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Partner network expanding across India
                </h3>
                <h2 className="text-2xl font-bold text-slate-900 mt-2">
                    Our Trusted Healthcare Partners
                </h2>
            </div>

            <div className="relative flex overflow-hidden">
                {/* Gradient Masks for fading effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex items-center gap-16 px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Slow, calm speed
                    }}
                >
                    {/* Render doubled list for seamless loop */}
                    {[...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 text-slate-400 hover:text-blue-600 transition-colors duration-300 min-w-max group cursor-default"
                        >
                            <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                                <partner.icon className="h-6 w-6" />
                            </div>
                            <span className="font-semibold text-lg tracking-tight">{partner.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
