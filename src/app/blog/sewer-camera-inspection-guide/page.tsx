import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Sewer Camera Inspection Guide: What It Costs, When You Need One (2026)",
  description: "Learn about sewer camera inspections: costs ($150-$500), what the camera reveals, when to schedule one, and why NJ home buyers need a sewer scope. Expert guide from licensed plumbers.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/sewer-camera-inspection-guide" },
  keywords: [
    "sewer camera inspection",
    "sewer line inspection",
    "sewer inspection near me",
    "sewer line camera inspection",
    "camera inspection sewer line",
    "sewer scope",
    "sewer video inspection",
    "sewer inspection cost",
    "when to get sewer inspection",
    "sewer inspection for home buying",
    "plumbing camera inspection",
    "drain camera inspection",
    "sewer line inspection cost",
    "sewer scope inspection",
  ],
  openGraph: {
    title: "Sewer Camera Inspection Guide: What It Costs, When You Need One (2026)",
    description: "Complete guide to sewer camera inspections. Learn costs, what the camera finds, and when NJ homeowners need one.",
    type: "article",
    publishedTime: "2026-03-19T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function SewerCameraInspectionGuidePost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sewer Camera Inspection Guide: What It Costs, When You Need One",
    description: "Complete guide to sewer camera inspections. Learn costs, what the camera finds, and when New Jersey homeowners need one.",
    image: "https://www.illyrianplumber.com/images/drain-vent-pipe-installation.jpg",
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
      "@id": "https://www.illyrianplumber.com/blog/sewer-camera-inspection-guide",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a sewer camera inspection cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard sewer camera inspection costs $150-$300. Inspections that include line locating and depth readings run $250-$500. Many plumbers will credit the inspection cost toward the repair if you proceed with the work. In Middlesex County, NJ, pricing typically falls in the $200-$400 range for a full inspection with video recording.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a sewer inspection when buying a home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, a sewer scope inspection is highly recommended when buying a home in New Jersey. A standard home inspection does not include the sewer line. Sewer repairs can cost $3,000-$25,000+, and a $200-$400 inspection can save you from inheriting a major hidden problem. This is especially important for homes built before 1980 that may have clay or cast iron pipes.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a sewer camera inspection take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical sewer camera inspection takes 30-60 minutes from start to finish. This includes setting up the equipment, running the camera through the entire sewer lateral, documenting findings, and reviewing the video with the homeowner. Longer lines or lines with heavy blockages may take up to 90 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "What does a sewer camera inspection show?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A sewer camera inspection reveals tree root intrusion, cracks and fractures in the pipe walls, bellied or sagging pipe sections, blockages from grease or debris, pipe corrosion and deterioration, joint separation or offset joints, pipe material and diameter, and the exact location and depth of problems. The plumber provides video footage and a written report.",
        },
      },
      {
        "@type": "Question",
        name: "Can a sewer camera see through water?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, modern sewer cameras are designed to work in wet conditions. However, standing water from a bellied pipe or backup can obscure the view. In most cases, plumbers will clear the line with a drain snake first to remove standing water and debris before running the camera for the clearest view possible.",
        },
      },
      {
        "@type": "Question",
        name: "How often should you get a sewer line inspection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most homes, a sewer camera inspection every 3-5 years is a good preventive measure. Older homes with clay or cast iron pipes should be inspected every 2-3 years. Homes with large trees near the sewer line may benefit from annual inspections. You should also get one any time you notice slow drains, sewage odors, or wet spots in your yard.",
        },
      },
      {
        "@type": "Question",
        name: "Is a sewer scope worth it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. A sewer scope inspection costs $150-$500 and can identify problems that would cost $3,000-$25,000+ to repair. For home buyers, it provides leverage in price negotiations or allows you to walk away from a costly problem. For current homeowners, early detection of root intrusion, cracks, or bellied pipes can prevent sewage backups and allow for less expensive repair options.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a sewer camera inspection and a sewer scope?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They are the same thing. 'Sewer camera inspection,' 'sewer scope,' 'sewer video inspection,' and 'sewer line camera inspection' all refer to the process of inserting a waterproof camera into the sewer line to visually inspect the interior condition of the pipe. The terms are used interchangeably in the plumbing industry.",
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
                Sewer Camera Inspection Guide: What It Costs, When You Need One, and What the Camera Reveals
              </h1>
              <p className="text-xl text-gray-300">
                Everything you need to know about sewer line camera inspections, from cost breakdowns to what the video footage actually shows. A complete guide for NJ homeowners and home buyers.
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
                <p className="text-sm text-blue-800">Please note: Illyrian Plumber does not currently offer sewer camera inspection, sewer cleaning, or sewer lining services. This article is provided as an educational resource to help homeowners understand their options. For sewer-related services, we recommend contacting a specialized sewer contractor in your area.</p>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                A <strong>sewer camera inspection</strong> is one of the most valuable diagnostic tools in modern plumbing, and if you own a home or are buying one in New Jersey, understanding how it works can save you thousands of dollars. Whether you are dealing with recurring drain problems that need sewer line repair or you have noticed <Link href="/blog/signs-of-slab-leak-sewer-line" className="text-red-700 hover:text-red-800">signs of a slab leak or sewer line damage</Link>, a camera inspection is the essential first step to understanding what is happening underground.
              </p>
              <p className="text-gray-700">
                Unlike older methods that involved guesswork and exploratory digging, today&apos;s sewer video inspection technology lets licensed plumbers see the exact condition of your pipes in real time. A waterproof, high-definition camera is fed into the sewer line through a cleanout or drain opening, transmitting live footage to a monitor above ground. The entire process is non-invasive, takes under an hour, and provides definitive answers about root intrusion, cracks, blockages, collapsed sections, and pipe material condition.
              </p>
              <p className="text-gray-700">
                In this guide, we will cover everything about sewer camera inspections: what the process involves, when you should schedule one, how much it costs in New Jersey, what the camera footage reveals, and what your repair options look like afterward. Whether you are a current homeowner concerned about your sewer line or a home buyer who wants to avoid a costly surprise, this guide has you covered.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
              <ul className="space-y-2">
                <li><a href="#what-is-sewer-camera-inspection" className="text-red-700 hover:text-red-800">What Is a Sewer Camera Inspection?</a></li>
                <li><a href="#when-you-need-one" className="text-red-700 hover:text-red-800">10 Signs You Need a Sewer Inspection</a></li>
                <li><a href="#home-buying" className="text-red-700 hover:text-red-800">Sewer Inspection for Home Buying</a></li>
                <li><a href="#what-camera-reveals" className="text-red-700 hover:text-red-800">What the Camera Reveals</a></li>
                <li><a href="#inspection-cost" className="text-red-700 hover:text-red-800">Sewer Camera Inspection Cost</a></li>
                <li><a href="#after-inspection" className="text-red-700 hover:text-red-800">What Happens After the Inspection</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Middlesex County Sewer Considerations</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* What Is a Sewer Camera Inspection */}
            <section id="what-is-sewer-camera-inspection" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Is a Sewer Camera Inspection?</h2>

              <p className="text-gray-700 mb-6">
                A sewer camera inspection (also called a sewer scope, sewer video inspection, or plumbing camera inspection) is a diagnostic procedure where a licensed plumber inserts a specialized waterproof camera into your sewer line to visually inspect the interior condition of the pipe. The camera transmits real-time, high-definition video to a monitor, allowing the plumber to see exactly what is happening inside your pipes without any digging or disruption to your property.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">How the Process Works</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Access Point Identification</h4>
                      <p className="text-gray-700">The plumber locates a cleanout (a capped pipe fitting that provides access to the sewer line) or uses an existing drain opening. Most homes have a cleanout near the foundation or in the basement. If no cleanout exists, the plumber may access the line through a toilet drain after removing the toilet.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Camera Insertion</h4>
                      <p className="text-gray-700">A flexible, waterproof camera head attached to a semi-rigid cable (called a push rod) is fed into the sewer line. The camera head includes powerful LED lights that illuminate the inside of the pipe, even in completely dark conditions. Professional cameras deliver high-definition footage with color accuracy.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Real-Time Video Inspection</h4>
                      <p className="text-gray-700">As the camera moves through the pipe, the plumber watches the live footage on a portable monitor. The cable has distance markings or a built-in counter that tracks exactly how far the camera has traveled from the access point. This allows precise location tracking of any problems found.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Line Locating (If Needed)</h4>
                      <p className="text-gray-700">Many professional sewer cameras include a built-in transmitter (called a sonde) that emits a signal. A receiver above ground can pinpoint the exact location and depth of the camera at any point. This is critical for locating problem areas so repairs can be targeted precisely.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Documentation and Report</h4>
                      <p className="text-gray-700">The inspection is recorded on video. After completing the camera run, the plumber reviews the footage with the homeowner, explains any findings, and provides a written report. This documentation is valuable for insurance claims, real estate transactions, and repair planning.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Equipment Used</h3>

              <p className="text-gray-700 mb-4">
                Professional sewer inspection cameras are not the same as basic drain cameras sold at hardware stores. Here is what licensed plumbers use for thorough sewer line inspections:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Push Rod Cameras</h4>
                  <p className="text-gray-700 text-sm">The most common type for residential sewer inspections. A semi-rigid cable (typically 100-200 feet) with a camera head that ranges from 1 inch to 2.5 inches in diameter. Suitable for pipes from 2 to 12 inches. Self-leveling camera heads keep the image upright at all times.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Crawler Cameras</h4>
                  <p className="text-gray-700 text-sm">Used for larger sewer mains (6 inches and up). These motorized units drive through the pipe on wheels and can pan, tilt, and zoom. Typically used for commercial and municipal inspections rather than residential, but may be used for large residential laterals or shared sewer lines.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/pex-pipe-drain-rough-in.jpg"
                  alt="Sewer line and drain pipe inspection setup"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 p-3 bg-gray-50">Professional sewer camera inspections provide clear, high-definition footage of your pipe&apos;s interior condition.</p>
              </div>
            </section>

            {/* When You Need a Sewer Inspection */}
            <section id="when-you-need-one" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">10 Signs You Need a Sewer Camera Inspection</h2>

              <p className="text-gray-700 mb-6">
                Knowing when to schedule a sewer line inspection can mean the difference between a simple repair and a full sewer line replacement. Here are the top warning signs and situations where a camera inspection is necessary:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border-l-4 border-red-700 rounded-r-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">1. Recurring Drain Clogs</h3>
                  <p className="text-gray-700">If you are snaking the same drain repeatedly or multiple drains in your home are slow at the same time, the problem is likely in the main sewer line, not individual branch lines. A camera inspection will reveal whether you have root intrusion, a bellied pipe section, or a partial collapse causing the recurring blockages.</p>
                </div>

                <div className="bg-white border-l-4 border-red-700 rounded-r-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">2. Sewage Odors in Your Home or Yard</h3>
                  <p className="text-gray-700">A properly functioning sewer system is sealed and airtight. If you smell sewage inside your home (especially in the basement) or in your yard, there may be a crack, joint separation, or break in the sewer line. The camera can identify the exact location and nature of the breach.</p>
                </div>

                <div className="bg-white border-l-4 border-red-700 rounded-r-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">3. Gurgling Sounds from Drains or Toilets</h3>
                  <p className="text-gray-700">Gurgling noises indicate air is being trapped and released in your drain system, which often means there is a partial blockage or venting problem in the sewer line. When multiple fixtures gurgle simultaneously, that is almost always a main sewer line issue that warrants camera inspection.</p>
                </div>

                <div className="bg-white border-l-4 border-red-700 rounded-r-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">4. Wet or Soggy Spots in Your Yard</h3>
                  <p className="text-gray-700">Unexplained wet patches, especially along the path of your sewer line from the house to the street, suggest a leak or break in the underground pipe. You may also notice unusually green or lush grass in the area, as sewage acts as a fertilizer. A camera inspection combined with line locating will pinpoint the exact leak location.</p>
                </div>

                <div className="bg-white border-l-4 border-red-700 rounded-r-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">5. Sewage Backup in the Lowest Drain</h3>
                  <p className="text-gray-700">If sewage backs up through your basement floor drain, laundry drain, or lowest-level bathroom, your main sewer line has a significant blockage or structural failure. After clearing the immediate backup, a camera inspection should be done to identify the cause and prevent recurrence.</p>
                </div>

                <div className="bg-white border-l-4 border-red-700 rounded-r-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">6. Home Is More Than 25 Years Old</h3>
                  <p className="text-gray-700">Older homes in Middlesex County commonly have clay or cast iron sewer pipes that deteriorate over time. Clay pipes are vulnerable to root intrusion at every joint (typically every 3-4 feet), while cast iron pipes corrode from the inside out. If your home was built before 2000 and you have never had the sewer line inspected, it is time.</p>
                </div>

                <div className="bg-white border-l-4 border-red-700 rounded-r-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">7. Large Trees Near the Sewer Line</h3>
                  <p className="text-gray-700">Tree roots are the number one cause of sewer line damage. Roots can travel 20 feet or more from the trunk, seeking the moisture and nutrients inside sewer pipes. If you have mature trees in your front yard or along the path between your house and the street, roots may already be infiltrating the joints of your sewer pipe.</p>
                </div>

                <div className="bg-white border-l-4 border-red-700 rounded-r-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">8. Buying or Selling a Home</h3>
                  <p className="text-gray-700">A sewer scope inspection should be standard practice in any New Jersey real estate transaction. Standard home inspections do not cover the sewer lateral, yet sewer line problems are among the most expensive repairs a homeowner can face. Buyers gain negotiating power, and sellers can address issues proactively.</p>
                </div>

                <div className="bg-white border-l-4 border-red-700 rounded-r-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">9. Foundation Cracks or Settling</h3>
                  <p className="text-gray-700">A leaking sewer line under or near your foundation can cause soil erosion, leading to foundation settlement and cracking. If you notice new cracks in your foundation, floors that are no longer level, or doors and windows that suddenly stick, a sewer camera inspection can determine whether a leaking sewer line is contributing to the problem.</p>
                </div>

                <div className="bg-white border-l-4 border-red-700 rounded-r-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">10. Pest Problems (Rodents or Insects)</h3>
                  <p className="text-gray-700">A cracked or broken sewer line creates an entry point for rats, mice, cockroaches, and other pests. If you are dealing with a persistent pest problem that exterminators cannot fully resolve, a damaged sewer line may be the root cause. The camera will show any cracks or openings large enough for pest entry.</p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Pro Tip: Preventive Inspections Save Money</h4>
                <p className="text-gray-700">You do not need to wait for problems to appear. A preventive sewer camera inspection every 3-5 years costs $150-$400 and can catch issues early when they are far less expensive to fix. Think of it as a check-up for your home&apos;s most critical underground system.</p>
              </div>
            </section>

            {/* Home Buying Section */}
            <section id="home-buying" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Sewer Inspection for Home Buying in New Jersey</h2>

              <p className="text-gray-700 mb-6">
                If you are buying a home in New Jersey, a sewer scope inspection is one of the smartest investments you can make during the due diligence period. Here is why it matters so much in the NJ real estate market and what you should know before closing.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Why NJ Home Buyers Need a Sewer Scope</h3>

              <p className="text-gray-700 mb-4">
                New Jersey has some of the oldest housing stock in the country. Many homes in Middlesex County were built in the 1950s through 1980s with clay or cast iron sewer laterals. These pipe materials have a useful life of 50-75 years, meaning many are at or past their expected lifespan. Yet a standard home inspection does not include the sewer line because it requires specialized camera equipment.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-3">What a Sewer Problem Can Cost You as a Home Buyer</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Sewer line spot repair (localized damage)</span>
                    <span className="font-semibold">$1,500-$4,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Trenchless pipe lining (full line)</span>
                    <span className="font-semibold">$4,000-$8,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pipe bursting replacement</span>
                    <span className="font-semibold">$5,000-$12,500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Traditional sewer line replacement</span>
                    <span className="font-semibold">$8,000-$25,000+</span>
                  </li>
                  <li className="flex justify-between border-t border-red-200 pt-3 mt-3">
                    <span className="font-bold">Cost of the inspection that could have caught it</span>
                    <span className="font-bold text-red-700">$200-$400</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">How to Add a Sewer Scope to Your Home Inspection</h3>

              <div className="space-y-3 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Request It Early in the Process</h4>
                  <p className="text-gray-700 text-sm">Ask your real estate agent to include a sewer inspection contingency in your offer. Most sellers in New Jersey are familiar with this request and will not object. Schedule the sewer scope during your general inspection period to keep your timeline on track.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Hire an Independent Plumber</h4>
                  <p className="text-gray-700 text-sm">While some home inspectors offer sewer scope add-ons, we recommend hiring a licensed plumber who specializes in sewer work. A plumber can not only identify problems but also estimate repair costs and recommend solutions. This gives you stronger negotiating data.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Use the Report for Negotiations</h4>
                  <p className="text-gray-700 text-sm">If the inspection reveals issues, you have options: ask the seller to make repairs before closing, negotiate a price reduction equal to the repair cost, request a repair credit at closing, or walk away if the problems are severe. A video report with a plumber&apos;s written assessment is powerful evidence in negotiations.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">What NJ Home Inspections Miss</h3>

              <p className="text-gray-700 mb-4">
                A standard New Jersey home inspection covers the visible plumbing inside the house: faucets, toilets, water heater, exposed pipes, and drain flow. But the sewer lateral, the pipe that carries all waste from your home to the municipal sewer main, runs 30-80 feet underground and is completely invisible without a camera. Here is what a standard home inspection cannot detect:
              </p>

              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>Root intrusion that has not yet caused a visible backup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>Bellied or sagging pipe sections where waste collects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>Deteriorating clay or cast iron pipe walls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>Joint separations that allow groundwater infiltration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>Orangeburg pipe (compressed tar paper) that is collapsing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2"></span>
                  <span>Partial collapses that have not yet caused a full blockage</span>
                </li>
              </ul>

              <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/bathroom-plumbing-rough-in-pex.jpg"
                  alt="Home plumbing system that connects to the main sewer line"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 p-3 bg-gray-50">All the plumbing in your home feeds into a single sewer lateral that carries waste to the municipal main. A camera inspection examines this critical, hidden pipe.</p>
              </div>
            </section>

            {/* What the Camera Reveals */}
            <section id="what-camera-reveals" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What a Sewer Camera Inspection Reveals</h2>

              <p className="text-gray-700 mb-6">
                Understanding what the camera footage shows is important for making informed repair decisions. Here are the most common problems that a sewer video inspection uncovers, what they look like on camera, and what they mean for your home:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tree Root Intrusion</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>What it looks like:</strong> Hair-like white or brown tendrils growing through pipe joints, ranging from small wisps to thick root masses that fill the entire pipe diameter. In severe cases, roots form a dense ball or &quot;root wad&quot; that traps paper, grease, and debris.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Why it matters:</strong> Tree roots are the single most common cause of sewer line failure in Middlesex County. Roots enter through the smallest gap at pipe joints and grow rapidly in the nutrient-rich environment. Left untreated, roots will eventually crack the pipe, create complete blockages, and cause sewage backups into your home.
                  </p>
                  <p className="text-gray-700">
                    <strong>Repair options:</strong> Minor root intrusion can be cut with a mechanical root cutter and managed with periodic maintenance. Moderate to heavy root intrusion typically requires pipe lining (CIPP) to seal all joints permanently. Severe cases with pipe damage may require pipe bursting or traditional replacement.
                  </p>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cracks and Fractures</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>What it looks like:</strong> Visible lines running along or across the pipe wall. Longitudinal cracks run the length of the pipe, while circumferential cracks wrap around it. You may see soil or roots visible through the crack opening.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Why it matters:</strong> Cracks allow groundwater to infiltrate the sewer system (increasing your municipal sewer bill) and allow sewage to leak into the surrounding soil. They also create entry points for tree roots. Small cracks will grow over time due to soil movement, freeze-thaw cycles, and traffic loading above the pipe.
                  </p>
                  <p className="text-gray-700">
                    <strong>Repair options:</strong> Hairline cracks in otherwise structurally sound pipe can be sealed with CIPP lining. Larger fractures with missing pipe sections typically require spot repair or full pipe replacement. The camera footage helps determine whether the damage is localized or widespread.
                  </p>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Bellied or Sagging Pipe Sections</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>What it looks like:</strong> A low spot in the pipe where water pools rather than flowing freely. On camera, you will see the camera lens partially or fully submerged as it passes through the bellied section. Debris and sediment accumulate in the low spot.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Why it matters:</strong> Bellied pipes create standing water that catches solid waste, paper products, and grease, leading to recurring blockages. The standing water also accelerates pipe deterioration. Bellied sections cannot be fixed with snaking or hydro-jetting because the problem is structural, not a blockage.
                  </p>
                  <p className="text-gray-700">
                    <strong>Repair options:</strong> Bellied pipes cannot be repaired with pipe lining because the liner would follow the belly and not restore proper flow. The bellied section must be excavated and re-laid at the correct grade, or the entire line can be replaced using pipe bursting. This is one of the few situations where some excavation is always required.
                  </p>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Blockages and Buildup</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>What it looks like:</strong> Grease buildup appears as a yellowish-white coating that narrows the pipe diameter. Solid blockages show as a wall of debris the camera cannot pass. Scale and mineral deposits appear as rough, bumpy surfaces on the pipe walls.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Why it matters:</strong> Partial blockages reduce flow capacity and cause slow drains throughout the house. Grease buildup is progressive and will eventually cause a complete blockage and sewage backup. The camera shows whether the blockage is a soft obstruction (cleanable) or a structural problem requiring repair.
                  </p>
                  <p className="text-gray-700">
                    <strong>Repair options:</strong> Grease and soft blockages can be removed with hydro-jetting (high-pressure water cleaning). Hard scale may require mechanical cutting. If the camera reveals that blockages are caused by a bellied pipe, offset joint, or partially collapsed section, the underlying structural problem must be addressed.
                  </p>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pipe Corrosion and Deterioration</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>What it looks like:</strong> Cast iron pipes show rust-colored, flaky surfaces with pitting and holes. The pipe walls appear thin and ragged. In advanced cases, large sections of the pipe wall are missing, exposing surrounding soil. Clay pipes show surface erosion, missing chunks, and joint gaps.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Why it matters:</strong> Corroded pipes are losing structural integrity and will eventually collapse. Cast iron pipes in New Jersey homes from the 1950s-1970s are particularly prone to interior corrosion from hydrogen sulfide gas produced by sewage. Once the pipe wall starts failing, the process accelerates quickly.
                  </p>
                  <p className="text-gray-700">
                    <strong>Repair options:</strong> If the pipe still has structural integrity (at least 50% of the wall thickness remains), CIPP lining can extend its life by 50+ years. If the pipe has lost significant wall structure or has collapsed sections, pipe bursting or traditional replacement is necessary. The camera footage determines the extent of deterioration throughout the entire line.
                  </p>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Offset Joints and Joint Separation</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>What it looks like:</strong> At pipe joints (where two pipe sections meet), you can see misalignment where one section has shifted relative to the other. In joint separation, a gap is visible between sections, often with soil or roots visible in the opening.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Why it matters:</strong> Offset joints create ledges that catch toilet paper, wipes, and solid waste, leading to blockages. Joint separations are the primary entry point for tree roots and groundwater. Both conditions indicate ground movement or pipe settlement that will worsen over time.
                  </p>
                  <p className="text-gray-700">
                    <strong>Repair options:</strong> Minor offset joints (less than 25% of pipe diameter) can often be sealed with CIPP lining. Significant offsets or separations where pipes have shifted more than 25% may require spot repair at each affected joint or full pipe replacement for widespread joint failure.
                  </p>
                </div>
              </div>
            </section>

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

            {/* Service Card */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Our Plumbing Services</p>
                <p className="text-sm text-gray-600 mb-2">We don&apos;t perform camera inspections or hydro jetting, but if an inspection uncovers a leak or repiping need, our licensed plumbers handle water leak detection, whole house repiping, gas line services, and emergency plumbing across Middlesex County.</p>
                <Link href="/services" className="text-red-700 hover:text-red-800 font-medium text-sm">View Our Services</Link>
              </div>
            </div>

            {/* Cost Section */}
            <section id="inspection-cost" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Sewer Camera Inspection Cost</h2>

              <p className="text-gray-700 mb-6">
                The cost of a sewer camera inspection depends on the length of the line, whether line locating is included, and your geographic area. Here is what you can expect to pay in New Jersey:
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sewer Line Inspection Cost Breakdown</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Basic camera inspection (up to 100 ft)</span>
                    <span className="font-semibold">$150-$300</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Camera inspection with line locating</span>
                    <span className="font-semibold">$250-$400</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Camera inspection + locate + depth reading</span>
                    <span className="font-semibold">$300-$500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Real estate / home buying sewer scope</span>
                    <span className="font-semibold">$200-$400</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Extended line inspection (100+ ft)</span>
                    <span className="font-semibold">$350-$500</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Many sewer camera inspection companies will credit the inspection cost toward the repair if you choose to proceed with the work.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Factors That Affect Inspection Cost</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Line Length</h4>
                  <p className="text-gray-700 text-sm">Most residential sewer laterals in Middlesex County are 30-80 feet. Standard inspection pricing covers up to 100 feet. Longer lines (common on larger lots in Monroe Township and South Brunswick) may incur additional charges.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Access Difficulty</h4>
                  <p className="text-gray-700 text-sm">If there is no exterior cleanout, the plumber may need to access the line through a drain or by pulling a toilet, which adds time and cost. Installing a cleanout for future access is a worthwhile investment ($300-$800).</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Line Condition</h4>
                  <p className="text-gray-700 text-sm">Heavily blocked lines may require snaking or hydro-jetting before the camera can be inserted, adding $150-$400 to the total cost. Standing water from a backup can also limit visibility and require preliminary clearing.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Report Detail Level</h4>
                  <p className="text-gray-700 text-sm">A basic verbal report with video is standard. A detailed written report with screenshots, measurements, and repair recommendations (ideal for real estate transactions) may be an additional $50-$100 at some companies.</p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Is a Sewer Camera Inspection Worth the Cost?</h4>
                <p className="text-gray-700">
                  A $150-$500 inspection can prevent a $3,000-$25,000 surprise. For home buyers, the inspection often pays for itself many times over through negotiated price reductions. For current homeowners, catching root intrusion or a crack early means a $2,000-$4,000 pipe lining instead of a $10,000-$25,000 emergency replacement after a full collapse. The math is clear: sewer camera inspections are one of the best investments a homeowner can make.
                </p>
              </div>
            </section>

            {/* What Happens After the Inspection */}
            <section id="after-inspection" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Happens After the Inspection</h2>

              <p className="text-gray-700 mb-6">
                Once the camera inspection is complete and problems have been identified, your plumber will present repair options based on the type, severity, and location of the damage. Here are the most common paths forward:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">No Problems Found</h4>
                      <p className="text-gray-700">If the inspection shows your sewer line is in good condition, you have peace of mind and a baseline recording for future comparison. Schedule your next inspection in 3-5 years (or sooner if you have mature trees nearby).</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Minor Issues: Monitor and Maintain</h4>
                      <p className="text-gray-700">Small root intrusion at one or two joints, minor scale buildup, or very early-stage corrosion may not require immediate repair. Your plumber may recommend periodic root cutting, hydro-jetting on a schedule, or monitoring with annual camera inspections. This &quot;watch and wait&quot; approach is appropriate when the pipe is structurally sound and flowing well.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Moderate Issues: Trenchless Repair</h4>
                      <p className="text-gray-700">Widespread root intrusion, multiple cracked joints, moderate corrosion, or joint separations are ideal candidates for trenchless repair methods. CIPP pipe lining ($80-$160 per foot) inserts a seamless liner inside your existing pipe, sealing all cracks and joints without digging. Pipe bursting ($100-$250 per foot) replaces the pipe entirely by pulling new HDPE pipe through the old line.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Severe Issues: Full Replacement</h4>
                      <p className="text-gray-700">Collapsed pipe sections, severe bellies with grade failure, completely deteriorated Orangeburg pipe, or extensive structural damage may require traditional excavation and replacement. While more disruptive and expensive ($8,000-$25,000+), modern replacement installs new PVC or HDPE pipe that will last 50-100 years. Your plumber may use a hybrid approach: trenchless for the good sections and excavation only where absolutely necessary.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Spot Repair: Targeted Fix</h4>
                      <p className="text-gray-700">When the camera reveals a problem isolated to one specific location (a single broken joint, localized root damage, or one bellied section), a spot repair may be the most cost-effective solution. Only the damaged section is excavated and replaced, leaving the rest of the line intact. Spot repairs typically cost $1,500-$4,000 depending on depth and location.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Mid-content CTA (Red) */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Need a plumber?</p>
              <p className="text-red-100 text-sm mb-4">While we do not offer sewer inspection services, our licensed plumbers are available 24/7 for water heater repair, leak detection, gas line services, repiping, and more across Middlesex County.</p>
              <div className="flex flex-wrap gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">Call Niti: {BUSINESS_INFO.phone}</a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">Call Danny: {BUSINESS_INFO.phone2}</a>
              </div>
            </div>

            {/* Blog Card - Trenchless Guide */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Related Article: Trenchless Sewer Repair Guide</p>
                <p className="text-sm text-gray-600 mb-2">Learn about pipe lining vs pipe bursting, costs, timelines, and when trenchless methods work best. The complete guide to modern sewer repair.</p>
                <Link href="/blog/trenchless-sewer-repair-guide" className="text-red-700 hover:text-red-800 font-medium text-sm">Read the Guide</Link>
              </div>
            </div>

            {/* Middlesex County Section */}
            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Sewer Line Considerations for Middlesex County, NJ</h2>

              <p className="text-gray-700 mb-6">
                Middlesex County has unique sewer infrastructure characteristics that every homeowner should understand. Sewer camera specialists working across East Brunswick, Edison, Old Bridge, Sayreville, Monroe Township, South Brunswick, and North Brunswick consistently report the same patterns in this area.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Clay and Cast Iron Pipes in Older Homes</h4>
                  <p className="text-gray-700">The majority of homes built in Middlesex County before 1980 have clay (vitrified clay pipe or VCP) or cast iron sewer laterals. Clay pipe was the standard in this area from the 1940s through the mid-1970s. Cast iron was used in some higher-end construction and for interior drain lines. Both materials have a finite lifespan. Clay pipes are connected with mortar joints every 3-4 feet, and each joint is a potential entry point for roots and groundwater. Cast iron pipes corrode from hydrogen sulfide gas exposure and can lose wall thickness over decades. If your Middlesex County home was built before 1980, there is a strong chance your sewer lateral is clay or cast iron, and a camera inspection is the only way to know its current condition.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Tree Root Problems</h4>
                  <p className="text-gray-700">Middlesex County&apos;s mature tree canopy is beautiful, but those trees are constantly seeking moisture and nutrients underground. Oak, maple, willow, and sweetgum trees are particularly aggressive root growers. Many neighborhoods in Edison, East Brunswick, and Old Bridge have large street trees planted 30-50 years ago whose roots have grown into the path of sewer laterals. Root intrusion shows up in roughly 60% of sewer camera inspections on homes built before 1990 in these areas.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Soil Conditions and Pipe Settlement</h4>
                  <p className="text-gray-700">Much of Middlesex County sits on clay-heavy soil that expands and contracts with moisture changes. This soil movement causes pipe settlement over time, creating bellied sections and joint separations. Areas along the Raritan River and in low-lying sections of Sayreville and Old Bridge are particularly prone to this type of ground movement. Camera inspections in these neighborhoods frequently turn up bellied pipe sections.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Homeowner Responsibility vs Municipal</h4>
                  <p className="text-gray-700">In Middlesex County, homeowners are responsible for the sewer lateral, which is the pipe running from your home to the connection at the municipal sewer main (typically located in the street). This lateral is usually 30-80 feet long depending on your lot size and main location. The municipality maintains the sewer main itself, but any damage to your lateral is your financial responsibility. This is why we recommend a camera inspection before buying a home, whenever a warranty is expiring, or at the first sign of drainage issues.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Orangeburg Pipe</h4>
                  <p className="text-gray-700">Some homes built in Middlesex County during the 1940s through 1960s have Orangeburg pipe, which is made from compressed layers of wood fiber and tar. This material was inexpensive and easy to install, but it deteriorates badly over time, becoming soft and collapsing under the weight of soil above it. If your camera inspection reveals Orangeburg pipe, full replacement is typically the only option, as the material is too degraded for lining or relining.</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much does a sewer camera inspection cost?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">A standard sewer camera inspection costs $150-$300. Inspections that include line locating and depth readings run $250-$500. Many plumbers will credit the inspection cost toward the repair if you proceed with the work. In Middlesex County, NJ, pricing typically falls in the $200-$400 range for a full inspection with video recording.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Do I need a sewer inspection when buying a home?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Yes, a sewer scope inspection is highly recommended when buying a home in New Jersey. A standard home inspection does not include the sewer line. Sewer repairs can cost $3,000-$25,000+, and a $200-$400 inspection can save you from inheriting a major hidden problem. This is especially important for homes built before 1980 that may have clay or cast iron pipes.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How long does a sewer camera inspection take?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">A typical sewer camera inspection takes 30-60 minutes from start to finish. This includes setting up the equipment, running the camera through the entire sewer lateral, documenting findings, and reviewing the video with the homeowner. Longer lines or lines with heavy blockages may take up to 90 minutes.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What does a sewer camera inspection show?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">A sewer camera inspection reveals tree root intrusion, cracks and fractures in the pipe walls, bellied or sagging pipe sections, blockages from grease or debris, pipe corrosion and deterioration, joint separation or offset joints, pipe material and diameter, and the exact location and depth of problems. The plumber provides video footage and a written report.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Can a sewer camera see through water?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Yes, modern sewer cameras are designed to work in wet conditions. However, standing water from a bellied pipe or backup can obscure the view. In most cases, plumbers will clear the line with a drain snake first to remove standing water and debris before running the camera for the clearest view possible.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How often should you get a sewer line inspection?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">For most homes, a sewer camera inspection every 3-5 years is a good preventive measure. Older homes with clay or cast iron pipes should be inspected every 2-3 years. Homes with large trees near the sewer line may benefit from annual inspections. You should also get one any time you notice slow drains, sewage odors, or wet spots in your yard.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Is a sewer scope worth it?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Absolutely. A sewer scope inspection costs $150-$500 and can identify problems that would cost $3,000-$25,000+ to repair. For home buyers, it provides leverage in price negotiations or allows you to walk away from a costly problem. For current homeowners, early detection of root intrusion, cracks, or bellied pipes can prevent sewage backups and allow for less expensive repair options.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What is the difference between a sewer camera inspection and a sewer scope?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">They are the same thing. &quot;Sewer camera inspection,&quot; &quot;sewer scope,&quot; &quot;sewer video inspection,&quot; and &quot;sewer line camera inspection&quot; all refer to the process of inserting a waterproof camera into the sewer line to visually inspect the interior condition of the pipe. The terms are used interchangeably in the plumbing industry.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Need Help With Your Plumbing?</h2>
              <p className="text-red-100 mb-6">
                While we do not offer sewer camera inspection or sewer line services, our licensed plumbers are available 24/7 for water heater repair, leak detection, gas line services, repiping, and more across Middlesex County, NJ.
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
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Trenchless Sewer Repair: Methods, Costs & Complete Guide</h3>
                    <p className="text-sm text-gray-600">Compare pipe lining vs pipe bursting methods with costs and timelines.</p>
                  </div>
                </Link>
                <Link href="/blog/signs-of-slab-leak-sewer-line" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs of a Slab Leak and Sewer Line Problems</h3>
                    <p className="text-sm text-gray-600">Hidden leaks can cause serious damage. Learn the warning signs.</p>
                  </div>
                </Link>
                <Link href="/blog/why-is-water-pressure-low" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Why Is My Water Pressure Low? Causes and Solutions</h3>
                    <p className="text-sm text-gray-600">Discover the common causes and practical solutions for low water pressure.</p>
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
                  <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                  <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                  <li><Link href="/services/plumbing-safety-inspections" className="text-gray-700 hover:text-red-700 transition">Plumbing Safety Inspections</Link></li>
                  <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Services</Link></li>
                  <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                </ul>
                <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
              </div>
              {/* Related Blogs */}
              <div className="bg-white rounded-xl shadow-md p-5">
                <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/blog/trenchless-sewer-repair-guide" className="text-gray-700 hover:text-red-700 transition">Trenchless Sewer Repair Guide</Link></li>
                  <li><Link href="/blog/signs-of-slab-leak-sewer-line" className="text-gray-700 hover:text-red-700 transition">Signs of a Slab Leak and Sewer Line Problems</Link></li>
                  <li><Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition">Why Is My Water Pressure Low?</Link></li>
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
