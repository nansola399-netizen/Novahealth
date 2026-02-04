import React from "react";

type Variant = "hero" | "section-light" | "section-accent" | "section-clean";

interface MedicalBackgroundProps {
    variant?: Variant;
    className?: string;
}

export const MedicalBackground: React.FC<MedicalBackgroundProps> = ({
    variant = "section-light",
    className = ""
}) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {variant === "section-light" && (
                <>
                    {/* Top Left Organic Curve */}
                    <div className="absolute top-0 left-0 w-[60%] h-[70%] bg-gradient-to-br from-blue-100/40 via-blue-50/40 to-transparent rounded-br-[150px] opacity-100" />
                    {/* Bottom Right soft splash */}
                    <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-gradient-to-tl from-teal-100/30 to-transparent rounded-tl-[120px] opacity-100" />
                </>
            )}

            {variant === "section-accent" && (
                <>
                    {/* Inverted flow for variety */}
                    <div className="absolute top-0 right-0 w-[50%] h-[80%] bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-[180px] opacity-100" />
                    <div className="absolute bottom-0 left-0 w-[70%] h-[50%] bg-gradient-to-tr from-blue-100/30 to-transparent rounded-tr-[200px] opacity-100" />
                </>
            )}

            {variant === "section-clean" && (
                <>
                    {/* Minimal for text-heavy sections */}
                    <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-blue-50/80 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-blue-100/30 rounded-tl-full blur-3xl opacity-80" />
                </>
            )}
        </div>
    );
};
