import { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";
import EmergencyBanner from "./EmergencyBanner";
import CTASection from "./CTASection";
import FAQSection from "./FAQSection";
import RelatedServices from "./RelatedServices";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedService {
  title: string;
  href: string;
  description: string;
}

interface ServicePageLayoutProps {
  // SEO & Structure
  breadcrumbs: BreadcrumbItem[];

  // Hero Section
  title: string;
  description: string;
  serviceName: string;

  // Content
  children: ReactNode;

  // FAQ Section
  faqs?: FAQItem[];

  // Related Services (Internal Linking)
  relatedServices?: RelatedService[];
  relatedServicesTitle?: string;

  // Emergency Banner
  showEmergencyBanner?: boolean;
  emergencyBannerVariant?: "default" | "compact" | "inline";

  // Service Areas (Local SEO)
  showServiceAreas?: boolean;

  // CTA
  ctaTitle?: string;
  ctaDescription?: string;
}

export default function ServicePageLayout({
  breadcrumbs,
  title,
  description,
  serviceName,
  children,
  faqs,
  relatedServices,
  relatedServicesTitle = "Related Services",
  showEmergencyBanner = true,
  emergencyBannerVariant = "default",
  showServiceAreas = true,
  ctaTitle,
  ctaDescription,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner - Cross Silo Link */}
      {showEmergencyBanner && emergencyBannerVariant !== "inline" && (
        <EmergencyBanner variant={emergencyBannerVariant} serviceName={serviceName} />
      )}

      {/* Main Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            {showEmergencyBanner && emergencyBannerVariant === "inline" && (
              <EmergencyBanner variant="inline" serviceName={serviceName} />
            )}
            {children}
          </div>
        </div>
      </article>

      {/* FAQ Section with Schema */}
      {faqs && faqs.length > 0 && (
        <FAQSection
          title={`${serviceName} FAQ`}
          faqs={faqs}
          showSchema={true}
        />
      )}

      {/* Related Services - Internal Linking */}
      {relatedServices && relatedServices.length > 0 && (
        <RelatedServices
          title={relatedServicesTitle}
          services={relatedServices}
          variant="grid"
        />
      )}

      {/* Service Areas - Local SEO */}
      {showServiceAreas && (
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {serviceName} Service Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {BUSINESS_INFO.serviceAreas.map((area, index) => (
                <Link
                  key={index}
                  href={`/service-areas/plumber-${area.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-gray-100 hover:bg-red-50 hover:text-red-700 px-4 py-2 rounded-full text-sm font-medium transition"
                >
                  {area}, NJ
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title={ctaTitle || `Need ${serviceName} Service?`}
        description={ctaDescription || `Contact Illyrian Plumber for professional ${serviceName.toLowerCase()} services in East Brunswick and Central New Jersey.`}
        variant="default"
      />
    </>
  );
}