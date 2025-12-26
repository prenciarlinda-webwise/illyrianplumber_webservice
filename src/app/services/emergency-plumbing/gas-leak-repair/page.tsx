import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gas Leak Repair | 24/7 Emergency Gas Plumber",
  description: "Emergency gas leak repair in East Brunswick, NJ. Licensed gas plumbers available 24/7. Gas leak detection and repair. Your safety first. Call (718) 427-4396.",
  keywords: [
    "gas leak repair",
    "gas leak plumber",
    "gas leak detection",
    "gas line repair",
    "emergency gas plumber",
    "gas leak repair near me",
  ],
};

const warningSign = [
  "Rotten egg or sulfur smell",
  "Hissing or whistling sounds near gas lines",
  "Dead or dying plants near gas lines",
  "Visible damage to gas connections",
  "Higher than normal gas bills",
  "Physical symptoms (headaches, dizziness, nausea)",
];

const faqs = [
  {
    question: "What should I do if I smell gas?",
    answer: "If you smell gas: 1) Leave the building immediately. 2) Don't operate any electrical switches or create sparks. 3) Don't use your phone inside. 4) Call your gas company's emergency line from outside. 5) Call us for repair once the area is deemed safe.",
  },
  {
    question: "Can you detect small gas leaks?",
    answer: "Yes, we use professional gas detection equipment that can identify even small leaks that may not produce a noticeable odor. Regular gas line inspections can catch problems before they become dangerous.",
  },
  {
    question: "How much does gas leak repair cost?",
    answer: "Gas leak repair costs vary based on location and severity. Simple connection repairs may cost $150-$400, while gas line replacement is more extensive. We provide upfront pricing after diagnosis.",
  },
  {
    question: "Are your plumbers licensed for gas work?",
    answer: "Yes, our technicians are fully licensed and certified for gas work in New Jersey. Gas appliance and line work requires specialized licensing, and we maintain all required certifications.",
  },
];

export default function GasLeakRepairPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-orange-900 via-red-900 to-red-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Emergency Plumbing", href: "/services/emergency-plumbing" },
            { label: "Gas Leak Repair" }
          ]} />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Safety Critical Service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gas Leak Repair</h1>
            <p className="text-xl text-red-100 mb-8 max-w-2xl">
              Gas leaks are extremely dangerous. Our licensed gas plumbers provide 24/7 emergency response for gas leak detection and repair. Your safety is our top priority.
            </p>
            <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-red-700 px-10 py-5 rounded-lg font-bold text-xl transition shadow-lg">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              CALL NOW: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Critical Warning */}
      <section className="bg-red-700 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <svg className="w-12 h-12 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div className="text-white">
              <h2 className="font-bold text-lg">SMELL GAS? LEAVE IMMEDIATELY!</h2>
              <p className="text-red-100">Do not operate switches, use phones inside, or create any sparks. Exit the building and call your gas company, then call us.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Licensed Gas Leak Repair Experts</h2>
            <p className="text-lg text-gray-600 mb-8">
              Gas leaks pose serious risks including fire, explosion, and carbon monoxide poisoning. Our licensed gas plumbers respond quickly to detect and repair gas leaks safely, following all safety protocols and code requirements.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Warning Signs of a Gas Leak</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-12">
              {warningSign.map((sign, index) => (
                <div key={index} className="flex items-center gap-3 bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <svg className="w-5 h-5 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Gas Services</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Emergency gas leak repair",
                "Gas leak detection",
                "Gas line repair",
                "Gas line replacement",
                "Gas appliance connections",
                "Gas shutoff valve installation",
                "Gas pressure testing",
                "Gas safety inspections",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-heater/gas-water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Gas Water Heater Services
                </Link>
                <Link href="/services/commercial/boiler-repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Boiler Services
                </Link>
                <Link href="/services/emergency-plumbing" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  All Emergency Services
                </Link>
                <Link href="/services/commercial/plumbing-inspections" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Safety Inspections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Gas Leak Repair FAQ" faqs={faqs} />

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

      <CTASection title="Gas Emergency? Call Now!" description="Licensed gas plumbers available 24/7 for emergency gas leak detection and repair." />
    </>
  );
}