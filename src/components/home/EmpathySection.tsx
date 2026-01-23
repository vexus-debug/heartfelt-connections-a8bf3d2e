import { motion } from "framer-motion";
import gallery10 from "@/assets/gallery/gallery-10.jpg";

const EmpathySection = () => {
  return (
    <section className="py-28 rose-gradient-damask rose-section-artdeco relative overflow-hidden">
      {/* Decorative floating orbs */}
      <div className="floating-orb w-96 h-96 bg-primary-foreground/10 top-0 -left-48" />
      <div className="floating-orb w-64 h-64 bg-primary-foreground/5 bottom-0 right-0" />
      
      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-primary-foreground/20 rounded-tl-3xl" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-primary-foreground/20 rounded-br-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="text-primary-foreground/70 uppercase tracking-[0.3em] text-sm font-medium">
                ✦ A Message For You ✦
              </span>
            </motion.div>
            
            <motion.h2 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              You Deserve This
            </motion.h2>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed">
                We know life can be exhausting. The stress, the demands, the endless to-do lists... 
                Your body carries it all, and sometimes your spirit feels it too.
              </p>
              <p className="text-primary-foreground/85 text-lg leading-relaxed">
                But here's what we believe: <span className="font-semibold italic">you are worthy of rest</span>. 
                You are worthy of care. You are worthy of feeling beautiful, inside and out.
              </p>
              <p className="text-primary-foreground text-xl leading-relaxed font-serif italic border-l-4 border-primary-foreground/30 pl-6">
                "Let us be the ones to remind you of that."
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl image-frame">
              <motion.img 
                src={gallery10} 
                alt="Peaceful spa ambiance" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            
            {/* Decorative elements around image */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary-foreground/10 blur-2xl" />
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary-foreground/30 rounded-2xl"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-12 -right-8 w-16 h-16 border border-primary-foreground/20 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;