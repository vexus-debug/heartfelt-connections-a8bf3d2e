import { useState } from "react";
import { ChevronDown, Camera } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { serviceCategories, Service } from "@/data/services";
import { cn } from "@/lib/utils";

interface SelectedService {
  name: string;
  price: string;
  category: string;
  requiresPhoto?: boolean;
}

interface ServiceMultiSelectProps {
  selectedServices: SelectedService[];
  onSelectionChange: (services: SelectedService[]) => void;
}

const ServiceMultiSelect = ({ selectedServices, onSelectionChange }: ServiceMultiSelectProps) => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const isServiceSelected = (serviceName: string) => {
    return selectedServices.some((s) => s.name === serviceName);
  };

  const toggleService = (service: Service, categoryTitle: string) => {
    if (isServiceSelected(service.name)) {
      onSelectionChange(selectedServices.filter((s) => s.name !== service.name));
    } else {
      onSelectionChange([
        ...selectedServices,
        { 
          name: service.name, 
          price: service.price, 
          category: categoryTitle,
          requiresPhoto: service.requiresPhoto,
        },
      ]);
    }
  };

  const getCategorySelectedCount = (categoryId: string) => {
    const category = serviceCategories.find((c) => c.id === categoryId);
    if (!category) return 0;
    return category.services.filter((s) => isServiceSelected(s.name)).length;
  };

  // Calculate total price
  const totalPrice = selectedServices.reduce((total, service) => {
    const allServices = serviceCategories.flatMap(c => c.services);
    const found = allServices.find(s => s.name === service.name);
    return total + (found?.priceValue || 0);
  }, 0);

  // Check if any selected service requires photo
  const hasPhotoRequired = selectedServices.some(s => s.requiresPhoto);

  return (
    <div className="space-y-2 border border-primary/20 rounded-lg overflow-hidden bg-background">
      {/* Selected count header */}
      <div className="px-4 py-3 bg-muted/50 border-b border-primary/20">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {selectedServices.length === 0 ? (
              "Select one or more services"
            ) : (
              <>
                <span className="font-medium text-primary">{selectedServices.length}</span> service
                {selectedServices.length !== 1 ? "s" : ""} selected
              </>
            )}
          </p>
          {totalPrice > 0 && (
            <p className="text-sm font-semibold text-primary">
              Total: ₦{totalPrice.toLocaleString()}
            </p>
          )}
        </div>
        {hasPhotoRequired && (
          <p className="text-xs text-accent mt-2 flex items-center gap-1">
            <Camera className="w-3 h-3" />
            Some services require you to send photos before booking
          </p>
        )}
      </div>

      {/* Main service categories */}
      {serviceCategories.map((category) => {
        const Icon = category.icon;
        const selectedCount = getCategorySelectedCount(category.id);
        const isOpen = openCategories.includes(category.id);

        return (
          <Collapsible
            key={category.id}
            open={isOpen}
            onOpenChange={() => toggleCategory(category.id)}
          >
            <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted/50 transition-colors border-t border-primary/10 first:border-t-0">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{category.title}</span>
                {selectedCount > 0 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-primary text-primary-foreground">
                    {selectedCount}
                  </span>
                )}
              </div>
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-4 pb-3 space-y-1">
                {category.services.map((service) => (
                  <label
                    key={service.name}
                    className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <Checkbox
                      checked={isServiceSelected(service.name)}
                      onCheckedChange={() => toggleService(service, category.title)}
                    />
                    <span className="flex-1 flex items-center gap-2">
                      {service.name}
                      {service.requiresPhoto && (
                        <span className="photo-required-badge">
                          <Camera className="w-3 h-3" />
                          Send pics
                        </span>
                      )}
                    </span>
                    <span className="text-sm text-primary font-medium">{service.price}</span>
                  </label>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        );
      })}
    </div>
  );
};

export default ServiceMultiSelect;