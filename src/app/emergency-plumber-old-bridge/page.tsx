import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import { getFaqSchema, getBreadcrumbSchema } from "@/lib/schemas";
import LeadForm from "@/components/LeadForm";
import Testimonials from "@/components/Testimonials";
import DifferentiatorGrid from "@/components/DifferentiatorGrid";
import StatsStrip from "@/components/StatsStrip";
import LinkCardGrid from "@/components/LinkCardGrid";

export const metadata: Metadata = {
  title: "Emergency Plumber in Old Bridge, NJ - 24/7 Response",
  description: "24/7 emergency plumber in Old Bridge, NJ. Licensed NJ Master Plumbers, 10 to 15 minute response, upfront pricing. Call (347) 461-4856 now.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/emergency-plumber-old-bridge",
  },
  openGraph: {
    title: "Emergency Plumber in Old Bridge, NJ - 24/7 Response",
    description: "24/7 emergency plumber in Old Bridge, NJ. Licensed NJ Master Plumbers, 10 to 15 minute response, upfront pricing.",
    type: "website",
    url: "https://www.illyrianplumber.com/emergency-plumber-old-bridge",
  },
};

const faqData = [
  {
    question: "How fast can an emergency plumber reach me in Old Bridge?",
    answer: "Illyrian Plumber typically reaches Old Bridge addresses in 10 to 15 minutes from our East Brunswick base via Route 9 or Route 516. Madison Park and central Old Bridge are fastest; Laurence Harbor and Cliffwood Beach run closer to 12 to 15 minutes. We dispatch the nearest available licensed plumber immediately and call you with a live ETA.",
  },
  {
    question: "What counts as a plumbing emergency in Old Bridge?",
    answer: "A burst or frozen pipe, active flooding, a gas leak, complete loss of water, a failed water heater, or a sump pump that stops working during a storm all qualify for 24/7 dispatch. If you are unsure whether your situation is an emergency, call us and we will help you assess it over the phone.",
  },
  {
    question: "Do you handle emergency sump pump failures in waterfront Old Bridge homes?",
    answer: "Yes. Laurence Harbor and Cliffwood Beach homes near the waterfront rely heavily on sump pumps during heavy rain, and a failed pump during a storm is one of our most common emergency calls in those neighborhoods. We dispatch immediately for active sump pump failures and can install a battery backup system on the same visit if needed.",
  },
  {
    question: "Can you pull emergency permits in Old Bridge after hours?",
    answer: "Emergency repairs that require a permit (such as water heater or gas line replacement) are completed first to make your home safe, then we file the permit with the Old Bridge Township Construction Office and coordinate the required inspection on your behalf. You are never left waiting on paperwork during an active emergency.",
  },
];

const faqSchema = getFaqSchema(faqData);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "24/7 Emergency Plumbing in Old Bridge, NJ",
  serviceType: "Emergency Plumbing",
  description: "24/7 emergency plumbing service in Old Bridge, NJ including burst pipe repair, water heater emergencies, gas leak response, and sump pump failures.",
  url: "https://www.illyrianplumber.com/emergency-plumber-old-bridge",
  provider: { "@id": "https://www.illyrianplumber.com/#organization" },
  areaServed: {
    "@type": "City",
    name: "Old Bridge",
    "@id": "https://en.wikipedia.org/wiki/Old_Bridge_Township,_New_Jersey",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: BUSINESS_INFO.phone,
    availableLanguage: "English",
  },
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Emergency Plumber Old Bridge, NJ", path: "/emergency-plumber-old-bridge" },
]);

export default function EmergencyPlumberOldBridgePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-red-400 font-medium mb-4">24/7 dispatch to Madison Park, Laurence Harbor, Brownville &amp; Cliffwood Beach</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Emergency plumber in Old Bridge, NJ
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Burst pipe, failed water heater, or a sump pump that just quit during a storm? Illyrian Plumber dispatches licensed NJ master plumbers to every Old Bridge neighborhood, typically on-site within 10 to 15 minutes of our East Brunswick base.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-3.5 rounded-lg font-semibold transition">
                  Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3.5 rounded-lg font-semibold transition">
                  Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <LeadForm service="Emergency Plumber - Old Bridge, NJ" />
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  When a plumbing emergency hits your Old Bridge home at 2 AM, you need <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-semibold">emergency plumbing services</Link> that actually answer the phone. Illyrian Plumber is a licensed NJ Master Plumber serving <Link href="/service-areas/old-bridge" className="text-red-700 hover:text-red-800 font-semibold">Old Bridge, NJ</Link> from our East Brunswick base, with a live dispatcher on the line 24 hours a day, every day of the year.
                </p>
                <p>
                  This page covers exactly what to expect if you call us for an Old Bridge plumbing emergency: real response times, real pricing, and the specific failure patterns we see across Madison Park, Laurence Harbor, Brownville, Cliffwood Beach, and Southwood.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers based in East Brunswick, NJ, with {BUSINESS_INFO.stats.yearsExperience} years serving Middlesex County and {BUSINESS_INFO.stats.projectsCompleted} projects completed. We offer <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/sump-pump-repair-install" className="text-red-700 hover:text-red-800">sump pump service</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line repair</Link>, and full 24/7 emergency dispatch across East Brunswick, Edison, Old Bridge, Sayreville, Monroe Township, South Brunswick, and North Brunswick.
                </p>
              </div>

              {/* Real Emergency Calls */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real emergency calls in Old Bridge</h2>
              <div className="space-y-4 mb-12">
                <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-5">
                  <p className="font-bold text-gray-900">Burst pipe in an older Brownville home</p>
                  <p className="text-gray-700 text-sm">Many Brownville homes still run original galvanized supply lines from the 1970s and 80s. During a hard freeze, a section of pipe in an exterior wall or unheated crawlspace splits, and by the time a homeowner notices, water is already coming through a ceiling or wall. We shut off the main, stop the active leak, and replace the failed section, often on the same visit.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-5">
                  <p className="font-bold text-gray-900">Sump pump failure in Laurence Harbor or Cliffwood Beach during a storm</p>
                  <p className="text-gray-700 text-sm">Waterfront homes near Laurence Harbor and Cliffwood Beach lean on their sump pump during every significant rain event. A pump that is 7 to 10 years old, or one without a battery backup, is the most common reason we get an emergency call in these neighborhoods after a nor&apos;easter knocks out power at the exact moment groundwater is rising.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-5">
                  <p className="font-bold text-gray-900">Water heater failure in a Madison Park split-level</p>
                  <p className="text-gray-700 text-sm">A tank water heater past its 10 to 12 year service life can fail without warning, either losing hot water entirely or leaking from a corroded tank seam. In a Madison Park split-level with the water heater on a finished lower level, a leaking tank threatens flooring and drywall fast, which is why this is a same-day dispatch, not a scheduled appointment.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-5">
                  <p className="font-bold text-gray-900">No heat from a boiler in Old Bridge&apos;s older neighborhoods</p>
                  <p className="text-gray-700 text-sm">Homes south of Route 516 that rely on gas or oil hydronic boilers occasionally lose heat overnight to a failed ignition, a stuck circulator, or a tripped low-water cutoff. On a cold January night that is not a wait-until-Monday problem, and our on-call plumbers diagnose and restore heat the same night in most cases.</p>
                </div>
              </div>

              {/* Response Time */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Response time and how dispatch works</h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-12">
                <p>
                  Our East Brunswick headquarters is 10 to 15 minutes from most Old Bridge addresses via Route 9 or Route 516. Madison Park and central Old Bridge are fastest; Laurence Harbor and Cliffwood Beach run closer to 12 to 15 minutes depending on traffic on Route 35.
                </p>
                <p>
                  When you call, a live dispatcher answers, not an answering service or a call center. We ask a few quick questions to understand the emergency, dispatch the nearest available licensed plumber, and call you back with a real ETA before the truck leaves. There is no surprise after-hours surcharge layered on top of the repair price.
                </p>
              </div>

              {/* Pricing Table */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What emergency plumbing costs in Old Bridge</h2>
              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-900">Service</th>
                      <th className="text-left p-3 font-semibold text-gray-900">Typical range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="p-3">Diagnostic service call</td><td className="p-3">From $95</td></tr>
                    <tr><td className="p-3">Common repair (faucet, toilet, small leak)</td><td className="p-3">$150 to $500</td></tr>
                    <tr><td className="p-3">Water heater replacement (40 to 50 gal tank)</td><td className="p-3">$1,500 to $3,500</td></tr>
                    <tr><td className="p-3">Tankless water heater installation</td><td className="p-3">$2,800 to $6,500</td></tr>
                    <tr><td className="p-3">Boiler repair</td><td className="p-3">$250 to $1,200</td></tr>
                    <tr><td className="p-3">Gas line repair</td><td className="p-3">$300 to $1,500</td></tr>
                    <tr><td className="p-3">Sump pump installation</td><td className="p-3">$600 to $1,800</td></tr>
                    <tr><td className="p-3">Emergency / after-hours dispatch</td><td className="p-3">Trip charge + repair cost, quoted upfront</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-sm mb-12">Every quote is written and approved before work starts. No hidden trip charges or shop fees.</p>

              {/* Mid-page CTA Band */}
              <div className="bg-red-700 text-white rounded-xl p-6 md:p-8 mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div>
                    <p className="text-2xl font-bold mb-1">Got a plumbing emergency in Old Bridge right now?</p>
                    <p className="text-red-100">Call now. Typical arrival in 10 to 15 minutes.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                    <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-center whitespace-nowrap">
                      Call {BUSINESS_INFO.phone}
                    </a>
                    <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-700 transition text-center whitespace-nowrap">
                      Call {BUSINESS_INFO.phone2}
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band, replaces the old flat "why choose us" grid */}
      <DifferentiatorGrid
        tone="band"
        heading="What Old Bridge homeowners can count on"
        items={[
          { icon: "clock", title: "Fast response time", description: "We typically arrive within 10 to 15 minutes of your call from our East Brunswick headquarters via Route 9 or Route 516." },
          { icon: "bolt", title: "Live dispatcher, 24/7", description: "A real person answers day or night, never a call center or voicemail, and confirms a live ETA before the truck leaves." },
          { icon: "shield", title: "Licensed and insured", description: "Every technician is a licensed NJ Master Plumber with full insurance coverage on every Old Bridge call." },
          { icon: "dollar", title: "Upfront pricing", description: "You approve a written quote before any work starts, with no after-hours surprise fees added to the bill." },
          { icon: "wrench", title: "Sump pump expertise", description: "We install and repair sump pumps with battery backup, a critical service for waterfront homes in Laurence Harbor and Cliffwood Beach." },
          { icon: "home", title: "Permits handled locally", description: "We pull permits directly from the Old Bridge Township Construction Office and coordinate the required inspection on your behalf." },
        ]}
      />

      {/* Neighborhoods -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Neighborhoods we cover</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {["Madison Park", "Laurence Harbor", "Brownville", "Cliffwood Beach", "Southwood", "Route 9 Corridor", "Route 516 Corridor", "Old Bridge Proper"].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band */}
      <Testimonials
        heading="What Old Bridge homeowners say"
        subheading="Real reviews from real emergency calls across Madison Park, Laurence Harbor, and beyond."
      />

      {/* FAQ + related resources -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
            <div className="space-y-4 mb-12">
              {faqData.map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-lg group">
                  <summary className="p-4 cursor-pointer hover:text-red-700 transition list-none flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 pr-4 text-base">{faq.question}</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            {/* Related Services / Blog */}
            <LinkCardGrid
              heading="Related resources"
              items={[
                { label: "24/7 Emergency Plumbing", href: "/services/emergency-plumbing", description: "Full service details for all of Middlesex County." },
                { label: "Plumber in Old Bridge, NJ", href: "/service-areas/old-bridge", description: "Full range of plumbing services in Old Bridge." },
                { label: "Tankless Water Heater Installation", href: "/services/tankless-water-heater-installation", description: "On-demand hot water, no tank to fail." },
                { label: "Boiler Repair Service", href: "/services/boiler-repair-service", description: "Same-day boiler repair across Middlesex County." },
                { label: "Frozen Pipe Prevention & Repair", href: "/blog/frozen-pipes-prevention-repair", description: "Protect Brownville and Madison Park homes this winter." },
                { label: "Basement Flood Prevention Checklist", href: "/blog/basement-flood-prevention-checklist", description: "Essential prep for Laurence Harbor and Cliffwood Beach homes." },
              ]}
            />

            {/* Nearby */}
            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Also serving</h3>
              <p className="text-gray-600 mb-4">Illyrian Plumber&apos;s emergency line covers all of Middlesex County from this East Brunswick base.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick</Link>
                <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-medium">Edison</Link>
                <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 font-medium">Sayreville</Link>
                <Link href="/service-areas/monroe-township" className="text-red-700 hover:text-red-800 font-medium">Monroe Township</Link>
                <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick</Link>
                <Link href="/service-areas/north-brunswick" className="text-red-700 hover:text-red-800 font-medium">North Brunswick</Link>
                <Link href="/service-areas/middlesex-county" className="text-red-700 hover:text-red-800 font-medium">All of Middlesex County</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need an emergency plumber in Old Bridge?</h2>
          <p className="text-xl text-red-100 mb-8">24/7 dispatch from our East Brunswick base. Typical arrival in 10 to 15 minutes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block">
              Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
            </a>
            <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition inline-block">
              Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
            </a>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 p-3">
        <div className="flex gap-2">
          <a href={BUSINESS_INFO.phoneLink} className="flex-1 bg-red-700 text-white px-4 py-3 rounded-lg font-bold text-center text-sm">
            Call {BUSINESS_INFO.phoneName}
          </a>
          <a href={BUSINESS_INFO.phone2Link} className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg font-bold text-center text-sm">
            Call {BUSINESS_INFO.phone2Name}
          </a>
        </div>
      </div>
    </>
  );
}
