import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How to Clean and Unclog a Garbage Disposal (2026 Guide)",
  description: "How to clean a garbage disposal and unclog it fast. Ice and salt cleaning, the hex key reset, safe unjamming steps, odor fixes, and when to call a NJ plumber.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/garbage-disposal-cleaning-unclogging-guide" },
  keywords: [
    "how to clean a garbage disposal",
    "how to clean garbage disposal",
    "how to unclog a garbage disposal",
    "how to unclog garbage disposal",
    "how to fix a clogged garbage disposal",
    "how to fix a garbage disposal clog",
    "how to clean garburator",
    "garbage disposal smells",
    "garbage disposal humming",
    "garbage disposal reset button",
    "garbage disposal jammed",
  ],
  openGraph: {
    title: "How to Clean and Unclog a Garbage Disposal (2026 Guide)",
    description: "Clean a smelly garbage disposal and unclog a jammed one safely with this step-by-step guide. Plus when to call a licensed NJ plumber.",
    type: "article",
    publishedTime: "2026-06-02T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

const faqs = [
  {
    question: "How do I clean a smelly garbage disposal?",
    answer:
      "Grind a tray of ice cubes with a half cup of rock salt to scrape food off the grinding chamber, then drop in a few citrus peels and run cold water for 30 seconds. For odors that linger, scrub under the rubber splash guard with an old toothbrush and dish soap. The splash guard traps the most rot-causing residue and is the part homeowners almost always miss.",
  },
  {
    question: "Why is my garbage disposal humming but not working?",
    answer:
      "A hum with no spinning means the motor has power but the flywheel is jammed. Turn the disposal off, then use the hex (Allen) key that came with the unit in the slot on the underside center to manually rotate the flywheel back and forth until it frees up. Never put your hand in the chamber. Once it turns freely, press the red reset button on the bottom and test it.",
  },
  {
    question: "Can I use Drano or chemical drain cleaner in a garbage disposal?",
    answer:
      "No. Liquid chemical drain cleaners can damage the disposal seals, splash back onto skin, and pool against the blades without clearing the clog. For a clog under the unit, clean the P-trap by hand instead. For grinding-chamber buildup, use ice and salt. If those do not work, a plumber can clear the line safely without corrosive chemicals.",
  },
  {
    question: "What should never go in a garbage disposal?",
    answer:
      "Keep grease, oil, coffee grounds, eggshells, pasta, rice, fibrous vegetables like celery and corn husks, fruit pits, and bones out of the disposal. Grease coats the pipe and hardens, while starchy and fibrous foods wrap the blades or form a paste. These are the most common causes of clogs we see behind kitchen disposals in Middlesex County homes.",
  },
];

export default function GarbageDisposalCleaningUncloggingGuide() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Clean and Unclog a Garbage Disposal (2026 Guide)",
    description:
      "Step-by-step guide to cleaning a smelly garbage disposal and unclogging a jammed unit safely, plus the foods to avoid and when to call a licensed Middlesex County NJ plumber.",
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
    datePublished: "2026-06-02T08:00:00.000Z",
    dateModified: "2026-06-02T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/garbage-disposal-cleaning-unclogging-guide",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.illyrianplumber.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.illyrianplumber.com/blog" },
      { "@type": "ListItem", position: 3, name: "How to Clean and Unclog a Garbage Disposal", item: "https://www.illyrianplumber.com/blog/garbage-disposal-cleaning-unclogging-guide" },
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
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Kitchen Plumbing</span>
                <time dateTime="2026-06-02">June 2, 2026</time>
                <span>13 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How to clean and unclog a garbage disposal
              </h1>
              <p className="text-xl text-gray-300">
                A clean, free-spinning disposal in about 20 minutes: how to clear odors, free a jam, fix a clog under the unit, and what to keep out of it for good.
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
                  A garbage disposal that smells, hums, or backs up is one of the most common kitchen complaints, and most of the time you can fix it yourself in under 20 minutes. The repairs below are the same ones our <Link href="/services/kitchen-plumbing" className="text-red-700 hover:text-red-800 font-semibold">kitchen plumbing</Link> technicians walk homeowners through every week. This guide covers how to clean a garbage disposal, how to unclog a garbage disposal that is jammed or draining slowly, and the short list of foods that cause most failures.
                </p>
                <p className="text-gray-700">
                  Two safety rules first. Always cut power at the wall switch before you reach near the chamber, and never put your fingers inside the disposal. Every step here is done with a tool or from outside the unit.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers serving Middlesex County, NJ since 2010. We handle <Link href="/services/kitchen-plumbing" className="text-red-700 hover:text-red-800">kitchen plumbing</Link> including garbage disposal installation and repair, <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">faucet and fixture installation</Link>, <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
                </p>
              </div>

              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">In this guide</h2>
                <ul className="space-y-2">
                  <li><a href="#clean" className="text-red-700 hover:text-red-800">How to clean a garbage disposal</a></li>
                  <li><a href="#jam" className="text-red-700 hover:text-red-800">How to free a humming or jammed disposal</a></li>
                  <li><a href="#unclog" className="text-red-700 hover:text-red-800">How to unclog a disposal that drains slowly</a></li>
                  <li><a href="#avoid" className="text-red-700 hover:text-red-800">What never to put down a disposal</a></li>
                  <li><a href="#pro" className="text-red-700 hover:text-red-800">When to call a plumber</a></li>
                  <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently asked questions</a></li>
                </ul>
              </nav>

              <section id="clean" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to clean a garbage disposal and kill odors</h2>
                <p className="text-gray-700 mb-4">
                  Odor comes from food residue stuck to the grinding chamber and, more often, to the underside of the rubber splash guard. Cleaning both surfaces removes the smell at the source instead of masking it.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Step 1: Grind ice and rock salt</h3>
                    <p className="text-gray-700">With cold water running, drop in two cups of ice cubes and a half cup of rock salt or coarse kosher salt and run the disposal until the ice is gone. The ice scours hardened food off the blades and the chamber wall, and the salt acts as a mild abrasive. This is the single most effective cleaning step and is safe to do monthly.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Step 2: Deodorize with citrus</h3>
                    <p className="text-gray-700">Run a handful of lemon, lime, or orange peels through with cold water. The citrus oils leave a clean scent and help cut grease film. Avoid pouring in large amounts of baking soda and vinegar at once. The fizzing looks impressive but does little to remove stuck-on residue compared to the ice and salt method.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Step 3: Scrub the splash guard</h3>
                    <p className="text-gray-700">With the power off at the wall, lift or fold back the rubber baffle and scrub the underside flaps with an old toothbrush and dish soap. This hidden surface holds the most rot and is the reason a disposal still smells after grinding citrus. Rinse with cold water when done.</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Always use cold water, not hot. Cold keeps any fats solid so they grind and flush away instead of melting and coating the pipe downstream.
                </p>
              </section>

              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Disposal beyond a quick fix?</p>
                  <p className="text-gray-300 text-sm">Our licensed plumbers repair and replace garbage disposals across Middlesex County.</p>
                </div>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
                </div>
              </div>

              <section id="jam" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to free a humming or jammed disposal</h2>
                <p className="text-gray-700 mb-4">
                  If the disposal hums but will not spin, the motor has power but the flywheel is stuck on a bone, pit, or piece of cutlery. Shut it off right away. Running a jammed motor for more than a few seconds will trip the overload or burn it out.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Step 1: Cut the power</h3>
                    <p className="text-gray-700">Switch off the disposal at the wall and, for added safety, unplug it under the sink or flip its breaker. Never reach into the chamber with the power live.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Step 2: Turn the flywheel with the hex key</h3>
                    <p className="text-gray-700">Most disposals have a hex (Allen) key slot in the center of the underside. Insert the key, which usually clips to the side of the unit, and rotate it firmly back and forth until the flywheel spins freely. This breaks loose whatever is wedged against the impellers.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Step 3: Remove the object and reset</h3>
                    <p className="text-gray-700">Use tongs or pliers, never your hand, to fish out the jammed object through the drain opening with a flashlight. Then press the red reset button on the bottom of the disposal. Restore power, run cold water, and test in short bursts.</p>
                  </div>
                </div>
              </section>

              <section id="unclog" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to unclog a garbage disposal that drains slowly</h2>
                <p className="text-gray-700 mb-4">
                  If the disposal spins fine but water backs up into the sink, the clog is in the drain trap below the unit, not the disposal itself. Chemical drain cleaners are the wrong tool here and can damage the seals. Clearing the trap by hand is faster and safer.
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                  <li>Turn off the power and place a bucket under the trap to catch standing water.</li>
                  <li>Loosen the slip nuts and remove the P-trap, the curved pipe under the disposal. Empty and inspect it for trapped food or grease.</li>
                  <li>Check the trap arm and the disposal discharge tube for buildup, and clear them with a bottle brush.</li>
                  <li>Reassemble, hand-tightening the slip nuts, then run cold water and check for leaks at each joint.</li>
                </ol>
                <p className="text-gray-700">
                  If water still drains slowly after cleaning the trap, the blockage is farther down the kitchen line. At that point the fix is the same as a stubborn sink clog. Our <Link href="/blog/how-to-unclog-kitchen-sink" className="text-red-700 hover:text-red-800">guide to unclogging a kitchen sink</Link> covers the next steps before you call for help.
                </p>
              </section>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-14 h-14 bg-red-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Garbage disposal repair and replacement</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      If the unit leaks from the body, trips the reset repeatedly, or no longer powers on, it is usually time to replace it. Our <Link href="/services/kitchen-plumbing" className="text-red-700 hover:text-red-800">kitchen plumbing</Link> team installs and repairs all major disposal brands across Middlesex County.
                    </p>
                    <Link href="/services/kitchen-plumbing" className="inline-flex items-center gap-2 text-red-700 font-semibold hover:text-red-800 transition text-sm">
                      See our kitchen plumbing services
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </div>
              </div>

              <section id="avoid" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What never to put down a garbage disposal</h2>
                <p className="text-gray-700 mb-4">
                  Most disposal clogs and jams come down to a handful of foods. Keeping these out of the unit prevents nearly every problem above. According to the <a href="https://www.epa.gov/recycle/reducing-wasted-food-home" target="_blank" rel="noopener" className="text-red-700 hover:text-red-800">US EPA</a>, composting or trashing these items also keeps grease and solids out of the wider sewer system.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-2">Cause clogs in the pipe</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Grease, oil, and fat</li>
                      <li>Coffee grounds</li>
                      <li>Pasta, rice, and bread</li>
                      <li>Eggshells</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-2">Jam or wrap the blades</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Celery, corn husks, and onion skins</li>
                      <li>Fruit pits and bones</li>
                      <li>Potato peels</li>
                      <li>Non-food items and cutlery</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700">
                  Run cold water for 15 seconds before and after every use to carry scraps fully down the line. This single habit prevents most of the buildup that leads to odors and slow drains.
                </p>
              </section>

              <section id="pro" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to call a plumber</h2>
                <p className="text-gray-700 mb-4">
                  Call a licensed plumber if the disposal leaks from the housing or the bottom, if it trips the reset button repeatedly, if it will not turn on after a reset, or if water backs up into the sink even after you have cleaned the P-trap. A leak from the body of the unit means a failed internal seal, which is a sign the disposal needs replacement rather than repair.
                </p>
                <p className="text-gray-700">
                  If the backup affects more than one fixture or you see water pooling under the cabinet, treat it as urgent. Our <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbers</Link> respond across Middlesex County, and our <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link> team can trace a hidden under-sink leak before it damages the cabinet or floor.
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
                <h2 className="text-2xl font-bold mb-4">Need a plumber for your kitchen?</h2>
                <p className="text-red-100 mb-6">
                  From garbage disposal repair and replacement to faucet and drain work, our licensed plumbers serve East Brunswick, Edison, and all of Middlesex County, NJ.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                  <Link href="/services/kitchen-plumbing" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Kitchen Plumbing Services</Link>
                </div>
              </section>

              <section className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/how-to-unclog-kitchen-sink" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Unclog a Kitchen Sink (7 Methods)</h3>
                      <p className="text-sm text-gray-600">Clear a clogged kitchen sink with seven proven methods.</p>
                    </div>
                  </Link>
                  <Link href="/blog/dishwasher-not-draining-causes-fixes" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Dishwasher Not Draining? 8 Causes and Fixes</h3>
                      <p className="text-sm text-gray-600">Why your dishwasher will not drain, including the disposal connection.</p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need a plumber?</p>
                  <p className="text-gray-600 text-sm mb-4">24/7 plumbing in Middlesex County: kitchen plumbing, leak detection, water heaters, and more.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/kitchen-plumbing" className="text-gray-700 hover:text-red-700 transition">Kitchen Plumbing</Link></li>
                    <li><Link href="/services/toilet-and-faucet-installation" className="text-gray-700 hover:text-red-700 transition">Toilet &amp; Faucet Installation</Link></li>
                    <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You might also like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/how-to-unclog-kitchen-sink" className="text-gray-700 hover:text-red-700 transition">How to Unclog a Kitchen Sink</Link></li>
                    <li><Link href="/blog/dishwasher-not-draining-causes-fixes" className="text-gray-700 hover:text-red-700 transition">Dishwasher Not Draining? Causes and Fixes</Link></li>
                    <li><Link href="/blog/kitchen-sink-plumbing-diagram" className="text-gray-700 hover:text-red-700 transition">Kitchen Sink Plumbing Diagram</Link></li>
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
