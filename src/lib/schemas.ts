import { BUSINESS_INFO } from "./constants";

const SITE_URL = "https://www.illyrianplumber.com";

// City entities with Wikipedia @id for Knowledge Graph disambiguation.
// These resolve each location to its canonical entity in Google's Knowledge Graph.
export const SERVICE_AREA_ENTITIES = [
  {
    "@type": "City",
    name: "East Brunswick",
    "@id": "https://en.wikipedia.org/wiki/East_Brunswick,_New_Jersey",
  },
  {
    "@type": "City",
    name: "Edison",
    "@id": "https://en.wikipedia.org/wiki/Edison,_New_Jersey",
  },
  {
    "@type": "City",
    name: "Old Bridge",
    "@id": "https://en.wikipedia.org/wiki/Old_Bridge_Township,_New_Jersey",
  },
  {
    "@type": "City",
    name: "Sayreville",
    "@id": "https://en.wikipedia.org/wiki/Sayreville,_New_Jersey",
  },
  {
    "@type": "City",
    name: "South Brunswick",
    "@id": "https://en.wikipedia.org/wiki/South_Brunswick,_New_Jersey",
  },
  {
    "@type": "City",
    name: "North Brunswick",
    "@id": "https://en.wikipedia.org/wiki/North_Brunswick,_New_Jersey",
  },
  {
    "@type": "City",
    name: "Monroe Township",
    "@id": "https://en.wikipedia.org/wiki/Monroe_Township,_Middlesex_County,_New_Jersey",
  },
  {
    "@type": "City",
    name: "Piscataway",
    "@id": "https://en.wikipedia.org/wiki/Piscataway,_New_Jersey",
  },
  {
    "@type": "AdministrativeArea",
    name: "Middlesex County",
    "@id": "https://en.wikipedia.org/wiki/Middlesex_County,_New_Jersey",
  },
  {
    "@type": "State",
    name: "New Jersey",
    "@id": "https://en.wikipedia.org/wiki/New_Jersey",
  },
];

/**
 * Full Plumber LocalBusiness schema with geo, logo, sameAs,
 * Wikipedia-linked service areas, and opening hours.
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/images/illyrian-plumber-logo.png`,
    image: `${SITE_URL}/images/illyrian-plumber-logo.png`,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_INFO.phone,
        contactType: "customer service",
        areaServed: "US-NJ",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_INFO.phone2,
        contactType: "customer service",
        areaServed: "US-NJ",
        availableLanguage: "English",
      },
    ],
    priceRange: "$$",
    foundingDate: BUSINESS_INFO.founded,
    slogan: BUSINESS_INFO.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.4279,
      longitude: -74.4157,
    },
    areaServed: SERVICE_AREA_ENTITIES,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS_INFO.reviews.rating,
      bestRating: BUSINESS_INFO.reviews.bestRating,
      reviewCount: BUSINESS_INFO.reviews.count,
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "York Chen" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2026-05-27",
        reviewBody: "Danny was great to work with. He was very responsible, professional, and reliable throughout the whole repair process...",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Donna Penn" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2026-02-18",
        reviewBody: "Illyrian Plumbers did a fantastic job with our emergency plumbing issue. Our plumber was professional and thorough with...",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sam Kadric" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2025-12-31",
        reviewBody: "Dardan and his team were amazing. They did a full renovation including all new plumbing. The professionalism and...",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sead Kastrati" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2025-12-17",
        reviewBody: "When I needed someone on short notice to install new bathroom tiles and other bathroom fixtures, Dardan came through. He...",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Shkreptim Mallaku" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2025-12-17",
        reviewBody: "Illyrium Plumber team was outstanding from start to finish. I had a specific plumbing issue that needed to be handled...",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Drin Gjonbalaj" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2025-12-10",
        reviewBody: "Illyrian Plumbing replaced our old oil boiler with a Navien combi boiler, and the whole experience was great from start...",
      },
    ],
    sameAs: [
      BUSINESS_INFO.socialMedia.facebook,
      BUSINESS_INFO.socialMedia.instagram,
      BUSINESS_INFO.socialMedia.google,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "24/7 Emergency Plumbing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Repair & Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tankless Water Heater Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Boiler Repair & Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gas Line Repair & Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Whole House Repiping" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Leak Detection" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sump Pump Repair & Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Filtration Systems" } },
      ],
    },
  };
}

/**
 * Service schema for an individual service page.
 * References the root business via @id instead of duplicating LocalBusiness data.
 */
export function getServiceSchema(args: {
  name: string;
  description: string;
  slug: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    serviceType: args.serviceType ?? args.name,
    url: `${SITE_URL}/services/${args.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: SERVICE_AREA_ENTITIES,
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: BUSINESS_INFO.phone,
      availableLanguage: "English",
    },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

/**
 * FAQPage schema from a list of Q&A pairs.
 */
export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList schema from an ordered list of crumbs.
 */
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * HowTo schema for step-by-step process descriptions.
 */
export function getHowToSchema(args: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: args.name,
    description: args.description,
    step: args.steps.map((s) => ({
      "@type": "HowToStep",
      name: s.name,
      text: s.text,
    })),
  };
}
