import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Plumbing checklist for downsizing to a 55+ community",
  description: "A room-by-room plumbing checklist for downsizing to a 55+ community: curbless showers, comfort-height toilets, grab bar blocking, and water heater placement.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/plumbing-for-55-plus-community-downsizing" },
  keywords: [
    "plumbing for 55 plus community",
    "aging in place plumbing checklist",
    "curbless shower conversion",
    "comfort height toilet",
    "grab bar installation",
    "walk-in shower conversion",
    "accessible bathroom plumbing",
    "downsizing plumbing checklist",
    "active adult community plumbing",
  ],
  openGraph: {
    title: "Plumbing checklist for downsizing to a 55+ community",
    description: "Room-by-room plumbing checklist for downsizing to a 55+ community, from licensed NJ master plumbers.",
    type: "article",
    publishedTime: "2026-07-27T08:00:00.000Z",
    modifiedTime: "2026-07-27T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function FiftyFivePlusDownsizingPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Plumbing checklist for downsizing to a 55+ community",
    description: "A room-by-room plumbing checklist for downsizing to a 55+ community: curbless showers, comfort-height toilets, grab bar blocking, and water heater placement.",
    image: "https://www.illyrianplumber.com/images/shower-pan-waterproofing-install.jpg",
    author: {
      "@type": "Person",
      name: "Illyrian Plumber Team",
      worksFor: { "@id": "https://www.illyrianplumber.com/#organization" },
    },
    publisher: { "@id": "https://www.illyrianplumber.com/#organization" },
    datePublished: "2026-07-27T08:00:00.000Z",
    dateModified: "2026-07-27T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/plumbing-for-55-plus-community-downsizing" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.illyrianplumber.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.illyrianplumber.com/blog" },
      { "@type": "ListItem", position: 3, name: "Plumbing checklist for downsizing to a 55+ community", item: "https://www.illyrianplumber.com/blog/plumbing-for-55-plus-community-downsizing" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What plumbing changes should I make when downsizing to a 55 plus community?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The highest priority plumbing changes are a curbless or low-threshold shower, a comfort-height toilet, lever-style faucet handles, and grab bar blocking installed before drywall goes up. These changes prevent falls and reduce strain on hands and knees. Water heater placement and easy shutoff valve access matter too, especially in single-story homes built for aging in place.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a curbless shower conversion cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A curbless or walk-in shower conversion in Middlesex County typically falls in the same range as a standard tub-to-shower conversion, $1,500 to $3,500, depending on waterproofing, drain relocation, and tile work. The plumbing portion covers drain repositioning and a linear or center drain upgrade. We provide a free in-home estimate once we see the existing tub and subfloor.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a permit to install grab bars or a comfort-height toilet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A comfort-height toilet swap is a fixture replacement and does not require a permit in most Middlesex County towns. Grab bars anchored into wall blocking are typically a cosmetic install, but if blocking requires opening a finished wall, we coordinate any required inspection. We pull permits automatically whenever a job requires one so you do not have to track it yourself.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best time to make these plumbing changes, before or after moving in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Before moving in is almost always better. Shower conversions, grab bar blocking, and comfort-height toilet swaps are far easier and less expensive in a vacant unit than around your daily routine and furniture. If you are buying in Rossmoor, Concordia, or another Monroe Township community, we can often complete plumbing upgrades during the closing window before you move your belongings in.",
        },
      },
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
            <Image src="/images/shower-pan-waterproofing-install.jpg" alt="Curbless shower conversion for an accessible bathroom" fill className="object-cover opacity-40" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Home services</span>
                <time dateTime="2026-07-27">Published July 27, 2026</time>
                <span>9 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Plumbing checklist for downsizing to a 55+ community</h1>
              <p className="text-xl text-gray-300">A room-by-room plumbing checklist for downsizing to a 55+ community, from the plumbers who fit these homes every week.</p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-07-27" updateDate="2026-07-27" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-5 mb-8">
                <p className="font-bold text-gray-900 mb-2">Quick answer</p>
                <p className="text-gray-800 leading-relaxed">
                  The plumbing changes that matter most when downsizing to a 55 plus community are a curbless or low-threshold shower, a comfort-height toilet, lever-style faucet handles, grab bar blocking installed before walls close, and a water heater placed for easy access. Most of these are best done before you move your belongings in, while the unit is still empty.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Downsizing to a 55 plus community means trading a yard and stairs for a simpler floor plan, but bathroom and kitchen fixtures built for a 40 year old buyer rarely fit a homeowner in their 60s or 70s without changes. Moving into Rossmoor, Concordia, or another Monroe Township community? Our <Link href="/service-areas/monroe-township" className="text-red-700 hover:text-red-800 underline">Monroe Township plumbing team</Link> has fitted enough of these homes to know which upgrades matter most before move-in day, and which ones can safely wait.
                </p>
                <p>
                  Most of what follows applies whether you are buying resale in an established active-adult section or moving into new construction. The list is ordered by how much daily strain and fall risk each change actually removes, not by price, so you can prioritize if your budget or timeline is tight.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in accessible bathroom plumbing and fixture upgrades in Middlesex County, NJ. We offer <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">bathroom remodeling</Link>, <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">toilet and faucet installation</Link>, <Link href="/services/water-heater-installation" className="text-red-700 hover:text-red-800">water heater installation</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
                </p>
              </div>

              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">In this checklist</h2>
                <ul className="space-y-2">
                  <li><a href="#bathroom" className="text-red-700 hover:text-red-800">Bathroom changes that matter most</a></li>
                  <li><a href="#kitchen" className="text-red-700 hover:text-red-800">Kitchen plumbing for easier daily use</a></li>
                  <li><a href="#water-heater-laundry" className="text-red-700 hover:text-red-800">Water heater and laundry placement</a></li>
                  <li><a href="#safety" className="text-red-700 hover:text-red-800">Safety and future-proofing</a></li>
                  <li><a href="#monroe-township" className="text-red-700 hover:text-red-800">Why this matters in Monroe Township</a></li>
                  <li><a href="#when-to-call" className="text-red-700 hover:text-red-800">When to call a plumber before you move in</a></li>
                </ul>
              </nav>

              <section id="bathroom" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Bathroom changes that matter most</h2>
                <p className="text-gray-700 mb-6">The bathroom is where most of the plumbing budget for a downsizing move should go, because it is also where most falls happen. Three changes carry the most weight.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Curbless or low-threshold showers</h3>
                <p className="text-gray-700 mb-6">
                  A standard tub or a shower with a 4 to 6 inch curb is the single biggest fall risk in an older adult&apos;s bathroom. Converting to a curbless shower means moving the drain to a linear trench drain or repositioning a center drain, sloping the subfloor toward it, and waterproofing the whole pan before tile goes down. This is plumbing and waterproofing work together, which is why it is usually scoped through a full <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800 underline">bathroom remodeling</Link> project rather than a same-day fixture swap.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Comfort-height toilets</h3>
                <p className="text-gray-700 mb-6">
                  Standard toilets sit about 15 inches from floor to seat. Comfort-height (also called right-height or ADA) toilets sit closer to 17 to 19 inches, which is roughly chair height and noticeably easier on the knees and hips when sitting or standing. This is a straightforward <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 underline">toilet installation</Link> swap and does not require touching the rough plumbing in most cases.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Lever handles and touchless faucets</h3>
                <p className="text-gray-700">
                  Round twist knobs are hard to operate for anyone with arthritis or reduced grip strength. Single-lever faucet handles, or touchless models, solve this without any change to the supply lines behind the wall, making them one of the cheapest, highest-impact swaps on this list.
                </p>
              </section>

              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Planning bathroom changes before you move in?</p>
                  <p className="text-gray-300 text-sm">We scope accessible bathroom plumbing across Middlesex County.</p>
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

              <section id="kitchen" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Kitchen plumbing for easier daily use</h2>
                <p className="text-gray-700 mb-4">
                  Kitchens get less attention than bathrooms in a downsizing move, but a few plumbing changes reduce daily strain without a full renovation:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Single-lever kitchen faucet:</strong> Easier to turn on with a forearm or the back of a hand when carrying dishes, and pairs well with a pull-down sprayer mounted at a comfortable reach.</li>
                  <li><strong>Garbage disposal switch placement:</strong> Wall switches mounted at counter height are easier to reach than under-sink toggle switches, which require bending.</li>
                  <li><strong>Anti-scald valves:</strong> Thermostatic mixing valves prevent sudden temperature spikes at the tap, which matter more as skin becomes more sensitive to hot water with age.</li>
                </ul>
              </section>

              <section id="water-heater-laundry" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Water heater and laundry placement</h2>
                <p className="text-gray-700 mb-4">
                  Many Monroe Township active-adult units still run the original tank <Link href="/services/water-heater-installation" className="text-red-700 hover:text-red-800 underline">water heater</Link> from when the home was built, often tucked in a low utility closet or garage corner that requires bending or reaching to service. Two things are worth checking before you move belongings in:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Shutoff valve access:</strong> Confirm the main water shutoff and the water heater&apos;s own shutoff are both reachable without kneeling on a hard garage floor.</li>
                  <li><strong>Laundry pedestal height:</strong> Front-load washers on a low pedestal or no pedestal at all mean bending to load and unload every wash. A raised pedestal is a simple fix that does not touch the plumbing itself, but it is worth planning before the unit is furnished.</li>
                </ul>
              </section>

              <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
                <p className="font-bold text-lg mb-1">Ready to fit out your new Monroe Township home?</p>
                <p className="text-red-100 text-sm mb-4">Free estimates on accessible bathroom and kitchen plumbing.</p>
                <div className="flex flex-wrap gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              <section id="safety" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Safety and future-proofing</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Do before walls close</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>Grab bar wall blocking near the shower and toilet</li>
                      <li>Shower valve rough-in for a hand-held plus fixed head</li>
                      <li>Drain relocation for a curbless pan</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Can be added later</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>Grab bars themselves (once blocking exists)</li>
                      <li>Faucet and shower head swaps</li>
                      <li>Toilet seat risers or bidet attachments</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700">
                  The <a href="https://en.wikipedia.org/wiki/Universal_design" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800 underline">universal design</a> principle behind most of this checklist is simple: install the structural elements (blocking, drain location, valve rough-in) once, while the wall is open, even if the visible fixture goes in later. Retrofitting blocking into a finished wall costs far more than adding it during the initial plumbing pass.
                </p>
              </section>

              <section id="monroe-township" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why this matters in Monroe Township</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 mb-3">
                    Monroe Township has some of the highest concentrations of active-adult housing in Middlesex County, including Rossmoor, Concordia, Clearbrook, and Greenbriar at Whittingham. Many of these units were built between the 1970s and 1990s, and the original bathroom and kitchen fixtures are now well past the point where a straight swap makes sense.
                  </p>
                  <p className="text-gray-700">
                    Our <Link href="/service-areas/monroe-township" className="text-red-700 hover:text-red-800 underline">Monroe Township plumbing team</Link> routinely coordinates with HOA management offices for access and observes each community&apos;s quiet hours when scheduling work, which matters more here than in a typical single-family neighborhood. We also see a lot of these units still running original tank water heaters, so a fixture-upgrade visit is a good time to have the water heater&apos;s remaining service life checked at the same time.
                  </p>
                </div>
              </section>

              <section id="when-to-call" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to call a plumber before you move in</h2>
                <p className="text-gray-700 mb-6">Call before closing, not after you have furniture in the unit, if any of these apply:</p>
                <div className="space-y-3 mb-6">
                  {[
                    "You want a curbless or low-threshold shower conversion",
                    "The unit still has the original tub with a high curb",
                    "You plan to add grab bars and want blocking installed first",
                    "The water heater is original to the unit and its age is unknown",
                    "You want a comfort-height toilet in place before move-in day",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-amber-50 rounded-lg p-3">
                      <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700">
                  We provide a free in-home assessment and written estimate for any combination of these changes, so you can decide what fits your budget and timeline before your moving truck is booked.
                </p>
              </section>

              <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
                <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                  <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">Related service: Toilet and faucet installation</p>
                  <p className="text-sm text-gray-600 mb-2">Comfort-height toilets, lever faucets, and touchless fixtures installed across Middlesex County.</p>
                  <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn more</Link>
                </div>
              </div>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
                <div className="space-y-4">
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">What plumbing changes should I make when downsizing to a 55 plus community?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5"><p className="text-gray-700">The highest priority plumbing changes are a curbless or low-threshold shower, a comfort-height toilet, lever-style faucet handles, and grab bar blocking installed before drywall goes up. These changes prevent falls and reduce strain on hands and knees. Water heater placement and easy shutoff valve access matter too, especially in single-story homes built for aging in place.</p></div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">How much does a curbless shower conversion cost?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5"><p className="text-gray-700">A curbless or walk-in shower conversion in Middlesex County typically falls in the same range as a standard tub-to-shower conversion, $1,500 to $3,500, depending on waterproofing, drain relocation, and tile work. The plumbing portion covers drain repositioning and a linear or center drain upgrade. We provide a free in-home estimate once we see the existing tub and subfloor.</p></div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Do I need a permit to install grab bars or a comfort-height toilet?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5"><p className="text-gray-700">A comfort-height toilet swap is a fixture replacement and does not require a permit in most Middlesex County towns. Grab bars anchored into wall blocking are typically a cosmetic install, but if blocking requires opening a finished wall, we coordinate any required inspection. We pull permits automatically whenever a job requires one so you do not have to track it yourself.</p></div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">What is the best time to make these plumbing changes, before or after moving in?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5"><p className="text-gray-700">Before moving in is almost always better. Shower conversions, grab bar blocking, and comfort-height toilet swaps are far easier and less expensive in a vacant unit than around your daily routine and furniture. If you are buying in Rossmoor, Concordia, or another Monroe Township community, we can often complete plumbing upgrades during the closing window before you move your belongings in.</p></div>
                  </details>
                </div>
              </section>

              <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Moving into a Monroe Township active-adult community?</h2>
                <p className="text-red-100 mb-6">We scope accessible bathroom and kitchen plumbing before your moving truck arrives, with a free written estimate and full coordination with your HOA management office.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                  <Link href="/service-areas/monroe-township" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Monroe Township plumbing services</Link>
                </div>
              </section>

              <section className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/how-long-bathroom-remodel-take" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How long does a bathroom remodel take?</h3>
                      <p className="text-sm text-gray-600">Realistic phase-by-phase timeline for a full renovation.</p>
                    </div>
                  </Link>
                  <Link href="/blog/signs-water-heater-dying" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs your water heater is dying</h3>
                      <p className="text-sm text-gray-600">Worth checking before you move belongings in.</p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need a plumber?</p>
                  <p className="text-gray-600 text-sm mb-4">Accessible bathroom and kitchen plumbing for active-adult communities.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Service areas</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li><Link href="/service-areas/east-brunswick" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>East Brunswick</Link></li>
                    <li><Link href="/service-areas/edison" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Edison</Link></li>
                    <li><Link href="/service-areas/sayreville" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Sayreville</Link></li>
                    <li><Link href="/service-areas/old-bridge" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Old Bridge</Link></li>
                    <li><Link href="/service-areas/monroe-township" className="flex items-center gap-2 hover:text-red-700 transition font-semibold"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Monroe Township</Link></li>
                    <li><Link href="/service-areas/south-brunswick" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>South Brunswick</Link></li>
                    <li><Link href="/service-areas/north-brunswick" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>North Brunswick</Link></li>
                  </ul>
                  <Link href="/service-areas" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All service areas</Link>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/bathroom-remodeling" className="text-gray-700 hover:text-red-700 transition">Bathroom remodeling</Link></li>
                    <li><Link href="/services/toilet-and-faucet-installation" className="text-gray-700 hover:text-red-700 transition">Toilet &amp; faucet installation</Link></li>
                    <li><Link href="/services/water-heater-installation" className="text-gray-700 hover:text-red-700 transition">Water heater installation</Link></li>
                    <li><Link href="/services/water-filtration-system" className="text-gray-700 hover:text-red-700 transition">Water filtration</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All services</Link>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You might also like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/how-long-bathroom-remodel-take" className="text-gray-700 hover:text-red-700 transition leading-snug block">How long does a bathroom remodel take?</Link></li>
                    <li><Link href="/blog/signs-water-heater-dying" className="text-gray-700 hover:text-red-700 transition leading-snug block">Signs your water heater is dying</Link></li>
                    <li><Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition leading-snug block">Why is my water pressure low?</Link></li>
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
