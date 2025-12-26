import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ServiceSchema from "@/components/ServiceSchema";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Plumbing Services | Faucets, Toilets, Sinks",
  description: "Professional kitchen and bathroom plumbing in East Brunswick, NJ. Faucet repair, toilet installation, garbage disposal, sink plumbing, and bathroom remodeling. Call (718) 427-4396.",
  keywords: [
    "kitchen plumbing",
    "bathroom plumbing",
    "faucet repair",
    "toilet repair",
    "garbage disposal",
    "sink installation",
    "bathroom remodel plumber",
  ],
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/kitchen-bathroom",
  },
};

const services = [
  {
    title: "Faucet Repair & Installation",
    href: "/services/kitchen-bathroom/faucet-repair",
    description: "Dripping faucets, low pressure, and new faucet installations. Kitchen and bathroom faucets of all types.",
    icon: "💧",
  },
  {
    title: "Toilet Repair & Installation",
    href: "/services/kitchen-bathroom/toilet-repair",
    description: "Running toilets, clogs, leaks, and complete toilet replacements. We service all toilet brands.",
    icon: "🚽",
  },
  {
    title: "Garbage Disposal Services",
    href: "/services/kitchen-bathroom/garbage-disposal",
    description: "Garbage disposal repair, replacement, and new installations. Get your kitchen sink working again.",
    icon: "⚙️",
  },
  {
    title: "Sink Installation & Repair",
    href: "/services/kitchen-bathroom/sink-installation",
    description: "Kitchen and bathroom sink installation, faucet hookups, drain connections, and leak repairs.",
    icon: "🔧",
  },
  {
    title: "Shower & Tub Plumbing",
    href: "/services/kitchen-bathroom/shower-tub",
    description: "Shower valve repair, tub drain issues, showerhead installation, and bathtub plumbing.",
    icon: "🚿",
  },
  {
    title: "Bathroom Remodel Plumbing",
    href: "/services/kitchen-bathroom/bathroom-remodel",
    description: "Complete plumbing for bathroom renovations. Fixture relocation, new installations, and upgrades.",
    icon: "🏠",
  },
];

const faqs = [
  {
    question: "Do you work with all faucet and fixture brands?",
    answer: "Yes, our plumbers service all major brands including Moen, Delta, Kohler, American Standard, Pfister, and more. We can also help you select new fixtures if you're upgrading.",
  },
  {
    question: "How much does it cost to replace a toilet?",
    answer: "Toilet replacement typically costs $250-$500 including installation, depending on the toilet model and any additional work needed. We provide upfront pricing before starting work.",
  },
  {
    question: "Can you help with a bathroom remodel?",
    answer: "We handle all plumbing aspects of bathroom remodels: moving water lines, installing new fixtures, setting toilets, connecting sinks and showers, and ensuring proper drainage. We coordinate with your contractor.",
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes, we provide free estimates for most kitchen and bathroom plumbing projects. For service calls, there's a diagnostic fee that's waived if you proceed with repairs.",
  },
];

export default function KitchenBathroomPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Kitchen & Bathroom Plumbing Services"
        serviceDescription="Professional kitchen and bathroom plumbing in East Brunswick, NJ. Faucet repair, toilet installation, garbage disposal, sink plumbing, shower repair, and bathroom remodeling."
        serviceUrl="/services/kitchen-bathroom"
        serviceImage="https://www.illyrianplumber.com/images/modern-bathroom-shower-remodel.jpg"
        serviceType="Kitchen & Bathroom Plumbing"
      />
      <section className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/modern-bathroom-shower-remodel.jpg"
            alt="Modern bathroom shower remodel in East Brunswick NJ"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-blue-900/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Kitchen & Bathroom" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kitchen & Bathroom Plumbing</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              From dripping faucets to complete bathroom remodels, we handle all kitchen and bathroom plumbing needs. Professional installation, repair, and replacement services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-5 py-3 rounded-lg font-medium text-sm transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-5 py-3 rounded-lg font-medium text-sm transition">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName="Kitchen/Bathroom" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kitchen & Bathroom Plumbing Services</h2>
            <p className="text-lg text-gray-600 mb-10">
              Your kitchen and bathroom plumbing work hard every day. When faucets drip, toilets run, or sinks clog, you need a reliable plumber who can fix it right the first time. We service all kitchen and bathroom fixtures and can help with remodeling projects too.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex gap-4 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition group"
                >
                  <span className="text-3xl">{service.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-700 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-blue-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us for Kitchen & Bathroom Plumbing</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "All Brands Serviced", desc: "Moen, Delta, Kohler, American Standard, and more" },
                  { title: "Upfront Pricing", desc: "Know the cost before we start any work" },
                  { title: "Quality Fixtures", desc: "We install top-quality parts that last" },
                  { title: "Clean Work", desc: "We respect your home and clean up after ourselves" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-700 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/drain-sewer/drain-cleaning" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Drain Cleaning Services
                </Link>
                <Link href="/services/water-heater" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Heater Services
                </Link>
                <Link href="/services/emergency-plumbing" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Emergency Plumbing
                </Link>
                <Link href="/services/commercial" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Commercial Plumbing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Kitchen & Bathroom Plumbing FAQ" faqs={faqs} />

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

      <CTASection title="Need Kitchen or Bathroom Plumbing?" description="Contact us for professional faucet, toilet, sink, and fixture services." />
    </>
  );
}