import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const locations = [
  {
    name: "New GRA Branch",
    tag: "Main Location",
    address: "21 B, Obagi Street, New GRA, by Salvation Ministries HQ, Port Harcourt",
    hours: "Mon - Sat: 9 AM - 7 PM",
    note: "Closed Sundays",
    phone: "+234 707 197 9153"
  },
  {
    name: "Eneka Branch",
    tag: "24/7 Location",
    address: "Shop U8, Pearl Garden, Nechka Shopping Complex, Eneka Link Rd, Port Harcourt",
    hours: "Open 24 Hours",
    note: "7 Days a Week",
    phone: "+234 707 197 9153"
  },
];

const LocationsSection = () => {
  return (
    <section className="py-28 rose-gradient-soft rose-section-organic relative overflow-hidden">
      {/* Decorative map-like lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="map-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary-foreground"/>
            <circle cx="50" cy="50" r="2" fill="currentColor" className="text-primary-foreground"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#map-pattern)"/>
        </svg>
      </div>
      
      {/* Radial glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-foreground/8 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary-foreground/8 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="text-primary-foreground/75 uppercase tracking-[0.3em] text-sm font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Visit Us Today
          </motion.span>
          <motion.h2 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Find Your Nearest Sanctuary
          </motion.h2>
          <motion.p 
            className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We're closer than you think. Two convenient locations in Port Harcourt, 
            ready to welcome you with open arms.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <motion.div 
              key={index}
              className="p-8 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 hover:border-primary-foreground/30 transition-all duration-500 group"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(255, 255, 255, 0.08)" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-primary-foreground flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin className="w-7 h-7 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                    {location.name}
                  </h3>
                  <span className="text-primary-foreground/65 text-sm font-medium uppercase tracking-wider">
                    {location.tag}
                  </span>
                </div>
              </div>
              
              <div className="space-y-5 text-primary-foreground/90">
                <motion.div 
                  className="flex items-start gap-4 p-4 rounded-xl bg-primary-foreground/5 group-hover:bg-primary-foreground/10 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-primary-foreground/70 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{location.address}</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 group-hover:bg-primary-foreground/10 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Clock className="w-5 h-5 text-primary-foreground/70 flex-shrink-0" />
                  <span>{location.hours} <span className="text-primary-foreground/55">• {location.note}</span></span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 group-hover:bg-primary-foreground/10 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 text-primary-foreground/70 flex-shrink-0" />
                  <span className="font-medium">{location.phone}</span>
                </motion.div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-primary-foreground/15 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
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