import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Grease Trap Services | Installation & Cleaning NJ",
  description: "Grease trap installation, cleaning, and maintenance in East Brunswick, NJ. Keep your restaurant compliant with health codes. Call (718) 427-4396.",
  keywords: [
    "grease trap",
    "grease trap cleaning",
    "grease trap installation",
    "grease interceptor",
    "grease trap service",
    "restaurant grease trap",
    "grease trap maintenance",
  ],
};

const services = [
  "Grease trap installation",
  "Grease trap cleaning",
  "Grease trap repair",
  "Grease interceptor sizing",
  "Grease trap replacement",
  "Compliance inspections",
  "Scheduled maintenance",
  "Emergency service",
];

const faqs = [
  {
    question: "How often should grease traps be cleaned?",
    answer: "Most restaurants need grease trap cleaning every 1-3 months. The general rule is cleaning when grease reaches 25% of trap capacity. High-volume kitchens may need monthly service. We can help establish the right schedule for your operation.",
  },
  {
    question: "What size grease trap do I need?",
    answer: "Grease trap sizing depends on your fixtures, flow rate, and local codes. Generally, full-service restaurants need larger interceptors than small cafes. We calculate proper sizing based on your kitchen layout and local requirements.",
  },
  {
    question: "What happens if I don't maintain my grease trap?",
    answer: "Neglected grease traps cause drain backups, foul odors, and health code violations. They can also lead to municipal sewer line blockages, which may result in fines. Regular maintenance is far cheaper than emergency cleaning and penalties.",
  },
  {
    question: "Do you provide cleaning certificates for the health department?",
    answer: "Yes, we provide documentation of all grease trap service including date, amount removed, and condition assessment. This documentation is important for health department inspections and compliance records.",
  },
];

export default function GreaseTrapPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Commercial", href: "/services/commercial" },
            { label: "Grease Trap" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Grease Trap Services</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional grease trap installation, cleaning, and maintenance. Keep your restaurant compliant with health codes and prevent costly drain backups.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName="Grease Trap" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Grease Trap Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              Grease traps are required for food service establishments to prevent fats, oils, and grease from entering the sewer system. Proper sizing, installation, and regular cleaning keeps you compliant and prevents costly backups.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Grease Trap Services</h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* How Grease Traps Work */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How Grease Traps Work</h3>
              <p className="text-gray-700 mb-4">
                Grease traps (or interceptors) catch fats, oils, and grease (FOG) before they enter the sewer system. Water flows through the trap, and because grease is lighter than water, it rises and is trapped while water flows out below.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <span className="text-2xl font-bold text-red-700">1</span>
                  <p className="text-sm text-gray-600 mt-2">Wastewater enters trap</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <span className="text-2xl font-bold text-red-700">2</span>
                  <p className="text-sm text-gray-600 mt-2">Grease floats, solids sink</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <span className="text-2xl font-bold text-red-700">3</span>
                  <p className="text-sm text-gray-600 mt-2">Clean water flows out</p>
                </div>
              </div>
            </div>

            {/* Compliance */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Stay Compliant—Avoid Fines</h3>
              <p className="text-gray-700 mb-4">
                Health departments and municipal sewer authorities require proper grease trap maintenance. Non-compliance can result in:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  Health code violations and closure orders
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  Municipal fines for sewer line contamination
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  Costly emergency cleaning during service
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  Liability for sewer line backups
                </li>
              </ul>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/commercial/restaurant-plumbing" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Restaurant Plumbing
                </Link>
                <Link href="/services/drain-sewer/hydro-jetting" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Hydro Jetting
                </Link>
                <Link href="/services/drain-sewer/drain-cleaning" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Drain Cleaning
                </Link>
                <Link href="/services/emergency-plumbing" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Emergency Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Grease Trap FAQ" faqs={faqs} />

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

      <CTASection title="Need Grease Trap Service?" description="Contact us for grease trap cleaning, installation, and maintenance." />
    </>
  );
}
