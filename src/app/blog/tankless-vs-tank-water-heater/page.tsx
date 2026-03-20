import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tankless vs Tank Water Heater: 2026 Cost & Performance Comparison",
  description: "Compare tankless vs tank water heaters. Learn costs, energy savings, pros and cons of gas vs electric tankless water heaters. Expert NJ plumber guide.",
  keywords: [
    "tankless water heater vs tank",
    "tankless vs tank water heater",
    "electric vs gas tankless water heater",
    "tank vs tankless water heater pros and cons",
    "tank vs tankless water heater",
    "water heater comparison",
    "tankless vs traditional water heater",
    "on demand water heater vs tank",
    "tankless water heater cost vs tank",
    "is tankless water heater worth it",
    "tankless water heater energy savings",
    "best water heater type for home",
    "water heater replacement options",
  ],
  openGraph: {
    title: "Tankless vs Tank Water Heater: 2026 Cost & Performance Comparison",
    description: "Compare tankless vs tank water heaters. Learn costs, energy savings, and which is best for your NJ home.",
    type: "article",
    publishedTime: "2025-01-08T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function TanklessVsTankPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tankless vs Tank Water Heater: 2026 Cost & Performance Comparison",
    description: "Compare tankless vs tank water heaters. Learn costs, energy savings, and which is best for your New Jersey home.",
    image: "https://www.illyrianplumber.com/images/water-heater-repair-service.jpg",
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
    datePublished: "2025-01-08T08:00:00.000Z",
    dateModified: "2026-03-18T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/tankless-vs-tank-water-heater",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the average cost of a tankless water heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The average cost of a tankless water heater ranges from $1,500-$3,500 for the unit itself. Professional installation in New Jersey typically adds $1,000-$2,500, bringing total costs to $2,500-$6,000. Gas models cost more than electric, but offer better performance for whole-house applications.",
        },
      },
      {
        "@type": "Question",
        name: "Is tankless water heater better than tank?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your needs. Tankless water heaters are better for energy efficiency (20-34% savings), longevity (20+ years vs 10-12), endless hot water, and space savings. Tank water heaters are better for lower upfront cost, simpler installation, and homes with lower hot water demand.",
        },
      },
      {
        "@type": "Question",
        name: "Is electric or gas tankless water heater better?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gas tankless water heaters are generally better for whole-house applications due to higher flow rates (8-11 GPM vs 2-5 GPM for electric). Electric tankless units work well for point-of-use applications like a single bathroom. In New Jersey's cold climate, gas units perform better in winter.",
        },
      },
      {
        "@type": "Question",
        name: "How much do tankless water heaters save per year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tankless water heaters save homeowners $75-$150 per year on energy bills, representing 20-34% savings compared to traditional tank water heaters. Higher-use households see greater savings. Over a 20-year lifespan, this translates to $1,500-$3,000 in total energy savings.",
        },
      },
      {
        "@type": "Question",
        name: "What size tankless water heater do I need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sizing depends on flow rate needs (GPM) and temperature rise. In New Jersey, where incoming water can be 40°F in winter, you'll need 8-11 GPM for whole-house use. A 2-3 bathroom home typically needs a 180,000-199,000 BTU gas unit or multiple electric point-of-use units.",
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
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Water Heaters</span>
                <time dateTime="2025-01-08">January 8, 2025</time>
                <span>18 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Tankless vs Tank Water Heater: Complete 2026 Cost & Performance Comparison
              </h1>
              <p className="text-xl text-gray-300">
                An in-depth comparison of tankless and traditional tank water heaters, including costs, energy savings, and which is right for your New Jersey home.
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
                Choosing between a tankless and tank water heater is one of the biggest decisions homeowners face when replacing their water heating system. With tankless units costing more upfront but promising long-term savings, and tank heaters offering simplicity at a lower initial cost, the &quot;right&quot; choice isn&apos;t always obvious.
              </p>
              <p>
                As licensed plumbers who have installed both types of systems across Middlesex County for over a decade, we&apos;ve helped hundreds of homeowners make this decision. In this comprehensive comparison, we&apos;ll break down the real costs, performance differences, and help you understand which system makes sense for your specific situation.
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
              <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
              <ul className="space-y-2">
                <li><a href="#cost-comparison" className="text-red-700 hover:text-red-800">Complete Cost Comparison</a></li>
                <li><a href="#performance" className="text-red-700 hover:text-red-800">Performance & Efficiency</a></li>
                <li><a href="#gas-vs-electric" className="text-red-700 hover:text-red-800">Gas vs Electric Tankless</a></li>
                <li><a href="#pros-cons" className="text-red-700 hover:text-red-800">Pros and Cons Summary</a></li>
                <li><a href="#best-choice" className="text-red-700 hover:text-red-800">Which Is Best For You?</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Middlesex County Considerations</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Quick Comparison Table */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Comparison: Tankless vs Tank</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Feature</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">Tankless</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">Tank</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2">Upfront Cost (with install)</td>
                      <td className="text-center py-3 px-2">$2,500-$6,000</td>
                      <td className="text-center py-3 px-2">$1,200-$2,500</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2">Lifespan</td>
                      <td className="text-center py-3 px-2">20-25 years</td>
                      <td className="text-center py-3 px-2">10-12 years</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2">Energy Efficiency</td>
                      <td className="text-center py-3 px-2">92-98%</td>
                      <td className="text-center py-3 px-2">60-80%</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2">Annual Energy Savings</td>
                      <td className="text-center py-3 px-2">$75-$150/year</td>
                      <td className="text-center py-3 px-2">Baseline</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2">Hot Water Supply</td>
                      <td className="text-center py-3 px-2">Unlimited</td>
                      <td className="text-center py-3 px-2">Limited by tank size</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2">Space Required</td>
                      <td className="text-center py-3 px-2">Wall-mounted, minimal</td>
                      <td className="text-center py-3 px-2">40-80 gallon tank</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2">Best For</td>
                      <td className="text-center py-3 px-2">High-demand homes</td>
                      <td className="text-center py-3 px-2">Budget-conscious</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cost Comparison Section */}
            <section id="cost-comparison" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Complete Cost Comparison</h2>

              <p className="text-gray-700 mb-6">
                The biggest concern for most homeowners is cost. Let&apos;s break down what you&apos;ll actually pay for each type of water heater in New Jersey, from purchase through ownership.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Upfront Costs: The Initial Investment</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Tankless Water Heater Costs</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>Unit cost (gas)</span>
                      <span className="font-semibold">$1,500-$3,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Unit cost (electric)</span>
                      <span className="font-semibold">$500-$1,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Professional installation</span>
                      <span className="font-semibold">$1,000-$2,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Gas line upgrade (if needed)</span>
                      <span className="font-semibold">$300-$800</span>
                    </li>
                    <li className="flex justify-between">
                      <span>New venting (if needed)</span>
                      <span className="font-semibold">$200-$500</span>
                    </li>
                    <li className="flex justify-between border-t border-orange-200 pt-3 mt-3">
                      <span className="font-bold">Total Range</span>
                      <span className="font-bold text-orange-700">$2,500-$6,000+</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Tank Water Heater Costs</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>Unit cost (40-50 gal gas)</span>
                      <span className="font-semibold">$600-$1,200</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Unit cost (40-50 gal electric)</span>
                      <span className="font-semibold">$400-$800</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Professional installation</span>
                      <span className="font-semibold">$400-$800</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Permits and disposal</span>
                      <span className="font-semibold">$100-$200</span>
                    </li>
                    <li className="flex justify-between opacity-50">
                      <span>Additional upgrades</span>
                      <span className="font-semibold">Usually none</span>
                    </li>
                    <li className="flex justify-between border-t border-blue-200 pt-3 mt-3">
                      <span className="font-bold">Total Range</span>
                      <span className="font-bold text-blue-700">$1,200-$2,500</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Long-Term Cost Analysis: 20-Year Ownership</h3>

              <p className="text-gray-700 mb-4">
                The real picture emerges when you look at total cost of ownership over time. Here&apos;s what each system costs over a 20-year period:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Tankless (20-year cost)</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>Initial installation: $4,000 (avg)</li>
                      <li>Annual maintenance: $150 x 20 = $3,000</li>
                      <li>Energy costs: $250/yr x 20 = $5,000</li>
                      <li>Repairs (est): $500</li>
                      <li className="font-bold border-t pt-2 mt-2">20-Year Total: ~$12,500</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Tank (20-year cost)</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>Initial installation: $1,800 (avg)</li>
                      <li>Second unit (year 10-12): $1,800</li>
                      <li>Annual maintenance: $50 x 20 = $1,000</li>
                      <li>Energy costs: $350/yr x 20 = $7,000</li>
                      <li>Repairs (est): $400</li>
                      <li className="font-bold border-t pt-2 mt-2">20-Year Total: ~$12,000</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Note: Energy costs based on average NJ utility rates. Actual costs vary based on usage, fuel prices, and local rates.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">The Bottom Line on Cost</h4>
                <p className="text-gray-700">
                  Over 20 years, tankless and tank water heaters often end up costing similar amounts. The key difference is when you pay: tankless requires higher upfront investment but lower operating costs, while tank heaters spread costs more evenly but require replacement after 10-12 years. For high-use households (more than 41 gallons daily), tankless typically wins on lifetime cost.
                </p>
              </div>
            </section>

            {/* Performance Section */}
            <section id="performance" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Performance & Efficiency Comparison</h2>

              <p className="text-gray-700 mb-6">
                Beyond cost, performance is what matters most day-to-day. Here&apos;s how tankless and tank water heaters stack up in real-world use.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Hot Water Delivery</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🔥</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Tankless: Unlimited Hot Water</h4>
                      <p className="text-gray-700">As long as you stay within flow rate limits (typically 8-11 GPM for gas units), tankless heaters provide endless hot water. Four back-to-back showers? No problem. Running the dishwasher while showering? Still hot.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🪣</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Tank: Limited by Capacity</h4>
                      <p className="text-gray-700">A 50-gallon tank provides about 35 gallons of usable hot water per draw. High-demand situations (morning rush, guests visiting) can deplete the tank, requiring 30-60 minutes recovery time.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/water-heater-maintenance-parts.jpg"
                  alt="Water heater installation and performance comparison"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 p-3 bg-gray-50">Professional water heater installation ensures optimal performance regardless of type.</p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Energy Efficiency</h3>

              <p className="text-gray-700 mb-4">
                Energy efficiency is where tankless water heaters shine brightest. Here&apos;s why:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Tankless Efficiency: 92-98%</h4>
                  <p className="text-gray-700 text-sm">Tankless units only heat water when needed, eliminating &quot;standby heat loss&quot; -the energy wasted keeping 40-80 gallons constantly hot. The Department of Energy estimates 20-34% energy savings for typical households.</p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Tank Efficiency: 60-80%</h4>
                  <p className="text-gray-700 text-sm">Traditional tanks constantly maintain water temperature, losing heat through the tank walls 24/7. Even with quality insulation, standby losses account for 20-40% of energy consumption.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Space Requirements</h3>

              <p className="text-gray-700 mb-4">
                Space can be a deciding factor, especially in New Jersey homes with limited utility areas:
              </p>

              <ul className="space-y-3 text-gray-700 mb-6">
                <li><strong>Tankless:</strong> Wall-mounted units measure roughly 28&quot; x 20&quot; x 10&quot; -about the size of a carry-on suitcase. They can be installed indoors or outdoors, freeing up valuable floor space.</li>
                <li><strong>Tank:</strong> A 50-gallon tank stands about 60&quot; tall and 24&quot; in diameter, requiring dedicated floor space plus clearance for maintenance access.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Lifespan & Durability</h3>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-5xl font-bold text-red-700 mb-2">20-25</p>
                    <p className="text-gray-700">Years (Tankless)</p>
                    <p className="text-sm text-gray-500 mt-2">With proper annual maintenance</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-gray-400 mb-2">10-12</p>
                    <p className="text-gray-700">Years (Tank)</p>
                    <p className="text-sm text-gray-500 mt-2">Before tank corrosion/failure</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Gas vs Electric Section */}
            {/* Mid-content CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Ready to make the switch?</p>
                <p className="text-gray-300 text-sm">Free in-home assessment for tankless installation in Middlesex County.</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
              </div>
            </div>

            <section id="gas-vs-electric" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Gas vs Electric Tankless Water Heaters</h2>

              <p className="text-gray-700 mb-6">
                If you&apos;ve decided to go tankless, your next choice is fuel type. Both gas and electric tankless units have their place, but they&apos;re suited for different applications.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Gas Tankless</h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">High flow rates (8-11 GPM)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Whole-house capable</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Lower operating cost in NJ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Better cold climate performance</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600"><strong>Considerations:</strong> Requires gas line (possibly upgrade), venting installation, higher upfront cost.</p>
                  <p className="mt-3 font-semibold text-gray-900">Best for: Whole-house hot water in Middlesex County homes</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Electric Tankless</h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Lower upfront cost</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">No venting required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">More compact design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Simpler installation</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600"><strong>Considerations:</strong> Lower flow rates (2-5 GPM), may need electrical panel upgrade, struggles with cold water input.</p>
                  <p className="mt-3 font-semibold text-gray-900">Best for: Point-of-use, single bathroom, supplementary hot water</p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Our New Jersey Recommendation</h4>
                <p className="text-gray-700">
                  For whole-house applications in Middlesex County, we strongly recommend gas tankless water heaters. Our winter water temperatures (as low as 40°F) require significant heating power that electric units struggle to provide. Gas units with 180,000-199,000 BTUs handle our climate&apos;s demands while maintaining comfortable flow rates. Electric tankless units work well for point-of-use applications like a basement bathroom or remote sink.
                </p>
              </div>
            </section>

            {/* Pros and Cons Summary */}
            <section id="pros-cons" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Complete Pros and Cons Summary</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Tankless */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-orange-600 text-white px-6 py-4">
                    <h3 className="text-xl font-bold">Tankless Water Heaters</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-green-700 mb-3">Pros</h4>
                    <ul className="space-y-2 text-gray-700 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Endless hot water supply</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>20-34% energy savings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>20-25 year lifespan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Compact, wall-mounted design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>No flood risk from tank failure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Increases home value</span>
                      </li>
                    </ul>
                    <h4 className="font-bold text-red-700 mb-3">Cons</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Higher upfront cost ($2,500-$6,000)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>May need gas line upgrade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Annual descaling required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Flow rate limits during peak demand</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tank */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-blue-600 text-white px-6 py-4">
                    <h3 className="text-xl font-bold">Tank Water Heaters</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-green-700 mb-3">Pros</h4>
                    <ul className="space-y-2 text-gray-700 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Lower upfront cost ($1,200-$2,500)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Simpler installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Lower maintenance needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Works during power outages (gas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Familiar technology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>No flow rate concerns</span>
                      </li>
                    </ul>
                    <h4 className="font-bold text-red-700 mb-3">Cons</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Limited hot water supply</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Shorter lifespan (10-12 years)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Higher energy costs (standby loss)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Large footprint required</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Choice Section */}
            {/* Mid-content CTA 2 */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Ready to make the switch?</p>
              <p className="text-red-100 text-sm mb-4">Free in-home assessment for tankless water heater installation. We evaluate your home&apos;s infrastructure and recommend the best system for your needs.</p>
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
                <p className="text-sm text-gray-600 mb-2">Professional tankless water heater installation with gas line upgrades, venting, and full system setup. We install Navien, Rinnai, Noritz, and other top brands.</p>
                <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            <section id="best-choice" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Which Is Best For You?</h2>

              <p className="text-gray-700 mb-6">
                After installing hundreds of both types of systems, here&apos;s our guidance on which to choose:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Tankless If...</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Your family frequently runs out of hot water</li>
                    <li>• You use more than 41 gallons of hot water daily</li>
                    <li>• You plan to stay in your home 7+ years</li>
                    <li>• You want to reduce energy consumption</li>
                    <li>• Space is limited in your utility area</li>
                    <li>• You&apos;re doing a major renovation anyway</li>
                    <li>• You have (or can install) adequate gas service</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Choose a Tank Heater If...</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Budget is your primary concern</li>
                    <li>• Your hot water needs are modest (1-2 people)</li>
                    <li>• Your current tank is failing and needs quick replacement</li>
                    <li>• You&apos;re planning to sell the home soon</li>
                    <li>• Your home lacks adequate gas or electrical service for tankless</li>
                    <li>• You rarely run out of hot water with your current tank</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Middlesex County Section */}
            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Middlesex County Considerations</h2>

              <p className="text-gray-700 mb-6">
                Choosing a water heater in New Jersey involves some unique considerations that homeowners in warmer climates don&apos;t face. Here&apos;s what we&apos;ve learned serving East Brunswick, Edison, Old Bridge, and surrounding communities:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Cold Water Temperature Impact</h4>
                  <p className="text-gray-700">Middlesex County groundwater ranges from 40°F in winter to 70°F in summer. This 30-degree variance significantly affects tankless performance. A unit rated for 10 GPM in Florida may only deliver 6-7 GPM in a New Jersey January. We always size units for worst-case winter conditions.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Water Hardness</h4>
                  <p className="text-gray-700">Our area has moderately hard water (7-10 grains per gallon). For tankless water heaters, this means annual descaling is essential to maintain efficiency and prevent heat exchanger damage. Tank water heaters are more forgiving of hard water but still benefit from occasional flushing.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Natural Gas Availability</h4>
                  <p className="text-gray-700">Most Middlesex County homes have PSE&G natural gas service, making gas water heaters practical. For tankless installation, many older homes need gas line upgrades from 1/2&quot; to 3/4&quot; to meet the higher BTU requirements -a factor to include in your budget.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Local Permit Requirements</h4>
                  <p className="text-gray-700">New Jersey requires permits for water heater installations. Tank-to-tankless conversions often require additional permits for gas line and electrical work. As licensed plumbers, we handle all permit applications and inspections with your local building department.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Energy Costs</h4>
                  <p className="text-gray-700">New Jersey has some of the highest electricity rates in the country, making gas more economical for water heating. However, gas prices fluctuate seasonally. When we calculate long-term costs for customers, we use actual PSE&G rate data for accurate projections.</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What is the average cost of a tankless water heater?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">The average cost of a tankless water heater ranges from $1,500-$3,500 for the unit itself. Professional installation in New Jersey typically adds $1,000-$2,500, bringing total costs to $2,500-$6,000. Gas models cost more than electric, but offer better performance for whole-house applications.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Is a tankless water heater better than a tank?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">It depends on your needs. Tankless water heaters are better for energy efficiency (20-34% savings), longevity (20+ years vs 10-12), endless hot water, and space savings. Tank water heaters are better for lower upfront cost, simpler installation, and homes with lower hot water demand.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Is electric or gas tankless water heater better?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Gas tankless water heaters are generally better for whole-house applications due to higher flow rates (8-11 GPM vs 2-5 GPM for electric). Electric tankless units work well for point-of-use applications like a single bathroom. In New Jersey&apos;s cold climate, gas units perform significantly better in winter months.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much do tankless water heaters save per year?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Tankless water heaters save homeowners $75-$150 per year on energy bills, representing 20-34% savings compared to traditional tank water heaters. Higher-use households see greater savings. Over a 20-year lifespan, this translates to $1,500-$3,000 in total energy savings.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What size tankless water heater do I need?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Sizing depends on flow rate needs (GPM) and temperature rise. In New Jersey, where incoming water can be 40°F in winter, you&apos;ll need 8-11 GPM for whole-house use. A 2-3 bathroom home typically needs a 180,000-199,000 BTU gas unit. We provide free sizing assessments for all customers.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Can I convert from tank to tankless myself?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">We strongly advise against DIY tankless installation. It requires gas line work (which must be done by a licensed professional in NJ), proper venting, electrical connections, and understanding of plumbing codes. Improper installation can cause gas leaks, carbon monoxide hazards, and void warranties. New Jersey requires permits and inspections for water heater installations.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
              <p className="text-red-100 mb-6">
                Still unsure which water heater is right for your home? Our licensed plumbers provide free in-home assessments. We&apos;ll evaluate your hot water needs, inspect your existing infrastructure, and give you an honest recommendation -no pressure sales.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/services/water-heater-replacement" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  View Our Water Heater Services
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
                    <p className="text-sm text-gray-600">Deep dive into on-demand water heating technology.</p>
                  </div>
                </Link>
                <Link href="/blog/what-size-tankless-water-heater" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">What Size Tankless Water Heater Do I Need?</h3>
                    <p className="text-sm text-gray-600">Complete sizing guide for New Jersey homes.</p>
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
                <p className="text-gray-600 text-sm mb-4">Free in-home assessment for tankless or tank water heater installation.</p>
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
                  <li><Link href="/blog/how-much-does-a-tankless-water-heater-cost" className="text-gray-700 hover:text-red-700 transition">How Much Does a Tankless Water Heater Cost?</Link></li>
                  <li><Link href="/blog/what-size-tankless-water-heater" className="text-gray-700 hover:text-red-700 transition">What Size Tankless Water Heater Do I Need?</Link></li>
                  <li><Link href="/blog/how-to-descale-tankless-water-heater" className="text-gray-700 hover:text-red-700 transition">How to Descale a Tankless Water Heater</Link></li>
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
