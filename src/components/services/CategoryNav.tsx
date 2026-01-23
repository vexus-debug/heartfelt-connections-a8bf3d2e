import { Zap, Sparkles, Syringe, Heart, Droplets, Activity, ShoppingBag, LucideIcon } from "lucide-react";

interface Category {
  icon: LucideIcon;
  title: string;
  slug: string;
}

const categories: Category[] = [
  { icon: Zap, title: "Cavitation/Vacuum", slug: "cavitation-vacuum" },
  { icon: Sparkles, title: "Spa Therapies", slug: "spa-therapies" },
  { icon: Syringe, title: "Fat Dissolving", slug: "fat-dissolving" },
  { icon: Heart, title: "Facials", slug: "facials" },
  { icon: Droplets, title: "IV Drips", slug: "iv-drips" },
  { icon: Activity, title: "Body Enhancement", slug: "body-enhancement" },
  { icon: ShoppingBag, title: "Products", slug: "products" },
];

const CategoryNav = () => {
  const scrollToSection = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      const offset = 80; // Account for any fixed headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="sticky top-0 z-40 py-4 bg-background/80 backdrop-blur-lg border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => scrollToSection(category.slug)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 whitespace-nowrap group"
            >
              <category.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
              <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                {category.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNav;
