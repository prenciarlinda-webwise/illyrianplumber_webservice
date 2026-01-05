import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Boiler Repair Service East Brunswick NJ - Illyrian Group Corp",
  description: "Expert boiler repair, maintenance, and installation in East Brunswick, NJ. Steam and hot water boilers. Emergency service available. Call (347) 461-4856.",
  keywords: [
    "boiler repair",
    "boiler repair service",
    "boiler repair near me",
    "steam boiler repair",
    "hot water boiler repair",
    "boiler maintenance",
  ],
};

export default function BoilerRepairPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Boiler Repair Service",
    description: "Expert boiler repair, maintenance, and installation in East Brunswick, NJ. Steam and hot water boilers. Emergency service available.",
    provider: { "@type": "Plumber", "@id": "https://www.illyrianplumber.com/#organization", name: BUSINESS_INFO.name, telephone: BUSINESS_INFO.phone },
    areaServed: BUSINESS_INFO.serviceAreas.map(area => ({ "@type": "City", name: area })),
    serviceType: "Boiler Repair",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/boiler-repair-service-nj.jpg"
            alt="Boiler repair service in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Heating Specialists</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Boiler Repair Service
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Expert boiler repair, maintenance, and installation for New Jersey homes and businesses. We service all types of steam and hot water boilers with fast, reliable service.
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
              <span>✓ Steam & Hot Water Boilers</span>
              <span>✓ All Major Brands</span>
              <span>✓ Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Boiler Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              From emergency repairs to annual maintenance, we keep your boiler running efficiently all winter. Our licensed technicians service all major boiler brands and types.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Boiler Repair", desc: "Fast diagnosis and repair for all boiler issues" },
                { title: "Boiler Maintenance", desc: "Annual tune-ups to prevent breakdowns" },
                { title: "Boiler Installation", desc: "New boiler installation and replacement" },
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* Gallery Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Boiler Repair Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { src: "/images/boiler-repair-service-nj.jpg", alt: "Boiler repair service" },
                { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Boiler pressure gauge service" },
                { src: "/images/copper-pipe-repiping-service.jpg", alt: "Boiler pipe connections" },
                { src: "/images/water-heater-maintenance-parts.jpg", alt: "Boiler parts and maintenance" },
                { src: "/images/tankless-water-heater-installation.jpg", alt: "Heating system installation" },
                { src: "/images/professional-plumbing-services.jpg", alt: "Professional plumbing service" },
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

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Boiler Problems We Fix</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "No heat or insufficient heat",
                "Boiler not firing",
                "Strange noises (banging, whistling)",
                "Water leaks around boiler",
                "Pilot light issues",
                "Pressure problems",
                "Thermostat malfunctions",
                "Radiator not heating",
              ].map((problem, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Boiler Types We Service</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Steam Boilers</h3>
                <p className="text-gray-600">Traditional steam heating systems common in older NJ homes. We repair and maintain cast iron radiator systems.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hot Water Boilers</h3>
                <p className="text-gray-600">Hydronic heating systems using circulating hot water. More efficient and quieter than steam systems.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/radiant-heating-plumbing" className="text-red-700 hover:text-red-800 font-medium">Radiant Heating →</Link>
                <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 font-medium">Gas Line Services →</Link>
                <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800 font-medium">Water Heater Repair →</Link>
                <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Boiler Not Working?</h2>
          <p className="text-xl text-red-100 mb-8">Get fast, expert boiler repair service today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Request Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}