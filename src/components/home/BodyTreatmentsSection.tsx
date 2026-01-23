import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import gallery5 from "@/assets/gallery/gallery-5.jpg";

const treatments = [
  { name: "Body Sculpting", icon: "✨" },
  { name: "Cavitation", icon: "🎯" },
  { name: "Lymphatic Drainage", icon: "💫" },
  { name: "Fat Dissolving", icon: "⚡" },
];

const BodyTreatmentsSection = () => {
  return (
    <section className="py-28 gold-gradient-burnished gold-section-circles relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.1) 2px,
            rgba(255,255,255,0.1) 4px
          )`
        }} />
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-12 right-12 w-20 h-20 border-r-2 border-t-2 border-primary-foreground/15 rounded-tr-3xl" />
      <div className="absolute bottom-12 left-12 w-20 h-20 border-l-2 border-b-2 border-primary-foreground/15 rounded-bl-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="order-2 lg:order-1 relative"
              initial={{ opacity: 0, x: -60, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <motion.img 
                  src={gallery5} 
                  alt="Body treatment session" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-6 -right-6 w-36 h-36 border-2 border-primary-foreground/20 rounded-3xl"
                animate={{ rotate: [0, -3, 0, 3, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -top-4 -left-4 w-24 h-24 border border-primary-foreground/15 rounded-2xl"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2 space-y-10"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div>
                <motion.span 
                  className="text-primary-foreground/70 uppercase tracking-[0.3em] text-sm font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Shape Your Confidence
                </motion.span>
                <motion.h2 
                  className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mt-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Your Body, <br />Your Temple
                </motion.h2>
              </div>
              
              <motion.p 
                className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Let us help you sculpt it. Our advanced body treatments combine cutting-edge 
                technology with expert care to help you achieve the silhouette you've always dreamed of.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {treatments.map((treatment, index) => (
                  <motion.div 
                    key={index}
                    className="p-5 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 text-center hover:bg-primary-foreground/15 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.span 
                      className="text-3xl mb-3 block"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {treatment.icon}
                    </motion.span>
                    <span className="text-primary-foreground font-medium">
                      {treatment.name}
                    </span>
                  </motion.div>
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
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link to="/services" className="flex items-center gap-3">
                    Explore Body Treatments
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyTreatmentsSection;