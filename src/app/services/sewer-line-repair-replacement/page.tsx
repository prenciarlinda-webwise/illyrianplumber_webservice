import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sewer Line Repair & Replacement NJ - Illyrian Group Corp",
  description: "Professional sewer line repair and trenchless replacement in East Brunswick, NJ. We specialize in structural repairs, not cleaning. Licensed plumbers. Call (347) 461-4856.",
  keywords: [
    "sewer line repair",
    "sewer line replacement",
    "trenchless sewer repair",
    "sewer pipe repair",
    "sewer line repair cost",
  ],
};

export default function SewerLineRepairPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/copper-pipe-repiping-service.jpg"
            alt="Sewer line repair and replacement in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Structural Repair Specialists</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sewer Line Repair & Replacement
            </h1>
            <p className="text-xl text-gray-200 mb-6 max-w-2xl">
              Expert structural sewer line repair and trenchless replacement. We fix broken, collapsed, and damaged sewer lines permanently. No quick fixes - just lasting solutions.
            </p>
            <div className="bg-amber-900/50 border border-amber-600 rounded-lg p-4 mb-6 max-w-2xl">
              <p className="text-amber-200">
                <strong>Note:</strong> We specialize in permanent structural repairs. We do not offer sewer cleaning or snaking services.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
              </a>
              <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span>✓ Trenchless Repairs</span>
              <span>✓ Permanent Solutions</span>
              <span>✓ Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">When You Need Sewer Line Repair</h2>
            <p className="text-lg text-gray-600 mb-8">
              Sewer line damage requires professional structural repair - not temporary fixes. Our team specializes in diagnosing and permanently repairing damaged sewer lines.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Causes of Sewer Line Damage</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Tree Root Intrusion", desc: "Roots seek water sources and can crush or penetrate sewer pipes" },
                { title: "Pipe Corrosion", desc: "Older cast iron and clay pipes corrode and deteriorate over time" },
                { title: "Ground Shifting", desc: "Soil movement, settling, or frost heave can crack or offset pipes" },
                { title: "Pipe Collapse", desc: "Structural failure from age, pressure, or external damage" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Repair Methods</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Trenchless Pipe Lining (CIPP)</h3>
                <p className="text-gray-600 mb-4">
                  We install a new pipe inside your existing damaged pipe using cured-in-place technology. Minimal excavation required - preserves your landscaping.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>No major digging required</li>
                  <li>50+ year lifespan</li>
                  <li>Completed in 1-2 days</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pipe Bursting</h3>
                <p className="text-gray-600 mb-4">
                  For severely damaged pipes, we pull a new pipe through while breaking apart the old one. Ideal for collapsed or heavily corroded lines.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Replaces entire pipe</li>
                  <li>Can upsize pipe diameter</li>
                  <li>Minimal surface disruption</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Traditional Excavation</h3>
                <p className="text-gray-600 mb-4">
                  When trenchless methods are not suitable, we perform precise excavation to access and replace damaged sections.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Complete access to damage</li>
                  <li>Spot repairs available</li>
                  <li>Full line replacement option</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">Water Leak Detection →</Link>
                <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping →</Link>
                <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections →</Link>
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Services →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Sewer Line Repair?</h2>
          <p className="text-xl text-red-100 mb-8">Contact us for a professional assessment and repair quote.</p>
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