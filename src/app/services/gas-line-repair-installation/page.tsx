import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gas Line Repair & Installation NJ - Illyrian Group Corp",
  description: "Licensed gas line repair, installation, and safety inspections in East Brunswick, NJ. Expert gas plumbers for appliance hookups, leak repair, and new gas lines. Call (347) 461-4856.",
  keywords: [
    "gas line repair",
    "gas line installation",
    "gas leak repair",
    "gas plumber",
    "gas pipe installation",
    "gas line inspection",
  ],
};

export default function GasLineRepairPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gas Line Repair & Installation",
    description: "Licensed gas line repair, installation, and safety inspections in East Brunswick, NJ. Expert gas plumbers for appliance hookups, leak repair, and new gas lines.",
    provider: { "@type": "Plumber", "@id": "https://www.illyrianplumber.com/#organization", name: BUSINESS_INFO.name, telephone: BUSINESS_INFO.phone },
    areaServed: BUSINESS_INFO.serviceAreas.map(area => ({ "@type": "City", name: area })),
    serviceType: "Gas Line Services",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/gas-line-pressure-gauge-installation.jpg"
            alt="Gas line repair and installation service in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Licensed Gas Plumbers</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Gas Line Repair & Installation
            </h1>
            <p className="text-xl text-gray-200 mb-6 max-w-2xl">
              Professional gas line services from licensed plumbers. We handle gas leak repair, new gas line installation, appliance hookups, and safety inspections.
            </p>
            <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mb-6 max-w-2xl">
              <p className="text-red-200 font-medium">
                <strong>Smell gas?</strong> Leave immediately and call your gas company, then call us for repairs.
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
              <span>✓ Gas Leak Repair</span>
              <span>✓ Appliance Hookups</span>
              <span>✓ Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Gas Line Services</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Gas Leak Detection & Repair", desc: "Fast response to gas leaks with professional repair and safety testing" },
                { title: "New Gas Line Installation", desc: "Run new gas lines for appliances, outdoor grills, fire pits, and generators" },
                { title: "Appliance Hookup", desc: "Connect gas stoves, dryers, water heaters, fireplaces, and pool heaters" },
                { title: "Gas Line Inspection", desc: "Safety inspections for real estate transactions and peace of mind" },
                { title: "Gas Meter Upgrades", desc: "Coordinate with utility company for increased gas capacity" },
                { title: "Gas Pipe Replacement", desc: "Replace old, corroded, or undersized gas piping" },
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* Gallery Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Gas Line Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Gas line pressure testing" },
                { src: "/images/copper-pipe-repiping-service.jpg", alt: "Gas pipe installation" },
                { src: "/images/tankless-water-heater-installation.jpg", alt: "Gas appliance hookup" },
                { src: "/images/boiler-repair-service-nj.jpg", alt: "Gas boiler service" },
                { src: "/images/water-heater-repair-service.jpg", alt: "Gas water heater installation" },
                { src: "/images/professional-plumbing-services.jpg", alt: "Professional gas plumber" },
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

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs of Gas Line Problems</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Rotten egg smell (gas odor)",
                  "Hissing sound near gas lines",
                  "Dead vegetation near gas lines",
                  "Higher than normal gas bills",
                  "Appliances not working properly",
                  "Visible corrosion on gas pipes",
                ].map((sign, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700">{sign}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Licensed Gas Plumbers?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Gas work requires specialized licensing and training. NJ law requires licensed plumbers for all gas line work. Our technicians are fully licensed, insured, and experienced with residential and commercial gas systems.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { title: "Licensed & Insured", desc: "Full NJ licensing for gas work" },
                { title: "Code Compliant", desc: "All work meets local codes" },
                { title: "Safety First", desc: "Pressure testing on all jobs" },
              ].map((item, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800 font-medium">Boiler Repair →</Link>
                <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 font-medium">Tankless Installation →</Link>
                <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800 font-medium">Water Heater Repair →</Link>
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Services →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Gas Line Service?</h2>
          <p className="text-xl text-red-100 mb-8">Contact our licensed gas plumbers today.</p>
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