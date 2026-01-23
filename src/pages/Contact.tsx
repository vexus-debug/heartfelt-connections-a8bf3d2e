import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import hero5 from "@/assets/hero/hero-5.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello La Belle Lounge & Spa!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/2347071979153?text=${message}`, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message details have been prepared. Please send via WhatsApp.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        preTitle="Get In Touch"
        title="Contact"
        highlightedWord="Us"
        subtitle="We'd love to hear from you. Reach out to book an appointment or ask any questions."
        backgroundImage={hero5}
      />

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                  Send Us a <span className="text-primary">Message</span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form and we'll get back to you via WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-card border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-card border-primary/20 focus:border-primary"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gold-gradient text-primary-foreground hover:opacity-90">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="p-8 rounded-2xl bg-card border border-primary/20">
                <h3 className="font-serif text-xl font-bold mb-6 text-primary">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+2347071979153"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-muted-foreground">+234 707 197 9153</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/2347071979153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-muted-foreground">Chat with us directly</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-foreground">
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Follow Us</p>
                      <div className="flex gap-3 mt-1">
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="space-y-6">
                {/* New GRA Branch */}
                <div className="p-6 rounded-2xl bg-card border border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-serif text-lg font-semibold">New GRA Branch</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <p>21 B, Obagi Street, New GRA, by Salvation Ministries HQ, Port Harcourt 500272, Rivers State</p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <p>Mon - Sat: 9 AM - 7 PM | Closed Sundays</p>
                    </div>
                  </div>
                </div>

                {/* Eneka Branch */}
                <div className="p-6 rounded-2xl bg-card border border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-serif text-lg font-semibold">Eneka Branch</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <p>Shop U8, By Pearl Garden, Nechka Shopping Complex, Eneka Link Rd, Port Harcourt 500102, Rivers State</p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <p>Open 24 Hours Daily</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Banking Details */}
              <div className="p-6 rounded-2xl bg-card border border-primary/20">
                <h3 className="font-serif text-lg font-semibold mb-4 text-primary">Banking Details</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-muted-foreground">Bank:</span> <span className="text-foreground">FCMB</span></p>
                  <p><span className="text-muted-foreground">Account Number:</span> <span className="text-foreground">8754729010</span></p>
                  <p><span className="text-muted-foreground">Account Name:</span> <span className="text-foreground">De-Labelle Lounge & Spa</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
