import { Zap, Sparkles, Syringe, Heart, Droplets, Activity, ShoppingBag, LucideIcon } from "lucide-react";

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
    id: "cavitation-vacuum",
    icon: Zap,
    title: "Cavitation/Vacuum Therapies",
    description: "Transform your body with our advanced cavitation and vacuum technologies. These non-invasive treatments target stubborn fat, enhance curves, and sculpt your ideal silhouette.",
    services: [
      { name: "Vacuum Butt Lift/Enlargement", price: "₦30,000", description: "Non-surgical butt enhancement using vacuum therapy to lift and enlarge." },
      { name: "Vacuum Hips Enlargement", price: "₦30,000", description: "Enhance hip curves naturally with vacuum suction technology." },
      { name: "Lipocavitation/Tummy Blast", price: "₦40,000", description: "Ultrasonic fat destruction targeting abdominal fat deposits." },
      { name: "Sculpting and Waist Trimming", price: "₦40,000", description: "Define your waistline with targeted body sculpting treatment." },
      { name: "Arm Fat Cavitation", price: "₦40,000", description: "Eliminate stubborn arm fat with ultrasonic cavitation." },
      { name: "Calf Reduction Cavitation", price: "₦40,000", description: "Slim and contour calves for a more proportioned look." },
      { name: "Vacuum/Hip Dip Corrector", price: "₦30,000", description: "Fill in hip dips for smoother, curvier hips." },
      { name: "Tummy Tightening", price: "₦40,000", description: "Firm and tighten loose abdominal skin." },
      { name: "Cavitation for Cellulite Removal", price: "₦40,000", description: "Reduce the appearance of cellulite for smoother skin." },
    ],
  },
  {
    id: "spa-therapies",
    icon: Sparkles,
    title: "Spa Therapies",
    description: "Indulge in our comprehensive spa treatments designed to rejuvenate, cleanse, and pamper every inch of you. From luxurious baths to precise treatments.",
    services: [
      { name: "Skin Tag Removal", price: "₦60,000", description: "Safe and effective removal of skin tags. Send pics for consultation." },
      { name: "Teeth Whitening", price: "₦60,000", description: "Professional teeth whitening for a brighter smile." },
      { name: "Teeth Scaling, Polishing and Whitening", price: "₦80,000", description: "Complete dental spa treatment for optimal oral aesthetics." },
      { name: "Tattoo Removal", price: "₦60,000", description: "Laser tattoo removal treatment. Send pics for consultation." },
      { name: "Laser Hair Removal", price: "₦60,000", description: "Permanent hair reduction using laser technology. Send pics for consultation." },
      { name: "Fibroblast Treatment", price: "₦60,000", description: "Skin tightening and lifting using fibroblast technology. Send pics for consultation." },
      { name: "Laser Scar Removal", price: "₦60,000", description: "Reduce the appearance of scars with laser treatment. Send pics for consultation." },
      { name: "Vijicilas", price: "₦60,000", description: "Premium intimate care treatment for women." },
      { name: "Moroccan Hammam Bath", price: "₦70,000", description: "Traditional Moroccan bath ritual for deep cleansing and relaxation." },
      { name: "Body Polishing", price: "₦60,000", description: "Full body exfoliation and polishing for silky smooth skin." },
      { name: "Body Scrub", price: "₦60,000", description: "Deep exfoliating scrub to remove dead skin cells." },
      { name: "Facial Waxing", price: "₦30,000", description: "Gentle facial hair removal for smooth skin." },
      { name: "Under Arm Waxing", price: "₦30,000", description: "Clean, smooth underarms with long-lasting results." },
      { name: "Full Body Waxing", price: "₦150,000", description: "Comprehensive waxing package for total smoothness." },
      { name: "Hand Waxing", price: "₦70,000", description: "Full arm waxing for silky smooth arms." },
      { name: "Leg Waxing", price: "₦60,000", description: "Complete leg waxing for smooth results." },
    ],
  },
  {
    id: "fat-dissolving",
    icon: Syringe,
    title: "Fat Dissolving Injections",
    description: "Target stubborn fat deposits with our advanced injectable solutions. These treatments break down fat cells for a slimmer, more contoured appearance.",
    services: [
      { name: "Metabolism Booster Shot", price: "₦50,000", description: "Injectable treatment to boost metabolism and aid weight loss." },
      { name: "LipoShot", price: "₦60,000", description: "Fat dissolving injection for targeted fat reduction." },
      { name: "LipoShot Extra", price: "₦100,000", description: "Enhanced fat dissolving treatment for maximum results." },
    ],
  },
  {
    id: "facials",
    icon: Heart,
    title: "Facials",
    description: "Reveal your most radiant skin with our comprehensive facial treatments. From deep cleansing to advanced anti-aging therapies, we have the perfect treatment for every skin concern.",
    services: [
      { name: "Derma Planning", price: "₦60,000", description: "Exfoliation treatment to remove dead skin and peach fuzz." },
      { name: "Hydra Facials", price: "₦70,000", description: "Multi-step treatment to cleanse, extract, and hydrate skin." },
      { name: "Mesotherapy", price: "₦70,000", description: "Micro-injections of vitamins and nutrients for skin rejuvenation." },
      { name: "Facial MicroNeedling (with BB Glow)", price: "₦60,000", description: "Collagen-boosting treatment with semi-permanent coverage." },
      { name: "Vampire MicroNeedling", price: "₦70,000", description: "PRP microneedling for enhanced skin regeneration." },
      { name: "Brightening Facials", price: "₦50,000", description: "Illuminate your complexion with targeted brightening treatment." },
      { name: "Chemical Peel", price: "₦80,000", description: "Professional-grade peel for deep skin renewal." },
      { name: "RF Facials", price: "₦50,000", description: "Radio frequency treatment for skin tightening and lifting." },
      { name: "Light Therapy Facials", price: "₦50,000", description: "LED light therapy to address various skin concerns." },
      { name: "Acne Removal Facials", price: "₦60,000", description: "Targeted treatment for acne-prone skin." },
    ],
  },
  {
    id: "iv-drips",
    icon: Droplets,
    title: "IV Vitamin Drips",
    description: "Boost your wellness from within with our customized IV vitamin drips. Delivered directly into your bloodstream for maximum absorption and immediate results.",
    services: [
      { name: "Glowing Cocktail Drip", price: "₦60,000", description: "Vitamin infusion for radiant, glowing skin." },
      { name: "Detox Cocktail Drip", price: "₦50,000", description: "Cleansing drip to flush toxins and boost energy." },
      { name: "Brightening Drip", price: "₦70,000", description: "Skin brightening and evening treatment." },
      { name: "Snow White Shot", price: "₦120,000", description: "Premium skin lightening and brightening infusion." },
      { name: "Immune Booster Cocktails", price: "₦40,000", description: "Vitamin boost to strengthen your immune system." },
      { name: "Weight Gain Drip", price: "₦40,000", description: "Nutrient-rich drip to support healthy weight gain." },
    ],
  },
  {
    id: "body-enhancement",
    icon: Activity,
    title: "Body Enhancement Injections",
    description: "Achieve your aesthetic goals with our surgical and non-surgical enhancement procedures. Expert care using the latest techniques for safe, stunning results.",
    services: [
      { name: "PRP Hair Loss Treatment", price: "₦150,000", description: "Platelet-rich plasma therapy to stimulate hair growth." },
      { name: "PRP Infusion Breast", price: "₦80,000", description: "Non-surgical breast enhancement using PRP." },
      { name: "PRP Infusion Butts/Hips", price: "₦100,000", description: "Natural enhancement for buttocks and hips using PRP." },
      { name: "Bio Filling (PRP Under Eye)", price: "₦100,000", description: "Under-eye rejuvenation with PRP bio-filling." },
      { name: "O Shot", price: "₦70,000", description: "PRP treatment for feminine wellness and enhancement." },
      { name: "Fillers For Face/Lips", price: "₦220,000", description: "Dermal fillers for facial contouring and lip enhancement." },
      { name: "Butt/Hips/Boobs Derma Filler", price: "₦420,000", description: "Body contouring with premium dermal fillers." },
      { name: "Botox", price: "₦220,000", description: "Anti-wrinkle treatment for a youthful appearance." },
      { name: "PDO Thread Full Face Lift", price: "₦650,000", description: "Non-surgical face lift using dissolvable threads." },
      { name: "PDO Thread Jawline", price: "₦400,000", description: "Jawline definition and lifting with PDO threads." },
      { name: "PDO Boobs Lift", price: "₦500,000", description: "Non-surgical breast lift using PDO threads." },
      { name: "PDO Thread Nose", price: "₦150,000", description: "Non-surgical nose reshaping with threads." },
      { name: "Tummy MicroNeedling", price: "₦180,000", description: "Skin tightening and stretch mark reduction for the abdomen." },
      { name: "Acne Removal Injection", price: "₦40,000", description: "Injectable treatment to clear stubborn acne." },
    ],
  },
  {
    id: "products",
    icon: ShoppingBag,
    title: "Products for Sale",
    description: "Take the POSHBODY experience home with our curated selection of premium products. Enhance your results and maintain your glow between visits.",
    services: [
      { name: "Butt/Hips Enlargement Syrup", price: "₦15,000", description: "Natural enhancement supplement for curves." },
      { name: "Butt/Hips Enlargement Oil", price: "₦12,000", description: "Topical oil for natural curve enhancement." },
      { name: "Boobs Enlargement Powder", price: "₦12,000", description: "Natural supplement for breast enhancement." },
      { name: "Boobs Enlargement Oil", price: "₦12,000", description: "Topical oil for natural breast enhancement." },
      { name: "Sweet in the Middle Syrup", price: "₦18,000", description: "Premium feminine wellness supplement." },
      { name: "Juicy in the Middle Gel", price: "₦10,000", description: "Intimate care gel for feminine wellness." },
      { name: "Vijay Powder Sweetener", price: "₦15,000", description: "Natural intimate care powder." },
      { name: "Curvy Plus", price: "₦20,000", description: "Complete curve enhancement supplement." },
      { name: "Posh Cookie Secret", price: "₦12,000", description: "Feminine wellness secret formula." },
      { name: "Miraculous Herbal Tea", price: "₦21,000", description: "Wellness tea for overall health and beauty." },
      { name: "Posh Cookie Oil", price: "₦10,000", description: "Premium intimate care oil." },
      { name: "Posh Cookie Scrub", price: "₦13,000", description: "Gentle exfoliating scrub for intimate care." },
      { name: "Posh Cookie Wash", price: "₦13,000", description: "Gentle cleansing wash for intimate care." },
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
