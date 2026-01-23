import Layout from "@/components/Layout";
import { Heart, Award, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import gallery assets
import video1 from "@/assets/gallery/video-1.mp4";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Beauty",
    description: "We are passionate about helping you look and feel your best with personalized treatments.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description: "Our team of skilled professionals is committed to delivering exceptional results every time.",
  },
  {
    icon: Users,
    title: "Client-Centered Care",
    description: "Your comfort and satisfaction are our top priorities in everything we do.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "We use only the highest quality products and state-of-the-art equipment for all treatments.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Immersive Video Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video1} type="video/mp4" />
        </video>
        
        {/* Elegant Overlay - rose tinted */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-background" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-accent tracking-[0.3em] uppercase text-sm font-medium animate-fade-in">
                Welcome to
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in text-primary-foreground" style={{ animationDelay: '0.1s' }}>
                About <span className="gold-text-gradient">POSHBODY</span>
              </h1>
              <p className="text-primary-foreground/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Your premier destination for luxury medical spa services in Lagos, Abuja & Port Harcourt
              </p>
            </div>
          </div>
        </div>
        
        {/* Curved Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full h-16 md:h-20 fill-card">
            <path d="M0,80 L0,40 Q720,100 1440,40 L1440,80 Z" />
          </svg>
        </div>
      </section>

      {/* Our Story with Image Collage */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Asymmetric Image Collage */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 row-span-2">
                  <div className="relative group overflow-hidden rounded-3xl aspect-[3/4]">
                    <img src={gallery1} alt="POSHBODY Spa Treatment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="relative group overflow-hidden rounded-3xl aspect-square">
                    <img src={gallery2} alt="Spa Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="relative group overflow-hidden rounded-3xl aspect-square">
                    <img src={gallery3} alt="Luxury Treatment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/12 rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium">Our Journey</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-foreground">
                  A Sanctuary of <span className="rose-gold-text-gradient">Beauty & Wellness</span>
                </h2>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>POSHBODY Aesthetic and Med Spa was founded with a singular vision: to be THE BEST PLACE TO GO for luxury medical spa services.</p>
                <p>With five locations across Lagos, Abuja, and Port Harcourt, we are the premier destination for those seeking to get their body snatched, their skin glow, or maximum relaxation and pampering.</p>
                <p>Our team specializes in both invasive and non-invasive procedures, from facials and massages to advanced body sculpting and aesthetic treatments.</p>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-primary/15">
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary">5</p>
                  <p className="text-muted-foreground text-sm mt-1">Locations</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary">50+</p>
                  <p className="text-muted-foreground text-sm mt-1">Treatments</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-accent">5★</p>
                  <p className="text-muted-foreground text-sm mt-1">Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-background cream-section-abstract relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium">Our Philosophy</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              What Sets Us <span className="rose-gold-text-gradient">Apart</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="group relative p-8 rounded-3xl bg-card border border-primary/10 hover:border-primary/25 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="w-8 h-8 text-charcoal" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium">Our Services</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Our <span className="rose-gold-text-gradient">Expertise</span></h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative group overflow-hidden rounded-3xl">
                <div className="absolute inset-0">
                  <img src={gallery4} alt="Non-invasive treatments" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />
                </div>
                <div className="relative z-10 p-8 md:p-10 min-h-[400px] flex flex-col justify-end">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-cream"><span className="text-accent">Non-Invasive</span> Treatments</h3>
                  <ul className="space-y-3 text-cream/90">
                    {["Hydra Facials & Chemical Peels", "RF & Light Therapy Facials", "Body Polishing & Scrubs", "Moroccan Hammam Bath", "IV Vitamin Drips"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-3xl">
                <div className="absolute inset-0">
                  <img src={gallery5} alt="Advanced treatments" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />
                </div>
                <div className="relative z-10 p-8 md:p-10 min-h-[400px] flex flex-col justify-end">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-cream"><span className="text-accent">Invasive & Advanced</span> Treatments</h3>
                  <ul className="space-y-3 text-cream/90">
                    {["Vampire MicroNeedling & PRP", "Fat Dissolving Injections", "PDO Thread Lifts", "Botox & Dermal Fillers", "Body Enhancement Injections"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={gallery6} alt="Spa ambiance" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <p className="text-accent tracking-[0.2em] uppercase text-sm font-medium">Begin Your Journey</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-cream">
                Experience the <span className="gold-text-gradient">POSHBODY Difference</span>
              </h2>
            </div>
            <p className="text-cream/80 text-lg md:text-xl leading-relaxed">Join our family and discover why POSHBODY Aesthetic and Med Spa is THE BEST PLACE TO GO across Lagos, Abuja, and Port Harcourt.</p>
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button asChild size="lg" className="gold-gradient text-charcoal hover:opacity-90 rounded-full px-8 text-base font-semibold">
                <Link to="/booking">Book Your Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-cream/40 text-cream hover:bg-cream/10 rounded-full px-8 text-base">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
