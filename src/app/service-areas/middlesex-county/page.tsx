import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumber in Middlesex County NJ",
  description: "Professional plumbing services throughout Middlesex County, NJ. Serving East Brunswick, Edison, Old Bridge, Sayreville, Monroe Township, South Brunswick, and North Brunswick. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/middlesex-county",
  },
  keywords: [
    "middlesex county plumber",
    "plumber near me middlesex county",
    "plumbing services middlesex county nj",
    "emergency plumber middlesex county",
    "licensed plumber middlesex county",
    "water heater repair middlesex county",
    "boiler repair middlesex county nj",
    "plumber central nj",
    "drain cleaning middlesex county",
    "24 hour plumber middlesex county",
    "gas line repair middlesex county",
    "tankless water heater middlesex county",
  ],
};

const towns = [
  { name: "East Brunswick", slug: "east-brunswick", desc: "Our home base - 5 minute response times" },
  { name: "Edison", slug: "edison", desc: "Clara Barton, Nixon, Stelton - 10 minutes away" },
  { name: "Sayreville", slug: "sayreville", desc: "Parlin, Morgan, South Amboy border - 10-15 minutes" },
  { name: "Old Bridge", slug: "old-bridge", desc: "Madison Park, Laurence Harbor, Brownville - 10 minutes" },
  { name: "Monroe Township", slug: "monroe-township", desc: "Rossmoor, Concordia, Clearbrook - 15-20 minutes" },
  { name: "South Brunswick", slug: "south-brunswick", desc: "Kendall Park, Monmouth Junction, Dayton - 15 minutes" },
  { name: "North Brunswick", slug: "north-brunswick", desc: "Rutgers area, Route 1 and 130 - 10 minutes" },
];

