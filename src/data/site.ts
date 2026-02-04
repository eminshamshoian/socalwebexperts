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
  tagline: 'Professional Web Design & Digital Marketing',
  description: 'Full-service digital agency delivering custom websites, SEO, digital marketing, and online growth services for local and service-based businesses.',
  phone: '(949) 555-0123',
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
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Web Design', href: '/services/web-design' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Google Ads', href: '/services/google-ads' },
      { label: 'Social Media', href: '/services/social-media' },
      { label: 'Ecommerce', href: '/services/ecommerce' },
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
    shortDescription: 'Professional, mobile-responsive websites built to convert visitors into customers.',
    description: 'We build professional, custom websites that are optimized for speed, mobile responsiveness, search engines, conversions, and user experience. Every site is 100% custom-designed to match your brand and business goals.',
    icon: 'code',
    slug: 'web-design',
    features: [
      '100% custom design tailored to your brand',
      'Mobile-friendly & responsive layouts',
      'Conversion-focused user experience',
      'Unlimited revisions until satisfaction',
      'Fast hosting & SSL included',
      'Professional branding support',
      'WordPress, Shopify, or custom HTML/CSS',
    ],
  },
  {
    id: 'seo',
    title: 'SEO Services',
    shortDescription: 'Rank higher on Google and attract organic traffic that converts.',
    description: 'We optimize websites to help businesses rank higher on Google, attract organic traffic, and generate more leads. Our proven SEO strategies drive real results.',
    icon: 'search',
    slug: 'seo',
    features: [
      'On-page SEO optimization',
      'Local SEO & Google Business Profile',
      'Backlinks & citations building',
      'SEO blog content strategy',
      'Technical SEO audits',
      'Monthly performance reporting',
      'Keyword research & targeting',
    ],
  },
  {
    id: 'google-ads',
    title: 'Google Ads Management',
    shortDescription: 'Drive immediate traffic and leads with expertly managed PPC campaigns.',
    description: 'Full management of Google Ads campaigns to drive immediate traffic and leads. We handle everything from setup to optimization for maximum ROI.',
    icon: 'target',
    slug: 'google-ads',
    features: [
      'Campaign setup & optimization',
      'Bid & budget management',
      'Audience targeting & segmentation',
      'Conversion tracking setup',
      'Ad copywriting & creative',
      'Transparent reporting',
      'A/B testing & optimization',
    ],
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    shortDescription: 'Grow your brand presence and engagement across all major platforms.',
    description: 'We manage Facebook, Instagram, and other major social platforms to grow engagement, brand visibility, and lead generation for your business.',
    icon: 'share',
    slug: 'social-media',
    features: [
      'Content creation & scheduling',
      'Audience growth strategies',
      'Engagement management',
      'Ad campaigns & optimization',
      'Monthly analytics reports',
      'Platform-specific strategies',
      'Community management',
    ],
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Solutions',
    shortDescription: 'Launch and scale your online store with professional ecommerce setup.',
    description: 'Professional ecommerce setups for online stores that sell products and scale revenue. We handle everything from design to payment configuration.',
    icon: 'cart',
    slug: 'ecommerce',
    features: [
      'Shopify store design & setup',
      'Payment gateway integration',
      'Shipping configuration',
      'Product catalog setup',
      'Conversion-optimized checkout',
      'Store management training',
      'Ongoing support available',
    ],
  },
  {
    id: 'support',
    title: 'Ongoing Support & Hosting',
    shortDescription: 'Continuous support to keep your website secure and performing at its best.',
    description: 'We provide continuous support, edits, updates, security, and hosting so your website stays optimized and always performing.',
    icon: 'shield',
    slug: 'web-design',
    features: [
      'Managed web hosting',
      'SSL certificate included',
      'Regular security updates',
      'Content edits & updates',
      'Performance monitoring',
      '24/7 uptime monitoring',
      'Priority support access',
    ],
  },
];

