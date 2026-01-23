import { Zap, Sparkles, Syringe, Heart, Droplets, Star, ShoppingBag, LucideIcon } from "lucide-react";

export interface Service {
  name: string;
  price: string;
  priceValue: number;
  description?: string;
  duration?: string;
  requiresPhoto?: boolean;
}

export interface ServiceCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "cavitation-vacuum",
    icon: Zap,
    title: "Cavitation/Vacuum Therapies",
    slug: "cavitation-vacuum-therapies",
    description: "Advanced body contouring and sculpting treatments using state-of-the-art cavitation and vacuum technology for visible results.",
    services: [
      { name: "Vacuum Butt Lift/Enlargement", price: "₦30,000", priceValue: 30000, description: "Non-invasive butt lift using vacuum therapy for enhanced curves and firmness.", duration: "60-90 mins" },
      { name: "Vacuum Hips Enlargement", price: "₦30,000", priceValue: 30000, description: "Targeted vacuum therapy for fuller, more defined hips.", duration: "60-90 mins" },
      { name: "Lipocavitation/Tummy Blast", price: "₦40,000", priceValue: 40000, description: "Ultrasonic fat reduction targeting stubborn belly fat for a flatter stomach.", duration: "60-90 mins" },
      { name: "Sculpting and Waist Trimming", price: "₦40,000", priceValue: 40000, description: "Body sculpting treatment to define your waistline and create an hourglass figure.", duration: "60-90 mins" },
      { name: "Arm Fat Cavitation", price: "₦40,000", priceValue: 40000, description: "Targeted cavitation treatment to reduce arm fat and tone upper arms.", duration: "45-60 mins" },
      { name: "Calf Reduction Cavitation", price: "₦40,000", priceValue: 40000, description: "Specialized treatment to slim and contour the calf area.", duration: "45-60 mins" },
      { name: "Vacuum/Hip Deep Corrector", price: "₦30,000", priceValue: 30000, description: "Deep tissue vacuum treatment for hip contouring and cellulite reduction.", duration: "60 mins" },
      { name: "Tummy Tightening", price: "₦40,000", priceValue: 40000, description: "Skin tightening treatment for a firmer, more toned abdominal area.", duration: "60 mins" },
      { name: "Cavitation for Cellulite Removal", price: "₦40,000", priceValue: 40000, description: "Effective cellulite reduction using advanced cavitation technology.", duration: "60 mins" },
    ],
  },
  {
    id: "spa-therapies",
    icon: Sparkles,
    title: "Spa Therapies",
    slug: "spa-therapies",
    description: "Luxurious spa treatments for complete relaxation and rejuvenation. From traditional hammam baths to modern laser treatments.",
    services: [
      { name: "Skin Tag Removal", price: "₦60,000", priceValue: 60000, description: "Safe and effective removal of skin tags using advanced techniques.", duration: "30-60 mins", requiresPhoto: true },
      { name: "Teeth Whitening", price: "₦60,000", priceValue: 60000, description: "Professional teeth whitening for a brighter, more confident smile.", duration: "60 mins" },
      { name: "Teeth Scaling, Polishing and Whitening", price: "₦80,000", priceValue: 80000, description: "Complete dental care package including scaling, polishing, and whitening.", duration: "90 mins" },
      { name: "Tattoo Removal", price: "₦60,000", priceValue: 60000, description: "Laser tattoo removal for unwanted ink.", duration: "30-60 mins", requiresPhoto: true },
      { name: "Laser Hair Removal", price: "₦60,000", priceValue: 60000, description: "Permanent hair reduction using advanced laser technology.", duration: "30-90 mins", requiresPhoto: true },
      { name: "Fibroblast Treatment", price: "₦60,000", priceValue: 60000, description: "Skin tightening and lifting using plasma fibroblast technology.", duration: "60-90 mins", requiresPhoto: true },
      { name: "Laser Scar Removal", price: "₦60,000", priceValue: 60000, description: "Reduce the appearance of scars with laser treatment.", duration: "30-60 mins", requiresPhoto: true },
      { name: "Vijicilas", price: "₦60,000", priceValue: 60000, description: "Specialized intimate care treatment.", duration: "45-60 mins" },
      { name: "Moroccan Hammam Bath", price: "₦70,000", priceValue: 70000, description: "Traditional Moroccan bathing ritual for deep cleansing and relaxation.", duration: "90-120 mins" },
      { name: "Body Polishing", price: "₦60,000", priceValue: 60000, description: "Full body exfoliation and polishing for silky smooth skin.", duration: "60-90 mins" },
      { name: "Body Scrub", price: "₦60,000", priceValue: 60000, description: "Invigorating body scrub to remove dead skin cells and reveal radiant skin.", duration: "45-60 mins" },
      { name: "Facial Waxing", price: "₦30,000", priceValue: 30000, description: "Gentle facial hair removal using premium wax.", duration: "20-30 mins" },
      { name: "Under Arm Waxing", price: "₦30,000", priceValue: 30000, description: "Quick and efficient underarm hair removal.", duration: "15-20 mins" },
      { name: "Full Body Waxing", price: "₦150,000", priceValue: 150000, description: "Complete body hair removal for smooth, lasting results.", duration: "2-3 hours" },
      { name: "Hand Waxing", price: "₦70,000", priceValue: 70000, description: "Smooth hair removal for hands and arms.", duration: "30-45 mins" },
      { name: "Leg Waxing", price: "₦60,000", priceValue: 60000, description: "Full leg waxing for silky smooth legs.", duration: "45-60 mins" },
    ],
  },
  {
    id: "fat-dissolving",
    icon: Syringe,
    title: "Fat Dissolving Injections",
    slug: "fat-dissolving-injections",
    description: "Targeted fat reduction treatments using advanced injectable solutions for stubborn fat areas.",
    services: [
      { name: "Metabolism Booster Shot", price: "₦50,000", priceValue: 50000, description: "Injectable treatment to boost metabolism and support weight management.", duration: "15-30 mins" },
      { name: "LipoShot", price: "₦60,000", priceValue: 60000, description: "Fat dissolving injection for targeted fat reduction.", duration: "30-45 mins" },
      { name: "LipoShot Extra", price: "₦100,000", priceValue: 100000, description: "Enhanced fat dissolving treatment for larger treatment areas.", duration: "45-60 mins" },
    ],
  },
  {
    id: "facials",
    icon: Heart,
    title: "Facials",
    slug: "facials",
    description: "Premium facial treatments to address all skin concerns, from anti-aging to acne, leaving your skin glowing and refreshed.",
    services: [
      { name: "Derma Planning", price: "₦60,000", priceValue: 60000, description: "Gentle exfoliation treatment to remove dead skin and peach fuzz for smoother skin.", duration: "45-60 mins" },
      { name: "Hydra Facials", price: "₦70,000", priceValue: 70000, description: "Deep cleansing and hydrating facial using vortex technology.", duration: "60-75 mins" },
      { name: "Mesotherapy", price: "₦70,000", priceValue: 70000, description: "Microinjections of vitamins and nutrients for skin rejuvenation.", duration: "45-60 mins" },
      { name: "Facial MicroNeedling (with BB Glow)", price: "₦60,000", priceValue: 60000, description: "Collagen-boosting treatment with BB glow for luminous skin.", duration: "60-90 mins" },
      { name: "Vampire MicroNeedling", price: "₦70,000", priceValue: 70000, description: "PRP-infused microneedling for ultimate skin rejuvenation.", duration: "75-90 mins" },
      { name: "Brightening Facials", price: "₦50,000", priceValue: 50000, description: "Targeted treatment to even skin tone and boost radiance.", duration: "45-60 mins" },
      { name: "Chemical Peel", price: "₦80,000", priceValue: 80000, description: "Professional-grade peel for skin renewal and texture improvement.", duration: "30-45 mins" },
      { name: "RF Facials", price: "₦50,000", priceValue: 50000, description: "Radio frequency treatment for skin tightening and collagen production.", duration: "45-60 mins" },
      { name: "Light Therapy Facials", price: "₦50,000", priceValue: 50000, description: "LED light therapy for various skin concerns including acne and aging.", duration: "30-45 mins" },
      { name: "Acne Removal Facials", price: "₦60,000", priceValue: 60000, description: "Specialized facial targeting active acne and preventing future breakouts.", duration: "60-75 mins" },
    ],
  },
  {
    id: "iv-vitamin-drips",
    icon: Droplets,
    title: "IV Vitamin Drips",
    slug: "iv-vitamin-drips",
    description: "Intravenous vitamin therapy for instant nourishment, energy boost, and overall wellness from within.",
    services: [
      { name: "Glowing Cocktail Drip", price: "₦60,000", priceValue: 60000, description: "Vitamin infusion for radiant, glowing skin from the inside out.", duration: "45-60 mins" },
      { name: "Detox Cocktail Drip", price: "₦50,000", priceValue: 50000, description: "Cleansing drip to flush out toxins and refresh your system.", duration: "45-60 mins" },
      { name: "Brightening Drip", price: "₦70,000", priceValue: 70000, description: "Skin brightening vitamins delivered directly for maximum effect.", duration: "45-60 mins" },
      { name: "Snow White Shot", price: "₦120,000", priceValue: 120000, description: "Premium whitening and brightening IV treatment.", duration: "60 mins" },
      { name: "Immune Booster Cocktails", price: "₦40,000", priceValue: 40000, description: "Vitamin C and immune-supporting nutrients to strengthen your defenses.", duration: "30-45 mins" },
      { name: "Weight Gain Drip", price: "₦40,000", priceValue: 40000, description: "Nutritional support drip for healthy weight gain.", duration: "45-60 mins" },
    ],
  },
  {
    id: "body-enhancement",
    icon: Star,
    title: "Body Enhancement Injections",
    slug: "body-enhancement-injections",
    description: "Surgical and non-surgical enhancement procedures including PRP treatments, fillers, Botox, and PDO thread lifts.",
    services: [
      { name: "PRP Hair Loss Treatment", price: "₦150,000", priceValue: 150000, description: "Platelet-rich plasma therapy to stimulate hair growth and reduce hair loss.", duration: "60-90 mins" },
      { name: "PRP Infusion Breast", price: "₦80,000", priceValue: 80000, description: "Natural breast enhancement using your own PRP.", duration: "60-90 mins" },
      { name: "PRP Infusion Butts/Hips", price: "₦100,000", priceValue: 100000, description: "PRP treatment for natural butt and hip enhancement.", duration: "60-90 mins" },
      { name: "Bio Filling (PRP Under Eye)", price: "₦100,000", priceValue: 100000, description: "PRP treatment for under-eye rejuvenation and dark circle reduction.", duration: "45-60 mins" },
      { name: "O Shot", price: "₦70,000", priceValue: 70000, description: "PRP treatment for intimate wellness and rejuvenation.", duration: "30-45 mins" },
      { name: "Fillers For Face/Lips", price: "₦220,000", priceValue: 220000, description: "Premium dermal fillers for facial contouring and lip enhancement.", duration: "30-60 mins" },
      { name: "Butt/Hips/Boobs Derma Filler", price: "₦420,000", priceValue: 420000, description: "Body enhancement using premium dermal fillers.", duration: "90-120 mins" },
      { name: "Botox", price: "₦220,000", priceValue: 220000, description: "Anti-wrinkle treatment for a smoother, more youthful appearance.", duration: "30-45 mins" },
      { name: "PDO Thread Full Face Lift", price: "₦650,000", priceValue: 650000, description: "Non-surgical face lift using absorbable PDO threads.", duration: "90-120 mins" },
      { name: "PDO Thread Jawline", price: "₦400,000", priceValue: 400000, description: "Jawline definition and lift using PDO threads.", duration: "60-90 mins" },
      { name: "PDO Boobs Lift", price: "₦500,000", priceValue: 500000, description: "Non-surgical breast lift using PDO thread technology.", duration: "90-120 mins" },
      { name: "PDO Thread Nose", price: "₦150,000", priceValue: 150000, description: "Non-surgical nose reshaping using PDO threads.", duration: "45-60 mins" },
      { name: "Tummy MicroNeedling", price: "₦180,000", priceValue: 180000, description: "Advanced microneedling for tummy skin tightening and stretch mark reduction.", duration: "60-90 mins" },
      { name: "Acne Removal Injection", price: "₦40,000", priceValue: 40000, description: "Targeted injections for stubborn acne treatment.", duration: "20-30 mins" },
    ],
  },
  {
    id: "products-for-sale",
    icon: ShoppingBag,
    title: "Products for Sale",
    slug: "products-for-sale",
    description: "Premium beauty and wellness products to continue your transformation at home.",
    services: [
      { name: "Butt/Hips Enlargement Syrup", price: "₦15,000", priceValue: 15000, description: "Natural supplement syrup for curves enhancement." },
      { name: "Butt/Hips Enlargement Oil", price: "₦12,000", priceValue: 12000, description: "Topical oil for butt and hips enhancement." },
      { name: "Boobs Enlargement Powder", price: "₦12,000", priceValue: 12000, description: "Natural powder supplement for breast enhancement." },
      { name: "Boobs Enlargement Oil", price: "₦12,000", priceValue: 12000, description: "Topical oil for natural breast enhancement." },
      { name: "Sweet in the Middle Syrup", price: "₦18,000", priceValue: 18000, description: "Intimate wellness syrup for enhanced pleasure." },
      { name: "Juicy in the Middle Gel", price: "₦10,000", priceValue: 10000, description: "Intimate care gel for enhanced moisture." },
      { name: "Vijay Powder Sweetener", price: "₦15,000", priceValue: 15000, description: "Intimate care powder for freshness." },
      { name: "Curvy Plus", price: "₦20,000", priceValue: 20000, description: "Premium supplement for natural body curves." },
      { name: "Posh Cookie Secret", price: "₦12,000", priceValue: 12000, description: "Intimate care secret formula." },
      { name: "Miraculous Herbal Tea", price: "₦21,000", priceValue: 21000, description: "Wellness tea blend for overall health." },
      { name: "Posh Cookie Oil", price: "₦10,000", priceValue: 10000, description: "Intimate care oil for freshness and comfort." },
      { name: "Posh Cookie Scrub", price: "₦13,000", priceValue: 13000, description: "Gentle exfoliating scrub for intimate areas." },
      { name: "Posh Cookie Wash", price: "₦13,000", priceValue: 13000, description: "pH-balanced intimate wash for daily care." },
    ],
  },
];

// Helper to get all services as a flat array
export const getAllServices = (): { name: string; price: string; category: string; categorySlug: string; priceValue: number; requiresPhoto?: boolean }[] => {
  return serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      name: service.name,
      price: service.price,
      priceValue: service.priceValue,
      category: category.title,
      categorySlug: category.slug,
      requiresPhoto: service.requiresPhoto,
    }))
  );
};

// Helper to get services by category slug
export const getServicesByCategory = (slug: string): Service[] => {
  const category = serviceCategories.find((c) => c.slug === slug);
  return category?.services || [];
};

// Additional services (Products for Sale) for backward compatibility
export const additionalServices = serviceCategories[6].services;