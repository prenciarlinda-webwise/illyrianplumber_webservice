import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How Tankless Water Heaters Work: Complete Guide to Pros, Cons & Lifespan",
  description: "Learn how tankless water heaters work, their pros and cons, and how long they last. Expert guide from licensed NJ plumbers covering on-demand heating technology.",
  keywords: [
    "how does a tankless water heater work",
    "tankless water heater pros and cons",
    "how long do tankless water heaters last",
    "on demand water heater",
    "tankless water heater lifespan",
    "tankless water heater benefits",
    "tankless water heater technology",
    "instantaneous water heater",
    "tankless water heater energy efficiency",
    "electric tankless water heater how it works",
    "gas tankless water heater how it works",
    "tankless water heater advantages disadvantages",
  ],
  openGraph: {
    title: "How Tankless Water Heaters Work: Complete Guide to Pros, Cons & Lifespan",
    description: "Learn how tankless water heaters work, their pros and cons, and how long they last. Expert guide from licensed NJ plumbers.",
    type: "article",
    publishedTime: "2025-01-06T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function TanklessGuidePost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Tankless Water Heaters Work: Complete Guide to Pros, Cons & Lifespan",
    description: "Learn how tankless water heaters work, their pros and cons, and how long they last. Expert guide from licensed NJ plumbers.",
    image: "https://www.illyrianplumber.com/images/tankless-water-heater-installation.jpg",
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
    datePublished: "2025-01-06T08:00:00.000Z",
    dateModified: "2026-03-18T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/how-tankless-water-heaters-work",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does a tankless water heater work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A tankless water heater works by heating water on demand as it flows through the unit. When you turn on a hot water tap, cold water travels through a pipe into the unit where either a gas burner or electric element heats the water instantly, delivering a continuous supply of hot water without storing it in a tank.",
        },
      },
      {
        "@type": "Question",
        name: "How long do tankless water heaters last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tankless water heaters typically last 20-25 years with proper maintenance, which is nearly double the 10-12 year lifespan of traditional tank water heaters. In areas with hard water like Middlesex County, NJ, regular descaling can extend the lifespan even further.",
        },
      },
      {
        "@type": "Question",
        name: "What are the pros and cons of tankless water heaters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pros include endless hot water, 20-34% energy savings, longer lifespan (20+ years), space savings, and no flood risk. Cons include higher upfront cost, potential need for gas line upgrades, and possible flow rate limitations in very cold climates.",
        },
      },
      {
        "@type": "Question",
        name: "Is a tankless water heater worth it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most homeowners, yes. While the upfront cost is higher, the energy savings (20-34% reduction in water heating costs), longer lifespan, and endless hot water supply make tankless units a worthwhile investment, especially for families with high hot water demand.",
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
        <header className="relative bg-gray-900 text-white py-16 md:py-24">
          <div className="absolute inset-0">
            <Image
              src="/images/residential-pex-plumbing-install.jpg"
              alt="How tankless water heaters work - complete guide"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Water Heaters</span>
                <time dateTime="2025-01-06">January 6, 2025</time>
                <span>15 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How Tankless Water Heaters Work: Complete Guide to Pros, Cons & Lifespan
              </h1>
              <p className="text-xl text-gray-300">
                Everything you need to know about on-demand water heating technology, from how it works to whether it&apos;s right for your New Jersey home.
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
                <p className="text-sm text-gray-600">Licensed Master Plumbers serving Middlesex County, NJ since 2020</p>
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
                If you&apos;ve ever run out of hot water mid-shower or watched your energy bills climb during winter months, you&apos;ve probably wondered about tankless water heaters. These compact, energy-efficient units have revolutionized home water heating, but how exactly do they work? And more importantly, are they the right choice for your home?
              </p>
              <p>
                As licensed plumbers who have installed hundreds of tankless systems throughout East Brunswick and Middlesex County, we&apos;ve seen firsthand how this technology can transform a home&apos;s hot water experience. In this comprehensive guide, we&apos;ll explain exactly how tankless water heaters work, break down the real pros and cons, and help you understand what to expect from these systems in our New Jersey climate.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/sewer-line-repair-replacement" className="text-red-700 hover:text-red-800">sewer line repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-red-700 hover:text-red-800">How Does a Tankless Water Heater Work?</a></li>
                <li><a href="#gas-vs-electric" className="text-red-700 hover:text-red-800">Gas vs. Electric Tankless Systems</a></li>
                <li><a href="#pros-cons" className="text-red-700 hover:text-red-800">Tankless Water Heater Pros and Cons</a></li>
                <li><a href="#lifespan" className="text-red-700 hover:text-red-800">How Long Do Tankless Water Heaters Last?</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Middlesex County Considerations</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Main Content Sections */}
            <section id="how-it-works" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How Does a Tankless Water Heater Work?</h2>

              <p className="text-gray-700 mb-6">
                Unlike traditional tank water heaters that store and continuously heat 40-80 gallons of water, tankless water heaters -also called on-demand or instantaneous water heaters -heat water only when you need it. This fundamental difference is what makes them so energy efficient and capable of providing endless hot water.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">The On-Demand Heating Process</h3>

              <p className="text-gray-700 mb-4">
                Here&apos;s what happens when you turn on your hot water tap with a tankless system:
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <div>
                      <strong className="text-gray-900">Flow Detection</strong>
                      <p className="text-gray-700">When you open a hot water faucet, water begins flowing through the tankless unit. A flow sensor detects this movement and signals the unit to activate.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <div>
                      <strong className="text-gray-900">Heat Exchanger Activation</strong>
                      <p className="text-gray-700">The control panel ignites the gas burner (in gas models) or activates electric heating elements. Cold water passes through the heat exchanger, where it&apos;s rapidly heated to your set temperature.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <div>
                      <strong className="text-gray-900">Temperature Regulation</strong>
                      <p className="text-gray-700">Sophisticated sensors constantly monitor the outgoing water temperature, automatically adjusting the flame or element power to maintain your desired temperature -typically 120°F for safety.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <div>
                      <strong className="text-gray-900">Hot Water Delivery</strong>
                      <p className="text-gray-700">The heated water flows directly to your faucet, shower, or appliance. As long as water keeps flowing, the unit keeps heating -providing truly endless hot water.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
                    <div>
                      <strong className="text-gray-900">Automatic Shutdown</strong>
                      <p className="text-gray-700">When you close the tap, the flow sensor detects the stop and the unit shuts down, using zero energy until hot water is needed again.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/water-heater-maintenance-parts.jpg"
                  alt="Inside components of a tankless water heater system"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 p-3 bg-gray-50">The internal components of a tankless water heater, including the heat exchanger and control board.</p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Components Inside a Tankless Unit</h3>

              <ul className="space-y-3 text-gray-700 mb-6">
                <li><strong>Heat Exchanger:</strong> The core component where water is heated. Made of copper or stainless steel, it transfers heat from the burner or elements to the water passing through.</li>
                <li><strong>Flow Sensor:</strong> Detects when water is flowing and triggers the heating process.</li>
                <li><strong>Gas Burner or Electric Elements:</strong> The heat source. Gas units use a burner with up to 199,000 BTUs, while electric units use multiple heating elements.</li>
                <li><strong>Venting System (Gas Only):</strong> Safely exhausts combustion gases outside your home through PVC or stainless steel venting.</li>
                <li><strong>Control Board:</strong> The &quot;brain&quot; that manages all operations, monitors sensors, and adjusts heating output.</li>
                <li><strong>Inlet Filter:</strong> Screens out debris to protect internal components.</li>
              </ul>
            </section>

            <section id="gas-vs-electric" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Gas vs. Electric Tankless Water Heaters</h2>

              <p className="text-gray-700 mb-6">
                Both gas and electric tankless water heaters use the same on-demand heating principle, but they differ significantly in performance, installation requirements, and operating costs. Understanding these differences is crucial for choosing the right system for your New Jersey home.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Gas Tankless Water Heaters</h3>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>✓ Higher flow rates (8-11 GPM)</li>
                    <li>✓ Better for whole-house applications</li>
                    <li>✓ Lower operating costs in NJ</li>
                    <li>✓ Works well in cold climates</li>
                  </ul>
                  <p className="text-sm text-gray-600"><strong>Considerations:</strong> Requires gas line (may need upgrade), proper venting, and higher upfront cost.</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Electric Tankless Water Heaters</h3>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>✓ Simpler installation</li>
                    <li>✓ No venting required</li>
                    <li>✓ More compact size</li>
                    <li>✓ Lower upfront cost</li>
                  </ul>
                  <p className="text-sm text-gray-600"><strong>Considerations:</strong> Lower flow rates (2-5 GPM), may require electrical panel upgrade, best for point-of-use applications.</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                <strong>Our recommendation for Middlesex County homes:</strong> For whole-house hot water needs, gas tankless water heaters are typically the better choice. New Jersey&apos;s cold incoming water temperatures (sometimes as low as 40°F in winter) require significant heating power that gas units deliver more effectively. However, electric point-of-use units can be excellent for adding hot water to a single bathroom or remote fixture.
              </p>
            </section>

            {/* Dark CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Thinking about going tankless?</p>
                <p className="text-gray-300 text-sm">Expert tankless installation in Middlesex County</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
              </div>
            </div>

            <section id="pros-cons" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Tankless Water Heater Pros and Cons</h2>

              <p className="text-gray-700 mb-6">
                After installing tankless systems in hundreds of Middlesex County homes, we&apos;ve gathered real-world feedback on the advantages and limitations. Here&apos;s an honest assessment:
              </p>

              <h3 className="text-xl font-bold text-green-700 mb-4">The Pros: Why Homeowners Love Tankless</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Endless Hot Water</h4>
                  <p className="text-gray-700">The most celebrated benefit. No more cold showers because someone used all the hot water. Perfect for large families, back-to-back showers, and running multiple hot water appliances simultaneously.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Energy Efficiency (20-34% Savings)</h4>
                  <p className="text-gray-700">Traditional tanks constantly heat stored water, wasting energy on &quot;standby heat loss.&quot; Tankless units only heat water when needed. The Department of Energy estimates 20-34% energy savings for homes using less than 41 gallons of hot water daily.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Longer Lifespan</h4>
                  <p className="text-gray-700">While tank water heaters typically last 10-12 years, tankless units commonly last 20-25 years with proper maintenance. That&apos;s potentially two tank water heater lifespans from one tankless investment.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Space Savings</h4>
                  <p className="text-gray-700">Wall-mounted tankless units are about the size of a carry-on suitcase. They free up valuable floor space -a major benefit in smaller New Jersey homes, condos, and utility closets.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">No Flood Risk</h4>
                  <p className="text-gray-700">Without a 40-80 gallon tank, there&apos;s no risk of catastrophic tank failure flooding your basement or utility room -a real concern with aging tank water heaters.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Increased Home Value</h4>
                  <p className="text-gray-700">Energy-efficient upgrades like tankless water heaters appeal to homebuyers. Many real estate agents report that tankless systems are a selling point that can increase property value.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-red-700 mb-4">The Cons: Important Considerations</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-gray-900">Higher Upfront Cost</h4>
                  <p className="text-gray-700">Tankless units cost more than tank water heaters, and installation is more complex. A complete tank-to-tankless conversion in New Jersey typically runs $2,500-$4,500 including gas line upgrades and new venting. However, the longer lifespan and energy savings often offset this over time.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-gray-900">Gas Line Upgrades Often Needed</h4>
                  <p className="text-gray-700">Most existing homes have 1/2&quot; gas lines for tank water heaters. Tankless units often require 3/4&quot; gas lines to handle their higher BTU demand. This upgrade adds to the installation cost but is essential for proper operation.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-gray-900">Cold Climate Flow Limitations</h4>
                  <p className="text-gray-700">In New Jersey winters, incoming water can be 40-50°F. Heating this cold water to 120°F requires more energy, which can reduce the flow rate. A unit rated for 10 GPM in Florida might only deliver 6-7 GPM in January in East Brunswick. Proper sizing accounts for this.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-gray-900">&quot;Cold Water Sandwich&quot; Effect</h4>
                  <p className="text-gray-700">Some users experience brief bursts of cold water between hot water draws. This happens because residual hot water in the pipes is followed by cold water before the unit reactivates. Modern units with recirculation features minimize this issue.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-gray-900">Regular Maintenance Required</h4>
                  <p className="text-gray-700">Tankless water heaters need annual flushing to remove mineral scale buildup, especially in hard water areas like Middlesex County. Neglecting maintenance can void warranties and shorten lifespan.</p>
                </div>
              </div>
            </section>

            <section id="lifespan" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How Long Do Tankless Water Heaters Last?</h2>

              <p className="text-gray-700 mb-6">
                One of the most compelling reasons to invest in a tankless water heater is longevity. Here&apos;s what you can realistically expect:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-red-700 mb-2">20-25</p>
                    <p className="text-gray-700">Years average lifespan for tankless water heaters</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-gray-400 mb-2">10-12</p>
                    <p className="text-gray-700">Years average lifespan for traditional tank heaters</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Factors That Affect Tankless Lifespan</h3>

              <ul className="space-y-3 text-gray-700 mb-6">
                <li><strong>Water Quality:</strong> Hard water with high mineral content causes scale buildup that reduces efficiency and lifespan. Middlesex County has moderately hard water (7-10 grains per gallon), making annual descaling essential.</li>
                <li><strong>Maintenance Frequency:</strong> Units that receive annual professional maintenance consistently outperform neglected units. Flushing removes scale before it damages the heat exchanger.</li>
                <li><strong>Usage Patterns:</strong> Moderate, consistent use is easier on the unit than extreme demand spikes.</li>
                <li><strong>Installation Quality:</strong> Proper installation by licensed professionals ensures correct venting, gas pressure, and water flow -all critical for longevity.</li>
                <li><strong>Brand Quality:</strong> Premium brands like Navien, Rinnai, and Noritz typically offer better components and longer warranties.</li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Pro Tip: Extend Your Tankless Lifespan</h4>
                <p className="text-gray-700">Consider installing a water softener alongside your tankless system. Softened water dramatically reduces scale buildup, extending the heat exchanger&apos;s life and maintaining peak efficiency. Many of our East Brunswick customers combine these systems for optimal performance.</p>
              </div>
            </section>

            {/* Red CTA */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Thinking about going tankless?</p>
              <p className="text-red-100 text-sm mb-4">Expert tankless installation in Middlesex County</p>
              <div className="flex flex-wrap gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">Call Niti: {BUSINESS_INFO.phone}</a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">Call Danny: {BUSINESS_INFO.phone2}</a>
              </div>
            </div>

            {/* Service Card */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Related Service: Tankless Water Heater Installation</p>
                <p className="text-sm text-gray-600 mb-2">Professional tankless water heater installation with gas line upgrades, venting, and full system setup. Licensed and insured for all Middlesex County municipalities.</p>
                <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Middlesex County Considerations</h2>

              <p className="text-gray-700 mb-6">
                Installing a tankless water heater in New Jersey presents some unique considerations that homeowners in warmer climates don&apos;t face. Here&apos;s what we&apos;ve learned serving East Brunswick, Edison, Old Bridge, and surrounding communities:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Cold Incoming Water Temperature</h4>
                  <p className="text-gray-700">Middlesex County groundwater temperatures range from 40°F in winter to 70°F in summer. This 30-degree swing significantly impacts tankless performance. We always size units based on worst-case winter conditions to ensure year-round performance.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Hard Water in the Area</h4>
                  <p className="text-gray-700">Our municipal water in Middlesex County typically measures 7-10 grains per gallon hardness. This isn&apos;t extreme, but it&apos;s enough to require annual descaling to prevent efficiency loss and premature heat exchanger failure.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Natural Gas Availability</h4>
                  <p className="text-gray-700">Most Middlesex County homes have natural gas service, making gas tankless systems practical and cost-effective. PSE&G provides reliable gas service throughout our service area.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Permit Requirements</h4>
                  <p className="text-gray-700">New Jersey requires permits for water heater installations. As licensed plumbers, we handle all permit applications and inspections with your local building department, ensuring code compliance.</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How does a tankless water heater work?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">A tankless water heater works by heating water on demand as it flows through the unit. When you turn on a hot water tap, cold water travels through a pipe into the unit where either a gas burner or electric element heats the water instantly, delivering a continuous supply of hot water without storing it in a tank.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How long do tankless water heaters last?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Tankless water heaters typically last 20-25 years with proper maintenance, which is nearly double the 10-12 year lifespan of traditional tank water heaters. In areas with hard water like Middlesex County, NJ, regular descaling can extend the lifespan even further.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Is a tankless water heater worth it?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">For most homeowners, yes. While the upfront cost is higher, the energy savings (20-34% reduction in water heating costs), longer lifespan (20+ years vs 10-12 years), and endless hot water supply make tankless units a worthwhile investment, especially for families with high hot water demand.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Can a tankless water heater run out of hot water?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">No, a properly sized tankless water heater will never &quot;run out&quot; of hot water because it heats water on demand. However, if you exceed its flow rate capacity (running too many fixtures simultaneously), the water temperature may drop. Proper sizing prevents this issue.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Do tankless water heaters work in cold climates like New Jersey?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Yes, but proper sizing is critical. Cold incoming water (40-50°F in NJ winters) requires more heating capacity. Gas tankless water heaters with higher BTU ratings perform best in our climate. We size all units based on worst-case winter conditions to ensure year-round performance.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Upgrade to Tankless?</h2>
              <p className="text-red-100 mb-6">
                Our licensed plumbers provide free in-home assessments to determine if a tankless water heater is right for your home. We&apos;ll evaluate your hot water needs, inspect your existing infrastructure, and provide an honest recommendation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/services/tankless-water-heater-installation" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  Learn About Our Installation Services
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/tankless-vs-tank-water-heater" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Tankless vs. Tank: Cost & Performance Comparison</h3>
                    <p className="text-sm text-gray-600">A comprehensive comparison to help you choose the right water heater.</p>
                  </div>
                </Link>
                <Link href="/blog/how-to-descale-tankless-water-heater" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Maintain Your Tankless Water Heater</h3>
                    <p className="text-sm text-gray-600">Essential maintenance tips to maximize your tankless lifespan.</p>
                  </div>
                </Link>
              </div>
            </section>
          </div>
          {/* Sidebar */}
          <aside className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="sticky top-[6rem] space-y-6">
              <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                <p className="text-lg font-bold text-gray-900 mb-1">Need a Plumber?</p>
                <p className="text-gray-600 text-sm mb-4">Expert tankless water heater installation and service in Middlesex County.</p>
                <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
                <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
              </div>
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
              <div className="bg-white rounded-xl shadow-md p-5">
                <p className="font-bold text-gray-900 mb-3">Our Services</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/services/tankless-water-heater-installation" className="text-gray-700 hover:text-red-700 transition">Tankless Water Heater Installation</Link></li>
                  <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                  <li><Link href="/services/water-heater-replacement" className="text-gray-700 hover:text-red-700 transition">Water Heater Replacement</Link></li>
                  <li><Link href="/services/boiler-repair-service" className="text-gray-700 hover:text-red-700 transition">Boiler Repair</Link></li>
                  <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Services</Link></li>
                  <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                </ul>
                <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5">
                <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/blog/tankless-vs-tank-water-heater" className="text-gray-700 hover:text-red-700 transition leading-snug block">Tankless vs Tank Water Heater: Complete Comparison</Link></li>
                  <li><Link href="/blog/what-size-tankless-water-heater" className="text-gray-700 hover:text-red-700 transition leading-snug block">What Size Tankless Water Heater Do I Need?</Link></li>
                  <li><Link href="/blog/how-to-descale-tankless-water-heater" className="text-gray-700 hover:text-red-700 transition leading-snug block">How to Descale a Tankless Water Heater</Link></li>
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
