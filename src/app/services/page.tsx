import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumbing Services - 24/7 Emergency & Residential Plumber",
  description: "Professional plumbing services in East Brunswick, NJ. Water heater repair, emergency plumbing, boiler service, gas line installation. Licensed & insured. Call (347) 461-4856.",
  keywords: [
    "plumbing services East Brunswick NJ",
    "emergency plumber NJ",
    "water heater repair",
    "boiler repair NJ",
    "residential plumbing",
    "gas line installation",
  ],
};

const silos = [
  {
    id: "emergency",
    title: "Emergency Services",
    description: "24/7 emergency plumbing response. Burst pipes, water leaks, gas leaks, and more.",
    href: "/services/emergency-plumbing",
    services: [
      { name: "24/7 Emergency Plumbing", href: "/services/emergency-plumbing" },
      { name: "Water Leak Detection", href: "/services/water-leak-detection" },
      { name: "Gas Line Repair & Installation", href: "/services/gas-line-repair-installation" },
    ],
    color: "red",
  },
  {
    id: "water-heater",
    title: "Water Heater Services",
    description: "Expert water heater repair, replacement, and installation. Tank and tankless systems.",
    href: "/services/water-heater-repair",
    services: [
      { name: "Water Heater Repair", href: "/services/water-heater-repair" },
      { name: "Tankless Water Heater Installation", href: "/services/tankless-water-heater-installation" },
      { name: "Boiler Repair Service", href: "/services/boiler-repair-service" },
    ],
    color: "orange",
  },
  {
    id: "kitchen-bathroom",
    title: "Kitchen & Bathroom",
    description: "Complete plumbing for kitchens and bathrooms. Toilets, faucets, and full remodels.",
    href: "/services/bathroom-remodeling",
    services: [
      { name: "Kitchen Plumbing", href: "/services/kitchen-plumbing" },
      { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
      { name: "Toilet & Faucet Installation", href: "/services/toilet-and-faucet-installation" },
    ],
    color: "blue",
  },
  {
    id: "piping-systems",
    title: "Piping & Systems",
    description: "Whole house repiping, sump pump service, and water filtration systems.",
    href: "/services/whole-house-repiping",
    services: [
      { name: "Whole House Repiping", href: "/services/whole-house-repiping" },
      { name: "Sump Pump Repair & Install", href: "/services/sump-pump-repair-install" },
      { name: "Water Filtration System", href: "/services/water-filtration-system" },
    ],
    color: "green",
  },
  {
    id: "inspections",
    title: "Inspections & Specialty",
    description: "Plumbing safety inspections and radiant floor heating installation.",
    href: "/services/plumbing-safety-inspections",
    services: [
      { name: "Plumbing Safety Inspections", href: "/services/plumbing-safety-inspections" },
      { name: "Backflow Prevention & Testing", href: "/services/backflow-prevention-testing" },
      { name: "Radiant Heating Plumbing", href: "/services/radiant-heating-plumbing" },
    ],
    color: "purple",
  },
  {
    id: "commercial",
    title: "Commercial Plumbing",
    description: "Full-service commercial plumbing for businesses throughout Middlesex County.",
    href: "/services/commercial-plumbing",
    services: [
      { name: "Commercial Plumbing Services", href: "/services/commercial-plumbing" },
    ],
    color: "red",
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
                className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact-us"
                className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold transition"
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
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition mb-2">
                          {silo.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{silo.description}</p>
                        <span className={`inline-flex items-center ${colors.text} font-semibold`}>
                          View All →
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
                href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
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