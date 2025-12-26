import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Faucet Repair & Installation | Kitchen & Bathroom Faucets",
  description: "Professional faucet repair and installation in East Brunswick, NJ. Fix dripping faucets, low pressure, and install new kitchen and bathroom faucets. Call (718) 427-4396.",
  keywords: [
    "faucet repair",
    "faucet installation",
    "kitchen faucet repair",
    "bathroom faucet repair",
    "dripping faucet",
    "faucet replacement",
    "faucet plumber",
  ],
};

const problems = [
  { problem: "Dripping Faucet", cause: "Worn washers, O-rings, or cartridge", solution: "We replace worn internal components to stop the drip." },
  { problem: "Low Water Pressure", cause: "Clogged aerator, supply line issue, or valve problem", solution: "We diagnose and fix the cause of reduced flow." },
  { problem: "Leaking Base", cause: "Worn O-rings or loose connections", solution: "We replace seals and tighten connections to stop leaks." },
  { problem: "Handle Issues", cause: "Worn cartridge, loose screws, or broken handle", solution: "We repair or replace handles and cartridges." },
  { problem: "Sprayer Problems", cause: "Clogged spray head or kinked hose", solution: "We clean or replace sprayer components." },
  { problem: "No Hot/Cold", cause: "Cartridge failure or supply line valve closed", solution: "We diagnose and restore proper temperature control." },
];

const faqs = [
  {
    question: "How much does faucet repair cost?",
    answer: "Basic faucet repairs like replacing washers or O-rings typically cost $100-$175. Cartridge replacements run $150-$250. We provide exact pricing before starting work.",
  },
  {
    question: "Should I repair or replace my faucet?",
    answer: "Generally, if repair costs exceed 50% of a new faucet's price, or if your faucet is over 15 years old, replacement may be more economical. We'll give you honest advice for your situation.",
  },
  {
    question: "Can you install the faucet I purchased?",
    answer: "Yes, we install customer-supplied faucets. However, if there's a defect, you'll need to handle the warranty with the manufacturer. We also supply quality faucets if you prefer.",
  },
  {
    question: "How long does faucet installation take?",
    answer: "Standard faucet installation takes 1-2 hours. If additional plumbing work is needed (like replacing supply lines or valves), it may take longer.",
  },
];

export default function FaucetRepairPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Kitchen & Bathroom", href: "/services/kitchen-bathroom" },
            { label: "Faucet Repair" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Faucet Repair & Installation</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Dripping faucets waste water and money. Whether you need a repair or a new installation, our plumbers fix all faucet problems in kitchens and bathrooms.
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

      <EmergencyBanner variant="compact" serviceName="Faucet" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Faucet Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              A dripping faucet can waste over 3,000 gallons of water per year. Beyond the waste, that constant drip is annoying and the problem only gets worse over time. Our plumbers service all faucet brands and types—kitchen, bathroom, bar sinks, and more.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Faucet Problems We Fix</h3>
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

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Faucet Brands We Service</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {["Moen", "Delta", "Kohler", "American Standard", "Pfister", "Grohe", "Hansgrohe", "Brizo"].map((brand, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center font-medium text-gray-700">
                  {brand}
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Faucet Services</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "Dripping faucet repair",
                "Faucet cartridge replacement",
                "Kitchen faucet installation",
                "Bathroom faucet installation",
                "Faucet handle repair",
                "Supply line replacement",
                "Sprayer repair & replacement",
                "Low pressure diagnosis",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
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
                <Link href="/services/kitchen-bathroom/sink-installation" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Sink Installation
                </Link>
                <Link href="/services/kitchen-bathroom/shower-tub" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Shower & Tub Plumbing
                </Link>
                <Link href="/services/kitchen-bathroom/bathroom-remodel" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Bathroom Remodel Plumbing
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

      <FAQSection title="Faucet Repair FAQ" faqs={faqs} />

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

      <CTASection title="Faucet Problems?" description="Contact us for professional faucet repair and installation services." />
    </>
  );
}