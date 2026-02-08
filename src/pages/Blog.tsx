import { motion } from "framer-motion";
import { BLOG_ARTICLES } from "@/data/index";
import { BlogCard } from "@/components/Cards";
import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.LAB_GLOVES_1}
            alt="Healthcare Research"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Industry Insights 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Knowledge Hub for <span className="text-primary">Safety Professionals</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Expert analysis on global glove standards, material innovations, and compliance guidelines. Helping healthcare and industrial procurement teams make informed decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter/Search Bar (Visual Only) */}
      <section className="border-y border-border bg-card/50 sticky top-16 z-20 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
            {["All Articles", "Safety Standards", "Product Guide", "Industrial Safety", "Compliance"].map((cat, i) => (
              <button
                key={cat}
                className={`text-sm font-medium whitespace-nowrap transition-colors ${
                  i === 0 ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-background border border-border rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {BLOG_ARTICLES.map((article) => (
              <motion.div
                key={article.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <BlogCard
                  title={article.title}
                  summary={article.excerpt}
                  date={article.date}
                  category={article.category}
                  imageKey={article.image}
                  slug={article.id}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Ahead of Safety Compliance
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
              Subscribe to our monthly technical bulletin for updates on EN/ASTM standards, market trends, and bulk procurement strategies.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your corporate email"
                className="flex-1 px-4 py-3 rounded-md bg-white text-foreground focus:outline-none"
                required
              />
              <Button size="lg" variant="secondary" className="font-bold">
                Subscribe Now
              </Button>
            </form>
            <p className="mt-4 text-sm text-primary-foreground/60">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="bg-muted rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Technical Whitepaper</span>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground">
                The 2026 Global Glove Procurement Strategy Guide
              </h3>
              <p className="text-muted-foreground text-lg">
                A comprehensive manual for institutional buyers navigating the post-pandemic supply chain, material price volatility, and evolving hygiene certifications.
              </p>
              <Button variant="outline" className="gap-2">
                Download Free Guide <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.CORPORATE_OFFICE_3}
                  alt="Strategic Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg shadow-xl hidden lg:block">
                <p className="text-primary-foreground font-bold text-xl">50+ Pages</p>
                <p className="text-primary-foreground/80 text-sm">Technical Insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
