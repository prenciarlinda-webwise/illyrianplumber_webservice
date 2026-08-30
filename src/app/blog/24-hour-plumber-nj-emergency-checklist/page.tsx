import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "24 Hour Plumber in NJ: Your Emergency Checklist (2026)",
  description: "What counts as a plumbing emergency in NJ, the first steps that limit damage, and how Illyrian's 24-hour plumbers respond. Upfront pricing, no guessing.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/24-hour-plumber-nj-emergency-checklist" },
  keywords: [
    "24 hour plumber nj",
    "24 hour plumber in nj",
    "24 hour plumbing service nj",
    "emergency plumber new jersey",
    "emergency plumbers in new jersey",
    "residential plumber new jersey",
    "nj emergency plumbing",
    "burst pipe emergency nj",
  ],
  openGraph: {
    title: "24 Hour Plumber in NJ: Your Emergency Checklist (2026)",
    description: "What counts as a plumbing emergency in NJ, the first steps that limit damage, and how Illyrian's 24-hour plumbers respond.",
    type: "article",
    publishedTime: "2026-08-28T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

const faqData = [
  {
    question: "How fast can a 24-hour plumber reach me in NJ?",
    answer: "Illyrian typically arrives within 30 to 60 minutes for emergency calls across Middlesex County, depending on your location, weather, and current call volume. When you call, we give you an estimated arrival window up front so you know what to expect while the situation is contained.",
  },
  {
    question: "Is a burst pipe considered a plumbing emergency?",
    answer: "Yes. A burst pipe releases water continuously and can cause structural and mold damage within hours, so it should not wait for a scheduled appointment. Shut off the main water valve if it is safe to do so, then call an emergency plumber right away rather than attempting a temporary patch yourself.",
  },
  {
    question: "How much does a 24-hour emergency plumber cost in NJ?",
    answer: "Cost depends on the failure, the parts needed, and whether it happens after hours, not on a flat emergency fee alone. A licensed plumber should give you an upfront estimate before starting any work, so ask for pricing in writing once the plumber has assessed the problem on site.",
  },
  {
    question: "Should I turn off my main water valve during a leak?",
    answer: "Yes, if you can reach it safely. The main shutoff is usually near the water meter, in a basement, crawl space, or utility closet, and turning it clockwise stops water to the entire house. This buys time and limits damage while you wait for a plumber to arrive.",
  },
];

export default function TwentyFourHourPlumberNjPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "24 Hour Plumber in NJ: Your Emergency Checklist",
    description: "What counts as a plumbing emergency in NJ, the first steps that limit damage, and how Illyrian's 24-hour licensed plumbers respond once they're on site.",
    image: "https://www.illyrianplumber.com/images/emergency-plumbing-services-nj.jpg",
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
    datePublished: "2026-08-28T08:00:00.000Z",
    dateModified: "2026-08-28T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/24-hour-plumber-nj-emergency-checklist",
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
    url: "https://www.illyrianplumber.com/blog/24-hour-plumber-nj-emergency-checklist",
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
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Emergency Plumbing</span>
                <time dateTime="2026-08-28">August 28, 2026</time>
                <span>9 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                24-Hour Plumber in NJ: What to Do in a Plumbing Emergency
              </h1>
              <p className="text-xl text-gray-300">
                A burst pipe does not wait for business hours, and the first ten minutes decide how much cleanup follows. Here is what actually counts as an emergency, what to do while help is on the way, and what to expect once a licensed NJ plumber is on site.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-08-28" updateDate="2026-08-28" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                When a supply line lets go behind a wall or a water heater fails at midnight, waiting until Monday can turn a small repair into a full remediation job. Illyrian&apos;s <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-semibold">24/7 emergency plumbing</Link> team treats every after-hours call the same way: stabilize first, diagnose second, then walk you through the actual repair options before any work starts.
              </p>
              <p className="text-gray-700">
                Illyrian has handled emergency calls across Middlesex County since 2010, from burst pipes in 1960s East Brunswick colonials to failed water heaters in newer Monroe Township builds. The pattern holds up: the households that come out ahead are the ones who knew what to shut off, and what to leave alone, in the first few minutes.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers providing 24/7 emergency response across Middlesex County, NJ since 2010. Illyrian handles <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">emergency plumbing</Link>, <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line repair</Link>, and <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole-house repiping</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed, average emergency response window of 30 to 60 minutes.
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
              <ul className="space-y-2">
                <li><a href="#quick-answer-section" className="text-red-700 hover:text-red-800">When Should You Call a 24-Hour Plumber?</a></li>
                <li><a href="#first-steps" className="text-red-700 hover:text-red-800">What to Do in the First 10 Minutes</a></li>
                <li><a href="#stabilization" className="text-red-700 hover:text-red-800">Why Emergency Visits Start With Stabilization</a></li>
                <li><a href="#covers" className="text-red-700 hover:text-red-800">What a 24-Hour Emergency Call Covers</a></li>
                <li><a href="#choosing" className="text-red-700 hover:text-red-800">How to Choose a Reliable Emergency Plumber</a></li>
                <li><a href="#local" className="text-red-700 hover:text-red-800">Why Local Experience Matters</a></li>
                <li><a href="#after" className="text-red-700 hover:text-red-800">After the Emergency</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Quick Answer / AEO Block */}
            <section id="quick-answer-section" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When Should You Call a 24-Hour Plumber in NJ?</h2>
              <p id="quick-answer" className="text-lg text-gray-700 mb-6">
                Call a 24-hour plumber any time a problem is actively causing damage, creating a safety risk, or cutting off water or heat entirely, rather than waiting for a normal appointment. That covers burst or frozen pipes, uncontrolled leaks, a gas odor near plumbing or appliances, a failed water heater in winter, and a total loss of water pressure.
              </p>
              <p className="text-gray-700 mb-6">
                A slow, contained drip under a bathroom sink can usually wait for a scheduled visit. A pipe spraying inside a wall, a water heater leaking onto a finished basement floor, or the smell of gas near an appliance cannot. Freezing temperatures, older galvanized and polybutylene supply lines, and dense town-house and colonial-era housing stock all raise the stakes in Middlesex County specifically, which is part of why aging supply lines are one of the most common root causes behind emergency burst-pipe calls here.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Burst or frozen pipes releasing water into walls, ceilings, basements, or crawl spaces",
                  "Uncontrolled leaks from supply lines, fixtures, or a water heater tank",
                  "A failed water heater causing active leaking, no hot water, or pressure relief discharge",
                  "Sudden, whole-house loss of water pressure",
                  "A gas odor near an appliance or exposed plumbing, which needs immediate caution",
                  "Flooding tied to a failed sump pump during heavy rain",
                ].map((sign, index) => (
                  <div key={index} className="flex items-center gap-3 bg-amber-50 rounded-lg p-4">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{sign}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-6">
                Not sure which category you are in? Call and describe what is happening. A licensed plumber can tell you in a couple of minutes whether it needs an immediate dispatch or can safely hold for a scheduled appointment.
              </p>
            </section>

            {/* Steps */}
            <section id="first-steps" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What to Do in the First 10 Minutes</h2>
              <p className="text-gray-700 mb-6">
                You do not need to diagnose the problem. You do need to limit the damage and keep everyone safe until a plumber arrives.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Shut off the water at the source</h3>
                      <p className="text-gray-700 text-sm">For a single fixture, turn the small valve under the sink or behind the toilet clockwise. For a burst pipe or a leak you cannot isolate, use the <Link href="/blog/how-to-shut-off-water-to-your-house" className="text-red-700 hover:text-red-800 font-medium">main shutoff valve for the house</Link>, usually near the water meter.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Cut power near standing water</h3>
                      <p className="text-gray-700 text-sm">If water is anywhere near outlets, appliances, or an electrical panel, stay clear of the area entirely rather than reaching in to unplug something yourself.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Stop using the affected fixture or line</h3>
                      <p className="text-gray-700 text-sm">If a water heater or supply line has failed, hold off on running hot water or additional fixtures nearby until the source is confirmed and shut off.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Move valuables out of the area</h3>
                      <p className="text-gray-700 text-sm">Documents, electronics, rugs, and stored items are worth relocating if you can do it without stepping into unsafe water.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Contain what you can</h3>
                      <p className="text-gray-700 text-sm">Buckets, towels, and a wet vac help with a clean water leak. Photograph the damage before you start cleanup, since clear photos help with repair planning and any insurance conversation later.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">6</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Clear a path for the plumber</h3>
                      <p className="text-gray-700 text-sm">A clear route to the water heater, basement, crawl space, utility room, or affected fixture lets the plumber start working the moment they arrive instead of navigating around boxes and furniture first.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Do not do this while you wait</h4>
                <p className="text-gray-700 text-sm">Do not open finished walls, use chemical drain treatments, or attempt a temporary pipe patch unless you are confident it is safe. A rushed fix can hide the real source of the problem and make the professional repair more invasive, not less. Stopping the water, avoiding hazards, and giving the plumber accurate details on the call is the most useful thing you can do.</p>
              </div>
            </section>

            {/* Dark CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Water actively spreading right now?</p>
                <p className="text-gray-300 text-sm">Call before it reaches finished flooring or drywall.</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
              </div>
            </div>

            {/* Stabilization */}
            <section id="stabilization" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Emergency Visits Start With Stabilization</h2>
              <p className="text-gray-700 mb-4">
                Most homeowners expect the first visit to fix everything on the spot, and often it does. But the priority on any emergency call is stopping the active damage: shutting off a damaged line, relieving pressure, isolating the failed section, or restoring basic function safely. Diagnostics come next, because the visible problem is not always the actual source. A ceiling stain often traces back to a bathroom supply line one floor up. A water heater that fails suddenly may point to age, sediment buildup, a bad pressure relief valve, or venting rather than the tank itself.
              </p>
              <p className="text-gray-700 mb-4">Stabilization on a typical call includes:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>Shutting off a damaged line or fixture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>Repairing or replacing a failed shutoff valve</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>Relieving pressure or clearing standing water safely</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>A temporary repair to hold until parts or a full replacement can be scheduled</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>A clear explanation of what is temporary and what is permanent before the plumber leaves</span>
                </li>
              </ul>
            </section>

            {/* What a call covers */}
            <section id="covers" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What a 24-Hour Emergency Call Covers</h2>
              <p className="text-gray-700 mb-6">
                Emergency plumbing at Illyrian centers on four categories: leak response, water heater failures, gas line safety concerns, and frozen or burst pipe repair. Which one applies changes the approach, the parts on the truck, and how long the visit takes.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Leak detection and pipe repair</h3>
                  <p className="text-gray-700">
                    Water travels along framing, behind drywall, and under flooring before it ever reaches a visible surface, so the wet spot rarely sits directly above or below the actual leak. Our <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">water leak detection</Link> technicians use moisture meters, pressure testing, and acoustic listening equipment to narrow the source down before opening anything, which keeps demolition limited to the area that actually needs it. The EPA&apos;s WaterSense program estimates the average household leak wastes more than 9,300 gallons of water a year (<a href="https://www.epa.gov/watersense/fix-leak-week" target="_blank" rel="noopener" className="text-red-700 hover:text-red-800 underline">source: EPA WaterSense</a>), and a slow drip that goes unnoticed for months is often the difference between a small repair and a full flooring replacement.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Water heater failures</h3>
                  <p className="text-gray-700">
                    A leaking tank in a finished basement, closet, or utility area can do real damage fast, and no hot water is its own emergency for households with young children, older adults, or medical needs. On an emergency call, a licensed plumber checks the tank, valves, and connections, shuts off the supply if the tank is actively leaking, and lays out repair versus <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800 font-medium">replacement</Link> options on the spot.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Frozen and burst pipes</h3>
                  <p className="text-gray-700">
                    Aging galvanized and polybutylene supply lines, common in Middlesex County homes built before the 1990s, are frequently the root cause behind winter burst-pipe calls. See our <Link href="/blog/frozen-pipes-prevention-repair" className="text-red-700 hover:text-red-800 font-medium">guide to preventing frozen pipes</Link> for the warning signs to catch before a pipe actually splits.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Gas line concerns</h3>
                  <p className="text-gray-700">
                    Any gas odor near an appliance or exposed plumbing needs immediate caution. Leave the area, avoid operating switches or appliances, and call from outside before reaching out for <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 font-medium">gas line repair</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Red CTA */}
            <div className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Dealing With One of These Right Now?</h2>
              <p className="text-red-100 mb-6">
                Illyrian&apos;s licensed plumbers are available 24/7 across Middlesex County. We give you upfront pricing before any work starts, day or night.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/services/emergency-plumbing" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  Emergency Plumbing Services
                </Link>
              </div>
            </div>

            {/* Choosing */}
            <section id="choosing" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to Choose a Reliable Emergency Plumber in NJ</h2>
              <p className="text-gray-700 mb-6">
                Speed matters in an emergency, but it should not be the only filter. A few checks take thirty seconds and save a lot of regret later:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span><strong>True 24/7 availability</strong>, not a call center that books the next available weekday slot.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span><strong>An active NJ Master Plumber license</strong>, which you can verify through the state&apos;s <a href="https://www.njconsumeraffairs.gov/" target="_blank" rel="noopener" className="text-red-700 hover:text-red-800 underline">Division of Consumer Affairs</a> look-up tool.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span><strong>Upfront pricing before work starts</strong>, not an estimate that shows up after the job is already done.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span><strong>Local experience with the area&apos;s housing stock</strong>, including older copper and galvanized supply lines, finished basements, and tight lot access.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span><strong>Residential and commercial capability</strong>, if the property is mixed-use or you manage more than one building.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span><strong>A real person answering the phone at 2 a.m.</strong>, not voicemail with a callback promise.</span>
                </li>
              </ul>
            </section>

            {/* Local relevance */}
            <section id="local" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Local Experience Matters in Middlesex County</h2>
              <p className="text-gray-700">
                New Jersey plumbing emergencies look different from one town to the next. A 1960s split-level in <Link href="/emergency-plumber-east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick</Link>, a converted multi-family in <Link href="/emergency-plumber-edison" className="text-red-700 hover:text-red-800 font-medium">Edison</Link>, and a newer build in Monroe Township each have different supply-line materials, shutoff locations, and access challenges. Illyrian dispatches across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick, with an average response window of 30 to 60 minutes depending on location, weather, and current call volume. When you call, having your town, a description of the issue, and whether water or gas is still active ready to go gets a plumber moving faster than working through it on the phone.
              </p>
            </section>

            {/* After the emergency */}
            <section id="after" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">After the Emergency</h2>
              <p className="text-gray-700 mb-4">
                Once the immediate issue is under control, it is worth understanding the follow-up plan before the plumber leaves. Useful questions include:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>What actually failed, and why?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>Is the repair temporary or permanent?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>Are there other aging pipes or fixtures nearby worth replacing now?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>Is the water heater still safe to use?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>What would help prevent this from happening again?</span>
                </li>
              </ul>
              <p className="text-gray-700">
                A plumbing emergency is stressful, but it often reveals a weak point before it becomes a repeat problem. Getting a straight answer to these questions turns a one-time fix into a longer-term plan.
              </p>
            </section>

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
                <Link href="/blog/frozen-pipes-prevention-repair" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Frozen Pipes: Prevention and Repair</h3>
                    <p className="text-sm text-gray-600">The warning signs to catch before a frozen pipe becomes a burst-pipe emergency.</p>
                  </div>
                </Link>
                <Link href="/blog/basement-flood-prevention-checklist" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Basement Flood Prevention Checklist</h3>
                    <p className="text-sm text-gray-600">Steps to reduce the odds of a basement emergency before storm season.</p>
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
                <p className="text-lg font-bold text-gray-900 mb-1">Need a Plumber Now?</p>
                <p className="text-gray-600 text-sm mb-4">24/7 emergency response across Middlesex County.</p>
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
                  <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                  <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                  <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Repair</Link></li>
                </ul>
                <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
              </div>
              {/* Related Blogs */}
              <div className="bg-white rounded-xl shadow-md p-5">
                <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/blog/how-to-shut-off-water-to-your-house" className="text-gray-700 hover:text-red-700 transition leading-snug block">How to Shut Off Water to Your House</Link></li>
                  <li><Link href="/blog/frozen-pipes-prevention-repair" className="text-gray-700 hover:text-red-700 transition leading-snug block">Frozen Pipes: Prevention and Repair</Link></li>
                  <li><Link href="/blog/common-water-heater-problems" className="text-gray-700 hover:text-red-700 transition leading-snug block">Common Water Heater Problems</Link></li>
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
