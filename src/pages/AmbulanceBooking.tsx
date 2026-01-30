import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { EarlyAccessModal } from "@/components/landing/EarlyAccessModal";
import { Button } from "@/components/ui/button";
import { Ambulance, Shield, Clock, MapPin, Truck, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const AmbulanceBooking = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Information */}
            <section className="pt-32 pb-20 bg-blue-50/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-100/50 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-200">
                            <Ambulance className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">Transport Discovery</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Ambulance <span className="text-blue-600">Booking Support</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
                            Nova Health Solutions assists you in discovering nearby ambulance services to support timely medical transportation during emergencies or planned transfers.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid gap-12">

                        {/* Service Types */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <Truck className="w-6 h-6 text-blue-600" />
                                Ambulance Types Covered
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { title: "Basic Life Support (BLS)", desc: "For non-critical patient transport requiring basic medical monitoring." },
                                    { title: "ICU / Advanced Life Support", desc: "Equipped with ventilator and monitoring for critical patients." },
                                    { title: "Specialized Critical Care", desc: "Tailored for specific emergencies like cardiac or neonatal care." },
                                    { title: "Patient Transport Service", desc: "Scheduled transport for dialysis, therapy, or discharge." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-100 transition-colors">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Platform Role & Guidance */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Discovery Platform</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    We help you identify available ambulance options based on your location. Nova Health Solutions does not own, operate, or manage the ambulances directly.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">User Guidance</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    Users are encouraged to evaluate service availability and urgency independently. In life-threatening situations, always contact national emergency numbers first.
                                </p>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 flex gap-4">
                            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-amber-900 mb-2">Service Disclaimer</h4>
                                <p className="text-amber-800/80 text-sm leading-relaxed">
                                    All ambulance services are provided by independent third-party providers. Nova Health Solutions does not guarantee availability, response time, or service outcomes. Traffic, weather, and provider availability may affect service delivery.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Early Access CTA */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center max-w-2xl relative z-10">
                    <Clock className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Mobile App Launch Coming Soon</h2>
                    <p className="text-slate-200 mb-8 text-lg font-normal">
                        Get Early Access to our advanced ambulance discovery features, including real-time tracking and instant provider connection.
                    </p>
                    <Button
                        onClick={() => setModalOpen(true)}
                        size="lg"
                        className="h-14 px-10 text-lg rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20 transition-all"
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

export default AmbulanceBooking;
