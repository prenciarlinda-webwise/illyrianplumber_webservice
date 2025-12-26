import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Drain Cleaning Services | Clogged Drain Repair NJ",
  description: "Professional drain cleaning in East Brunswick, NJ. Clear clogged kitchen, bathroom, and floor drains. Fast service, upfront pricing. Call (718) 427-4396.",
  keywords: [
    "drain cleaning",
    "clogged drain",
    "drain cleaning service",
    "drain cleaner",
    "unclog drain",
    "drain cleaning near me",
    "clogged kitchen drain",
    "clogged bathroom drain",
  ],
};

const drainTypes = [
  { type: "Kitchen Drains", common: "Grease, food particles, soap scum", method: "Cable cleaning with grease-cutting treatment" },
  { type: "Bathroom Sinks", common: "Hair, soap, toothpaste buildup", method: "Cable cleaning and p-trap clearing" },
  { type: "Shower/Tub Drains", common: "Hair, soap, shampoo residue", method: "Cable cleaning with hair removal tools" },
  { type: "Toilet Clogs", common: "Paper, foreign objects, buildup", method: "Toilet auger for complete clearing" },
  { type: "Floor Drains", common: "Debris, sediment, root intrusion", method: "Heavy-duty cable or hydro jetting" },
  { type: "Main Lines", common: "Roots, grease, scale buildup", method: "Large cable machine or hydro jetting" },
];

const faqs = [
  {
    question: "How much does drain cleaning cost?",
    answer: "Standard drain cleaning for a single fixture (sink, tub, toilet) typically costs $150-$250. Main line cleaning runs $200-$400. Complex clogs or those requiring camera inspection may cost more. We provide upfront pricing before starting.",
  },
  {
    question: "Why do my drains keep clogging?",
    answer: "Recurring clogs indicate underlying issues: buildup on pipe walls, partial root intrusion, bellied (sagging) pipe, or improper slope. We recommend camera inspection for repeat problems to identify and address the root cause.",
  },
  {
    question: "Are chemical drain cleaners safe to use?",
    answer: "We don't recommend chemical drain cleaners. They can damage pipes (especially older metal pipes), harm septic systems, and create hazardous fumes. They also often don't fully clear clogs. Professional cleaning is safer and more effective.",
  },
  {
    question: "How long does drain cleaning take?",
    answer: "Most drain cleaning takes 30-60 minutes. Complex clogs, main line blockages, or situations requiring camera inspection may take longer. We work efficiently while ensuring the job is done right.",
  },
];

export default function DrainCleaningPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Drain & Sewer", href: "/services/drain-sewer" },
            { label: "Drain Cleaning" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Drain Cleaning Services</h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl">
              Clogged drain slowing you down? Our professional drain cleaning clears clogs fast and restores proper flow. Kitchen, bathroom, floor drains, and main lines.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName="Drain" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Drain Cleaning</h2>
            <p className="text-lg text-gray-600 mb-8">
              A clogged drain is more than an inconvenience—left untreated, it can lead to backups, water damage, and even health hazards. Our professional drain cleaning service uses proper equipment to clear clogs completely, not just punch a hole through them.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Drains We Clean</h3>
            <div className="space-y-4 mb-12">
              {drainTypes.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/4">
                      <h4 className="font-semibold text-gray-900">{item.type}</h4>
                    </div>
                    <div className="md:w-1/3">
                      <p className="text-gray-600 text-sm"><span className="font-medium">Common causes:</span> {item.common}</p>
                    </div>
                    <div className="md:w-5/12">
                      <p className="text-gray-700 text-sm"><span className="font-medium text-green-700">Method:</span> {item.method}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Drain Cleaning Equipment</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { tool: "Cable Machines", desc: "Various sizes for different drain diameters, with cutting heads for roots and scale" },
                { tool: "Toilet Augers", desc: "Specialized tools designed for toilet clogs without scratching porcelain" },
                { tool: "Drain Cameras", desc: "Video inspection to diagnose complex clogs and pipe condition" },
                { tool: "Hydro Jetters", desc: "High-pressure water for thorough pipe cleaning (see Hydro Jetting service)" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.tool}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Prevention Tips */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🛡️ Prevent Clogs Before They Happen</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Never pour grease or oil down kitchen drains—wipe pans before washing
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Use drain strainers to catch hair in shower and tub drains
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Only flush toilet paper—no wipes, even &quot;flushable&quot; ones
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Schedule annual preventive drain cleaning for kitchen lines
                </li>
              </ul>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/drain-sewer/hydro-jetting" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Hydro Jetting (Deep Cleaning)
                </Link>
                <Link href="/services/drain-sewer/camera-inspection" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Camera Inspection
                </Link>
                <Link href="/services/emergency-plumbing/emergency-drain-cleaning" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Emergency Drain Service
                </Link>
                <Link href="/services/drain-sewer/sewer-line-repair" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Sewer Line Repair
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Drain Cleaning FAQ" faqs={faqs} />

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {BUSINESS_INFO.serviceAreas.map((area, index) => (
              <Link key={index} href={`/service-areas/plumber-${area.toLowerCase().replace(/\s+/g, "-")}`} className="bg-gray-100 hover:bg-green-50 hover:text-green-700 px-4 py-2 rounded-full text-sm font-medium transition">
                {area}, NJ
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Clogged Drain?" description="Contact us for fast, professional drain cleaning service." />
    </>
  );
}