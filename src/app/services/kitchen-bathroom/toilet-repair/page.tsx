import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Toilet Repair & Installation | Running Toilet Fix NJ",
  description: "Professional toilet repair and installation in East Brunswick, NJ. Fix running toilets, clogs, leaks, and install new toilets. All brands. Call (718) 427-4396.",
  keywords: [
    "toilet repair",
    "toilet installation",
    "running toilet",
    "toilet replacement",
    "clogged toilet",
    "toilet plumber",
    "toilet leak repair",
  ],
};

const problems = [
  { problem: "Running Toilet", cause: "Faulty flapper, fill valve, or overflow tube", solution: "We replace worn components to stop water waste." },
  { problem: "Clogged Toilet", cause: "Blockage in toilet trap or drain line", solution: "We clear clogs with professional tools without damaging porcelain." },
  { problem: "Toilet Leaking at Base", cause: "Failed wax ring or loose mounting bolts", solution: "We replace the wax seal and properly reseat the toilet." },
  { problem: "Weak Flush", cause: "Clogged rim holes, low water level, or partial clog", solution: "We restore full flushing power by addressing the cause." },
  { problem: "Toilet Rocks/Wobbles", cause: "Loose bolts, uneven floor, or damaged flange", solution: "We secure the toilet properly and repair flange if needed." },
  { problem: "Ghost Flushing", cause: "Slow leak from tank to bowl (bad flapper)", solution: "We replace the flapper and check for other issues." },
];

const faqs = [
  {
    question: "How much does toilet repair cost?",
    answer: "Basic toilet repairs (flapper, fill valve) cost $100-$200. Wax ring replacement runs $150-$250. Complete toilet replacement including installation is $300-$600 depending on the toilet. We provide upfront pricing.",
  },
  {
    question: "When should I replace vs repair my toilet?",
    answer: "Consider replacement if your toilet is over 20 years old, has cracks, requires frequent repairs, or wastes water. Modern toilets use 1.28 gallons per flush vs 3.5+ for older models, saving water and money.",
  },
  {
    question: "How long does toilet installation take?",
    answer: "Standard toilet installation takes 1-2 hours. If we need to repair the floor or flange, it may take longer. We always ensure a watertight seal before finishing.",
  },
  {
    question: "Do you install bidets and bidet seats?",
    answer: "Yes, we install bidet seats and standalone bidets. We handle the water supply connection and ensure proper installation for leak-free operation.",
  },
];

export default function ToiletRepairPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Kitchen & Bathroom", href: "/services/kitchen-bathroom" },
            { label: "Toilet Repair" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Toilet Repair & Installation</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Running, clogged, or leaking toilet? A malfunctioning toilet wastes water and disrupts your home. We repair all toilet brands and install new efficient models.
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

      <EmergencyBanner variant="compact" serviceName="Toilet" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Toilet Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              A running toilet can waste 200 gallons of water per day. Clogs are frustrating and can indicate bigger problems. Our plumbers diagnose toilet issues quickly and provide reliable repairs or recommend replacement when it makes more sense.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Toilet Problems We Fix</h3>
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

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Toilet Services</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "Running toilet repair",
                "Clogged toilet clearing",
                "Wax ring replacement",
                "Fill valve replacement",
                "Flapper replacement",
                "New toilet installation",
                "Toilet replacement",
                "Bidet seat installation",
                "Flange repair",
                "Tank component repair",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* Water-Saving Tip */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Save Water & Money</h3>
              <p className="text-gray-700 mb-4">
                Older toilets use 3.5-7 gallons per flush. Modern WaterSense toilets use just 1.28 gallons. For a family of four, upgrading can save over 16,000 gallons of water per year!
              </p>
              <p className="text-gray-600 text-sm">
                Ask us about high-efficiency toilet options when you call.
              </p>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/kitchen-bathroom/bathroom-remodel" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Bathroom Remodel Plumbing
                </Link>
                <Link href="/services/drain-sewer/drain-cleaning" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Drain Cleaning
                </Link>
                <Link href="/services/emergency-plumbing/water-leak-detection" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Leak Detection
                </Link>
                <Link href="/services/commercial" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Commercial Toilet Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Toilet Repair FAQ" faqs={faqs} />

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

      <CTASection title="Toilet Problems?" description="Contact us for professional toilet repair and installation services." />
    </>
  );
}