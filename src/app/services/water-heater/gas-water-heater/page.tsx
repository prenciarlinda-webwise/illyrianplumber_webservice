import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gas Water Heater Repair & Installation | Licensed Gas Plumbers",
  description: "Gas water heater repair, installation, and replacement in East Brunswick, NJ. Licensed for gas work. Safe, professional service. Call (718) 427-4396.",
  keywords: [
    "gas water heater",
    "gas water heater repair",
    "gas water heater installation",
    "gas water heater replacement",
    "gas hot water heater",
    "natural gas water heater",
  ],
};

const services = [
  { title: "Gas Water Heater Repair", desc: "Expert diagnosis and repair of pilot light issues, thermocouple problems, gas valve failures, and more." },
  { title: "Gas Water Heater Replacement", desc: "Professional removal and replacement with a new, efficient gas water heater." },
  { title: "New Gas Installation", desc: "Complete installation including gas line connections, venting, and permit compliance." },
  { title: "Gas Line Upgrades", desc: "Upgrading to a larger capacity unit may require gas line modifications. We handle it all." },
  { title: "Safety Inspections", desc: "Comprehensive safety checks for gas connections, venting, and proper operation." },
  { title: "Conversion Services", desc: "Converting from electric to gas? We install gas lines and water heaters together." },
];

const faqs = [
  {
    question: "Is it safe to repair a gas water heater myself?",
    answer: "No. Gas water heater repairs should only be performed by licensed professionals. Improper repairs can lead to gas leaks, carbon monoxide poisoning, or explosions. Always call a licensed plumber for gas appliance work.",
  },
  {
    question: "How do I know if my gas water heater is leaking gas?",
    answer: "Signs of a gas leak include: rotten egg smell (gas odorant), hissing sounds near the unit, dead plants nearby, or a higher than normal gas bill. If you suspect a leak, leave immediately and call your gas company, then call us for repairs.",
  },
  {
    question: "Why won't my gas water heater pilot light stay lit?",
    answer: "Common causes include: faulty thermocouple, dirty pilot tube, draft issues, or a failing gas control valve. Our technicians can diagnose and repair the issue quickly.",
  },
  {
    question: "Gas vs electric water heater - which is better?",
    answer: "Gas water heaters heat water faster and typically cost less to operate (lower fuel costs). Electric is easier to install and doesn't require venting. The best choice depends on your home's setup and preferences.",
  },
];

export default function GasWaterHeaterPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Water Heater", href: "/services/water-heater" },
            { label: "Gas Water Heater" }
          ]} />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Licensed Gas Plumbers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gas Water Heater Services</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional gas water heater repair, installation, and replacement. Our licensed technicians safely handle all gas appliance work with proper permits and code compliance.
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

      <EmergencyBanner variant="default" serviceName="Gas Water Heater" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Licensed Gas Water Heater Experts</h2>
            <p className="text-lg text-gray-600 mb-8">
              Gas water heaters require specialized knowledge and licensing to service safely. At Illyrian Plumber, our technicians are fully licensed for gas work, ensuring your water heater is repaired or installed safely and to code.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Gas Water Heater Services</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* Safety Notice */}
            <div className="bg-red-50 border-l-4 border-red-700 p-6 mb-12">
              <h3 className="text-lg font-bold text-red-800 mb-2">Gas Safety Warning</h3>
              <p className="text-red-700">
                If you smell gas or suspect a gas leak, leave your home immediately and call your gas company&apos;s emergency line. Do not operate any electrical switches or create sparks. Once safe, call us for professional <Link href="/services/emergency-plumbing/gas-leak-repair" className="underline font-semibold">gas leak repair</Link>.
              </p>
            </div>

            {/* Internal Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-heater/electric-water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Electric Water Heaters
                </Link>
                <Link href="/services/water-heater/tankless" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Tankless Water Heaters
                </Link>
                <Link href="/services/emergency-plumbing/gas-leak-repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Gas Leak Repair
                </Link>
                <Link href="/services/commercial/boiler-repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Boiler Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Gas Water Heater FAQ" faqs={faqs} />

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

      <CTASection title="Need Gas Water Heater Service?" description="Contact our licensed gas plumbers for safe, professional service." />
    </>
  );
}