import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumber Edison NJ - Illyrian Group Corp",
  description: "Licensed plumber in Edison, NJ. Water heaters, boilers, gas lines, repiping, and emergency plumbing. Fast service from nearby East Brunswick. Call (347) 461-4856.",
  keywords: [
    "plumber edison nj",
    "edison plumber",
    "plumbing services edison",
    "emergency plumber edison",
    "water heater repair edison",
  ],
};

export default function EdisonPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumber in Edison, NJ
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional plumbing services in Edison, NJ. Based in nearby East Brunswick, we provide fast response times for all your plumbing needs - from water heaters to emergency repairs.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing Services in Edison</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {SERVICE_PAGES.featured.map((service) => (
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

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Areas of Edison We Serve</h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide plumbing services throughout Edison, including Clara Barton, Nixon, Stelton, Highland Park border areas, and all neighborhoods along Route 1 and Route 27 corridors.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Service Areas</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick →</Link>
                <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 font-medium">Sayreville →</Link>
                <Link href="/service-areas/north-brunswick" className="text-red-700 hover:text-red-800 font-medium">North Brunswick →</Link>
                <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in Edison?</h2>
          <p className="text-xl text-red-100 mb-8">Fast service from your nearby plumbing experts.</p>
          <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block">
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}