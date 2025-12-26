import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS_INFO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.illyrianplumber.com"),
  title: {
    default: `${BUSINESS_INFO.name} | 24/7 Emergency Plumber in East Brunswick, NJ`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description: BUSINESS_INFO.description,
  keywords: [
    "plumber East Brunswick NJ",
    "emergency plumber New Jersey",
    "24 hour plumber NJ",
    "water heater repair East Brunswick",
    "drain cleaning NJ",
    "boiler installation New Jersey",
    "commercial plumber NJ",
    "residential plumbing services",
    "gas line repair NJ",
    "sump pump installation",
    "water leak detection",
    "bathroom plumbing",
    "kitchen plumbing",
  ],
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
    title: `${BUSINESS_INFO.name} | 24/7 Emergency Plumber in East Brunswick, NJ`,
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
    title: `${BUSINESS_INFO.name} | 24/7 Emergency Plumber`,
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
};

// Enhanced Schema Markup for LLM SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://www.illyrianplumber.com/#organization",
  name: BUSINESS_INFO.name,
  alternateName: "Illyrian Plumber",
  description: "Professional 24/7 emergency plumbing services in East Brunswick, NJ and Central New Jersey. Licensed master plumbers providing water heater repair, drain cleaning, bathroom plumbing, and commercial plumbing services to Middlesex County homeowners and businesses.",
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
  // Service Areas for LLM local relevance
  areaServed: BUSINESS_INFO.serviceAreas.map(area => ({
    "@type": "City",
    name: area,
    containedInPlace: {
      "@type": "State",
      name: "New Jersey",
      identifier: "NJ"
    }
  })),
  // Services offered for LLM understanding
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
        name: "Drain & Sewer Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Cleaning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewer Line Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hydro Jetting" } },
        ]
      },
      {
        "@type": "OfferCatalog",
        name: "Commercial Plumbing",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Plumbing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Backflow Testing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Boiler Repair" } },
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
  priceRange: "$$",
  paymentAccepted: ["Cash", "Credit Card", "Check"],
  currenciesAccepted: "USD",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1"
  },
  // Knowledge Panel signals
  knowsAbout: [
    "Emergency plumbing repair",
    "Water heater installation and repair",
    "Drain cleaning and unclogging",
    "Sewer line repair and replacement",
    "Gas line installation and repair",
    "Bathroom plumbing and remodeling",
    "Kitchen plumbing installation",
    "Commercial plumbing services",
    "Backflow prevention testing",
    "Boiler repair and installation"
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#b91c1c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}