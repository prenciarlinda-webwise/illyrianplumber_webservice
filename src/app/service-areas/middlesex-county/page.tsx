import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumber Middlesex County NJ - Illyrian Group Corp",
  description: "Professional plumbing services throughout Middlesex County, NJ. Water heaters, boilers, gas lines, and repiping. Licensed plumbers serving all towns. Call (347) 461-4856.",
  keywords: [
    "plumber middlesex county",
    "middlesex county plumber",
    "plumbing services middlesex county nj",
    "plumber near me",
    "licensed plumber nj",
  ],
};

const towns = [
  { name: "East Brunswick", slug: "east-brunswick" },
  { name: "Edison", slug: "edison" },
  { name: "Sayreville", slug: "sayreville" },
  { name: "Old Bridge", slug: "old-bridge" },
  { name: "Monroe Township", slug: "monroe-township" },
  { name: "South Brunswick", slug: "south-brunswick" },
  { name: "North Brunswick", slug: "north-brunswick" },
];

export default function MiddlesexCountyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-red-400 font-medium mb-4">Serving All of Middlesex County</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumbing Services in Middlesex County, NJ
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Illyrian Group Corp provides professional plumbing services throughout Middlesex County. From East Brunswick to Edison, Old Bridge to Monroe Township, our licensed plumbers are ready to serve you.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Towns We Serve in Middlesex County</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {towns.map((town) => (
                <Link
                  key={town.slug}
                  href={`/service-areas/${town.slug}`}
                  className="bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-lg p-4 transition group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">
                    {town.name}, NJ
                  </h3>
                  <p className="text-gray-600 text-sm">View plumbing services →</p>
                </Link>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
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

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Illyrian Group Corp?</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { title: "Licensed & Insured", desc: "Fully licensed NJ plumbers with comprehensive insurance" },
                { title: "Local Experts", desc: "Based in East Brunswick, serving Middlesex County for 10+ years" },
                { title: "24/7 Emergency", desc: "Around the clock service for plumbing emergencies" },
              ].map((item, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Phone:</strong> <a href={BUSINESS_INFO.phoneLink} className="text-red-700 hover:underline">{BUSINESS_INFO.phone}</a></p>
                <p><strong>Alt Phone:</strong> <a href={BUSINESS_INFO.phone2Link} className="text-red-700 hover:underline">{BUSINESS_INFO.phone2}</a></p>
                <p><strong>Address:</strong> {BUSINESS_INFO.address.full}</p>
                <p><strong>Hours:</strong> {BUSINESS_INFO.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in Middlesex County?</h2>
          <p className="text-xl text-red-100 mb-8">Call us today for professional plumbing services.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}