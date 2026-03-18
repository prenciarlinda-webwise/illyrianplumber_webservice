import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Is a Whole House Water Filter Worth It in NJ? Complete Guide",
  description: "Discover if whole house water filtration is worth the investment. Compare filter types, costs, and benefits for New Jersey homeowners.",
  keywords: [
    "whole house water filter",
    "water filtration system",
    "water filter benefits",
    "water quality NJ",
    "home water filter",
    "water softener vs filter",
    "whole house water filtration system",
    "home water filtration",
    "water purification system",
    "PFAS water filter NJ",
    "whole house water filter cost",
    "is whole house water filter worth it",
    "hard water filter",
    "well water filtration system",
    "water filter installation NJ",
    "whole house water filter benefits",
  ],
  openGraph: {
    title: "Is a Whole House Water Filter Worth It?",
    description: "Complete guide to whole house water filtration for NJ homeowners.",
    type: "article",
    publishedTime: "2025-01-27T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function WaterFilterPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Is a Whole House Water Filter Worth It in NJ?",
    description: "Complete guide to whole house water filtration for New Jersey homeowners.",
    image: "https://www.illyrianplumber.com/images/water-heater-repair-service.jpg",
    author: { "@type": "Organization", name: BUSINESS_INFO.name, url: "https://www.illyrianplumber.com" },
    publisher: { "@type": "Organization", name: BUSINESS_INFO.name, logo: { "@type": "ImageObject", url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png" } },
    datePublished: "2025-01-27T08:00:00.000Z",
    dateModified: "2026-03-18T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/whole-house-water-filter-worth-it" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is a whole house water filter worth it?", acceptedAnswer: { "@type": "Answer", text: "For most NJ homeowners, yes. Benefits include better tasting water, protection for appliances, healthier skin and hair, and elimination of bottled water costs. The investment typically pays for itself in 3-5 years through appliance longevity and bottled water savings." } },
      { "@type": "Question", name: "How much does a whole house water filter cost?", acceptedAnswer: { "@type": "Answer", text: "Whole house water filter systems cost $1,000-$4,000+ including installation. Basic carbon filters are on the lower end, while comprehensive systems with water softening cost more. Annual filter replacement costs $100-$300 depending on the system." } },
      { "@type": "Question", name: "What is the difference between a water filter and water softener?", acceptedAnswer: { "@type": "Answer", text: "Water filters remove contaminants like chlorine, sediment, and chemicals. Water softeners specifically remove calcium and magnesium (hardness minerals) that cause scale. Many homes benefit from both: a filter for clean water and a softener for soft water." } },
      { "@type": "Question", name: "How long do whole house water filters last?", acceptedAnswer: { "@type": "Answer", text: "The filter system itself lasts 10-15+ years. However, filter cartridges need regular replacement: sediment pre-filters every 3-6 months, carbon filters every 6-12 months. Following the replacement schedule is essential for effectiveness." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-white">
        <header className="relative bg-gray-900 text-white py-16 md:py-24">
          <div className="absolute inset-0">
            <Image src="/images/licensed-plumber-east-brunswick-nj.jpg" alt="Is a whole house water filter worth it" fill className="object-cover opacity-40" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Water Quality</span>
                <time dateTime="2025-01-27">January 27, 2025</time>
                <span>14 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Is a Whole House Water Filter Worth It in NJ?</h1>
              <p className="text-xl text-gray-300">Clean water from every tap. Learn if whole house filtration makes sense for your home and budget.</p>
            </div>
          </div>
        </header>

        <div className="border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-3xl mx-auto flex items-center gap-4">
              <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">IG</div>
              <div>
                <p className="font-semibold text-gray-900">Written by Illyrian Plumber</p>
                <p className="text-sm text-gray-600">Licensed Master Plumbers serving Middlesex County, NJ since 2020</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                New Jersey tap water is safe to drink -it meets all EPA standards. But &quot;safe&quot; and &quot;ideal&quot; aren&apos;t the same thing. Many Middlesex County homeowners notice chlorine taste, hard water effects, or simply want the peace of mind that comes from additional filtration.
              </p>
              <p>
                A whole house water filter treats all the water entering your home -not just drinking water, but shower water, laundry water, and the water your appliances use. Is it worth the investment? Let&apos;s break it down.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/sewer-line-repair-replacement" className="text-red-700 hover:text-red-800">sewer line repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
              <ul className="space-y-2">
                <li><a href="#benefits" className="text-red-700 hover:text-red-800">Benefits of Whole House Filtration</a></li>
                <li><a href="#filter-types" className="text-red-700 hover:text-red-800">Types of Water Filtration Systems</a></li>
                <li><a href="#costs" className="text-red-700 hover:text-red-800">Costs and ROI</a></li>
                <li><a href="#nj-water" className="text-red-700 hover:text-red-800">NJ Water Quality Considerations</a></li>
                <li><a href="#who-needs" className="text-red-700 hover:text-red-800">Who Benefits Most</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            <section id="benefits" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Benefits of Whole House Water Filtration</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Better Tasting Water</h4>
                  <p className="text-gray-700">Remove chlorine, chloramine, and other chemicals that affect taste and odor. Every tap provides crisp, clean drinking water.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Healthier Skin and Hair</h4>
                  <p className="text-gray-700">Chlorine and hard water minerals dry out skin and hair. Filtered, softer water leaves skin moisturized and hair softer.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Protected Appliances</h4>
                  <p className="text-gray-700">Sediment and minerals reduce appliance efficiency and lifespan. Filtered water extends the life of water heaters, dishwashers, and washing machines.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Cleaner Plumbing</h4>
                  <p className="text-gray-700">Reduce mineral buildup in pipes and fixtures. Less scale means better water pressure and fewer plumbing issues.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">No More Bottled Water</h4>
                  <p className="text-gray-700">Eliminate the expense and waste of bottled water. A family spending $50/month on bottled water saves $600/year.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Better Laundry</h4>
                  <p className="text-gray-700">Soft, filtered water cleans clothes better with less detergent. Colors stay brighter, whites stay whiter.</p>
                </div>
              </div>
            </section>

            <section id="filter-types" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Types of Whole House Water Filtration</h2>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sediment Filters</h3>
                  <p className="text-gray-700 mb-3">Remove sand, silt, rust, and debris. Usually the first stage in any filtration system.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Protects other filters</span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">$20-50 replacement</span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Change every 3-6 months</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Carbon Filters</h3>
                  <p className="text-gray-700 mb-3">Remove chlorine, chloramine, VOCs, and chemicals that affect taste and odor. The most common whole house filter type.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Improves taste</span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">$100-200 replacement</span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Change every 6-12 months</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Water Softeners</h3>
                  <p className="text-gray-700 mb-3">Use ion exchange to remove calcium and magnesium (hardness minerals). Essential for hard water areas like Middlesex County.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Eliminates scale</span>
                    <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Salt refills needed</span>
                    <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Lasts 15-20 years</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Reverse Osmosis (RO)</h3>
                  <p className="text-gray-700 mb-3">Removes up to 99% of contaminants. Typically point-of-use (under sink) for drinking water, not whole house.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Purest water</span>
                    <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Best for drinking</span>
                    <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Multiple filter stages</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Our Recommendation</h4>
                <p className="text-gray-700">For most Middlesex County homes, we recommend a <strong>multi-stage system</strong>: sediment pre-filter + carbon filter for the whole house, combined with a water softener if you have hard water issues. Add an under-sink RO system for the purest drinking water.</p>
              </div>
            </section>

            {/* Mid-content CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Ready to improve your water quality?</p>
                <p className="text-gray-300 text-sm">Free water quality consultation.</p>
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

            <section id="costs" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Costs and Return on Investment</h2>

              <div className="bg-gray-50 rounded-xl overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold">System Type</th>
                      <th className="text-center py-3 px-4 font-semibold">Equipment</th>
                      <th className="text-center py-3 px-4 font-semibold">Installation</th>
                      <th className="text-center py-3 px-4 font-semibold">Annual Upkeep</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b">
                      <td className="py-3 px-4">Basic Carbon Filter</td>
                      <td className="text-center py-3 px-4">$300-800</td>
                      <td className="text-center py-3 px-4">$200-400</td>
                      <td className="text-center py-3 px-4">$100-200</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Multi-Stage Filter</td>
                      <td className="text-center py-3 px-4">$800-1,500</td>
                      <td className="text-center py-3 px-4">$300-500</td>
                      <td className="text-center py-3 px-4">$150-300</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Water Softener</td>
                      <td className="text-center py-3 px-4">$800-2,500</td>
                      <td className="text-center py-3 px-4">$300-600</td>
                      <td className="text-center py-3 px-4">$100-200 (salt)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Complete System (Filter + Softener)</td>
                      <td className="text-center py-3 px-4">$2,000-4,000</td>
                      <td className="text-center py-3 px-4">$500-800</td>
                      <td className="text-center py-3 px-4">$200-400</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Payback Calculation</h4>
                <p className="text-gray-700 mb-4">A typical family&apos;s savings:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bottled water savings: $600/year</li>
                  <li>• Extended appliance life: $100-200/year (averaged)</li>
                  <li>• Less detergent/soap needed: $50-100/year</li>
                  <li>• Fewer plumbing repairs: $100/year (averaged)</li>
                  <li className="font-bold pt-2 border-t">Estimated annual savings: $850-1,100</li>
                </ul>
                <p className="text-gray-700 mt-4">A $2,500 system pays for itself in roughly 2.5-3 years.</p>
              </div>
            </section>

            <section id="nj-water" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">New Jersey Water Quality Considerations</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Chlorine/Chloramine</h4>
                  <p className="text-gray-700">NJ water utilities use chlorine or chloramine to disinfect water. While safe, these chemicals cause taste/odor issues and can dry skin. Carbon filtration removes them effectively.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Hard Water</h4>
                  <p className="text-gray-700">Middlesex County water typically measures 7-10 grains per gallon -moderately hard. This causes scale buildup, soap scum, and appliance wear. A water softener addresses this specifically.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Well Water vs. Municipal</h4>
                  <p className="text-gray-700">Homes with well water have different concerns: iron, manganese, bacteria, or other contaminants. Water testing is essential to determine the right filtration approach for well water.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">PFAS Concerns</h4>
                  <p className="text-gray-700">Some NJ water sources have shown PFAS (forever chemicals). Standard carbon filters provide some reduction; activated carbon block or reverse osmosis provides better removal.</p>
                </div>
              </div>
            </section>

            {/* Mid-content CTA 2 */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Ready to improve your water quality?</p>
              <p className="text-red-100 text-sm mb-4">Free water quality consultation.</p>
              <div className="flex flex-wrap gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">
                  Call Niti: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">
                  Call Danny: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Service Card */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Related Service: Water Filtration System</p>
                <p className="text-sm text-gray-600 mb-2">Professional water filtration installation and water quality testing. Serving all of Middlesex County.</p>
                <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            <section id="who-needs" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Who Benefits Most from Whole House Filtration?</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Highly Recommended For:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Families with young children</li>
                    <li>✓ Those with skin sensitivities/eczema</li>
                    <li>✓ Homes with hard water issues</li>
                    <li>✓ Heavy bottled water users</li>
                    <li>✓ Well water homes</li>
                    <li>✓ Anyone concerned about water quality</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">May Be Optional For:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Renters (consider portable options)</li>
                    <li>• Very soft water areas</li>
                    <li>• Those satisfied with current water</li>
                    <li>• Limited budget (start with point-of-use)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Is a whole house water filter worth it?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">For most NJ homeowners, yes. Benefits include better tasting water from every tap, protection for appliances, healthier skin and hair, and eliminating bottled water costs. The investment typically pays for itself in 3-5 years.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much does installation cost?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Whole house water filter systems cost $1,000-$4,000+ including professional installation. Basic carbon filters are on the lower end, while comprehensive systems with water softening cost more. Annual maintenance runs $100-$400.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What&apos;s the difference between a filter and softener?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Water filters remove contaminants (chlorine, sediment, chemicals). Water softeners remove hardness minerals (calcium, magnesium) that cause scale. They serve different purposes -many homes benefit from both.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How often do filters need replacement?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Sediment pre-filters: every 3-6 months. Carbon filters: every 6-12 months. Water softeners don&apos;t have filters but need salt refills. Following the replacement schedule ensures continued effectiveness.</p></div>
                </details>
              </div>
            </section>

            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Improve Your Water Quality?</h2>
              <p className="text-red-100 mb-6">We offer free water quality consultations throughout Middlesex County. We&apos;ll test your water, discuss your concerns, and recommend the right solution for your home and budget.</p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                <Link href="/services/water-filtration-system" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Water Filtration Services</Link>
              </div>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/how-to-descale-tankless-water-heater" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Tankless Maintenance Guide</h3>
                    <p className="text-sm text-gray-600">Hard water affects tankless water heaters too.</p>
                  </div>
                </Link>
                <Link href="/blog/why-is-water-pressure-low" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Low Water Pressure Causes</h3>
                    <p className="text-sm text-gray-600">Scale buildup can restrict flow.</p>
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
                  <p className="text-gray-600 text-sm mb-4">Free water quality consultation.</p>
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
                    <li><Link href="/services/boiler-repair-service" className="text-gray-700 hover:text-red-700 transition">Boiler Repair</Link></li>
                    <li><Link href="/services/sewer-line-repair-replacement" className="text-gray-700 hover:text-red-700 transition">Sewer Line Repair</Link></li>
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
                      <Link href="/blog/best-whole-house-water-filtration-systems" className="text-gray-700 hover:text-red-700 transition leading-snug block">Best Whole House Water Filtration Systems</Link>
                    </li>
                    <li>
                      <Link href="/blog/how-to-descale-tankless-water-heater" className="text-gray-700 hover:text-red-700 transition leading-snug block">How to Descale a Tankless Water Heater</Link>
                    </li>
                    <li>
                      <Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition leading-snug block">Why Is My Water Pressure Low?</Link>
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
