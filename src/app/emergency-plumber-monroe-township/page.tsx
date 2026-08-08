import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schemas";
import LeadForm from "@/components/LeadForm";
import TrustBadges from "@/components/TrustBadges";
import Testimonials from "@/components/Testimonials";
import DifferentiatorGrid from "@/components/DifferentiatorGrid";
import StatsStrip from "@/components/StatsStrip";

export const metadata: Metadata = {
  title: "Emergency Plumber in Monroe Township, NJ - 24/7 Service",
  description:
    "Need an emergency plumber in Monroe Township, NJ? Licensed 24/7 master plumbers respond in 15 to 20 minutes to Rossmoor, Concordia, Clearbrook, and every community. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/emergency-plumber-monroe-township",
  },
  openGraph: {
    title: "Emergency Plumber in Monroe Township, NJ - 24/7 Service",
    description:
      "24/7 emergency plumber serving Monroe Township, NJ. Licensed NJ Master Plumbers, 15 to 20 minute response, HOA-coordinated access for active-adult communities.",
    type: "website",
  },
};

const faqData = [
  {
    question: "How fast can an emergency plumber reach me in Monroe Township?",
    answer:
      "Illyrian Plumber typically reaches Monroe Township addresses in 15 to 20 minutes from our East Brunswick base via Route 18 or the NJ Turnpike. Rossmoor, Concordia, and Clearbrook are usually on the faster end of that window; Jamesburg-border neighborhoods and The Ponds run closer to 20 minutes. We dispatch the nearest available licensed plumber immediately and call you with a live ETA.",
  },
  {
    question: "Do you coordinate with HOA management for after-hours access in active-adult communities?",
    answer:
      "Yes. A large share of Monroe Township's housing sits inside 55-plus active-adult communities like Rossmoor, Concordia, Clearbrook, and Greenbriar at Whittingham, so we routinely coordinate with HOA management and on-site security for after-hours gate access. Tell us your community when you call and we will handle the coordination before we arrive.",
  },
  {
    question: "What counts as a plumbing emergency in Monroe Township?",
    answer:
      "Burst or frozen pipes, a failed water heater, a no-heat boiler call in cold weather, an active gas leak, and flooding from any source all qualify for our 24/7 emergency dispatch. If you are unsure whether your situation needs immediate attention, call and we will help you assess it over the phone before dispatching.",
  },
  {
    question: "Can you pull emergency permits in Monroe Township after hours?",
    answer:
      "We pull required permits from the Monroe Township Construction Office for water heater, boiler, gas line, and repiping work as part of the job, including emergency replacements. Permit filing happens on the next business day when work is completed after hours, and we handle the paperwork so you do not have to.",
  },
];

const faqSchema = getFaqSchema(faqData);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "24/7 Emergency Plumbing in Monroe Township, NJ",
  serviceType: "Emergency Plumbing",
  description:
    "24/7 emergency plumbing service for Monroe Township, NJ, including burst pipes, no-heat boiler calls, water heater failures, gas leaks, and flooding, with HOA-coordinated access for active-adult communities.",
  url: "https://www.illyrianplumber.com/emergency-plumber-monroe-township",
  provider: { "@id": "https://www.illyrianplumber.com/#organization" },
  areaServed: {
    "@type": "City",
    name: "Monroe Township",
    "@id": "https://en.wikipedia.org/wiki/Monroe_Township,_Middlesex_County,_New_Jersey",
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
  { name: "Emergency Plumber Monroe Township, NJ", path: "/emergency-plumber-monroe-township" },
]);

