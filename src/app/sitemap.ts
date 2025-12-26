import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.illyrianplumber.com";

  // Main pages
  const mainPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/service-areas", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/tools", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  // Service silo pages
  const servicePages = [
    // Water Heater Silo
    { url: "/services/water-heater", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/services/water-heater/repair", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/water-heater/replacement", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/water-heater/installation", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/water-heater/tankless", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/water-heater/gas-water-heater", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/water-heater/electric-water-heater", priority: 0.8, changeFrequency: "monthly" as const },

    // Emergency Plumbing Silo
    { url: "/services/emergency-plumbing", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/services/emergency-plumbing/burst-pipe-repair", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/emergency-plumbing/water-leak-detection", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/emergency-plumbing/gas-leak-repair", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/emergency-plumbing/slab-leak-detection", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/emergency-plumbing/emergency-drain-cleaning", priority: 0.8, changeFrequency: "monthly" as const },

    // Kitchen & Bathroom Silo
    { url: "/services/kitchen-bathroom", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/services/kitchen-bathroom/faucet-repair", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/kitchen-bathroom/toilet-repair", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/kitchen-bathroom/garbage-disposal", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/kitchen-bathroom/sink-installation", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/kitchen-bathroom/shower-tub", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/kitchen-bathroom/bathroom-remodel", priority: 0.8, changeFrequency: "monthly" as const },

    // Drain & Sewer Silo
    { url: "/services/drain-sewer", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/services/drain-sewer/drain-cleaning", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/drain-sewer/hydro-jetting", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/drain-sewer/sewer-line-repair", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/drain-sewer/camera-inspection", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/drain-sewer/sump-pump", priority: 0.8, changeFrequency: "monthly" as const },

    // Commercial Silo
    { url: "/services/commercial", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/services/commercial/restaurant-plumbing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/commercial/backflow-testing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/commercial/boiler-repair", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/commercial/grease-trap", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/commercial/plumbing-inspections", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // Service area pages
  const serviceAreaSlugs = [
    "plumber-east-brunswick",
    "plumber-new-brunswick",
    "plumber-south-river",
    "plumber-north-brunswick",
    "plumber-edison",
    "plumber-sayreville",
    "plumber-old-bridge",
    "plumber-monroe-township",
    "plumber-south-brunswick",
    "plumber-milltown",
    "plumber-highland-park",
    "plumber-spotswood",
  ];

  const serviceAreaPages = serviceAreaSlugs.map((slug) => ({
    url: `/service-areas/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // Combine all pages
  const allPages = [...mainPages, ...servicePages, ...serviceAreaPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
