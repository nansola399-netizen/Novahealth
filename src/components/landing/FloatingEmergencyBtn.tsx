import { Phone, Ambulance } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface FloatingEmergencyBtnProps {
    onEmergencyClick: () => void;
}

export const FloatingEmergencyBtn = ({ onEmergencyClick }: FloatingEmergencyBtnProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={onEmergencyClick}
                    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-red-600 rounded-full shadow-[0_8px_30px_rgb(220,38,38,0.5)] hover:shadow-[0_8px_40px_rgb(220,38,38,0.6)] hover:bg-red-700 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-red-300"
                    aria-label="Emergency Help"
                >
                    <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-75" />
                    <Ambulance className="w-6 h-6 text-white drop-shadow-md" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
