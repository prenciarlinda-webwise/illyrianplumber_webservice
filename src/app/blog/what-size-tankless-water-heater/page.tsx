import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "What Size Tankless Water Heater Do I Need? Complete Sizing Guide",
  description: "Learn how to size a tankless water heater for your home. Calculate GPM requirements, BTU needs, and find the right tankless unit for NJ climate conditions.",
  keywords: [
    "what size tankless water heater do I need",
    "GPM tankless water heater",
    "tankless water heater sizing",
    "calculate tankless water heater size",
    "tankless water heater BTU",
    "tankless water heater for 3 bathroom house",
    "tankless water heater size calculator",
    "best tankless water heater size",
    "tankless water heater flow rate",
    "tankless water heater temperature rise",
    "whole house tankless water heater size",
    "tankless water heater sizing chart",
  ],
  openGraph: {
    title: "What Size Tankless Water Heater Do I Need? Complete Sizing Guide",
    description: "Calculate the right tankless water heater size for your home. Expert guide for New Jersey homeowners.",
    type: "article",
    publishedTime: "2025-01-10T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function TanklessSizingPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Size Tankless Water Heater Do I Need? Complete Sizing Guide",
    description: "Learn how to size a tankless water heater for your home. Calculate GPM requirements and BTU needs for New Jersey climate.",
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
    datePublished: "2025-01-10T08:00:00.000Z",
    dateModified: "2026-03-18T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/what-size-tankless-water-heater",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What size tankless water heater do I need for a 3 bathroom house?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 3-bathroom house in New Jersey typically needs a gas tankless water heater with 8-10 GPM capacity and 180,000-199,000 BTU output. This accounts for simultaneous use of 2-3 fixtures and our cold incoming water temperatures (40-50°F in winter).",
        },
      },
      {
        "@type": "Question",
        name: "How many GPM do I need for a tankless water heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most homes need 6-10 GPM. Calculate by adding the flow rates of fixtures you'll use simultaneously: shower (2.5 GPM), dishwasher (1.5 GPM), washing machine (2 GPM), faucet (1 GPM). For New Jersey's cold water, add 25-30% buffer to account for reduced flow rates in winter.",
        },
      },
      {
        "@type": "Question",
        name: "What is temperature rise for tankless water heaters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Temperature rise is the difference between incoming cold water and desired hot water temperature. In New Jersey, incoming water can be 40°F in winter, and you want 120°F output, requiring a 80°F temperature rise. Higher temperature rise requirements reduce the GPM a unit can deliver.",
        },
      },
      {
        "@type": "Question",
        name: "Can a tankless water heater be too big?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but it's rarely a problem. Oversized units cost more upfront but operate efficiently at any flow rate. The bigger concern is undersizing -a unit that's too small won't deliver enough hot water during peak demand. When in doubt, size up rather than down.",
        },
      },
      {
        "@type": "Question",
        name: "How many BTUs do I need for a tankless water heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For whole-house use in New Jersey, you need 150,000-199,000 BTUs for a gas tankless water heater. A 199,000 BTU unit delivers about 10 GPM at a 35°F rise, or 6-7 GPM at the 80°F rise typical of NJ winters. Electric units use kW ratings instead of BTUs.",
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
              alt="Tankless water heater sizing guide"
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
                <time dateTime="2025-01-10">January 10, 2025</time>
                <span>16 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                What Size Tankless Water Heater Do I Need? Complete Sizing Guide
              </h1>
              <p className="text-xl text-gray-300">
                Learn how to calculate the right tankless water heater size for your New Jersey home based on GPM needs, temperature rise, and peak demand.
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
                <p className="font-semibold text-gray-900">Written by {BUSINESS_INFO.name}</p>
                <p className="text-sm text-gray-600">Licensed Master Plumbers serving Middlesex County, NJ since 2020</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                Choosing the right size tankless water heater is the single most important decision you&apos;ll make during installation. Too small, and you&apos;ll run out of hot water during peak demand. Too large, and you&apos;ve overspent on a unit that exceeds your needs.
              </p>
              <p>
                As licensed plumbers who have sized and installed hundreds of tankless systems throughout Middlesex County, we&apos;ve refined a straightforward approach to getting this right. In this guide, we&apos;ll walk you through exactly how to calculate your needs -and why New Jersey homeowners face unique considerations that online sizing calculators often miss.
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
              <ul className="space-y-2">
                <li><a href="#sizing-basics" className="text-red-700 hover:text-red-800">Understanding Sizing Basics</a></li>
                <li><a href="#gpm-calculation" className="text-red-700 hover:text-red-800">How to Calculate Your GPM Needs</a></li>
                <li><a href="#temperature-rise" className="text-red-700 hover:text-red-800">Temperature Rise Explained</a></li>
                <li><a href="#sizing-chart" className="text-red-700 hover:text-red-800">Tankless Sizing Chart by Home Size</a></li>
                <li><a href="#gas-vs-electric" className="text-red-700 hover:text-red-800">Gas vs Electric Sizing</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Middlesex County Considerations</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Quick Answer Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Answer: What Size Do You Need?</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-2">1-2 Bathroom Home</p>
                  <p className="text-gray-700">6-8 GPM | 140,000-160,000 BTU</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-2">2-3 Bathroom Home</p>
                  <p className="text-gray-700">8-10 GPM | 160,000-199,000 BTU</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-2">3-4 Bathroom Home</p>
                  <p className="text-gray-700">10+ GPM | 199,000 BTU or dual units</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-2">Point-of-Use (single fixture)</p>
                  <p className="text-gray-700">2-4 GPM | Electric OK</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 italic">
                These recommendations are for New Jersey&apos;s cold climate conditions. Read on for how we arrive at these numbers.
              </p>
            </div>

            {/* Sizing Basics Section */}
            <section id="sizing-basics" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Understanding Tankless Sizing Basics</h2>

              <p className="text-gray-700 mb-6">
                Tankless water heater sizing comes down to two key factors: <strong>flow rate (GPM)</strong> and <strong>temperature rise</strong>. Understanding both is essential to choosing the right unit.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Flow Rate (GPM)</h3>
                  <p className="text-gray-700 mb-3">
                    GPM (gallons per minute) measures how much hot water a tankless unit can deliver. This is determined by how many fixtures you&apos;ll use simultaneously at peak demand times.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Example:</strong> Running a shower (2.5 GPM) + dishwasher (1.5 GPM) = 4 GPM minimum need
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Temperature Rise</h3>
                  <p className="text-gray-700 mb-3">
                    Temperature rise is the difference between incoming cold water temperature and your desired hot water temperature (usually 120°F).
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Example:</strong> 40°F incoming water → 120°F desired = 80°F temperature rise
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">The Critical Connection</h4>
                <p className="text-gray-700">
                  Here&apos;s what most people miss: <strong>GPM and temperature rise are inversely related</strong>. The higher the temperature rise required, the lower the GPM a unit can deliver. A unit rated for 10 GPM at a 35°F rise might only deliver 5-6 GPM at an 80°F rise -which is exactly what New Jersey winters demand.
                </p>
              </div>
            </section>

            {/* GPM Calculation Section */}
            <section id="gpm-calculation" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to Calculate Your GPM Needs</h2>

              <p className="text-gray-700 mb-6">
                To determine your GPM requirement, list the hot water fixtures you&apos;re likely to use simultaneously during peak demand (typically morning rush hour).
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Fixture Flow Rates</h3>

              <div className="bg-gray-50 rounded-xl overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Fixture</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Flow Rate (GPM)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Shower (standard)</td>
                      <td className="text-center py-3 px-4">2.0-2.5 GPM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Shower (rain/luxury)</td>
                      <td className="text-center py-3 px-4">3.0-4.0 GPM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Bathtub fill</td>
                      <td className="text-center py-3 px-4">4.0-6.0 GPM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Bathroom faucet</td>
                      <td className="text-center py-3 px-4">0.5-1.0 GPM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Kitchen faucet</td>
                      <td className="text-center py-3 px-4">1.0-1.5 GPM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Dishwasher</td>
                      <td className="text-center py-3 px-4">1.0-2.0 GPM</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Washing machine</td>
                      <td className="text-center py-3 px-4">1.5-3.0 GPM</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Step-by-Step Calculation</h3>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <p className="font-bold text-gray-900 mb-4">Example: 3-Bathroom Family Home in Edison, NJ</p>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>Peak demand scenario (morning rush):</strong></p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Master bathroom shower: 2.5 GPM</li>
                    <li>• Kids&apos; bathroom shower: 2.5 GPM</li>
                    <li>• Kitchen faucet (dishes): 1.5 GPM</li>
                    <li className="font-bold pt-2 border-t border-blue-200">Total simultaneous need: 6.5 GPM</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    <strong>Recommended:</strong> Size for 8-10 GPM to provide buffer for temperature rise reduction in winter.
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/water-heater-maintenance-parts.jpg"
                  alt="Tankless water heater sizing and installation"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 p-3 bg-gray-50">Proper sizing ensures your tankless water heater meets your family&apos;s hot water demands.</p>
              </div>
            </section>

            {/* Temperature Rise Section */}
            <section id="temperature-rise" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Temperature Rise: The Critical Factor</h2>

              <p className="text-gray-700 mb-6">
                Temperature rise is where New Jersey homeowners need to pay special attention. Unlike Florida or Texas where incoming water is 60-70°F year-round, our groundwater temperature varies dramatically:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-100 border border-blue-300 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-blue-800 mb-2">40-50°F</p>
                  <p className="text-gray-700">Winter water temperature</p>
                  <p className="text-sm text-gray-500 mt-2">December - March</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-orange-700 mb-2">65-75°F</p>
                  <p className="text-gray-700">Summer water temperature</p>
                  <p className="text-sm text-gray-500 mt-2">June - September</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Temperature Rise Calculation</h3>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="font-mono text-lg text-center text-gray-900 mb-4">
                  Temperature Rise = Desired Output - Incoming Water Temperature
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-gray-900 mb-1">Winter (worst case)</p>
                    <p className="text-gray-700">120°F - 40°F = <strong>80°F rise</strong></p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-gray-900 mb-1">Summer (best case)</p>
                    <p className="text-gray-700">120°F - 70°F = <strong>50°F rise</strong></p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">How Temperature Rise Affects GPM</h3>

              <p className="text-gray-700 mb-4">
                Here&apos;s a real example using a popular 199,000 BTU gas tankless unit:
              </p>

              <div className="bg-gray-50 rounded-xl overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Temperature Rise</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Available GPM</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Typical Scenario</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">35°F rise</td>
                      <td className="text-center py-3 px-4 font-bold text-green-600">10.5 GPM</td>
                      <td className="py-3 px-4">Florida summer</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">50°F rise</td>
                      <td className="text-center py-3 px-4">8.0 GPM</td>
                      <td className="py-3 px-4">NJ summer</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">70°F rise</td>
                      <td className="text-center py-3 px-4">6.5 GPM</td>
                      <td className="py-3 px-4">NJ spring/fall</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="py-3 px-4 font-bold">80°F rise</td>
                      <td className="text-center py-3 px-4 font-bold text-red-600">5.5 GPM</td>
                      <td className="py-3 px-4 font-bold">NJ winter (size for this!)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Key Takeaway for NJ Homeowners</h4>
                <p className="text-gray-700">
                  <strong>Always size your tankless water heater for winter conditions</strong>. That unit rated for 10+ GPM? In January, it might only deliver 5-6 GPM. Manufacturers&apos; GPM ratings are typically based on 35°F temperature rise -not the 80°F rise New Jersey winters demand.
                </p>
              </div>
            </section>

            {/* Sizing Chart Section */}
            <section id="sizing-chart" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Tankless Sizing Chart by Home Size</h2>

              <p className="text-gray-700 mb-6">
                Based on our experience installing tankless systems across Middlesex County, here are our sizing recommendations for New Jersey homes:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">1-2 Bathroom Home (Apartment, Condo, Small House)</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Recommended GPM</p>
                      <p className="text-2xl font-bold text-red-700">6-8 GPM</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Gas BTU Rating</p>
                      <p className="text-2xl font-bold text-gray-900">140,000-160,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Typical Brands/Models</p>
                      <p className="text-gray-700">Navien NPE-180A, Rinnai RU160</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">Supports 2 simultaneous showers in winter, or shower + dishwasher + faucet.</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">2-3 Bathroom Home (Most Common)</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Recommended GPM</p>
                      <p className="text-2xl font-bold text-red-700">8-10 GPM</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Gas BTU Rating</p>
                      <p className="text-2xl font-bold text-gray-900">160,000-199,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Typical Brands/Models</p>
                      <p className="text-gray-700">Navien NPE-240A, Rinnai RU199</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">Supports 2-3 simultaneous showers in winter, multiple fixtures during peak demand. This is the sweet spot for most Middlesex County families.</p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">3-4+ Bathroom Home (Large House)</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Recommended GPM</p>
                      <p className="text-2xl font-bold text-red-700">10+ GPM</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Gas BTU Rating</p>
                      <p className="text-2xl font-bold text-gray-900">199,000+ or dual units</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Configuration</p>
                      <p className="text-gray-700">Single 199K unit or parallel installation</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">For very large homes, consider installing two tankless units in parallel for maximum capacity and built-in redundancy.</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Point-of-Use (Single Fixture)</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Recommended GPM</p>
                      <p className="text-2xl font-bold text-red-700">2-4 GPM</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Type</p>
                      <p className="text-2xl font-bold text-gray-900">Electric OK</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Typical Brands/Models</p>
                      <p className="text-gray-700">Stiebel Eltron, EcoSmart</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">Ideal for basement bathrooms, remote sinks, or supplementing existing systems. Electric units work well for single-fixture applications.</p>
                </div>
              </div>
            </section>

            {/* Gas vs Electric Sizing */}
            <section id="gas-vs-electric" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Gas vs Electric Sizing Differences</h2>

              <p className="text-gray-700 mb-6">
                The sizing approach differs significantly between gas and electric tankless water heaters. Here&apos;s what you need to know:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Gas Tankless Sizing</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Units:</strong> BTU (British Thermal Units)</li>
                    <li><strong>Range:</strong> 120,000-199,000 BTU</li>
                    <li><strong>Performance:</strong> High GPM even in cold climates</li>
                    <li><strong>Best for:</strong> Whole-house applications</li>
                  </ul>
                  <div className="mt-4 bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">
                      <strong>Rule of thumb:</strong> 199,000 BTU = ~10 GPM @ 35°F rise, ~6 GPM @ 80°F rise
                    </p>
                  </div>
                </div>

                <div className="border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Electric Tankless Sizing</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Units:</strong> kW (kilowatts)</li>
                    <li><strong>Range:</strong> 8-36 kW</li>
                    <li><strong>Performance:</strong> Limited GPM, especially cold climates</li>
                    <li><strong>Best for:</strong> Point-of-use applications</li>
                  </ul>
                  <div className="mt-4 bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">
                      <strong>Rule of thumb:</strong> 27 kW = ~3 GPM @ 70°F rise (not ideal for NJ whole-house)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Our Recommendation for New Jersey</h4>
                <p className="text-gray-700">
                  For whole-house applications in Middlesex County, <strong>we strongly recommend gas tankless water heaters</strong>. The high temperature rise required in winter (80°F) dramatically reduces electric unit performance. A whole-house electric tankless rated for 4-5 GPM in moderate climates may only deliver 2-3 GPM in a New Jersey January -not enough for a comfortable shower.
                </p>
                <p className="text-gray-700 mt-2">
                  Electric tankless works well for point-of-use applications where you only need hot water at a single fixture.
                </p>
              </div>
            </section>

            {/* Middlesex County Section */}
            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Middlesex County Sizing Considerations</h2>

              <p className="text-gray-700 mb-6">
                After installing tankless systems throughout East Brunswick, Edison, Old Bridge, and surrounding areas, we&apos;ve identified specific local factors that affect sizing:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Groundwater Temperatures</h4>
                  <p className="text-gray-700">Middlesex County groundwater temperatures range from 40°F in January to 70°F in August. We always size units based on the 40°F worst-case scenario to ensure year-round performance. Many online sizing calculators use national averages that don&apos;t account for our cold winters.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Home Age & Infrastructure</h4>
                  <p className="text-gray-700">Many Middlesex County homes were built in the 1950s-1980s with 1/2&quot; gas lines sized for tank water heaters. Tankless units with 150,000+ BTUs typically require 3/4&quot; gas lines. We always inspect existing gas service during sizing assessments.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Water Pressure</h4>
                  <p className="text-gray-700">Municipal water pressure in our area typically runs 40-80 PSI. Higher pressure means better flow rates, but also more stress on plumbing. We recommend pressure-reducing valves for homes with pressure over 80 PSI.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Recirculation Systems</h4>
                  <p className="text-gray-700">Many larger Middlesex County homes benefit from hot water recirculation systems to minimize wait time at distant fixtures. These affect sizing calculations, as they create continuous low-level demand on the tankless unit.</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Free Sizing Assessment</h4>
                <p className="text-gray-700">
                  Not sure what size you need? We offer free in-home sizing assessments throughout Middlesex County. We&apos;ll evaluate your peak demand, measure your incoming water temperature, inspect your gas service, and recommend the right unit for your specific situation -no obligation.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What size tankless water heater do I need for a 3 bathroom house?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">A 3-bathroom house in New Jersey typically needs a gas tankless water heater with 8-10 GPM capacity and 180,000-199,000 BTU output. This accounts for simultaneous use of 2-3 fixtures and our cold incoming water temperatures (40-50°F in winter).</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How many GPM do I need for a tankless water heater?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Most homes need 6-10 GPM. Calculate by adding the flow rates of fixtures you&apos;ll use simultaneously: shower (2.5 GPM), dishwasher (1.5 GPM), washing machine (2 GPM), faucet (1 GPM). For New Jersey&apos;s cold water, add 25-30% buffer to account for reduced flow rates in winter.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What is temperature rise for tankless water heaters?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Temperature rise is the difference between incoming cold water and desired hot water temperature. In New Jersey, incoming water can be 40°F in winter, and you want 120°F output, requiring an 80°F temperature rise. Higher temperature rise requirements reduce the GPM a unit can deliver.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Can a tankless water heater be too big?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Yes, but it&apos;s rarely a problem. Oversized units cost more upfront but operate efficiently at any flow rate. The bigger concern is undersizing -a unit that&apos;s too small won&apos;t deliver enough hot water during peak demand. When in doubt, size up rather than down.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How many BTUs do I need for a tankless water heater?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">For whole-house use in New Jersey, you need 150,000-199,000 BTUs for a gas tankless water heater. A 199,000 BTU unit delivers about 10 GPM at a 35°F rise, or 6-7 GPM at the 80°F rise typical of NJ winters. Electric units use kW ratings instead of BTUs.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Should I get one large unit or two smaller tankless heaters?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">For most homes, one properly-sized unit (199,000 BTU) is sufficient. For larger homes (4+ bathrooms) or very high-demand situations, two units in parallel provide more capacity plus built-in redundancy -if one unit needs service, the other can still provide hot water. Dual units also qualify for larger gas lines in some jurisdictions.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Get Expert Sizing Help</h2>
              <p className="text-red-100 mb-6">
                Not sure what size tankless water heater you need? Our licensed plumbers provide free in-home sizing assessments throughout Middlesex County. We&apos;ll measure your actual conditions and recommend the right unit for your home.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/services/tankless-water-heater-installation" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  View Installation Services
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/how-tankless-water-heaters-work" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How Tankless Water Heaters Work</h3>
                    <p className="text-sm text-gray-600">Understanding on-demand water heating technology.</p>
                  </div>
                </Link>
                <Link href="/blog/tankless-vs-tank-water-heater" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Tankless vs Tank: Complete Comparison</h3>
                    <p className="text-sm text-gray-600">Which water heater type is right for you?</p>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
