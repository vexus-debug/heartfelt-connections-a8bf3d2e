import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceAccordionItemProps {
  name: string;
  price: string;
  description?: string;
  duration?: string;
  requiresPhoto?: boolean;
  index: number;
  categorySlug: string;
}

const ServiceAccordionItem = ({
  name,
  price,
  description,
  duration,
  requiresPhoto,
  index,
  categorySlug,
}: ServiceAccordionItemProps) => {
  const bookingUrl = `/booking?service=${categorySlug}&treatment=${encodeURIComponent(name)}`;

  return (
    <AccordionItem
      value={`${categorySlug}-${index}`}
      className="border-b border-primary/10 last:border-b-0 group"
    >
      <AccordionTrigger className="py-6 px-4 hover:no-underline hover:bg-primary/5 transition-all duration-300 rounded-lg">
        <div className="flex items-center justify-between w-full pr-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
            <div className="flex items-center gap-3">
              <span className="font-medium text-foreground text-left text-lg">
                {name}
              </span>
              {requiresPhoto && (
                <span className="photo-required-badge">
                  <Camera className="w-3 h-3" />
                  Send pics
                </span>
              )}
            </div>
          </div>
          <span className="text-primary font-semibold text-lg whitespace-nowrap">
            {price}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-6">
        <div className="ml-6 space-y-4 pt-2">
          {/* Decorative gold line */}
          <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
          
          {description && (
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
          
          {duration && (
            <p className="text-sm text-muted-foreground">
              <span className="text-primary">Duration:</span> {duration}
            </p>
          )}

          {requiresPhoto && (
            <p className="text-sm text-accent flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Please send photos via WhatsApp before booking this treatment
            </p>
          )}

          <Button
            asChild
            className="gold-gradient text-primary-foreground hover:opacity-90 mt-4"
          >
            <Link to={bookingUrl}>
              Book This Treatment
            </Link>
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default ServiceAccordionItem;