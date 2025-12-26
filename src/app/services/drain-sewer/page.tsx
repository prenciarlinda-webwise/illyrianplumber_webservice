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
  title: "Drain & Sewer Services | Drain Cleaning & Sewer Repair NJ",
  description: "Professional drain and sewer services in East Brunswick, NJ. Drain cleaning, hydro jetting, sewer repair, camera inspection, and sump pump services. Call (718) 427-4396.",
  keywords: [
    "drain cleaning",
    "sewer repair",
    "clogged drain",
    "sewer line repair",
    "hydro jetting",
    "sump pump",
    "drain plumber",
    "sewer plumber",
  ],
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/drain-sewer",
  },
};

const services = [
  {
    title: "Drain Cleaning",
    href: "/services/drain-sewer/drain-cleaning",
    description: "Professional drain clearing for kitchen, bathroom, floor, and main drains. We clear clogs fast and restore proper flow.",
    icon: "🔧",
  },
  {
    title: "Hydro Jetting",
    href: "/services/drain-sewer/hydro-jetting",
    description: "High-pressure water jetting blasts away grease, roots, and stubborn buildup. The most thorough drain cleaning available.",
    icon: "💨",
  },
  {
    title: "Sewer Line Repair",
    href: "/services/drain-sewer/sewer-line-repair",
    description: "Trenchless and traditional sewer repair and replacement. Fix collapsed, cracked, or root-damaged sewer lines.",
    icon: "🏗️",
  },
  {
    title: "Camera Inspection",
    href: "/services/drain-sewer/camera-inspection",
    description: "Video camera inspection of drain and sewer lines. See exactly what's happening inside your pipes.",
    icon: "📹",
  },
  {
    title: "Sump Pump Services",
    href: "/services/drain-sewer/sump-pump",
    description: "Sump pump installation, repair, and replacement. Keep your basement dry and protected from flooding.",
    icon: "⬆️",
  },
];

const faqs = [
  {
    question: "How do I know if I have a sewer line problem?",
    answer: "Signs include: multiple drains backing up simultaneously, gurgling sounds from drains, sewage odors, slow drains throughout the house, and wet spots in the yard over the sewer line. These suggest a main line issue that needs professional attention.",
  },
  {
    question: "How often should drains be cleaned?",
    answer: "For preventive maintenance, we recommend annual drain cleaning for kitchen drains (grease buildup) and every 2-3 years for main lines. However, if you're experiencing slow drains, don't wait—call us before a complete backup occurs.",
  },
  {
    question: "What's the difference between drain cleaning and hydro jetting?",
    answer: "Standard drain cleaning uses a cable machine (snake) to punch through clogs. Hydro jetting uses high-pressure water to completely scour pipe walls, removing grease, scale, and roots. Hydro jetting is more thorough and lasts longer.",
  },
  {
    question: "Do you offer emergency drain services?",
    answer: "Yes, we provide 24/7 emergency drain and sewer service. Sewage backups and severe clogs need immediate attention—they're health hazards and can cause water damage. Call us anytime for emergencies.",
  },
];

export default function DrainSewerPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Drain & Sewer Services"
        serviceDescription="Professional drain cleaning and sewer services in East Brunswick, NJ. Drain cleaning, hydro jetting, sewer line repair, camera inspection, and sump pump services."
        serviceUrl="/services/drain-sewer"
        serviceImage="https://www.illyrianplumber.com/images/drain-vent-pipe-installation.jpg"
        serviceType="Drain & Sewer Services"
      />
      <section className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/drain-vent-pipe-installation.jpg"
            alt="Drain and sewer services in East Brunswick NJ"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-800/50 to-green-900/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Drain & Sewer" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Drain & Sewer Services</h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl">
              From clogged drains to sewer line repairs, we keep your drains flowing and your sewer system working properly. Professional equipment and experienced technicians.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-green-900 px-5 py-3 rounded-lg font-medium text-sm transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-5 py-3 rounded-lg font-medium text-sm transition">
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName="Drain/Sewer" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Drain & Sewer Services</h2>
            <p className="text-lg text-gray-600 mb-10">
              Your drain and sewer system is essential to your home&apos;s plumbing. When drains clog or sewer lines fail, you need fast, professional service. We offer complete drain clearing, sewer repair, and preventive maintenance to keep everything flowing.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex gap-4 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-200 transition group"
                >
                  <span className="text-3xl">{service.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-700 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ))}
            </div>

            {/* Warning Signs */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Warning Signs You Need Drain Service</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Slow draining sinks or tubs",
                  "Gurgling sounds from drains",
                  "Water backing up in fixtures",
                  "Sewage smell from drains",
                  "Multiple clogged drains",
                  "Water pooling in yard",
                ].map((sign, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700">{sign}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/emergency-plumbing/emergency-drain-cleaning" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Emergency Drain Cleaning
                </Link>
                <Link href="/services/emergency-plumbing" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  24/7 Emergency Plumbing
                </Link>
                <Link href="/services/kitchen-bathroom" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Kitchen & Bathroom Plumbing
                </Link>
                <Link href="/services/commercial" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Commercial Drain Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Drain & Sewer FAQ" faqs={faqs} />

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {BUSINESS_INFO.serviceAreas.map((area, index) => (
              <Link key={index} href={`/service-areas/plumber-${area.toLowerCase().replace(/\s+/g, "-")}`} className="bg-gray-100 hover:bg-green-50 hover:text-green-700 px-4 py-2 rounded-full text-sm font-medium transition">
                {area}, NJ
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Drain or Sewer Problems?" description="Contact us for professional drain cleaning and sewer services." />
    </>
  );
}