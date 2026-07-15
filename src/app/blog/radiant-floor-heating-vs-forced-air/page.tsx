import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Radiant floor heating vs forced air (2026 guide)",
  description:
    "Compare radiant floor heating vs forced air: cost, comfort, efficiency, and installation complexity, so you can pick the right system for your home.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/blog/radiant-floor-heating-vs-forced-air",
  },
  keywords: [
    "radiant floor heating vs forced air",
    "radiant heat pros and cons",
    "radiant floor heating cost",
    "hydronic radiant heating",
    "electric radiant floor heating",
    "radiant heating vs central air",
    "in floor heating vs furnace",
  ],
  openGraph: {
    title: "Radiant floor heating vs forced air (2026 guide)",
    description:
      "Compare radiant floor heating vs forced air: cost, comfort, efficiency, and installation complexity for your home.",
    type: "article",
    publishedTime: "2026-07-19T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function RadiantVsForcedAirPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Radiant floor heating vs forced air (2026 guide)",
    description:
      "Compare radiant floor heating vs forced air: cost, comfort, efficiency, and installation complexity for your home.",
    image: "https://www.illyrianplumber.com/images/radiator-pipe-repair-service.jpg",
    author: {
      "@type": "Person",
      name: "Illyrian Plumber Team",
      worksFor: { "@id": "https://www.illyrianplumber.com/#organization" },
    },
    publisher: { "@id": "https://www.illyrianplumber.com/#organization" },
    datePublished: "2026-07-19T08:00:00.000Z",
    dateModified: "2026-07-19T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/radiant-floor-heating-vs-forced-air",
    },
  };

  const faqData = [
    {
      question: "Is radiant floor heating more expensive to install than forced air?",
      answer:
        "In a home that already has ductwork, forced air is usually cheaper to extend or replace. In a home with no ductwork at all, adding a full duct system can be nearly as invasive as installing radiant tubing, so the cost gap narrows. Radiant floor heating runs roughly $6 to $16 per square foot installed, including tubing, manifolds, and controls. A boiler is extra if you do not already have one.",
    },
    {
      question: "Which heating system is more energy efficient, radiant or forced air?",
      answer:
        "Radiant floor heating is typically 25 to 30 percent more efficient than forced air. It runs at lower water temperatures, eliminates duct losses, and lets you keep the thermostat lower since the warmth reaches you directly. Forced-air ducts commonly lose 20 to 30 percent of heated air to leaks before it ever reaches a room.",
    },
    {
      question: "Can I add radiant floor heating to a home that already has forced air?",
      answer:
        "Yes, and many homeowners do it room by room rather than all at once. A bathroom remodel or basement finish is the easiest time to add radiant tubing, since the subfloor is already exposed. Forced air can stay in place as backup heat for the rest of the house while radiant handles the rooms you use most.",
    },
    {
      question: "Which system is better for allergies and indoor air quality?",
      answer:
        "Radiant floor heating has a real advantage here. Forced air moves dust, pet dander, and allergens through the house every time the blower runs. Radiant heating has no blower and no ductwork, so nothing gets recirculated. For households with allergy or asthma concerns, that difference is often the deciding factor.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-white">
        {/* Hero */}
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Heating Systems</span>
                <time dateTime="2026-07-19">July 19, 2026</time>
                <span>12 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Radiant floor heating vs forced air heating
              </h1>
              <p className="text-xl text-gray-300">
                A side-by-side look at comfort, running cost, and installation complexity, so you can decide which heating system actually fits your home.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-07-19" updateDate="2026-07-19" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 min-w-0 max-w-3xl">
              {/* Introduction - primary link lands in first paragraph, word ~51-53 */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Choosing between radiant floor heating and forced air is one of the biggest heating decisions homeowners face when replacing an aging system or planning a bathroom remodel. Both systems heat a home effectively, but they differ sharply in comfort, running cost, and installation complexity. Our licensed plumbers install and repair{" "}
                  <Link href="/services/radiant-heating-plumbing" className="text-red-700 hover:text-red-800 font-semibold">
                    radiant floor heating
                  </Link>{" "}
                  throughout Middlesex County, and this guide breaks down exactly how the two systems compare so you can make an informed call.
                </p>
                <p>
                  Neither system is universally better. Forced air is familiar, quick to install where ductwork already exists, and doubles as central air conditioning. Radiant heating costs more upfront but delivers a level of comfort and efficiency forced air cannot match. The right answer depends on your budget, your home&apos;s layout, and whether you are building new, retrofitting, or just replacing a failing furnace.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in hydronic radiant heating and boiler systems in Middlesex County, NJ. We offer{" "}
                  <Link href="/services/radiant-heating-plumbing" className="text-red-700 hover:text-red-800">radiant floor heating installation and repair</Link>,{" "}
                  <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>,{" "}
                  <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">bathroom remodeling</Link>,{" "}
                  <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, and{" "}
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link>{" "}
                  across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
                </p>
              </div>

              {/* TOC */}
              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">In this guide</h2>
                <ul className="space-y-2">
                  <li><a href="#verdict" className="text-red-700 hover:text-red-800">Quick verdict</a></li>
                  <li><a href="#comparison" className="text-red-700 hover:text-red-800">Side-by-side comparison</a></li>
                  <li><a href="#comfort" className="text-red-700 hover:text-red-800">Comfort and heat distribution</a></li>
                  <li><a href="#cost" className="text-red-700 hover:text-red-800">What each system costs</a></li>
                  <li><a href="#pros-cons" className="text-red-700 hover:text-red-800">Pros and cons of radiant floor heating</a></li>
                  <li><a href="#choose" className="text-red-700 hover:text-red-800">Which should you choose?</a></li>
                  <li><a href="#timeline-maintenance" className="text-red-700 hover:text-red-800">Installation timeline and maintenance</a></li>
                  <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently asked questions</a></li>
                </ul>
              </nav>

              {/* Quick verdict */}
              <div id="verdict" className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Quick verdict</h2>
                <p className="text-gray-700">
                  Radiant floor heating wins on comfort, efficiency, and indoor air quality, running 25 to 30 percent more efficiently than forced air with no drafts or dust circulation. Forced air wins on upfront cost when ductwork already exists, and it is the only option that also delivers central air conditioning through the same system.
                </p>
              </div>

              {/* Comparison table */}
              <section id="comparison" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Side-by-side comparison</h2>
                <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">Factor</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">Radiant floor heating</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">Forced air</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium text-gray-900">Heat distribution</td>
                        <td className="text-center py-3 px-4">Even, floor-up, no cold spots</td>
                        <td className="text-center py-3 px-4">Uneven, warm ceiling, cool floor</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-gray-50/50">
                        <td className="py-3 px-4 font-medium text-gray-900">Efficiency vs forced air</td>
                        <td className="text-center py-3 px-4">25-30% more efficient</td>
                        <td className="text-center py-3 px-4">Baseline</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium text-gray-900">Installed cost (new)</td>
                        <td className="text-center py-3 px-4">$6-$16 per sq ft</td>
                        <td className="text-center py-3 px-4">Varies widely by ductwork scope</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-gray-50/50">
                        <td className="py-3 px-4 font-medium text-gray-900">Air quality</td>
                        <td className="text-center py-3 px-4">No blower, no dust circulation</td>
                        <td className="text-center py-3 px-4">Circulates dust and allergens</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium text-gray-900">Noise</td>
                        <td className="text-center py-3 px-4">Silent</td>
                        <td className="text-center py-3 px-4">Blower and duct noise</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-gray-50/50">
                        <td className="py-3 px-4 font-medium text-gray-900">Central AC compatibility</td>
                        <td className="text-center py-3 px-4">Needs separate cooling system</td>
                        <td className="text-center py-3 px-4">Delivers AC through same ducts</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-900">Best for</td>
                        <td className="text-center py-3 px-4">Bathrooms, basements, allergy-prone homes</td>
                        <td className="text-center py-3 px-4">Whole-home heat + AC in one system</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-3 italic">
                  Radiant heating figures reflect Illyrian Plumber&apos;s published installation pricing. Forced-air figures vary too widely by existing ductwork condition to state a single range.
                </p>
              </section>

              {/* Comfort section */}
              <section id="comfort" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Comfort and heat distribution</h2>
                <p className="text-gray-700 mb-4">
                  This is where the two systems feel most different day to day. Forced air heats a room by pushing warm air out of a vent, usually mounted high on a wall or in the ceiling. That warm air rises, so the space near the ceiling heats up first while the floor stays comparatively cool, a pattern known as thermal stratification. Radiant floor heating flips this. Warm water circulates through tubing under the floor, so the heat source is exactly where people stand, sit, and walk.
                </p>
                <p className="text-gray-700 mb-4">
                  Forced air also cycles on and off in bursts, which most people notice as swings between a draft of warm air and a cooler lull before the next cycle. A hydronic radiant system runs at a steady, low water temperature and holds a room at a consistent temperature with no perceptible on-off cycling.
                </p>
                <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                  <Image
                    src="/images/radiator-pipe-repair-service.jpg"
                    alt="Hydronic heating pipe and manifold work for a radiant heating system"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                  <p className="text-sm text-gray-500 p-3 bg-gray-50">Hydronic piping and manifold work during a radiant heating installation.</p>
                </div>
              </section>

              {/* Mid-content CTA */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Weighing radiant heat for your home?</p>
                  <p className="text-gray-300 text-sm">Free consultation for radiant floor heating installation in Middlesex County.</p>
                </div>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
                </div>
              </div>

              {/* Cost section */}
              <section id="cost" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What each system costs</h2>
                <p className="text-gray-700 mb-4">
                  Radiant floor heating installed cost runs $6 to $16 per square foot, depending on flooring type and whether the job is new construction or a retrofit. A single bathroom (roughly 50 square feet) typically runs $1,500 to $3,000. A whole-house hydronic system runs $15,000 to $30,000, and a dedicated boiler adds $4,000 to $8,000 if you do not already have one that can serve the system.
                </p>
                <p className="text-gray-700 mb-4">
                  Forced-air pricing is harder to pin down as a flat range, because the cost is almost entirely driven by whether ductwork already exists. Replacing a furnace in a home with functional existing ducts is often the cheaper path up front. Adding a full duct system to a home that has never had one, such as a house converting from baseboard or radiant heat, is a major construction project that can approach or exceed radiant floor heating costs once wall and ceiling work is factored in.
                </p>
                <p className="text-gray-700 mb-4">
                  Electric radiant floor heating is worth a separate mention here. Electric mats are a lower-cost option for a single small room, such as a bathroom or mudroom floor, but they are not efficient or cost-effective as a whole-house heating solution the way hydronic radiant floor heating is. We install electric radiant mats for individual rooms and hydronic systems for whole-house applications, and can advise which fits your project during a free estimate.
                </p>
              </section>

              {/* Pros and cons */}
              <section id="pros-cons" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Pros and cons of radiant floor heating</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-xl overflow-hidden">
                    <div className="bg-green-600 text-white px-6 py-4">
                      <h3 className="text-xl font-bold">Radiant floor heating pros</h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2"><span className="text-green-600">✓</span><span>Even heat with no cold spots or drafts</span></li>
                        <li className="flex items-start gap-2"><span className="text-green-600">✓</span><span>25-30% more energy efficient than forced air</span></li>
                        <li className="flex items-start gap-2"><span className="text-green-600">✓</span><span>Silent operation, no blower noise</span></li>
                        <li className="flex items-start gap-2"><span className="text-green-600">✓</span><span>No dust or allergen circulation</span></li>
                        <li className="flex items-start gap-2"><span className="text-green-600">✓</span><span>PEX tubing lasts 50+ years</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="border rounded-xl overflow-hidden">
                    <div className="bg-gray-700 text-white px-6 py-4">
                      <h3 className="text-xl font-bold">Radiant floor heating cons</h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2"><span className="text-red-600">✗</span><span>Higher upfront cost than replacing an existing furnace</span></li>
                        <li className="flex items-start gap-2"><span className="text-red-600">✗</span><span>Slower to respond to a thermostat change</span></li>
                        <li className="flex items-start gap-2"><span className="text-red-600">✗</span><span>Does not provide air conditioning on its own</span></li>
                        <li className="flex items-start gap-2"><span className="text-red-600">✗</span><span>Retrofitting under existing flooring adds cost</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Choose section - second occurrence of primary link */}
              <section id="choose" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Which should you choose?</h2>
                <div className="space-y-6 mb-8">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Choose radiant floor heating if...</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>You are remodeling a bathroom or finishing a basement anyway</li>
                      <li>Someone in the household has allergies or asthma</li>
                      <li>You want the lowest possible long-term energy bills</li>
                      <li>You are building new or doing a whole-home renovation</li>
                      <li>Tile or stone flooring is already part of your plan</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Choose forced air if...</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Your home already has functional, well-sealed ductwork</li>
                      <li>You want heating and central air from a single system</li>
                      <li>Budget is the primary constraint on this project</li>
                      <li>You need heat back quickly and cannot wait on a larger retrofit</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700">
                  Most Middlesex County homes we work on are not choosing radiant versus forced air for the whole house at once. The more common project is adding{" "}
                  <Link href="/services/radiant-heating-plumbing" className="text-red-700 hover:text-red-800 font-semibold">radiant floor heating</Link>{" "}
                  to a bathroom or basement during a remodel while forced air or a boiler continues to serve the rest of the home. That approach captures the comfort benefit where it matters most without a full-house retrofit.
                </p>
              </section>

              {/* Installation timeline and maintenance */}
              <section id="timeline-maintenance" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Installation timeline and maintenance</h2>
                <p className="text-gray-700 mb-4">
                  A single-room radiant floor heating retrofit, such as a bathroom during a remodel, typically adds 1 to 2 days to the project once the subfloor is already open. A whole-house hydronic system in new construction runs alongside the rest of the rough-in schedule and does not usually extend the timeline on its own, but retrofitting a whole home that never had radiant tubing is a much larger project, often 1 to 2 weeks, since flooring has to come up and go back down in every room.
                </p>
                <p className="text-gray-700 mb-4">
                  Forced air installation timing depends entirely on whether ductwork exists. Swapping a furnace where ducts are already in place is often a single-day job. Running new ductwork through a home that has never had it, especially a Middlesex County colonial or Cape Cod with finished ceilings and no chases built in, can take longer than a comparable radiant retrofit once wall and ceiling repairs are included.
                </p>
                <p className="text-gray-700">
                  Maintenance is lighter on the radiant side day to day. A hydronic system needs an annual boiler check, similar to any boiler-fed system, but has no filters to change and no ductwork to clean. Forced air needs a filter change every 1 to 3 months and benefits from periodic duct cleaning, plus annual furnace service. Neither system is high-maintenance, but radiant heating has fewer moving parts that see everyday wear.
                </p>
              </section>

              {/* Local relevance */}
              <div className="bg-gray-50 rounded-xl p-6 mb-12">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Radiant heating in Middlesex County homes</h3>
                <p className="text-gray-700 text-sm">
                  A large share of the homes we work on in East Brunswick, Edison, and Old Bridge were built between the 1960s and 1980s and still run on oil or gas boilers rather than forced air. That makes radiant floor heating a natural upgrade, since the boiler already exists and only needs to be sized and integrated correctly. Homes that already have central forced air and central AC have less incentive to switch entirely, but still commonly add radiant floor heating to one or two rooms, most often a primary bathroom or a finished basement, during a renovation.
                </p>
              </div>

              {/* Related service card */}
              <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">Related service: radiant floor heating</p>
                  <p className="text-sm text-gray-600 mb-2">Hydronic radiant heating installation, boiler integration, and zone control setup for Middlesex County homes.</p>
                  <Link href="/services/radiant-heating-plumbing" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn more</Link>
                </div>
              </div>

              {/* FAQ */}
              <section id="faq" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <details key={index} className="group bg-gray-50 rounded-lg">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                        <span className="text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0">+</span>
                      </summary>
                      <div className="px-5 pb-5">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Outbound authoritative link */}
              <p className="text-sm text-gray-500 mb-12">
                Further reading:{" "}
                <a href="https://en.wikipedia.org/wiki/Radiant_heating" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">
                  Radiant heating (Wikipedia)
                </a>.
              </p>

              {/* Final CTA */}
              <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Ready to compare options for your home?</h2>
                <p className="text-red-100 mb-6">
                  Our licensed plumbers install and repair hydronic radiant heating systems throughout Middlesex County. Get a free, no-pressure consultation to see what fits your home and budget.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Call {BUSINESS_INFO.phone}
                  </a>
                  <Link href="/services/radiant-heating-plumbing" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                    View radiant heating services
                  </Link>
                </div>
              </section>

              {/* Related Articles */}
              <section className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/common-boiler-problems-winter" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Common boiler problems in winter</h3>
                      <p className="text-sm text-gray-600">Troubleshoot the boiler that likely feeds a hydronic radiant system.</p>
                    </div>
                  </Link>
                  <Link href="/blog/how-long-bathroom-remodel-take" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How long does a bathroom remodel take?</h3>
                      <p className="text-sm text-gray-600">The most common time to add radiant floor heating to one room.</p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need radiant heating?</p>
                  <p className="text-gray-600 text-sm mb-4">Installation, repair, and boiler integration.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
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
                    <li><Link href="/services/radiant-heating-plumbing" className="text-gray-700 hover:text-red-700 transition">Radiant Floor Heating</Link></li>
                    <li><Link href="/services/boiler-repair-service" className="text-gray-700 hover:text-red-700 transition">Boiler Repair</Link></li>
                    <li><Link href="/services/bathroom-remodeling" className="text-gray-700 hover:text-red-700 transition">Bathroom Remodeling</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You might also like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/common-boiler-problems-winter" className="text-gray-700 hover:text-red-700 transition">Common Boiler Problems in Winter</Link></li>
                    <li><Link href="/blog/how-long-bathroom-remodel-take" className="text-gray-700 hover:text-red-700 transition">How Long Does a Bathroom Remodel Take?</Link></li>
                    <li><Link href="/blog/tankless-vs-tank-water-heater" className="text-gray-700 hover:text-red-700 transition">Tankless vs Tank Water Heater</Link></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

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
