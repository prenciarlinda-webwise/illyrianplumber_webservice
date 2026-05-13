import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Sitemap canonicalization
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', statusCode: 301 },

      // Page-level renames / hub consolidation
      { source: '/testimonials', destination: '/about-us', statusCode: 301 },
      { source: '/coverage', destination: '/service-areas', statusCode: 301 },
      { source: '/coverage/', destination: '/service-areas', statusCode: 301 },
      { source: '/my-account', destination: '/', statusCode: 301 },
      { source: '/contact', destination: '/contact-us', statusCode: 301 },
      { source: '/contact/', destination: '/contact-us', statusCode: 301 },

      // Old top-level service URLs → /services/*
      { source: '/water-heater-installation', destination: '/services/water-heater-installation', statusCode: 301 },
      { source: '/emergency-water-heater-repair', destination: '/services/water-heater-repair', statusCode: 301 },
      { source: '/radiant-plumbing', destination: '/services/radiant-heating-plumbing', statusCode: 301 },
      { source: '/water-filtration-system', destination: '/services/water-filtration-system', statusCode: 301 },
      { source: '/emergency-commercial-plumber', destination: '/services/emergency-plumbing', statusCode: 301 },
      { source: '/emergency-plumbing-new-jersey', destination: '/services/emergency-plumbing', statusCode: 301 },
      { source: '/water-line-repair', destination: '/services/whole-house-repiping', statusCode: 301 },
      { source: '/kitchen-plumbing', destination: '/services/toilet-and-faucet-installation', statusCode: 301 },
      { source: '/toilet-repair-service', destination: '/services/toilet-and-faucet-installation', statusCode: 301 },
      { source: '/faucet-installation', destination: '/services/toilet-and-faucet-installation', statusCode: 301 },
      { source: '/boiler-plumbing', destination: '/services/boiler-repair-service', statusCode: 301 },
      { source: '/backflow-testing', destination: '/services/plumbing-safety-inspections', statusCode: 301 },
      { source: '/burst-pipe-repair-repiping', destination: '/services/whole-house-repiping', statusCode: 301 },
      { source: '/plumbing-inspection', destination: '/services/plumbing-safety-inspections', statusCode: 301 },
      { source: '/plumbing-inspections-maintenance-plans', destination: '/services/plumbing-safety-inspections', statusCode: 301 },
      { source: '/plumbing-inspections-maintenance-plans/', destination: '/services/plumbing-safety-inspections', statusCode: 301 },
      { source: '/rough-in-plumbing', destination: '/services/bathroom-remodeling', statusCode: 301 },
      { source: '/sump-pump-repair', destination: '/services/sump-pump-repair-install', statusCode: 301 },
      { source: '/gas-line-repair', destination: '/services/gas-line-repair-installation', statusCode: 301 },
      { source: '/water-leak-detection', destination: '/services/water-leak-detection', statusCode: 301 },

      // Legacy /plumbing-services/* hub
      { source: '/plumbing-services', destination: '/services', statusCode: 301 },
      { source: '/plumbing-services/', destination: '/services', statusCode: 301 },
      { source: '/plumbing-services/residential-plumbing-services', destination: '/services', statusCode: 301 },
      { source: '/plumbing-services/residential-plumbing-services/', destination: '/services', statusCode: 301 },
      { source: '/plumbing-services/commercial-plumbing-services', destination: '/services/commercial-plumbing', statusCode: 301 },
      { source: '/plumbing-services/commercial-plumbing-services/', destination: '/services/commercial-plumbing', statusCode: 301 },
      { source: '/plumbing-services/emergency-plumbing-services', destination: '/services/emergency-plumbing', statusCode: 301 },
      { source: '/plumbing-services/emergency-plumbing-services/', destination: '/services/emergency-plumbing', statusCode: 301 },

      // Typo / malformed legacy URLs with backlinks
      { source: '/rvices', destination: '/services', statusCode: 301 },
      { source: '/rvices/', destination: '/services', statusCode: 301 },
      { source: '/q', destination: '/', statusCode: 301 },

      // Old /services/ slug that no longer exists
      { source: '/services/sewer-line-repair-replacement', destination: '/services', statusCode: 301 },

      // Legacy blog slugs → closest live equivalent
      { source: '/blog/how-to-flush-water-heater', destination: '/blog/how-to-drain-flush-water-heater', statusCode: 301 },
      { source: '/blog/tank-vs-tankless-water-heaters-which-one-is-right-for-your-home', destination: '/blog/tankless-vs-tank-water-heater', statusCode: 301 },
      { source: '/blog/5-signs-you-need-a-professional-plumber-before-it-becomes-an-emergency', destination: '/services/emergency-plumbing', statusCode: 301 },
      { source: '/blog/what-to-do-when-a-pipe-bursts-6-immediate-steps-to-minimize-damage', destination: '/services/emergency-plumbing', statusCode: 301 },
      { source: '/blog/how-to-detect-and-fix-hidden-plumbing-leaks-illyrian-plumber', destination: '/services/water-leak-detection', statusCode: 301 },
      { source: '/blog/blog-plumbing-tips-guide', destination: '/blog', statusCode: 301 },

      // WordPress feed / author / category / cdn-cgi / cache artifacts
      { source: '/feed', destination: '/blog', statusCode: 301 },
      { source: '/feed/', destination: '/blog', statusCode: 301 },
      { source: '/comments/feed', destination: '/blog', statusCode: 301 },
      { source: '/comments/feed/', destination: '/blog', statusCode: 301 },
      { source: '/author/:slug*', destination: '/about-us', statusCode: 301 },
      { source: '/category/:slug*', destination: '/blog', statusCode: 301 },
      { source: '/cdn-cgi/:path*', destination: '/contact-us', statusCode: 301 },
      { source: '/.lsrecap/:path*', destination: '/', statusCode: 301 },

      // WordPress date-archive patterns → /blog
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug/feed',
        destination: '/blog/:slug',
        statusCode: 301,
      },
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug/feed/',
        destination: '/blog/:slug',
        statusCode: 301,
      },
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug',
        destination: '/blog/:slug',
        statusCode: 301,
      },
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})',
        destination: '/blog',
        statusCode: 301,
      },
      {
        source: '/:year(\\d{4})/:month(\\d{2})',
        destination: '/blog',
        statusCode: 301,
      },
      {
        source: '/:year(\\d{4})',
        destination: '/blog',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
