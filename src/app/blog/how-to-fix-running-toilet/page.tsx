import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How to Fix a Running Toilet (Step-by-Step Guide)",
  description: "Toilet won't stop running? Learn how to fix a running toilet yourself - flapper, fill valve, float, and overflow tube. Step-by-step with costs. When to call a NJ plumber.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/how-to-fix-running-toilet" },
  keywords: [
    "running toilet",
    "toilet won't stop running",
    "how to fix a running toilet",
    "toilet keeps running",
    "toilet flapper replacement",
    "fill valve replacement",
    "toilet running constantly",
    "toilet won't stop filling",
    "toilet running NJ",
    "toilet flapper leaking",
    "toilet float adjustment",
    "toilet overflow tube",
    "toilet repair cost",
    "toilet repair NJ",
    "fix running toilet after flushing",
    "toilet runs intermittently",
    "phantom flush toilet",
    "toilet water running nonstop",
    "Fluidmaster fill valve",
    "Korky toilet flapper",
    "toilet repair East Brunswick NJ",
    "plumber Middlesex County NJ",
  ],
  openGraph: {
    title: "How to Fix a Running Toilet (Step-by-Step Guide)",
    description: "Step-by-step guide to fix a running toilet yourself - flapper, fill valve, float, and overflow tube. Plus when to call a licensed NJ plumber.",
    type: "article",
    publishedTime: "2026-03-25T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function HowToFixRunningToilet() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Fix a Running Toilet (Step-by-Step Guide)",
    description: "Step-by-step guide to diagnosing and fixing a running toilet yourself, covering the flapper, fill valve, float, and overflow tube. Includes repair costs in NJ and when to call a licensed Middlesex County plumber.",
    image: "https://www.illyrianplumber.com/images/toilet-repair-service.jpg",
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
    datePublished: "2026-03-25T08:00:00.000Z",
    dateModified: "2026-03-25T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/how-to-fix-running-toilet",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why does my toilet keep running after I flush?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most common reason a toilet keeps running after flushing is a worn-out flapper that no longer seals properly against the flush valve seat. When the flapper does not create a watertight seal, water continuously leaks from the tank into the bowl, triggering the fill valve to run nonstop. Replacing the flapper is a $5 to $10 fix that takes about 10 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "How much water does a running toilet waste?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A running toilet can waste anywhere from 1 to 4.5 gallons per minute depending on the severity of the leak. That translates to up to 6,480 gallons per day or roughly 200 gallons per hour. Even a slow, intermittent running toilet can waste 200 gallons per day, adding $50 to $100 or more to your monthly water bill.",
        },
      },
      {
        "@type": "Question",
        name: "Can I fix a running toilet myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, most running toilet problems can be fixed by a homeowner with no special tools. The three most common fixes - replacing the flapper, adjusting the float, and replacing the fill valve - require only basic hand tools and parts that cost $5 to $25 at any hardware store. The entire repair typically takes 15 to 45 minutes depending on the cause.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a plumber charge to fix a running toilet in NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In New Jersey, most plumbers charge between $100 and $250 to diagnose and fix a running toilet. The cost depends on the cause - a simple flapper replacement is on the lower end, while replacing the fill valve and flush valve together is on the higher end. Emergency or after-hours calls may cost more. Illyrian Plumber provides upfront pricing for all toilet repairs in Middlesex County.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if my toilet flapper needs to be replaced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The easiest test is the food coloring test: add a few drops of food coloring to the tank water, wait 15 to 20 minutes without flushing, and check the bowl. If the color has seeped into the bowl, the flapper is leaking and needs to be replaced. You can also visually inspect the flapper - if it feels stiff, warped, cracked, or slimy, it is no longer creating a proper seal.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my toilet run intermittently (phantom flush)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A toilet that runs briefly every few minutes without being flushed is called a phantom flush. It is caused by a slow leak from the tank into the bowl, almost always due to a deteriorating flapper. The tank slowly loses water through the leaky flapper until the water level drops low enough to trigger the fill valve, which runs briefly to refill the tank. Replacing the flapper stops phantom flushing.",
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
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Toilet & Faucet</span>
                <time dateTime="2026-03-25">March 2026</time>
                <span>16 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How to Fix a Running Toilet (Step-by-Step Guide)
              </h1>
              <p className="text-xl text-gray-300">
                Diagnose and fix a running toilet yourself with our complete guide. Covers flappers, fill valves, floats, and overflow tubes - plus when it is time to call a licensed NJ plumber.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-03-25" updateDate="2026-03-25" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 min-w-0 max-w-3xl">

              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  A running toilet is one of the most common and most wasteful plumbing problems in any home. That constant hissing or trickling sound coming from your bathroom is not just annoying - it can waste hundreds of gallons of water per day and add $50 to $100 or more to your monthly water bill. If you need <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-semibold">toilet repair or installation</Link> in Middlesex County, this guide will help you understand the problem and decide whether to fix it yourself or call a professional.
                </p>
                <p className="text-gray-700">
                  The good news is that a running toilet is almost always caused by one of four inexpensive, replaceable parts inside the tank: the flapper, the fill valve, the float, or the overflow tube. Most homeowners can diagnose and fix the problem in under an hour with parts that cost $5 to $25 from any hardware store. No special plumbing skills are required - if you can turn a wrench and follow step-by-step instructions, you can fix a running toilet.
                </p>
                <p className="text-gray-700">
                  In this guide, we walk through how to identify which part is causing the problem, how to fix each one, what products to use, when to replace the toilet entirely, and what toilet repair costs look like in New Jersey. This guide applies to homeowners across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">toilet and faucet installation</Link>, <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link>, <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800">plumbing safety inspections</Link>, and <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">bathroom remodeling</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
                </p>
              </div>

              {/* Table of Contents */}
              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
                <ul className="space-y-2">
                  <li><a href="#why-toilets-run" className="text-red-700 hover:text-red-800">Why Toilets Run (How Your Toilet Works)</a></li>
                  <li><a href="#diagnose-the-cause" className="text-red-700 hover:text-red-800">How to Diagnose the Cause</a></li>
                  <li><a href="#fix-flapper" className="text-red-700 hover:text-red-800">Fix 1 - Replace the Flapper</a></li>
                  <li><a href="#fix-fill-valve" className="text-red-700 hover:text-red-800">Fix 2 - Replace the Fill Valve</a></li>
                  <li><a href="#fix-float" className="text-red-700 hover:text-red-800">Fix 3 - Adjust or Replace the Float</a></li>
                  <li><a href="#fix-overflow-tube" className="text-red-700 hover:text-red-800">Fix 4 - Fix the Overflow Tube</a></li>
                  <li><a href="#replace-vs-repair" className="text-red-700 hover:text-red-800">When to Replace vs Repair Your Toilet</a></li>
                  <li><a href="#toilet-repair-cost-nj" className="text-red-700 hover:text-red-800">Cost of Toilet Repair in NJ</a></li>
                  <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
                </ul>
              </nav>

              {/* Why Toilets Run */}
              <section id="why-toilets-run" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Toilets Run (How Your Toilet Works)</h2>

                <p className="text-gray-700 mb-4">
                  Before you can fix a running toilet, it helps to understand the four key components inside the tank that work together every time you flush. A running toilet is almost always caused by a failure in one of these parts.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">The Flapper</h3>
                    <p className="text-gray-700 text-sm">The flapper is a rubber seal at the bottom of the tank that sits on top of the flush valve opening. When you press the flush handle, a chain lifts the flapper, allowing water to rush from the tank into the bowl. Once the tank empties, the flapper drops back down and seals the opening so the tank can refill. Over time, the rubber deteriorates, warps, or develops mineral buildup, preventing it from creating a watertight seal. This is the number one cause of a running toilet.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">The Fill Valve</h3>
                    <p className="text-gray-700 text-sm">The fill valve is the tall component on the left side of the tank (when facing the toilet). It controls the flow of water from the supply line into the tank. After a flush, the fill valve opens to refill the tank. When the water reaches the correct level, the fill valve shuts off. A malfunctioning fill valve may fail to shut off completely, causing water to run continuously, or it may run intermittently as it struggles to maintain the correct water level.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">The Float</h3>
                    <p className="text-gray-700 text-sm">The float tells the fill valve when to stop filling. In older toilets, this is a ball on the end of a metal arm (ball float). In newer toilets, it is a cylindrical float that rides up and down on the fill valve shaft (cup float). The float rises with the water level, and when it reaches a set height, it signals the fill valve to shut off. If the float is set too high, the tank overfills and water runs into the overflow tube continuously. If the float is set too low, the toilet may not flush properly.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">The Overflow Tube</h3>
                    <p className="text-gray-700 text-sm">The overflow tube is a vertical pipe in the center of the tank connected to the flush valve. Its job is to prevent the tank from overflowing by directing excess water into the bowl if the fill valve fails to shut off. However, if the water level in the tank is set above the top of the overflow tube, water will constantly drain into the bowl through the tube, which in turn keeps the fill valve running to try to maintain the tank level. This creates a continuous cycle of running water.</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">The Key Principle</p>
                  <p className="text-gray-700 text-sm">A running toilet always comes down to one thing: water is leaving the tank when it should not be. Either it is leaking past the flapper into the bowl, running over the overflow tube, or the fill valve is not shutting off when it should. Your job is to figure out which path the water is taking, and then fix the component responsible.</p>
                </div>
              </section>

              {/* Diagnose the Cause */}
              <section id="diagnose-the-cause" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to Diagnose the Cause</h2>

                <p className="text-gray-700 mb-4">
                  Before you buy any parts or start disassembling things, take five minutes to diagnose the problem. This prevents you from replacing parts that are working fine and helps you fix the toilet on the first try.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Step 1: Remove the Tank Lid</h3>
                <p className="text-gray-700 mb-4">
                  Carefully lift the porcelain lid off the tank and set it on a towel on the floor where it will not get knocked over. Tank lids are heavy and fragile - if it cracks, you may need to replace the entire toilet because matching lids are difficult to find.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Step 2: Check the Water Level</h3>
                <p className="text-gray-700 mb-4">
                  Look at where the water level sits relative to the overflow tube. The water should be about half an inch to one inch below the top of the overflow tube. Most tanks have a water line mark on the inside wall or on the overflow tube itself.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-2">If water is flowing into the overflow tube</h3>
                    <p className="text-gray-700 text-sm">The water level is too high. This means either the float is set too high and needs to be adjusted, or the fill valve is not shutting off properly. Start with <a href="#fix-float" className="text-red-700 hover:text-red-800">adjusting the float</a>. If that does not work, <a href="#fix-fill-valve" className="text-red-700 hover:text-red-800">replace the fill valve</a>.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-2">If the water level is normal but you hear running</h3>
                    <p className="text-gray-700 text-sm">The flapper is likely leaking. Water is slowly draining from the tank into the bowl through a failed flapper seal, and the fill valve keeps running to replace the lost water. Do the food coloring test below to confirm, then <a href="#fix-flapper" className="text-red-700 hover:text-red-800">replace the flapper</a>.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-2">If the fill valve hisses or cycles on and off</h3>
                    <p className="text-gray-700 text-sm">A fill valve that makes a hissing sound or runs for a few seconds every few minutes is either failing internally or reacting to a slow flapper leak. Test the flapper first. If the flapper is fine, the fill valve itself needs to be replaced.</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Step 3: The Food Coloring Test</h3>
                <p className="text-gray-700 mb-4">
                  This is the definitive test for a leaking flapper. Add 5 to 10 drops of food coloring (any color) to the water in the tank. Do not flush. Wait 15 to 20 minutes. Then look at the water in the bowl.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                    <p className="font-bold text-green-800 mb-2">Bowl water is clear</p>
                    <p className="text-gray-700 text-sm">The flapper seal is good. Your running toilet is caused by a fill valve or float issue, not a flapper leak.</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <p className="font-bold text-red-800 mb-2">Bowl water is colored</p>
                    <p className="text-gray-700 text-sm">The flapper is leaking. Water is seeping from the tank into the bowl around the flapper seal. Replace the flapper.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Helpful Tip</p>
                  <p className="text-gray-700 text-sm">If you are unsure about the diagnosis, or if the toilet has multiple issues at once, consider replacing the flapper and fill valve together as a kit. A Fluidmaster 400CRP14 Complete Toilet Repair Kit includes both parts and costs about $15 to $20. This is often the most efficient approach because you fix everything in one trip and one repair session.</p>
                </div>
              </section>

              {/* Fix 1: Replace the Flapper */}
              <section id="fix-flapper" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Fix 1 - Replace the Flapper</h2>

                <p className="text-gray-700 mb-4">
                  A worn-out flapper is the cause of a running toilet in roughly 70% of cases. Flappers are made of rubber that deteriorates over time due to constant exposure to water, chlorine, and mineral deposits. Most flappers last 3 to 5 years before they need to be replaced, though some lower-quality flappers may fail in as little as 1 to 2 years.
                </p>

                <p className="text-gray-700 mb-4">
                  Replacing a flapper is the easiest and cheapest toilet repair you can do. The part costs $5 to $10, and the entire job takes about 10 minutes with no tools required.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">What You Need</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                  <li>Replacement flapper - Korky 2021BP or Fluidmaster 502 are universal flappers that fit most toilets</li>
                  <li>A towel or rag</li>
                  <li>Optionally, a pair of rubber gloves</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Step by Step</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Turn off the water supply to the toilet. The shut-off valve is the oval-shaped knob on the wall behind the toilet, near the floor. Turn it clockwise until it stops.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">Flush the toilet to drain most of the water from the tank. Hold the handle down to drain as much water as possible.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">Unhook the flapper chain from the flush handle lever. Note which hole in the lever the chain is connected to - you will hook the new one in the same spot.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <p className="text-gray-700 pt-1">Remove the old flapper. Most flappers have two ears (tabs) that hook over the pegs on either side of the overflow tube. Slide the ears off the pegs to detach the flapper.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">5</div>
                    <p className="text-gray-700 pt-1">Inspect the flush valve seat (the ring where the flapper sits). Run your finger around it. If it feels rough, pitted, or has mineral buildup, clean it with a Scotch-Brite pad or fine sandpaper. The new flapper needs a smooth surface to seal properly.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">6</div>
                    <p className="text-gray-700 pt-1">Install the new flapper by hooking its ears over the pegs on the overflow tube. Make sure the flapper sits centered over the flush valve opening.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">7</div>
                    <p className="text-gray-700 pt-1">Connect the chain to the flush handle lever. The chain should have about half an inch of slack when the flapper is closed. Too tight and the flapper will not seal. Too loose and it will not lift enough when you flush.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">8</div>
                    <p className="text-gray-700 pt-1">Turn the water supply back on and let the tank fill. Flush a few times to test. The running sound should be gone. Repeat the food coloring test after 30 minutes to confirm no leak.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-4">
                  <p className="font-bold text-gray-900 mb-2">Choosing the Right Flapper</p>
                  <p className="text-gray-700 text-sm">Not all flappers are the same size. Most standard toilets use a 2-inch flapper, but some newer high-efficiency and 3-inch flush valve toilets use a larger flapper. Take your old flapper to the hardware store to match the size, or check your toilet manufacturer's specifications. Korky and Fluidmaster both make universal flappers in 2-inch and 3-inch sizes. If you have a Toto, Kohler, or American Standard toilet, look for brand-specific flappers for the best fit.</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Chain Length Matters</p>
                  <p className="text-gray-700 text-sm">One of the most common mistakes homeowners make is leaving too much or too little slack in the flapper chain. If the chain is too tight, it holds the flapper slightly open, causing a constant leak. If it is too long, it can get caught under the flapper when it closes, preventing a seal. Aim for about half an inch of slack when the flapper is in the closed position. Trim any excess chain length so it does not interfere with other tank components.</p>
                </div>
              </section>

              {/* Fix 2: Replace the Fill Valve */}
              <section id="fix-fill-valve" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Fix 2 - Replace the Fill Valve</h2>

                <p className="text-gray-700 mb-4">
                  If the flapper is not the problem, the fill valve is the next most likely culprit. A failing fill valve may run continuously, make a hissing or whining sound, shut off and then turn back on randomly, or fail to fill the tank to the correct level. Fill valves typically last 5 to 7 years, and replacing one is a straightforward job that most homeowners can handle in 20 to 30 minutes.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">What You Need</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                  <li>Replacement fill valve - Fluidmaster 400A is the industry standard and fits nearly all toilets</li>
                  <li>Adjustable wrench or slip-joint pliers</li>
                  <li>A bucket and towels for residual water</li>
                  <li>A small container to catch water from the supply line</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Step by Step</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Turn off the water supply valve behind the toilet. Flush the toilet and hold the handle down to drain the tank as much as possible. Use a sponge or towel to soak up remaining water in the bottom of the tank.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">Place a bucket or towels under the supply line connection at the bottom of the tank. Disconnect the water supply line from the fill valve by unscrewing the coupling nut. Some water will drain out - the bucket catches this.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">Remove the old fill valve. Reach under the tank and unscrew the mounting nut that holds the fill valve in place. The entire fill valve assembly will lift out from inside the tank.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <p className="text-gray-700 pt-1">Adjust the height of the new fill valve before installing it. The Fluidmaster 400A has a twist-lock adjustment - the top of the fill valve should be about one inch above the overflow tube. Set this height before putting it in the tank.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">5</div>
                    <p className="text-gray-700 pt-1">Insert the new fill valve through the hole in the bottom of the tank. Make sure the rubber washer is in place on the bottom of the valve shank. Hand-tighten the mounting nut from underneath, then give it an additional half-turn with pliers. Do not overtighten - this can crack the porcelain.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">6</div>
                    <p className="text-gray-700 pt-1">Reconnect the water supply line to the bottom of the fill valve. Hand-tighten, then a quarter-turn with pliers. Again, do not overtighten.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">7</div>
                    <p className="text-gray-700 pt-1">Connect the refill tube. The small rubber hose from the fill valve clips onto the top of the overflow tube. This tube directs a small amount of water into the overflow tube during each fill cycle to refill the bowl.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">8</div>
                    <p className="text-gray-700 pt-1">Turn the water supply back on slowly. Watch for leaks at both connections (supply line and mounting nut). Let the tank fill completely and check that the water level stops about one inch below the top of the overflow tube. Adjust the float if needed.</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-4">
                  <p className="font-bold text-gray-900 mb-2">Why We Recommend the Fluidmaster 400A</p>
                  <p className="text-gray-700 text-sm">The Fluidmaster 400A is the most widely used fill valve in the United States and is the valve we install most frequently on <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">toilet repair and installation</Link> jobs across Middlesex County. It fits virtually all toilet brands and tank sizes, is height-adjustable, comes with all necessary hardware, and costs about $8 to $12 at any hardware store. Korky also makes an excellent fill valve (the Korky 528) that is a good alternative.</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Watch for the Supply Valve</p>
                  <p className="text-gray-700 text-sm">If the shut-off valve behind the toilet is old, corroded, or has not been turned in years, be careful when turning it. Old gate valves and compression valves can leak or even break when operated after sitting idle for a long time. If the shut-off valve leaks or will not turn, do not force it - call a plumber. We see this frequently in older homes in East Brunswick, Edison, and North Brunswick where the original shut-off valves are decades old.</p>
                </div>
              </section>

              {/* Fix 3: Adjust the Float */}
              <section id="fix-float" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Fix 3 - Adjust or Replace the Float</h2>

                <p className="text-gray-700 mb-4">
                  If water is flowing into the overflow tube, the float is set too high. This is one of the simplest fixes - it often requires no parts at all, just an adjustment. The method depends on which type of float your toilet has.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Ball Float (Older Toilets)</h3>
                <p className="text-gray-700 mb-4">
                  Older toilets use a ball float - a hollow ball (usually black or copper colored) attached to the end of a horizontal metal arm connected to the fill valve. The ball floats on the water surface, and as the water rises, the arm pushes down on the fill valve to shut it off.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">To lower the water level, gently bend the float arm downward. This lowers the point at which the ball triggers the fill valve to shut off. Bend it about half an inch at a time and test by flushing.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">If the ball float has water inside it (shake it to check), it has cracked and is waterlogged. It cannot float properly and needs to be replaced. Unscrew the ball from the end of the arm (it threads off) and screw on a new one.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">Some ball float arms have an adjustment screw at the point where the arm connects to the fill valve. Turning this screw changes the arm angle and therefore the water level. Check if yours has one before bending the arm.</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Cup Float (Newer Toilets)</h3>
                <p className="text-gray-700 mb-4">
                  Most toilets made in the last 20 years use a cup float - a small cylindrical float that slides up and down on the fill valve shaft. This is the type you will find on a Fluidmaster 400A and similar modern fill valves.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Locate the adjustment clip or screw on the float. On most cup float valves, there is a metal spring clip on the side of the float that you can squeeze and slide up or down along the metal rod.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">To lower the water level, squeeze the clip and slide the float down about half an inch. To raise the water level, slide it up. Each half-inch adjustment changes the water level by roughly the same amount.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">Flush the toilet and watch the tank refill. The water should stop about half an inch to one inch below the top of the overflow tube. Readjust if needed.</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">The Right Water Level</p>
                  <p className="text-gray-700 text-sm">The ideal water level is about half an inch to one inch below the top of the overflow tube. This gives enough water for a strong flush while leaving a safety margin so that water never reaches the overflow. If you set the water too low, the toilet may not flush waste completely, leading to double-flushing and actually using more water. Aim for the manufacturer's water line mark if one is visible inside the tank.</p>
                </div>
              </section>

              {/* Fix 4: Overflow Tube */}
              <section id="fix-overflow-tube" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Fix 4 - Fix the Overflow Tube</h2>

                <p className="text-gray-700 mb-4">
                  In some cases, the overflow tube itself is the problem. The overflow tube can crack, become too short relative to the water level, or deteriorate at its base where it connects to the flush valve. If the overflow tube is cracked or broken, water will continuously drain from the tank into the bowl regardless of the flapper or float settings.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Signs of an Overflow Tube Problem</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>The overflow tube has a visible crack or is broken at the top</li>
                  <li>Water visibly streams down the inside of the overflow tube even when the tank is not full</li>
                  <li>The overflow tube wobbles or is loose at its base</li>
                  <li>You have adjusted the float and replaced the flapper but the toilet still runs</li>
                </ul>

                <p className="text-gray-700 mb-4">
                  Unlike the flapper and fill valve, the overflow tube is part of the flush valve assembly, which is bolted to the bottom of the tank. Replacing the overflow tube typically means replacing the entire flush valve, which requires removing the tank from the bowl. This is a more involved repair.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">When to DIY vs Call a Plumber</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                    <p className="font-bold text-green-800 mb-2">DIY Friendly</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Overflow tube is too short (can add an extender)</li>
                      <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Small crack at the top (can trim below the crack if there is enough height)</li>
                      <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Refill tube inserted too far into overflow (just reposition the clip)</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <p className="font-bold text-red-800 mb-2">Call a Plumber</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">&#10007;</span> Overflow tube is cracked at the base</li>
                      <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">&#10007;</span> Flush valve assembly is corroded or deteriorated</li>
                      <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">&#10007;</span> Tank-to-bowl bolts are rusted or stripped</li>
                      <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">&#10007;</span> Toilet is very old and parts are no longer available</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  If the flush valve needs to be replaced, consider whether replacing the entire toilet makes more sense. If your toilet is 15 to 20 years old or older, a new toilet will be more water-efficient and reliable, and the labor cost to install a new toilet is comparable to the labor cost of replacing a flush valve. Our <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-semibold">toilet installation service</Link> includes removing the old toilet, installing the new one, and testing everything.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Common Overflow Tube Mistake</p>
                  <p className="text-gray-700 text-sm">A very common cause of water running into the overflow tube is the refill tube being pushed too far down inside the overflow tube. The small rubber refill hose from the fill valve should clip onto the top of the overflow tube with the included clip - it should not be inserted into the tube. If it is pushed inside the tube, it can create a siphon effect that continuously drains the tank. Simply pull the tube out and clip it to the rim of the overflow tube.</p>
                </div>
              </section>

              {/* Service Cards */}
              <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
                <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                  <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.658-3.163M11.42 15.17l5.658-3.163M11.42 15.17V20.9m0-5.73l-5.658 3.163M11.42 15.17l5.658 3.163M6.762 17.333l-.007-4.666L11.42 9.504m6.762 4.666l-.007-4.666L11.42 9.504m0 0V3.1" /></svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">Toilet & Faucet Installation</p>
                  <p className="text-sm text-gray-600 mb-2">Professional toilet repair, replacement, and installation. We handle running toilets, leaking toilets, new toilet installs, and faucet upgrades across Middlesex County, NJ.</p>
                  <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
                <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                  <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.658-3.163M11.42 15.17l5.658-3.163M11.42 15.17V20.9m0-5.73l-5.658 3.163M11.42 15.17l5.658 3.163M6.762 17.333l-.007-4.666L11.42 9.504m6.762 4.666l-.007-4.666L11.42 9.504m0 0V3.1" /></svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">Emergency Plumbing</p>
                  <p className="text-sm text-gray-600 mb-2">Toilet overflowing or leaking at the base? Our licensed plumbers are available 24/7 for plumbing emergencies in East Brunswick and surrounding areas.</p>
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
                </div>
              </div>

              {/* Mid-Content CTA */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12">
                <p className="text-lg font-bold mb-2">Toilet Still Running?</p>
                <p className="text-gray-300 text-sm mb-4">If you have tried replacing the flapper and adjusting the float and the toilet is still running, there may be a deeper issue with the fill valve, flush valve, or the toilet itself. Our licensed master plumbers serve all of Middlesex County with same-day service.</p>
                <div className="flex flex-wrap gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="border border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition text-sm">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Replace vs Repair */}
              <section id="replace-vs-repair" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to Replace vs Repair Your Toilet</h2>

                <p className="text-gray-700 mb-4">
                  Not every running toilet is worth repairing. Sometimes replacing the entire toilet is the smarter, more cost-effective long-term decision. Here is how to think about the repair vs replace question.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Repair Makes Sense When</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> The toilet is less than 10 to 15 years old</li>
                      <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> The problem is a simple flapper or fill valve replacement</li>
                      <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> The porcelain is in good condition with no cracks</li>
                      <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> The toilet is a brand you like and parts are readily available</li>
                      <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> The toilet is already a low-flow model (1.28 or 1.6 gallons per flush)</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Replacement Makes Sense When</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">&#10007;</span> The toilet is 20+ years old and uses 3.5 to 5 gallons per flush</li>
                      <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">&#10007;</span> Multiple components are failing at the same time</li>
                      <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">&#10007;</span> The porcelain has hairline cracks or chips</li>
                      <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">&#10007;</span> The flush valve or tank-to-bowl gasket needs replacing</li>
                      <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">&#10007;</span> The toilet rocks on the floor (broken flange or wax ring failure)</li>
                      <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">&#10007;</span> You want to upgrade to a high-efficiency or comfort-height model</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  A modern high-efficiency toilet (HET) uses 1.28 gallons per flush compared to the 3.5 to 5 gallons per flush common in toilets from the 1980s and earlier. Upgrading to an HET can save a family of four over 10,000 gallons of water per year. At current NJ water rates, that is a meaningful reduction in your water bill. Popular reliable models include the Toto Drake, American Standard Champion, and Kohler Cimarron, all of which we regularly install for homeowners in Middlesex County.
                </p>

                <p className="text-gray-700 mb-4">
                  If you are dealing with a toilet that needs frequent repairs, or if you are remodeling a bathroom, our <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-semibold">toilet and faucet installation service</Link> covers everything from removing the old toilet to installing and testing the new one, including all connections and a new wax ring seal. We also offer <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800 font-semibold">full bathroom remodeling</Link> if you are upgrading the whole room.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Running Toilet and Water Damage</p>
                  <p className="text-gray-700 text-sm">A running toilet is primarily a water waste issue, but in some cases it can lead to water damage. If the running toilet is also leaking at the base, at the tank-to-bowl connection, or at the supply line fitting, water can seep onto the floor and damage subfloors, ceilings below, and promote mold growth. If you see water around the base of your toilet, treat it as urgent. Our <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection service</Link> can identify hidden leaks that are not immediately visible.</p>
                </div>
              </section>

              {/* Cost of Toilet Repair in NJ */}
              <section id="toilet-repair-cost-nj" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Cost of Toilet Repair in NJ</h2>

                <p className="text-gray-700 mb-4">
                  Toilet repair costs vary depending on whether you do it yourself or hire a plumber, and on the specific repair needed. Here is a breakdown of typical costs for homeowners in New Jersey and the Middlesex County area.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">DIY Parts Cost</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-3 font-semibold text-gray-900 border border-gray-200">Repair</th>
                        <th className="text-left p-3 font-semibold text-gray-900 border border-gray-200">Parts Cost</th>
                        <th className="text-left p-3 font-semibold text-gray-900 border border-gray-200">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">Flapper replacement</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$5 - $10</td>
                        <td className="p-3 border border-gray-200 text-gray-700">10 minutes</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 border border-gray-200 text-gray-700">Fill valve replacement</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$8 - $15</td>
                        <td className="p-3 border border-gray-200 text-gray-700">20 - 30 minutes</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">Float adjustment</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$0 (no parts needed)</td>
                        <td className="p-3 border border-gray-200 text-gray-700">5 minutes</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 border border-gray-200 text-gray-700">Complete repair kit (flapper + fill valve)</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$15 - $25</td>
                        <td className="p-3 border border-gray-200 text-gray-700">30 - 45 minutes</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">Flush valve replacement</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$15 - $30</td>
                        <td className="p-3 border border-gray-200 text-gray-700">45 - 90 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Plumber Cost in NJ</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-3 font-semibold text-gray-900 border border-gray-200">Service</th>
                        <th className="text-left p-3 font-semibold text-gray-900 border border-gray-200">Typical Cost (NJ)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">Running toilet diagnosis + flapper replacement</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$100 - $150</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 border border-gray-200 text-gray-700">Fill valve replacement</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$125 - $200</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">Complete toilet rebuild (all internal parts)</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$175 - $300</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 border border-gray-200 text-gray-700">New toilet installation (including toilet)</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$350 - $700+</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">Emergency / after-hours toilet repair</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$200 - $400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 mb-4">
                  At Illyrian Plumber, we provide upfront pricing before any work begins. No surprises and no hidden fees. We serve homeowners across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick with same-day availability for most toilet repairs. Call us for a <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-semibold">toilet repair or installation</Link> quote.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Is DIY Worth It?</p>
                  <p className="text-gray-700 text-sm">For a simple flapper replacement, absolutely - it is a $7 part and a 10-minute job. For a fill valve replacement, most handy homeowners can do it comfortably. For a flush valve replacement that requires removing the tank, or for any situation where the shut-off valve is problematic, calling a plumber is the safer and faster choice. A plumber can also inspect the rest of your toilet and plumbing connections to catch problems before they become emergencies. Consider scheduling a <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800">plumbing safety inspection</Link> if your home is more than 20 years old.</p>
                </div>
              </section>

              {/* CTA Banner before FAQ */}
              <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Need a Plumber for Your Running Toilet?</h2>
                <p className="text-red-100 mb-6">
                  Whether you need a quick flapper fix or a full toilet replacement, our licensed master plumbers in Middlesex County are ready to help. Upfront pricing, same-day service, and quality workmanship guaranteed. Serving East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
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

              {/* FAQ Section */}
              <section id="faq" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Running Toilet FAQs</h2>

                <div className="space-y-3">
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Why does my toilet keep running after I flush?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">The most common reason a toilet keeps running after flushing is a worn-out flapper that no longer seals properly against the flush valve seat. When the flapper does not create a watertight seal, water continuously leaks from the tank into the bowl, triggering the fill valve to run nonstop. Replacing the flapper is a $5 to $10 fix that takes about 10 minutes. If the flapper is fine, the issue may be a faulty fill valve or a float set too high.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">How much water does a running toilet waste?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">A running toilet can waste anywhere from 1 to 4.5 gallons per minute depending on the severity of the leak. That translates to up to 6,480 gallons per day or roughly 200 gallons per hour. Even a slow, intermittent running toilet can waste 200 gallons per day, adding $50 to $100 or more to your monthly water bill. Fixing a running toilet promptly is one of the easiest ways to reduce water waste and lower your utility bill.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Can I fix a running toilet myself?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">Yes, most running toilet problems can be fixed by a homeowner with no special tools. The three most common fixes - replacing the flapper, adjusting the float, and replacing the fill valve - require only basic hand tools and parts that cost $5 to $25 at any hardware store. The entire repair typically takes 15 to 45 minutes depending on the cause. If you are uncomfortable working with plumbing, or if the repair involves removing the tank, a professional plumber can handle it quickly.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">How much does a plumber charge to fix a running toilet in NJ?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">In New Jersey, most plumbers charge between $100 and $250 to diagnose and fix a running toilet. The cost depends on the cause - a simple flapper replacement is on the lower end, while replacing the fill valve and flush valve together is on the higher end. Emergency or after-hours calls may cost more. Illyrian Plumber provides upfront pricing for all <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">toilet repairs in Middlesex County</Link>.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">How do I know if my toilet flapper needs to be replaced?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">The easiest test is the food coloring test: add a few drops of food coloring to the tank water, wait 15 to 20 minutes without flushing, and check the bowl. If the color has seeped into the bowl, the flapper is leaking and needs to be replaced. You can also visually inspect the flapper - if it feels stiff, warped, cracked, or slimy, it is no longer creating a proper seal and should be replaced. Most flappers last 3 to 5 years.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Why does my toilet run intermittently (phantom flush)?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">A toilet that runs briefly every few minutes without being flushed is called a phantom flush. It is caused by a slow leak from the tank into the bowl, almost always due to a deteriorating flapper. The tank slowly loses water through the leaky flapper until the water level drops low enough to trigger the fill valve, which runs briefly to refill the tank. Then the cycle repeats. Replacing the flapper stops phantom flushing in nearly all cases.</p>
                    </div>
                  </details>
                </div>
              </section>

              {/* Final CTA */}
              <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Toilet Still Running? We Can Fix It Today.</h2>
                <p className="text-red-100 mb-6">
                  When DIY methods do not solve the problem, our licensed master plumbers in Middlesex County are ready to help. We diagnose and fix running toilets the right way - upfront pricing, no guesswork. Same-day service available across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
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
                  <Link href="/blog/water-pipe-noises-causes-fixes" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Water Pipe Noises: 8 Causes and Fixes</h3>
                      <p className="text-sm text-gray-600">What those banging, whistling, and humming pipes mean.</p>
                    </div>
                  </Link>
                  <Link href="/blog/common-water-heater-problems" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Common Water Heater Problems</h3>
                      <p className="text-sm text-gray-600">Troubleshoot the most common water heater issues.</p>
                    </div>
                  </Link>
                  <Link href="/blog/how-to-unclog-kitchen-sink" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Unclog a Kitchen Sink</h3>
                      <p className="text-sm text-gray-600">7 methods to clear a clogged kitchen sink drain.</p>
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
                  <p className="text-gray-600 text-sm mb-4">Toilet repairs, installations, and plumbing services throughout Middlesex County, NJ.</p>
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
                    <li><Link href="/services/toilet-and-faucet-installation" className="text-gray-700 hover:text-red-700 transition">Toilet and Faucet Installation</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                    <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                    <li><Link href="/services/plumbing-safety-inspections" className="text-gray-700 hover:text-red-700 transition">Plumbing Inspections</Link></li>
                    <li><Link href="/services/bathroom-remodeling" className="text-gray-700 hover:text-red-700 transition">Bathroom Remodeling</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>

                {/* Helpful Articles */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/how-to-unclog-kitchen-sink" className="text-gray-700 hover:text-red-700 transition">How to Unclog a Kitchen Sink</Link></li>
                    <li><Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition">Why Is My Water Pressure Low?</Link></li>
                    <li><Link href="/blog/water-pipe-noises-causes-fixes" className="text-gray-700 hover:text-red-700 transition">Water Pipe Noises: 8 Causes and Fixes</Link></li>
                    <li><Link href="/blog/signs-water-heater-dying" className="text-gray-700 hover:text-red-700 transition">Signs Your Water Heater Is Dying</Link></li>
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
