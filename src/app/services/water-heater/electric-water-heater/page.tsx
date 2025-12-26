import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Electric Water Heater Repair & Installation | NJ Plumber",
  description: "Electric water heater repair, installation, and replacement in East Brunswick, NJ. Element replacement, thermostat repair, and new installations. Call (718) 427-4396.",
  keywords: [
    "electric water heater",
    "electric water heater repair",
    "electric hot water heater",
    "electric water heater installation",
    "electric water heater replacement",
    "water heater element replacement",
  ],
};

const problems = [
  { problem: "No Hot Water", cause: "Failed heating element or tripped breaker", solution: "We test elements and electrical connections, replacing faulty components." },
  { problem: "Not Enough Hot Water", cause: "Undersized unit, sediment buildup, or failing element", solution: "We diagnose the cause and repair or recommend appropriate sizing." },
  { problem: "Water Too Hot", cause: "Thermostat set too high or malfunctioning", solution: "We calibrate or replace thermostats for safe, consistent temperatures." },
  { problem: "Slow Recovery", cause: "Failing heating element or heavy sediment", solution: "Element replacement and tank flushing restore heating capacity." },
  { problem: "Leaking Tank", cause: "Corrosion or failed seals", solution: "Tank leaks usually require replacement. We provide fast installation." },
  { problem: "Rusty Water", cause: "Anode rod depleted, tank corrosion beginning", solution: "We replace anode rods to extend tank life or recommend replacement." },
];

const faqs = [
  {
    question: "How long do electric water heaters last?",
    answer: "Electric water heaters typically last 10-15 years with proper maintenance. Factors like water quality, usage, and regular maintenance affect lifespan. Annual flushing and anode rod checks can extend life.",
  },
  {
    question: "Why is my electric water heater not heating?",
    answer: "Common causes include: tripped circuit breaker, failed heating element, malfunctioning thermostat, or electrical connection issues. Our technicians diagnose and repair all electrical water heater problems.",
  },
  {
    question: "Can I replace a water heater element myself?",
    answer: "While possible for experienced DIYers, we recommend professional service. Working with electricity and water is dangerous. Improper installation can cause electrical shock, leaks, or void warranties.",
  },
  {
    question: "Electric vs gas water heater - which should I choose?",
    answer: "Electric water heaters are easier to install, don't require venting, and are safer (no gas). Gas heaters cost less to operate and heat water faster. Your choice depends on your home's setup and energy costs.",
  },
];

export default function ElectricWaterHeaterPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Water Heater", href: "/services/water-heater" },
            { label: "Electric Water Heater" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Electric Water Heater Services</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional electric water heater repair, installation, and replacement. From element replacements to complete system installations, we keep your hot water flowing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName="Electric Water Heater" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Electric Water Heater Experts</h2>
            <p className="text-lg text-gray-600 mb-8">
              Electric water heaters are reliable, easy to maintain, and don&apos;t require gas lines or venting. When problems arise, our technicians quickly diagnose and repair issues to restore your hot water.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Electric Water Heater Problems</h3>
            <div className="space-y-4 mb-12">
              {problems.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/4">
                      <h4 className="font-semibold text-gray-900">{item.problem}</h4>
                    </div>
                    <div className="md:w-1/3">
                      <p className="text-gray-600 text-sm"><span className="font-medium">Cause:</span> {item.cause}</p>
                    </div>
                    <div className="md:w-5/12">
                      <p className="text-gray-700 text-sm"><span className="font-medium text-red-700">Solution:</span> {item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Electric Water Heater Services</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "Heating element replacement",
                "Thermostat repair & replacement",
                "Electrical connection repair",
                "Tank flushing & maintenance",
                "Anode rod replacement",
                "Complete unit replacement",
                "New installation",
                "Upgrade to larger capacity",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* Internal Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compare Your Options</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-heater/gas-water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Gas Water Heaters
                </Link>
                <Link href="/services/water-heater/tankless" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Tankless Water Heaters
                </Link>
                <Link href="/services/water-heater/repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Heater Repair
                </Link>
                <Link href="/services/water-heater/replacement" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Heater Replacement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Electric Water Heater FAQ" faqs={faqs} />

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

      <CTASection title="Electric Water Heater Problems?" description="Contact us for fast, professional electric water heater repair and installation." />
    </>
  );
}