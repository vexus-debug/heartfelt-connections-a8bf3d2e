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
import gallery7 from "@/assets/gallery/gallery-7.jpg";

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
        
        {/* Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium animate-fade-in">
                Welcome to
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in" style={{ animationDelay: '0.1s' }}>
                About <span className="gold-text-gradient">La Belle</span>
              </h1>
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Your premier destination for luxury beauty and wellness in Port Harcourt
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
                {/* Large main image */}
                <div className="col-span-7 row-span-2">
                  <div className="relative group overflow-hidden rounded-3xl aspect-[3/4]">
                    <img 
                      src={gallery1} 
                      alt="La Belle Spa Treatment" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
                </div>
                
                {/* Top right image */}
                <div className="col-span-5">
                  <div className="relative group overflow-hidden rounded-3xl aspect-square">
                    <img 
                      src={gallery2} 
                      alt="Spa Interior" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                  </div>
                </div>
                
                {/* Bottom right image */}
                <div className="col-span-5">
                  <div className="relative group overflow-hidden rounded-3xl aspect-square">
                    <img 
                      src={gallery3} 
                      alt="Luxury Treatment" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                  </div>
                </div>
              </div>
              
              {/* Decorative gold blur */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/15 rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium">Our Journey</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                  A Sanctuary of <span className="gold-text-gradient">Beauty & Wellness</span>
                </h2>
              </div>
              
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  La Belle Lounge & Spa was founded with a singular vision: to create a sanctuary 
                  where luxury meets wellness, and where every client feels valued and pampered.
                </p>
                <p>
                  Located in the heart of Port Harcourt with two convenient branches – one in 
                  New GRA and another in Eneka – we have quickly become the go-to destination 
                  for discerning individuals seeking premium beauty and body treatments.
                </p>
                <p>
                  Our team of skilled professionals specializes in both invasive and non-invasive 
                  procedures, from rejuvenating facials and relaxing massages to advanced body 
                  sculpting treatments.
                </p>
              </div>
              
              {/* Stats or highlights */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-primary/20">
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary">2</p>
                  <p className="text-muted-foreground text-sm mt-1">Locations</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary">50+</p>
                  <p className="text-muted-foreground text-sm mt-1">Treatments</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary">5★</p>
                  <p className="text-muted-foreground text-sm mt-1">Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values/Mission Cards */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium">Our Philosophy</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
              What Sets Us <span className="gold-text-gradient">Apart</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our commitment to excellence defines everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-card to-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon with elegant styling */}
                  <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-tr-3xl rounded-bl-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section - Enhanced */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium">Our Services</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">
                Our <span className="gold-text-gradient">Expertise</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Non-Invasive Card */}
              <div className="relative group overflow-hidden rounded-3xl">
                <div className="absolute inset-0">
                  <img 
                    src={gallery4} 
                    alt="Non-invasive treatments" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
                </div>
                
                <div className="relative z-10 p-8 md:p-10 min-h-[400px] flex flex-col justify-end">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                    <span className="text-primary">Non-Invasive</span> Treatments
                  </h3>
                  <ul className="space-y-3 text-foreground/90">
                    {[
                      "Classic and specialty facials",
                      "Therapeutic massage treatments",
                      "LED light therapy",
                      "Body sculpting and cavitation",
                      "Lymphatic drainage massage"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Invasive Card */}
              <div className="relative group overflow-hidden rounded-3xl">
                <div className="absolute inset-0">
                  <img 
                    src={gallery5} 
                    alt="Advanced treatments" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
                </div>
                
                <div className="relative z-10 p-8 md:p-10 min-h-[400px] flex flex-col justify-end">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                    <span className="text-primary">Invasive & Advanced</span> Treatments
                  </h3>
                  <ul className="space-y-3 text-foreground/90">
                    {[
                      "Vampire facials",
                      "Fat dissolving injections (Lipolysis)",
                      "Tattoo and stretch mark removal",
                      "Skin tag and mole removal",
                      "Microdermabrasion"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={gallery6} 
            alt="Spa ambiance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium">Begin Your Journey</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Experience the <span className="gold-text-gradient">La Belle Difference</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Join our family of satisfied clients and discover why La Belle Lounge & Spa 
              is the preferred choice for beauty and wellness in Port Harcourt.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button asChild size="lg" className="gold-gradient text-primary-foreground hover:opacity-90 rounded-full px-8 text-base">
                <Link to="/booking">Book Your Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/40 hover:bg-primary/10 rounded-full px-8 text-base">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative image on right */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%]">
          <div className="relative w-full h-full">
            <img 
              src={gallery7} 
              alt="Spa experience" 
              className="w-full h-full object-cover rounded-l-[60px] opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background rounded-l-[60px]" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
