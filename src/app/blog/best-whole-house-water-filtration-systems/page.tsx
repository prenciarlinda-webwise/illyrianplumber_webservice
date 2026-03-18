import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "11 Best Whole House Water Filtration Systems (2026 Expert Review)",
  description:
    "Licensed plumbers tested and reviewed the 11 best whole house water filtration systems for 2026. Compare performance, cost, and which filter is best for your home water quality.",
  keywords: [
    "best whole house water filter",
    "best whole house water filtration system",
    "whole house water filter",
    "water filtration system for home",
    "best water filtration system for home",
    "whole house water filtration",
    "best whole house water filter system",
    "best whole home water filtration system",
    "best water filter system",
    "whole home water filtration system",
    "home filtration system",
    "best rated whole house water filter",
    "top rated whole house water filter",
    "whole house water filter reviews",
    "best whole house water purification system",
    "best water purification system",
    "whole house water filtration systems",
    "best whole house water filter for well water",
    "best whole house water filtration system for city water",
    "whole house water filter cost",
    "water filter installation",
    "home water filtration",
    "water purification system",
    "best home water filter",
    "whole house water filter system reviews",
    "water filter for house",
    "house water filtration system",
    "best water filter for the whole house",
    "best whole house filter",
    "whole house water purification systems",
  ],
  openGraph: {
    title: "11 Best Whole House Water Filtration Systems (2026 Expert Review)",
    description:
      "Licensed plumber reviews of the top whole house water filters. Compare systems by contaminant removal, flow rate, cost, and NJ water compatibility.",
    type: "article",
    publishedTime: "2026-03-18T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function BestWaterFiltrationPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "11 Best Whole House Water Filtration Systems (2026 Expert Review)",
    description:
      "Licensed plumber reviews of the 11 best whole house water filtration systems for 2026. Compare filters by performance, cost, and home compatibility.",
    image:
      "https://www.illyrianplumber.com/images/professional-plumbing-services.jpg",
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
      "@id":
        "https://www.illyrianplumber.com/blog/best-whole-house-water-filtration-systems",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best whole house water filtration system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best whole house water filtration system depends on your water quality. For city water with chlorine concerns, the SpringWell CF1 is our top pick. For well water with sediment and iron, the SoftPro IronMaster is the best choice. For comprehensive filtration on a budget, the iSpring WGB32B offers excellent value at under $500.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a whole house water filtration system cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whole house water filtration systems cost $300-$5,000+ for the equipment. Basic carbon filters start at $300-$600, mid-range multi-stage systems run $800-$2,000, and premium systems with water softening cost $2,000-$5,000+. Professional installation adds $300-$800. Annual filter replacement costs $50-$400 depending on the system.",
        },
      },
      {
        "@type": "Question",
        name: "Do whole house water filters reduce water pressure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quality whole house water filters cause minimal pressure drop — typically 1-5 PSI when properly sized. However, clogged or undersized filters can significantly reduce pressure. Choose a system rated for your home's flow rate (typically 10-15 GPM for a 2-3 bathroom house) and replace filters on schedule to maintain pressure.",
        },
      },
      {
        "@type": "Question",
        name: "How long do whole house water filters last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The filter housing/system itself lasts 10-20+ years. Filter cartridges need regular replacement: sediment pre-filters every 3-6 months, carbon filters every 6-12 months, and specialized media every 5-10 years. Annual maintenance costs typically run $50-$400 depending on the system complexity.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best whole house water filter for well water?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For well water, you need a system that handles sediment, iron, manganese, and potentially bacteria. The SoftPro IronMaster is our top pick for well water with iron/manganese issues. For comprehensive well water treatment, a multi-stage system with UV disinfection like the SpringWell WS1 provides the broadest protection.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best whole house water filtration system for city water?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For city/municipal water, the primary concerns are chlorine, chloramine, PFAS, and sediment. The SpringWell CF1 is our top pick for city water — it removes 99%+ of chlorine and significantly reduces PFAS. The Aquasana Rhino is another excellent choice with NSF-certified contaminant removal.",
        },
      },
      {
        "@type": "Question",
        name: "Is a whole house water filter worth the investment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most homeowners, yes. A whole house water filter protects appliances from sediment and scale damage, improves water taste from every tap, reduces skin irritation from chlorine, and eliminates bottled water costs. Most families save $500-$1,000+ per year in bottled water and appliance longevity, paying back the investment in 2-4 years.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a water softener or a water filter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They serve different purposes. Water filters remove contaminants (chlorine, sediment, chemicals, heavy metals). Water softeners remove hardness minerals (calcium, magnesium) that cause scale buildup. Many homes benefit from both — a filter for clean water and a softener for soft water. Some systems combine both functions.",
        },
      },
      {
        "@type": "Question",
        name: "Can I install a whole house water filter myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basic whole house filters with compression fittings can be DIY-installed if you're comfortable with plumbing. However, professional installation is recommended for larger systems, homes with older plumbing, or when modifications to the main water line are needed. Professional installation ensures proper sizing, placement, and no leaks.",
        },
      },
      {
        "@type": "Question",
        name: "What contaminants do whole house water filters remove?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depending on the system, whole house water filters can remove: chlorine, chloramine, sediment, rust, PFAS/PFOA, VOCs (volatile organic compounds), heavy metals (lead, mercury), pesticides, herbicides, and some bacteria. No single filter removes everything — multi-stage systems provide the broadest protection.",
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
        <header className="relative bg-gray-900 text-white py-16 md:py-24">
          <div className="absolute inset-0">
            <Image
              src="/images/professional-plumbing-services.jpg"
              alt="Best whole house water filtration systems reviewed by licensed plumbers"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">
                  Water Quality
                </span>
                <time dateTime="2026-03-18">March 18, 2026</time>
                <span>25 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                11 Best Whole House Water Filtration Systems (2026 Expert Review)
              </h1>
              <p className="text-xl text-gray-300">
                We reviewed and compared the top whole house water filters based
                on contaminant removal, flow rate, maintenance costs, and
                real-world performance. Here are the best systems for every home
                and budget.
              </p>
            </div>
          </div>
        </header>

        <div className="border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-3xl mx-auto flex items-center gap-4">
              <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                IG
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Reviewed by {BUSINESS_INFO.name}
                </p>
                <p className="text-sm text-gray-600">
                  Licensed Master Plumbers serving Middlesex County, NJ since
                  2010 &bull; 750+ installations completed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Intro */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                Choosing the best whole house water filtration system is
                overwhelming. There are hundreds of options, conflicting reviews,
                and confusing specs. As licensed plumbers who install water
                filtration systems every week, we cut through the marketing and
                tested what actually matters: <strong>contaminant removal</strong>,{" "}
                <strong>flow rate under real conditions</strong>,{" "}
                <strong>long-term maintenance costs</strong>, and{" "}
                <strong>installation complexity</strong>.
              </p>
              <p className="text-gray-700">
                Whether you&apos;re on city water dealing with chlorine and PFAS
                or well water with iron and sediment, this guide will help you
                find the right whole house water filter for your home. We&apos;ve
                organized our picks by use case so you can jump straight to
                what&apos;s relevant.
              </p>
            </div>

            {/* Quick Picks Summary */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Our Top Picks at a Glance
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="bg-red-700 text-white text-xs font-bold px-2 py-1 rounded mt-0.5 whitespace-nowrap">
                    Best Overall
                  </span>
                  <p className="text-gray-700">
                    <strong>SpringWell CF1</strong> &mdash; Best carbon
                    filtration for city water. 1M gallon capacity, 9+ GPM flow,
                    removes 99% chlorine and reduces PFAS.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded mt-0.5 whitespace-nowrap">
                    Best Value
                  </span>
                  <p className="text-gray-700">
                    <strong>iSpring WGB32B</strong> &mdash; Best budget option
                    under $500. 3-stage filtration, easy DIY install, solid
                    chlorine and sediment removal.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-700 text-white text-xs font-bold px-2 py-1 rounded mt-0.5 whitespace-nowrap">
                    Best for Well Water
                  </span>
                  <p className="text-gray-700">
                    <strong>SoftPro IronMaster</strong> &mdash; Handles iron,
                    manganese, and hydrogen sulfide. Chemical-free, backwashing
                    media filter. Built for tough well water.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-purple-700 text-white text-xs font-bold px-2 py-1 rounded mt-0.5 whitespace-nowrap">
                    Best Premium
                  </span>
                  <p className="text-gray-700">
                    <strong>SpringWell WS1</strong> &mdash; Complete whole home
                    system with softener combo. Filter + softener in one. Best
                    for hard water areas.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                In This Guide
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#how-we-tested"
                    className="text-red-700 hover:text-red-800"
                  >
                    How We Evaluated These Systems
                  </a>
                </li>
                <li>
                  <a
                    href="#best-overall"
                    className="text-red-700 hover:text-red-800"
                  >
                    Best Overall: SpringWell CF1
                  </a>
                </li>
                <li>
                  <a
                    href="#best-value"
                    className="text-red-700 hover:text-red-800"
                  >
                    Best Value: iSpring WGB32B
                  </a>
                </li>
                <li>
                  <a
                    href="#best-well-water"
                    className="text-red-700 hover:text-red-800"
                  >
                    Best for Well Water: SoftPro IronMaster
                  </a>
                </li>
                <li>
                  <a
                    href="#best-premium"
                    className="text-red-700 hover:text-red-800"
                  >
                    Best Premium: SpringWell WS1
                  </a>
                </li>
                <li>
                  <a
                    href="#best-chloramine"
                    className="text-red-700 hover:text-red-800"
                  >
                    Best for Chloramine: Aquasana Rhino EQ-1000
                  </a>
                </li>
                <li>
                  <a
                    href="#best-pfas"
                    className="text-red-700 hover:text-red-800"
                  >
                    Best for PFAS Removal: AquaOx Whole House
                  </a>
                </li>
                <li>
                  <a
                    href="#best-compact"
                    className="text-red-700 hover:text-red-800"
                  >
                    Best Compact: Pentair Pelican PSE2000
                  </a>
                </li>
                <li>
                  <a
                    href="#best-uv"
                    className="text-red-700 hover:text-red-800"
                  >
                    Best with UV: Pelican PC1000
                  </a>
                </li>
                <li>
                  <a
                    href="#best-heavy-metals"
                    className="text-red-700 hover:text-red-800"
                  >
                    Best for Heavy Metals: Home Master HMF3SDGFEC
                  </a>
                </li>
                <li>
                  <a
                    href="#best-sediment"
                    className="text-red-700 hover:text-red-800"
                  >
                    Best for Sediment: Rusco Spin-Down
                  </a>
                </li>
                <li>
                  <a
                    href="#best-softener-combo"
                    className="text-red-700 hover:text-red-800"
                  >
                    Best Filter + Softener Combo: Filtersmart FS1000
                  </a>
                </li>
                <li>
                  <a
                    href="#comparison"
                    className="text-red-700 hover:text-red-800"
                  >
                    Side-by-Side Comparison Table
                  </a>
                </li>
                <li>
                  <a
                    href="#buying-guide"
                    className="text-red-700 hover:text-red-800"
                  >
                    Buying Guide: How to Choose
                  </a>
                </li>
                <li>
                  <a
                    href="#nj-water"
                    className="text-red-700 hover:text-red-800"
                  >
                    New Jersey Water Quality Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#installation"
                    className="text-red-700 hover:text-red-800"
                  >
                    Installation: DIY vs Professional
                  </a>
                </li>
                <li>
                  <a
                    href="#maintenance"
                    className="text-red-700 hover:text-red-800"
                  >
                    Maintenance and Filter Replacement
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-red-700 hover:text-red-800">
                    Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </nav>

            {/* How We Tested */}
            <section id="how-we-tested" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                How We Evaluated These Water Filtration Systems
              </h2>
              <p className="text-gray-700 mb-4">
                We evaluated each whole house water filter based on five
                criteria that matter most for real-world performance:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">
                    Contaminant Removal
                  </h3>
                  <p className="text-sm text-gray-700">
                    What does it actually filter? We prioritized NSF-certified
                    removal rates for chlorine, chloramine, PFAS, lead, VOCs,
                    and sediment.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">
                    Flow Rate (GPM)
                  </h3>
                  <p className="text-sm text-gray-700">
                    A filter that drops your water pressure is useless. We
                    tested real-world GPM to make sure you can shower, run the
                    dishwasher, and do laundry simultaneously.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">
                    Long-Term Cost
                  </h3>
                  <p className="text-sm text-gray-700">
                    Upfront price is only part of the equation. We calculated
                    5-year total cost including filter replacements,
                    maintenance, and potential professional service.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">
                    Ease of Installation
                  </h3>
                  <p className="text-sm text-gray-700">
                    Can a handy homeowner install it, or do you need a plumber?
                    We rated installation difficulty from easy (DIY) to complex
                    (professional recommended).
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong>Important:</strong> No single filter removes
                  everything. The &quot;best&quot; system depends entirely on
                  your water quality. We recommend getting a{" "}
                  <strong>water test</strong> before buying any system so you
                  know exactly what contaminants you need to address.
                </p>
              </div>
            </section>

            {/* System 1: SpringWell CF1 */}
            <section id="best-overall" className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-700 text-white text-sm font-bold px-3 py-1 rounded">
                  #1 Best Overall
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                SpringWell CF1 Whole House Water Filter System
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Filter Type</p>
                    <p className="font-semibold text-gray-900">
                      4-Stage Carbon &amp; KDF
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Flow Rate</p>
                    <p className="font-semibold text-gray-900">9+ GPM</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Filter Capacity</p>
                    <p className="font-semibold text-gray-900">
                      1,000,000 gallons
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price Range</p>
                    <p className="font-semibold text-gray-900">$900-$1,200</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Best For</p>
                    <p className="font-semibold text-gray-900">
                      City water, chlorine, PFAS
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Annual Maintenance</p>
                    <p className="font-semibold text-gray-900">~$40-$60</p>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The SpringWell CF1 is our top pick for the best whole house
                  water filtration system in 2026. It uses a combination of
                  catalytic carbon and KDF media to remove chlorine, chloramine,
                  PFOA/PFOS, pesticides, herbicides, and VOCs. The 1,000,000
                  gallon capacity means most families only need to replace the
                  main filter every 6-9 years.
                </p>
                <p>
                  What sets the CF1 apart is its flow rate. At 9+ GPM, it
                  handles multiple simultaneous water demands without noticeable
                  pressure drop. We&apos;ve installed these in 3-4 bathroom
                  homes with no complaints about water pressure.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Pros</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>+ Excellent chlorine and PFAS removal</li>
                    <li>+ High flow rate (no pressure loss)</li>
                    <li>+ Very low maintenance cost</li>
                    <li>+ Lifetime warranty on tanks</li>
                    <li>+ No electricity needed</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-2">Cons</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>- Higher upfront cost than basic filters</li>
                    <li>- Doesn&apos;t soften water (add softener separately)</li>
                    <li>- Large footprint (needs utility room space)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* System 2: iSpring WGB32B */}
            <section id="best-value" className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-700 text-white text-sm font-bold px-3 py-1 rounded">
                  #2 Best Value
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                iSpring WGB32B 3-Stage Whole House Water Filter
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Filter Type</p>
                    <p className="font-semibold text-gray-900">
                      3-Stage Sediment + Carbon
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Flow Rate</p>
                    <p className="font-semibold text-gray-900">15 GPM</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Filter Capacity</p>
                    <p className="font-semibold text-gray-900">
                      100,000 gallons
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price Range</p>
                    <p className="font-semibold text-gray-900">$350-$500</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Best For</p>
                    <p className="font-semibold text-gray-900">
                      Budget-conscious, city water
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Annual Maintenance</p>
                    <p className="font-semibold text-gray-900">~$80-$120</p>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The iSpring WGB32B is the best whole house water filter for
                  homeowners who want solid filtration without spending a
                  fortune. At under $500, it delivers 3-stage filtration
                  (sediment, carbon block, and granular activated carbon) that
                  effectively removes chlorine, sediment, rust, VOCs, and bad
                  taste/odor.
                </p>
                <p>
                  The 15 GPM flow rate is outstanding for this price range
                  &mdash; it won&apos;t reduce your water pressure even during
                  peak household usage. The 20&quot; x 4.5&quot; big blue
                  housings are industry-standard, so replacement filters are
                  widely available and affordable.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Pros</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>+ Excellent value under $500</li>
                    <li>+ High flow rate (15 GPM)</li>
                    <li>+ Easy DIY installation</li>
                    <li>+ Standard filter sizes (cheap replacements)</li>
                    <li>+ 1-year money-back guarantee</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-2">Cons</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>- Filters need replacement every 6-12 months</li>
                    <li>- Doesn&apos;t remove PFAS effectively</li>
                    <li>- No water softening capability</li>
                    <li>- Not ideal for well water</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* System 3: SoftPro IronMaster */}
            <section id="best-well-water" className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-700 text-white text-sm font-bold px-3 py-1 rounded">
                  #3 Best for Well Water
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                SoftPro IronMaster Whole House Water Filter
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Filter Type</p>
                    <p className="font-semibold text-gray-900">
                      Air Injection Oxidation
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Flow Rate</p>
                    <p className="font-semibold text-gray-900">12 GPM</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Filter Capacity</p>
                    <p className="font-semibold text-gray-900">
                      No cartridge replacements
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price Range</p>
                    <p className="font-semibold text-gray-900">$1,200-$1,800</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Best For</p>
                    <p className="font-semibold text-gray-900">
                      Well water, iron, manganese
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Annual Maintenance</p>
                    <p className="font-semibold text-gray-900">
                      ~$0 (self-cleaning)
                    </p>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  If you&apos;re on well water with iron, manganese, or hydrogen
                  sulfide (rotten egg smell), the SoftPro IronMaster is the best
                  whole house water filter for your situation. It uses air
                  injection oxidation &mdash; no chemicals needed &mdash; to
                  oxidize and trap iron (up to 7 PPM), manganese (up to 1 PPM),
                  and hydrogen sulfide (up to 3 PPM).
                </p>
                <p>
                  The system automatically backwashes to clean itself, so
                  there are no filter cartridges to replace. This makes the
                  long-term operating cost essentially zero beyond the water
                  used for backwashing.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Pros</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>+ No filter replacements (self-cleaning)</li>
                    <li>+ Chemical-free iron/manganese removal</li>
                    <li>+ Eliminates rotten egg smell</li>
                    <li>+ Strong 12 GPM flow rate</li>
                    <li>+ Digital control head with diagnostics</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-2">Cons</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>- Requires electricity and drain connection</li>
                    <li>- Doesn&apos;t remove chlorine or chemicals</li>
                    <li>- Needs professional installation</li>
                    <li>- Backwash uses 50-80 gallons per cycle</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* System 4: SpringWell WS1 */}
            <section id="best-premium" className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-purple-700 text-white text-sm font-bold px-3 py-1 rounded">
                  #4 Best Premium System
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                SpringWell WS1 Whole House Well Water Filter + Salt-Based
                Softener
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Filter Type</p>
                    <p className="font-semibold text-gray-900">
                      Multi-Media + Ion Exchange Softener
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Flow Rate</p>
                    <p className="font-semibold text-gray-900">12 GPM</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">System Type</p>
                    <p className="font-semibold text-gray-900">
                      Filter + Softener Combo
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price Range</p>
                    <p className="font-semibold text-gray-900">$2,500-$3,500</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Best For</p>
                    <p className="font-semibold text-gray-900">
                      Hard water + contaminant removal
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Annual Maintenance</p>
                    <p className="font-semibold text-gray-900">
                      ~$100-$200 (salt + filters)
                    </p>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The SpringWell WS1 is the best whole house water treatment
                  system for homeowners who want everything handled &mdash;
                  filtration AND softening &mdash; in one integrated system. It
                  combines multi-media filtration (for iron, manganese, and
                  sediment) with a salt-based water softener (for hardness
                  minerals).
                </p>
                <p>
                  This is our go-to recommendation for Middlesex County homes
                  with hard water (7-10 grains per gallon is common here). The
                  softener prevents scale buildup in pipes, water heaters, and
                  appliances while the filter removes iron staining and sediment.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Pros</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>+ Filtration + softening in one system</li>
                    <li>+ Excellent for hard water areas</li>
                    <li>+ Bluetooth-enabled smart head</li>
                    <li>+ Lifetime warranty</li>
                    <li>+ Prevents scale in pipes and appliances</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-2">Cons</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>- Premium price ($2,500+)</li>
                    <li>- Requires salt refills every 4-8 weeks</li>
                    <li>- Large footprint (two tanks)</li>
                    <li>- Professional installation strongly recommended</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* System 5: Aquasana Rhino */}
            <section id="best-chloramine" className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded">
                  #5 Best for Chloramine
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Aquasana Rhino EQ-1000 Whole House Water Filter
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Filter Type</p>
                    <p className="font-semibold text-gray-900">
                      Catalytic Carbon + KDF
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Flow Rate</p>
                    <p className="font-semibold text-gray-900">7 GPM</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Filter Capacity</p>
                    <p className="font-semibold text-gray-900">
                      1,000,000 gallons / 10 years
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price Range</p>
                    <p className="font-semibold text-gray-900">$800-$1,200</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Best For</p>
                    <p className="font-semibold text-gray-900">
                      Chloramine, heavy metals
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Annual Maintenance</p>
                    <p className="font-semibold text-gray-900">~$50-$80</p>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Many New Jersey water utilities use chloramine (instead of
                  chlorine) as a disinfectant. Standard carbon filters
                  don&apos;t remove chloramine effectively &mdash; you need
                  catalytic carbon. The Aquasana Rhino EQ-1000 is specifically
                  designed for chloramine reduction and is NSF certified to
                  remove 97% of chlorine and significantly reduce lead, mercury,
                  VOCs, and other contaminants.
                </p>
                <p>
                  The system comes with a 20&quot; pre-filter for sediment,
                  which protects the main tank and extends its life. At 7 GPM,
                  it&apos;s best suited for 1-3 bathroom homes.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Pros</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>+ Excellent chloramine removal (catalytic carbon)</li>
                    <li>+ NSF certified (Standards 42, 44, 53, 401)</li>
                    <li>+ 10-year / 1M gallon capacity</li>
                    <li>+ Removes lead and mercury</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-2">Cons</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>- Lower flow rate (7 GPM)</li>
                    <li>- Pre-filter replacements every 2-3 months</li>
                    <li>- Not great for well water</li>
                    <li>- Professional installation recommended</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* System 6: AquaOx */}
            <section id="best-pfas" className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-teal-700 text-white text-sm font-bold px-3 py-1 rounded">
                  #6 Best for PFAS Removal
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                AquaOx Whole House Water Filter
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Filter Type</p>
                    <p className="font-semibold text-gray-900">
                      7-Stage Multi-Media
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Flow Rate</p>
                    <p className="font-semibold text-gray-900">8-12 GPM</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Filter Capacity</p>
                    <p className="font-semibold text-gray-900">
                      Self-backwashing (no cartridge changes)
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price Range</p>
                    <p className="font-semibold text-gray-900">$2,800-$3,500</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Best For</p>
                    <p className="font-semibold text-gray-900">
                      PFAS, broad contaminant removal
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Annual Maintenance</p>
                    <p className="font-semibold text-gray-900">
                      ~$0 (self-backwashing)
                    </p>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  PFAS (&quot;forever chemicals&quot;) are a growing concern in
                  New Jersey water supplies. The AquaOx whole house filter uses
                  7 stages of filtration media to achieve broad-spectrum
                  contaminant removal including PFAS, chlorine, heavy metals,
                  pesticides, and bacteria. It self-backwashes, so there are no
                  filter cartridges to replace.
                </p>
                <p>
                  The AquaOx is a premium system, but for homeowners concerned
                  about PFAS contamination, it provides the most comprehensive
                  whole house protection available without resorting to a
                  whole-house reverse osmosis system.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Pros</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>+ Strong PFAS/PFOA reduction</li>
                    <li>+ No filter replacements</li>
                    <li>+ Broadest contaminant removal</li>
                    <li>+ 20+ year lifespan</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-2">Cons</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>- Very expensive ($2,800+)</li>
                    <li>- Requires electricity and drain</li>
                    <li>- Heavy (ships 150+ lbs)</li>
                    <li>- Professional installation required</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* System 7: Pentair Pelican PSE2000 */}
            <section id="best-compact" className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gray-700 text-white text-sm font-bold px-3 py-1 rounded">
                  #7 Best Compact System
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Pentair Pelican PSE2000 Water Softener Alternative + Filter
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Filter Type</p>
                    <p className="font-semibold text-gray-900">
                      Carbon + Scale Prevention
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Flow Rate</p>
                    <p className="font-semibold text-gray-900">10 GPM</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Filter Capacity</p>
                    <p className="font-semibold text-gray-900">
                      1,000,000 gallons (5-year media)
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price Range</p>
                    <p className="font-semibold text-gray-900">$1,800-$2,500</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Best For</p>
                    <p className="font-semibold text-gray-900">
                      Small spaces, salt-free softening
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Annual Maintenance</p>
                    <p className="font-semibold text-gray-900">~$60-$100</p>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The Pentair Pelican PSE2000 combines a carbon filter with
                  salt-free water conditioning (NaturSoft technology) in a
                  relatively compact footprint. It&apos;s ideal for homes with
                  limited utility room space or homeowners who don&apos;t want
                  the hassle of adding salt to a traditional softener.
                </p>
                <p>
                  Rather than removing hardness minerals, the NaturSoft system
                  conditions them so they don&apos;t stick to surfaces. You
                  still get scale prevention for your pipes and appliances, plus
                  clean filtered water &mdash; without the slippery feel of
                  softened water.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Pros</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>+ No salt or chemicals needed</li>
                    <li>+ Compact footprint</li>
                    <li>+ Filter + scale prevention combined</li>
                    <li>+ No wastewater from backwashing</li>
                    <li>+ NSF/ANSI 42 &amp; 61 certified</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-2">Cons</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>- Not a true softener (conditions, not removes)</li>
                    <li>- Mid-premium price</li>
                    <li>- Less effective with very hard water (15+ GPG)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* System 8: Pelican PC1000 */}
            <section id="best-uv" className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-yellow-600 text-white text-sm font-bold px-3 py-1 rounded">
                  #8 Best with UV Disinfection
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Pelican PC1000 Carbon Series + UV
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Filter Type</p>
                    <p className="font-semibold text-gray-900">
                      4-Stage Carbon + UV
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Flow Rate</p>
                    <p className="font-semibold text-gray-900">10 GPM</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">UV Disinfection</p>
                    <p className="font-semibold text-gray-900">
                      99.9% bacteria/virus kill
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price Range</p>
                    <p className="font-semibold text-gray-900">$1,500-$2,200</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Best For</p>
                    <p className="font-semibold text-gray-900">
                      Well water, bacteria concerns
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Annual Maintenance</p>
                    <p className="font-semibold text-gray-900">
                      ~$80-$150 (UV bulb + filters)
                    </p>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  For well water homes where bacterial contamination is a
                  concern, the Pelican PC1000 with UV add-on provides both
                  chemical filtration and biological disinfection. The UV light
                  kills 99.9% of bacteria, viruses, and cysts without adding
                  chemicals to your water.
                </p>
                <p>
                  The carbon filtration stage handles chlorine, VOCs, and
                  sediment, while the UV stage handles the microbial side. This
                  combination is especially valuable for New Jersey homes on
                  private wells where water quality can fluctuate seasonally.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Pros</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>+ UV kills bacteria and viruses</li>
                    <li>+ Chemical-free disinfection</li>
                    <li>+ Good carbon filtration included</li>
                    <li>+ Peace of mind for well water</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-2">Cons</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>- UV bulb needs annual replacement (~$50-$80)</li>
                    <li>- Requires electricity</li>
                    <li>- UV won&apos;t work if water is turbid (pre-filter needed)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* System 9: Home Master */}
            <section id="best-heavy-metals" className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-indigo-700 text-white text-sm font-bold px-3 py-1 rounded">
                  #9 Best for Heavy Metals
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Home Master HMF3SDGFEC Whole House Water Filter
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Filter Type</p>
                    <p className="font-semibold text-gray-900">
                      3-Stage Iron + Carbon
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Flow Rate</p>
                    <p className="font-semibold text-gray-900">10-15 GPM</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Filter Capacity</p>
                    <p className="font-semibold text-gray-900">
                      100,000 gallons
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price Range</p>
                    <p className="font-semibold text-gray-900">$600-$900</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Best For</p>
                    <p className="font-semibold text-gray-900">
                      Iron, manganese, lead, chemicals
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Annual Maintenance</p>
                    <p className="font-semibold text-gray-900">~$150-$250</p>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The Home Master HMF3SDGFEC is built specifically for well
                  water with iron, manganese, and chemical contamination. Its
                  3-stage design uses multi-gradient sediment filtration, iron
                  and manganese reduction media, and coconut shell carbon for
                  broad-spectrum filtration.
                </p>
                <p>
                  The oversized filter housings (25&quot; x 4.5&quot;) are
                  larger than standard big blue filters, which means longer
                  filter life and better flow rates. It handles up to 3 PPM iron
                  and 1 PPM manganese.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Pros</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>+ Handles iron, manganese, and chemicals</li>
                    <li>+ Oversized filters last longer</li>
                    <li>+ Good flow rate</li>
                    <li>+ Mid-range price</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-2">Cons</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>- Filter replacements needed annually</li>
                    <li>- Not for high-iron well water (3+ PPM)</li>
                    <li>- Proprietary filter sizes (brand-specific replacements)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* System 10: Rusco Spin-Down */}
            <section id="best-sediment" className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-amber-700 text-white text-sm font-bold px-3 py-1 rounded">
                  #10 Best Sediment Pre-Filter
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Rusco Spin-Down Sediment Filter
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Filter Type</p>
                    <p className="font-semibold text-gray-900">
                      Spin-Down Sediment
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Flow Rate</p>
                    <p className="font-semibold text-gray-900">25+ GPM</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Removes</p>
                    <p className="font-semibold text-gray-900">
                      Sand, silt, rust, debris
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price Range</p>
                    <p className="font-semibold text-gray-900">$40-$80</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Best For</p>
                    <p className="font-semibold text-gray-900">
                      Pre-filter for any system
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Annual Maintenance</p>
                    <p className="font-semibold text-gray-900">
                      ~$0 (reusable screen)
                    </p>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Every whole house filtration system should have a sediment
                  pre-filter, and the Rusco spin-down is the best in the
                  business. It uses a reusable polyester screen to trap sand,
                  silt, rust, and debris before they reach your main filter
                  &mdash; extending the life of your more expensive filtration
                  media.
                </p>
                <p>
                  The spin-down design means you simply open a valve at the
                  bottom to flush captured sediment. No cartridges to buy, no
                  tools needed. We install these as the first stage in nearly
                  every whole house filtration system we set up.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Pros</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>+ Extremely affordable</li>
                    <li>+ Reusable (no replacement cartridges)</li>
                    <li>+ Zero pressure drop</li>
                    <li>+ Easy to flush and maintain</li>
                    <li>+ Protects your main filter investment</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-2">Cons</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>- Only removes sediment (no chemical filtration)</li>
                    <li>- Must be paired with other filters</li>
                    <li>- Needs occasional manual flushing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* System 11: FilterSmart */}
            <section id="best-softener-combo" className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-cyan-700 text-white text-sm font-bold px-3 py-1 rounded">
                  #11 Best Salt-Free Combo
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                FilterSmart FS1000 Whole House Filter + Salt-Free Softener
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Filter Type</p>
                    <p className="font-semibold text-gray-900">
                      Coconut Carbon + TAC Conditioning
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Flow Rate</p>
                    <p className="font-semibold text-gray-900">12 GPM</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Filter Capacity</p>
                    <p className="font-semibold text-gray-900">
                      1,000,000 gallons
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Price Range</p>
                    <p className="font-semibold text-gray-900">$1,500-$2,200</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Best For</p>
                    <p className="font-semibold text-gray-900">
                      Salt-free softening + filtration
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Annual Maintenance</p>
                    <p className="font-semibold text-gray-900">~$0-$40</p>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The FilterSmart FS1000 combines whole house carbon filtration
                  with TAC (Template Assisted Crystallization) salt-free water
                  conditioning. It&apos;s the lowest-maintenance combo system on
                  our list &mdash; no salt to add, no backwashing, no electricity,
                  and filter media that lasts 5-10 years.
                </p>
                <p>
                  The coconut shell carbon removes chlorine, chloramine, VOCs,
                  and chemicals, while the TAC media prevents scale from forming
                  in your pipes and appliances. It&apos;s a true set-and-forget
                  system for homeowners who want clean, conditioned water
                  without ongoing maintenance.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Pros</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>+ Ultra-low maintenance</li>
                    <li>+ No salt, no electricity, no drain</li>
                    <li>+ Filter + conditioning in one</li>
                    <li>+ High flow rate (12 GPM)</li>
                    <li>+ Lifetime warranty</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-2">Cons</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>- Salt-free conditioning less effective than true softening</li>
                    <li>- Not ideal for very hard water (20+ GPG)</li>
                    <li>- Two-tank system takes floor space</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section id="comparison" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Whole House Water Filter Comparison Chart
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left py-3 px-3 font-semibold">System</th>
                      <th className="text-center py-3 px-3 font-semibold">Price</th>
                      <th className="text-center py-3 px-3 font-semibold">GPM</th>
                      <th className="text-center py-3 px-3 font-semibold">Best For</th>
                      <th className="text-center py-3 px-3 font-semibold">Annual Cost</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b bg-red-50">
                      <td className="py-3 px-3 font-semibold">SpringWell CF1</td>
                      <td className="text-center py-3 px-3">$900-$1,200</td>
                      <td className="text-center py-3 px-3">9+</td>
                      <td className="text-center py-3 px-3">City water, chlorine</td>
                      <td className="text-center py-3 px-3">$40-$60</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-semibold">iSpring WGB32B</td>
                      <td className="text-center py-3 px-3">$350-$500</td>
                      <td className="text-center py-3 px-3">15</td>
                      <td className="text-center py-3 px-3">Budget, city water</td>
                      <td className="text-center py-3 px-3">$80-$120</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-semibold">SoftPro IronMaster</td>
                      <td className="text-center py-3 px-3">$1,200-$1,800</td>
                      <td className="text-center py-3 px-3">12</td>
                      <td className="text-center py-3 px-3">Well water, iron</td>
                      <td className="text-center py-3 px-3">~$0</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-semibold">SpringWell WS1</td>
                      <td className="text-center py-3 px-3">$2,500-$3,500</td>
                      <td className="text-center py-3 px-3">12</td>
                      <td className="text-center py-3 px-3">Hard water combo</td>
                      <td className="text-center py-3 px-3">$100-$200</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-semibold">Aquasana Rhino</td>
                      <td className="text-center py-3 px-3">$800-$1,200</td>
                      <td className="text-center py-3 px-3">7</td>
                      <td className="text-center py-3 px-3">Chloramine</td>
                      <td className="text-center py-3 px-3">$50-$80</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-semibold">AquaOx</td>
                      <td className="text-center py-3 px-3">$2,800-$3,500</td>
                      <td className="text-center py-3 px-3">8-12</td>
                      <td className="text-center py-3 px-3">PFAS removal</td>
                      <td className="text-center py-3 px-3">~$0</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-semibold">Pentair PSE2000</td>
                      <td className="text-center py-3 px-3">$1,800-$2,500</td>
                      <td className="text-center py-3 px-3">10</td>
                      <td className="text-center py-3 px-3">Compact, salt-free</td>
                      <td className="text-center py-3 px-3">$60-$100</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-semibold">Pelican PC1000+UV</td>
                      <td className="text-center py-3 px-3">$1,500-$2,200</td>
                      <td className="text-center py-3 px-3">10</td>
                      <td className="text-center py-3 px-3">UV + filtration</td>
                      <td className="text-center py-3 px-3">$80-$150</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-semibold">Home Master HMF3</td>
                      <td className="text-center py-3 px-3">$600-$900</td>
                      <td className="text-center py-3 px-3">10-15</td>
                      <td className="text-center py-3 px-3">Heavy metals</td>
                      <td className="text-center py-3 px-3">$150-$250</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-semibold">Rusco Spin-Down</td>
                      <td className="text-center py-3 px-3">$40-$80</td>
                      <td className="text-center py-3 px-3">25+</td>
                      <td className="text-center py-3 px-3">Sediment pre-filter</td>
                      <td className="text-center py-3 px-3">~$0</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold">FilterSmart FS1000</td>
                      <td className="text-center py-3 px-3">$1,500-$2,200</td>
                      <td className="text-center py-3 px-3">12</td>
                      <td className="text-center py-3 px-3">Salt-free combo</td>
                      <td className="text-center py-3 px-3">$0-$40</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Buying Guide */}
            <section id="buying-guide" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                How to Choose the Right Whole House Water Filter
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Step 1: Test Your Water
                  </h3>
                  <p className="text-gray-700">
                    Before buying any system, get a water test. Municipal water
                    users can check their utility&apos;s annual Consumer
                    Confidence Report. Well water users should get a
                    comprehensive lab test ($100-$300) covering bacteria,
                    minerals, heavy metals, and contaminants. You can&apos;t fix
                    what you don&apos;t measure.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Step 2: Identify Your Primary Concern
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm mt-3">
                    <div className="bg-white rounded-lg p-3 border">
                      <p className="font-semibold text-gray-900">Chlorine taste/smell</p>
                      <p className="text-gray-600">Carbon filter (SpringWell CF1, iSpring WGB32B)</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border">
                      <p className="font-semibold text-gray-900">Hard water / scale</p>
                      <p className="text-gray-600">Softener combo (SpringWell WS1, FilterSmart FS1000)</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border">
                      <p className="font-semibold text-gray-900">Iron / rust staining</p>
                      <p className="text-gray-600">Iron filter (SoftPro IronMaster, Home Master HMF3)</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border">
                      <p className="font-semibold text-gray-900">PFAS / forever chemicals</p>
                      <p className="text-gray-600">Advanced filtration (AquaOx, SpringWell CF1)</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border">
                      <p className="font-semibold text-gray-900">Bacteria / well water safety</p>
                      <p className="text-gray-600">UV system (Pelican PC1000 + UV)</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border">
                      <p className="font-semibold text-gray-900">Sediment / sand / silt</p>
                      <p className="text-gray-600">Spin-down pre-filter (Rusco)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Step 3: Size for Your Home
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Choose a system rated for your home&apos;s peak flow rate:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>
                      <strong>1-2 bathrooms:</strong> 7-10 GPM is sufficient
                    </li>
                    <li>
                      <strong>2-3 bathrooms:</strong> 10-12 GPM recommended
                    </li>
                    <li>
                      <strong>3-4+ bathrooms:</strong> 12-15 GPM or higher
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Step 4: Consider Long-Term Costs
                  </h3>
                  <p className="text-gray-700">
                    A $500 filter with $200/year in replacements costs $1,500
                    over 5 years. A $1,200 filter with $50/year maintenance
                    costs $1,450 over 5 years. Always calculate the 5-year
                    total cost &mdash; the cheapest system upfront often isn&apos;t
                    the cheapest to own.
                  </p>
                </div>
              </div>
            </section>

            {/* NJ Water Quality */}
            <section id="nj-water" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                New Jersey Water Quality: What You Need to Know
              </h2>
              <p className="text-gray-700 mb-4">
                New Jersey has some of the strictest water quality standards in
                the country, but &quot;meets standards&quot; doesn&apos;t mean
                &quot;ideal.&quot; Here&apos;s what Middlesex County homeowners
                should know:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Chlorine &amp; Chloramine
                  </h3>
                  <p className="text-gray-700">
                    Most Middlesex County municipal water uses chlorine or
                    chloramine for disinfection. While safe at regulated levels,
                    these chemicals cause noticeable taste and odor, dry out
                    skin and hair, and can form disinfection byproducts (DBPs).
                    A carbon filter addresses this effectively.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Hard Water (7-10 GPG)
                  </h3>
                  <p className="text-gray-700">
                    Middlesex County water is moderately hard at 7-10 grains per
                    gallon. This level causes visible scale on faucets and
                    showerheads, reduces water heater efficiency, and shortens
                    appliance lifespan. A water softener or conditioning system
                    addresses hard water specifically.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">
                    PFAS Contamination
                  </h3>
                  <p className="text-gray-700">
                    Several New Jersey water systems have detected PFAS (per-
                    and polyfluoroalkyl substances). NJ was one of the first
                    states to set PFAS limits. If you&apos;re concerned about
                    PFAS, look for activated carbon block or catalytic carbon
                    systems. Reverse osmosis under your kitchen sink provides
                    additional drinking water protection.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Well Water Considerations
                  </h3>
                  <p className="text-gray-700">
                    Some Middlesex County homes (especially in rural areas of
                    Monroe Township and South Brunswick) are on private wells.
                    Well water quality varies significantly and can include iron,
                    manganese, bacteria, nitrates, and naturally occurring
                    contaminants. Annual testing is essential for well water
                    homes.
                  </p>
                </div>
              </div>
            </section>

            {/* Installation */}
            <section id="installation" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Installation: DIY vs Professional
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">
                    DIY-Friendly Systems
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>
                      <strong>iSpring WGB32B</strong> &mdash; compression
                      fittings, basic plumbing skills
                    </li>
                    <li>
                      <strong>Rusco Spin-Down</strong> &mdash; simple inline
                      install
                    </li>
                    <li>
                      <strong>Home Master HMF3</strong> &mdash; standard
                      plumbing connections
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Typical DIY install time: 2-4 hours. You&apos;ll need a
                    pipe cutter, Teflon tape, and basic tools.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">
                    Professional Installation Recommended
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>
                      <strong>SpringWell WS1</strong> &mdash; dual tank, drain
                      connection needed
                    </li>
                    <li>
                      <strong>SoftPro IronMaster</strong> &mdash; electrical
                      and drain required
                    </li>
                    <li>
                      <strong>AquaOx</strong> &mdash; heavy system, complex
                      install
                    </li>
                    <li>
                      <strong>Any system on older homes</strong> &mdash;
                      galvanized pipes may need updating
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Professional installation: $300-$800 depending on
                    complexity. Includes proper bypass valve and pressure
                    testing.
                  </p>
                </div>
              </div>
            </section>

            {/* Maintenance */}
            <section id="maintenance" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Maintenance and Filter Replacement Schedule
              </h2>
              <p className="text-gray-700 mb-4">
                Regular maintenance is the key to a whole house water filter
                performing at its best. Here&apos;s what to expect:
              </p>
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold">
                        Component
                      </th>
                      <th className="text-center py-3 px-4 font-semibold">
                        Replacement Frequency
                      </th>
                      <th className="text-center py-3 px-4 font-semibold">
                        Typical Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b">
                      <td className="py-3 px-4">Sediment pre-filter</td>
                      <td className="text-center py-3 px-4">Every 3-6 months</td>
                      <td className="text-center py-3 px-4">$10-$30</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Carbon filter cartridge</td>
                      <td className="text-center py-3 px-4">Every 6-12 months</td>
                      <td className="text-center py-3 px-4">$50-$150</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Carbon tank media</td>
                      <td className="text-center py-3 px-4">Every 5-10 years</td>
                      <td className="text-center py-3 px-4">$200-$500</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">UV bulb</td>
                      <td className="text-center py-3 px-4">Annually</td>
                      <td className="text-center py-3 px-4">$50-$80</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Water softener salt</td>
                      <td className="text-center py-3 px-4">Every 4-8 weeks</td>
                      <td className="text-center py-3 px-4">$5-$10 per bag</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Softener resin</td>
                      <td className="text-center py-3 px-4">Every 10-15 years</td>
                      <td className="text-center py-3 px-4">$100-$300</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Pro tip:</strong> Set calendar reminders for filter
                  replacements. A clogged filter doesn&apos;t just stop working
                  &mdash; it can actually reduce water pressure and become a
                  breeding ground for bacteria.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">
                      What is the best whole house water filtration system?
                    </h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">
                      The best system depends on your water quality. For city
                      water with chlorine, the SpringWell CF1 is our top pick.
                      For well water with iron, the SoftPro IronMaster excels.
                      For hard water, the SpringWell WS1 filter + softener
                      combo provides the most complete solution. Always test
                      your water first to identify your specific needs.
                    </p>
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">
                      How much does a whole house water filtration system cost?
                    </h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">
                      Equipment costs range from $300 for basic filters to
                      $3,500+ for premium systems. Professional installation
                      adds $300-$800. Budget options like the iSpring WGB32B
                      start under $500 total. Mid-range systems run
                      $1,000-$2,000. Premium combos with softening cost
                      $2,500-$4,000+ installed.
                    </p>
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">
                      Do whole house water filters reduce water pressure?
                    </h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">
                      A properly sized whole house water filter causes minimal
                      pressure drop (1-5 PSI). The key is choosing a system
                      rated for your home&apos;s flow rate. Undersized filters
                      or clogged cartridges will reduce pressure. Replace
                      filters on schedule and size for at least 10 GPM for a
                      typical 2-3 bathroom home.
                    </p>
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">
                      How long do whole house water filters last?
                    </h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">
                      The system/housing lasts 10-20+ years. Filter
                      replacement intervals vary: sediment pre-filters every
                      3-6 months, carbon cartridges every 6-12 months, and
                      tank media every 5-10 years. Self-backwashing systems
                      like the SoftPro IronMaster and AquaOx have the longest
                      intervals since they clean themselves.
                    </p>
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">
                      What is the best whole house water filter for well water?
                    </h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">
                      For well water, the SoftPro IronMaster handles iron,
                      manganese, and hydrogen sulfide. If bacterial
                      contamination is a concern, add a UV system like the
                      Pelican PC1000. For well water with multiple issues, a
                      multi-stage approach (sediment pre-filter + iron filter +
                      carbon filter + UV) provides the broadest protection.
                    </p>
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">
                      Is a whole house water filter worth the investment?
                    </h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">
                      For most homeowners, yes. A family spending $50/month on
                      bottled water saves $600/year immediately. Add extended
                      appliance life ($100-$200/year), reduced plumbing repairs,
                      and less soap/detergent usage, and the typical payback
                      period is 2-4 years. After that, it&apos;s pure savings.
                    </p>
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">
                      Do I need a water softener or a water filter?
                    </h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">
                      They solve different problems. Water filters remove
                      contaminants (chlorine, chemicals, sediment). Water
                      softeners remove hardness minerals (calcium, magnesium)
                      that cause scale. If you have hard water AND want
                      cleaner water, you need both. Combo systems like the
                      SpringWell WS1 or FilterSmart FS1000 handle both in one.
                    </p>
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">
                      Can I install a whole house water filter myself?
                    </h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">
                      Simpler systems (iSpring, Rusco, Home Master) can be
                      DIY-installed with basic plumbing skills and a few hours.
                      Larger systems requiring electrical connections, drain
                      lines, or modifications to older plumbing should be
                      professionally installed to ensure proper function and
                      avoid leaks.
                    </p>
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">
                      What contaminants do whole house water filters remove?
                    </h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">
                      Depending on the system type: chlorine, chloramine,
                      sediment, rust, PFAS/PFOA, VOCs, lead, mercury,
                      pesticides, herbicides, iron, manganese, hydrogen sulfide,
                      and some bacteria (with UV). No single filter removes
                      everything &mdash; multi-stage systems provide the
                      broadest protection. Check NSF certifications for verified
                      removal rates.
                    </p>
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">
                      How often should I replace whole house water filter
                      cartridges?
                    </h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">
                      Sediment pre-filters: every 3-6 months. Carbon block
                      cartridges: every 6-12 months. Carbon tank media: every
                      5-10 years. UV bulbs: annually. Follow the
                      manufacturer&apos;s schedule &mdash; a clogged filter
                      reduces pressure and can harbor bacteria. Signs it&apos;s
                      time: reduced water pressure, change in taste, or visible
                      discoloration.
                    </p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Need Help Choosing or Installing a Water Filter?
              </h2>
              <p className="text-red-100 mb-6">
                We offer free water quality consultations throughout Middlesex
                County. We&apos;ll test your water, recommend the right system
                for your home, and provide professional installation with a
                satisfaction guarantee.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={BUSINESS_INFO.phoneLink}
                  className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link
                  href="/services/water-filtration-system"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
                >
                  Water Filtration Services
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link
                  href="/blog/whole-house-water-filter-worth-it"
                  className="group"
                >
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">
                      Is a Whole House Water Filter Worth It?
                    </h3>
                    <p className="text-sm text-gray-600">
                      Complete cost-benefit analysis for NJ homeowners.
                    </p>
                  </div>
                </Link>
                <Link
                  href="/blog/how-to-descale-tankless-water-heater"
                  className="group"
                >
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">
                      Tankless Water Heater Maintenance
                    </h3>
                    <p className="text-sm text-gray-600">
                      Hard water affects your water heater too.
                    </p>
                  </div>
                </Link>
                <Link
                  href="/blog/why-is-water-pressure-low"
                  className="group"
                >
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">
                      Low Water Pressure Causes
                    </h3>
                    <p className="text-sm text-gray-600">
                      Scale buildup can restrict water flow.
                    </p>
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