// Value Propositions
export const valueProps: ValueProp[] = [
  {
    id: 'performance',
    title: 'Performance & Speed',
    description: 'Fast-loading, high-performance websites built to convert visitors into customers.',
    icon: 'zap',
  },
  {
    id: 'done-for-you',
    title: 'Done-For-You Experience',
    description: 'We handle everything — from design to launch to marketing — so you can focus on growth.',
    icon: 'check-circle',
  },
  {
    id: 'seo-focused',
    title: 'SEO & Conversion Focus',
    description: 'Every project includes SEO foundations and conversion optimization built-in.',
    icon: 'trending-up',
  },
  {
    id: 'results',
    title: 'Measurable Results',
    description: 'Monthly reports, performance metrics, and data-driven strategies you can track.',
    icon: 'bar-chart',
  },
  {
    id: 'local-focus',
    title: 'Built for Local Business',
    description: 'Designed specifically for contractors, healthcare, restaurants, auto services, and more.',
    icon: 'map-pin',
  },
  {
    id: 'support',
    title: 'Ongoing Partnership',
    description: 'We never leave you hanging. Continuous support and updates to keep you growing.',
    icon: 'users',
  },
];

// Process Steps
export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    step: 1,
    title: 'Discovery',
    description: 'We learn about your business, goals, target audience, and competition to create a tailored strategy.',
    icon: 'search',
  },
  {
    id: 'design',
    step: 2,
    title: 'Design',
    description: 'Our team creates custom mockups and designs that align with your brand and convert visitors.',
    icon: 'palette',
  },
  {
    id: 'build',
    step: 3,
    title: 'Build',
    description: 'We develop your website with clean code, fast performance, and SEO best practices.',
    icon: 'code',
  },
  {
    id: 'launch',
    step: 4,
    title: 'Launch & Support',
    description: 'We launch your site and provide ongoing support, updates, and marketing to help you grow.',
    icon: 'rocket',
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
    title: 'Rodriguez Plumbing',
    category: 'web-design',
    description: 'Complete website redesign with local SEO optimization for a plumbing contractor.',
    image: '/portfolio/plumbing.jpg',
    technologies: ['Custom HTML/CSS', 'Local SEO', 'Google Business'],
    results: ['300% increase in leads', 'Page 1 Google ranking', '50% faster load time'],
  },
  {
    id: '2',
    title: 'Bright Smile Dental',
    category: 'web-design',
    description: 'Modern dental practice website with online booking integration.',
    image: '/portfolio/dental.jpg',
    technologies: ['WordPress', 'Booking System', 'SSL'],
    results: ['45% more appointments', 'Mobile traffic up 200%', '4.9 star reviews'],
  },
  {
    id: '3',
    title: 'Casa Bella Restaurant',
    category: 'social-media',
    description: 'Full social media management and content strategy for upscale restaurant.',
    image: '/portfolio/restaurant.jpg',
    technologies: ['Instagram', 'Facebook', 'Content Creation'],
    results: ['400% follower growth', '25% increase in reservations', 'Viral local posts'],
  },
  {
    id: '4',
    title: 'Thompson Construction',
    category: 'google-ads',
    description: 'Google Ads campaign management for residential construction company.',
    image: '/portfolio/construction.jpg',
    technologies: ['Google Ads', 'Landing Pages', 'Conversion Tracking'],
    results: ['15 leads per week', '$45 cost per lead', '320% ROI'],
  },
  {
    id: '5',
    title: 'Coastal Boutique',
    category: 'ecommerce',
    description: 'Shopify store design and setup for beachside clothing boutique.',
    image: '/portfolio/boutique.jpg',
    technologies: ['Shopify', 'Payment Integration', 'Inventory Management'],
    results: ['$50k first month sales', '3.2% conversion rate', 'Seamless checkout'],
  },
  {
    id: '6',
    title: 'Premier Auto Detailing',
    category: 'seo',
    description: 'Comprehensive SEO campaign for mobile auto detailing service.',
    image: '/portfolio/auto.jpg',
    technologies: ['On-Page SEO', 'Local Citations', 'Review Management'],
    results: ['#1 for "auto detailing Anaheim"', '200% organic traffic', '5-star rating'],
  },
];

