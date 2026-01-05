import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Water Heater Replacement East Brunswick NJ - Illyrian Group Corp",
  description: "Professional water heater replacement in East Brunswick, NJ. Same-day installation available. Tank and tankless options. Free estimates. Call (347) 461-4856.",
  keywords: [
    "water heater replacement",
    "water heater replacement cost",
    "replace water heater",
    "new water heater",
    "water heater installation",
  ],
};

export default function WaterHeaterReplacementPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Water Heater Replacement",
    description: "Professional water heater replacement in East Brunswick, NJ. Same-day installation available. Tank and tankless options.",
    provider: { "@type": "Plumber", "@id": "https://www.illyrianplumber.com/#organization", name: BUSINESS_INFO.name, telephone: BUSINESS_INFO.phone },
    areaServed: BUSINESS_INFO.serviceAreas.map(area => ({ "@type": "City", name: area })),
    serviceType: "Water Heater Replacement",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/water-heater-repair-service.jpg"
            alt="Water heater replacement service in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Same-Day Installation Available</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Water Heater Replacement
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Professional water heater replacement with same-day installation available. We remove your old unit and install a new, energy-efficient water heater.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
              </a>
              <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span>✓ Tank & Tankless Options</span>
              <span>✓ Free Estimates</span>
              <span>✓ Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Replace Your Water Heater</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Unit is 10-15 years old",
                "Frequent repairs needed",
                "Rusty water from hot tap",
                "Visible tank corrosion",
                "Water pooling around base",
                "Insufficient hot water",
              ].map((sign, index) => (
                <div key={index} className="flex items-center gap-3 bg-amber-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>

            {/* Gallery Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Water Heater Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { src: "/images/water-heater-repair-service.jpg", alt: "Water heater replacement" },
                { src: "/images/tankless-water-heater-installation.jpg", alt: "Tankless water heater installation" },
                { src: "/images/water-heater-repair-near-me.jpg", alt: "Water heater service" },
                { src: "/images/water-heater-sediment-buildup.jpg", alt: "Water heater maintenance" },
                { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Gas water heater connection" },
                { src: "/images/copper-pipe-repiping-service.jpg", alt: "Water heater pipe connections" },
              ].map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Replacement Options</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tank Water Heaters</h3>
                <p className="text-gray-600 mb-3">Traditional 40-50 gallon tanks. Lower upfront cost, proven technology, 10-12 year lifespan.</p>
                <p className="text-sm text-gray-500">Contact us for a free estimate</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tankless Water Heaters</h3>
                <p className="text-gray-600 mb-3">Endless hot water, energy savings, compact design, 20+ year lifespan.</p>
                <p className="text-sm text-gray-500">Contact us for a free estimate</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Included</h2>
            <div className="bg-green-50 rounded-xl p-6 mb-12">
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "New water heater unit",
                  "Old unit removal & disposal",
                  "All fittings and connections",
                  "Proper venting (gas units)",
                  "Expansion tank if required",
                  "Permit and inspection",
                  "System testing",
                  "Warranty documentation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800 font-medium">Water Heater Repair →</Link>
                <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 font-medium">Tankless Installation →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a New Water Heater?</h2>
          <p className="text-xl text-red-100 mb-8">Get a free replacement estimate.</p>
          <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block">
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}