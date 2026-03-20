import { Metadata } from "next";

import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Water Pipe Noises: 8 Causes and How to Fix Them",
  description: "Hear banging, whistling, or humming pipes? Learn 8 common water pipe noises, their causes, and proven fixes. Expert NJ plumber guide for Middlesex County.",
  keywords: [
    "water pipe noise",
    "pipes making noise",
    "banging pipes",
    "water hammer",
    "pipes knocking",
    "noisy pipes",
    "water pipes humming",
    "pipes rattling",
    "whistling pipes",
    "loud pipes when water runs",
    "water pipe vibration",
    "pipes banging when water turned off",
    "water hammer arrestor",
    "how to fix noisy pipes",
    "pipe noise when flushing toilet",
    "gurgling drain pipes",
    "pipes making noise in walls",
  ],
  openGraph: {
    title: "Water Pipe Noises: 8 Causes and How to Fix Them",
    description: "Hear banging, whistling, or humming pipes? Learn 8 common water pipe noises, their causes, and proven fixes from licensed NJ plumbers.",
    type: "article",
    publishedTime: "2026-03-19T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function WaterPipeNoisesPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Water Pipe Noises: 8 Causes and How to Fix Them",
    description: "Learn about 8 common water pipe noises, their causes, and proven fixes. Expert guide from licensed Middlesex County NJ plumbers.",
    image: "https://www.illyrianplumber.com/images/shower-fixture-installation-nj.jpg",
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
    datePublished: "2026-03-19T08:00:00.000Z",
    dateModified: "2026-03-19T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/water-pipe-noises-causes-fixes",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why do my pipes bang when I turn off the water?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Banging pipes when you turn off water is called water hammer. It happens when fast-moving water suddenly stops, creating a shockwave in your pipes. The fix is installing a water hammer arrestor, securing loose pipes, or adjusting your water pressure to below 80 PSI.",
        },
      },
      {
        "@type": "Question",
        name: "Is water hammer dangerous?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, water hammer can be dangerous if left untreated. The repeated shockwaves can damage pipe joints, loosen fittings, and eventually cause leaks or burst pipes. It can also damage appliances like washing machines and dishwashers. Installing a water hammer arrestor is a relatively inexpensive fix that prevents costly damage.",
        },
      },
      {
        "@type": "Question",
        name: "Why are my pipes humming when no water is running?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Humming pipes when no water is running usually indicate excessively high water pressure, typically above 80 PSI. The pressure causes pipes to vibrate at an audible frequency. A plumber can test your water pressure and install or adjust a pressure reducing valve (PRV) to bring it into the safe 40-60 PSI range.",
        },
      },
      {
        "@type": "Question",
        name: "What causes whistling sounds in water pipes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whistling pipes are usually caused by a worn washer or valve seat in a faucet, a partially closed valve restricting water flow, or excessively high water pressure. The restricted flow creates turbulence that produces a whistling sound. Replacing worn washers or adjusting the valve typically fixes the issue.",
        },
      },
      {
        "@type": "Question",
        name: "Why do my pipes make noise when I flush the toilet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pipe noise when flushing a toilet is commonly caused by water hammer from the fill valve closing abruptly, a faulty fill valve that vibrates, or high water pressure. Try adjusting the fill valve first. If that does not work, installing a water hammer arrestor near the toilet supply line usually resolves the noise.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to fix noisy pipes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost to fix noisy pipes ranges from $75 to $600+ depending on the cause. A water hammer arrestor installation costs $75-$200. Securing loose pipes runs $100-$300. A pressure reducing valve installation costs $200-$400. More complex issues like repiping corroded sections can cost $500-$2,000+.",
        },
      },
      {
        "@type": "Question",
        name: "Can I fix water hammer myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some water hammer fixes are DIY-friendly. You can try draining your plumbing system by shutting off the main water valve, opening all faucets, then closing them and turning the water back on. This recharges air chambers. You can also install screw-on water hammer arrestors at washing machine connections. However, if the problem persists, a licensed plumber should evaluate your system.",
        },
      },
      {
        "@type": "Question",
        name: "Why do my pipes make a gurgling sound?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gurgling pipes indicate a venting problem in your drain system. Plumbing vents allow air into the drain pipes so water flows smoothly. When vents are blocked by debris, bird nests, or ice, air gets pulled through the water in your P-traps, creating a gurgling noise. A plumber can inspect and clear your vent stack to fix this issue.",
        },
      },
    ],
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

      <article className="bg-white">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Troubleshooting</span>
                <time dateTime="2026-03-19">March 19, 2026</time>
                <span>15 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Water Pipe Noises: 8 Common Causes and How to Fix Them
              </h1>
              <p className="text-xl text-gray-300">
                Banging, whistling, humming, or rattling pipes? Learn what causes each type of water pipe noise and the proven fixes to silence them for good.
              </p>
            </div>
          </div>
        </header>

        {/* Author Box */}
        <div className="border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-3xl mx-auto flex items-center gap-4">
              <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                IG
              </div>
              <div>
                <p className="font-semibold text-gray-900">Written by Illyrian Plumber</p>
                <p className="text-sm text-gray-600">Licensed Master Plumbers serving Middlesex County, NJ since 2010</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                If your water pipes are making noise, you are not alone - and in many cases, the sounds your plumbing makes can tell you exactly what is wrong. Whether you need a <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link> or a simple valve adjustment, understanding what different pipe noises mean is the first step toward fixing them. Many homeowners also notice that <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:text-red-800">low water pressure</Link> accompanies noisy pipes, which can point to related underlying issues.
              </p>
              <p>
                From banging and knocking to whistling and humming, each type of water pipe noise has a specific cause and a proven solution. In this guide, we will walk you through the eight most common pipe noises we encounter in Middlesex County homes, explain why they happen, and show you how to fix them - whether it is a quick DIY repair or a job that requires a licensed plumber.
              </p>
              <p>
                As plumbers who have worked inside hundreds of homes across East Brunswick, Edison, Old Bridge, and surrounding towns, we have diagnosed and repaired every type of noisy pipe imaginable. Many of the homes in our service area were built in the 1960s through 1990s, with copper, galvanized steel, or early PVC piping that is now reaching an age where pipe noises become increasingly common.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
              <ul className="space-y-2">
                <li><a href="#water-hammer" className="text-red-700 hover:text-red-800">1. Water Hammer (Banging Pipes)</a></li>
                <li><a href="#rattling-pipes" className="text-red-700 hover:text-red-800">2. Rattling and Vibrating Pipes</a></li>
                <li><a href="#whistling-pipes" className="text-red-700 hover:text-red-800">3. Whistling Pipes</a></li>
                <li><a href="#humming-pipes" className="text-red-700 hover:text-red-800">4. Humming Pipes</a></li>
                <li><a href="#gurgling-drains" className="text-red-700 hover:text-red-800">5. Gurgling Drains</a></li>
                <li><a href="#creaking-ticking" className="text-red-700 hover:text-red-800">6. Creaking and Ticking Pipes</a></li>
                <li><a href="#screeching-pipes" className="text-red-700 hover:text-red-800">7. Screeching and Squealing Pipes</a></li>
                <li><a href="#bubbling-walls" className="text-red-700 hover:text-red-800">8. Bubbling Sounds in Walls</a></li>
                <li><a href="#diagnostic-table" className="text-red-700 hover:text-red-800">Quick Diagnostic Table</a></li>
                <li><a href="#diy-vs-plumber" className="text-red-700 hover:text-red-800">When to DIY vs Call a Plumber</a></li>
                <li><a href="#repair-costs" className="text-red-700 hover:text-red-800">Cost of Pipe Noise Repairs</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Middlesex County Pipe Noise Issues</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Section 1: Water Hammer */}
            <section id="water-hammer" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">1. Water Hammer - Banging Pipes When a Valve Closes</h2>

              <p className="text-gray-700 mb-4">
                Water hammer is the most common and most recognizable pipe noise. It sounds like a loud bang or series of bangs that happen immediately after you shut off a faucet, flush a toilet, or when your washing machine or dishwasher changes cycles. The technical term is hydraulic shock, and it occurs when fast-moving water suddenly stops or changes direction inside your pipes.
              </p>

              <p className="text-gray-700 mb-4">
                Think of it like running full speed into a wall. The water was moving through your pipes at high velocity, and when a valve closes abruptly, all that momentum has to go somewhere. The result is a shockwave that reverberates through your plumbing system, producing that characteristic banging sound.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">What Causes Water Hammer</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Quick-closing solenoid valves in washing machines and dishwashers</li>
                <li>Single-lever faucets that shut off water flow instantly</li>
                <li>High water pressure (above 80 PSI) amplifying the shockwave</li>
                <li>Waterlogged air chambers that no longer absorb shock</li>
                <li>Loose pipes that allow the shockwave to create movement and noise</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Fix Water Hammer</h3>
              <p className="text-gray-700 mb-4">
                The most effective solution is installing a water hammer arrestor. These devices contain a sealed air chamber and piston that absorbs the shockwave when water suddenly stops. They install directly on the water supply line near the fixture causing the problem - most commonly near washing machine connections, dishwashers, and kitchen faucets.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
                <p className="font-bold text-gray-900 mb-2">DIY Fix: Recharge Your Air Chambers</p>
                <p className="text-gray-700 text-sm">
                  Before buying a water hammer arrestor, try this: Shut off your main water supply valve. Open all faucets in your home (hot and cold) and flush all toilets. Let all the water drain out completely. Then close all faucets and turn the main valve back on slowly. This recharges the air cushions in your plumbing system and often resolves mild water hammer.
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                If recharging air chambers does not work, a licensed plumber can install mechanical water hammer arrestors at the problem locations. We typically install them at the washing machine supply lines, under kitchen sinks, and near dishwasher connections. In severe cases, a pressure reducing valve (PRV) may also be needed to bring your water pressure into the safe 40-60 PSI range.
              </p>
            </section>

            {/* Section 2: Rattling and Vibrating Pipes */}
            <section id="rattling-pipes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">2. Rattling and Vibrating Pipes - Loose Pipe Supports</h2>

              <p className="text-gray-700 mb-4">
                If your pipes rattle, vibrate, or clatter when water is running, the cause is almost always loose pipes. Water flowing through pipes creates natural vibration, and when pipes are not properly secured to joists, walls, or other structural members, they shake against surrounding surfaces and produce a rattling noise.
              </p>

              <p className="text-gray-700 mb-4">
                This is particularly common in older homes where original pipe straps have corroded or loosened over time. We see this frequently in Middlesex County homes built in the 1960s and 1970s, where the original galvanized pipe hangers have deteriorated after decades of use.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">What Causes Pipe Rattling and Vibration</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Missing or corroded pipe straps and hangers</li>
                <li>Pipes running through oversized holes in joists or studs</li>
                <li>Thermal expansion causing pipes to shift in their supports</li>
                <li>High water pressure creating excessive pipe vibration</li>
                <li>Water velocity that is too high for the pipe diameter</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Fix Rattling Pipes</h3>
              <p className="text-gray-700 mb-4">
                The fix for rattling pipes is straightforward: secure them. If you can access the noisy pipes (in a basement, crawlspace, or exposed ceiling), add pipe straps or cushioned clamps every 4-6 feet along horizontal runs and at every floor for vertical runs. Use cushioned or padded pipe clamps rather than bare metal straps, which can create additional noise and cause wear on the pipe surface.
              </p>

              <p className="text-gray-700 mb-4">
                For pipes running through joists or studs, use foam pipe insulation or rubber grommets in the holes to prevent the pipe from rattling against the wood. This is especially important for copper pipes, which expand and contract with temperature changes and need room to move without creating noise.
              </p>

              <p className="text-gray-700 mb-4">
                If the rattling pipes are inside finished walls where you cannot access them, a plumber can often reduce the noise by lowering water pressure with a PRV or by installing pipe insulation at accessible points to dampen vibration before it reaches the hidden sections.
              </p>
            </section>

            {/* Section 3: Whistling Pipes */}
            <section id="whistling-pipes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">3. Whistling Pipes - Worn Washers and Restricted Flow</h2>

              <p className="text-gray-700 mb-4">
                A whistling or whining sound from your pipes typically indicates that water is being forced through a restricted opening. Just like blowing air across a bottle opening creates a whistle, water forced through a narrow gap in your plumbing creates a similar high-pitched sound. The whistling usually occurs when a specific fixture is turned on and stops when that fixture is closed.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">What Causes Whistling Pipes</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Worn washers or valve seats in faucets creating turbulent flow</li>
                <li>Partially closed shut-off valves restricting water</li>
                <li>Mineral deposits inside pipes narrowing the passage</li>
                <li>Water pressure that is too high (above 80 PSI)</li>
                <li>Undersized pipes creating high-velocity flow</li>
                <li>A worn toilet fill valve that vibrates as it opens</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Fix Whistling Pipes</h3>
              <p className="text-gray-700 mb-4">
                Start by identifying which fixture triggers the whistle. If the whistling only happens when a specific faucet is on, the problem is likely a worn washer or valve seat in that faucet. Replacing the washer is an inexpensive fix that any homeowner can do. For compression faucets, shut off the water supply, remove the handle and packing nut, pull out the stem, and replace the rubber washer at the bottom.
              </p>

              <p className="text-gray-700 mb-4">
                If the whistle occurs throughout the house whenever any fixture is used, the issue is likely high water pressure or mineral buildup in your main supply line. A plumber can test your water pressure and install or adjust a pressure reducing valve. For mineral buildup, the affected section of pipe may need to be replaced - this is common in older galvanized steel pipes that have corroded internally over decades.
              </p>

              <p className="text-gray-700 mb-4">
                Check all shut-off valves under sinks and behind toilets to make sure they are fully open. A partially closed valve is one of the most common causes of whistling pipes, and the fix is as simple as turning the valve to the fully open position.
              </p>
            </section>

            {/* Dark CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Noisy pipes keeping you up at night?</p>
                <p className="text-gray-300 text-sm">We diagnose and fix all types of pipe noise - same day service available</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti: {BUSINESS_INFO.phone}</a>
                <a href={BUSINESS_INFO.phone2Link} className="border border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition text-sm whitespace-nowrap">Call Danny: {BUSINESS_INFO.phone2}</a>
              </div>
            </div>

            {/* Service Card */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Related Service: Whole House Repiping</p>
                <p className="text-sm text-gray-600 mb-2">If your pipes are old, corroded, or making constant noise, a whole house repipe with modern PEX or copper eliminates noise problems permanently. We handle everything from permits to drywall repair.</p>
                <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            {/* Section 4: Humming Pipes */}
            <section id="humming-pipes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">4. Humming Pipes - Water Pressure Too High</h2>

              <p className="text-gray-700 mb-4">
                A constant humming or droning sound from your pipes, even when no water is being used, is a classic sign of water pressure that is too high. When your water pressure exceeds 80 PSI, the force of the water against the pipe walls causes them to vibrate at an audible frequency. The humming can be heard throughout the house and is often most noticeable at night when background noise is minimal.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">What Causes Humming Pipes</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Municipal water pressure above 80 PSI (common in some Middlesex County areas)</li>
                <li>A failed or missing pressure reducing valve (PRV)</li>
                <li>Thermal expansion in a closed plumbing system with no expansion tank</li>
                <li>A malfunctioning recirculation pump vibrating through pipes</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Fix Humming Pipes</h3>
              <p className="text-gray-700 mb-4">
                The first step is testing your water pressure with a pressure gauge (available at any hardware store for under $15). Attach it to a hose bib and turn the water on. If the reading is above 80 PSI, you need a pressure reducing valve. If you already have a PRV, it may need adjustment or replacement - they typically last 7-12 years.
              </p>

              <p className="text-gray-700 mb-4">
                A licensed plumber can install a PRV on your main water line, typically near the water meter. The valve reduces incoming municipal pressure to a safe and comfortable 50-60 PSI. This not only eliminates the humming noise but also protects your pipes, fittings, appliances, and water heater from damage caused by excessive pressure. High water pressure is one of the leading causes of premature plumbing failures.
              </p>

              <p className="text-gray-700 mb-4">
                If you have a hot water recirculation system and the humming is more pronounced on the hot water side, the recirculation pump may be the culprit. Pumps can develop bearing wear over time that causes vibration. Isolating the pump (by briefly switching it off) can confirm whether it is the source of the noise.
              </p>
            </section>

            {/* Section 5: Gurgling Drains */}
            <section id="gurgling-drains" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">5. Gurgling Drains - Venting Issues</h2>

              <p className="text-gray-700 mb-4">
                Gurgling sounds coming from drains - especially when a different fixture is being used - point to a venting problem in your drain-waste-vent (DWV) system. Every drain in your home connects to a vent pipe that goes up through your roof. These vents allow air to enter the drain system so water flows smoothly by gravity. When a vent is blocked or improperly installed, the draining water creates a vacuum that pulls air through the water in nearby P-traps, producing a gurgling noise.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">What Causes Gurgling Drains</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Blocked vent stack (leaves, bird nests, ice in winter)</li>
                <li>Improper venting during original construction or a remodel</li>
                <li>Partial drain blockage creating negative pressure</li>
                <li>P-trap that is too far from its vent connection</li>
                <li>Shared vent between fixtures that is undersized</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Fix Gurgling Drains</h3>
              <p className="text-gray-700 mb-4">
                Start by checking whether the vent stack on your roof is clear. If you can safely access your roof, look for debris, bird nests, or in winter, ice caps that block the vent opening. Clearing the obstruction often resolves the gurgling immediately.
              </p>

              <p className="text-gray-700 mb-4">
                If the vent is clear, the issue may be a partial drain blockage or an improperly sized or configured vent system. A plumber can use a camera inspection to check the drain and vent lines for blockages, and can install an air admittance valve (AAV) in situations where running a new vent pipe to the roof is not practical. AAVs are mechanical vents that allow air in but prevent sewer gas from escaping.
              </p>

              <p className="text-gray-700 mb-4">
                Persistent gurgling from multiple drains simultaneously can indicate a main sewer line issue. If the gurgling is accompanied by slow drains throughout the house or sewage odors, have your main sewer line inspected as soon as possible to prevent a backup.
              </p>
            </section>

            {/* Section 6: Creaking and Ticking */}
            <section id="creaking-ticking" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">6. Creaking and Ticking Pipes - Thermal Expansion</h2>

              <p className="text-gray-700 mb-4">
                If you hear creaking, ticking, or clicking sounds from your pipes - particularly after running hot water - the cause is thermal expansion. Copper pipes expand when heated by hot water and contract when they cool down. When these expanding pipes rub against wood joists, studs, pipe straps, or other surfaces, they produce a creaking or ticking sound that can be quite noticeable, especially in quiet rooms.
              </p>

              <p className="text-gray-700 mb-4">
                This is one of the most common pipe noises we encounter in Middlesex County homes, and while it sounds alarming, it is generally harmless. Copper pipes expand approximately 1 inch for every 100 feet of pipe per 100 degrees of temperature change. In a typical hot water run, this expansion is small but enough to create audible friction against tight supports.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">What Causes Creaking and Ticking</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Copper hot water pipes expanding against wood framing</li>
                <li>CPVC pipes (which expand more than copper) rubbing in tight spaces</li>
                <li>Pipe straps that are too tight, preventing natural expansion movement</li>
                <li>Hot water pipes running through fire-stop foam that grips the pipe</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Fix Creaking Pipes</h3>
              <p className="text-gray-700 mb-4">
                The goal is to allow the pipes to expand and contract freely without rubbing against surfaces. Where accessible, replace rigid metal pipe straps with cushioned or plastic clamps that allow slight movement. Add foam insulation around pipes where they pass through joists, walls, or other tight spaces. This creates a buffer that absorbs the expansion movement and eliminates the friction that causes the sound.
              </p>

              <p className="text-gray-700 mb-4">
                Lowering your water heater temperature by a few degrees can also reduce the amount of expansion and minimize the noise. However, never set your water heater below 120 degrees Fahrenheit, as lower temperatures allow Legionella bacteria to grow in the tank.
              </p>
            </section>

            {/* Section 7: Screeching and Squealing */}
            <section id="screeching-pipes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">7. Screeching and Squealing Pipes - Worn Valves</h2>

              <p className="text-gray-700 mb-4">
                A high-pitched screeching or squealing sound when you turn on a faucet is typically caused by a worn or defective valve. The rubber components inside valves deteriorate over time, and as water forces past the worn parts, it creates a high-frequency vibration that sounds like a screech or squeal. This is different from whistling, which is usually a softer, more constant tone - screeching is sharp, loud, and hard to ignore.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">What Causes Screeching Pipes</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Worn gate valve or globe valve that vibrates when partially open</li>
                <li>A deteriorating faucet cartridge or stem washer</li>
                <li>Worn toilet fill valve (ballcock) that screeches during refill</li>
                <li>Defective pressure reducing valve creating turbulence</li>
                <li>A water heater inlet valve that is not fully open</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Fix Screeching Pipes</h3>
              <p className="text-gray-700 mb-4">
                Identify which fixture or valve triggers the screech by turning fixtures on one at a time. Once identified, the fix usually involves replacing the worn valve component. For faucets, this means replacing the cartridge or stem assembly. For toilets, replace the fill valve - this is a straightforward DIY job that costs under $15 in parts and takes about 20 minutes.
              </p>

              <p className="text-gray-700 mb-4">
                If the screeching comes from a shut-off valve under a sink or behind a toilet, the valve itself may need replacement. Older gate valves are particularly prone to screeching as the gate mechanism wears. We recommend replacing them with quarter-turn ball valves, which are more reliable and less likely to develop noise issues over time.
              </p>

              <p className="text-gray-700 mb-4">
                If you cannot pinpoint the source of the screeching, or if it seems to come from inside the walls, the problem may be a main supply valve or the PRV. These require a licensed plumber to access and replace, as they involve shutting off your water supply and working on pressurized lines.
              </p>
            </section>

            {/* Section 8: Bubbling Sounds */}
            <section id="bubbling-walls" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">8. Bubbling Sounds in Walls - Possible Leak</h2>

              <p className="text-gray-700 mb-4">
                Bubbling, dripping, or running water sounds coming from inside your walls when no fixtures are on is one of the most concerning pipe noises you can hear. It often indicates an active water leak inside the wall cavity. The sound is created by water escaping from a pipe and dripping or running down the inside of the wall, and should be treated as an urgent issue.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">What Causes Bubbling Sounds in Walls</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>A pinhole leak in a copper pipe (caused by internal corrosion)</li>
                <li>A failed solder joint or fitting connection</li>
                <li>Frozen pipe that has thawed and cracked</li>
                <li>Corroded galvanized pipe that has developed a leak</li>
                <li>A supply line to a fixture that has come loose or cracked</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Fix Bubbling Sounds in Walls</h3>
              <p className="text-gray-700 mb-4">
                If you hear bubbling or running water in a wall with no fixtures on, act quickly. First, check your water meter - if the dial is spinning or the flow indicator is moving, you have an active leak. Shut off your main water supply valve immediately to prevent further water damage.
              </p>

              <p className="text-gray-700 mb-4">
                This is not a DIY repair. A licensed plumber with leak detection equipment can pinpoint the exact location of the leak without tearing open your entire wall. We use acoustic leak detection and thermal imaging to find hidden leaks with minimal disruption to your home. Once located, the repair may involve replacing a section of pipe, re-soldering a joint, or in cases of extensive corrosion, recommending a partial or full repiping.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
                <p className="font-bold text-red-800 mb-2">Warning: Do Not Ignore This Sound</p>
                <p className="text-gray-700 text-sm">
                  A hidden water leak can cause thousands of dollars in damage to your home, including mold growth, rotted framing, damaged drywall, and ruined flooring. The average hidden leak wastes 10,000+ gallons of water per year and can compromise your home&apos;s structural integrity. If you hear water sounds in your walls, call a plumber immediately.
                </p>
              </div>
            </section>

            {/* Diagnostic Table */}
            <section id="diagnostic-table" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Quick Diagnostic Table: Identify Your Pipe Noise</h2>

              <p className="text-gray-700 mb-6">
                Use this table to quickly identify the type of noise your pipes are making, when it typically occurs, the most likely cause, and the recommended fix.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Noise Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">When It Happens</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Likely Cause</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Fix</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-medium">Banging</td>
                      <td className="py-3 px-4">After shutting off water</td>
                      <td className="py-3 px-4">Water hammer</td>
                      <td className="py-3 px-4">Install hammer arrestor, lower pressure</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-medium">Rattling</td>
                      <td className="py-3 px-4">While water is running</td>
                      <td className="py-3 px-4">Loose pipe supports</td>
                      <td className="py-3 px-4">Secure pipes with cushioned clamps</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-medium">Whistling</td>
                      <td className="py-3 px-4">When specific fixture is on</td>
                      <td className="py-3 px-4">Worn washer, high pressure</td>
                      <td className="py-3 px-4">Replace washer, adjust pressure</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-medium">Humming</td>
                      <td className="py-3 px-4">Constant, even when idle</td>
                      <td className="py-3 px-4">Excessive water pressure</td>
                      <td className="py-3 px-4">Install or adjust PRV</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-medium">Gurgling</td>
                      <td className="py-3 px-4">When draining water</td>
                      <td className="py-3 px-4">Blocked or missing vent</td>
                      <td className="py-3 px-4">Clear vent stack, install AAV</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-medium">Creaking/Ticking</td>
                      <td className="py-3 px-4">After running hot water</td>
                      <td className="py-3 px-4">Thermal expansion</td>
                      <td className="py-3 px-4">Cushion pipes, add insulation</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-medium">Screeching</td>
                      <td className="py-3 px-4">When opening a valve</td>
                      <td className="py-3 px-4">Worn valve or cartridge</td>
                      <td className="py-3 px-4">Replace valve or cartridge</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-medium">Bubbling in walls</td>
                      <td className="py-3 px-4">Constant, no fixtures on</td>
                      <td className="py-3 px-4">Hidden water leak</td>
                      <td className="py-3 px-4">Call plumber immediately</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* DIY vs Plumber */}
            <section id="diy-vs-plumber" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to DIY vs When to Call a Plumber</h2>

              <p className="text-gray-700 mb-6">
                Some pipe noise fixes are straightforward enough for a handy homeowner, while others require professional tools, expertise, or involve safety risks. Here is how to know which repairs you can handle and which ones warrant a call to a licensed plumber.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <p className="text-lg font-bold text-green-800 mb-4">Safe to DIY</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">&#10003;</span>
                      <span>Recharging air chambers (drain and refill system)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">&#10003;</span>
                      <span>Installing screw-on water hammer arrestors at washing machine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">&#10003;</span>
                      <span>Replacing a faucet washer or cartridge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">&#10003;</span>
                      <span>Replacing a toilet fill valve</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">&#10003;</span>
                      <span>Adding foam insulation to exposed pipes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">&#10003;</span>
                      <span>Securing loose pipes with clamps in accessible areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">&#10003;</span>
                      <span>Opening partially closed shut-off valves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">&#10003;</span>
                      <span>Testing water pressure with a gauge</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <p className="text-lg font-bold text-red-800 mb-4">Call a Licensed Plumber</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">&#10007;</span>
                      <span>Installing or adjusting a pressure reducing valve (PRV)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">&#10007;</span>
                      <span>Hidden leaks (water sounds in walls)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">&#10007;</span>
                      <span>Vent pipe repairs or installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">&#10007;</span>
                      <span>Replacing main shut-off valves or supply valves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">&#10007;</span>
                      <span>Pipe noises in inaccessible walls or ceilings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">&#10007;</span>
                      <span>Repiping corroded sections of pipe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">&#10007;</span>
                      <span>Main sewer line gurgling or backups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">&#10007;</span>
                      <span>Any work involving gas lines near plumbing</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-4">
                <p className="font-bold text-gray-900 mb-2">When in Doubt, Call a Professional</p>
                <p className="text-gray-700 text-sm">
                  If you have attempted a DIY fix and the noise persists, or if you are unsure about the cause, a professional diagnosis is always worthwhile. Persistent pipe noises can indicate underlying problems that, if ignored, lead to burst pipes, water damage, or costly emergency repairs. A diagnostic visit from a licensed plumber typically costs $75-$150 and can save you thousands in potential damage.
                </p>
              </div>
            </section>

            {/* Cost Table */}
            <section id="repair-costs" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Cost of Pipe Noise Repairs</h2>

              <p className="text-gray-700 mb-6">
                The cost to fix noisy pipes varies widely depending on the cause and complexity of the repair. Here are typical costs for the most common pipe noise repairs in the Middlesex County area.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Repair</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">DIY Cost</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Professional Cost</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Difficulty</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-medium">Water hammer arrestor</td>
                      <td className="py-3 px-4">$10-$30</td>
                      <td className="py-3 px-4">$75-$200</td>
                      <td className="py-3 px-4">Easy</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-medium">Faucet washer replacement</td>
                      <td className="py-3 px-4">$2-$10</td>
                      <td className="py-3 px-4">$75-$150</td>
                      <td className="py-3 px-4">Easy</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-medium">Toilet fill valve replacement</td>
                      <td className="py-3 px-4">$8-$15</td>
                      <td className="py-3 px-4">$75-$150</td>
                      <td className="py-3 px-4">Easy</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-medium">Securing loose pipes</td>
                      <td className="py-3 px-4">$10-$40</td>
                      <td className="py-3 px-4">$100-$300</td>
                      <td className="py-3 px-4">Easy-Moderate</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-medium">Pipe insulation</td>
                      <td className="py-3 px-4">$15-$50</td>
                      <td className="py-3 px-4">$100-$250</td>
                      <td className="py-3 px-4">Easy</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-medium">PRV installation/replacement</td>
                      <td className="py-3 px-4">Not recommended</td>
                      <td className="py-3 px-4">$200-$400</td>
                      <td className="py-3 px-4">Professional</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-medium">Vent pipe repair</td>
                      <td className="py-3 px-4">Not recommended</td>
                      <td className="py-3 px-4">$150-$500</td>
                      <td className="py-3 px-4">Professional</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-medium">Shut-off valve replacement</td>
                      <td className="py-3 px-4">Not recommended</td>
                      <td className="py-3 px-4">$100-$300</td>
                      <td className="py-3 px-4">Professional</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-medium">Hidden leak repair</td>
                      <td className="py-3 px-4">Not recommended</td>
                      <td className="py-3 px-4">$200-$600+</td>
                      <td className="py-3 px-4">Professional</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-medium">Partial repiping (corroded section)</td>
                      <td className="py-3 px-4">Not recommended</td>
                      <td className="py-3 px-4">$500-$2,000+</td>
                      <td className="py-3 px-4">Professional</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-medium">Whole house repiping</td>
                      <td className="py-3 px-4">Not recommended</td>
                      <td className="py-3 px-4">$4,000-$15,000+</td>
                      <td className="py-3 px-4">Professional</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 mt-3">
                Costs are estimates for the Middlesex County, NJ area and may vary based on the specific situation, accessibility of pipes, and materials used. Contact us for a free estimate on your specific repair.
              </p>
            </section>

            {/* Red CTA */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Need help with noisy pipes?</p>
              <p className="text-red-100 text-sm mb-4">We provide free estimates for all pipe noise repairs. Our licensed plumbers diagnose the exact cause and give you a fixed-price quote before any work begins.</p>
              <div className="flex flex-wrap gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">
                  Call Niti: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">
                  Call Danny: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Blog Card */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Related Reading: Why Is My Water Pressure Low?</p>
                <p className="text-sm text-gray-600 mb-2">Low water pressure often accompanies noisy pipes and can share the same root causes. Learn how to diagnose and fix low water pressure in your home.</p>
                <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:text-red-800 font-medium text-sm">Read the Guide</Link>
              </div>
            </div>

            {/* Middlesex County Section */}
            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Pipe Noise Issues in Middlesex County Homes</h2>

              <p className="text-gray-700 mb-4">
                Middlesex County has a unique mix of housing stock that makes certain pipe noise issues more prevalent than in other areas. Many neighborhoods in East Brunswick, Edison, Old Bridge, and Sayreville were developed in the 1960s, 1970s, and 1980s, with plumbing systems that are now 40 to 60+ years old. Understanding the common pipe materials in your home helps identify and address noise issues more effectively.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Copper Pipes (1950s - Present)</h3>
              <p className="text-gray-700 mb-4">
                Copper is the most common supply pipe material in Middlesex County homes. While durable, copper pipes are prone to thermal expansion noise (creaking and ticking), water hammer (due to their rigid nature), and pinhole leaks as they age. Homes with copper pipes over 40 years old are at increased risk for internal corrosion, which can cause whistling due to reduced pipe diameter and eventually lead to leaks that create bubbling sounds in walls.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Galvanized Steel Pipes (Pre-1970s)</h3>
              <p className="text-gray-700 mb-4">
                Older homes in Edison, North Brunswick, and Monroe Township may still have original galvanized steel supply pipes. These pipes corrode from the inside out, gradually reducing water flow and creating whistling, humming, and reduced pressure. If your home has galvanized pipes and you are experiencing multiple types of pipe noise, repiping with PEX or copper is often the most cost-effective long-term solution.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">PEX Pipes (1990s - Present)</h3>
              <p className="text-gray-700 mb-4">
                Newer homes and recently repiped homes in South Brunswick, Monroe Township, and newer developments often use PEX (cross-linked polyethylene) tubing. PEX is naturally quieter than copper or galvanized because it absorbs vibration and expands with temperature changes without making noise. However, PEX systems can still experience water hammer, especially at washing machine and dishwasher connections, and the manifold connections can develop noise if not properly secured.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Water Pressure in Middlesex County</h3>
              <p className="text-gray-700 mb-4">
                Municipal water pressure in parts of Middlesex County can run high, particularly in areas served by the Middlesex Water Company. We frequently measure pressures of 80-100+ PSI in homes that do not have a functioning pressure reducing valve. This elevated pressure is a leading cause of humming pipes, amplified water hammer, and premature failure of plumbing fixtures and appliances. If you are experiencing any type of pipe noise, checking your water pressure should be the first diagnostic step.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="font-bold text-gray-900 mb-2">Free Pipe Noise Inspection</p>
                <p className="text-gray-700 text-sm">
                  Not sure what type of pipes you have or what is causing the noise? We offer free inspections for homeowners in East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. We will identify your pipe material, test your water pressure, and diagnose the exact source of the noise - no obligation.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Pipe Noises</h2>

              <div className="space-y-3">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why do my pipes bang when I turn off the water?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Banging pipes when you turn off water is called water hammer. It happens when fast-moving water suddenly stops, creating a shockwave in your pipes. The fix is installing a water hammer arrestor, securing loose pipes, or adjusting your water pressure to below 80 PSI. You can also try draining and refilling your plumbing system to recharge the air chambers.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Is water hammer dangerous?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Yes, water hammer can be dangerous if left untreated. The repeated shockwaves can damage pipe joints, loosen fittings, and eventually cause leaks or burst pipes. It can also damage appliances like washing machines and dishwashers. Installing a water hammer arrestor is a relatively inexpensive fix that prevents costly damage down the line.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why are my pipes humming when no water is running?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Humming pipes when no water is running usually indicate excessively high water pressure, typically above 80 PSI. The pressure causes pipes to vibrate at an audible frequency. A plumber can test your water pressure and install or adjust a pressure reducing valve (PRV) to bring it into the safe 40-60 PSI range. This also protects your appliances and fixtures from pressure damage.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What causes whistling sounds in water pipes?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Whistling pipes are usually caused by a worn washer or valve seat in a faucet, a partially closed valve restricting water flow, or excessively high water pressure. The restricted flow creates turbulence that produces a whistling sound. Replacing worn washers or adjusting the valve typically fixes the issue. Check that all shut-off valves under sinks and behind toilets are fully open.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why do my pipes make noise when I flush the toilet?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Pipe noise when flushing a toilet is commonly caused by water hammer from the fill valve closing abruptly, a faulty fill valve that vibrates, or high water pressure. Try adjusting or replacing the fill valve first - this is a $10-$15 DIY fix. If that does not work, installing a water hammer arrestor near the toilet supply line usually resolves the noise.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much does it cost to fix noisy pipes?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">The cost to fix noisy pipes ranges from $75 to $600+ depending on the cause. A water hammer arrestor installation costs $75-$200. Securing loose pipes runs $100-$300. A pressure reducing valve installation costs $200-$400. More complex issues like repiping corroded sections can cost $500-$2,000+. Many simple fixes like replacing a faucet washer or toilet fill valve cost under $15 in DIY parts.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Can I fix water hammer myself?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Some water hammer fixes are DIY-friendly. You can try draining your plumbing system by shutting off the main water valve, opening all faucets, then closing them and turning the water back on. This recharges air chambers. You can also install screw-on water hammer arrestors at washing machine connections. However, if the problem persists or involves high water pressure, a licensed plumber should evaluate your system.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why do my pipes make a gurgling sound?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Gurgling pipes indicate a venting problem in your drain system. Plumbing vents allow air into the drain pipes so water flows smoothly. When vents are blocked by debris, bird nests, or ice, air gets pulled through the water in your P-traps, creating a gurgling noise. A plumber can inspect and clear your vent stack to fix this issue. Persistent gurgling from multiple drains may indicate a main sewer line problem.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Stop Living With Noisy Pipes</h2>
              <p className="text-red-100 mb-6">
                Whether it is a simple water hammer fix or a complete repiping project, our licensed master plumbers have the experience and tools to diagnose and silence your noisy pipes for good. We serve all of Middlesex County with same-day service available for urgent issues. Call today for a free diagnostic assessment - no pressure, just honest answers.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call Niti: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  Call Danny: {BUSINESS_INFO.phone2}
                </a>
                <Link href="/contact-us" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  Request Online Estimate
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/why-is-water-pressure-low" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Why Is My Water Pressure Low?</h3>
                    <p className="text-sm text-gray-600">Diagnose and fix low water pressure in your NJ home.</p>
                  </div>
                </Link>
                <Link href="/blog/frozen-pipes-prevention-repair" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Frozen Pipes: Prevention and Repair</h3>
                    <p className="text-sm text-gray-600">How to prevent and fix frozen pipes in New Jersey winters.</p>
                  </div>
                </Link>
                <Link href="/blog/signs-of-slab-leak-sewer-line" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs of a Slab Leak or Sewer Line Problem</h3>
                    <p className="text-sm text-gray-600">Warning signs that your slab or sewer line needs attention.</p>
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
                <p className="text-gray-600 text-sm mb-4">Free diagnostic assessment for all pipe noise issues in Middlesex County.</p>
                <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
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
                  <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                  <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                  <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  <li><Link href="/services/plumbing-safety-inspections" className="text-gray-700 hover:text-red-700 transition">Plumbing Inspections</Link></li>
                  <li><Link href="/services/water-filtration-system" className="text-gray-700 hover:text-red-700 transition">Water Filtration</Link></li>
                </ul>
                <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
              </div>
              {/* Related Blogs */}
              <div className="bg-white rounded-xl shadow-md p-5">
                <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition">Why Is My Water Pressure Low?</Link></li>
                  <li><Link href="/blog/frozen-pipes-prevention-repair" className="text-gray-700 hover:text-red-700 transition">Frozen Pipes: Prevention and Repair</Link></li>
                  <li><Link href="/blog/signs-of-slab-leak-sewer-line" className="text-gray-700 hover:text-red-700 transition">Signs of a Slab Leak or Sewer Line Problem</Link></li>
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
