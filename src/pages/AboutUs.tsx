import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { EarlyAccessModal } from "@/components/landing/EarlyAccessModal";
import { Button } from "@/components/ui/button";
import { Building2, Globe, Heart, Shield, Eye, Smartphone, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Information */}
            <section className="pt-32 pb-20 bg-blue-50/50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-100/50 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-200">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">Our Story</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            About <span className="text-blue-600">Nova Health Solutions</span>
                        </h1>
                        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
                            An integrated healthcare guidance platform designed to simplify healthcare discovery for individuals and families across India.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid gap-16">

                        {/* Mission / Role */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                                    Simplifying Healthcare Discovery
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Nova Health Solutions is an integrated healthcare service marketplace. The platform helps users explore and identify verified doctors, clinics, hospitals, diagnostic labs, ambulance services, and home healthcare providers — all from a single, easy-to-use platform.
                                </p>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <Globe className="w-5 h-5 text-blue-600" /> Our Role
                                    </h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We act specifically as a facilitation and guidance platform. We do not provide medical diagnosis, treatment, or healthcare services directly. All medical services are delivered by independent third-party providers.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 bg-gradient-to-tr from-blue-100 to-teal-50 rounded-[2.5rem] p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden">
                                <Heart className="w-32 h-32 text-blue-200 absolute -bottom-4 -right-4 rotate-12" />
                                <div className="text-center relative z-10">
                                    <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Trusted Guidance</h3>
                                    <p className="text-slate-500 text-sm">Empowering informed health decisions</p>
                                </div>
                            </div>
                        </div>

                        {/* Why Nova Health Solutions */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Why Nova Health Solutions?</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { title: "Location-Based Discovery", desc: "Find trusted services exactly where you are." },
                                    { title: "Verified Providers", desc: "Access a network of accredited healthcare professionals." },
                                    { title: "Emergency-First Approach", desc: "Critical care guidance when time matters most." },
                                    { title: "Transparent Experience", desc: "Clear information without hidden complexities." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-slate-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/50 to-transparent" />
                            <div className="relative z-10">
                                <Eye className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
                                <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                                    "To make healthcare access more informed, faster, and easier for everyone across India, bridging the gap between patients and quality care."
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Early Access CTA */}
            <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container mx-auto px-6 text-center max-w-2xl">
                    <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Healthcare in your pocket</h2>
                    <p className="text-slate-500 mb-10 text-lg">
                        Our Android and iOS apps are launching soon. Be the first to experience seamless healthcare discovery.
                    </p>
                    <Button
                        onClick={() => setModalOpen(true)}
                        size="lg"
                        className="h-14 px-10 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 transition-all"
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

export default AboutUs;
