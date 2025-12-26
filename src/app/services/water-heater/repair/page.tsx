import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Water Heater Repair | Same-Day Hot Water Heater Repair Service",
  description: "Professional water heater repair in East Brunswick, NJ. Fast diagnosis and repair for all water heater problems. No hot water? We fix tank and tankless units. Call (718) 427-4396.",
  keywords: [
    "water heater repair",
    "hot water heater repair",
    "water heater repair near me",
    "water heater not working",
    "no hot water",
    "water heater repair service",
    "fix water heater",
  ],
};

const commonProblems = [
  {
    problem: "No Hot Water",
    description: "Complete loss of hot water is often caused by a failed heating element, broken thermostat, or pilot light issues in gas units.",
    solution: "We diagnose the root cause and repair or replace the faulty component to restore your hot water quickly.",
  },
  {
    problem: "Insufficient Hot Water",
    description: "Running out of hot water too quickly can indicate sediment buildup, undersized tank, or a failing heating element.",
    solution: "We flush the tank, check components, and recommend solutions to ensure adequate hot water supply.",
  },
  {
    problem: "Water Too Hot or Cold",
    description: "Temperature inconsistencies usually point to thermostat problems or heating element issues.",
    solution: "We calibrate or replace thermostats and test heating elements to achieve consistent temperatures.",
  },
  {
    problem: "Strange Noises",
    description: "Popping, rumbling, or banging sounds often indicate sediment buildup at the bottom of the tank.",
    solution: "We drain and flush the tank to remove sediment and prevent further damage to the unit.",
  },
  {
    problem: "Leaking Water Heater",
    description: "Leaks can occur from valves, connections, or the tank itself. Tank leaks often indicate corrosion.",
    solution: "We identify the leak source and repair connections/valves, or recommend replacement if the tank is corroded.",
  },
  {
    problem: "Rusty or Discolored Water",
    description: "Rust-colored water suggests corrosion inside the tank or deteriorating anode rod.",
    solution: "We inspect the anode rod, replace if needed, and assess tank condition to prevent further corrosion.",
  },
];

const faqs = [
  {
    question: "How quickly can you repair my water heater?",
    answer: "We offer same-day water heater repair service for most calls. Our technicians arrive with fully stocked trucks to handle common repairs on the spot. For complex issues or parts that need ordering, we'll give you a clear timeline.",
  },
  {
    question: "What brands of water heaters do you repair?",
    answer: "We repair all major water heater brands including Rheem, AO Smith, Bradford White, State, Kenmore, GE, Whirlpool, and more. Whether you have a tank or tankless unit, gas or electric, we have the expertise to fix it.",
  },
  {
    question: "How much does water heater repair cost?",
    answer: "Water heater repair costs vary based on the problem and parts needed. Common repairs range from $150-$500. We provide upfront pricing before starting any work, so you know exactly what to expect. No hidden fees.",
  },
  {
    question: "Is it worth repairing an old water heater?",
    answer: "Generally, if your water heater is under 8 years old and the repair is less than 50% of replacement cost, repair makes sense. If it's older or having frequent issues, replacement may be more economical. We provide honest recommendations.",
  },
  {
    question: "Do you offer emergency water heater repair?",
    answer: "Yes! We offer 24/7 emergency water heater repair service. No hot water is an emergency, especially in cold weather. Call us anytime and we'll dispatch a technician as quickly as possible.",
  },
];

const relatedServices = [
  {
    title: "Water Heater Replacement",
    href: "/services/water-heater/replacement",
    description: "When repair isn't the best option, we provide professional water heater replacement.",
  },
  {
    title: "Tankless Water Heater",
    href: "/services/water-heater/tankless",
    description: "Consider upgrading to an energy-efficient tankless water heater.",
  },
  {
    title: "Emergency Plumbing",
    href: "/services/emergency-plumbing",
    description: "24/7 emergency plumbing services for urgent water heater and plumbing issues.",
  },
  {
    title: "Gas Line Services",
    href: "/services/emergency-plumbing/gas-leak-repair",
    description: "Gas water heater issues? We're licensed for gas line work.",
  },
];

export default function WaterHeaterRepairPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Water Heater", href: "/services/water-heater" },
            { label: "Repair" }
          ]} />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Same-Day Service Available
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Water Heater Repair Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              No hot water? Strange noises? Leaking unit? Our expert technicians quickly diagnose and repair all water heater problems. We service all brands and types, tank and tankless.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Schedule Repair
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <EmergencyBanner variant="inline" serviceName="Water Heater" />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Fast, Reliable Water Heater Repair in New Jersey
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              When your water heater stops working, you need a plumber who can diagnose the problem quickly and fix it right the first time. At Illyrian Plumber, our technicians have years of experience repairing all types of water heaters, from traditional tank units to modern tankless systems.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We arrive with fully stocked service vehicles, meaning most repairs can be completed in a single visit. Our upfront pricing means no surprises - you&apos;ll know exactly what the repair costs before we begin.
            </p>

            {/* Common Problems Grid */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Water Heater Problems We Fix</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {commonProblems.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.problem}</h4>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium text-red-700">Our Solution:</span> {item.solution}
                  </p>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-red-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us for Water Heater Repair?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Same-day repair service available",
                  "All brands and types serviced",
                  "Upfront, flat-rate pricing",
                  "Licensed, insured technicians",
                  "90-day repair warranty",
                  "Fully stocked service trucks",
                  "24/7 emergency availability",
                  "Honest repair vs replace advice",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands We Service */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Water Heater Brands We Repair</h3>
            <p className="text-gray-600 mb-4">
              Our technicians are trained to repair all major water heater brands:
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              {["Rheem", "AO Smith", "Bradford White", "State", "Kenmore", "GE", "Whirlpool", "Rinnai", "Navien", "Noritz", "Bosch"].map((brand) => (
                <span key={brand} className="bg-gray-100 px-4 py-2 rounded-full text-gray-700 font-medium">
                  {brand}
                </span>
              ))}
            </div>

            {/* Internal Links - Same Silo */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Water Heater Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-heater/replacement" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Water Heater Replacement
                </Link>
                <Link href="/services/water-heater/installation" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  New Water Heater Installation
                </Link>
                <Link href="/services/water-heater/tankless" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Tankless Water Heaters
                </Link>
                <Link href="/services/water-heater/gas-water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Gas Water Heater Repair
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Water Heater Repair FAQ"
        faqs={faqs}
      />

      {/* Related Services - Cross-Silo Links */}
      <RelatedServices
        title="Related Services"
        services={relatedServices}
      />

      {/* Service Areas */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Water Heater Repair Service Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {BUSINESS_INFO.serviceAreas.map((area, index) => (
              <Link
                key={index}
                href={`/service-areas/plumber-${area.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-gray-100 hover:bg-red-50 hover:text-red-700 px-4 py-2 rounded-full text-sm font-medium transition"
              >
                {area}, NJ
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Water Heater Repair?"
        description="Don't suffer without hot water. Call Illyrian Plumber for fast, professional water heater repair in East Brunswick and Central New Jersey."
      />
    </>
  );
}