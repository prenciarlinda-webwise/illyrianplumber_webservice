import { Metadata } from "next";

import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Trenchless Sewer Repair Guide: Methods, Costs & Comparison",
  description: "Complete guide to trenchless sewer repair: pipe lining (CIPP) vs pipe bursting vs traditional. Costs $80-$250/ft. Middlesex County NJ sewer experts.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/trenchless-sewer-repair-guide" },
  keywords: [
    "trenchless sewer line replacement",
    "trenchless sewer line repair",
    "trenchless sewer repair",
    "trenchless pipe repair",
    "sewer line replacement",
    "sewer line repair cost",
    "trenchless vs traditional sewer repair",
    "pipe lining vs pipe bursting",
    "sewer pipe replacement",
    "trenchless plumbing",
    "no dig sewer repair",
    "cured in place pipe lining",
    "sewer line replacement cost",
    "sewer repair near me",
    "sewer line camera inspection",
    "trenchless sewer repair NJ",
    "sewer line repair Middlesex County",
    "CIPP pipe lining",
  ],
  openGraph: {
    title: "Trenchless Sewer Repair Guide: Methods, Costs & Comparison",
    description: "Complete guide to trenchless sewer repair methods, costs, and when to choose trenchless vs traditional replacement in NJ.",
    type: "article",
    publishedTime: "2026-03-18T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function TrenchlessSewerRepairGuidePost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Trenchless Sewer Repair Guide: Methods, Costs & Comparison",
    description: "Complete guide to trenchless sewer repair including pipe lining (CIPP), pipe bursting, and traditional replacement. Compare costs, timelines, and methods for Middlesex County NJ homes.",
    image: "https://www.illyrianplumber.com/images/sewer-line-repair.jpg",
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
      "@id": "https://www.illyrianplumber.com/blog/trenchless-sewer-repair-guide",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does trenchless sewer repair cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trenchless sewer repair typically costs $80-$250 per linear foot, depending on the method. Pipe lining (CIPP) averages $80-$160 per foot, while pipe bursting ranges from $100-$250 per foot. For a typical 50-foot residential sewer line in Middlesex County, expect to pay $4,000-$12,500 total.",
        },
      },
      {
        "@type": "Question",
        name: "Is trenchless sewer repair worth the cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, trenchless sewer repair is worth it in most cases. While the per-foot cost is higher than traditional digging ($80-$250/ft vs $50-$200/ft), you avoid $2,000-$10,000+ in landscape restoration, driveway repair, and hardscape replacement. The total project cost is often comparable or lower, and the work is completed in 1-2 days instead of 3-7 days.",
        },
      },
      {
        "@type": "Question",
        name: "How long does trenchless sewer repair last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trenchless sewer repairs are extremely durable. CIPP (cured-in-place pipe) liners have an expected lifespan of 50+ years. Pipe bursting, which replaces the old pipe with new HDPE pipe, also lasts 50-100 years. Both methods create seamless, joint-free pipe sections that resist root intrusion and corrosion.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between pipe lining and pipe bursting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pipe lining (CIPP) inserts a resin-coated liner inside your existing pipe and cures it in place, creating a pipe-within-a-pipe. It works on pipes 2-12 inches in diameter and slightly reduces pipe diameter. Pipe bursting breaks the old pipe apart while simultaneously pulling new HDPE pipe through the same path. Pipe bursting can increase pipe diameter and is better for severely collapsed pipes.",
        },
      },
      {
        "@type": "Question",
        name: "Can trenchless repair fix a collapsed sewer line?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the severity. Pipe lining cannot fix a fully collapsed pipe because the liner needs an existing pipe structure to adhere to. However, pipe bursting can handle partially collapsed pipes since it fractures the old pipe outward. For a fully collapsed section, a short traditional excavation of the collapsed area may be combined with trenchless methods for the rest of the line.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a permit for sewer line repair in New Jersey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, New Jersey requires plumbing permits for sewer line repair and replacement. In Middlesex County, you will need a plumbing permit from your local building department. Some municipalities also require a street opening permit if the work connects to the municipal sewer main. As licensed plumbers, we handle all permit applications and coordinate inspections.",
        },
      },
      {
        "@type": "Question",
        name: "How long does trenchless sewer repair take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most trenchless sewer repairs are completed in 1-2 days. Pipe lining (CIPP) typically takes 1 day: a few hours for setup and insertion, plus 3-6 hours for curing. Pipe bursting usually takes 1-2 days depending on the length of the line. Traditional sewer replacement, by comparison, takes 3-7 days plus additional time for landscape restoration.",
        },
      },
      {
        "@type": "Question",
        name: "What is a sewer camera inspection and do I need one?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A sewer camera inspection uses a waterproof camera attached to a flexible cable that is fed into your sewer line. It provides real-time video of the pipe interior, identifying cracks, root intrusion, bellies (low spots), offsets, blockages, and pipe material. A camera inspection ($150-$400) is essential before any repair to determine the exact problem, location, and best repair method. We always recommend a camera inspection as the first step.",
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
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Sewer Lines</span>
                <time dateTime="2026-03-18">March 18, 2026</time>
                <span>22 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Trenchless Sewer Repair Guide: Methods, Costs & Complete Comparison
              </h1>
              <p className="text-xl text-gray-300">
                Everything you need to know about trenchless sewer line repair and replacement -including pipe lining, pipe bursting, costs per foot, and how to decide between trenchless and traditional methods for your Middlesex County home.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-03-18" updateDate="2026-03-25" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 mb-6">
                <p className="text-sm text-blue-900 font-medium mb-1">Informational Guide</p>
                <p className="text-sm text-blue-800">Please note: Illyrian Plumber does not currently offer sewer line cleaning, snaking, or sewer lining services. This article is provided as an educational resource to help homeowners understand their options. For sewer-related services, we recommend contacting a specialized sewer contractor in your area.</p>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                When your sewer line fails, the first thing most homeowners picture is a backhoe tearing up their entire yard. But <strong>trenchless sewer repair</strong> has changed the game -allowing plumbers to repair or replace underground sewer pipes with minimal digging, often in just one day. The question is: which method is right for your situation, and what will it actually cost?
              </p>
              <p className="text-gray-700">
                As licensed plumbers who perform sewer line repair and replacement throughout Middlesex County, we have seen firsthand how trenchless technology saves homeowners thousands of dollars in property restoration while delivering longer-lasting results. In this comprehensive guide, we will walk you through every trenchless method, compare costs and timelines, explain when traditional excavation is still necessary, and help you make an informed decision about your sewer line repair. If you suspect a sewer problem but aren&apos;t sure, our guide on <Link href="/blog/signs-of-slab-leak-sewer-line" className="text-red-700 hover:text-red-800 underline">signs of a slab leak or sewer line issue</Link> can help you identify the warning signs.
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
              <h2 className="text-lg font-bold text-gray-900 mb-4">Trenchless Sewer Repair: What This Guide Covers</h2>
              <ul className="space-y-2">
                <li><a href="#what-is-trenchless" className="text-red-700 hover:text-red-800">What Is Trenchless Sewer Repair?</a></li>
                <li><a href="#pipe-lining" className="text-red-700 hover:text-red-800">Pipe Lining (CIPP) -How It Works</a></li>
                <li><a href="#pipe-bursting" className="text-red-700 hover:text-red-800">Pipe Bursting -How It Works</a></li>
                <li><a href="#traditional-replacement" className="text-red-700 hover:text-red-800">Traditional Sewer Replacement</a></li>
                <li><a href="#comparison" className="text-red-700 hover:text-red-800">Trenchless vs Traditional Comparison</a></li>
                <li><a href="#cost-breakdown" className="text-red-700 hover:text-red-800">Complete Cost Breakdown</a></li>
                <li><a href="#pros-cons" className="text-red-700 hover:text-red-800">Pros and Cons of Each Method</a></li>
                <li><a href="#when-trenchless" className="text-red-700 hover:text-red-800">When Trenchless Is the Best Option</a></li>
                <li><a href="#when-traditional" className="text-red-700 hover:text-red-800">When Traditional Is Necessary</a></li>
                <li><a href="#camera-inspection" className="text-red-700 hover:text-red-800">Sewer Camera Inspection: The First Step</a></li>
                <li><a href="#timeline" className="text-red-700 hover:text-red-800">How Long Does Trenchless Repair Take?</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Middlesex County Sewer Considerations</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Quick Comparison Table */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Comparison: Trenchless vs Traditional Sewer Repair</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Feature</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">Pipe Lining (CIPP)</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">Pipe Bursting</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">Traditional Dig</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2 font-medium">Cost Per Foot</td>
                      <td className="text-center py-3 px-2">$80-$160</td>
                      <td className="text-center py-3 px-2">$100-$250</td>
                      <td className="text-center py-3 px-2">$50-$200</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2 font-medium">Total Cost (50 ft)</td>
                      <td className="text-center py-3 px-2">$4,000-$8,000</td>
                      <td className="text-center py-3 px-2">$5,000-$12,500</td>
                      <td className="text-center py-3 px-2">$2,500-$10,000</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2 font-medium">+ Landscape Repair</td>
                      <td className="text-center py-3 px-2">$0-$500</td>
                      <td className="text-center py-3 px-2">$0-$500</td>
                      <td className="text-center py-3 px-2">$2,000-$10,000+</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2 font-medium">Timeline</td>
                      <td className="text-center py-3 px-2">1 day</td>
                      <td className="text-center py-3 px-2">1-2 days</td>
                      <td className="text-center py-3 px-2">3-7 days</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2 font-medium">Digging Required</td>
                      <td className="text-center py-3 px-2">1-2 small access pits</td>
                      <td className="text-center py-3 px-2">2 small access pits</td>
                      <td className="text-center py-3 px-2">Full trench</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2 font-medium">Lifespan</td>
                      <td className="text-center py-3 px-2">50+ years</td>
                      <td className="text-center py-3 px-2">50-100 years</td>
                      <td className="text-center py-3 px-2">50-75 years (PVC)</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-2 font-medium">Pipe Diameter</td>
                      <td className="text-center py-3 px-2">Slightly reduced</td>
                      <td className="text-center py-3 px-2">Same or larger</td>
                      <td className="text-center py-3 px-2">Any size</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Best For</td>
                      <td className="text-center py-3 px-2">Cracked, corroded pipes</td>
                      <td className="text-center py-3 px-2">Collapsed, broken pipes</td>
                      <td className="text-center py-3 px-2">Full collapses, belly pipes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* What Is Trenchless Sewer Repair */}
            <section id="what-is-trenchless" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Is Trenchless Sewer Repair?</h2>

              <p className="text-gray-700 mb-4">
                <strong>Trenchless sewer repair</strong> is a category of methods used to fix or replace underground sewer pipes without digging a full trench along the entire pipe length. Instead of excavating your entire yard -which can destroy landscaping, driveways, sidewalks, and patios -trenchless techniques require only one or two small access points, typically 3-4 feet wide.
              </p>
              <p className="text-gray-700 mb-4">
                The technology has been used in municipal infrastructure projects since the 1970s and became widely available for residential sewer line repair in the early 2000s. Today, trenchless methods account for a growing share of all sewer repairs, driven by lower total costs, faster completion times, and minimal property disruption.
              </p>
              <p className="text-gray-700 mb-6">
                There are two primary trenchless sewer repair methods for residential applications:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Pipe Lining (CIPP)</h3>
                  <p className="text-gray-700 text-sm">Creates a new pipe inside the existing pipe using an epoxy-resin liner. Think of it as installing a sleeve inside your damaged sewer line.</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Pipe Bursting</h3>
                  <p className="text-gray-700 text-sm">Breaks apart the old pipe while simultaneously pulling brand-new HDPE pipe through the same underground path.</p>
                </div>
              </div>
              <p className="text-gray-700">
                Both methods eliminate the need for a full trench, saving your property from major excavation damage. However, they work differently, have different cost profiles, and are suited for different types of sewer damage. A <strong>sewer line camera inspection</strong> is always the first step to determine which method -or whether traditional replacement -is the right approach.
              </p>
            </section>

            {/* Pipe Lining (CIPP) */}
            <section id="pipe-lining" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Pipe Lining (CIPP): Cured-in-Place Pipe Lining</h2>

              <p className="text-gray-700 mb-4">
                <strong>Cured-in-place pipe lining</strong> (CIPP) is the most common trenchless sewer repair method for residential applications. It involves inserting a flexible, resin-saturated liner into the existing damaged pipe, inflating it against the pipe walls, and curing (hardening) it in place. The result is a smooth, seamless, jointless pipe-within-a-pipe that seals cracks, stops leaks, and prevents root intrusion.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">How CIPP Pipe Lining Works: Step by Step</h3>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4 items-start">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">1</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Camera Inspection & Cleaning</h4>
                    <p className="text-gray-700 text-sm">A sewer camera is sent through the pipe to map damage locations, identify pipe material, and measure the diameter (typically 4-6 inches for residential sewer lines). The pipe is then cleaned using hydro-jetting to remove roots, debris, and buildup.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">2</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Liner Preparation</h4>
                    <p className="text-gray-700 text-sm">A felt or fiberglass liner is custom-cut to the exact length and diameter of the pipe section being repaired. The liner is saturated with two-part epoxy resin in a controlled environment to ensure even coverage.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">3</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Liner Insertion</h4>
                    <p className="text-gray-700 text-sm">The resin-coated liner is pulled or inverted into the pipe through a single access point (an existing cleanout, a small excavation, or via a manhole). No trench is required -just one access point.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">4</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Inflation & Curing</h4>
                    <p className="text-gray-700 text-sm">The liner is inflated with air or water pressure, pressing it tightly against the interior pipe walls. It is then cured using ambient temperature (8-24 hours), hot water, steam, or UV light (3-6 hours). UV and steam-cured liners have shorter cure times and increasingly consistent results.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">5</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Reinstatement & Inspection</h4>
                    <p className="text-gray-700 text-sm">After curing, any lateral connections (branch lines) are reopened using a robotic cutter. A final camera inspection verifies the liner is properly installed and all connections are open.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">CIPP Pipe Lining Specifications</h3>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Pipe Diameters</p>
                    <p className="font-semibold text-gray-900">2&quot; to 12&quot;</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Max Length (single pull)</p>
                    <p className="font-semibold text-gray-900">Up to 300+ feet</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Liner Thickness</p>
                    <p className="font-semibold text-gray-900">3mm to 6mm</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Diameter Reduction</p>
                    <p className="font-semibold text-gray-900">~6mm (1/4&quot;)</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Expected Lifespan</p>
                    <p className="font-semibold text-gray-900">50+ years</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Cure Time</p>
                    <p className="font-semibold text-gray-900">3-24 hours</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">CIPP Pipe Lining Cost</h3>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Per linear foot</span>
                    <span className="font-semibold">$80-$160</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Short repair (10-20 ft)</span>
                    <span className="font-semibold">$3,000-$5,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Full sewer line (40-60 ft)</span>
                    <span className="font-semibold">$4,000-$8,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Long run (80-100+ ft)</span>
                    <span className="font-semibold">$7,000-$15,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Camera inspection (pre-repair)</span>
                    <span className="font-semibold">$150-$400</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Hydro-jetting (cleaning)</span>
                    <span className="font-semibold">$300-$600</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Costs based on 4-6 inch residential sewer lines in Middlesex County, NJ. Larger diameters, deeper pipes, and difficult access increase costs.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Best For</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Cracked or fractured pipes (not fully collapsed)</li>
                <li>Corroded cast iron or deteriorating clay pipes</li>
                <li>Pipes with joint separation allowing root intrusion</li>
                <li>Pipes under structures, driveways, or landscaping you want to preserve</li>
                <li>4-6 inch residential sewer lines (the standard for most Middlesex County homes)</li>
                <li>Partial repairs of specific damaged sections</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Limitations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Cannot be used on fully collapsed pipes -the liner needs an existing pipe structure</li>
                <li>Slightly reduces pipe diameter (by approximately 1/4 inch), though this rarely affects flow in 4&quot;+ pipes</li>
                <li>Not suitable for pipes with severe bellies (low spots where water pools)</li>
                <li>Pipe must be accessible for cleaning and camera inspection before lining</li>
              </ul>
            </section>

            {/* Pipe Bursting */}
            <section id="pipe-bursting" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Pipe Bursting: Trenchless Sewer Line Replacement</h2>

              <p className="text-gray-700 mb-4">
                <strong>Pipe bursting</strong> is a trenchless method that replaces the existing sewer pipe with a brand-new high-density polyethylene (HDPE) pipe. Unlike pipe lining, which rehabilitates the existing pipe, pipe bursting completely replaces it -making it a true <strong>trenchless sewer line replacement</strong> technique.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">How Pipe Bursting Works: Step by Step</h3>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4 items-start">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">1</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Camera Inspection & Access Excavation</h4>
                    <p className="text-gray-700 text-sm">A camera inspection maps the existing pipe layout, identifies damage, and locates connections. Two small access pits are excavated -one at each end of the pipe section being replaced. Each pit is typically 3-4 feet wide and 4-8 feet deep, depending on pipe depth.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">2</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Bursting Head Insertion</h4>
                    <p className="text-gray-700 text-sm">A cone-shaped steel bursting head (slightly larger than the old pipe) is fed into the entry pit. A cable or rod connects the bursting head to a hydraulic pulling machine positioned at the receiving pit.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">3</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Bursting & Replacement</h4>
                    <p className="text-gray-700 text-sm">The hydraulic machine pulls the bursting head through the old pipe. As it travels, the head fractures the old pipe outward into the surrounding soil. Attached directly behind the bursting head is the new HDPE pipe, which is pulled into position simultaneously.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">4</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Lateral Reconnection</h4>
                    <p className="text-gray-700 text-sm">Once the new pipe is in place, lateral connections (branch lines from the house or other fixtures) are reconnected. This may require small spot excavations at connection points.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">5</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Final Inspection & Backfill</h4>
                    <p className="text-gray-700 text-sm">A final camera inspection confirms the new pipe is properly positioned, all connections are secure, and the line has correct grade. Access pits are backfilled and restored.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Pipe Bursting Specifications</h3>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Pipe Diameters</p>
                    <p className="font-semibold text-gray-900">2&quot; to 24&quot;</p>
                  </div>
                  <div>
                    <p className="text-gray-500">New Pipe Material</p>
                    <p className="font-semibold text-gray-900">HDPE (High-Density Polyethylene)</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Can Upsize?</p>
                    <p className="font-semibold text-gray-900">Yes, up to 2 sizes</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Access Pits Required</p>
                    <p className="font-semibold text-gray-900">2 (entry + receiving)</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Expected Lifespan</p>
                    <p className="font-semibold text-gray-900">50-100 years</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Pulling Force</p>
                    <p className="font-semibold text-gray-900">20-60+ tons</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Pipe Bursting Cost</h3>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Per linear foot</span>
                    <span className="font-semibold">$100-$250</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Short replacement (20-30 ft)</span>
                    <span className="font-semibold">$4,000-$7,500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Full sewer line (40-60 ft)</span>
                    <span className="font-semibold">$5,000-$12,500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Long run (80-100+ ft)</span>
                    <span className="font-semibold">$10,000-$25,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pipe upsizing (e.g., 4&quot; to 6&quot;)</span>
                    <span className="font-semibold">+10-20% premium</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Lateral reconnections (each)</span>
                    <span className="font-semibold">$500-$1,500</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Costs vary based on depth, soil conditions, pipe material, number of connections, and access difficulty. Prices for Middlesex County, NJ area.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Best For</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Severely damaged, partially collapsed, or heavily corroded pipes</li>
                <li>Pipes where you want to increase diameter (e.g., upgrading 4&quot; to 6&quot; for better flow)</li>
                <li>Orangeburg (bituminous fiber) pipe that has deformed or collapsed</li>
                <li>Situations where a completely new pipe is preferred over relining</li>
                <li>Cast iron pipes that have deteriorated beyond what lining can address</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Limitations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Requires two access pits (more excavation than pipe lining)</li>
                <li>Higher cost than CIPP for the same pipe length</li>
                <li>Cannot be used near utilities that are close to the sewer line (risk of damaging adjacent pipes or cables)</li>
                <li>May not work on pipes with sharp bends (greater than 22.5 degrees)</li>
                <li>Surrounding soil conditions (rock, high water table) can complicate the process</li>
              </ul>
            </section>

            {/* Traditional Sewer Replacement */}
            <section id="traditional-replacement" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Traditional Sewer Replacement (Dig and Replace)</h2>

              <p className="text-gray-700 mb-4">
                Traditional sewer replacement -sometimes called open-cut or conventional excavation -involves digging a trench along the entire length of the sewer line, removing the old pipe, and installing a new pipe (usually PVC or cast iron). While it is the most invasive method, there are situations where it is the only practical option.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">How Traditional Replacement Works</h3>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1. Locate and mark utilities</strong> -NJ One-Call (811) marks gas, electric, and telecom lines before any digging begins.</li>
                  <li><strong>2. Excavate a trench</strong> -A backhoe or mini excavator digs a trench 2-4 feet wide and 4-10 feet deep along the full pipe path.</li>
                  <li><strong>3. Remove old pipe</strong> -The damaged pipe is removed in sections and disposed of.</li>
                  <li><strong>4. Install new pipe</strong> -New PVC (Schedule 40) pipe is laid on a gravel bed with proper grade (1/4&quot; per foot minimum slope for 4&quot; pipe, 1/8&quot; per foot for 6&quot;+ pipe).</li>
                  <li><strong>5. Reconnect laterals</strong> -Branch connections are reconnected to the new mainline.</li>
                  <li><strong>6. Inspection</strong> -A municipal plumbing inspector verifies the installation before the trench is backfilled.</li>
                  <li><strong>7. Backfill and compact</strong> -The trench is backfilled in layers and compacted to prevent settling.</li>
                  <li><strong>8. Restore surface</strong> -Landscaping, driveways, sidewalks, and patios are repaired or replaced.</li>
                </ol>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">When Traditional Replacement Is Required</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Fully collapsed pipe</strong> -No pipe structure remains for lining, and the collapse prevents a bursting head from passing through</li>
                <li><strong>Severe belly (sag) in the pipe</strong> -The pipe has settled into a low spot that traps water and waste; lining preserves the belly, and bursting follows the existing path</li>
                <li><strong>Multiple sharp bends or offsets</strong> -Trenchless equipment cannot navigate extreme angles</li>
                <li><strong>Shallow pipe requiring grade correction</strong> -When the entire pipe needs to be re-sloped</li>
                <li><strong>Pipe under a slab foundation</strong> -Where spot repairs or re-routing are more practical than trenchless methods under the structure</li>
                <li><strong>New pipe routing</strong> -When the sewer line path needs to change entirely</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Replacement Costs</h3>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Per linear foot (pipe only)</span>
                    <span className="font-semibold">$50-$200</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Full sewer line (40-60 ft)</span>
                    <span className="font-semibold">$2,500-$10,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Landscaping restoration</span>
                    <span className="font-semibold">$2,000-$5,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Driveway repair (concrete)</span>
                    <span className="font-semibold">$2,000-$5,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sidewalk repair</span>
                    <span className="font-semibold">$1,000-$3,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tree or shrub replacement</span>
                    <span className="font-semibold">$500-$3,000+</span>
                  </li>
                  <li className="flex justify-between border-t border-orange-200 pt-3 mt-3">
                    <span className="font-bold">Typical Total Project Cost</span>
                    <span className="font-bold text-orange-700">$5,000-$25,000+</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">
                  The hidden costs of traditional replacement -landscape and hardscape restoration -often bring the total project cost close to or above trenchless methods.
                </p>
              </div>
            </section>

            {/* Detailed Comparison */}
            <section id="comparison" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Trenchless vs Traditional Sewer Repair: Detailed Comparison</h2>

              <p className="text-gray-700 mb-6">
                Here is a comprehensive side-by-side comparison of all three sewer repair methods across every factor that matters to homeowners. This table covers cost, timeline, disruption, durability, and suitability for different types of damage.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <th className="text-left py-3 px-3 font-semibold text-gray-900">Factor</th>
                      <th className="text-center py-3 px-3 font-semibold text-gray-900">CIPP Pipe Lining</th>
                      <th className="text-center py-3 px-3 font-semibold text-gray-900">Pipe Bursting</th>
                      <th className="text-center py-3 px-3 font-semibold text-gray-900">Traditional Dig</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium">Cost per foot</td>
                      <td className="text-center py-3 px-3">$80-$160</td>
                      <td className="text-center py-3 px-3">$100-$250</td>
                      <td className="text-center py-3 px-3">$50-$200</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-3 font-medium">Landscape restoration cost</td>
                      <td className="text-center py-3 px-3">Minimal ($0-$500)</td>
                      <td className="text-center py-3 px-3">Minimal ($0-$500)</td>
                      <td className="text-center py-3 px-3">$2,000-$10,000+</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium">Total project cost (50 ft)</td>
                      <td className="text-center py-3 px-3">$4,000-$8,000</td>
                      <td className="text-center py-3 px-3">$5,000-$12,500</td>
                      <td className="text-center py-3 px-3">$4,500-$20,000+</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-3 font-medium">Completion time</td>
                      <td className="text-center py-3 px-3">1 day</td>
                      <td className="text-center py-3 px-3">1-2 days</td>
                      <td className="text-center py-3 px-3">3-7 days</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium">Excavation needed</td>
                      <td className="text-center py-3 px-3">1-2 access points</td>
                      <td className="text-center py-3 px-3">2 access pits</td>
                      <td className="text-center py-3 px-3">Full trench</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-3 font-medium">Property disruption</td>
                      <td className="text-center py-3 px-3">Very low</td>
                      <td className="text-center py-3 px-3">Low</td>
                      <td className="text-center py-3 px-3">High</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium">New pipe material</td>
                      <td className="text-center py-3 px-3">Epoxy liner (pipe-within-pipe)</td>
                      <td className="text-center py-3 px-3">HDPE</td>
                      <td className="text-center py-3 px-3">PVC or cast iron</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-3 font-medium">Lifespan</td>
                      <td className="text-center py-3 px-3">50+ years</td>
                      <td className="text-center py-3 px-3">50-100 years</td>
                      <td className="text-center py-3 px-3">50-75 years (PVC)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium">Can upsize pipe?</td>
                      <td className="text-center py-3 px-3">No (slightly reduces)</td>
                      <td className="text-center py-3 px-3">Yes</td>
                      <td className="text-center py-3 px-3">Yes</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-3 font-medium">Handles collapsed pipe?</td>
                      <td className="text-center py-3 px-3">No</td>
                      <td className="text-center py-3 px-3">Partial collapse only</td>
                      <td className="text-center py-3 px-3">Yes</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium">Fixes pipe bellies?</td>
                      <td className="text-center py-3 px-3">No</td>
                      <td className="text-center py-3 px-3">No</td>
                      <td className="text-center py-3 px-3">Yes</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-3 font-medium">Root intrusion resistance</td>
                      <td className="text-center py-3 px-3">Excellent (seamless)</td>
                      <td className="text-center py-3 px-3">Excellent (seamless HDPE)</td>
                      <td className="text-center py-3 px-3">Good (jointed PVC)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium">Permits required</td>
                      <td className="text-center py-3 px-3">Plumbing permit</td>
                      <td className="text-center py-3 px-3">Plumbing permit</td>
                      <td className="text-center py-3 px-3">Plumbing + street opening</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium">Weather dependency</td>
                      <td className="text-center py-3 px-3">Low</td>
                      <td className="text-center py-3 px-3">Moderate</td>
                      <td className="text-center py-3 px-3">High (rain delays)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Cost Breakdown */}
            {/* Mid-content CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Need a plumber?</p>
                <p className="text-gray-300 text-sm">24/7 emergency plumbing, water heater repair, leak detection, and more in Middlesex County.</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
              </div>
            </div>

            <section id="cost-breakdown" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Complete Cost Breakdown: Trenchless vs Traditional</h2>

              <p className="text-gray-700 mb-6">
                One of the most common misconceptions about trenchless sewer repair is that it is more expensive. While the per-foot cost for the pipe work itself is higher, the total project cost tells a different story when you account for property restoration.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Cost Scenario: 50-Foot Sewer Line</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Trenchless (CIPP Lining)</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex justify-between"><span>Camera inspection</span><span className="font-semibold">$250</span></li>
                    <li className="flex justify-between"><span>Hydro-jetting</span><span className="font-semibold">$450</span></li>
                    <li className="flex justify-between"><span>CIPP lining (50 ft x $120/ft)</span><span className="font-semibold">$6,000</span></li>
                    <li className="flex justify-between"><span>Access point excavation</span><span className="font-semibold">$300</span></li>
                    <li className="flex justify-between"><span>Landscape restoration</span><span className="font-semibold">$200</span></li>
                    <li className="flex justify-between border-t border-green-200 pt-2 mt-2">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-green-700">~$7,200</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Traditional (Dig and Replace)</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex justify-between"><span>Camera inspection</span><span className="font-semibold">$250</span></li>
                    <li className="flex justify-between"><span>Excavation labor (50 ft trench)</span><span className="font-semibold">$3,000</span></li>
                    <li className="flex justify-between"><span>New PVC pipe + materials</span><span className="font-semibold">$1,500</span></li>
                    <li className="flex justify-between"><span>Backfill and compaction</span><span className="font-semibold">$800</span></li>
                    <li className="flex justify-between"><span>Lawn restoration (sod, grading)</span><span className="font-semibold">$2,500</span></li>
                    <li className="flex justify-between"><span>Driveway section repair</span><span className="font-semibold">$3,000</span></li>
                    <li className="flex justify-between"><span>Sidewalk section</span><span className="font-semibold">$1,200</span></li>
                    <li className="flex justify-between border-t border-orange-200 pt-2 mt-2">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-orange-700">~$12,250</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Key Takeaway: True Cost Comparison</h4>
                <p className="text-gray-700">
                  In this typical Middlesex County scenario -a 50-foot sewer line running under a driveway and front yard -the trenchless option saves approximately <strong>$5,000</strong> in total project cost. Even in cases where the sewer line runs entirely under a lawn (lower restoration costs), trenchless is usually within $1,000-$2,000 of traditional pricing when you include the value of not losing mature landscaping and avoiding weeks of a torn-up yard.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Factors That Increase Costs</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Higher Cost Factors</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>Pipe depth greater than 6 feet</li>
                      <li>Rocky soil conditions (common in parts of Middlesex County)</li>
                      <li>Pipe diameter larger than 6 inches</li>
                      <li>Multiple 90-degree bends or cleanouts</li>
                      <li>High water table requiring dewatering</li>
                      <li>Pipe running under structures or hardscaping</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Lower Cost Factors</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>Shallow pipe (under 4 feet)</li>
                      <li>Easy access with existing cleanout</li>
                      <li>Straight pipe run with minimal bends</li>
                      <li>Sandy or loamy soil</li>
                      <li>Standard 4-inch residential pipe</li>
                      <li>Short repair section (spot repair)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pros and Cons */}
            <section id="pros-cons" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Pros and Cons of Each Sewer Repair Method</h2>

              {/* CIPP Pros/Cons */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">CIPP Pipe Lining: Pros and Cons</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <p className="font-bold text-green-800 mb-3">Pros</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Minimal excavation -only 1-2 small access points</li>
                    <li>Fastest repair method -typically 1 day</li>
                    <li>Lowest cost trenchless option ($80-$160/ft)</li>
                    <li>Creates seamless, joint-free interior -excellent root resistance</li>
                    <li>50+ year expected lifespan</li>
                    <li>Can line specific damaged sections (spot lining)</li>
                    <li>Works on bends up to 22.5 degrees</li>
                    <li>No property disruption -preserves landscaping, driveways</li>
                    <li>Improves flow by creating a smooth interior surface</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <p className="font-bold text-red-800 mb-3">Cons</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Cannot fix collapsed pipes</li>
                    <li>Slightly reduces pipe diameter (~1/4 inch)</li>
                    <li>Does not correct bellies or sags</li>
                    <li>Pipe must be cleaned and inspected first</li>
                    <li>Cannot change pipe route or slope</li>
                    <li>Not suitable for all pipe materials in all conditions</li>
                    <li>Requires trained, specialized technicians</li>
                  </ul>
                </div>
              </div>

              {/* Pipe Bursting Pros/Cons */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pipe Bursting: Pros and Cons</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <p className="font-bold text-green-800 mb-3">Pros</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Complete pipe replacement -brand new HDPE pipe</li>
                    <li>Can handle partially collapsed pipes</li>
                    <li>Option to upsize pipe diameter (e.g., 4&quot; to 6&quot;)</li>
                    <li>Seamless HDPE pipe -no joints, excellent root resistance</li>
                    <li>50-100 year lifespan</li>
                    <li>Minimal excavation compared to traditional (only 2 access pits)</li>
                    <li>Completed in 1-2 days</li>
                    <li>HDPE is flexible and resistant to ground movement</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <p className="font-bold text-red-800 mb-3">Cons</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Highest per-foot cost ($100-$250/ft)</li>
                    <li>Requires 2 access pits (more digging than CIPP)</li>
                    <li>Cannot navigate sharp bends (&gt;22.5 degrees)</li>
                    <li>Risk of damaging nearby utilities</li>
                    <li>Does not correct bellies or pipe slope issues</li>
                    <li>Lateral reconnections add cost ($500-$1,500 each)</li>
                    <li>Requires heavy equipment (hydraulic pulling machine)</li>
                  </ul>
                </div>
              </div>

              {/* Traditional Pros/Cons */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Dig and Replace: Pros and Cons</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <p className="font-bold text-green-800 mb-3">Pros</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Works for any type of damage including full collapse</li>
                    <li>Can correct bellies, slope issues, and pipe routing</li>
                    <li>Lowest per-foot pipe cost ($50-$200/ft)</li>
                    <li>Allows complete visual inspection during installation</li>
                    <li>Can address multiple issues at once (roots, soil, grade)</li>
                    <li>Any pipe size or material can be installed</li>
                    <li>Well-understood by all plumbing contractors</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <p className="font-bold text-red-800 mb-3">Cons</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Major property disruption -entire trench excavated</li>
                    <li>Landscape, driveway, sidewalk damage ($2,000-$10,000+ to restore)</li>
                    <li>Longest timeline (3-7 days + restoration time)</li>
                    <li>Weather-dependent -rain can halt work for days</li>
                    <li>Higher total project cost when restoration is included</li>
                    <li>Mature trees and landscaping may be permanently lost</li>
                    <li>PVC joints can allow future root intrusion over time</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* When Trenchless Is Best */}
            <section id="when-trenchless" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When Trenchless Sewer Repair Is the Best Option</h2>

              <p className="text-gray-700 mb-6">
                Trenchless methods are the best choice in the majority of residential sewer repair scenarios. Here are the situations where trenchless clearly wins:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Your Sewer Line Runs Under a Driveway, Patio, or Sidewalk</h3>
                  <p className="text-gray-700">This is where trenchless saves the most money. Replacing concrete driveways, pavers, or stamped patios can cost $3,000-$8,000 on top of the pipe repair. Trenchless eliminates this cost entirely.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Mature Trees and Landscaping Are in the Pipe Path</h3>
                  <p className="text-gray-700">A 20-year-old oak tree cannot be replaced. If your sewer line runs near or under valuable trees, trenchless preserves root systems and landscaping that took decades to establish.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">You Need the Repair Done Quickly</h3>
                  <p className="text-gray-700">A sewer backup is an emergency -you need it fixed fast. Trenchless repairs are completed in 1-2 days versus 3-7+ days for traditional excavation. Less time without a functioning sewer means less disruption to your daily life.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">The Pipe Has Cracks, Corrosion, or Joint Separation</h3>
                  <p className="text-gray-700">These are the most common sewer line problems in Middlesex County, especially in homes built before 1980 with clay or cast iron pipes. CIPP lining handles these issues effectively and creates a seamless, root-resistant interior.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">You Want to Upsize Your Sewer Line</h3>
                  <p className="text-gray-700">Pipe bursting allows you to replace a 4-inch pipe with a 6-inch pipe, improving capacity for growing households or addressing chronic slow-drain issues. This is especially valuable in older homes with undersized original plumbing.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Root Intrusion Is the Main Problem</h3>
                  <p className="text-gray-700">Tree roots enter sewer lines through joints and cracks. Both trenchless methods create seamless, joint-free pipes that are virtually immune to future root intrusion -a significant advantage over traditional PVC with glued joints.</p>
                </div>
              </div>
            </section>

            {/* When Traditional Is Necessary */}
            <section id="when-traditional" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When Traditional Sewer Replacement Is Necessary</h2>

              <p className="text-gray-700 mb-6">
                While we recommend trenchless methods whenever possible, there are situations where traditional excavation is the only viable option:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Complete Pipe Collapse</h3>
                  <p className="text-gray-700 text-sm">When the pipe has completely collapsed and no pathway remains, neither lining nor bursting can work. A fully collapsed section requires excavation to remove the debris and install new pipe. In some cases, we can combine methods -excavating only the collapsed section and using trenchless for the rest.</p>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Severe Belly or Sag</h3>
                  <p className="text-gray-700 text-sm">A belly is a low spot in the pipe where water and waste pool, causing chronic backups and sediment buildup. Trenchless methods follow the existing pipe path and cannot correct the grade. Traditional excavation allows us to re-slope the pipe at the correct grade (1/4 inch per foot for 4-inch pipe).</p>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Multiple Sharp Direction Changes</h3>
                  <p className="text-gray-700 text-sm">Trenchless equipment can navigate gradual bends (up to 22.5 degrees) but not sharp 90-degree turns. If your sewer line has multiple sharp bends -common in older Middlesex County homes with additions built at different times -traditional replacement may be the only option.</p>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Need to Re-Route the Sewer Line</h3>
                  <p className="text-gray-700 text-sm">If the existing pipe path needs to change -due to new construction, a home addition, or a path that is no longer accessible -traditional replacement is required to establish a new route.</p>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Shallow Pipe Needing Grade Correction</h3>
                  <p className="text-gray-700 text-sm">In some cases, the original pipe was not installed at the correct slope. If the pipe is shallow (2-3 feet) and easily accessible, traditional replacement to correct the grade may be more cost-effective than trenchless.</p>
                </div>
              </div>
            </section>

            {/* Sewer Camera Inspection */}
            {/* Mid-content CTA 2 */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Need a plumber?</p>
              <p className="text-red-100 text-sm mb-4">While we do not offer sewer repair services, our licensed plumbers are available 24/7 for water heater repair, leak detection, gas line services, repiping, and more across Middlesex County.</p>
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
                <p className="font-bold text-gray-900 mb-1">Our Plumbing Services</p>
                <p className="text-sm text-gray-600 mb-2">Expert drain and plumbing diagnostics, camera inspection, and a full range of repair services. We assess every situation before recommending the right solution.</p>
                <Link href="/services" className="text-red-700 hover:text-red-800 font-medium text-sm">View Our Services</Link>
              </div>
            </div>

            <section id="camera-inspection" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Sewer Camera Inspection: The Essential First Step</h2>

              <p className="text-gray-700 mb-4">
                Before any sewer repair -trenchless or traditional -a <strong>sewer line camera inspection</strong> is absolutely essential. Without seeing inside the pipe, there is no way to know what type of damage exists, where it is located, or which repair method is appropriate. Any plumber who recommends a repair method without a camera inspection first should be avoided.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">What a Sewer Camera Inspection Reveals</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>Cracks, fractures, and holes in the pipe walls</li>
                  <li>Root intrusion -location and severity</li>
                  <li>Joint separation or offset joints</li>
                  <li>Bellies (low spots) where water pools</li>
                  <li>Blockages -grease, debris, or foreign objects</li>
                </ul>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>Pipe material (clay, cast iron, PVC, Orangeburg)</li>
                  <li>Pipe diameter and condition</li>
                  <li>Partial or full collapse locations</li>
                  <li>Corrosion and scale buildup</li>
                  <li>Exact distance to each problem from the access point</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Sewer Camera Inspection Cost</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Standard camera inspection (up to 100 ft)</span>
                    <span className="font-semibold">$150-$400</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Camera inspection with locator</span>
                    <span className="font-semibold">$250-$500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Camera inspection + line locate + depth reading</span>
                    <span className="font-semibold">$300-$600</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Many plumbers, including us, will credit the camera inspection cost toward the repair if you choose to proceed with the work.
                </p>
              </div>

              <p className="text-gray-700">
                Sewer specialists use high-definition cameras with built-in locators that can pinpoint the exact depth and location of problems from the surface. This data is critical for determining whether trenchless repair is feasible and for providing accurate repair estimates. A good contractor provides customers with video footage and a written report of the findings.
              </p>
            </section>

            {/* Timeline */}
            <section id="timeline" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How Long Does Trenchless Sewer Repair Take?</h2>

              <p className="text-gray-700 mb-6">
                One of the biggest advantages of trenchless methods is speed. Here is a detailed timeline breakdown for each method:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <th className="text-left py-3 px-3 font-semibold text-gray-900">Phase</th>
                      <th className="text-center py-3 px-3 font-semibold text-gray-900">CIPP Lining</th>
                      <th className="text-center py-3 px-3 font-semibold text-gray-900">Pipe Bursting</th>
                      <th className="text-center py-3 px-3 font-semibold text-gray-900">Traditional</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium">Camera inspection</td>
                      <td className="text-center py-3 px-3">1-2 hours</td>
                      <td className="text-center py-3 px-3">1-2 hours</td>
                      <td className="text-center py-3 px-3">1-2 hours</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-3 font-medium">Excavation/access</td>
                      <td className="text-center py-3 px-3">1-2 hours</td>
                      <td className="text-center py-3 px-3">2-4 hours</td>
                      <td className="text-center py-3 px-3">1-3 days</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium">Pipe cleaning</td>
                      <td className="text-center py-3 px-3">1-3 hours</td>
                      <td className="text-center py-3 px-3">N/A</td>
                      <td className="text-center py-3 px-3">N/A</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-3 font-medium">Repair/replacement</td>
                      <td className="text-center py-3 px-3">2-4 hours</td>
                      <td className="text-center py-3 px-3">3-6 hours</td>
                      <td className="text-center py-3 px-3">1-2 days</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium">Curing/setting</td>
                      <td className="text-center py-3 px-3">3-24 hours</td>
                      <td className="text-center py-3 px-3">Immediate</td>
                      <td className="text-center py-3 px-3">N/A</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-3 font-medium">Final inspection</td>
                      <td className="text-center py-3 px-3">1 hour</td>
                      <td className="text-center py-3 px-3">1 hour</td>
                      <td className="text-center py-3 px-3">1-2 hours</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium">Surface restoration</td>
                      <td className="text-center py-3 px-3">1-2 hours</td>
                      <td className="text-center py-3 px-3">2-4 hours</td>
                      <td className="text-center py-3 px-3">1-5 days</td>
                    </tr>
                    <tr className="bg-gray-100 font-semibold">
                      <td className="py-3 px-3">Total Time</td>
                      <td className="text-center py-3 px-3 text-green-700">1 day</td>
                      <td className="text-center py-3 px-3 text-green-700">1-2 days</td>
                      <td className="text-center py-3 px-3 text-orange-700">3-7+ days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700">
                For most Middlesex County homes, a CIPP pipe lining project starts in the morning and the cured liner is ready for use by the next morning. Pipe bursting is typically a 1-2 day process. Traditional replacement takes 3-7 days for the pipe work alone, plus additional days or weeks for driveway, sidewalk, and landscape restoration contractors to complete their work.
              </p>
            </section>

            {/* Middlesex County Considerations */}
            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Middlesex County Sewer Line Considerations</h2>

              <p className="text-gray-700 mb-6">
                As plumbers who work exclusively in Middlesex County -including East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick -we have detailed knowledge of the sewer conditions unique to this area. Here is what homeowners in our service area should know:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Clay and Cast Iron Pipes in Older Homes</h4>
                  <p className="text-gray-700">Many homes in Middlesex County built between 1940 and 1980 have vitrified clay sewer pipes. Homes from the 1950s-1970s may have cast iron drain lines. Both materials deteriorate over time: clay pipes develop cracks at the joints (every 2-4 feet), and cast iron corrodes from the inside out. These are ideal candidates for CIPP pipe lining, which seals every joint and crack in a single continuous liner. Homes in the older sections of Edison, East Brunswick, and Sayreville are especially likely to have these aging pipe materials.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Tree Root Intrusion</h4>
                  <p className="text-gray-700">Middlesex County has mature tree canopies throughout its residential neighborhoods. Oak, maple, and willow trees are particularly aggressive root growers. Tree roots seek out sewer lines because they are a source of water and nutrients. Roots enter through joints in clay pipes and through corrosion holes in cast iron. Root intrusion appears in approximately 60% of sewer camera inspections on older homes in the area. Trenchless repair with seamless pipe (CIPP or HDPE via pipe bursting) is the best long-term solution because it eliminates the joints where roots enter.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">NJ Permits and Municipal Requirements</h4>
                  <p className="text-gray-700">New Jersey requires a plumbing permit for any sewer line repair or replacement. In most Middlesex County municipalities, you will need to submit a permit application to the local building department before work begins. If the sewer connects to a municipal main under a public road or sidewalk, a street opening permit may also be required. Some municipalities, including Edison and Old Bridge, have specific requirements for sewer lateral connections. As licensed NJ plumbers, we handle all permit applications, scheduling of inspections, and ensure the work meets NJ plumbing code requirements.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Soil Conditions and Pipe Depth</h4>
                  <p className="text-gray-700">Middlesex County has varied soil conditions -from sandy loam near the Raritan River in Sayreville to clay-heavy soils in Monroe Township and South Brunswick. Sewer line depth varies from 3 feet to 10+ feet depending on the home&apos;s elevation relative to the municipal sewer main. Deeper pipes and clay soils increase the cost of traditional excavation significantly, making trenchless methods even more cost-effective in these areas.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Seasonal Considerations</h4>
                  <p className="text-gray-700">In New Jersey, sewer problems often worsen in spring and fall when increased rainfall saturates the soil and tree roots are most active. Frozen ground in winter can make traditional excavation more difficult and expensive. Trenchless methods are less affected by weather conditions since they require minimal digging, though ambient-cured CIPP liners cure more slowly in cold temperatures. UV-cured and steam-cured liners are not affected by outdoor temperature.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Homeowner Responsibility vs Municipal</h4>
                  <p className="text-gray-700">In Middlesex County, homeowners are responsible for the sewer lateral -the pipe that runs from your home to the connection at the municipal sewer main (usually located in the street). This typically includes 30-80 feet of pipe depending on your lot size and where the main is located. The municipality maintains the sewer main itself. Any damage to your lateral is your financial responsibility to repair. This is why we always recommend having your sewer line inspected with a camera when buying a home, before a warranty expires, or at the first sign of slow drains.</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much does trenchless sewer repair cost?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Trenchless sewer repair typically costs $80-$250 per linear foot, depending on the method. CIPP pipe lining averages $80-$160 per foot, while pipe bursting ranges from $100-$250 per foot. For a typical 50-foot residential sewer line in Middlesex County, expect to pay $4,000-$12,500 total. These costs include camera inspection, cleaning, the repair itself, and minor surface restoration.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Is trenchless sewer repair worth the cost?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Yes, in most cases trenchless is worth it. While the per-foot pipe cost is higher than traditional ($80-$250/ft vs $50-$200/ft), you avoid $2,000-$10,000+ in landscape and hardscape restoration. The total project cost is often comparable or lower. You also get faster completion (1-2 days vs 3-7 days), minimal property disruption, and a seamless pipe that resists root intrusion for 50+ years.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How long does trenchless sewer repair last?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">CIPP pipe liners have an expected lifespan of 50+ years. Pipe bursting installs new HDPE pipe that lasts 50-100 years. Both methods create seamless, joint-free pipe sections that resist root intrusion and corrosion far better than traditional jointed PVC pipe, which has an expected life of 50-75 years.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What is the difference between pipe lining and pipe bursting?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Pipe lining (CIPP) inserts a resin-coated liner inside your existing pipe and cures it in place, creating a pipe-within-a-pipe. It costs $80-$160/ft and works on cracked or corroded pipes that have not collapsed. Pipe bursting breaks the old pipe apart while pulling new HDPE pipe through the same path. It costs $100-$250/ft and can handle partially collapsed pipes and even increase pipe diameter. Both are trenchless methods requiring minimal excavation.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Can trenchless repair fix a collapsed sewer line?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Partially collapsed pipes can be fixed with pipe bursting, which fractures the old pipe outward. Fully collapsed pipes cannot be fixed with pipe lining (no structure for the liner) and may not be passable for pipe bursting equipment. For full collapses, we often use a hybrid approach: excavate only the collapsed section (a spot repair) and use trenchless methods for the remaining line, minimizing overall disruption.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Do I need a permit for sewer line repair in New Jersey?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Yes, New Jersey requires a plumbing permit for sewer line repair and replacement. In Middlesex County municipalities, you submit the permit application to your local building department. If the work involves opening a public road or sidewalk, a street opening permit is also required. We handle all permit applications and coordinate municipal inspections as part of our service.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How long does trenchless sewer repair take?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">CIPP pipe lining is typically completed in 1 day -setup, cleaning, liner insertion, and curing takes approximately 8-12 hours total. Pipe bursting usually takes 1-2 days depending on length and number of lateral connections. By comparison, traditional dig-and-replace takes 3-7 days for the pipe work alone, plus additional days for surface restoration.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What is a sewer camera inspection and do I need one?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">A sewer camera inspection ($150-$400) uses a waterproof camera on a flexible cable to inspect the interior of your sewer pipe in real time. It identifies the exact type, location, and severity of damage -including cracks, root intrusion, bellies, offsets, and pipe material. Yes, you absolutely need one before any sewer repair. It is the only way to determine the correct repair method and get an accurate cost estimate. A reputable contractor provides HD video footage and a written report with every inspection.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Does homeowners insurance cover sewer line repair?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Standard homeowners insurance typically does not cover sewer line repair caused by aging, wear and tear, or tree root intrusion. However, some policies cover sudden and accidental damage. Many insurance companies now offer separate sewer line coverage as an add-on (typically $50-$100/year). Additionally, some Middlesex County municipalities participate in utility line warranty programs. We recommend checking your policy and asking your insurer about sewer line coverage before a problem occurs.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What are the signs I need sewer line repair?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Warning signs include: multiple slow drains throughout the house, gurgling sounds from drains or toilets, sewage odor inside or outside the home, recurring drain clogs despite cleaning, wet or sunken spots in the yard, unusually green patches of grass over the sewer line, foundation cracks near drain lines, and backup of sewage into the lowest drains. If you notice any of these, schedule a sewer camera inspection before the problem worsens.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Need Help With Your Plumbing?</h2>
              <p className="text-red-100 mb-6">
                While we do not offer sewer line or drain cleaning services, our licensed plumbers are available 24/7 for water heater repair, leak detection, gas line services, repiping, and more across Middlesex County, NJ.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/services" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  View Our Services
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/signs-of-slab-leak-sewer-line" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs of a Slab Leak or Sewer Line Problem</h3>
                    <p className="text-sm text-gray-600">Learn to identify the warning signs of sewer line damage before it becomes an emergency.</p>
                  </div>
                </Link>
                <Link href="/blog/why-is-water-pressure-low" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Why Is My Water Pressure Low?</h3>
                    <p className="text-sm text-gray-600">Low water pressure can signal pipe problems -find out the common causes and fixes.</p>
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
                <p className="text-gray-600 text-sm mb-4">24/7 plumbing services in Middlesex County - water heaters, leak detection, gas lines, and more.</p>
                <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
                <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
              </div>
              {/* Service Areas */}
              <div className="bg-white rounded-xl shadow-md p-5">
                <p className="font-bold text-gray-900 mb-3">Service Areas</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/east-brunswick" className="hover:text-red-700 transition">East Brunswick</Link></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/edison" className="hover:text-red-700 transition">Edison</Link></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/sayreville" className="hover:text-red-700 transition">Sayreville</Link></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/old-bridge" className="hover:text-red-700 transition">Old Bridge</Link></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/monroe-township" className="hover:text-red-700 transition">Monroe Township</Link></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/south-brunswick" className="hover:text-red-700 transition">South Brunswick</Link></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/north-brunswick" className="hover:text-red-700 transition">North Brunswick</Link></li>
                </ul>
                <Link href="/service-areas" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Service Areas</Link>
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
                  <li><Link href="/blog/signs-of-slab-leak-sewer-line" className="text-gray-700 hover:text-red-700 transition">Signs of a Slab Leak or Sewer Line Issue</Link></li>
                  <li><Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition">Why Is My Water Pressure Low?</Link></li>
                  <li><Link href="/blog/frozen-pipes-prevention-repair" className="text-gray-700 hover:text-red-700 transition">Frozen Pipes: Prevention & Repair Guide</Link></li>
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
