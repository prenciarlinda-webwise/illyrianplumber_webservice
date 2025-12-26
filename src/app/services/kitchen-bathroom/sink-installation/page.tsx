import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sink Installation & Repair | Kitchen & Bathroom Sinks NJ",
  description: "Professional sink installation and repair in East Brunswick, NJ. Kitchen sinks, bathroom sinks, utility sinks. Faucet hookups and drain connections. Call (718) 427-4396.",
  keywords: [
    "sink installation",
    "kitchen sink installation",
    "bathroom sink installation",
    "sink repair",
    "sink plumber",
    "sink replacement",
    "undermount sink installation",
  ],
};

const sinkTypes = [
  { type: "Undermount Sinks", desc: "Mounted beneath the countertop for a seamless look. Requires solid surface countertop." },
  { type: "Drop-In Sinks", desc: "Dropped into a countertop cutout. Easy installation with any countertop material." },
  { type: "Farmhouse Sinks", desc: "Apron-front sinks that make a statement. Require cabinet modifications." },
  { type: "Vessel Sinks", desc: "Bowl sinks that sit on top of the counter. Stylish option for bathrooms." },
  { type: "Pedestal Sinks", desc: "Freestanding bathroom sinks. Space-saving but no storage below." },
  { type: "Utility Sinks", desc: "Deep laundry or garage sinks for tough jobs. Wall-mount or cabinet options." },
];

const faqs = [
  {
    question: "How much does sink installation cost?",
    answer: "Basic sink installation costs $200-$400 for labor. Complex installations (undermount, farmhouse) may cost more. This doesn't include the sink or faucet—just the plumbing installation. We provide exact pricing after seeing your setup.",
  },
  {
    question: "Can you move a sink to a different location?",
    answer: "Yes, though moving a sink requires extending water supply and drain lines, which adds to the cost. For kitchen remodels and bathroom renovations, we regularly relocate sinks. We can assess feasibility and provide a quote.",
  },
  {
    question: "Do you install customer-supplied sinks?",
    answer: "Yes, we install sinks purchased by the customer. Ensure you have all necessary components (mounting hardware, strainer, etc.). If there's a manufacturing defect, you'll handle the warranty directly with the supplier.",
  },
  {
    question: "How long does sink installation take?",
    answer: "Straightforward sink replacement takes 1-2 hours. New installations or relocations take longer depending on the plumbing work required. We provide time estimates with your quote.",
  },
];

export default function SinkInstallationPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Kitchen & Bathroom", href: "/services/kitchen-bathroom" },
            { label: "Sink Installation" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sink Installation & Repair</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              From kitchen sink replacements to bathroom vanity installations, we handle all sink plumbing. Professional installation ensures leak-free operation and proper drainage.
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

      <EmergencyBanner variant="compact" serviceName="Sink" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Sink Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you&apos;re replacing an old sink, upgrading during a remodel, or dealing with a leak, proper sink installation is essential. Our plumbers ensure watertight connections for both water supply and drainage.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sink Types We Install</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {sinkTypes.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.type}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Sink Services</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "Kitchen sink installation",
                "Bathroom sink installation",
                "Sink replacement",
                "Faucet hookup",
                "Drain connection",
                "Garbage disposal connection",
                "Dishwasher connection",
                "Sink leak repair",
                "Supply line replacement",
                "P-trap replacement",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* Common Issues */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sink Problems We Repair</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                { issue: "Leaking Under Sink", fix: "We replace worn connections, P-traps, and supply lines" },
                { issue: "Slow Draining Sink", fix: "We clear clogs and ensure proper drain slope" },
                { issue: "Low Water Pressure", fix: "We check valves, aerators, and supply lines" },
                { issue: "Foul Odors", fix: "We check the P-trap and vent connections" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">{item.issue}</h4>
                  <p className="text-gray-600 text-sm">{item.fix}</p>
                </div>
              ))}
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/kitchen-bathroom/faucet-repair" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Faucet Installation
                </Link>
                <Link href="/services/kitchen-bathroom/garbage-disposal" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Garbage Disposal
                </Link>
                <Link href="/services/kitchen-bathroom/bathroom-remodel" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Bathroom Remodel Plumbing
                </Link>
                <Link href="/services/drain-sewer/drain-cleaning" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Drain Cleaning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Sink Installation FAQ" faqs={faqs} />

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

      <CTASection title="Need Sink Installation?" description="Contact us for professional sink installation and repair services." />
    </>
  );
}