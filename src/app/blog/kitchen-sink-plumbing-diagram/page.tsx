import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Kitchen Sink Plumbing Diagram - Parts, Connections & How It Works",
  description: "Understand your kitchen sink plumbing with a detailed parts breakdown. Learn how supply lines, drain pipes, P-traps, and garbage disposals connect under your sink.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/kitchen-sink-plumbing-diagram" },
  keywords: [
    "kitchen sink plumbing diagram",
    "kitchen sink plumbing",
    "proper kitchen sink plumbing diagram",
    "double kitchen sink plumbing diagram",
    "single bowl kitchen sink plumbing diagram",
    "under kitchen sink plumbing diagram",
    "kitchen sink drain pipe",
    "kitchen sink drain parts",
    "kitchen sink parts",
    "kitchen sink P-trap",
    "kitchen drain assembly",
    "kitchen sink supply lines",
    "garbage disposal plumbing",
    "dishwasher drain connection",
    "kitchen plumbing NJ",
  ],
  openGraph: {
    title: "Kitchen Sink Plumbing Diagram - Parts, Connections & How It Works",
    description: "Complete guide to kitchen sink plumbing parts and how they connect. Expert breakdown from NJ licensed plumbers.",
    type: "article",
    publishedTime: "2026-03-20T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function KitchenSinkPlumbingDiagramPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kitchen Sink Plumbing Diagram - Parts, Connections & How It Works",
    description: "Understand your kitchen sink plumbing with a detailed parts breakdown covering supply lines, drain pipes, P-traps, and garbage disposal connections.",
    image: "https://www.illyrianplumber.com/images/kitchen-plumbing-service.jpg",
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
    datePublished: "2026-03-20T08:00:00.000Z",
    dateModified: "2026-03-20T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/kitchen-sink-plumbing-diagram",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the parts of a kitchen sink drain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The main kitchen sink drain parts are: the drain basket/strainer (at the sink opening), the tailpiece (vertical pipe dropping down from the basket), the P-trap (curved pipe that holds water to block sewer gas), the waste arm (horizontal pipe running to the wall), and the drain stub-out in the wall that connects to the home drain system.",
        },
      },
      {
        "@type": "Question",
        name: "What size drain pipe goes under a kitchen sink?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most kitchen sinks use 1-1/2 inch drain pipes for the tailpiece, P-trap, and waste arm. The drain stub-out in the wall is typically 1-1/2 or 2 inches. If you have a garbage disposal, the disposal outlet is also 1-1/2 inches.",
        },
      },
      {
        "@type": "Question",
        name: "How does a double kitchen sink drain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A double kitchen sink typically uses a continuous waste setup. Each bowl has its own drain basket and tailpiece. The two tailpieces connect via a center tee or end outlet waste fitting, and a single P-trap serves both bowls. Alternatively, each bowl can have its own separate P-trap connecting independently to the wall drain.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my kitchen sink need a P-trap?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The P-trap holds a small amount of standing water that creates a seal against sewer gases. Without a P-trap, harmful gases including hydrogen sulfide and methane can enter your home through the drain. Building codes require P-traps on all plumbing fixtures.",
        },
      },
      {
        "@type": "Question",
        name: "Can I install kitchen sink plumbing myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basic drain assembly replacement is within reach for a confident DIYer - replacing a P-trap, strainer, or supply lines does not require a permit in most cases. However, moving drain lines, adding a garbage disposal to existing plumbing, or connecting to the main drain stack should be handled by a licensed plumber to ensure proper venting and code compliance.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-white">
        {/* Hero */}
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Kitchen Plumbing</span>
                <time dateTime="2026-03-20">March 2026</time>
                <span>12 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Kitchen Sink Plumbing Diagram - Parts, Connections &amp; How It Works
              </h1>
              <p className="text-xl text-gray-300">
                A complete guide to every part under your kitchen sink - from supply lines and shut-off valves to the P-trap, drain pipe, and garbage disposal connection.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-03-20" updateDate="2026-03-25" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Whether you are planning a kitchen remodel or just trying to track down a drip,{" "}
                  <Link href="/services/kitchen-plumbing" className="text-red-700 hover:text-red-800 font-medium">
                    kitchen sink plumbing
                  </Link>{" "}
                  is more straightforward than it looks - once you know what each part is and how it connects to the next. This guide walks through every component in a proper kitchen sink plumbing diagram, from the hot and cold supply lines entering from the wall all the way to the drain pipe disappearing into it.
                </p>
                <p className="text-gray-700">
                  We cover single bowl and double kitchen sink plumbing diagrams, garbage disposal connections, dishwasher drain hookups, and the most common problems that show up when any of these parts fail. If you are in East Brunswick, Edison, Sayreville, or anywhere in Middlesex County and need a hand, our team is a phone call away.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in high-end mechanical plumbing and kitchen and bathroom systems in Middlesex County, NJ. We offer{" "}
                  <Link href="/services/kitchen-plumbing" className="text-red-700 hover:text-red-800">kitchen plumbing</Link>,{" "}
                  <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">faucet installation</Link>,{" "}
                  <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>,{" "}
                  <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">leak detection</Link>, and{" "}
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link>{" "}
                  across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
                </p>
              </div>

              {/* Table of Contents */}
              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
                <ul className="space-y-2">
                  <li><a href="#parts-overview" className="text-red-700 hover:text-red-800">Kitchen Sink Plumbing Parts Overview</a></li>
                  <li><a href="#supply-side" className="text-red-700 hover:text-red-800">Supply Side - Hot and Cold Water Lines</a></li>
                  <li><a href="#drain-side" className="text-red-700 hover:text-red-800">Drain Side - How Water Exits Your Sink</a></li>
                  <li><a href="#double-sink" className="text-red-700 hover:text-red-800">Double Kitchen Sink Plumbing Diagram</a></li>
                  <li><a href="#single-sink" className="text-red-700 hover:text-red-800">Single Bowl Kitchen Sink Plumbing Diagram</a></li>
                  <li><a href="#garbage-disposal" className="text-red-700 hover:text-red-800">Garbage Disposal Plumbing Connections</a></li>
                  <li><a href="#dishwasher" className="text-red-700 hover:text-red-800">Dishwasher Drain Connection</a></li>
                  <li><a href="#common-problems" className="text-red-700 hover:text-red-800">Common Kitchen Sink Plumbing Problems</a></li>
                  <li><a href="#when-to-call" className="text-red-700 hover:text-red-800">When to Call a Professional Plumber</a></li>
                </ul>
              </nav>

              {/* Parts Overview */}
              <section id="parts-overview" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Kitchen Sink Plumbing Diagram - Parts Overview
                </h2>
                <p className="text-gray-700 mb-6">
                  A kitchen sink plumbing system has two distinct sides: the supply side (water coming in) and the drain side (water going out). Understanding both sides and how each component fits together is the foundation for any repair, replacement, or remodel. Below is a numbered breakdown of every part you will find in a standard under kitchen sink plumbing diagram.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Supply Side Components</h3>
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                      <div>
                        <p className="font-semibold text-gray-900">Hot Water Shut-Off Valve</p>
                        <p className="text-gray-700 text-sm">Located on the left supply stub-out coming from the wall or floor. Turns off hot water to the sink without shutting down the entire house. Typically an angle stop valve (quarter-turn ball valve or older compression valve).</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                      <div>
                        <p className="font-semibold text-gray-900">Cold Water Shut-Off Valve</p>
                        <p className="text-gray-700 text-sm">Located on the right supply stub-out. Same design as the hot valve. Always label or know which is which before starting any work under the sink.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                      <div>
                        <p className="font-semibold text-gray-900">Supply Tubes (Flexible Braided Lines)</p>
                        <p className="text-gray-700 text-sm">The flexible connectors - usually stainless steel braided over a rubber core - that run from the shut-off valves up to the faucet inlets. Standard length is 12 to 20 inches. These are the most common DIY replacement under a kitchen sink.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                      <div>
                        <p className="font-semibold text-gray-900">Faucet Body &amp; Connections</p>
                        <p className="text-gray-700 text-sm">The faucet mounts through holes in the sink deck. The hot and cold supply tubes thread onto the faucet supply shanks (3/8-inch compression fittings are standard). A pull-out or pull-down spray faucet will also have a weight on the hose and a connection to the supply for the spray head.</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Drain Side Components</h3>
                  <ol className="space-y-4" start={5}>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                      <div>
                        <p className="font-semibold text-gray-900">Drain Basket / Strainer</p>
                        <p className="text-gray-700 text-sm">Sits in the drain opening of the sink bowl. Catches food debris, holds a stopper, and provides the connection point for the drain assembly below. Secured with a locknut and plumber&apos;s putty or a rubber gasket. Standard opening is 3-1/2 inches.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-sm">6</span>
                      <div>
                        <p className="font-semibold text-gray-900">Tailpiece</p>
                        <p className="text-gray-700 text-sm">The straight vertical pipe that threads onto the bottom of the drain basket. Usually 1-1/2 inches in diameter and 6 to 12 inches long. The tailpiece carries water straight down from the sink bowl to the P-trap below. If the sink has a garbage disposal, the disposal body replaces the drain basket and tailpiece on that bowl.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-sm">7</span>
                      <div>
                        <p className="font-semibold text-gray-900">P-Trap</p>
                        <p className="text-gray-700 text-sm">The curved pipe shaped like the letter &quot;P&quot; on its side (or sometimes a &quot;U&quot; depending on your view). It always holds a small pool of water that acts as a seal to block sewer gases from entering the kitchen. Every fixture connected to a drain is required by code to have a trap. Kitchen P-traps are 1-1/2 inches and come in chrome, PVC, or ABS.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-sm">8</span>
                      <div>
                        <p className="font-semibold text-gray-900">Waste Arm (Trap Arm)</p>
                        <p className="text-gray-700 text-sm">The horizontal pipe that runs from the outlet of the P-trap to the drain stub-out in the wall. Must slope slightly downward toward the wall (1/4 inch per foot) to allow water to drain. The waste arm slides into a slip joint fitting at both ends.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-sm">9</span>
                      <div>
                        <p className="font-semibold text-gray-900">Drain Stub-Out (Wall Drain)</p>
                        <p className="text-gray-700 text-sm">The pipe fitting protruding from the wall inside the cabinet. The waste arm slips into this opening. Behind the wall, this connects to the home&apos;s branch drain line and eventually to the main drain stack.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-sm">10</span>
                      <div>
                        <p className="font-semibold text-gray-900">Vent Pipe</p>
                        <p className="text-gray-700 text-sm">Not visible under the sink, but critical to proper drainage. The vent connects to the drain line behind the wall, runs up through the wall, and exits through the roof. It allows air into the drain system so water can flow freely without creating a vacuum. A blocked or missing vent causes slow drains and gurgling sounds.</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Quick Reference - Standard Sizes</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>Supply stub-outs: 1/2-inch IPS (iron pipe size) or 1/2-inch copper</li>
                    <li>Shut-off valve outlets: 3/8-inch compression</li>
                    <li>Supply tubes: 3/8-inch to 1/2-inch, 12 to 20 inches long</li>
                    <li>Drain basket opening: 3-1/2 inches</li>
                    <li>Tailpiece, P-trap, waste arm: 1-1/2 inches (standard kitchen sink)</li>
                    <li>Wall drain stub-out: 1-1/2 or 2 inches</li>
                  </ul>
                </div>
              </section>

              {/* Supply Side */}
              <section id="supply-side" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Supply Side - Hot and Cold Water Lines
                </h2>
                <p className="text-gray-700 mb-4">
                  The supply side of your kitchen sink is simpler than the drain side. Two lines - one hot, one cold - enter the cabinet from the wall or floor and travel up to the faucet. Here is how each component works:
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Shut-Off Valves (Angle Stops)</h3>
                    <p className="text-gray-700 mb-3">
                      The shut-off valves are the first line of defense in any plumbing repair. They are angle-shaped (hence &quot;angle stop&quot;) to redirect water flow from a horizontal wall pipe or vertical floor pipe up toward the supply tube. Modern valves are quarter-turn ball valves - a 90-degree turn fully opens or closes them. Older homes in East Brunswick and Edison often have compression-style valves that require multiple turns and are more prone to failure.
                    </p>
                    <p className="text-gray-700">
                      If your shut-off valve is stiff, corroded, or leaks when you try to close it, replace it before the next plumbing project. A valve that will not fully close is essentially not there when you need it.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Supply Tubes</h3>
                    <p className="text-gray-700 mb-3">
                      Supply tubes connect the shut-off valves to the faucet. The best option for most kitchens is stainless steel braided supply lines - they resist kinking, handle normal water pressure (40-80 PSI) comfortably, and last 10+ years. Plastic ribbed supply tubes are cheaper but more prone to cracking.
                    </p>
                    <p className="text-gray-700">
                      The connection at the shut-off valve is a 3/8-inch compression nut. The connection at the faucet is typically a 1/2-inch female thread. When replacing supply tubes, always hand-tighten first, then a quarter-turn with a wrench. Over-tightening can crack plastic faucet shanks.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Water Pressure Considerations</h3>
                    <p className="text-gray-700 mb-3">
                      Normal household water pressure in Middlesex County ranges from 40 to 80 PSI. At the kitchen faucet, you should get a strong, consistent flow. Weak flow from only the kitchen faucet (while other fixtures are fine) points to a problem at that specific faucet - usually a clogged aerator or a partially closed shut-off valve.
                    </p>
                    <p className="text-gray-700">
                      If hot water pressure is weak at the kitchen sink but cold is fine, the issue is likely in the hot water supply line - check for a kinked supply tube, a partially closed shut-off, or sediment buildup at the water heater outlet.
                    </p>
                  </div>
                </div>
              </section>

              {/* Drain Side */}
              <section id="drain-side" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Drain Side - How Water Exits Your Sink
                </h2>
                <p className="text-gray-700 mb-6">
                  The drain side is where most kitchen sink plumbing problems originate. Understanding the path water takes from the sink bowl to the wall helps you diagnose clogs, leaks, and odors correctly.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Step 1 - Drain Basket and Strainer</h3>
                    <p className="text-gray-700">
                      Water enters the drain through the strainer basket sitting in the sink opening. The basket screens out food particles and debris. It is sealed to the sink with plumber&apos;s putty or a rubber gasket on the underside, and held in place by a locknut threaded from below. Leaks around the rim of the drain basket usually mean the putty has dried out or the locknut has loosened.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Step 2 - Tailpiece</h3>
                    <p className="text-gray-700">
                      The tailpiece is the straight pipe threading onto the drain basket body. It drops vertically 6 to 12 inches to reach the inlet of the P-trap. If the sink is deeper than average, an extension can be added. The tailpiece uses a slip nut and washer at the P-trap end - no threads, just compression. Leaks here are common and easy to fix by tightening the slip nut or replacing the rubber washer.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Step 3 - The P-Trap</h3>
                    <p className="text-gray-700 mb-3">
                      The P-trap is the most important piece in the entire drain assembly. It consists of a J-bend (the curved section) and a straight trap arm. The J-bend connects to the tailpiece above it and the waste arm beside it. The curve of the J-bend always holds about a cup of water - this water seal prevents sewer gases from rising up through the drain into your kitchen.
                    </p>
                    <p className="text-gray-700 mb-3">
                      All P-trap joints use slip-joint fittings (large plastic nuts with rubber washers). Hand-tight is usually enough; over-tightening cracks plastic. If you smell sewage from a drain that is used infrequently, the trap water has evaporated - simply run the water for a minute to refill the seal.
                    </p>
                    <p className="text-gray-700">
                      P-traps are also where small objects (rings, earrings, utensils) fall and get caught. Removing the J-bend is the first step to recovering anything dropped down the drain.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Step 4 - Waste Arm to Wall Drain</h3>
                    <p className="text-gray-700 mb-3">
                      The waste arm (also called the trap arm) is the horizontal pipe connecting the P-trap outlet to the drain stub-out in the wall. It should slope slightly downhill toward the wall - about 1/4 inch drop per foot. A flat or uphill waste arm leads to standing water and slow drains.
                    </p>
                    <p className="text-gray-700">
                      The waste arm slides into the wall drain fitting and is held with a slip nut. The maximum allowable horizontal distance from the trap to the wall connection (without additional venting) is typically 42 inches under NJ plumbing code - longer runs require a separate vent or an air admittance valve.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Step 5 - Vent Pipe (Behind the Wall)</h3>
                    <p className="text-gray-700">
                      After the waste arm enters the wall, the drain line connects to a vent. The vent rises up through the wall cavity, through the attic, and exits the roof. Air entering through the vent breaks any siphon action that would otherwise pull water out of the P-trap. Symptoms of a blocked or missing vent include: water draining slowly, gurgling sounds from the sink or nearby fixtures when the sink drains, and a P-trap that empties out (losing its gas seal) even though you use the sink regularly.
                    </p>
                  </div>
                </div>
              </section>

              {/* Double Sink */}
              <section id="double-sink" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Double Kitchen Sink Plumbing Diagram
                </h2>
                <p className="text-gray-700 mb-6">
                  A double kitchen sink has two bowls side by side, each with its own drain opening. The drain plumbing needs to merge both bowls into a single P-trap and waste arm before exiting to the wall. There are two standard approaches:
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Option 1 - Continuous Waste (Center Outlet)</h3>
                    <p className="text-gray-700 mb-3">
                      This is the most common setup for double sinks. Both bowls have their own drain basket and tailpiece. A tee fitting sits in the center at the same height as both tailpieces. Each tailpiece connects to one arm of the tee. The center outlet of the tee drops down to the P-trap, which then connects to the waste arm running to the wall.
                    </p>
                    <p className="text-gray-700">
                      This setup works well when both bowls are the same depth and the drain opening is centered between them. The entire assembly is sometimes called a &quot;center outlet waste kit.&quot; All connections are slip-joint, making disassembly easy.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Option 2 - End Outlet Waste</h3>
                    <p className="text-gray-700 mb-3">
                      Instead of a center tee, an end outlet setup routes both tailpieces into a horizontal &quot;continuous waste&quot; pipe that runs the full width of the cabinet, with the outlet dropping from one end to the P-trap below. One tailpiece connects to the end and the other connects via a side inlet tee somewhere in the middle of the horizontal pipe.
                    </p>
                    <p className="text-gray-700">
                      This design is often used when one sink bowl has a garbage disposal, because the disposal outlet sits lower and benefits from the horizontal run giving extra vertical drop.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Option 3 - Separate P-Traps</h3>
                    <p className="text-gray-700 mb-3">
                      Some double sink installations use two completely separate P-traps, each with its own waste arm connecting independently to two stub-outs in the wall (or a double-inlet sanitary tee inside the wall). This approach is less common for residential kitchens but is sometimes used in commercial settings or when the wall drain can accommodate two connections.
                    </p>
                    <p className="text-gray-700">
                      Separate P-traps are also the correct approach if one bowl has a garbage disposal and the other does not, and the disposal outlet is at the same height as the standard drain outlet - they simply cannot share a single horizontal waste line without height differences to create proper slope.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Double Sink Diagram - Layout Summary</h4>
                  <p className="text-gray-700 text-sm mb-3">Reading the under-cabinet space left to right in a typical double sink with garbage disposal on the left:</p>
                  <ol className="text-gray-700 text-sm space-y-1 list-decimal list-inside">
                    <li>Left bowl - garbage disposal body (replaces strainer and tailpiece)</li>
                    <li>Disposal discharge outlet (side of disposal, 1-1/2 inch)</li>
                    <li>Disposal outlet connects via elbow and short horizontal run to the tee</li>
                    <li>Right bowl - standard drain basket and tailpiece</li>
                    <li>Tailpiece from right bowl connects to top of tee</li>
                    <li>Tee outlet drops to P-trap inlet</li>
                    <li>P-trap J-bend curves and connects to waste arm</li>
                    <li>Waste arm runs horizontally to wall stub-out</li>
                  </ol>
                </div>
              </section>

              {/* Single Sink */}
              <section id="single-sink" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Single Bowl Kitchen Sink Plumbing Diagram
                </h2>
                <p className="text-gray-700 mb-6">
                  A single bowl kitchen sink has the simplest possible drain assembly - a straight path from the strainer down to the P-trap and out to the wall. There are no tees or horizontal waste connections to worry about, which makes installation and repairs faster.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Standard Single Bowl Layout</h3>
                    <p className="text-gray-700 mb-3">
                      From top to bottom and then horizontally:
                    </p>
                    <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                      <li>Drain basket seated in the 3-1/2-inch sink opening, sealed with plumber&apos;s putty below the sink rim</li>
                      <li>Locknut tightened from below, compressing a rubber gasket against the underside of the sink</li>
                      <li>Tailpiece threaded into the drain basket body, dropping straight down</li>
                      <li>P-trap J-bend connecting to the tailpiece with a slip nut and rubber washer</li>
                      <li>Waste arm connecting the P-trap outlet to the wall stub-out with 1/4-inch-per-foot downward slope</li>
                    </ol>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Single Bowl With Garbage Disposal</h3>
                    <p className="text-gray-700">
                      When a single bowl sink has a garbage disposal, the disposal mounts directly under the sink opening in place of the standard strainer and tailpiece. The disposal is larger, so the P-trap typically needs to be positioned lower and may require a longer tailpiece (or an elbow extension) to reach the disposal&apos;s side discharge outlet. The rest of the path - P-trap to waste arm to wall - is identical to the standard single bowl setup.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Single Bowl Advantage</h4>
                  <p className="text-gray-700 text-sm">
                    Because there is only one drain path, single bowl sinks are easier to clear when clogged and easier to inspect when leaking. If you are doing a first-time install or teaching yourself kitchen sink plumbing, a single bowl is the best starting point.
                  </p>
                </div>
              </section>

              {/* Garbage Disposal */}
              <section id="garbage-disposal" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Garbage Disposal Plumbing Connections
                </h2>
                <p className="text-gray-700 mb-6">
                  A garbage disposal changes the drain assembly more than any other single kitchen appliance. Instead of a strainer, the disposal body itself fills the sink drain opening. Understanding how it connects to the drain system and how the dishwasher drain fits in is essential for any kitchen plumbing diagram.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">How the Disposal Mounts</h3>
                    <p className="text-gray-700 mb-3">
                      The disposal uses a mounting flange that sits in the sink drain opening, sealed with plumber&apos;s putty - just like a standard strainer, but heavier. A mounting ring locks onto the flange from below. The disposal body then twists onto the mounting ring (usually a bayonet-style lock). This means the disposal can be removed and reinstalled without disturbing the sink or the drain connection above.
                    </p>
                    <p className="text-gray-700">
                      The weight of the disposal is significant - 15 to 25 pounds for most residential units. If the mounting ring ever feels loose or the disposal vibrates excessively, tighten or replace the mounting hardware before the weight causes a leak or cracks the sink.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Discharge Outlet and Drain Connection</h3>
                    <p className="text-gray-700 mb-3">
                      Water and ground food exit the disposal through a 1-1/2-inch discharge outlet located on the side of the disposal body, near the bottom. This outlet connects via an elbow (usually included with the disposal) to the drain assembly - either to a tee in a double sink setup, or directly to the P-trap in a single sink.
                    </p>
                    <p className="text-gray-700">
                      The discharge outlet should have a short drop before reaching the P-trap inlet. If the P-trap inlet is at the same height or higher than the discharge outlet, water will not drain properly. In cramped cabinets, an S-trap was historically used, but S-traps are not code-compliant in NJ - a proper P-trap with an adequate drop is always the right approach.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Dishwasher Knockout Plug</h3>
                    <p className="text-gray-700 mb-3">
                      Every garbage disposal ships with a knockout plug in the dishwasher inlet port (a small port on the upper side of the disposal body). If you are connecting a dishwasher, you must knock this plug out from inside the disposal before attaching the dishwasher drain hose. If you are not connecting a dishwasher, leave the plug in place.
                    </p>
                    <p className="text-gray-700">
                      Failing to remove the knockout plug is one of the most common mistakes during a new disposal installation - the dishwasher will back up immediately and may overflow. Always check for this before reconnecting the dishwasher drain.
                    </p>
                  </div>
                </div>
              </section>

              {/* Dishwasher Drain */}
              <section id="dishwasher" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Dishwasher Drain Connection
                </h2>
                <p className="text-gray-700 mb-6">
                  If your kitchen has a dishwasher, its drain hose connects into the kitchen sink drain assembly. There are two correct ways to do this, and one method (the high loop) is often misunderstood.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Method 1 - Air Gap</h3>
                    <p className="text-gray-700 mb-3">
                      An air gap is a small cylindrical device mounted on the sink deck or countertop near the faucet. The dishwasher drain hose connects to the inlet side of the air gap, and a second hose runs from the air gap outlet down to the garbage disposal inlet (or to the drain tailpiece via a wye fitting if there is no disposal).
                    </p>
                    <p className="text-gray-700 mb-3">
                      The air gap physically breaks the connection between the drain line and the dishwasher, preventing contaminated drain water from being siphoned back into the dishwasher if the drain line becomes pressurized. New Jersey plumbing code requires an air gap or an approved alternative on all dishwasher installations.
                    </p>
                    <p className="text-gray-700">
                      Air gaps can become clogged with debris over time. If the air gap drips or spurts water from its cap during the dishwasher drain cycle, clean or replace the air gap - it is an inexpensive fix.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Method 2 - High Loop</h3>
                    <p className="text-gray-700 mb-3">
                      Some jurisdictions accept a high loop as an alternative to an air gap. The dishwasher drain hose is routed up as high as possible under the countertop (secured with a strap or zip tie near the top of the cabinet) before dropping back down to connect to the disposal or drain tailpiece. The elevated loop prevents backflow by gravity - drain water would have to flow uphill to reach the dishwasher.
                    </p>
                    <p className="text-gray-700">
                      A high loop does not provide the same physical air break as a true air gap. In NJ, if your local inspector requires an air gap, the high loop alone is not sufficient. When in doubt, install the air gap - it is the safest and most code-defensible approach.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Connecting Without a Disposal</h3>
                    <p className="text-gray-700">
                      If there is no garbage disposal, the dishwasher drain connects to the sink drain tailpiece via a wye fitting (a tailpiece with a side inlet). The wye fitting replaces the standard tailpiece directly below the drain basket. The dishwasher drain hose (from the air gap or in a high loop) connects to the side inlet of the wye. Everything else below - P-trap, waste arm, wall drain - stays the same.
                    </p>
                  </div>
                </div>
              </section>

              {/* Service Card */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.658-3.163M11.42 15.17l5.658-3.163M11.42 15.17V20.9m0-5.73l-5.658 3.163M11.42 15.17l5.658 3.163M6.762 17.333l-.007-4.666L11.42 9.504m6.762 4.666l-.007-4.666L11.42 9.504m0 0V3.1" /></svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Kitchen Plumbing Services</p>
                <p className="text-sm text-gray-600 mb-2">Need help with your kitchen plumbing? Professional repair, remodel, and installation services for sinks, faucets, disposals, and more.</p>
                <Link href="/services/kitchen-plumbing" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            {/* Service Card */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.658-3.163M11.42 15.17l5.658-3.163M11.42 15.17V20.9m0-5.73l-5.658 3.163M11.42 15.17l5.658 3.163M6.762 17.333l-.007-4.666L11.42 9.504m6.762 4.666l-.007-4.666L11.42 9.504m0 0V3.1" /></svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Water Leak Detection</p>
                <p className="text-sm text-gray-600 mb-2">Suspect a hidden leak under your kitchen sink? Our advanced leak detection finds problems without tearing up walls or floors.</p>
                <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

              {/* Mid-content CTA */}
              <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
                <p className="font-bold text-lg mb-1">Need help with your kitchen sink plumbing?</p>
                <p className="text-red-100 text-sm mb-4">
                  We handle everything from drain assembly replacement to full kitchen remodels. Serving East Brunswick, Edison, Sayreville, Old Bridge, and all of Middlesex County.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Common Problems */}
              <section id="common-problems" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Common Kitchen Sink Plumbing Problems
                </h2>
                <p className="text-gray-700 mb-6">
                  Knowing the parts makes it much easier to track down what is wrong. Here are the most common issues homeowners in Middlesex County encounter with kitchen sink plumbing:
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-2">Leak at the Drain Basket Rim</h3>
                    <p className="text-gray-700 text-sm">
                      Water seeps from the joint between the drain basket and the sink bowl. Cause: dried or missing plumber&apos;s putty, a cracked rubber gasket, or a loose locknut. Fix: remove the drain basket, clean the surfaces, re-apply plumber&apos;s putty or a new gasket, and retighten the locknut. This is the most common sink leak location.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-2">Dripping P-Trap or Slip-Joint Connections</h3>
                    <p className="text-gray-700 text-sm">
                      Water drips from the slip-nut connections at either end of the P-trap or from the waste arm connection. Cause: worn or compressed rubber washers, loose slip nuts, or cracked plastic pipe from age or over-tightening. Fix: tighten the slip nuts by hand first; if that does not stop it, replace the washer inside. If the pipe itself is cracked, replace the affected section - PVC drain kits are inexpensive and available at any hardware store.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-2">Slow Draining Sink</h3>
                    <p className="text-gray-700 text-sm">
                      Water drains slowly or pools in the sink. Cause: grease, soap scum, or food debris partially blocking the drain assembly - most often in the P-trap or at the drain basket. Fix: remove and clean the P-trap J-bend (have a bucket ready). If the clog is further downstream, use a drain snake through the wall stub-out. Avoid chemical drain cleaners in kitchen drains - they are hard on drain gaskets and rubber washers, and rarely address the root cause.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-2">Sewer Gas Odor From the Drain</h3>
                    <p className="text-gray-700 text-sm">
                      A rotten egg or sewage smell from the kitchen sink. Cause: the P-trap water seal has evaporated (common in infrequently used sinks), a dry or cracked wax ring at a nearby floor drain, or a blocked vent pipe. Fix: run water to refill the trap. If the odor persists after refilling, the vent may be blocked - check the roof vent for debris or ice buildup. A blocked vent requires a plumber to safely diagnose and clear.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-2">Dripping or Corroded Shut-Off Valves</h3>
                    <p className="text-gray-700 text-sm">
                      The angle stop valves under the sink drip at the packing nut or at the compression fitting. Cause: worn packing material, corroded fittings, or a valve that has sat untouched for years and developed a slow leak when finally operated. Fix: try tightening the packing nut slightly (1/8 turn). If the leak persists or the valve is visibly corroded, replace it. In older homes in North Brunswick and Sayreville, galvanized or original brass compression valves from the 1970s and 1980s are particularly prone to failure. Replacing them with modern quarter-turn ball valves is a worthwhile upgrade.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-2">Garbage Disposal Leak at the Mounting Flange</h3>
                    <p className="text-gray-700 text-sm">
                      Water leaks from the top of the disposal where it meets the sink. Cause: deteriorated plumber&apos;s putty around the sink flange, or a loose mounting ring. Fix: remove the disposal, clean off the old putty, re-apply fresh plumber&apos;s putty, and remount. This repair requires temporarily disconnecting the drain line and the power supply to the disposal.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-2">Supply Line Leak at the Shut-Off Valve or Faucet</h3>
                    <p className="text-gray-700 text-sm">
                      Dripping from the compression nut where the supply tube meets the valve or the faucet. Cause: loose nut or a worn compression ring inside the fitting. Fix: try tightening the compression nut 1/4 turn. If still leaking, replace the supply tube - they are inexpensive and quick to swap. Do not attempt to re-use a compression fitting that has already been over-tightened; replace the whole fitting.
                    </p>
                  </div>
                </div>
              </section>

              {/* When to Call */}
              <section id="when-to-call" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  When to Call a Professional Plumber
                </h2>
                <p className="text-gray-700 mb-6">
                  Many kitchen sink repairs are genuinely DIY-friendly. Replacing a supply tube, swapping out a P-trap, or reinstalling a drain basket are all reasonable for a handy homeowner with basic tools. However, some situations call for a licensed plumber:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Call a Plumber For:</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex gap-2"><span className="text-red-700 font-bold">-</span> Moving the drain line to a new location in the wall or floor</li>
                      <li className="flex gap-2"><span className="text-red-700 font-bold">-</span> Adding a new vent or extending existing vent pipes</li>
                      <li className="flex gap-2"><span className="text-red-700 font-bold">-</span> Replacing a corroded drain stub-out inside the wall</li>
                      <li className="flex gap-2"><span className="text-red-700 font-bold">-</span> A persistent slow drain that does not clear with snaking (may indicate a venting or main line issue)</li>
                      <li className="flex gap-2"><span className="text-red-700 font-bold">-</span> Shut-off valves that do not fully close (need supply shut-off at the street to replace safely)</li>
                      <li className="flex gap-2"><span className="text-red-700 font-bold">-</span> Any work involving the main drain stack or connections at the floor</li>
                      <li className="flex gap-2"><span className="text-red-700 font-bold">-</span> Full kitchen remodel plumbing - new sink location, added fixtures, or updated supply lines throughout</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Safe DIY Repairs:</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex gap-2"><span className="text-green-700 font-bold">-</span> Replacing flexible supply tubes</li>
                      <li className="flex gap-2"><span className="text-green-700 font-bold">-</span> Swapping out P-trap and tailpiece (same location)</li>
                      <li className="flex gap-2"><span className="text-green-700 font-bold">-</span> Re-sealing a drain basket with plumber&apos;s putty</li>
                      <li className="flex gap-2"><span className="text-green-700 font-bold">-</span> Clearing a clog at the P-trap</li>
                      <li className="flex gap-2"><span className="text-green-700 font-bold">-</span> Replacing a faucet (same mounting holes)</li>
                      <li className="flex gap-2"><span className="text-green-700 font-bold">-</span> Replacing a garbage disposal (same mounting flange)</li>
                      <li className="flex gap-2"><span className="text-green-700 font-bold">-</span> Cleaning or replacing a drain basket strainer</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5">
                  <p className="text-gray-700 text-sm">
                    <strong>A note on permits in NJ:</strong> Replacing in-kind plumbing fixtures and drain fittings generally does not require a permit in New Jersey. However, any work that changes the location of a fixture, adds new supply or drain lines, or involves opening walls typically does require a permit and licensed plumber. Our team handles the permit process for Middlesex County customers as part of every major job.
                  </p>
                </div>
              </section>

              {/* Final CTA */}
              <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Kitchen Plumbing Help in Middlesex County</h2>
                <p className="text-red-100 mb-6">
                  From a leaking P-trap to a full kitchen remodel, Illyrian Plumber handles all kitchen sink plumbing for homeowners in East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. Licensed, insured, and available 24/7.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Call {BUSINESS_INFO.phone}
                  </a>
                  <Link href="/services/kitchen-plumbing" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                    Kitchen Plumbing Services
                  </Link>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">What are the parts of a kitchen sink drain?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">The main kitchen sink drain parts are: the drain basket/strainer, the tailpiece, the P-trap, the waste arm, and the wall drain stub-out. If a garbage disposal is present, it replaces the basket and tailpiece on that bowl.</p>
                    </div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">What size drain pipe goes under a kitchen sink?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">Most kitchen sinks use 1-1/2-inch drain pipes for the tailpiece, P-trap, and waste arm. The wall stub-out is typically 1-1/2 or 2 inches depending on when the home was built.</p>
                    </div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">How does a double kitchen sink drain?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">A double kitchen sink uses a continuous waste fitting that joins both bowl tailpieces into a single outlet leading to the P-trap. From there, one waste arm runs to the wall drain. This is called a center outlet or end outlet waste kit depending on the configuration.</p>
                    </div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Why does my kitchen sink need a P-trap?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">The P-trap holds a small pool of water that seals the drain against sewer gases including hydrogen sulfide and methane. Building codes require a trap on every plumbing fixture. Without it, harmful gases enter the living space through the open drain.</p>
                    </div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Can I install kitchen sink plumbing myself?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">Replacing supply tubes, a P-trap, drain basket, or a garbage disposal in the same location is a reasonable DIY project. Moving drain lines, adding vents, or connecting to the main drain stack requires a licensed plumber and typically a permit in NJ.</p>
                    </div>
                  </details>
                </div>
              </section>

              {/* Related Articles */}
              <section className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/why-is-water-pressure-low" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Why Is My Water Pressure Low?</h3>
                      <p className="text-sm text-gray-600">Low pressure at the kitchen faucet - causes and fixes explained.</p>
                    </div>
                  </Link>
                  <Link href="/blog/whole-house-water-filter-worth-it" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Is a Whole House Water Filter Worth It?</h3>
                      <p className="text-sm text-gray-600">Protect your kitchen plumbing from sediment and mineral buildup.</p>
                    </div>
                  </Link>
                  <Link href="/blog/how-to-unclog-kitchen-sink" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Unclog a Kitchen Sink</h3>
                      <p className="text-sm text-gray-600">7 proven methods to clear stubborn kitchen drain clogs.</p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            {/* Sticky Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">

                {/* Call Now */}
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need a Plumber?</p>
                  <p className="text-gray-600 text-sm mb-4">Kitchen plumbing repairs and remodels in Middlesex County.</p>
                  <a
                    href={BUSINESS_INFO.phoneLink}
                    className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2"
                  >
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a
                    href={BUSINESS_INFO.phone2Link}
                    className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full"
                  >
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
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

                {/* Our Services */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our Services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/kitchen-plumbing" className="text-gray-700 hover:text-red-700 transition font-medium">Kitchen Plumbing</Link></li>
                    <li><Link href="/services/toilet-and-faucet-installation" className="text-gray-700 hover:text-red-700 transition">Toilet &amp; Faucet Installation</Link></li>
                    <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                    <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>

                {/* You Might Also Like */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/blog/how-to-unclog-kitchen-sink" className="text-gray-700 hover:text-red-700 transition leading-snug block">
                        How to Unclog a Kitchen Sink
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition leading-snug block">
                        Why Is My Water Pressure Low?
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/whole-house-water-filter-worth-it" className="text-gray-700 hover:text-red-700 transition leading-snug block">
                        Is a Whole House Water Filter Worth It?
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/how-to-drain-flush-water-heater" className="text-gray-700 hover:text-red-700 transition leading-snug block">
                        How to Flush a Water Heater
                      </Link>
                    </li>
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
