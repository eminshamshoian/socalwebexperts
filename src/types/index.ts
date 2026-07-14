// Service Types
export interface ServiceHighlight {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  heroHeadline: string;
  icon: string;
  slug: string;
  layout: 'classic' | 'media-first' | 'split';
  features: string[];
  highlights: ServiceHighlight[];
  details: ServiceDetail[];
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

export interface YelpReview {
  reviewId: string;
  businessId: string;
  businessUrl: string;
  reviewUrl: string;
  authorName: string;
  authorProfileUrl: string;
  location: string;
  date: string;
  rating: number;
  quote: string;
  badge?: string;
}

// Portfolio Types
export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  description?: string;
  image: string;
  /** When true, shows a full-length image that scrolls on hover (desktop) or when visible (mobile) */
  scrollableImage?: boolean;
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
  /** Shown struck through before `upfront` when set */
  listUpfront?: string;
  /** e.g. "Starting from" — shown above the upfront price when set */
  upfrontPrefix?: string;
  upfront: string;
  /** Label beside upfront price; defaults to "upfront" */
  upfrontLabel?: string;
  monthly: string;
  /** When set, hosting is shown as "{monthly} a month or {yearly} yearly" */
  yearly?: string;
  description?: string;
  features: string[];
  /** Optional; prefer listing updates in `features` for display */
  updatesNote?: string;
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

