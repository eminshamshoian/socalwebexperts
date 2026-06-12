import type {
  Service,
  Testimonial,
  PortfolioItem,
  PricingModel,
  FAQItem,
  ProcessStep,
  NavItem,
  ValueProp,
  Stat,
  SiteConfig,
} from '../types';

// Site Configuration
export const siteConfig: SiteConfig = {
  name: 'SoCal Web Experts',
  tagline: 'Websites That Bring You Customers',
  description: 'Fast, secure, SEO-focused websites built to rank on Google and convert visitors into calls, quote requests, and booked jobs.',
  phone: '(818) 967-2609',
  email: 'hello@socalwebexperts.com',
  address: 'Los Angeles, California',
  url: 'https://socalwebexperts.com', // Update with your actual domain
  socials: [
    { platform: 'Facebook', url: '#', icon: 'facebook' },
    { platform: 'Instagram', url: '#', icon: 'instagram' },
    { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
    { platform: 'Twitter', url: '#', icon: 'twitter' },
  ],
};

// Navigation
export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Custom Web Design', href: '/services/web-design' },
      { label: 'Social Media Marketing', href: '/services/social-media' },
      { label: 'Google Ads', href: '/services/google-ads' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

// Services
export const services: Service[] = [
  {
    id: 'web-design',
    title: 'Custom Web Design',
    shortDescription:
      'Tailored sites built for your brand, with clear service messaging, strong calls-to-action, and a mobile-first experience that turns visitors into leads.',
    description:
      'We design and build custom websites that reflect your business and make it easy for people to trust you and take action. Every page is structured for clarity and conversion: service-focused copy, proof where it matters, and fast, polished UX on every device.',
    icon: 'code',
    slug: 'web-design',
    features: [
      'Custom layout and visual design for your brand',
      'Mobile-first, conversion-focused page structure',
      'Service and location pages that answer real customer intent',
      'Strong CTAs: call, quote, book, and forms that work',
      'Reviews, badges, and portfolio sections that build trust',
      'Performance-minded build: fast loads and clean UX',
      'Launch support so you are confident going live',
    ],
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    shortDescription:
      'Consistent presence and on-brand content so you stay visible, credible, and top-of-mind alongside your website and ads.',
    description:
      'Social media marketing keeps your business in front of the right audience with a steady rhythm of posts and messaging that matches your brand. We focus on trust and familiarity—so when someone needs your service, they already know who you are.',
    icon: 'share',
    slug: 'social-media',
    features: [
      'Profile optimization and visual consistency with your brand',
      'Content planning aligned to your services and promotions',
      'Posting and scheduling so your channels stay active',
      'Creative direction for captions, hooks, and key messages',
      'Engagement guidance that supports credibility, not noise',
      'Cross-channel alignment with your website and offers',
      'Light reporting on what is working and what to adjust',
    ],
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    shortDescription:
      'Paid search campaigns aimed at high-intent local leads, with careful targeting, tracking, and ongoing optimization so your budget works harder.',
    description:
      'Google Ads puts your business in front of people who are actively searching for what you offer. We handle campaign structure, geo and audience targeting, ad copy, and conversion tracking—then refine based on real lead data, not guesswork.',
    icon: 'target',
    slug: 'google-ads',
    features: [
      'Search campaign setup tailored to your services and area',
      'Keyword and match-type strategy for qualified traffic',
      'Location and audience targeting for local intent',
      'Compelling ad copy and extensions that earn the click',
      'Conversion tracking tied to calls, forms, and goals',
      'Budget and bid management with clear priorities',
      'Regular optimization and performance summaries',
    ],
  },
];

// Value Propositions
export const valueProps: ValueProp[] = [
  {
    id: 'speed-first',
    title: 'Speed-First Builds',
    description: 'Fast sites keep visitors engaged and reduce bounce before they contact a competitor.',
    icon: 'zap',
  },
  {
    id: 'security-reliability',
    title: 'Security + Reliability',
    description: 'Stable infrastructure and best practices keep your site online, trusted, and protected.',
    icon: 'shield',
  },
  {
    id: 'seo-ready',
    title: 'SEO-Ready from Day One',
    description: 'We structure pages for visibility with clean hierarchy, indexing fundamentals, and local intent.',
    icon: 'search',
  },
  {
    id: 'conversion-layout',
    title: 'Conversion-Focused Layout',
    description: 'Calls, forms, and booking actions are placed where visitors are most likely to act.',
    icon: 'target',
  },
  {
    id: 'done-for-you',
    title: 'Done-for-You Management',
    description: 'Hosting, updates, and support are handled for you so you are never stuck editing.',
    icon: 'check-circle',
  },
  {
    id: 'local-focus',
    title: 'Built for Local Business',
    description: 'Built for service businesses in competitive markets that need trust and leads quickly.',
    icon: 'map-pin',
  },
];

// Process Steps
export const processSteps: ProcessStep[] = [
  {
    id: 'quick-call',
    step: 1,
    title: 'Quick Call',
    description: 'We align on your goals, services, service area, and what a successful website should produce.',
    icon: 'phone',
  },
  {
    id: 'build',
    step: 2,
    title: 'We Build',
    description: 'We handle design, copy, page structure, and conversion setup around your business goals.',
    icon: 'code',
  },
  {
    id: 'launch',
    step: 3,
    title: 'Launch',
    description: 'We publish with forms, tracking, and SEO fundamentals in place so leads can start flowing.',
    icon: 'rocket',
  },
  {
    id: 'maintain',
    step: 4,
    title: 'We Maintain',
    description: 'You get ongoing updates, improvements, and support so your site keeps performing.',
    icon: 'refresh-cw',
  },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michael Rodriguez',
    company: 'Rodriguez Plumbing',
    location: 'Irvine, CA',
    quote: 'SoCal Web Experts transformed our online presence. Within 3 months, we went from page 5 on Google to the top 3 results. Our leads have tripled!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Chen',
    company: 'Bright Smile Dental',
    location: 'Costa Mesa, CA',
    quote: 'The website they built for us is absolutely stunning and our patients love it. The online booking integration has made scheduling so much easier.',
    rating: 5,
  },
  {
    id: '3',
    name: 'David Thompson',
    company: 'Thompson Construction',
    location: 'Huntington Beach, CA',
    quote: 'Professional, responsive, and they actually deliver results. Our Google Ads campaign is generating quality leads every single day.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Jennifer Martinez',
    company: 'Casa Bella Restaurant',
    location: 'Newport Beach, CA',
    quote: 'The social media management has been incredible. Our Instagram following grew by 400% and we are seeing new customers every week mentioning our posts.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Robert Kim',
    company: 'Premier Auto Detailing',
    location: 'Anaheim, CA',
    quote: 'Best investment I have made for my business. The website pays for itself every month with the new customers it brings in.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Amanda Foster',
    company: 'Foster Real Estate',
    location: 'Laguna Beach, CA',
    quote: 'They understood exactly what I needed. My new website showcases my listings beautifully and the SEO work has put me ahead of my competition.',
    rating: 5,
  },
];

// Portfolio Items
export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Carter Law Offices',
    category: 'web-design',
    categoryLabel: 'Law Office',
    image: 'https://res.cloudinary.com/ds85pv6ht/image/upload/v1770874360/lawyer-fullscreen_cbti3t.png',
    scrollableImage: true,
  },
  {
    id: '2',
    title: 'TAG Auto Group',
    category: 'web-design',
    categoryLabel: 'Auto Dealership',
    image: 'https://res.cloudinary.com/ds85pv6ht/image/upload/v1770873518/tag-fullscreen_i2yasa.png',
    scrollableImage: true,
  },
  {
    id: '3',
    title: 'Comp Therapy',
    category: 'web-design',
    categoryLabel: 'Therapy',
    image: 'https://res.cloudinary.com/ds85pv6ht/image/upload/v1770874794/therapy-fullscreen_hjsa2d.png',
    scrollableImage: true,
  },
  {
    id: '7',
    title: 'EV Design Studio',
    category: 'web-design',
    categoryLabel: 'Architecture',
    image: '/portfolio/screencapture-evdesignstudio.jpg',
    scrollableImage: true,
  },
  {
    id: '8',
    title: "Sam's Bakery",
    category: 'web-design',
    categoryLabel: 'Bakery',
    image: '/portfolio/screencapture-sams-bakery-pages-dev-2026-06-12-11_34_01.jpg',
    scrollableImage: true,
  },
  {
    id: '4',
    title: 'Summit Surgical Group',
    category: 'web-design',
    categoryLabel: 'Medical',
    image: 'https://res.cloudinary.com/ds85pv6ht/image/upload/v1773711509/surgery-center-website_bbiz1u.png',
    scrollableImage: true,
  },
];

