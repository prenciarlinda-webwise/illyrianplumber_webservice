import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How to Shut Off the Water to Your House (2026 Guide)",
  description: "How to shut off the water to your house in an emergency: find the main shut off valve, stop a single fixture, flush a toilet with the water off, and what to do next.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/how-to-shut-off-water-to-your-house" },
  keywords: [
    "how to shut off water to house",
    "how to turn off water to house",
    "how to turn off the water supply to your house",
    "main water shut off valve",
    "how to turn off a water heater",
    "how to turn the water off to the shower",
    "how to flush a toilet when the water is off",
    "water emergency shut off",
    "where is my water shut off valve",
  ],
  openGraph: {
    title: "How to Shut Off the Water to Your House (2026 Guide)",
    description: "Find your main water shut off valve and stop a plumbing emergency fast, plus how to flush a toilet when the water is off.",
    type: "article",
    publishedTime: "2026-06-02T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

const faqs = [
  {
    question: "Where is the main water shut off valve in my house?",
    answer:
      "In most New Jersey homes the main shut off valve is on an interior wall where the water line enters, usually in the basement, a crawl space, or a utility closet on the side of the house facing the street. It sits near the water meter. Look for a valve with either a round wheel handle you turn clockwise or a lever handle you rotate a quarter turn until it is perpendicular to the pipe.",
  },
  {
    question: "How do I flush a toilet when the water is off?",
    answer:
      "Pour about one to two gallons of water directly into the toilet bowl in a single fast stream. The weight and speed of the water force the waste through the trap and down the drain, mimicking a normal flush. To refill the tank for a standard flush instead, pour water into the tank up to the fill line, then use the flush handle as usual.",
  },
  {
    question: "Should I turn off the water heater when I shut off the main water?",
    answer:
      "If the water will be off for more than a few hours, turn the water heater to vacation or pilot mode, or switch off its breaker for an electric unit. A water heater that keeps heating without incoming water can overheat or damage the tank. For a quick shutoff to stop a leak, you usually do not need to touch the heater, but never let an empty tank keep heating.",
  },
  {
    question: "Why do my pipes sputter when I turn the water back on?",
    answer:
      "Sputtering and banging is trapped air being pushed out of the lines, which is normal after a shutoff. Turn the main valve back on slowly, then open the highest and farthest faucet in the house first and let it run until the flow is steady and quiet. Work your way down to lower faucets. The air clears within a minute or two.",
  },
];

export default function HowToShutOffWaterToYourHouse() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Shut Off the Water to Your House (2026 Guide)",
    description:
      "Step-by-step guide to shutting off the water to your house in a plumbing emergency, including finding the main shut off valve and flushing a toilet with the water off.",
    image: "https://www.illyrianplumber.com/images/emergency-plumbing-services-nj.jpg",
    author: { "@type": "Organization", name: BUSINESS_INFO.name, url: "https://www.illyrianplumber.com" },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      logo: { "@type": "ImageObject", url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png" },
    },
    datePublished: "2026-06-02T08:00:00.000Z",
    dateModified: "2026-06-02T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/how-to-shut-off-water-to-your-house" },
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
      { "@type": "ListItem", position: 3, name: "How to Shut Off the Water to Your House", item: "https://www.illyrianplumber.com/blog/how-to-shut-off-water-to-your-house" },
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
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Emergency Plumbing</span>
                <time dateTime="2026-06-02">June 2, 2026</time>
                <span>12 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How to shut off the water to your house
              </h1>
              <p className="text-xl text-gray-300">
                When a pipe bursts or a fixture overflows, stopping the water is the first thing that limits the damage. Here is how to find and use every shutoff in your home.
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
                <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-5 mb-6">
                  <p className="text-sm text-red-900 font-medium mb-1">Quick answer</p>
                  <p className="text-sm text-red-800">To shut off all water to your house, find the main shut off valve where the water line enters, usually in the basement near the meter, and turn the wheel fully clockwise or rotate the lever a quarter turn so it sits across the pipe. To stop one fixture, turn the small valve on the supply line behind the toilet, sink, or appliance instead.</p>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Knowing how to shut off the water to your house is the single most useful thing a homeowner can learn before an emergency, because the faster you stop the flow, the less water damage you face. A burst supply line can release several gallons a minute. If you are dealing with an active leak right now and cannot stop it, call our <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-semibold">24/7 emergency plumbers</Link> while you work through the steps below.
                </p>
                <p className="text-gray-700">
                  This guide covers the three levels of shutoff: the single fixture, the water heater, and the main valve for the whole house. Find and tag your main valve today so you are not searching for it during a crisis.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers serving Middlesex County, NJ since 2010. We provide <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link>, <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, and <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
                </p>
              </div>

              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">In this guide</h2>
                <ul className="space-y-2">
                  <li><a href="#fixture" className="text-red-700 hover:text-red-800">Shut off one fixture</a></li>
                  <li><a href="#main" className="text-red-700 hover:text-red-800">Find and close the main shut off valve</a></li>
                  <li><a href="#heater" className="text-red-700 hover:text-red-800">Turn off the water heater</a></li>
                  <li><a href="#toilet" className="text-red-700 hover:text-red-800">Flush a toilet when the water is off</a></li>
                  <li><a href="#back-on" className="text-red-700 hover:text-red-800">Turn the water back on safely</a></li>
                  <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently asked questions</a></li>
                </ul>
              </nav>

              <section id="fixture" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to shut off the water to one fixture</h2>
                <p className="text-gray-700 mb-4">
                  If the problem is at a single toilet, sink, or appliance, you can stop the water there without cutting off the whole house. Look for a small shutoff valve, called a stop valve, on the supply line.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>Toilet:</strong> a football-shaped or lever valve on the wall behind the toilet, on the supply line running to the bottom of the tank.</li>
                  <li><strong>Sink:</strong> one or two valves under the basin, on the hot and cold supply lines.</li>
                  <li><strong>Shower or tub:</strong> showers rarely have a local valve, so you usually go to the main. To stop the water to the shower, close the main valve described below.</li>
                  <li><strong>Washing machine and water heater:</strong> valves on the supply lines feeding the appliance.</li>
                </ul>
                <p className="text-gray-700">
                  Turn the valve clockwise to close. If a stop valve is stuck or leaks when you turn it, which is common on older valves that have not moved in years, stop and close the main instead so you do not snap the valve.
                </p>
              </section>

              <section id="main" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to find and close the main shut off valve</h2>
                <p className="text-gray-700 mb-4">
                  The main valve stops water to the entire house. There are two types, and both close the same direction in spirit.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Gate valve (round wheel)</h3>
                    <p className="text-gray-700">Turn the wheel clockwise until it stops. It may take several full turns. If it is stiff, turn steadily rather than forcing it, since old gate valves can break. This style is common in older East Brunswick and Edison homes.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Ball valve (lever handle)</h3>
                    <p className="text-gray-700">Rotate the lever a quarter turn so it sits across, or perpendicular to, the pipe. When the handle lines up with the pipe the valve is open, and when it crosses the pipe it is closed. Ball valves are faster and more reliable, which is why we install them during a <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repipe</Link>.</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  After closing the main, open a faucet on the lowest floor to relieve pressure and drain the lines. If you cannot find or turn the interior main, there is also a curb stop in a covered box near the street that the water utility controls. That valve usually needs a special key, so it is a last resort.
                </p>
              </section>

              <div className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Active leak you cannot stop?</h2>
                <p className="text-red-100 mb-6">
                  If water is still flowing and you cannot close a valve, do not wait. Our licensed emergency plumbers respond fast across Middlesex County, day or night.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Call Danny: {BUSINESS_INFO.phone2}</a>
                </div>
              </div>

              <section id="heater" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to turn off the water heater</h2>
                <p className="text-gray-700 mb-4">
                  Whenever you shut the main for more than a couple of hours, protect the water heater so it does not run dry while still heating.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>Gas water heater:</strong> turn the temperature dial to the pilot or vacation setting. You do not need to relight anything later.</li>
                  <li><strong>Electric water heater:</strong> switch off its dedicated breaker in the electrical panel so the elements do not burn out in an empty tank.</li>
                  <li><strong>To stop a leaking heater:</strong> close the cold water supply valve on top of the tank, then shut off the gas or breaker.</li>
                </ul>
                <p className="text-gray-700">
                  If the water heater itself is the source of the leak, our <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link> team can diagnose whether it needs a part or a full replacement.
                </p>
              </section>

              <section id="toilet" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to flush a toilet when the water is off</h2>
                <p className="text-gray-700 mb-4">
                  With the supply off, the tank will not refill, but you can still flush. Pour one to two gallons of water straight into the bowl in a single fast pour. The momentum pushes waste through the trap just like a normal flush. To use the handle instead, fill the tank to the marked line with a bucket and flush as usual.
                </p>
                <p className="text-gray-700">
                  Keep a few gallons of stored water on hand if a planned shutoff for repairs will last a while, so the household can keep using the bathroom comfortably.
                </p>
              </section>

              <section id="back-on" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to turn the water back on safely</h2>
                <p className="text-gray-700 mb-4">
                  Reopen the main valve slowly. Opening it fast sends a pressure surge through the system that can stress joints and dislodge sediment. Then open the highest and farthest faucet first and let it run until the air clears and the stream is steady, working down to the lower fixtures.
                </p>
                <p className="text-gray-700">
                  Once water is restored, walk the house and check every fixture and the area around the original problem for drips. A slow leak that starts after a repair can hide inside a wall or under a floor. If you suspect water going somewhere you cannot see, our <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link> service finds it without tearing out drywall. For seasonal protection, our <Link href="/blog/frozen-pipes-prevention-repair" className="text-red-700 hover:text-red-800">frozen pipe prevention guide</Link> explains how to keep a burst from happening in the first place.
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
                <h2 className="text-2xl font-bold mb-4">Plumbing emergency in Middlesex County?</h2>
                <p className="text-red-100 mb-6">
                  Burst pipe, major leak, or no water? Our 24/7 emergency plumbers serve East Brunswick, Edison, and all of Middlesex County, NJ.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                  <Link href="/services/emergency-plumbing" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Emergency Plumbing</Link>
                </div>
              </section>

              <section className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/frozen-pipes-prevention-repair" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Frozen Pipes Prevention and Repair</h3>
                      <p className="text-sm text-gray-600">Stop a winter burst before it starts.</p>
                    </div>
                  </Link>
                  <Link href="/blog/how-to-fix-leaking-pipe" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Fix a Leaking Pipe</h3>
                      <p className="text-sm text-gray-600">Emergency steps and permanent repairs.</p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Plumbing emergency?</p>
                  <p className="text-gray-600 text-sm mb-4">24/7 emergency plumbers across Middlesex County. Burst pipes, leaks, and no-water calls.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                    <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                    <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
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
                    <li><Link href="/blog/frozen-pipes-prevention-repair" className="text-gray-700 hover:text-red-700 transition">Frozen Pipes Prevention and Repair</Link></li>
                    <li><Link href="/blog/how-to-fix-leaking-pipe" className="text-gray-700 hover:text-red-700 transition">How to Fix a Leaking Pipe</Link></li>
                    <li><Link href="/blog/water-pipe-noises-causes-fixes" className="text-gray-700 hover:text-red-700 transition">Water Pipe Noises: Causes and Fixes</Link></li>
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
