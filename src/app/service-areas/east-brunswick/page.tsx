import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumber East Brunswick NJ - Illyrian Group Corp",
  description: "Licensed plumber in East Brunswick, NJ. Water heaters, boilers, gas lines, repiping, and emergency plumbing. Local experts. Call (347) 461-4856.",
  keywords: [
    "plumber east brunswick nj",
    "east brunswick plumber",
    "plumbing services east brunswick",
    "emergency plumber east brunswick",
    "water heater repair east brunswick",
  ],
};

export default function EastBrunswickPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://www.illyrianplumber.com/#organization",
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    url: "https://www.illyrianplumber.com/service-areas/east-brunswick",
    address: { "@type": "PostalAddress", streetAddress: BUSINESS_INFO.address.street, addressLocality: BUSINESS_INFO.address.city, addressRegion: "NJ", postalCode: BUSINESS_INFO.address.zip, addressCountry: "US" },
    areaServed: { "@type": "City", name: "East Brunswick", containedInPlace: { "@type": "State", name: "New Jersey" } },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "5", bestRating: "5" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-red-400 font-medium mb-4">Our Home Base</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumber in East Brunswick, NJ
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Illyrian Group Corp is headquartered in East Brunswick and proudly serves our local community. As your neighborhood plumber, we provide fast response times and personalized service.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
              </a>
              <a href={BUSINESS_INFO.phone2Link} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing Services in East Brunswick</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[...SERVICE_PAGES.featured, ...SERVICE_PAGES.residential.slice(0, 3)].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </Link>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why East Brunswick Chooses Us</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Located right here in East Brunswick",
                "Fast response times - we are minutes away",
                "Known and trusted in the community",
                "Licensed NJ Master Plumbers",
                "24/7 emergency service available",
                "Upfront pricing, no surprises",
              ].map((reason, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4">
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our East Brunswick Location</h3>
              <p className="text-gray-700 mb-4"><strong>Address:</strong> {BUSINESS_INFO.address.full}</p>
              <p className="text-gray-600 mb-6">
                Conveniently located to serve all of East Brunswick, including neighborhoods near Farrington Lake, Crystal Springs, and the Route 18 corridor.
              </p>
              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563312.4975387864!2d-76.04627729339961!3d40.06772212112381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a38fc2afc8255df%3A0x226b02ec0b6ff21a!2sIllyrian%20Plumber!5e0!3m2!1sen!2s!4v1767607369527!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Illyrian Plumber East Brunswick Location"
                  className="w-full"
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Service Areas</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-medium">Edison →</Link>
                <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 font-medium">Sayreville →</Link>
                <Link href="/service-areas/old-bridge" className="text-red-700 hover:text-red-800 font-medium">Old Bridge →</Link>
                <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in East Brunswick?</h2>
          <p className="text-xl text-red-100 mb-8">Your local plumbing experts are just a call away.</p>
          <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block">
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}