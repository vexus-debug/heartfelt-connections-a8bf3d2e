import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  highlightedWord: string;
  subtitle: string;
  backgroundImage: string;
  preTitle?: string;
}

const PageHero = ({ 
  title, 
  highlightedWord, 
  subtitle, 
  backgroundImage,
  preTitle 
}: PageHeroProps) => {
  return (
    <section className="relative h-[60vh] min-h-[400px] md:min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={backgroundImage}
          alt={`${title} ${highlightedWord}`}
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Deep pink gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-foreground/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Decorative top element */}
            <motion.div 
              className="flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary-foreground/60" />
              <Sparkles className="w-5 h-5 text-accent" />
              <div className="w-12 h-px bg-gradient-to-r from-primary-foreground/60 to-transparent" />
            </motion.div>

            {preTitle && (
              <motion.p 
                className="text-accent uppercase tracking-[0.3em] text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {preTitle}
              </motion.p>
            )}

            <motion.h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-primary-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {title} <span className="gold-text-gradient">{highlightedWord}</span>
            </motion.h1>

            <motion.p 
              className="text-primary-foreground/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>

            {/* Elegant divider */}
            <motion.div 
              className="flex items-center justify-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary-foreground/40" />
              <div className="w-3 h-3 rotate-45 border border-accent/60" />
              <div className="w-16 h-px bg-gradient-to-r from-primary-foreground/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-12 md:h-16 fill-background">
          <path d="M0,60 L0,30 Q720,70 1440,30 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;