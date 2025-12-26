import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Restaurant Plumbing Services | Food Service Plumber NJ",
  description: "Restaurant plumbing in East Brunswick, NJ. Grease traps, commercial sinks, dishwashers, drain cleaning, and health code compliance. Call (718) 427-4396.",
  keywords: [
    "restaurant plumbing",
    "restaurant plumber",
    "commercial kitchen plumbing",
    "food service plumbing",
    "grease trap installation",
    "commercial dishwasher installation",
  ],
};

const services = [
  "Grease trap installation & cleaning",
  "Commercial sink installation",
  "Dishwasher hookup & repair",
  "Floor drain cleaning",
  "Pre-rinse spray installation",
  "Hot water system maintenance",
  "Gas line services",
  "Drain line maintenance",
  "Health code compliance work",
  "Emergency repairs",
];

const faqs = [
  {
    question: "How often should restaurant grease traps be cleaned?",
    answer: "Most restaurants need grease trap cleaning every 1-3 months, depending on volume. Health codes typically require cleaning when grease reaches 25% of trap capacity. We offer scheduled maintenance to keep you compliant.",
  },
  {
    question: "Can you work during off-hours to avoid business disruption?",
    answer: "Yes, we routinely schedule restaurant plumbing work for early mornings, late nights, or days you're closed. We understand downtime costs you money and schedule accordingly.",
  },
  {
    question: "Do you handle health department plumbing violations?",
    answer: "Yes, we're experienced with health code requirements for food service establishments. We can correct violations quickly and provide documentation for your records and the health department.",
  },
  {
    question: "What should I do if my restaurant drain is backing up during service?",
    answer: "Call us immediately—we provide emergency service for restaurants because we know backups during service are critical. While waiting, avoid running water through the affected drains to prevent overflow.",
  },
];

export default function RestaurantPlumbingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Commercial", href: "/services/commercial" },
            { label: "Restaurant Plumbing" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Restaurant Plumbing Services</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Specialized plumbing for restaurants and food service. From grease traps to commercial dishwashers, we keep your kitchen running and health code compliant.
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

      <EmergencyBanner variant="compact" serviceName="Restaurant" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Restaurant Plumbing</h2>
            <p className="text-lg text-gray-600 mb-8">
              Restaurant plumbing faces unique challenges—heavy grease loads, high-volume water use, strict health codes, and zero tolerance for downtime during service. Our commercial team understands these demands and provides reliable service that keeps your kitchen running.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Restaurant Plumbing Services</h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* Health Code Compliance */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏥 Health Code Compliance</h3>
              <p className="text-gray-700 mb-4">
                We understand NJ health code requirements for food service establishments. Our work ensures:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Proper grease trap sizing and installation",
                  "Required air gaps and backflow prevention",
                  "Correct fixture spacing and accessibility",
                  "Adequate hot water capacity",
                  "Proper handwashing station setup",
                  "Floor drain requirements met",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Maintenance Programs */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold mb-4">Preventive Maintenance Programs</h3>
              <p className="text-gray-300 mb-4">
                The best way to avoid emergency plumbing during service is preventive maintenance. Our restaurant maintenance programs include:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Scheduled grease trap cleaning
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Drain line jetting (monthly/quarterly)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Water heater inspection and maintenance
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Priority emergency response
                </li>
              </ul>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/commercial/grease-trap" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Grease Trap Services
                </Link>
                <Link href="/services/drain-sewer/hydro-jetting" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Hydro Jetting
                </Link>
                <Link href="/services/water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Commercial Water Heaters
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

      <FAQSection title="Restaurant Plumbing FAQ" faqs={faqs} />

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

      <CTASection title="Restaurant Plumbing Needs?" description="Contact us for reliable restaurant and food service plumbing." />
    </>
  );
}