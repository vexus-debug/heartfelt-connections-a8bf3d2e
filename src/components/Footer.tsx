import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/15">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/">
              <img 
                src={logo} 
                alt="POSHBODY Aesthetic and Med Spa" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              THE BEST PLACE TO GO for luxury medical spa services. Get your body snatched, 
              your skin glow, or maximum relaxation and pampering.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/poshbodyng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-primary font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Our Services
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact Us
              </Link>
              <Link to="/booking" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Book Appointment
              </Link>
            </nav>
          </div>

          {/* Lagos Locations */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-primary font-semibold">Lagos Locations</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-accent text-sm font-medium">Lekki Office</p>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-xs">
                    Marwa Mall, No 2, Adewunmi Adebimpe Drive, Lekki Phase I, Lagos
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-accent text-sm font-medium">Mainland Office</p>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-xs">
                    No 28 Idowu Rufai, Ago palace, Okota, Lagos
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-accent text-sm font-medium">Chevron Office</p>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-xs">
                    No.1 James Anyaeche street, Bera estate, Chevron drive, Lagos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Abuja & Port Harcourt */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-primary font-semibold">Other Locations</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-accent text-sm font-medium">Abuja Studio</p>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-xs">
                    Suite C12/13 Emmanuel Plaza, Opposite Daily Trust Newspaper, Utako, FCT Abuja
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-accent text-sm font-medium">Port Harcourt Office</p>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-xs">
                    No 37b Eileenwo Street, behind Skippers Fast Food, Port Harcourt
                  </p>
                </div>
              </div>
              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                  <p className="text-muted-foreground text-xs">
                    Mon - Sat: 9 AM - 7 PM
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <a href="tel:+2347040241630" className="text-muted-foreground hover:text-primary text-xs transition-colors">
                    +234 704 024 1630
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} POSHBODY Aesthetic and Med Spa. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Lagos • Abuja • Port Harcourt
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
