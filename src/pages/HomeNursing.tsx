import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { EarlyAccessModal } from "@/components/landing/EarlyAccessModal";
import { Button } from "@/components/ui/button";
import { HeartHandshake, UserPlus, Pill, Activity, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

const HomeNursing = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Information */}
            <section className="pt-32 pb-20 bg-emerald-50/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-emerald-100/50 text-emerald-700 px-4 py-2 rounded-full mb-6 border border-emerald-200">
                            <HeartHandshake className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">Compassionate Care at Home</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Home Nursing <span className="text-emerald-600">Care Discovery</span>
                        </h1>
                        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
                            Nova Health Solutions assists you in discovering trained home nursing professionals who provide dedicated medical and non-medical support in the comfort of your home.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid gap-12">

                        {/* Types of Care */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <UserPlus className="w-6 h-6 text-emerald-600" />
                                Care Types Supported
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { icon: Clock, title: "Elder Care & Assistance", desc: "Daily living support and companionship for seniors." },
                                    { icon: Activity, title: "Post-Operative Care", desc: "Professional nursing support for surgical recovery." },
                                    { icon: Pill, title: "Medication Management", desc: "Timely administration and monitoring of medications." },
                                    { icon: ShieldCheck, title: "Wound Care & Monitoring", desc: "Sterile dressing and vitals monitoring by trained staff." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-emerald-100 transition-colors">
                                        <item.icon className="w-8 h-8 text-emerald-500 mb-4" />
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Platform Role & Guidance */}
                        <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100/50">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <ShieldCheck className="w-5 h-5 text-emerald-600" /> Platform Role
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        We help you identify nursing care options based on location and service type. Nova Health Solutions does not employ or manage nursing staff directly.
                                    </p>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <UserPlus className="w-5 h-5 text-emerald-600" /> User Responsibility
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Selection and engagement with nursing professionals remain your decision. We encourage checking credentials and reviews before finalizing care.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                            <p className="text-slate-500 text-sm italic text-center">
                                "Nova Health Solutions does not guarantee service quality, outcomes, or availability of home nursing services. Services are provided by independent professionals or agencies."
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Early Access CTA */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center max-w-2xl relative z-10">
                    <HeartHandshake className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Home Nursing Features – Coming Soon</h2>
                    <p className="text-slate-300 mb-8 text-lg font-light">
                        Join our Early Access list to be notified when our comprehensive home care discovery platform launches.
                    </p>
                    <Button
                        onClick={() => setModalOpen(true)}
                        size="lg"
                        className="h-14 px-10 text-lg rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20 transition-all"
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

export default HomeNursing;
