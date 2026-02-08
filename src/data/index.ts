import { IMAGES } from "@/assets/images";

export const COMPANY_INFO = {
  name: "GAP Healthcare",
  location: "Noida, India",
  email: "gaphealthcare1@gmail.com",
  phone: "+91 6376467587",
  website: "www.glovesresources.com",
  description: "GAP Healthcare is a professional supplier of high-quality gloves serving healthcare institutions, industrial units, chemical industries, oil & gas sector, hospitality, and cleaning & hygiene industries.",
  shortDescription: "Delivering certified, high-performance gloves for medical, industrial, and specialty use.",
  mission: "To provide world-class protective handwear that ensures safety, hygiene, and efficiency across critical industries through consistent quality and innovation.",
  vision: "To be the most trusted global partner for institutional glove procurement, setting benchmarks in quality, supply reliability, and safety compliance.",
  commitment: "We are committed to safety, hygiene, and uncompromising quality. Our focus remains on building long-term partnerships and serving institutional and bulk buyers across India with precision and care.",
  established: "2026",
};

export const INDUSTRIES = [
  {
    id: "healthcare",
    title: "Healthcare & Medical",
    description: "Certified medical-grade gloves for hospitals, clinics, laboratories, and surgical environments requiring maximum barrier protection.",
    image: IMAGES.MEDICAL_GLOVES_1,
    link: "/products",
  },
  {
    id: "industrial",
    title: "Industrial & Manufacturing",
    description: "Durable hand protection designed for assembly lines, heavy machinery operation, and general labor safety.",
    image: IMAGES.INDUSTRIAL_GLOVES_1,
    link: "/products",
  },
  {
    id: "chemical",
    title: "Chemical Industry",
    description: "Specialized resistance against hazardous chemicals, acids, and solvents to ensure worker safety in laboratory and plant settings.",
    image: IMAGES.LAB_GLOVES_1,
    link: "/products",
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    description: "Heavy-duty, impact-resistant gloves for exploration, refining, and hazardous field operations in the energy sector.",
    image: IMAGES.INDUSTRIAL_GLOVES_5,
    link: "/products",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Food-safe, powder-free solutions for kitchens, hotels, and food service providers focused on hygiene excellence.",
    image: IMAGES.MEDICAL_GLOVES_8,
    link: "/products",
  },
  {
    id: "hygiene",
    title: "Cleaning & Hygiene",
    description: "Reliable protection for sanitation workers, facility management, and commercial cleaning services.",
    image: IMAGES.MEDICAL_GLOVES_9,
    link: "/products",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Quality-Assured Products",
    description: "Every batch undergoes rigorous testing and inspection to ensure it meets our internal quality benchmarks and your safety requirements.",
    icon: "ShieldCheck",
  },
  {
    title: "Global Compliance",
    description: "Our products strictly adhere to international standards including EN 455, ASTM D6319, and ISO certifications for professional use.",
    icon: "FileCheck",
  },
  {
    title: "Reliable B2B Supply",
    description: "We specialize in institutional procurement, maintaining high inventory levels to ensure a steady supply chain for bulk buyers.",
    icon: "Truck",
  },
  {
    title: "Timely Delivery",
    description: "Our optimized logistics network across India ensures that your critical safety supplies reach you on schedule, every time.",
    icon: "Clock",
  },
];

export const BLOG_ARTICLES = [
  {
    id: "healthcare-safety-2026",
    title: "The Crucial Role of Gloves in Modern Healthcare Safety",
    excerpt: "In 2026, barrier protection remains the first line of defense against cross-contamination. Explore why quality consistency matters in medical settings.",
    date: "2026-01-20",
    author: "GAP Compliance Team",
    image: IMAGES.HEALTHCARE_HERO_1,
    category: "Safety Standards",
  },
  {
    id: "latex-vs-nitrile-guide",
    title: "Latex vs Nitrile: Which Glove is Right for Your Team?",
    excerpt: "A technical breakdown of material properties, allergy considerations, and chemical resistance to help you make the right procurement choice.",
    date: "2026-01-28",
    author: "Product Specialist",
    image: IMAGES.LAB_GLOVES_3,
    category: "Product Guide",
  },
  {
    id: "industrial-protection-guide",
    title: "Industrial Glove Selection: Balancing Protection & Dexterity",
    excerpt: "How to choose hand protection that meets rigorous safety standards without compromising the precision required for manufacturing tasks.",
    date: "2026-02-02",
    author: "Industrial Safety Lead",
    image: IMAGES.INDUSTRIAL_GLOVES_2,
    category: "Industrial Safety",
  },
  {
    id: "hygiene-compliance-standards",
    title: "Hygiene Compliance and International Standards in 2026",
    excerpt: "Staying ahead of evolving regulatory requirements in the hospitality and sanitation sectors through better equipment sourcing.",
    date: "2026-02-04",
    author: "Regulatory Affairs",
    image: IMAGES.HEALTHCARE_HERO_6,
    category: "Compliance",
  },
];