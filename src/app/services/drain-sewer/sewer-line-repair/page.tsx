import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sewer Line Repair & Replacement | Trenchless Sewer NJ",
  description: "Sewer line repair and replacement in East Brunswick, NJ. Trenchless and traditional methods. Fix collapsed, cracked, or root-damaged sewer lines. Call (718) 427-4396.",
  keywords: [
    "sewer line repair",
    "sewer repair",
    "sewer line replacement",
    "trenchless sewer repair",
    "sewer pipe repair",
    "main sewer line repair",
    "broken sewer line",
  ],
};

const problems = [
  { issue: "Tree Root Intrusion", desc: "Roots enter through joints seeking water, causing blockages and pipe damage" },
  { issue: "Collapsed Pipe", desc: "Old pipes (especially clay or Orangeburg) can collapse from age or soil movement" },
  { issue: "Bellied Pipe", desc: "Section of pipe sinks, creating a low spot where waste and debris collect" },
  { issue: "Cracked/Broken Pipe", desc: "Ground movement, freezing, or age causes cracks that leak or allow root entry" },
  { issue: "Offset Joints", desc: "Pipe sections shift apart, causing blockages and leaks at connection points" },
  { issue: "Corroded Pipe", desc: "Old metal pipes corrode from inside, restricting flow and eventually failing" },
];

const methods = [
  { method: "Trenchless Pipe Lining (CIPP)", desc: "A resin-coated liner is inserted into the existing pipe and cured in place, creating a new pipe within the old one. Minimal digging required.", best: "Cracked pipes, root damage, moderate corrosion" },
  { method: "Trenchless Pipe Bursting", desc: "A new pipe is pulled through the old one, breaking the old pipe apart. Results in a completely new pipe.", best: "Collapsed or severely damaged pipes" },
  { method: "Traditional Excavation", desc: "We dig to access and replace the damaged pipe section. Sometimes necessary for severe damage or specific situations.", best: "Collapsed pipes, bellied sections, when access is easy" },
  { method: "Spot Repair", desc: "For localized damage, we excavate only the damaged section rather than the entire line.", best: "Single break or crack, offset joint" },
];

const faqs = [
  {
    question: "How do I know if my sewer line needs repair?",
    answer: "Signs include: multiple drain backups, gurgling drains, sewage smell indoors or outdoors, unusually green patches in yard, sinkholes near the sewer line, and slow drains throughout the house. Camera inspection can confirm the problem.",
  },
  {
    question: "How much does sewer line repair cost?",
    answer: "Costs vary significantly by repair type and damage extent. Spot repairs run $1,000-$3,000. Trenchless lining costs $4,000-$10,000. Full replacement with excavation can be $5,000-$15,000+. We provide exact quotes after camera inspection.",
  },
  {
    question: "What is trenchless sewer repair?",
    answer: "Trenchless methods repair or replace sewer lines with minimal digging—usually just access points. This preserves your landscaping, driveway, and structures. It's often faster and can be more cost-effective than traditional excavation.",
  },
  {
    question: "How long does sewer line repair take?",
    answer: "Most trenchless repairs complete in 1-2 days. Traditional excavation may take 2-5 days depending on depth and access. We provide time estimates with your quote and work efficiently to minimize disruption.",
  },
];

export default function SewerLineRepairPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Drain & Sewer", href: "/services/drain-sewer" },
            { label: "Sewer Line Repair" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sewer Line Repair & Replacement</h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl">
              Damaged sewer line causing backups? We offer trenchless and traditional repair options to fix your sewer problems with minimal disruption to your property.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                Request Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName="Sewer" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Sewer Line Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your main sewer line carries all wastewater from your home to the municipal sewer. When it fails, you can experience sewage backups, foul odors, and even yard damage. We diagnose sewer problems with camera inspection and offer multiple repair options.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Sewer Line Problems</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {problems.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.issue}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Repair Methods</h3>
            <div className="space-y-4 mb-12">
              {methods.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.method}</h4>
                  <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                  <p className="text-green-700 text-sm font-medium">Best for: {item.best}</p>
                </div>
              ))}
            </div>

            {/* Process */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Sewer Repair Process</h3>
              <ol className="space-y-3">
                {[
                  { step: "1", title: "Camera Inspection", desc: "We inspect the entire sewer line with video camera to see exactly what's wrong and where." },
                  { step: "2", title: "Diagnosis & Options", desc: "We explain the problem, show you the video, and present repair options with pricing." },
                  { step: "3", title: "Repair", desc: "Using the agreed-upon method, we repair or replace the damaged pipe." },
                  { step: "4", title: "Final Inspection", desc: "We re-inspect with camera to verify the repair and ensure proper flow." },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{item.step}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/drain-sewer/camera-inspection" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Camera Inspection
                </Link>
                <Link href="/services/drain-sewer/hydro-jetting" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Hydro Jetting
                </Link>
                <Link href="/services/emergency-plumbing" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Emergency Plumbing
                </Link>
                <Link href="/services/emergency-plumbing/slab-leak-detection" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Slab Leak Detection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Sewer Line Repair FAQ" faqs={faqs} />

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

      <CTASection title="Sewer Line Problems?" description="Contact us for a camera inspection and repair options." />
    </>
  );
}