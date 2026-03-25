import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Hydro Jetting Drain Cleaning: Complete 2026 Guide to Sewer Jetting",
  description: "Learn about hydro jetting for drain and sewer line cleaning. Compare hydro jetting vs snaking, costs ($350-$600), PSI levels, and when you need high pressure drain cleaning.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/hydro-jetting-drain-cleaning-guide" },
  keywords: [
    "hydro jetting",
    "hydro jet drain cleaning",
    "hydro jetting sewer line",
    "water jetting",
    "hydro jetting cost",
    "hydro jetting near me",
    "sewer jetting",
    "hydro jet plumbing",
    "high pressure drain cleaning",
    "hydro jetting drain",
    "water jet sewer cleaning",
    "hydro jetting vs snaking",
    "drain jetting",
    "sewer line cleaning",
    "hydro jetting pipe cleaning",
  ],
  openGraph: {
    title: "Hydro Jetting Drain Cleaning: Complete 2026 Guide to Sewer Jetting",
    description: "Learn about hydro jetting for drain and sewer line cleaning. Compare costs, methods, and when high pressure drain cleaning is right for your NJ home.",
    type: "article",
    publishedTime: "2026-03-19T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function HydroJettingDrainCleaningGuide() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Hydro Jetting Drain Cleaning: Complete 2026 Guide to Sewer Jetting",
    description: "Learn about hydro jetting for drain and sewer line cleaning. Compare hydro jetting vs snaking, costs, PSI levels, and when you need high pressure drain cleaning in New Jersey.",
    image: "https://www.illyrianplumber.com/images/bathroom-vanity-sink-installation.jpg",
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
    datePublished: "2026-03-19T08:00:00.000Z",
    dateModified: "2026-03-19T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/hydro-jetting-drain-cleaning-guide",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does hydro jetting cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Residential hydro jetting typically costs $350-$600 in New Jersey. Commercial hydro jetting starts at $1,000 and can go higher depending on pipe diameter and severity of the blockage. The cost includes a sewer camera inspection before and after the jetting process.",
        },
      },
      {
        "@type": "Question",
        name: "Is hydro jetting better than snaking a drain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hydro jetting is more thorough than snaking because it cleans the entire pipe interior, removing grease, scale, and buildup. Snaking only punches a hole through the clog. For recurring blockages, grease buildup, or tree root intrusion, hydro jetting provides a longer-lasting solution.",
        },
      },
      {
        "@type": "Question",
        name: "Can hydro jetting damage pipes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hydro jetting is safe for most pipes in good condition, including PVC, cast iron, copper, and clay pipes. However, it can damage fragile, corroded, or already-compromised pipes. A professional plumber always performs a sewer camera inspection first to assess pipe condition before jetting.",
        },
      },
      {
        "@type": "Question",
        name: "How often should you hydro jet your sewer line?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most residential properties, hydro jetting every 18-24 months is recommended for preventive maintenance. Homes with mature trees near sewer lines or older pipes may benefit from annual jetting. Commercial kitchens and restaurants should schedule hydro jetting every 6-12 months due to heavy grease buildup.",
        },
      },
      {
        "@type": "Question",
        name: "What PSI is used for hydro jetting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional hydro jetting equipment operates between 3,000 and 8,000 PSI. Residential drain cleaning typically uses 3,000-4,000 PSI, while heavy-duty commercial work and severe blockages may require 7,000-8,000 PSI. The plumber adjusts the pressure based on pipe material, size, and the type of blockage.",
        },
      },
      {
        "@type": "Question",
        name: "Does hydro jetting remove tree roots from sewer lines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, hydro jetting can cut through and remove tree roots that have infiltrated sewer lines. The high-pressure water stream, often with specialized cutting nozzles, shears roots at the pipe wall. However, if roots have caused structural pipe damage, sewer line repair or trenchless pipe lining may also be needed.",
        },
      },
      {
        "@type": "Question",
        name: "How long does hydro jetting take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical residential hydro jetting session takes 1-2 hours, including the initial camera inspection, the jetting process, and the post-cleaning camera verification. More severe blockages or longer sewer lines may take 2-3 hours. Commercial jobs can take half a day or longer depending on the scope.",
        },
      },
      {
        "@type": "Question",
        name: "Is hydro jetting worth the cost compared to DIY drain cleaners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hydro jetting is significantly more effective than chemical drain cleaners, which only dissolve a small portion of buildup and can damage pipes over time. Chemical cleaners are corrosive and harmful to the environment. Hydro jetting uses only water, cleans the full pipe diameter, and provides results that last months or years rather than days or weeks.",
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
                <time dateTime="2026-03-19">March 19, 2026</time>
                <span>22 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Hydro Jetting Drain Cleaning: Complete 2026 Guide to High Pressure Sewer Line Cleaning
              </h1>
              <p className="text-xl text-gray-300">
                Everything you need to know about hydro jetting, including how it works, costs, when to choose it over snaking, and why it is the most effective drain cleaning method available.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-03-19" updateDate="2026-03-25" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 mb-6">
                <p className="text-sm text-blue-900 font-medium mb-1">Informational Guide</p>
                <p className="text-sm text-blue-800">Please note: Illyrian Plumber does not currently offer hydro jetting, drain cleaning, snaking, or sewer lining services. This article is provided as an educational resource to help homeowners understand their options. For drain and sewer cleaning services, we recommend contacting a specialized contractor in your area.</p>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                When stubborn drain clogs, grease buildup, or tree root intrusion keep coming back, sewer line repair and cleaning through hydro jetting is the most powerful solution available to homeowners and businesses in New Jersey. Unlike basic snaking that punches a hole through the clog, hydro jetting uses high pressure water streams between 3,000 and 8,000 PSI to scour the entire interior of your drain and sewer pipes, restoring them to near-original condition. If you have been dealing with recurring sewer backups, slow drains, or foul odors, this comprehensive guide covers everything about hydro jet drain cleaning, from how it works and what it costs to when it makes more sense than traditional drain snaking. For homeowners exploring non-invasive pipe restoration options, our <Link href="/blog/trenchless-sewer-repair-guide" className="text-red-700 hover:text-red-800 font-semibold">trenchless sewer repair guide</Link> is also a valuable companion resource.
              </p>
              <p className="text-gray-700">
                Hydro jetting has become the gold standard for professional drain and sewer line cleaning. Plumbers across Middlesex County rely on this technology daily because it delivers results that no other cleaning method can match. Whether you are dealing with a single clogged kitchen drain or need a full mainline sewer cleaning, understanding hydro jetting helps you make informed decisions about your plumbing system and avoid wasting money on temporary fixes that fail within weeks.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
              <ul className="space-y-2">
                <li><a href="#what-is-hydro-jetting" className="text-red-700 hover:text-red-800">What Is Hydro Jetting?</a></li>
                <li><a href="#how-hydro-jetting-works" className="text-red-700 hover:text-red-800">How Hydro Jetting Works (Step by Step)</a></li>
                <li><a href="#hydro-jetting-vs-snaking" className="text-red-700 hover:text-red-800">Hydro Jetting vs Snaking Comparison</a></li>
                <li><a href="#when-you-need-hydro-jetting" className="text-red-700 hover:text-red-800">When You Need Hydro Jetting</a></li>
                <li><a href="#hydro-jetting-cost" className="text-red-700 hover:text-red-800">Hydro Jetting Cost Breakdown</a></li>
                <li><a href="#benefits" className="text-red-700 hover:text-red-800">Benefits of Hydro Jetting</a></li>
                <li><a href="#safe-for-pipes" className="text-red-700 hover:text-red-800">Is Hydro Jetting Safe for All Pipes?</a></li>
                <li><a href="#how-often" className="text-red-700 hover:text-red-800">How Often Should You Hydro Jet?</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Middlesex County Sewer Challenges</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* What Is Hydro Jetting */}
            <section id="what-is-hydro-jetting" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Is Hydro Jetting?</h2>

              <p className="text-gray-700 mb-6">
                Hydro jetting is a professional drain cleaning method that uses highly pressurized water to clear blockages and clean the inside walls of plumbing pipes. A specialized nozzle attached to a high-pressure hose is inserted into the drain or sewer line cleanout, and water is blasted at pressures ranging from 3,000 to 8,000 PSI (pounds per square inch). The force of the water is strong enough to cut through tree roots, dissolve years of hardened grease, break apart mineral scale deposits, and flush away accumulated sludge and debris.
              </p>

              <p className="text-gray-700 mb-6">
                Unlike chemical drain cleaners that rely on corrosive agents, hydro jetting uses only water. This makes it an environmentally friendly cleaning method that does not introduce harmful substances into the sewer system or groundwater. The process is sometimes referred to as water jetting, sewer jetting, drain jetting, or high pressure drain cleaning, but they all describe the same professional-grade pipe cleaning technique.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding PSI Levels in Hydro Jetting</h3>

              <p className="text-gray-700 mb-4">
                Professional hydro jetting equipment is available in different pressure ratings, and experienced plumbers select the appropriate PSI level based on the pipe material, pipe diameter, and the type of obstruction being cleared. Using the wrong pressure can either fail to clear the blockage or potentially damage the pipe.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-3">Light-Duty: 3,000-4,000 PSI</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Standard residential drain cleaning</li>
                    <li>Grease and soap buildup removal</li>
                    <li>Sand and sediment flushing</li>
                    <li>PVC and newer pipe systems</li>
                    <li>Preventive maintenance jetting</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-3">Medium-Duty: 4,000-6,000 PSI</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Commercial kitchen drain lines</li>
                    <li>Heavy grease accumulation</li>
                    <li>Small tree root infiltration</li>
                    <li>Cast iron and clay pipe cleaning</li>
                    <li>Multi-unit residential buildings</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-3">Heavy-Duty: 6,000-8,000 PSI</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Severe tree root intrusion</li>
                    <li>Hardened mineral scale deposits</li>
                    <li>Municipal and industrial pipes</li>
                    <li>Large diameter sewer mains</li>
                    <li>Complete pipe restoration cleaning</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-3">Specialized Nozzles</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Forward-facing jets for blockages</li>
                    <li>Rear-facing jets for pipe wall cleaning</li>
                    <li>Rotating nozzles for root cutting</li>
                    <li>Chain-flail nozzles for heavy scale</li>
                    <li>Penetrating nozzles for solid clogs</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                The versatility of hydro jetting equipment is what makes it so effective. A skilled plumber can adjust the water pressure, select the right nozzle type, and control the cleaning speed to tackle virtually any drain or sewer line problem without damaging the pipes. This level of precision is something that mechanical snaking simply cannot offer.
              </p>

              <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/bathroom-vanity-sink-installation.jpg"
                  alt="Professional hydro jetting equipment used for sewer line cleaning"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 p-3 bg-gray-50">Professional hydro jetting uses specialized equipment to deliver high-pressure water for thorough drain and sewer line cleaning.</p>
              </div>
            </section>

            {/* How Hydro Jetting Works */}
            <section id="how-hydro-jetting-works" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How Hydro Jetting Works: Step-by-Step Process</h2>

              <p className="text-gray-700 mb-6">
                Professional hydro jetting is not something you simply turn on and hope for the best. It follows a methodical process that ensures the cleaning is effective and safe for your plumbing system. Here is exactly what happens during a professional hydro jetting service.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Sewer Camera Inspection</h3>
                      <p className="text-gray-700">Before any jetting begins, a licensed plumber inserts a waterproof camera into the drain or sewer line through the cleanout access point. This video inspection reveals the exact location and nature of the blockage, the condition of the pipe walls, and whether there is any existing damage that could be worsened by high-pressure water. The camera inspection is a critical safety step that prevents hydro jetting of pipes that are too fragile to withstand the pressure. It also helps the plumber choose the correct PSI level and nozzle type for the specific situation.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Equipment Setup and Access</h3>
                      <p className="text-gray-700">The plumber sets up the hydro jetting machine, which consists of a water tank, a high-pressure pump, a specialized hose rated for extreme pressures, and the appropriate cleaning nozzle. The hose is fed into the sewer line through the cleanout fitting, which is typically a capped pipe located outside your home near the foundation or in the basement. For residential systems, the plumber usually starts downstream (closer to the municipal sewer connection) and works back toward the house to ensure debris flows away from the property.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">High-Pressure Water Cleaning</h3>
                      <p className="text-gray-700">With the nozzle positioned in the pipe, the plumber activates the high-pressure pump. Water jets blast from the nozzle in multiple directions simultaneously. Forward-facing jets break through blockages and obstructions, while rear-facing jets scrub the pipe walls clean and propel the hose forward through the pipe. The water pressure pulverizes grease, sludge, mineral deposits, soap scum, and even tree roots. All the debris is flushed downstream into the municipal sewer system. The plumber carefully controls the hose speed, making multiple passes through problem areas to ensure thorough cleaning.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Post-Cleaning Camera Verification</h3>
                      <p className="text-gray-700">After the jetting is complete, the plumber runs the sewer camera through the pipe again. This second inspection confirms that the blockage has been fully cleared, verifies that the pipe walls are clean, and checks for any structural issues that may have been hidden under the buildup. If the camera reveals pipe damage such as cracks, offset joints, or bellied sections, the plumber can recommend appropriate repairs before problems worsen. This before-and-after documentation also gives you visual proof of the work performed.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Flow Testing and Recommendations</h3>
                      <p className="text-gray-700">The plumber runs water through the system to confirm proper flow has been restored. They will test multiple fixtures throughout the house to verify drainage speed and check for any remaining issues. Based on the camera inspection findings, they may recommend a maintenance schedule for future jetting, suggest repairs for any pipe damage discovered, or advise on preventive measures such as root barriers or grease traps to extend the time between cleanings.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Why Camera Inspection First Is Non-Negotiable</h4>
                <p className="text-gray-700">
                  Any plumber who offers to hydro jet your sewer line without first performing a camera inspection is cutting corners. Jetting a pipe that has existing cracks, collapsed sections, or severe corrosion can cause catastrophic failure. The camera inspection takes only 15-20 minutes but provides critical information that protects your plumbing system and ensures the jetting process is both safe and effective. Always ask your plumber to show you the camera footage before and after the cleaning.
                </p>
              </div>
            </section>

            {/* Hydro Jetting vs Snaking */}
            <section id="hydro-jetting-vs-snaking" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Hydro Jetting vs Snaking: Complete Comparison</h2>

              <p className="text-gray-700 mb-6">
                Drain snaking (also called augering or mechanical rodding) and hydro jetting are the two primary methods professional plumbers use to clear drain and sewer line clogs. Both have their place, but they work very differently and produce very different results. Understanding the distinction helps you make the right choice for your specific situation and avoid paying for a service that will not solve the underlying problem.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hydro Jetting vs Snaking Comparison Table</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-blue-200">
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Factor</th>
                        <th className="text-center py-3 px-2 font-semibold text-gray-900">Hydro Jetting</th>
                        <th className="text-center py-3 px-2 font-semibold text-gray-900">Drain Snaking</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">How It Works</td>
                        <td className="text-center py-3 px-2">High-pressure water (3,000-8,000 PSI)</td>
                        <td className="text-center py-3 px-2">Rotating metal cable with cutting head</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">Cleaning Effectiveness</td>
                        <td className="text-center py-3 px-2">Cleans entire pipe diameter (360 degrees)</td>
                        <td className="text-center py-3 px-2">Creates a hole through the clog only</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">Grease Removal</td>
                        <td className="text-center py-3 px-2">Excellent, removes all grease buildup</td>
                        <td className="text-center py-3 px-2">Poor, snake passes through grease</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">Tree Root Removal</td>
                        <td className="text-center py-3 px-2">Cuts and flushes roots completely</td>
                        <td className="text-center py-3 px-2">Trims roots but leaves remnants</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">Scale/Mineral Buildup</td>
                        <td className="text-center py-3 px-2">Blasts away mineral deposits</td>
                        <td className="text-center py-3 px-2">Cannot remove wall buildup</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">Residential Cost</td>
                        <td className="text-center py-3 px-2">$350-$600</td>
                        <td className="text-center py-3 px-2">$150-$300</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">Results Duration</td>
                        <td className="text-center py-3 px-2">1-2 years or more</td>
                        <td className="text-center py-3 px-2">Weeks to a few months</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">Preventive Use</td>
                        <td className="text-center py-3 px-2">Excellent for maintenance</td>
                        <td className="text-center py-3 px-2">Not effective for prevention</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">Eco-Friendly</td>
                        <td className="text-center py-3 px-2">Yes, uses water only</td>
                        <td className="text-center py-3 px-2">Yes, no chemicals</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 font-medium">Best For</td>
                        <td className="text-center py-3 px-2">Recurring clogs, grease, roots, maintenance</td>
                        <td className="text-center py-3 px-2">Simple one-time clogs, soft blockages</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">When to Choose Snaking</h3>

              <p className="text-gray-700 mb-4">
                Drain snaking remains a useful tool for certain situations. It is the right choice when you have a simple, one-time clog caused by something like a foreign object, a wad of paper towels, or a localized soft blockage. Snaking is also appropriate for fragile or damaged pipes that cannot withstand hydro jetting pressure. It costs less than hydro jetting and is often sufficient for minor clogs in newer plumbing systems. If your drain has never backed up before and the clog is an isolated incident, snaking is typically all you need.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">When to Choose Hydro Jetting</h3>

              <p className="text-gray-700 mb-6">
                Hydro jetting is the superior choice whenever the problem goes beyond a simple clog. If you have had the same drain snaked two or three times in the past year, the underlying buildup is the real problem, and only hydro jetting will address it. For grease-related blockages, tree root infiltration, mineral scale accumulation, or any situation where you want the pipe cleaned rather than just unclogged, hydro jetting delivers dramatically better and longer-lasting results. It is also the required preparation step before trenchless pipe lining, because the epoxy liner needs a clean pipe surface to bond properly.
              </p>
            </section>

            {/* When You Need Hydro Jetting */}
            <section id="when-you-need-hydro-jetting" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When You Need Hydro Jetting</h2>

              <p className="text-gray-700 mb-6">
                Not every drain problem requires hydro jetting, but there are several clear signs that this level of cleaning is necessary. Recognizing these indicators early can save you from repeated service calls, property damage from sewer backups, and the frustration of clogs that keep coming back despite multiple snaking attempts.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🍳</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Grease Buildup in Kitchen Drains</h3>
                      <p className="text-gray-700">Cooking grease, fats, and oils are the number one cause of residential drain clogs. Even when you avoid pouring grease directly down the drain, traces of fat from dishwashing, food particles, and soap residue combine inside the pipes to create a thick, sticky coating that narrows the pipe diameter over time. A drain snake passes right through grease without removing it. Hydro jetting blasts grease off the pipe walls completely, restoring full flow capacity. Kitchen drains in older East Brunswick and Edison homes are especially prone to heavy grease accumulation due to decades of use and narrower pipe diameters.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌳</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Tree Root Intrusion</h3>
                      <p className="text-gray-700">Tree roots are naturally drawn to sewer lines because the pipes contain water and nutrients. Roots enter through tiny cracks, loose joints, or deteriorated pipe connections and grow inside the pipe, catching debris and eventually causing complete blockages. Snaking trims roots but leaves the root mass attached to the pipe wall. Hydro jetting with specialized root-cutting nozzles shears roots flush with the pipe wall and flushes all the debris downstream. In neighborhoods throughout Middlesex County where mature trees line the streets, particularly in Monroe Township, Old Bridge, and South Brunswick, tree root intrusion is one of the most common sewer problems we address.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Recurring Clogs and Slow Drains</h3>
                      <p className="text-gray-700">If you find yourself calling a plumber every few months for the same drain problem, snaking is only providing a temporary fix. Recurring clogs are a clear sign that there is significant buildup inside the pipe that snaking cannot reach. The snake creates a channel through the blockage, but the buildup on the pipe walls quickly narrows the opening again. Hydro jetting removes the buildup entirely, and many homeowners find that a single jetting session eliminates years of recurring drain issues. We typically recommend hydro jetting for any drain that has been snaked more than twice in a 12-month period.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Pre-Lining and Pre-Repair Preparation</h3>
                      <p className="text-gray-700">Trenchless sewer repair methods such as cured-in-place pipe (CIPP) lining require the existing pipe to be thoroughly cleaned before the liner can be installed. The epoxy resin must bond directly to the pipe wall, and any remaining grease, roots, or debris will prevent proper adhesion and cause the liner to fail. Hydro jetting is the standard preparation step before any pipe lining procedure. If your plumber has recommended trenchless sewer repair, hydro jetting will be part of the process. This is also true before applying spot repair patches or before connecting new pipe sections to existing lines.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Buying or Selling a Home</h3>
                      <p className="text-gray-700">Real estate transactions in New Jersey often involve sewer line inspections. If a camera inspection reveals buildup inside the sewer line, hydro jetting before the sale provides peace of mind for both buyer and seller. For buyers, it ensures you are moving into a home with clean, fully functional drain lines. For sellers, it can prevent deal-breaking surprises during the inspection period. Hydro jetting before listing your Middlesex County home can also be used as a selling point, demonstrating proactive maintenance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Mid-Content CTA */}
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

            {/* Service Card - Plumbing Services */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-14 h-14 bg-red-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Plumbing Services</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    If hydro jetting reveals structural damage during the camera inspection, a licensed plumber can help. Illyrian Plumber offers water leak detection, repiping, gas line services, and other plumbing repairs across Middlesex County.
                  </p>
                  <Link href="/services" className="inline-flex items-center gap-2 text-red-700 font-semibold hover:text-red-800 transition text-sm">
                    View Our Services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Hydro Jetting Cost */}
            <section id="hydro-jetting-cost" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Hydro Jetting Cost Breakdown</h2>

              <p className="text-gray-700 mb-6">
                One of the most common questions homeowners ask is &quot;how much does hydro jetting cost?&quot; The answer depends on several factors including the type of property, the severity and location of the blockage, pipe accessibility, and the length of pipe that needs to be cleaned. Here is a detailed breakdown of what you can expect to pay in New Jersey.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Residential Hydro Jetting</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>Standard drain cleaning</span>
                      <span className="font-semibold">$350-$450</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Main sewer line cleaning</span>
                      <span className="font-semibold">$400-$600</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tree root removal</span>
                      <span className="font-semibold">$450-$600</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Camera inspection (included)</span>
                      <span className="font-semibold">$0</span>
                    </li>
                    <li className="flex justify-between border-t border-blue-200 pt-3 mt-3">
                      <span className="font-bold">Typical Range</span>
                      <span className="font-bold text-blue-700">$350-$600</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Commercial Hydro Jetting</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>Restaurant kitchen lines</span>
                      <span className="font-semibold">$500-$1,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Multi-unit building main</span>
                      <span className="font-semibold">$800-$1,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Commercial sewer main</span>
                      <span className="font-semibold">$1,000-$2,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Industrial/large diameter</span>
                      <span className="font-semibold">$1,500-$3,000+</span>
                    </li>
                    <li className="flex justify-between border-t border-orange-200 pt-3 mt-3">
                      <span className="font-bold">Typical Range</span>
                      <span className="font-bold text-orange-700">$1,000+</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Factors That Affect Hydro Jetting Cost</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Severity of Blockage</h4>
                  <p className="text-gray-700">A partial blockage with soft buildup costs less to clear than a completely clogged line with hardened grease, mineral deposits, or thick tree root masses. More severe blockages require more time, higher pressure settings, and sometimes multiple passes with different nozzle types. A simple maintenance cleaning on a line with light buildup is on the lower end of the price range, while a severely blocked main sewer line with root intrusion will be at the higher end.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Pipe Length and Diameter</h4>
                  <p className="text-gray-700">Longer sewer runs and larger pipe diameters require more time and water volume. A typical residential sewer line runs 50-100 feet from the house to the municipal connection. Homes at the end of long driveways or on large lots may have 150+ feet of sewer pipe. Each additional 50 feet of pipe adds to the overall cost because of the additional time and equipment wear involved.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Cleanout Accessibility</h4>
                  <p className="text-gray-700">Homes with easily accessible cleanout fittings at ground level allow for straightforward equipment setup. If the cleanout is buried, located in a tight crawl space, or does not exist at all, the plumber may need to create a new access point. Installing a new cleanout typically adds $200-$500 to the total cost but is a worthwhile investment for future maintenance access. Many older Middlesex County homes built before the 1970s may not have exterior cleanouts.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Emergency vs Scheduled Service</h4>
                  <p className="text-gray-700">Scheduling hydro jetting as a planned maintenance service is more cost-effective than calling for emergency service during a sewer backup. Emergency calls on weekends, holidays, or after hours may include additional service charges. We always recommend proactive jetting schedules to avoid emergency situations and the higher costs associated with them.</p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Hydro Jetting vs Repeated Snaking: The True Cost Comparison</h4>
                <p className="text-gray-700">
                  While a single snaking session costs $150-$300, many homeowners end up snaking the same drain three to four times per year, spending $450-$1,200 annually on a problem that never gets fully resolved. One hydro jetting session at $350-$600 typically eliminates the problem for one to two years or longer. When you compare the annual cost of repeated snaking versus hydro jetting every 18-24 months, hydro jetting is often the more economical choice. Factor in the time, inconvenience, and potential water damage from recurring backups, and hydro jetting becomes the clear winner for persistent drain problems.
                </p>
              </div>
            </section>

            {/* Benefits of Hydro Jetting */}
            <section id="benefits" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Benefits of Hydro Jetting</h2>

              <p className="text-gray-700 mb-6">
                Hydro jetting offers advantages that no other drain cleaning method can match. Here are the key benefits that make it the preferred cleaning method for professional plumbers and informed homeowners across New Jersey.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Thorough, Complete Cleaning</h3>
                  <p className="text-gray-700 text-sm">
                    Hydro jetting cleans the entire circumference of the pipe interior, not just a narrow channel through the center. The high-pressure water removes every trace of grease, sludge, mineral scale, biofilm, and debris from the pipe walls. After jetting, the pipe interior is restored to near-original condition with the full pipe diameter available for flow. This level of cleaning is impossible with snaking, chemical treatments, or any other method. Pipe walls that were coated with years of buildup are left smooth and clean, dramatically improving drainage speed and capacity.
                  </p>
                </div>
                <div className="bg-white border rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Long-Lasting Preventive Maintenance</h3>
                  <p className="text-gray-700 text-sm">
                    Because hydro jetting removes buildup completely rather than just pushing through it, the results last significantly longer than any alternative. A residential sewer line that gets hydro jetted will typically remain clean and flowing freely for 18 months to several years, depending on usage patterns and environmental factors. Regular preventive jetting on a recommended schedule keeps your drains flowing at peak capacity and prevents emergency backups. This proactive approach saves homeowners money compared to reactive snaking calls after a backup has already occurred.
                  </p>
                </div>
                <div className="bg-white border rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Environmentally Friendly</h3>
                  <p className="text-gray-700 text-sm">
                    Hydro jetting uses only water to clean your drains and sewer lines. There are no harsh chemicals, no caustic agents, and no toxic substances introduced into the plumbing system or the municipal sewer network. Chemical drain cleaners contain sodium hydroxide or sulfuric acid that can corrode pipe walls, damage septic systems, contaminate groundwater, and harm aquatic ecosystems. Water jetting achieves far better results than any chemical product while being completely safe for the environment. This is particularly important in Middlesex County where many communities rely on well water and the Raritan River watershed serves as a drinking water source.
                  </p>
                </div>
                <div className="bg-white border rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">No Chemical Damage to Pipes</h3>
                  <p className="text-gray-700 text-sm">
                    Chemical drain cleaners generate heat and caustic reactions inside your pipes. Over time, repeated use of chemical cleaners weakens pipe joints, accelerates corrosion in metal pipes, and can soften PVC connections. Hydro jetting avoids all of these risks because water at controlled pressure does not chemically alter pipe materials. In fact, regular hydro jetting can extend the life of your pipes by removing the corrosive buildup that accelerates deterioration. This is especially important for the cast iron and clay pipes still common in many Middlesex County homes built in the 1950s through 1970s.
                  </p>
                </div>
                <div className="bg-white border rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Versatile for All Pipe Sizes</h3>
                  <p className="text-gray-700 text-sm">
                    Professional hydro jetting equipment can be configured for pipes ranging from 1.5-inch interior drains to 36-inch commercial sewer mains. Different nozzle sizes, hose diameters, and pressure settings allow the plumber to customize the cleaning approach for any pipe system. Whether it is a 2-inch kitchen drain line, a 4-inch residential sewer lateral, or a 12-inch commercial main, hydro jetting delivers effective cleaning at the appropriate scale. This versatility means one service call can address multiple drain issues throughout your property.
                  </p>
                </div>
                <div className="bg-white border rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Eliminates Bacteria and Odors</h3>
                  <p className="text-gray-700 text-sm">
                    The high-pressure water stream does more than clear blockages. It also removes the biofilm layer that harbors bacteria inside drain pipes. This biofilm is what causes persistent drain odors that no amount of baking soda, vinegar, or air freshener can eliminate. By stripping the pipe walls clean, hydro jetting eliminates the source of bad smells rather than just masking them. Many homeowners are surprised by how much drain odors improve after a thorough jetting session, especially in bathrooms and kitchens where biofilm accumulation is heaviest.
                  </p>
                </div>
              </div>
            </section>

            {/* Mid-Content CTA - Red */}
            <div className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Need Help With Your Plumbing?</h2>
              <p className="text-red-100 mb-6">
                While we do not offer hydro jetting or drain cleaning, our licensed plumbers are available 24/7 for water heater repair, leak detection, gas line services, repiping, and more across Middlesex County, NJ.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call Niti: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  Call Danny: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Blog Card - Trenchless Sewer Repair */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden mb-12">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 relative h-48 sm:h-auto">
                  <Image
                    src="/images/drain-vent-pipe-installation.jpg"
                    alt="Trenchless sewer repair methods guide"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:w-2/3">
                  <span className="bg-red-700 text-white px-3 py-1 rounded-full text-xs font-medium">Sewer Lines</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">
                    <Link href="/blog/trenchless-sewer-repair-guide" className="hover:text-red-700 transition">
                      Trenchless Sewer Repair: Methods, Costs and Complete Guide
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Compare trenchless sewer repair methods including pipe lining and pipe bursting with traditional replacement. Learn costs, timelines, and when each method works best for your property.
                  </p>
                  <Link href="/blog/trenchless-sewer-repair-guide" className="inline-flex items-center gap-2 text-red-700 font-medium hover:text-red-800 transition text-sm">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Is Hydro Jetting Safe for All Pipes? */}
            <section id="safe-for-pipes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Is Hydro Jetting Safe for All Pipes?</h2>

              <p className="text-gray-700 mb-6">
                Hydro jetting is safe for the vast majority of plumbing systems, but it is not appropriate for every pipe. Understanding which pipes can handle the pressure and which cannot is essential for protecting your plumbing infrastructure. This is precisely why a camera inspection before jetting is so important.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4">Safe for Hydro Jetting</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>PVC pipes in good condition</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>ABS plastic pipes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Cast iron pipes (structurally sound)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Copper drain pipes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Clay/terracotta pipes (intact joints)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Concrete pipes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Lined/rehabilitated pipes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4">NOT Safe for Hydro Jetting</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Severely corroded cast iron pipes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Collapsed or partially collapsed pipes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Pipes with cracked or broken sections</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Orangeburg (bituminous fiber) pipes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Pipes with severely offset joints</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Bellied or sagging pipe sections</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Very old clay pipes with loose mortar joints</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                For pipes in the &quot;not safe&quot; category, the issue is not the water itself but the pressure. A severely corroded cast iron pipe may have walls so thin that high-pressure water could punch through them. A collapsed or broken pipe section could be made worse by the force of the jetting stream. Orangeburg pipes, which were made from compressed tar paper and used in some post-war construction, are simply too soft and fragile for any pressure cleaning.
              </p>

              <p className="text-gray-700 mb-6">
                When the pre-jetting camera inspection reveals pipe conditions that make hydro jetting unsafe, the plumber will recommend alternative approaches. These may include gentle mechanical snaking at reduced force, pipe repair or replacement of the damaged sections followed by jetting of the sound sections, or in some cases, a complete sewer line replacement. Many Middlesex County homes built in the 1940s through 1960s still have original clay or cast iron sewer pipes. While many of these pipes are still structurally sound enough for hydro jetting, some have deteriorated to the point where repair or replacement is the better option.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Important: Always Request a Camera Inspection First</h4>
                <p className="text-gray-700">
                  The camera inspection is your protection against pipe damage during hydro jetting. A reputable plumber will never skip this step. If a plumber offers to hydro jet your sewer line without inspecting it first, that is a red flag. The camera inspection costs nothing extra when included with the jetting service and takes only 15-20 minutes. It is the single most important safety measure in the entire process and provides you with documentation of your pipe condition for future reference.
                </p>
              </div>
            </section>

            {/* How Often Should You Hydro Jet */}
            <section id="how-often" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How Often Should You Hydro Jet Your Sewer Line?</h2>

              <p className="text-gray-700 mb-6">
                The recommended frequency for hydro jetting depends on your property type, the age and material of your pipes, the presence of nearby trees, and your household usage patterns. Here are general guidelines based on our experience servicing homes and businesses across Middlesex County.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Residential Properties: Every 18-24 Months</h3>
                  <p className="text-gray-700">
                    Most residential sewer lines benefit from hydro jetting every 18 to 24 months as preventive maintenance. This schedule keeps buildup from accumulating to the point where it restricts flow or causes backups. If your home has no history of drain problems and is surrounded by minimal vegetation, you may be able to extend this to every 2-3 years. However, homes with older pipes, heavy kitchen use, or multiple bathrooms often benefit from the 18-month schedule. We work with many homeowners in East Brunswick and Edison who schedule annual or biannual jetting as part of their home maintenance routine.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Homes with Tree Root History: Every 12 Months</h3>
                  <p className="text-gray-700">
                    If your sewer line has experienced tree root intrusion in the past, annual hydro jetting is strongly recommended. Tree roots grow back aggressively after being cut, and waiting too long between jetting sessions allows roots to re-establish inside the pipe and create blockages again. Annual jetting keeps roots trimmed back before they can cause problems. Many properties in Monroe Township, Old Bridge, and Sayreville have mature oak, maple, and willow trees whose root systems are aggressive sewer line invaders. For these homes, annual jetting combined with root-inhibiting treatments provides the best long-term protection.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Commercial Properties: Every 6-12 Months</h3>
                  <p className="text-gray-700">
                    Restaurants, commercial kitchens, food processing facilities, and multi-unit residential buildings generate significantly more drain buildup than single-family homes. Grease, food waste, and high water volume create conditions for rapid pipe fouling. Most commercial properties should schedule hydro jetting every 6 to 12 months, depending on the volume of grease and waste their drains handle. Many restaurant owners and property managers throughout Middlesex County rely on quarterly or semi-annual jetting to maintain compliance with health codes and prevent costly sewer backups that can shut down operations.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Older Homes with Clay or Cast Iron Pipes: Every 12-18 Months</h3>
                  <p className="text-gray-700">
                    Homes with clay or cast iron sewer pipes require more frequent maintenance because these pipe materials have rougher interior surfaces that catch debris more easily than smooth PVC. Clay pipes also have mortar-sealed joints that can separate over time, creating entry points for roots and allowing soil infiltration. Regular jetting every 12-18 months helps these older pipes perform at their best and extends the time before replacement becomes necessary. Many homes throughout North Brunswick and South Brunswick still have original clay sewer laterals from the 1950s and 1960s that benefit greatly from regular hydro jetting maintenance.
                  </p>
                </div>
              </div>
            </section>

            {/* Middlesex County Section */}
            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Hydro Jetting in Middlesex County: Local Sewer Challenges</h2>

              <p className="text-gray-700 mb-6">
                Middlesex County presents unique challenges for residential and commercial sewer systems. Understanding these local factors helps homeowners make informed decisions about drain maintenance and hydro jetting schedules. As plumbers who have worked in every town across Middlesex County, we see these issues daily and have developed effective solutions for each one.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Tree Root Problems Across the County</h3>
                  <p className="text-gray-700">
                    Middlesex County is home to thousands of mature hardwood trees including oaks, maples, and willows. These trees have extensive root systems that seek out moisture, and sewer lines are a prime target. Neighborhoods in Monroe Township with large-lot properties surrounded by mature trees are especially prone to root intrusion. Old Bridge developments built in the 1960s and 1970s now face the reality of 50-60 year old trees whose roots have had decades to find and infiltrate sewer connections. Hydro jetting with root-cutting nozzles is the most effective way to clear root masses and restore full flow without digging up the yard.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Aging Clay and Cast Iron Pipes</h3>
                  <p className="text-gray-700">
                    Many of the homes in East Brunswick, Edison, North Brunswick, and South Brunswick were built during the post-war construction boom of the 1950s and 1960s when clay (vitrified clay pipe or VCP) and cast iron were the standard sewer pipe materials. These pipes have a typical lifespan of 50-75 years, which means they are now at or beyond their expected service life. While many are still structurally sound, they accumulate buildup faster than modern PVC pipes due to their rougher interior surfaces and are more susceptible to root intrusion at the joints. Regular hydro jetting helps maximize the remaining lifespan of these aging pipes and delays the need for expensive replacement.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Seasonal Considerations</h3>
                  <p className="text-gray-700">
                    New Jersey&apos;s seasonal weather patterns affect sewer performance throughout the year. Spring brings heavy rainfall that can overwhelm aging sewer systems and push groundwater into cracked pipes. Summer and fall bring peak tree root growth as roots actively seek water during dry spells. Winter brings the risk of frozen or slow-moving drains as temperatures drop. We recommend scheduling hydro jetting in early spring or late fall for optimal results. Spring jetting clears winter debris and prepares the system for heavy spring rains. Fall jetting removes root growth from the summer season and ensures clean pipes heading into winter when service access may be more difficult.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Service Areas We Cover</h3>
                  <p className="text-gray-700">
                    Our hydro jetting services are available throughout Middlesex County, including East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. We bring our truck-mounted hydro jetting equipment directly to your property and complete most residential jobs in 1-2 hours. We are familiar with the typical pipe materials, soil conditions, and tree species in each community, which allows us to tailor our cleaning approach for the best results.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Hydro Jetting</h2>

              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much does hydro jetting cost?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Residential hydro jetting typically costs $350-$600 in New Jersey. Commercial hydro jetting starts at $1,000 and can go higher depending on pipe diameter and severity of the blockage. The cost includes a sewer camera inspection before and after the jetting process. While hydro jetting costs more than basic snaking ($150-$300), it provides significantly more thorough cleaning and longer-lasting results, often making it the more cost-effective choice over time.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Is hydro jetting better than snaking a drain?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Hydro jetting is more thorough than snaking because it cleans the entire pipe interior, removing grease, scale, and buildup from the pipe walls. Snaking only punches a hole through the clog without addressing the surrounding buildup. For recurring blockages, grease buildup, or tree root intrusion, hydro jetting provides a longer-lasting solution. However, snaking is appropriate for simple, one-time clogs and costs less for straightforward situations.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Can hydro jetting damage pipes?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Hydro jetting is safe for most pipes in good condition, including PVC, cast iron, copper, and clay pipes. However, it can damage fragile, corroded, or already-compromised pipes such as Orangeburg pipes, severely corroded cast iron, or pipes with existing cracks or collapse. A professional plumber always performs a sewer camera inspection first to assess pipe condition before jetting. This pre-inspection is the key safety step that prevents damage.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How often should you hydro jet your sewer line?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">For most residential properties, hydro jetting every 18-24 months is recommended for preventive maintenance. Homes with mature trees near sewer lines or older pipes may benefit from annual jetting. Commercial kitchens and restaurants should schedule hydro jetting every 6-12 months due to heavy grease buildup. Your plumber can recommend a specific schedule based on a camera inspection of your sewer line condition.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What PSI is used for hydro jetting?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Professional hydro jetting equipment operates between 3,000 and 8,000 PSI. Residential drain cleaning typically uses 3,000-4,000 PSI, while heavy-duty commercial work and severe blockages may require 7,000-8,000 PSI. The plumber adjusts the pressure based on pipe material, size, and the type of blockage. Using the correct PSI is important for effective cleaning without risking pipe damage.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Does hydro jetting remove tree roots from sewer lines?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Yes, hydro jetting can cut through and remove tree roots that have infiltrated sewer lines. The high-pressure water stream, often paired with specialized cutting nozzles, shears roots at the pipe wall and flushes the debris downstream. However, if roots have caused structural pipe damage such as cracks or joint separation, sewer line repair or trenchless pipe lining may also be needed to prevent roots from growing back through the same entry points.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How long does hydro jetting take?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">A typical residential hydro jetting session takes 1-2 hours, including the initial camera inspection, the jetting process, and the post-cleaning camera verification. More severe blockages or longer sewer lines may take 2-3 hours. Commercial jobs can take half a day or longer depending on the scope, pipe diameter, and extent of buildup. Most residential jobs in Middlesex County are completed within a single visit.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Is hydro jetting worth the cost compared to chemical drain cleaners?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Hydro jetting is significantly more effective than chemical drain cleaners. Chemical cleaners only dissolve a small portion of buildup and can damage pipes over time with their corrosive agents. They are also harmful to the environment and can damage septic systems. Hydro jetting uses only water, cleans the full pipe diameter, and provides results that last months or years rather than days or weeks. For any serious drain issue, hydro jetting is absolutely worth the investment.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Can I rent hydro jetting equipment and do it myself?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">While consumer-grade pressure washers and small jetting units are available for rent, they typically produce only 1,500-2,500 PSI, which is not enough for effective sewer line cleaning. Professional hydro jetting requires 3,000-8,000 PSI equipment, specialized nozzles, and the training to use them safely. Without a camera inspection first, you risk damaging weakened pipes. Without proper technique, you can injure yourself with the high-pressure stream or push debris further into the pipe. We strongly recommend hiring a licensed plumber for hydro jetting services.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Will my homeowner&apos;s insurance cover hydro jetting?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Most standard homeowner&apos;s insurance policies do not cover routine drain cleaning or hydro jetting as preventive maintenance. However, if a sewer backup causes water damage inside your home, the cleanup and repair may be covered depending on your policy. Some insurance companies offer sewer backup riders or endorsements that provide additional coverage. We recommend checking with your insurance provider about sewer line coverage, especially for older homes with aging pipes. Regardless of insurance, preventive hydro jetting is far less expensive than dealing with a full sewer backup and the resulting property damage.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Need Help With Your Plumbing?</h2>
              <p className="text-red-100 mb-6">
                While we do not offer hydro jetting or drain cleaning services, our licensed plumbers are available 24/7 for water heater repair, leak detection, gas line services, repiping, and more across Middlesex County, NJ.
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
                <Link href="/blog/trenchless-sewer-repair-guide" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Trenchless Sewer Repair: Methods, Costs and Complete Guide</h3>
                    <p className="text-sm text-gray-600">Compare trenchless sewer repair methods with traditional replacement.</p>
                  </div>
                </Link>
                <Link href="/blog/signs-of-slab-leak-sewer-line" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs of a Slab Leak and Sewer Line Problems</h3>
                    <p className="text-sm text-gray-600">Learn the warning signs of slab leaks and sewer line issues.</p>
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
                  <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                  <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  <li><Link href="/services/plumbing-safety-inspections" className="text-gray-700 hover:text-red-700 transition">Plumbing Inspections</Link></li>
                  <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                  <li><Link href="/services/water-filtration-system" className="text-gray-700 hover:text-red-700 transition">Water Filtration</Link></li>
                </ul>
                <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
              </div>
              {/* Related Blogs */}
              <div className="bg-white rounded-xl shadow-md p-5">
                <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/blog/trenchless-sewer-repair-guide" className="text-gray-700 hover:text-red-700 transition">Trenchless Sewer Repair Guide</Link></li>
                  <li><Link href="/blog/signs-of-slab-leak-sewer-line" className="text-gray-700 hover:text-red-700 transition">Signs of a Slab Leak and Sewer Line Problems</Link></li>
                  <li><Link href="/blog/sewer-camera-inspection-guide" className="text-gray-700 hover:text-red-700 transition">Sewer Camera Inspection Guide</Link></li>
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