import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";
import gallery8 from "@/assets/gallery/gallery-8.jpg";

const services = [
  { image: gallery2, title: "IV Vitamin Drips", description: "Boost your wellness from within" },
  { image: gallery6, title: "Spa Therapies", description: "Luxurious pampering treatments" },
  { image: gallery8, title: "Fat Dissolving", description: "Target stubborn fat deposits" },
];

const FinishingTouchSection = () => {
  return (
    <section className="py-28 bg-background dark-section-curves relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Floating orbs */}
      <div className="absolute top-32 left-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="text-primary uppercase tracking-[0.3em] text-sm font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Complete Your Transformation
          </motion.span>
          <motion.h2 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The <span className="text-primary">Finishing Touch</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Enhance your results with our complementary treatments. From vitamin drips 
            to luxurious spa therapies, we have everything you need.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
            >
              <motion.img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Gold accent line */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <motion.h3 
                  className="font-serif text-3xl font-bold text-foreground mb-2"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {service.description}
                </motion.p>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-primary/40 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <Link to="/services" className="flex items-center gap-3">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinishingTouchSection;
