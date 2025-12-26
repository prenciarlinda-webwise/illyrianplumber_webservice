import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tankless Water Heater Installation & Repair | On-Demand Hot Water",
  description: "Tankless water heater installation, repair, and replacement in East Brunswick, NJ. Endless hot water, energy savings. Rinnai, Navien, Noritz experts. Call (718) 427-4396.",
  keywords: [
    "tankless water heater",
    "tankless water heater installation",
    "tankless water heater cost",
    "on-demand water heater",
    "tankless water heater repair",
    "Rinnai tankless",
    "Navien tankless",
  ],
};

const benefits = [
  { title: "Endless Hot Water", desc: "Never run out of hot water. Tankless units heat water on demand, providing continuous supply." },
  { title: "Energy Savings", desc: "Save 20-30% on water heating costs. Only heats water when you need it, no standby losses." },
  { title: "Space Saving", desc: "Compact wall-mounted design frees up floor space. Perfect for smaller homes or closets." },
  { title: "Longer Lifespan", desc: "Tankless units last 15-20 years—nearly double the life of traditional tank heaters." },
  { title: "Cleaner Water", desc: "No tank means no sediment buildup or rust. Enjoy cleaner, fresher hot water." },
  { title: "Lower Risk of Leaks", desc: "No tank to corrode and leak. Reduce water damage risk significantly." },
];

const faqs = [
  {
    question: "How much does tankless water heater installation cost?",
    answer: "Tankless water heater installation typically costs $2,500-$5,000 including the unit and labor. Costs vary based on unit capacity, gas or electric, and any required upgrades to gas lines or electrical. We provide free estimates.",
  },
  {
    question: "Is a tankless water heater worth it?",
    answer: "For many homes, yes. While upfront costs are higher, you'll save on energy bills and the unit lasts twice as long. They're especially worth it for larger families with high hot water demand or homes with limited space.",
  },
  {
    question: "What size tankless water heater do I need?",
    answer: "Size is measured in GPM (gallons per minute). A 2-3 bathroom home typically needs 8-10 GPM. We calculate your peak demand and recommend the right size for your household.",
  },
  {
    question: "Do you repair tankless water heaters?",
    answer: "Yes, we repair all major tankless brands including Rinnai, Navien, Noritz, Bosch, and Rheem. Common repairs include igniter issues, heat exchanger problems, and error code diagnostics.",
  },
  {
    question: "Can I convert from tank to tankless?",
    answer: "Yes, we regularly convert homes from tank to tankless. This may require upgrading your gas line or electrical panel. We assess your home and provide a complete quote including any necessary upgrades.",
  },
];

export default function TanklessWaterHeaterPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Water Heater", href: "/services/water-heater" },
            { label: "Tankless" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tankless Water Heater Installation & Repair</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Upgrade to endless hot water with a tankless water heater. Energy-efficient, space-saving, and built to last. Expert installation and repair services for all major brands.
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

      <EmergencyBanner variant="compact" serviceName="Tankless Water Heater" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Go Tankless?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Tankless water heaters, also known as on-demand water heaters, provide hot water only when you need it. Unlike traditional tank heaters that constantly heat and store water, tankless units heat water instantly as it flows through, delivering endless hot water while saving energy.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Tankless Water Heaters</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-green-50 border border-green-100 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Brands We Install & Service</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {["Rinnai", "Navien", "Noritz", "Bosch", "Rheem", "Takagi", "Stiebel Eltron", "EcoSmart"].map((brand) => (
                <span key={brand} className="bg-gray-100 px-4 py-2 rounded-full text-gray-700 font-medium">{brand}</span>
              ))}
            </div>

            {/* Internal Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compare Your Options</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-heater/gas-water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Gas Water Heaters
                </Link>
                <Link href="/services/water-heater/electric-water-heater" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Electric Water Heaters
                </Link>
                <Link href="/services/water-heater/replacement" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Tank Replacement
                </Link>
                <Link href="/services/emergency-plumbing" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Emergency Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Tankless Water Heater FAQ" faqs={faqs} />

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

      <CTASection title="Ready for Endless Hot Water?" description="Contact us for a free tankless water heater consultation and estimate." />
    </>
  );
}