import { Heart, Sparkles, Zap, Droplets, Hand, Scissors, LucideIcon } from "lucide-react";

export interface Service {
  name: string;
  price: string;
  description?: string;
  duration?: string;
}

export interface ServiceCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "massage-spa",
    icon: Heart,
    title: "Massage & Spa",
    description: "Surrender to the healing power of touch. Our expert therapists blend ancient techniques with modern luxury to melt away stress and restore your inner balance.",
    services: [
      { name: "Deep Tissue Massage", price: "₦28,000", description: "Intensive pressure targeting deep muscle layers to release chronic tension and knots.", duration: "60 minutes" },
      { name: "Swedish Massage", price: "₦25,000", description: "Classic relaxation massage using long, flowing strokes to ease muscle tension and improve circulation.", duration: "60 minutes" },
      { name: "Aromatherapy Massage", price: "₦30,000", description: "Therapeutic massage enhanced with essential oils selected for your specific needs.", duration: "75 minutes" },
      { name: "Thai/Spot Massage", price: "₦32,000", description: "Traditional Thai techniques combined with targeted pressure point therapy.", duration: "60 minutes" },
      { name: "Hot-Stone Massage", price: "₦35,000", description: "Heated basalt stones placed on key points to deeply relax muscles and calm the mind.", duration: "90 minutes" },
      { name: "Reflexology", price: "₦30,000", description: "Precise pressure applied to reflex points on the feet to promote whole-body wellness.", duration: "45 minutes" },
      { name: "Sensual Erotic Massage", price: "₦50,000", description: "An intimate, premium experience designed for deep relaxation and connection.", duration: "90 minutes" },
      { name: "Combined Deep/Swedish", price: "₦40,000", description: "The best of both worlds—relaxation meets therapeutic deep tissue work.", duration: "90 minutes" },
    ],
  },
  {
    id: "classic-facials",
    icon: Sparkles,
    title: "Classic Facials",
    description: "Unveil your natural radiance with our signature facial treatments. Each session is a personalized journey to clearer, more luminous skin.",
    services: [
      { name: "Classic Facial", price: "₦20,000", description: "A comprehensive treatment including cleansing, exfoliation, extraction, mask, and hydration.", duration: "60 minutes" },
      { name: "Glow Facial", price: "₦25,000", description: "Brightening treatment designed to restore luminosity and even skin tone.", duration: "75 minutes" },
    ],
  },
  {
    id: "anti-aging-facials",
    icon: Zap,
    title: "Anti-Aging Facials",
    description: "Turn back time with our advanced anti-aging protocols. Cutting-edge technology meets luxurious pampering for visibly younger-looking skin.",
    services: [
      { name: "Laser Facial", price: "₦35,000", description: "Advanced laser technology to stimulate collagen production and reduce fine lines.", duration: "45 minutes" },
      { name: "Vampire Facial", price: "₦80,000", description: "PRP therapy using your own plasma to rejuvenate skin at the cellular level.", duration: "90 minutes" },
      { name: "Wrinkle Collagen Facial", price: "₦65,000", description: "Intensive collagen-boosting treatment to plump and firm mature skin.", duration: "75 minutes" },
    ],
  },
  {
    id: "acne-facials",
    icon: Droplets,
    title: "Acne Facials",
    description: "Clear, heal, and transform troubled skin. Our specialized treatments target acne at its source while soothing inflammation and preventing scarring.",
    services: [
      { name: "Microdermabrasion", price: "₦50,000", description: "Crystal exfoliation to remove dead skin cells and reveal fresh, clear skin beneath.", duration: "45 minutes" },
      { name: "Dermaplaning", price: "₦25,000", description: "Gentle blade exfoliation to remove peach fuzz and dead skin for a smoother complexion.", duration: "30 minutes" },
      { name: "High Frequency Treatment", price: "₦40,000", description: "Electrical current therapy to kill acne-causing bacteria and reduce inflammation.", duration: "30 minutes" },
      { name: "LED Facial", price: "₦35,000", description: "Light therapy using specific wavelengths to calm inflammation and promote healing.", duration: "30 minutes" },
    ],
  },
  {
    id: "pedicure-manicure",
    icon: Hand,
    title: "Pedicure & Manicure",
    description: "Indulge in meticulous nail care that goes beyond the basics. Every detail is perfected, from cuticles to polish, for hands and feet that make a statement.",
    services: [
      { name: "Pedicure", price: "₦8,000", description: "Complete foot care including soak, scrub, nail shaping, and polish application.", duration: "45 minutes" },
      { name: "Executive Pedicure", price: "₦10,000", description: "Premium pedicure with extended massage, paraffin treatment, and luxury products.", duration: "60 minutes" },
      { name: "Pedicure & Manicure Combo", price: "₦15,000", description: "Full treatment for both hands and feet at a special combined rate.", duration: "90 minutes" },
      { name: "Nail Cleaning & Trimming", price: "₦2,000", description: "Quick maintenance service for neat, clean nails.", duration: "15 minutes" },
    ],
  },
  {
    id: "waxing-services",
    icon: Scissors,
    title: "Waxing Services",
    description: "Achieve silky-smooth skin with our professional waxing services. We use premium wax formulas for effective hair removal with minimal discomfort.",
    services: [
      { name: "Chin Wax (Female)", price: "₦7,000", description: "Gentle removal of unwanted facial hair from the chin area.", duration: "15 minutes" },
      { name: "Chin Wax (Male)", price: "₦15,000", description: "Professional chin and jawline waxing for men.", duration: "20 minutes" },
      { name: "Face Wax", price: "₦12,000", description: "Complete facial waxing including upper lip, chin, and sideburns.", duration: "25 minutes" },
      { name: "Under-arm Wax", price: "₦10,000", description: "Clean, smooth underarms with long-lasting results.", duration: "15 minutes" },
      { name: "Bikini Wax", price: "₦23,000", description: "Professional bikini line waxing for a clean, confident look.", duration: "20 minutes" },
      { name: "Hand Wax", price: "₦20,000", description: "Full arm waxing from wrist to shoulder.", duration: "30 minutes" },
      { name: "Leg Wax", price: "₦25,000", description: "Complete leg waxing for silky smooth results.", duration: "45 minutes" },
      { name: "Full Body Wax", price: "₦55,000", description: "Comprehensive waxing package for total smoothness.", duration: "120 minutes" },
    ],
  },
];