/** Exactly 5 items for the hero card fan */
export const heroShowcaseItems: PortfolioItem[] = [
  portfolioItems.find((item) => item.id === '8')!,
  portfolioItems.find((item) => item.id === '2')!,
  portfolioItems.find((item) => item.id === '3')!,
  portfolioItems.find((item) => item.id === '7')!,
  portfolioItems.find((item) => item.id === '4')!,
];

// Pricing Models
export const pricingModels: PricingModel[] = [
  {
    id: 'website',
    title: 'Website Build',
    subtitle: 'Dazzling Prices .',
    upfront: '$1,000',
    monthly: '$25',
    features: [
      'Unlimited edits until you\'re satisfied',
      'Custom website build',
      'Hosting + security',
      'SEO foundation setup',
      'Performance-first, mobile-first design',
      'Clear conversion paths (calls, forms, booking)',
      'Launch support',
      'Future updates after launch: $100/hr',
    ],
    highlighted: true,
  },
];

// FAQ Items
export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'Do you guarantee #1 rankings on Google?',
    answer: 'No. No legitimate team can guarantee #1 rankings. We build the SEO fundamentals, performance, and page structure that help your business compete and improve over time.',
  },
  {
    id: '2',
    question: 'What kinds of updates are included?',
    answer:
      'Unlimited edits and revisions are included until you approve the final design. After launch, content edits, new sections, and changes are available at $100/hour.',
  },
  {
    id: '3',
    question: 'How fast can we launch?',
    answer: 'Most projects launch within weeks, depending on content readiness and approval speed.',
  },
  {
    id: '4',
    question: 'What does monthly hosting cover?',
    answer:
      'The $25/month covers hosting, core security, and keeping your site online. Unlimited edits are included until you\'re satisfied with the design; after launch, ongoing changes are billed at $100/hr.',
  },
  {
    id: '5',
    question: 'Do you work with local service businesses?',
    answer: 'Yes. We focus on local and service-based businesses that need stronger trust, visibility, and consistent leads from their website.',
  },
  {
    id: '6',
    question: 'What if I am not sure what I need?',
    answer: 'That is normal. Book a free strategy call and we will recommend the simplest path to more calls, quotes, and bookings.',
  },
];

// Stats
export const stats: Stat[] = [
  { value: '500', label: 'Websites Launched', suffix: '+' },
  { value: '98', label: 'Client Satisfaction', suffix: '%' },
  { value: '10', label: 'Years Experience', suffix: '+' },
  { value: '2M', label: 'Leads Generated', suffix: '+' },
];

