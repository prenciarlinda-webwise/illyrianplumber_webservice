import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import { getFaqSchema, getBreadcrumbSchema } from "@/lib/schemas";
import LeadForm from "@/components/LeadForm";
import Testimonials from "@/components/Testimonials";
import DifferentiatorGrid from "@/components/DifferentiatorGrid";
import StatsStrip from "@/components/StatsStrip";

export const metadata: Metadata = {
  title: "Emergency Plumber in South Brunswick, NJ - 24/7",
  description: "24/7 emergency plumber serving Kendall Park, Monmouth Junction, Dayton, Kingston, and Deans in South Brunswick, NJ. 15-minute typical response. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/emergency-plumber-south-brunswick",
  },
  openGraph: {
    title: "Emergency Plumber in South Brunswick, NJ - 24/7",
    description: "24/7 emergency plumber serving South Brunswick, NJ. Burst pipes, no heat, water heater failures, gas leaks. 15-minute typical response from our East Brunswick base.",
    type: "website",
  },
};

const faqData = [
  {
    question: "How fast can an emergency plumber reach me in South Brunswick?",
    answer: "Illyrian Plumber typically reaches South Brunswick addresses in about 15 minutes from our East Brunswick base via Route 1 or Route 130. Kendall Park is usually the fastest; Monmouth Junction, Dayton, Kingston, and Deans all fall within our rapid response window. We call with a live ETA as soon as you hang up.",
  },
  {
    question: "Do you handle well-water related emergency calls in South Brunswick?",
    answer: "Yes. A large share of South Brunswick, especially in Dayton, Kingston, and Deans, runs on well water rather than municipal supply, which changes how we diagnose sudden water pressure loss or a failed water heater. Our plumbers carry the diagnostic tools for both municipal and well-fed systems on every emergency call.",
  },
  {
    question: "What counts as a plumbing emergency in South Brunswick?",
    answer: "Burst or frozen pipes, active leaks, complete loss of water, no heat from a failed boiler, gas leaks, and water heater failures all qualify for our 24/7 emergency dispatch. If you are unsure whether your situation is urgent, call us. We would rather assess it live than have you wait out a real emergency.",
  },
  {
    question: "Can you pull emergency permits in South Brunswick after hours?",
    answer: "Emergency repairs themselves do not wait on a permit, but any follow-up replacement work (a new water heater or boiler, for example) gets a permit pulled from the South Brunswick Township Construction Office as part of our standard process. We coordinate the inspection so the paperwork never becomes your problem.",
  },
];

const faqSchema = getFaqSchema(faqData);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "24/7 Emergency Plumbing in South Brunswick, NJ",
  description: "24 hour emergency plumber service for South Brunswick, NJ, including Kendall Park, Monmouth Junction, Dayton, Kingston, and Deans. Burst pipes, no heat, water heater failures, and gas leak response.",
  serviceType: "Emergency Plumbing",
  url: "https://www.illyrianplumber.com/emergency-plumber-south-brunswick",
  provider: { "@id": "https://www.illyrianplumber.com/#organization" },
  areaServed: {
    "@type": "City",
    name: "South Brunswick",
    "@id": "https://en.wikipedia.org/wiki/South_Brunswick,_New_Jersey",
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
  { name: "Emergency Plumber South Brunswick, NJ", path: "/emergency-plumber-south-brunswick" },
]);

