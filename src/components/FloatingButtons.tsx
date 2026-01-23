import { Link } from "react-router-dom";
import { Instagram, Facebook, CalendarCheck } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* Social Media Buttons - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        <a
          href="https://www.instagram.com/labelleng_spa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full rose-gradient flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://www.facebook.com/labelleng_spa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full rose-gradient flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Follow us on Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
      </div>

      {/* Book Now Button - Bottom Right - Gold accent */}
      <Link
        to="/booking"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full gold-gradient text-charcoal font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <CalendarCheck className="w-5 h-5" />
        <span className="hidden sm:inline">Book Now</span>
      </Link>
    </>
  );
};

export default FloatingButtons;