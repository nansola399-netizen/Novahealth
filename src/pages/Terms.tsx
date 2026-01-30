import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ScrollText, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Terms = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
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
                            <ScrollText className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">Legal Information</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Terms & <span className="text-primary">Services</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
                            Please read these terms carefully before using the Nova Health Solutions platform.
                        </p>
                        <p className="mt-4 text-slate-500 text-sm">
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 md:p-12 lg:p-16">
                        <div className="space-y-12 text-slate-600 leading-relaxed">

                            {/* 1. Introduction */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">1</span>
                                    Introduction
                                </h2>
                                <p>
                                    Nova Health Solutions (“we”, “our”, “us”) is an integrated healthcare service facilitation platform that helps users discover and connect with independent healthcare service providers such as doctors, hospitals, clinics, laboratories, ambulance services, nurses, and other medical professionals.
                                    <br /><br />
                                    Nova Health Solutions does not provide medical diagnosis, treatment, or healthcare services directly.
                                </p>
                            </section>

                            {/* 2. Acceptance of Terms */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">2</span>
                                    Acceptance of Terms
                                </h2>
                                <p>
                                    By accessing or using the Nova Health Solutions website or mobile applications, you agree to be bound by these Terms & Services. If you do not agree, you should not use the platform.
                                </p>
                            </section>

                            {/* 3. Nature of Platform Services */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">3</span>
                                    Nature of Platform Services
                                </h2>
                                <p>
                                    Nova Health Solutions acts solely as a discovery, information, and facilitation platform. The platform helps users identify healthcare service options, availability, locations, and possible discounts offered by third-party service providers.
                                </p>
                            </section>

                            {/* 4. Platform Guidance Disclaimer */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">4</span>
                                    Platform Guidance Disclaimer
                                </h2>
                                <p>
                                    Nova Health Solutions only guides users by providing information about where healthcare services, offers, or discounts may be available.
                                    <br />
                                    The platform does not influence or control medical decisions, treatment plans, service quality, pricing, or outcomes.
                                    <br />
                                    The final decision to visit, consult, or receive treatment from any healthcare provider rests entirely with the user.
                                </p>
                            </section>

                            {/* 5. No Medical Advice or Guarantee */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">5</span>
                                    No Medical Advice or Guarantee
                                </h2>
                                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                    <p className="text-amber-900">
                                        Nova Health Solutions does not provide medical advice, diagnosis, or treatment.
                                        <br /><br />
                                        We do not guarantee the accuracy, effectiveness, quality, pricing, discounts, or outcomes of any healthcare service listed on the platform.
                                    </p>
                                </div>
                            </section>

                            {/* 6. User Responsibility & Risk */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">6</span>
                                    User Responsibility & Risk
                                </h2>
                                <p>
                                    Any healthcare service, treatment, or consultation availed by a user is done at the user’s own discretion and risk.
                                    <br />
                                    Nova Health Solutions shall not be responsible for any injury, loss, dissatisfaction, medical complication, delay, negligence, or outcome that may occur after a user visits or engages with a listed service provider.
                                </p>
                            </section>

                            {/* 7. Third-Party Service Providers */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">7</span>
                                    Third-Party Service Providers
                                </h2>
                                <p>
                                    All doctors, hospitals, clinics, labs, ambulance providers, nurses, and other healthcare professionals listed on the platform are independent third parties.
                                    <br />
                                    Nova Health Solutions does not supervise, control, or manage their services.
                                </p>
                            </section>

                            {/* 8. Emergency Services Disclaimer */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">8</span>
                                    Emergency Services Disclaimer
                                </h2>
                                <p>
                                    Emergency response times depend on location, availability, traffic, and third-party service providers.
                                    <br />
                                    Nova Health Solutions does not guarantee immediate or successful emergency response.
                                </p>
                            </section>

                            {/* 9. Payments, Pricing & Discounts */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">9</span>
                                    Payments, Pricing & Discounts
                                </h2>
                                <p>
                                    Any pricing, fees, or discounts displayed are provided by third-party service providers and may vary.
                                    <br />
                                    Nova Health Solutions is not responsible for changes in pricing or non-availability of discounts.
                                </p>
                            </section>

                            {/* 10. Data Privacy & Security */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">10</span>
                                    Data Privacy & Security
                                </h2>
                                <p>
                                    User data is handled responsibly and in compliance with applicable Indian data protection laws.
                                    <br />
                                    Please refer to the Privacy Policy for details on data usage and protection.
                                </p>
                            </section>

                            {/* 11. Limitation of Liability */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">11</span>
                                    Limitation of Liability
                                </h2>
                                <p>
                                    To the maximum extent permitted by law, Nova Health Solutions shall not be liable for any direct, indirect, incidental, consequential, or medical damages arising from the use of the platform or services obtained through third parties.
                                </p>
                            </section>

                            {/* 12. Account Suspension */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">12</span>
                                    Account Suspension
                                </h2>
                                <p>
                                    Nova Health Solutions reserves the right to suspend or terminate user access in case of misuse, fraudulent activity, or violation of these Terms.
                                </p>
                            </section>

                            {/* 13. Intellectual Property */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">13</span>
                                    Intellectual Property
                                </h2>
                                <p>
                                    All website content, branding, design, and materials belong to Nova Health Solutions and may not be used without permission.
                                </p>
                            </section>

                            {/* 14. Modifications to Terms */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">14</span>
                                    Modifications to Terms
                                </h2>
                                <p>
                                    Nova Health Solutions may update these Terms & Services at any time. Continued use of the platform indicates acceptance of updated terms.
                                </p>
                            </section>

                            {/* 15. Governing Law */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-sm font-bold border border-slate-100">15</span>
                                    Governing Law
                                </h2>
                                <p>
                                    These Terms & Services shall be governed by and interpreted in accordance with the laws of India.
                                </p>
                            </section>

                            {/* 16. Contact Information */}
                            <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                    16. Contact Information
                                </h2>
                                <p className="mb-4">For any legal or support queries related to these Terms, users may contact:</p>
                                <a href="mailto:support@novahealthsolutions.com" className="text-primary font-medium hover:underline hover:text-blue-700 transition-colors">
                                    support@novahealthsolutions.com
                                </a>
                            </section>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Terms;
