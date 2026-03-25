import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumber in Sayreville NJ",
  description: "Licensed plumber in Sayreville, NJ. Water heaters, boilers, gas lines, repiping, and emergency plumbing. Serving Parlin, Morgan, and all Sayreville areas. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/sayreville",
  },
  keywords: [
    "sayreville plumber",
    "plumber near me sayreville",
    "emergency plumber sayreville",
    "water heater repair sayreville",
    "plumbing services sayreville nj",
    "plumber sayreville nj",
    "licensed plumber sayreville",
    "boiler repair sayreville",
    "drain cleaning sayreville",
    "gas line repair sayreville",
    "24 hour plumber sayreville",
    "plumber parlin nj",
  ],
};

export default function SayrevillePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://www.illyrianplumber.com/#organization",
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    url: "https://www.illyrianplumber.com/service-areas/sayreville",
    address: { "@type": "PostalAddress", streetAddress: BUSINESS_INFO.address.street, addressLocality: BUSINESS_INFO.address.city, addressRegion: "NJ", postalCode: BUSINESS_INFO.address.zip, addressCountry: "US" },
    areaServed: { "@type": "City", name: "Sayreville", containedInPlace: { "@type": "State", name: "New Jersey" } },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "5", bestRating: "5" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can you get to Sayreville for a plumbing emergency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We can typically reach Sayreville within 10-15 minutes from our East Brunswick headquarters. Parlin and areas closer to Route 9 are the fastest to reach, while Morgan and neighborhoods near the South Amboy border take slightly longer.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing services do you offer in Sayreville?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a complete range of plumbing services in Sayreville including water heater repair and replacement, tankless water heater installation, boiler repair, gas line services, whole-house repiping, bathroom remodeling, sump pump services, and 24/7 emergency plumbing.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer emergency plumbing in Sayreville?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide 24/7 emergency plumbing services throughout Sayreville, including Parlin, Morgan, and all surrounding neighborhoods. Our team is available nights, weekends, and holidays for urgent plumbing problems.",
        },
      },
      {
        "@type": "Question",
        name: "Do you serve the Parlin area of Sayreville?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Parlin is one of the Sayreville neighborhoods we service most frequently. We also serve Morgan, the South Amboy border area, and all communities along Route 9 and the Garden State Parkway corridor.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing problems are common in Sayreville homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sayreville homes commonly experience sump pump issues due to the area's proximity to the Raritan River and high water tables, aging water heaters in older Parlin homes, and boiler problems during winter.",
        },
      },
      {
        "@type": "Question",
        name: "Are your plumbers licensed to work in Sayreville, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all of our plumbers are fully licensed NJ Master Plumbers with comprehensive insurance coverage. We are authorized to perform all plumbing work in Sayreville and throughout Middlesex County.",
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
            <p className="text-red-400 font-medium mb-4">Serving Parlin, Morgan & All of Sayreville</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumber in Sayreville, NJ
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional plumbing services in Sayreville, NJ. From Parlin to Morgan and the South Amboy border, Illyrian Plumber serves all of Sayreville with expert plumbing repair, installation, and 24/7 emergency services. Just 10-15 minutes from our East Brunswick headquarters.
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

      {/* Local Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Reliable Plumbing for Sayreville Homeowners</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Sayreville is a close neighbor to our East Brunswick home base, and we have been providing professional plumbing services to Sayreville residents for over a decade. Whether you live in the established neighborhoods of Parlin, the waterfront community of Morgan, or near the South Amboy border, our licensed plumbers can reach you quickly via Route 9 or the Garden State Parkway.
              </p>
              <p>
                Sayreville's location along the Raritan River and its tributaries means that many homes in the area deal with unique plumbing challenges related to high water tables and moisture. Sump pumps are essential for many Sayreville properties, and aging infrastructure in older sections of Parlin means that pipe replacement and water heater upgrades are common needs. Our team understands these local conditions and brings the right solutions for Sayreville homes.
              </p>
              <p>
                As licensed NJ Master Plumbers with over 10 years of experience serving Middlesex County, we deliver the same quality workmanship and honest pricing that has made us a trusted name throughout the region. Every job comes with upfront pricing - no hidden fees or surprise charges after the work is done.
              </p>
            </div>

            {/* Services Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing Services in Sayreville</h2>
            <p className="text-lg text-gray-600 mb-6">
              We offer comprehensive plumbing services for Sayreville homeowners. Click any service below to learn more.
            </p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Services Available in Sayreville</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Sayreville Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "10-15 minute response from East Brunswick via Route 9",
                "24/7 emergency plumbing - nights, weekends, and holidays",
                "Licensed NJ Master Plumbers with full insurance",
                "Over 10 years serving Middlesex County homeowners",
                "Experienced with Sayreville's high water table challenges",
                "Upfront pricing with no hidden fees or surprises",
                "Sump pump specialists for flood-prone properties",
                "Free estimates on all major plumbing projects",
              ].map((reason, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4">
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>

            {/* Common Issues */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Plumbing Issues in Sayreville Homes</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Sayreville's geography and housing mix create specific plumbing challenges. Here are the most common issues we address for Sayreville homeowners.
              </p>
              <ul className="space-y-3">
                <li><strong>Sump Pump Failures:</strong> With the Raritan River nearby and high water tables in many Sayreville neighborhoods, a reliable <Link href="/services/sump-pump-repair-install" className="text-red-700 hover:underline">sump pump</Link> is critical. Our <Link href="/blog/sump-pump-maintenance-guide" className="text-red-700 hover:underline">sump pump maintenance guide</Link> can help you stay ahead of problems.</li>
                <li><strong>Aging Water Heaters:</strong> Older Parlin homes often have water heaters that are well past their expected lifespan. Look for <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:underline">signs your water heater is dying</Link> and consider upgrading to a <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless water heater</Link>.</li>
                <li><strong>Frozen Pipes in Winter:</strong> Sayreville's coastal proximity can bring harsh winter conditions. Learn about <Link href="/blog/frozen-pipes-prevention-repair" className="text-red-700 hover:underline">frozen pipe prevention and repair</Link> to protect your home during cold snaps.</li>
                <li><strong>Boiler Problems:</strong> Many Sayreville homes use boiler heating systems that need regular maintenance. Address <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:underline">common boiler problems</Link> before winter hits.</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time for Sayreville</h3>
              <p className="text-gray-700 mb-2">
                From our East Brunswick office, we can reach most Sayreville locations in <strong>10-15 minutes</strong>. Parlin and areas along Route 9 are the fastest to reach, typically under 10 minutes. Morgan and neighborhoods closer to the Garden State Parkway take slightly longer but are still within our rapid response window.
              </p>
              <p className="text-gray-700">
                For non-emergency appointments, we offer same-day and next-day scheduling for Sayreville residents. Call us to book a convenient time.
              </p>
            </div>

            {/* Areas Served */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sayreville Neighborhoods We Serve</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {["Parlin", "Morgan", "South Amboy Border", "Route 9 Corridor", "Garden State Parkway Area", "Sayreville Proper", "Ernston", "Melrose"].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
              ))}
            </div>

            {/* Blog Resources */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Plumbing Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <Link href="/blog/sump-pump-maintenance-guide" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Sump Pump Maintenance Guide</h3>
                <p className="text-gray-600 text-sm">Keep your sump pump running when you need it most.</p>
              </Link>
              <Link href="/blog/signs-water-heater-dying" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Signs Your Water Heater Is Dying</h3>
                <p className="text-gray-600 text-sm">Know when it is time for a replacement.</p>
              </Link>
              <Link href="/blog/frozen-pipes-prevention-repair" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Frozen Pipe Prevention & Repair</h3>
                <p className="text-gray-600 text-sm">Protect your pipes during NJ winters.</p>
              </Link>
              <Link href="/blog/gas-leak-detection-safety" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Gas Leak Detection & Safety</h3>
                <p className="text-gray-600 text-sm">Important safety information for homeowners.</p>
              </Link>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions - Sayreville Plumbing</h2>
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

            {/* Nearby Service Areas */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Service Areas</h3>
              <p className="text-gray-600 mb-4">We also serve these communities near Sayreville.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick (HQ)</Link>
                <Link href="/service-areas/old-bridge" className="text-red-700 hover:text-red-800 font-medium">Old Bridge</Link>
                <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-medium">Edison</Link>
                <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick</Link>
                <Link href="/service-areas/north-brunswick" className="text-red-700 hover:text-red-800 font-medium">North Brunswick</Link>
                <Link href="/service-areas/middlesex-county" className="text-red-700 hover:text-red-800 font-medium">All of Middlesex County</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in Sayreville?</h2>
          <p className="text-xl text-red-100 mb-8">Fast service from your nearby plumbing experts. Available 24/7 for emergencies.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block">
              Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
            </a>
            <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition inline-block">
              Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
