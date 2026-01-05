import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Water Heater Repair East Brunswick NJ - Illyrian Group Corp",
  description: "Same-day water heater repair in East Brunswick, NJ. Gas and electric water heaters. No hot water? We fix it fast. Call (347) 461-4856.",
  keywords: [
    "water heater repair",
    "water heater repair near me",
    "hot water heater repair",
    "water heater not working",
    "no hot water",
    "water heater service",
  ],
};

export default function WaterHeaterRepairPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Water Heater Repair",
    description: "Same-day water heater repair in East Brunswick, NJ. Gas and electric water heaters. No hot water? We fix it fast.",
    provider: {
      "@type": "Plumber",
      "@id": "https://www.illyrianplumber.com/#organization",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
    },
    areaServed: BUSINESS_INFO.serviceAreas.map(area => ({ "@type": "City", name: area })),
    serviceType: "Water Heater Repair",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/water-heater-repair-service.jpg"
            alt="Water heater repair service in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Same-Day Service Available</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Water Heater Repair
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Same-day water heater repair for all brands and types. No hot water? Strange noises? Leaking tank? Our licensed plumbers diagnose and fix the problem fast.
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
              <span>✓ All Brands Serviced</span>
              <span>✓ Gas & Electric</span>
              <span>✓ Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Water Heater Problems We Fix</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { problem: "No Hot Water", desc: "Complete loss of hot water from gas or electric units" },
                { problem: "Not Enough Hot Water", desc: "Running out of hot water too quickly" },
                { problem: "Water Too Hot", desc: "Scalding water or inconsistent temperatures" },
                { problem: "Strange Noises", desc: "Popping, rumbling, or banging sounds" },
                { problem: "Rusty or Smelly Water", desc: "Discolored water or rotten egg smell" },
                { problem: "Leaking Tank", desc: "Water pooling around the base of unit" },
                { problem: "Pilot Light Issues", desc: "Pilot won't stay lit or igniter problems" },
                { problem: "Thermostat Problems", desc: "Temperature control not working properly" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">{item.problem}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Water Heaters We Repair</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gas Water Heaters</h3>
                <p className="text-gray-600 mb-4">Tank and tankless gas water heaters. Pilot light repair, thermocouple replacement, burner service.</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Pilot light and igniter repair</li>
                  <li>• Thermocouple replacement</li>
                  <li>• Gas valve service</li>
                  <li>• Burner cleaning and repair</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electric Water Heaters</h3>
                <p className="text-gray-600 mb-4">Element replacement, thermostat repair, and electrical troubleshooting for all electric units.</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Heating element replacement</li>
                  <li>• Thermostat repair</li>
                  <li>• Electrical connections</li>
                  <li>• Reset button issues</li>
                </ul>
              </div>
            </div>

            {/* Gallery Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Water Heater Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { src: "/images/water-heater-repair-near-me.jpg", alt: "Water heater repair service" },
                { src: "/images/water-heater-sediment-buildup.jpg", alt: "Water heater maintenance" },
                { src: "/images/water-heater-maintenance-parts.jpg", alt: "Water heater parts and service" },
                { src: "/images/tankless-water-heater-installation.jpg", alt: "Tankless water heater" },
                { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Gas line service for water heaters" },
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

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Repair vs Replace?</h2>
            <p className="text-lg text-gray-600 mb-6">
              We give you honest advice. If your water heater is over 10-12 years old or repair costs exceed 50% of replacement cost, we may recommend a new unit. We&apos;ll explain all your options so you can make the best decision for your home and budget.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-12">
              <h3 className="font-bold text-gray-900 mb-2">Consider Replacement If:</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Water heater is over 10-12 years old</li>
                <li>• Repair costs exceed 50% of new unit price</li>
                <li>• Tank is leaking or corroded</li>
                <li>• Frequent repairs needed</li>
                <li>• Energy bills are unusually high</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800 font-medium">Water Heater Replacement →</Link>
                <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 font-medium">Tankless Installation →</Link>
                <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 font-medium">Gas Line Services →</Link>
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Services →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">No Hot Water?</h2>
          <p className="text-xl text-red-100 mb-8">Get same-day water heater repair from licensed plumbers.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Call {BUSINESS_INFO.phone2}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
