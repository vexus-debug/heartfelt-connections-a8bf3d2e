import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import backMassage from "@/assets/gallery/back-massage.jpg";
import footMassage from "@/assets/gallery/foot-massage.jpg";

const SanctuarySection = () => {
  return (
    <section className="py-28 bg-background cream-section-abstract relative overflow-hidden">
      {/* Decorative rose accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      
      {/* Floating decorative orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1 grid grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl image-frame"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src={backMassage} 
                alt="Spa interior"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <motion.div 
              className="aspect-[3/4] rounded-3xl overflow-hidden mt-12 shadow-2xl image-frame"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src={footMassage} 
                alt="Relaxation area"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
                Step Into Tranquility
              </span>
            </motion.div>
            
            <motion.h2 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Welcome to <br />
              <span className="text-primary">Your Sanctuary</span>
            </motion.h2>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Step through our doors and leave the world behind. Here, time slows down. 
                Here, you are the priority.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Poshbody Spa isn't just a place — it's an escape. A retreat designed 
                to wrap you in warmth, comfort, and care from the moment you arrive.
              </p>
              <p className="text-primary/80 text-xl leading-relaxed font-serif italic border-l-4 border-primary/30 pl-6">
                "This is where your transformation begins..."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <Link to="/about" className="flex items-center gap-3">
                  Discover Our Story
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

export default SanctuarySection;