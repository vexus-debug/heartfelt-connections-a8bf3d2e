import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amara O.",
    text: "From the moment I walked in, I felt like royalty. The staff genuinely cares about your comfort. My skin has never looked better!",
    rating: 5,
    service: "Hydra Facial"
  },
  {
    name: "Chidinma E.",
    text: "I was skeptical about body sculpting, but the results speak for themselves. The team is professional and the ambiance is heavenly.",
    rating: 5,
    service: "Lipocavitation"
  },
  {
    name: "Blessing N.",
    text: "The vacuum butt lift was exactly what I needed. I left feeling like a completely new person. Thank you, POSHBODY!",
    rating: 5,
    service: "Vacuum Butt Lift"
  },
  {
    name: "Ada M.",
    text: "Finally found my go-to med spa! The attention to detail and personalized care is unmatched. Truly the best place to go!",
    rating: 5,
    service: "Moroccan Hammam Bath"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 bg-background cream-section-abstract relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      
      {/* Floating quotes */}
      <motion.div 
        className="absolute top-20 left-20 text-primary/8 text-9xl font-serif"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        "
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-20 text-primary/8 text-9xl font-serif rotate-180"
        animate={{ y: [0, 10, 0], rotate: [180, 175, 180] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        "
      </motion.div>
      
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
            Words From Our Family
          </motion.span>
          <motion.h2 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Hear From Those <span className="text-primary">We've Touched</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our clients aren't just customers — they're family. Here's what they have to say 
            about their journey with us.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="relative p-8 rounded-3xl bg-card border border-primary/12 hover:border-primary/30 transition-all duration-500 group shadow-sm"
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(139, 58, 92, 0.1)" }}
            >
              {/* Quote icon */}
              <motion.div
                className="absolute top-6 right-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="w-12 h-12 text-primary/15 group-hover:text-primary/30 transition-colors duration-500" />
              </motion.div>
              
              {/* Rating stars - Gold */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-5 h-5 fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed text-lg italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                <div>
                  <p className="font-semibold text-primary text-lg">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.service}</p>
                </div>
                
                {/* Decorative accent */}
                <div className="w-12 h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
              </div>
              
              {/* Corner decoration */}
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/15 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
