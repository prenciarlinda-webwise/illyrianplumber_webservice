import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
{ source: '/testimonials', destination: '/about-us', permanent: true },
      { source: '/coverage', destination: '/service-areas', permanent: true },
      { source: '/my-account', destination: '/', permanent: true },
      { source: '/water-heater-installation', destination: '/services/tankless-water-heater-installation', permanent: true },
      { source: '/emergency-water-heater-repair', destination: '/services/water-heater-repair', permanent: true },
      { source: '/radiant-plumbing', destination: '/services/radiant-heating-plumbing', permanent: true },
      { source: '/water-filtration-system', destination: '/services/water-filtration-system', permanent: true },
      { source: '/plumbing-services/residential-plumbing-services', destination: '/services', permanent: true },
      { source: '/plumbing-services/commercial-plumbing-services', destination: '/services', permanent: true },
      { source: '/plumbing-services/emergency-plumbing-services', destination: '/services/emergency-plumbing', permanent: true },
      { source: '/emergency-commercial-plumber', destination: '/services/emergency-plumbing', permanent: true },
      { source: '/water-line-repair', destination: '/services/sewer-line-repair-replacement', permanent: true },
      { source: '/kitchen-plumbing', destination: '/services/toilet-and-faucet-installation', permanent: true },
      { source: '/toilet-repair-service', destination: '/services/toilet-and-faucet-installation', permanent: true },
      { source: '/faucet-installation', destination: '/services/toilet-and-faucet-installation', permanent: true },
      { source: '/boiler-plumbing', destination: '/services/boiler-repair-service', permanent: true },
      { source: '/backflow-testing', destination: '/services/plumbing-safety-inspections', permanent: true },
      { source: '/burst-pipe-repair-repiping', destination: '/services/whole-house-repiping', permanent: true },
      { source: '/plumbing-inspection', destination: '/services/plumbing-safety-inspections', permanent: true },
      { source: '/rough-in-plumbing', destination: '/services/bathroom-remodeling', permanent: true },
      { source: '/sump-pump-repair', destination: '/services/sump-pump-repair-install', permanent: true },
      { source: '/gas-line-repair', destination: '/services/gas-line-repair-installation', permanent: true },
      { source: '/water-leak-detection', destination: '/services/water-leak-detection', permanent: true },
      { source: '/service-areas/east-brunswick', destination: '/', permanent: true },
      // ========================================
      // BLOG DATE PATTERN REDIRECT
      // ========================================
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;