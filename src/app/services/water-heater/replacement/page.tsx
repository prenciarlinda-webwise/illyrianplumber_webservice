import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Water Heater Replacement | Professional Installation Service",
  description: "Professional water heater replacement in East Brunswick, NJ. We remove your old unit and install a new energy-efficient water heater. Free estimates. Call (718) 427-4396.",
  keywords: [
    "water heater replacement",
    "replace water heater",
    "new water heater",
    "water heater replacement cost",
    "water heater replacement near me",
    "hot water tank replacement",
  ],
};

const signs = [
  { title: "Age Over 10 Years", desc: "Most tank water heaters last 8-12 years. If yours is older, replacement is often more economical than repair." },
  { title: "Frequent Repairs", desc: "If you're calling for repairs multiple times per year, the costs add up. A new unit offers reliability." },
  { title: "Rusty Water", desc: "Rust-colored water indicates internal corrosion that can't be repaired—only replaced." },
  { title: "Visible Rust or Corrosion", desc: "Rust on the tank itself or around connections means the unit is deteriorating." },
  { title: "Leaking Tank", desc: "A leaking tank cannot be repaired. This is a clear sign you need immediate replacement." },
  { title: "Rising Energy Bills", desc: "Older units lose efficiency. A new ENERGY STAR model can cut water heating costs significantly." },
];

const faqs = [
  {
    question: "How much does water heater replacement cost?",
    answer: "Water heater replacement costs typically range from $1,200-$3,500 for a standard tank unit installed, depending on capacity, fuel type, and installation complexity. Tankless units cost more upfront but offer long-term savings. We provide free, detailed estimates.",
  },
  {
    question: "How long does water heater replacement take?",
    answer: "Most water heater replacements are completed in 2-4 hours. We remove your old unit, install the new one, test the system, and ensure everything is working properly before we leave.",
  },
  {
    question: "What size water heater do I need?",
    answer: "Tank size depends on household size: 1-2 people (30-40 gallons), 3-4 people (40-50 gallons), 5+ people (50-80 gallons). We assess your hot water usage and recommend the right size for your needs.",
  },
  {
    question: "Should I switch from tank to tankless?",
    answer: "Tankless water heaters provide endless hot water and save energy, but cost more upfront. They're ideal for homes with high hot water demand or limited space. We can discuss the pros and cons for your situation.",
  },
  {
    question: "Do you haul away the old water heater?",
    answer: "Yes, we remove and properly dispose of your old water heater as part of our replacement service. No need to worry about the old unit.",
  },
];

export default function WaterHeaterReplacementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Water Heater", href: "/services/water-heater" },
            { label: "Replacement" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Water Heater Replacement
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Time for a new water heater? We professionally remove your old unit and install a new, energy-efficient model. Fast installation, upfront pricing, and full warranty coverage.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName="Water Heater" />

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Water Heater Replacement in New Jersey</h2>
            <p className="text-lg text-gray-600 mb-8">
              When it&apos;s time for a new water heater, Illyrian Plumber makes the process simple. We help you choose the right unit for your home, handle the complete installation, and ensure you have reliable hot water for years to come.
            </p>

            {/* Signs Grid */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Signs You Need Water Heater Replacement</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {signs.map((sign, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">{sign.title}</h4>
                  <p className="text-gray-600 text-sm">{sign.desc}</p>
                </div>
              ))}
            </div>

            {/* Process */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Replacement Process</h3>
            <div className="space-y-4 mb-12">
              {[
                { step: "1", title: "Free In-Home Estimate", desc: "We assess your current setup, discuss options, and provide a detailed quote." },
                { step: "2", title: "Help You Choose", desc: "We recommend the right size and type based on your household needs and budget." },
                { step: "3", title: "Professional Installation", desc: "Our licensed plumbers install your new water heater to code with proper permits." },
                { step: "4", title: "Old Unit Removal", desc: "We haul away and properly dispose of your old water heater." },
                { step: "5", title: "Testing & Walkthrough", desc: "We test everything and show you how to operate your new unit." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Internal Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Explore Water Heater Options</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-heater/tankless" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Tankless Water Heaters
                </Link>
                <Link href="/services/water-heater/gas-water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Gas Water Heaters
                </Link>
                <Link href="/services/water-heater/electric-water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Electric Water Heaters
                </Link>
                <Link href="/services/water-heater/repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Repair vs Replace?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Water Heater Replacement FAQ" faqs={faqs} />

      {/* Service Areas */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {BUSINESS_INFO.serviceAreas.map((area, index) => (
              <Link key={index} href={`/service-areas/plumber-${area.toLowerCase().replace(/\s+/g, "-")}`} className="bg-gray-100 hover:bg-red-50 hover:text-red-700 px-4 py-2 rounded-full text-sm font-medium transition">
                {area}, NJ
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready for a New Water Heater?" description="Get a free estimate on water heater replacement. Professional installation, quality units, and warranty included." />
    </>
  );
}