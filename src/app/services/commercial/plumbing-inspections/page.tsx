import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Plumbing Inspections | Property Inspections NJ",
  description: "Commercial plumbing inspections in East Brunswick, NJ. Pre-purchase, compliance, and preventive inspections. Protect your investment. Call (718) 427-4396.",
  keywords: [
    "commercial plumbing inspection",
    "plumbing inspection",
    "property plumbing inspection",
    "pre-purchase plumbing inspection",
    "building plumbing inspection",
    "plumbing compliance inspection",
  ],
};

const inspectionTypes = [
  { type: "Pre-Purchase Inspection", desc: "Complete plumbing assessment before buying commercial property. Know the condition and potential costs before you invest.", purpose: "Property buyers" },
  { type: "Annual Compliance Inspection", desc: "Verify all plumbing systems meet current codes and safety requirements. Documentation for insurance and regulatory needs.", purpose: "Property owners/managers" },
  { type: "Preventive Maintenance Inspection", desc: "Identify potential problems before they become emergencies. Plan and budget for needed repairs.", purpose: "Facility managers" },
  { type: "Tenant Improvement Inspection", desc: "Assess plumbing capacity and condition before remodeling or changing tenants with different needs.", purpose: "Building owners, tenants" },
];

const includes = [
  "Water supply system evaluation",
  "Drainage and waste system check",
  "Fixture condition assessment",
  "Water heater inspection",
  "Backflow device verification",
  "Sewer line camera inspection",
  "Water pressure testing",
  "Gas line inspection (if applicable)",
  "Code compliance review",
  "Written report with findings",
];

const faqs = [
  {
    question: "What does a commercial plumbing inspection include?",
    answer: "Our inspections cover all plumbing systems: water supply lines, drainage, fixtures, water heaters, backflow devices, and sewer lines. We provide a detailed written report with findings, photos, and recommendations.",
  },
  {
    question: "How long does a commercial plumbing inspection take?",
    answer: "Inspection time depends on building size and complexity. Small commercial spaces take 1-2 hours, larger buildings 3-4 hours or more. We schedule efficiently and provide a time estimate upfront.",
  },
  {
    question: "Should I get a plumbing inspection before buying commercial property?",
    answer: "Absolutely. Plumbing problems can cost thousands to tens of thousands to repair. A pre-purchase inspection reveals issues that may affect your purchase decision or allow you to negotiate repairs or price adjustments.",
  },
  {
    question: "Do you provide inspection reports for insurance or compliance?",
    answer: "Yes, we provide detailed written reports suitable for insurance requirements, regulatory compliance, or real estate transactions. Reports include findings, photos, and professional recommendations.",
  },
];

export default function PlumbingInspectionsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Commercial", href: "/services/commercial" },
            { label: "Plumbing Inspections" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Commercial Plumbing Inspections</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Comprehensive plumbing inspections for commercial properties. Pre-purchase assessments, compliance inspections, and preventive evaluations to protect your investment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                Schedule Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="inline" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Plumbing Inspections</h2>
            <p className="text-lg text-gray-600 mb-8">
              Plumbing problems in commercial properties can be expensive and disruptive. Whether you&apos;re buying a building, ensuring compliance, or planning preventive maintenance, a professional inspection gives you the information you need to make informed decisions.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Types of Inspections</h3>
            <div className="space-y-4 mb-12">
              {inspectionTypes.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/4">
                      <h4 className="font-semibold text-gray-900">{item.type}</h4>
                      <span className="text-xs text-red-700 font-medium">For: {item.purpose}</span>
                    </div>
                    <div className="md:w-3/4">
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Our Inspections Cover</h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              {includes.map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Why Inspect */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🔍 Why Get a Commercial Plumbing Inspection?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Avoid Costly Surprises", desc: "Discover problems before they become emergencies" },
                  { title: "Negotiate Better Deals", desc: "Use findings to negotiate purchase price or repairs" },
                  { title: "Plan Maintenance Budget", desc: "Know what repairs are coming and budget accordingly" },
                  { title: "Ensure Code Compliance", desc: "Verify all systems meet current requirements" },
                  { title: "Protect Tenants", desc: "Ensure safe, reliable plumbing for building occupants" },
                  { title: "Documentation", desc: "Written reports for insurance, compliance, or transactions" },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/drain-sewer/camera-inspection" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Sewer Camera Inspection
                </Link>
                <Link href="/services/commercial/backflow-testing" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Backflow Testing
                </Link>
                <Link href="/services/commercial" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Commercial Plumbing
                </Link>
                <Link href="/services/emergency-plumbing/gas-leak-repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Gas Safety Inspection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Plumbing Inspection FAQ" faqs={faqs} />

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

      <CTASection title="Need a Plumbing Inspection?" description="Contact us for comprehensive commercial plumbing inspections." />
    </>
  );
}
