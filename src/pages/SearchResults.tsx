import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { UnifiedSearchBar } from "@/components/landing/UnifiedSearchBar";
import { EarlyAccessModal } from "@/components/landing/EarlyAccessModal";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Map, List, Filter } from "lucide-react";
import { motion } from "framer-motion";

const MOCK_RESULTS = [
    {
        id: 1,
        name: "Dr. Sarah Sharma",
        type: "Cardiologist",
        hospital: "Apollo Hospital",
        rating: 4.9,
        reviews: 128,
        distance: "1.2 km",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
        badges: ["Verified", "15+ Years Exp"]
    },
    {
        id: 2,
        name: "City X-Ray & Scan Center",
        type: "Diagnostic Lab",
        hospital: "Indiranagar",
        rating: 4.7,
        reviews: 85,
        distance: "2.5 km",
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=300&h=300",
        badges: ["NABL Accredited", "24/7 Open"]
    },
    {
        id: 3,
        name: "Dr. Rajesh Verma",
        type: "Dentist",
        hospital: "Smile Care Clinic",
        rating: 4.8,
        reviews: 210,
        distance: "0.8 km",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
        badges: ["Verified"]
    },
    {
        id: 4,
        name: "Max Super Speciality Hospital",
        type: "Multi-Speciality Hospital",
        hospital: "Saket",
        rating: 4.6,
        reviews: 1042,
        distance: "5.0 km",
        image: "https://images.unsplash.com/photo-1587351021759-3e566b9af9ef?auto=format&fit=crop&q=80&w=300&h=300",
        badges: ["JCI Accredited", "Emergency"]
    }
];

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "Doctors";
    const location = searchParams.get("loc") || "Nearby";
    const [view, setView] = useState<"list" | "map">("list");
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEntity, setSelectedEntity] = useState<string>("");

    const handleAction = (name: string) => {
        setSelectedEntity(name);
        setModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            {/* Search Header */}
            <div className="pt-28 pb-8 px-6 bg-white border-b border-slate-200 sticky top-0 z-40">
                <div className="container mx-auto">
                    <UnifiedSearchBar />
                </div>
            </div>

            <div className="container mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">

                {/* Filters Sidebar (Desktop) */}
                <aside className="hidden lg:block w-64 shrink-0 space-y-8">
                    <div>
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Filter className="w-4 h-4" /> Filters
                        </h3>

                        <div className="space-y-6">
                            {/* Gender Filter */}
                            <div className="space-y-3">
                                <h4 className="text-sm font-semibold text-slate-700">Gender</h4>
                                <div className="space-y-2">
                                    {['Male Doctor', 'Female Doctor'].map(label => (
                                        <label key={label} className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer hover:text-primary">
                                            <div className="w-4 h-4 rounded border border-slate-300" />
                                            {label}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Patient Stories */}
                            <div className="space-y-3">
                                <h4 className="text-sm font-semibold text-slate-700">Patient Stories</h4>
                                <div className="space-y-2">
                                    {['10+ Patient Stories', '30+ Patient Stories'].map(label => (
                                        <label key={label} className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer hover:text-primary">
                                            <div className="w-4 h-4 rounded border border-slate-300" />
                                            {label}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="space-y-3">
                                <h4 className="text-sm font-semibold text-slate-700">Availability</h4>
                                <div className="space-y-2">
                                    {['Available Today', 'Available Tomorrow'].map(label => (
                                        <label key={label} className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer hover:text-primary">
                                            <div className="w-4 h-4 rounded border border-slate-300" />
                                            {label}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Results Stream */}
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-xl font-bold text-slate-900">
                            Results for "{query}" in {location}
                            <span className="block text-sm font-normal text-slate-500 mt-1">Showing {MOCK_RESULTS.length} verified results</span>
                        </h1>

                        {/* View Toggle */}
                        <div className="bg-white border p-1 rounded-lg flex items-center gap-1 shadow-sm">
                            <button
                                onClick={() => setView('list')}
                                className={`p-2 rounded-md transition-all ${view === 'list' ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
                            >
                                <List className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setView('map')}
                                className={`p-2 rounded-md transition-all ${view === 'map' ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
                            >
                                <Map className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {MOCK_RESULTS.map((item) => (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                key={item.id}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6"
                            >
                                {/* Image */}
                                <div className="shrink-0 relative">
                                    <img src={item.image} alt={item.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover" />
                                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold shadow-sm">
                                        ⭐ {item.rating}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                                        <div>
                                            <h2 className="text-lg font-bold text-slate-900">{item.name}</h2>
                                            <p className="text-sm text-primary font-medium">{item.type}</p>
                                            <p className="text-sm text-slate-500 mb-2">{item.hospital}</p>
                                            <div className="flex items-center gap-2 text-xs text-slate-400">
                                                <MapPin className="w-3 h-3" /> {item.distance} away
                                            </div>
                                        </div>
                                        {/* Badges */}
                                        <div className="flex flex-wrap gap-2">
                                            {item.badges.map(badge => (
                                                <span key={badge} className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-md border border-green-100">
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4">
                                        <div className="text-sm text-slate-500">
                                            <span className="text-slate-900 font-bold">{item.reviews}</span> Patient Stories
                                        </div>
                                        <Button
                                            onClick={() => handleAction(item.name)}
                                            className="bg-slate-900 text-white hover:bg-slate-800 rounded-xl px-6"
                                        >
                                            Get Early Access
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-12 text-center">
                        <p className="text-slate-500 text-sm mb-4">Viewing 4 of 124 results</p>
                        <Button variant="outline" className="rounded-full px-8 border-slate-200">Load More Results</Button>
                    </div>
                </div>
            </div>

            <Footer />
            <EarlyAccessModal
                open={modalOpen}
                onOpenChange={setModalOpen}
            />
        </div>
    );
};

export default SearchResults;
