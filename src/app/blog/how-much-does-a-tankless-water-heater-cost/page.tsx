import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How Much Does a Tankless Water Heater Cost? (2026 NJ Prices)",
  description: "Tankless water heater costs in NJ: $2,800-$6,500 installed. Compare gas vs electric prices, installation costs, and brand pricing from licensed NJ plumbers.",
  keywords: [
    "how much does a tankless water heater cost",
    "tankless water heater cost",
    "cost of tankless water heater",
    "how much is a tankless water heater",
    "electric tankless water heater cost",
    "gas tankless water heater cost",
    "tankless water heater installation cost",
    "tankless water heater price",
    "tankless water heater cost installed",
    "cost to install tankless water heater",
    "tankless water heater replacement cost",
    "average cost of tankless water heater",
    "tankless hot water heater cost",
    "how much to install tankless water heater",
    "tankless water heater cost NJ",
    "tankless water heater cost with installation",
    "Navien tankless water heater cost",
    "Rinnai tankless water heater price",
  ],
  openGraph: {
    title: "How Much Does a Tankless Water Heater Cost? (2026 NJ Prices)",
    description: "Tankless water heater costs in NJ: $2,800-$6,500 installed. Gas vs electric pricing, brand comparisons, and installation breakdown.",
    type: "article",
    publishedTime: "2026-03-18T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function TanklessWaterHeaterCostPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Does a Tankless Water Heater Cost? (2026 NJ Prices)",
    description: "Complete tankless water heater cost guide for New Jersey homeowners. Covers gas vs electric pricing, installation costs, brand comparisons, and ROI analysis.",
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
    datePublished: "2026-03-18T08:00:00.000Z",
    dateModified: "2026-03-18T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/how-much-does-a-tankless-water-heater-cost",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a tankless water heater cost installed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A tankless water heater costs $2,800-$6,500 fully installed in New Jersey. This includes the unit ($800-$3,500), professional installation labor ($1,200-$2,500), and any necessary upgrades like gas line work or new venting. Gas models cost more than electric but deliver better whole-house performance.",
        },
      },
      {
        "@type": "Question",
        name: "Is a tankless water heater worth the cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most NJ homeowners who plan to stay 7+ years, yes. Tankless water heaters save $100-$150 per year on energy bills, last 20-25 years (vs 10-12 for tanks), and provide unlimited hot water. Over 20 years, total cost of ownership is often lower than replacing two tank water heaters.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a gas tankless water heater cost vs electric?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gas tankless water heater units cost $1,500-$3,500 while electric units cost $500-$1,500. However, gas installation costs $1,500-$3,000 (may need gas line upgrade and venting) while electric installation costs $800-$1,500. Total installed: gas $3,000-$6,500, electric $1,300-$3,000.",
        },
      },
      {
        "@type": "Question",
        name: "What is the average cost of a tankless water heater in New Jersey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The average cost of a tankless water heater in New Jersey is $4,200 installed for a gas unit and $2,100 installed for an electric unit. NJ costs run 10-15% higher than the national average due to higher labor rates, permit requirements, and cold inlet water temperatures requiring larger units.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to replace a tank water heater with tankless?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Converting from a tank to tankless water heater costs $3,500-$7,000 in New Jersey. This is higher than a standard tankless installation because it includes removing the old tank ($150-$300), rerouting water lines, upgrading gas lines from 1/2\" to 3/4\" ($300-$800), and installing new venting ($200-$600).",
        },
      },
      {
        "@type": "Question",
        name: "How much do Navien tankless water heaters cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Navien tankless water heaters cost $1,800-$3,200 for the unit. The popular Navien NPE-240A costs about $2,200 for the unit and $4,000-$5,500 fully installed. Navien is the #1 brand we install in Middlesex County due to their high efficiency ratings (0.97 UEF) and built-in recirculation pump.",
        },
      },
      {
        "@type": "Question",
        name: "What factors affect tankless water heater installation cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key factors include: fuel type (gas costs more than electric), unit size/BTU rating, whether gas line upgrades are needed, venting requirements, electrical work, permit fees, location of installation, and whether it's a new install or conversion from a tank. In NJ, cold inlet water requires larger units, increasing cost.",
        },
      },
      {
        "@type": "Question",
        name: "Are there any rebates for tankless water heaters in NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. NJ homeowners may qualify for federal tax credits up to $2,000 for qualifying ENERGY STAR tankless water heaters through the Inflation Reduction Act. PSE&G and NJ Clean Energy Program may offer additional rebates of $300-$500 for high-efficiency water heaters. These incentives can reduce your net cost by $500-$2,500.",
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
              src="/images/tankless-water-heater-installation.jpg"
              alt="Tankless water heater installation cost in New Jersey"
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
                <time dateTime="2026-03-18">March 18, 2026</time>
                <span>18 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How Much Does a Tankless Water Heater Cost? (2026 NJ Price Guide)
              </h1>
              <p className="text-xl text-gray-300">
                Complete cost breakdown for tankless water heater installation in New Jersey. Gas vs electric pricing, brand comparisons, and what Middlesex County homeowners actually pay.
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
            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                The average <strong>tankless water heater costs $2,800 to $6,500 fully installed</strong> in New Jersey. The unit itself ranges from $500 to $3,500, with professional installation adding $1,200 to $3,000 depending on whether you need gas line upgrades, new venting, or electrical work.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                But those are just the averages. The actual cost of a tankless water heater for your home depends on fuel type (gas vs electric), the brand you choose, the size of your home, and the complexity of the installation. As licensed plumbers who have performed over 500 <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 underline">tankless water heater installations</Link> across Middlesex County since 2010, we&apos;ve seen projects range from $1,300 for a simple electric point-of-use unit to $7,500+ for a premium whole-house gas system with extensive gas line work. Not sure if tankless is right for you? Read our <Link href="/blog/tankless-vs-tank-water-heater" className="text-red-700 hover:text-red-800 underline">tankless vs tank water heater comparison</Link> for a full breakdown of the pros and cons.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                In this guide, we break down every cost you&apos;ll encounter, compare prices by fuel type and brand, explain what makes NJ installations different from the national average, and help you determine whether a tankless water heater is actually worth the investment for your specific situation.
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Tankless Water Heater Cost Breakdown</h2>
              <ul className="space-y-2">
                <li><a href="#average-costs" className="text-red-700 hover:text-red-800">Average Tankless Water Heater Costs by Type</a></li>
                <li><a href="#installation-breakdown" className="text-red-700 hover:text-red-800">Installation Cost Breakdown (NJ Specific)</a></li>
                <li><a href="#cost-factors" className="text-red-700 hover:text-red-800">Factors That Affect Your Cost</a></li>
                <li><a href="#tankless-vs-tank-cost" className="text-red-700 hover:text-red-800">Cost Comparison: Tankless vs Tank</a></li>
                <li><a href="#brand-pricing" className="text-red-700 hover:text-red-800">Popular Brands and Price Ranges</a></li>
                <li><a href="#nj-considerations" className="text-red-700 hover:text-red-800">NJ-Specific Cost Considerations</a></li>
                <li><a href="#roi-savings" className="text-red-700 hover:text-red-800">ROI and Energy Savings Calculation</a></li>
                <li><a href="#worth-it" className="text-red-700 hover:text-red-800">When Is Tankless Worth It (and When It&apos;s Not)</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Tankless Water Heater Costs in Middlesex County</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Quick Cost Summary Table */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Cost Summary: Tankless Water Heater Prices in NJ (2026)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Type</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">Unit Cost</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">Installation</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">Total Installed</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2 font-medium">Gas (whole-house)</td>
                      <td className="text-center py-3 px-2">$1,500-$3,500</td>
                      <td className="text-center py-3 px-2">$1,500-$3,000</td>
                      <td className="text-center py-3 px-2 font-bold text-blue-700">$3,000-$6,500</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2 font-medium">Electric (whole-house)</td>
                      <td className="text-center py-3 px-2">$800-$1,500</td>
                      <td className="text-center py-3 px-2">$800-$1,500</td>
                      <td className="text-center py-3 px-2 font-bold text-blue-700">$1,600-$3,000</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2 font-medium">Electric (point-of-use)</td>
                      <td className="text-center py-3 px-2">$150-$500</td>
                      <td className="text-center py-3 px-2">$150-$500</td>
                      <td className="text-center py-3 px-2 font-bold text-blue-700">$300-$1,000</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2 font-medium">Tank-to-tankless conversion</td>
                      <td className="text-center py-3 px-2">$1,500-$3,500</td>
                      <td className="text-center py-3 px-2">$2,000-$3,500</td>
                      <td className="text-center py-3 px-2 font-bold text-blue-700">$3,500-$7,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">NJ Average (gas, installed)</td>
                      <td className="text-center py-3 px-2">$2,200</td>
                      <td className="text-center py-3 px-2">$2,000</td>
                      <td className="text-center py-3 px-2 font-bold text-red-700">$4,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4 italic">
                Prices reflect 2026 Middlesex County, NJ rates. Your actual cost depends on unit selection, home configuration, and installation complexity.
              </p>
            </div>

            {/* Average Costs by Type Section */}
            <section id="average-costs" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Average Tankless Water Heater Costs by Type</h2>

              <p className="text-gray-700 mb-6">
                The biggest cost variable is whether you choose a gas or electric tankless water heater. Both have their place, but the price difference is significant. Here&apos;s what each type costs in New Jersey, including the unit and installation labor.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Gas Tankless Water Heater Cost</h3>

              <p className="text-gray-700 mb-4">
                Gas tankless water heaters are the most popular choice for whole-house applications in New Jersey. They deliver higher flow rates (8-11 GPM) and handle our cold winter inlet water temperatures better than electric models.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Gas Tankless Water Heater Price Breakdown</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Unit cost (standard, 150K-180K BTU)</span>
                    <span className="font-semibold">$1,500-$2,500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Unit cost (premium, 180K-199K BTU)</span>
                    <span className="font-semibold">$2,500-$3,500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Installation labor</span>
                    <span className="font-semibold">$1,200-$2,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Gas line upgrade (if needed)</span>
                    <span className="font-semibold">$300-$800</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Stainless steel venting</span>
                    <span className="font-semibold">$200-$600</span>
                  </li>
                  <li className="flex justify-between">
                    <span>NJ permit and inspection</span>
                    <span className="font-semibold">$100-$250</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Condensate drain (condensing units)</span>
                    <span className="font-semibold">$100-$300</span>
                  </li>
                  <li className="flex justify-between border-t border-orange-200 pt-3 mt-3">
                    <span className="font-bold">Total Range (Gas)</span>
                    <span className="font-bold text-orange-700">$3,000-$6,500</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Electric Tankless Water Heater Cost</h3>

              <p className="text-gray-700 mb-4">
                Electric tankless water heaters cost significantly less upfront than gas models. However, they deliver lower flow rates (2-5 GPM for whole-house, 0.5-2 GPM for point-of-use) and can struggle during New Jersey winters when inlet water drops to 40°F. We typically recommend electric tankless units for point-of-use applications or supplementary hot water.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Electric Tankless Water Heater Price Breakdown</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Unit cost (whole-house, 18-36 kW)</span>
                    <span className="font-semibold">$800-$1,500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Unit cost (point-of-use, 3-8 kW)</span>
                    <span className="font-semibold">$150-$500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Installation labor</span>
                    <span className="font-semibold">$500-$1,200</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Electrical panel upgrade (if needed)</span>
                    <span className="font-semibold">$500-$2,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dedicated circuit wiring</span>
                    <span className="font-semibold">$200-$500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>NJ permit and inspection</span>
                    <span className="font-semibold">$75-$200</span>
                  </li>
                  <li className="flex justify-between border-t border-yellow-200 pt-3 mt-3">
                    <span className="font-bold">Total Range (Electric, whole-house)</span>
                    <span className="font-bold text-yellow-700">$1,600-$3,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-bold">Total Range (Electric, point-of-use)</span>
                    <span className="font-bold text-yellow-700">$300-$1,000</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Important: Electrical Panel Capacity</h4>
                <p className="text-gray-700">
                  Many older homes in Middlesex County have 100-amp or 150-amp electrical panels. Whole-house electric tankless water heaters often require 150-200 amp service. If your panel needs upgrading, add $1,200-$2,000 to the project cost. This is one reason we often recommend gas tankless units for whole-house applications in our area -most homes already have adequate gas service through PSE&G.
                </p>
              </div>
            </section>

            {/* Installation Cost Breakdown */}
            <section id="installation-breakdown" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Installation Cost Breakdown (NJ Specific)</h2>

              <p className="text-gray-700 mb-6">
                Installation is where tankless water heater costs vary the most. A straightforward tankless-to-tankless replacement might cost $1,200 in labor, while a tank-to-tankless conversion requiring gas line work, new venting, and plumbing modifications can run $2,500-$3,500. Here&apos;s what goes into installation costs in New Jersey.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Labor Costs</h3>

              <p className="text-gray-700 mb-4">
                Licensed plumber labor rates in Middlesex County, NJ range from $85 to $150 per hour. A typical tankless water heater installation takes 4-8 hours depending on complexity. Some companies charge flat rates rather than hourly.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Installation Type</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Time</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Labor Cost</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Materials</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Total Install</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Tankless replacing tankless (same fuel)</td>
                      <td className="text-center py-3 px-4">3-5 hrs</td>
                      <td className="text-center py-3 px-4">$400-$750</td>
                      <td className="text-center py-3 px-4">$100-$200</td>
                      <td className="text-center py-3 px-4 font-semibold">$500-$950</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">New gas tankless (existing gas line OK)</td>
                      <td className="text-center py-3 px-4">4-6 hrs</td>
                      <td className="text-center py-3 px-4">$600-$1,000</td>
                      <td className="text-center py-3 px-4">$300-$600</td>
                      <td className="text-center py-3 px-4 font-semibold">$900-$1,600</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Tank-to-tankless conversion (gas)</td>
                      <td className="text-center py-3 px-4">6-10 hrs</td>
                      <td className="text-center py-3 px-4">$1,000-$2,000</td>
                      <td className="text-center py-3 px-4">$500-$1,000</td>
                      <td className="text-center py-3 px-4 font-semibold">$1,500-$3,000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Electric tankless (point-of-use)</td>
                      <td className="text-center py-3 px-4">2-3 hrs</td>
                      <td className="text-center py-3 px-4">$200-$400</td>
                      <td className="text-center py-3 px-4">$50-$150</td>
                      <td className="text-center py-3 px-4 font-semibold">$250-$550</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Electric tankless (whole-house)</td>
                      <td className="text-center py-3 px-4">4-6 hrs</td>
                      <td className="text-center py-3 px-4">$500-$900</td>
                      <td className="text-center py-3 px-4">$200-$500</td>
                      <td className="text-center py-3 px-4 font-semibold">$700-$1,400</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Installation Costs</h3>

              <p className="text-gray-700 mb-4">
                Beyond basic labor, several additional costs can affect your total tankless water heater installation cost. Not every home needs all of these, but they&apos;re common enough that you should budget for potential extras.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">Gas Line Upgrade</h4>
                    <span className="font-semibold text-gray-900">$300-$800</span>
                  </div>
                  <p className="text-gray-700 text-sm">Most tankless water heaters require 3/4&quot; gas supply lines. Many older NJ homes have 1/2&quot; lines that need upgrading. If the gas meter is far from the installation location, costs increase. We see this in about 60% of tank-to-tankless conversions in Middlesex County.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">Venting Installation</h4>
                    <span className="font-semibold text-gray-900">$200-$600</span>
                  </div>
                  <p className="text-gray-700 text-sm">Gas tankless units require stainless steel category III or PVC venting (for condensing units). Direct-vent models need both intake and exhaust pipes run through an exterior wall or roof. Cost varies by distance and routing complexity.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">Old Tank Removal and Disposal</h4>
                    <span className="font-semibold text-gray-900">$150-$300</span>
                  </div>
                  <p className="text-gray-700 text-sm">Draining, disconnecting, and hauling away your old tank water heater. Heavier units (75-gallon) and difficult access (tight basements, upstairs) cost more. We include disposal in most of our installation packages.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">Electrical Work</h4>
                    <span className="font-semibold text-gray-900">$150-$500</span>
                  </div>
                  <p className="text-gray-700 text-sm">Even gas tankless units need a 120V outlet for the electronic controls. Electric tankless units may need dedicated 40-60 amp circuits. Panel upgrades, if needed, are a separate $1,200-$2,000 cost handled by a licensed electrician.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">NJ Permits and Inspections</h4>
                    <span className="font-semibold text-gray-900">$100-$300</span>
                  </div>
                  <p className="text-gray-700 text-sm">New Jersey requires plumbing permits for water heater installations. Tank-to-tankless conversions often need separate gas permits. Permit fees vary by municipality in Middlesex County -East Brunswick charges $76-$150, while Edison fees run $100-$200.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">Water Line Modifications</h4>
                    <span className="font-semibold text-gray-900">$100-$400</span>
                  </div>
                  <p className="text-gray-700 text-sm">Running new hot and cold water lines to the tankless unit location. If the new unit mounts in a different spot than the old tank, expect additional plumbing runs.</p>
                </div>
              </div>
            </section>

            {/* Mid-content CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Want an exact quote for your home?</p>
                <p className="text-gray-300 text-sm">Free estimates - no obligation. We&apos;ll assess your home and give you a fixed price.</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">
                  Call Niti
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">
                  Call Danny
                </a>
              </div>
            </div>

            {/* Factors That Affect Cost */}
            <section id="cost-factors" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Factors That Affect Tankless Water Heater Cost</h2>

              <p className="text-gray-700 mb-6">
                Why does the cost range so much ($2,800-$6,500)? Several factors determine where your project falls in that range. Understanding these helps you budget accurately and avoid surprises.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Fuel Type: Gas vs Electric</h3>
              <p className="text-gray-700 mb-6">
                This is the single biggest cost factor. Gas tankless water heaters cost 50-100% more than electric models when you include the unit, gas line work, and venting. However, gas units deliver 3-4x higher flow rates and handle New Jersey&apos;s cold inlet water far better, making them the preferred choice for whole-house applications.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Home Size and Hot Water Demand</h3>
              <p className="text-gray-700 mb-4">
                Larger homes need higher-capacity (more expensive) units. Here&apos;s a general sizing guide for New Jersey homes:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Home Size</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Bathrooms</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Recommended BTU (Gas)</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Estimated Unit Cost</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Small (1,000-1,500 sq ft)</td>
                      <td className="text-center py-3 px-4">1-2</td>
                      <td className="text-center py-3 px-4">120,000-150,000</td>
                      <td className="text-center py-3 px-4">$1,200-$1,800</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Medium (1,500-2,500 sq ft)</td>
                      <td className="text-center py-3 px-4">2-3</td>
                      <td className="text-center py-3 px-4">150,000-180,000</td>
                      <td className="text-center py-3 px-4">$1,800-$2,500</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Large (2,500-3,500 sq ft)</td>
                      <td className="text-center py-3 px-4">3-4</td>
                      <td className="text-center py-3 px-4">180,000-199,000</td>
                      <td className="text-center py-3 px-4">$2,200-$3,200</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Very Large (3,500+ sq ft)</td>
                      <td className="text-center py-3 px-4">4+</td>
                      <td className="text-center py-3 px-4">199,000+ or dual units</td>
                      <td className="text-center py-3 px-4">$3,000-$6,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Brand Selection</h3>
              <p className="text-gray-700 mb-6">
                Premium brands like Navien and Rinnai cost more than budget options but offer higher efficiency ratings, longer warranties, and better performance in cold climates. We cover specific brand pricing in the <a href="#brand-pricing" className="text-red-700 hover:text-red-800 underline">brand comparison section below</a>.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">4. Installation Complexity</h3>
              <p className="text-gray-700 mb-6">
                A simple swap (replacing an existing tankless unit) costs far less than a full tank-to-tankless conversion. The most expensive installations involve upgrading gas lines, running new venting through finished walls, relocating the unit, and modifying plumbing runs. Homes with the water heater in a tight closet or second-floor mechanical room add complexity and cost.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">5. Condensing vs Non-Condensing</h3>
              <p className="text-gray-700 mb-6">
                Condensing tankless water heaters cost $300-$800 more than non-condensing models but achieve 95-98% thermal efficiency vs 80-85%. Condensing units use PVC venting (cheaper to install) but require a condensate drain line. Over 15-20 years, the energy savings usually justify the premium. We recommend condensing models for most Middlesex County installations.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">6. Recirculation System</h3>
              <p className="text-gray-700 mb-6">
                If you want instant hot water (no waiting for hot water to reach distant fixtures), you&apos;ll need a recirculation pump. Some premium tankless units (like the Navien NPE-2 series) include a built-in recirculation pump. Otherwise, add $200-$500 for an external pump plus $200-$400 for installation. A dedicated return line adds another $500-$1,500 depending on your home&apos;s plumbing layout.
              </p>
            </section>

            {/* Tankless vs Tank Cost Comparison */}
            <section id="tankless-vs-tank-cost" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Cost Comparison: Tankless vs Tank Water Heater</h2>

              <p className="text-gray-700 mb-6">
                Many homeowners considering a tankless water heater want to know: is it really worth paying 2-3x more upfront? Here&apos;s the honest comparison of costs over time for a typical New Jersey household.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Tankless (Gas, 20-Year Cost)</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>Unit + installation</span>
                      <span className="font-semibold">$4,200</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Annual descaling ($150 x 20)</span>
                      <span className="font-semibold">$3,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Annual energy ($250 x 20)</span>
                      <span className="font-semibold">$5,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Repairs (estimated)</span>
                      <span className="font-semibold">$500</span>
                    </li>
                    <li className="flex justify-between border-t border-orange-200 pt-3 mt-3">
                      <span className="font-bold">20-Year Total</span>
                      <span className="font-bold text-orange-700">~$12,700</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Tank (Gas 50-gal, 20-Year Cost)</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>First unit + installation</span>
                      <span className="font-semibold">$1,800</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Second unit (year ~11)</span>
                      <span className="font-semibold">$2,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Annual maintenance ($50 x 20)</span>
                      <span className="font-semibold">$1,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Annual energy ($375 x 20)</span>
                      <span className="font-semibold">$7,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Repairs (estimated)</span>
                      <span className="font-semibold">$400</span>
                    </li>
                    <li className="flex justify-between border-t border-blue-200 pt-3 mt-3">
                      <span className="font-bold">20-Year Total</span>
                      <span className="font-bold text-blue-700">~$12,700</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">The Bottom Line</h4>
                <p className="text-gray-700">
                  Over 20 years, tankless and tank water heaters cost roughly the same to own (~$12,500-$13,000 for a typical NJ household). The difference is <strong>when</strong> you pay. Tankless costs more upfront but saves $100-$150 per year in energy and only requires one installation in 20 years. Tank costs less initially but requires two units over the same period. For households using 50+ gallons of hot water daily, tankless wins on lifetime cost by $1,000-$2,000.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/tankless-water-heater-installation.jpg"
                  alt="Professional tankless water heater installation in Middlesex County NJ"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 p-3 bg-gray-50">Professional tankless water heater installation by licensed Middlesex County plumbers ensures code compliance and optimal performance.</p>
              </div>
            </section>

            {/* Brand Pricing Section */}
            <section id="brand-pricing" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Popular Tankless Water Heater Brands and Prices</h2>

              <p className="text-gray-700 mb-6">
                Not all tankless water heaters are created equal. Here are the five brands we install most frequently in Middlesex County, with real pricing based on our 2026 supplier costs and what our customers actually pay.
              </p>

              <div className="space-y-6 mb-8">
                {/* Navien */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-gray-900 text-white px-6 py-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">Navien</h3>
                      <span className="text-sm bg-red-700 px-3 py-1 rounded-full">Our #1 Pick</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">Navien is the #1 selling tankless water heater brand in North America and our top recommendation for Middlesex County homes. Their condensing technology achieves up to 0.97 UEF (Uniform Energy Factor), and the NPE-2 series includes a built-in recirculation pump for instant hot water.</p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">NPE-180A2</p>
                        <p className="font-bold text-gray-900">$1,800-$2,200</p>
                        <p className="text-xs text-gray-500">150K BTU, 8.4 GPM</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">NPE-210A2</p>
                        <p className="font-bold text-gray-900">$2,000-$2,500</p>
                        <p className="text-xs text-gray-500">180K BTU, 10.1 GPM</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">NPE-240A2</p>
                        <p className="font-bold text-gray-900">$2,200-$2,800</p>
                        <p className="text-xs text-gray-500">199K BTU, 11.2 GPM</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600"><strong>Total installed:</strong> $3,800-$5,500 | <strong>Warranty:</strong> 15-year heat exchanger, 5-year parts | <strong>Efficiency:</strong> 0.96-0.97 UEF</p>
                  </div>
                </div>

                {/* Rinnai */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-gray-900 text-white px-6 py-4">
                    <h3 className="text-xl font-bold">Rinnai</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">Rinnai is the most recognized name in tankless water heaters, with decades of proven reliability. Their RSC (condensing) and RL (non-condensing) series cover a wide range of applications. Rinnai units are known for durable heat exchangers and excellent cold-climate performance.</p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">RL75iN (Non-condensing)</p>
                        <p className="font-bold text-gray-900">$1,500-$1,900</p>
                        <p className="text-xs text-gray-500">150K BTU, 7.5 GPM</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">RSC160iN (Condensing)</p>
                        <p className="font-bold text-gray-900">$2,000-$2,600</p>
                        <p className="text-xs text-gray-500">160K BTU, 9.0 GPM</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">RSC199iN (Condensing)</p>
                        <p className="font-bold text-gray-900">$2,400-$3,100</p>
                        <p className="text-xs text-gray-500">199K BTU, 11.0 GPM</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600"><strong>Total installed:</strong> $3,500-$5,800 | <strong>Warranty:</strong> 12-year heat exchanger, 5-year parts | <strong>Efficiency:</strong> 0.82-0.96 UEF</p>
                  </div>
                </div>

                {/* Noritz */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-gray-900 text-white px-6 py-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">Noritz</h3>
                      <span className="text-sm bg-green-700 px-3 py-1 rounded-full">Best Value</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">Noritz offers excellent performance at a lower price point than Navien or Rinnai. Their EZ series is designed specifically for easy tank-to-tankless conversions with bottom water connections that match standard tank plumbing layouts. Great choice for budget-conscious homeowners who still want quality.</p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">EZ111 (Condensing)</p>
                        <p className="font-bold text-gray-900">$1,600-$2,000</p>
                        <p className="text-xs text-gray-500">150K BTU, 8.4 GPM</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">EZTR75 (Non-condensing)</p>
                        <p className="font-bold text-gray-900">$1,200-$1,600</p>
                        <p className="text-xs text-gray-500">120K BTU, 6.6 GPM</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">CB199-DV (Condensing)</p>
                        <p className="font-bold text-gray-900">$2,100-$2,700</p>
                        <p className="text-xs text-gray-500">199K BTU, 11.1 GPM</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600"><strong>Total installed:</strong> $3,000-$5,200 | <strong>Warranty:</strong> 12-year heat exchanger, 5-year parts | <strong>Efficiency:</strong> 0.90-0.97 UEF</p>
                  </div>
                </div>

                {/* Rheem */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-gray-900 text-white px-6 py-4">
                    <h3 className="text-xl font-bold">Rheem</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">Rheem is a well-known name in water heating with both gas and electric tankless options. Their Performance and Performance Platinum series are widely available at home improvement stores and through plumbing suppliers. Rheem offers solid mid-range performance with competitive pricing.</p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">RTGH-95DVLN (Gas)</p>
                        <p className="font-bold text-gray-900">$1,600-$2,100</p>
                        <p className="text-xs text-gray-500">160K BTU, 9.5 GPM</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">RTGH-RH11DVLN (Gas)</p>
                        <p className="font-bold text-gray-900">$2,000-$2,600</p>
                        <p className="text-xs text-gray-500">199K BTU, 11.0 GPM</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">RTEX-27 (Electric)</p>
                        <p className="font-bold text-gray-900">$600-$800</p>
                        <p className="text-xs text-gray-500">27 kW, 3.0 GPM (NJ winter)</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600"><strong>Total installed:</strong> $3,200-$5,400 (gas) / $1,400-$2,500 (electric) | <strong>Warranty:</strong> 12-year heat exchanger, 5-year parts | <strong>Efficiency:</strong> 0.82-0.96 UEF</p>
                  </div>
                </div>

                {/* EcoSmart */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-gray-900 text-white px-6 py-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">EcoSmart</h3>
                      <span className="text-sm bg-blue-700 px-3 py-1 rounded-full">Budget Electric</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">EcoSmart specializes in electric tankless water heaters at the most affordable price points. Their self-modulating technology adjusts power based on demand. Best for point-of-use applications or small homes in our area. Not recommended for whole-house use in NJ due to limited flow rates in winter.</p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">ECO 11 (Point-of-use)</p>
                        <p className="font-bold text-gray-900">$200-$350</p>
                        <p className="text-xs text-gray-500">11 kW, 1.5 GPM (NJ winter)</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">ECO 27 (Whole-house)</p>
                        <p className="font-bold text-gray-900">$500-$700</p>
                        <p className="text-xs text-gray-500">27 kW, 3.0 GPM (NJ winter)</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-sm text-gray-600">ECO 36 (Whole-house)</p>
                        <p className="font-bold text-gray-900">$700-$1,000</p>
                        <p className="text-xs text-gray-500">36 kW, 4.0 GPM (NJ winter)</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600"><strong>Total installed:</strong> $400-$1,000 (point-of-use) / $1,300-$2,800 (whole-house) | <strong>Warranty:</strong> Lifetime heat exchanger, 5-year parts | <strong>Efficiency:</strong> 0.98-0.99 UEF</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Our Recommendation for Middlesex County Homes</h4>
                <p className="text-gray-700">
                  For most 2-4 bathroom homes in our area, we recommend the <strong>Navien NPE-240A2</strong> or <strong>Rinnai RSC199iN</strong>. Both are condensing gas units with 199,000 BTU capacity that handle New Jersey&apos;s cold winter water temperatures while delivering 9-11 GPM. The Navien includes a built-in recirculation pump, saving $300-$500 on a separate pump. For budget-conscious homeowners, the <strong>Noritz EZ111</strong> delivers excellent value at a lower price point.
                </p>
              </div>
            </section>

            {/* Service Card */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Related Service: Tankless Water Heater Installation</p>
                <p className="text-sm text-gray-600 mb-2">Professional tankless installation with permits, gas line work, and warranty. Serving all of Middlesex County.</p>
                <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            {/* NJ-Specific Considerations */}
            <section id="nj-considerations" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">NJ-Specific Cost Considerations</h2>

              <p className="text-gray-700 mb-6">
                Tankless water heater costs in New Jersey run 10-15% higher than the national average. Here are the NJ-specific factors that affect your price and why our installations cost what they do.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Cold Inlet Water Temperature</h3>
                  <p className="text-gray-700">Middlesex County groundwater drops to 40-42°F in January and February. To heat 40°F water to 120°F requires an 80°F temperature rise, which demands significantly more BTU capacity than warmer states. A unit rated for 11 GPM at a 35°F rise (Arizona conditions) may only deliver 5-6 GPM at an 80°F rise. This means NJ homeowners often need a larger, more expensive unit than the national average suggests. We always size units for worst-case winter performance.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Gas Line Requirements</h3>
                  <p className="text-gray-700">Most tankless water heaters require 3/4&quot; gas supply lines with adequate BTU delivery. About 60% of older Middlesex County homes have 1/2&quot; gas lines to the water heater location that need upgrading. PSE&G natural gas is available in most of our service area, but propane homes in more rural parts of Monroe Township may need tank upgrades. Gas line upgrades add $300-$800 to the project cost, and we handle all gas work with proper permits and leak testing.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">NJ Permit Requirements</h3>
                  <p className="text-gray-700">New Jersey requires plumbing permits for all water heater installations. For tank-to-tankless conversions, you typically need both a plumbing permit and a gas permit (for gas line modifications). Permit fees in Middlesex County range from $76 in East Brunswick to $200+ in Edison. As licensed master plumbers, we pull all permits and coordinate inspections so you don&apos;t have to deal with the building department.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">NJ Labor Rates</h3>
                  <p className="text-gray-700">Licensed plumber labor rates in central New Jersey ($85-$150/hr) are higher than the national average ($65-$120/hr). This reflects NJ&apos;s higher cost of living, stringent licensing requirements, and mandatory insurance costs. A typical tankless installation takes 4-8 hours of skilled labor, making labor 25-40% of the total project cost.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Available Rebates and Tax Credits</h3>
                  <p className="text-gray-700">NJ homeowners can offset tankless water heater costs through several programs. The federal Inflation Reduction Act offers tax credits up to $2,000 for qualifying ENERGY STAR water heaters. The NJ Clean Energy Program and PSE&G may offer additional rebates of $300-$500. Combined, these incentives can reduce your net cost by $500-$2,500 depending on the unit you choose. We provide documentation to help you claim all available credits.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Water Hardness</h3>
                  <p className="text-gray-700">Middlesex County water hardness averages 7-10 grains per gallon (moderately hard). Hard water causes mineral buildup in the tankless heat exchanger, reducing efficiency and potentially causing premature failure if not addressed. Annual descaling ($100-$200 professional service, or DIY for $30-$50 in supplies) is essential. Some homeowners also install a water softener ($500-$2,000) to protect their investment -this extends the unit&apos;s lifespan and reduces maintenance frequency.</p>
                </div>
              </div>
            </section>

            {/* ROI and Energy Savings */}
            <section id="roi-savings" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">ROI and Energy Savings Calculation</h2>

              <p className="text-gray-700 mb-6">
                How long does it take for a tankless water heater to pay for itself compared to a traditional tank? Here&apos;s a real-world calculation based on New Jersey energy rates and the costs we see in Middlesex County.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Tankless vs Tank: Annual Operating Cost Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Cost Category</th>
                        <th className="text-center py-3 px-2 font-semibold text-gray-900">Tankless (Gas)</th>
                        <th className="text-center py-3 px-2 font-semibold text-gray-900">Tank (50-gal Gas)</th>
                        <th className="text-center py-3 px-2 font-semibold text-gray-900">Annual Savings</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-2">Natural gas for water heating</td>
                        <td className="text-center py-3 px-2">$220-$280/yr</td>
                        <td className="text-center py-3 px-2">$340-$400/yr</td>
                        <td className="text-center py-3 px-2 text-green-700 font-semibold">$100-$140</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-2">Electricity (controls/ignition)</td>
                        <td className="text-center py-3 px-2">$10-$15/yr</td>
                        <td className="text-center py-3 px-2">$5-$10/yr</td>
                        <td className="text-center py-3 px-2 text-red-700">-$5</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-2">Annual maintenance</td>
                        <td className="text-center py-3 px-2">$100-$200/yr</td>
                        <td className="text-center py-3 px-2">$0-$50/yr</td>
                        <td className="text-center py-3 px-2 text-red-700">-$100 to -$150</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 font-bold">Total Annual Cost</td>
                        <td className="text-center py-3 px-2 font-bold">$330-$495</td>
                        <td className="text-center py-3 px-2 font-bold">$345-$460</td>
                        <td className="text-center py-3 px-2 font-bold text-green-700">~$0-$35/yr*</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  *Annual operating savings are modest. The real financial advantage of tankless comes from avoiding a second unit replacement over 20 years (saving $1,800-$2,500).
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Payback Period Calculation</h3>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  <strong>Extra upfront cost of tankless vs tank:</strong> $4,200 (tankless avg) - $1,800 (tank avg) = $2,400 premium
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Annual energy savings:</strong> $100-$140 per year
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Simple payback (energy only):</strong> 17-24 years
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Adjusted payback (including avoided tank replacement at year 11):</strong> 8-12 years
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>With federal tax credit ($2,000):</strong> 3-5 years payback
                </p>
                <p className="text-gray-700 font-semibold">
                  With available tax credits and rebates, most NJ homeowners recoup the extra cost of tankless within 3-8 years.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Added Home Value</h3>
              <p className="text-gray-700 mb-6">
                A tankless water heater adds an estimated $1,500-$3,000 to your home&apos;s resale value in New Jersey. Buyers view tankless systems favorably because of the energy savings, endless hot water, space savings, and long remaining lifespan. In competitive Middlesex County markets like East Brunswick and Edison, a tankless system is a selling point that helps your home stand out.
              </p>
            </section>

            {/* Mid-content CTA 2 */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Ready to go tankless?</p>
              <p className="text-red-100 text-sm mb-4">Schedule a free in-home assessment. We&apos;ll inspect your current setup, recommend the right unit, and give you a fixed-price quote.</p>
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
                <p className="font-bold text-gray-900 mb-1">Related Reading: Tankless vs Tank Water Heater Comparison</p>
                <p className="text-sm text-gray-600 mb-2">Not sure if tankless is right for you? Compare costs, efficiency, lifespan, and more in our detailed 2026 guide.</p>
                <Link href="/blog/tankless-vs-tank-water-heater" className="text-red-700 hover:text-red-800 font-medium text-sm">Read the Comparison</Link>
              </div>
            </div>

            {/* When Is Tankless Worth It */}
            <section id="worth-it" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When Is a Tankless Water Heater Worth the Cost (and When It&apos;s Not)</h2>

              <p className="text-gray-700 mb-6">
                After installing hundreds of both types across Middlesex County, we&apos;ll be honest: tankless isn&apos;t the right choice for everyone. Here&apos;s our no-nonsense guide to when it makes sense and when to save your money.
              </p>

              {/* Pros/Cons Comparison Boxes */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-green-600 text-white px-6 py-4">
                    <h3 className="text-xl font-bold">Tankless IS Worth It If...</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>You plan to stay in your home <strong>7+ years</strong> (enough time to recoup the investment)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Your family uses <strong>40+ gallons of hot water daily</strong> (4+ people, multiple bathrooms)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>You <strong>frequently run out of hot water</strong> with your current tank</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>You have <strong>adequate gas service</strong> (or are willing to upgrade)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>You want to <strong>free up space</strong> in a tight utility area</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>You&apos;re already doing a <strong>renovation with gas line access</strong> (reduces incremental cost)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>You can claim the <strong>federal tax credit</strong> (up to $2,000)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>You want to <strong>increase your home&apos;s resale value</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-red-600 text-white px-6 py-4">
                    <h3 className="text-xl font-bold">Tankless May NOT Be Worth It If...</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>Your <strong>budget is tight</strong> and you need the cheapest option now</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>You&apos;re <strong>selling within 3-5 years</strong> (won&apos;t recoup the premium)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>It&apos;s a <strong>1-2 person household</strong> with low hot water demand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>Your <strong>current tank is adequate</strong> and rarely runs out of hot water</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>Your home <strong>lacks gas service</strong> and panel upgrade would be costly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>You&apos;re in a <strong>rental property</strong> where tenants won&apos;t maintain it</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>Your water heater needs <strong>emergency replacement today</strong> (tank-to-tankless conversion takes planning)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Our Honest Take</h4>
                <p className="text-gray-700">
                  We install both tankless and tank water heaters, and we always recommend what&apos;s best for the homeowner&apos;s situation -not the most expensive option. About 65% of our water heater customers in Middlesex County choose tankless, primarily because they want unlimited hot water and plan to stay in their homes long term. The other 35% are better served by a high-efficiency tank water heater, and we tell them so.
                </p>
              </div>
            </section>

            {/* Middlesex County Section */}
            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Tankless Water Heater Costs in Middlesex County, NJ</h2>

              <p className="text-gray-700 mb-6">
                We&apos;ve been installing tankless water heaters across Middlesex County since 2010. Here&apos;s what homeowners in our specific service areas typically pay, along with local factors that affect pricing.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Town</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Avg Home Size</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Common Unit</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Typical Total Cost</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">East Brunswick</td>
                      <td className="text-center py-3 px-4">2,200 sq ft</td>
                      <td className="text-center py-3 px-4">Navien NPE-240A2</td>
                      <td className="text-center py-3 px-4 font-semibold">$4,200-$5,500</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Edison</td>
                      <td className="text-center py-3 px-4">1,800 sq ft</td>
                      <td className="text-center py-3 px-4">Navien NPE-210A2</td>
                      <td className="text-center py-3 px-4 font-semibold">$3,800-$5,000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Old Bridge</td>
                      <td className="text-center py-3 px-4">2,000 sq ft</td>
                      <td className="text-center py-3 px-4">Rinnai RSC199iN</td>
                      <td className="text-center py-3 px-4 font-semibold">$4,000-$5,200</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Sayreville</td>
                      <td className="text-center py-3 px-4">1,700 sq ft</td>
                      <td className="text-center py-3 px-4">Noritz EZ111</td>
                      <td className="text-center py-3 px-4 font-semibold">$3,200-$4,500</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Monroe Township</td>
                      <td className="text-center py-3 px-4">2,500 sq ft</td>
                      <td className="text-center py-3 px-4">Navien NPE-240A2</td>
                      <td className="text-center py-3 px-4 font-semibold">$4,500-$6,000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">South Brunswick</td>
                      <td className="text-center py-3 px-4">2,300 sq ft</td>
                      <td className="text-center py-3 px-4">Rinnai RSC199iN</td>
                      <td className="text-center py-3 px-4 font-semibold">$4,200-$5,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">North Brunswick</td>
                      <td className="text-center py-3 px-4">1,900 sq ft</td>
                      <td className="text-center py-3 px-4">Navien NPE-210A2</td>
                      <td className="text-center py-3 px-4 font-semibold">$3,800-$5,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-6">
                Prices vary within each town based on home age, existing gas infrastructure, and installation complexity. Older homes in Edison and Sayreville often need more extensive gas line work, while newer construction in Monroe Township and South Brunswick typically has adequate gas service already in place.
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Why Local Experience Matters</h3>
                <p className="text-gray-700">
                  We know the building departments, permit requirements, and typical home configurations across every town in Middlesex County. We know that many East Brunswick colonial homes have basement water heaters near the chimney (making venting easier) while split-levels in Old Bridge often need creative venting solutions. This local knowledge helps us give accurate quotes and avoid surprise costs on installation day.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Tankless Water Heater Costs</h2>

              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much does a tankless water heater cost installed in NJ?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">A tankless water heater costs $2,800-$6,500 fully installed in New Jersey. Gas units average $4,200 installed, while electric whole-house units average $2,100. These prices include the unit, labor, permits, and basic materials. Additional costs may apply for gas line upgrades ($300-$800), new venting ($200-$600), or electrical work ($150-$500).</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Is it worth replacing a tank water heater with tankless?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">For most NJ homeowners who plan to stay 7+ years and use 40+ gallons of hot water daily, yes. While the upfront cost is $2,000-$4,000 more than a replacement tank, you&apos;ll save $100-$150/year on energy, avoid buying a second tank in 10-12 years ($2,000), enjoy unlimited hot water, and add $1,500-$3,000 to your home value. With federal tax credits up to $2,000, the payback period can be as short as 3-5 years.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much does a gas tankless water heater cost vs electric?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Gas tankless units cost $1,500-$3,500 for the unit and $3,000-$6,500 fully installed. Electric tankless units cost $500-$1,500 for the unit and $1,300-$3,000 installed. Gas costs more upfront but delivers 2-4x the flow rate, making it the only practical choice for whole-house hot water in New Jersey&apos;s cold climate. Electric units work well for single-fixture point-of-use applications.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What is the average cost of a tankless water heater in New Jersey?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">The average cost of a tankless water heater in New Jersey is $4,200 fully installed for a gas condensing unit. This includes a mid-range unit like the Navien NPE-240A ($2,200), installation labor ($1,200-$1,500), venting and gas connections ($400-$600), and permits ($100-$200). NJ costs are 10-15% higher than the national average of $3,500 due to higher labor rates, cold climate sizing requirements, and permit costs.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much does it cost to convert from tank to tankless?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">A tank-to-tankless conversion costs $3,500-$7,000 in New Jersey. This is more expensive than installing tankless in new construction because it includes removing the old tank ($150-$300), upgrading gas lines from 1/2&quot; to 3/4&quot; ($300-$800), installing new stainless steel or PVC venting ($200-$600), rerouting water lines, adding electrical for the controls, and pulling permits. The average conversion in Middlesex County costs about $5,000.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much do Navien tankless water heaters cost?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Navien tankless water heater units cost $1,800-$2,800 depending on model. The popular NPE-240A2 (199K BTU, 11.2 GPM) costs about $2,200 for the unit and $4,200-$5,500 fully installed. The NPE-210A2 (180K BTU) costs $2,000-$2,500 and $3,800-$5,000 installed. Navien is our most-installed brand in Middlesex County due to their 0.97 UEF efficiency, built-in recirculation pump, and 15-year heat exchanger warranty.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Are there tax credits or rebates for tankless water heaters in NJ?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Yes. The federal Inflation Reduction Act offers tax credits up to $2,000 for qualifying ENERGY STAR tankless water heaters (must meet UEF requirements). The NJ Clean Energy Program and PSE&G may offer additional rebates of $300-$500 for high-efficiency units. Combined, these can reduce your net cost by $500-$2,500. We help customers identify qualifying models and provide the documentation needed to claim all available credits.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How long do tankless water heaters last?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Tankless water heaters last 20-25 years with proper maintenance, compared to 10-12 years for traditional tank water heaters. Annual descaling is critical in Middlesex County due to our moderately hard water (7-10 grains per gallon). Most major brands offer 12-15 year heat exchanger warranties. With regular maintenance, it&apos;s common for well-maintained units to last the full 25 years.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What are the hidden costs of a tankless water heater?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">The most common &quot;hidden&quot; costs include: gas line upgrades ($300-$800, needed in ~60% of conversions), electrical panel upgrades for electric units ($1,200-$2,000), annual descaling service ($100-$200/year), permit fees ($100-$300), and condensate drain installation for condensing units ($100-$300). A reputable plumber will identify all these costs during the estimate. We provide detailed written quotes that include every line item so there are no surprises.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Should I get a gas or electric tankless water heater in NJ?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">For whole-house hot water in New Jersey, gas is almost always the better choice. Our cold winter inlet water (40°F) requires significant heating power that electric units struggle to provide. A gas unit delivers 8-11 GPM at an 80°F rise, while an electric whole-house unit delivers only 2-4 GPM under the same conditions. Electric tankless units are a good option for point-of-use applications like a single bathroom or kitchen sink, where the lower flow rate isn&apos;t an issue.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Get an Exact Quote for Your Home</h2>
              <p className="text-red-100 mb-6">
                Every tankless water heater installation is different. The only way to get an accurate price for your specific home is a professional evaluation. We provide free in-home assessments where we&apos;ll inspect your current setup, check gas line capacity, measure your hot water needs, and give you a detailed written quote with no surprises and no pressure. Serving all of Middlesex County including East Brunswick, Edison, Old Bridge, Sayreville, Monroe Township, South Brunswick, and North Brunswick.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/services/tankless-water-heater-installation" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  Tankless Installation Services
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/tankless-vs-tank-water-heater" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Tankless vs Tank Water Heater</h3>
                    <p className="text-sm text-gray-600">Full comparison of tankless and tank water heaters for NJ homes.</p>
                  </div>
                </Link>
                <Link href="/blog/what-size-tankless-water-heater" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">What Size Tankless Water Heater Do I Need?</h3>
                    <p className="text-sm text-gray-600">Complete sizing guide for New Jersey homes.</p>
                  </div>
                </Link>
                <Link href="/blog/how-to-descale-tankless-water-heater" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Descale a Tankless Water Heater</h3>
                    <p className="text-sm text-gray-600">Essential maintenance guide to keep your tankless running efficiently.</p>
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
                  <p className="text-gray-600 text-sm mb-4">Get a free tankless water heater quote today.</p>
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
                    <li><Link href="/services/tankless-water-heater-installation" className="text-gray-700 hover:text-red-700 transition">Tankless Water Heater Installation</Link></li>
                    <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                    <li><Link href="/services/water-heater-replacement" className="text-gray-700 hover:text-red-700 transition">Water Heater Replacement</Link></li>
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
                    <li>
                      <Link href="/blog/tankless-vs-tank-water-heater" className="text-gray-700 hover:text-red-700 transition leading-snug block">Tankless vs Tank Water Heater: 2026 Comparison</Link>
                    </li>
                    <li>
                      <Link href="/blog/what-size-tankless-water-heater" className="text-gray-700 hover:text-red-700 transition leading-snug block">What Size Tankless Water Heater Do I Need?</Link>
                    </li>
                    <li>
                      <Link href="/blog/signs-water-heater-dying" className="text-gray-700 hover:text-red-700 transition leading-snug block">7 Signs Your Water Heater Is Dying</Link>
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
