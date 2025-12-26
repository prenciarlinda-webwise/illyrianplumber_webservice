import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Water Heater Installation | Professional Install Service NJ",
  description: "Professional water heater installation in East Brunswick, NJ. New construction, upgrades, and conversions. Tank and tankless options. Free estimates. Call (718) 427-4396.",
  keywords: [
    "water heater installation",
    "water heater installation cost",
    "install water heater",
    "new water heater installation",
    "water heater installation near me",
    "hot water heater installation",
  ],
};

const faqs = [
  {
    question: "How much does water heater installation cost?",
    answer: "Water heater installation costs range from $1,000-$3,500 for tank units and $2,500-$5,500 for tankless, including the unit and labor. Factors include unit type, capacity, fuel source, and any required upgrades. We provide free, detailed estimates.",
  },
  {
    question: "How long does installation take?",
    answer: "Standard water heater installation takes 2-4 hours. New installations in remodels or new construction may take longer depending on plumbing and gas/electrical requirements.",
  },
  {
    question: "Do I need a permit for water heater installation?",
    answer: "Yes, New Jersey requires permits for water heater installation. We handle all permit applications and ensure installation meets local codes and passes inspection.",
  },
  {
    question: "What's included in your installation service?",
    answer: "Our installation includes: the water heater unit, all necessary fittings and connections, proper venting (gas units), permit acquisition, installation to code, testing, old unit removal (if applicable), and warranty documentation.",
  },
];

export default function WaterHeaterInstallationPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Water Heater", href: "/services/water-heater" },
            { label: "Installation" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Water Heater Installation</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional water heater installation for new construction, remodels, and upgrades. We install all types—tank, tankless, gas, and electric—with proper permits and code compliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName="Water Heater" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Water Heater Installation in New Jersey</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you&apos;re building a new home, renovating, or upgrading your current water heater, proper installation is critical for safety, efficiency, and longevity. Our licensed plumbers ensure your water heater is installed correctly, meets all codes, and operates at peak performance.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Installation Types We Offer</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "New Construction", desc: "Complete water heater installation for new homes. We work with builders to install the right system." },
                { title: "Replacement Installation", desc: "Out with the old, in with the new. We remove and properly dispose of your old unit." },
                { title: "Upgrade Installation", desc: "Upgrading from tank to tankless? We handle all conversions including gas line upgrades." },
                { title: "Remodel Installation", desc: "Kitchen or bathroom remodel? We install water heaters to support your new layout." },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h3>
            <div className="bg-green-50 rounded-xl p-6 mb-12">
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Water heater unit",
                  "All fittings and connections",
                  "Proper venting (gas units)",
                  "Expansion tank (if required)",
                  "Permit acquisition",
                  "Code-compliant installation",
                  "System testing",
                  "Warranty documentation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Explore Your Options</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-heater/tankless" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Tankless Water Heaters
                </Link>
                <Link href="/services/water-heater/gas-water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Gas Water Heaters
                </Link>
                <Link href="/services/water-heater/electric-water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Electric Water Heaters
                </Link>
                <Link href="/services/water-heater/repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Heater Repair
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Water Heater Installation FAQ" faqs={faqs} />

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

      <CTASection title="Need Water Heater Installation?" description="Contact us for a free estimate on professional water heater installation." />
    </>
  );
}