import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Burst Pipe Repair | 24/7 Emergency Pipe Repair Service",
  description: "Emergency burst pipe repair in East Brunswick, NJ. Fast response to stop water damage. Pipe repair and repiping services. Available 24/7. Call (718) 427-4396.",
  keywords: [
    "burst pipe repair",
    "broken pipe repair",
    "emergency pipe repair",
    "pipe burst",
    "water pipe repair",
    "burst pipe plumber",
  ],
};

const faqs = [
  {
    question: "What should I do if a pipe bursts?",
    answer: "1) Shut off the main water valve immediately. 2) Turn off electricity if water is near outlets. 3) Open faucets to drain remaining water. 4) Call us for emergency service. 5) Start removing water if safe to do so.",
  },
  {
    question: "How quickly can you respond to a burst pipe?",
    answer: "We prioritize burst pipe emergencies and typically arrive within 30-60 minutes. Time is critical with water damage, so we dispatch immediately when you call.",
  },
  {
    question: "How much does burst pipe repair cost?",
    answer: "Burst pipe repair costs vary based on pipe location, material, and extent of damage. Emergency repairs typically range from $200-$1,000. We provide upfront pricing before starting work.",
  },
  {
    question: "What causes pipes to burst?",
    answer: "Common causes include: frozen pipes in winter, old corroded pipes, high water pressure, tree root intrusion, and physical damage. We can identify the cause and recommend prevention measures.",
  },
];

export default function BurstPipeRepairPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Emergency Plumbing", href: "/services/emergency-plumbing" },
            { label: "Burst Pipe Repair" }
          ]} />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              Emergency Response Available
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Burst Pipe Repair</h1>
            <p className="text-xl text-red-100 mb-8 max-w-2xl">
              Pipe burst flooding your home? We respond immediately to stop the water, repair the damage, and prevent further destruction. 24/7 emergency service.
            </p>
            <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-red-700 px-10 py-5 rounded-lg font-bold text-xl transition shadow-lg">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              CALL NOW: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Immediate Steps */}
      <section className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white font-bold text-xl mb-4 text-center">Pipe Burst? Do This NOW:</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: "1", action: "Shut Off Water", detail: "Main valve near meter" },
                { step: "2", action: "Turn Off Power", detail: "If water near outlets" },
                { step: "3", action: "Open Faucets", detail: "Drain remaining water" },
                { step: "4", action: "Call Us", detail: "We'll be there fast" },
              ].map((item) => (
                <div key={item.step} className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">{item.step}</div>
                  <h3 className="text-white font-semibold">{item.action}</h3>
                  <p className="text-gray-400 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Burst Pipe Repair Service</h2>
            <p className="text-lg text-gray-600 mb-8">
              A burst pipe can cause thousands of dollars in water damage within minutes. Our emergency plumbers arrive quickly with the equipment needed to stop the flow, repair or replace the damaged pipe, and help you start the recovery process.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Burst Pipe Services</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Emergency pipe repair",
                "Copper pipe repair",
                "PVC pipe repair",
                "Water main repair",
                "Whole-home repiping",
                "Frozen pipe thawing",
                "Pipe joint repair",
                "Underground pipe repair",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Emergency Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/emergency-plumbing/water-leak-detection" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Leak Detection
                </Link>
                <Link href="/services/emergency-plumbing/slab-leak-detection" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Slab Leak Detection
                </Link>
                <Link href="/services/water-heater/repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Heater Repair
                </Link>
                <Link href="/services/drain-sewer/drain-cleaning" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Drain Cleaning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Burst Pipe Repair FAQ" faqs={faqs} />

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

      <CTASection title="Burst Pipe? Call Now!" description="Every minute counts. Call for immediate emergency burst pipe repair." />
    </>
  );
}