import { Link } from "react-router-dom";
import { Instagram, CalendarCheck } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* Social Media Button - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        <a
          href="https://www.instagram.com/poshbodyng"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-2xl glass-strong shadow-float flex items-center justify-center text-primary hover:text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover-lift hover-glow"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>

      {/* Book Now Button - Bottom Right */}
      <Link
        to="/booking"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-6 py-4 rounded-2xl glass-strong shadow-float text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift btn-shine group"
      >
        <CalendarCheck className="w-6 h-6 transition-transform group-hover:scale-110" />
        <span className="hidden sm:inline text-base">Book Now</span>
      </Link>
    </>
  );
};

export default FloatingButtons;
