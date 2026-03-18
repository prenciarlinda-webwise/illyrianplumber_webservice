import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumber in Edison NJ",
  description: "Licensed plumber in Edison, NJ. Water heaters, boilers, gas lines, repiping, and emergency plumbing. 10 minutes from our East Brunswick HQ. Call (347) 461-4856.",
  keywords: [
    "edison plumber",
    "plumber near me edison",
    "emergency plumber edison",
    "water heater repair edison",
    "plumbing services edison nj",
    "plumber edison nj",
    "licensed plumber edison",
    "boiler repair edison",
    "drain cleaning edison",
    "gas line repair edison",
    "24 hour plumber edison",
    "tankless water heater edison",
  ],
};

export default function EdisonPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://www.illyrianplumber.com/#organization",
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    url: "https://www.illyrianplumber.com/service-areas/edison",
    address: { "@type": "PostalAddress", streetAddress: BUSINESS_INFO.address.street, addressLocality: BUSINESS_INFO.address.city, addressRegion: "NJ", postalCode: BUSINESS_INFO.address.zip, addressCountry: "US" },
    areaServed: { "@type": "City", name: "Edison", containedInPlace: { "@type": "State", name: "New Jersey" } },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "5", bestRating: "5" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can you get to Edison for a plumbing emergency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are based in East Brunswick, just minutes away from Edison. We can typically arrive in Edison within 10 minutes for emergency calls, serving Clara Barton, Nixon, Stelton, and all Edison neighborhoods.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing services do you offer in Edison?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer comprehensive plumbing services in Edison including water heater repair and replacement, tankless water heater installation, boiler repair, gas line services, drain cleaning, whole-house repiping, bathroom remodeling, sump pump installation, sewer line repair, and 24/7 emergency plumbing.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer emergency plumbing in Edison?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide 24/7 emergency plumbing services throughout Edison. Our proximity in East Brunswick means we can reach any Edison address quickly - typically within 10 minutes via Route 18 or Route 1.",
        },
      },
      {
        "@type": "Question",
        name: "Do you serve all neighborhoods in Edison, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we serve all Edison neighborhoods including Clara Barton, Nixon, Stelton, and areas along the Route 1 and Route 287 corridors. No matter where you are in Edison, we can get to you fast.",
        },
      },
      {
        "@type": "Question",
        name: "Why do Edison homeowners choose Illyrian Plumber?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Edison homeowners choose us for our fast 10-minute response times, upfront pricing, licensed NJ Master Plumbers, and 10+ years of experience serving Middlesex County. We treat every home with the same care and professionalism.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a plumber charge in Edison, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plumbing costs in Edison depend on the specific service needed. We always provide upfront pricing before starting any work - no hidden fees or surprise charges. Contact us for a free estimate on your plumbing project.",
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
            <p className="text-red-400 font-medium mb-4">Serving Edison & All Neighborhoods</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumber in Edison, NJ
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional plumbing services in Edison, NJ. Based in nearby East Brunswick, Illyrian Plumber provides fast 10-minute response times to Clara Barton, Nixon, Stelton, and every Edison neighborhood along the Route 1 and Route 287 corridors.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Trusted Plumbing Services Throughout Edison</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Edison Township is one of the largest and most diverse communities in Middlesex County, and Illyrian Plumber is proud to serve every corner of it. From the established neighborhoods of Clara Barton and Nixon to the bustling Stelton area near Rutgers, we bring licensed, professional plumbing services to Edison residents with the speed and reliability of a local company. Our East Brunswick headquarters is just a short drive via Route 18 or Route 1, putting us within 10 minutes of any Edison address.
              </p>
              <p>
                Edison's housing stock ranges from mid-century single-family homes in Clara Barton to newer townhome developments along the Route 1 corridor, and each type of property comes with its own set of plumbing challenges. Older homes may have original copper or galvanized steel pipes that are prone to corrosion and leaks, while newer construction sometimes has builder-grade fixtures that need upgrading. Our team has the experience to handle plumbing issues across all types of Edison properties.
              </p>
              <p>
                Whether you need a routine repair, a major installation, or an emergency plumber at 2 AM, Illyrian Plumber is the team Edison homeowners trust. We bring over 10 years of Middlesex County experience, licensed NJ Master Plumber credentials, and a commitment to honest, upfront pricing on every job.
              </p>
            </div>

            {/* Services Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing Services in Edison</h2>
            <p className="text-lg text-gray-600 mb-6">
              We offer a full range of residential plumbing services to Edison homeowners. Click any service to learn more.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Services Available in Edison</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                <Link href="/services/drain-cleaning" className="text-red-700 hover:text-red-800 font-medium">Drain Cleaning</Link>
                <Link href="/services/sewer-line-repair-replacement" className="text-red-700 hover:text-red-800 font-medium">Sewer Line Repair</Link>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Edison Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "10-minute response time from our East Brunswick headquarters",
                "Easy access via Route 1, Route 18, and Route 287",
                "Licensed NJ Master Plumbers with full insurance",
                "24/7 emergency plumbing service available",
                "Over 10 years of experience in Middlesex County",
                "Upfront pricing - no hidden fees or surprise charges",
                "Experienced with Edison's diverse housing stock",
                "Free estimates on all major plumbing projects",
              ].map((reason, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4">
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>

            {/* Common Issues */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Plumbing Issues in Edison Homes</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Edison homes face a range of plumbing challenges depending on the age and type of construction. Here are the most common issues we see when servicing Edison properties.
              </p>
              <ul className="space-y-3">
                <li><strong>Aging Water Heaters:</strong> Many Edison homes have tank water heaters that are past their prime. Watch for <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:underline">signs your water heater is dying</Link> and consider upgrading to a more efficient <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless water heater</Link>.</li>
                <li><strong>Hard Water Buildup:</strong> Central New Jersey water is moderately hard, which causes mineral buildup in pipes and fixtures over time. A <Link href="/services/water-filtration-system" className="text-red-700 hover:underline">water filtration system</Link> can help protect your plumbing.</li>
                <li><strong>Old Galvanized Pipes:</strong> Homes in Clara Barton and other older Edison neighborhoods may still have galvanized steel pipes that corrode from the inside out, causing <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:underline">low water pressure</Link> and rusty water.</li>
                <li><strong>Sewer Line Problems:</strong> Tree roots from Edison's mature landscaping can infiltrate older clay sewer lines. Our <Link href="/services/sewer-line-repair-replacement" className="text-red-700 hover:underline">sewer line repair services</Link> include <Link href="/blog/trenchless-sewer-repair-guide" className="text-red-700 hover:underline">trenchless options</Link> to minimize yard disruption.</li>
                <li><strong>Boiler Maintenance:</strong> Many Edison homes rely on boilers for heat. Regular maintenance prevents <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:underline">common winter boiler problems</Link> and keeps your system running efficiently.</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Response Times for Edison Residents</h3>
              <p className="text-gray-700 mb-2">
                Our East Brunswick headquarters is approximately <strong>10 minutes</strong> from most Edison locations. We reach Clara Barton and southern Edison neighborhoods even faster via Route 18, while Stelton and northern Edison are a quick drive up Route 1 or Route 287.
              </p>
              <p className="text-gray-700">
                For plumbing emergencies, we dispatch immediately and keep you updated on our estimated arrival time. For scheduled service, we offer flexible appointment windows including same-day availability.
              </p>
            </div>

            {/* Areas Served */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Edison Neighborhoods We Serve</h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide plumbing services to all Edison neighborhoods and surrounding areas, including:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {["Clara Barton", "Nixon", "Stelton", "Menlo Park", "Route 1 Corridor", "Route 287 Corridor", "Bonhamtown", "Raritan Center Area", "Oak Tree"].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
              ))}
            </div>

            {/* Blog Resources */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Plumbing Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <Link href="/blog/how-tankless-water-heaters-work" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">How Tankless Water Heaters Work</h3>
                <p className="text-gray-600 text-sm">Learn about on-demand hot water technology.</p>
              </Link>
              <Link href="/blog/how-much-does-a-tankless-water-heater-cost" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Tankless Water Heater Cost Guide</h3>
                <p className="text-gray-600 text-sm">Understand the investment before you buy.</p>
              </Link>
              <Link href="/blog/gas-leak-detection-safety" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Gas Leak Detection & Safety</h3>
                <p className="text-gray-600 text-sm">Know the signs and stay safe.</p>
              </Link>
              <Link href="/blog/signs-of-slab-leak-sewer-line" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Signs of a Slab Leak or Sewer Line Issue</h3>
                <p className="text-gray-600 text-sm">Catch hidden leaks early.</p>
              </Link>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions - Edison Plumbing</h2>
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
              <p className="text-gray-600 mb-4">We also serve these communities near Edison.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick (HQ)</Link>
                <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 font-medium">Sayreville</Link>
                <Link href="/service-areas/north-brunswick" className="text-red-700 hover:text-red-800 font-medium">North Brunswick</Link>
                <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick</Link>
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
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in Edison?</h2>
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
