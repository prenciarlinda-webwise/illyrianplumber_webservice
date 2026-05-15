import { Metadata } from "next";

import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Is a Whole House Water Filter Worth It in NJ? (2026 Guide)",
  description: "Whole house water filter cost, payback math, NJ chlorine and PFAS angles, and softener vs filter comparison. 2026 buyer's guide for Middlesex County homeowners.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/whole-house-water-filter-worth-it" },
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
    title: "Is a Whole House Water Filter Worth It in NJ? (2026 Guide)",
    description: "Cost, payback, PFAS guidance, and softener vs filter comparison from licensed NJ master plumbers.",
    type: "article",
    publishedTime: "2025-01-27T08:00:00.000Z",
    modifiedTime: "2026-05-15T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function WaterFilterPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Is a Whole House Water Filter Worth It in NJ? (2026 Guide)",
    description: "Whole house water filter cost, payback math, PFAS guidance for NJ tap water, and softener vs filter comparison for Middlesex County homeowners.",
    image: "https://www.illyrianplumber.com/images/water-heater-repair-service.jpg",
    author: {
      "@type": "Person",
      name: "Illyrian Plumber Team",
      worksFor: { "@id": "https://www.illyrianplumber.com/#organization" },
    },
    publisher: { "@id": "https://www.illyrianplumber.com/#organization" },
    datePublished: "2025-01-27T08:00:00.000Z",
    dateModified: "2026-05-15T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/whole-house-water-filter-worth-it" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.illyrianplumber.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.illyrianplumber.com/blog" },
      { "@type": "ListItem", position: 3, name: "Is a Whole House Water Filter Worth It in NJ?", item: "https://www.illyrianplumber.com/blog/whole-house-water-filter-worth-it" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is a whole house water filter worth it in NJ?", acceptedAnswer: { "@type": "Answer", text: "For most NJ homeowners, yes. A multi-stage system removes the chlorine and chloramine that NJ utilities add to disinfect tap water, protects water heaters and washing machines from scale, eliminates bottled-water spending, and helps with skin and hair issues from hard water. A typical Middlesex County household saves $850 to $1,100 a year, so a $2,500 system pays back in roughly 2.5 to 3 years." } },
      { "@type": "Question", name: "How much does a whole house water filter cost in NJ?", acceptedAnswer: { "@type": "Answer", text: "Whole house water filter systems run $1,000 to $4,000+ installed in New Jersey. A basic carbon filter is $500 to $1,200 with installation, a multi-stage filter is $1,100 to $2,000, a water softener is $1,100 to $3,100, and a full filter-plus-softener system is $2,500 to $4,800. Annual upkeep (replacement cartridges or salt) runs $150 to $400." } },
      { "@type": "Question", name: "What is the difference between a water filter and a water softener?", acceptedAnswer: { "@type": "Answer", text: "A water filter removes contaminants like chlorine, sediment, VOCs, and chemicals using carbon or specialty media. A water softener removes calcium and magnesium hardness minerals using ion exchange and salt. They solve different problems. Most Middlesex County homes benefit from both because central NJ water is moderately hard (7 to 10 grains per gallon) and chlorinated, so filter for taste and softener for scale." } },
      { "@type": "Question", name: "How long do whole house water filters last in NJ?", acceptedAnswer: { "@type": "Answer", text: "The filter housing and tank typically last 10 to 15 years. Cartridges need regular replacement: sediment pre-filters every 3 to 6 months, carbon filters every 6 to 12 months, and water softener salt is refilled every 4 to 8 weeks depending on household water use. Skipping replacements causes channeling in the carbon bed and lets contaminants pass through untreated." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-white">
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Water Quality</span>
                <time dateTime="2026-05-15">Updated May 15, 2026</time>
                <span>14 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Is a whole house water filter worth it in NJ? (2026 guide)</h1>
              <p className="text-xl text-gray-300">Cost, payback math, NJ chlorine and PFAS guidance, and softener vs filter comparison from licensed master plumbers.</p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2025-01-27" updateDate="2026-05-15" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 max-w-3xl">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-5 mb-8">
              <p className="font-bold text-gray-900 mb-2">Quick answer</p>
              <p className="text-gray-800 leading-relaxed">
                For most NJ homeowners, yes. A multi-stage whole house water filter (sediment plus carbon, with a softener if your home has hard water) costs $1,000 to $4,000 installed and pays back in 2.5 to 5 years through bottled-water savings, longer appliance life, and reduced detergent and soap use. Add a reverse osmosis stage for drinking water if your area's source water has tested positive for PFAS.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                New Jersey tap water meets all EPA standards and is safe to drink, but safe and ideal are not the same thing. Many Middlesex County homeowners notice chlorine taste, scale buildup from hard water, or want the peace of mind a whole-house filter provides. A professional <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 underline">whole house water filtration installation in NJ</Link> treats every tap, shower, and appliance in the home, not just drinking water.
              </p>
              <p>
                A whole house water filter treats all the water entering your home, not just drinking water, but shower water, laundry water, and the water your appliances use. So is it worth the investment? Below is the full breakdown of system types, NJ-specific cost ranges, payback math, and which households benefit most.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">In this guide</h2>
              <ul className="space-y-2">
                <li><a href="#benefits" className="text-red-700 hover:text-red-800">Benefits of whole house filtration</a></li>
                <li><a href="#filter-types" className="text-red-700 hover:text-red-800">Types of water filtration systems</a></li>
                <li><a href="#costs" className="text-red-700 hover:text-red-800">Costs and ROI</a></li>
                <li><a href="#nj-water" className="text-red-700 hover:text-red-800">NJ water quality considerations</a></li>
                <li><a href="#who-needs" className="text-red-700 hover:text-red-800">Who benefits most</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently asked questions</a></li>
              </ul>
            </nav>

            <section id="benefits" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Benefits of whole house water filtration</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Better tasting water</h4>
                  <p className="text-gray-700">Remove chlorine, chloramine, and other chemicals that affect taste and odor. Every tap provides crisp, clean drinking water.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Healthier skin and hair</h4>
                  <p className="text-gray-700">Chlorine and hard-water minerals dry out skin and hair. Filtered, softer water leaves skin moisturized and hair softer.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Protected appliances</h4>
                  <p className="text-gray-700">Sediment and minerals reduce appliance efficiency and lifespan. Filtered water extends the life of water heaters, dishwashers, and washing machines.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Cleaner plumbing</h4>
                  <p className="text-gray-700">Reduce mineral buildup in pipes and fixtures. Less scale means better water pressure and fewer plumbing issues across the home.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">No more bottled water</h4>
                  <p className="text-gray-700">Eliminate the expense and waste of bottled water. A family spending $50 a month on bottled water saves $600 a year.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900">Better laundry</h4>
                  <p className="text-gray-700">Soft, filtered water cleans clothes better with less detergent. Colors stay brighter, whites stay whiter.</p>
                </div>
              </div>
            </section>

            <section id="filter-types" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Types of whole house water filtration</h2>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sediment filters</h3>
                  <p className="text-gray-700 mb-3">Remove sand, silt, rust, and debris. Usually the first stage in any filtration system. Look for cartridges <a href="https://www.nsf.org/consumer-resources/articles/water-filters" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800 underline">NSF/ANSI Standard 42 certified</a> for particulate reduction.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Protects other filters</span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">$20-50 replacement</span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Change every 3-6 months</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Carbon filters</h3>
                  <p className="text-gray-700 mb-3">Remove chlorine, chloramine, VOCs, and chemicals that affect taste and odor. The most common whole house filter type. NSF/ANSI Standard 53 certified carbon block filters also reduce lead and certain VOCs.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Improves taste</span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">$100-200 replacement</span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Change every 6-12 months</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Water softeners</h3>
                  <p className="text-gray-700 mb-3">Use ion exchange to remove calcium and magnesium hardness minerals. Recommended for hard water areas like central Middlesex County (7 to 10 grains per gallon).</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Eliminates scale</span>
                    <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Salt refills needed</span>
                    <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Lasts 15-20 years</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Reverse osmosis (RO)</h3>
                  <p className="text-gray-700 mb-3">Removes up to 99% of contaminants. Typically point-of-use (under sink) for drinking water, not whole house. Recommended addition where the public water supply has tested positive for PFAS.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Purest water</span>
                    <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Best for drinking</span>
                    <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Multiple filter stages</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Our recommendation</h4>
                <p className="text-gray-700">For most Middlesex County homes, we recommend a <strong>multi-stage system</strong>: sediment pre-filter plus carbon filter for the whole house, combined with a water softener if you have hard-water issues. Add an under-sink RO system for the purest drinking water.</p>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Costs and return on investment</h2>

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
                <h4 className="font-bold text-gray-900 mb-3">Payback calculation</h4>
                <p className="text-gray-700 mb-4">A typical family&apos;s savings:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bottled water savings: $600 / year</li>
                  <li>• Extended appliance life: $100 to $200 / year (averaged)</li>
                  <li>• Less detergent and soap needed: $50 to $100 / year</li>
                  <li>• Fewer plumbing repairs: $100 / year (averaged)</li>
                  <li className="font-bold pt-2 border-t">Estimated annual savings: $850 to $1,100</li>
                </ul>
                <p className="text-gray-700 mt-4">A $2,500 system pays for itself in roughly 2.5 to 3 years.</p>
              </div>
            </section>

            <section id="nj-water" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">New Jersey water quality considerations</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Chlorine and chloramine</h4>
                  <p className="text-gray-700">NJ water utilities use chlorine or chloramine to disinfect water. While safe to drink, these chemicals cause taste and odor issues and can dry skin. Carbon filtration removes them effectively.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Hard water</h4>
                  <p className="text-gray-700">Most addresses in <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 underline">East Brunswick</Link> and <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 underline">Edison</Link> see water that measures 7 to 10 grains per gallon, moderately hard. This causes scale buildup, soap scum, and appliance wear. A water softener addresses this specifically.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Well water vs. municipal</h4>
                  <p className="text-gray-700">Homes with well water (common in parts of <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 underline">South Brunswick</Link> and Monroe Township) have different concerns: iron, manganese, bacteria, or other contaminants. Water testing is essential to determine the right filtration approach.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">PFAS concerns</h4>
                  <p className="text-gray-700">Some NJ source waters have tested positive for PFAS (forever chemicals). The <a href="https://dep.nj.gov/dwq/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800 underline">NJ DEP Division of Water Quality</a> publishes utility-by-utility test results. Standard carbon filters provide some reduction; activated carbon block or reverse osmosis provides better removal.</p>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Who benefits most from whole house filtration?</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Highly recommended for</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Families with young children</li>
                    <li>✓ Those with skin sensitivities or eczema</li>
                    <li>✓ Homes with hard-water issues</li>
                    <li>✓ Heavy bottled water users</li>
                    <li>✓ Well water homes</li>
                    <li>✓ Anyone concerned about water quality</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">May be optional for</h3>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Is a whole house water filter worth it in NJ?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">For most NJ homeowners, yes. A multi-stage system removes the chlorine and chloramine that NJ utilities add to disinfect tap water, protects water heaters and washing machines from scale, eliminates bottled-water spending, and helps with skin and hair issues from hard water. A typical Middlesex County household saves $850 to $1,100 a year, so a $2,500 system pays back in roughly 2.5 to 3 years.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much does a whole house water filter cost in NJ?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Whole house water filter systems run $1,000 to $4,000+ installed in New Jersey. A basic carbon filter is $500 to $1,200 with installation, a multi-stage filter is $1,100 to $2,000, a water softener is $1,100 to $3,100, and a full filter-plus-softener system is $2,500 to $4,800. Annual upkeep (replacement cartridges or salt) runs $150 to $400.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What is the difference between a water filter and a water softener?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">A water filter removes contaminants like chlorine, sediment, VOCs, and chemicals using carbon or specialty media. A water softener removes calcium and magnesium hardness minerals using ion exchange and salt. They solve different problems. Most Middlesex County homes benefit from both because central NJ water is moderately hard (7 to 10 grains per gallon) and chlorinated, so filter for taste and softener for scale.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How long do whole house water filters last in NJ?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">The filter housing and tank typically last 10 to 15 years. Cartridges need regular replacement: sediment pre-filters every 3 to 6 months, carbon filters every 6 to 12 months, and water softener salt is refilled every 4 to 8 weeks depending on household water use. Skipping replacements causes channeling in the carbon bed and lets contaminants pass through untreated.</p></div>
                </details>
              </div>
            </section>

            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Ready to improve your water quality?</h2>
              <p className="text-red-100 mb-6">We offer free water quality consultations throughout Middlesex County. We test your water, discuss your concerns, and recommend the right solution for your home and budget.</p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                <Link href="/services/water-filtration-system" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Water filtration services</Link>
              </div>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
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
                  <p className="font-bold text-gray-900 mb-3">Service areas</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li><Link href="/service-areas/east-brunswick" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>East Brunswick</Link></li>
                    <li><Link href="/service-areas/edison" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Edison</Link></li>
                    <li><Link href="/service-areas/sayreville" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Sayreville</Link></li>
                    <li><Link href="/service-areas/old-bridge" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Old Bridge</Link></li>
                    <li><Link href="/service-areas/monroe-township" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Monroe Township</Link></li>
                    <li><Link href="/service-areas/south-brunswick" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>South Brunswick</Link></li>
                    <li><Link href="/service-areas/north-brunswick" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>North Brunswick</Link></li>
                  </ul>
                </div>

                {/* Services */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our Services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/tankless-water-heater-installation" className="text-gray-700 hover:text-red-700 transition">Tankless Water Heater Installation</Link></li>
                    <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
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
