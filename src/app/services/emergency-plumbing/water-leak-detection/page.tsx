import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Water Leak Detection | Find Hidden Leaks Fast",
  description: "Professional water leak detection in East Brunswick, NJ. Advanced technology finds hidden leaks in walls, floors, and underground. Stop water damage. Call (718) 427-4396.",
  keywords: [
    "water leak detection",
    "leak detection",
    "leak detection services",
    "find water leak",
    "hidden leak detection",
    "plumbing leak detection",
  ],
};

const signs = [
  "Unexplained increase in water bills",
  "Sound of running water when fixtures off",
  "Wet spots on floors, walls, or ceilings",
  "Musty odors or mold growth",
  "Warm spots on floors (hot water leak)",
  "Low water pressure",
  "Foundation cracks appearing",
  "Water meter spinning when water off",
];

const faqs = [
  {
    question: "How do you detect hidden water leaks?",
    answer: "We use advanced technology including acoustic listening devices, thermal imaging cameras, moisture meters, and video pipe inspection. These non-invasive methods locate leaks without unnecessary damage to your home.",
  },
  {
    question: "How much does leak detection cost?",
    answer: "Leak detection typically costs $150-$400 depending on complexity. This is far less than the cost of water damage from an undetected leak. We provide upfront pricing before starting.",
  },
  {
    question: "Can you detect leaks under concrete?",
    answer: "Yes, we specialize in slab leak detection using specialized acoustic and electronic equipment. We can pinpoint leaks under concrete foundations without breaking up floors unnecessarily.",
  },
  {
    question: "How long does leak detection take?",
    answer: "Most leak detection services take 1-2 hours. Complex situations with multiple potential leak locations may take longer. We're thorough to ensure we find all leaks.",
  },
];

export default function WaterLeakDetectionPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Emergency Plumbing", href: "/services/emergency-plumbing" },
            { label: "Water Leak Detection" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Water Leak Detection Services</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Hidden water leaks can cause thousands in damage before you even notice them. Our advanced leak detection technology finds leaks in walls, floors, ceilings, and underground—without destructive digging.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                Schedule Detection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName="Water Leak" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Leak Detection Technology</h2>
            <p className="text-lg text-gray-600 mb-8">
              Water leaks hidden in walls, under floors, or underground can go undetected for months, causing extensive damage and mold growth. Our technicians use state-of-the-art equipment to locate leaks precisely, minimizing the need for exploratory demolition.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Signs You May Have a Hidden Leak</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-12">
              {signs.map((sign, index) => (
                <div key={index} className="flex items-center gap-3 bg-red-50 p-4 rounded-lg">
                  <svg className="w-5 h-5 text-red-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Detection Technology</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Acoustic Detection", desc: "Sensitive listening devices detect the sound of water escaping from pipes, even through walls and concrete." },
                { title: "Thermal Imaging", desc: "Infrared cameras reveal temperature differences caused by water leaks hidden behind surfaces." },
                { title: "Moisture Meters", desc: "Precise moisture measurements identify water presence in building materials." },
                { title: "Video Pipe Inspection", desc: "Camera inspection of pipes identifies leaks, cracks, and damage inside your plumbing." },
              ].map((tech, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">{tech.title}</h4>
                  <p className="text-gray-600 text-sm">{tech.desc}</p>
                </div>
              ))}
            </div>

            {/* Internal Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/emergency-plumbing/slab-leak-detection" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Slab Leak Detection
                </Link>
                <Link href="/services/emergency-plumbing/burst-pipe-repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Pipe Repair
                </Link>
                <Link href="/services/drain-sewer/sewer-line-repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Sewer Line Repair
                </Link>
                <Link href="/services/water-heater/repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Heater Leaks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Leak Detection FAQ" faqs={faqs} />

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

      <CTASection title="Suspect a Hidden Leak?" description="Don't wait for visible water damage. Schedule professional leak detection today." />
    </>
  );
}