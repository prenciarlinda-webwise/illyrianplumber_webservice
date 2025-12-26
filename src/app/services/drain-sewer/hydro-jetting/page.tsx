import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hydro Jetting Services | High-Pressure Drain Cleaning NJ",
  description: "Professional hydro jetting in East Brunswick, NJ. High-pressure water clears grease, roots, and scale from drains and sewer lines. The most thorough cleaning. Call (718) 427-4396.",
  keywords: [
    "hydro jetting",
    "hydro jet drain cleaning",
    "high pressure drain cleaning",
    "sewer jetting",
    "water jetting",
    "hydro jetting service",
    "hydro jetting sewer line",
  ],
};

const benefits = [
  { title: "Complete Cleaning", desc: "Removes 100% of buildup, not just punches through—pipes are left like new inside" },
  { title: "Clears Roots", desc: "High-pressure water cuts through tree roots that have invaded your pipes" },
  { title: "Removes Grease", desc: "Blasts away years of grease buildup that snaking can't remove" },
  { title: "Longer Lasting", desc: "Clean pipes stay clear longer than cable-cleaned pipes" },
  { title: "Safe for Pipes", desc: "Just water—no chemicals or abrasive tools that can damage pipes" },
  { title: "Environmentally Friendly", desc: "Uses only water, no harsh chemicals entering the sewer system" },
];

const faqs = [
  {
    question: "What is hydro jetting?",
    answer: "Hydro jetting uses specialized equipment to blast high-pressure water (3,000-4,000 PSI) through your pipes. A special nozzle creates powerful jets that scour pipe walls, removing grease, scale, roots, and debris completely.",
  },
  {
    question: "How much does hydro jetting cost?",
    answer: "Hydro jetting typically costs $400-$800 for residential sewer lines, depending on access and line length. While more expensive than snaking, it provides a much more thorough cleaning that lasts longer.",
  },
  {
    question: "Is hydro jetting safe for old pipes?",
    answer: "Hydro jetting is safe for most pipes, but we always perform a camera inspection first. If pipes are severely corroded or damaged, high pressure could cause problems. We assess pipe condition before recommending hydro jetting.",
  },
  {
    question: "How often should I get hydro jetting?",
    answer: "For most homes, every 1-2 years is sufficient for main lines, especially if you have large trees nearby. Commercial kitchens with heavy grease may need quarterly service. We can recommend a schedule based on your situation.",
  },
];

export default function HydroJettingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Drain & Sewer", href: "/services/drain-sewer" },
            { label: "Hydro Jetting" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hydro Jetting Services</h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl">
              The most powerful drain cleaning available. Hydro jetting uses high-pressure water to completely scour your pipes, removing grease, roots, and years of buildup.
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

      <EmergencyBanner variant="compact" serviceName="Drain/Sewer" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">High-Pressure Pipe Cleaning</h2>
            <p className="text-lg text-gray-600 mb-8">
              While cable machines (snakes) punch through clogs, hydro jetting cleans your entire pipe. Water at 3,000-4,000 PSI scours pipe walls completely clean, restoring full diameter and flow. It&apos;s the difference between clearing a path and cleaning the whole pipe.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Hydro Jetting</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {benefits.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Comparison */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold mb-4">Cable Cleaning vs Hydro Jetting</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-300 mb-2">Cable (Snake) Cleaning</h4>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    <li>• Punches through the clog</li>
                    <li>• Leaves residue on pipe walls</li>
                    <li>• Good for simple clogs</li>
                    <li>• Lower cost per service</li>
                    <li>• May need repeat visits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Hydro Jetting</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Completely cleans pipe walls</li>
                    <li>• Removes all buildup</li>
                    <li>• Best for heavy buildup, grease, roots</li>
                    <li>• Higher cost, longer results</li>
                    <li>• Less frequent service needed</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Choose Hydro Jetting</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "Recurring drain clogs",
                "Heavy grease buildup (restaurants, kitchens)",
                "Tree root intrusion",
                "Before pipe lining or repair",
                "Slow drains throughout house",
                "Preventive maintenance",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/drain-sewer/drain-cleaning" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Standard Drain Cleaning
                </Link>
                <Link href="/services/drain-sewer/camera-inspection" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Camera Inspection
                </Link>
                <Link href="/services/drain-sewer/sewer-line-repair" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Sewer Line Repair
                </Link>
                <Link href="/services/commercial" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Commercial Drain Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Hydro Jetting FAQ" faqs={faqs} />

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

      <CTASection title="Need Hydro Jetting?" description="Contact us for the most thorough drain cleaning available." />
    </>
  );
}