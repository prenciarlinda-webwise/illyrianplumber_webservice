import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Descale a Tankless Water Heater: Complete Maintenance Guide",
  description: "Learn how to descale and maintain your tankless water heater. Step-by-step flushing guide, maintenance schedule, and when to call a pro. NJ plumber tips.",
  keywords: [
    "how to descale a tankless water heater",
    "tankless water heater maintenance",
    "flush tankless water heater",
    "tankless water heater descaling",
    "tankless water heater vinegar flush",
    "tankless water heater cleaning",
    "how often descale tankless water heater",
    "tankless water heater scale buildup",
    "tankless water heater annual maintenance",
    "tankless water heater service",
    "tankless water heater flush frequency",
    "descaling solution tankless water heater",
  ],
  openGraph: {
    title: "How to Descale a Tankless Water Heater: Complete Maintenance Guide",
    description: "Step-by-step guide to descaling and maintaining your tankless water heater for maximum lifespan.",
    type: "article",
    publishedTime: "2025-01-13T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function TanklessMaintenancePost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Descale a Tankless Water Heater: Complete Maintenance Guide",
    description: "Learn how to descale and maintain your tankless water heater for maximum performance and lifespan.",
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
    datePublished: "2025-01-13T08:00:00.000Z",
    dateModified: "2026-03-18T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/how-to-descale-tankless-water-heater",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should you descale a tankless water heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In areas with hard water like Middlesex County, NJ (7-10 grains per gallon), you should descale your tankless water heater annually. Homes with water softeners can often extend this to every 18-24 months. Some units display error codes when descaling is needed.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use vinegar to descale my tankless water heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, white vinegar is a safe and effective descaling agent for tankless water heaters. Use 2-3 gallons of undiluted white vinegar and circulate it through the unit for 45-60 minutes. Commercial descaling solutions work faster but cost more.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if you don't descale a tankless water heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Without regular descaling, mineral scale builds up in the heat exchanger, reducing efficiency, limiting flow rate, causing temperature fluctuations, and potentially triggering error codes. Severe buildup can permanently damage the heat exchanger, requiring expensive repairs or replacement.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to descale a tankless water heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The complete descaling process takes about 1-2 hours. This includes setup (15 minutes), circulating the descaling solution (45-60 minutes), flushing with clean water (15 minutes), and reconnecting everything (15 minutes). Professional service is typically faster.",
        },
      },
      {
        "@type": "Question",
        name: "Should I descale my tankless water heater myself or hire a professional?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DIY descaling is possible if you're comfortable with basic plumbing and follow manufacturer instructions. However, professional service ensures proper technique, includes a full system inspection, maintains warranty compliance, and catches potential issues early. Many homeowners prefer annual professional maintenance.",
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
              src="/images/water-heater-maintenance-parts.jpg"
              alt="Tankless water heater maintenance and descaling"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Maintenance</span>
                <time dateTime="2025-01-13">January 13, 2025</time>
                <span>14 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How to Descale a Tankless Water Heater: Complete Maintenance Guide
              </h1>
              <p className="text-xl text-gray-300">
                Keep your tankless water heater running at peak efficiency with proper maintenance. Learn when and how to descale, plus the full annual maintenance routine.
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
                Your tankless water heater is a significant investment -one that can last 20-25 years with proper care. But without regular maintenance, mineral scale buildup can reduce efficiency, limit hot water flow, and eventually damage the heat exchanger beyond repair.
              </p>
              <p>
                After servicing hundreds of tankless systems throughout Middlesex County, we&apos;ve seen what happens when maintenance is neglected -and how simple regular descaling can extend equipment life and maintain peak performance. This guide covers everything you need to know about tankless water heater maintenance.
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
              <ul className="space-y-2">
                <li><a href="#why-descale" className="text-red-700 hover:text-red-800">Why Descaling Is Essential</a></li>
                <li><a href="#when-to-descale" className="text-red-700 hover:text-red-800">When to Descale Your Tankless</a></li>
                <li><a href="#descaling-steps" className="text-red-700 hover:text-red-800">Step-by-Step Descaling Guide</a></li>
                <li><a href="#maintenance-checklist" className="text-red-700 hover:text-red-800">Complete Maintenance Checklist</a></li>
                <li><a href="#diy-vs-pro" className="text-red-700 hover:text-red-800">DIY vs Professional Service</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Middlesex County Considerations</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Why Descale Section */}
            <section id="why-descale" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Descaling Is Essential</h2>

              <p className="text-gray-700 mb-6">
                Every time water flows through your tankless water heater, dissolved minerals -primarily calcium and magnesium -are left behind. These minerals accumulate as &quot;scale&quot; inside the heat exchanger, creating an insulating layer that reduces heat transfer efficiency.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens Without Regular Descaling</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-gray-900">Reduced Efficiency</h4>
                  <p className="text-gray-700">Scale acts as insulation, forcing the unit to work harder to heat water. Efficiency can drop 10-25%, increasing energy costs.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-gray-900">Lower Flow Rates</h4>
                  <p className="text-gray-700">As scale narrows the passages in the heat exchanger, water flow becomes restricted. You may notice reduced hot water pressure over time.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-gray-900">Temperature Fluctuations</h4>
                  <p className="text-gray-700">Uneven scale buildup causes hot spots and inconsistent heating, resulting in temperature swings during use.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-gray-900">Error Codes & Shutdowns</h4>
                  <p className="text-gray-700">Many tankless units monitor heat exchanger performance and will display error codes or shut down when scale buildup affects operation.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-gray-900">Premature Failure</h4>
                  <p className="text-gray-700">Severe scale buildup can permanently damage the heat exchanger, requiring replacement that can cost $500-$1,500 or more.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/tankless-water-heater-installation.jpg"
                  alt="Tankless water heater requiring maintenance"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 p-3 bg-gray-50">Regular maintenance keeps your tankless water heater running efficiently for decades.</p>
              </div>
            </section>

            {/* When to Descale Section */}
            <section id="when-to-descale" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to Descale Your Tankless Water Heater</h2>

              <p className="text-gray-700 mb-6">
                The frequency of descaling depends primarily on your water hardness. Here&apos;s a general guide:
              </p>

              <div className="bg-gray-50 rounded-xl overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Water Hardness</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Grains Per Gallon</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Descaling Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Soft water</td>
                      <td className="py-3 px-4">0-3 GPG</td>
                      <td className="text-center py-3 px-4">Every 2-3 years</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Slightly hard</td>
                      <td className="py-3 px-4">3-7 GPG</td>
                      <td className="text-center py-3 px-4">Every 18-24 months</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-blue-50">
                      <td className="py-3 px-4 font-bold">Moderately hard (NJ typical)</td>
                      <td className="py-3 px-4 font-bold">7-10 GPG</td>
                      <td className="text-center py-3 px-4 font-bold">Annually</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Hard water</td>
                      <td className="py-3 px-4">10-15 GPG</td>
                      <td className="text-center py-3 px-4">Every 6-12 months</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Very hard water</td>
                      <td className="py-3 px-4">15+ GPG</td>
                      <td className="text-center py-3 px-4">Every 3-6 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Signs Your Tankless Needs Descaling Now</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Error codes on display (varies by brand)",
                  "Reduced hot water flow/pressure",
                  "Inconsistent water temperature",
                  "Unit cycling on and off frequently",
                  "Strange noises during operation",
                  "Increased energy bills",
                  "Hot water takes longer to arrive",
                  "Unit shuts down mid-use",
                ].map((sign, index) => (
                  <div key={index} className="flex items-center gap-3 bg-amber-50 rounded-lg p-4">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700">{sign}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Step-by-Step Descaling Section */}
            <section id="descaling-steps" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Step-by-Step Descaling Guide</h2>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-gray-900 mb-2">Safety First</h4>
                <p className="text-gray-700">
                  Before starting, consult your owner&apos;s manual for model-specific instructions. If you&apos;re not comfortable working with plumbing or gas appliances, we recommend professional service. Improper descaling can damage your unit or void the warranty.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">What You&apos;ll Need</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Equipment</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Submersible pump (1/6 HP minimum)</li>
                    <li>• Two 6-foot washing machine hoses</li>
                    <li>• 5-gallon bucket</li>
                    <li>• Adjustable wrenches or pliers</li>
                    <li>• Towels for cleanup</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Supplies</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• 2-3 gallons white vinegar, OR</li>
                    <li>• Commercial descaling solution (follow label)</li>
                    <li>• Replacement inlet filter (optional)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">The Descaling Process</h3>

              <div className="space-y-6 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex gap-4">
                    <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Turn Off Power and Water</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Turn off the gas supply valve (for gas units)</li>
                        <li>• Turn off electrical power at the breaker</li>
                        <li>• Close the cold water inlet valve</li>
                        <li>• Close the hot water outlet valve</li>
                        <li>• Wait 10 minutes for water to cool</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex gap-4">
                    <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Connect the Circulation System</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Open the service valve caps (usually require a flathead screwdriver)</li>
                        <li>• Connect one hose from the cold water service valve to the pump</li>
                        <li>• Connect the second hose from hot water service valve to the bucket</li>
                        <li>• Place pump in the bucket</li>
                        <li>• Add 2-3 gallons of white vinegar to the bucket</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex gap-4">
                    <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Open Service Valves and Start Pump</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Open both service valves</li>
                        <li>• Plug in and turn on the pump</li>
                        <li>• Verify vinegar is circulating (you should see it flowing into the bucket)</li>
                        <li>• Let circulate for 45-60 minutes</li>
                        <li>• Monitor the bucket -don&apos;t let the pump run dry</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex gap-4">
                    <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Flush with Clean Water</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Turn off and remove pump</li>
                        <li>• Empty the bucket and dispose of used vinegar properly</li>
                        <li>• Close the hot water service valve</li>
                        <li>• Open cold water inlet valve for 5-10 minutes to flush</li>
                        <li>• Direct flush water into bucket via service valve</li>
                        <li>• Continue until water runs clear with no vinegar smell</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex gap-4">
                    <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Reassemble and Test</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Close service valves and replace caps</li>
                        <li>• Remove hoses</li>
                        <li>• Open cold water inlet and hot water outlet valves</li>
                        <li>• Turn on gas (for gas units)</li>
                        <li>• Restore electrical power</li>
                        <li>• Run hot water at a faucet to verify proper operation</li>
                        <li>• Check for leaks at all connections</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Complete Maintenance Checklist */}
            <section id="maintenance-checklist" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Complete Annual Maintenance Checklist</h2>

              <p className="text-gray-700 mb-6">
                Descaling is just one part of comprehensive tankless maintenance. Here&apos;s the full annual service checklist our technicians follow:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Heat Exchanger Service</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Descale heat exchanger with vinegar or commercial solution
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Flush thoroughly with clean water
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Inspect heat exchanger for cracks or corrosion
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Filter Maintenance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Remove and clean inlet water filter
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Replace filter if damaged or heavily clogged
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Clean air intake filter (if equipped)
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Venting Inspection (Gas Units)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Check exhaust vent for obstructions
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Inspect vent connections for separation or damage
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verify proper vent termination outdoors
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Check combustion air intake
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">System Performance Check</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Test water flow rate and temperature
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Check for error codes in system memory
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verify ignition and flame pattern
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Inspect all plumbing connections for leaks
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* DIY vs Pro Section */}
            <section id="diy-vs-pro" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">DIY vs Professional Service</h2>

              <p className="text-gray-700 mb-6">
                Both approaches have their place. Here&apos;s how to decide which is right for you:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">DIY Descaling</h3>
                  <p className="text-green-600 font-semibold mb-3">Best when:</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• You&apos;re comfortable with basic plumbing</li>
                    <li>• Your unit is easily accessible</li>
                    <li>• No error codes are present</li>
                    <li>• You have the equipment already</li>
                  </ul>
                  <p className="text-sm text-gray-600"><strong>Cost:</strong> $30-$100 for equipment and supplies (reusable)</p>
                </div>

                <div className="border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Service</h3>
                  <p className="text-green-600 font-semibold mb-3">Best when:</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Unit is showing error codes</li>
                    <li>• You want a complete system inspection</li>
                    <li>• Warranty requires professional service</li>
                    <li>• You prefer hands-off maintenance</li>
                  </ul>
                  <p className="text-sm text-gray-600"><strong>Cost:</strong> $150-$250 including inspection and descaling</p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">The Professional Advantage</h4>
                <p className="text-gray-700">
                  Professional maintenance goes beyond just descaling. Our technicians inspect the entire system, check error code history, verify proper combustion, test gas connections, and catch potential problems before they become expensive repairs. Many manufacturers require professional annual service to maintain warranty coverage.
                </p>
              </div>
            </section>

            {/* Middlesex County Section */}
            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Middlesex County Considerations</h2>

              <p className="text-gray-700 mb-6">
                Our local water conditions directly impact how you should maintain your tankless water heater:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Local Water Hardness</h4>
                  <p className="text-gray-700">Middlesex County municipal water typically measures 7-10 grains per gallon -moderately hard water that requires annual descaling. Well water in our area can be significantly harder, potentially requiring more frequent service.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Water Softeners Help</h4>
                  <p className="text-gray-700">Many of our customers combine tankless water heaters with water softeners. Soft water dramatically reduces scale buildup, extending descaling intervals to 18-24 months while protecting the heat exchanger and other plumbing fixtures.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Seasonal Considerations</h4>
                  <p className="text-gray-700">Fall is ideal for annual tankless maintenance in New Jersey. Servicing before winter ensures peak efficiency when your hot water demand is highest and incoming water is coldest. Schedule service in September or October for best availability.</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How often should you descale a tankless water heater?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">In areas with hard water like Middlesex County, NJ (7-10 grains per gallon), you should descale your tankless water heater annually. Homes with water softeners can often extend this to every 18-24 months. Some units display error codes when descaling is needed.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Can I use vinegar to descale my tankless water heater?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Yes, white vinegar is a safe and effective descaling agent for tankless water heaters. Use 2-3 gallons of undiluted white vinegar and circulate it through the unit for 45-60 minutes. Commercial descaling solutions work faster but cost more. Never use harsh chemicals or CLR-type products unless specifically approved by your manufacturer.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What happens if you don&apos;t descale a tankless water heater?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Without regular descaling, mineral scale builds up in the heat exchanger, reducing efficiency, limiting flow rate, causing temperature fluctuations, and potentially triggering error codes. Severe buildup can permanently damage the heat exchanger, requiring expensive repairs ($500-$1,500+) or full unit replacement.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How long does it take to descale a tankless water heater?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">The complete descaling process takes about 1-2 hours. This includes setup (15 minutes), circulating the descaling solution (45-60 minutes), flushing with clean water (15 minutes), and reconnecting everything (15 minutes). Professional service is typically faster due to experience and specialized equipment.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Will descaling void my tankless water heater warranty?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Proper descaling using manufacturer-approved methods won&apos;t void your warranty -in fact, many warranties require annual maintenance. However, using harsh chemicals, improper procedures, or DIY repairs that cause damage can void coverage. Check your warranty terms and keep records of all maintenance performed.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Schedule Professional Maintenance</h2>
              <p className="text-red-100 mb-6">
                Our licensed technicians provide comprehensive tankless water heater maintenance throughout Middlesex County. Annual service includes descaling, full system inspection, filter cleaning, and performance verification -everything your unit needs to run efficiently for years to come.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/services/tankless-water-heater-installation" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  View Tankless Services
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
                    <p className="text-sm text-gray-600">Understanding your on-demand water heating system.</p>
                  </div>
                </Link>
                <Link href="/blog/signs-water-heater-dying" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">7 Signs Your Water Heater Is Dying</h3>
                    <p className="text-sm text-gray-600">Know when it&apos;s time to replace your water heater.</p>
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
