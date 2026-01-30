import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FAQ = () => {
    const faqSections = [
        {
            title: "About Nova Health Solutions",
            items: [
                {
                    question: "What is Nova Health Solutions?",
                    answer: "Nova Health Solutions is an integrated healthcare guidance and service discovery platform that helps users explore verified doctors, clinics, labs, ambulance services, and home healthcare options across India."
                },
                {
                    question: "Does Nova Health Solutions provide medical treatment?",
                    answer: "No. Nova Health Solutions does not provide medical diagnosis or treatment. All medical services are delivered by independent third-party healthcare providers."
                }
            ]
        },
        {
            title: "Platform Usage",
            items: [
                {
                    question: "How does Nova Health Solutions work?",
                    answer: "Users can search for healthcare services based on location and need, explore available options, and make informed decisions using the information provided on the platform."
                },
                {
                    question: "Do I need to create an account to use the platform?",
                    answer: "No. Currently, users do not need to sign up or log in. Full account features will be available with the upcoming mobile app."
                }
            ]
        },
        {
            title: "Services & Availability",
            items: [
                {
                    question: "What services can I explore on Nova Health Solutions?",
                    answer: "Users can explore doctor consultations, emergency services, ambulance options, diagnostic labs, imaging services, and home nursing care."
                },
                {
                    question: "Are all healthcare providers verified?",
                    answer: "Nova Health Solutions makes efforts to list verified providers; however, users are encouraged to independently verify services before availing treatment."
                }
            ]
        },
        {
            title: "Emergency & Ambulance",
            items: [
                {
                    question: "Does Nova Health Solutions guarantee emergency response?",
                    answer: "No. Emergency services are facilitated through independent third-party providers. Response times depend on availability, location, and external factors."
                },
                {
                    question: "Can I book an ambulance directly through the platform?",
                    answer: "Currently, Nova Health Solutions provides ambulance discovery and guidance. Full booking functionality will be available in the mobile app."
                }
            ]
        },
        {
            title: "Early Access & Mobile App",
            items: [
                {
                    question: "What is Early Access?",
                    answer: "Early Access allows users to receive updates and notifications about the Nova Health Solutions mobile app launch and service availability."
                },
                {
                    question: "Will Nova Health Solutions have a mobile app?",
                    answer: "Yes. Nova Health Solutions mobile applications for Android and iOS are currently under development."
                }
            ]
        },
        {
            title: "Privacy & Security",
            items: [
                {
                    question: "Is my personal information safe?",
                    answer: "Yes. Nova Health Solutions values user privacy and handles data responsibly in accordance with applicable Indian data protection laws."
                },
                {
                    question: "Does Nova Health Solutions share my data?",
                    answer: "No. User data is not sold or misused. Information is used only for platform communication and updates."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-200">
                            <HelpCircle className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">Support Center</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Frequently Asked <span className="text-primary">Questions</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
                            Common questions about Nova Health Solutions and how we help you find the best care.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Sections */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="space-y-16">
                        {faqSections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">{section.title}</h2>
                                <Accordion type="single" collapsible className="w-full">
                                    {section.items.map((item, itemIdx) => (
                                        <AccordionItem key={itemIdx} value={`item-${idx}-${itemIdx}`}>
                                            <AccordionTrigger className="text-left text-slate-700 hover:text-primary hover:no-underline text-lg">
                                                {item.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 leading-relaxed text-base pt-2 font-normal">
                                                {item.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Still have questions?</h2>
                    <p className="text-slate-600 mb-10 text-lg">
                        We're here to help. Reach out to our support team or join our early access list for updates.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="outline" className="h-12 px-8 rounded-full bg-white hover:bg-slate-100 text-slate-700 border-slate-200" onClick={() => window.location.href = 'mailto:support@novahealthsolutions.com'}>
                            <Mail className="w-4 h-4 mr-2" />
                            Contact Support
                        </Button>
                        <Link to="/get-early-access">
                            <Button className="h-12 px-8 rounded-full bg-primary hover:bg-blue-700 text-white shadow-lg shadow-blue-900/10">
                                Get Early Access
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FAQ;
