import type {
  Service,
  Testimonial,
  PortfolioItem,
  PricingModel,
  FAQItem,
  YelpReview,
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
  description:
    'Custom coded, SEO ready websites for Southern California businesses, built to rank on Google and convert visitors into calls, quotes, and booked jobs.',
  phone: '(747) 221-6603',
  email: 'hello@socalwebexperts.com',
  address: 'Glendale, California',
  url: 'https://socalwebexperts.com',
  socials: [
    { platform: 'Yelp', url: 'https://www.yelp.ca/biz/socal-web-experts-glendale', icon: 'star' },
    { platform: 'Facebook', url: 'https://www.facebook.com/people/SoCal-Web-Experts/61587500204976/', icon: 'facebook' },
    { platform: 'Instagram', url: 'https://www.instagram.com/socalwebexperts/', icon: 'instagram' },
  ],
};

// Navigation
export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Custom Web Design', href: '/services/web-design/' },
      { label: 'Social Media Marketing', href: '/services/social-media/' },
      { label: 'Google Ads', href: '/services/google-ads/' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Contact', href: '/contact/' },
];

// Services
export const services: Service[] = [
  {
    id: 'web-design',
    title: 'Custom Web Design',
    shortDescription:
      'Custom websites that explain your services and make it easy to call, book, or request a quote.',
    description:
      'We build fast, custom websites that explain your services, earn trust, and make it easy to call, book, or request a quote.',
    heroHeadline: 'Websites built to win customers.',
    icon: 'code',
    slug: 'web-design',
    layout: 'classic',
    features: [
      'Custom design for your brand',
      'Mobile-first page structure',
      'Service and location pages',
      'Clear calls, quotes, bookings, and forms',
      'Reviews and proof that build trust',
      'Fast loads and clean UX',
      'Hands-on launch support',
    ],
    highlights: [
      {
        title: 'Brand-First Design',
        description: 'A custom look shaped around your business, not a template.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Designer reviewing website analytics on a laptop',
      },
      {
        title: 'Conversion Structure',
        description: 'Service pages, proof, and clear calls to action.',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Person designing a website interface on a computer',
      },
      {
        title: 'Mobile-Ready UX',
        description: 'A fast experience that works on every screen.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Smartphone showing a clean mobile website',
      },
      {
        title: 'Launch Support',
        description: 'Clear support from final review through go-live.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Team collaborating on a digital project',
      },
    ],
    details: [
      {
        title: 'Custom Site Builds',
        description: 'Custom pages for your services, locations, and offers.',
        icon: 'code',
      },
      {
        title: 'Lead-Focused Layouts',
        description: 'Forms, click-to-call, and booking paths that capture leads.',
        icon: 'target',
      },
      {
        title: 'Performance & SEO Basics',
        description: 'Fast loads, clean structure, and solid SEO basics.',
        icon: 'zap',
      },
      {
        title: 'Trust & Proof Blocks',
        description: 'Reviews, credentials, and work placed where they matter.',
        icon: 'shield',
      },
      {
        title: 'Content Guidance',
        description: 'Clear answers to the questions customers ask.',
        icon: 'edit',
      },
      {
        title: 'Done-for-You Launch',
        description: 'We take the approved site from draft to live.',
        icon: 'rocket',
      },
    ],
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    shortDescription:
      'On-brand posts that keep your business visible, trusted, and easy to remember.',
    description:
      'We plan and publish useful, on-brand content that keeps your business visible to the people most likely to need it.',
    heroHeadline: 'Stay visible, stay trusted, stay top of mind.',
    icon: 'share',
    slug: 'social-media',
    layout: 'media-first',
    features: [
      'Profile optimization and visual consistency with your brand',
      'Content planning aligned to your services and promotions',
      'Posting and scheduling so your channels stay active',
      'Creative direction for captions, hooks, and key messages',
      'Engagement guidance that supports credibility, not noise',
      'Cross-channel alignment with your website and offers',
      'Light reporting on what is working and what to adjust',
    ],
    highlights: [
      {
        title: 'On-Brand Presence',
        description: 'Profiles and visuals that match your website so customers recognize you everywhere they look.',
        image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Person managing social media on a phone',
      },
      {
        title: 'Content Rhythm',
        description: 'A practical posting cadence that keeps your channels active without sounding forced.',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Social media content planning on a desk',
      },
      {
        title: 'Message Clarity',
        description: 'Captions and hooks that explain what you do and why customers should choose you.',
        image: 'https://images.unsplash.com/photo-1554177255-61502b352de3?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Creator reviewing content on a laptop',
      },
      {
        title: 'Local Familiarity',
        description: 'Content aimed at the people nearby who are most likely to need your services.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Team reviewing campaign creative together',
      },
    ],
    details: [
      {
        title: 'Profile Setup',
        description: 'Clean branding, bio clarity, and visuals that match the rest of your digital presence.',
        icon: 'users',
      },
      {
        title: 'Content Planning',
        description: 'Monthly themes tied to your services, offers, and seasonal demand.',
        icon: 'palette',
      },
      {
        title: 'Posting & Scheduling',
        description: 'Consistent publishing so your audience sees you regularly, not randomly.',
        icon: 'share',
      },
      {
        title: 'Creative Direction',
        description: 'Hooks, captions, and visual guidance that keep posts useful and on brand.',
        icon: 'edit',
      },
      {
        title: 'Engagement Support',
        description: 'Practical guidance for replies and community touches that build trust.',
        icon: 'check-circle',
      },
      {
        title: 'Simple Reporting',
        description: 'Clear notes on what is working so you know what to keep and what to adjust.',
        icon: 'bar-chart',
      },
    ],
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    shortDescription:
      'Search ads that reach people already looking for your services nearby.',
    description:
      'We build and manage search campaigns for people already looking for your services, then improve them using real lead data.',
    heroHeadline: 'Reach people already searching for what you offer.',
    icon: 'target',
    slug: 'google-ads',
    layout: 'split',
    features: [
      'Search campaign setup tailored to your services and area',
      'Keyword and match-type strategy for qualified traffic',
      'Location and audience targeting for local intent',
      'Compelling ad copy and extensions that earn the click',
      'Conversion tracking tied to calls, forms, and goals',
      'Budget and bid management with clear priorities',
      'Regular optimization and performance summaries',
    ],
    highlights: [
      {
        title: 'High-Intent Targeting',
        description: 'Campaigns aimed at people searching for your services in the areas you actually serve.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Analytics dashboard showing campaign performance',
      },
      {
        title: 'Ad Copy That Converts',
        description: 'Clear messaging and extensions that earn the click and set the right expectations.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Marketer planning paid search strategy',
      },
      {
        title: 'Tracking & Insights',
        description: 'Calls, forms, and goals measured so optimization is based on real outcomes.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Laptop with charts and conversion data',
      },
      {
        title: 'Budget Control',
        description: 'Spend directed toward the keywords and locations that bring qualified leads.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Business planning budget and growth goals',
      },
    ],
    details: [
      {
        title: 'Campaign Setup',
        description: 'Search campaigns structured around your services, service area, and goals.',
        icon: 'target',
      },
      {
        title: 'Keyword Strategy',
        description: 'Match types and terms chosen to attract qualified traffic, not random clicks.',
        icon: 'search',
      },
      {
        title: 'Local Targeting',
        description: 'Geo and audience settings that keep spend focused where you want customers.',
        icon: 'map-pin',
      },
      {
        title: 'Conversion Tracking',
        description: 'Calls, forms, and key actions connected so results are measurable.',
        icon: 'trending-up',
      },
      {
        title: 'Bid Management',
        description: 'Budgets and bids adjusted around priorities that matter to your business.',
        icon: 'bar-chart',
      },
      {
        title: 'Ongoing Optimization',
        description: 'Regular refinements and summaries based on real lead performance.',
        icon: 'refresh-cw',
      },
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
    description: 'We align on your goals, services, customers, and priorities.',
    icon: 'phone',
  },
  {
    id: 'build',
    step: 2,
    title: 'We Build',
    description: 'We handle the design, copy, structure, and lead paths.',
    icon: 'code',
  },
  {
    id: 'launch',
    step: 3,
    title: 'Launch',
    description: 'We publish with forms, tracking, and SEO basics in place.',
    icon: 'rocket',
  },
  {
    id: 'maintain',
    step: 4,
    title: 'We Maintain',
    description: 'We handle ongoing updates, improvements, and support.',
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

// Verified Yelp review
export const yelpReview: YelpReview = {
  reviewId: 't3wCBOwua2fHxP_lnm-Rwg',
  businessId: 'sF9nR-iGFXVFIVYoxv31Ug',
  businessUrl: 'https://www.yelp.ca/biz/socal-web-experts-glendale',
  reviewUrl: 'https://www.yelp.ca/biz/socal-web-experts-glendale?hrid=t3wCBOwua2fHxP_lnm-Rwg',
  authorName: 'Adena M.',
  authorProfileUrl: 'https://www.yelp.com/user_details?userid=6kVeiHHr-XIJKtIDKVVwIA',
  location: 'Glendale, CA',
  date: 'March 19, 2026',
  rating: 5,
  quote:
    "SoCal Web Experts designed and created a website for my new clothing business. I'm very pleased and happy with their work and they delivered exactly what I asked for. Thank you for helping me build my brand and business and making the process of shopping easy and smooth for my clients. Appreciate the dedication and effort that was shown!",
  badge: 'First to review on Yelp',
};

// Portfolio Items
export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Billing Fortress',
    category: 'web-design',
    categoryLabel: 'Medical Billing',
    image: '/portfolio/screencapture-billingfortress.jpg',
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
    image: '/portfolio/ev-design-1400.webp',
    scrollableImage: true,
  },
  {
    id: '8',
    title: "Sam's Bakery",
    category: 'web-design',
    categoryLabel: 'Bakery',
    image: '/portfolio/sams-bakery-1400.webp',
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
  portfolioItems.find((item) => item.id === '1')!,
  portfolioItems.find((item) => item.id === '8')!,
  portfolioItems.find((item) => item.id === '2')!,
  portfolioItems.find((item) => item.id === '3')!,
  portfolioItems.find((item) => item.id === '7')!,
];

// Pricing Models
export const pricingModels: PricingModel[] = [
  {
    id: 'website',
    title: 'Website Build',
    subtitle: 'Dazzling Prices .',
    upfrontPrefix: 'Starting from',
    upfront: '$299',
    upfrontLabel: 'setup fee',
    monthly: '$12',
    yearly: '$99',
    features: [
      'Unlimited edits until you\'re satisfied',
      'Custom website build',
      'SEO foundation setup',
      'Performance-first, mobile-first design',
      'Clear conversion paths (calls, forms, booking)',
      'Launch support',
      'Future updates: $50 per round',
      'Or $50/month unlimited (content, articles, SEO, and more)',
      'New pages after launch: $100 each',
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
      'Unlimited edits are included until you approve the design. After launch, updates are $50 per round, or $50 a month for unlimited updates including content, articles, SEO, and more. New pages are $100 each.',
  },
  {
    id: '3',
    question: 'How fast can we launch?',
    answer: 'Most projects launch in 2–5 business days when content and approvals are ready.',
  },
  {
    id: '4',
    question: 'What does monthly hosting cover?',
    answer:
      'Monthly hosting covers keeping your site online with core security. Unlimited edits are included until you\'re satisfied with the design. After launch, updates are $50 per round, or $50 a month for unlimited updates including content, articles, SEO, and more. New pages are $100 each.',
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
  {
    label: 'Client PageSpeed',
    value: '95',
    suffix: '+',
    description:
      'Typical mobile Lighthouse performance on the sites we ship.',
  },
  {
    label: 'Kickoff to launch',
    value: '2–5',
    suffix: ' business days',
    description:
      'Typical timeline when content and approvals stay on track.',
  },
  {
    label: 'Custom builds from',
    value: '$299',
    description:
      'Setup fee with hosting from $12 monthly and revisions before launch.',
  },
];

