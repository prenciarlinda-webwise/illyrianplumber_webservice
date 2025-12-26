import { BUSINESS_INFO } from "@/lib/constants";

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  serviceImage?: string;
  serviceType?: string;
  priceRange?: string;
  areaServed?: string[];
}

export default function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceUrl,
  serviceImage = "https://www.illyrianplumber.com/images/professional-plumbing-services.jpg",
  serviceType = "Plumbing",
  priceRange = "$$",
  areaServed = BUSINESS_INFO.serviceAreas,
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.illyrianplumber.com${serviceUrl}#service`,
    name: serviceName,
    description: serviceDescription,
    url: `https://www.illyrianplumber.com${serviceUrl}`,
    image: serviceImage,
    serviceType: serviceType,
    provider: {
      "@type": "Plumber",
      "@id": "https://www.illyrianplumber.com/#organization",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: {
        "@type": "State",
        name: "New Jersey",
      },
    })),
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
      },
      availability: "https://schema.org/InStock",
      priceRange: priceRange,
    },
    termsOfService: "https://www.illyrianplumber.com/terms-of-service",
    serviceOutput: {
      "@type": "Thing",
      name: `Completed ${serviceName}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
