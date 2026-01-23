import Layout from "@/components/Layout";
import ServicesHero from "@/components/services/ServicesHero";
import CategoryNav from "@/components/services/CategoryNav";
import ServiceCategory from "@/components/services/ServiceCategory";
import AdditionalTreatments from "@/components/services/AdditionalTreatments";
import ServicesCTA from "@/components/services/ServicesCTA";
import { serviceCategories, additionalServices } from "@/data/services";

const Services = () => {
  return (
    <Layout>
      <ServicesHero />
      <CategoryNav />
      
      {/* Service Categories */}
      {serviceCategories.map((category, index) => (
        <ServiceCategory
          key={index}
          icon={category.icon}
          title={category.title}
          slug={category.slug}
          description={category.description}
          services={category.services}
          index={index}
          isAlternate={index % 2 === 1}
        />
      ))}

      <AdditionalTreatments services={additionalServices} />
      <ServicesCTA />
    </Layout>
  );
};

export default Services;
