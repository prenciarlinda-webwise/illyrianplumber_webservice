import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "What Is a Plumbing Safety Inspection? Full Guide - Illyrian Plumber",
  description:
    "Learn what a plumbing safety inspection covers, how much it costs in NJ, and why home buyers, sellers, and owners of older homes need one. Guide from a licensed Middlesex County plumber.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/what-is-a-plumbing-safety-inspection" },
  keywords: [
    "plumbing safety inspection",
    "what is a plumbing safety inspection",
    "pre-purchase plumbing inspection",
    "home inspection plumbing checklist",
    "plumbing inspection cost",
    "plumbing code violations",
    "home buyer plumbing inspection",
    "plumbing inspection NJ",
    "plumbing inspection Middlesex County",
  ],
  openGraph: {
    title: "What Is a Plumbing Safety Inspection? Full Guide",
    description:
      "What a plumbing safety inspection covers, what it costs in NJ, and why home buyers and sellers need one.",
    type: "article",
    publishedTime: "2026-07-17T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function PlumbingSafetyInspectionPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is a Plumbing Safety Inspection? Full Guide",
    description:
      "What a plumbing safety inspection covers, what it costs in NJ, and why home buyers, sellers, and owners of older homes need one.",
    image: "https://www.illyrianplumber.com/images/professional-plumbing-services.jpg",
    author: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      url: "https://www.illyrianplumber.com",
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      logo: {
        "@type": "ImageObject",
        url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png",
      },
    },
    datePublished: "2026-07-17T08:00:00.000Z",
    dateModified: "2026-07-17T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/what-is-a-plumbing-safety-inspection",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a plumbing safety inspection cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A basic visual plumbing inspection in New Jersey typically runs $150 to $250, while a comprehensive inspection with water pressure testing and gas line checks runs $250 to $400. Pre-purchase inspections for home buyers usually fall in the same $250 to $400 range. Add-ons like camera drain inspection or water quality testing cost extra.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a home inspection and a plumbing inspection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A general home inspector checks that plumbing fixtures run and drain, but does not assess pipe material, remaining pipe lifespan, water pressure adequacy, or gas line integrity. A dedicated plumbing safety inspection is performed by a licensed plumber and goes far deeper, often uncovering issues a standard home inspection misses entirely.",
        },
      },
      {
        "@type": "Question",
        name: "How often should a home get a plumbing safety inspection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Homes over 20 years old should be inspected annually, since aging galvanized pipes, old water heaters, and outdated gas connections fail more often as they age. Newer homes can typically go 2 to 3 years between inspections unless they have a well, a septic system, or a known history of plumbing repairs.",
        },
      },
      {
        "@type": "Question",
        name: "What problems does a plumbing safety inspection usually find?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most common findings are corroding galvanized pipes, water heaters near or past their expected lifespan, small gas connection leaks, missing or seized shut-off valves, and outdated pipe materials like polybutylene. Most of these issues are invisible during daily use and only surface during a dedicated inspection or after they fail.",
        },
      },
    ],
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
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Home Buying</span>
                <time dateTime="2026-07-17">July 2026</time>
                <span>9 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                What is a plumbing safety inspection?
              </h1>
              <p className="text-xl text-gray-300">
                A plain-English breakdown of what gets checked, what it costs in New Jersey, and who actually needs one.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-07-17" updateDate="2026-07-17" />
        </div>

        {/* Main layout */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-lg max-w-none">

                {/* Intro - primary link lands at word ~52 */}
                <p className="text-xl text-gray-700 leading-relaxed">
                  A plumbing safety inspection is a professional evaluation of a home&apos;s water lines, drain lines, water heater, gas connections, and fixtures, carried out by a licensed plumber rather than a general home inspector. If you are buying a home, selling one, or just want to catch problems early, a{" "}
                  <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">
                    plumbing safety inspection
                  </Link>{" "}
                  from Illyrian Plumber gives you a pipe-by-pipe picture of what is really going on behind the walls and under the floors of a Middlesex County home.
                </p>

                {/* About Illyrian box */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8 not-prose">
                  <p className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-2">About Illyrian Plumber</p>
                  <p className="text-gray-700 text-sm mb-4">
                    We are a licensed, insured plumbing company based in East Brunswick, NJ serving all of Middlesex County. Our master plumbers perform detailed plumbing inspections for home buyers, sellers, and owners of aging homes, alongside the repair work those inspections often turn up.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">Water Leak Detection</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 font-medium">Gas Line Services</Link>
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8 not-prose">
                  <p className="font-bold text-gray-900 mb-3">In this guide</p>
                  <ol className="space-y-1.5 text-sm text-gray-700 list-decimal list-inside">
                    <li><a href="#what-is-it" className="text-red-700 hover:text-red-800">What a plumbing safety inspection actually checks</a></li>
                    <li><a href="#the-visit" className="text-red-700 hover:text-red-800">What happens during the visit</a></li>
                    <li><a href="#why-matters" className="text-red-700 hover:text-red-800">Why it matters, especially in older homes</a></li>
                    <li><a href="#vs-home-inspection" className="text-red-700 hover:text-red-800">Plumbing inspection vs. a standard home inspection</a></li>
                    <li><a href="#cost" className="text-red-700 hover:text-red-800">What a plumbing safety inspection costs</a></li>
                    <li><a href="#who-needs-it" className="text-red-700 hover:text-red-800">Who actually needs one</a></li>
                    <li><a href="#code-violations" className="text-red-700 hover:text-red-800">Common code violations inspections turn up</a></li>
                    <li><a href="#faqs" className="text-red-700 hover:text-red-800">FAQs</a></li>
                  </ol>
                </div>

                {/* Section 1 */}
                <h2 id="what-is-it" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  What a plumbing safety inspection actually checks
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A plumbing inspection is a room-by-room, system-by-system review of everything water and gas touch in a home. A licensed plumber physically inspects the visible plumbing, tests what can be tested, and documents what cannot be seen without opening a wall.
                </p>
                <p className="text-gray-700 leading-relaxed">A typical inspection covers:</p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Water supply lines and shut-off valves</strong> - pipe material, visible corrosion, and whether the main shut-off actually closes fully.</li>
                  <li><strong>Water heater condition</strong> - age, anode rod wear, sediment buildup, and remaining expected service life.</li>
                  <li><strong>Static and dynamic water pressure</strong> - measured with a gauge at an outdoor spigot, not just eyeballed at a faucet.</li>
                  <li><strong>Gas line connections</strong> - tested with a combustible gas detector at every visible joint and appliance connection.</li>
                  <li><strong>Fixtures, toilets, and drains</strong> - flush performance, seal condition, and drainage speed at every sink, tub, and toilet.</li>
                  <li><strong>Sump pumps and backflow devices</strong> - function testing where present, since both are easy to ignore until they fail.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You receive a written report at the end, with findings ranked by priority so you know what needs attention now versus what can be budgeted for later.
                </p>

                {/* Section on the visit itself */}
                <h2 id="the-visit" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  What happens during the visit
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A typical residential plumbing inspection takes 1 to 2 hours, depending on the size of the home and the number of fixtures and appliances involved. The sequence usually looks like this:
                </p>
                <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                  <li><strong>Walkthrough and history</strong> - the plumber walks the home with you first, asking about any known issues, recent repairs, or areas of concern before any testing begins.</li>
                  <li><strong>Fixture and drain testing</strong> - every sink, tub, shower, and toilet is run and observed for drainage speed, trap leaks, and proper seal condition.</li>
                  <li><strong>Water heater assessment</strong> - the tank, connections, temperature and pressure relief valve, and venting are checked, along with the unit&apos;s age pulled from its serial number.</li>
                  <li><strong>Pressure and gas testing</strong> - static water pressure is measured with a gauge at an outdoor spigot, and every visible gas connection is checked with a combustible gas detector.</li>
                  <li><strong>Findings walkthrough</strong> - before leaving, the plumber reviews what was found with you directly and explains what needs attention now versus what can be scheduled later.</li>
                </ol>
                <p className="text-gray-700 leading-relaxed">
                  The full written report, including photos of any problem areas, typically follows within a day or two of the visit.
                </p>

                {/* Section 2 */}
                <h2 id="why-matters" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Why it matters, especially in older homes
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Plumbing failures are rarely sudden. A water heater does not go from fine to flooding overnight, and a galvanized pipe does not corrode through in a week. Both processes take years, and both are invisible from the outside until the failure actually happens. A{" "}
                  <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">
                    plumbing safety inspection
                  </Link>{" "}
                  is designed to catch a system somewhere in that slow decline, before it turns into an emergency call.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Age is the biggest factor. Homes built before the mid-1980s frequently still run on original galvanized steel supply lines, which corrode from the inside out and eventually restrict flow or fail outright. Homes with original water heaters approaching or past 10 to 12 years are statistically much more likely to leak in the next few years than a newer unit.
                </p>

                {/* Mid CTA */}
                <div className="bg-red-700 text-white rounded-xl p-6 my-10 not-prose">
                  <p className="text-lg font-bold mb-2">Get a full plumbing inspection report</p>
                  <p className="text-red-100 text-sm mb-4">
                    Licensed inspections with a detailed written report, serving East Brunswick and every Middlesex County town.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition text-center text-sm">
                      Call Niti: {BUSINESS_INFO.phone}
                    </a>
                    <a href={BUSINESS_INFO.phone2Link} className="bg-red-800 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-red-900 transition text-center text-sm">
                      Call Danny: {BUSINESS_INFO.phone2}
                    </a>
                  </div>
                </div>

                {/* Section 3 */}
                <h2 id="vs-home-inspection" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Plumbing inspection vs. a standard home inspection
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A general home inspector runs the water, flushes the toilets, and notes anything obviously broken. That is a reasonable overview, but it is not a plumbing inspection checklist. Most home inspectors are generalists covering roofing, electrical, structure, and HVAC in the same visit, and plumbing gets a fraction of the attention a licensed plumber gives it.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A dedicated plumbing inspection goes further on every point: measured water pressure instead of a quick tap test, a combustible gas detector at every gas joint instead of a visual glance, and an assessment of pipe material and remaining lifespan rather than just &ldquo;no active leaks found.&rdquo; For a buyer, that difference can be the gap between a smooth closing and a $6,000 repiping bill discovered six months after moving in.
                </p>

                {/* Section 4 */}
                <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  What a plumbing safety inspection costs
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Pricing depends on the scope of the inspection and the size of the home. Here is what Illyrian Plumber charges for plumbing inspections in Middlesex County:
                </p>
                <div className="overflow-x-auto not-prose my-6">
                  <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-800">Inspection type</th>
                        <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-800">Typical cost</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="px-4 py-3 border border-gray-200">Basic visual inspection</td>
                        <td className="px-4 py-3 border border-gray-200">$150 - $250</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border border-gray-200">Comprehensive inspection</td>
                        <td className="px-4 py-3 border border-gray-200">$250 - $400</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border border-gray-200">Pre-purchase buyer inspection</td>
                        <td className="px-4 py-3 border border-gray-200">$250 - $400</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border border-gray-200">Gas line safety inspection</td>
                        <td className="px-4 py-3 border border-gray-200">$100 - $200</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border border-gray-200">Camera drain line inspection (add-on)</td>
                        <td className="px-4 py-3 border border-gray-200">$150 - $350</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  A $250 to $400 inspection is inexpensive insurance next to the cost of the problems it can catch. A failed water heater alone can run $1,500 or more to replace, and undetected galvanized pipe failure can mean a full repipe.
                </p>

                {/* Section 5 */}
                <h2 id="who-needs-it" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Who actually needs one
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Home buyers</strong> - a pre-purchase plumbing inspection gives you leverage to negotiate repairs or price before you own the problem.</li>
                  <li><strong>Home sellers</strong> - fixing issues on your own timeline beats discovering them mid-negotiation after a buyer&apos;s inspector flags them.</li>
                  <li><strong>Owners of homes over 20 years old</strong> - annual inspections catch slow-developing failures before they become emergencies.</li>
                  <li><strong>Owners with a well or septic system</strong> - these systems add failure points a municipal-connection home does not have.</li>
                  <li><strong>Landlords and property managers</strong> - documented inspections protect against liability and support maintenance budgeting.</li>
                </ul>

                {/* Section 6 */}
                <h2 id="code-violations" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Common code violations inspections turn up
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Plumbing work in New Jersey has to meet the state Uniform Construction Code&apos;s plumbing subcode, and inspections routinely surface violations left behind by prior owners or unlicensed repairs. The most frequent ones we find:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Missing or seized main shut-off valves</strong> - a valve that will not close is a safety issue during any future emergency.</li>
                  <li><strong>Improper venting on drain lines</strong> - often from a DIY fixture swap that skipped the vent connection.</li>
                  <li><strong>Outdated pipe materials</strong> - polybutylene and lead supply lines are both known failure points that current code no longer permits.</li>
                  <li><strong>Unpermitted gas appliance connections</strong> - a new water heater or range installed without a permit or inspection.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You can review the plumbing subcode requirements yourself through the{" "}
                  <a href="https://www.njconsumeraffairs.gov/plu" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">
                    NJ Division of Consumer Affairs Plumbing Board
                  </a>
                  , which licenses and regulates plumbing work across the state.
                </p>

                {/* Local relevance */}
                <p className="text-gray-700 leading-relaxed">
                  Middlesex County&apos;s housing stock skews older than the state average, with long stretches of 1960s and 1970s split-levels and Capes across{" "}
                  <Link href="/service-areas/middlesex-county" className="text-red-700 hover:text-red-800 font-medium">
                    East Brunswick, Edison, Sayreville, Old Bridge, and the rest of Middlesex County
                  </Link>{" "}
                  still running on their original plumbing. We routinely find galvanized supply lines that have been quietly corroding for 50-plus years and water heaters well past their service life. That history matters most at closing. A buyer on a 1972 East Brunswick split-level is taking on very different plumbing risk than a buyer on a 2015 townhome, and a pre-purchase inspection is the only way to actually know which one you are buying.
                </p>

                {/* Service Card */}
                <div className="border border-gray-200 rounded-xl p-6 mb-12 mt-8 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition not-prose">
                  <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-1">Plumbing Safety Inspections</p>
                    <p className="text-sm text-gray-600 mb-2">Comprehensive plumbing inspections for home buyers, sellers, and owners of older homes, with a detailed written report. Serving East Brunswick and all of Middlesex County, NJ.</p>
                    <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn more</Link>
                  </div>
                </div>

                {/* FAQs */}
                <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-6">
                  FAQs
                </h2>
                <div className="space-y-4 not-prose">
                  {[
                    {
                      question: "How much does a plumbing safety inspection cost?",
                      answer: "A basic visual plumbing inspection in New Jersey typically runs $150 to $250, while a comprehensive inspection with water pressure testing and gas line checks runs $250 to $400. Pre-purchase inspections for home buyers usually fall in the same $250 to $400 range. Add-ons like camera drain inspection or water quality testing cost extra.",
                    },
                    {
                      question: "What is the difference between a home inspection and a plumbing inspection?",
                      answer: "A general home inspector checks that plumbing fixtures run and drain, but does not assess pipe material, remaining pipe lifespan, water pressure adequacy, or gas line integrity. A dedicated plumbing safety inspection is performed by a licensed plumber and goes far deeper, often uncovering issues a standard home inspection misses entirely.",
                    },
                    {
                      question: "How often should a home get a plumbing safety inspection?",
                      answer: "Homes over 20 years old should be inspected annually, since aging galvanized pipes, old water heaters, and outdated gas connections fail more often as they age. Newer homes can typically go 2 to 3 years between inspections unless they have a well, a septic system, or a known history of plumbing repairs.",
                    },
                    {
                      question: "What problems does a plumbing safety inspection usually find?",
                      answer: "The most common findings are corroding galvanized pipes, water heaters near or past their expected lifespan, small gas connection leaks, missing or seized shut-off valves, and outdated pipe materials like polybutylene. Most of these issues are invisible during daily use and only surface during a dedicated inspection or after they fail.",
                    },
                  ].map((faq, i) => (
                    <details key={i} className="border border-gray-200 rounded-lg overflow-hidden group">
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer bg-white hover:bg-gray-50 transition font-semibold text-gray-900 list-none">
                        {faq.question}
                        <span className="ml-4 text-red-700 text-xl font-bold group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                      </summary>
                      <div className="px-5 py-4 bg-gray-50 text-gray-700 text-sm leading-relaxed border-t border-gray-200">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>

                {/* Final CTA */}
                <div className="bg-gray-900 text-white rounded-xl p-8 mt-10 not-prose">
                  <p className="text-xl font-bold mb-2">Ready to schedule an inspection?</p>
                  <p className="text-gray-300 text-sm mb-6">
                    Illyrian Plumber provides licensed plumbing safety inspections for homeowners, buyers, and sellers throughout East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick, with a written report you can use for negotiation, insurance, or your own maintenance plan.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-3 rounded-lg font-bold hover:bg-red-800 transition text-center">
                      Call Niti: {BUSINESS_INFO.phone}
                    </a>
                    <a href={BUSINESS_INFO.phone2Link} className="bg-gray-700 text-white px-5 py-3 rounded-lg font-bold hover:bg-gray-600 transition text-center">
                      Call Danny: {BUSINESS_INFO.phone2}
                    </a>
                    <Link href="/services/plumbing-safety-inspections" className="border border-gray-500 text-gray-200 px-5 py-3 rounded-lg font-bold hover:border-gray-300 hover:text-white transition text-center">
                      Plumbing Inspection Service
                    </Link>
                  </div>
                </div>

                {/* Related Articles */}
                <section className="mt-12 not-prose">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/blog/why-is-water-pressure-low" className="group">
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Why is my water pressure low?</h3>
                        <p className="text-sm text-gray-600">Common causes of low water pressure and how to fix them.</p>
                      </div>
                    </Link>
                    <Link href="/blog/signs-water-heater-dying" className="group">
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs your water heater is dying</h3>
                        <p className="text-sm text-gray-600">Know the warning signs before you are left without hot water.</p>
                      </div>
                    </Link>
                    <Link href="/blog/signs-of-slab-leak-sewer-line" className="group">
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs of a slab leak or sewer line problem</h3>
                        <p className="text-sm text-gray-600">How to spot a hidden leak before it causes real damage.</p>
                      </div>
                    </Link>
                    <Link href="/blog/what-is-backflow-testing" className="group">
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">What is backflow testing?</h3>
                        <p className="text-sm text-gray-600">Everything NJ homeowners need to know about annual testing.</p>
                      </div>
                    </Link>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">

                {/* Call Now */}
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need an inspection?</p>
                  <p className="text-gray-600 text-sm mb-4">Licensed plumbing inspections with a full written report.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>

                {/* Service Areas */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Service areas</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    {BUSINESS_INFO.serviceAreas.map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>
                        <Link href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-red-700 transition">
                          {area}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/service-areas" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All service areas</Link>
                </div>

                {/* Services */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium transition">Plumbing Safety Inspections</Link></li>
                    <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                    <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Services</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All services</Link>
                </div>

                {/* You Might Also Like */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You might also like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition leading-snug block">Why is my water pressure low?</Link></li>
                    <li><Link href="/blog/signs-water-heater-dying" className="text-gray-700 hover:text-red-700 transition leading-snug block">Signs your water heater is dying</Link></li>
                    <li><Link href="/blog/what-is-backflow-testing" className="text-gray-700 hover:text-red-700 transition leading-snug block">What is backflow testing?</Link></li>
                  </ul>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </article>
    </>
  );
}
