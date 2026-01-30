import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import novaLogo from "@/assets/nova_logo_new.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

interface HeaderProps {
  onEmergencyClick?: () => void;
}

export const Header = ({ onEmergencyClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (!element) return;

    // Account for fixed header height (approx 100px)
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    setIsMobileMenuOpen(false);
  };

  const handleEmergencyClick = () => {
    if (onEmergencyClick) {
      onEmergencyClick();
    } else {
      scrollToSection("#emergency");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
        ? "bg-white/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-white/50 h-20 md:h-24"
        : "bg-transparent border-transparent h-24 md:h-28"
        }`}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src={novaLogo}
              alt="Nova Health Solutions"
              className="h-10 md:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary group-hover:opacity-80 transition-opacity tracking-tight block">
              Nova Health Solutions
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm lg:text-base relative group tracking-tight"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/20 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            <div className="flex items-center gap-5">
              <Button
                onClick={handleEmergencyClick}
                variant="destructive"
                className="bg-emergency hover:bg-red-600 text-white font-medium rounded-full px-6 py-5 shadow-lg shadow-red-500/10 hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency</span>
              </Button>
              <Button
                onClick={() => scrollToSection("#early-access")}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium rounded-full px-8 py-5 shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Early Access
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100 bg-white shadow-xl absolute left-0 right-0 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-2 px-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/70 hover:text-primary transition-colors font-medium py-3 text-left border-b border-gray-50 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 pb-2 space-y-3">
                <Button
                  onClick={handleEmergencyClick}
                  variant="destructive"
                  className="w-full rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Emergency
                </Button>
                <Button
                  onClick={() => scrollToSection("#early-access")}
                  className="bg-primary hover:bg-primary/90 w-full rounded-xl shadow-md"
                >
                  Get Early Access
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
