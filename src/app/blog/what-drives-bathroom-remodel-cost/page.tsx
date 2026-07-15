import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "What actually drives bathroom remodel cost (2026)",
  description: "See what really drives bathroom remodel cost in NJ, from fixture swaps to full rough-in, with real plumbing price ranges by project tier and budget.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/what-drives-bathroom-remodel-cost" },
  keywords: [
    "bathroom remodel cost",
    "bathroom remodel cost factors",
    "what drives bathroom remodel cost",
    "bathroom remodel cost breakdown",
    "small bathroom remodel cost",
    "high end bathroom remodel",
    "bathroom remodel budget",
    "bathroom remodel plumbing cost NJ",
  ],
  openGraph: {
    title: "What actually drives bathroom remodel cost (2026)",
    description: "Real plumbing price ranges by project tier, and the factors that push a bathroom remodel budget up or down.",
    type: "article",
    publishedTime: "2026-07-29T08:00:00.000Z",
    modifiedTime: "2026-07-29T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function WhatDrivesBathroomRemodelCostPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What actually drives bathroom remodel cost (2026)",
    description: "Real plumbing price ranges by project tier, and the factors that push a bathroom remodel budget up or down.",
    image: "https://www.illyrianplumber.com/images/faucet-installation-service.jpg",
    author: {
      "@type": "Person",
      name: "Illyrian Plumber Team",
      worksFor: { "@id": "https://www.illyrianplumber.com/#organization" },
    },
    publisher: { "@id": "https://www.illyrianplumber.com/#organization" },
    datePublished: "2026-07-29T08:00:00.000Z",
    dateModified: "2026-07-29T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/what-drives-bathroom-remodel-cost" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.illyrianplumber.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.illyrianplumber.com/blog" },
      { "@type": "ListItem", position: 3, name: "What Actually Drives Bathroom Remodel Cost", item: "https://www.illyrianplumber.com/blog/what-drives-bathroom-remodel-cost" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is the average cost of a bathroom remodel in NJ?", acceptedAnswer: { "@type": "Answer", text: "Bathroom remodeling plumbing in New Jersey typically runs $2,500 to $8,000 depending on scope, and plumbing usually represents 15 to 25 percent of a total bathroom renovation budget. That means overall project cost, once tile, vanity, and labor for other trades are added, usually lands well above the plumbing-only figure. We provide free estimates so you know the exact total before work begins." } },
      { "@type": "Question", name: "Does moving a toilet or shower increase remodel cost?", acceptedAnswer: { "@type": "Answer", text: "Yes. Relocating a fixture more than a short distance means rerouting supply and drain lines, which typically adds $500 to $1,500 per fixture moved. Keeping toilets, showers, and vanities in their existing locations is the single biggest way to hold down bathroom remodel cost, since it avoids this relocation charge entirely." } },
      { "@type": "Question", name: "What is the biggest cost driver in a bathroom remodel?", acceptedAnswer: { "@type": "Answer", text: "Whether the layout is changing is usually the biggest driver, followed by fixture quality tier. A remodel that keeps every fixture in its current spot and uses stock materials costs far less than one that relocates plumbing or adds a complete rough-in for a new bathroom. Waterproofing scope and permit requirements are secondary factors that scale with the size of the job." } },
      { "@type": "Question", name: "Is a small bathroom remodel cheaper than a full renovation?", acceptedAnswer: { "@type": "Answer", text: "Generally yes. A small bathroom remodel that swaps a toilet, faucet, and shower valve without moving plumbing stays on the lower end of the cost range. A full renovation with a new layout, relocated fixtures, and complete rough-in costs more per square foot because it requires more labor hours and often a full permit and inspection cycle." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-white">
        <header className="relative bg-gray-900 text-white py-16 md:py-24">
          <div className="absolute inset-0">
            <Image src="/images/faucet-installation-service.jpg" alt="Bathroom remodel cost factors" fill className="object-cover opacity-40" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Remodeling</span>
                <time dateTime="2026-07-29">Published July 29, 2026</time>
                <span>11 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">What actually drives bathroom remodel cost (2026)</h1>
              <p className="text-xl text-gray-300">Real plumbing price ranges by project tier, and the factors that push a bathroom remodel budget up or down.</p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-07-29" updateDate="2026-07-29" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-5 mb-8">
                <p className="font-bold text-gray-900 mb-2">Quick answer</p>
                <p className="text-gray-800 leading-relaxed">
                  Bathroom remodel cost is driven less by finishes than by whether the plumbing layout changes. A basic refresh that keeps every fixture in place stays closer to $1,000 to $2,000 in plumbing cost. A mid-range remodel that relocates a fixture or two adds $500 to $1,500 per fixture moved. A full renovation with a complete rough-in for a new layout runs $3,000 to $7,000 in plumbing alone, out of a total project that typically falls between $2,500 and $8,000 for the plumbing scope.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Bathroom remodel cost varies more than almost any other home renovation project, and the reason almost always comes down to what happens behind the walls once demolition starts, not the tile or the fixtures on the shelf. As licensed plumbers who complete the <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800 underline">bathroom remodeling plumbing</Link> behind hundreds of Middlesex County renovations each year, we see the same pattern on nearly every job.
                </p>
                <p>
                  Two homeowners can request what sounds like the same project and get quotes $3,000 apart, and the gap is almost never about the contractor. It is about scope. Keeping a toilet, vanity, and shower in their current locations is a fundamentally different plumbing job than moving them six feet to fit a new layout. Below, we break down the three cost tiers we see most often, the real task-by-task price ranges behind them, and the specific factors that push a project from one tier into the next.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers handling <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">bathroom remodeling plumbing</Link>, <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">toilet and faucet installation</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, and <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800">plumbing safety inspections</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since {BUSINESS_INFO.founded}.
                </p>
              </div>

              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">What is in this guide</h2>
                <ul className="space-y-2">
                  <li><a href="#cost-tiers" className="text-red-700 hover:text-red-800">The three bathroom remodel cost tiers</a></li>
                  <li><a href="#cost-breakdown" className="text-red-700 hover:text-red-800">Cost breakdown by task</a></li>
                  <li><a href="#cost-drivers" className="text-red-700 hover:text-red-800">What drives bathroom remodel cost the most</a></li>
                  <li><a href="#small-vs-highend" className="text-red-700 hover:text-red-800">Small remodel vs high end bathroom remodel</a></li>
                  <li><a href="#middlesex" className="text-red-700 hover:text-red-800">Middlesex County considerations</a></li>
                  <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently asked questions</a></li>
                </ul>
              </nav>

              <section id="cost-tiers" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The three bathroom remodel cost tiers</h2>
                <p className="text-gray-700 mb-6">Nearly every bathroom remodel we quote falls into one of three tiers, based on how much the plumbing layout is changing.</p>

                <div className="space-y-6">
                  <div className="bg-white border rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tier 1: Basic refresh</h3>
                    <p className="text-gray-700">Toilet, vanity faucet, and shower valve swapped in their current locations, no layout changes. This is the fastest and least expensive tier because there is no rough-in work and no relocated lines.</p>
                  </div>
                  <div className="bg-white border rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tier 2: Mid-range remodel</h3>
                    <p className="text-gray-700">One or two fixtures move, such as converting a tub to a walk-in shower or shifting a vanity a few feet for a new design. Each relocated fixture adds its own line-item cost on top of the fixture install itself.</p>
                  </div>
                  <div className="bg-white border rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tier 3: Full renovation</h3>
                    <p className="text-gray-700">A new layout, an added bathroom, or a gut renovation that requires a complete rough-in: new supply lines, drains, and vents from scratch. This is the highest tier because every connection in the room is new.</p>
                  </div>
                </div>
              </section>

              <div className="bg-red-700 text-white rounded-xl p-6 mb-12 text-center">
                <p className="text-2xl font-bold mb-3">Not sure which tier your project falls into?</p>
                <p className="text-red-100 mb-4">We provide a free in-home estimate and tell you exactly where your project lands before any work starts.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-red-800 transition">Call {BUSINESS_INFO.phone2}</a>
                </div>
              </div>

              <section id="cost-breakdown" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Bathroom remodel cost breakdown by task</h2>
                <p className="text-gray-700 mb-6">These are the real plumbing task ranges behind the tiers above. Plumbing typically represents 15 to 25 percent of a total bathroom renovation budget, so the figures below cover the plumbing scope only, not tile, cabinetry, or paint.</p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-gray-900">Task</th>
                        <th className="text-left p-3 font-semibold text-gray-900">Typical range</th>
                        <th className="text-left p-3 font-semibold text-gray-900">Tier</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr><td className="p-3">Toilet replacement (standard)</td><td className="p-3">$300 to $600</td><td className="p-3">Basic refresh</td></tr>
                      <tr><td className="p-3">Vanity faucet installation</td><td className="p-3">$200 to $400</td><td className="p-3">Basic refresh</td></tr>
                      <tr><td className="p-3">Shower valve replacement</td><td className="p-3">$400 to $800</td><td className="p-3">Basic refresh</td></tr>
                      <tr><td className="p-3">Tub-to-shower conversion</td><td className="p-3">$1,500 to $3,500</td><td className="p-3">Mid-range</td></tr>
                      <tr><td className="p-3">Pipe relocation (per fixture)</td><td className="p-3">$500 to $1,500</td><td className="p-3">Mid-range</td></tr>
                      <tr><td className="p-3">Complete rough-in (new bathroom)</td><td className="p-3">$3,000 to $7,000</td><td className="p-3">Full renovation</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500">Figures reflect New Jersey plumbing costs and vary based on fixture selection and existing conditions. Full project figures typically span $2,500 to $8,000 for the plumbing portion. Contact us for an exact quote.</p>
              </section>

              <section id="cost-drivers" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What drives bathroom remodel cost the most?</h2>
                <p className="text-gray-700 mb-6">Five factors decide which tier a project lands in, roughly in order of impact:</p>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-1">Whether the layout is changing</h4>
                    <p className="text-gray-700">Moving a toilet, tub, or shower even a few feet requires rerouting drain and supply lines below the floor. This single factor separates a basic refresh from a mid-range remodel more than any other choice.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-1">Fixture quality tier</h4>
                    <p className="text-gray-700">A builder-grade toilet and a high-end comfort-height model with a concealed tank both install the same way, but the fixture price itself scales the total project cost even when labor stays flat.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-1">Waterproofing and structural scope</h4>
                    <p className="text-gray-700">A new shower pan, curbless entry, or repaired subfloor after water damage adds labor and materials beyond the plumbing line items above.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-1">Permit and inspection requirements</h4>
                    <p className="text-gray-700">Any project that relocates supply or drain lines requires a permit and a municipal inspection before walls close. A <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 underline">plumbing safety inspection</Link> during an older home purchase often surfaces the outdated piping that drives this cost up later.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-1">Labor versus materials split</h4>
                    <p className="text-gray-700">On a full rough-in, labor typically makes up the larger share of the plumbing cost, since every connection in the room has to be run, tested, and inspected before finishes go in.</p>
                  </div>
                </div>
              </section>

              <section id="small-vs-highend" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Small bathroom remodel cost vs a high end bathroom remodel</h2>
                <p className="text-gray-700 mb-4">
                  Small bathroom remodel cost stays lower mainly because there is less to move and less square footage to waterproof. A powder room or small hall bath refresh usually fits the basic refresh tier: swap the toilet, faucet, and maybe the shower valve, and the plumbing scope is done in a single visit.
                </p>
                <p className="text-gray-700 mb-4">
                  A high end bathroom remodel almost always lands in the full renovation tier, not because the fixtures cost more (though they usually do), but because primary suite remodels tend to add a curbless shower, a freestanding tub, a double vanity, or a heated floor system, each of which touches the plumbing layout. The <a href="https://nkba.org/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800 underline">National Kitchen and Bath Association</a> publishes general planning guidance that reflects the same pattern nationally: layout changes, not finish selection, are what separate a moderate remodel budget from a high-end one.
                </p>
              </section>

              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Ready for an accurate bathroom remodel quote?</p>
                  <p className="text-gray-300 text-sm">Free in-home estimate, no obligation.</p>
                </div>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
                </div>
              </div>

              <section id="middlesex" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Middlesex County considerations</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700">
                    Older housing stock in parts of <Link href="/service-areas/old-bridge" className="text-red-700 hover:text-red-800 underline">Old Bridge</Link> and <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 underline">South Brunswick</Link> still runs on galvanized supply lines, which often get discovered once demolition opens the wall. Replacing a short galvanized run while the wall is already open costs far less than doing it as a standalone repair later, so we flag it during the estimate rather than mid-project. Municipal permit and inspection timelines also vary by township, which is worth building into your schedule alongside the cost tiers above.
                  </p>
                </div>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
                <div className="space-y-4">
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">What is the average cost of a bathroom remodel in NJ?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5"><p className="text-gray-700">Bathroom remodeling plumbing in New Jersey typically runs $2,500 to $8,000 depending on scope, and plumbing usually represents 15 to 25 percent of a total bathroom renovation budget. That means overall project cost, once tile, vanity, and labor for other trades are added, usually lands well above the plumbing-only figure. We provide free estimates so you know the exact total before work begins.</p></div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Does moving a toilet or shower increase remodel cost?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5"><p className="text-gray-700">Yes. Relocating a fixture more than a short distance means rerouting supply and drain lines, which typically adds $500 to $1,500 per fixture moved. Keeping toilets, showers, and vanities in their existing locations is the single biggest way to hold down bathroom remodel cost, since it avoids this relocation charge entirely.</p></div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">What is the biggest cost driver in a bathroom remodel?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5"><p className="text-gray-700">Whether the layout is changing is usually the biggest driver, followed by fixture quality tier. A remodel that keeps every fixture in its current spot and uses stock materials costs far less than one that relocates plumbing or adds a complete rough-in for a new bathroom. Waterproofing scope and permit requirements are secondary factors that scale with the size of the job.</p></div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Is a small bathroom remodel cheaper than a full renovation?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5"><p className="text-gray-700">Generally yes. A small bathroom remodel that swaps a toilet, faucet, and shower valve without moving plumbing stays on the lower end of the cost range. A full renovation with a new layout, relocated fixtures, and complete rough-in costs more per square foot because it requires more labor hours and often a full permit and inspection cycle.</p></div>
                  </details>
                </div>
              </section>

              <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Ready to find out which tier your project falls into?</h2>
                <p className="text-red-100 mb-6">We handle all the plumbing for bathroom remodels, from a basic fixture refresh to a full rough-in, with upfront written pricing before any work starts.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                  <Link href="/services/bathroom-remodeling" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Bathroom remodeling plumbing</Link>
                </div>
              </section>

              <section className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/how-long-bathroom-remodel-take" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How long does a bathroom remodel take?</h3>
                      <p className="text-sm text-gray-600">The phase-by-phase timeline that pairs with this cost guide.</p>
                    </div>
                  </Link>
                  <Link href="/blog/why-is-water-pressure-low" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Why is my water pressure low?</h3>
                      <p className="text-sm text-gray-600">Old supply lines found mid-remodel often explain pressure issues too.</p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need a plumber?</p>
                  <p className="text-gray-600 text-sm mb-4">Free estimates for bathroom remodel plumbing.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Service areas</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li><Link href="/service-areas/east-brunswick" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>East Brunswick</Link></li>
                    <li><Link href="/service-areas/edison" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Edison</Link></li>
                    <li><Link href="/service-areas/sayreville" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Sayreville</Link></li>
                    <li><Link href="/service-areas/old-bridge" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Old Bridge</Link></li>
                    <li><Link href="/service-areas/monroe-township" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Monroe Township</Link></li>
                    <li><Link href="/service-areas/south-brunswick" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>South Brunswick</Link></li>
                    <li><Link href="/service-areas/north-brunswick" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>North Brunswick</Link></li>
                  </ul>
                  <Link href="/service-areas" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Service Areas</Link>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our Services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/bathroom-remodeling" className="text-gray-700 hover:text-red-700 transition">Bathroom Remodeling</Link></li>
                    <li><Link href="/services/toilet-and-faucet-installation" className="text-gray-700 hover:text-red-700 transition">Toilet &amp; Faucet Installation</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                    <li><Link href="/services/plumbing-safety-inspections" className="text-gray-700 hover:text-red-700 transition">Plumbing Safety Inspections</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/how-long-bathroom-remodel-take" className="text-gray-700 hover:text-red-700 transition leading-snug block">How Long Does a Bathroom Remodel Take?</Link></li>
                    <li><Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition leading-snug block">Why Is My Water Pressure Low?</Link></li>
                    <li><Link href="/blog/tankless-vs-tank-water-heater" className="text-gray-700 hover:text-red-700 transition leading-snug block">Tankless vs Tank Water Heater</Link></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 p-3">
        <div className="flex gap-2">
          <a href={BUSINESS_INFO.phoneLink} className="flex-1 bg-red-700 text-white px-4 py-3 rounded-lg font-bold text-center text-sm">Call {BUSINESS_INFO.phoneName}</a>
          <a href={BUSINESS_INFO.phone2Link} className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg font-bold text-center text-sm">Call {BUSINESS_INFO.phone2Name}</a>
        </div>
      </div>
    </>
  );
}
