import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sewer Line Repair & Replacement East Brunswick NJ",
  description: "Professional sewer line repair and trenchless replacement in East Brunswick & Middlesex County, NJ. Sewer camera inspection, pipe lining, pipe bursting. Licensed plumbers. Call (347) 461-4856.",
  keywords: [
    "sewer line repair",
    "sewer line repair near me",
    "sewer repair",
    "trenchless sewer repair",
    "sewer line replacement",
    "sewer camera inspection",
    "sewer line replacement cost",
    "sewer pipe repair",
    "sewer line repair NJ",
    "sewer line repair East Brunswick",
    "sewer line repair cost",
    "trenchless sewer line replacement",
    "sewer pipe replacement",
    "sewer line inspection",
    "broken sewer line repair",
    "sewer line repair Middlesex County",
    "cipp sewer lining",
    "pipe bursting sewer",
    "sewer backup repair",
    "collapsed sewer line repair",
  ],
  openGraph: {
    title: "Sewer Line Repair & Replacement East Brunswick NJ",
    description: "Professional sewer line repair and trenchless replacement in East Brunswick & Middlesex County, NJ. Structural repair specialists.",
    type: "website",
  },
};

export default function SewerLineRepairPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sewer Line Repair & Replacement",
    description: "Professional sewer line repair and trenchless replacement in East Brunswick and Middlesex County, NJ. We specialize in permanent structural repairs using camera inspection, CIPP lining, and pipe bursting.",
    provider: {
      "@type": "Plumber",
      "@id": "https://www.illyrianplumber.com/#organization",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.zip,
      },
    },
    areaServed: BUSINESS_INFO.serviceAreas.map(area => ({ "@type": "City", name: area })),
    serviceType: "Sewer Line Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sewer Line Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewer Camera Inspection" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trenchless Sewer Repair (CIPP)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pipe Bursting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewer Line Replacement" } },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does sewer line repair cost in NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sewer line repair cost in New Jersey ranges from $1,500 to $4,000 for spot repairs, $4,000 to $10,000 for trenchless pipe lining (CIPP), $5,000 to $15,000 for pipe bursting, and $5,000 to $20,000+ for full excavation replacement. The cost depends on the length of pipe, depth, accessibility, and repair method. We provide free camera inspections with repair to determine the exact scope of work.",
        },
      },
      {
        "@type": "Question",
        name: "What is trenchless sewer repair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trenchless sewer repair is a method of fixing damaged sewer lines without digging up your yard, driveway, or landscaping. The two main trenchless methods are CIPP (cured-in-place pipe lining), which installs a new pipe inside the existing damaged pipe, and pipe bursting, which pulls a new pipe through while breaking apart the old one. Both methods minimize surface disruption and are completed in 1-2 days.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if my sewer line needs repair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common signs of sewer line damage include multiple slow drains throughout the house, sewage backups, gurgling sounds from drains, foul odors from drains or yard, soggy patches or sinkholes in your yard, unusually green patches of grass, and foundation cracks. If you notice any of these signs, a sewer camera inspection can identify the exact problem and location.",
        },
      },
      {
        "@type": "Question",
        name: "What causes sewer line damage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most common causes of sewer line damage in Middlesex County, NJ are tree root intrusion, pipe corrosion and deterioration (especially in cast iron and clay pipes), ground shifting and settling, pipe joint separation, and bellying (sagging sections that collect waste). Many homes in our area have original sewer lines from the 1960s-1980s that are reaching the end of their lifespan.",
        },
      },
      {
        "@type": "Question",
        name: "How long does sewer line repair take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trenchless sewer repair (CIPP lining or pipe bursting) typically takes 1-2 days. Traditional excavation repair can take 2-5 days depending on the length of pipe, depth, and site conditions. A sewer camera inspection takes about 1 hour and helps us determine the fastest, most cost-effective repair method.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer sewer camera inspection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer sewer camera inspection using high-definition waterproof cameras that allow us to see inside your sewer line in real time. The camera identifies the exact location, type, and extent of damage. We show you the video footage and explain what we find. Camera inspection is included with repair service.",
        },
      },
      {
        "@type": "Question",
        name: "Is trenchless sewer repair as durable as traditional replacement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, trenchless sewer repair is extremely durable. CIPP pipe lining creates a seamless, jointless pipe within the existing pipe with a 50+ year expected lifespan. Pipe bursting installs a brand new HDPE pipe with an even longer lifespan. Both methods meet or exceed the durability of traditional excavation and replacement.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle permits for sewer line work in NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, sewer line repair and replacement in New Jersey requires permits from the local municipality. We handle all permit applications, coordinate required inspections, and ensure all work meets NJ plumbing code requirements. This is included in our service.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/copper-pipe-repiping-service.jpg"
            alt="Sewer line repair and replacement in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Structural Repair Specialists</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sewer Line Repair & Replacement in East Brunswick & Middlesex County, NJ
            </h1>
            <p className="text-xl text-gray-200 mb-6 max-w-2xl">
              Expert structural sewer line repair and trenchless replacement. We fix broken, collapsed, and damaged sewer lines permanently using camera inspection, CIPP lining, and pipe bursting. No quick fixes - just lasting solutions.
            </p>
            <div className="bg-amber-900/50 border border-amber-600 rounded-lg p-4 mb-6 max-w-2xl">
              <p className="text-amber-200">
                <strong>Note:</strong> We specialize in permanent structural repairs. We do not offer sewer cleaning or snaking services.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
              </a>
              <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span>&#10003; Trenchless Repairs</span>
              <span>&#10003; Camera Inspection</span>
              <span>&#10003; Permanent Solutions</span>
              <span>&#10003; Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-3xl">

              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  A damaged sewer line is one of the most serious plumbing problems a homeowner can face. Raw sewage backing up into your home, foul odors, soggy yards, and potential foundation damage are all consequences of a failing sewer line. Illyrian Plumber provides professional <strong>sewer line repair</strong> and <strong>sewer line replacement</strong> across East Brunswick and all of Middlesex County, NJ. We specialize in permanent structural repairs - not temporary fixes - using advanced techniques like trenchless pipe lining and pipe bursting.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in sewer line repair and mechanical plumbing in Middlesex County, NJ. We offer <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700">
                  Many homes in Middlesex County were built between the 1950s and 1980s with cast iron or clay sewer pipes that are now 40-70 years old. These aging pipes are susceptible to root intrusion, corrosion, joint separation, and collapse. When your sewer line fails, you need a plumber who understands the different <strong>sewer repair</strong> methods available and can recommend the most effective, cost-efficient solution for your specific situation. For a comprehensive overview of trenchless technology, read our blog post on <Link href="/blog/trenchless-sewer-repair-guide" className="text-red-700 hover:text-red-800 underline">trenchless sewer repair</Link>.
                </p>
                <p className="text-gray-700">
                  If you suspect a sewer line problem, early detection is critical. Our blog post on <Link href="/blog/signs-of-slab-leak-sewer-line" className="text-red-700 hover:text-red-800 underline">signs of a slab leak or sewer line issue</Link> explains the warning signs to watch for and when to call a professional.
                </p>
              </div>

              {/* Signs You Need Sewer Line Repair */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs You Need Sewer Line Repair</h2>
              <p className="text-gray-700 mb-6">
                Sewer line damage often develops slowly, and the warning signs can be subtle at first. If you notice any of the following symptoms, contact us for a <strong>sewer camera inspection</strong> to identify the problem:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  { sign: "Multiple Slow Drains", desc: "When multiple fixtures drain slowly at the same time, the problem is usually in the main sewer line, not individual drains." },
                  { sign: "Sewage Backups", desc: "Sewage backing up through floor drains, toilets, or tubs is a clear sign of a blocked or damaged sewer line." },
                  { sign: "Gurgling Sounds", desc: "Gurgling or bubbling noises from drains when you flush a toilet or run water indicates a venting issue or sewer line blockage." },
                  { sign: "Foul Odors", desc: "Persistent sewer smell from drains or in your yard can indicate a cracked or broken sewer pipe leaking waste into the soil." },
                  { sign: "Soggy Yard Patches", desc: "Unexplained wet or soggy areas in your yard, especially in a line from the house to the street, suggest a leaking sewer line." },
                  { sign: "Extra Green Grass", desc: "A strip of unusually lush, green grass in your yard can indicate a sewer line leak fertilizing the soil beneath." },
                  { sign: "Foundation Cracks", desc: "A leaking sewer line beneath or near your foundation can erode soil and cause settling, leading to cracks." },
                  { sign: "Sinkholes in Yard", desc: "Small sinkholes or depressions in your yard can form when a broken sewer pipe washes away surrounding soil." },
                  { sign: "Pest Problems", desc: "Rodents and insects are attracted to sewer line breaks. An unexplained increase in pests may point to a cracked sewer pipe." },
                  { sign: "Mold or Mildew Growth", desc: "Persistent moisture from a leaking sewer line near your foundation can lead to mold growth in your basement or crawl space." },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">{item.sign}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Common Causes */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Causes of Sewer Line Damage</h2>
              <p className="text-gray-700 mb-6">
                Understanding what causes <strong>sewer pipe repair</strong> needs can help you recognize problems early. Here are the most common causes of sewer line damage in Middlesex County, NJ:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "Tree Root Intrusion", desc: "Tree roots naturally seek water sources and can penetrate tiny cracks or joints in sewer pipes. Once inside, roots grow and expand, blocking flow and eventually crushing the pipe. Older clay and cast iron pipes are especially vulnerable." },
                  { title: "Pipe Corrosion and Deterioration", desc: "Cast iron pipes corrode from the inside out over decades. Clay pipes become brittle and crack with age. Many Middlesex County homes built before 1980 have original sewer lines that are reaching the end of their usable life." },
                  { title: "Ground Shifting and Settling", desc: "New Jersey's clay-heavy soil expands and contracts with moisture changes and freeze-thaw cycles. This movement can shift, crack, or offset sewer pipe joints, creating gaps where roots enter and waste leaks out." },
                  { title: "Pipe Collapse", desc: "Severely corroded or deteriorated pipes can partially or fully collapse, completely blocking sewer flow. This is most common in cast iron pipes over 50 years old." },
                  { title: "Joint Separation", desc: "Sewer pipe joints can separate due to ground movement, settling, or deterioration of the joint material. Separated joints allow infiltration and root entry." },
                  { title: "Bellying (Pipe Sag)", desc: "A section of pipe that has sunk below the rest of the line creates a low point where waste accumulates. This belly collects paper, grease, and solids, causing repeated backups." },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Mid-content CTA */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Suspect a Sewer Line Problem?</p>
                  <p className="text-gray-300 text-sm">Get a professional camera inspection and repair assessment.</p>
                </div>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
                </div>
              </div>

              {/* Sewer Camera Inspection */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sewer Camera Inspection</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700">
                  Before recommending any repair, we perform a thorough <strong>sewer camera inspection</strong>. This is the most important step in the process because it tells us exactly what is wrong, where the damage is, and how extensive it is. Without a camera inspection, any repair is essentially a guess.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What Our Camera Inspection Reveals</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>- <strong>Exact location</strong> of the damage (measured in feet from the access point)</li>
                  <li>- <strong>Type of damage</strong> - cracks, root intrusion, corrosion, collapse, joint separation, belly</li>
                  <li>- <strong>Extent of damage</strong> - localized spot or full-length deterioration</li>
                  <li>- <strong>Pipe material</strong> - cast iron, clay, PVC, orangeburg, or other</li>
                  <li>- <strong>Pipe diameter</strong> - important for selecting the right repair method</li>
                  <li>- <strong>Overall pipe condition</strong> - helps determine if spot repair or full replacement is needed</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  We show you the camera footage in real time and explain everything we find. You will see exactly what we see so you can make an informed decision about repair options.
                </p>
              </div>

              {/* Repair Methods */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Sewer Line Repair Methods</h2>
              <p className="text-gray-700 mb-6">
                We offer multiple <strong>sewer repair</strong> methods and recommend the best approach based on the camera inspection findings. Each method has advantages depending on the type and extent of damage.
              </p>
              <div className="space-y-6 mb-12">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Trenchless Pipe Lining (CIPP)</h3>
                  <p className="text-gray-600 mb-4">
                    Cured-in-place pipe lining is the most advanced <strong>trenchless sewer repair</strong> method. We insert a flexible, resin-coated liner into the existing damaged pipe, inflate it against the pipe walls, and cure it in place. The result is essentially a brand new, seamless pipe inside your old pipe. This method is ideal for pipes with cracks, root intrusion damage, joint separation, and moderate corrosion. For more details, read our complete guide on <Link href="/blog/trenchless-sewer-repair-guide" className="text-red-700 hover:text-red-800 underline">trenchless sewer repair</Link>.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Advantages:</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>- No major digging required</li>
                        <li>- Preserves landscaping and driveways</li>
                        <li>- 50+ year expected lifespan</li>
                        <li>- Completed in 1-2 days</li>
                        <li>- Seamless, jointless result</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Best For:</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>- Cracked pipes</li>
                        <li>- Root-damaged pipes</li>
                        <li>- Joint separation</li>
                        <li>- Moderate corrosion</li>
                        <li>- Pipes under landscaping, driveways, or structures</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pipe Bursting</h3>
                  <p className="text-gray-600 mb-4">
                    For severely damaged or collapsed pipes where lining is not possible, pipe bursting pulls a new HDPE (high-density polyethylene) pipe through the existing pipe while simultaneously breaking apart the old one. This method replaces the entire pipe without traditional excavation.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Advantages:</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>- Replaces entire pipe</li>
                        <li>- Can upsize pipe diameter</li>
                        <li>- Minimal surface disruption</li>
                        <li>- New HDPE pipe is extremely durable</li>
                        <li>- Ideal for severely damaged pipes</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Best For:</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>- Collapsed pipes</li>
                        <li>- Heavily corroded pipes</li>
                        <li>- Orangeburg pipes</li>
                        <li>- When upsizing is needed</li>
                        <li>- Full-length replacement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Traditional Excavation</h3>
                  <p className="text-gray-600 mb-4">
                    When trenchless methods are not suitable - for example, when the pipe has completely collapsed in multiple locations, when there are major bellies, or when access points are not available for trenchless equipment - we perform precise excavation to access and replace damaged sections.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Advantages:</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>- Complete access to damage</li>
                        <li>- Spot repairs or full replacement</li>
                        <li>- Can correct bellies and grade issues</li>
                        <li>- Sometimes the only option</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Best For:</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>- Complete pipe collapse</li>
                        <li>- Severe bellying</li>
                        <li>- Shallow pipe access</li>
                        <li>- Grade correction needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Process */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Sewer Line Repair Process</h2>
              <p className="text-gray-700 mb-6">
                From initial contact to completed repair, here is what to expect when you hire Illyrian Plumber for <strong>sewer line repair near me</strong> service:
              </p>
              <div className="space-y-6 mb-12">
                {[
                  { step: "1", title: "Initial Consultation", desc: "Call Niti or Danny. We discuss your symptoms, ask about the age of your home, and schedule a camera inspection. If you are experiencing an active backup, we prioritize your appointment." },
                  { step: "2", title: "Camera Inspection", desc: "Our technician inserts a high-definition waterproof camera into your sewer line through an access point (cleanout or drain). We record the entire inspection and identify all damage. You watch the footage with us in real time." },
                  { step: "3", title: "Diagnosis and Recommendations", desc: "Based on the camera findings, we explain what is damaged, why it happened, and present your repair options with upfront pricing for each method. We recommend the most effective and cost-efficient approach." },
                  { step: "4", title: "Permits", desc: "We pull all required NJ plumbing permits for the sewer line work. This ensures your repair meets all code requirements and protects your home insurance coverage." },
                  { step: "5", title: "Repair or Replacement", desc: "Our crew executes the repair using the agreed-upon method. For trenchless repairs, we set up access points and complete the lining or pipe bursting. For excavation, we dig precisely, replace the damaged section, and backfill." },
                  { step: "6", title: "Post-Repair Camera Inspection", desc: "After the repair is complete, we run the camera through the line again to verify that the repair is perfect - proper flow, no gaps, no defects. You see the before-and-after comparison." },
                  { step: "7", title: "Cleanup and Restoration", desc: "We restore any disturbed areas, backfill excavations, and clean up the work site. For trenchless repairs, there is minimal restoration needed since we did not dig." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cost Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sewer Line Repair Cost in New Jersey</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700">
                  The <strong>sewer line replacement cost</strong> varies significantly based on the repair method, length of pipe, depth, accessibility, and site conditions. Below are typical price ranges for the Middlesex County, NJ area. All quotes are provided upfront after our camera inspection.
                </p>
              </div>
              <div className="overflow-x-auto mb-12">
                <table className="w-full text-sm border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Service</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Typical Cost</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {[
                      { service: "Sewer Camera Inspection", cost: "$200 - $500", time: "1 hour" },
                      { service: "Spot Repair (Excavation)", cost: "$1,500 - $4,000", time: "1-2 days" },
                      { service: "Trenchless Pipe Lining (CIPP)", cost: "$4,000 - $10,000", time: "1-2 days" },
                      { service: "Pipe Bursting", cost: "$5,000 - $15,000", time: "1-2 days" },
                      { service: "Full Excavation Replacement", cost: "$5,000 - $20,000+", time: "2-5 days" },
                      { service: "Cleanout Installation", cost: "$800 - $2,000", time: "2-4 hours" },
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4">{item.service}</td>
                        <td className="text-center py-3 px-4">{item.cost}</td>
                        <td className="text-center py-3 px-4">{item.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
                <h3 className="font-bold text-gray-900 mb-2">What Affects Your Sewer Repair Cost?</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>- <strong>Length of damaged pipe</strong> - Longer sections cost more to repair or replace</li>
                  <li>- <strong>Depth of the sewer line</strong> - Deeper pipes require more excavation or more complex trenchless setups</li>
                  <li>- <strong>Accessibility</strong> - Pipes under driveways, structures, or landscaping may require specialized equipment</li>
                  <li>- <strong>Type of damage</strong> - Simple cracks vs. complete collapse affects the repair method and cost</li>
                  <li>- <strong>Pipe material</strong> - Some materials are more difficult to repair or require specific methods</li>
                  <li>- <strong>Permits and inspections</strong> - Required in NJ and included in our pricing</li>
                </ul>
              </div>

              {/* Mid-content CTA 2 */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Need a Sewer Line Assessment?</p>
                  <p className="text-gray-300 text-sm">Camera inspection and repair quote - permanent solutions only.</p>
                </div>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
                </div>
              </div>

              {/* Why Choose a Licensed Plumber */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose a Licensed Plumber for Sewer Line Work</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700">
                  Sewer line repair involves working with waste systems, excavation, and complex repair techniques. In New Jersey, sewer line work must be performed by a licensed plumber and requires municipal permits. Here is why this matters:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  { title: "Accurate Diagnosis", desc: "Without a camera inspection and experienced interpretation, the true cause of sewer problems is often misidentified. We find the actual problem and repair it permanently." },
                  { title: "Right Repair Method", desc: "Not every sewer problem needs the same solution. A licensed plumber evaluates the damage and recommends the most effective, cost-efficient repair method for your specific situation." },
                  { title: "NJ Code Compliance", desc: "Sewer line work must meet NJ plumbing code requirements. Improper repairs can lead to failed inspections, repeated failures, and liability issues." },
                  { title: "Permit Handling", desc: "NJ requires permits for sewer line repair and replacement. We handle the entire permit process and coordinate all required inspections." },
                  { title: "Liability Protection", desc: "Sewer line work can affect neighboring properties, municipal sewer connections, and utility lines. Licensed plumbers carry proper insurance to protect you." },
                  { title: "Warranty on Work", desc: "Our sewer line repairs come with a warranty. If anything goes wrong with the repair, we come back and fix it at no additional cost." },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* NJ-Specific Considerations */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">NJ-Specific Sewer Line Considerations</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700">
                  New Jersey has specific conditions that affect sewer line repair and replacement:
                </p>
                <ul className="text-gray-700 space-y-3 list-disc pl-6">
                  <li><strong>Older pipe materials</strong> - Many Middlesex County homes have original cast iron, clay, or even orangeburg sewer pipes from the 1950s-1980s. These materials have a limited lifespan and are the most common reason for sewer line failure in our area.</li>
                  <li><strong>Tree-lined neighborhoods</strong> - East Brunswick, Edison, Old Bridge, and other Middlesex County communities have mature trees that pose a significant root intrusion risk to sewer lines.</li>
                  <li><strong>Clay soil</strong> - NJ clay-heavy soil expands and contracts with moisture and temperature changes. This soil movement is a leading cause of pipe shifting, joint separation, and bellying.</li>
                  <li><strong>Freeze-thaw cycles</strong> - NJ winters cause repeated freeze-thaw cycles that can shift soil and stress pipe joints. Shallow sewer lines are especially vulnerable.</li>
                  <li><strong>Municipal connection requirements</strong> - When replacing a sewer line, the connection to the municipal sewer main must meet specific requirements. We coordinate with local municipalities to ensure proper connection.</li>
                  <li><strong>Homeowner responsibility</strong> - In NJ, homeowners are typically responsible for the sewer line from their home to the municipal main in the street. This includes repairs needed in the front yard and under the street in some cases.</li>
                </ul>
              </div>

              {/* Middlesex County Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sewer Line Repair in Middlesex County, NJ</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700">
                  Illyrian Plumber is based in East Brunswick and provides <strong>sewer line repair near me</strong> service throughout Middlesex County. We understand the local soil conditions, pipe materials, and municipal requirements in every community:
                </p>
                <ul className="text-gray-700 space-y-2 list-disc pl-6">
                  <li><strong>East Brunswick</strong> - Our home base. Many homes built in the 1960s-1980s with cast iron or clay sewer lines that are due for inspection and repair.</li>
                  <li><strong>Edison</strong> - Large township with diverse housing stock and varying sewer line ages. We handle everything from root intrusion repairs to full-line replacement.</li>
                  <li><strong>Sayreville</strong> - Including Parlin. Older homes in this area often have clay sewer pipes susceptible to root intrusion and joint separation.</li>
                  <li><strong>Old Bridge</strong> - Extensive residential development from multiple decades. Original sewer lines in older sections are commonly failing.</li>
                  <li><strong>Monroe Township</strong> - Including newer developments and active adult communities. Even newer homes can experience sewer line issues from ground settling.</li>
                  <li><strong>South Brunswick</strong> - Including Kendall Park and Dayton. Mature trees in established neighborhoods are a common cause of root intrusion.</li>
                  <li><strong>North Brunswick</strong> - Adjacent to East Brunswick for fast response. Mix of older and newer sewer line materials throughout the township.</li>
                </ul>
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Sewer Line Repair</h2>
              <div className="space-y-4 mb-12">
                {[
                  { q: "How much does sewer line repair cost in NJ?", a: "Sewer line repair in NJ ranges from $1,500-$4,000 for spot repairs, $4,000-$10,000 for trenchless pipe lining (CIPP), $5,000-$15,000 for pipe bursting, and $5,000-$20,000+ for full excavation replacement. We provide upfront pricing after camera inspection." },
                  { q: "What is trenchless sewer repair?", a: "Trenchless sewer repair fixes damaged pipes without digging up your yard. CIPP lining installs a new pipe inside the existing pipe, while pipe bursting pulls a new pipe through while breaking the old one. Both methods minimize disruption and are completed in 1-2 days." },
                  { q: "How do I know if my sewer line needs repair?", a: "Look for multiple slow drains, sewage backups, gurgling sounds, foul odors, soggy yard patches, unusually green grass, and foundation cracks. A sewer camera inspection can identify the exact problem." },
                  { q: "What causes sewer line damage?", a: "Common causes include tree root intrusion, pipe corrosion and age, ground shifting and settling, pipe collapse, and joint separation. Many Middlesex County homes have original sewer lines from the 1960s-1980s that are reaching end of life." },
                  { q: "How long does sewer line repair take?", a: "Trenchless repairs take 1-2 days. Traditional excavation takes 2-5 days depending on scope. Camera inspection takes about 1 hour." },
                  { q: "Do you offer sewer camera inspection?", a: "Yes, we use high-definition waterproof cameras to inspect sewer lines. We show you the footage in real time and explain what we find. Camera inspection is included with repair service." },
                  { q: "Is trenchless repair as durable as traditional replacement?", a: "Yes. CIPP lining has a 50+ year expected lifespan, and pipe bursting installs new HDPE pipe that is extremely durable. Both methods meet or exceed the durability of traditional replacement." },
                  { q: "Do you handle permits for sewer work in NJ?", a: "Yes, we handle all permit applications and inspection coordination. This is included in our service. NJ requires permits for sewer line repair and replacement." },
                ].map((faq, index) => (
                  <details key={index} className="bg-gray-50 rounded-lg group">
                    <summary className="p-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 rounded-lg transition">
                      {faq.q}
                    </summary>
                    <p className="px-4 pb-4 text-gray-600 text-sm">{faq.a}</p>
                  </details>
                ))}
              </div>

              {/* Related Services */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">Water Leak Detection</Link>
                  <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping</Link>
                  <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections</Link>
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Services</Link>
                  <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 font-medium">Gas Line Services</Link>
                  <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800 font-medium">Water Heater Repair</Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                {/* Call Now */}
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need Sewer Line Help?</p>
                  <p className="text-gray-600 text-sm mb-4">Professional assessment and permanent repair solutions.</p>
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
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                    <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                    <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Services</Link></li>
                    <li><Link href="/services/plumbing-safety-inspections" className="text-gray-700 hover:text-red-700 transition">Plumbing Inspections</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>
                {/* Related Blogs */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Related Articles</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/trenchless-sewer-repair-guide" className="text-gray-700 hover:text-red-700 transition">Trenchless Sewer Repair Guide</Link></li>
                    <li><Link href="/blog/signs-of-slab-leak-sewer-line" className="text-gray-700 hover:text-red-700 transition">Signs of a Slab Leak or Sewer Line Issue</Link></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Sewer Line Repair?</h2>
          <p className="text-xl text-red-100 mb-8">Contact us for a professional camera inspection and repair quote.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Call {BUSINESS_INFO.phone2}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
