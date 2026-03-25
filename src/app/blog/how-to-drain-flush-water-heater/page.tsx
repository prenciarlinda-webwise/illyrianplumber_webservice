import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How to Drain and Flush a Water Heater: Complete Step-by-Step Guide (2026)",
  description: "Learn how to drain and flush a water heater to remove sediment buildup. Step-by-step guide for tank and tankless water heaters with safety tips from NJ plumbers.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/how-to-drain-flush-water-heater" },
  keywords: [
    "how to drain a water heater",
    "how to flush a water heater",
    "drain water heater",
    "flush water heater",
    "how to drain a hot water heater",
    "water heater flush",
    "how to drain water heater",
    "water heater sediment flush",
    "how often flush water heater",
    "water heater maintenance",
    "drain hot water tank",
    "flush hot water heater",
    "water heater anode rod",
    "water heater sediment buildup",
  ],
  openGraph: {
    title: "How to Drain and Flush a Water Heater: Complete Step-by-Step Guide (2026)",
    description: "Learn how to drain and flush a water heater to remove sediment buildup. Step-by-step instructions for tank and tankless units from licensed NJ plumbers.",
    type: "article",
    publishedTime: "2026-03-19T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function DrainFlushWaterHeaterPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Drain and Flush a Water Heater: Complete Step-by-Step Guide",
    description: "Learn how to drain and flush a water heater to remove sediment buildup. Step-by-step guide for tank and tankless water heaters with safety tips from licensed NJ plumbers.",
    image: "https://www.illyrianplumber.com/images/faucet-installation-service.jpg",
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
      "@id": "https://www.illyrianplumber.com/blog/how-to-drain-flush-water-heater",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should you flush a water heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should flush your water heater at least once per year. If you live in an area with hard water like Middlesex County, NJ (7-10 GPG hardness), you may need to flush every 6 months to prevent excessive sediment buildup and maintain efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to drain a water heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Draining a standard 40-50 gallon water heater typically takes 20-45 minutes depending on the amount of sediment buildup and water pressure. If the drain valve is partially clogged with sediment, it may take longer. A full flush with refilling takes about 1-2 hours total.",
        },
      },
      {
        "@type": "Question",
        name: "Can I flush a water heater myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, flushing a tank water heater is a DIY-friendly task if you follow safety precautions. You need a garden hose, a bucket, and basic tools. However, if your water heater has never been flushed or is more than 5 years old, consider hiring a professional to avoid damaging a corroded drain valve.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if you never flush your water heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you never flush your water heater, sediment builds up on the bottom of the tank. This causes banging or popping noises, reduces heating efficiency by up to 30%, shortens the unit's lifespan, and can eventually cause the tank to crack or leak. Sediment also harbors bacteria that can affect water quality.",
        },
      },
      {
        "@type": "Question",
        name: "Should I flush my water heater if it has never been flushed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If your water heater has never been flushed and is several years old, proceed with caution. The drain valve may be clogged or corroded, and disturbing heavy sediment can cause leaks in weakened tanks. For units that have never been maintained, we recommend having a licensed plumber perform the first flush.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if my water heater needs to be flushed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signs your water heater needs flushing include rumbling or popping sounds during heating, discolored or rusty hot water, reduced hot water output, longer heating times, and higher energy bills. If you notice any of these symptoms, schedule a flush as soon as possible.",
        },
      },
      {
        "@type": "Question",
        name: "Can flushing a water heater cause problems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Flushing can occasionally cause issues with older water heaters. A corroded drain valve may leak after being opened for the first time in years, and disturbing heavy sediment can clog the drain valve. On very old tanks, removing sediment may reveal corrosion damage that was previously sealed by the buildup.",
        },
      },
      {
        "@type": "Question",
        name: "Do tankless water heaters need to be flushed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, tankless water heaters need to be descaled (flushed with vinegar) annually to remove mineral buildup from the heat exchanger. In hard water areas like New Jersey, descaling every 6-12 months is recommended. Neglecting this maintenance can reduce efficiency, trigger error codes, and void your warranty.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Drain and Flush a Water Heater",
    description: "Step-by-step instructions for draining and flushing a tank water heater to remove sediment buildup and improve efficiency.",
    totalTime: "PT2H",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0-20",
    },
    supply: [
      { "@type": "HowToSupply", name: "Garden hose" },
      { "@type": "HowToSupply", name: "Bucket" },
      { "@type": "HowToSupply", name: "Work gloves" },
      { "@type": "HowToSupply", name: "Safety glasses" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Flathead screwdriver" },
      { "@type": "HowToTool", name: "Adjustable wrench" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Turn off the power source",
        text: "Turn off the gas supply or flip the circuit breaker for your water heater. For gas units, set the thermostat to the pilot or vacation setting.",
      },
      {
        "@type": "HowToStep",
        name: "Turn off the cold water supply",
        text: "Locate the cold water inlet valve on top of the water heater and turn it to the off position.",
      },
      {
        "@type": "HowToStep",
        name: "Let the water cool",
        text: "Wait at least 30 minutes or run hot water from a nearby faucet to reduce the temperature and avoid scalding.",
      },
      {
        "@type": "HowToStep",
        name: "Attach a garden hose to the drain valve",
        text: "Connect a garden hose to the drain valve at the bottom of the tank and route it to a floor drain, outside, or into buckets.",
      },
      {
        "@type": "HowToStep",
        name: "Open a hot water faucet",
        text: "Open a hot water faucet on the floor above to break the vacuum and allow the tank to drain properly.",
      },
      {
        "@type": "HowToStep",
        name: "Open the drain valve",
        text: "Open the drain valve and allow the tank to drain completely. This may take 20-45 minutes depending on sediment levels.",
      },
      {
        "@type": "HowToStep",
        name: "Flush the tank with cold water",
        text: "Once drained, briefly turn the cold water supply back on to stir up remaining sediment. Let it flow through the drain valve until the water runs clear.",
      },
      {
        "@type": "HowToStep",
        name: "Close the drain valve and remove the hose",
        text: "Once the water runs clear, close the drain valve tightly and disconnect the garden hose.",
      },
      {
        "@type": "HowToStep",
        name: "Refill the tank",
        text: "Turn the cold water supply back on fully. Keep the hot water faucet open until water flows steadily with no air sputtering, then close it.",
      },
      {
        "@type": "HowToStep",
        name: "Restore power and check for leaks",
        text: "Once the tank is full, turn the gas back on or flip the circuit breaker. Check the drain valve for leaks. Wait 20-30 minutes for the water to reheat.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <article className="bg-white">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Maintenance</span>
                <time dateTime="2026-03-19">March 19, 2026</time>
                <span>22 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How to Drain and Flush a Water Heater: Complete Step-by-Step Guide
              </h1>
              <p className="text-xl text-gray-300">
                Remove sediment buildup, restore efficiency, and extend the lifespan of your water heater with this comprehensive draining and flushing guide from licensed New Jersey plumbers.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-03-19" updateDate="2026-03-25" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                Knowing how to drain a water heater and flush it properly is one of the most important <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800 font-medium">water heater maintenance</Link> tasks you can perform as a homeowner. Over time, minerals and sediment from your water supply settle at the bottom of your tank, reducing efficiency, causing strange noises, and eventually shortening the lifespan of your unit. If you have been noticing <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:text-red-800 font-medium">signs your water heater is dying</Link>, sediment buildup is likely a contributing factor.
              </p>
              <p className="text-gray-700">
                Whether you have a traditional tank water heater or a tankless system, regular flushing prevents costly repairs and keeps your hot water flowing efficiently. In this guide, we will walk you through every step of how to flush a water heater safely, how often you should do it, and when it makes sense to call a professional plumber.
              </p>
              <p className="text-gray-700">
                Homeowners in Middlesex County, NJ face particularly aggressive sediment buildup due to our region&apos;s hard water supply. With water hardness levels ranging from 7 to 10 grains per gallon (GPG), mineral deposits accumulate faster here than in areas with softer water. That means regular water heater maintenance is not optional for New Jersey homeowners. It is essential.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800">water heater replacement</Link>, <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
              <ul className="space-y-2">
                <li><a href="#why-flushing-matters" className="text-red-700 hover:text-red-800">Why Flushing Your Water Heater Matters</a></li>
                <li><a href="#how-often" className="text-red-700 hover:text-red-800">How Often to Flush a Water Heater</a></li>
                <li><a href="#step-by-step-drain" className="text-red-700 hover:text-red-800">Step-by-Step: How to Drain a Water Heater</a></li>
                <li><a href="#flush-tankless" className="text-red-700 hover:text-red-800">How to Flush a Tankless Water Heater</a></li>
                <li><a href="#signs-needs-flushing" className="text-red-700 hover:text-red-800">Signs Your Water Heater Needs Flushing</a></li>
                <li><a href="#never-flush" className="text-red-700 hover:text-red-800">What Happens If You Never Flush</a></li>
                <li><a href="#diy-vs-pro" className="text-red-700 hover:text-red-800">DIY vs Professional Flushing</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Middlesex County Hard Water Considerations</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Why Flushing Matters */}
            <section id="why-flushing-matters" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Flushing Your Water Heater Matters</h2>

              <p className="text-gray-700 mb-6">
                Every time your water heater heats water, dissolved minerals like calcium and magnesium separate from the water and settle at the bottom of the tank. This process is called water heater sediment buildup, and it happens in every home regardless of your water source. Over months and years, this sediment layer grows thicker and creates a barrier between the burner (or heating element) and the water above it.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Reduced Energy Efficiency</h3>
              <p className="text-gray-700 mb-6">
                Sediment acts as an insulator at the bottom of your tank. When a layer of minerals sits between the burner and the water, your water heater has to work harder and burn more fuel to heat the same amount of water. Studies show that just half an inch of sediment buildup can reduce your water heater&apos;s efficiency by up to 30%. That translates directly to higher gas or electric bills every single month. A water heater sediment flush removes this barrier and restores your unit to its original heating capacity.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Extended Equipment Lifespan</h3>
              <p className="text-gray-700 mb-6">
                A standard tank water heater is designed to last 8 to 12 years with proper maintenance. Without regular flushing, that lifespan can drop to 6 to 8 years or less. Sediment buildup causes the burner to overheat the bottom of the tank, creating hot spots that weaken the steel and damage the glass lining. Once the lining cracks, corrosion sets in and the tank eventually fails. Regular flushing is one of the most cost-effective ways to protect your investment and delay the need for a full water heater replacement.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Better Water Quality</h3>
              <p className="text-gray-700 mb-6">
                Sediment does not just sit quietly at the bottom of your tank. As it accumulates, it can break loose and travel through your hot water lines, causing discolored or rusty-looking water at your faucets. In severe cases, sediment can harbor bacteria that produce unpleasant odors, particularly the sulfur or rotten egg smell that many homeowners notice from their hot water. Flushing your hot water heater removes these contaminants and keeps your water clean.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Noise Reduction</h3>
              <p className="text-gray-700 mb-6">
                If your water heater is making rumbling, popping, or crackling sounds, sediment is almost certainly the cause. When water gets trapped beneath the sediment layer, it superheats and creates steam bubbles that pop as they escape through the sediment. This is the banging or knocking noise that many homeowners describe. A thorough water heater flush eliminates these sounds by removing the sediment that causes them.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                <p className="font-bold text-gray-900 mb-2">The Cost of Neglect</p>
                <p className="text-gray-700 text-sm">
                  Replacing a water heater costs $1,200 to $3,500 or more for a standard tank unit. A professional water heater flush costs $100 to $250 and takes about an hour. Annual flushing can add 3 to 5 years to your water heater&apos;s life, saving you thousands in premature replacement costs.
                </p>
              </div>
            </section>

            {/* How Often to Flush */}
            <section id="how-often" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How Often Should You Flush a Water Heater?</h2>

              <p className="text-gray-700 mb-6">
                The general recommendation from most water heater manufacturers is to flush your tank at least once per year. However, the right schedule for your home depends on several factors, including your water hardness, household size, and the age of your equipment.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border border-gray-200 rounded-xl">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Water Condition</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Recommended Frequency</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Why</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Soft water (0-3 GPG)</td>
                      <td className="text-center py-3 px-4">Every 12-18 months</td>
                      <td className="text-center py-3 px-4">Minimal mineral content</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Moderate hardness (4-7 GPG)</td>
                      <td className="text-center py-3 px-4">Every 12 months</td>
                      <td className="text-center py-3 px-4">Standard sediment accumulation</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Hard water (7-10 GPG) - NJ typical</td>
                      <td className="text-center py-3 px-4">Every 6-12 months</td>
                      <td className="text-center py-3 px-4">Accelerated mineral deposits</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Very hard water (10+ GPG)</td>
                      <td className="text-center py-3 px-4">Every 6 months</td>
                      <td className="text-center py-3 px-4">Heavy scale and sediment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                Most homes in Middlesex County, NJ fall into the hard water category with readings between 7 and 10 GPG. If you live in East Brunswick, Edison, Old Bridge, Sayreville, or the surrounding area, plan on flushing your water heater every 6 to 12 months for best results.
              </p>

              <p className="text-gray-700 mb-6">
                Larger households that use more hot water will also accumulate sediment faster. A family of four or more that uses 60 or more gallons of hot water per day should lean toward flushing every 6 months, even with moderate water hardness. If you have a water softener installed, you can typically extend the interval to once per year.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="font-bold text-gray-900 mb-2">Pro Tip: Check Your Anode Rod Too</p>
                <p className="text-gray-700 text-sm">
                  While you are flushing your water heater, it is the perfect time to inspect the water heater anode rod. This sacrificial rod protects your tank from corrosion by attracting minerals and rust. If the anode rod is more than 50% depleted or has less than half an inch of core wire remaining, replace it. A new anode rod costs $20 to $50 and can add years to your tank&apos;s life. Most plumbers recommend checking it every 2 to 3 years.
                </p>
              </div>
            </section>

            {/* Step-by-Step: How to Drain a Water Heater */}
            <section id="step-by-step-drain" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Step-by-Step: How to Drain a Water Heater</h2>

              <p className="text-gray-700 mb-6">
                Before you begin, gather the following supplies: a garden hose long enough to reach a floor drain or the exterior of your home, a large bucket, work gloves, safety glasses, a flathead screwdriver, and an adjustable wrench. The entire process takes about 1 to 2 hours from start to finish.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                <p className="font-bold text-red-800 mb-2">Safety Warning</p>
                <p className="text-red-700 text-sm">
                  Water inside your tank can be extremely hot, often exceeding 120 to 140 degrees Fahrenheit. Always wear protective gloves and safety glasses. Never drain hot water directly onto grass, plants, or areas where children or pets may walk. If you smell gas at any point during the process, stop immediately, leave the area, and call your gas company or 911.
                </p>
              </div>

              {/* Step 1 */}
              <div className="border-l-4 border-red-700 pl-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                  <h3 className="text-lg font-bold text-gray-900">Turn Off the Power Source</h3>
                </div>
                <p className="text-gray-700 mb-2">
                  For gas water heaters, locate the gas control valve on the front of the unit and turn it to the &quot;pilot&quot; or &quot;vacation&quot; setting. Do not turn the gas completely off unless you are comfortable relighting the pilot light when you are done. For electric water heaters, go to your electrical panel and flip the breaker labeled for the water heater to the off position.
                </p>
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3 mt-2">
                  <p className="text-sm text-yellow-800"><strong>Warning:</strong> Never drain a gas water heater with the burner on. Running the burner on an empty or partially empty tank can damage the tank lining and create a fire hazard. For electric heaters, exposed heating elements without water will burn out within minutes.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-red-700 pl-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                  <h3 className="text-lg font-bold text-gray-900">Turn Off the Cold Water Supply</h3>
                </div>
                <p className="text-gray-700">
                  Locate the cold water inlet valve on top of the water heater. It is typically on the right side when you face the unit and is usually a gate valve (round handle) or a ball valve (lever handle). Turn it clockwise to shut it off completely. This prevents new water from entering the tank while you are draining it.
                </p>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-red-700 pl-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                  <h3 className="text-lg font-bold text-gray-900">Let the Water Cool Down</h3>
                </div>
                <p className="text-gray-700">
                  Wait at least 30 minutes after turning off the power source for the water to cool to a safe temperature. To speed this up, you can open a hot water faucet in your home and let it run for several minutes. This draws hot water out of the tank and replaces it with cooler water from the pipes. You do not need to wait until the water is completely cold, but it should be warm rather than scalding.
                </p>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-red-700 pl-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</span>
                  <h3 className="text-lg font-bold text-gray-900">Attach a Garden Hose to the Drain Valve</h3>
                </div>
                <p className="text-gray-700">
                  The drain valve is located near the bottom of the water heater. It looks like a standard garden hose bib or a small plastic or brass spigot. Thread your garden hose onto the valve and make sure it is snug. Route the other end of the hose to a floor drain, a driveway, or a sump pit. Make sure the discharge end of the hose is lower than the drain valve so gravity helps the water flow out. If you do not have a nearby drain, you can use large buckets but plan on emptying them several times.
                </p>
              </div>

              {/* Step 5 */}
              <div className="border-l-4 border-red-700 pl-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">5</span>
                  <h3 className="text-lg font-bold text-gray-900">Open a Hot Water Faucet Upstairs</h3>
                </div>
                <p className="text-gray-700">
                  Go to a faucet on the floor above your water heater (or the farthest faucet from the unit) and turn it to the hot water side. Leave it open during the entire draining process. This breaks the vacuum inside the tank and allows air to enter, which helps the water flow out of the drain valve more quickly. Without this step, the tank may drain very slowly or not at all.
                </p>
              </div>

              {/* Step 6 */}
              <div className="border-l-4 border-red-700 pl-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">6</span>
                  <h3 className="text-lg font-bold text-gray-900">Open the Drain Valve</h3>
                </div>
                <p className="text-gray-700 mb-2">
                  Turn the drain valve counterclockwise to open it. If you have a plastic valve, use a flathead screwdriver. For brass valves, turn the handle by hand. Water should begin flowing through the hose immediately. The water will likely look cloudy or discolored at first, especially if you have not flushed the tank recently. This is completely normal and indicates that sediment is being removed.
                </p>
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3 mt-2">
                  <p className="text-sm text-yellow-800"><strong>Warning:</strong> If the drain valve is stuck or will not open, do not force it with pliers or a wrench. Plastic drain valves can crack, and old brass valves can break off entirely. If you cannot open the valve, call a licensed plumber to avoid causing a leak.</p>
                </div>
              </div>

              {/* Step 7 */}
              <div className="border-l-4 border-red-700 pl-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">7</span>
                  <h3 className="text-lg font-bold text-gray-900">Drain the Tank Completely</h3>
                </div>
                <p className="text-gray-700">
                  Allow the tank to drain fully. A standard 40 to 50 gallon tank takes 20 to 45 minutes to drain depending on the size and how much sediment is present. If the flow slows down or stops, sediment may be clogging the drain valve. You can try briefly opening and closing the cold water supply to dislodge the blockage. Check the end of your garden hose periodically to monitor the color and clarity of the water.
                </p>
              </div>

              {/* Step 8 */}
              <div className="border-l-4 border-red-700 pl-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">8</span>
                  <h3 className="text-lg font-bold text-gray-900">Flush with Cold Water</h3>
                </div>
                <p className="text-gray-700">
                  Once the tank is empty, turn the cold water supply valve back on while the drain valve is still open. This sends a rush of cold water through the tank that stirs up any remaining sediment on the bottom. Let the water flow through the drain hose for 3 to 5 minutes or until the water coming out of the hose runs completely clear. You may need to repeat this step 2 to 3 times if there is heavy sediment. This is the key step that actually flushes the tank, as draining alone does not remove all of the sediment.
                </p>
              </div>

              {/* Step 9 */}
              <div className="border-l-4 border-red-700 pl-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">9</span>
                  <h3 className="text-lg font-bold text-gray-900">Close the Drain Valve and Refill</h3>
                </div>
                <p className="text-gray-700">
                  Once the water runs clear, close the drain valve firmly and disconnect the garden hose. Make sure the cold water supply is fully open and allow the tank to refill. You will know the tank is full when water begins flowing steadily from the hot water faucet you opened earlier (it will sputter with air first, then flow smoothly). Once you have a steady stream with no air, close that faucet.
                </p>
              </div>

              {/* Step 10 */}
              <div className="border-l-4 border-red-700 pl-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">10</span>
                  <h3 className="text-lg font-bold text-gray-900">Restore Power and Check for Leaks</h3>
                </div>
                <p className="text-gray-700 mb-2">
                  For gas water heaters, turn the gas control valve back to your desired temperature setting (usually 120 degrees Fahrenheit). You may need to relight the pilot light if you turned the gas off completely. For electric water heaters, flip the circuit breaker back on. Check around the drain valve and all connections for any drips or leaks. Place a dry paper towel under the drain valve and check it again after 30 minutes. Allow 20 to 30 minutes for the water to heat back up before using hot water in your home.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-2">
                  <p className="text-sm text-green-800"><strong>Success:</strong> You have successfully drained and flushed your water heater. Mark your calendar for the next flush in 6 to 12 months depending on your water hardness level.</p>
                </div>
              </div>
            </section>

            {/* How to Flush a Tankless Water Heater */}
            <section id="flush-tankless" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to Flush a Tankless Water Heater</h2>

              <p className="text-gray-700 mb-6">
                Tankless water heaters do not store water, so they do not accumulate sediment in the same way tank units do. However, they are highly susceptible to mineral scale buildup inside the heat exchanger. Calcium and lime deposits coat the internal passages and reduce flow rate, lower efficiency, and can trigger error codes that shut down the unit. The process of flushing a tankless unit is called descaling, and it requires circulating a cleaning solution (usually white vinegar) through the system. For a detailed walkthrough, read our complete guide on <Link href="/blog/how-to-descale-tankless-water-heater" className="text-red-700 hover:text-red-800 font-medium">how to descale a tankless water heater</Link>.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Tankless Flushing Overview</h3>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <ol className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="bg-gray-900 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</span>
                    <span>Turn off the gas or electricity and close the hot and cold water isolation valves on the unit.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-gray-900 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</span>
                    <span>Connect a submersible pump and two hoses to the service ports (cold water inlet and hot water outlet).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-gray-900 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">3</span>
                    <span>Fill a 5-gallon bucket with 4 gallons of undiluted white vinegar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-gray-900 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">4</span>
                    <span>Open the service ports and run the pump to circulate vinegar through the heat exchanger for 45 to 60 minutes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-gray-900 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">5</span>
                    <span>Flush with clean water, close the service ports, open the isolation valves, and restore power.</span>
                  </li>
                </ol>
              </div>

              <p className="text-gray-700 mb-6">
                Most tankless manufacturers including Navien, Rinnai, and Noritz require annual descaling to maintain warranty coverage. In hard water areas like Middlesex County, NJ, you may need to descale every 6 months. A tankless descaling kit costs $100 to $150 and can be reused for multiple flushes. Professional descaling services typically cost $150 to $300.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="font-bold text-gray-900 mb-2">Tankless vs Tank Flushing Comparison</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-3">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Tank Water Heater</p>
                    <ul className="space-y-1">
                      <li>Uses water only</li>
                      <li>Takes 1-2 hours</li>
                      <li>No special equipment</li>
                      <li>DIY friendly</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Tankless Water Heater</p>
                    <ul className="space-y-1">
                      <li>Requires vinegar solution</li>
                      <li>Takes 1-1.5 hours</li>
                      <li>Needs pump and hoses</li>
                      <li>Moderate DIY skill</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Mid-content CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Need Help With Your Water Heater?</p>
              <p className="text-gray-300 text-sm mb-4">Our licensed plumbers provide professional water heater flushing, anode rod replacement, and complete maintenance services across Middlesex County, NJ. Same-day appointments available.</p>
              <div className="flex flex-wrap gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">Call Niti: {BUSINESS_INFO.phone}</a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition text-sm">Call Danny: {BUSINESS_INFO.phone2}</a>
              </div>
            </div>

            {/* Service Card - Water Heater Repair */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Related Service: Water Heater Repair</p>
                <p className="text-sm text-gray-600 mb-2">Same-day water heater repair for all brands and models. We diagnose and fix leaks, no hot water issues, strange noises, pilot light problems, and sediment buildup. Serving all of Middlesex County, NJ.</p>
                <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            {/* Signs Your Water Heater Needs Flushing */}
            <section id="signs-needs-flushing" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Signs Your Water Heater Needs Flushing</h2>

              <p className="text-gray-700 mb-6">
                Your water heater will give you clear warning signs when sediment buildup has reached the point where a flush is overdue. Recognizing these symptoms early can save you from more expensive repairs down the road.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Rumbling or Popping Sounds</h3>
                  <p className="text-gray-700 text-sm">These sounds come from water trapped beneath sediment layers. As the burner heats the sediment, steam bubbles form and pop, creating the noise you hear. The louder and more frequent the sounds, the thicker the sediment layer.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Discolored Hot Water</h3>
                  <p className="text-gray-700 text-sm">Rusty, brown, or cloudy hot water indicates sediment is breaking loose from the bottom of the tank and flowing through your pipes. If only the hot water is discolored (cold water is clear), the problem is definitely inside your water heater.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Reduced Hot Water Supply</h3>
                  <p className="text-gray-700 text-sm">Sediment displaces water inside the tank. A 50-gallon tank with 5 gallons of sediment only holds 45 gallons of usable hot water. If your showers are running cold sooner than they used to, sediment buildup is a likely cause.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Longer Heating Times</h3>
                  <p className="text-gray-700 text-sm">The insulating effect of sediment forces your water heater to run longer heating cycles. If your hot water takes noticeably longer to recover after heavy use, sediment is making your burner or element work harder than it should.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Higher Energy Bills</h3>
                  <p className="text-gray-700 text-sm">A water heater with heavy sediment buildup can use 20 to 30 percent more energy than a clean unit. If your gas or electric bill has crept up without a change in usage, your water heater may be the culprit.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Sulfur or Rotten Egg Smell</h3>
                  <p className="text-gray-700 text-sm">Bacteria can thrive in the sediment at the bottom of your tank, particularly if the water heater temperature is set below 120 degrees Fahrenheit. These bacteria produce hydrogen sulfide gas, which creates an unpleasant rotten egg odor in your hot water.</p>
                </div>
              </div>

              <p className="text-gray-700">
                If you are experiencing multiple symptoms at once, your water heater may have significant sediment accumulation. While a flush can still help, heavily neglected units may need professional attention. If you are unsure about the condition of your water heater, read our guide on the <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:text-red-800 font-medium">7 warning signs your water heater is dying</Link> to determine whether a flush or a replacement is the right move.
              </p>
            </section>

            {/* What Happens If You Never Flush */}
            <section id="never-flush" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Happens If You Never Flush Your Water Heater?</h2>

              <p className="text-gray-700 mb-6">
                Many homeowners skip water heater maintenance entirely, either because they do not know it is necessary or because the water heater seems to be working fine. Here is what happens inside your tank when sediment goes unchecked for years.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full p-2 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Year 1-2: Efficiency Loss Begins</h3>
                    <p className="text-gray-700 text-sm">A thin layer of sediment starts forming at the bottom of the tank. Energy efficiency drops by 5 to 10 percent. You probably will not notice a difference in performance, but your energy bills are slightly higher than they need to be.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full p-2 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Year 3-4: Noises and Reduced Capacity</h3>
                    <p className="text-gray-700 text-sm">Sediment is now 1 to 2 inches thick. You start hearing popping and rumbling sounds during heating cycles. Hot water runs out faster because sediment is taking up space inside the tank. Efficiency has dropped 15 to 20 percent.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full p-2 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Year 5-7: Tank Damage Accelerates</h3>
                    <p className="text-gray-700 text-sm">Heavy sediment creates hot spots on the bottom of the tank where the steel overheats. The glass lining starts cracking, exposing bare metal to water and accelerating corrosion. The anode rod is likely depleted by now, offering no further protection. Efficiency loss reaches 25 to 30 percent.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full p-2 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Year 8+: Premature Failure and Flooding Risk</h3>
                    <p className="text-gray-700 text-sm">Corrosion has weakened the tank walls. Small leaks may develop at the bottom of the tank or at welded seams. The drain valve may be permanently clogged with hardened sediment, making flushing impossible without professional removal. Complete tank failure can release 40 to 80 gallons of water into your home, causing thousands of dollars in water damage.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="font-bold text-red-800 mb-2">The Bottom Line</p>
                <p className="text-gray-700 text-sm">
                  A $100 to $250 annual flush can prevent a $1,500 to $3,500 replacement and potentially thousands more in water damage cleanup. It is one of the best returns on investment in home maintenance. If your water heater is more than 3 years old and has never been flushed, schedule a professional maintenance visit before attempting a DIY flush.
                </p>
              </div>
            </section>

            {/* Mid-content CTA (red) */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Schedule a Professional Water Heater Flush</p>
              <p className="text-red-100 text-sm mb-4">Our licensed plumbers flush and inspect water heaters daily across Middlesex County. We check the anode rod, test the T&P valve, inspect for leaks, and ensure your system is running at peak efficiency. Flat-rate pricing with no hidden fees.</p>
              <div className="flex flex-wrap gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">Call Niti: {BUSINESS_INFO.phone}</a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">Call Danny: {BUSINESS_INFO.phone2}</a>
              </div>
            </div>

            {/* Blog Card - Signs Water Heater Dying */}
            <Link href="/blog/signs-water-heater-dying" className="group block mb-12">
              <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition">
                <div className="relative h-48">
                  <Image
                    src="/images/water-heater-repair-service.jpg"
                    alt="7 warning signs your water heater is dying"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-700 text-white px-3 py-1 rounded-full text-xs font-medium">Water Heaters</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-bold text-gray-900 group-hover:text-red-700 transition mb-2">7 Warning Signs Your Water Heater Is Dying</p>
                  <p className="text-sm text-gray-600">Do not wait for a cold shower surprise. Learn the warning signs that your water heater needs replacement before it fails completely.</p>
                </div>
              </div>
            </Link>

            {/* DIY vs Professional Flushing */}
            <section id="diy-vs-pro" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">DIY vs Professional Water Heater Flushing</h2>

              <p className="text-gray-700 mb-6">
                Flushing a tank water heater is one of the more accessible plumbing maintenance tasks for homeowners. However, there are situations where hiring a professional is the smarter choice. Here is how to decide which route is right for you.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-green-600 text-white px-6 py-4">
                    <h3 className="text-xl font-bold">DIY Flushing</h3>
                  </div>
                  <div className="p-6">
                    <p className="font-semibold text-gray-900 mb-3">Best When:</p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">&#10003;</span>
                        <span>Water heater is less than 5 years old</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">&#10003;</span>
                        <span>You have flushed it before (or it has been flushed)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">&#10003;</span>
                        <span>Drain valve is in good condition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">&#10003;</span>
                        <span>You are comfortable turning off gas or electric</span>
                      </li>
                    </ul>
                    <div className="border-t pt-3">
                      <p className="text-sm text-gray-600"><strong>Cost:</strong> $0 to $20 (just your time and a garden hose)</p>
                      <p className="text-sm text-gray-600"><strong>Time:</strong> 1 to 2 hours</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-red-700 text-white px-6 py-4">
                    <h3 className="text-xl font-bold">Professional Flushing</h3>
                  </div>
                  <div className="p-6">
                    <p className="font-semibold text-gray-900 mb-3">Best When:</p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">&#10003;</span>
                        <span>Water heater has never been flushed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">&#10003;</span>
                        <span>Unit is more than 5 years old</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">&#10003;</span>
                        <span>You hear loud banging or see rusty water</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">&#10003;</span>
                        <span>Drain valve appears corroded or stuck</span>
                      </li>
                    </ul>
                    <div className="border-t pt-3">
                      <p className="text-sm text-gray-600"><strong>Cost:</strong> $100 to $250 (includes full inspection)</p>
                      <p className="text-sm text-gray-600"><strong>Time:</strong> 30 to 60 minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">What a Professional Flush Includes</h3>
              <p className="text-gray-700 mb-4">
                When you hire a licensed plumber for a water heater flush, you get more than just sediment removal. A professional maintenance visit typically includes:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold">-</span>
                  <span>Complete tank drain and multi-cycle flush until water runs clear</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold">-</span>
                  <span>Anode rod inspection and replacement recommendation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold">-</span>
                  <span>Temperature and pressure (T&P) relief valve testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold">-</span>
                  <span>Thermostat calibration check</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold">-</span>
                  <span>Visual inspection for leaks, corrosion, and venting issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold">-</span>
                  <span>Gas connection and combustion inspection (gas units)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold">-</span>
                  <span>Written report of findings and recommendations</span>
                </li>
              </ul>

              <p className="text-gray-700">
                A professional can also replace a faulty drain valve during the flush, which is a common issue on older units. If the valve is plastic and has never been opened, there is a good chance it will not seal properly after being used. Plumbers often upgrade these to brass ball valves for long-term reliability.
              </p>
            </section>

            {/* Middlesex County Section */}
            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Water Heater Maintenance in Middlesex County, NJ</h2>

              <p className="text-gray-700 mb-6">
                Middlesex County sits in an area of New Jersey with notably hard water. Municipal water supplies across the county test between 7 and 10 grains per gallon (GPG), which falls into the &quot;hard&quot; to &quot;very hard&quot; range on the water hardness scale. This means homes in our service area experience faster sediment buildup than homes in regions with softer water.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Local Water Hardness by Area</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">East Brunswick</span>
                    <span className="font-semibold text-gray-900">8-10 GPG</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Edison</span>
                    <span className="font-semibold text-gray-900">7-9 GPG</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Old Bridge</span>
                    <span className="font-semibold text-gray-900">8-10 GPG</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sayreville</span>
                    <span className="font-semibold text-gray-900">7-9 GPG</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monroe Township</span>
                    <span className="font-semibold text-gray-900">8-10 GPG</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">South Brunswick</span>
                    <span className="font-semibold text-gray-900">7-9 GPG</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">North Brunswick</span>
                    <span className="font-semibold text-gray-900">7-9 GPG</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">What Hard Water Means for Your Water Heater</h3>
              <p className="text-gray-700 mb-4">
                At 8 GPG hardness, your water heater accumulates roughly twice as much sediment per year as a home with 4 GPG water. For a 50-gallon tank heating 50 gallons per day, that can mean 2 to 4 pounds of calcium carbonate deposited on the bottom of the tank annually. After just 3 years without flushing, you could have a sediment layer 2 to 3 inches thick.
              </p>
              <p className="text-gray-700 mb-6">
                This is why we recommend every homeowner in East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick flush their water heater every 6 to 12 months. Homes on well water should lean toward the 6-month interval since well water is often even harder than municipal supplies. If you have a whole-house water softener, annual flushing is usually sufficient, but you should still check the anode rod at the same time.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Consider a Water Softener</h3>
              <p className="text-gray-700 mb-6">
                If you are tired of dealing with aggressive sediment buildup, a whole-house water softener can dramatically reduce the mineral content in your water supply. Softened water produces far less sediment, which means less frequent flushing, longer equipment lifespan, and fewer scale-related repairs on all your plumbing fixtures. We offer <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium">water filtration and softener installation</Link> services throughout Middlesex County.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="font-bold text-gray-900 mb-2">Maintenance Schedule for Middlesex County Homeowners</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">Every 6 months:</span>
                    <span>Flush water heater (homes without a water softener)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">Every 12 months:</span>
                    <span>Flush water heater (homes with a water softener)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">Every 12 months:</span>
                    <span>Descale tankless water heater</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">Every 2-3 years:</span>
                    <span>Inspect and replace anode rod if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">Every 12 months:</span>
                    <span>Test T&P relief valve</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-3">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How often should you flush a water heater?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">You should flush your water heater at least once per year. If you live in an area with hard water like Middlesex County, NJ (7-10 GPG hardness), you may need to flush every 6 months to prevent excessive sediment buildup and maintain efficiency.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How long does it take to drain a water heater?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Draining a standard 40-50 gallon water heater typically takes 20-45 minutes depending on the amount of sediment buildup and water pressure. If the drain valve is partially clogged with sediment, it may take longer. A full flush with refilling takes about 1-2 hours total.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Can I flush a water heater myself?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Yes, flushing a tank water heater is a DIY-friendly task if you follow safety precautions. You need a garden hose, a bucket, and basic tools. However, if your water heater has never been flushed or is more than 5 years old, consider hiring a professional to avoid damaging a corroded drain valve.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What happens if you never flush your water heater?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">If you never flush your water heater, sediment builds up on the bottom of the tank. This causes banging or popping noises, reduces heating efficiency by up to 30%, shortens the unit&apos;s lifespan, and can eventually cause the tank to crack or leak. Sediment also harbors bacteria that can affect water quality.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Should I flush my water heater if it has never been flushed?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">If your water heater has never been flushed and is several years old, proceed with caution. The drain valve may be clogged or corroded, and disturbing heavy sediment can cause leaks in weakened tanks. For units that have never been maintained, we recommend having a licensed plumber perform the first flush to avoid potential damage.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How do I know if my water heater needs to be flushed?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Signs your water heater needs flushing include rumbling or popping sounds during heating, discolored or rusty hot water, reduced hot water output, longer heating times, and higher energy bills. If you notice any of these symptoms, schedule a flush as soon as possible.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Can flushing a water heater cause problems?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Flushing can occasionally cause issues with older water heaters. A corroded drain valve may leak after being opened for the first time in years, and disturbing heavy sediment can clog the drain valve. On very old tanks, removing sediment may reveal corrosion damage that was previously sealed by the buildup. This is why professional flushing is recommended for older or never-maintained units.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Do tankless water heaters need to be flushed?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Yes, tankless water heaters need to be descaled (flushed with vinegar) annually to remove mineral buildup from the heat exchanger. In hard water areas like New Jersey, descaling every 6-12 months is recommended. Neglecting this maintenance can reduce efficiency, trigger error codes, and void your warranty.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Keep Your Water Heater Running Like New</h2>
              <p className="text-red-100 mb-6">
                Whether you need a professional water heater flush, anode rod replacement, or a complete system inspection, our licensed plumbers are ready to help. We serve homeowners across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick with honest pricing and expert workmanship.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/services/water-heater-repair" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  View Water Heater Services
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/common-water-heater-problems" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Common Water Heater Problems and How to Fix Them</h3>
                    <p className="text-sm text-gray-600">Troubleshoot 12 common water heater problems with DIY fixes and when to call a pro.</p>
                  </div>
                </Link>
                <Link href="/blog/how-to-descale-tankless-water-heater" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Descale a Tankless Water Heater</h3>
                    <p className="text-sm text-gray-600">Step-by-step guide to descaling your tankless water heater for peak performance.</p>
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
                <p className="text-gray-600 text-sm mb-4">Professional water heater flushing and maintenance across Middlesex County, NJ.</p>
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
                  <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                  <li><Link href="/services/water-heater-replacement" className="text-gray-700 hover:text-red-700 transition">Water Heater Replacement</Link></li>
                  <li><Link href="/services/tankless-water-heater-installation" className="text-gray-700 hover:text-red-700 transition">Tankless Water Heater Installation</Link></li>
                  <li><Link href="/services/boiler-repair-service" className="text-gray-700 hover:text-red-700 transition">Boiler Repair</Link></li>
                  <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Services</Link></li>
                  <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                </ul>
                <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
              </div>
              {/* Related Blogs */}
              <div className="bg-white rounded-xl shadow-md p-5">
                <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/blog/signs-water-heater-dying" className="text-gray-700 hover:text-red-700 transition">7 Warning Signs Your Water Heater Is Dying</Link></li>
                  <li><Link href="/blog/how-to-descale-tankless-water-heater" className="text-gray-700 hover:text-red-700 transition">How to Descale a Tankless Water Heater</Link></li>
                  <li><Link href="/blog/common-water-heater-problems" className="text-gray-700 hover:text-red-700 transition">Common Water Heater Problems and How to Fix Them</Link></li>
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
