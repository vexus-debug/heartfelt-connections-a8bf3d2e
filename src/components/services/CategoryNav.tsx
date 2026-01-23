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
    <section className="sticky top-20 z-30 py-4 glass-strong border-b-0 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => scrollToSection(category.slug)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-subtle hover:bg-primary/15 hover:shadow-soft transition-all duration-300 whitespace-nowrap group"
            >
              <category.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
              <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
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
