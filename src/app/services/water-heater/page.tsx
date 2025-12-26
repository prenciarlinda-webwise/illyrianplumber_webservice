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
  title: "Water Heater Services | Repair, Replacement & Installation",
  description: "Professional water heater repair, replacement, and installation in East Brunswick, NJ. Tank & tankless water heaters. Same-day service available. Call (718) 427-4396.",
  keywords: [
    "water heater repair East Brunswick NJ",
    "water heater replacement",
    "water heater installation",
    "tankless water heater",
    "hot water heater repair",
    "water heater service near me",
  ],
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/water-heater",
  },
};

const services = [
  {
    title: "Water Heater Repair",
    href: "/services/water-heater/repair",
    description: "Fast diagnosis and repair for all water heater problems. No hot water, leaks, strange noises - we fix it all.",
    keywords: "water heater repair, hot water heater repair, water heater not working",
  },
  {
    title: "Water Heater Replacement",
    href: "/services/water-heater/replacement",
    description: "Professional water heater replacement with quality units. We remove your old unit and install a new efficient model.",
    keywords: "water heater replacement, new water heater, replace water heater",
  },
  {
    title: "Water Heater Installation",
    href: "/services/water-heater/installation",
    description: "Expert installation of new water heaters for new construction or upgrades. Proper sizing and code-compliant setup.",
    keywords: "water heater installation, install water heater, water heater installation cost",
  },
  {
    title: "Tankless Water Heater",
    href: "/services/water-heater/tankless",
    description: "Endless hot water on demand with tankless water heater installation. Energy-efficient and space-saving solutions.",
    keywords: "tankless water heater, on-demand water heater, tankless installation",
  },
  {
    title: "Gas Water Heater",
    href: "/services/water-heater/gas-water-heater",
    description: "Gas water heater repair, replacement, and installation. Licensed for gas work with safety as our priority.",
    keywords: "gas water heater, gas water heater repair, gas water heater installation",
  },
  {
    title: "Electric Water Heater",
    href: "/services/water-heater/electric-water-heater",
    description: "Electric water heater services including element replacement, thermostat repair, and full system installation.",
    keywords: "electric water heater, electric water heater repair, electric hot water heater",
  },
];

const faqs = [
  {
    question: "How long does a water heater last?",
    answer: "Traditional tank water heaters typically last 8-12 years, while tankless water heaters can last 15-20 years with proper maintenance. Factors affecting lifespan include water quality, usage patterns, and regular maintenance. If your water heater is approaching these ages, consider scheduling an inspection.",
  },
  {
    question: "What are signs my water heater needs repair?",
    answer: "Common signs include: no hot water or inconsistent temperatures, rusty or discolored water, strange noises (popping, rumbling), water pooling around the unit, reduced hot water capacity, and higher energy bills. If you notice any of these, call us for a professional diagnosis.",
  },
  {
    question: "Should I repair or replace my water heater?",
    answer: "Consider replacement if: the unit is over 10 years old, repair costs exceed 50% of replacement cost, you're experiencing frequent breakdowns, or you want to upgrade to a more efficient model. Our technicians provide honest recommendations based on your specific situation.",
  },
  {
    question: "How much does water heater installation cost?",
    answer: "Water heater installation costs vary based on the type (tank vs tankless), fuel source (gas vs electric), capacity, and installation complexity. We provide free, upfront estimates before any work begins. Contact us for a personalized quote.",
  },
  {
    question: "What's the difference between tank and tankless water heaters?",
    answer: "Tank water heaters store and heat water continuously (40-80 gallons), while tankless units heat water on demand. Tankless heaters are more energy-efficient and provide unlimited hot water but have higher upfront costs. We can help you choose the best option for your home.",
  },
];

export default function WaterHeaterPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Water Heater Repair, Replacement & Installation"
        serviceDescription="Professional water heater services in East Brunswick, NJ. Expert repair, replacement, and installation for tank and tankless water heaters. Same-day service available."
        serviceUrl="/services/water-heater"
        serviceImage="https://www.illyrianplumber.com/images/water-heater-repair-service.jpg"
        serviceType="Water Heater Services"
      />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/water-heater-repair-service.jpg"
            alt="Water heater repair and installation services in East Brunswick NJ"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Water Heater" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Water Heater Repair, Replacement & Installation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Expert water heater services in East Brunswick and Central New Jersey. From emergency repairs to new tankless installations, our licensed plumbers ensure you always have reliable hot water.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-lg font-medium text-sm transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-5 py-3 rounded-lg font-medium text-sm transition"
              >
                Get Free Estimate
              </Link>
            </div>
            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Same-Day Service
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                All Brands Serviced
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Upfront Pricing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner - Cross-Silo Link */}
      <EmergencyBanner variant="default" serviceName="Water Heater" />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Water Heater Services in New Jersey
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-lg text-gray-600 mb-4">
                  At Illyrian Plumber, we understand that a functioning water heater is essential for your daily comfort. Whether you need a quick repair, a complete replacement, or a new installation, our experienced technicians deliver fast, reliable service backed by our satisfaction guarantee.
                </p>
                <p className="text-lg text-gray-600">
                  We service all types and brands of water heaters, including traditional tank models, energy-efficient tankless systems, gas and electric units. Our team provides honest assessments and transparent pricing so you can make informed decisions about your home&apos;s hot water system.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/tankless-water-heater-installation.jpg"
                  alt="Professional tankless water heater installation in East Brunswick NJ"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Services Grid */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Water Heater Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-red-200 transition group"
                >
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-red-700 transition mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-red-700 font-medium">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            {/* Process Section */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Water Heater Service Process</h3>
            <div className="space-y-4 mb-12">
              {[
                { step: "1", title: "Schedule Your Appointment", desc: "Call us or request service online. We offer same-day appointments for urgent issues." },
                { step: "2", title: "Expert Diagnosis", desc: "Our technician arrives promptly, inspects your water heater, and explains the issue clearly." },
                { step: "3", title: "Upfront Quote", desc: "You receive a detailed, written estimate before any work begins. No surprises." },
                { step: "4", title: "Professional Service", desc: "We complete the repair or installation efficiently, respecting your home and time." },
                { step: "5", title: "Quality Guarantee", desc: "We stand behind our work with warranties on parts and labor." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Internal Link: Related Services */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Plumbing Services</h3>
              <p className="text-gray-600 mb-4">
                Water heater issues often relate to other plumbing systems. Explore our related services:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/emergency-plumbing" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  24/7 Emergency Plumbing
                </Link>
                <Link href="/services/drain-sewer/drain-cleaning" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Drain Cleaning Services
                </Link>
                <Link href="/services/kitchen-bathroom" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Kitchen & Bathroom Plumbing
                </Link>
                <Link href="/services/commercial/boiler-repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Boiler Repair Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Water Heater FAQ"
        description="Common questions about water heater repair, replacement, and installation"
        faqs={faqs}
      />

      {/* Service Areas */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Water Heater Service Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {BUSINESS_INFO.serviceAreas.map((area, index) => (
              <Link
                key={index}
                href={`/service-areas/plumber-${area.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-gray-100 hover:bg-red-50 hover:text-red-700 px-4 py-2 rounded-full text-sm font-medium transition"
              >
                {area}, NJ
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Water Heater Service?"
        description="Contact Illyrian Plumber for professional water heater repair, replacement, or installation in East Brunswick and Central New Jersey."
      />
    </>
  );
}