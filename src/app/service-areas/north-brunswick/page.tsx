import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumber in North Brunswick NJ",
  description: "Licensed plumber in North Brunswick, NJ. Water heaters, boilers, gas lines, repiping, and emergency plumbing. 10 minutes from East Brunswick. Serving Rutgers area and Route 1 corridor. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/north-brunswick",
  },
  keywords: [
    "north brunswick plumber",
    "plumber near me north brunswick",
    "emergency plumber north brunswick",
    "water heater repair north brunswick",
    "plumbing services north brunswick nj",
    "plumber north brunswick nj",
    "licensed plumber north brunswick",
    "boiler repair north brunswick",
    "drain cleaning north brunswick",
    "gas line repair north brunswick",
    "24 hour plumber north brunswick",
    "plumber near rutgers nj",
  ],
};

export default function NorthBrunswickPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://www.illyrianplumber.com/#organization",
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    url: "https://www.illyrianplumber.com/service-areas/north-brunswick",
    address: { "@type": "PostalAddress", streetAddress: BUSINESS_INFO.address.street, addressLocality: BUSINESS_INFO.address.city, addressRegion: "NJ", postalCode: BUSINESS_INFO.address.zip, addressCountry: "US" },
    areaServed: { "@type": "City", name: "North Brunswick", containedInPlace: { "@type": "State", name: "New Jersey" } },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "5", bestRating: "5" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can you get to North Brunswick for a plumbing emergency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We can reach most North Brunswick locations within 10 minutes from our East Brunswick headquarters. North Brunswick is one of our closest service areas, and we have fast access via Route 1 and Route 130 corridors.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing services do you offer in North Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide a full range of plumbing services in North Brunswick including water heater repair and replacement, tankless water heater installation, boiler repair, gas line services, whole-house repiping, bathroom remodeling, sump pump installation, water leak detection, and 24/7 emergency plumbing.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer emergency plumbing in North Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide 24/7 emergency plumbing services throughout North Brunswick. Our proximity in East Brunswick means we can respond to North Brunswick emergencies in approximately 10 minutes, any time of day or night.",
        },
      },
      {
        "@type": "Question",
        name: "Do you service rental properties near Rutgers in North Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we service both homeowner and rental properties near the Rutgers area of North Brunswick. We work with landlords and property managers on plumbing maintenance, repairs, and tenant-reported issues. We also handle emergency situations for rental properties.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing problems are common in North Brunswick homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "North Brunswick homes commonly experience aging water heaters, corroded galvanized pipes in older homes, boiler issues during winter, drain clogs in multi-family properties near Rutgers, and hard water buildup affecting fixtures and appliances. We address all of these issues regularly.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a plumber charge in North Brunswick, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plumbing costs in North Brunswick depend on the type of service needed. We always provide upfront pricing before starting work - no hidden fees or surprise charges. Contact us for a free estimate on your specific plumbing project.",
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
            <p className="text-red-400 font-medium mb-4">Serving the Rutgers Area & All of North Brunswick</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumber in North Brunswick, NJ
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional plumbing services in North Brunswick, NJ. Illyrian Plumber serves all North Brunswick neighborhoods - from the Rutgers area to the Route 1 and Route 130 corridors. Just 10 minutes from our East Brunswick headquarters, we deliver fast and reliable plumbing service.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Trusted North Brunswick Plumber</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                North Brunswick Township sits right next to our East Brunswick home base, making it one of the fastest service areas we cover. The township features a mix of residential neighborhoods, from established single-family homes near the Rutgers University area to properties along the busy Route 1 and Route 130 corridors. Illyrian Plumber has been serving North Brunswick homeowners and landlords for over a decade, delivering licensed plumbing services with the speed and reliability of a true local company.
              </p>
              <p>
                The Route 1 corridor through North Brunswick is one of the busiest commercial areas in Middlesex County, but beyond the main roads lie quiet residential neighborhoods with homes dating from the 1950s through the present day. Older homes near the Rutgers area often have original plumbing systems that need updating - from corroded galvanized pipes to aging water heaters and boilers that are past their prime. Newer developments may have builder-grade fixtures that homeowners want to upgrade for better performance and efficiency.
              </p>
              <p>
                Whether you are a homeowner dealing with a plumbing emergency, a landlord managing a rental property near Rutgers, or planning a plumbing upgrade for your North Brunswick home, Illyrian Plumber brings licensed NJ Master Plumber expertise and honest, upfront pricing to every job. We are committed to treating every North Brunswick home with the same care and professionalism.
              </p>
            </div>

            {/* Services Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing Services in North Brunswick</h2>
            <p className="text-lg text-gray-600 mb-6">
              We offer a comprehensive range of residential plumbing services for North Brunswick homeowners and property managers. Click any service to learn more.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Services Available in North Brunswick</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why North Brunswick Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "10-minute response from East Brunswick - one of our closest areas",
                "24/7 emergency plumbing - nights, weekends, and holidays",
                "Licensed NJ Master Plumbers with full insurance coverage",
                "Over 10 years serving Middlesex County homeowners",
                "Experienced with rental property plumbing near Rutgers",
                "Upfront pricing - no hidden fees or surprise charges",
                "Familiar with North Brunswick's older home plumbing systems",
                "Free estimates on all major plumbing projects",
              ].map((reason, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4">
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>

            {/* Common Issues */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Plumbing Issues in North Brunswick Homes</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                North Brunswick's mix of older homes and rental properties creates specific plumbing challenges we see regularly. Here is what to watch for.
              </p>
              <ul className="space-y-3">
                <li><strong>Corroded Pipes in Older Homes:</strong> Many North Brunswick homes built before 1980 still have galvanized steel pipes that corrode from the inside, causing <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:underline">low water pressure</Link> and discolored water. <Link href="/services/whole-house-repiping" className="text-red-700 hover:underline">Whole-house repiping</Link> with modern copper or PEX is the permanent solution.</li>
                <li><strong>Water Heater Problems:</strong> Aging water heaters are one of the most common service calls in North Brunswick. Look for <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:underline">warning signs</Link> and consider whether a <Link href="/blog/tankless-vs-tank-water-heater" className="text-red-700 hover:underline">tankless or tank water heater</Link> is right for your home.</li>
                <li><strong>Drain Clogs:</strong> Multi-family and rental properties near the Rutgers area are prone to frequent drain issues. Our professional plumbers can diagnose and resolve stubborn clogs that household drain cleaners cannot.</li>
                <li><strong>Boiler Maintenance:</strong> North Brunswick's older homes often rely on boiler heating. Regular maintenance prevents <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:underline">common winter boiler problems</Link> like no heat, uneven heating, and strange noises.</li>
                <li><strong>Gas Line Concerns:</strong> If you smell gas or suspect a gas leak, call us immediately. Learn about <Link href="/blog/gas-leak-detection-safety" className="text-red-700 hover:underline">gas leak detection and safety</Link> to protect your family.</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time for North Brunswick</h3>
              <p className="text-gray-700 mb-2">
                North Brunswick is one of our closest service areas. From our East Brunswick headquarters, we can reach most North Brunswick locations in approximately <strong>10 minutes</strong>. The Route 1 and Route 130 corridors give us fast, direct access to every part of the township.
              </p>
              <p className="text-gray-700">
                For plumbing emergencies, we dispatch immediately and can often arrive in under 10 minutes. For scheduled service, we offer same-day and next-day appointments for North Brunswick residents.
              </p>
            </div>

            {/* Neighborhoods */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">North Brunswick Areas We Serve</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {["Rutgers Area", "Route 1 Corridor", "Route 130 Corridor", "Adams Lane Area", "Hermann Road Area", "Cozzens Lane Area", "Livingston Park", "North Brunswick Proper"].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
              ))}
            </div>

            {/* Blog Resources */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Plumbing Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <Link href="/blog/signs-water-heater-dying" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Signs Your Water Heater Is Dying</h3>
                <p className="text-gray-600 text-sm">Know when it is time for a replacement.</p>
              </Link>
              <Link href="/blog/common-boiler-problems-winter" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Common Boiler Problems in Winter</h3>
                <p className="text-gray-600 text-sm">Troubleshoot heating issues in your home.</p>
              </Link>
              <Link href="/blog/gas-leak-detection-safety" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Gas Leak Detection & Safety</h3>
                <p className="text-gray-600 text-sm">Keep your family safe from gas leaks.</p>
              </Link>
              <Link href="/blog/how-tankless-water-heaters-work" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">How Tankless Water Heaters Work</h3>
                <p className="text-gray-600 text-sm">Learn about on-demand hot water technology.</p>
              </Link>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions - North Brunswick Plumbing</h2>
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
              <p className="text-gray-600 mb-4">We also serve these communities near North Brunswick.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick (HQ)</Link>
                <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-medium">Edison</Link>
                <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick</Link>
                <Link href="/service-areas/monroe-township" className="text-red-700 hover:text-red-800 font-medium">Monroe Township</Link>
                <Link href="/service-areas/old-bridge" className="text-red-700 hover:text-red-800 font-medium">Old Bridge</Link>
                <Link href="/service-areas/middlesex-county" className="text-red-700 hover:text-red-800 font-medium">All of Middlesex County</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in North Brunswick?</h2>
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
