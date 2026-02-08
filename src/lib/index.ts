/**
 * Route constants for the GAP Healthcare application.
 * Defines the core navigation structure for the website.
 */
export const ROUTE_PATHS = {
  HOME: '/',
  ABOUT: '/about',
  PRODUCTS: '/products',
  BLOG: '/blog',
  CONTACT: '/contact',
} as const;

/**
 * Interface for the B2B contact and product enquiry form.
 * Captures essential institutional and buyer information.
 */
export interface ContactFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  productRequirement: string;
  message: string;
}

/**
 * Structure for glove product categories.
 * Includes metadata for rendering, SEO, and technical specifications.
 */
export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  applications: string[];
  imageKey: string;
  slug: string;
}

/**
 * Comprehensive list of glove product categories offered by GAP Healthcare.
 * Data is curated for institutional and bulk industrial buyers.
 */
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'latex-exam',
    name: 'Latex Examination Gloves',
    description: 'High-quality natural rubber latex gloves providing excellent tactile sensitivity and comfort. Available in powdered and powder-free variants for general medical examination.',
    applications: ['Medical Examination', 'Dental Clinics', 'Laboratory Work', 'General Healthcare'],
    imageKey: 'MEDICAL_GLOVES_1',
    slug: 'latex-examination-gloves'
  },
  {
    id: 'nitrile-exam',
    name: 'Nitrile Examination Gloves',
    description: 'Premium latex-free synthetic gloves offering superior puncture resistance and broad protection against a wide range of chemicals and biohazards.',
    applications: ['Healthcare Institutions', 'Chemical Handling', 'Food Processing', 'Emergency Services'],
    imageKey: 'MEDICAL_GLOVES_2',
    slug: 'nitrile-examination-gloves'
  },
  {
    id: 'latex-surgical',
    name: 'Latex Surgical Gloves',
    description: 'Sterile, anatomically shaped gloves designed for surgical procedures requiring high precision, enhanced grip, and long-wear comfort.',
    applications: ['Operating Rooms', 'Surgical Procedures', 'Critical Care Units', 'Specialized Clinics'],
    imageKey: 'MEDICAL_GLOVES_8',
    slug: 'latex-surgical-gloves'
  },
  {
    id: 'industrial',
    name: 'Industrial Gloves',
    description: 'Rugged and durable safety gloves engineered for heavy-duty manufacturing environments, offering protection against abrasions and mechanical risks.',
    applications: ['Manufacturing', 'Construction', 'Assembly Lines', 'Maintenance'],
    imageKey: 'INDUSTRIAL_GLOVES_1',
    slug: 'industrial-gloves'
  },
  {
    id: 'neoprene',
    name: 'Neoprene Gloves',
    description: 'Versatile synthetic rubber gloves providing excellent flexibility and chemical protection against acids, bases, alcohols, and oils.',
    applications: ['Chemical Processing', 'Petrochemical Industry', 'Laboratory Research', 'Industrial Cleaning'],
    imageKey: 'LAB_GLOVES_1',
    slug: 'neoprene-gloves'
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas Industry Gloves',
    description: 'Specialized high-performance gloves designed to protect workers in greasy, oily, and high-impact environments common in energy sectors.',
    applications: ['Oil Drilling', 'Refinery Operations', 'Heavy Equipment Handling', 'Gas Extraction'],
    imageKey: 'INDUSTRIAL_GLOVES_5',
    slug: 'oil-gas-industry-gloves'
  },
  {
    id: 'household',
    name: 'Household Gloves',
    description: 'Heavy-duty, waterproof gloves designed for facility maintenance, industrial cleaning, and general hygiene management in hospitality.',
    applications: ['Hospitality', 'Cleaning Services', 'General Facility Management', 'Domestic Use'],
    imageKey: 'INDUSTRIAL_GLOVES_6',
    slug: 'household-gloves'
  },
  {
    id: 'gynaec',
    name: 'Gynaec Gloves',
    description: 'Sterile gloves with extended cuffs specifically designed for gynaecological and obstetric procedures to ensure maximum safety and hygiene.',
    applications: ['Maternity Wards', 'Obstetrics', 'Gynaecological Exams', 'Extended Cuff Procedures'],
    imageKey: 'MEDICAL_GLOVES_9',
    slug: 'gynaec-gloves'
  },
  {
    id: 'speciality',
    name: 'Speciality Gloves',
    description: 'Advanced technical gloves for unique applications, including chemotherapy drug handling, radiation protection, and high-risk bio-hazard zones.',
    applications: ['Oncology Departments', 'Radiology Labs', 'High-Risk Bio-hazard Zones', 'Scientific Research'],
    imageKey: 'LAB_GLOVES_4',
    slug: 'speciality-gloves'
  }
];