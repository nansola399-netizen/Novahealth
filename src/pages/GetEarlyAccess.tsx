import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Smartphone, Star, Lock, Loader2, Share2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const GetEarlyAccess = () => {
    const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            toast({
                title: "You're on the list!",
                description: "We'll notify you as soon as early access opens.",
            });
            setFormData({ name: "", phone: "", email: "" });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-2 rounded-full mb-8 border border-blue-200">
                                <Bell className="w-4 h-4 fill-current" />
                                <span className="text-sm font-semibold tracking-wide">Launching Soon</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                                Get <span className="text-primary">Early Access</span> to the Future of Healthcare
                            </h1>
                            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-light">
                                Nova Health Solutions mobile app is coming soon. Join the waitlist to be the first to experience seamless healthcare discovery in your city.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Smartphone, title: "Mobile App Access", desc: "Be the first to download our Android & iOS apps." },
                                    { icon: Bell, title: "Launch Notifications", desc: "Get notified when services go live in your area." },
                                    { icon: Star, title: "Exclusive Updates", desc: "Receive feature announcements and platform news." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <item.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">{item.title}</h3>
                                            <p className="text-slate-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden">
                                {isSuccess ? (
                                    <div className="text-center py-10">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-300">
                                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
                                        <p className="text-slate-500 mb-8">Thank you for joining. We'll be in touch soon.</p>
                                        <Button
                                            variant="outline"
                                            onClick={() => setIsSuccess(false)}
                                            className="rounded-full"
                                        >
                                            Register another email
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Join the Waitlist</h3>
                                            <p className="text-slate-500 text-sm">Fill in your details to reserve your spot.</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <Input
                                                placeholder="Full Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                                className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                                            />
                                            <Input
                                                type="tel"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                                className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                                            />
                                            <Input
                                                type="email"
                                                placeholder="Email Address (Optional)"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                                            />

                                            <Button type="submit" className="w-full h-14 text-lg bg-primary hover:bg-blue-700 shadow-lg shadow-blue-900/20 transition-all rounded-xl" disabled={isSubmitting}>
                                                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Share2 className="w-4 h-4 mr-2" />}
                                                {isSubmitting ? "Joining..." : "Join Waitlist Now"}
                                            </Button>
                                        </form>

                                        <div className="mt-6 flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                            <Lock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                            <p className="text-xs text-slate-400 leading-relaxed">
                                                <span className="font-semibold text-slate-600">Privacy Guarantee:</span> Your information is safe with us. We will only use this to notify you about the app launch and key platform updates. No spam, ever.
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GetEarlyAccess;