export default function MiddlesexCountyPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://www.illyrianplumber.com/#organization",
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    url: "https://www.illyrianplumber.com/service-areas/middlesex-county",
    address: { "@type": "PostalAddress", streetAddress: BUSINESS_INFO.address.street, addressLocality: BUSINESS_INFO.address.city, addressRegion: "NJ", postalCode: BUSINESS_INFO.address.zip, addressCountry: "US" },
    areaServed: { "@type": "AdministrativeArea", name: "Middlesex County", containedInPlace: { "@type": "State", name: "New Jersey" } },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "5", bestRating: "5" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What towns do you serve in Middlesex County?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve East Brunswick (our home base), Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. We cover the central and southern portions of Middlesex County with fast response times from our East Brunswick headquarters.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can you respond to a plumbing emergency in Middlesex County?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Response times vary by location: East Brunswick in 5 minutes, Edison and North Brunswick in 10 minutes, Old Bridge and Sayreville in 10-15 minutes, South Brunswick in 15 minutes, and Monroe Township in 15-20 minutes. We provide 24/7 emergency service throughout the county.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing services do you offer in Middlesex County?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer comprehensive plumbing services including water heater repair and replacement, tankless water heater installation, boiler repair, gas line services, whole-house repiping, bathroom remodeling, sump pump services, water filtration, water leak detection, plumbing inspections, and 24/7 emergency plumbing.",
        },
      },
      {
        "@type": "Question",
        name: "Are you licensed to do plumbing work in Middlesex County, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Illyrian Plumber is fully licensed and insured in New Jersey. Our team holds NJ Master Plumber licenses and carries comprehensive liability insurance for all work performed throughout Middlesex County.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer free estimates for plumbing work in Middlesex County?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide free estimates on all major plumbing projects throughout Middlesex County. We also offer upfront pricing on all service calls so you know the cost before we begin work - no hidden fees or surprise charges.",
        },
      },
      {
        "@type": "Question",
        name: "Why should I choose Illyrian Plumber over other Middlesex County plumbers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Illyrian Plumber is a locally owned company based in East Brunswick with over 10 years of experience serving Middlesex County. We offer licensed NJ Master Plumbers, 24/7 emergency service, upfront pricing, and fast response times. Our reputation is built on honest work and fair pricing.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-red-400 font-medium mb-4">Serving All of Middlesex County</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumbing Services in Middlesex County, NJ
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Illyrian Plumber provides professional plumbing services throughout Middlesex County, NJ. Based in East Brunswick, our licensed plumbers serve Edison, Old Bridge, Sayreville, Monroe Township, South Brunswick, North Brunswick, and surrounding communities with fast response times and honest pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
              </a>
              <a href={BUSINESS_INFO.phone2Link} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* County Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Trusted Middlesex County Plumber</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Middlesex County is home to some of New Jersey's most vibrant communities, and Illyrian Plumber is proud to serve homeowners across the county from our East Brunswick headquarters at 697 Old Bridge Turnpike. For over a decade, we have built our reputation on reliable workmanship, transparent pricing, and the kind of fast response times that only a locally based company can deliver.
              </p>
              <p>
                From the Route 1 corridor running through Edison and North Brunswick to the waterfront communities of Sayreville and Old Bridge, and from the family neighborhoods of South Brunswick to the thriving adult communities of Monroe Township, our licensed NJ Master Plumbers know the unique plumbing needs of each area. Middlesex County homes range from pre-war bungalows to brand-new construction, and our team has the experience to handle any plumbing system, any age, and any challenge.
              </p>
              <p>
                Every job we take on comes with upfront pricing - we tell you the cost before we start, and there are never hidden fees or surprise charges. Whether you need a routine repair, an emergency fix at 2 AM, or a major plumbing upgrade, Illyrian Plumber is the team Middlesex County homeowners trust.
              </p>
            </div>

            {/* Towns Grid */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Towns We Serve in Middlesex County</h2>
            <p className="text-lg text-gray-600 mb-6">Click any town below to see the specific plumbing services and local information for your area.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {towns.map((town) => (
                <Link
                  key={town.slug}
                  href={`/service-areas/${town.slug}`}
                  className="bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-lg p-4 transition group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">
                    {town.name}, NJ
                  </h3>
                  <p className="text-gray-600 text-sm">{town.desc}</p>
                </Link>
              ))}
            </div>

            {/* Services */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Plumbing Services</h2>
            <p className="text-lg text-gray-600 mb-6">We offer a complete range of plumbing services throughout Middlesex County.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {SERVICE_PAGES.featured.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </Link>
              ))}
            </div>

            {/* Additional Services */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Services</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">Water Leak Detection</Link>
                <Link href="/services/sump-pump-repair-install" className="text-red-700 hover:text-red-800 font-medium">Sump Pump Services</Link>
                <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-medium">Toilet & Faucet Install</Link>
                <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium">Water Filtration Systems</Link>
                <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections</Link>
                <Link href="/services/radiant-heating-plumbing" className="text-red-700 hover:text-red-800 font-medium">Radiant Heating</Link>
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Plumbing</Link>
              </div>
            </div>

            {/* Why Choose Us */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Illyrian Plumber?</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { title: "Licensed & Insured", desc: "Fully licensed NJ Master Plumbers with comprehensive insurance for every job" },
                { title: "Local Experts", desc: "Based in East Brunswick, serving Middlesex County communities for 10+ years" },
                { title: "24/7 Emergency", desc: "Around the clock plumbing service for emergencies - nights, weekends, holidays" },
                { title: "Upfront Pricing", desc: "Know the cost before work begins - no hidden fees or surprise charges" },
                { title: "Fast Response", desc: "5-20 minute response times depending on your location in the county" },
                { title: "Free Estimates", desc: "Free estimates on all major plumbing projects throughout Middlesex County" },
              ].map((item, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Common County Issues */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Plumbing Issues in Middlesex County</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                After serving thousands of Middlesex County homes, we have identified the most common plumbing problems across the region.
              </p>
              <ul className="space-y-3">
                <li><strong>Aging Water Heaters:</strong> Many county homes have water heaters that are past their expected lifespan. Learn the <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:underline">signs your water heater is dying</Link> and explore <Link href="/blog/tankless-vs-tank-water-heater" className="text-red-700 hover:underline">tankless vs. tank options</Link>.</li>
                <li><strong>Hard Water Damage:</strong> Central New Jersey water causes mineral buildup in pipes and fixtures. Consider a <Link href="/services/water-filtration-system" className="text-red-700 hover:underline">water filtration system</Link> to protect your plumbing.</li>
                <li><strong>Boiler Problems:</strong> Many Middlesex County homes rely on boilers for heat. Address <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:underline">common winter boiler problems</Link> with regular maintenance.</li>
<li><strong>Frozen Pipes:</strong> New Jersey winters can freeze exposed pipes. Learn about <Link href="/blog/frozen-pipes-prevention-repair" className="text-red-700 hover:underline">frozen pipe prevention and repair</Link> to protect your home.</li>
              </ul>
            </div>

            {/* Blog Resources */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Plumbing Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <Link href="/blog/signs-water-heater-dying" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Signs Your Water Heater Is Dying</h3>
                <p className="text-gray-600 text-sm">Know when it is time for a replacement.</p>
              </Link>
              <Link href="/blog/how-much-does-a-tankless-water-heater-cost" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Tankless Water Heater Cost Guide</h3>
                <p className="text-gray-600 text-sm">Understand the investment before upgrading.</p>
              </Link>
              <Link href="/blog/sump-pump-maintenance-guide" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Sump Pump Maintenance Guide</h3>
                <p className="text-gray-600 text-sm">Keep your sump pump running reliably.</p>
              </Link>
              <Link href="/blog/gas-leak-detection-safety" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Gas Leak Detection & Safety</h3>
                <p className="text-gray-600 text-sm">Important safety information for homeowners.</p>
              </Link>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions - Middlesex County Plumbing</h2>
            <div className="space-y-4 mb-12">
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-lg group">
                  <summary className="p-4 font-semibold text-gray-900 cursor-pointer hover:text-red-700 transition">
                    {faq.name}
                  </summary>
                  <div className="px-4 pb-4 text-gray-700">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Phone:</strong> <a href={BUSINESS_INFO.phoneLink} className="text-red-700 hover:underline">{BUSINESS_INFO.phone}</a></p>
                <p><strong>Alt Phone:</strong> <a href={BUSINESS_INFO.phone2Link} className="text-red-700 hover:underline">{BUSINESS_INFO.phone2}</a></p>
                <p><strong>Address:</strong> {BUSINESS_INFO.address.full}</p>
                <p><strong>Hours:</strong> {BUSINESS_INFO.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in Middlesex County?</h2>
          <p className="text-xl text-red-100 mb-8">Call us today for professional plumbing services anywhere in the county.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
            </a>
            <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
