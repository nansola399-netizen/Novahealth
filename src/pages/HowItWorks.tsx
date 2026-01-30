import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { EarlyAccessModal } from "@/components/landing/EarlyAccessModal";
import { Button } from "@/components/ui/button";
import { Search, MapPin, CheckCircle2, MousePointerClick, Smartphone, Info, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const steps = [
        {
            icon: Search,
            title: "Step 1: Search",
            desc: "Users can search for doctors, clinics, labs, diagnostics, ambulance services, and emergency support based on their location and needs.",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: MapPin,
            title: "Step 2: Discover",
            desc: "Nova Health Solutions displays verified healthcare providers and service options with relevant information to help users understand available choices.",
            color: "bg-teal-100 text-teal-600"
        },
        {
            icon: MousePointerClick,
            title: "Step 3: Compare & Choose",
            desc: "Users can review service details and decide which healthcare option best suits their requirement.",
            color: "bg-violet-100 text-violet-600"
        },
        {
            icon: Smartphone,
            title: "Step 4: Get Early Access",
            desc: "Users are invited to join early access to receive updates about mobile app launch and service availability.",
            color: "bg-orange-100 text-orange-600"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Information */}
            <section className="pt-32 pb-20 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-slate-200/50 text-slate-700 px-4 py-2 rounded-full mb-6 border border-slate-300">
                            <Info className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">Platform Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            How Nova Health <span className="text-primary">Works</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
                            Simple healthcare discovery from home. We bridge the gap between you and verified medical services.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-6 md:gap-10 items-start md:items-center group"
                            >
                                <div className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center ${step.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                    <step.icon className="w-8 h-8 md:w-10 md:h-10" />
                                </div>
                                <div className="flex-1 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Note */}
            <section className="py-12 bg-amber-50 mx-6 rounded-3xl mb-20">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h4 className="flex items-center justify-center gap-2 text-xl font-bold text-amber-900 mb-4">
                        <Info className="w-6 h-6" /> Important Note
                    </h4>
                    <p className="text-amber-800/80 leading-relaxed">
                        Nova Health Solutions does not influence medical decisions or outcomes. The platform only provides information and guidance. All medical interactions are strictly between you and the service provider.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center max-w-2xl relative z-10">
                    <Smartphone className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Mobile App Launching Soon</h2>
                    <p className="text-slate-200 mb-10 text-lg font-normal">
                        Experience seamless healthcare discovery on Android and iOS. Join the waitlist today.
                    </p>
                    <Button
                        onClick={() => setModalOpen(true)}
                        size="lg"
                        className="h-14 px-10 text-lg rounded-full bg-primary hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20 transition-all group"
                    >
                        Get Early Access
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>

            <Footer />
            <EarlyAccessModal
                open={modalOpen}
                onOpenChange={setModalOpen}
            />
        </div>
    );
};

export default HowItWorks;
