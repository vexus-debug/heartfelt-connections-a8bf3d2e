import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
  { name: "Book Now", path: "/booking" },
];

const Logo = () => (
  <div className="flex flex-col items-start leading-none">
    <span className="font-playfair text-2xl md:text-3xl font-bold tracking-wide pink-gold-text-gradient">
      POSHBODY
    </span>
    <span className="text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] uppercase">
      Aesthetic & Med Spa
    </span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong shadow-soft border-b-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+2347040241630"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 px-3 py-2 rounded-xl hover:bg-primary/5"
            >
              <Phone className="w-4 h-4" />
              +234 704 024 1630
            </a>
            <Button asChild className="rose-gradient text-white hover:opacity-90 font-semibold shadow-soft hover-lift btn-shine rounded-xl">
              <a
                href="https://wa.me/2347040241630?text=Hello%20POSHBODY%20Aesthetic%20and%20Med%20Spa%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-primary/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-primary/15">
                <a
                  href="tel:+2347040241630"
                  className="flex items-center gap-2 text-muted-foreground mb-4"
                >
                  <Phone className="w-4 h-4" />
                  +234 704 024 1630
                </a>
                <Button asChild className="w-full rose-gradient text-white font-semibold shadow-soft rounded-xl">
                  <a
                    href="https://wa.me/2347040241630?text=Hello%20POSHBODY%20Aesthetic%20and%20Med%20Spa%2C%20I%20would%20like%20to%20book%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
