import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Dishwasher Not Draining? 8 Causes & How to Fix Each One",
  description: "Dishwasher not draining or has standing water? Learn the 8 most common causes - clogged filter, blocked drain hose, air gap issues, and more - with step-by-step fixes. When DIY fails, call a licensed NJ plumber.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/dishwasher-not-draining-causes-fixes" },
  keywords: [
    "dishwasher not draining",
    "dishwasher standing water",
    "dishwasher won't drain",
    "dishwasher drain clogged",
    "dishwasher drain hose",
    "dishwasher air gap",
    "garbage disposal dishwasher connection",
    "dishwasher filter clogged",
    "dishwasher drain pump",
    "dishwasher not draining completely",
    "dishwasher water not draining",
    "dishwasher backed up",
    "dishwasher drain hose clogged",
    "dishwasher high loop",
    "dishwasher knockout plug",
    "dishwasher drain valve",
    "why is my dishwasher not draining",
    "how to unclog a dishwasher",
    "dishwasher drains into sink",
    "dishwasher plumbing",
    "dishwasher drain line",
    "kitchen plumbing East Brunswick NJ",
    "plumber Middlesex County NJ",
  ],
  openGraph: {
    title: "Dishwasher Not Draining? 8 Causes & How to Fix Each One",
    description: "8 common causes of a dishwasher not draining with step-by-step troubleshooting for each one. Plus when to call a licensed NJ plumber.",
    type: "article",
    publishedTime: "2026-03-25T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function DishwasherNotDrainingCausesFixes() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dishwasher Not Draining? 8 Causes & How to Fix Each One",
    description: "8 common causes of a dishwasher not draining with step-by-step troubleshooting for each one - clogged filter, blocked drain hose, garbage disposal knockout plug, air gap blockage, drain pump failure, and more. When DIY fails, know when to call a licensed Middlesex County NJ plumber.",
    image: "https://www.illyrianplumber.com/images/bathroom-vanity-sink-installation.jpg",
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
      "@id": "https://www.illyrianplumber.com/blog/dishwasher-not-draining-causes-fixes",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is there standing water in the bottom of my dishwasher?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standing water in the bottom of your dishwasher is almost always caused by a drainage obstruction. The most common culprits are a clogged dishwasher filter or food trap, a kinked or blocked drain hose, a garbage disposal knockout plug that was never removed, or a clogged air gap. Start by cleaning the filter and food trap at the bottom of the tub, then check the drain hose connection under the sink.",
        },
      },
      {
        "@type": "Question",
        name: "Can a clogged garbage disposal cause my dishwasher not to drain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, a clogged garbage disposal is one of the most common reasons a dishwasher will not drain. The dishwasher drain hose connects to the garbage disposal or the sink drain tailpiece. If the disposal is full of food waste or if the knockout plug inside the disposal inlet was never removed during installation, water from the dishwasher has nowhere to go and backs up into the dishwasher tub.",
        },
      },
      {
        "@type": "Question",
        name: "What is the dishwasher air gap and how do I clean it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The dishwasher air gap is a small cylindrical fitting mounted on the countertop or sink deck, usually next to the faucet. It prevents dirty water from the sink drain from flowing back into the dishwasher. To clean it, twist off the chrome cap and the plastic inner cap, then remove any debris or buildup from the air gap chamber. Use a bottle brush or pipe cleaner to clear the hose that runs from the air gap down to the garbage disposal or drain.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if my dishwasher drain pump is broken?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you have cleaned the filter, checked the drain hose, cleared the air gap, and confirmed the garbage disposal connection is open, but the dishwasher still will not drain, the drain pump may be faulty. Signs of a bad drain pump include no humming sound during the drain cycle, a loud grinding or buzzing noise during draining, or the motor running but water not moving. A failed drain pump requires replacement by a qualified technician or plumber.",
        },
      },
      {
        "@type": "Question",
        name: "Should I call a plumber or an appliance repair technician for a dishwasher that won't drain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the problem is related to the dishwasher's internal components like the drain pump, control board, or check valve, an appliance repair technician is the right call. However, if the issue involves the drain hose connection, the garbage disposal inlet, the air gap, or the sink drain plumbing that the dishwasher connects to, a licensed plumber is the better choice. In many cases the issue is plumbing-related rather than appliance-related, especially when the dishwasher drains into a clogged or slow sink drain.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my dishwasher drain into the sink?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If dirty water from the dishwasher is backing up into the sink, the drain hose likely lacks a proper high loop or air gap, or the shared drain line is clogged. The dishwasher drain hose must rise to the underside of the countertop before descending to the garbage disposal or drain connection. Without this high loop, gravity can cause water to siphon back and forth between the dishwasher and the sink.",
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
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Kitchen Plumbing</span>
                <time dateTime="2026-03-25">March 2026</time>
                <span>16 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Dishwasher Not Draining? 8 Causes & How to Fix Each One
              </h1>
              <p className="text-xl text-gray-300">
                Step-by-step troubleshooting for every common reason your dishwasher has standing water - from a clogged filter to a failed drain pump. Know when you can fix it yourself and when to call a pro.
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
                  You open the dishwasher expecting clean dishes and find a pool of murky water sitting in the bottom of the tub. A dishwasher not draining is one of the most common <Link href="/services/kitchen-plumbing" className="text-red-700 hover:text-red-800 font-semibold">kitchen plumbing problems</Link> homeowners face, and it is almost always fixable once you identify the cause. The good news is that the majority of dishwasher drainage issues are caused by simple blockages or connection problems that do not require replacing the appliance.
                </p>
                <p className="text-gray-700">
                  Your dishwasher does not have its own dedicated drain line to the sewer. Instead, the dishwasher drain hose connects to the same plumbing that serves your kitchen sink - typically to the garbage disposal inlet or a dedicated connection on the sink drain tailpiece. This shared plumbing arrangement means that a problem with your sink drain, garbage disposal, air gap, or drain hose can all cause the dishwasher to stop draining properly, even if the dishwasher itself is working perfectly fine.
                </p>
                <p className="text-gray-700">
                  In this guide, we walk through the eight most common causes of a dishwasher not draining, with step-by-step troubleshooting for each one. Whether you live in East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, or North Brunswick, these are the same issues we see and fix every week in Middlesex County kitchens.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/kitchen-plumbing" className="text-red-700 hover:text-red-800">kitchen plumbing</Link>, <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">faucet and fixture installation</Link>, <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
                </p>
              </div>

              {/* Table of Contents */}
              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
                <ul className="space-y-2">
                  <li><a href="#how-dishwasher-draining-works" className="text-red-700 hover:text-red-800">How Dishwasher Draining Works</a></li>
                  <li><a href="#cause-1-clogged-filter" className="text-red-700 hover:text-red-800">Cause 1 - Clogged Dishwasher Filter</a></li>
                  <li><a href="#cause-2-blocked-drain-hose" className="text-red-700 hover:text-red-800">Cause 2 - Blocked or Kinked Drain Hose</a></li>
                  <li><a href="#cause-3-garbage-disposal" className="text-red-700 hover:text-red-800">Cause 3 - Garbage Disposal Knockout Plug</a></li>
                  <li><a href="#cause-4-air-gap" className="text-red-700 hover:text-red-800">Cause 4 - Clogged Air Gap</a></li>
                  <li><a href="#cause-5-drain-pump" className="text-red-700 hover:text-red-800">Cause 5 - Drain Pump Failure</a></li>
                  <li><a href="#cause-6-high-loop" className="text-red-700 hover:text-red-800">Cause 6 - Missing High Drain Loop</a></li>
                  <li><a href="#cause-7-sink-drain-clog" className="text-red-700 hover:text-red-800">Cause 7 - Clogged Sink Drain</a></li>
                  <li><a href="#cause-8-check-valve" className="text-red-700 hover:text-red-800">Cause 8 - Faulty Check Valve</a></li>
                  <li><a href="#when-to-call-plumber" className="text-red-700 hover:text-red-800">When to Call a Plumber</a></li>
                  <li><a href="#prevention" className="text-red-700 hover:text-red-800">Preventing Dishwasher Drainage Problems</a></li>
                  <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
                </ul>
              </nav>

              {/* How Dishwasher Draining Works */}
              <section id="how-dishwasher-draining-works" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How Dishwasher Draining Works</h2>

                <p className="text-gray-700 mb-4">
                  Before troubleshooting, it helps to understand how dishwasher drainage actually works. Your dishwasher does not gravity-drain like a sink. Instead, it uses a small electric drain pump located at the bottom of the dishwasher tub to actively push water out through the drain hose. Here is the path that dirty dishwasher water takes from start to finish:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Step 1: The Drain Pump Activates</h3>
                    <p className="text-gray-700 text-sm">At the end of each wash cycle, the dishwasher control board activates the drain pump. The pump impeller spins to force water out of the tub sump area (the lowest point in the dishwasher floor). Before reaching the pump, the water passes through a filter assembly and food trap that catches food debris to prevent it from reaching the drain hose and clogging the plumbing.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Step 2: Water Travels Through the Drain Hose</h3>
                    <p className="text-gray-700 text-sm">The drain pump pushes water into a flexible corrugated drain hose (usually 5/8-inch or 3/4-inch diameter) that runs from the dishwasher, under the kitchen cabinet, to the sink area. This hose should rise as high as possible under the countertop - either by looping to the top of the cabinet or by connecting to an air gap device - before descending to the drain connection. This high point prevents dirty sink water from back-siphoning into the dishwasher.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Step 3: Water Exits Into Your Sink Plumbing</h3>
                    <p className="text-gray-700 text-sm">The drain hose terminates at one of two places: the garbage disposal inlet (a small nipple on the side of the disposal) or a dishwasher tailpiece fitting on the sink drain pipe. From there, the dishwasher water joins the same drain path as your kitchen sink water - through the P-trap, into the wall drain, and out to the sewer or septic system.</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Why This Matters for Troubleshooting</p>
                  <p className="text-gray-700 text-sm">A blockage or failure at any point along this path - the filter, the pump, the drain hose, the air gap, the garbage disposal connection, or the shared sink drain - will cause the dishwasher to stop draining. By understanding the path, you can systematically check each component starting from the easiest to access (the filter) and working outward to the plumbing connections under the sink. If you want to understand the full <Link href="/blog/kitchen-sink-plumbing-diagram" className="text-red-700 hover:text-red-800">kitchen sink plumbing diagram</Link>, we have a detailed guide on that topic.</p>
                </div>
              </section>

              {/* Cause 1: Clogged Dishwasher Filter */}
              <section id="cause-1-clogged-filter" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Cause 1 - Clogged Dishwasher Filter</h2>

                <p className="text-gray-700 mb-4">
                  The most common cause of a dishwasher not draining is a clogged filter. Modern dishwashers (made after roughly 2010) have manual-clean filters instead of the old self-cleaning hard food disposers. These filters are designed to trap food particles and debris to keep them out of the drain pump and drain hose. The problem is that most homeowners do not know the filter exists, let alone that it needs regular cleaning. A heavily clogged filter restricts water flow to the point where the dishwasher cannot drain at all.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">How to Find and Clean the Filter</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Remove the bottom dish rack from the dishwasher to expose the floor of the tub. The filter assembly is located at the center or back-center of the tub floor, usually near the spray arm base.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">The filter is usually a cylindrical mesh assembly that twists to lock and unlock. Turn it counter-clockwise (about a quarter turn) and lift it straight out. Some models have a secondary flat filter underneath that also lifts out.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">Rinse the filter under warm running water. Use a soft brush (an old toothbrush works well) to scrub away any stubborn food particles, grease, or calcium deposits. Do not use a wire brush or abrasive cleaner, as you can damage the fine mesh.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <p className="text-gray-700 pt-1">While the filter is out, look into the sump area (the opening where the filter sits). Remove any food debris, broken glass, or objects that may have fallen into the sump. This is the intake point for the drain pump, and anything blocking it will prevent draining.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">5</div>
                    <p className="text-gray-700 pt-1">Reinstall the filter by placing it back in the sump opening and turning it clockwise until it locks into place. Make sure it seats flush - an improperly installed filter can allow debris to bypass it and clog the drain pump.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">6</div>
                    <p className="text-gray-700 pt-1">Run a short rinse cycle to test if the dishwasher now drains properly. If it does, the clogged filter was the problem.</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">How Often Should You Clean the Dishwasher Filter?</p>
                  <p className="text-gray-700 text-sm">For most households, cleaning the dishwasher filter every two to four weeks is ideal. If you rinse dishes thoroughly before loading them, once a month is fine. If you load dishes with a lot of food residue (which is fine - modern dishwashers are designed for it), clean the filter every two weeks. A clean filter not only prevents drainage problems but also keeps your dishes cleaner and eliminates that musty dishwasher odor.</p>
                </div>
              </section>

              {/* Cause 2: Blocked Drain Hose */}
              <section id="cause-2-blocked-drain-hose" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Cause 2 - Blocked or Kinked Drain Hose</h2>

                <p className="text-gray-700 mb-4">
                  The dishwasher drain hose is a corrugated flexible tube (usually gray or black plastic) that runs from the drain pump outlet at the bottom of the dishwasher to the garbage disposal or sink drain connection under the kitchen sink. Over time, this hose can become clogged with grease, food sludge, and mineral deposits. It can also become kinked or pinched where it passes through the cabinet wall or where heavy items have been pushed against it under the sink.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">How to Check and Clear the Drain Hose</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Turn off the dishwasher and disconnect it from power. Either unplug it from the outlet under the sink or switch off the circuit breaker. Place towels under the sink area where you will be working.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">Open the cabinet under the kitchen sink and locate the drain hose. Follow it from where it exits the cabinet wall (coming from the dishwasher) to where it connects to the garbage disposal inlet or the sink drain tailpiece. Check the entire length for visible kinks, pinching, or crushing.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">If the hose has a kink, straighten it carefully. Make sure nothing under the sink is pressing on or compressing the hose. Rearrange cleaning products and items stored under the sink to give the hose space.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <p className="text-gray-700 pt-1">To check for an internal clog, disconnect the hose from the garbage disposal or drain tailpiece (have a bucket and towels ready - water will spill out). Use pliers or a screwdriver to loosen the hose clamp. Point the hose end into a bucket and blow into the other end or use a straightened coat hanger to feel for a blockage.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">5</div>
                    <p className="text-gray-700 pt-1">If there is a clog inside the hose, flush it with hot water from a faucet, or use a long flexible brush designed for cleaning dryer vent hoses to scrub the interior. For stubborn grease clogs, soaking the hose in a bucket of hot water with dish soap for 30 minutes can help dissolve the buildup.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">6</div>
                    <p className="text-gray-700 pt-1">Reconnect the hose, tighten the hose clamp securely, and run a test cycle. If the hose was heavily clogged or the corrugated plastic is brittle or cracked, replace it with a new dishwasher drain hose - they are inexpensive and available at any hardware store.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Watch for Hose Deterioration</p>
                  <p className="text-gray-700 text-sm">Dishwasher drain hoses degrade over time, especially where they connect to the hot dishwasher outlet. If the hose feels stiff, brittle, or cracked when you handle it, replace it rather than just clearing it. A cracked drain hose will eventually leak under the sink - a problem that can go undetected for weeks and cause water damage to the cabinet floor and subfloor. If you notice signs of water damage, our <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link> service can help identify the full extent of the issue.</p>
                </div>
              </section>

              {/* Cause 3: Garbage Disposal Knockout Plug */}
              <section id="cause-3-garbage-disposal" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Cause 3 - Garbage Disposal Knockout Plug</h2>

                <p className="text-gray-700 mb-4">
                  This is one of the most common dishwasher drainage problems we see after a new garbage disposal installation in Middlesex County homes - and it is the easiest to miss. Every new garbage disposal comes from the factory with a solid plastic knockout plug inside the dishwasher drain inlet (the small nipple on the side of the disposal where the dishwasher drain hose connects). This plug must be physically removed during installation if a dishwasher is connected. If it is left in place, the dishwasher drain hose has nowhere to discharge water, and the dishwasher will not drain at all.
                </p>

                <p className="text-gray-700 mb-4">
                  This issue shows up immediately after a new garbage disposal is installed - either as a DIY project or sometimes by an installer who forgets to knock out the plug. If your dishwasher drained fine before the disposal was replaced and stopped draining right after, this is almost certainly the cause.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">How to Remove the Knockout Plug</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Disconnect the dishwasher drain hose from the garbage disposal inlet. You will need to loosen the hose clamp with a screwdriver or pliers.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">Look into the disposal inlet opening. If you see a solid plastic disc blocking the opening, that is the knockout plug. You can also feel for it with your finger.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">Place a flat-head screwdriver or a wooden dowel against the knockout plug and tap it firmly with a hammer to punch the plug into the disposal. Two or three firm taps are usually enough.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <p className="text-gray-700 pt-1">Reach into the disposal from the top (make sure it is disconnected from power first) and remove the knocked-out plug. If you leave it inside the disposal, it will rattle around and could jam the grinding plate.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">5</div>
                    <p className="text-gray-700 pt-1">Reconnect the dishwasher drain hose and tighten the hose clamp. Run a dishwasher cycle to confirm it drains properly.</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">No Garbage Disposal?</p>
                  <p className="text-gray-700 text-sm">If your kitchen sink does not have a garbage disposal, the dishwasher drain hose connects to a special tailpiece fitting (called a dishwasher tailpiece or branch tailpiece) on the sink drain pipe. This fitting has a small inlet nipple specifically for the dishwasher hose. Make sure this connection is tight and clear of debris. If you are upgrading your <Link href="/services/kitchen-plumbing" className="text-red-700 hover:text-red-800">kitchen plumbing</Link> or replacing a sink, this is a good time to ensure the dishwasher drain connection is properly set up.</p>
                </div>
              </section>

              {/* Cause 4: Air Gap */}
              <section id="cause-4-air-gap" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Cause 4 - Clogged Air Gap</h2>

                <p className="text-gray-700 mb-4">
                  If your kitchen has a small cylindrical chrome or stainless steel fitting mounted on the countertop or the sink deck (usually next to the faucet), that is a dishwasher air gap. The air gap is a backflow prevention device that sits between the dishwasher drain hose and the garbage disposal. Water from the dishwasher flows up into the air gap body, then down through a separate hose to the disposal. The physical air gap between the two hose connections prevents contaminated water from the sink drain from being siphoned back into the dishwasher.
                </p>

                <p className="text-gray-700 mb-4">
                  Over time, the air gap chamber and the hose running from it to the disposal can become clogged with food debris and grease. When this happens, dishwasher water backs up and may overflow from the air gap onto the countertop, or the dishwasher simply fails to drain because the water has nowhere to go.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">How to Clean the Air Gap</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Remove the chrome decorative cap from the air gap by twisting it counter-clockwise or pulling it straight up. Under the chrome cap is usually a smaller plastic inner cap - remove that as well.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">Look down into the air gap chamber. Remove any visible debris, food particles, or buildup with tweezers or your fingers.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">Use a bottle brush, pipe cleaner, or a long thin brush to clean inside the air gap body and down into the hose that leads to the garbage disposal. This hose (typically 7/8-inch diameter) is the most common place for the clog.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <p className="text-gray-700 pt-1">If the clog is deep in the hose, go under the sink and disconnect the hose from the garbage disposal inlet. Clean the hose thoroughly or replace it if it is heavily clogged or deteriorated.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">5</div>
                    <p className="text-gray-700 pt-1">Reassemble the air gap, make sure all hose connections are tight, and run the dishwasher to test.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Not All Kitchens Have an Air Gap</p>
                  <p className="text-gray-700 text-sm">Many homes in New Jersey, including throughout Middlesex County, do not have a countertop air gap installed. Instead, they rely on a high drain loop (the drain hose looped to the highest point under the countertop) as the backflow prevention method. Both approaches serve the same purpose. If your kitchen does not have an air gap fitting on the counter, skip this step and check the high loop instead (Cause 6 below).</p>
                </div>
              </section>

              {/* Cause 5: Drain Pump Failure */}
              <section id="cause-5-drain-pump" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Cause 5 - Drain Pump Failure</h2>

                <p className="text-gray-700 mb-4">
                  The drain pump is the mechanical heart of your dishwasher's drainage system. It is a small electric motor with an impeller that forces water out of the tub and through the drain hose. When the drain pump fails, the dishwasher physically cannot move water out of the tub, and you will find standing water after every cycle regardless of how clean the filter and drain hose are.
                </p>

                <p className="text-gray-700 mb-4">
                  Drain pump failure is less common than the other causes on this list, but it does happen - especially on dishwashers that are 7 to 12 years old. It is important to rule out all the simpler causes first (filter, hose, air gap, disposal) before concluding that the pump has failed, because pump replacement involves disassembling the dishwasher.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Signs of a Failed Drain Pump</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">No Humming Sound During Drain Cycle</h3>
                    <p className="text-gray-700 text-sm">When the dishwasher enters its drain cycle, you should hear a low humming or whirring sound from the drain pump motor. If there is complete silence during the drain phase, the pump motor may have burned out or the electrical connection to the pump may have failed.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Loud Grinding or Buzzing Noise</h3>
                    <p className="text-gray-700 text-sm">If you hear a loud grinding, buzzing, or rattling noise during the drain cycle but water is not draining, the pump impeller may be jammed by a piece of broken glass, a bone fragment, or other hard debris that made it past the filter. The motor is trying to spin but the impeller is stuck.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Motor Runs But Water Does Not Move</h3>
                    <p className="text-gray-700 text-sm">If you hear the pump motor running normally but water stays in the tub, the impeller may be broken or worn. Over time, the impeller blades can crack or erode, reducing the pump's ability to move water. In this case, the pump assembly needs to be replaced.</p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Drain Pump Replacement Is Not a DIY Job for Most Homeowners</p>
                  <p className="text-gray-700 text-sm">Replacing a dishwasher drain pump involves pulling the dishwasher out from under the counter, accessing the underside of the unit, disconnecting electrical and plumbing connections, and removing the old pump assembly. While mechanically inclined homeowners can do it, most people are better served by calling a professional. If the drain pump is confirmed as the issue and the dishwasher is more than 10 years old, it may be more cost-effective to replace the entire unit rather than just the pump. Our <Link href="/services/kitchen-plumbing" className="text-red-700 hover:text-red-800">kitchen plumbing team</Link> can handle both the plumbing disconnection and reconnection for dishwasher replacement.</p>
                </div>
              </section>

              {/* Service Cards */}
              <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
                <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                  <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.658-3.163M11.42 15.17l5.658-3.163M11.42 15.17V20.9m0-5.73l-5.658 3.163M11.42 15.17l5.658 3.163M6.762 17.333l-.007-4.666L11.42 9.504m6.762 4.666l-.007-4.666L11.42 9.504m0 0V3.1" /></svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">Kitchen Plumbing Services</p>
                  <p className="text-sm text-gray-600 mb-2">Professional kitchen plumbing repair, remodel, and installation. Dishwasher hookup, garbage disposal, faucet repair, and sink replacement across Middlesex County, NJ.</p>
                  <Link href="/services/kitchen-plumbing" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
                <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                  <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.658-3.163M11.42 15.17l5.658-3.163M11.42 15.17V20.9m0-5.73l-5.658 3.163M11.42 15.17l5.658 3.163M6.762 17.333l-.007-4.666L11.42 9.504m6.762 4.666l-.007-4.666L11.42 9.504m0 0V3.1" /></svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">Emergency Plumbing</p>
                  <p className="text-sm text-gray-600 mb-2">Dishwasher flooding or severe kitchen drain backup? Our licensed plumbers are available 24/7 for plumbing emergencies in East Brunswick and surrounding areas.</p>
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
                </div>
              </div>

              {/* Mid-Content CTA */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12">
                <p className="text-lg font-bold mb-2">Dishwasher Still Not Draining?</p>
                <p className="text-gray-300 text-sm mb-4">If you have checked the filter, drain hose, and disposal connection and the dishwasher still will not drain, the issue may be deeper in your plumbing system. Our licensed master plumbers serve all of Middlesex County with same-day service.</p>
                <div className="flex flex-wrap gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="border border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition text-sm">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Cause 6: High Drain Loop */}
              <section id="cause-6-high-loop" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Cause 6 - Missing High Drain Loop</h2>

                <p className="text-gray-700 mb-4">
                  The high drain loop is a critical but often overlooked part of dishwasher installation. The dishwasher drain hose must rise to a high point - ideally as close to the underside of the countertop as possible - before descending to the garbage disposal or drain connection. This high point creates an air break that prevents dirty water from the sink drain from flowing backward into the dishwasher through gravity or siphoning.
                </p>

                <p className="text-gray-700 mb-4">
                  Without a proper high loop, two problems occur. First, dirty sink water can back-siphon into the dishwasher, contaminating your clean dishes. Second, the dishwasher may not drain efficiently because water sitting in a low-hanging drain hose creates resistance that the drain pump has to work against. In some configurations, a sagging drain hose can even create a trap that holds water and food debris, eventually causing a full blockage.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">How to Check and Fix the High Loop</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Open the cabinet under the kitchen sink and locate the dishwasher drain hose. Trace its path from where it enters through the cabinet wall to where it connects to the disposal or drain.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">Check if the hose rises to a high point before descending to the connection. The highest point of the hose should be within a few inches of the underside of the countertop. If the hose just runs straight across the bottom of the cabinet or sags down, there is no high loop.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">To create a high loop, use a hose clamp, zip tie, or a dedicated drain hose bracket to secure the hose as high as possible on the inside wall of the cabinet, directly under the countertop. The hose should form an inverted U shape - up to the top of the cabinet, then back down to the disposal connection.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <p className="text-gray-700 pt-1">Make sure the hose is not kinked at the top of the loop. The bend should be gradual, not sharp. If the hose is too short to reach the top of the cabinet, you may need a longer drain hose.</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">High Loop vs Air Gap</p>
                  <p className="text-gray-700 text-sm">A high drain loop and an air gap serve the same purpose - preventing backflow into the dishwasher. Some local plumbing codes require an air gap (the countertop-mounted fitting), while others accept a high loop as sufficient. In New Jersey, a high loop is generally accepted, but check with your local building department if you are doing a kitchen remodel. Either method works well when properly installed. If you are planning a <Link href="/services/kitchen-plumbing" className="text-red-700 hover:text-red-800">kitchen plumbing upgrade</Link>, we can ensure the dishwasher drain is set up to code.</p>
                </div>
              </section>

              {/* Cause 7: Clogged Sink Drain */}
              <section id="cause-7-sink-drain-clog" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Cause 7 - Clogged Sink Drain</h2>

                <p className="text-gray-700 mb-4">
                  Because your dishwasher shares its drain path with your kitchen sink, a clogged kitchen sink drain can directly prevent the dishwasher from draining. If the sink drain is slow or completely blocked, the dishwasher water has nowhere to go even though the dishwasher itself and its drain hose are working perfectly. This is one of those situations where the problem appears to be with the dishwasher but is actually a plumbing issue.
                </p>

                <p className="text-gray-700 mb-4">
                  The telltale sign is that both your kitchen sink and your dishwasher are draining slowly or not at all. If the sink is draining fine but the dishwasher is not, the clog is more likely in the dishwasher drain hose, air gap, or disposal connection rather than the shared sink drain.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">What to Do</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Test the kitchen sink drain. Run the faucet and watch how the sink drains. If it is slow or backed up, clear the sink drain first using the methods in our <Link href="/blog/how-to-unclog-kitchen-sink" className="text-red-700 hover:text-red-800">guide to unclogging a kitchen sink</Link>.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">If you have a garbage disposal, run it with cold water for 30 seconds to clear any food debris that may be partially blocking the drain.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">Once the kitchen sink is draining freely, run the dishwasher on a short cycle to see if the drainage issue is resolved.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <p className="text-gray-700 pt-1">If the sink drain keeps clogging repeatedly, there may be a grease buildup deep in the drain line or a structural pipe issue. This is where professional drain cleaning makes a real difference.</p>
                  </div>
                </div>

                <p className="text-gray-700">
                  Homes in East Brunswick, Edison, and North Brunswick built before the 1970s often have galvanized steel or cast iron drain pipes that are heavily corroded on the inside. This internal corrosion narrows the pipe diameter and catches debris much more easily than modern PVC or ABS pipes. If you have old pipes and chronic drain problems in your kitchen, a <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link> may be the long-term solution.
                </p>
              </section>

              {/* Cause 8: Check Valve */}
              <section id="cause-8-check-valve" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Cause 8 - Faulty Check Valve</h2>

                <p className="text-gray-700 mb-4">
                  Many dishwashers have a check valve (also called a backflow valve or flapper valve) located at the drain pump outlet or at the beginning of the drain hose connection. This one-way valve allows water to flow out of the dishwasher during the drain cycle but prevents it from flowing back in when the pump stops. If the check valve becomes stuck closed, it will prevent the dishwasher from draining. If it becomes stuck open or fails, dirty water can back-flow into the tub between cycles.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">How to Check the Valve</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Consult your dishwasher's manual to locate the check valve. In most models, it is located where the drain hose connects to the pump housing, inside the dishwasher at the bottom of the tub.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">Remove the check valve (you may need to remove the lower spray arm and the sump cover to access it). It is typically a small rubber flapper or a spring-loaded ball valve.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">Clean the valve and the valve seat of any food debris, grease, or calcium buildup. Check that the flapper moves freely. If the valve is cracked, warped, or does not seal properly, replace it - check valves for most dishwasher brands are available online for $10 to $30.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <p className="text-gray-700 pt-1">Reinstall the check valve and run a drain cycle to test. If the valve was the issue, the dishwasher should now drain completely.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Not All Dishwashers Have a Check Valve</p>
                  <p className="text-gray-700 text-sm">Some dishwasher models rely entirely on the air gap or high loop for backflow prevention and do not have an internal check valve. Check your owner's manual or the manufacturer's website to determine if your model has one. If you cannot find the manual, the model number is usually on a label on the inside of the door frame.</p>
                </div>
              </section>

              {/* When to Call a Plumber */}
              <section id="when-to-call-plumber" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to Call a Plumber</h2>

                <p className="text-gray-700 mb-4">
                  Many dishwasher drainage problems can be solved with the troubleshooting steps above. But there are situations where you genuinely need a licensed professional - either a plumber for the drain plumbing or an appliance technician for the dishwasher itself. Here is how to know when it is time to call for help.
                </p>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">!</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Kitchen Sink and Dishwasher Both Not Draining</h3>
                      <p className="text-gray-700 text-sm">When both the kitchen sink and dishwasher refuse to drain, the blockage is in the shared drain line - the P-trap, the wall pipe, or even the main drain. This is a plumbing problem, not a dishwasher problem, and requires professional drain cleaning tools to resolve.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">!</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Water Leaking Under the Dishwasher or Cabinet</h3>
                      <p className="text-gray-700 text-sm">If you see water pooling on the floor in front of the dishwasher, or water damage on the cabinet floor under the sink, there may be a cracked drain hose, a loose connection, or a leak at the dishwasher pump. Water damage under cabinets can quickly lead to mold growth and structural damage if not addressed. Our <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link> service can pinpoint exactly where the leak is coming from.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">!</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">The Problem Keeps Coming Back</h3>
                      <p className="text-gray-700 text-sm">If you clean the filter and drain hose and the dishwasher drains fine for a few days but then stops again, there is a chronic issue that simple cleaning is not addressing. This could be heavy grease buildup deep in the drain line, a partially collapsed pipe, or a venting problem that is causing slow drainage throughout the kitchen plumbing system.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">!</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">New Dishwasher Installation or Disposal Replacement</h3>
                      <p className="text-gray-700 text-sm">If a new dishwasher was recently installed and it has never drained properly, or if a garbage disposal was recently replaced and the dishwasher stopped draining right after, the drain hose connection was likely not set up correctly. A licensed plumber can verify the knockout plug, hose routing, high loop, and all connections.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">!</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Sewage Smell from the Dishwasher or Sink</h3>
                      <p className="text-gray-700 text-sm">A persistent sewer odor coming from the dishwasher or kitchen sink can indicate a venting issue, a missing high loop or air gap, or a problem in the main drain line. Sewer gas contains hydrogen sulfide and methane, which are both health hazards. Do not ignore a persistent sewer smell - call a plumber for proper diagnosis.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 text-white rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">What a Licensed Plumber Brings to Dishwasher Drainage Issues</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    When the problem is plumbing-related rather than appliance-related, a licensed plumber has the tools and expertise to solve it properly:
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#9654;</span> Motorized drain snakes to clear blockages deep in the drain line</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#9654;</span> Video camera inspection to identify the exact location and nature of the clog</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#9654;</span> Proper installation of high loops, air gaps, and drain hose routing to code</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#9654;</span> Garbage disposal installation with correct dishwasher drain connection</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#9654;</span> Diagnosis and repair of shared sink and dishwasher plumbing connections</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#9654;</span> Dishwasher hookup and disconnection for appliance replacement</li>
                  </ul>
                </div>
              </section>

              {/* Prevention */}
              <section id="prevention" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Preventing Dishwasher Drainage Problems</h2>

                <p className="text-gray-700 mb-6">
                  Most dishwasher drainage issues are preventable with simple routine maintenance. These habits take very little time and can save you from the frustration of finding standing water in your dishwasher and having to troubleshoot during a busy week.
                </p>

                <div className="grid md:grid-cols-2 gap-5 mb-8">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3">Clean the Filter Every 2-4 Weeks</h3>
                    <p className="text-gray-700 text-sm">This is the single most important dishwasher maintenance task. A clean filter allows water to flow freely to the drain pump. Set a reminder on your phone - once you make it a habit, it takes less than two minutes each time. Pull out the filter, rinse under running water, scrub with a soft brush, and replace it.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3">Run the Garbage Disposal Before Starting the Dishwasher</h3>
                    <p className="text-gray-700 text-sm">Before you start a dishwasher cycle, run the garbage disposal for 15 to 20 seconds with cold water flowing. This clears any food debris from the disposal and the drain pipe, ensuring the dishwasher has a clear path to drain through. This single habit prevents a surprising number of dishwasher drainage complaints.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3">Scrape Plates Before Loading</h3>
                    <p className="text-gray-700 text-sm">You do not need to pre-rinse dishes (modern dishwashers are designed to handle food residue), but you should scrape off large food particles, bones, and fibrous material into the trash before loading. This reduces the amount of debris that reaches the filter and drain system and keeps everything flowing smoothly.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3">Run Hot Water Before Starting a Cycle</h3>
                    <p className="text-gray-700 text-sm">Before starting the dishwasher, turn on the kitchen faucet and run the hot water for 30 to 60 seconds until it is hot. This ensures that the dishwasher starts its cycle with hot water rather than cold, which improves cleaning performance and helps keep grease dissolved in the drain line rather than solidifying on pipe walls.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3">Monthly Vinegar Rinse Cycle</h3>
                    <p className="text-gray-700 text-sm">Once a month, place a cup of white vinegar in a dishwasher-safe container on the top rack and run a hot cycle with no dishes. The vinegar dissolves grease and mineral deposits inside the dishwasher tub, the spray arms, the filter area, and the drain hose. This keeps the entire system clean and odor-free.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3">Check Under the Sink Periodically</h3>
                    <p className="text-gray-700 text-sm">Every few months, open the cabinet under the kitchen sink and check the dishwasher drain hose. Make sure it has not become kinked by items stored under the sink, that the connections are not dripping, and that the high loop is still secured at the top of the cabinet. Early detection of a kink or leak prevents bigger problems down the road.</p>
                  </div>
                </div>
              </section>

              {/* CTA Banner */}
              <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Need Help With Dishwasher Drainage?</h2>
                <p className="text-red-100 mb-6">
                  When DIY troubleshooting does not solve the problem, our licensed master plumbers in Middlesex County are ready to help. We diagnose and fix kitchen plumbing issues the right way - from clogged drain lines to dishwasher hookups and garbage disposal installations. Same-day service available across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Dishwasher Drainage FAQs</h2>

                <div className="space-y-3">
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Why is there standing water in the bottom of my dishwasher?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">Standing water in the bottom of your dishwasher is almost always caused by a drainage obstruction. The most common culprits are a clogged dishwasher filter or food trap, a kinked or blocked drain hose, a garbage disposal knockout plug that was never removed, or a clogged air gap. Start by cleaning the filter and food trap at the bottom of the tub, then check the drain hose connection under the sink.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Can a clogged garbage disposal cause my dishwasher not to drain?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">Yes, a clogged garbage disposal is one of the most common reasons a dishwasher will not drain. The dishwasher drain hose connects to the garbage disposal or the sink drain tailpiece. If the disposal is full of food waste or if the knockout plug inside the disposal inlet was never removed during installation, water from the dishwasher has nowhere to go and backs up into the dishwasher tub. Run the disposal for 20 seconds with cold water before starting the dishwasher.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">What is the dishwasher air gap and how do I clean it?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">The dishwasher air gap is a small cylindrical fitting mounted on the countertop or sink deck, usually next to the faucet. It prevents dirty water from the sink drain from flowing back into the dishwasher. To clean it, twist off the chrome cap and the plastic inner cap, then remove any debris or buildup from the air gap chamber. Use a bottle brush or pipe cleaner to clear the hose that runs from the air gap down to the garbage disposal or drain.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">How do I know if my dishwasher drain pump is broken?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">If you have cleaned the filter, checked the drain hose, cleared the air gap, and confirmed the garbage disposal connection is open, but the dishwasher still will not drain, the drain pump may be faulty. Signs of a bad drain pump include no humming sound during the drain cycle, a loud grinding or buzzing noise during draining, or the motor running but water not moving. A failed drain pump requires replacement by a qualified technician or plumber.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Should I call a plumber or an appliance technician?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">If the problem is related to the dishwasher's internal components like the drain pump, control board, or check valve, an appliance repair technician is the right call. However, if the issue involves the drain hose connection, the garbage disposal inlet, the air gap, or the sink drain plumbing that the dishwasher connects to, a licensed plumber is the better choice. In many cases the issue is plumbing-related rather than appliance-related, especially when the dishwasher drains into a clogged or slow sink drain.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Why does my dishwasher drain into the sink?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">If dirty water from the dishwasher is backing up into the sink, the drain hose likely lacks a proper high loop or air gap, or the shared drain line is clogged. The dishwasher drain hose must rise to the underside of the countertop before descending to the garbage disposal or drain connection. Without this high loop, gravity can cause water to siphon back and forth between the dishwasher and the sink. Securing the hose at the top of the cabinet with a bracket or zip tie usually solves this problem.</p>
                    </div>
                  </details>
                </div>
              </section>

              {/* Final CTA */}
              <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Dishwasher Still Not Draining?</h2>
                <p className="text-red-100 mb-6">
                  When DIY troubleshooting does not cut it, our licensed master plumbers in Middlesex County are ready to help. We diagnose and fix kitchen drain and dishwasher plumbing problems the right way - no guesswork. Same-day service available across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
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
                  <Link href="/blog/kitchen-sink-plumbing-diagram" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Kitchen Sink Plumbing Diagram</h3>
                      <p className="text-sm text-gray-600">Understand every part under your kitchen sink.</p>
                    </div>
                  </Link>
                  <Link href="/blog/how-to-unclog-kitchen-sink" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Unclog a Kitchen Sink</h3>
                      <p className="text-sm text-gray-600">7 proven methods to clear a clogged kitchen sink drain.</p>
                    </div>
                  </Link>
                  <Link href="/blog/why-is-water-pressure-low" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Why Is My Water Pressure Low?</h3>
                      <p className="text-sm text-gray-600">Diagnose and fix low water pressure in your NJ home.</p>
                    </div>
                  </Link>
                  <Link href="/blog/water-pipe-noises-causes-fixes" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Water Pipe Noises: 8 Causes and Fixes</h3>
                      <p className="text-sm text-gray-600">Why your pipes are making noise and how to stop it.</p>
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
                  <p className="text-gray-600 text-sm mb-4">Dishwasher drainage, kitchen plumbing, and drain repairs throughout Middlesex County, NJ.</p>
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
                    <li><Link href="/services/kitchen-plumbing" className="text-gray-700 hover:text-red-700 transition">Kitchen Plumbing</Link></li>
                    <li><Link href="/services/toilet-and-faucet-installation" className="text-gray-700 hover:text-red-700 transition">Toilet and Faucet Installation</Link></li>
                    <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                    <li><Link href="/services/plumbing-safety-inspections" className="text-gray-700 hover:text-red-700 transition">Plumbing Inspections</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>

                {/* Helpful Articles */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/how-to-unclog-kitchen-sink" className="text-gray-700 hover:text-red-700 transition">How to Unclog a Kitchen Sink</Link></li>
                    <li><Link href="/blog/kitchen-sink-plumbing-diagram" className="text-gray-700 hover:text-red-700 transition">Kitchen Sink Plumbing Diagram</Link></li>
                    <li><Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition">Why Is My Water Pressure Low?</Link></li>
                    <li><Link href="/blog/water-pipe-noises-causes-fixes" className="text-gray-700 hover:text-red-700 transition">Water Pipe Noises: 8 Causes and Fixes</Link></li>
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
