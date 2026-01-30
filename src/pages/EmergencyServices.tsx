import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { EarlyAccessModal } from "@/components/landing/EarlyAccessModal";
import { Button } from "@/components/ui/button";
import { Ambulance, HeartPulse, MapPin, AlertTriangle, Phone, Activity } from "lucide-react";
import { motion } from "framer-motion";

const EmergencyServices = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Information */}
            <section className="pt-32 pb-20 bg-red-50/50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6 border border-red-200">
                            <AlertTriangle className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">Emergency Guidance</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Emergency <span className="text-red-600">Services & Support</span>
                        </h1>
                        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
                            Nova Health Solutions provides guidance to help you identify nearby emergency healthcare services during urgent medical situations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid gap-12">

                        {/* Overview */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
                                <p className="text-slate-500 leading-relaxed text-lg font-light">
                                    Our platform focuses on awareness, accessibility, and faster discovery of nearby emergency options. We aim to reduce the panic in critical moments by providing clear, accessible information about where to find help.
                                </p>
                            </div>
                        </div>

                        {/* Emergency Support Coverage */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-red-500" />
                                Emergency Support Coverage
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { icon: Ambulance, title: "Ambulance Discovery", desc: "Find nearby ambulance service providers quickly." },
                                    { icon: HeartPulse, title: "Medical Assistance", desc: "Guidance on locating emergency medical help." },
                                    { icon: Activity, title: "Blood Requirements", desc: "Information on blood banks and donor availability." },
                                    { icon: MapPin, title: "Nearby Facilities", desc: "Locate hospitals equipped for emergency care." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                        <item.icon className="w-8 h-8 text-red-500 mb-4" />
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-500 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How Platform Helps */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-3">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">How We Help</h2>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Location Awareness</h3>
                                <p className="text-sm text-slate-500">Auto-identification of services in your immediate vicinity.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                    <Activity className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Resource Visibility</h3>
                                <p className="text-sm text-slate-500">Real-time information on what emergency resources are available.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Clear Instructions</h3>
                                <p className="text-sm text-slate-500">Step-by-step guidance on how to seek urgent professional care.</p>
                            </div>
                        </div>

                        {/* Limitations & Disclaimer */}
                        <div className="bg-slate-900 text-slate-300 rounded-2xl p-8 border border-slate-800">
                            <div className="flex gap-4">
                                <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white mb-2 text-lg">Limitations & Disclaimer</h4>
                                    <p className="text-sm leading-relaxed opacity-90">
                                        Emergency services are provided by independent third-party providers. Response time, availability, and service outcomes depend on multiple external factors beyond the platform’s control. Nova Health Solutions is a facilitator and does not provide direct emergency medical services.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Early Access CTA */}
            <section className="py-20 bg-gradient-to-br from-red-50 via-white to-slate-50 border-t border-red-100">
                <div className="container mx-auto px-6 text-center max-w-2xl">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-6">
                        <Phone className="w-8 h-8 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Emergency Services – Coming Soon on Mobile App</h2>
                    <p className="text-slate-500 mb-8">
                        We are working hard to bring you a dedicated emergency response system directly on your phone.
                    </p>
                    <Button
                        onClick={() => setModalOpen(true)}
                        size="lg"
                        className="h-14 px-10 text-lg rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-200 transition-all"
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

export default EmergencyServices;