// Pricing Models
export const pricingModels: PricingModel[] = [
  {
    id: 'upfront',
    title: 'One-Time Payment',
    subtitle: 'Best value for established businesses',
    upfront: '$1,500',
    monthly: '$25/mo',
    description: 'Pay once for your website, then just a small monthly fee for hosting and support.',
    features: [
      'Custom 5-7 page website',
      '100% custom design',
      'Mobile responsive',
      'SEO foundations',
      'Contact forms',
      'Google Analytics setup',
      'SSL certificate',
      'Managed hosting',
      'Unlimited edits',
      '30-day delivery',
    ],
    highlighted: false,
  },
  {
    id: 'monthly',
    title: 'Zero Down',
    subtitle: 'Perfect for startups & new businesses',
    upfront: '$0',
    monthly: '$150/mo',
    description: 'No upfront cost — get your professional website with an affordable monthly investment.',
    features: [
      'Custom 5-7 page website',
      '100% custom design',
      'Mobile responsive',
      'SEO foundations',
      'Contact forms',
      'Google Analytics setup',
      'SSL certificate',
      'Managed hosting',
      'Unlimited edits',
      '30-day delivery',
      '12-month minimum',
    ],
    highlighted: true,
  },
];

// FAQ Items
export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What services does SoCal Web Experts provide?',
    answer: 'We specialize in done-for-you website design and marketing solutions for local businesses. Our services include custom web design, hosting, SEO, Google Ads, social media marketing, ecommerce solutions, and ongoing support to help businesses grow and generate more leads.',
  },
  {
    id: '2',
    question: 'How much does a website cost?',
    answer: 'We offer two flexible pricing options: $1,500 upfront + $25/month, or $0 down + $150/month. Both include a professional 5-7 page custom website, hosting, SSL, unlimited edits, and ongoing support. Ecommerce and advanced marketing packages are also available.',
  },
  {
    id: '3',
    question: 'How quickly can my website be ready?',
    answer: 'Most websites are completed within 30 days, depending on the scope and content provided. Simple sites can launch in as little as 2 weeks. Marketing campaigns and SEO services can begin as soon as your site goes live.',
  },
  {
    id: '4',
    question: 'Do you provide ongoing support and revisions?',
    answer: 'Yes! We offer unlimited revisions until you are fully satisfied. Plus, we provide ongoing support, hosting management, security updates, and content edits to ensure your website and campaigns perform at their best.',
  },
  {
    id: '5',
    question: 'What industries do you work with?',
    answer: 'We work with all local service-based businesses including contractors, plumbers, electricians, HVAC, real estate agents, restaurants, healthcare providers, dental practices, auto services, retail stores, and more. If your business needs a strong online presence, we have got you covered.',
  },
  {
    id: '6',
    question: 'Do I own my website?',
    answer: 'Absolutely. You own your website, domain, and all content. We simply provide the design, development, hosting, and support. If you ever decide to leave, we will help you migrate everything to your new host.',
  },
  {
    id: '7',
    question: 'What makes you different from other agencies?',
    answer: 'We combine hand-coded, high-performance websites with done-for-you digital marketing. No templates, no page builders — just clean, custom code that ranks better and loads faster. Plus, we focus exclusively on local businesses, so we understand your needs.',
  },
  {
    id: '8',
    question: 'Do you offer SEO and marketing services?',
    answer: 'Yes! We offer comprehensive SEO services including on-page optimization, local SEO, Google Business Profile management, and content strategy. We also manage Google Ads campaigns and social media marketing to drive traffic and leads.',
  },
];

// Stats
export const stats: Stat[] = [
  { value: '500', label: 'Websites Launched', suffix: '+' },
  { value: '98', label: 'Client Satisfaction', suffix: '%' },
  { value: '10', label: 'Years Experience', suffix: '+' },
  { value: '2M', label: 'Leads Generated', suffix: '+' },
];

