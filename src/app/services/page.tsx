import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumbing Services | 24/7 Emergency & Residential Plumber",
  description: "Professional plumbing services in East Brunswick, NJ. Water heater repair, emergency plumbing, drain cleaning, kitchen & bathroom plumbing. Licensed & insured. Call (718) 427-4396.",
  keywords: [
    "plumbing services East Brunswick NJ",
    "emergency plumber NJ",
    "water heater repair",
    "drain cleaning services",
    "residential plumbing",
    "commercial plumbing",
  ],
};

const silos = [
  {
    id: "water-heater",
    title: "Water Heater Services",
    description: "Expert water heater repair, replacement, and installation. Tank and tankless systems.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    href: "/services/water-heater",
    services: [
      { name: "Water Heater Repair", href: "/services/water-heater/repair" },
      { name: "Water Heater Replacement", href: "/services/water-heater/replacement" },
      { name: "Tankless Water Heater", href: "/services/water-heater/tankless" },
      { name: "Water Heater Installation", href: "/services/water-heater/installation" },
      { name: "Gas Water Heater", href: "/services/water-heater/gas-water-heater" },
      { name: "Electric Water Heater", href: "/services/water-heater/electric-water-heater" },
    ],
    color: "red",
  },
  {
    id: "emergency",
    title: "Emergency & Leak Detection",
    description: "24/7 emergency plumbing response. Burst pipes, water leaks, gas leaks, and more.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    href: "/services/emergency-plumbing",
    services: [
      { name: "24/7 Emergency Plumbing", href: "/services/emergency-plumbing" },
      { name: "Burst Pipe Repair", href: "/services/emergency-plumbing/burst-pipe-repair" },
      { name: "Water Leak Detection", href: "/services/emergency-plumbing/water-leak-detection" },
      { name: "Slab Leak Detection", href: "/services/emergency-plumbing/slab-leak-detection" },
      { name: "Gas Leak Repair", href: "/services/emergency-plumbing/gas-leak-repair" },
    ],
    color: "orange",
  },
  {
    id: "kitchen-bathroom",
    title: "Kitchen & Bathroom Plumbing",
    description: "Complete plumbing for kitchens and bathrooms. Toilets, faucets, sinks, and fixtures.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    href: "/services/kitchen-bathroom",
    services: [
      { name: "Kitchen Plumbing", href: "/services/kitchen-bathroom/kitchen-plumbing" },
      { name: "Toilet Installation", href: "/services/kitchen-bathroom/toilet-installation" },
      { name: "Toilet Repair", href: "/services/kitchen-bathroom/toilet-repair" },
      { name: "Faucet Installation", href: "/services/kitchen-bathroom/faucet-installation" },
      { name: "Garbage Disposal", href: "/services/kitchen-bathroom/garbage-disposal" },
      { name: "Shower Valve Replacement", href: "/services/kitchen-bathroom/shower-valve-replacement" },
    ],
    color: "blue",
  },
  {
    id: "drain-sewer",
    title: "Drain & Sewer Services",
    description: "Drain cleaning, sewer line repair, sump pump installation and maintenance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    href: "/services/drain-sewer",
    services: [
      { name: "Drain Cleaning", href: "/services/drain-sewer/drain-cleaning" },
      { name: "Sewer Line Repair", href: "/services/drain-sewer/sewer-line-repair" },
      { name: "Sump Pump Installation", href: "/services/drain-sewer/sump-pump-installation" },
      { name: "Sump Pump Replacement", href: "/services/drain-sewer/sump-pump-replacement" },
      { name: "Trenchless Sewer Repair", href: "/services/drain-sewer/trenchless-sewer-repair" },
    ],
    color: "green",
  },
  {
    id: "commercial",
    title: "Commercial & Backflow",
    description: "Commercial plumbing services, backflow testing, and preventive maintenance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    href: "/services/commercial",
    services: [
      { name: "Commercial Plumbing", href: "/services/commercial/commercial-plumbing" },
      { name: "Backflow Testing", href: "/services/commercial/backflow-testing" },
      { name: "Plumbing Inspections", href: "/services/commercial/plumbing-inspections" },
      { name: "Boiler Repair", href: "/services/commercial/boiler-repair" },
      { name: "Maintenance Contracts", href: "/services/commercial/maintenance-contracts" },
    ],
    color: "purple",
  },
];

const colorClasses = {
  red: {
    bg: "bg-red-50",
    icon: "bg-red-100 text-red-700",
    hover: "group-hover:bg-red-700 group-hover:text-white",
    text: "text-red-700",
  },
  orange: {
    bg: "bg-orange-50",
    icon: "bg-orange-100 text-orange-700",
    hover: "group-hover:bg-orange-700 group-hover:text-white",
    text: "text-orange-700",
  },
  blue: {
    bg: "bg-blue-50",
    icon: "bg-blue-100 text-blue-700",
    hover: "group-hover:bg-blue-700 group-hover:text-white",
    text: "text-blue-700",
  },
  green: {
    bg: "bg-green-50",
    icon: "bg-green-100 text-green-700",
    hover: "group-hover:bg-green-700 group-hover:text-white",
    text: "text-green-700",
  },
  purple: {
    bg: "bg-purple-50",
    icon: "bg-purple-100 text-purple-700",
    hover: "group-hover:bg-purple-700 group-hover:text-white",
    text: "text-purple-700",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Plumbing Services in New Jersey
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              From emergency repairs to water heater installation, Illyrian Plumber provides comprehensive plumbing services for homes and businesses throughout Central New Jersey. Licensed, insured, and available 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold transition"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <EmergencyBanner variant="compact" />

      {/* Services Silos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Click on any category to explore our comprehensive plumbing solutions
            </p>
          </div>

          <div className="space-y-8">
            {silos.map((silo) => {
              const colors = colorClasses[silo.color as keyof typeof colorClasses];
              return (
                <div key={silo.id} className={`${colors.bg} rounded-2xl p-8`}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Silo Header */}
                    <div className="lg:w-1/3">
                      <Link href={silo.href} className="group block">
                        <div className={`w-16 h-16 ${colors.icon} ${colors.hover} rounded-xl flex items-center justify-center mb-4 transition-colors`}>
                          {silo.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition mb-2">
                          {silo.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{silo.description}</p>
                        <span className={`inline-flex items-center ${colors.text} font-semibold`}>
                          View All
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </Link>
                    </div>

                    {/* Services Grid */}
                    <div className="lg:w-2/3">
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {silo.services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="bg-white p-4 rounded-lg hover:shadow-md transition group border border-gray-100"
                          >
                            <span className="text-gray-700 group-hover:text-red-700 font-medium flex items-center gap-2">
                              <svg className="w-4 h-4 text-gray-400 group-hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              {service.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Illyrian Plumber?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "24/7 Emergency Service", desc: "Round-the-clock availability for urgent plumbing issues" },
              { title: "Licensed & Insured", desc: "Fully certified master plumbers with comprehensive coverage" },
              { title: "Upfront Pricing", desc: "Clear, honest quotes before any work begins" },
              { title: "Satisfaction Guaranteed", desc: "We stand behind every job with our quality guarantee" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {BUSINESS_INFO.serviceAreas.map((area, index) => (
              <Link
                key={index}
                href={`/service-areas/plumber-${area.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white hover:bg-red-50 hover:text-red-700 px-4 py-2 rounded-full text-sm font-medium transition border border-gray-200"
              >
                {area}, NJ
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Plumbing Service?"
        description="Contact us today for professional plumbing services in East Brunswick and Central New Jersey."
      />
    </>
  );
}