import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";
import gallery8 from "@/assets/gallery/gallery-8.jpg";
import gallery11 from "@/assets/gallery/gallery-11.jpg";
import gallery13 from "@/assets/gallery/gallery-13.jpg";

const galleryImages = [
  { src: gallery2, alt: "Spa treatment" },
  { src: gallery3, alt: "Beauty service" },
  { src: gallery6, alt: "Relaxation" },
  { src: gallery8, alt: "Facial treatment" },
  { src: gallery11, alt: "Wellness" },
  { src: gallery13, alt: "Spa experience" },
];

const GalleryPreviewSection = () => {
  return (
    <section className="py-28 pink-gradient-soft pink-section-artdeco relative overflow-hidden">
      {/* Decorative diagonal lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.06]">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute h-px bg-white/50 w-[200%] -left-1/2"
            style={{
              top: `${i * 5}%`,
              transform: 'rotate(-15deg)',
            }}
          />
        ))}
      </div>
      
      {/* Corner ornaments - gold accent */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-accent/30 rounded-tl-2xl" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-accent/30 rounded-tr-2xl" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-accent/30 rounded-bl-2xl" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-accent/30 rounded-br-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-14"
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
            ✦ Moments of Bliss ✦
          </motion.span>
          <motion.h2 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            See the Magic Yourself
          </motion.h2>
          <motion.p 
            className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Don't just take our word for it — explore the moments of transformation, 
            relaxation, and pure bliss that happen here every day.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-500" />
              
              {/* Border on hover */}
              <motion.div 
                className="absolute inset-2 border-2 border-white/0 group-hover:border-white/40 rounded-xl transition-all duration-500"
              />
              
              {/* Corner accent - gold */}
              <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-accent/0 group-hover:border-accent/60 rounded-br-lg transition-all duration-500" />
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
            className="gold-gradient text-charcoal hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 group gold-glow"
          >
            <Link to="/gallery" className="flex items-center gap-3">
              Explore Our Gallery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreviewSection;
