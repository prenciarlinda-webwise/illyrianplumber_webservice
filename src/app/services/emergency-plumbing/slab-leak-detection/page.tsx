import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Slab Leak Detection | Under-Foundation Leak Repair NJ",
  description: "Professional slab leak detection in East Brunswick, NJ. Non-invasive methods locate leaks under concrete foundations. Protect your home from foundation damage. Call (718) 427-4396.",
  keywords: [
    "slab leak detection",
    "slab leak repair",
    "under slab leak",
    "foundation leak",
    "slab leak plumber",
    "leak under concrete",
  ],
};

const signs = [
  "Warm spots on floor (hot water line leak)",
  "Cold spots on floor (cold water line leak)",
  "Sound of running water with fixtures off",
  "Cracks in walls or flooring",
  "Mildew or mold under carpeting",
  "Unexplained high water bills",
  "Low water pressure throughout home",
  "Foundation heaving or shifting",
];

const faqs = [
  {
    question: "What is a slab leak?",
    answer: "A slab leak is a leak in the water lines running beneath your home's concrete foundation. These can be in hot or cold water supply lines, or in drain lines. Because they're under concrete, they require specialized detection methods.",
  },
  {
    question: "How do you detect leaks under concrete?",
    answer: "We use specialized equipment including acoustic listening devices that detect the sound of water escaping, electronic amplification equipment, thermal imaging, and pressure testing. These non-invasive methods pinpoint leaks without breaking up your floor.",
  },
  {
    question: "How much does slab leak repair cost?",
    answer: "Slab leak repair varies significantly based on leak location and chosen repair method. Options range from spot repair ($500-$2,000) to rerouting pipes above ground ($1,500-$4,000) to full repiping. We provide options after diagnosis.",
  },
  {
    question: "Can slab leaks cause foundation damage?",
    answer: "Yes, undetected slab leaks can cause serious foundation damage. Water erodes soil under the foundation, causing settling, cracks, and structural problems. Early detection and repair is critical to prevent major damage.",
  },
];

export default function SlabLeakDetectionPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Emergency Plumbing", href: "/services/emergency-plumbing" },
            { label: "Slab Leak Detection" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Slab Leak Detection</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Suspect a leak under your concrete foundation? Our specialized equipment locates slab leaks without destroying your floors. Early detection prevents costly foundation damage.
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

      <EmergencyBanner variant="compact" serviceName="Slab Leak" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Slab Leak Detection Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              Slab leaks are among the most challenging plumbing problems because they&apos;re hidden under your home&apos;s foundation. Without proper detection equipment, finding these leaks would require extensive (and expensive) demolition. Our specialized technology pinpoints leaks precisely, minimizing damage to your home.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Signs You May Have a Slab Leak</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-12">
              {signs.map((sign, index) => (
                <div key={index} className="flex items-center gap-3 bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <svg className="w-5 h-5 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Detection Technology</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Acoustic Detection", desc: "Sensitive listening equipment detects the sound of water escaping from pipes, even through concrete." },
                { title: "Electronic Line Locating", desc: "We trace the exact path of water lines under your slab to narrow down potential leak locations." },
                { title: "Thermal Imaging", desc: "Infrared cameras reveal temperature variations in your floor caused by hot or cold water leaks." },
                { title: "Pressure Testing", desc: "We isolate and test sections of your plumbing to confirm leak presence and location." },
              ].map((tech, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">{tech.title}</h4>
                  <p className="text-gray-600 text-sm">{tech.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Repair Options</h3>
            <div className="space-y-4 mb-12">
              {[
                { title: "Spot Repair", desc: "For single, accessible leaks—we open the slab at the leak location, repair the pipe, and restore the concrete." },
                { title: "Pipe Rerouting", desc: "If pipes are old or corroded, we can reroute new lines through walls or attic, abandoning the under-slab pipes." },
                { title: "Epoxy Pipe Lining", desc: "For certain situations, we can line existing pipes with epoxy coating to seal leaks without excavation." },
                { title: "Full Repipe", desc: "For homes with aging pipes prone to multiple leaks, complete repiping may be the best long-term solution." },
              ].map((option, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-1">{option.title}</h4>
                  <p className="text-gray-600 text-sm">{option.desc}</p>
                </div>
              ))}
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/emergency-plumbing/water-leak-detection" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Leak Detection
                </Link>
                <Link href="/services/emergency-plumbing/burst-pipe-repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Pipe Repair Services
                </Link>
                <Link href="/services/drain-sewer/sewer-line-repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Sewer Line Repair
                </Link>
                <Link href="/services/drain-sewer/camera-inspection" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Camera Inspection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Slab Leak Detection FAQ" faqs={faqs} />

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

      <CTASection title="Suspect a Slab Leak?" description="Don't wait for foundation damage. Schedule professional slab leak detection today." />
    </>
  );
}