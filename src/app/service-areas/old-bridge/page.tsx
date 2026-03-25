import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumber in Old Bridge NJ",
  description: "Licensed plumber in Old Bridge, NJ. Water heaters, boilers, gas lines, repiping, and emergency plumbing. Serving Madison Park, Laurence Harbor, and all Old Bridge areas. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/old-bridge",
  },
  keywords: [
    "old bridge plumber",
    "plumber near me old bridge",
    "emergency plumber old bridge",
    "water heater repair old bridge",
    "plumbing services old bridge nj",
    "plumber old bridge nj",
    "licensed plumber old bridge",
    "boiler repair old bridge",
    "drain cleaning old bridge",
    "gas line repair old bridge",
    "24 hour plumber old bridge",
    "plumber madison park nj",
  ],
};

export default function OldBridgePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://www.illyrianplumber.com/#organization",
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    url: "https://www.illyrianplumber.com/service-areas/old-bridge",
    address: { "@type": "PostalAddress", streetAddress: BUSINESS_INFO.address.street, addressLocality: BUSINESS_INFO.address.city, addressRegion: "NJ", postalCode: BUSINESS_INFO.address.zip, addressCountry: "US" },
    areaServed: { "@type": "City", name: "Old Bridge", containedInPlace: { "@type": "State", name: "New Jersey" } },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "5", bestRating: "5" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can you get to Old Bridge for a plumbing emergency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We can reach most Old Bridge locations within 10 minutes from our East Brunswick headquarters. Madison Park and areas along Route 9 are the fastest to reach, while Laurence Harbor and Cliffwood Beach take slightly longer but are still within our rapid response window.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing services do you offer in Old Bridge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer complete plumbing services in Old Bridge including water heater repair and replacement, tankless water heater installation, boiler repair, gas line services, whole-house repiping, bathroom remodeling, sump pump services, water leak detection, and 24/7 emergency plumbing.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer emergency plumbing in Old Bridge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide 24/7 emergency plumbing services throughout Old Bridge Township. Whether you are in Madison Park, Brownville, Laurence Harbor, or Cliffwood Beach, our team is available nights, weekends, and holidays.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing problems are common in Old Bridge homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Old Bridge homes commonly experience aging water heaters, well water system issues in rural areas, sump pump failures in low-lying neighborhoods near Laurence Harbor, corroded galvanized pipes in older homes, and boiler problems during winter. We handle all of these issues regularly.",
        },
      },
      {
        "@type": "Question",
        name: "Do you serve Laurence Harbor and Cliffwood Beach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we serve all Old Bridge neighborhoods including Laurence Harbor, Cliffwood Beach, Madison Park, Brownville, and all communities along Routes 9 and 516. Our East Brunswick location gives us quick access to every corner of Old Bridge Township.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a plumber cost in Old Bridge, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plumbing costs in Old Bridge vary depending on the service needed. We provide upfront, transparent pricing before any work begins so you know exactly what to expect. Call us for a free estimate on your plumbing project.",
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
            <p className="text-red-400 font-medium mb-4">Serving Madison Park, Laurence Harbor & More</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumber in Old Bridge, NJ
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional plumbing services in Old Bridge, NJ. Illyrian Plumber serves Madison Park, Laurence Harbor, Brownville, Cliffwood Beach, and all Old Bridge neighborhoods with expert plumbing solutions. Just 10 minutes from our East Brunswick headquarters via Routes 9 and 516.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Trusted Plumbing for Old Bridge Township</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Old Bridge Township is one of the largest municipalities in Middlesex County, stretching from the established communities of Madison Park and Brownville to the waterfront neighborhoods of Laurence Harbor and Cliffwood Beach. Illyrian Plumber has been serving Old Bridge homeowners for over a decade, bringing licensed, professional plumbing services to every corner of this diverse township.
              </p>
              <p>
                Our East Brunswick headquarters puts us just a short drive from Old Bridge via Routes 9 and 516, allowing us to reach most Old Bridge addresses within 10 minutes. We know the township's neighborhoods well - from the split-level homes near Route 9 to the cape cods in Brownville and the bungalows along the Laurence Harbor waterfront. Each area has its own plumbing characteristics, and our experience means we can diagnose and resolve problems faster.
              </p>
              <p>
                Old Bridge's housing stock spans several decades, with many homes built in the 1960s through 1980s. These properties often have original plumbing systems that are showing their age - corroding galvanized pipes, inefficient water heaters, and boilers that need more frequent repairs. Whether you need a simple fix or a major upgrade, Illyrian Plumber brings the expertise and honest pricing that Old Bridge homeowners have come to trust.
              </p>
            </div>

            {/* Services Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing Services in Old Bridge</h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide a complete range of residential plumbing services to Old Bridge homeowners. Click any service to learn more.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Services Available in Old Bridge</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Old Bridge Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "10-minute response from East Brunswick via Route 9 and 516",
                "24/7 emergency plumbing - nights, weekends, and holidays",
                "Licensed NJ Master Plumbers with full insurance coverage",
                "Over 10 years of experience in Middlesex County",
                "Familiar with Old Bridge's older home plumbing systems",
                "Upfront pricing with no hidden fees or surprise charges",
                "Sump pump experts for flood-prone waterfront areas",
                "Free estimates on all major plumbing projects",
              ].map((reason, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4">
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>

            {/* Common Issues */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Plumbing Issues in Old Bridge Homes</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Old Bridge's varied housing stock and geography create specific plumbing challenges that we see frequently. Here is what Old Bridge homeowners should watch for.
              </p>
              <ul className="space-y-3">
                <li><strong>Aging Pipes in Older Homes:</strong> Many homes in Brownville, Madison Park, and other established neighborhoods were built with galvanized steel pipes that corrode over time, causing <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:underline">low water pressure</Link> and discolored water. <Link href="/services/whole-house-repiping" className="text-red-700 hover:underline">Whole-house repiping</Link> is often the best long-term solution.</li>
                <li><strong>Water Heater Failures:</strong> Homes built in the 1970s-1980s may be on their second or third water heater, and units installed 10+ years ago are reaching end of life. Look for <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:underline">signs your water heater is dying</Link> and consider a <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless upgrade</Link>.</li>
                <li><strong>Sump Pump Issues:</strong> Properties near Laurence Harbor and Cliffwood Beach often deal with high water tables and flooding risks. A reliable <Link href="/services/sump-pump-repair-install" className="text-red-700 hover:underline">sump pump system</Link> is essential. Read our <Link href="/blog/sump-pump-maintenance-guide" className="text-red-700 hover:underline">sump pump maintenance guide</Link> for tips.</li>
                <li><strong>Winter Boiler Problems:</strong> Many Old Bridge homes rely on boilers for heating. Regular maintenance can prevent <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:underline">common winter boiler issues</Link> like no heat, strange noises, or pilot light failures.</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time for Old Bridge</h3>
              <p className="text-gray-700 mb-2">
                Our East Brunswick headquarters is approximately <strong>10 minutes</strong> from most Old Bridge locations. Madison Park and central Old Bridge are the fastest to reach via Route 9, while Laurence Harbor and Cliffwood Beach take closer to 12-15 minutes.
              </p>
              <p className="text-gray-700">
                For plumbing emergencies, we dispatch immediately and can often arrive faster than the estimated time. For scheduled service, we offer same-day and next-day appointments for Old Bridge residents.
              </p>
            </div>

            {/* Neighborhoods */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Old Bridge Neighborhoods We Serve</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {["Madison Park", "Laurence Harbor", "Brownville", "Cliffwood Beach", "Route 9 Corridor", "Route 516 Corridor", "Old Bridge Proper", "Southwood"].map((area) => (
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
              <Link href="/blog/tankless-vs-tank-water-heater" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Tankless vs Tank Water Heaters</h3>
                <p className="text-gray-600 text-sm">Compare options for your home upgrade.</p>
              </Link>
              <Link href="/blog/sump-pump-maintenance-guide" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Sump Pump Maintenance Guide</h3>
                <p className="text-gray-600 text-sm">Essential for Old Bridge waterfront homes.</p>
              </Link>
              <Link href="/blog/how-long-bathroom-remodel-take" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">How Long Does a Bathroom Remodel Take?</h3>
                <p className="text-gray-600 text-sm">Plan your renovation timeline.</p>
              </Link>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions - Old Bridge Plumbing</h2>
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
              <p className="text-gray-600 mb-4">We also serve these communities near Old Bridge.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick (HQ)</Link>
                <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 font-medium">Sayreville</Link>
                <Link href="/service-areas/monroe-township" className="text-red-700 hover:text-red-800 font-medium">Monroe Township</Link>
                <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick</Link>
                <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-medium">Edison</Link>
                <Link href="/service-areas/middlesex-county" className="text-red-700 hover:text-red-800 font-medium">All of Middlesex County</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in Old Bridge?</h2>
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
