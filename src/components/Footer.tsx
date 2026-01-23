import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/">
              <img 
                src={logo} 
                alt="La Belle Lounge & Spa" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Where luxury meets wellness. Experience premium beauty and body treatments 
              designed to enhance your natural beauty and promote deep relaxation.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/labelleng_spa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/labelleng_spa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-primary">Quick Links</h4>
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

          {/* New GRA Branch */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-primary">New GRA Branch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  21 B, Obagi Street, New GRA, by Salvation Ministries HQ, Port Harcourt
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Mon - Sat: 9 AM - 7 PM
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+2347071979153" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  +234 707 197 9153
                </a>
              </div>
            </div>
          </div>

          {/* Eneka Branch */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-primary">Eneka Branch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Shop U8, Pearl Garden, Nechka Shopping Complex, Eneka Link Rd, Port Harcourt
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Open 24 Hours
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+2347071979153" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  +234 707 197 9153
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Banking Details */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground mb-1">Banking Details</p>
              <p className="text-sm text-foreground">
                <span className="text-primary">FCMB</span> | Acc: 8754729010 | De-Labelle Lounge & Spa
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} La Belle Lounge & Spa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
