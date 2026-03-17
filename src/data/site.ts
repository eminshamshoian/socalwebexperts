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
    href: '/services',
    children: [
      { label: 'Custom Web Design', href: '/services/web-design' },
      { label: 'SEO Foundations', href: '/services/seo' },
      { label: 'Hosting + Security', href: '/services/hosting-support' },
      { label: 'Ongoing Updates', href: '/services/updates-support' },
      { label: 'Google Ads', href: '/services/google-ads' },
      { label: 'Social Media', href: '/services/social-media' },
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
    title: 'Custom Website Design',
    shortDescription: 'Clean, modern websites that help customers trust you fast and contact you quickly.',
    description: 'We build clean, modern websites that make it easy for customers to trust your business and take action. Every layout is designed for conversion, with clear service messaging, strong calls-to-action, and a mobile-first experience.',
    icon: 'code',
    slug: 'web-design',
    features: [
      'Mobile-first layout',
      'Clear, high-intent service pages',
      'Strong calls-to-action (call, quote, book)',
      'Proof sections (reviews, badges, project visuals)',
      'Conversion-focused page structure',
      'Fast-loading build and UX polish',
      'Custom design aligned to your brand',
    ],
  },
  {
    id: 'seo',
    title: 'SEO Foundations',
    shortDescription: 'Structured for Google visibility with clean pages, intent-based content, and technical best practices.',
    description: 'No shortcuts and no fake guarantees. We build your site with SEO fundamentals that help you compete over time: clean structure, index-ready setup, internal linking, and local intent optimization.',
    icon: 'search',
    slug: 'seo',
    features: [
      'SEO page structure and internal linking',
      'Metadata and index-ready setup',
      'Local keyword targeting guidance',
      'Technical speed and cleanup support',
      'Clear heading hierarchy and crawl-friendly pages',
      'Baseline analytics and tracking setup',
      'Content framework for local intent',
    ],
  },
  {
    id: 'google-ads',
    title: 'Google Ads Management',
    shortDescription: 'Generate leads faster while SEO builds long-term momentum.',
    description: 'If you need leads quickly, Google Ads can bring targeted traffic now. We manage campaign setup, targeting, optimization, and tracking so your budget goes toward qualified opportunities.',
    icon: 'target',
    slug: 'google-ads',
    features: [
      'Campaign setup and structure',
      'Audience and location targeting',
      'Budget and bid management',
      'Ad copy and offer testing',
      'Conversion tracking setup',
      'Monthly optimization cycles',
      'Performance reporting',
    ],
  },
  {
    id: 'social-media',
    title: 'Social Media Support',
    shortDescription: 'Stay visible, look active, and reinforce trust with consistent social presence.',
    description: 'Social content helps keep your business top-of-mind and credible. We support consistent posting and profile updates that complement your website and broader lead strategy.',
    icon: 'share',
    slug: 'social-media',
    features: [
      'Profile and brand consistency',
      'Content planning and scheduling',
      'Trust-building activity support',
      'Audience engagement best practices',
      'Cross-channel visibility support',
      'Performance insights and updates',
      'Platform-specific recommendations',
    ],
  },
  {
    id: 'hosting-support',
    title: 'Fast Hosting',
    shortDescription: 'Reliable hosting, SSL, monitoring, and best practices to keep your site fast and trusted.',
    icon: 'shield',
    slug: 'hosting-support',
    features: [
      'Managed web hosting',
      'SSL and secure delivery',
      'Core maintenance and patching',
      '24/7 uptime monitoring',
      'Performance monitoring',
      'Backup and recovery best practices',
      'Reliability-focused infrastructure',
      'Security-first setup',
    ],
    description: 'Your website should stay online, secure, and fast without you worrying about technical tasks. We handle hosting and core security so your site remains trustworthy and dependable.',
  },
  {
    id: 'updates-support',
    title: 'Ongoing Updates',
    shortDescription: 'Content edits, section changes, and improvements handled for you.',
    description: 'Most business owners do not want to touch website tools. We handle updates and improvements so your site stays current, clear, and conversion-focused while you stay focused on your business.',
    icon: 'edit',
    slug: 'updates-support',
    features: [
      'Text edits and content updates',
      'Section changes and swaps',
      'Ongoing design and UX improvements',
      'Priority support when needed',
      'Conversion-focused iteration',
      'Site freshness and maintenance',
      'Done-for-you delivery model',
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
    title: 'Lawyer',
    category: 'web-design',
    categoryLabel: 'Law Office',
    image: 'https://res.cloudinary.com/ds85pv6ht/image/upload/v1770874360/lawyer-fullscreen_cbti3t.png',
    scrollableImage: true,
  },
  {
    id: '2',
    title: 'Auto Group',
    category: 'web-design',
    categoryLabel: 'Auto Dealership',
    image: 'https://res.cloudinary.com/ds85pv6ht/image/upload/v1770873518/tag-fullscreen_i2yasa.png',
    scrollableImage: true,
  },
  {
    id: '3',
    title: 'Therapy Company',
    category: 'web-design',
    categoryLabel: 'Therapy',
    image: 'https://res.cloudinary.com/ds85pv6ht/image/upload/v1770874794/therapy-fullscreen_hjsa2d.png',
    scrollableImage: true,
  },
  {
    id: '4',
    title: 'Roofing Company',
    category: 'web-design',
    categoryLabel: 'Roofing',
    image: 'https://res.cloudinary.com/ds85pv6ht/image/upload/v1771381166/roofing-fullscreen_pi8spf.png',
    scrollableImage: true,
  },
  {
    id: '5',
    title: 'Construction Company',
    category: 'web-design',
    categoryLabel: 'Construction',
    image: 'https://res.cloudinary.com/ds85pv6ht/image/upload/v1771552565/screencapture-localhost-4322-2026-02-19-17_55_13_uygvwb.png',
    scrollableImage: true,
  },
];

// Pricing Models
export const pricingModels: PricingModel[] = [
  {
    id: 'ownership',
    title: 'One Time Payment',
    subtitle: 'Pay once, keep monthly hosting low',
    upfront: '$1,500',
    monthly: '$25',
    description: 'Best for businesses that want to pay once and keep recurring costs lean.',
    features: [
      'Custom website build',
      'Hosting + security',
      'SEO foundation setup',
      'Performance-first build',
      'Mobile-first design',
      'Clear conversion paths',
      'Launch support',
      'Updates at $100/hour',
    ],
    highlighted: false,
  },
  {
    id: 'growth',
    title: 'Pay As You Go',
    subtitle: 'Most popular for done-for-you support',
    upfront: '$0',
    monthly: '$150',
    description: 'Best for businesses that want everything handled and do not want website chores.',
    features: [
      'Everything in the Ownership Build plan',
      'Ongoing updates handled for you',
      'Performance improvements',
      'Conversion improvements',
      'Priority support',
      'Done-for-you maintenance',
      'Clear monthly model',
      'Cancel any time',
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
    answer: 'We can handle content edits, section changes, swaps, and ongoing improvements. If you choose the monthly Growth Plan, updates are handled for you as part of your plan.',
  },
  {
    id: '3',
    question: 'How fast can we launch?',
    answer: 'Most projects launch within weeks, depending on content readiness and approval speed.',
  },
  {
    id: '4',
    question: 'Which plan should I choose?',
    answer: 'Choose Growth Plan if you want everything handled for you. Choose Ownership Build if you prefer a one-time build with lower monthly hosting and pay-as-needed edits.',
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

