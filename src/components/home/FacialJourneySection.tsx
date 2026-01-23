import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery12 from "@/assets/gallery/gallery-12.jpg";
import gallery17 from "@/assets/gallery/gallery-17.jpg";

const facialTags = ["Hydra Facials", "Chemical Peel", "Vampire MicroNeedling", "Brightening Facials"];

const FacialJourneySection = () => {
  return (
    <section className="py-28 bg-background dark-section-diamonds relative overflow-hidden">
      {/* Decorative borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Floating accents */}
      <motion.div 
        className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-32 right-32 w-3 h-3 bg-primary/50 rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              <motion.div 
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={gallery1} 
                  alt="Facial treatment" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <motion.div 
                className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={gallery17} 
                  alt="Skincare treatment" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </div>
            <motion.div 
              className="pt-12"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <motion.img 
                  src={gallery12} 
                  alt="Glow facial" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/40 bg-primary/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wide">Reveal Your Glow</span>
            </motion.div>
            
            <motion.h2 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Your Skin Tells <br />
              <span className="text-primary">Your Story</span>
            </motion.h2>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Let us help you write a more luminous chapter. Our advanced facial treatments 
                don't just treat — they transform.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                From hydrating glow facials to targeted anti-aging therapies, we personalize 
                every session to your unique skin needs. Because you deserve to see radiance 
                every time you look in the mirror.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {facialTags.map((tag, index) => (
                <motion.span 
                  key={tag}
                  className="px-5 py-2.5 rounded-full bg-card border border-primary/30 text-sm font-medium hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <Link to="/services" className="flex items-center gap-3">
                  Explore Facials
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FacialJourneySection;