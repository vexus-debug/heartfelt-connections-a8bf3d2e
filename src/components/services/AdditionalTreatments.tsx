import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface AdditionalService {
  name: string;
  price: string;
}

interface AdditionalTreatmentsProps {
  services: AdditionalService[];
}

const AdditionalTreatments = ({ services }: AdditionalTreatmentsProps) => {
  // Don't render if no services
  if (services.length === 0) return null;
  
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
              <Star className="w-5 h-5 text-primary" />
              <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
              Additional <span className="gold-text-gradient">Treatments</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Specialized services tailored to your unique needs. 
              Contact us for a personalized consultation and pricing.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/booking?service=other&treatment=${encodeURIComponent(service.name)}`}
                className="group"
              >
                <div className="p-5 rounded-xl glass-subtle hover:glass shadow-soft hover:shadow-medium transition-all duration-300 hover-lift">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform duration-300" />
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.name}
                      </h3>
                      <span className="text-primary/70 text-sm italic">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Interested in any of these treatments?
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass-subtle hover:glass border-primary/20 hover:border-primary/40 rounded-xl shadow-soft hover-lift"
            >
              <Link to="/booking?service=other">
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalTreatments;
