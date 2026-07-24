import { siteConfig, services, faqItems } from '../data/site';

const siteURL = siteConfig.url || 'https://socalwebexperts.com';

export function absoluteUrl(path = '/'): string {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalized, siteURL).href;
}

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${siteURL}/#organization`,
    name: siteConfig.name,
    url: siteURL,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/icon-512.png'),
      width: 512,
      height: 512,
    },
    image: absoluteUrl('/og-image.jpg'),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: siteConfig.socials.map((s) => s.url).filter((url) => url && url !== '#'),
  };
}

export function localBusinessSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${siteURL}/#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteURL,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: absoluteUrl('/og-image.jpg'),
    logo: absoluteUrl('/icon-512.png'),
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Glendale',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Los Angeles' },
      { '@type': 'City', name: 'Glendale' },
      { '@type': 'AdministrativeArea', name: 'Orange County' },
      { '@type': 'State', name: 'California' },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.1425,
      longitude: -118.2551,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    knowsAbout: [
      'Web design',
      'Custom website development',
      'Local SEO',
      'Google Ads',
      'Social media marketing',
      'Lead generation websites',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.shortDescription,
          url: absoluteUrl(`/services/${service.slug}/`),
        },
      })),
    },
    sameAs: siteConfig.socials.map((s) => s.url).filter((url) => url && url !== '#'),
    parentOrganization: { '@id': `${siteURL}/#organization` },
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${siteURL}/#website`,
    name: siteConfig.name,
    url: siteURL,
    description: siteConfig.description,
    publisher: { '@id': `${siteURL}/#organization` },
    inLanguage: 'en-US',
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function faqPageSchema() {
  return {
    '@type': 'FAQPage',
    '@id': `${siteURL}/#faq`,
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function servicePageSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: absoluteUrl(`/services/${service.slug}/`),
    provider: { '@id': `${siteURL}/#localbusiness` },
    areaServed: {
      '@type': 'State',
      name: 'California',
    },
  };
}

export function buildGraph(nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
