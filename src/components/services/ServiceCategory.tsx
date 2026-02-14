import { LucideIcon } from "lucide-react";
import ServiceItem from "./ServiceItem";

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

  return (
    <section
      id={categorySlug}
      className={`py-20 md:py-28 ${isAlternate ? "bg-card" : "bg-background"} relative overflow-hidden`}
    >
      {/* Minimal decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Minimal Category Header */}
          <div className="mb-14 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {title}
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-xl leading-relaxed pl-[52px]">
              {description}
            </p>
            <div className="pl-[52px]">
              <div className="w-12 h-0.5 bg-primary/30 rounded-full" />
            </div>
          </div>

          {/* Clean Service List */}
          <div className="space-y-0 pl-[52px]">
            {services.map((service, serviceIndex) => (
              <ServiceItem
                key={serviceIndex}
                name={service.name}
                price={service.price}
                description={service.description}
                duration={service.duration}
                categorySlug={categorySlug}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategory;
