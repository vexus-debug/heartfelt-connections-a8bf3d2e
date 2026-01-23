import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Import hero images
import hero1 from "@/assets/hero/hero-1.jpg";
import hero2 from "@/assets/hero/hero-2.jpg";
import hero3 from "@/assets/hero/hero-3.jpg";
import hero4 from "@/assets/hero/hero-4.jpg";
import hero5 from "@/assets/hero/hero-5.jpg";
import hero6 from "@/assets/hero/hero-6.jpg";

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations for parallax
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Transform mouse position to parallax values
  const imageX = useTransform(smoothMouseX, [-0.5, 0.5], [15, -15]);
  const imageY = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);
  const frameX = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const frameY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);
  const orbX = useTransform(smoothMouseX, [-0.5, 0.5], [30, -30]);
  const orbY = useTransform(smoothMouseY, [-0.5, 0.5], [30, -30]);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-background cream-section-curves"
    >
      {/* Floating decorative orbs - rose and gold */}
      <motion.div 
        className="absolute top-20 left-[5%] w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        style={{ x: orbX, y: orbY }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-32 right-[45%] w-48 h-48 bg-accent/8 rounded-full blur-3xl pointer-events-none"
        style={{ x: useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]), y: useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]) }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[40%] right-[10%] w-32 h-32 bg-primary/15 rounded-full blur-2xl pointer-events-none"
        style={{ x: useTransform(smoothMouseX, [-0.5, 0.5], [25, -25]), y: useTransform(smoothMouseY, [-0.5, 0.5], [25, -25]) }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content container */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center min-h-[85vh] lg:min-h-[90vh] py-8 lg:py-0">
          
          {/* Left side - Content */}
          <div className="order-2 lg:order-1 space-y-5 lg:space-y-8 z-10">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wide">Luxury Med Spa</span>
            </motion.div>
            
            <motion.h1 
              className="font-serif text-4xl md:text-6xl xl:text-7xl font-bold leading-[1.1]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <span className="pink-gold-text-gradient">POSHBODY</span>
              <br />
              <span className="text-foreground text-2xl md:text-4xl xl:text-5xl">Aesthetic & Med Spa</span>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-xl text-muted-foreground max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Looking for a luxury med spa to get your body snatched? Your skin glow? 
              Or maximum relaxation and pampering? <span className="text-primary font-medium">THE BEST PLACE TO GO.</span>
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-start gap-3 lg:gap-4 pt-1 lg:pt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button asChild size="lg" className="rose-gradient text-primary-foreground hover:opacity-90 text-sm md:text-base px-6 md:px-8 py-5 md:py-6 shadow-float font-semibold rounded-xl btn-shine">
                  <Link to="/booking">
                    Book Your Experience
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="outline" size="lg" className="glass border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-xl shadow-soft">
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Location badge */}
            <motion.div 
              className="flex items-center gap-2 text-muted-foreground text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Lagos • Abuja • Port Harcourt</span>
            </motion.div>
          </div>

          {/* Right side - Image showcase */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center py-4 lg:py-0">
            {/* Decorative frame behind image */}
            <motion.div 
              className="absolute inset-4 lg:inset-0 border border-primary/20 rounded-2xl"
              style={{ x: frameX, y: frameY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            {/* Secondary decorative frame */}
            <motion.div 
              className="absolute -inset-2 lg:-inset-6 border border-accent/15 rounded-3xl"
              style={{ 
                x: useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]), 
                y: useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]) 
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            {/* Corner accents - rose colored */}
            <motion.div 
              className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
            <motion.div 
              className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            />
            <motion.div 
              className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <motion.div 
              className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            />

            {/* Main image container with parallax */}
            <motion.div 
              className="relative w-full aspect-[3/4] max-w-md lg:max-w-lg overflow-hidden rounded-2xl shadow-elevated"
              style={{ x: imageX, y: imageY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Image carousel */}
              {heroImages.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`POSHBODY Spa experience ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentImage === index ? 1 : 0,
                    scale: currentImage === index ? 1 : 1.1
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              ))}
              
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />
              
              {/* Image indicator dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImage === index 
                        ? 'bg-accent w-6' 
                        : 'bg-primary-foreground/50 hover:bg-primary-foreground/70'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating accent elements - gold gradient */}
            <motion.div 
              className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 w-20 h-20 lg:w-28 lg:h-28 rounded-full gold-gradient opacity-80 blur-sm"
              style={{ 
                x: useTransform(smoothMouseX, [-0.5, 0.5], [20, -20]), 
                y: useTransform(smoothMouseY, [-0.5, 0.5], [20, -20]) 
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 w-16 h-16 lg:w-20 lg:h-20 border-2 border-primary/30 rounded-full"
              style={{ 
                x: useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]), 
                y: useTransform(smoothMouseY, [-0.5, 0.5], [-15, 15]) 
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-9 rounded-full glass border-primary/20 flex items-start justify-center p-1.5">
          <motion.div 
            className="w-1 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
