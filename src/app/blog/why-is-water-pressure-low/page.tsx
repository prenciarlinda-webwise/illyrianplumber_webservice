import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Is My Water Pressure Low? 8 Causes and DIY Fixes",
  description: "Discover why your water pressure is low and how to fix it. Learn 8 common causes from clogged pipes to PRV issues. Expert NJ plumber troubleshooting guide.",
  keywords: [
    "why is my water pressure low",
    "low water pressure in house",
    "water pressure problems",
    "how to fix low water pressure",
    "sudden low water pressure",
    "low hot water pressure",
    "low water pressure causes",
    "no water pressure in house",
    "water pressure dropped suddenly",
    "how to increase water pressure",
    "water pressure low in shower",
    "low water pressure fixes",
    "residential water pressure problems",
    "water pressure regulator",
  ],
  openGraph: {
    title: "Why Is My Water Pressure Low? 8 Causes and DIY Fixes",
    description: "Troubleshoot low water pressure problems. Expert tips from NJ licensed plumbers.",
    type: "article",
    publishedTime: "2025-01-17T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function LowWaterPressurePost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Is My Water Pressure Low? 8 Causes and DIY Fixes",
    description: "Discover why your water pressure is low and how to fix it. Expert troubleshooting guide.",
    image: "https://www.illyrianplumber.com/images/emergency-plumbing-service.jpg",
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
    datePublished: "2025-01-17T08:00:00.000Z",
    dateModified: "2026-03-18T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/why-is-water-pressure-low",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is my water pressure suddenly low?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sudden low water pressure is often caused by a water main break, a leak in your home, a closed or partially closed shutoff valve, or municipal water supply issues. Check with neighbors -if they're affected too, it's likely a municipal issue. If only your home is affected, check for leaks or valve issues.",
        },
      },
      {
        "@type": "Question",
        name: "Why is only my hot water pressure low?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Low hot water pressure specifically indicates a problem with your water heater or hot water lines. Common causes include sediment buildup in the water heater, a partially closed hot water shutoff valve, or corroded/clogged hot water pipes. The water heater inlet filter may also be clogged.",
        },
      },
      {
        "@type": "Question",
        name: "What is normal water pressure for a house?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Normal residential water pressure is 40-60 PSI, with 50 PSI being ideal. Below 40 PSI, you'll notice weak flow. Above 80 PSI can damage pipes and fixtures. You can measure your pressure with a $10-15 pressure gauge from any hardware store.",
        },
      },
      {
        "@type": "Question",
        name: "How do I increase water pressure in my house?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "First, identify the cause. If your PRV (pressure reducing valve) is set too low, adjust it. Clean aerators and showerheads. Check for leaks. If you have galvanized pipes, consider repiping. For chronic low municipal pressure, a pressure booster pump can help -but address the root cause first.",
        },
      },
      {
        "@type": "Question",
        name: "Can a water leak cause low water pressure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely. A significant leak -especially in your main water line -diverts water away from your fixtures, reducing pressure throughout the house. Signs include unexplained high water bills, wet spots in the yard, or sounds of running water when no fixtures are on.",
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
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Plumbing Tips</span>
                <time dateTime="2025-01-17">January 17, 2025</time>
                <span>13 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Why Is My Water Pressure Low? 8 Causes and DIY Fixes
              </h1>
              <p className="text-xl text-gray-300">
                Weak showers and slow-filling fixtures are frustrating. Here&apos;s how to diagnose and fix common water pressure problems in your home.
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
                Few things are more annoying than stepping into a shower that barely trickles or waiting forever for a sink to fill. Low water pressure affects everything from your morning routine to how well your appliances work.
              </p>
              <p>
                The good news? Many water pressure problems have simple solutions you can handle yourself. In this guide, we&apos;ll walk through the eight most common causes of low water pressure and show you how to diagnose and fix them -or know when it&apos;s time to call a professional.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">The 8 Most Common Causes</h2>
              <ul className="space-y-2">
                <li><a href="#cause-1" className="text-red-700 hover:text-red-800">1. Clogged Aerators and Showerheads</a></li>
                <li><a href="#cause-2" className="text-red-700 hover:text-red-800">2. Partially Closed Shutoff Valves</a></li>
                <li><a href="#cause-3" className="text-red-700 hover:text-red-800">3. Pressure Reducing Valve Issues</a></li>
                <li><a href="#cause-4" className="text-red-700 hover:text-red-800">4. Water Leaks</a></li>
                <li><a href="#cause-5" className="text-red-700 hover:text-red-800">5. Corroded or Clogged Pipes</a></li>
                <li><a href="#cause-6" className="text-red-700 hover:text-red-800">6. Water Heater Problems</a></li>
                <li><a href="#cause-7" className="text-red-700 hover:text-red-800">7. Municipal Supply Issues</a></li>
                <li><a href="#cause-8" className="text-red-700 hover:text-red-800">8. Peak Usage Times</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Middlesex County Considerations</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Quick Diagnostic */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Diagnostic Questions</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">Q:</span>
                  <div>
                    <p className="font-semibold text-gray-900">Is the problem in one fixture or the whole house?</p>
                    <p className="text-gray-700 text-sm">One fixture = local problem (aerator, valve, supply line). Whole house = main line, PRV, or municipal issue.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">Q:</span>
                  <div>
                    <p className="font-semibold text-gray-900">Did the pressure drop suddenly or gradually?</p>
                    <p className="text-gray-700 text-sm">Sudden = leak, valve issue, or municipal problem. Gradual = pipe corrosion or mineral buildup.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">Q:</span>
                  <div>
                    <p className="font-semibold text-gray-900">Is it hot water only or both hot and cold?</p>
                    <p className="text-gray-700 text-sm">Hot only = water heater issue. Both = supply-side problem.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cause 1 */}
            <section id="cause-1" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">1</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Clogged Aerators and Showerheads</h2>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Easy DIY Fix</span>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Single Fixture</span>
              </div>

              <p className="text-gray-700 mb-6">
                The most common cause of low water pressure at a single faucet or showerhead is mineral buildup in the aerator or showerhead. Over time, calcium and other minerals deposit and restrict water flow.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">How to Fix It</h3>
                <ol className="space-y-2 text-gray-700">
                  <li><strong>1.</strong> Unscrew the aerator from the faucet (turn counterclockwise) or remove the showerhead</li>
                  <li><strong>2.</strong> Soak in white vinegar for 2-4 hours or overnight for heavy buildup</li>
                  <li><strong>3.</strong> Use an old toothbrush to scrub away loosened deposits</li>
                  <li><strong>4.</strong> Rinse thoroughly and reinstall</li>
                  <li><strong>5.</strong> Run water to flush any remaining debris</li>
                </ol>
              </div>

              <p className="text-gray-600 text-sm">
                <strong>Prevention tip:</strong> Clean aerators and showerheads every 6-12 months, especially in hard water areas like Middlesex County.
              </p>
            </section>

            {/* Cause 2 */}
            <section id="cause-2" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">2</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Partially Closed Shutoff Valves</h2>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Easy DIY Fix</span>
                <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Whole House or Single Fixture</span>
              </div>

              <p className="text-gray-700 mb-6">
                If someone recently worked on your plumbing, a shutoff valve may not have been fully reopened. Even a slightly closed valve can significantly reduce water pressure.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Valves to Check</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Main Water Shutoff</h4>
                  <p className="text-gray-700">Located where the main water line enters your home (often in the basement or utility room). Wheel-style valves should be turned fully counterclockwise. Lever-style should be parallel to the pipe.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Street-Side Shutoff (Curb Stop)</h4>
                  <p className="text-gray-700">Located near the street in a covered box. If your main valve is fully open but pressure is low, this could be partially closed. This usually requires a special key and may need the water company.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Individual Fixture Shutoffs</h4>
                  <p className="text-gray-700">Found under sinks and behind toilets. If only one fixture has low pressure, check its local shutoff valves.</p>
                </div>
              </div>
            </section>

            {/* Cause 3 */}
            <section id="cause-3" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">3</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Pressure Reducing Valve (PRV) Issues</h2>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">Moderate DIY / Call Pro</span>
                <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Whole House</span>
              </div>

              <p className="text-gray-700 mb-6">
                Most homes have a pressure reducing valve (PRV) where the main water line enters. This bell-shaped device reduces municipal pressure (often 80-100+ PSI) to a safe level for your plumbing (40-60 PSI). If the PRV fails or is set too low, you&apos;ll have low pressure throughout the house.
              </p>

              <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/whole-house-repiping-service.jpg"
                  alt="Plumbing system with pressure reducing valve"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 p-3 bg-gray-50">The PRV is typically located where the main water line enters your home.</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Testing & Adjusting Your PRV</h3>
                <ol className="space-y-2 text-gray-700">
                  <li><strong>1.</strong> Buy a water pressure gauge ($10-15 at hardware stores)</li>
                  <li><strong>2.</strong> Attach to an outdoor hose bib or laundry faucet</li>
                  <li><strong>3.</strong> Turn on fully -ideal reading is 40-60 PSI</li>
                  <li><strong>4.</strong> If low, locate the PRV (bell-shaped, on main line)</li>
                  <li><strong>5.</strong> Use a wrench to loosen the locknut</li>
                  <li><strong>6.</strong> Turn the adjustment screw clockwise to increase pressure</li>
                  <li><strong>7.</strong> Adjust in small increments, testing between adjustments</li>
                  <li><strong>8.</strong> Don&apos;t exceed 60-65 PSI to protect your plumbing</li>
                </ol>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">When to Replace the PRV</h4>
                <p className="text-gray-700">PRVs typically last 10-15 years. If adjusting doesn&apos;t help, or if you notice pressure fluctuations, the PRV may need replacement. This is a job for a licensed plumber -improper installation can cause pressure surges that damage fixtures and appliances.</p>
              </div>
            </section>

            {/* Dark CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Can&apos;t solve your pressure problem?</p>
                <p className="text-gray-300 text-sm">Free pressure diagnostic - we find the cause fast</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
              </div>
            </div>

            {/* Cause 4 */}
            <section id="cause-4" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">4</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Water Leaks</h2>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Call Professional</span>
                <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Whole House</span>
              </div>

              <p className="text-gray-700 mb-6">
                A leak anywhere in your plumbing system -especially in the main line -diverts water away from your fixtures, reducing pressure throughout the house.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Signs of a Hidden Leak</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Unexplained increase in water bills",
                  "Water meter runs when nothing is on",
                  "Wet spots in the yard",
                  "Sound of running water when quiet",
                  "Damp spots on walls or ceilings",
                  "Mold or mildew smell",
                  "Cracks in foundation",
                  "Warm spots on floor (hot water leak)",
                ].map((sign, index) => (
                  <div key={index} className="flex items-center gap-3 bg-red-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{sign}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Simple Leak Test</h4>
                <p className="text-gray-700 mb-3">Turn off all water-using fixtures and appliances. Check your water meter. Wait 2 hours without using any water. Check the meter again. If it has moved, you likely have a leak.</p>
                <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">
                  Learn About Our Leak Detection Services →
                </Link>
              </div>
            </section>

            {/* Cause 5 */}
            <section id="cause-5" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">5</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Corroded or Clogged Pipes</h2>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Call Professional</span>
                <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Whole House (Gradual)</span>
              </div>

              <p className="text-gray-700 mb-6">
                Older homes with galvanized steel pipes commonly experience low water pressure due to internal corrosion and mineral buildup. Over decades, the inside diameter of these pipes narrows significantly, restricting water flow.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Signs of Pipe Corrosion</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Gradually worsening water pressure over years</li>
                  <li>• Discolored water (brownish, especially when first turning on)</li>
                  <li>• Visible corrosion on exposed pipe sections</li>
                  <li>• Home built before 1970 with original plumbing</li>
                  <li>• Pinhole leaks developing in pipes</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">The Solution: Whole House Repiping</h4>
                <p className="text-gray-700 mb-3">
                  If galvanized pipe corrosion is causing your low pressure, the only permanent solution is replacing the pipes -typically with modern PEX or copper. While this is a significant investment, it solves the pressure problem permanently and eliminates the risk of pipe failure.
                </p>
                <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">
                  Learn About Whole House Repiping →
                </Link>
              </div>
            </section>

            {/* Cause 6 */}
            <section id="cause-6" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">6</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Water Heater Problems</h2>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">DIY or Call Pro</span>
                <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Hot Water Only</span>
              </div>

              <p className="text-gray-700 mb-6">
                If low pressure affects only your hot water (cold water is fine), the problem is with your water heater or hot water lines specifically.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Sediment Buildup</h4>
                  <p className="text-gray-700">Sediment accumulating at the bottom of the tank can restrict water flow. Annual flushing helps prevent this. For tankless units, the inlet filter may be clogged.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Partially Closed Hot Water Valve</h4>
                  <p className="text-gray-700">Check that the hot water outlet valve on the water heater is fully open. Also check any shutoff valves on the hot water lines.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Corroded Hot Water Pipes</h4>
                  <p className="text-gray-700">Hot water pipes corrode faster than cold water pipes. If only hot water pressure is affected in an older home, the hot water lines may need replacement.</p>
                </div>
              </div>
            </section>

            {/* Cause 7 */}
            <section id="cause-7" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">7</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Municipal Supply Issues</h2>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Contact Water Company</span>
                <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Neighborhood-Wide</span>
              </div>

              <p className="text-gray-700 mb-6">
                Sometimes the problem isn&apos;t in your home at all. Municipal water supply issues can cause low pressure throughout a neighborhood.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Municipal Causes of Low Pressure</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Water main breaks or leaks</li>
                  <li>• Fire hydrant use in the area</li>
                  <li>• Water main maintenance or flushing</li>
                  <li>• Pressure issues at the pumping station</li>
                  <li>• High demand during heat waves</li>
                  <li>• Your location relative to the water tower</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">What to Do</h4>
                <p className="text-gray-700">
                  Ask your neighbors if they&apos;re experiencing the same issue. If so, contact your water utility. In Middlesex County, most areas are served by Middlesex Water Company or NJ American Water. They can tell you if there are known issues and when pressure should return to normal.
                </p>
              </div>
            </section>

            {/* Cause 8 */}
            <section id="cause-8" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">8</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Peak Usage Times</h2>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Normal / Adjust Usage</span>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Temporary</span>
              </div>

              <p className="text-gray-700 mb-6">
                Water pressure naturally drops during high-demand times -both within your home and throughout your neighborhood.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">In Your Home</h4>
                  <p className="text-gray-700 text-sm">Running multiple fixtures simultaneously divides available flow. Shower while the dishwasher runs and someone flushes? Pressure drops.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Neighborhood-Wide</h4>
                  <p className="text-gray-700 text-sm">Pressure may dip during morning showers (6-8am) and evening cooking (5-7pm) when the whole neighborhood demands water.</p>
                </div>
              </div>

              <p className="text-gray-700">
                <strong>Solution:</strong> If peak-time pressure drops are severe, a pressure booster pump can help maintain consistent pressure. However, make sure peak usage is actually the cause before investing in equipment.
              </p>
            </section>

            {/* Red CTA */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Can&apos;t solve your pressure problem?</p>
              <p className="text-red-100 text-sm mb-4">Free pressure diagnostic - we find the cause fast</p>
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
                <p className="font-bold text-gray-900 mb-1">Related Service: Water Leak Detection</p>
                <p className="text-sm text-gray-600 mb-2">Professional leak detection and water pressure diagnostics. We pinpoint the exact cause and provide cost-effective solutions.</p>
                <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            {/* Middlesex County Section */}
            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Middlesex County Considerations</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Hard Water Buildup</h4>
                  <p className="text-gray-700">Middlesex County&apos;s moderately hard water (7-10 grains per gallon) accelerates mineral buildup in aerators, showerheads, and pipes. Regular cleaning and considering a water softener can help maintain good pressure.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Older Homes</h4>
                  <p className="text-gray-700">Many Middlesex County homes were built in the 1950s-1970s with galvanized steel pipes. If your home is 50+ years old with original plumbing, pipe corrosion is likely contributing to low pressure. Repiping may be the long-term solution.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Water Utility Contacts</h4>
                  <p className="text-gray-700">For municipal water supply issues, contact Middlesex Water Company (most of East Brunswick, Edison) or NJ American Water (some areas). They can verify if there are main breaks or scheduled maintenance affecting your area.</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why is my water pressure suddenly low?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Sudden low water pressure is often caused by a water main break, a leak in your home, a closed or partially closed shutoff valve, or municipal water supply issues. Check with neighbors -if they&apos;re affected too, it&apos;s likely a municipal issue. If only your home is affected, check for leaks or valve issues.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What is normal water pressure for a house?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Normal residential water pressure is 40-60 PSI, with 50 PSI being ideal. Below 40 PSI, you&apos;ll notice weak flow at fixtures. Above 80 PSI can damage pipes, fixtures, and appliances over time. You can measure your pressure with a $10-15 pressure gauge from any hardware store.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why is only my hot water pressure low?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Low hot water pressure specifically indicates a problem with your water heater or hot water lines. Common causes include sediment buildup in the water heater, a partially closed hot water shutoff valve, a clogged inlet filter (tankless units), or corroded hot water pipes.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How can I increase water pressure in my house?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">First, identify and fix the underlying cause. Clean aerators and showerheads. Check all shutoff valves are fully open. Adjust or replace your PRV if it&apos;s set too low. Fix any leaks. If you have old galvanized pipes, repiping is the permanent solution. For chronic low municipal pressure, a pressure booster pump is an option.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">When should I call a plumber for low water pressure?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Call a plumber if: you suspect a leak, cleaning aerators and checking valves didn&apos;t help, the problem affects the whole house, pressure has been declining gradually (suggesting pipe issues), you need PRV replacement, or you want a professional diagnosis. We can pinpoint the exact cause and recommend the most cost-effective solution.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Can&apos;t Solve Your Pressure Problem?</h2>
              <p className="text-red-100 mb-6">
                If DIY troubleshooting hasn&apos;t restored your water pressure, we can help. Our licensed plumbers will diagnose the exact cause and recommend the most effective, cost-efficient solution for your home.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/services/emergency-plumbing" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  Emergency Plumbing Services
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/signs-water-heater-dying" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs Your Water Heater Is Dying</h3>
                    <p className="text-sm text-gray-600">Know when it&apos;s time to replace your water heater.</p>
                  </div>
                </Link>
                <Link href="/services/whole-house-repiping" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Whole House Repiping</h3>
                    <p className="text-sm text-gray-600">Permanent solution for corroded pipe problems.</p>
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
                <p className="text-gray-600 text-sm mb-4">Free water pressure diagnostic in Middlesex County.</p>
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
                  <li><Link href="/blog/whole-house-water-filter-worth-it" className="text-gray-700 hover:text-red-700 transition leading-snug block">Is a Whole House Water Filter Worth It?</Link></li>
                  <li><Link href="/blog/signs-of-slab-leak-sewer-line" className="text-gray-700 hover:text-red-700 transition leading-snug block">Signs of a Slab Leak or Sewer Line Problem</Link></li>
                  <li><Link href="/blog/sump-pump-maintenance-guide" className="text-gray-700 hover:text-red-700 transition leading-snug block">Sump Pump Maintenance Guide</Link></li>
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
