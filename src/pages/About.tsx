import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Handshake, Landmark, Globe } from "lucide-react";
import { IMAGES } from "@/assets/images";
import { COMPANY_INFO } from "@/data/index";
import { springPresets, fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.CORPORATE_OFFICE_4} 
            alt="GAP Healthcare Office"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Empowering Global <span className="text-primary">Safety Standards</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              GAP Healthcare is a premier institutional supplier dedicated to delivering uncompromising hand protection solutions for healthcare, industrial, and specialized sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Landmark className="w-4 h-4" />
                <span>Established {COMPANY_INFO.established}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Professional Excellence in Glove Supply</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {COMPANY_INFO.description}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Headquartered in {COMPANY_INFO.location}, we have built a reputation for reliability and precision. We understand that in critical environments, the quality of a glove is not just a specification—it's a safeguard for lives and operations.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>Pan-India Distribution</span>
                </div>
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span>ISO Certified Quality</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={springPresets.inertia}
              className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={IMAGES.LAB_GLOVES_4} 
                alt="Quality Testing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div 
              variants={staggerItem}
              className="p-10 rounded-3xl bg-primary text-primary-foreground space-y-6 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold">Our Mission</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </motion.div>

            <motion.div 
              variants={staggerItem}
              className="p-10 rounded-3xl bg-secondary border border-border space-y-6 shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <Handshake className="w-16 h-16 text-primary mx-auto" />
              <h2 className="text-4xl md:text-5xl font-bold">B2B Commitment & Quality Assurance</h2>
              <p className="text-xl opacity-80 leading-relaxed">
                {COMPANY_INFO.commitment}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm uppercase tracking-widest opacity-60">Compliance Check</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-primary mb-2">Institutional</div>
                <div className="text-sm uppercase tracking-widest opacity-60">Bulk Supply Focus</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-primary mb-2">Reliable</div>
                <div className="text-sm uppercase tracking-widest opacity-60">Supply Chain</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Pillars</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { title: "Integrity", desc: "Honesty in every transaction and transparency in every technical specification." },
              { title: "Consistency", desc: "Ensuring every batch meets the same high standards, regardless of order volume." },
              { title: "Innovation", desc: "Continuously evolving our product range to meet the changing needs of 2026's industries." }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors"
              >
                <h4 className="text-xl font-bold mb-3 text-primary">{pillar.title}</h4>
                <p className="text-muted-foreground">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;