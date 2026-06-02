import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.illyrianplumber.com";

  // Main pages
  const mainPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const, lastModified: "2026-03-25" },
    { url: "/about-us", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/contact-us", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/services", priority: 0.9, changeFrequency: "weekly" as const, lastModified: "2026-03-25" },
    { url: "/service-areas", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const, lastModified: "2026-03-25" },
    { url: "/sitemap-page", priority: 0.3, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
  ];

  const featuredServices = [
    { url: "/services/tankless-water-heater-installation", priority: 0.95, changeFrequency: "weekly" as const, lastModified: "2026-03-25" },
    { url: "/services/water-heater-installation", priority: 0.95, changeFrequency: "weekly" as const, lastModified: "2026-03-25" },
    { url: "/services/boiler-repair-service", priority: 0.95, changeFrequency: "weekly" as const, lastModified: "2026-03-25" },
    { url: "/services/gas-line-repair-installation", priority: 0.95, changeFrequency: "weekly" as const, lastModified: "2026-03-25" },
    { url: "/services/whole-house-repiping", priority: 0.95, changeFrequency: "weekly" as const, lastModified: "2026-03-25" },
    { url: "/services/emergency-plumbing", priority: 0.95, changeFrequency: "weekly" as const, lastModified: "2026-03-25" },
  ];

  const residentialPages = [
    { url: "/services/water-heater-repair", priority: 0.9, changeFrequency: "weekly" as const, lastModified: "2026-03-25" },
    { url: "/services/water-heater-replacement", priority: 0.9, changeFrequency: "weekly" as const, lastModified: "2026-03-25" },
    { url: "/services/water-leak-detection", priority: 0.85, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/services/sump-pump-repair-install", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/services/water-filtration-system", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/services/radiant-heating-plumbing", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/services/bathroom-remodeling", priority: 0.85, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/services/toilet-and-faucet-installation", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/services/plumbing-safety-inspections", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/services/kitchen-plumbing", priority: 0.85, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/services/backflow-prevention-testing", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/services/commercial-plumbing", priority: 0.9, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
  ];

  // Service area pages (Middlesex County focus)
  const serviceAreaPages = [
    { url: "/service-areas/middlesex-county", priority: 0.85, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/service-areas/east-brunswick", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/service-areas/edison", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/service-areas/sayreville", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/service-areas/old-bridge", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/service-areas/monroe-township", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/service-areas/south-brunswick", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
    { url: "/service-areas/north-brunswick", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
  ];

  // Blog posts
  const blogPosts = [
    { url: "/blog/garbage-disposal-cleaning-unclogging-guide", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-06-02" },
    { url: "/blog/how-to-shut-off-water-to-your-house", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-06-02" },
    { url: "/blog/how-to-clean-and-replace-a-shower-head", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-06-02" },
    { url: "/blog/how-to-get-rid-of-drain-flies", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-06-02" },
    { url: "/blog/how-to-fix-a-leaky-bathtub-faucet", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-06-02" },
    { url: "/blog/how-to-light-a-gas-water-heater", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-06-02" },
    { url: "/blog/how-to-unclog-a-shower-or-tub-drain", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-06-02" },
    { url: "/blog/how-tankless-water-heaters-work", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/tankless-vs-tank-water-heater", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/what-size-tankless-water-heater", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/signs-water-heater-dying", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/how-to-descale-tankless-water-heater", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/sump-pump-maintenance-guide", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/common-boiler-problems-winter", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/why-is-water-pressure-low", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/signs-of-slab-leak-sewer-line", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/gas-leak-detection-safety", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/whole-house-water-filter-worth-it", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/how-long-bathroom-remodel-take", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/best-whole-house-water-filtration-systems", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/how-much-does-a-tankless-water-heater-cost", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/frozen-pipes-prevention-repair", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/common-water-heater-problems", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/how-long-water-heater-heat-up", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/trenchless-sewer-repair-guide", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/hydro-jetting-drain-cleaning-guide", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/sewer-camera-inspection-guide", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/water-pipe-noises-causes-fixes", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/how-to-drain-flush-water-heater", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/kitchen-sink-plumbing-diagram", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/how-to-unclog-kitchen-sink", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/what-is-backflow-testing", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/battery-backup-sump-pump-guide", priority: 0.75, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/how-to-fix-running-toilet", priority: 0.85, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/how-to-unclog-toilet", priority: 0.85, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/dishwasher-not-draining-causes-fixes", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
    { url: "/blog/how-to-fix-leaking-pipe", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
  ];

  // Legal pages
  const legalPages = [
    { url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const, lastModified: "2025-01-01" },
    { url: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" as const, lastModified: "2025-01-01" },
  ];

  const allPages = [...mainPages, ...featuredServices, ...residentialPages, ...serviceAreaPages, ...blogPosts, ...legalPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(page.lastModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
