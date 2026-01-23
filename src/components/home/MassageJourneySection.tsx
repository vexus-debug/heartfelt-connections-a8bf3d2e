import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import bodySkin from "@/assets/gallery/body-skin.jpg";

const treatmentHighlights = [
  { name: "Lipocavitation/Tummy Blast", description: "Ultrasonic fat destruction for a flatter tummy" },
  { name: "Vacuum Butt Lift", description: "Non-surgical enhancement for lifted curves" },
  { name: "Sculpting & Waist Trimming", description: "Define your ideal silhouette" },
];

const MassageJourneySection = () => {
  return (
    <section className="py-28 pink-gradient-streak pink-section-organic relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/5 to-transparent" />
      
      {/* Gold accent orbs */}
      <motion.div 
        className="absolute top-32 right-20 w-4 h-4 bg-accent/60 rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-40 left-32 w-3 h-3 bg-accent/50 rounded-full"
        animate={{ y: [0, -15, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <motion.span 
                className="text-white/80 uppercase tracking-[0.3em] text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Shape Your Dreams
              </motion.span>
              <motion.h2 
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Sculpt Your Body, Boost Your Confidence
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-white/90 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Transform your silhouette with our advanced cavitation and vacuum therapies. 
              Non-invasive treatments that target stubborn fat and enhance your natural curves.
            </motion.p>
            
            <div className="space-y-4">
              {treatmentHighlights.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-5 p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-lg">{item.name}</h4>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <Button 
                asChild 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link to="/services" className="flex items-center gap-3">
                  Explore Cavitation Therapies
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <motion.img 
                src={bodySkin} 
                alt="Body sculpting treatment"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            
            {/* Decorative frame elements - gold accent */}
            <motion.div 
              className="absolute -top-6 -right-6 w-40 h-40 border-2 border-accent/40 rounded-3xl"
              animate={{ rotate: [0, 3, 0, -3, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-28 h-28 border border-white/25 rounded-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MassageJourneySection;
