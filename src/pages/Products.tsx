import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, FlaskConical, Stethoscope, Factory } from 'lucide-react';
import { ROUTE_PATHS, PRODUCT_CATEGORIES } from '@/lib/index';
import { ProductCard } from '@/components/Cards';
import { IMAGES } from '@/assets/images';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

const CERTIFICATIONS = [
  { name: 'EN 455 Compliant', icon: Shield },
  { name: 'ASTM D6319 Certified', icon: CheckCircle2 },
  { name: 'ISO 13485 Quality Management', icon: Shield },
  { name: 'CE Marked for Safety', icon: CheckCircle2 },
];

export default function Products() {
  const navigate = useNavigate();

  const handleEnquire = (id: string) => {
    // Navigate to contact page with the product ID as state to pre-fill the form
    navigate(ROUTE_PATHS.CONTACT, {
      state: {
        productRequirement: `Enquiry regarding: ${PRODUCT_CATEGORIES.find((p) => p.id === id)?.name || id}`,
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.MEDICAL_GLOVES_7}
            alt="Healthcare Safety"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={springPresets.gentle}
            className="max-w-3xl text-primary-foreground"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Product Portfolio
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              GAP Healthcare provides a comprehensive range of certified, high-performance gloves 
              tailored for medical, industrial, and specialized critical applications. 
              Engineered for safety, designed for precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Stethoscope className="w-5 h-5" />
                <span className="text-sm font-medium">Medical Grade</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Factory className="w-5 h-5" />
                <span className="text-sm font-medium">Industrial Strength</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <FlaskConical className="w-5 h-5" />
                <span className="text-sm font-medium">Specialty Protection</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-foreground mb-4">Product Categories</h2>
              <p className="text-muted-foreground">
                Explore our range of quality-assured gloves. Each category is designed to meet 
                specific regulatory standards and performance requirements for institutional buyers.
              </p>
            </div>
            <div className="flex items-center gap-8 border-l border-border pl-8 hidden lg:flex">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.name} className="flex flex-col items-center gap-1 text-center">
                  <cert.icon className="w-6 h-6 text-primary" />
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PRODUCT_CATEGORIES.map((category) => (
              <motion.div key={category.id} variants={staggerItem}>
                <ProductCard category={category} onEnquire={handleEnquire} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Standards Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Quality Consistency & Compliance</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <span className="font-semibold block">Global Standards Compliance</span>
                      <span className="text-sm text-muted-foreground">Our products adhere to international safety benchmarks including EN 455, ASTM D6319, and ISO standards.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <span className="font-semibold block">Rigorous Testing Protocols</span>
                      <span className="text-sm text-muted-foreground">Every batch undergoes stringent quality control tests for tensile strength, elongation, and barrier integrity.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <span className="font-semibold block">Reliable B2B Supply</span>
                      <span className="text-sm text-muted-foreground">Equipped to handle high-volume institutional orders with consistent delivery timelines across India.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative hidden lg:block min-h-[400px]">
                <img
                  src={IMAGES.INDUSTRIAL_GLOVES_6}
                  alt="Industrial Quality Control"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-12 text-center text-primary-foreground relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Looking for Bulk Procurement Solutions?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto relative z-10">
              GAP Healthcare specializes in institutional supply chains for hospitals, industrial units, 
              and chemical sectors. Request a customized quote based on your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button
                onClick={() => navigate(ROUTE_PATHS.CONTACT)}
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-colors shadow-lg"
              >
                Request Bulk Quote
              </button>
              <button
                onClick={() => navigate(ROUTE_PATHS.ABOUT)}
                className="bg-primary border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
              >
                Learn About Our Standards
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
