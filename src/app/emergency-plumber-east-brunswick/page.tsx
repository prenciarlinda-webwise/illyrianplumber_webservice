import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import { getFaqSchema, getBreadcrumbSchema } from "@/lib/schemas";
import LeadForm from "@/components/LeadForm";

const SITE_URL = "https://www.illyrianplumber.com";

export const metadata: Metadata = {
  title: "24 Hour Emergency Plumber East Brunswick, NJ",
  description: "Need a 24 hour emergency plumber in East Brunswick, NJ? Illyrian Plumber is based on Old Bridge Turnpike with 5 to 15 min response. Call (347) 461-4856.",
  alternates: {
    canonical: `${SITE_URL}/emergency-plumber-east-brunswick`,
  },
  openGraph: {
    title: "24 Hour Emergency Plumber East Brunswick, NJ",
    description: "24/7 emergency plumber based on Old Bridge Turnpike in East Brunswick, NJ. 5 to 15 minute response, licensed NJ Master Plumbers.",
    type: "website",
    url: `${SITE_URL}/emergency-plumber-east-brunswick`,
  },
};

const faqData = [
  {
    question: "How fast can an emergency plumber reach me in East Brunswick?",
    answer: "Illyrian Plumber is headquartered at 697 Old Bridge Turnpike, inside East Brunswick itself, so most 08816 addresses see a licensed plumber in 5 to 15 minutes. That is faster than any out-of-town or national chain dispatching from outside the township. Call and we will give you a live ETA before the truck leaves.",
  },
  {
    question: "What counts as a plumbing emergency in East Brunswick?",
    answer: "A burst or frozen pipe, an active gas smell, a failed water heater flooding a basement, complete loss of water, a no-heat boiler call in winter, or any flooding from an unknown source all qualify for immediate dispatch. If you are unsure whether your situation is urgent, call us and we will help you decide over the phone.",
  },
  {
    question: "Is there an extra charge for a middle of the night emergency call in East Brunswick?",
    answer: "Emergency pricing depends on the repair itself, not simply the hour. We quote a written price before any work starts, day or night, so you know the cost upfront. We do not add a surprise overnight surcharge on top of the repair once you have approved the quote.",
  },
  {
    question: "Can you pull emergency plumbing permits in East Brunswick after hours?",
    answer: "Emergency repairs that require a permit, such as water heater or gas line work, are completed first to make your home safe, then we file the paperwork with the East Brunswick Township Construction Office on the next business day. Routine same-day and scheduled work gets the permit pulled before we start.",
  },
];

const faqSchema = getFaqSchema(faqData);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "24 Hour Emergency Plumbing in East Brunswick, NJ",
  description: "24/7 emergency plumbing service in East Brunswick, NJ, including burst pipe repair, water heater failures, gas leak response, and boiler no-heat calls. 5 to 15 minute typical response from our East Brunswick headquarters.",
  serviceType: "Emergency Plumbing",
  url: `${SITE_URL}/emergency-plumber-east-brunswick`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "City",
    name: "East Brunswick",
    "@id": "https://en.wikipedia.org/wiki/East_Brunswick,_New_Jersey",
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
  { name: "24 Hour Emergency Plumber East Brunswick, NJ", path: "/emergency-plumber-east-brunswick" },
]);

export default function EmergencyPlumberEastBrunswickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-red-400 font-medium mb-4">24/7 dispatch from 697 Old Bridge Turnpike</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                24 hour emergency plumber in East Brunswick, NJ
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Burst pipe, gas smell, or a water heater flooding your basement? Illyrian Plumber is headquartered right here in East Brunswick and typically arrives in 5 to 15 minutes, any hour of the day or night.
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
              <LeadForm service="Emergency Plumber - East Brunswick, NJ" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Intro - primary link within first 40-60 words */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                When a pipe bursts at 2 AM or you smell gas near the stove, the only thing that matters is how fast a licensed plumber can reach you. Illyrian Plumber&apos;s{" "}
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:underline">emergency plumbing services</Link>{" "}
                are based inside{" "}
                <Link href="/service-areas/east-brunswick" className="text-red-700 hover:underline">East Brunswick, NJ</Link>{" "}
                itself, at 697 Old Bridge Turnpike, not dispatched from another town or a call center out of state.
              </p>
              <p>
                That HQ location is what makes the difference on an emergency call. We are not estimating a response time from a regional office an hour away. Our trucks are already inside the township, stocked with the parts for the repairs we see most often here.
              </p>
            </div>

            {/* Real emergency scenarios */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real emergency calls in East Brunswick</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { title: "Burst pipe in Dunhams Corner", desc: "East Brunswick's 1960s and 70s split-levels around Dunhams Corner still run on original galvanized steel supply lines. When a hard freeze hits, these are the pipes most likely to split, usually behind a wall or in an unheated crawlspace." },
                { title: "Water heater failure in Farrington Lake", desc: "Basement-equipped homes near Farrington Lake are common, and a water heater failure there means 40 to 80 gallons finding the lowest point in the house fast. We carry replacement tanks and components on the truck for same-visit repair or swap." },
                { title: "Gas smell near the Route 18 corridor", desc: "Commercial and multi-tenant buildings along the Route 18 retail strip and Mid-State Mall area occasionally report a gas odor from aging fittings. Evacuate first, call the gas utility, then call us. We arrive with electronic gas detectors to pinpoint the leak." },
                { title: "No-heat boiler call south of Route 18", desc: "Older homes south of Route 18 still lean on hydronic boilers for heat. A boiler that quits during a January cold snap is a same-night dispatch, not a next-week appointment." },
                { title: "Freeze-thaw pipe damage on Cranbury Road", desc: "The stretch along Cranbury Road and Ryders Lane sees the heaviest emergency call volume during freeze-thaw cycles, when pipes that survived the initial freeze fail as things warm back up." },
              ].map((item, index) => (
                <div key={index} className="bg-red-50 border-l-4 border-red-600 rounded-lg p-4">
                  <p className="font-bold text-gray-900">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Response time + dispatch */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Response time and how dispatch works</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <p className="text-gray-700 mb-2">
                Our Old Bridge Turnpike office puts a licensed plumber 5 to 15 minutes from any East Brunswick address. When you call, a live dispatcher answers, not an automated system or a third-party answering service. We give you a real ETA before the truck leaves and dispatch the nearest available plumber immediately.
              </p>
              <p className="text-gray-700">
                Weekends, nights, and holidays are handled at the same rates as a weekday emergency call. There is no separate overnight surcharge layered on top of the repair once you approve a quote.
              </p>
            </div>

            {/* Mid-page CTA Band */}
            <div className="bg-red-700 text-white rounded-xl p-6 md:p-8 mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <p className="text-2xl font-bold mb-1">Have a plumbing emergency in East Brunswick right now?</p>
                  <p className="text-red-100">Call now. Typical arrival in 5 to 15 minutes from our Old Bridge Turnpike office.</p>
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

            {/* Pricing */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency plumber cost in East Brunswick</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-6">
              <p>Emergency pricing depends on the repair itself, not the hour of the call. Every quote is written and approved before we start work.</p>
            </div>
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-gray-900">Service</th>
                    <th className="text-left p-3 font-semibold text-gray-900">Typical range in East Brunswick</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="p-3">Diagnostic service call</td><td className="p-3">From $95</td></tr>
                  <tr><td className="p-3">Common repair (faucet, toilet, small leak)</td><td className="p-3">$150 to $500</td></tr>
                  <tr><td className="p-3">Water heater replacement (tank)</td><td className="p-3">$1,500 to $3,500</td></tr>
                  <tr><td className="p-3">Gas line emergency repair</td><td className="p-3">$300 to $1,500</td></tr>
                  <tr><td className="p-3">Boiler repair</td><td className="p-3">$250 to $1,200</td></tr>
                  <tr><td className="p-3">Emergency / after-hours service</td><td className="p-3">Trip charge + repair cost, quoted upfront</td></tr>
                </tbody>
              </table>
            </div>

            {/* Why choose us */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why East Brunswick homeowners call us for emergencies</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Headquartered inside East Brunswick at 697 Old Bridge Turnpike",
                "5 to 15 minute typical response, any hour",
                "Live dispatcher, never a call center or voicemail",
                "Licensed NJ Master Plumbers with full insurance",
                "Upfront written pricing before work starts",
                "Trucks stocked for the repairs East Brunswick homes need most",
              ].map((reason, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4">
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>

            {/* Neighborhoods */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Neighborhoods we cover</h2>
            <p className="text-lg text-gray-600 mb-6">Every East Brunswick neighborhood is within our emergency response radius, including:</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {["Farrington Lake", "Crystal Springs", "Dunhams Corner", "Tamarack Hollow", "Brunswick Square", "Mid-State Mall Area", "Route 18 Corridor", "NJ Turnpike Exit 9 Area", "Cranbury Road", "Ryders Lane", "Milltown Road", "Route 527 Corridor"].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
              ))}
            </div>

            {/* FAQ */}
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

            {/* Related links */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful resources</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <Link href="/blog/frozen-pipes-prevention-repair" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Frozen pipe prevention and repair</p>
                <p className="text-gray-600 text-sm">Protect your East Brunswick home before the next freeze.</p>
              </Link>
              <Link href="/blog/gas-leak-detection-safety" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Gas leak detection and safety</p>
                <p className="text-gray-600 text-sm">Know the signs and what to do.</p>
              </Link>
              <Link href="/services/emergency-plumbing" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">24/7 emergency plumbing service</p>
                <p className="text-gray-600 text-sm">Full emergency service details across Middlesex County.</p>
              </Link>
              <Link href="/service-areas/east-brunswick" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Plumber in East Brunswick, NJ</p>
                <p className="text-gray-600 text-sm">Full range of plumbing services at our HQ location.</p>
              </Link>
            </div>

            {/* Nearby */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Also serving</h3>
              <p className="text-gray-600 mb-4">Illyrian Plumber&apos;s emergency line covers all of Middlesex County from this East Brunswick base.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-medium">Edison</Link>
                <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 font-medium">Sayreville</Link>
                <Link href="/service-areas/old-bridge" className="text-red-700 hover:text-red-800 font-medium">Old Bridge</Link>
                <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick</Link>
                <Link href="/service-areas/north-brunswick" className="text-red-700 hover:text-red-800 font-medium">North Brunswick</Link>
                <Link href="/service-areas/monroe-township" className="text-red-700 hover:text-red-800 font-medium">Monroe Township</Link>
                <Link href="/service-areas/middlesex-county" className="text-red-700 hover:text-red-800 font-medium">All of Middlesex County</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar-equivalent final CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need an emergency plumber in East Brunswick right now?</h2>
          <p className="text-xl text-red-100 mb-8">Based at 697 Old Bridge Turnpike. Typical arrival in 5 to 15 minutes.</p>
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
