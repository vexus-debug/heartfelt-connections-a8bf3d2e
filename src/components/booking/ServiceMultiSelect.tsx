import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { serviceCategories, additionalServices, Service } from "@/data/services";
import { cn } from "@/lib/utils";

interface SelectedService {
  name: string;
  price: string;
  category: string;
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
        { name: service.name, price: service.price, category: categoryTitle },
      ]);
    }
  };

  const getCategorySelectedCount = (categoryId: string) => {
    const category = serviceCategories.find((c) => c.id === categoryId);
    if (!category) return 0;
    return category.services.filter((s) => isServiceSelected(s.name)).length;
  };

  const getAdditionalSelectedCount = () => {
    return additionalServices.filter((s) => isServiceSelected(s.name)).length;
  };

  return (
    <div className="space-y-2 border border-primary/20 rounded-lg overflow-hidden bg-background">
      {/* Selected count header */}
      <div className="px-4 py-3 bg-muted/50 border-b border-primary/20">
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
            <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted/50 transition-colors">
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
                    <span className="flex-1">{service.name}</span>
                    <span className="text-sm text-primary font-medium">{service.price}</span>
                  </label>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        );
      })}

      {/* Additional Treatments */}
      <Collapsible
        open={openCategories.includes("additional")}
        onOpenChange={() => toggleCategory("additional")}
      >
        <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted/50 transition-colors border-t border-primary/10">
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-primary" />
            <span className="font-medium">Additional Treatments</span>
            {getAdditionalSelectedCount() > 0 && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-primary text-primary-foreground">
                {getAdditionalSelectedCount()}
              </span>
            )}
          </div>
          <ChevronDown
            className={cn(
              "w-4 h-4 text-muted-foreground transition-transform duration-200",
              openCategories.includes("additional") && "rotate-180"
            )}
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-4 pb-3 space-y-1">
            {additionalServices.map((service) => (
              <label
                key={service.name}
                className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <Checkbox
                  checked={isServiceSelected(service.name)}
                  onCheckedChange={() => toggleService(service, "Additional Treatments")}
                />
                <span className="flex-1">{service.name}</span>
                <span className="text-sm text-muted-foreground italic">{service.price}</span>
              </label>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ServiceMultiSelect;
