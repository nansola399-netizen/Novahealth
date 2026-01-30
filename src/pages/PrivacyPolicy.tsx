import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Shield, Lock, Eye, FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-100">
                            <Lock className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">Data Protection</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Privacy <span className="text-primary">Policy</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
                            Your privacy is important to us. We are committed to protecting your personal information and ensuring transparency.
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
                    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 md:p-12 lg:p-16 space-y-12 text-slate-600 leading-relaxed">

                        {/* 1. Introduction */}
                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
                            </div>
                            <p>
                                Nova Health Solutions ("we", "our", "us") values user privacy and is committed to protecting personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform for healthcare discovery and guidance.
                            </p>
                        </section>

                        {/* 2. Information We Collect */}
                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">2. Information We Collect</h2>
                            </div>
                            <p className="mb-4">We collect limited personal information necessary to provide our services and early access updates:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                                <li><strong>Basic Identity Information:</strong> Name, Phone Number, and Email Address.</li>
                                <li><strong>Usage Data:</strong> Information about how you navigate and interact with our platform (e.g., searches, location preferences).</li>
                            </ul>
                        </section>

                        {/* 3. How We Use Information */}
                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                                    <Eye className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">3. How We Use Information</h2>
                            </div>
                            <p className="mb-4">Your data is used strictly for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                                <li>To provide healthcare discovery guidance and search results relevant to your location.</li>
                                <li>To notify you about the launch of our mobile applications (Android/iOS) and new service availability.</li>
                                <li>To improve platform experience, functionality, and user support.</li>
                                <li>To communicate essential updates regarding our Terms of Service or Privacy Policy.</li>
                            </ul>
                        </section>

                        {/* 4. Data Protection */}
                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">4. Data Protection</h2>
                            </div>
                            <p>
                                We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. We handle data in compliance with applicable Indian data protection laws and Information Technology Act regulations.
                            </p>
                        </section>

                        {/* 5. Third-Party Disclosure */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 ml-[3.5rem]">5. Third-Party Disclosure</h2>
                            <p className="ml-[3.5rem]">
                                Nova Health Solutions does not sell, trade, or rent your personal identification information to others. We do not share your data with third parties except as necessary to facilitate the healthcare services you explicitly request (e.g., connecting with a provider) or when required by law.
                            </p>
                        </section>

                        {/* 6. User Rights */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 ml-[3.5rem]">6. User Rights</h2>
                            <p className="ml-[3.5rem]">
                                You have the right to request access to the personal information we hold about you. You may also request corrections, updates, or the removal of your data from our systems at any time by contacting our support team.
                            </p>
                        </section>

                        {/* 7. Contact Information */}
                        <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Mail className="w-6 h-6 text-primary" />
                                7. Contact Information
                            </h2>
                            <p className="mb-4">If you have any questions or concern regarding this Privacy Policy or your data, please contact us:</p>
                            <a href="mailto:privacy@novahealthsolutions.com" className="text-primary font-medium hover:underline hover:text-blue-700 transition-colors">
                                privacy@novahealthsolutions.com
                            </a>
                        </section>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
