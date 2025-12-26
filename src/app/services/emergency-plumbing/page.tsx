import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ServiceSchema from "@/components/ServiceSchema";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "24/7 Emergency Plumber | Emergency Plumbing Services NJ",
  description: "24-hour emergency plumber in East Brunswick, NJ. Fast response for burst pipes, water leaks, gas leaks, and plumbing emergencies. Call (718) 427-4396 now.",
  keywords: [
    "emergency plumber",
    "emergency plumber near me",
    "24 hour plumber",
    "emergency plumbing services",
    "24/7 plumber",
    "plumbing emergency",
    "emergency plumber NJ",
  ],
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/emergency-plumbing",
  },
};

const emergencyServices = [
  {
    title: "Burst Pipe Repair",
    href: "/services/emergency-plumbing/burst-pipe-repair",
    description: "Immediate response to burst or broken pipes. We stop the water, repair the damage, and prevent further destruction to your home.",
    urgent: true,
  },
  {
    title: "Water Leak Detection",
    href: "/services/emergency-plumbing/water-leak-detection",
    description: "Advanced technology to find hidden leaks in walls, floors, ceilings, and underground. Stop water damage before it spreads.",
    urgent: true,
  },
  {
    title: "Slab Leak Detection",
    href: "/services/emergency-plumbing/slab-leak-detection",
    description: "Specialized detection for leaks under concrete foundations. Non-invasive methods to locate and repair slab leaks.",
    urgent: false,
  },
  {
    title: "Gas Leak Repair",
    href: "/services/emergency-plumbing/gas-leak-repair",
    description: "Licensed gas leak detection and repair. Your safety is our priority. Available 24/7 for gas emergencies.",
    urgent: true,
  },
  {
    title: "Emergency Drain Cleaning",
    href: "/services/emergency-plumbing/emergency-drain-cleaning",
    description: "Severe clogs and backups can't wait. Emergency drain clearing to restore flow and prevent sewage backup.",
    urgent: false,
  },
];

const faqs = [
  {
    question: "What qualifies as a plumbing emergency?",
    answer: "Plumbing emergencies include: burst or leaking pipes, sewage backups, no water, gas leaks, overflowing toilets that won't stop, water heater failures (especially in cold weather), and any situation causing active water damage. When in doubt, call us—we'll help you assess the situation.",
  },
  {
    question: "How fast can you respond to an emergency?",
    answer: "We prioritize emergencies and typically arrive within 30-60 minutes in our service area. Response times may vary based on current call volume and your location, but we always dispatch as quickly as possible for true emergencies.",
  },
  {
    question: "Do you charge extra for emergency calls?",
    answer: "We have transparent pricing for emergency services. While emergency calls may have a service fee due to the urgent nature and after-hours availability, we always provide upfront pricing before starting any work. No surprises.",
  },
  {
    question: "What should I do while waiting for the emergency plumber?",
    answer: "For water emergencies: Shut off the main water valve if possible. For gas leaks: Leave the house, don't operate switches, and call from outside. For sewage: Avoid using water fixtures. We'll guide you over the phone if needed.",
  },
  {
    question: "Are you available on holidays?",
    answer: "Yes, we provide 24/7 emergency plumbing service 365 days a year, including all holidays. Plumbing emergencies don't take days off, and neither do we.",
  },
];

export default function EmergencyPlumbingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="24/7 Emergency Plumbing Services"
        serviceDescription="Professional emergency plumber available 24 hours a day, 7 days a week in East Brunswick, NJ and Central New Jersey. Fast response for burst pipes, water leaks, gas leaks, sewer backups, and all plumbing emergencies."
        serviceUrl="/services/emergency-plumbing"
        serviceImage="https://www.illyrianplumber.com/images/emergency-plumbing-services-nj.jpg"
        serviceType="Emergency Plumbing"
      />
      {/* Hero - Emergency Focused */}
      <section className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/emergency-plumbing-services-nj.jpg"
            alt="24/7 Emergency plumbing services in East Brunswick NJ"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 via-red-800/50 to-red-900/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Emergency Plumbing" }
          ]} />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              Available 24/7 - Plumber On Call Now
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              24/7 Emergency Plumber
            </h1>
            <p className="text-xl text-red-100 mb-8 max-w-2xl">
              Plumbing emergency? Don&apos;t panic. Our emergency plumbers respond fast to burst pipes, water leaks, gas leaks, and sewage backups. We&apos;re here when you need us most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-red-700 px-5 py-3 rounded-lg font-semibold text-sm transition transform hover:scale-105 shadow-lg"
              >
                <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                CALL NOW: {BUSINESS_INFO.phone}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-red-100 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30-60 Minute Response
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Upfront Pricing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-lg p-5 text-center">
              <h3 className="text-white font-semibold mb-2">Water Emergency?</h3>
              <p className="text-gray-400 text-sm mb-3">Shut off main water valve</p>
              <Link href="/services/emergency-plumbing/burst-pipe-repair" className="text-red-400 hover:text-red-300 font-medium text-sm">
                Burst Pipe Help →
              </Link>
            </div>
            <div className="bg-gray-800 rounded-lg p-5 text-center">
              <h3 className="text-white font-semibold mb-2">Smell Gas?</h3>
              <p className="text-gray-400 text-sm mb-3">Leave home immediately</p>
              <Link href="/services/emergency-plumbing/gas-leak-repair" className="text-red-400 hover:text-red-300 font-medium text-sm">
                Gas Leak Help →
              </Link>
            </div>
            <div className="bg-gray-800 rounded-lg p-5 text-center">
              <h3 className="text-white font-semibold mb-2">Sewage Backup?</h3>
              <p className="text-gray-400 text-sm mb-3">Stop using water fixtures</p>
              <Link href="/services/emergency-plumbing/emergency-drain-cleaning" className="text-red-400 hover:text-red-300 font-medium text-sm">
                Drain Emergency Help →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Plumbing Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              When plumbing disasters strike, every minute counts. Our emergency plumbers are equipped to handle the most urgent situations, arriving quickly with the tools and expertise to stop damage and restore your plumbing.
            </p>

            <div className="space-y-4 mb-12">
              {emergencyServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-red-200 transition group"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${service.urgent ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-700 transition">
                        {service.title}
                      </h3>
                      {service.urgent && (
                        <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded">URGENT</span>
                      )}
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-red-700 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ))}
            </div>

            {/* Related Services - Cross-Silo */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Non-Emergency Services</h3>
              <p className="text-gray-600 mb-4">
                For non-urgent plumbing needs, explore our other services:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Heater Services
                </Link>
                <Link href="/services/drain-sewer" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Drain & Sewer Services
                </Link>
                <Link href="/services/kitchen-bathroom" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Kitchen & Bathroom Plumbing
                </Link>
                <Link href="/services/commercial" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Commercial Plumbing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Emergency Plumbing FAQ" faqs={faqs} />

      {/* Service Areas */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Emergency Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {BUSINESS_INFO.serviceAreas.map((area, index) => (
              <Link key={index} href={`/service-areas/plumber-${area.toLowerCase().replace(/\s+/g, "-")}`} className="bg-gray-100 hover:bg-red-50 hover:text-red-700 px-4 py-2 rounded-full text-sm font-medium transition">
                {area}, NJ
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <CTASection
        title="Plumbing Emergency? Call Now!"
        description="Our emergency plumbers are standing by 24/7. Fast response, professional service, guaranteed."
        variant="default"
      />
    </>
  );
}