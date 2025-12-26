import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ServiceSchema from "@/components/ServiceSchema";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Plumbing Services | Business Plumbing NJ",
  description: "Commercial plumbing services in East Brunswick, NJ. Restaurant plumbing, backflow testing, boiler repair, grease traps, and commercial inspections. Call (718) 427-4396.",
  keywords: [
    "commercial plumbing",
    "commercial plumber",
    "business plumbing",
    "restaurant plumber",
    "commercial plumbing contractor",
    "commercial plumbing services",
  ],
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/commercial",
  },
};

const services = [
  {
    title: "Restaurant Plumbing",
    href: "/services/commercial/restaurant-plumbing",
    description: "Complete plumbing for restaurants and food service. Grease traps, commercial sinks, dishwashers, and code compliance.",
    icon: "🍽️",
  },
  {
    title: "Backflow Testing & Prevention",
    href: "/services/commercial/backflow-testing",
    description: "Annual backflow testing and certification. Installation and repair of backflow prevention devices.",
    icon: "🔄",
  },
  {
    title: "Commercial Boiler Services",
    href: "/services/commercial/boiler-repair",
    description: "Boiler repair, maintenance, and installation for commercial heating systems. Keep your building warm.",
    icon: "🔥",
  },
  {
    title: "Grease Trap Services",
    href: "/services/commercial/grease-trap",
    description: "Grease trap installation, cleaning, and maintenance. Stay compliant with health codes.",
    icon: "🛢️",
  },
  {
    title: "Commercial Plumbing Inspections",
    href: "/services/commercial/plumbing-inspections",
    description: "Comprehensive plumbing inspections for commercial properties. Pre-purchase and compliance inspections.",
    icon: "📋",
  },
];

const industries = [
  "Restaurants & Cafes",
  "Retail Stores",
  "Office Buildings",
  "Medical Facilities",
  "Schools & Daycares",
  "Hotels & Motels",
  "Churches & Religious Centers",
  "Warehouses & Industrial",
];

const faqs = [
  {
    question: "Do you work with property management companies?",
    answer: "Yes, we partner with property management companies throughout Central New Jersey. We offer priority service, consolidated billing, and dedicated account management for multi-property clients.",
  },
  {
    question: "Are you licensed for commercial work?",
    answer: "Yes, we're fully licensed for commercial plumbing in New Jersey. We carry the required insurance and bonding for commercial projects and can provide certificates of insurance upon request.",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer: "Yes, we offer customized maintenance contracts for commercial clients. Regular maintenance prevents costly emergencies and keeps your plumbing systems running efficiently.",
  },
  {
    question: "Can you work around our business hours?",
    answer: "Absolutely. We understand business downtime is costly. We schedule work after hours, on weekends, or during slow periods to minimize disruption to your operations.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Commercial Plumbing Services"
        serviceDescription="Professional commercial plumbing services in East Brunswick, NJ. Restaurant plumbing, backflow testing, boiler repair, grease trap services, and plumbing inspections for businesses."
        serviceUrl="/services/commercial"
        serviceImage="https://www.illyrianplumber.com/images/commercial-copper-pipe-installation.jpg"
        serviceType="Commercial Plumbing"
      />
      <section className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/commercial-copper-pipe-installation.jpg"
            alt="Commercial plumbing services in East Brunswick NJ"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Commercial" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Commercial Plumbing Services</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional plumbing for businesses of all sizes. From restaurants to office buildings, we provide reliable commercial plumbing services that minimize downtime and keep you compliant.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-lg font-medium text-sm transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-5 py-3 rounded-lg font-medium text-sm transition">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName="Commercial" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Commercial Plumbing</h2>
            <p className="text-lg text-gray-600 mb-10">
              Commercial plumbing has unique requirements—code compliance, minimal business disruption, larger systems, and specialized equipment. Our commercial team has the experience and equipment to handle projects of any scale.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex gap-4 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-red-200 transition group"
                >
                  <span className="text-3xl">{service.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-700 transition mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-red-700 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ))}
            </div>

            {/* Industries */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries We Serve</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="text-gray-700 font-medium">{industry}</span>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-900 text-white rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Why Businesses Choose Us</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { title: "24/7 Availability", desc: "Commercial emergencies don't wait for business hours" },
                  { title: "Minimal Disruption", desc: "We work around your schedule to avoid downtime" },
                  { title: "Licensed & Insured", desc: "Full commercial licensing and liability coverage" },
                  { title: "Code Compliance", desc: "We ensure all work meets commercial codes" },
                  { title: "Upfront Pricing", desc: "No surprises—get quotes before work begins" },
                  { title: "Priority Service", desc: "Contract clients get priority scheduling" },
                ].map((item, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/drain-sewer/hydro-jetting" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Commercial Hydro Jetting
                </Link>
                <Link href="/services/water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Commercial Water Heaters
                </Link>
                <Link href="/services/emergency-plumbing" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  24/7 Emergency Service
                </Link>
                <Link href="/services/drain-sewer/camera-inspection" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Sewer Camera Inspection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Commercial Plumbing FAQ" faqs={faqs} />

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Commercial Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {BUSINESS_INFO.serviceAreas.map((area, index) => (
              <Link key={index} href={`/service-areas/plumber-${area.toLowerCase().replace(/\s+/g, "-")}`} className="bg-gray-100 hover:bg-red-50 hover:text-red-700 px-4 py-2 rounded-full text-sm font-medium transition">
                {area}, NJ
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need Commercial Plumbing?" description="Contact us for professional plumbing services for your business." />
    </>
  );
}