export const additionalServices: Service[] = [
  { name: "Body Sculpting", price: "Consult for price" },
  { name: "Cavitation Treatment", price: "Consult for price" },
  { name: "Fat Dissolving Injections (Lipolysis)", price: "Consult for price" },
  { name: "Lymphatic Drainage Massage", price: "Consult for price" },
  { name: "Sauna Access", price: "Consult for price" },
  { name: "Eyelash Extensions", price: "Consult for price" },
  { name: "Semi-Permanent Lashes", price: "Consult for price" },
  { name: "Hair Cutting & Styling", price: "Consult for price" },
  { name: "Hair Coloring", price: "Consult for price" },
  { name: "Tattoo Removal", price: "Consult for price" },
  { name: "Stretch Mark Removal", price: "Consult for price" },
  { name: "Skin Tag & Mole Removal", price: "Consult for price" },
  { name: "Skin Analysis", price: "Consult for price" },
  { name: "Carbon Facial", price: "Consult for price" },
];

// Helper to get all services as a flat list with category info
export const getAllServices = () => {
  const allServices: { name: string; price: string; category: string }[] = [];
  
  serviceCategories.forEach((category) => {
    category.services.forEach((service) => {
      allServices.push({
        name: service.name,
        price: service.price,
        category: category.title,
      });
    });
  });
  
  additionalServices.forEach((service) => {
    allServices.push({
      name: service.name,
      price: service.price,
      category: "Additional Treatments",
    });
  });
  
  return allServices;
};