export default function EmergencyPlumberSouthBrunswickPage() {
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
              <p className="text-red-400 font-medium mb-4">24/7 emergency plumber available now</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Emergency plumber in South Brunswick, NJ
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Burst pipe, no heat, a failed water heater, or a gas smell in Kendall Park, Monmouth Junction, Dayton, Kingston, or Deans? Illyrian Plumber dispatches a licensed NJ master plumber to South Brunswick day or night, typically arriving in about 15 minutes from our East Brunswick base.
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
              <LeadForm service="Emergency Plumber - South Brunswick, NJ" />
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
                  When a pipe bursts or the heat cuts out in South Brunswick at 2 AM, you need <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 underline">emergency plumbing services</Link> that actually answer the phone. Illyrian Plumber is the emergency dispatch our <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 underline">South Brunswick, NJ</Link> neighbors already call for boiler repair, water heaters, and everyday plumbing, and the same licensed team handles the after-hours calls.
                </p>
                <p>
                  South Brunswick&apos;s emergency calls look a little different from the rest of Middlesex County. A meaningful share of Dayton, Kingston, and Deans properties run on well water instead of municipal supply, so a sudden pressure drop or a water heater that will not recover often traces back to the well pump or pressure tank, not the plumbing inside the house. Our trucks carry the gauges and parts for both well-fed and municipal systems, so the diagnosis does not cost you a second visit.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed NJ Master Plumbers based in East Brunswick, serving all of Middlesex County for over {BUSINESS_INFO.stats.yearsExperience}. We offer <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, and <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. {BUSINESS_INFO.stats.projectsCompleted} projects completed since {BUSINESS_INFO.founded}.
                </p>
              </div>

              {/* Real emergency scenarios */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real emergency calls in South Brunswick</h2>
              <div className="space-y-4 mb-12">
                {[
                  { title: "Sudden water pressure loss in Kendall Park", desc: "A well pump losing prime or a failing pressure tank shows up as a sudden drop in flow at every fixture at once. That pattern points away from a single clogged aerator and toward the well system itself, so we check the pressure tank and pump before touching any indoor plumbing." },
                  { title: "Burst pipe during a hard freeze in Monmouth Junction", desc: "Older Capes with exterior-wall plumbing runs are the most common source of a January or February burst pipe call. We shut off the affected section, thaw and repair the break, and check nearby runs for other spots at risk before we leave." },
                  { title: "Water heater that will not recover on well water in Dayton", desc: "Well water tends to be harder and more corrosive than municipal supply, which shortens tank life and can point a failing anode rod investigation in a different direction than a standard tank diagnosis. We check the anode rod condition alongside the usual thermostat and heating element checks." },
                  { title: "No-heat boiler call in Kingston or Deans", desc: "A hydronic boiler that will not fire on a cold morning is treated as a true emergency, not a scheduled visit. Pilot and ignition faults, a stuck zone valve, and low system pressure are the most common causes we find on these calls." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 bg-gray-50 rounded-lg p-5">
                    <div className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response time and dispatch */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Response time and how dispatch works</h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
                <p className="text-gray-700 mb-2">
                  Our East Brunswick headquarters is approximately <strong>15 minutes</strong> from most South Brunswick addresses via Route 1 or Route 130. Kendall Park is usually the fastest; Monmouth Junction, Dayton, Kingston, and Deans all fall inside our rapid response window.
                </p>
                <p className="text-gray-700 mb-2">
                  When you call, a live dispatcher answers, not an answering service or a call center. We confirm the situation, dispatch the nearest available licensed plumber immediately, and call you back with a real ETA before the truck leaves. Weekends, nights, and holidays are handled at the same rates as weekday emergency service.
                </p>
                <p className="text-gray-700">
                  For non-emergency work, same-day and next-day scheduling is available whenever our crew has capacity.
                </p>
              </div>

              {/* Mid-page CTA Band */}
              <div className="bg-red-700 text-white rounded-xl p-6 md:p-8 mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div>
                    <p className="text-2xl font-bold mb-1">Got a plumbing emergency in South Brunswick right now?</p>
                    <p className="text-red-100">Call now. Typical arrival in about 15 minutes.</p>
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

              {/* Pricing table */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What emergency plumbing costs in South Brunswick</h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                <p>Every quote is written and approved before work starts. No hidden trip charges or after-hours surcharges layered on top.</p>
              </div>
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
                    <tr><td className="p-3">Emergency / after-hours service</td><td className="p-3">$150 to $450</td></tr>
                    <tr><td className="p-3">Common repair (faucet, toilet, small leak)</td><td className="p-3">$150 to $500</td></tr>
                    <tr><td className="p-3">Boiler repair</td><td className="p-3">$250 to $1,200</td></tr>
                    <tr><td className="p-3">Gas line repair</td><td className="p-3">$300 to $1,500</td></tr>
                    <tr><td className="p-3">Water heater replacement (tank)</td><td className="p-3">$1,500 to $3,500</td></tr>
                    <tr><td className="p-3">Tankless water heater installation</td><td className="p-3">$2,800 to $6,500</td></tr>
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </section>

      {/* Full-bleed differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why South Brunswick calls us first for emergencies"
        items={[
          { icon: "clock", title: "15-minute typical response", description: "Our East Brunswick base puts us about 15 minutes from most South Brunswick addresses when an emergency call comes in." },
          { icon: "bolt", title: "Live dispatcher, day or night", description: "A real person answers the phone at 2 AM the same way they do at 2 PM, never a call center or answering service." },
          { icon: "shield", title: "Licensed and insured", description: "Every emergency call is handled by a licensed NJ Master Plumber backed by full insurance coverage." },
          { icon: "dollar", title: "Upfront written pricing", description: "You approve a written quote before any work begins, even on an after-hours emergency call." },
          { icon: "wrench", title: "Municipal and well water", description: "Our trucks carry the gauges and parts for both municipal supply and well-fed systems common in Dayton and Kingston." },
          { icon: "home", title: "Permits handled for you", description: "Follow-up replacement work gets a permit pulled from the South Brunswick Township Construction Office as part of our standard process." },
        ]}
      />

      {/* Full-bleed testimonial band */}
      <Testimonials
        heading="Trusted by South Brunswick homeowners"
        subheading="Real reviews from real emergency calls."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

              {/* Neighborhoods */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">South Brunswick neighborhoods we serve</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
                {["Kendall Park", "Monmouth Junction", "Dayton", "Kingston", "Deans", "Route 1 Corridor", "Route 130 Corridor"].map((area) => (
                  <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
                ))}
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency plumber FAQs for South Brunswick</h2>
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

              {/* Related links */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related pages</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                <Link href="/services/emergency-plumbing" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">24/7 Emergency Plumbing</p>
                  <p className="text-gray-600 text-sm">Full emergency service details for all of NJ.</p>
                </Link>
                <Link href="/service-areas/south-brunswick" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Plumber in South Brunswick, NJ</p>
                  <p className="text-gray-600 text-sm">Every plumbing service we offer in South Brunswick.</p>
                </Link>
                <Link href="/service-areas/middlesex-county" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Middlesex County Plumbing</p>
                  <p className="text-gray-600 text-sm">County-wide coverage from our East Brunswick base.</p>
                </Link>
                <Link href="/blog/why-is-water-pressure-low" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Why Is My Water Pressure Low?</p>
                  <p className="text-gray-600 text-sm">Common causes, including well-water specific ones.</p>
                </Link>
                <Link href="/blog/frozen-pipes-prevention-repair" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Frozen Pipes Prevention &amp; Repair</p>
                  <p className="text-gray-600 text-sm">Protect your pipes during NJ winters.</p>
                </Link>
                <Link href="/services/tankless-water-heater-installation" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Tankless Water Heater Installation</p>
                  <p className="text-gray-600 text-sm">On-demand hot water, no tank to fail.</p>
                </Link>
                <Link href="/services/boiler-repair-service" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Boiler Repair Service</p>
                  <p className="text-gray-600 text-sm">Same-day boiler repair across Middlesex County.</p>
                </Link>
              </div>

              {/* Nearby */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Also serving</h3>
                <p className="text-gray-600 mb-4">Illyrian Plumber&apos;s emergency line covers all of Middlesex County from this East Brunswick base.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick</Link>
                  <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-medium">Edison</Link>
                  <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 font-medium">Sayreville</Link>
                  <Link href="/service-areas/old-bridge" className="text-red-700 hover:text-red-800 font-medium">Old Bridge</Link>
                  <Link href="/service-areas/monroe-township" className="text-red-700 hover:text-red-800 font-medium">Monroe Township</Link>
                  <Link href="/service-areas/north-brunswick" className="text-red-700 hover:text-red-800 font-medium">North Brunswick</Link>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need an emergency plumber in South Brunswick?</h2>
          <p className="text-xl text-red-100 mb-8">Licensed NJ Master Plumbers. Typical arrival in about 15 minutes.</p>
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
