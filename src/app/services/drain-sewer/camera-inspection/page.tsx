import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sewer Camera Inspection | Video Pipe Inspection NJ",
  description: "Professional sewer camera inspection in East Brunswick, NJ. See inside your pipes with video inspection. Find clogs, cracks, roots, and damage. Call (718) 427-4396.",
  keywords: [
    "sewer camera inspection",
    "drain camera inspection",
    "video pipe inspection",
    "sewer line camera",
    "pipe camera inspection",
    "plumbing camera inspection",
    "sewer scope",
  ],
};

const uses = [
  { use: "Diagnose Recurring Clogs", desc: "Find out why drains keep clogging—root intrusion, bellied pipe, or buildup" },
  { use: "Pre-Purchase Inspection", desc: "Know the sewer condition before buying a home—avoid costly surprises" },
  { use: "Locate Blockages", desc: "See exactly where and what the obstruction is for efficient clearing" },
  { use: "Assess Pipe Condition", desc: "Check for cracks, corrosion, offset joints, and other damage" },
  { use: "Find Lost Items", desc: "Locate jewelry or other items accidentally flushed or dropped down drains" },
  { use: "Verify Repairs", desc: "Confirm that repairs were successful and pipes are clear" },
];

const canFind = [
  "Tree root intrusion",
  "Cracks and breaks",
  "Collapsed pipe sections",
  "Bellied (sagging) pipes",
  "Offset joints",
  "Corrosion and scale buildup",
  "Grease accumulation",
  "Foreign object blockages",
];

const faqs = [
  {
    question: "How much does sewer camera inspection cost?",
    answer: "Sewer camera inspection typically costs $150-$400 depending on access and line length. This is a small investment to diagnose problems accurately before committing to repairs. We often include camera inspection with complex drain clearing.",
  },
  {
    question: "How does sewer camera inspection work?",
    answer: "We insert a flexible rod with a waterproof camera into your drain or cleanout. The camera transmits real-time video to a monitor, allowing us to see the pipe's interior condition. We can locate the camera precisely to mark problem areas.",
  },
  {
    question: "Should I get a sewer inspection before buying a home?",
    answer: "Absolutely. Sewer line replacement can cost $5,000-$15,000+. A pre-purchase sewer scope ($150-$300) can reveal problems before you buy. Many buyers make offers contingent on sewer inspection passing.",
  },
  {
    question: "Can you provide video of the inspection?",
    answer: "Yes, we can provide a recording of the inspection for your records. This is especially useful for real estate transactions or insurance claims.",
  },
];

export default function CameraInspectionPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Drain & Sewer", href: "/services/drain-sewer" },
            { label: "Camera Inspection" }
          ]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sewer Camera Inspection</h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl">
              See exactly what&apos;s happening inside your pipes. Video camera inspection reveals blockages, damage, and pipe condition—no guesswork, no unnecessary digging.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                Schedule Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName="Drain/Sewer" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Video Pipe Inspection Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              Before camera technology, diagnosing sewer problems meant guesswork or digging. Now we can insert a high-resolution camera into your pipes and see exactly what&apos;s happening. This means accurate diagnosis, targeted repairs, and no unnecessary excavation.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Use Camera Inspection</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {uses.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.use}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Camera Inspection Can Find</h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              {canFind.map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Home Buyer Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏠 Buying a Home? Get a Sewer Scope!</h3>
              <p className="text-gray-700 mb-4">
                A pre-purchase sewer inspection is one of the smartest investments you can make. Sewer line problems can cost $5,000-$15,000+ to fix. A sewer scope costs just $150-$300 and can reveal:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Root intrusion that will cause future backups
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Old pipe materials (Orangeburg, clay) nearing failure
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Bellied sections where sewage collects
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Cracks or damage requiring repair
                </li>
              </ul>
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/drain-sewer/sewer-line-repair" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Sewer Line Repair
                </Link>
                <Link href="/services/drain-sewer/hydro-jetting" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Hydro Jetting
                </Link>
                <Link href="/services/drain-sewer/drain-cleaning" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Drain Cleaning
                </Link>
                <Link href="/services/emergency-plumbing/water-leak-detection" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Leak Detection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Camera Inspection FAQ" faqs={faqs} />

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

      <CTASection title="Need to See Inside Your Pipes?" description="Contact us for professional sewer camera inspection." />
    </>
  );
}