export default function EmergencyPlumberMonroeTownshipPage() {
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
              <p className="text-red-400 font-medium mb-4">24/7 dispatch to Rossmoor, Concordia, Clearbrook &amp; every Monroe Township community</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Emergency plumber in Monroe Township, NJ
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Burst pipe, no heat, or a water heater that just failed? Illyrian Plumber dispatches licensed NJ master plumbers to every Monroe Township community, day or night, typically on-site within 15 to 20 minutes of our East Brunswick base.
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
              <LeadForm service="Emergency Plumber - Monroe Township, NJ" />
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Intro - first paragraph rule */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                When a pipe bursts or the heat goes out on a January night, the question that actually matters is how fast a real plumber can get to your door. Illyrian Plumber&apos;s{" "}
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:underline">emergency plumbing services</Link>{" "}
                cover every corner of{" "}
                <Link href="/service-areas/monroe-township" className="text-red-700 hover:underline">Monroe Township, NJ</Link>, from Rossmoor and Concordia to Clearbrook, Greenbriar at Whittingham, and every family subdivision in between. We answer the phone ourselves, day or night, and a licensed NJ master plumber is on the road within minutes of your call.
              </p>
              <p>
                Monroe Township is not a typical Middlesex County emergency territory. A high share of the township&apos;s 08831 housing sits inside 55-plus active-adult communities, which changes how an emergency call actually plays out: gated access, HOA coordination, and quiet-hours awareness are part of the job, not an afterthought.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 md:p-6 mb-12">
              <TrustBadges />
            </div>

            {/* Real emergency scenarios */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real emergency calls in Monroe Township</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                The emergency mix in Monroe Township looks different from a typical family-home suburb, and it shapes how we staff and dispatch:
              </p>
              <ul className="space-y-3">
                <li><strong>Water heater rupture while owners are away.</strong> A common winter call in Rossmoor and Concordia: a 20-plus-year-old tank finally fails while the homeowners are wintering in Florida, and a neighbor or property manager discovers the flooding. We coordinate entry with HOA management or a designated key-holder and stop the damage immediately.</li>
                <li><strong>Hidden slow leak found during an HOA maintenance visit.</strong> Community maintenance staff sometimes flag a damp wall or a soft spot in flooring during a routine visit. These calls need a plumber who can diagnose quickly without tearing the unit apart, since many active-adult condos share walls with a neighboring unit.</li>
                <li><strong>Burst pipe requiring after-hours gate access.</strong> A frozen supply line lets go at 11 PM in a gated community. Getting a truck past the gate at that hour means a phone call to on-site security or an HOA on-call number before we can even reach the front door, and we make that call for you.</li>
                <li><strong>No-heat boiler failure in a family subdivision.</strong> Newer sections of the township still rely on gas-fired boilers, and a mid-winter no-heat call with young kids or elderly residents in the house gets the same immediate dispatch as anywhere else in Middlesex County.</li>
              </ul>
            </div>

            {/* Response time + dispatch process */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Response time and how dispatch works</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <p className="text-gray-700 mb-2">
                From our East Brunswick headquarters, we reach most Monroe Township addresses in <strong>15 to 20 minutes</strong> via Route 18 or the NJ Turnpike. Rossmoor, Concordia, and Clearbrook are typically the fastest; Jamesburg-border neighborhoods and The Ponds run a few minutes longer.
              </p>
              <p className="text-gray-700 mb-2">
                Every emergency call is answered by a live dispatcher, never a call center or voicemail. We confirm your community and any HOA access requirements up front, dispatch the nearest available licensed plumber, and call you back with a real ETA before the truck leaves.
              </p>
              <p className="text-gray-700">
                Weekends, nights, and holidays are handled at the same rate as weekday emergency service, with no surprise after-hours surcharge added once we arrive.
              </p>
            </div>

            {/* Pricing table */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What emergency service costs in Monroe Township</h2>
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
                  <tr><td className="p-3">Water heater replacement (tank)</td><td className="p-3">$1,500 to $3,500</td></tr>
                  <tr><td className="p-3">Tankless water heater installation</td><td className="p-3">$2,800 to $6,500</td></tr>
                  <tr><td className="p-3">Boiler repair</td><td className="p-3">$250 to $1,200</td></tr>
                  <tr><td className="p-3">Gas line repair</td><td className="p-3">$300 to $1,500</td></tr>
                  <tr><td className="p-3">Emergency / after-hours dispatch</td><td className="p-3">Trip charge + repair cost, quoted upfront</td></tr>
                </tbody>
              </table>
            </div>

            {/* Mid-page CTA Band */}
            <div className="bg-red-700 text-white rounded-xl p-6 md:p-8 mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <p className="text-2xl font-bold mb-1">Plumbing emergency in Monroe Township right now?</p>
                  <p className="text-red-100">Call now. Typical arrival in 15 to 20 minutes, HOA access coordinated on your behalf.</p>
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
        heading="Why Monroe Township homeowners call us for emergencies"
        items={[
          { icon: "clock", title: "15 to 20 minute response", description: "We typically reach Monroe Township within 15 to 20 minutes of your call from our East Brunswick headquarters." },
          { icon: "shield", title: "Licensed and insured", description: "Every technician is a licensed NJ Master Plumber with full insurance on every emergency call." },
          { icon: "bolt", title: "24/7 live dispatcher", description: "A real person answers day or night, never a call center, and confirms a live ETA before the truck leaves." },
          { icon: "home", title: "HOA and gate coordination", description: "We routinely coordinate with HOA management and on-site security for after-hours access in active-adult communities." },
          { icon: "dollar", title: "Upfront pricing", description: "You approve a written quote before any work starts, with no surprise after-hours surcharge." },
          { icon: "wrench", title: "Permits handled for you", description: "We pull required permits from the Monroe Township Construction Office and coordinate the inspection." },
        ]}
      />

      {/* Full-bleed dark testimonial band */}
      <Testimonials
        heading="Trusted across Monroe Township's communities"
        subheading="Real reviews from real emergency calls, including active-adult and gated communities."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Neighborhoods */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Communities we serve</h2>
            <p className="text-lg text-gray-600 mb-6">
              Every Monroe Township community, active-adult and family alike, including:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {["Rossmoor", "Concordia", "Clearbrook", "Greenbriar at Whittingham", "Encore at Monroe", "Stonebridge", "Monroe Village", "Jamesburg Border"].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
              ))}
            </div>

            {/* What to do while you wait */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What to do while you wait for help</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                A few steps taken before the plumber arrives can meaningfully limit the damage from a Monroe Township plumbing emergency. For a burst or actively leaking pipe, find the main water shut-off valve, usually in a utility closet or near the water meter, and turn it fully clockwise. In a condo or attached unit inside a 55-plus community, check whether the shut-off serves your unit alone or the building, since shared plumbing runs are common in Rossmoor, Concordia, and similar communities, and the wrong valve can cut water to a neighbor instead.
              </p>
              <p>
                If the emergency is a gas smell, do not operate light switches or use a phone inside the home, and get everyone outside immediately. Call the gas utility first, then call us once you are safely away from the building. For a failed water heater, especially one discovered after an absence, shutting off the power at the breaker (electric units) or the gas valve at the tank (gas units) stops the unit from continuing to run dry, which can damage the heating element or heat exchanger further.
              </p>
              <p>
                In a gated or HOA-managed community, have your gate code, unit number, and any HOA management contact ready when you call. This is the single biggest time-saver for an after-hours dispatch in Monroe Township, since coordinating access is usually the longest step between the call and the truck reaching your door.
              </p>
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
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">24/7 Emergency Plumbing</p>
                <p className="text-gray-600 text-sm">Full emergency service details, statewide.</p>
              </Link>
              <Link href="/service-areas/monroe-township" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Plumber in Monroe Township, NJ</p>
                <p className="text-gray-600 text-sm">Full-service plumbing beyond emergencies.</p>
              </Link>
              <Link href="/blog/frozen-pipes-prevention-repair" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Frozen Pipe Prevention &amp; Repair</p>
                <p className="text-gray-600 text-sm">Protect your pipes before the next cold snap.</p>
              </Link>
              <Link href="/blog/plumbing-for-55-plus-community-downsizing" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Plumbing Checklist for 55+ Communities</p>
                <p className="text-gray-600 text-sm">What to consider when downsizing to Monroe Township.</p>
              </Link>
            </div>

            {/* Nearby areas */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby service areas</h3>
              <p className="text-gray-600 mb-4">We also serve these Middlesex County towns from our East Brunswick location.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick (HQ)</Link>
                <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick</Link>
                <Link href="/service-areas/old-bridge" className="text-red-700 hover:text-red-800 font-medium">Old Bridge</Link>
                <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-medium">Edison</Link>
                <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 font-medium">Sayreville</Link>
                <Link href="/service-areas/middlesex-county" className="text-red-700 hover:text-red-800 font-medium">All of Middlesex County</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need an emergency plumber in Monroe Township?</h2>
          <p className="text-xl text-red-100 mb-8">Licensed NJ Master Plumbers. Typical arrival in 15 to 20 minutes.</p>
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
