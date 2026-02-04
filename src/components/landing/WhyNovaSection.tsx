import { ShieldCheck, Zap, Lock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: ShieldCheck,
        title: "Verified Doctors & Partners",
    },
    {
        icon: Zap,
        title: "Fast Emergency Response",
    },
    {
        icon: Lock,
        title: "Secure Digital Health Records",
    },
    {
        icon: MapPin,
        title: "India-wide Healthcare Access",
    }
];

export const WhyNovaSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Nova Health?</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
