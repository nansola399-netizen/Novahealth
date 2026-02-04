import { Button } from "@/components/ui/button";
import {
    Stethoscope,
    Ambulance,
    Smartphone,
    ArrowRight,
    Apple,
    Play
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import showcaseVideo from "@/assets/nova_health_showcase_h264.mp4";
import showcasePoster from "@/assets/nova_app_showcase.png";

interface MobileAppSectionProps {
    onJoinWaitlist?: () => void;
}

export const MobileAppSection = ({ onJoinWaitlist }: MobileAppSectionProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch((err) => {
                console.error("Video autoplay failed:", err);
            });
        }
    }, []);

    return (
        <section className="relative py-12 lg:py-20 bg-white overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-teal-50/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-8 border border-blue-100">
                            <Smartphone className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">Coming Soon</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Healthcare at <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Your Fingertips</span>
                        </h2>

                        <p className="text-xl text-slate-600 mb-10 leading-relaxed font-normal max-w-lg">
                            Experience the future of medical access with the Nova Health mobile app. Book appointments, track records, and get emergency help—all in one place.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* iOS Button */}
                            <Button
                                className="h-14 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white shadow-lg transition-all flex items-center gap-3 border border-slate-700"
                            >
                                <Apple className="w-6 h-6" />
                                <div className="text-left">
                                    <p className="text-[10px] font-medium text-slate-400 uppercase leading-none mb-0.5">Coming Soon on</p>
                                    <p className="text-sm font-bold leading-none">App Store</p>
                                </div>
                            </Button>

                            {/* Android Button */}
                            <Button
                                className="h-14 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white shadow-lg transition-all flex items-center gap-3 border border-slate-700"
                            >
                                <Play className="w-5 h-5 fill-current" />
                                <div className="text-left">
                                    <p className="text-[10px] font-medium text-slate-400 uppercase leading-none mb-0.5">Coming Soon on</p>
                                    <p className="text-sm font-bold leading-none">Google Play</p>
                                </div>
                            </Button>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <Button
                                variant="link"
                                className="text-blue-600 p-0 h-auto font-medium hover:text-blue-700 text-lg"
                                onClick={onJoinWaitlist}
                            >
                                Join the Waitlist <ArrowRight className="w-5 h-5 ml-1" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Animated Image Showcase */}
                    <div className="relative flex justify-center lg:justify-end perspective-1000 mb-10 lg:mb-0">
                        {/* Subtle Orbit / Float Animation Wrapper */}
                        <motion.div
                            animate={{
                                y: [-15, 15, -15],
                                rotate: [0, 2, 0, -2, 0],
                                scale: [0.98, 1, 0.98]
                            }}
                            transition={{
                                duration: 8,
                                ease: "easeInOut",
                                repeat: Infinity
                            }}
                            className="relative z-10 w-full max-w-[700px]"
                        >
                            {/* The Uploaded Showcase Video */}
                            <video
                                ref={videoRef}
                                src={showcaseVideo}
                                loop
                                muted
                                playsInline
                                preload="none"
                                poster={showcasePoster}
                                className="relative w-full h-auto drop-shadow-2xl"
                            />

                            {/* Reflection / Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </motion.div>

                        {/* Ambient Glow Behind */}
                        <motion.div
                            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-50/20 rounded-full blur-[80px] -z-10"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};
