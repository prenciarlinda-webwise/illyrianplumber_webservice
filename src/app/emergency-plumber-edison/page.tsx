import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schemas";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Emergency Plumber in Edison, NJ - 24/7 Response",
  description: "Need an emergency plumber in Edison, NJ right now? Illyrian Plumber dispatches licensed NJ master plumbers within 10 minutes. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/emergency-plumber-edison",
  },
  openGraph: {
    title: "Emergency Plumber in Edison, NJ - 24/7 Response",
    description: "24/7 emergency plumber serving Edison, NJ. Burst pipes, gas leaks, water heater failures, no-heat boiler calls. Typical arrival in 10 minutes.",
    type: "website",
  },
};

const faqData = [
  {
    question: "How fast can an emergency plumber reach me in Edison?",
    answer: "Illyrian Plumber typically reaches Edison addresses within 10 minutes from our East Brunswick headquarters via Route 18, Route 1, or Route 287. Clara Barton and southern Edison are usually the fastest via Route 18, while Stelton and northern Edison run through Route 1 or Route 287. You get a live ETA when you call, not a vague window.",
  },
  {
    question: "What counts as a plumbing emergency in Edison?",
    answer: "Burst or frozen pipes, active water leaks, no hot water, a failed boiler with no heat, and any gas smell all qualify for immediate dispatch. If water is actively damaging your Edison home or you smell gas, call right away. If you are unsure whether your situation qualifies, call anyway. We would rather assess it than have you wait on a real emergency.",
  },
  {
    question: "Is there an extra charge for a middle-of-the-night emergency call in Edison?",
    answer: "Emergency and after-hours calls in Edison are quoted with a trip charge plus the repair cost, and that price is given to you upfront before any work starts. We do not add a surprise overnight surcharge on top of the number we quote. Weekends and holidays are billed the same as any other emergency call.",
  },
  {
    question: "Can you pull emergency plumbing permits in Edison after hours?",
    answer: "Yes, for permitted work like water heater replacement or gas line repair, we pull the required permit from the Edison Township Construction Office as soon as the office is open, even when the repair itself happened overnight. The emergency fix is not delayed waiting on paperwork, and we coordinate the inspection afterward.",
  },
];

const faqSchema = getFaqSchema(faqData);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "24/7 Emergency Plumbing in Edison, NJ",
  serviceType: "Emergency Plumbing",
  description: "24 hour emergency plumber service in Edison, NJ for burst pipes, water heater failures, gas leaks, and no-heat boiler calls. Licensed NJ Master Plumbers dispatched from East Brunswick.",
  url: "https://www.illyrianplumber.com/emergency-plumber-edison",
  provider: { "@id": "https://www.illyrianplumber.com/#organization" },
  areaServed: {
    "@type": "City",
    name: "Edison",
    "@id": "https://en.wikipedia.org/wiki/Edison,_New_Jersey",
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
  { name: "Emergency Plumber Edison, NJ", path: "/emergency-plumber-edison" },
]);

