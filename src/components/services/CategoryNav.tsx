import { Eye, Brush, Hand, Sparkles, Heart, LucideIcon } from "lucide-react";

interface Category {
  icon: LucideIcon;
  title: string;
  slug: string;
}

const categories: Category[] = [
  { icon: Eye, title: "Lashes", slug: "lashes-extension" },
  { icon: Brush, title: "Brows", slug: "brows" },
  { icon: Hand, title: "Massage", slug: "massage" },
  { icon: Sparkles, title: "Spa Therapies", slug: "spa-therapies" },
  { icon: Heart, title: "Facials", slug: "facials" },
];

const CategoryNav = () => {
  const scrollToSection = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="sticky top-20 z-30 py-3 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-1 md:gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => scrollToSection(category.slug)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 whitespace-nowrap group"
            >
              <category.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
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
