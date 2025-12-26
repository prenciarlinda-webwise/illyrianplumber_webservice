import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Garbage Disposal Repair & Installation | Kitchen Plumber NJ",
  description: "Garbage disposal repair and installation in East Brunswick, NJ. Fix jammed, leaking, or broken disposals. New disposal installation. Call (718) 427-4396.",
  keywords: [
    "garbage disposal repair",
    "garbage disposal installation",
    "garbage disposal replacement",
    "garbage disposal plumber",
    "jammed garbage disposal",
    "disposal not working",
  ],
};

const problems = [
  { problem: "Won't Turn On", cause: "Tripped reset button, electrical issue, or motor failure", solution: "We diagnose the cause and repair or recommend replacement." },
  { problem: "Jammed/Humming", cause: "Object stuck in blades or motor seized", solution: "We safely clear jams and free stuck motors when possible." },
  { problem: "Leaking", cause: "Failed seals, cracked housing, or loose connections", solution: "We repair connections or replace units with damaged housings." },
  { problem: "Slow Draining", cause: "Partial clog or dull blades", solution: "We clear drain lines and assess if disposal needs replacement." },
  { problem: "Bad Odors", cause: "Food buildup on blades and interior", solution: "We clean and advise on preventing future odor buildup." },
  { problem: "Loud Grinding", cause: "Loose components or worn bearings", solution: "We identify the cause—may indicate need for replacement." },
];

const faqs = [
  {
    question: "How much does garbage disposal installation cost?",
    answer: "Garbage disposal installation typically costs $250-$450 including the unit and labor. Costs vary based on the disposal model and whether additional plumbing work is needed. We provide upfront pricing.",
  },
  {
    question: "How long do garbage disposals last?",
    answer: "Garbage disposals typically last 8-15 years depending on usage and quality. If yours is older and having problems, replacement is often more economical than repeated repairs.",
  },
  {
    question: "Can I install a disposal if I don't have one?",
    answer: "Usually yes, if you have a standard double-bowl or single-bowl sink. We may need to modify drain connections and add an electrical outlet if one isn't present. We can assess during an estimate.",
  },
  {
    question: "What garbage disposal brand do you recommend?",
    answer: "We typically recommend InSinkErator and Waste King for their reliability and longevity. For most homes, a 1/2 to 3/4 HP model is sufficient. We can help you choose the right size.",
  },
];

export default function GarbageDisposalPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Kitchen & Bathroom", href: "/services/kitchen-bathroom" },
            { label: "Garbage Disposal" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Garbage Disposal Services</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Jammed, leaking, or broken garbage disposal? We repair and install all garbage disposal brands. Get your kitchen sink working properly again.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName="Garbage Disposal" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Garbage Disposal Repair & Installation</h2>
            <p className="text-lg text-gray-600 mb-8">
              A broken garbage disposal can bring your kitchen to a halt. Whether it&apos;s jammed, leaking, or completely dead, our plumbers diagnose the problem quickly and get your disposal working again—or install a new one if needed.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Garbage Disposal Problems</h3>
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
                      <p className="text-gray-700 text-sm"><span className="font-medium text-blue-700">Solution:</span> {item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Disposal Services</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "Disposal repair & troubleshooting",
                "Jammed disposal clearing",
                "Disposal replacement",
                "New disposal installation",
                "Disposal leak repair",
                "Drain connection repair",
                "Dishwasher connection repair",
                "Electrical connection check",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* Quick Tips */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚠️ Before You Call - Try This First</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>Press the reset button on the bottom of the disposal</li>
                <li>Check if the circuit breaker tripped</li>
                <li>NEVER put your hand in the disposal, even when off</li>
              </ol>
              <p className="text-gray-600 text-sm mt-4">
                If these steps don&apos;t work, call us for professional diagnosis.
              </p>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/kitchen-bathroom/sink-installation" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Sink Installation
                </Link>
                <Link href="/services/drain-sewer/drain-cleaning" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Kitchen Drain Cleaning
                </Link>
                <Link href="/services/kitchen-bathroom/faucet-repair" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Kitchen Faucet Repair
                </Link>
                <Link href="/services/emergency-plumbing" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Emergency Plumbing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Garbage Disposal FAQ" faqs={faqs} />

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {BUSINESS_INFO.serviceAreas.map((area, index) => (
              <Link key={index} href={`/service-areas/plumber-${area.toLowerCase().replace(/\s+/g, "-")}`} className="bg-gray-100 hover:bg-blue-50 hover:text-blue-700 px-4 py-2 rounded-full text-sm font-medium transition">
                {area}, NJ
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Garbage Disposal Problems?" description="Contact us for professional garbage disposal repair and installation." />
    </>
  );
}