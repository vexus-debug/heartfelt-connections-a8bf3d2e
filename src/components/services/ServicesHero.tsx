import PageHero from "@/components/PageHero";
import hero4 from "@/assets/hero/hero-4.jpg";

const ServicesHero = () => {
  return (
    <PageHero
      preTitle="Luxury Treatments"
      title="Our"
      highlightedWord="Services"
      subtitle="Discover our curated collection of beauty and wellness treatments, each designed to transport you to a realm of pure relaxation and enhance your natural radiance."
      backgroundImage={hero4}
    />
  );
};

export default ServicesHero;
