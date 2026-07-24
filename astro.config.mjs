// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://socalwebexperts.com',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const url = item.url;
        const isHome = url === 'https://socalwebexperts.com/' || url === 'https://socalwebexperts.com';
        const isService = url.includes('/services/');
        const isCore =
          url.includes('/about') ||
          url.includes('/contact') ||
          url.includes('/pricing') ||
          url.includes('/portfolio');
        const isLegal =
          url.includes('/privacy') ||
          url.includes('/terms') ||
          url.includes('/accessibility');

        item.changefreq = isLegal ? 'yearly' : isHome || isService || isCore ? 'weekly' : 'monthly';
        item.priority = isHome ? 1.0 : isService ? 0.9 : isCore ? 0.8 : isLegal ? 0.3 : 0.5;
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
});
