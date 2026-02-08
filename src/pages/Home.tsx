import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Truck,
  Clock,
  Stethoscope,
  Factory,
  FlaskConical,
  Droplets,
  Hotel,
  Hand,
  LucideIcon
} from 'lucide-react';
import { IMAGES } from '@/assets/images';
import { ROUTE_PATHS, PRODUCT_CATEGORIES } from '@/lib/index';
import { INDUSTRIES, WHY_CHOOSE_US, COMPANY_INFO } from '@/data/index';
import { IndustryCard, ProductCard, FeatureCard } from '@/components/Cards';
import { Button } from '@/components/ui/button';

// Mapping strings to Lucide components for Industry Icons
const industryIconMap: Record<string, LucideIcon> = {
  healthcare: Stethoscope,
  industrial: Factory,
  chemical: FlaskConical,
  'oil-gas': Droplets,
  hospitality: Hotel,
  hygiene: Hand,
};

// Mapping strings to Lucide components for Feature Icons
const featureIconMap: Record<string, LucideIcon> = {
  ShieldCheck: ShieldCheck,
  FileCheck: FileCheck,
  Truck: Truck,
  Clock: Clock,
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HEALTHCARE_HERO_1} 
            alt="Healthcare Professional" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Trusted Gloves Supplier for <span className="text-primary">Healthcare, Industrial</span> & Critical Applications
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {COMPANY_INFO.shortDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to={ROUTE_PATHS.PRODUCTS}>
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-white/50 backdrop-blur-sm">
                <Link to={ROUTE_PATHS.CONTACT}>
                  Enquire Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Short Company Introduction */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">About GAP Healthcare</h2>
              <p className="text-3xl font-semibold mb-6 leading-tight">
                Professional excellence in protective handwear since 2026.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                {COMPANY_INFO.description}
              </p>
              <Button asChild variant="link" className="p-0 h-auto text-primary font-bold">
                <Link to={ROUTE_PATHS.ABOUT} className="flex items-center gap-2">
                  Learn more about our mission <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src={IMAGES.MEDICAL_GLOVES_2} 
                alt="Quality Nitrile Gloves" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center mb-16">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Providing specialized protection tailored to the unique demands of global sectors.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {INDUSTRIES.map((industry) => (
            <IndustryCard
              key={industry.id}
              title={industry.title}
              description={industry.description}
              icon={industryIconMap[industry.id] || Stethoscope}
            />
          ))}
        </motion.div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Range</h2>
              <p className="text-muted-foreground">
                Discover our comprehensive selection of certified medical and industrial gloves designed for maximum safety and comfort.
              </p>
            </motion.div>
            <motion.div {...fadeInUp}>
              <Button asChild variant="outline" className="rounded-full">
                <Link to={ROUTE_PATHS.PRODUCTS}>View All Categories</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PRODUCT_CATEGORIES.slice(0, 6).map((category) => (
            <ProductCard 
              key={category.id} 
              category={category} 
              onEnquire={(id) => window.location.href = `${ROUTE_PATHS.CONTACT}?product=${id}`}
            />
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Institutional Buyers Choose GAP Healthcare</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {WHY_CHOOSE_US.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    icon={featureIconMap[feature.icon] || ShieldCheck}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground p-12 rounded-3xl shadow-2xl relative z-10"
            >
              <h3 className="text-2xl font-bold mb-6">Get a Bulk Quote Today</h3>
              <p className="mb-8 text-primary-foreground/80 leading-relaxed">
                Whether you are a healthcare facility or an industrial unit, we offer competitive pricing and consistent supply for bulk requirements.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <span>Compliance Certifications Included</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Truck className="h-4 w-4" />
                  </div>
                  <span>Pan-India Logistics Network</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span>Dedicated Account Management</span>
                </li>
              </ul>
              <Button asChild size="lg" variant="secondary" className="w-full rounded-full">
                <Link to={ROUTE_PATHS.CONTACT}>Enquire Now</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            {...fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Safety Standards?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Join hundreds of institutions across India that trust GAP Healthcare for their critical protective equipment needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to={ROUTE_PATHS.CONTACT}>Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to={ROUTE_PATHS.PRODUCTS}>Browse Catalog</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;