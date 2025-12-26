import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sump Pump Repair & Installation | Basement Flood Protection NJ",
  description: "Sump pump installation, repair, and replacement in East Brunswick, NJ. Protect your basement from flooding. Battery backup systems available. Call (718) 427-4396.",
  keywords: [
    "sump pump",
    "sump pump installation",
    "sump pump repair",
    "sump pump replacement",
    "basement flooding",
    "sump pump service",
    "battery backup sump pump",
  ],
};

const problems = [
  { problem: "Pump Won't Turn On", cause: "Power issue, float switch stuck, or motor failure", solution: "We diagnose and repair or replace components as needed." },
  { problem: "Pump Runs Constantly", cause: "Float switch stuck, check valve failed, or undersized pump", solution: "We identify and fix the cause to prevent burnout." },
  { problem: "Pump Cycles Frequently", cause: "Float switch adjustment, check valve issue, or high water table", solution: "We adjust settings or recommend appropriate solutions." },
  { problem: "Strange Noises", cause: "Worn bearings, debris in pump, or impeller damage", solution: "We clean or repair the pump, replace if worn out." },
  { problem: "Water Not Discharging", cause: "Clogged discharge line, frozen line, or check valve failure", solution: "We clear blockages and repair/replace components." },
  { problem: "Pump Runs But Pit Fills", cause: "Pump failing, impeller worn, or pump undersized", solution: "We assess capacity and repair or upgrade the pump." },
];

const faqs = [
  {
    question: "How long do sump pumps last?",
    answer: "Quality sump pumps typically last 7-10 years with proper maintenance. Factors like usage frequency, water quality, and maintenance affect lifespan. We recommend testing your pump seasonally and replacing proactively before failure.",
  },
  {
    question: "Do I need a battery backup sump pump?",
    answer: "We strongly recommend battery backup systems. Power often goes out during storms—exactly when you need your sump pump most. A battery backup ensures protection even during outages. Some systems can run for hours on battery power.",
  },
  {
    question: "How much does sump pump installation cost?",
    answer: "New sump pump installation (with pit) typically costs $1,000-$2,500. Replacement of an existing pump runs $400-$800. Battery backup systems add $400-$800. We provide exact quotes based on your situation.",
  },
  {
    question: "How do I maintain my sump pump?",
    answer: "Test monthly by pouring water in the pit until the pump activates. Clean the pit annually. Check the discharge line isn't blocked. Listen for unusual noises. We also offer maintenance services to keep your pump in top condition.",
  },
];

export default function SumpPumpPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Drain & Sewer", href: "/services/drain-sewer" },
            { label: "Sump Pump" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sump Pump Services</h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl">
              Protect your basement from flooding with professional sump pump installation and repair. We install, repair, and maintain sump pumps and battery backup systems.
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

      <EmergencyBanner variant="compact" serviceName="Sump Pump" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Sump Pump Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your sump pump is your basement&apos;s first line of defense against flooding. Whether you need a new installation, repair of an existing pump, or a battery backup system for power outages, we provide reliable sump pump services to keep your basement dry.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Sump Pump Problems</h3>
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
                      <p className="text-gray-700 text-sm"><span className="font-medium text-green-700">Solution:</span> {item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Sump Pump Services</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "Sump pump installation",
                "Sump pump replacement",
                "Sump pump repair",
                "Battery backup installation",
                "Sump pit installation",
                "Check valve replacement",
                "Discharge line repair",
                "Maintenance service",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* Battery Backup Section */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🔋 Don&apos;t Risk It—Get Battery Backup!</h3>
              <p className="text-gray-700 mb-4">
                Power outages often happen during storms—exactly when your sump pump needs to work hardest. A battery backup sump pump system provides protection when the power goes out.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Battery Backup Benefits:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Works during power outages</li>
                    <li>• Alerts you when activated</li>
                    <li>• Runs for hours on battery</li>
                    <li>• Peace of mind during storms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">We Install:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Battery backup pumps</li>
                    <li>• Water-powered backup pumps</li>
                    <li>• Combination systems</li>
                    <li>• Smart monitoring systems</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/emergency-plumbing" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Emergency Plumbing (Flood Response)
                </Link>
                <Link href="/services/drain-sewer/drain-cleaning" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Floor Drain Cleaning
                </Link>
                <Link href="/services/emergency-plumbing/water-leak-detection" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Leak Detection
                </Link>
                <Link href="/services/commercial" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Commercial Sump Pump Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Sump Pump FAQ" faqs={faqs} />

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

      <CTASection title="Sump Pump Problems?" description="Contact us for sump pump repair, installation, and battery backup systems." />
    </>
  );
}