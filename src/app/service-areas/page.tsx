import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas - Plumber in Central New Jersey",
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
  { name: "East Brunswick", slug: "east-brunswick", county: "Middlesex", description: "Our home base. Fast response times for all East Brunswick plumbing needs." },
  { name: "North Brunswick", slug: "north-brunswick", county: "Middlesex", description: "Professional plumbing throughout North Brunswick Township." },
  { name: "South Brunswick", slug: "south-brunswick", county: "Middlesex", description: "Serving South Brunswick with professional plumbing." },
  { name: "Edison", slug: "edison", county: "Middlesex", description: "Serving Edison with residential and commercial plumbing." },
  { name: "Old Bridge", slug: "old-bridge", county: "Middlesex", description: "Expert plumbing for Old Bridge Township." },
  { name: "Sayreville", slug: "sayreville", county: "Middlesex", description: "Reliable plumbing services for Sayreville homes." },
  { name: "Monroe Township", slug: "monroe-township", county: "Middlesex", description: "Quality plumbing services in Monroe Township." },
  { name: "Middlesex County", slug: "middlesex-county", county: "Middlesex", description: "County-wide plumbing services throughout Middlesex." },
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
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition mb-1">
                    {area.name}, NJ
                  </h2>
                  <span className="text-sm text-gray-500 block mb-2">{area.county} County</span>
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
                  <p className="text-gray-500 text-lg font-medium">Serving Central New Jersey</p>
                  <p className="text-gray-400 text-sm mt-2">Based in East Brunswick, Middlesex County</p>
                </div>
              </div>
            </div>

            {/* Services Available */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Services Available in All Areas</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: "Emergency Plumbing", href: "/services/emergency-plumbing" },
                  { name: "Water Heater Services", href: "/services/water-heater-repair" },
                  { name: "Boiler Repair", href: "/services/boiler-repair-service" },
                  { name: "Whole House Repiping", href: "/services/whole-house-repiping" },
                  { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
                  { name: "Gas Line Services", href: "/services/gas-line-repair-installation" },
                ].map((service, index) => (
                  <Link key={index} href={service.href} className="text-red-700 hover:text-red-800 font-medium">
                    {service.name} →
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
