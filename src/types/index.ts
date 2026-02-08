// Service Types
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  slug: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  location: string;
  quote: string;
  rating: number;
  avatar?: string;
}

// Portfolio Types
export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  description?: string;
  image: string;
  url?: string;
  technologies?: string[];
  results?: string[];
}

export type PortfolioCategory = 
  | 'web-design'
  | 'ecommerce'
  | 'seo'
  | 'social-media'
  | 'google-ads';

// Pricing Types
export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingModel {
  id: string;
  title: string;
  subtitle: string;
  upfront: string;
  monthly: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

// FAQ Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Process/How It Works Types
export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

// Why Choose Us / Value Props
export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Stats
export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

// Social Links
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Site Configuration
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address?: string;
  url?: string;
  socials: SocialLink[];
}

