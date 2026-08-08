import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How to Clean a Refrigerator Water Line: Step-by-Step (2026)",
  description: "Learn how to clean and flush your refrigerator water line safely. Step-by-step guide covering tools, the process, common problems, and when to call a plumber.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/how-to-clean-refrigerator-water-line" },
  keywords: [
    "how to clean a refrigerator water line",
    "how to clean water line in fridge",
    "clean fridge water line",
    "refrigerator water line",
    "repair refrigerator water line",
    "how to clean fridge water line",
    "how to clean refrigerator water line",
    "ice maker water line",
    "refrigerator water line cleaning",
    "fridge water line clogged",
  ],
  openGraph: {
    title: "How to Clean a Refrigerator Water Line: Step-by-Step (2026)",
    description: "Step-by-step guide to cleaning and flushing a refrigerator water line, from tools to common problems and when to call a plumber.",
    type: "article",
    publishedTime: "2026-08-08T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

const faqData = [
  {
    question: "How do I know if my refrigerator water line needs cleaning?",
    answer: "Warning signs include slow-filling ice trays, cloudy or off-tasting water from the dispenser, reduced water flow, or a musty smell from the dispenser area. If your filter is overdue for replacement (most need changing every 6 months), sediment and biofilm buildup in the line is a likely cause.",
  },
  {
    question: "How often should I clean my refrigerator water line?",
    answer: "Flush the line and replace the inline filter every 6 months under normal use, or every 3-4 months in hard water areas. If you notice reduced flow or odd taste before then, clean it sooner rather than waiting for the schedule.",
  },
  {
    question: "Can a refrigerator water line cause a leak?",
    answer: "Yes. The plastic tubing and its compression fittings are common sources of slow leaks, especially where the line connects to the shutoff valve behind the fridge or to the water inlet valve on the appliance itself. These leaks often go unnoticed for months because they are hidden behind or under the refrigerator.",
  },
  {
    question: "Do I need a plumber to clean a refrigerator water line?",
    answer: "No, cleaning and flushing the line is a DIY task most homeowners can do in under 30 minutes with basic tools. Call a licensed plumber if you find a leak at the shutoff valve, a cracked supply line, water damage on the floor or cabinet behind the fridge, or if the line was never properly installed with a dedicated shutoff.",
  },
];

export default function HowToCleanRefrigeratorWaterLinePost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Clean a Refrigerator Water Line: Step-by-Step",
    description: "Step-by-step guide to cleaning and flushing a refrigerator water line, from tools to common problems and when to call a plumber.",
    image: "https://www.illyrianplumber.com/images/pex-water-line-rough-in.jpg",
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
    datePublished: "2026-08-08T08:00:00.000Z",
    dateModified: "2026-08-08T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/how-to-clean-refrigerator-water-line",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#quick-answer"],
    },
    url: "https://www.illyrianplumber.com/blog/how-to-clean-refrigerator-water-line",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <article className="bg-white">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Kitchen Plumbing</span>
                <time dateTime="2026-08-08">August 8, 2026</time>
                <span>9 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How to Clean a Refrigerator Water Line: Step-by-Step
              </h1>
              <p className="text-xl text-gray-300">
                A clogged or dirty refrigerator water line is why your ice maker slows down and your dispenser water tastes off. Here is how to clean it safely, and how to tell when the problem is bigger than the line itself.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-08-08" updateDate="2026-08-08" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                The thin plastic tubing that feeds your refrigerator&apos;s ice maker and water dispenser is easy to forget about, right up until the ice trays fill slowly or the water tastes stale. It is also one of the more common hidden sources of a slow leak behind the fridge, which is exactly the kind of problem our <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-semibold">water leak detection</Link> team gets called out for once the flooring or cabinet base is already damaged.
              </p>
              <p className="text-gray-700">
                This guide covers how to clean and flush the line yourself, the tools you need, and the point where a DIY fix should turn into a call to a licensed plumber.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water systems in Middlesex County, NJ. We offer <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800">water filtration systems</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
              <ul className="space-y-2">
                <li><a href="#quick-answer-section" className="text-red-700 hover:text-red-800">How Do I Clean My Refrigerator&apos;s Water Line?</a></li>
                <li><a href="#tools" className="text-red-700 hover:text-red-800">Tools and Materials You&apos;ll Need</a></li>
                <li><a href="#steps" className="text-red-700 hover:text-red-800">Step-by-Step Cleaning Process</a></li>
                <li><a href="#troubleshooting" className="text-red-700 hover:text-red-800">Common Problems and Fixes</a></li>
                <li><a href="#when-to-call" className="text-red-700 hover:text-red-800">When to Call a Plumber Instead</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Quick Answer / AEO Block */}
            <section id="quick-answer-section" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How Do I Clean My Refrigerator&apos;s Water Line?</h2>
              <p id="quick-answer" className="text-lg text-gray-700">
                Shut off the water supply at the inline valve, disconnect the tubing at the fridge and the valve, then flush it with a mix of warm water and white vinegar using a turkey baster or funnel. Let it soak 5-10 minutes, rinse with clean water, reconnect, replace the inline filter if it is due, then turn the water back on and check every fitting for drips.
              </p>
            </section>

            {/* Why It Matters */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why the Water Line Gets Dirty in the First Place</h2>
              <p className="text-gray-700 mb-6">
                Refrigerator water lines are narrow, usually 1/4 inch plastic tubing, and they sit mostly stagnant between uses. Over months, mineral deposits from hard water, sediment, and biofilm build up along the inside walls the same way they do in any low-flow line. Homes in Middlesex County with harder water tend to see buildup faster, which is the same reason our <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium">water filtration</Link> customers ask about it.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Ice cubes are smaller, cloudy, or slow to form",
                  "Dispenser water tastes metallic, stale, or plastic-like",
                  "Water flow from the dispenser has noticeably slowed",
                  "Musty smell near the water dispenser or ice bin",
                  "Ice maker stops producing ice entirely",
                  "Damp cabinet floor or flooring behind the refrigerator",
                ].map((sign, index) => (
                  <div key={index} className="flex items-center gap-3 bg-amber-50 rounded-lg p-4">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{sign}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                The last one on that list is the one that matters most. According to the EPA&apos;s WaterSense program, household leaks waste more than 10,000 gallons of water a year on average (<a href="https://www.epa.gov/watersense/fix-leak-week" target="_blank" rel="noopener" className="text-red-700 hover:text-red-800 underline">source: EPA WaterSense</a>), and a slow drip behind a refrigerator is exactly the kind of leak that goes unnoticed until it has already damaged flooring or cabinetry.
              </p>
            </section>

            {/* Tools & Materials */}
            <section id="tools" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Tools and Materials You&apos;ll Need</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Tools</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Adjustable wrench or pliers</li>
                    <li>• Turkey baster or small funnel</li>
                    <li>• Towels and a shallow container</li>
                    <li>• Flashlight (most shutoff valves are tucked behind the fridge)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Materials</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• White vinegar</li>
                    <li>• Warm water</li>
                    <li>• Replacement inline water filter (if due)</li>
                    <li>• Replacement compression fitting (only if the old one is damaged)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Dark CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Found water damage behind the fridge?</p>
                <p className="text-gray-300 text-sm">That is a job for leak detection, not a turkey baster.</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
              </div>
            </div>

            {/* Steps */}
            <section id="steps" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Step-by-Step Cleaning Process</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Shut off the water supply</h3>
                      <p className="text-gray-700 text-sm">Find the dedicated shutoff valve, usually where the line branches off a kitchen or basement supply line behind or near the refrigerator, and turn it fully clockwise. Unplug the refrigerator to be safe if you are working near the water inlet valve.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Disconnect the tubing</h3>
                      <p className="text-gray-700 text-sm">Place a towel and shallow container under the fitting to catch residual water. Loosen the compression nut at the shutoff valve first, then the connection at the back of the refrigerator, and set the tubing aside.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Flush with a vinegar solution</h3>
                      <p className="text-gray-700 text-sm">Mix equal parts warm water and white vinegar. Using a turkey baster or funnel, push the solution through the tubing over a sink or bucket. Let it sit inside the line for 5-10 minutes to break down mineral scale and biofilm.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Rinse thoroughly</h3>
                      <p className="text-gray-700 text-sm">Flush the line with clean warm water until no vinegar smell remains. Any residual vinegar will affect the taste of your ice and water until it is fully rinsed out.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Replace the inline filter if due</h3>
                      <p className="text-gray-700 text-sm">Most manufacturers recommend replacing the inline water filter every 6 months. If yours is overdue, swap it now while the line is already disconnected, following your refrigerator&apos;s filter housing instructions.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">6</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Reconnect and test</h3>
                      <p className="text-gray-700 text-sm">Reattach the tubing at both ends, hand-tighten the compression nuts, then turn the shutoff valve back on slowly. Check every connection point for drips over the next few minutes before considering the job done.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">7</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Discard the first batch of ice</h3>
                      <p className="text-gray-700 text-sm">Run and discard the first pitcher of dispensed water and the first full batch of ice, since both may carry a faint vinegar taste from the flush.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Common mistake to avoid</h4>
                <p className="text-gray-700 text-sm">Overtightening the compression nuts is the most common cause of a new leak after a DIY cleaning. Hand-tight plus a quarter turn with a wrench is usually enough. Cranking it further can crack the plastic fitting or damage the ferrule seal.</p>
              </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Common Problems and Fixes</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Still slow after cleaning</h3>
                  <p className="text-gray-700">If flow is still weak after a flush, the water inlet valve on the refrigerator itself, not the line, may be partially clogged or failing. This is a refrigerator repair issue rather than a plumbing one.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Line is frozen</h3>
                  <p className="text-gray-700">If the tubing runs behind the freezer compartment, it can freeze and block flow entirely. Unplugging the fridge for a few hours to let it thaw naturally, without forcing water through it, usually resolves this.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Drips after reconnecting</h3>
                  <p className="text-gray-700">A drip right after reassembly almost always means a fitting was not seated straight or was undertightened. Turn the water off, disconnect, check that the tubing end is cut cleanly and square, and reconnect.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Cracked or brittle tubing</h3>
                  <p className="text-gray-700">Older plastic supply lines become brittle over time, especially copper-to-plastic transition fittings. If the tubing looks discolored, cracked, or feels stiff rather than flexible, replace the whole line rather than reconnecting it.</p>
                </div>
              </div>
            </section>

            {/* When to Call a Plumber */}
            <section id="when-to-call" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to Call a Plumber Instead</h2>
              <p className="text-gray-700 mb-6">
                Cleaning the line is a straightforward DIY job. A few situations go beyond that and are worth a licensed plumber&apos;s attention:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span><strong>You find water damage behind or under the fridge.</strong> Warped flooring, soft cabinet bases, or a musty smell mean the leak has been going on longer than you realized, and the source needs to be confirmed before repairs, not guessed at.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span><strong>There is no dedicated shutoff valve.</strong> Some older installations tap the water line without a proper valve. Adding one is a quick job for a plumber and makes future maintenance and emergencies much safer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span><strong>The leak is at the saddle valve or main supply line</strong>, not just the refrigerator tubing. Saddle valve leaks can affect water pressure throughout the kitchen and are a common source of hidden pinhole leaks in older copper supply lines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span><strong>You want a whole-home look at water quality</strong>, since a fridge filter alone only treats one tap. A <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium">whole house water filtration system</Link> addresses hard water and sediment at the source instead of one line at a time.</span>
                </li>
              </ul>
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Suspect a hidden leak?</h4>
                <p className="text-gray-700 mb-3">Our licensed plumbers use non-invasive leak detection equipment to pinpoint hidden leaks behind appliances, in walls, and under slabs without unnecessary demolition.</p>
                <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">
                  Learn About Our Leak Detection Services →
                </Link>
              </div>
            </section>

            {/* Red CTA */}
            <div className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Water Damage Behind an Appliance?</h2>
              <p className="text-red-100 mb-6">
                If a slow leak from a refrigerator, dishwasher, or washing machine line has already caused water damage, our licensed plumbers can pinpoint the source and give you upfront repair pricing before any work starts.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/services/water-leak-detection" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  Leak Detection Services
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
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

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/signs-of-slab-leak-sewer-line" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs of a Slab Leak or Sewer Line Problem</h3>
                    <p className="text-sm text-gray-600">Bigger warning signs of hidden leaks beyond a single appliance line.</p>
                  </div>
                </Link>
                <Link href="/blog/why-is-my-sewer-bill-so-high" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Why Is My Sewer Bill So High?</h3>
                    <p className="text-sm text-gray-600">A hidden leak anywhere in the house, including behind the fridge, can inflate your bill.</p>
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
                <p className="text-lg font-bold text-gray-900 mb-1">Found a Leak?</p>
                <p className="text-gray-600 text-sm mb-4">Professional leak detection across Middlesex County.</p>
                <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
                <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
              </div>
              {/* Service Areas */}
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
              {/* Services */}
              <div className="bg-white rounded-xl shadow-md p-5">
                <p className="font-bold text-gray-900 mb-3">Our Services</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                  <li><Link href="/services/water-filtration-system" className="text-gray-700 hover:text-red-700 transition">Water Filtration Systems</Link></li>
                  <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                  <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                </ul>
                <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
              </div>
              {/* Related Blogs */}
              <div className="bg-white rounded-xl shadow-md p-5">
                <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/blog/signs-of-slab-leak-sewer-line" className="text-gray-700 hover:text-red-700 transition leading-snug block">Signs of a Slab Leak and Sewer Line Problems</Link></li>
                  <li><Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition leading-snug block">Why Is My Water Pressure Low?</Link></li>
                  <li><Link href="/blog/why-is-my-sewer-bill-so-high" className="text-gray-700 hover:text-red-700 transition leading-snug block">Why Is My Sewer Bill So High?</Link></li>
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
