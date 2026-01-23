import { Button } from "@/components/ui/button";
import { Crown, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesCTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Luxurious gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
      
      {/* Gold accent glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-3xl" />
      
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Decorative icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center gold-glow">
              <Crown className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Experience <br />
            <span className="gold-text-gradient">Luxury & Relaxation</span>?
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Book your appointment today and let our skilled therapists 
            guide you on a journey of rejuvenation and self-care. 
            You deserve this moment of indulgence.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 py-4">
            <div className="w-8 h-px bg-primary/30" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="w-8 h-px bg-primary/30" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="gold-gradient text-primary-foreground hover:opacity-90 text-lg px-8 py-6 gold-glow"
            >
              <Link to="/booking">
                Book Your Appointment
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/2347040241630?text=Hello%20POSHBODY%20Aesthetic%20and%20Med%20Spa%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Premium Products</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Expert Therapists</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Relaxing Ambiance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
