import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Emergency Drain Cleaning | 24/7 Clogged Drain Service",
  description: "Emergency drain cleaning in East Brunswick, NJ. 24/7 service for severe clogs, sewage backups, and drain emergencies. Fast response. Call (718) 427-4396.",
  keywords: [
    "emergency drain cleaning",
    "emergency drain service",
    "clogged drain emergency",
    "sewage backup",
    "drain backup",
    "emergency plumber drain",
  ],
};

const emergencies = [
  { title: "Sewage Backup", desc: "Raw sewage backing up into your home is a health hazard requiring immediate response.", urgent: true },
  { title: "Multiple Clogged Drains", desc: "When several drains clog simultaneously, it indicates a main line blockage.", urgent: true },
  { title: "Flooding from Drains", desc: "Water actively flooding from floor drains or fixtures needs emergency service.", urgent: true },
  { title: "Toilet Won't Flush", desc: "Single toilet that won't clear and is the only bathroom—we prioritize these calls.", urgent: false },
  { title: "Kitchen Drain Backup", desc: "Kitchen sink backed up with standing water affecting your ability to use the kitchen.", urgent: false },
  { title: "Basement Drain Overflow", desc: "Floor drain backup in basement can quickly cause significant water damage.", urgent: true },
];

const faqs = [
  {
    question: "What qualifies as a drain emergency?",
    answer: "Drain emergencies include: sewage backing up into your home, multiple drains clogged simultaneously (main line issue), water actively flooding from drains, and situations where you have no working toilet or essential drain.",
  },
  {
    question: "How fast can you respond to drain emergencies?",
    answer: "We prioritize drain emergencies, especially sewage backups, and typically arrive within 30-60 minutes. Sewage in your home is a health hazard, so we dispatch immediately for these calls.",
  },
  {
    question: "How much does emergency drain cleaning cost?",
    answer: "Emergency drain cleaning rates include a service call fee plus the cost of clearing the blockage. Simple clogs may cost $150-$300, while main line blockages requiring hydro jetting can be $300-$600. We provide upfront pricing.",
  },
  {
    question: "Can you work on drains at night or weekends?",
    answer: "Yes, we provide 24/7 emergency drain service including nights, weekends, and holidays. Plumbing emergencies don't follow business hours, and neither do we.",
  },
];

export default function EmergencyDrainCleaningPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Emergency Plumbing", href: "/services/emergency-plumbing" },
            { label: "Emergency Drain Cleaning" }
          ]} />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              24/7 Emergency Service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Emergency Drain Cleaning</h1>
            <p className="text-xl text-red-100 mb-8 max-w-2xl">
              Severe clog or sewage backup? Don&apos;t wait—these situations can cause health hazards and water damage. Our emergency drain technicians respond fast with professional equipment.
            </p>
            <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-red-700 px-10 py-5 rounded-lg font-bold text-xl transition shadow-lg">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              CALL NOW: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Sewage Warning */}
      <section className="bg-yellow-500 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <svg className="w-12 h-12 text-yellow-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div className="text-yellow-900">
              <h2 className="font-bold text-lg">SEWAGE BACKUP? STOP USING WATER!</h2>
              <p>Avoid all water fixtures until we arrive. Using water can cause more sewage to back up into your home.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">24/7 Emergency Drain Service</h2>
            <p className="text-lg text-gray-600 mb-8">
              When drains back up severely, every minute matters. Sewage in your home creates health hazards from bacteria and pathogens. Standing water can damage flooring, walls, and belongings. Our emergency drain technicians arrive quickly with professional equipment to clear blockages and restore proper drainage.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Drain Emergencies We Handle</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {emergencies.map((item, index) => (
                <div key={index} className={`p-5 rounded-lg border ${item.urgent ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    {item.urgent && (
                      <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded">URGENT</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Emergency Equipment</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Heavy-duty drain machines",
                "Hydro jetting equipment",
                "Video camera inspection",
                "Root cutting attachments",
                "Main line cleanout tools",
                "Pumping equipment for standing water",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Cross-Silo Links */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/drain-sewer/drain-cleaning" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Routine Drain Cleaning
                </Link>
                <Link href="/services/drain-sewer/hydro-jetting" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Hydro Jetting
                </Link>
                <Link href="/services/drain-sewer/camera-inspection" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Camera Inspection
                </Link>
                <Link href="/services/drain-sewer/sewer-line-repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Sewer Line Repair
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Emergency Drain Service FAQ" faqs={faqs} />

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

      <CTASection title="Drain Emergency? Call Now!" description="Our emergency drain technicians are standing by 24/7 for severe clogs and sewage backups." />
    </>
  );
}