export default function EmergencyPlumberEdisonPage() {
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
              <p className="text-red-400 font-medium mb-4">24/7 Dispatch to Clara Barton, Nixon, Stelton &amp; All Edison Neighborhoods</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Emergency plumber in Edison, NJ
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Burst pipe, no hot water, or a gas smell in your Edison home? Illyrian Plumber dispatches licensed NJ master plumbers to Edison day or night, typically arriving within 10 minutes of our East Brunswick base.
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
              <LeadForm service="Emergency Plumber - Edison, NJ" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  When a burst pipe, a failed water heater, or a gas smell turns into a middle-of-the-night crisis in an Edison home, the homeowner searching for help does not have time to wait on a call center or a next-available appointment. Illyrian Plumber&apos;s <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-semibold">emergency plumbing services</Link> cover every corner of <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-semibold">Edison, NJ</Link>, dispatched from our East Brunswick headquarters roughly 10 minutes away via Route 18, Route 1, or Route 287.
                </p>
                <p>
                  A licensed NJ Master Plumber answers the phone directly, day or night, and is on the road to your Edison address within minutes. We carry stocked trucks so most emergency repairs finish on the first visit.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers based in East Brunswick, serving Edison and all of Middlesex County, NJ. We offer <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, and <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>. 750+ projects completed since 2010.
                </p>
              </div>

              {/* Real emergency scenarios */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real emergency calls in Edison</h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-12">
                <p>
                  Edison&apos;s mix of housing eras means our emergency calls look different neighborhood to neighborhood. In Clara Barton and Nixon, where mid-century Capes still run original galvanized supply lines, a hard freeze in January can turn an exterior wall pipe into a burst-pipe flood by morning. Along the Route 1 corridor, newer townhome complexes call us most often for a failed water heater, since compact utility closets push units to run harder and fail sooner than a full basement installation would.
                </p>
                <p>
                  Stelton&apos;s older grid still leans on gas and oil hydronic boilers, and a no-heat call there in February is a same-hour dispatch, not a scheduled visit. Near Menlo Park and Bonhamtown, our most common emergency is a gas smell reported after a DIY appliance connection or aging fitting starts to leak, which always gets immediate dispatch regardless of time of day. Whatever the scenario, the same rule applies across every Edison neighborhood: a licensed plumber on the road within minutes, not a call center taking a message.
                </p>
              </div>

              {/* Mid-page CTA Band */}
              <div className="bg-red-700 text-white rounded-xl p-6 md:p-8 mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div>
                    <p className="text-2xl font-bold mb-1">Got a plumbing emergency in Edison right now?</p>
                    <p className="text-red-100">Call now. Typical arrival in 10 minutes.</p>
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

              {/* Response time + dispatch process */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Response time and how dispatch works</h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-12">
                <p>
                  Our East Brunswick base is approximately 10 minutes from most Edison addresses. When you call, a live dispatcher answers, not an automated menu or a national call center. We confirm the situation, dispatch the nearest available licensed plumber, and call you back with a real arrival time before the truck leaves.
                </p>
                <p>
                  Every emergency truck carries stock parts for the failures we see most in Edison: pipe fittings and shutoff valves for burst-pipe calls, common water heater components, and gas line repair tools. That inventory is why most Edison emergency calls close on the first visit instead of requiring a follow-up appointment.
                </p>
              </div>

              {/* Pricing table */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What emergency plumbing costs in Edison</h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                <p>Every quote is written down and approved before we start work.</p>
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
                    <tr><td className="p-3">Common repair (faucet, toilet, small leak)</td><td className="p-3">$150 to $500</td></tr>
                    <tr><td className="p-3">Water heater replacement (40 to 50 gal tank)</td><td className="p-3">$1,500 to $3,500</td></tr>
                    <tr><td className="p-3">Tankless water heater installation</td><td className="p-3">$2,800 to $6,500</td></tr>
                    <tr><td className="p-3">Boiler repair</td><td className="p-3">$250 to $1,200</td></tr>
                    <tr><td className="p-3">Gas line repair</td><td className="p-3">$300 to $1,500</td></tr>
                    <tr><td className="p-3">Sump pump installation</td><td className="p-3">$600 to $1,800</td></tr>
                    <tr><td className="p-3">Emergency / after-hours service</td><td className="p-3">Trip charge + repair cost, quoted upfront</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Why choose us */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Edison homeowners call us for emergencies</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  "10-minute typical response from our East Brunswick headquarters",
                  "Direct access to Edison via Route 18, Route 1, and Route 287",
                  "Licensed NJ Master Plumbers with full insurance",
                  "True 24/7 dispatch, no answering service",
                  "Upfront pricing before any work begins",
                  "Stocked trucks for same-visit repairs",
                  "Experienced with Edison's mixed housing stock, from Clara Barton Capes to Route 1 townhomes",
                  "Permits pulled from Edison Township Construction when required",
                ].map((reason, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4">
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>

              {/* Neighborhoods */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Edison neighborhoods we cover</h2>
              <p className="text-lg text-gray-600 mb-6">
                Emergency dispatch reaches every part of Edison Township, including:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
                {["Clara Barton", "Nixon", "Stelton", "Menlo Park", "Bonhamtown", "Oak Tree", "Route 1 Corridor", "Route 287 Corridor", "Raritan Center"].map((area) => (
                  <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
                ))}
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

              {/* Related links */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related services and resources</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                <Link href="/services/emergency-plumbing" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Emergency plumbing services</p>
                  <p className="text-gray-600 text-sm">Full 24/7 emergency plumbing coverage details.</p>
                </Link>
                <Link href="/service-areas/edison" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Plumber in Edison, NJ</p>
                  <p className="text-gray-600 text-sm">Full range of plumbing services in Edison.</p>
                </Link>
                <Link href="/blog/frozen-pipes-prevention-repair" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Frozen pipe prevention and repair</p>
                  <p className="text-gray-600 text-sm">Protect Edison homes during winter freezes.</p>
                </Link>
                <Link href="/blog/gas-leak-detection-safety" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Gas leak detection and safety</p>
                  <p className="text-gray-600 text-sm">Know the signs and what to do.</p>
                </Link>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby service areas</h3>
                <p className="text-gray-600 mb-4">We also serve these Middlesex County towns from our East Brunswick location.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick (HQ)</Link>
                  <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 font-medium">Sayreville</Link>
                  <Link href="/service-areas/north-brunswick" className="text-red-700 hover:text-red-800 font-medium">North Brunswick</Link>
                  <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick</Link>
                  <Link href="/service-areas/old-bridge" className="text-red-700 hover:text-red-800 font-medium">Old Bridge</Link>
                  <Link href="/service-areas/middlesex-county" className="text-red-700 hover:text-red-800 font-medium">All of Middlesex County</Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Emergency in Edison?</p>
                  <p className="text-gray-600 text-sm mb-4">Typical arrival in 10 minutes, 24/7.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">
                    Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">
                    Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                  </a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Service Areas</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/east-brunswick" className="hover:text-red-700 transition">East Brunswick</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/edison" className="hover:text-red-700 transition">Edison</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/sayreville" className="hover:text-red-700 transition">Sayreville</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/old-bridge" className="hover:text-red-700 transition">Old Bridge</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/monroe-township" className="hover:text-red-700 transition">Monroe Township</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/south-brunswick" className="hover:text-red-700 transition">South Brunswick</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/north-brunswick" className="hover:text-red-700 transition">North Brunswick</Link></li>
                  </ul>
                  <Link href="/service-areas" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Service Areas</Link>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our Services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium transition">Emergency Plumbing</Link></li>
                    <li><Link href="/services/tankless-water-heater-installation" className="text-gray-700 hover:text-red-700 transition">Tankless Water Heater Installation</Link></li>
                    <li><Link href="/services/boiler-repair-service" className="text-gray-700 hover:text-red-700 transition">Boiler Repair Service</Link></li>
                    <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Repair &amp; Installation</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need an emergency plumber in Edison right now?</h2>
          <p className="text-xl text-red-100 mb-8">24/7 dispatch from our East Brunswick base. Typical Edison arrival in 10 minutes.</p>
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
