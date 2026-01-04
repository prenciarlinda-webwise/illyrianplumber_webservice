import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.illyrianplumber.com";

  // Main pages
  const mainPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about-us", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact-us", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/service-areas", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/tools", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const featuredServices = [
    { url: "/services/tankless-water-heater-installation", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/services/sewer-line-repair-replacement", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/services/boiler-repair-service", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/services/gas-line-repair-installation", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/services/whole-house-repiping", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/services/emergency-plumbing", priority: 0.95, changeFrequency: "weekly" as const },
  ];

  const residentialPages = [
    { url: "/services/water-heater-repair", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/services/water-heater-replacement", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/services/water-leak-detection", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/services/sump-pump-repair-install", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/water-filtration-system", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/radiant-heating-plumbing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/bathroom-remodeling", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/services/toilet-and-faucet-installation", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/plumbing-safety-inspections", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // Service area pages (Middlesex County focus)
  const serviceAreaPages = [
    { url: "/service-areas/middlesex-county", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/service-areas/east-brunswick", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/service-areas/edison", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/service-areas/sayreville", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/service-areas/old-bridge", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/service-areas/monroe-township", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/service-areas/south-brunswick", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/service-areas/north-brunswick", priority: 0.75, changeFrequency: "monthly" as const },
  ];

  const allPages = [...mainPages, ...featuredServices, ...residentialPages, ...serviceAreaPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}