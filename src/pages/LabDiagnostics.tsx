import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { EarlyAccessModal } from "@/components/landing/EarlyAccessModal";
import { Button } from "@/components/ui/button";
import { FlaskConical, Microscope, FileText, Search, Clock, Info } from "lucide-react";
import { motion } from "framer-motion";

const LabDiagnostics = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Information */}
            <section className="pt-32 pb-20 bg-teal-50/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-teal-100/50 text-teal-700 px-4 py-2 rounded-full mb-6 border border-teal-200">
                            <Microscope className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">Diagnostic Intelligence</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Lab & <span className="text-teal-600">Diagnostics Discovery</span>
                        </h1>
                        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
                            Nova Health Solutions helps you explore diagnostic laboratories and medical testing services to support preventive care, diagnosis, and accurate health monitoring.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid gap-12">

                        {/* Services Covered */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <FlaskConical className="w-6 h-6 text-teal-600" />
                                Services Covered
                            </h2>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                                {[
                                    "Blood tests & Pathology services",
                                    "Comprehensive Health Calculators",
                                    "Advanced Diagnostic Screenings",
                                    "Home Sample Collection Discovery",
                                    "Radiology & Imaging Guidance",
                                    "Preventive Health Packages"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-teal-500" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How Nova Helps */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <Search className="w-8 h-8 text-teal-600 mb-4" />
                                <h3 className="font-bold text-slate-900 mb-2">Smart Discovery</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Easily locate nearby accredited labs and diagnostic centers based on your specific testing needs.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <FileText className="w-8 h-8 text-teal-600 mb-4" />
                                <h3 className="font-bold text-slate-900 mb-2">Service Comparison</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Compare available diagnostic services and view informational pricing to make informed decisions.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <Clock className="w-8 h-8 text-teal-600 mb-4" />
                                <h3 className="font-bold text-slate-900 mb-2">Timelines</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Get informational visibility into general report availability timelines for various tests.
                                </p>
                            </div>
                        </div>

                        {/* Data Transparency Disclaimer */}
                        <div className="bg-slate-900 text-slate-300 rounded-2xl p-8 border border-slate-800 flex gap-5">
                            <Info className="w-6 h-6 text-teal-400 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-white mb-2 text-lg">Data Transparency</h4>
                                <p className="text-sm leading-relaxed opacity-90">
                                    Nova Health Solutions does not control test accuracy, reporting timelines, or pricing. All diagnostic services are performed and managed by independent accredited laboratories. We act solely as a discovery platform to connect you with these service providers.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Early Access CTA */}
            <section className="py-24 bg-gradient-to-b from-white to-teal-50/30 border-t border-slate-100">
                <div className="container mx-auto px-6 text-center max-w-2xl">
                    <div className="inline-flex flex-col items-center">
                        <div className="w-16 h-16 bg-white rounded-2xl rotate-3 shadow-sm flex items-center justify-center mb-6 border border-slate-100">
                            <Microscope className="w-8 h-8 text-teal-600 -rotate-3" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Diagnostic Discovery – coming to your pocket</h2>
                        <p className="text-slate-500 mb-10 text-lg">
                            Our mobile app will feature advanced lab discovery, digital report organization, and seamless home collection booking awareness.
                        </p>
                        <Button
                            onClick={() => setModalOpen(true)}
                            size="lg"
                            className="h-14 px-10 text-lg rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-900/10 hover:shadow-teal-900/20 transition-all"
                        >
                            Get Early Access
                        </Button>
                    </div>
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

export default LabDiagnostics;
