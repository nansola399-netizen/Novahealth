import { motion } from "framer-motion";
import { Apple, Smartphone } from "lucide-react";

export const MobileAppSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-50/50 to-primary/5 rounded-full blur-[120px] opacity-60" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100/50 text-blue-600 px-4 py-1.5 rounded-full mb-8 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="font-bold text-[10px] tracking-widest uppercase">Under Development</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                            Nova Health App – <span className="text-gradient-premium">Coming Soon</span>
                        </h2>

                        <p className="text-lg text-muted-foreground font-light mb-2 max-w-2xl mx-auto">
                            Our mobile app for Android and iOS is currently under development.
                        </p>
                        <p className="text-base text-muted-foreground/80 font-light mb-10 max-w-2xl mx-auto">
                            Soon you'll be able to book healthcare services, access emergency support, and manage your care directly from our mobile app.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            {/* App Store Badge */}
                            <button disabled className="group flex items-center gap-3 bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 opacity-80 cursor-not-allowed">
                                <Apple className="w-8 h-8 fill-current" />
                                <div className="text-left">
                                    <div className="text-[10px] font-medium opacity-80 leading-tight">Download on the</div>
                                    <div className="text-base font-bold leading-tight">App Store</div>
                                </div>
                                <div className="ml-2 text-[10px] bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">Soon</div>
                            </button>

                            {/* Play Store Badge */}
                            <button disabled className="group flex items-center gap-3 bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 opacity-80 cursor-not-allowed">
                                <Smartphone className="w-8 h-8 fill-current" />
                                <div className="text-left">
                                    <div className="text-[10px] font-medium opacity-80 leading-tight">GET IT ON</div>
                                    <div className="text-base font-bold leading-tight">Google Play</div>
                                </div>
                                <div className="ml-2 text-[10px] bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">Soon</div>
                            </button>
                        </div>

                        <p className="mt-8 text-xs text-muted-foreground/60 font-light">
                            Notify me when available &rarr; <a href="#early-access" className="underline underline-offset-4 hover:text-primary transition-colors">Join Waitlist</a>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
