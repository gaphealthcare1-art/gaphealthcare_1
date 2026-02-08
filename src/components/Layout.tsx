import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, ShieldCheck, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTE_PATHS } from '@/lib/index';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: ROUTE_PATHS.HOME },
  { label: 'About Us', path: ROUTE_PATHS.ABOUT },
  { label: 'Products', path: ROUTE_PATHS.PRODUCTS },
  { label: 'Blog', path: ROUTE_PATHS.BLOG },
  { label: 'Contact', path: ROUTE_PATHS.CONTACT },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Navigation Header */}
      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300 border-b',
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-border py-3 shadow-sm'
            : 'bg-transparent border-transparent py-5'
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded-lg text-primary-foreground">
              <ShieldCheck size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              GAP <span className="text-primary">Healthcare</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition-colors hover:text-primary relative py-1',
                    isActive
                      ? 'text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary'
                      : 'text-muted-foreground'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild variant="default" size="sm" className="ml-4">
              <Link to={ROUTE_PATHS.CONTACT}>Enquire Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-accent rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-background pt-24 px-6"
          >
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'text-2xl font-semibold transition-colors',
                      isActive ? 'text-primary' : 'text-foreground'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button asChild size="lg" className="mt-4 w-full">
                <Link to={ROUTE_PATHS.CONTACT}>Get a Quote</Link>
              </Button>
            </nav>
            <div className="mt-12 pt-8 border-t border-border space-y-4">
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Contact Details</p>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span>+91 6376467587</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>gaphealthcare1@gmail.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-2">
                <div className="bg-primary p-1.5 rounded-lg text-primary-foreground">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  GAP <span className="text-primary">Healthcare</span>
                </span>
              </Link>
              <p className="text-muted-foreground leading-relaxed text-sm">
                A professional supplier of high-quality gloves serving healthcare institutions, industrial units, chemical industries, and more. Committed to safety and excellence since 2026.
              </p>
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                <Globe size={16} />
                <span>Noida, India | Global Supply</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group"
                    >
                      <ChevronRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Categories (Partial) */}
            <div>
              <h4 className="font-bold text-foreground mb-6">Our Products</h4>
              <ul className="space-y-4">
                <li>
                  <Link to={ROUTE_PATHS.PRODUCTS} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Nitrile Examination Gloves
                  </Link>
                </li>
                <li>
                  <Link to={ROUTE_PATHS.PRODUCTS} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Latex Surgical Gloves
                  </Link>
                </li>
                <li>
                  <Link to={ROUTE_PATHS.PRODUCTS} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Industrial Safety Gloves
                  </Link>
                </li>
                <li>
                  <Link to={ROUTE_PATHS.PRODUCTS} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Speciality Medical Gloves
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <h4 className="font-bold text-foreground mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Sector 62, Noida,<br />Uttar Pradesh, India
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-primary shrink-0" />
                  <a href="tel:+916376467587" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 6376467587
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary shrink-0" />
                  <a href="mailto:gaphealthcare1@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    gaphealthcare1@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© 2026 GAP Healthcare. All Rights Reserved.</p>
            <div className="flex gap-8">
              <Link to="#" className="hover:text-primary">Privacy Policy</Link>
              <Link to="#" className="hover:text-primary">Terms of Service</Link>
              <Link to="#" className="hover:text-primary">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
