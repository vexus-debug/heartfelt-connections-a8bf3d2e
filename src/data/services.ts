import { Eye, Brush, Hand, Sparkles, Heart, LucideIcon } from "lucide-react";

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
    id: "lashes-extension",
    icon: Eye,
    title: "Lashes Extension",
    description: "Enhance your natural beauty with our premium lash extension services, from classic to mega volume.",
    services: [
      { name: "Classic", price: "₦12,000" },
      { name: "Mega Classic", price: "₦15,000" },
      { name: "Hybrid", price: "₦20,000" },
      { name: "Volume", price: "₦30,000" },
      { name: "Mega Volume", price: "₦40,000" },
      { name: "Wipsy Lash Set (Classic)", price: "₦13,000" },
      { name: "Wipsy Lash Set (Hybrid)", price: "₦22,000" },
      { name: "Wipsy Lash Set (Volume)", price: "₦35,000" },
      { name: "Bottom Lash Set", price: "₦10,000" },
    ],
  },
  {
    id: "brows",
    icon: Brush,
    title: "Brows",
    description: "Perfect your brows with our expert techniques — from microblading to lamination for flawless arches.",
    services: [
      { name: "Microblading", price: "₦70,000" },
      { name: "Ombré Brows", price: "₦100,000" },
      { name: "Microshading", price: "₦80,000" },
      { name: "Combo Brows", price: "₦100,000" },
      { name: "Nano Brows", price: "₦120,000" },
      { name: "Brow Lamination and Tint", price: "₦40,000" },
    ],
  },
  {
    id: "massage",
    icon: Hand,
    title: "Massage",
    description: "Unwind and restore with our range of therapeutic massage treatments tailored to your body's needs.",
    services: [
      { name: "Deep Tissue Massage (60 min)", price: "₦70,000", duration: "60 minutes" },
      { name: "Deep Tissue Massage (30 min)", price: "₦35,000", duration: "30 minutes" },
      { name: "Aromatherapy (60 min)", price: "₦100,000", duration: "60 minutes" },
      { name: "Aromatherapy (30 min)", price: "₦50,000", duration: "30 minutes" },
      { name: "Swedish Massage (60 min)", price: "₦80,000", duration: "60 minutes" },
      { name: "Swedish Massage (30 min)", price: "₦40,000", duration: "30 minutes" },
      { name: "Lymphatic Drainage (60 min)", price: "₦50,000", duration: "60 minutes" },
      { name: "Lymphatic Drainage (30 min)", price: "₦25,000", duration: "30 minutes" },
      { name: "Reflexology (60 min)", price: "₦60,000", duration: "60 minutes" },
      { name: "Reflexology (30 min)", price: "₦30,000", duration: "30 minutes" },
      { name: "Sports Massage (60 min)", price: "₦80,000", duration: "60 minutes" },
      { name: "Sports Massage (30 min)", price: "₦40,000", duration: "30 minutes" },
      { name: "Pregnancy Massage (60 min)", price: "₦80,000", duration: "60 minutes" },
      { name: "Pregnancy Massage (30 min)", price: "₦40,000", duration: "30 minutes" },
    ],
  },
  {
    id: "spa-therapies",
    icon: Sparkles,
    title: "Spa Therapies",
    description: "Indulge in our luxurious spa treatments — from teeth whitening to full body waxing and hammam baths.",
    services: [
      { name: "Teeth Whitening", price: "₦60,000" },
      { name: "Skin Tag Removal", price: "Send pics", description: "Send photos for a personalized quote." },
      { name: "Tattoo Removal", price: "Send pics", description: "Send photos for a personalized quote." },
      { name: "Laser Hair Removal", price: "Send pics", description: "Send photos for a personalized quote." },
      { name: "Fibroblast Treatment", price: "Send pics", description: "Send photos for a personalized quote." },
      { name: "Laser Scar Removal", price: "Send pics", description: "Send photos for a personalized quote." },
      { name: "Vijicials", price: "₦60,000" },
      { name: "Moroccan Hammam Bath", price: "₦70,000" },
      { name: "Body Polishing", price: "₦60,000" },
      { name: "Body Scrub", price: "₦60,000" },
      { name: "Teeth Scaling and Whitening", price: "₦80,000" },
      { name: "Facial Waxing", price: "₦30,000" },
      { name: "Under Arm Waxing", price: "₦30,000" },
      { name: "Full Body Waxing", price: "₦150,000" },
      { name: "Hand Waxing", price: "₦70,000" },
      { name: "Leg Waxing", price: "₦60,000" },
    ],
  },
  {
    id: "facials",
    icon: Heart,
    title: "Facials",
    description: "Reveal radiant, glowing skin with our advanced facial treatments addressing every skin concern.",
    services: [
      { name: "Derma Planning", price: "₦60,000" },
      { name: "Hydra Facials", price: "₦70,000" },
      { name: "Mesotherapy", price: "₦70,000" },
      { name: "Vampire MicroNeedling", price: "₦70,000" },
      { name: "Brightening Facials", price: "₦50,000" },
      { name: "Chemical Peel", price: "₦80,000" },
      { name: "RF Facials", price: "₦50,000" },
      { name: "Light Therapy Facials", price: "₦50,000" },
      { name: "Acne Removal Facials", price: "₦60,000" },
      { name: "Facial MicroNeedling (with BB Glow)", price: "₦60,000" },
    ],
  },
];

// No additional services needed - all services are now categorized
export const additionalServices: Service[] = [];

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
  
  return allServices;
};
