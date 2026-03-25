import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How to Fix a Leaking Pipe (Temporary & Permanent Repairs)",
  description: "Leaking pipe? Learn how to stop a pipe leak fast with temporary fixes like repair tape, epoxy putty, and pipe clamps - plus permanent repair methods. When to call a licensed NJ plumber.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/how-to-fix-leaking-pipe" },
  keywords: [
    "how to fix a leaking pipe",
    "leaking pipe repair",
    "pipe leak fix",
    "how to stop a pipe leak",
    "pipe leak tape",
    "pipe leak under sink",
    "leaking pipe joint",
    "emergency pipe repair",
    "water pipe leaking",
    "pipe repair NJ",
    "fix leaking pipe without replacing",
    "pipe leak epoxy",
    "pipe clamp repair",
    "pinhole leak in pipe",
    "cracked pipe repair",
    "copper pipe leak repair",
    "PEX pipe leak fix",
    "leaking pipe fitting",
    "temporary pipe repair",
    "pipe leak cost to fix",
    "plumber pipe repair East Brunswick NJ",
    "leaking water pipe Middlesex County",
    "how to fix leaking pipe joint",
    "pipe repair clamp",
    "SharkBite fitting leak repair",
  ],
  openGraph: {
    title: "How to Fix a Leaking Pipe (Temporary & Permanent Repairs)",
    description: "Step-by-step guide to fixing a leaking pipe - emergency shutoff, temporary repairs, permanent fixes, and when to call a licensed NJ plumber.",
    type: "article",
    publishedTime: "2026-03-25T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function HowToFixLeakingPipe() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Fix a Leaking Pipe (Temporary & Permanent Repairs)",
    description: "Complete guide to fixing a leaking pipe at home. Emergency shutoff steps, temporary repairs with tape, epoxy, and clamps, permanent fixes, pipe materials in NJ homes, costs, and when to call a licensed Middlesex County NJ plumber.",
    image: "https://www.illyrianplumber.com/images/water-leak-detection-service.jpg",
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
      "@id": "https://www.illyrianplumber.com/blog/how-to-fix-leaking-pipe",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I temporarily stop a leaking pipe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The fastest temporary fix depends on the leak type. For pinhole leaks, wrap the area tightly with self-fusing silicone repair tape like Rescue Tape. For small cracks, apply two-part epoxy putty such as Oatey Fix-It Stick directly over the leak after drying the pipe. For larger leaks, use a pipe repair clamp that bolts around the pipe with a rubber gasket. All temporary fixes require shutting off the water first and drying the pipe surface for the repair to hold.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to fix a leaking pipe in NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In New Jersey, most single pipe leak repairs cost between $150 and $500 for accessible leaks. If the leak is behind a wall or under a slab, costs can range from $500 to $2,000 or more due to the access work required. Emergency after-hours repairs typically add $100 to $200 to the total. The final cost depends on the pipe material, location of the leak, and whether the section needs to be cut out and replaced or can be repaired in place.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use pipe leak tape as a permanent fix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Pipe repair tape, including self-fusing silicone tape and fiberglass wrap tape, is designed as a temporary emergency fix only. It can hold for days or even weeks under low pressure, but it will eventually fail because it does not address the underlying damage to the pipe wall or joint. A permanent fix requires either soldering the leak (for copper), replacing the damaged section, or using a proper mechanical coupling like a SharkBite or compression fitting.",
        },
      },
      {
        "@type": "Question",
        name: "Why do pipes develop pinhole leaks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pinhole leaks in copper pipes are caused by pitting corrosion, which occurs when the water chemistry creates small electrochemical reactions on the interior pipe wall. Factors include high pH water, high chlorine levels, low mineral content (soft water), and the presence of dissolved oxygen. Homes in parts of Middlesex County, NJ with aggressive water chemistry are more susceptible. If you are getting multiple pinhole leaks, it is a sign of systemic corrosion and whole-house repiping may be the best long-term solution.",
        },
      },
      {
        "@type": "Question",
        name: "Should I fix a leaking pipe myself or call a plumber?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a single, accessible leak on an exposed pipe under a sink or in the basement, a confident DIYer can make a temporary repair and even a permanent fix with SharkBite fittings. However, you should call a licensed plumber if the leak is behind a wall or ceiling, if it involves a gas line, if the pipe is corroded in multiple spots, if you have galvanized or lead pipes, or if the water damage has spread. A plumber can also determine whether the leak is a symptom of a larger issue like failing pipes throughout the house.",
        },
      },
      {
        "@type": "Question",
        name: "How do I find a hidden pipe leak behind a wall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signs of a hidden leak include unexplained increases in your water bill, the sound of running water when all fixtures are off, damp or discolored spots on walls or ceilings, warped flooring, musty odors, and mold growth. A licensed plumber uses acoustic leak detection equipment, thermal imaging cameras, and moisture meters to pinpoint the exact location of the leak without unnecessary demolition. If you suspect a hidden leak, do not delay - water damage compounds quickly.",
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
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Water Leak Detection</span>
                <time dateTime="2026-03-25">March 2026</time>
                <span>16 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How to Fix a Leaking Pipe (Temporary & Permanent Repairs)
              </h1>
              <p className="text-xl text-gray-300">
                Emergency shutoff steps, temporary fixes with tape, epoxy, and clamps, permanent repair methods for every pipe type, and when to call a licensed plumber in NJ.
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
                  A leaking pipe is one of those plumbing problems that demands your attention immediately. Even a small drip can waste hundreds of gallons of water per month, drive up your utility bill, and cause serious water damage to walls, floors, ceilings, and foundations if left unaddressed. If you need <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-semibold">water leak detection and repair</Link> in Middlesex County, NJ, you are dealing with one of the most common service calls we handle.
                </p>
                <p className="text-gray-700">
                  The good news is that many pipe leaks can be temporarily stopped with basic tools and supplies from any hardware store, buying you time until a permanent repair can be made. The bad news is that most temporary fixes are exactly that - temporary. A pipe that has started leaking has failed at that point, and the underlying cause (corrosion, pressure, age, freeze damage) is not going away on its own.
                </p>
                <p className="text-gray-700">
                  In this guide, we cover everything you need to know about fixing a leaking pipe: the critical first steps to take in an emergency, how to identify what type of leak you have, temporary repair methods that actually work, permanent fixes you can do yourself or hire a plumber for, the pipe materials commonly found in New Jersey homes, realistic costs, and prevention strategies. Whether you are in East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, or North Brunswick, this guide applies to the pipes in your home.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link>, and <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800">plumbing safety inspections</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
                </p>
              </div>

              {/* Table of Contents */}
              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
                <ul className="space-y-2">
                  <li><a href="#emergency-steps" className="text-red-700 hover:text-red-800">Emergency First Steps: Shut Off the Water</a></li>
                  <li><a href="#types-of-pipe-leaks" className="text-red-700 hover:text-red-800">Types of Pipe Leaks</a></li>
                  <li><a href="#temporary-fixes" className="text-red-700 hover:text-red-800">Temporary Pipe Leak Fixes</a></li>
                  <li><a href="#permanent-fixes" className="text-red-700 hover:text-red-800">Permanent Pipe Leak Repairs</a></li>
                  <li><a href="#when-to-call-plumber" className="text-red-700 hover:text-red-800">When to Call a Plumber</a></li>
                  <li><a href="#pipe-materials-nj" className="text-red-700 hover:text-red-800">Pipe Materials in NJ Homes</a></li>
                  <li><a href="#cost-of-pipe-repair" className="text-red-700 hover:text-red-800">Cost of Pipe Repair in NJ</a></li>
                  <li><a href="#prevention" className="text-red-700 hover:text-red-800">How to Prevent Pipe Leaks</a></li>
                  <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
                </ul>
              </nav>

              {/* Emergency First Steps */}
              <section id="emergency-steps" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Emergency First Steps: Shut Off the Water</h2>

                <p className="text-gray-700 mb-4">
                  Before you do anything else - before you grab tape, before you call a plumber, before you search the internet for solutions - you need to stop the water flow. Every second a pipe is actively leaking under pressure, water is damaging your home. The faster you shut it off, the less damage you will deal with.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Step by Step: Stopping the Leak Immediately</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Locate the nearest shutoff valve to the leaking pipe. For a leak under the kitchen sink, look for the oval-handled shutoff valves on the wall below the sink. For a bathroom, check below the vanity or behind the toilet. For a washing machine, there are usually two valves (hot and cold) behind the unit.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">Turn the valve clockwise until it stops. If the valve is a lever style (quarter-turn ball valve), turn it perpendicular to the pipe. If the local shutoff does not stop the flow, or if you cannot find one, go straight to the main water shutoff.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">The main water shutoff valve is typically located where the water line enters your house - in the basement, crawl space, utility room, or near the water meter. In most Middlesex County homes, it is in the basement near the front wall. Turn it fully clockwise to shut off all water to the house.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <p className="text-gray-700 pt-1">Open a faucet at the lowest point in the house to drain remaining water pressure from the pipes. This will reduce or stop the active leak and relieve pressure so you can assess the damage and plan your repair.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">5</div>
                    <p className="text-gray-700 pt-1">Place buckets, towels, or containers under the leak to catch residual dripping. If water has pooled on the floor, mop it up immediately to prevent it from seeping into subfloor, drywall, or adjacent rooms.</p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
                  <p className="font-bold text-gray-900 mb-2">If the Leak Is Severe or You Cannot Find the Shutoff</p>
                  <p className="text-gray-700 text-sm">If water is spraying or gushing and you cannot locate or turn the shutoff valve, call our <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-semibold">24/7 emergency plumbing line</Link> immediately. While waiting, you can slow the leak by wrapping the pipe tightly with any cloth, towel, or duct tape you have on hand - even a belt cinched tight around a towel over the leak point can reduce the flow. You can also shut off the water at the street-level meter using a meter key or adjustable wrench, but this requires accessing the meter box in your front yard.</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Know Your Main Shutoff Before an Emergency</p>
                  <p className="text-gray-700 text-sm">Every member of your household should know where the main water shutoff valve is located. The middle of an active pipe leak is the worst time to go searching for it. Walk to it now, make sure it turns freely (old gate valves can seize if they have not been operated in years), and label it clearly. If your main shutoff valve is corroded or stuck, a plumber can replace it proactively during a <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-semibold">plumbing safety inspection</Link> before an emergency forces the issue.</p>
                </div>
              </section>

              {/* Types of Pipe Leaks */}
              <section id="types-of-pipe-leaks" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Types of Pipe Leaks</h2>

                <p className="text-gray-700 mb-4">
                  Not all pipe leaks are the same. The type of leak determines which repair method will work and whether a temporary fix is feasible. Before reaching for tape or epoxy, take a moment to identify what kind of leak you are dealing with.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Joint Leaks (Fitting Leaks)</h3>
                    <p className="text-gray-700 text-sm">The most common type of pipe leak. Water seeps from the connection point where two pipes meet, or where a pipe connects to a valve, elbow, tee, or fixture. Joint leaks happen when threaded connections loosen over time, when solder joints on copper pipe fail, when compression fittings lose their seal, or when push-fit connections were not fully seated during installation. Joint leaks are usually a steady drip or weep rather than a spray, and they tend to worsen gradually.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Pinhole Leaks</h3>
                    <p className="text-gray-700 text-sm">Tiny holes that develop in the pipe wall itself, most commonly in copper pipes. Pinhole leaks are caused by pitting corrosion - an electrochemical reaction between the water chemistry and the copper. The hole starts microscopically small and gradually enlarges. You may notice a small spray, a constant drip, or a green-blue stain (verdigris) on the outside of the copper pipe before you even see water. Pinhole leaks are especially common in homes in Middlesex County built between the 1960s and 1990s with Type M (thin-wall) copper pipe.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Cracked or Split Pipes</h3>
                    <p className="text-gray-700 text-sm">A crack or split in the pipe wall that allows water to escape, often under significant pressure. Cracks are typically caused by freezing (water expands as it freezes and can split copper, CPVC, and galvanized pipe), physical impact (a pipe hit during renovation work), or age-related deterioration. CPVC pipe is particularly brittle and prone to cracking as it ages. Cracked pipes can leak anything from a slow weep to a full-pressure spray depending on the severity of the crack. This is a common winter issue in New Jersey, and our guide on <Link href="/blog/frozen-pipes-prevention-repair" className="text-red-700 hover:text-red-800 font-semibold">frozen pipe prevention and repair</Link> covers this in depth.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Corroded Pipe Walls</h3>
                    <p className="text-gray-700 text-sm">Over decades, galvanized steel pipes corrode from the inside out. The interior of the pipe fills with rust and mineral deposits, and eventually the pipe wall becomes so thin that water starts seeping through multiple spots. If you have galvanized pipes and find one leak, there are almost certainly more developing. A single repair on galvanized pipe is often a stopgap - <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-semibold">whole house repiping</Link> with copper or PEX is the permanent solution.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Loose or Failed Compression Fittings</h3>
                    <p className="text-gray-700 text-sm">Compression fittings use a nut and ferrule (brass ring) to create a watertight seal without soldering. They are commonly found on supply lines to faucets, toilets, dishwashers, and ice makers. Over time, the ferrule can lose its grip, the nut can loosen from vibration, or the pipe can shift slightly, breaking the seal. These leaks often start as occasional drips that become constant over time. Tightening the compression nut a quarter turn can sometimes reseal it, but a heavily worn ferrule needs replacement.</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Not Sure What Type of Leak You Have?</p>
                  <p className="text-gray-700 text-sm">Dry the pipe completely with a towel, then wrap toilet paper or a paper towel loosely around the suspected area. Turn the water back on briefly and watch where the paper gets wet first - that pinpoints the exact leak location and helps you determine whether it is at a joint, on the pipe wall, or at a fitting. For hidden leaks behind walls or under floors, professional <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-semibold">water leak detection</Link> equipment is the fastest way to locate the problem without cutting into walls blindly.</p>
                </div>
              </section>

              {/* Temporary Fixes */}
              <section id="temporary-fixes" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Temporary Pipe Leak Fixes</h2>

                <p className="text-gray-700 mb-4">
                  Temporary fixes are exactly what the name implies - they buy you time. A good temporary repair can hold for days, weeks, or even months in some cases, but none of them are a substitute for a permanent repair. Use these methods to stop or slow a leak until you can make a proper fix or get a plumber to your home.
                </p>

                <p className="text-gray-700 mb-6">
                  For every temporary method below, the pipe must be depressurized (water shut off) and the surface must be dry for the repair material to adhere or seal properly. Applying tape or epoxy to a wet pipe under pressure is a waste of time and materials.
                </p>

                {/* Method 1: Pipe Repair Tape */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Self-Fusing Silicone Repair Tape</h3>
                <p className="text-gray-700 mb-4">
                  Self-fusing silicone tape (sometimes called self-amalgamating tape or rescue tape) is one of the most effective temporary pipe repair products available. Unlike regular tape, it does not use adhesive - it bonds to itself when stretched and wrapped, creating a waterproof, pressure-resistant seal. Brands like Rescue Tape, X-Treme Tape, and Nashua Stretch & Seal are widely available at hardware stores for $5 to $15 per roll.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Shut off the water and drain the pipe. Dry the pipe surface thoroughly with a clean towel or rag. The pipe must be completely dry.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">Start wrapping the tape about 2 inches before the leak point. Stretch the tape to about double its width as you wrap - stretching is what activates the self-fusing bond.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">Overlap each wrap by about half the tape width, building up at least 3 to 4 layers over the leak point. Continue wrapping 2 inches past the leak on the other side.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <p className="text-gray-700 pt-1">Press the final end firmly against the previous layer. The tape will fuse to itself within minutes. Wait at least 5 minutes before turning the water back on.</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  Self-fusing tape works best for pinhole leaks and small cracks on straight pipe sections. It is less effective on joint leaks because the irregular shape of fittings makes it difficult to create a tight, consistent wrap. Properly applied, silicone tape can hold for several weeks under normal household water pressure.
                </p>

                {/* Method 2: Epoxy Putty */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Epoxy Putty</h3>
                <p className="text-gray-700 mb-4">
                  Two-part epoxy putty is a moldable compound that hardens into a solid, waterproof seal when the two components are mixed together. Products like Oatey Fix-It Stick, J-B Weld WaterWeld, and Loctite Repair Putty are specifically formulated for pipe repair and bond to copper, PVC, CPVC, galvanized steel, and cast iron. Epoxy putty is available at any hardware store for $5 to $12.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Shut off the water, drain the pipe, and dry the leak area completely. Lightly sand the pipe surface around the leak with fine sandpaper or emery cloth to help the epoxy grip.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">Cut or pinch off enough putty for the repair. Knead the two-part putty together thoroughly with your fingers until the color is uniform - this activates the chemical hardening process. Wear gloves to protect your hands.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">Press the mixed putty firmly over and around the leak point. For a pinhole leak, mold the putty into a thick patch that extends at least one inch beyond the leak in all directions. For a joint leak, wrap the putty completely around the fitting.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <p className="text-gray-700 pt-1">Smooth the edges of the putty to eliminate any gaps between the putty and pipe surface. Allow the epoxy to cure for the time specified on the product label - typically 20 to 60 minutes for initial set, with full cure in 1 to 24 hours depending on the product.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">5</div>
                    <p className="text-gray-700 pt-1">Once fully cured, turn the water on slowly and check for leaks around the edges of the repair. If you see any seepage, apply a second layer over the first.</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  Epoxy putty is particularly effective for pinhole leaks, small cracks, and leaking pipe joints where tape cannot conform to the shape. It is one of the best temporary fixes for leaks at fittings, elbows, and tees because you can mold it into any shape. The downside is that curing time means you will be without water for at least an hour.
                </p>

                {/* Method 3: Pipe Repair Clamp */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Pipe Repair Clamp</h3>
                <p className="text-gray-700 mb-4">
                  A pipe repair clamp (also called a pipe sleeve clamp or dresser clamp) is a metal sleeve with a rubber gasket inside that wraps around the pipe and bolts tight over the leak. This is the most robust temporary fix and can hold for months or even years on straight pipe sections. Repair clamps are sized to specific pipe diameters (1/2 inch, 3/4 inch, 1 inch, etc.), so you need to know your pipe size before buying one. They cost $8 to $25 at hardware stores.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Shut off the water and dry the pipe. Measure the outer diameter of the pipe to select the correct clamp size. A 1/2-inch copper pipe has an outer diameter of about 5/8 inch. A 3/4-inch copper pipe is about 7/8 inch outside.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">Open the clamp and position the rubber gasket pad directly over the leak point. Center the leak on the gasket for maximum coverage.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">Close the clamp around the pipe and tighten the bolts evenly. Alternate between bolts as you tighten to ensure even pressure across the gasket. Tighten firmly but do not overtighten - you can crush thin-wall copper pipe.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <p className="text-gray-700 pt-1">Turn the water back on and check for leaks around the clamp edges. If you see any weeping, tighten the bolts another quarter turn.</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  Pipe repair clamps are the strongest temporary fix because the mechanical compression of the rubber gasket against the pipe creates a reliable seal even under full water pressure. They work on all pipe materials and are the go-to emergency repair for professional plumbers when a permanent fix cannot be made immediately.
                </p>

                {/* Method 4: Rubber Patch and Hose Clamp */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Rubber Patch with Hose Clamps</h3>
                <p className="text-gray-700 mb-4">
                  If you cannot get to a hardware store, you can improvise a pipe repair clamp using a piece of rubber (from an inner tube, a thick rubber glove, or a rubber sheet) and standard hose clamps (worm gear clamps). This is the classic emergency fix that plumbers have used for decades.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <p className="text-gray-700 pt-1">Cut a piece of rubber large enough to wrap around the pipe and cover the leak with at least 1 inch of overlap on all sides.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <p className="text-gray-700 pt-1">Wrap the rubber tightly around the pipe, centering it over the leak point. Hold it in place with one hand.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <p className="text-gray-700 pt-1">Slide hose clamps over the rubber and tighten them with a screwdriver or nut driver. Use at least two clamps - one on each side of the leak point. For a longer crack, use three or more clamps spaced evenly.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <p className="text-gray-700 pt-1">Turn the water back on slowly and check for leaks. Tighten the clamps further if needed.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Important: All Temporary Fixes Have a Lifespan</p>
                  <p className="text-gray-700 text-sm">Tape, epoxy, clamps, and rubber patches are not permanent repairs. The pipe has failed at that point, and the conditions that caused it to fail (corrosion, pressure, age) are still present. A temporary fix should be followed by a permanent repair within days to weeks - not months or years. The longer you rely on a temporary fix, the greater the risk of a sudden failure and water damage.</p>
                </div>
              </section>

              {/* Permanent Fixes */}
              <section id="permanent-fixes" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Permanent Pipe Leak Repairs</h2>

                <p className="text-gray-700 mb-4">
                  A permanent repair means removing or bypassing the damaged section of pipe and creating a new, reliable connection. The method depends on the pipe material and the type of leak. Some permanent fixes are accessible to handy homeowners, while others require professional tools and skills.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">SharkBite Push-Fit Fittings (Copper, PEX, CPVC)</h3>
                    <p className="text-gray-700 text-sm mb-3">SharkBite fittings are push-to-connect couplings that create a permanent, code-approved connection without soldering, glue, or special tools. They work on copper, PEX, and CPVC pipe. This is the most accessible permanent repair method for homeowners because all you need is a pipe cutter and the fitting itself.</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>How it works:</strong> Cut out the damaged section of pipe using a pipe cutter. Deburr the cut ends with sandpaper or a deburring tool. Slide a SharkBite coupling onto each cut end - push it on until it clicks or meets the depth mark on the pipe. The internal O-ring and stainless steel teeth grip the pipe and create a watertight seal immediately. No cure time needed.</p>
                      <p><strong>Cost:</strong> SharkBite couplings cost $8 to $20 each depending on size. A straight coupling (for splicing in a new section) and a slip coupling (which slides over the pipe to bridge a gap) are the two types you will use most for leak repairs.</p>
                      <p><strong>Best for:</strong> Pinhole leaks, cracked pipe sections, and any straight pipe run where you can cut out the damaged area and have enough room to push the fitting on.</p>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Copper Soldering (Sweat Fitting)</h3>
                    <p className="text-gray-700 text-sm mb-3">The traditional permanent repair for copper pipes. A plumber cuts out the damaged section, cleans the pipe ends with emery cloth and flux, slides on a new copper coupling, and solders it with a propane torch and lead-free solder. This creates the strongest possible joint on copper pipe.</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Skill level:</strong> Intermediate to advanced. Soldering copper pipe requires practice to get a reliable joint. A bad solder joint will leak and need to be redone. Using a torch near wall framing and insulation also requires fire safety precautions (a flame shield and a fire extinguisher).</p>
                      <p><strong>Best for:</strong> Any copper pipe repair where you want the most durable, long-lasting fix. This is how professional plumbers repair copper in most situations.</p>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">PEX Crimp or Clamp Repair</h3>
                    <p className="text-gray-700 text-sm mb-3">For homes with PEX piping, a damaged section is repaired by cutting out the bad area and connecting a new piece of PEX using brass crimp rings and a crimp tool, or stainless steel cinch clamps and a clamp tool. PEX fittings are inexpensive and the crimp tools are available for rent at most hardware stores.</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Best for:</strong> Homes with PEX plumbing (common in newer construction and repiped homes in NJ). PEX repairs are fast and reliable once you have the right tool.</p>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Threaded Pipe Replacement (Galvanized)</h3>
                    <p className="text-gray-700 text-sm mb-3">Galvanized steel pipe is repaired by unscrewing the damaged section at the threaded fittings on each end and replacing it with a new piece. However, galvanized pipe tends to corrode at the threads, and removing old sections without damaging the adjacent pipe is often extremely difficult. In practice, most plumbers recommend transitioning from galvanized to copper or PEX using dielectric union fittings rather than replacing galvanized with more galvanized.</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Important:</strong> If you have galvanized pipes and are getting repeat leaks, the entire system is likely at the end of its lifespan. A single repair may solve today&apos;s leak but another will appear soon. <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-semibold">Whole house repiping</Link> to copper or PEX is the most cost-effective long-term solution.</p>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">CPVC Solvent Cement Repair</h3>
                    <p className="text-gray-700 text-sm mb-3">CPVC pipe is repaired by cutting out the damaged section and gluing in a new piece using CPVC solvent cement (primer and cement). The solvent chemically welds the plastic pieces together, creating a permanent bond. This is a straightforward repair, but CPVC requires the correct primer and cement - using PVC cement on CPVC or vice versa will create a weak joint that fails.</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Caution:</strong> CPVC becomes increasingly brittle with age. When cutting or working with old CPVC, you may crack the pipe further back from your repair point. Handle old CPVC gently and be prepared to extend your repair if additional cracks appear during the work.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Service Cards */}
              <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
                <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                  <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">Water Leak Detection Services</p>
                  <p className="text-sm text-gray-600 mb-2">Advanced leak detection technology for hidden leaks behind walls, under slabs, and in ceilings. Pinpoint the exact location without unnecessary demolition. Serving all of Middlesex County, NJ.</p>
                  <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
                <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                  <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.658-3.163M11.42 15.17l5.658-3.163M11.42 15.17V20.9m0-5.73l-5.658 3.163M11.42 15.17l5.658 3.163M6.762 17.333l-.007-4.666L11.42 9.504m6.762 4.666l-.007-4.666L11.42 9.504m0 0V3.1" /></svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">Emergency Plumbing - 24/7</p>
                  <p className="text-sm text-gray-600 mb-2">Burst pipe, active water leak, or flooding? Our licensed plumbers are available 24/7 for plumbing emergencies in East Brunswick, Edison, Sayreville, Old Bridge, and surrounding areas.</p>
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
                </div>
              </div>

              {/* When to Call a Plumber */}
              <section id="when-to-call-plumber" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to Call a Plumber</h2>

                <p className="text-gray-700 mb-4">
                  While some pipe leaks are straightforward DIY repairs, there are situations where calling a licensed plumber is not just recommended - it is necessary. Attempting repairs beyond your skill level or on certain types of pipes and locations can make the problem significantly worse and more expensive.
                </p>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">!</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">The Leak Is Behind a Wall, Ceiling, or Under a Slab</h3>
                      <p className="text-gray-700 text-sm">Hidden leaks require professional <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-semibold">leak detection equipment</Link> to pinpoint the exact location before any cutting or demolition begins. Opening up walls blindly can cause more damage than the leak itself. Slab leaks are particularly complex and may require rerouting the pipe above the slab rather than breaking through the concrete.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">!</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Multiple Leaks Developing in the Same Pipe System</h3>
                      <p className="text-gray-700 text-sm">If you are finding leaks in multiple locations on the same pipe run, the entire pipe system is likely corroded and failing. Repairing individual leaks is a losing game at this point - each fix puts additional stress on adjacent weak spots. A plumber can assess whether <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-semibold">whole house repiping</Link> is the better investment.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">!</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">The Leak Involves a Gas Line</h3>
                      <p className="text-gray-700 text-sm">Gas line leaks are a safety emergency. Do not attempt to repair a gas line yourself under any circumstances. If you smell gas or suspect a gas leak, evacuate the home, call 911, and then call a licensed plumber. Our guide on <Link href="/blog/gas-leak-detection-safety" className="text-red-700 hover:text-red-800 font-semibold">gas leak detection and safety</Link> explains the proper steps to follow.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">!</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">You Have Galvanized or Lead Pipes</h3>
                      <p className="text-gray-700 text-sm">Galvanized steel pipes are extremely difficult to work with because the threads corrode and seize. Attempting to unscrew one section can crack or break adjacent sections. Lead pipes (found in some pre-1950s homes in NJ) should never be repaired - they should be replaced entirely due to health risks. Both situations require a professional assessment.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">!</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Water Damage Has Already Spread</h3>
                      <p className="text-gray-700 text-sm">If the leak has been going on for a while and you can see water damage on walls, ceilings, or floors - stains, bubbling paint, warped wood, or mold growth - the repair is no longer just about the pipe. A plumber needs to fix the pipe, and a remediation specialist may need to address the water damage to prevent mold. The sooner you act, the less extensive (and expensive) the restoration.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">!</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">The Main Water Line Is Leaking</h3>
                      <p className="text-gray-700 text-sm">The main water line from the street to your house is typically buried underground and is under higher pressure than interior pipes. A leaking main line can cause foundation damage, yard erosion, and massive water waste. This is strictly a professional repair that may require excavation or trenchless pipe replacement technology.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mid-Content CTA */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12">
                <p className="text-lg font-bold mb-2">Dealing With a Pipe Leak Right Now?</p>
                <p className="text-gray-300 text-sm mb-4">Whether it is an active emergency or a slow drip you have been putting off, our licensed master plumbers can diagnose and repair any type of pipe leak. Same-day service available across Middlesex County.</p>
                <div className="flex flex-wrap gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="border border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition text-sm">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Pipe Materials in NJ Homes */}
              <section id="pipe-materials-nj" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Pipe Materials in NJ Homes</h2>

                <p className="text-gray-700 mb-4">
                  The type of pipe in your home determines how it fails, how it is repaired, and how long it is expected to last. Homes across Middlesex County contain a wide variety of pipe materials depending on when they were built and whether any repiping has been done. Here is what you are likely to find.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Copper Pipe</h3>
                    <p className="text-gray-700 text-sm mb-2"><strong>Common in:</strong> Homes built from the 1950s to present. The dominant pipe material in most East Brunswick, Edison, and South Brunswick homes from this era.</p>
                    <p className="text-gray-700 text-sm mb-2"><strong>Lifespan:</strong> 50 to 70+ years for Type L (thick-wall). 30 to 50 years for Type M (thin-wall).</p>
                    <p className="text-gray-700 text-sm mb-2"><strong>How it fails:</strong> Pinhole leaks from pitting corrosion, failed solder joints, and freeze damage. Green-blue stains on the exterior of the pipe are an early warning sign of corrosion.</p>
                    <p className="text-gray-700 text-sm"><strong>Repair methods:</strong> Soldering, SharkBite fittings, compression couplings, pipe repair clamps (temporary).</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">PEX (Cross-Linked Polyethylene)</h3>
                    <p className="text-gray-700 text-sm mb-2"><strong>Common in:</strong> New construction and repiped homes from the 2000s to present. Increasingly common in NJ as the preferred repiping material.</p>
                    <p className="text-gray-700 text-sm mb-2"><strong>Lifespan:</strong> 40 to 50+ years (newer material, so long-term data is still developing).</p>
                    <p className="text-gray-700 text-sm mb-2"><strong>How it fails:</strong> PEX is flexible and resistant to freezing, so it fails far less often than rigid pipes. When it does leak, it is almost always at a fitting connection - a crimp ring that was not compressed properly, or a push-fit fitting that was not fully seated. The pipe itself very rarely develops leaks.</p>
                    <p className="text-gray-700 text-sm"><strong>Repair methods:</strong> Crimp or clamp fittings, SharkBite fittings. PEX repairs are fast and inexpensive.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Galvanized Steel Pipe</h3>
                    <p className="text-gray-700 text-sm mb-2"><strong>Common in:</strong> Homes built before the 1960s. Still present in many older homes in North Brunswick, Old Bridge, and Sayreville that have not been repiped.</p>
                    <p className="text-gray-700 text-sm mb-2"><strong>Lifespan:</strong> 40 to 60 years. Most galvanized pipes installed before 1970 are well past their expected lifespan.</p>
                    <p className="text-gray-700 text-sm mb-2"><strong>How it fails:</strong> Corrosion from the inside out. The zinc coating that protects the steel erodes over time, allowing rust to form. Rust deposits narrow the pipe interior (reducing water pressure and flow) and eventually eat through the pipe wall, causing leaks at the thinnest points. Galvanized pipe also corrodes heavily at threaded joints.</p>
                    <p className="text-gray-700 text-sm"><strong>Repair methods:</strong> Threaded pipe replacement (difficult), transition to copper or PEX at the repair point using dielectric unions. If multiple leaks are appearing, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-semibold">whole house repiping</Link> is strongly recommended.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">CPVC (Chlorinated Polyvinyl Chloride)</h3>
                    <p className="text-gray-700 text-sm mb-2"><strong>Common in:</strong> Homes built or repiped from the 1980s to early 2000s. CPVC was a popular alternative to copper during periods of high copper prices.</p>
                    <p className="text-gray-700 text-sm mb-2"><strong>Lifespan:</strong> 20 to 40 years, depending on water chemistry and UV exposure.</p>
                    <p className="text-gray-700 text-sm mb-2"><strong>How it fails:</strong> CPVC becomes brittle with age. It cracks when bumped, flexed, or exposed to temperature changes. Solvent cement joints can also fail over time. CPVC installed near hot water heaters or in attics (where temperature swings are extreme) tends to fail sooner.</p>
                    <p className="text-gray-700 text-sm"><strong>Repair methods:</strong> Solvent cement (cut out and glue new section), SharkBite fittings. Handle old CPVC gently - it cracks very easily.</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Not Sure What Pipe Material You Have?</p>
                  <p className="text-gray-700 text-sm">Look at the exposed pipes in your basement or under sinks. Copper is a warm reddish-brown metal. PEX is a flexible colored plastic (red for hot, blue for cold, white for either). Galvanized steel is a dull gray metal that is magnetic. CPVC is a cream-colored rigid plastic. If you still are not sure, a plumber can identify your pipe material during a <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-semibold">plumbing safety inspection</Link> and advise on its remaining lifespan.</p>
                </div>
              </section>

              {/* Cost of Pipe Repair */}
              <section id="cost-of-pipe-repair" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Cost of Pipe Repair in NJ</h2>

                <p className="text-gray-700 mb-4">
                  Pipe repair costs in New Jersey vary significantly depending on the location of the leak, the pipe material, the accessibility of the damaged section, and whether it is a standard or emergency call. Here are realistic price ranges for common pipe repair scenarios across Middlesex County.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-3 font-bold text-gray-900 border border-gray-200">Repair Type</th>
                        <th className="text-left p-3 font-bold text-gray-900 border border-gray-200">Typical Cost Range</th>
                        <th className="text-left p-3 font-bold text-gray-900 border border-gray-200">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">Single accessible pipe leak (under sink, basement)</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$150 - $400</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Includes cutting out and replacing the damaged section</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 border border-gray-200 text-gray-700">Pipe leak behind a wall</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$400 - $1,500</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Includes drywall access and repair, leak detection</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">Slab leak repair</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$800 - $3,000+</td>
                        <td className="p-3 border border-gray-200 text-gray-700">May require jackhammering or rerouting above slab</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 border border-gray-200 text-gray-700">Joint or fitting leak repair</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$100 - $300</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Often just tightening or replacing the fitting</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">Frozen/burst pipe repair</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$200 - $800</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Depends on how many sections burst and access</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 border border-gray-200 text-gray-700">Main water line repair</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$500 - $3,000+</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Excavation or trenchless method, permit required</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">Emergency after-hours surcharge</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$100 - $200</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Added to the base repair cost</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 border border-gray-200 text-gray-700">Whole house repiping (copper)</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$5,000 - $15,000</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Depends on home size, number of fixtures, access</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">Whole house repiping (PEX)</td>
                        <td className="p-3 border border-gray-200 text-gray-700">$4,000 - $10,000</td>
                        <td className="p-3 border border-gray-200 text-gray-700">PEX is faster to install, reducing labor costs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-4">
                  <p className="font-bold text-gray-900 mb-2">Getting a Fair Price</p>
                  <p className="text-gray-700 text-sm">Always get a written estimate before work begins. A reputable plumber will diagnose the leak, explain the repair options (temporary versus permanent, repair versus replace), and give you a price before turning a wrench. Be wary of plumbers who give a price without inspecting the leak first - there is no way to give an accurate quote without seeing the problem.</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">Insurance and Water Damage Claims</p>
                  <p className="text-gray-700 text-sm">Most homeowner&apos;s insurance policies cover sudden and accidental water damage from pipe leaks - but they do not cover the cost of repairing the pipe itself, and they do not cover damage from gradual leaks that you knew about and did not fix. Document the leak with photos and contact your insurance company promptly if water damage has occurred. The faster you report it, the smoother the claim process.</p>
                </div>
              </section>

              {/* Prevention */}
              <section id="prevention" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to Prevent Pipe Leaks</h2>

                <p className="text-gray-700 mb-6">
                  While you cannot prevent every pipe leak (pipes age and eventually fail), you can significantly reduce the risk and catch problems early before they cause major damage. These prevention strategies are especially relevant for homeowners in New Jersey where freeze damage, hard water, and aging pipe systems are common factors.
                </p>

                <div className="grid md:grid-cols-2 gap-5 mb-8">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3">Insulate Exposed Pipes</h3>
                    <p className="text-gray-700 text-sm">Pipe insulation (foam sleeves or fiberglass wrap) on pipes in unheated areas - basement rim joists, crawl spaces, garages, exterior walls, and attics - prevents freeze damage in NJ winters. Pipe insulation costs a few dollars per foot and takes minutes to install. Focus on any pipe that runs along an exterior wall or through an unheated space. Read our full guide on <Link href="/blog/frozen-pipes-prevention-repair" className="text-red-700 hover:text-red-800 font-semibold">preventing frozen pipes</Link>.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3">Monitor Your Water Pressure</h3>
                    <p className="text-gray-700 text-sm">Excessively high water pressure (above 80 PSI) puts unnecessary stress on pipe joints, fittings, and appliance connections, dramatically increasing the risk of leaks. Buy a simple hose-bib pressure gauge ($10 at any hardware store), screw it onto an outdoor faucet, and check your pressure. If it is above 80 PSI, a pressure-reducing valve (PRV) should be installed on your main water line.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3">Fix Small Leaks Immediately</h3>
                    <p className="text-gray-700 text-sm">A small drip does not stay small forever. Every pipe leak gets worse over time as water pressure, vibration, and corrosion enlarge the opening. What starts as a barely noticeable drip can become a major leak or a pipe burst. Fix every leak as soon as you notice it - even if it seems insignificant. The repair cost for a small leak is a fraction of the water damage restoration cost for a burst pipe.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3">Schedule Regular Plumbing Inspections</h3>
                    <p className="text-gray-700 text-sm">A professional <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-semibold">plumbing safety inspection</Link> checks for early signs of corrosion, weak joints, failing shutoff valves, and other issues before they become active leaks. This is especially important for homes with pipes over 30 years old. An inspection every 2 to 3 years is a small investment that can prevent thousands of dollars in water damage.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3">Install a Water Leak Detection System</h3>
                    <p className="text-gray-700 text-sm">Smart water leak detectors (like the Moen Flo, Phyn Plus, or simple Wi-Fi leak sensors) can alert you to leaks the moment they start - even when you are not home. Some systems can automatically shut off your water supply when a leak is detected. For a home in NJ where freeze damage is a real risk during winter, a leak detection system paired with automatic shutoff can save you from catastrophic damage while you are at work or on vacation.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3">Know the Age of Your Pipes</h3>
                    <p className="text-gray-700 text-sm">If your home was built before 1970 and still has original galvanized pipes, or before 1990 with Type M copper, proactive replacement is often smarter and cheaper than waiting for leaks to start. Talk to a plumber about the condition and expected remaining lifespan of your pipe system. Planning a repipe on your schedule is far better than dealing with an emergency burst at 2 AM in January.</p>
                  </div>
                </div>
              </section>

              {/* CTA Banner */}
              <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Need a Pipe Leak Fixed the Right Way?</h2>
                <p className="text-red-100 mb-6">
                  From emergency shutoffs to permanent repairs, our licensed master plumbers handle every type of pipe leak in Middlesex County. We use professional leak detection equipment, carry the parts to fix any pipe material on the spot, and back our work with a warranty. Same-day service available across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Pipe Leak Repair FAQs</h2>

                <div className="space-y-3">
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">How do I temporarily stop a leaking pipe?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">The fastest temporary fix depends on the leak type. For pinhole leaks, wrap the area tightly with self-fusing silicone repair tape (like Rescue Tape), stretching it as you wrap to activate the bond. For small cracks, apply two-part epoxy putty such as Oatey Fix-It Stick directly over the leak after drying the pipe. For larger leaks, a pipe repair clamp that bolts around the pipe with a rubber gasket is the most reliable option. Always shut off the water and dry the pipe before applying any temporary fix.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">How much does it cost to fix a leaking pipe in NJ?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">In New Jersey, most single pipe leak repairs cost between $150 and $500 for accessible leaks under sinks or in basements. Leaks behind walls range from $400 to $1,500, and slab leaks can cost $800 to $3,000 or more. Emergency after-hours repairs typically add $100 to $200. The cost depends on pipe material, leak location, and whether the section needs replacement or can be repaired in place.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Can I use pipe leak tape as a permanent fix?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">No. Pipe repair tape, including self-fusing silicone tape and fiberglass wrap tape, is designed as a temporary emergency fix only. It can hold for days or even weeks under low pressure, but it will eventually fail because it does not address the underlying damage to the pipe. A permanent fix requires replacing the damaged section using a solder joint (copper), SharkBite fitting, crimp connection (PEX), or solvent cement (CPVC).</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Why do pipes develop pinhole leaks?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">Pinhole leaks in copper pipes are caused by pitting corrosion, an electrochemical reaction between water chemistry and the copper pipe wall. Contributing factors include high pH water, elevated chlorine levels, low mineral content (soft water), and dissolved oxygen. Homes in parts of Middlesex County with aggressive water chemistry are more susceptible. Multiple pinhole leaks in the same pipe system indicate systemic corrosion, and whole house repiping may be the best long-term solution.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Should I fix a leaking pipe myself or call a plumber?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">For a single, accessible leak on an exposed pipe, a confident DIYer can make a temporary or even permanent repair with SharkBite fittings. Call a licensed plumber if the leak is behind a wall or ceiling, involves a gas line, involves corroded galvanized or lead pipes, or if water damage has already spread. Also call a plumber if you are seeing leaks in multiple locations - that indicates a systemic problem that requires professional assessment.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">How do I find a hidden pipe leak behind a wall?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">Signs of a hidden leak include unexplained increases in your water bill, the sound of running water when all fixtures are off, damp or discolored spots on walls or ceilings, warped flooring, and musty odors. A licensed plumber uses acoustic leak detection equipment, thermal imaging cameras, and moisture meters to pinpoint the exact location without unnecessary wall demolition. If you suspect a hidden leak, contact a <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-semibold">water leak detection specialist</Link> promptly - water damage compounds quickly.</p>
                    </div>
                  </details>
                </div>
              </section>

              {/* Related Articles */}
              <section className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link href="/blog/water-pipe-noises-causes-fixes" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Water Pipe Noises: 8 Causes and Fixes</h3>
                      <p className="text-sm text-gray-600">Banging, whistling, or hammering pipes? Find out what is causing the noise.</p>
                    </div>
                  </Link>
                  <Link href="/blog/frozen-pipes-prevention-repair" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Frozen Pipes: Prevention and Repair</h3>
                      <p className="text-sm text-gray-600">How to prevent frozen pipes in NJ winters and what to do if they burst.</p>
                    </div>
                  </Link>
                  <Link href="/blog/signs-of-slab-leak-sewer-line" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs of a Slab Leak or Sewer Line Problem</h3>
                      <p className="text-sm text-gray-600">Warning signs that you have a leak under your foundation.</p>
                    </div>
                  </Link>
                  <Link href="/blog/why-is-water-pressure-low" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Why Is My Water Pressure Low?</h3>
                      <p className="text-sm text-gray-600">Diagnose and fix low water pressure in your NJ home.</p>
                    </div>
                  </Link>
                  <Link href="/blog/gas-leak-detection-safety" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Gas Leak Detection and Safety</h3>
                      <p className="text-sm text-gray-600">How to detect a gas leak and the safety steps to follow immediately.</p>
                    </div>
                  </Link>
                  <Link href="/blog/how-to-unclog-kitchen-sink" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Unclog a Kitchen Sink</h3>
                      <p className="text-sm text-gray-600">7 proven methods to clear a clogged kitchen sink drain.</p>
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
                  <p className="text-gray-600 text-sm mb-4">Pipe leak repair and water leak detection throughout Middlesex County, NJ.</p>
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
                    <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                    <li><Link href="/services/plumbing-safety-inspections" className="text-gray-700 hover:text-red-700 transition">Plumbing Inspections</Link></li>
                    <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Repair</Link></li>
                    <li><Link href="/services/water-filtration-system" className="text-gray-700 hover:text-red-700 transition">Water Filtration System</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>

                {/* Helpful Articles */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/water-pipe-noises-causes-fixes" className="text-gray-700 hover:text-red-700 transition">Water Pipe Noises: 8 Causes and Fixes</Link></li>
                    <li><Link href="/blog/frozen-pipes-prevention-repair" className="text-gray-700 hover:text-red-700 transition">Frozen Pipes: Prevention and Repair</Link></li>
                    <li><Link href="/blog/signs-of-slab-leak-sewer-line" className="text-gray-700 hover:text-red-700 transition">Signs of a Slab Leak or Sewer Line Problem</Link></li>
                    <li><Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition">Why Is My Water Pressure Low?</Link></li>
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