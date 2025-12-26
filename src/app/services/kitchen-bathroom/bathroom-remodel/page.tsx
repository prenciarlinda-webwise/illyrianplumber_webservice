import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bathroom Remodel Plumbing | Renovation Plumber NJ",
  description: "Bathroom remodel plumbing services in East Brunswick, NJ. Fixture relocation, new installations, and complete bathroom renovation plumbing. Call (718) 427-4396.",
  keywords: [
    "bathroom remodel plumber",
    "bathroom renovation plumbing",
    "bathroom plumbing contractor",
    "bathroom remodeling plumber",
    "bathroom fixture installation",
    "bathroom plumbing rough-in",
  ],
};

const services = [
  "Toilet relocation & installation",
  "Vanity sink installation",
  "Shower valve rough-in",
  "Bathtub installation",
  "Water supply line relocation",
  "Drain line relocation",
  "Double vanity plumbing",
  "Shower-to-tub conversion",
  "Tub-to-shower conversion",
  "Walk-in shower plumbing",
  "Soaking tub installation",
  "Bidet installation",
];

const phases = [
  { phase: "1. Planning", desc: "Review your remodel plans and discuss fixture locations, water supply, and drainage requirements." },
  { phase: "2. Rough-In", desc: "Install new supply and drain lines in the correct locations before walls are closed." },
  { phase: "3. Final Connections", desc: "After finish work is complete, we connect and install all fixtures and test for leaks." },
];

const faqs = [
  {
    question: "Do you work with general contractors on remodels?",
    answer: "Yes, we regularly coordinate with general contractors, tile installers, and other trades on bathroom remodels. We ensure plumbing is done at the right phase and meets code requirements.",
  },
  {
    question: "Can you move bathroom fixtures to different locations?",
    answer: "Yes, we relocate toilets, sinks, showers, and tubs. Moving fixtures requires extending or rerouting water supply and drain lines. Costs vary based on distance and complexity—we provide detailed quotes.",
  },
  {
    question: "How much does bathroom remodel plumbing cost?",
    answer: "Plumbing costs depend on scope: minor fixture updates run $500-$1,500, while complete remodels with fixture relocation typically cost $2,000-$5,000+. We provide itemized quotes based on your specific plans.",
  },
  {
    question: "Do I need permits for bathroom remodeling?",
    answer: "Moving drain or supply lines typically requires a plumbing permit. Like-for-like fixture replacement usually doesn't. We pull necessary permits and schedule required inspections.",
  },
];

export default function BathroomRemodelPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Kitchen & Bathroom", href: "/services/kitchen-bathroom" },
            { label: "Bathroom Remodel" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bathroom Remodel Plumbing</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Planning a bathroom renovation? We handle all the plumbing—from rough-in work to final fixture installation. New layouts, modern fixtures, and code-compliant work.
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

      <EmergencyBanner variant="inline" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Bathroom Renovation Plumbing</h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <p className="text-lg text-gray-600">
                A bathroom remodel is an exciting project, but the plumbing needs to be done right. Whether you&apos;re updating fixtures in place or completely reconfiguring your bathroom layout, our plumbers ensure proper rough-in, code compliance, and leak-free final connections.
              </p>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/modern-bathroom-shower-remodel.jpg"
                  alt="Modern bathroom shower remodel with custom tile work in East Brunswick NJ"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Project Gallery */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Bathroom Remodel Work</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              <div className="rounded-lg overflow-hidden">
                <Image src="/images/bathroom-remodel-marble-shower.jpg" alt="Marble shower bathroom remodel" width={300} height={300} className="w-full h-48 object-cover hover:scale-105 transition" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image src="/images/bathroom-renovation-glass-shower-door.jpg" alt="Glass shower door installation" width={300} height={300} className="w-full h-48 object-cover hover:scale-105 transition" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image src="/images/double-vanity-bathroom-installation.jpg" alt="Double vanity bathroom installation" width={300} height={300} className="w-full h-48 object-cover hover:scale-105 transition" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image src="/images/walk-in-shower-glass-door-install.jpg" alt="Walk-in shower installation" width={300} height={300} className="w-full h-48 object-cover hover:scale-105 transition" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image src="/images/bathroom-vanity-sink-installation.jpg" alt="Bathroom vanity sink installation" width={300} height={300} className="w-full h-48 object-cover hover:scale-105 transition" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image src="/images/shower-fixture-installation-nj.jpg" alt="Shower fixture installation NJ" width={300} height={300} className="w-full h-48 object-cover hover:scale-105 transition" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">How We Work With Your Remodel</h3>
            <div className="space-y-4 mb-12">
              {phases.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">{item.phase}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Bathroom Remodel Plumbing Services</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-blue-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">{service}</span>
                </div>
              ))}
            </div>

            {/* Popular Upgrades */}
            <div className="bg-blue-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Bathroom Upgrades We Install</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Walk-In Showers", desc: "Curbless or low-threshold showers with modern fixtures" },
                  { title: "Freestanding Tubs", desc: "Floor-mounted faucets and proper drainage" },
                  { title: "Double Vanities", desc: "Dual sink plumbing for busy bathrooms" },
                  { title: "Heated Floors", desc: "We work with radiant heat systems (plumbing connections)" },
                  { title: "Bidet Toilets", desc: "Modern bidet seats or integrated bidet toilets" },
                  { title: "Steam Showers", desc: "Plumbing for steam generators and drainage" },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold mb-4">Why Choose Us for Your Remodel</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Licensed & insured plumbers",
                  "Permits pulled and inspections scheduled",
                  "Coordinate with other trades",
                  "Clear communication throughout",
                  "Clean, professional workmanship",
                  "Warranty on our work",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/kitchen-bathroom/toilet-repair" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Toilet Installation
                </Link>
                <Link href="/services/kitchen-bathroom/shower-tub" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Shower & Tub Plumbing
                </Link>
                <Link href="/services/kitchen-bathroom/sink-installation" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Sink Installation
                </Link>
                <Link href="/services/water-heater" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Heater Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Bathroom Remodel FAQ" faqs={faqs} />

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

      <CTASection title="Planning a Bathroom Remodel?" description="Contact us for a free plumbing consultation and estimate for your renovation project." />
    </>
  );
}