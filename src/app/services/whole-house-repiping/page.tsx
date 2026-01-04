import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Whole House Repiping NJ - Illyrian Group Corp",
  description: "Complete home repiping services in East Brunswick, NJ. Replace old, corroded pipes with modern materials. Expert installation, minimal disruption. Call (347) 461-4856.",
  keywords: [
    "whole house repiping",
    "home repiping",
    "repiping cost",
    "pipe replacement",
    "repipe house",
    "repiping service",
  ],
};

export default function WholeHouseRepipingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/copper-pipe-repiping-service.jpg"
            alt="Whole house repiping service in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Complete Pipe Replacement</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Whole House Repiping
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Complete home repiping for older homes, renovations, and pipe failure. We replace deteriorating pipes with modern, long-lasting materials for decades of reliable service.
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
              <span>✓ PEX & Copper Options</span>
              <span>✓ Minimal Disruption</span>
              <span>✓ Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs You Need Repiping</h2>
            <p className="text-lg text-gray-600 mb-8">
              Older homes with galvanized steel, polybutylene, or deteriorating pipes often need complete repiping. Here are the warning signs:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Rusty or discolored water",
                "Low water pressure throughout home",
                "Frequent pipe leaks",
                "Visible corrosion on pipes",
                "Home built before 1970",
                "Polybutylene (gray plastic) pipes",
                "Lead pipes or lead solder",
                "Planning a major renovation",
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Repiping Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { src: "/images/copper-pipe-repiping-service.jpg", alt: "Copper pipe repiping" },
                { src: "/images/water-heater-repair-service.jpg", alt: "Water line connections" },
                { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Pipe pressure testing" },
                { src: "/images/water-heater-maintenance-parts.jpg", alt: "Plumbing parts installation" },
                { src: "/images/tankless-water-heater-installation.jpg", alt: "Water heater pipe connections" },
                { src: "/images/professional-plumbing-services.jpg", alt: "Professional plumbing work" },
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

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Repiping Process</h2>
            <div className="space-y-4 mb-12">
              {[
                { step: "1", title: "Inspection & Planning", desc: "We assess your current plumbing, map out the new system, and provide a detailed quote." },
                { step: "2", title: "Preparation", desc: "Protect your home with drop cloths and dust barriers. We work clean." },
                { step: "3", title: "Pipe Installation", desc: "Install new supply lines using modern materials with minimal wall opening." },
                { step: "4", title: "Connection & Testing", desc: "Connect fixtures, pressure test system, and check for any issues." },
                { step: "5", title: "Cleanup & Inspection", desc: "Patch access holes, clean up, and arrange final inspection if required." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                  <div className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pipe Materials We Use</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">PEX Piping</h3>
                <p className="text-gray-600 mb-3">Flexible, durable, and cost-effective. Resists corrosion and scale buildup. 25+ year warranty.</p>
                <p className="text-sm text-blue-700">Most popular choice for repiping</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Copper Piping</h3>
                <p className="text-gray-600 mb-3">Traditional, proven material. Excellent for hot water. 50+ year lifespan when properly installed.</p>
                <p className="text-sm text-gray-500">Premium option, higher cost</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">Water Leak Detection →</Link>
                <Link href="/services/sewer-line-repair-replacement" className="text-red-700 hover:text-red-800 font-medium">Sewer Line Repair →</Link>
                <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800 font-medium">Bathroom Remodeling →</Link>
                <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Repipe Your Home?</h2>
          <p className="text-xl text-red-100 mb-8">Get a free repiping assessment and quote.</p>
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