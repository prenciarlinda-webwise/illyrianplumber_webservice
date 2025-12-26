import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas | Plumber in Central New Jersey",
  description: "Illyrian Plumber serves East Brunswick, New Brunswick, Edison, and surrounding areas in Central New Jersey. 24/7 plumbing service. Call (718) 427-4396.",
  keywords: [
    "plumber near me",
    "east brunswick plumber",
    "new jersey plumber",
    "central nj plumber",
    "middlesex county plumber",
  ],
};

const serviceAreaDetails = [
  { name: "East Brunswick", slug: "plumber-east-brunswick", county: "Middlesex", description: "Our home base. Fast response times for all East Brunswick plumbing needs." },
  { name: "New Brunswick", slug: "plumber-new-brunswick", county: "Middlesex", description: "Serving New Brunswick homes and businesses with reliable plumbing." },
  { name: "South River", slug: "plumber-south-river", county: "Middlesex", description: "Complete plumbing services for South River residents." },
  { name: "North Brunswick", slug: "plumber-north-brunswick", county: "Middlesex", description: "Professional plumbing throughout North Brunswick Township." },
  { name: "Edison", slug: "plumber-edison", county: "Middlesex", description: "Serving Edison with residential and commercial plumbing." },
  { name: "Sayreville", slug: "plumber-sayreville", county: "Middlesex", description: "Reliable plumbing services for Sayreville homes." },
  { name: "Old Bridge", slug: "plumber-old-bridge", county: "Middlesex", description: "Expert plumbing for Old Bridge Township." },
  { name: "Monroe Township", slug: "plumber-monroe-township", county: "Middlesex", description: "Quality plumbing services in Monroe Township." },
  { name: "South Brunswick", slug: "plumber-south-brunswick", county: "Middlesex", description: "Serving South Brunswick with professional plumbing." },
  { name: "Milltown", slug: "plumber-milltown", county: "Middlesex", description: "Fast, reliable plumbing for Milltown residents." },
  { name: "Highland Park", slug: "plumber-highland-park", county: "Middlesex", description: "Complete plumbing services in Highland Park." },
  { name: "Spotswood", slug: "plumber-spotswood", county: "Middlesex", description: "Professional plumbing for Spotswood Borough." },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Areas</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Illyrian Plumber proudly serves East Brunswick and surrounding communities in Central New Jersey. We provide fast, reliable plumbing services throughout Middlesex County.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {serviceAreaDetails.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-red-200 transition group"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition">
                        {area.name}, NJ
                      </h2>
                      <span className="text-sm text-gray-500">{area.county} County</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </Link>
              ))}
            </div>

            {/* Map Area */}
            <div className="bg-gray-100 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Central New Jersey Coverage</h2>
              <p className="text-gray-600 text-center mb-6">
                Based in East Brunswick, we serve all of Middlesex County and surrounding areas. Don&apos;t see your town? Give us a call—we may still be able to help.
              </p>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-gray-500">Serving Central New Jersey</p>
                </div>
              </div>
            </div>

            {/* Services Available */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Services Available in All Areas</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: "Emergency Plumbing", href: "/services/emergency-plumbing" },
                  { name: "Water Heater Services", href: "/services/water-heater" },
                  { name: "Drain Cleaning", href: "/services/drain-sewer" },
                  { name: "Leak Detection", href: "/services/emergency-plumbing/water-leak-detection" },
                  { name: "Kitchen & Bathroom", href: "/services/kitchen-bathroom" },
                  { name: "Commercial Plumbing", href: "/services/commercial" },
                ].map((service, index) => (
                  <Link key={index} href={service.href} className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Need a Plumber in Your Area?" description="Contact us for fast, reliable plumbing service in Central New Jersey." />
    </>
  );
}
