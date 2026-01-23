import { LucideIcon } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import ServiceAccordionItem from "./ServiceAccordionItem";

interface Service {
  name: string;
  price: string;
  description?: string;
  duration?: string;
}

interface ServiceCategoryProps {
  icon: LucideIcon;
  title: string;
  description: string;
  services: Service[];
  index: number;
  isAlternate?: boolean;
}

const ServiceCategory = ({
  icon: Icon,
  title,
  description,
  services,
  index,
  isAlternate = false,
}: ServiceCategoryProps) => {
  const categorySlug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const sectionId = categorySlug;

  return (
    <section
      id={sectionId}
      className={`py-20 ${isAlternate ? "bg-card" : "bg-background"} relative overflow-hidden`}
    >
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Category Header */}
          <div className="text-center mb-12 space-y-6">
            {/* Gold decorative line */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center gold-glow">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="gold-text-gradient">{title}</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>

            {/* Decorative flourish */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="w-1 h-1 rounded-full bg-primary/50" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-1 h-1 rounded-full bg-primary/50" />
            </div>
          </div>

          {/* Services Accordion */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 overflow-hidden gold-glow">
            <Accordion type="single" collapsible className="w-full">
              {services.map((service, serviceIndex) => (
                <ServiceAccordionItem
                  key={serviceIndex}
                  name={service.name}
                  price={service.price}
                  description={service.description}
                  duration={service.duration}
                  index={serviceIndex}
                  categorySlug={categorySlug}
                />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategory;
