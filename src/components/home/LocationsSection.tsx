import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const locations = [
  {
    name: "Lagos - Lekki",
    tag: "Lekki Phase I",
    address: "Marwa Mall, No 2, Adewunmi Adebimpe Drive, At Marwa Bustop By Providence Street, Lekki Phase I, Lagos",
    hours: "Mon - Sat: 9 AM - 7 PM",
    note: "Closed Sundays",
    phone: "+234 704 024 1630"
  },
  {
    name: "Lagos - Mainland",
    tag: "Okota",
    address: "No 28 Idowu Rufai, Ago palace, Okota, Lagos",
    hours: "Mon - Sat: 9 AM - 7 PM",
    note: "Closed Sundays",
    phone: "+234 704 024 1649"
  },
  {
    name: "Lagos - Chevron",
    tag: "Chevron Drive",
    address: "No.1 James Anyaeche street, Bera estate, Chevron drive, Lagos",
    hours: "Mon - Sat: 9 AM - 7 PM",
    note: "Closed Sundays",
    phone: "+234 706 655 9432"
  },
  {
    name: "Abuja Studio",
    tag: "Utako",
    address: "Suite C12/13 Emmanuel Plaza, Opposite Daily Trust Newspaper, Utako, FCT Abuja",
    hours: "Mon - Sat: 9 AM - 7 PM",
    note: "Closed Sundays",
    phone: "+234 704 024 1630"
  },
  {
    name: "Port Harcourt",
    tag: "Eileenwo Street",
    address: "No 37b Eileenwo Street, behind Skippers Fast Food, Opposite Bite Delight Fast Food, Port Harcourt",
    hours: "Mon - Sat: 9 AM - 7 PM",
    note: "Closed Sundays",
    phone: "+234 704 024 1630"
  },
];

const LocationsSection = () => {
  return (
    <section className="py-28 pink-gradient-organic pink-section-organic relative overflow-hidden">
      {/* Decorative map-like lines */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="map-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-white"/>
            <circle cx="50" cy="50" r="2" fill="currentColor" className="text-white"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#map-pattern)"/>
        </svg>
      </div>
      
      {/* Radial glow effects - gold accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="text-white/80 uppercase tracking-[0.3em] text-sm font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Visit Us Today
          </motion.span>
          <motion.h2 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Find Your Nearest Location
          </motion.h2>
          <motion.p 
            className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Five convenient locations across Lagos, Abuja, and Port Harcourt, 
            ready to welcome you with open arms.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {locations.map((location, index) => (
            <motion.div 
              key={index}
              className="p-6 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-accent/40 transition-all duration-500 group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(255, 255, 255, 0.08)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {location.name}
                  </h3>
                  <span className="text-accent text-xs font-medium uppercase tracking-wider">
                    {location.tag}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 text-white/90">
                <motion.div 
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ x: 3 }}
                >
                  <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed text-sm">{location.address}</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ x: 3 }}
                >
                  <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{location.hours} <span className="text-white/60">• {location.note}</span></span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ x: 3 }}
                >
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="font-medium text-sm">{location.phone}</span>
                </motion.div>
              </div>
              
              {/* Decorative corner - gold accent */}
              <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-accent/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            size="lg"
            className="gold-gradient text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 group gold-glow"
          >
            <Link to="/contact" className="flex items-center gap-3">
              Get Directions & Contact
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
