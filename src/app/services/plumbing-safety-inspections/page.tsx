import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumbing Safety Inspections NJ - Illyrian Group Corp",
  description: "Professional plumbing inspections in East Brunswick, NJ. Home buyer inspections, annual maintenance checks, and safety evaluations. Call (347) 461-4856.",
  keywords: [
    "plumbing inspection",
    "home plumbing inspection",
    "plumbing safety inspection",
    "pre-purchase plumbing inspection",
    "plumbing evaluation",
    "plumbing assessment",
  ],
};

export default function PlumbingInspectionsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plumbing Safety Inspections",
    description: "Professional plumbing inspections in East Brunswick, NJ. Home buyer inspections, annual maintenance checks, and safety evaluations.",
    provider: { "@type": "Plumber", "@id": "https://www.illyrianplumber.com/#organization", name: BUSINESS_INFO.name, telephone: BUSINESS_INFO.phone },
    areaServed: BUSINESS_INFO.serviceAreas.map(area => ({ "@type": "City", name: area })),
    serviceType: "Plumbing Inspection",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/professional-plumbing-services.jpg"
            alt="Plumbing safety inspections in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Comprehensive Evaluations</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Plumbing Safety Inspections
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Comprehensive plumbing inspections for home buyers, sellers, and homeowners. Identify problems before they become expensive emergencies.
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
              <span>✓ Home Buyer Inspections</span>
              <span>✓ Detailed Reports</span>
              <span>✓ Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Plumbing Inspections</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Home Buyer Inspection", desc: "Thorough inspection before purchasing a home. Identify hidden plumbing issues that could cost thousands to repair." },
                { title: "Pre-Sale Inspection", desc: "Prepare your home for sale. Address issues before they become negotiation points." },
                { title: "Annual Maintenance Check", desc: "Preventive inspection to catch small problems before they become major repairs." },
                { title: "Gas Line Safety Inspection", desc: "Check gas lines and connections for leaks and safety. Required for some insurance and real estate transactions." },
              ].map((type, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>

            {/* Gallery Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Inspection Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { src: "/images/professional-plumbing-services.jpg", alt: "Professional plumbing inspection" },
                { src: "/images/water-heater-repair-service.jpg", alt: "Water heater inspection" },
                { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Gas line safety testing" },
                { src: "/images/copper-pipe-repiping-service.jpg", alt: "Pipe condition inspection" },
                { src: "/images/water-heater-sediment-buildup.jpg", alt: "Water heater evaluation" },
                { src: "/images/boiler-repair-service-nj.jpg", alt: "Boiler safety inspection" },
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

            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Inspect</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Water supply lines and valves",
                  "Water heater condition and safety",
                  "Visible pipes for leaks and corrosion",
                  "Fixture operation and condition",
                  "Water pressure testing",
                  "Toilet operation and seals",
                  "Gas lines and connections",
                  "Sump pump operation",
                  "Shut-off valves functionality",
                  "Signs of water damage",
                  "Pipe materials and age",
                  "Boiler and heating system",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Get a Plumbing Inspection?</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { title: "Avoid Surprises", desc: "Know the condition of your plumbing" },
                { title: "Save Money", desc: "Catch problems before they escalate" },
                { title: "Peace of Mind", desc: "Confidence in your home's systems" },
                { title: "Negotiating Power", desc: "Leverage for home purchases" },
                { title: "Insurance Compliance", desc: "Meet insurance requirements" },
                { title: "Preventive Care", desc: "Extend life of plumbing systems" },
              ].map((benefit, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Inspection Report</h2>
            <p className="text-lg text-gray-600 mb-6">
              After your inspection, you receive a detailed written report documenting the condition of your plumbing systems, any issues found, and recommended repairs or upgrades. This report can be used for real estate transactions, insurance purposes, or planning future maintenance.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Issues We Find</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Corroded or aging pipes",
                  "Water heater near end of life",
                  "Slow leaks causing hidden damage",
                  "Improper previous repairs",
                  "Outdated pipe materials",
                  "Missing shut-off valves",
                  "Gas leaks or unsafe connections",
                  "Failed or failing sump pumps",
                ].map((issue, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700">{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">Water Leak Detection →</Link>
                <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping →</Link>
                <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 font-medium">Gas Line Services →</Link>
                <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800 font-medium">Water Heater Replacement →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule a Plumbing Inspection</h2>
          <p className="text-xl text-red-100 mb-8">Know the true condition of your plumbing.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Request Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}