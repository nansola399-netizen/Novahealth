import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-slate-50/80 backdrop-blur-sm text-slate-600 py-24 border-t border-slate-200/60">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* About */}
          <div className="space-y-8">
            <h5 className="font-bold text-lg tracking-tight text-slate-900">Nova Health Solutions</h5>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-light tracking-wide">
              Nova Health Solutions is an integrated healthcare service
              marketplace connecting you with verified medical services across
              India.
            </p>
            <div className="flex items-center gap-2.5 text-primary font-medium bg-blue-50/50 inline-flex px-4 py-2 rounded-full border border-blue-100/50">
              <Heart className="h-3.5 w-3.5 fill-current" />
              <span className="text-xs tracking-wide">Built for better healthcare</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-8">Services</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-light">
              <li>
                <Link
                  to="/doctor-consultations"
                  className="hover:text-primary hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  Doctor Consultations
                </Link>
              </li>
              <li>
                <Link
                  to="/emergency-services"
                  className="hover:text-primary hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  Emergency Services
                </Link>
              </li>
              <li>
                <Link
                  to="/ambulance-booking"
                  className="hover:text-primary hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  Ambulance Booking
                </Link>
              </li>
              <li>
                <Link
                  to="/lab-diagnostics"
                  className="hover:text-primary hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  Lab & Diagnostics
                </Link>
              </li>
              <li>
                <Link
                  to="/home-nursing"
                  className="hover:text-primary hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  Home Nursing Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-light">
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-primary hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-primary hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/get-early-access"
                  className="hover:text-primary hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  Get Early Access
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-8">Contact Us</h4>
            <ul className="space-y-6 text-slate-500 text-sm">
              <li className="flex items-start gap-4 group">
                <div className="p-2.5 bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] group-hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)] transition-all border border-slate-100">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="mt-2 font-light">India</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] group-hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)] transition-all border border-slate-100">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="font-light">+91 9898786683</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] group-hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)] transition-all border border-slate-100">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="text-slate-700 font-medium tracking-wide">contact@novahealthsolution.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-slate-200/60 pt-10 mt-10">
          <p className="text-xs text-slate-400 mb-8 leading-relaxed max-w-5xl font-light tracking-wide">
            <strong className="text-slate-600 font-medium">Disclaimer:</strong> Nova Health Solutions is a healthcare
            service facilitation platform and does not provide medical
            diagnosis or treatment. All medical services are provided by
            independent, verified healthcare providers.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 font-light">
            <p>
              © {new Date().getFullYear()} Nova Health Solutions. All rights
              reserved.
            </p>
            <div className="flex items-center gap-8">
              <span className="hover:text-primary transition-colors cursor-pointer hover:underline underline-offset-4 decoration-primary/30">Privacy</span>
              <Link to="/terms" className="hover:text-primary transition-colors cursor-pointer hover:underline underline-offset-4 decoration-primary/30">Terms</Link>
              <span className="hover:text-primary transition-colors cursor-pointer hover:underline underline-offset-4 decoration-primary/30">Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
