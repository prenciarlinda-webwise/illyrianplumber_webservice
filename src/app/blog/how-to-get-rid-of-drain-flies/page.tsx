import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How to Get Rid of Drain Flies (2026 Step-by-Step)",
  description: "How to get rid of drain flies and sewer gnats for good. Find the breeding drain, clean out the biofilm, and stop them coming back. Plus when buildup signals a bigger problem.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/how-to-get-rid-of-drain-flies" },
  keywords: [
    "how to get rid of drain flies",
    "how to kill drain flies",
    "how to get rid of sewer flies",
    "how to get rid of drain gnats in house",
    "what causes drain flies",
    "drain flies in bathroom",
    "moth flies",
    "small flies near drain",
  ],
  openGraph: {
    title: "How to Get Rid of Drain Flies (2026 Step-by-Step)",
    description: "Find the breeding drain, clean out the biofilm, and keep drain flies and sewer gnats from coming back.",
    type: "article",
    publishedTime: "2026-06-02T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

const faqs = [
  {
    question: "What causes drain flies in the house?",
    answer:
      "Drain flies, also called moth flies or sewer gnats, breed in the slimy organic film that coats the inside of slow or rarely used drains. They lay eggs in the gel-like buildup of hair, soap, grease, and food, and the larvae feed on it. Any drain that stays moist with that film can host them, which is why they cluster around sinks, showers, floor drains, and basements.",
  },
  {
    question: "How do I find which drain the flies are coming from?",
    answer:
      "Tape a clear plastic cup or a piece of tape sticky-side down loosely over each suspect drain overnight without sealing it. In the morning, the drain with flies stuck to the tape or trapped in the cup is the breeding source. Check every drain in the room, including floor drains and overflow holes, because more than one can be active at once.",
  },
  {
    question: "Will bleach kill drain flies?",
    answer:
      "Bleach is not the best choice. It flushes through too fast to kill larvae embedded in the film and can splash dangerously. A boiling water flush followed by mechanical scrubbing with a drain brush removes the biofilm the larvae live in, and an enzyme drain cleaner digests what is left. Removing the breeding film is what actually ends the cycle, not a quick chemical pour.",
  },
  {
    question: "How long does it take to get rid of drain flies?",
    answer:
      "Adult drain flies live about two weeks, so once you remove the breeding film and stop new eggs from hatching, the population dies off within one to three weeks. Clean the affected drain daily for the first week, then weekly to keep film from rebuilding. If flies keep returning after thorough cleaning, the moisture source is likely hidden and needs a plumber to find.",
  },
];

export default function HowToGetRidOfDrainFlies() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Get Rid of Drain Flies (2026 Step-by-Step)",
    description:
      "Step-by-step guide to finding the breeding drain, removing the biofilm, and getting rid of drain flies and sewer gnats for good, plus when buildup signals a hidden plumbing problem.",
    image: "https://www.illyrianplumber.com/images/drain-vent-pipe-installation.jpg",
    author: { "@type": "Organization", name: BUSINESS_INFO.name, url: "https://www.illyrianplumber.com" },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      logo: { "@type": "ImageObject", url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png" },
    },
    datePublished: "2026-06-02T08:00:00.000Z",
    dateModified: "2026-06-02T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/how-to-get-rid-of-drain-flies" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.illyrianplumber.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.illyrianplumber.com/blog" },
      { "@type": "ListItem", position: 3, name: "How to Get Rid of Drain Flies", item: "https://www.illyrianplumber.com/blog/how-to-get-rid-of-drain-flies" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-white">
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Troubleshooting</span>
                <time dateTime="2026-06-02">June 2, 2026</time>
                <span>11 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How to get rid of drain flies
              </h1>
              <p className="text-xl text-gray-300">
                Those tiny fuzzy flies near your sink are breeding inside the drain. Find the source, clear the film they live in, and they disappear for good.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-06-02" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Drain flies, also called moth flies or sewer gnats, are the small fuzzy insects that hover around a sink or shower and seem to appear from nowhere. They breed in the organic film inside a drain, so killing the adults does nothing until you remove what they are laying eggs in. The good news is this is a do-it-yourself fix, and the rare case where flies keep coming back can point to a hidden moisture problem that our <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-semibold">water leak detection</Link> team can track down. This guide shows how to find the breeding drain, clean it out, and keep the flies gone.
                </p>
                <p className="text-gray-700">
                  Note up front: Illyrian Plumber does not offer drain cleaning or sewer cleaning, so the steps here are written so you can solve a drain-fly problem yourself with common household tools.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers serving Middlesex County, NJ since 2010. We offer <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800">plumbing safety inspections</Link>, <Link href="/services/kitchen-plumbing" className="text-red-700 hover:text-red-800">kitchen plumbing</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
                </p>
              </div>

              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">In this guide</h2>
                <ul className="space-y-2">
                  <li><a href="#find" className="text-red-700 hover:text-red-800">Find the breeding drain</a></li>
                  <li><a href="#kill" className="text-red-700 hover:text-red-800">Clean the drain and kill the larvae</a></li>
                  <li><a href="#prevent" className="text-red-700 hover:text-red-800">Keep drain flies from coming back</a></li>
                  <li><a href="#hidden" className="text-red-700 hover:text-red-800">When flies signal a bigger problem</a></li>
                  <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently asked questions</a></li>
                </ul>
              </nav>

              <section id="find" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Step 1: Find the breeding drain</h2>
                <p className="text-gray-700 mb-4">
                  Drain flies are weak fliers and stay close to where they hatch, so the source is almost always a drain in the same room. Test each one overnight.
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
                  <li>Place a clear cup upside down over a drain, or lay a strip of clear tape sticky-side down loosely across the opening. Do not seal it completely, since you want to trap flies as they emerge.</li>
                  <li>Leave it overnight. The next morning, the drain with flies stuck to the tape or caught under the cup is your breeding site.</li>
                  <li>Check every drain in the room, including shower drains, floor drains, and sink overflow holes, because more than one can be active.</li>
                </ol>
                <p className="text-gray-700">
                  Common culprits are guest bathrooms, basement floor drains, and utility sinks that rarely run, because the standing film never gets flushed away.
                </p>
              </section>

              <section id="kill" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Step 2: Clean the drain and kill the larvae</h2>
                <p className="text-gray-700 mb-4">
                  The larvae live in the gel-like biofilm coating the pipe walls. Removing that film is the whole game.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Flush with boiling water</h3>
                    <p className="text-gray-700">Pour a kettle of boiling water down the drain two or three times a day for several days to soften and wash away film. Skip this on older, fragile drain lines if you are unsure, and use very hot tap water instead.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Scrub the pipe walls</h3>
                    <p className="text-gray-700">Run a long, stiff drain brush or a straightened wire brush down the drain and scrub the walls just below the opening, where most film collects. Mechanical scrubbing removes what hot water alone leaves behind.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Use an enzyme drain cleaner</h3>
                    <p className="text-gray-700">Pour a bacterial or enzyme drain cleaner in at night, when water use is lowest, so it sits and digests the organic film. Enzyme products are safe for pipes and septic systems, unlike caustic chemical cleaners. Repeat per the label for a week.</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  To knock down the adults flying around, a simple trap of apple cider vinegar with a drop of dish soap in a covered cup with small holes works well while the drain treatment takes effect.
                </p>
              </section>

              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Flies that will not quit?</p>
                  <p className="text-gray-300 text-sm">A hidden leak or cracked line keeps the moisture coming. We can find it.</p>
                </div>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
                </div>
              </div>

              <section id="prevent" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Step 3: Keep drain flies from coming back</h2>
                <p className="text-gray-700 mb-4">
                  Drain flies return wherever film rebuilds, so a little routine maintenance keeps them away.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Run water through rarely used drains, like guest baths and floor drains, at least weekly to flush film and keep the trap full.</li>
                  <li>Wipe sink and shower drains and clean pop-up stoppers, where hair and soap collect, every week or two.</li>
                  <li>Pour a little water into floor drains monthly so the trap does not dry out and let sewer gas and flies up.</li>
                  <li>Treat drains with an enzyme cleaner monthly as preventive maintenance.</li>
                </ul>
                <p className="text-gray-700">
                  Kitchen drains build film fastest from grease and food. Our <Link href="/blog/how-to-unclog-kitchen-sink" className="text-red-700 hover:text-red-800">guide to unclogging a kitchen sink</Link> covers habits that keep that line clean.
                </p>
              </section>

              <section id="hidden" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When drain flies signal a bigger problem</h2>
                <p className="text-gray-700 mb-4">
                  If flies keep returning after you have thoroughly cleaned every drain, the breeding moisture may be somewhere you cannot reach. A cracked drain line under a slab, a leaking pipe inside a wall, or a broken sewer connection can create a constant damp, organic pocket that flies breed in. A persistent sewer-gas smell alongside the flies is another red flag.
                </p>
                <p className="text-gray-700">
                  This is where a professional helps. Our <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link> service locates hidden leaks without tearing out walls, and a <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800">plumbing safety inspection</Link> can identify a damaged line or dry trap feeding the problem. The <a href="https://www.epa.gov/mold/mold-cleanup-your-home" target="_blank" rel="noopener" className="text-red-700 hover:text-red-800">US EPA</a> also notes that ongoing indoor moisture should be found and fixed to prevent mold, which is one more reason not to ignore a recurring damp source.
                </p>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <details key={i} className="group bg-gray-50 rounded-lg">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                        <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                      </summary>
                      <div className="px-5 pb-5"><p className="text-gray-700">{faq.answer}</p></div>
                    </details>
                  ))}
                </div>
              </section>

              <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Recurring moisture or odor problem?</h2>
                <p className="text-red-100 mb-6">
                  If drain flies or sewer smells keep coming back, our licensed plumbers can find the hidden source. Serving East Brunswick, Edison, and all of Middlesex County, NJ.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                  <Link href="/services/water-leak-detection" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Leak Detection</Link>
                </div>
              </section>

              <section className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/how-to-unclog-kitchen-sink" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Unclog a Kitchen Sink (7 Methods)</h3>
                      <p className="text-sm text-gray-600">Keep the kitchen drain clean and clog-free.</p>
                    </div>
                  </Link>
                  <Link href="/blog/kitchen-sink-plumbing-diagram" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Kitchen Sink Plumbing Diagram</h3>
                      <p className="text-sm text-gray-600">How traps and drain lines actually work.</p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need a plumber?</p>
                  <p className="text-gray-600 text-sm mb-4">Leak detection and plumbing inspections across Middlesex County.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                    <li><Link href="/services/plumbing-safety-inspections" className="text-gray-700 hover:text-red-700 transition">Plumbing Inspections</Link></li>
                    <li><Link href="/services/kitchen-plumbing" className="text-gray-700 hover:text-red-700 transition">Kitchen Plumbing</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
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
                  <p className="font-bold text-gray-900 mb-3">You might also like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/how-to-unclog-kitchen-sink" className="text-gray-700 hover:text-red-700 transition">How to Unclog a Kitchen Sink</Link></li>
                    <li><Link href="/blog/kitchen-sink-plumbing-diagram" className="text-gray-700 hover:text-red-700 transition">Kitchen Sink Plumbing Diagram</Link></li>
                    <li><Link href="/blog/dishwasher-not-draining-causes-fixes" className="text-gray-700 hover:text-red-700 transition">Dishwasher Not Draining? Causes and Fixes</Link></li>
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
