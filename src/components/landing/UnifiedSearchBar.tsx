import { useState, useRef, useEffect } from "react";
import { Search, MapPin, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const MOCK_SUGGESTIONS = {
    services: [
        { id: 'doc', icon: '🩺', label: "Doctors", type: "category" },
        { id: 'cardio', icon: '❤️', label: "Cardiologist", type: "specialty" },
        { id: 'dentist', icon: '🦷', label: "Dentist", type: "specialty" },
        { id: 'lab', icon: '🧪', label: "Lab Tests", type: "category" },
        { id: 'mri', icon: '☢️', label: "MRI Scan", type: "test" },
        { id: 'hospital', icon: '🏥', label: "Hospitals", type: "category" },
    ],
    locations: [
        "Mumbai, Maharashtra",
        "Delhi, NCR",
        "Bangalore, Karnataka",
        "Hyderabad, Telangana",
        "Pune, Maharashtra"
    ]
};

export const UnifiedSearchBar = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isLocating, setIsLocating] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearch = () => {
        if (query.trim()) {
            setShowSuggestions(false);
            navigate(`/search?q=${encodeURIComponent(query)}&loc=${encodeURIComponent(location)}`);
        }
    };

    const handleLocationClick = () => {
        setIsLocating(true);
        // Mock location delay
        setTimeout(() => {
            setLocation("Mumbai, Maharashtra");
            setIsLocating(false);
        }, 1500);
    };

    const filteredSuggestions = MOCK_SUGGESTIONS.services.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="w-full max-w-4xl mx-auto relative z-50 text-left" ref={searchRef}>
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-2 md:p-3 flex flex-col md:flex-row items-center gap-2 border border-slate-100 transition-all focus-within:shadow-[0_8px_30px_rgb(59,130,246,0.15)] focus-within:border-blue-100/50">

                {/* Location Input */}
                <div className="relative w-full md:w-[35%] flex items-center border-b md:border-b-0 md:border-r border-slate-100 px-4 py-2">
                    <MapPin className="text-slate-400 w-5 h-5 shrink-0" />
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                        className="w-full bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-400 px-3 py-1 text-sm md:text-base font-medium truncate"
                    />
                    <button
                        onClick={handleLocationClick}
                        className="text-xs font-semibold text-primary hover:text-blue-600 whitespace-nowrap px-2 py-1 bg-blue-50 rounded-full transition-colors flex items-center gap-1"
                        disabled={isLocating}
                    >
                        {isLocating ? <Loader2 className="w-3 h-3 animate-spin" /> : "Use GPS"}
                    </button>
                </div>

                {/* Search Input */}
                <div className="relative w-full flex-1 px-4 py-2">
                    <Search className="text-slate-400 w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder="Search doctors, clinics, hospitals, etc."
                        className="w-full bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 pl-10 pr-4 py-1 text-sm md:text-base font-medium"
                    />
                </div>

                {/* Search Button */}
                <Button
                    onClick={handleSearch}
                    className="w-full md:w-auto h-12 md:h-14 rounded-2xl md:rounded-[1.2rem] px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg text-white font-semibold text-base"
                >
                    Search
                </Button>
            </div>

            {/* Auto-Suggestions Dropdown */}
            <AnimatePresence>
                {showSuggestions && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-3 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
                    >
                        <div className="p-2">
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-4 py-2 mb-1">
                                {query ? "Suggestions" : "Popular Searches"}
                            </div>

                            {(query ? filteredSuggestions : MOCK_SUGGESTIONS.services).map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        setQuery(item.label);
                                        handleSearch();
                                    }}
                                    className="flex items-center gap-4 px-4 py-3 hover:bg-slate-50 rounded-2xl cursor-pointer transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-lg group-hover:bg-white group-hover:shadow-sm transition-all">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="font-medium text-slate-700 group-hover:text-primary transition-colors">
                                            {item.label}
                                        </div>
                                        <div className="text-xs text-slate-400 capitalize">
                                            {item.type}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {query && filteredSuggestions.length === 0 && (
                                <div className="px-4 py-8 text-center text-slate-400 text-sm">
                                    No results found for "{query}"
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
