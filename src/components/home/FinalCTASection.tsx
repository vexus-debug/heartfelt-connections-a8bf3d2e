import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="py-36 bg-background cream-section-diamonds relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-2xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
      
      {/* Top and bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Corner decorations */}
      <motion.div 
        className="absolute top-12 left-12 w-24 h-24 border-l-2 border-t-2 border-primary/25 rounded-tl-3xl"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-12 right-12 w-24 h-24 border-r-2 border-t-2 border-primary/25 rounded-tr-3xl"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-12 left-12 w-24 h-24 border-l-2 border-b-2 border-primary/25 rounded-bl-3xl"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />
      <motion.div 
        className="absolute bottom-12 right-12 w-24 h-24 border-r-2 border-b-2 border-primary/25 rounded-br-3xl"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, delay: 3 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p 
            className="text-primary uppercase tracking-[0.4em] text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ✦ Your Journey Awaits ✦
          </motion.p>
          
          <motion.h2 
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            You've Read the Story.
            <br />
            <span className="pink-gold-text-gradient">Now, It's Time to Live It.</span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Your transformation is just one step away. Whether it's your first visit or your hundredth, 
            we're here to make you feel extraordinary.
          </motion.p>
          
          <motion.p 
            className="text-primary/80 text-xl font-serif italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            "Come as you are. Leave as the best version of yourself."
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="gold-gradient text-charcoal hover:opacity-90 text-lg px-10 py-7 shadow-lg gold-glow-intense group font-semibold"
              >
                <a
                  href="https://wa.me/2347071979153?text=Hello%20La%20Belle%20Lounge%20%26%20Spa%2C%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Book via WhatsApp
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 py-7 transition-all duration-300 group"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-muted-foreground text-base pt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
          >
            We can't wait to welcome you ❤️
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;