import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductCategory, ROUTE_PATHS } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { springPresets, hoverLift } from '@/lib/motion';

interface IndustryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function IndustryCard({ title, description, icon: Icon }: IndustryCardProps) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="h-full"
    >
      <Card className="h-full border-border/50 bg-card hover:border-primary/30 transition-colors shadow-sm">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface ProductCardProps {
  category: ProductCategory;
  onEnquire?: (id: string) => void;
}

export function ProductCard({ category, onEnquire }: ProductCardProps) {
  const imageUrl = IMAGES[category.imageKey as keyof typeof IMAGES] || IMAGES.MEDICAL_GLOVES_1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={springPresets.gentle}
      className="h-full"
    >
      <Card className="overflow-hidden flex flex-col h-full border-border/50 group">
        <div className="aspect-[4/3] overflow-hidden relative bg-muted">
          <img
            src={imageUrl}
            alt={category.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <Badge className="bg-primary text-white border-none">Quality Certified</Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {category.description}
          </p>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">Key Applications</p>
            <ul className="grid grid-cols-1 gap-1">
              {category.applications.slice(0, 3).map((app, idx) => (
                <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                  <CheckCircle2 size={12} className="text-primary" />
                  {app}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="pt-0 gap-3">
          <Button
            className="flex-1 bg-primary hover:bg-primary/90"
            onClick={() => onEnquire?.(category.id)}
          >
            Enquire Now
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="border-primary/20 text-primary hover:bg-primary/5"
          >
            <Link to={`${ROUTE_PATHS.PRODUCTS}#${category.id}`}>
              <ArrowRight size={18} />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-secondary/30 border border-border/40">
      <div className="p-3 rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-lg font-bold text-foreground mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

interface BlogCardProps {
  title: string;
  summary: string;
  date: string;
  category: string;
  imageKey: string;
  slug: string;
}

export function BlogCard({ title, summary, date, category, imageKey, slug }: BlogCardProps) {
  const imageUrl = IMAGES[imageKey as keyof typeof IMAGES] || IMAGES.CORPORATE_OFFICE_1;

  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="h-full"
    >
      <Link to={`${ROUTE_PATHS.BLOG}/${slug}`} className="block h-full">
        <Card className="h-full overflow-hidden border-border/50 group">
          <div className="aspect-video overflow-hidden relative">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-primary font-bold">
                {category}
              </Badge>
            </div>
          </div>
          <CardHeader className="pb-2">
            <div className="text-xs text-muted-foreground mb-2 font-mono">{date}</div>
            <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {summary}
            </p>
          </CardContent>
          <CardFooter className="pt-0">
            <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
              Read More <ArrowRight size={14} />
            </span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
