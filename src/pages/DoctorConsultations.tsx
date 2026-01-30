import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { EarlyAccessModal } from "@/components/landing/EarlyAccessModal";
import { Button } from "@/components/ui/button";
import { Stethoscope, UserCheck, ShieldAlert, BadgeCheck, Activity, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

const DoctorConsultations = () => {
    const [modalOpen, setModalOpen] = useState(false);

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
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full mb-6 border border-blue-100">
                            <Stethoscope className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">Healthcare Discovery</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Detailed Doctor <span className="text-primary">Discovery & Information</span>
                        </h1>
                        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
                            Nova Health Solutions helps you identify verified medical specialists based on your specific needs, location, and preferences.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview Content */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid gap-12">

                        {/* What users can explore */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0">
                                    <UserCheck className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">What You Can Explore</h2>
                                    <p className="text-slate-500 mb-6 leading-relaxed">
                                        Our platform is designed to give you a comprehensive view of the healthcare landscape around you. You can browse through detailed profiles of:
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-4">
                                        {[
                                            "General Physicians & Family Doctors",
                                            "Cardiologists & Heart Specialists",
                                            "Pediatricians for Child Care",
                                            "Gynecologists & Women's Health",
                                            "Orthopedic Surgeons",
                                            "Neurologists & Neurosurgeons"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Platform Role & Guidance */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <BadgeCheck className="w-8 h-8 text-primary mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Role</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    Nova Health Solutions acts as a bridge between patients and healthcare providers. We verify basic details to ensure you have access to legitimate service providers, but we do not interfere with medical treatments.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <Activity className="w-8 h-8 text-primary mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Guidance</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    We provide structured information—such as doctor experience, hospital affiliations, and consultation timings—to help you make the best choice for your health.
                                </p>
                            </div>
                        </div>

                        {/* Important Disclaimer */}
                        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 flex gap-4">
                            <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-amber-900 mb-2">Important Medical Disclaimer</h4>
                                <p className="text-amber-800/80 text-sm leading-relaxed">
                                    Nova Health Solutions does not provide medical advice, diagnosis, or treatment. The content on this platform is for informational purposes only. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
                    <HeartPulse className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Future of Doctor Discovery</h2>
                    <p className="text-slate-300 text-lg mb-10 font-light leading-relaxed">
                        We are building a revolutionary way to connect with healthcare professionals. Full consultation booking features will be available soon on our mobile app.
                    </p>
                    <Button
                        onClick={() => setModalOpen(true)}
                        size="lg"
                        className="h-14 px-10 text-lg rounded-full bg-white text-slate-900 hover:bg-slate-100 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
                    >
                        Get Early Access
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

export default DoctorConsultations;
