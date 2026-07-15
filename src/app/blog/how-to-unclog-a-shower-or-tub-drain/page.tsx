import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How to Unclog a Shower or Tub Drain (7 DIY Methods)",
  description: "How to unclog a shower or tub drain yourself: remove the hair clog, use a drain snake, boiling water, and a plunger. Clear standing water and know when to call a plumber.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/how-to-unclog-a-shower-or-tub-drain" },
  keywords: [
    "how to unclog a shower drain",
    "clogged shower drain",
    "how to unclog shower drain",
    "how to unclog a bathtub drain",
    "how to unclog a bathtub",
    "how to clean tub drain",
    "shower drain clogged standing water",
    "clogged shower drain standing water",
    "how to clear shower drain",
  ],
  openGraph: {
    title: "How to Unclog a Shower or Tub Drain (7 DIY Methods)",
    description: "Clear a clogged shower or tub drain yourself with seven proven methods, from pulling the hair clog to snaking the line.",
    type: "article",
    publishedTime: "2026-06-02T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

const faqs = [
  {
    question: "What causes a shower or tub drain to clog?",
    answer:
      "The number one cause is hair binding with soap scum and body oils into a dense mat just below the drain opening. In hard-water homes, mineral scale narrows the pipe and gives the clog something to cling to. Most shower and tub clogs sit within the first foot or two of the drain, which is why pulling the hair out by hand or with a drain tool clears them.",
  },
  {
    question: "How do I unclog a shower drain with standing water?",
    answer:
      "Start by bailing or sponging out as much standing water as you can so you can work. Remove the drain cover, then use a hair-removal tool or a bent wire to pull the clog up and out. A plunger can also work once enough water is removed to create suction over the drain. Standing water means the blockage is solid, so mechanical removal works better than pouring anything in.",
  },
  {
    question: "Should I use chemical drain cleaner in a shower drain?",
    answer:
      "Avoid liquid chemical drain cleaners. They often fail on a packed hair clog, sit in the pipe, and can damage older drain lines and finishes, and they create a hazard if you later need to open the drain. Mechanical methods like a hair tool, a hand snake, or a plunger clear shower and tub clogs more reliably and without the risks.",
  },
  {
    question: "Why do multiple drains back up at the same time?",
    answer:
      "If your shower, tub, and a nearby toilet or sink all drain slowly or back up together, the blockage is not in one fixture but deeper in the shared drain line. Gurgling sounds and sewage odors are warning signs. This is beyond a DIY fix and points to a main line problem that needs a licensed plumber to diagnose, since a single fixture clog will not affect the others.",
  },
];

export default function HowToUnclogAShowerOrTubDrain() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Unclog a Shower or Tub Drain (7 DIY Methods)",
    description:
      "Step-by-step guide to unclogging a shower or tub drain yourself with seven proven methods, clearing standing water, and recognizing when a clog signals a deeper line problem.",
    image: "https://www.illyrianplumber.com/images/walk-in-shower-glass-door-install.jpg",
    author: { "@type": "Organization", name: BUSINESS_INFO.name, url: "https://www.illyrianplumber.com" },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      logo: { "@type": "ImageObject", url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png" },
    },
    datePublished: "2026-06-02T08:00:00.000Z",
    dateModified: "2026-06-02T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/how-to-unclog-a-shower-or-tub-drain" },
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
      { "@type": "ListItem", position: 3, name: "How to Unclog a Shower or Tub Drain", item: "https://www.illyrianplumber.com/blog/how-to-unclog-a-shower-or-tub-drain" },
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
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Bathroom Plumbing</span>
                <time dateTime="2026-06-02">June 2, 2026</time>
                <span>13 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How to unclog a shower or tub drain
              </h1>
              <p className="text-xl text-gray-300">
                Most shower and tub clogs are a hair mat sitting just below the drain. Here are seven DIY methods to clear it, including when there is standing water.
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
                  A shower or tub that drains slowly or holds standing water is almost always blocked by a hair-and-soap clog within the first foot of the drain, and you can usually clear it yourself in 15 to 30 minutes. The methods below go from easiest to most thorough. If the water is rising into a true overflow or several fixtures back up at once, that is the time to reach our <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-semibold">24/7 emergency plumbers</Link> in Middlesex County. This guide shows how to unclog a shower or tub drain safely without harsh chemicals.
                </p>
                <p className="text-gray-700">
                  One note on scope: Illyrian Plumber does not offer drain cleaning or sewer cleaning services, so this guide is written so you can clear a routine shower or tub clog yourself. The final section explains the warning signs that mean the problem is deeper than a single fixture.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers serving Middlesex County, NJ since 2010. We offer <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link>, <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">bathroom remodeling</Link>, and <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">faucet and fixture installation</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
                </p>
              </div>

              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">In this guide</h2>
                <ul className="space-y-2">
                  <li><a href="#standing" className="text-red-700 hover:text-red-800">First, deal with standing water</a></li>
                  <li><a href="#methods" className="text-red-700 hover:text-red-800">7 ways to unclog the drain</a></li>
                  <li><a href="#prevent" className="text-red-700 hover:text-red-800">Keep the drain clear</a></li>
                  <li><a href="#pro" className="text-red-700 hover:text-red-800">When the clog is deeper than one fixture</a></li>
                  <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently asked questions</a></li>
                </ul>
              </nav>

              <section id="standing" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">First, deal with standing water</h2>
                <p className="text-gray-700 mb-4">
                  Standing water means the blockage is solid enough to stop flow entirely, so you want it out of the way before you work. Bail or sponge most of the water into a bucket. You do not need the drain bone dry, but clearing it lets you see the opening and gives a plunger room to build suction.
                </p>
                <p className="text-gray-700">
                  Leave an inch or two of water if you plan to plunge, since a plunger needs water over the cup to work. Remove the drain cover or stopper next, which on most tubs unscrews or pops up, and on showers lifts out after a screw or two.
                </p>
              </section>

              <section id="methods" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">7 ways to unclog a shower or tub drain</h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">1. Pull the hair clog by hand</h3>
                    <p className="text-gray-700">With gloves on, reach just inside the drain and pull out the visible hair mat. This alone clears a large share of shower and tub clogs because the blockage sits so close to the opening.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">2. Use a plastic hair tool</h3>
                    <p className="text-gray-700">A cheap barbed plastic drain stick, like a Zip-It, slides into the drain and snags hair on the way out. Insert it, twist, and pull. Repeat until it comes out clean. This is the single most effective tool for hair clogs.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">3. Flush with boiling water</h3>
                    <p className="text-gray-700">For a partial clog of soap and grease, pour a kettle of boiling water down in stages. Skip this on fragile older pipes and use hot tap water instead. Boiling water melts soap scum that hair clings to.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">4. Plunge it</h3>
                    <p className="text-gray-700">Cover the overflow opening with a wet rag, leave a little water in the basin, and plunge firmly over the drain for 15 to 20 strokes. The pressure can break loose a clog that a tool cannot grab.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">5. Try baking soda and vinegar</h3>
                    <p className="text-gray-700">Pour one cup of baking soda, then one cup of vinegar, let it fizz for 15 minutes, and flush with hot water. It is gentle on pipes and helps with light soap buildup, though it will not move a packed hair clog on its own.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">6. Use a hand drain snake</h3>
                    <p className="text-gray-700">Feed a manual hand snake or drain auger into the drain, turning it as you go, until you reach the clog. Crank to hook the debris, then pull it out. A snake reaches clogs a few feet down that tools and plungers miss.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">7. Clean the tub trip-lever assembly</h3>
                    <p className="text-gray-700">On many tubs, hair wraps around the linkage under the overflow plate. Unscrew the overflow cover, lift out the trip-lever and stopper assembly, clean off the buildup, and reinstall. This clears a clog that is hidden inside the overflow.</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Work through these in order. Once water drains freely, run hot water for a minute to flush loosened debris fully down the line.
                </p>
              </section>

              <div className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Water overflowing and rising?</h2>
                <p className="text-red-100 mb-6">
                  If a backup is flooding the bathroom or affecting more than one fixture, treat it as an emergency. Our 24/7 plumbers respond across Middlesex County.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Call Danny: {BUSINESS_INFO.phone2}</a>
                </div>
              </div>

              <section id="prevent" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Keep the drain clear</h2>
                <p className="text-gray-700 mb-4">
                  A few habits prevent most shower and tub clogs from forming in the first place.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use a mesh hair catcher over the drain and empty it after each shower.</li>
                  <li>Run hot water for 30 seconds after showering to keep soap and oils moving down the line.</li>
                  <li>Pull the stopper and clear hair buildup every couple of weeks.</li>
                  <li>If you have hard water, treating it cuts the scale that gives clogs something to grip. Our guide on <Link href="/blog/whole-house-water-filter-worth-it" className="text-red-700 hover:text-red-800">whether a whole house water filter is worth it</Link> covers the options.</li>
                </ul>
              </section>

              <section id="pro" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When the clog is deeper than one fixture</h2>
                <p className="text-gray-700 mb-4">
                  A single slow drain is a fixture clog you can usually clear yourself. But if the shower, tub, and a nearby toilet or sink all drain slowly or back up at the same time, if you hear gurgling from other drains, or if you notice sewage odors, the blockage is in the shared drain line, not the fixture. That is a deeper problem that needs a licensed plumber to diagnose.
                </p>
                <p className="text-gray-700">
                  Illyrian Plumber does not perform drain or sewer cleaning, so for a confirmed main-line blockage we recommend a drain-cleaning specialist. Where we can help is the related plumbing: if a backup or overflow becomes urgent, our <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">emergency plumbing</Link> team responds, and if you suspect water escaping from a damaged line behind a wall or under the floor, our <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link> service finds it. For ongoing slow drains in an older bathroom, our <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">bathroom remodeling</Link> team can replace dated, undersized drain plumbing during a renovation.
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
                <h2 className="text-2xl font-bold mb-4">Bathroom plumbing problem in Middlesex County?</h2>
                <p className="text-red-100 mb-6">
                  From emergency backups to leak detection and bathroom renovations, our licensed plumbers serve East Brunswick, Edison, and all of Middlesex County, NJ.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                  <Link href="/services/emergency-plumbing" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Emergency Plumbing</Link>
                </div>
              </section>

              <section className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/how-to-unclog-kitchen-sink" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Unclog a Kitchen Sink (7 Methods)</h3>
                      <p className="text-sm text-gray-600">Clear a clogged kitchen drain yourself.</p>
                    </div>
                  </Link>
                  <Link href="/blog/how-to-unclog-toilet" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Unclog a Toilet (6 Methods)</h3>
                      <p className="text-sm text-gray-600">Proven methods for a clogged toilet.</p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Plumbing emergency?</p>
                  <p className="text-gray-600 text-sm mb-4">24/7 emergency plumbers and leak detection across Middlesex County.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                    <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                    <li><Link href="/services/bathroom-remodeling" className="text-gray-700 hover:text-red-700 transition">Bathroom Remodeling</Link></li>
                    <li><Link href="/services/toilet-and-faucet-installation" className="text-gray-700 hover:text-red-700 transition">Toilet &amp; Faucet Installation</Link></li>
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
                    <li><Link href="/blog/how-to-unclog-toilet" className="text-gray-700 hover:text-red-700 transition">How to Unclog a Toilet</Link></li>
                    <li><Link href="/blog/how-to-get-rid-of-drain-flies" className="text-gray-700 hover:text-red-700 transition">How to Get Rid of Drain Flies</Link></li>
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
