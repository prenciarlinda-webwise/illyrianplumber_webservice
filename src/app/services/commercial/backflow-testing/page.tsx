import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Backflow Testing & Prevention | Certified Testing NJ",
  description: "Certified backflow testing and prevention in East Brunswick, NJ. Annual testing, installation, and repair. Protect your water supply. Call (718) 427-4396.",
  keywords: [
    "backflow testing",
    "backflow preventer",
    "backflow testing near me",
    "backflow prevention",
    "backflow certification",
    "annual backflow test",
    "backflow device installation",
  ],
};

const devices = [
  { type: "Reduced Pressure Zone (RPZ)", desc: "Highest protection level. Required for high-hazard applications like chemical plants, medical facilities.", use: "High-hazard connections" },
  { type: "Double Check Valve (DCV)", desc: "Moderate protection. Common for fire sprinkler systems and irrigation.", use: "Medium-hazard connections" },
  { type: "Pressure Vacuum Breaker (PVB)", desc: "Protection for irrigation and non-pressurized systems. Above-ground installation.", use: "Irrigation, outdoor uses" },
  { type: "Atmospheric Vacuum Breaker (AVB)", desc: "Simple protection for individual fixtures. Common on hose bibbs.", use: "Low-hazard fixtures" },
];

const faqs = [
  {
    question: "How often is backflow testing required?",
    answer: "Most jurisdictions require annual backflow testing for commercial and industrial properties. Some high-hazard installations may require more frequent testing. We track your testing schedule and send reminders when testing is due.",
  },
  {
    question: "What happens if my backflow device fails testing?",
    answer: "If a device fails, we can often repair it on-site by replacing internal components. If replacement is needed, we install new devices. We re-test after repairs to ensure compliance and file the required documentation.",
  },
  {
    question: "Do residential properties need backflow testing?",
    answer: "Most single-family homes don't require testing unless they have irrigation systems, pools, or other cross-connection risks. If your water company requires testing, we can help with residential backflow testing as well.",
  },
  {
    question: "How long does backflow testing take?",
    answer: "Individual device testing takes 15-30 minutes. For properties with multiple devices, we can typically test all devices in a single visit. We schedule efficiently to minimize disruption to your business.",
  },
];

export default function BackflowTestingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Commercial", href: "/services/commercial" },
            { label: "Backflow Testing" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Backflow Testing & Prevention</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Certified backflow testing, installation, and repair. Protect your water supply and maintain compliance with annual testing requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                Schedule Testing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName="Backflow" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Certified Backflow Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              Backflow prevention devices protect your drinking water from contamination by preventing water from flowing backward into the supply. Most commercial properties require annual testing to verify these devices work properly. Our certified technicians provide testing, installation, and repair services.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Backflow Device Types</h3>
            <div className="space-y-4 mb-12">
              {devices.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/3">
                      <h4 className="font-semibold text-gray-900">{item.type}</h4>
                      <span className="text-xs text-red-700 font-medium">{item.use}</span>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Backflow Services</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "Annual backflow testing",
                "Backflow device installation",
                "Device repair & rebuild",
                "Failed device replacement",
                "Test report filing",
                "Compliance documentation",
                "Multi-site testing programs",
                "New construction installation",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* Who Needs Testing */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Who Needs Backflow Testing?</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Commercial buildings",
                  "Industrial facilities",
                  "Fire sprinkler systems",
                  "Irrigation systems",
                  "Medical facilities",
                  "Restaurants & food service",
                  "Manufacturing plants",
                  "Schools & universities",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/commercial/plumbing-inspections" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Plumbing Inspections
                </Link>
                <Link href="/services/commercial" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Commercial Plumbing
                </Link>
                <Link href="/services/water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Heater Services
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

      <FAQSection title="Backflow Testing FAQ" faqs={faqs} />

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

      <CTASection title="Need Backflow Testing?" description="Contact us to schedule your annual backflow test." />
    </>
  );
}