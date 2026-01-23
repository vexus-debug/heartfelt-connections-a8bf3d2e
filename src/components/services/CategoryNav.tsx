import { Heart, Sparkles, Zap, Droplets, Hand, Scissors, LucideIcon } from "lucide-react";

interface Category {
  icon: LucideIcon;
  title: string;
  slug: string;
}

const categories: Category[] = [
  { icon: Heart, title: "Massage & Spa", slug: "massage---spa" },
  { icon: Sparkles, title: "Classic Facials", slug: "classic-facials" },
  { icon: Zap, title: "Anti-Aging", slug: "anti-aging-facials" },
  { icon: Droplets, title: "Acne Facials", slug: "acne-facials" },
  { icon: Hand, title: "Pedi & Mani", slug: "pedicure---manicure" },
  { icon: Scissors, title: "Waxing", slug: "waxing-services" },
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
