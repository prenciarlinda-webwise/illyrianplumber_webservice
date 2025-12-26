import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Shower & Tub Plumbing | Shower Valve Repair NJ",
  description: "Shower and bathtub plumbing services in East Brunswick, NJ. Shower valve repair, tub drain issues, showerhead installation, and tub plumbing. Call (718) 427-4396.",
  keywords: [
    "shower plumbing",
    "shower repair",
    "shower valve repair",
    "bathtub plumbing",
    "tub drain repair",
    "showerhead installation",
    "shower faucet repair",
  ],
};

const problems = [
  { problem: "No Hot Water in Shower", cause: "Faulty mixing valve, cartridge failure, or water heater issue", solution: "We diagnose the cause and repair or replace the valve." },
  { problem: "Dripping Showerhead", cause: "Worn valve cartridge or washer", solution: "We replace internal valve components to stop the drip." },
  { problem: "Low Shower Pressure", cause: "Clogged showerhead, valve restriction, or pipe issue", solution: "We identify the restriction and restore full pressure." },
  { problem: "Leaking Shower Valve", cause: "Failed seals, worn cartridge, or loose connections", solution: "We repair or replace the shower valve assembly." },
  { problem: "Tub Won't Drain", cause: "Hair clog, soap buildup, or drain mechanism issue", solution: "We clear clogs and repair drain mechanisms." },
  { problem: "Tub Overflow Leak", cause: "Failed gasket or loose overflow connection", solution: "We replace gaskets and secure connections." },
];

const faqs = [
  {
    question: "How much does shower valve repair cost?",
    answer: "Shower valve cartridge replacement typically costs $200-$400 including parts and labor. Complete valve replacement runs $400-$800+ depending on access and tile work required. We provide exact pricing after assessment.",
  },
  {
    question: "Can you replace a shower valve without removing tile?",
    answer: "Often yes—many valves can be accessed and repaired through the front plate. However, some repairs or full valve replacements require access through the wall behind the shower or through tile. We assess and explain options.",
  },
  {
    question: "Why does my shower water temperature fluctuate?",
    answer: "Temperature fluctuations usually indicate a failing pressure-balancing valve or mixing valve. These valves regulate hot/cold water and wear out over time. We can replace them to restore consistent temperature.",
  },
  {
    question: "Do you install walk-in showers or tub-to-shower conversions?",
    answer: "We handle all plumbing aspects of shower installations and conversions: relocating drains, installing shower valves, and connecting fixtures. We work with contractors or can recommend one for the finish work.",
  },
];

export default function ShowerTubPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Kitchen & Bathroom", href: "/services/kitchen-bathroom" },
            { label: "Shower & Tub" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shower & Tub Plumbing</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              From leaky shower valves to clogged tub drains, we fix all shower and bathtub plumbing problems. Repair and installation services for all brands and styles.
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

      <EmergencyBanner variant="compact" serviceName="Shower/Tub" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Shower & Bathtub Plumbing Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your shower and tub see daily use. When something goes wrong—a dripping showerhead, a tub that won&apos;t drain, or inconsistent water temperature—you need it fixed fast. Our plumbers repair all shower and tub plumbing issues.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Shower & Tub Problems</h3>
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

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Shower & Tub Services</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "Shower valve repair",
                "Shower valve replacement",
                "Cartridge replacement",
                "Showerhead installation",
                "Tub drain cleaning",
                "Tub drain repair",
                "Tub/shower faucet repair",
                "Diverter repair",
                "Shower pan drain repair",
                "Tub overflow repair",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* Upgrade Options */}
            <div className="bg-blue-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upgrade Your Shower Experience</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Rain Showerheads", desc: "Luxurious overhead shower experience" },
                  { title: "Handheld Sprayers", desc: "Convenient and practical addition" },
                  { title: "Multi-Head Systems", desc: "Multiple showerheads for spa-like feel" },
                  { title: "Thermostatic Valves", desc: "Precise temperature control" },
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
                <Link href="/services/kitchen-bathroom/bathroom-remodel" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Bathroom Remodel Plumbing
                </Link>
                <Link href="/services/water-heater" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Heater Services
                </Link>
                <Link href="/services/drain-sewer/drain-cleaning" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Drain Cleaning
                </Link>
                <Link href="/services/emergency-plumbing/water-leak-detection" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Leak Detection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Shower & Tub FAQ" faqs={faqs} />

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

      <CTASection title="Shower or Tub Problems?" description="Contact us for professional shower and bathtub plumbing services." />
    </>
  );
}