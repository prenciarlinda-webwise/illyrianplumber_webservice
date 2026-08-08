import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import { getFaqSchema, getBreadcrumbSchema } from "@/lib/schemas";
import LeadForm from "@/components/LeadForm";
import Testimonials from "@/components/Testimonials";
import DifferentiatorGrid from "@/components/DifferentiatorGrid";
import StatsStrip from "@/components/StatsStrip";
import LinkCardGrid from "@/components/LinkCardGrid";

const SITE_URL = "https://www.illyrianplumber.com";

export const metadata: Metadata = {
  title: "Emergency Plumber in Sayreville, NJ - 24/7 Response",
  description: "24/7 emergency plumber in Sayreville, NJ. Burst pipes, water heater failures, gas leaks. 10 to 15 minute response from East Brunswick. Call (347) 461-4856.",
  alternates: {
    canonical: `${SITE_URL}/emergency-plumber-sayreville`,
  },
  openGraph: {
    title: "Emergency Plumber in Sayreville, NJ - 24/7 Response",
    description: "24/7 emergency plumber serving Sayreville, NJ. Burst pipes, water heater failures, gas leaks, sump pump emergencies. 10 to 15 minute response.",
    type: "website",
  },
};

const faqData = [
  {
    question: "How fast can an emergency plumber reach me in Sayreville?",
    answer: "Illyrian Plumber typically reaches Sayreville addresses within 10 to 15 minutes from our East Brunswick base via Route 9 or Route 35. Parlin and the South Amboy border are usually the fastest; Morgan and Ernston fall within the same rapid response window. We dispatch the nearest available licensed plumber immediately and call with a live ETA.",
  },
  {
    question: "What counts as a plumbing emergency in Sayreville?",
    answer: "Burst or frozen pipes, a failed water heater, a gas smell, active flooding, or a sump pump that has stopped working during a storm all qualify as emergencies. If water or gas is actively causing damage or a safety risk, call our 24/7 line rather than waiting for a scheduled appointment.",
  },
  {
    question: "Is there an extra charge for a middle-of-the-night emergency call in Sayreville?",
    answer: "Emergency calls may include a trip charge depending on the hour and job type, but Illyrian Plumber always gives you the price in writing before any work begins, day or night. There is no surprise after-hours surcharge added once the job is underway.",
  },
  {
    question: "Can you pull emergency permits in Sayreville after hours?",
    answer: "Permits for water heater, gas line, and boiler emergency work are filed with the Sayreville Borough Construction Office during business hours, but the repair itself happens immediately regardless of the time. We complete the required paperwork and schedule the municipal inspection on your behalf as soon as the office opens.",
  },
];

const faqSchema = getFaqSchema(faqData);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "24/7 Emergency Plumbing in Sayreville, NJ",
  description: "24/7 emergency plumbing service in Sayreville, NJ including burst pipe repair, water heater failures, gas leak response, and sump pump emergencies.",
  serviceType: "Emergency Plumbing",
  url: `${SITE_URL}/emergency-plumber-sayreville`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "City",
    name: "Sayreville",
    "@id": "https://en.wikipedia.org/wiki/Sayreville,_New_Jersey",
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
  { name: "Emergency Plumber Sayreville, NJ", path: "/emergency-plumber-sayreville" },
]);

export default function EmergencyPlumberSayrevillePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-red-400 font-medium mb-4">24/7 Response - Parlin, Morgan, Ernston, Melrose &amp; Sayreville Proper</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Emergency plumber in Sayreville, NJ
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Burst pipe, no hot water, or a gas smell in your Sayreville home? Illyrian Plumber dispatches a licensed NJ master plumber to your address, typically within 10 to 15 minutes of our East Brunswick base.
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
              <LeadForm service="Emergency Plumber - Sayreville, NJ" />
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
              {/* Intro - dual link within first 40-60 words */}
              <div className="prose prose-lg max-w-none text-gray-700 mb-12">
                <p>
                  When a plumbing emergency hits in the middle of the night, the two things that matter are speed and a real person answering the phone. Illyrian Plumber&apos;s{" "}
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 underline">emergency plumbing services</Link>{" "}
                  cover every neighborhood in{" "}
                  <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 underline">Sayreville, NJ</Link>, from Parlin and Morgan to the South Amboy border, with licensed master plumbers dispatched directly from our East Brunswick headquarters.
                </p>
                <p>
                  We answer our own phones around the clock, 365 days a year. No call center, no voicemail, no routing service. When you call, a live dispatcher confirms the problem and sends the nearest available plumber with a real arrival time, not a vague window.
                </p>
              </div>

              {/* Real emergency calls */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real emergency calls in Sayreville</h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                <p>
                  Sayreville&apos;s mix of housing stock and low-lying geography near the Raritan Bay creates a specific pattern of plumbing emergencies. These are the calls our plumbers handle most often across the borough.
                </p>
              </div>
              <div className="space-y-4 mb-12">
                {[
                  { title: "Burst pipe in an older Parlin Cape", desc: "Mid-century Parlin homes still running on original galvanized supply lines are the most common source of winter burst-pipe calls, especially in unheated crawl spaces during a hard freeze." },
                  { title: "Failed water heater in a Morgan household", desc: "Salt air off the bay accelerates corrosion in Sayreville water heaters. A tank that suddenly stops producing hot water, or starts leaking at the base, is one of our most frequent Morgan-area dispatches." },
                  { title: "Sump pump failure near the Raritan River during a storm", desc: "Lower-elevation properties near the river depend on a working sump pump every time it rains hard. A pump that fails mid-storm, or one with no battery backup during a power outage, is a same-shift emergency call." },
                  { title: "Gas smell in a Sayreville Borough home", desc: "A gas odor from an aging fitting or connection is treated as an immediate dispatch. We arrive with electronic gas detection equipment to locate the leak and make the repair safely." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response time and dispatch */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Response time and how dispatch works</h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-12">
                <p>
                  Our East Brunswick headquarters is approximately 10 to 15 minutes from most Sayreville addresses via Route 9 or Route 35. Parlin and the South Amboy border are usually the fastest to reach; Morgan and Ernston fall within the same rapid response window.
                </p>
                <p>
                  When you call, a live dispatcher takes your information, confirms the nature of the emergency, and sends the nearest available licensed plumber with a real ETA. We do not use an answering service or route calls through a national call center. Weekends, nights, and holidays are covered at the same rates as weekday emergency service.
                </p>
              </div>

              {/* Pricing table */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What emergency plumbing costs in Sayreville</h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                <p>
                  Every quote is written down and approved before work starts. Here are honest ranges for the most common Sayreville emergency calls.
                </p>
              </div>
              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-900">Service</th>
                      <th className="text-left p-3 font-semibold text-gray-900">Typical Range in Sayreville</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="p-3">Emergency / after-hours service call</td><td className="p-3">$150 to $450</td></tr>
                    <tr><td className="p-3">Water heater replacement (tank)</td><td className="p-3">$1,500 to $3,500</td></tr>
                    <tr><td className="p-3">Tankless water heater replacement</td><td className="p-3">$2,800 to $6,500</td></tr>
                    <tr><td className="p-3">Boiler repair</td><td className="p-3">$250 to $1,200</td></tr>
                    <tr><td className="p-3">Gas line repair</td><td className="p-3">$300 to $1,500</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Mid-page CTA Band */}
              <div className="bg-red-700 text-white rounded-xl p-6 md:p-8 mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div>
                    <p className="text-2xl font-bold mb-1">Got a plumbing emergency in Sayreville right now?</p>
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
        heading="Why Sayreville calls us first for emergencies"
        items={[
          { icon: "clock", title: "Fast dispatch", description: "We typically reach Sayreville addresses within 10 to 15 minutes of your call from our East Brunswick base." },
          { icon: "bolt", title: "Live 24/7 dispatcher", description: "A real dispatcher answers day or night and confirms your ETA before the truck leaves, never a call center." },
          { icon: "shield", title: "Licensed and insured", description: "Licensed NJ Master Plumbers carry full insurance on every emergency call in Sayreville." },
          { icon: "dollar", title: "Upfront written pricing", description: "You see the price in writing before any work begins, day or night." },
          { icon: "shield", title: "No hidden surcharges", description: "There is no surprise after-hours fee added to the repair once the job is underway." },
          { icon: "wrench", title: "Local repair expertise", description: "We know Sayreville's galvanized supply lines and salt-air corrosion patterns from years of local service calls." },
          { icon: "clock", title: "Consistent rates anytime", description: "Weekends, nights, and holidays are billed at the same emergency rates, with no premium surprise." },
          { icon: "home", title: "Trusted across the county", description: `${BUSINESS_INFO.stats.projectsCompleted} projects completed across Middlesex County since 2010.` },
        ]}
      />

      <Testimonials
        heading="Real reviews from Sayreville emergency calls"
        subheading="What Parlin, Morgan, and South Amboy border homeowners say about our response."
      />

      {/* Neighborhoods + local coverage map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Neighborhoods */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sayreville neighborhoods we reach for emergencies</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every part of the borough is inside our emergency dispatch radius:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
                {["Parlin", "Morgan", "South Amboy Border", "Route 9 Corridor", "Garden State Parkway Area", "Sayreville Proper", "Ernston", "Melrose"].map((area) => (
                  <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
                ))}
              </div>

              {/* Local professional plumbing with map */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Emergency plumbing coverage across Sayreville, NJ</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Illyrian Plumber dispatches emergency plumbers to every Sayreville zip code (08872, 08859) from our East Brunswick headquarters, traveling Route 9, Route 35, Route 18, and the Garden State Parkway daily. Whether the call is a burst pipe in Parlin at 3 AM or a failed sump pump near the river during a nor&apos;easter, the same licensed NJ Master Plumbers handle both routine and emergency work in Sayreville.
                  </p>
                  <p>
                    For non-emergency plumbing needs in Sayreville, including water heater installation, boiler service, and whole-house repiping, see our{" "}
                    <Link href="/service-areas/sayreville" className="text-red-700 hover:underline">Sayreville service area page</Link>.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src={BUSINESS_INFO.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sayreville NJ emergency plumber coverage map"
                  />
                </div>
              </div>

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

              {/* Related resources */}
              <LinkCardGrid
                heading="Helpful plumbing resources"
                items={[
                  { label: "Frozen pipe prevention & repair", href: "/blog/frozen-pipes-prevention-repair", description: "Protect your pipes during NJ winters." },
                  { label: "Basement flood prevention checklist", href: "/blog/basement-flood-prevention-checklist", description: "Sump pump prep before the next storm." },
                  { label: "Tankless water heater installation", href: "/services/tankless-water-heater-installation", description: "On-demand hot water, no tank to fail." },
                  { label: "Boiler repair service", href: "/services/boiler-repair-service", description: "Same-day boiler repair across Middlesex County." },
                  { label: "Gas line repair & installation", href: "/services/gas-line-repair-installation", description: "Licensed gas line work, permitted and inspected." },
                  { label: "Sump pump repair & install", href: "/services/sump-pump-repair-install", description: "Keep the basement dry through the next storm." },
                ]}
              />

              {/* Nearby */}
              <div className="bg-gray-50 rounded-xl p-6 mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Also serving</h3>
                <p className="text-gray-600 mb-4">Illyrian Plumber&apos;s emergency line covers all of Middlesex County from this East Brunswick base.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick</Link>
                  <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-medium">Edison</Link>
                  <Link href="/service-areas/old-bridge" className="text-red-700 hover:text-red-800 font-medium">Old Bridge</Link>
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
          <h2 className="text-3xl font-bold mb-4">Need an emergency plumber in Sayreville right now?</h2>
          <p className="text-xl text-red-100 mb-8">24/7 dispatch from our East Brunswick base. Typical Sayreville arrival in 10 to 15 minutes.</p>
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
