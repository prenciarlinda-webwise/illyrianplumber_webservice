import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How Long Does a Bathroom Remodel Take? Complete Timeline Guide",
  description: "Plan your bathroom renovation with realistic timelines. Learn how long each phase takes and what affects the schedule. NJ plumber expert guide.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/how-long-bathroom-remodel-take" },
  keywords: [
    "bathroom remodel timeline",
    "how long bathroom renovation",
    "bathroom plumbing remodel",
    "bathroom renovation schedule",
    "bathroom remodel phases",
    "bathroom renovation duration",
    "bathroom remodel time",
    "small bathroom remodel timeline",
    "bathroom plumbing rough in time",
    "bathroom renovation weeks",
    "how long does a bathroom remodel take",
    "bathroom renovation plumbing cost",
  ],
  openGraph: {
    title: "How Long Does a Bathroom Remodel Take?",
    description: "Complete bathroom renovation timeline guide for NJ homeowners.",
    type: "article",
    publishedTime: "2025-01-29T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function BathroomRemodelPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Long Does a Bathroom Remodel Take?",
    description: "Complete bathroom renovation timeline guide with realistic phase-by-phase breakdown.",
    image: "https://www.illyrianplumber.com/images/bathroom-remodel-marble-shower.jpg",
    author: { "@type": "Organization", name: BUSINESS_INFO.name, url: "https://www.illyrianplumber.com" },
    publisher: { "@type": "Organization", name: BUSINESS_INFO.name, logo: { "@type": "ImageObject", url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png" } },
    datePublished: "2025-01-29T08:00:00.000Z",
    dateModified: "2026-03-18T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/how-long-bathroom-remodel-take" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How long does a full bathroom remodel take?", acceptedAnswer: { "@type": "Answer", text: "A full bathroom remodel typically takes 3-6 weeks for a standard bathroom. Master bathrooms or bathrooms with layout changes can take 6-8 weeks. This includes demolition, plumbing rough-in, electrical, drywall, tile, fixtures, and finishing." } },
      { "@type": "Question", name: "How long does bathroom plumbing rough-in take?", acceptedAnswer: { "@type": "Answer", text: "Plumbing rough-in (moving or installing supply lines and drains) typically takes 1-3 days for a standard bathroom. If you're relocating fixtures or making significant layout changes, it can take up to a week." } },
      { "@type": "Question", name: "What takes the longest in a bathroom remodel?", acceptedAnswer: { "@type": "Answer", text: "Tile work typically takes the longest -usually 3-7 days for installation plus curing time. Custom orders (vanities, fixtures, tile) can also cause delays of 2-8 weeks if not ordered early in the planning phase." } },
      { "@type": "Question", name: "Can a bathroom be remodeled in one week?", acceptedAnswer: { "@type": "Answer", text: "A very minor remodel (replacing fixtures without moving plumbing, new paint, new vanity in same location) might be possible in 5-7 days. However, any tile work, plumbing relocation, or significant changes will require at least 2-3 weeks minimum." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-white">
        <header className="relative bg-gray-900 text-white py-16 md:py-24">
          <div className="absolute inset-0">
            <Image src="/images/bathroom-remodel-marble-shower.jpg" alt="Bathroom remodel timeline" fill className="object-cover opacity-40" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Remodeling</span>
                <time dateTime="2025-01-29">January 29, 2025</time>
                <span>13 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">How Long Does a Bathroom Remodel Take? Complete Timeline Guide</h1>
              <p className="text-xl text-gray-300">Plan your bathroom renovation with realistic expectations. Here&apos;s what to expect from start to finish.</p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2025-01-29" updateDate="2026-03-23" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                &quot;How long until I can use my bathroom again?&quot; It&apos;s the first question every homeowner asks when planning a bathroom remodel. The honest answer depends on the scope of your project -but realistic expectations help you plan accordingly.
              </p>
              <p>
                As plumbers who handle the rough-in work for bathroom remodels throughout Middlesex County, we see projects from start to finish. Here&apos;s a realistic timeline breakdown based on real projects.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Timeline Topics</h2>
              <ul className="space-y-2">
                <li><a href="#quick-overview" className="text-red-700 hover:text-red-800">Quick Timeline Overview</a></li>
                <li><a href="#phase-breakdown" className="text-red-700 hover:text-red-800">Phase-by-Phase Breakdown</a></li>
                <li><a href="#what-affects" className="text-red-700 hover:text-red-800">What Affects the Timeline</a></li>
                <li><a href="#plumbing-focus" className="text-red-700 hover:text-red-800">The Plumbing Phase Explained</a></li>
                <li><a href="#delays" className="text-red-700 hover:text-red-800">Common Delay Causes</a></li>
                <li><a href="#tips" className="text-red-700 hover:text-red-800">Tips for Faster Completion</a></li>
              </ul>
            </nav>

            <section id="quick-overview" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Quick Timeline Overview</h2>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-green-600 mb-2">1-2 weeks</p>
                    <p className="font-semibold text-gray-900">Minor Refresh</p>
                    <p className="text-sm text-gray-600">New fixtures, paint, vanity (same locations)</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600 mb-2">3-4 weeks</p>
                    <p className="font-semibold text-gray-900">Standard Remodel</p>
                    <p className="text-sm text-gray-600">New tile, fixtures, vanity, some plumbing updates</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-orange-600 mb-2">5-8 weeks</p>
                    <p className="font-semibold text-gray-900">Full Renovation</p>
                    <p className="text-sm text-gray-600">Layout changes, moving plumbing, custom work</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700">These are working days with trades on-site. Add planning time (design, permits, ordering materials) before construction starts -typically 2-6 weeks depending on complexity.</p>
            </section>

            <section id="phase-breakdown" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Phase-by-Phase Breakdown</h2>

              <div className="space-y-6">
                <div className="bg-white border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Demolition</h3>
                      <p className="text-sm text-gray-600">1-2 days</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Removing old fixtures, tile, vanity, and drywall. Protecting surrounding areas from dust and debris. Hauling away materials.</p>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Plumbing Rough-In</h3>
                      <p className="text-sm text-gray-600">1-3 days</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Moving or installing supply lines, drains, and vents. This is where layout changes happen. Longer if relocating fixtures significantly.</p>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Electrical Rough-In</h3>
                      <p className="text-sm text-gray-600">1-2 days</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Wiring for new fixtures, exhaust fan, outlets, lighting. May overlap with plumbing work.</p>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Inspection</h3>
                      <p className="text-sm text-gray-600">1-3 days (scheduling dependent)</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Municipal inspection of plumbing and electrical rough-in before closing walls. Scheduling varies by municipality.</p>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold">5</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Drywall & Cement Board</h3>
                      <p className="text-sm text-gray-600">2-3 days</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Installing moisture-resistant drywall and cement board (for tile areas). Includes taping, mudding, and sanding -with drying time between coats.</p>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold">6</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Tile Work</h3>
                      <p className="text-sm text-gray-600">3-7 days</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Often the longest single phase. Includes waterproofing, setting tile, grouting, and curing time. Complex patterns take longer.</p>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold">7</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Vanity & Countertop</h3>
                      <p className="text-sm text-gray-600">1-2 days</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Installing vanity cabinet and countertop. Custom countertops may require templating first (adds scheduling time).</p>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold">8</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Fixture Installation</h3>
                      <p className="text-sm text-gray-600">1-2 days</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Plumber returns to install toilet, faucets, shower fixtures, and connect everything. Testing all connections.</p>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold">9</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Finishing</h3>
                      <p className="text-sm text-gray-600">1-2 days</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Paint, mirrors, accessories, final electrical (outlets, switches, lights). Caulking, cleanup, touch-ups.</p>
                </div>
              </div>
            </section>

            {/* Mid-content CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Planning a bathroom renovation?</p>
                <p className="text-gray-300 text-sm">Expert plumbing for bathroom remodels.</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">
                  Call Niti
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">
                  Call Danny
                </a>
              </div>
            </div>

            <section id="what-affects" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Affects the Timeline?</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Extends Timeline</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Moving plumbing locations</li>
                    <li>• Custom tile patterns</li>
                    <li>• Custom cabinetry/countertops</li>
                    <li>• Structural changes</li>
                    <li>• Discovering hidden issues</li>
                    <li>• Permit/inspection delays</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Speeds Up Timeline</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Keeping fixtures in same locations</li>
                    <li>• Stock/ready-made materials</li>
                    <li>• Simple tile layouts</li>
                    <li>• All materials on-site before start</li>
                    <li>• Experienced contractor</li>
                    <li>• Quick permit approval</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="plumbing-focus" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Plumbing Phase Explained</h2>

              <p className="text-gray-700 mb-6">As plumbers, we&apos;re involved in two distinct phases of your bathroom remodel:</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Rough-In Phase (Early)</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Moving/installing supply lines</li>
                    <li>• Relocating drains if needed</li>
                    <li>• Installing new vent piping</li>
                    <li>• Shower valve installation</li>
                    <li>• Pressure testing</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3"><strong>Timing:</strong> After demo, before drywall</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Trim-Out Phase (Late)</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Installing toilet</li>
                    <li>• Setting faucets</li>
                    <li>• Connecting shower fixtures</li>
                    <li>• Vanity plumbing connections</li>
                    <li>• Testing everything</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3"><strong>Timing:</strong> After tile and vanity</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Why Plumbing Location Matters</h4>
                <p className="text-gray-700">Keeping fixtures in their current locations is the single biggest time-saver. Moving a toilet, for example, requires rerouting the drain line through the subfloor -adding days to the project. Moving it more than a few feet may require breaking concrete if you have a slab foundation.</p>
              </div>
            </section>

            <section id="delays" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Common Delay Causes</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Materials Not Available</h4>
                  <p className="text-gray-700">Custom tile, specific fixtures, or special-order items can take weeks to arrive. Order everything before demolition begins.</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Hidden Problems Discovered</h4>
                  <p className="text-gray-700">Water damage, mold, outdated wiring, or rotted subfloor aren&apos;t visible until demo. These must be addressed before proceeding.</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Permit/Inspection Scheduling</h4>
                  <p className="text-gray-700">Municipal inspectors have their own schedules. A 1-2 day wait for inspection is normal; longer delays happen during busy periods.</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Change Orders</h4>
                  <p className="text-gray-700">Changing your mind mid-project (different tile, moving a fixture) requires rescheduling trades and possibly reordering materials.</p>
                </div>
              </div>
            </section>

            {/* Mid-content CTA 2 */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Planning a bathroom renovation?</p>
              <p className="text-red-100 text-sm mb-4">Expert plumbing for bathroom remodels.</p>
              <div className="flex flex-wrap gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">
                  Call Niti: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">
                  Call Danny: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Service Card */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Related Service: Bathroom Remodeling</p>
                <p className="text-sm text-gray-600 mb-2">Complete bathroom plumbing for remodels - rough-in, fixture installation, and more. Serving all of Middlesex County.</p>
                <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            <section id="tips" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Tips for Faster Completion</h2>

              <div className="space-y-3 mb-6">
                {[
                  "Finalize all design decisions before work begins",
                  "Order all materials and verify delivery before demo",
                  "Keep fixtures in existing locations when possible",
                  "Use stock/readily available materials vs. custom",
                  "Have a backup bathroom available for the duration",
                  "Be available for quick decisions during construction",
                  "Hire experienced contractors with good references",
                  "Get necessary permits before starting",
                ].map((tip, index) => (
                  <div key={index} className="flex items-center gap-3 bg-green-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Middlesex County Considerations</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Permit timelines:</strong> East Brunswick, Edison, and other Middlesex County municipalities have varying permit processing times. Apply early -some take 1-2 weeks for approval.</li>
                  <li><strong>Inspection scheduling:</strong> Local inspectors are busy. Build inspection wait times (1-3 days typically) into your project timeline.</li>
                  <li><strong>Older homes:</strong> Many area homes have galvanized or older copper plumbing. Budget extra time for addressing outdated plumbing discovered during demo.</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How long does a full bathroom remodel take?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">A full bathroom remodel typically takes 3-6 weeks of active construction for a standard bathroom. Master bathrooms or those with layout changes can take 6-8 weeks. Add 2-6 weeks for pre-construction planning, permits, and material orders.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Can a bathroom be remodeled in one week?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">A minor refresh (new fixtures in same locations, paint, stock vanity) might be completed in 5-7 days. However, any tile work requires multiple days for setting and curing. Plumbing relocation or significant changes need at least 2-3 weeks minimum.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What takes the longest in a bathroom remodel?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Tile work typically takes the longest -3-7 days for installation plus curing time. Custom orders (vanities, countertops, specialty tile) can also cause delays if not ordered weeks in advance.</p></div>
                </details>
              </div>
            </section>

            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Planning a Bathroom Remodel?</h2>
              <p className="text-red-100 mb-6">We handle all the plumbing for bathroom renovations -from rough-in to fixture installation. Coordinate with your contractor or let us recommend trusted partners for a complete remodel.</p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                <Link href="/services/bathroom-remodeling" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Bathroom Plumbing Services</Link>
              </div>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/whole-house-water-filter-worth-it" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Whole House Water Filtration</h3>
                    <p className="text-sm text-gray-600">Consider during your remodel for clean water everywhere.</p>
                  </div>
                </Link>
                <Link href="/services/toilet-and-faucet-installation" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Fixture Installation</h3>
                    <p className="text-sm text-gray-600">Professional installation for your new bathroom fixtures.</p>
                  </div>
                </Link>
              </div>
            </section>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                {/* Call Now */}
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need a Plumber?</p>
                  <p className="text-gray-600 text-sm mb-4">Expert plumbing for bathroom remodels.</p>
                  <a
                    href={BUSINESS_INFO.phoneLink}
                    className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2"
                  >
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a
                    href={BUSINESS_INFO.phone2Link}
                    className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full"
                  >
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>

                {/* Service Areas */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Service Areas</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>East Brunswick</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Edison</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Sayreville</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Old Bridge</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Monroe Township</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>South Brunswick</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>North Brunswick</li>
                  </ul>
                </div>

                {/* Services */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our Services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/tankless-water-heater-installation" className="text-gray-700 hover:text-red-700 transition">Tankless Water Heater Installation</Link></li>
                    <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                    <li><Link href="/services/boiler-repair-service" className="text-gray-700 hover:text-red-700 transition">Boiler Repair</Link></li>
                    <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Services</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>

                {/* Related Blogs */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/blog/whole-house-water-filter-worth-it" className="text-gray-700 hover:text-red-700 transition leading-snug block">Is a Whole House Water Filter Worth It?</Link>
                    </li>
                    <li>
                      <Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition leading-snug block">Why Is My Water Pressure Low?</Link>
                    </li>
                    <li>
                      <Link href="/blog/signs-of-slab-leak-sewer-line" className="text-gray-700 hover:text-red-700 transition leading-snug block">Signs of a Slab Leak or Sewer Line Problem</Link>
                    </li>
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
