import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Clock, ShieldCheck } from 'lucide-react';
import { IMAGES } from '@/assets/images';
import { COMPANY_INFO } from '@/data';
import { ContactForm } from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src={IMAGES.CORPORATE_OFFICE_1} 
            alt="Corporate Office" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/90 z-10" />
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-primary-foreground"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Partner with GAP Healthcare for reliable, certified glove supplies. 
              Our team is ready to assist with your institutional and bulk requirements 
              across healthcare and industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Contact Information Column */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Our dedicated procurement support team is available to discuss your safety 
                  requirements, provide technical specifications, and offer bulk pricing quotes.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 rounded-lg bg-primary/10 text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email Us</h3>
                      <a 
                        href={`mailto:${COMPANY_INFO.email}`} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 rounded-lg bg-primary/10 text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Call Support</h3>
                      <a 
                        href={`tel:${COMPANY_INFO.phone}`} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Headquarters</h3>
                      <p className="text-muted-foreground">
                        {COMPANY_INFO.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 rounded-lg bg-primary/10 text-primary">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Website</h3>
                      <p className="text-muted-foreground">
                        {COMPANY_INFO.website}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Trust Badge / Info Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-secondary border border-border space-y-4"
              >
                <div className="flex items-center gap-3 text-primary mb-2">
                  <ShieldCheck className="w-8 h-8" />
                  <h4 className="text-xl font-bold">Institutional Focus</h4>
                </div>
                <p className="text-secondary-foreground opacity-80">
                  We specialize in high-volume supply chains for hospitals, industrial units, 
                  and government agencies. All our products comply with international safety 
                  standards (EN/ASTM/ISO).
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Clock className="w-4 h-4" />
                  <span>Standard Response Time: &lt; 24 Hours</span>
                </div>
              </motion.div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 md:p-12 rounded-3xl shadow-xl shadow-primary/5 border border-border"
              >
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Request a Quote</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below for bulk enquiries or product samples. 
                    Our safety consultants will reach out with a customized proposal.
                  </p>
                </div>
                
                <ContactForm className="space-y-6" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Simple Map Placeholder / Branch Section */}
      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Global Logistics & Supply Presence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Institutional Procurement', 'Bulk Distribution', 'Quality Inspection', 'Direct-to-Industry'].map((item) => (
              <div key={item} className="p-6 rounded-xl bg-background border border-border shadow-sm">
                <p className="font-semibold text-primary">{item}</p>
                <p className="text-xs text-muted-foreground mt-2">Verified Operations 2026</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;