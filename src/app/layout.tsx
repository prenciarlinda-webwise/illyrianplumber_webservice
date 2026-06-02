import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS_INFO } from "@/lib/constants";
import { GoogleTagManager, GoogleTagManagerNoScript, GoogleAnalytics } from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.illyrianplumber.com"),
  title: {
    default: `${BUSINESS_INFO.name} - 24/7 Emergency Plumber in East Brunswick, NJ`,
    template: `%s - ${BUSINESS_INFO.name}`,
  },
  description: BUSINESS_INFO.description,
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.illyrianplumber.com",
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} - 24/7 Emergency Plumber in East Brunswick, NJ`,
    description: BUSINESS_INFO.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: BUSINESS_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_INFO.name} - 24/7 Emergency Plumber`,
    description: BUSINESS_INFO.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://www.illyrianplumber.com/#organization",
  name: BUSINESS_INFO.name,
  alternateName: "Illyrian Plumber",
  description: "Professional 24/7 emergency plumbing services in East Brunswick, NJ and Central New Jersey. Licensed master plumbers providing water heater repair, boiler service, gas line installation, and whole house repiping to Middlesex County homeowners.",
  image: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png",
  logo: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png",
  url: "https://www.illyrianplumber.com",
  telephone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,
  foundingDate: BUSINESS_INFO.founded,
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
    latitude: 40.4286,
    longitude: -74.4154,
  },
  areaServed: BUSINESS_INFO.serviceAreas.map(area => ({
    "@type": "City",
    name: area,
    containedInPlace: {
      "@type": "State",
      name: "New Jersey",
      identifier: "NJ"
    }
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plumbing Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Emergency Plumbing",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "24/7 Emergency Plumbing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Burst Pipe Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Leak Detection" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gas Leak Repair" } },
        ]
      },
      {
        "@type": "OfferCatalog",
        name: "Water Heater Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Replacement" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tankless Water Heater Installation" } },
        ]
      },
      {
        "@type": "OfferCatalog",
        name: "Kitchen & Bathroom Plumbing",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Faucet Repair & Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Toilet Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Remodel Plumbing" } },
        ]
      },
      {
        "@type": "OfferCatalog",
        name: "Mechanical Systems",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Boiler Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Radiant Floor Heating" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Whole House Repiping" } },
        ]
      },
      {
        "@type": "OfferCatalog",
        name: "Inspections & Other Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing Inspections" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gas Line Services" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Filtration Systems" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sump Pump Installation" } },
        ]
      }
    ]
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
      description: "24/7 Emergency Plumbing Service"
    }
  ],
  sameAs: [
    BUSINESS_INFO.socialMedia.facebook,
    BUSINESS_INFO.socialMedia.instagram,
    BUSINESS_INFO.socialMedia.google,
  ],
  hasMap: BUSINESS_INFO.socialMedia.google,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "emergency",
      telephone: BUSINESS_INFO.phone,
      email: BUSINESS_INFO.email,
      availableLanguage: "English",
      areaServed: "US-NJ",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: BUSINESS_INFO.phone2,
      availableLanguage: "English",
      areaServed: "US-NJ",
    },
  ],
  priceRange: "$$",
  paymentAccepted: ["Cash", "Credit Card", "Check"],
  currenciesAccepted: "USD",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS_INFO.reviews.rating,
    reviewCount: BUSINESS_INFO.reviews.count,
    bestRating: BUSINESS_INFO.reviews.bestRating,
    worstRating: "1"
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Donna Penn" },
      datePublished: "2026-02-24",
      reviewBody: "Illyrian Plumbers did a fantastic job with our emergency plumbing issue. Our plumber was professional and thorough with our repair. A burst pipe is never a good situation, but the response by Illyrian Plumbers turned our messy emergency into a smooth repair.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sam Kadric" },
      datePublished: "2026-01-24",
      reviewBody: "Dardan and his team were amazing. They did a full renovation including all new plumbing. The professionalism and communication by the team was terrific. Dardan helped me stay in my budget and timeline and always communicated what was being done.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Drin Gjonbalaj" },
      datePublished: "2025-12-24",
      reviewBody: "Illyrian Plumbing replaced our old oil boiler with a Navien combi boiler, and the whole experience was great from start to finish. They showed up on time, were very professional, and clearly knew what they were doing. The work was done right the first time.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Shkreptim Mallaku" },
      datePublished: "2025-12-24",
      reviewBody: "Illyrian Plumber team was outstanding from start to finish. I had a specific plumbing issue that needed to be handled properly, not patched or rushed, and their team delivered exactly that. They showed up on time, diagnosed the problem, and did the job right.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sead Kastrati" },
      datePublished: "2025-12-24",
      reviewBody: "When I needed someone on short notice to install new bathroom tiles and other bathroom fixtures, Dardan came through. He worked quickly, understood the urgency of the situation, and delivered great results.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }
    }
  ],
  knowsAbout: [
    "plumbing",
    "emergency plumbing",
    "24 hour plumbing",
    "water heater repair",
    "water heater installation",
    "water heater replacement",
    "tankless water heater installation",
    "boiler repair",
    "boiler installation",
    "gas line installation",
    "gas line repair",
    "gas leak detection",
    "whole house repiping",
    "leak detection",
    "sump pump installation",
    "water filtration",
    "backflow prevention",
    "bathroom plumbing",
    "kitchen plumbing",
    "radiant floor heating",
    "master plumber",
  ],
  slogan: BUSINESS_INFO.tagline,
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: BUSINESS_INFO.licenses.nj,
    credentialCategory: "Professional License"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <GoogleTagManager />
        <GoogleAnalytics />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#b91c1c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <GoogleTagManagerNoScript />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}