import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MessageCircle, Phone, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";
import hero2 from "@/assets/hero/hero-2.jpg";
import ServiceMultiSelect from "@/components/booking/ServiceMultiSelect";
import { getAllServices } from "@/data/services";

interface SelectedService {
  name: string;
  price: string;
  category: string;
}

const locationOptions = [
  { value: "new-gra", label: "New GRA Branch (Mon-Sat: 9AM-7PM)" },
  { value: "eneka", label: "Eneka Branch (24/7)" },
];

const Booking = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  
  const preselectedTreatment = searchParams.get("treatment") || "";

  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    date: "",
    time: "",
    notes: "",
  });

  // Pre-select service from URL params
  useEffect(() => {
    if (preselectedTreatment) {
      const allServices = getAllServices();
      const matchedService = allServices.find(
        (s) => s.name.toLowerCase() === preselectedTreatment.toLowerCase()
      );
      if (matchedService && !selectedServices.some((s) => s.name === matchedService.name)) {
        setSelectedServices([matchedService]);
      }
    }
  }, [preselectedTreatment]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getLocationLabel = (value: string) => {
    return locationOptions.find((opt) => opt.value === value)?.label || value;
  };

  const formatServicesForMessage = () => {
    if (selectedServices.length === 0) return "No services selected";
    return selectedServices
      .map((s) => `• ${s.name} (${s.price})`)
      .join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      toast({
        title: "Please select at least one service",
        description: "Choose the services you'd like to book.",
        variant: "destructive",
      });
      return;
    }

    // Construct WhatsApp message
    const message = encodeURIComponent(
      `Hello La Belle Lounge & Spa! I would like to book an appointment.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n\n` +
      `*Services:*\n${formatServicesForMessage()}\n\n` +
      `*Location:* ${getLocationLabel(formData.location)}\n` +
      `*Preferred Date:* ${formData.date}\n` +
      `*Preferred Time:* ${formData.time}\n` +
      `${formData.notes ? `*Additional Notes:* ${formData.notes}` : ""}`
    );

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/2347071979153?text=${message}`, "_blank");

    toast({
      title: "Booking Request Prepared!",
      description: "Complete your booking by sending the message on WhatsApp.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        preTitle="Schedule Your Visit"
        title="Book Your"
        highlightedWord="Appointment"
        subtitle="Fill out the form below and we'll confirm your appointment via WhatsApp."
        backgroundImage={hero2}
      />

      {/* Booking Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-card border border-primary/20">
                <h2 className="font-serif text-2xl font-bold mb-8">
                  Appointment <span className="text-primary">Details</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background border-primary/20 focus:border-primary"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-background border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label>Select Services *</Label>
                    <ServiceMultiSelect
                      selectedServices={selectedServices}
                      onSelectionChange={setSelectedServices}
                    />
                  </div>

                  {/* Selected Services Summary */}
                  {selectedServices.length > 0 && (
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <h4 className="font-medium text-sm mb-2 text-primary">Selected Services:</h4>
                      <div className="space-y-1">
                        {selectedServices.map((service) => (
                          <div key={service.name} className="flex justify-between text-sm">
                            <span>{service.name}</span>
                            <span className="text-primary font-medium">{service.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Location Selection */}
                  <div className="space-y-2">
                    <Label>Preferred Location *</Label>
                    <Select
                      value={formData.location}
                      onValueChange={(value) => handleSelectChange("location", value)}
                      required
                    >
                      <SelectTrigger className="bg-background border-primary/20 focus:border-primary">
                        <SelectValue placeholder="Choose a location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locationOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Date */}
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="bg-background border-primary/20 focus:border-primary"
                      />
                    </div>

                    {/* Time */}
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="bg-background border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="Any specific requests or information we should know?"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      className="bg-background border-primary/20 focus:border-primary"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gold-gradient text-primary-foreground hover:opacity-90 text-lg py-6"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book via WhatsApp
                  </Button>

                  <p className="text-center text-muted-foreground text-sm">
                    After clicking, you'll be redirected to WhatsApp to confirm your booking.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* How It Works */}
              <div className="p-6 rounded-2xl bg-card border border-primary/20">
                <h3 className="font-serif text-xl font-bold mb-6 text-primary">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary-foreground">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Fill the form</p>
                      <p className="text-muted-foreground text-sm">Enter your details and preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary-foreground">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Click Book via WhatsApp</p>
                      <p className="text-muted-foreground text-sm">You'll be redirected to WhatsApp</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary-foreground">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Receive confirmation</p>
                      <p className="text-muted-foreground text-sm">We'll confirm your appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-6 rounded-2xl bg-card border border-primary/20">
                <h3 className="font-serif text-xl font-bold mb-6 text-primary">Need Help?</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+2347071979153"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+234 707 197 9153</span>
                  </a>
                  <a
                    href="https://wa.me/2347071979153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="p-6 rounded-2xl bg-card border border-primary/20">
                <h3 className="font-serif text-xl font-bold mb-6 text-primary">Quick Info</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">Appointments recommended for all services</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">Walk-ins welcome at Eneka (24/7)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">Payment via cash or bank transfer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
