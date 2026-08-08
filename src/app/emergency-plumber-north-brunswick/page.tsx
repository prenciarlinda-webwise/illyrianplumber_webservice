import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";
import Testimonials from "@/components/Testimonials";
import DifferentiatorGrid from "@/components/DifferentiatorGrid";
import StatsStrip from "@/components/StatsStrip";

export const metadata: Metadata = {
  title: "Emergency Plumber in North Brunswick, NJ - 24/7",
  description: "24/7 emergency plumber in North Brunswick, NJ. Licensed NJ Master Plumbers, about 10 minute response via Route 1 or Route 130. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/emergency-plumber-north-brunswick",
  },
  openGraph: {
    title: "Emergency Plumber in North Brunswick, NJ - 24/7",
    description: "24/7 emergency plumber in North Brunswick, NJ. Licensed NJ Master Plumbers, about 10 minute response via Route 1 or Route 130.",
    type: "website",
    url: "https://www.illyrianplumber.com/emergency-plumber-north-brunswick",
  },
};

export default function EmergencyPlumberNorthBrunswickPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can an emergency plumber reach me in North Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Illyrian Plumber typically reaches North Brunswick addresses in about 10 minutes from our East Brunswick base via Route 1 or Route 130. For an active emergency, we dispatch the nearest available licensed plumber immediately and call you with a live ETA before the truck leaves.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle emergency calls for rental properties near Rutgers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. North Brunswick's rental-heavy housing near the Rutgers area generates a steady stream of after-hours calls, and we work directly with both tenants and landlords or property managers. We can coordinate access, provide a written estimate before any repair, and invoice the property owner directly when needed.",
        },
      },
      {
        "@type": "Question",
        name: "What counts as a plumbing emergency in North Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A burst or frozen pipe, a failed water heater with no hot water, a gas smell, a sewer or drain backup affecting the whole house, or active flooding all qualify for immediate dispatch. If you are unsure whether your situation is an emergency, call us and we will help you assess it over the phone.",
        },
      },
      {
        "@type": "Question",
        name: "Can you pull emergency permits in North Brunswick after hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Emergency repairs themselves do not wait on a permit, but any water heater, gas line, or boiler replacement resulting from an emergency call still needs one. We pull required permits from the North Brunswick Township Construction Office on the next business day and coordinate the inspection, so the paperwork never delays getting your home safe again.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "24/7 Emergency Plumbing in North Brunswick, NJ",
    description: "24 hour emergency plumbing service in North Brunswick, NJ including burst pipe repair, water heater failures, gas leak response, and flooding. About 10 minute response from our East Brunswick base.",
    serviceType: "Emergency Plumbing",
    url: "https://www.illyrianplumber.com/emergency-plumber-north-brunswick",
    provider: { "@id": "https://www.illyrianplumber.com/#organization" },
    areaServed: {
      "@type": "City",
      name: "North Brunswick",
      "@id": "https://en.wikipedia.org/wiki/North_Brunswick,_New_Jersey",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.illyrianplumber.com/" },
      { "@type": "ListItem", position: 2, name: "Emergency Plumber North Brunswick, NJ", item: "https://www.illyrianplumber.com/emergency-plumber-north-brunswick" },
    ],
  };

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
              <p className="text-red-400 font-medium mb-4">24/7 dispatch - about 10 minutes from East Brunswick</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Emergency plumber in North Brunswick, NJ
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Burst pipe, no hot water, or a gas smell in North Brunswick? Illyrian Plumber&apos;s <Link href="/services/emergency-plumbing" className="text-white underline hover:text-red-300">emergency plumbing services</Link> reach every corner of <Link href="/service-areas/north-brunswick" className="text-white underline hover:text-red-300">North Brunswick, NJ</Link> in about 10 minutes, day or night, with a live dispatcher answering the phone, not voicemail.
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
              <LeadForm service="Emergency Plumber - North Brunswick, NJ" />
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

              {/* Real emergency calls */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real emergency calls in North Brunswick</h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-12">
                <p>
                  North Brunswick&apos;s mix of housing produces a specific pattern of emergency calls. In the older single-family homes around Livingston Park and Hermann Road, our most common overnight call is a burst pipe in an exterior wall or crawlspace during a January cold snap, or a boiler that quits producing heat in the middle of a freeze. Near the Rutgers area and along Adams Lane, where student and young-professional rentals dominate, the calls skew toward failed water heaters at inconvenient hours and clogged fixtures in high-turnover units that a landlord needs resolved before the next tenant moves in.
                </p>
                <p>
                  Cozzens Lane and the Route 130 corridor add a third pattern: newer construction with modern fixtures still develops the occasional supply line failure or water heater malfunction, usually tied to a manufacturing defect rather than age. Whichever neighborhood the call comes from, the response is the same: a licensed NJ Master Plumber dispatched immediately, with a real ETA given over the phone before the truck leaves our East Brunswick base.
                </p>
              </div>

              {/* Response time + dispatch */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Response time and how dispatch works</h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
                <p className="text-gray-700 mb-2">
                  Illyrian Plumber is based at 697 Old Bridge Turnpike in East Brunswick, about 10 minutes from most North Brunswick addresses via Route 1 or Route 130. When you call, a live dispatcher answers, not an automated system or an answering service. We confirm the nature of the emergency, give you a real arrival window, and send the nearest available licensed plumber.
                </p>
                <p className="text-gray-700">
                  Weekends, nights, and holidays are covered at the same standard emergency rates, with no surprise after-hours surcharge added on top. If the situation allows for it, we will also walk you through immediate steps to limit damage while the plumber is en route, such as shutting off the main water valve or the gas supply.
                </p>
              </div>

              {/* Pricing */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What emergency plumbing costs in North Brunswick</h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                <p>
                  Every quote is written and approved before work starts. These are the typical ranges for the emergency calls we run most often in North Brunswick.
                </p>
              </div>
              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-900">Emergency call type</th>
                      <th className="text-left p-3 font-semibold text-gray-900">Typical range in North Brunswick</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="p-3">Emergency plumber dispatch</td><td className="p-3">$150 to $450</td></tr>
                    <tr><td className="p-3">Active leak repair</td><td className="p-3">$150 to $500</td></tr>
                    <tr><td className="p-3">Water heater replacement (tank)</td><td className="p-3">$1,500 to $3,500</td></tr>
                    <tr><td className="p-3">Water heater replacement (tankless)</td><td className="p-3">$2,800 to $6,500</td></tr>
                    <tr><td className="p-3">Boiler repair / no-heat call</td><td className="p-3">$250 to $1,200</td></tr>
                  </tbody>
                </table>
              </div>

              {/* What to do while you wait */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What to do while you wait for help</h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-12">
                <p>
                  A few minutes before the plumber arrives can meaningfully reduce the damage from a North Brunswick plumbing emergency. For a burst or actively leaking pipe, find your main water shut-off valve, usually near the water meter in the basement or a utility closet, and turn it fully clockwise. This stops the flow to the entire house, not just the affected fixture, so expect every faucet to go dry until the repair is done.
                </p>
                <p>
                  If the emergency is a gas smell, do not touch light switches, do not use a phone inside the house, and get everyone outside immediately. Call the gas utility first, then call us from outside once you are safely away from the building. For a failed water heater, shutting off the power (electric units) or the gas supply valve (gas units) at the tank prevents the unit from continuing to run with no water inside it, which can damage the heating element or heat exchanger further.
                </p>
                <p>
                  For a no-heat call in a North Brunswick boiler-heated home during a cold snap, check the thermostat batteries and the boiler&apos;s reset button before assuming the worst. If neither resolves it, keeping faucets dripping slightly on exterior-wall plumbing runs can reduce the odds of a second pipe freezing while you wait for the repair.
                </p>
              </div>

              {/* Mid-page CTA Band */}
              <div className="bg-red-700 text-white rounded-xl p-6 md:p-8 mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div>
                    <p className="text-2xl font-bold mb-1">Plumbing emergency in North Brunswick right now?</p>
                    <p className="text-red-100">Call now. Typical arrival in about 10 minutes.</p>
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

      {/* Full-bleed differentiator band replacing flat "why us" grid */}
      <DifferentiatorGrid
        tone="band"
        heading="Why North Brunswick calls us first for emergencies"
        items={[
          { icon: "clock", title: "Fast dispatch time", description: "Our East Brunswick headquarters keeps us close, so a licensed plumber typically reaches North Brunswick within about 10 minutes of your call." },
          { icon: "bolt", title: "Live dispatcher 24/7", description: "A real person answers every call, day or night. No voicemail, no call center, no waiting on a callback during an emergency." },
          { icon: "shield", title: "Licensed and insured", description: "Every technician is a licensed NJ Master Plumber, fully insured on every emergency job." },
          { icon: "dollar", title: "Upfront written pricing", description: "You see and approve the price before any repair begins, with no surprise charges once the work is done." },
          { icon: "home", title: "Landlord friendly billing", description: "We coordinate access and billing directly with property managers and landlords, common near the Rutgers area's rental-heavy blocks." },
          { icon: "wrench", title: "Permits handled for you", description: "When an emergency repair needs a follow-up permit, we pull it from the North Brunswick Township Construction Office and manage the inspection." },
        ]}
      />

      {/* Full-bleed testimonial band */}
      <Testimonials
        heading="Trusted for North Brunswick plumbing emergencies"
        subheading="Real reviews from real burst pipes, no-heat calls, and gas line emergencies."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

              {/* Neighborhoods */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">North Brunswick neighborhoods we cover</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every North Brunswick neighborhood gets the same about-10-minute emergency response, including:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
                {["Rutgers Area", "Route 1 Corridor", "Route 130 Corridor", "Adams Lane Area", "Hermann Road Area", "Cozzens Lane Area", "Livingston Park", "North Brunswick Proper"].map((area) => (
                  <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
                ))}
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-4 mb-12">
                {faqSchema.mainEntity.map((faq, index) => (
                  <details key={index} className="bg-gray-50 rounded-lg group">
                    <summary className="p-4 cursor-pointer hover:text-red-700 transition list-none flex justify-between items-center">
                      <h3 className="font-semibold text-gray-900 pr-4 text-base">{faq.name}</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0">+</span>
                    </summary>
                    <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed">
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>

              {/* Related Links */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related pages</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                <Link href="/services/emergency-plumbing" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">24/7 Emergency Plumbing</p>
                  <p className="text-gray-600 text-sm">Full emergency service details for all of NJ.</p>
                </Link>
                <Link href="/service-areas/north-brunswick" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Plumber in North Brunswick, NJ</p>
                  <p className="text-gray-600 text-sm">Full range of plumbing services in North Brunswick.</p>
                </Link>
                <Link href="/service-areas/middlesex-county" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Middlesex County Plumbing</p>
                  <p className="text-gray-600 text-sm">County-wide coverage from our East Brunswick base.</p>
                </Link>
                <Link href="/blog/frozen-pipes-prevention-repair" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Frozen Pipe Prevention &amp; Repair</p>
                  <p className="text-gray-600 text-sm">Protect your pipes during NJ winters.</p>
                </Link>
                <Link href="/blog/signs-water-heater-dying" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Signs Your Water Heater Is Dying</p>
                  <p className="text-gray-600 text-sm">Know when it is time for a replacement.</p>
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
                  <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick</Link>
                  <Link href="/service-areas/middlesex-county" className="text-red-700 hover:text-red-800 font-medium">All of Middlesex County</Link>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need an emergency plumber in North Brunswick right now?</h2>
          <p className="text-xl text-red-100 mb-8">About 10 minute response from our East Brunswick base, 24/7.</p>
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
