import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Water Filtration System Installation NJ - Illyrian Group Corp",
  description: "Professional water filtration system installation in East Brunswick, NJ. Whole house filters, water softeners, and reverse osmosis systems. Call (347) 461-4856.",
  keywords: [
    "water filtration system",
    "whole house water filter",
    "water softener installation",
    "reverse osmosis system",
    "water treatment",
    "water purification",
  ],
};

export default function WaterFiltrationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Water Filtration System Installation",
    description: "Professional water filtration system installation in East Brunswick, NJ. Whole house filters, water softeners, and reverse osmosis systems.",
    provider: { "@type": "Plumber", "@id": "https://www.illyrianplumber.com/#organization", name: BUSINESS_INFO.name, telephone: BUSINESS_INFO.phone },
    areaServed: BUSINESS_INFO.serviceAreas.map(area => ({ "@type": "City", name: area })),
    serviceType: "Water Filtration",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/water-heater-repair-service.jpg"
            alt="Water filtration system installation in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Clean Water Solutions</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Water Filtration Systems
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Clean, safe water for your entire home. We install whole house water filtration systems, water softeners, and reverse osmosis systems to improve your water quality.
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
              <span>✓ Whole House Filters</span>
              <span>✓ Water Softeners</span>
              <span>✓ Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs You Need Water Treatment</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Hard water stains and scale",
                "Chlorine taste or smell",
                "Rusty or discolored water",
                "Dry skin and hair",
                "Spots on dishes after washing",
                "Appliances wearing out faster",
                "Concerns about contaminants",
                "Well water quality issues",
              ].map((sign, index) => (
                <div key={index} className="flex items-center gap-3 bg-blue-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Water Treatment Solutions</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Whole House Water Filtration</h3>
                <p className="text-gray-600 mb-3">Filters all water entering your home. Removes sediment, chlorine, and contaminants from every tap, shower, and appliance.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Sediment removal</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Chlorine reduction</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Better tasting water</span>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Water Softeners</h3>
                <p className="text-gray-600 mb-3">Removes calcium and magnesium that cause hard water. Protects pipes, water heaters, and appliances. Softer skin and hair.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Eliminates scale</span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Extends appliance life</span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Less soap needed</span>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reverse Osmosis Systems</h3>
                <p className="text-gray-600 mb-3">Point-of-use filtration for drinking water. Removes up to 99% of contaminants including lead, fluoride, and dissolved solids.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Purest drinking water</span>
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Under-sink installation</span>
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Dedicated faucet</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Water Treatment</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { title: "Healthier Water", desc: "Remove contaminants and impurities" },
                { title: "Better Taste", desc: "No chlorine or metallic taste" },
                { title: "Protect Plumbing", desc: "Reduce scale buildup in pipes" },
                { title: "Extend Appliance Life", desc: "Water heaters last longer" },
                { title: "Softer Skin & Hair", desc: "No hard water dryness" },
                { title: "Save Money", desc: "No more bottled water" },
              ].map((benefit, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping →</Link>
                <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800 font-medium">Water Heater Replacement →</Link>
                <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections →</Link>
                <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 font-medium">Tankless Water Heaters →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Improve Your Water Quality</h2>
          <p className="text-xl text-red-100 mb-8">Schedule a free water quality consultation.</p>
          <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block">
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}