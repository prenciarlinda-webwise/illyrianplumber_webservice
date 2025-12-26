import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Boiler Repair & Service | Boiler Plumber NJ",
  description: "Commercial boiler repair and maintenance in East Brunswick, NJ. Boiler installation, repair, and emergency service. Keep your building warm. Call (718) 427-4396.",
  keywords: [
    "boiler repair",
    "commercial boiler",
    "boiler service",
    "boiler maintenance",
    "boiler installation",
    "boiler plumber",
    "boiler heating",
  ],
};

const problems = [
  { problem: "No Heat", cause: "Pilot light, thermostat, ignition, or circulation issue", solution: "We diagnose and repair the cause to restore heat." },
  { problem: "Strange Noises", cause: "Air in system, low water, pump failure, or scale buildup", solution: "We bleed air, check water levels, and address component issues." },
  { problem: "Water Leaks", cause: "Failed seals, corroded pipes, or pressure relief valve", solution: "We repair leaks and replace worn components." },
  { problem: "Pressure Problems", cause: "Expansion tank failure, water loss, or valve issues", solution: "We diagnose pressure issues and make needed repairs." },
  { problem: "Short Cycling", cause: "Thermostat issues, oversized boiler, or circulation problems", solution: "We identify the cause and correct the cycling issue." },
  { problem: "Pilot/Ignition Failure", cause: "Thermocouple, gas valve, or ignition system failure", solution: "We repair or replace ignition components." },
];

const faqs = [
  {
    question: "Do you provide 24/7 emergency boiler service?",
    answer: "Yes, we offer 24/7 emergency service for commercial boiler failures. In cold weather, heating failures are critical—we respond quickly to get your building warm again.",
  },
  {
    question: "How often should commercial boilers be serviced?",
    answer: "We recommend annual maintenance for commercial boilers, typically before heating season. Regular maintenance prevents breakdowns, improves efficiency, and extends equipment life. We offer maintenance contracts for scheduled service.",
  },
  {
    question: "Can you work on all boiler brands?",
    answer: "Yes, our technicians are trained on all major commercial boiler brands including Weil-McLain, Burnham, Lochinvar, Buderus, and others. We also work on older boilers that may need parts sourcing.",
  },
  {
    question: "How do I know if my boiler needs replacement?",
    answer: "Consider replacement if your boiler is 20+ years old, requires frequent repairs, has visible corrosion, or is significantly inefficient. We can assess your boiler and provide honest recommendations.",
  },
];

export default function BoilerRepairPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Commercial", href: "/services/commercial" },
            { label: "Boiler Repair" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Commercial Boiler Services</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional boiler repair, maintenance, and installation for commercial heating systems. Keep your building warm with reliable boiler service.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName="Boiler" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Commercial Boiler Service</h2>
            <p className="text-lg text-gray-600 mb-8">
              When your commercial boiler fails, your building loses heat—and in New Jersey winters, that&apos;s an emergency. Our technicians are experienced with all types of commercial boiler systems and can diagnose and repair problems quickly.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Boiler Problems</h3>
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

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Boiler Services</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "Boiler repair",
                "Boiler installation",
                "Boiler replacement",
                "Annual maintenance",
                "Emergency service",
                "Efficiency upgrades",
                "Circulator pump repair",
                "Expansion tank replacement",
                "Zone valve repair",
                "Combustion analysis",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* Maintenance */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🔧 Annual Boiler Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Annual maintenance is the best way to prevent mid-winter breakdowns. Our maintenance includes:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Combustion analysis and adjustment",
                  "Heat exchanger inspection",
                  "Controls and safety check",
                  "Water treatment evaluation",
                  "Circulator pump inspection",
                  "Expansion tank check",
                  "Flue and venting inspection",
                  "System pressure verification",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Heater Services
                </Link>
                <Link href="/services/emergency-plumbing/gas-leak-repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Gas Leak Repair
                </Link>
                <Link href="/services/commercial" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Commercial Plumbing
                </Link>
                <Link href="/services/emergency-plumbing" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Emergency Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Commercial Boiler FAQ" faqs={faqs} />

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

      <CTASection title="Boiler Problems?" description="Contact us for commercial boiler repair and maintenance." />
    </>
  );
}