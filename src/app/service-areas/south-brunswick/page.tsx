import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumber in South Brunswick NJ",
  description: "Licensed plumber in South Brunswick, NJ. Water heaters, boilers, gas lines, repiping, and emergency plumbing. Serving Kendall Park, Monmouth Junction, Dayton, and Kingston. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/south-brunswick",
  },
  keywords: [
    "south brunswick plumber",
    "plumber near me south brunswick",
    "emergency plumber south brunswick",
    "water heater repair south brunswick",
    "plumbing services south brunswick nj",
    "plumber south brunswick nj",
    "licensed plumber south brunswick",
    "boiler repair south brunswick",
    "plumber kendall park nj",
    "plumber monmouth junction nj",
    "plumber dayton nj",
    "drain cleaning south brunswick",
  ],
};

export default function SouthBrunswickPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://www.illyrianplumber.com/#organization",
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    url: "https://www.illyrianplumber.com/service-areas/south-brunswick",
    address: { "@type": "PostalAddress", streetAddress: BUSINESS_INFO.address.street, addressLocality: BUSINESS_INFO.address.city, addressRegion: "NJ", postalCode: BUSINESS_INFO.address.zip, addressCountry: "US" },
    areaServed: { "@type": "City", name: "South Brunswick", containedInPlace: { "@type": "State", name: "New Jersey" } },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "5", bestRating: "5" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can you get to South Brunswick for a plumbing emergency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We can reach most South Brunswick locations within 15 minutes from our East Brunswick headquarters. Kendall Park is the closest, while Monmouth Junction, Dayton, Kingston, and Deans are all within our rapid response window.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing services do you offer in South Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide comprehensive plumbing services in South Brunswick including water heater repair and replacement, tankless water heater installation, boiler repair, gas line services, whole-house repiping, bathroom remodeling, sump pump services, water filtration, and 24/7 emergency plumbing.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer emergency plumbing in South Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide 24/7 emergency plumbing services throughout South Brunswick Township. Whether you are in Kendall Park, Monmouth Junction, Dayton, Kingston, or Deans, our team responds quickly to plumbing emergencies any time of day or night.",
        },
      },
      {
        "@type": "Question",
        name: "Do you serve Kendall Park and Monmouth Junction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we serve all South Brunswick communities including Kendall Park, Monmouth Junction, Dayton, Kingston, and Deans. These are among our most frequently serviced neighborhoods in South Brunswick Township.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing problems are common in South Brunswick homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "South Brunswick homes commonly experience well water system issues in rural areas, aging water heaters, hard water causing pipe corrosion and fixture buildup, and boiler maintenance needs during winter months.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide water filtration systems in South Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we install and service whole-house water filtration systems in South Brunswick. This is especially popular for homes in Dayton and Kingston that have well water, as well as homes on municipal water that want to reduce hard water minerals and improve water quality.",
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
            <p className="text-red-400 font-medium mb-4">Serving Kendall Park, Monmouth Junction, Dayton & More</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumber in South Brunswick, NJ
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional plumbing services in South Brunswick, NJ. Illyrian Plumber serves Kendall Park, Monmouth Junction, Dayton, Kingston, and Deans with expert plumbing solutions. About 15 minutes from our East Brunswick headquarters, we deliver fast, reliable service throughout the township.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Plumbing Throughout South Brunswick</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                South Brunswick Township is one of the fastest-growing communities in Middlesex County, featuring a blend of established neighborhoods in Kendall Park and Monmouth Junction alongside newer developments and the more rural character of Dayton, Kingston, and Deans. Illyrian Plumber has been serving South Brunswick homeowners for over a decade, providing the same licensed, professional plumbing services that have earned us a trusted reputation across the county.
              </p>
              <p>
                The diversity of South Brunswick's housing stock means we encounter a wide range of plumbing systems. Kendall Park homes from the 1950s-1960s may still have original copper or galvanized pipes, while newer construction in Monmouth Junction and along Route 1 often features modern PEX piping. Some Dayton and Kingston properties rely on well water and septic systems that need specialized attention. Our team has the expertise to work on all types of plumbing systems found throughout South Brunswick.
              </p>
              <p>
                Our East Brunswick headquarters puts us about 15 minutes from most South Brunswick locations. We travel via Route 1 and Route 130 for fast access to every corner of the township. Whether you need a routine repair, an emergency fix, or a major plumbing upgrade, Illyrian Plumber is ready to serve your South Brunswick home with honest pricing and licensed expertise.
              </p>
            </div>

            {/* Services Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing Services in South Brunswick</h2>
            <p className="text-lg text-gray-600 mb-6">
              We offer a full range of residential plumbing services in South Brunswick. Click any service to learn more.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Services Available in South Brunswick</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why South Brunswick Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "15-minute response from East Brunswick via Route 1 and 130",
                "24/7 emergency plumbing - nights, weekends, and holidays",
                "Licensed NJ Master Plumbers with full insurance",
                "Over 10 years serving Middlesex County homeowners",
                "Experienced with both municipal and well water systems",
                "Upfront pricing - no hidden fees or surprise charges",
                "Familiar with South Brunswick's diverse housing stock",
                "Free estimates on all major plumbing projects",
              ].map((reason, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4">
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>

            {/* Common Issues */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Plumbing Issues in South Brunswick Homes</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                South Brunswick's mix of older and newer homes creates a variety of plumbing challenges. Here are the issues we see most often.
              </p>
              <ul className="space-y-3">
                <li><strong>Well Water Challenges:</strong> Properties in Dayton, Kingston, and Deans that rely on well water often need <Link href="/services/water-filtration-system" className="text-red-700 hover:underline">water filtration systems</Link> to address iron, manganese, and hardness issues. Learn about the <Link href="/blog/best-whole-house-water-filtration-systems" className="text-red-700 hover:underline">best whole-house water filtration systems</Link> available.</li>
                <li><strong>Aging Pipes in Kendall Park:</strong> Many Kendall Park homes built in the 1950s-1960s still have original galvanized pipes that cause <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:underline">low water pressure</Link> and rusty water. <Link href="/services/whole-house-repiping" className="text-red-700 hover:underline">Whole-house repiping</Link> is often the best solution.</li>
                <li><strong>Water Heater Failures:</strong> If your water heater is showing <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:underline">signs of failure</Link>, it is time to consider a replacement. We offer both <Link href="/services/water-heater-replacement" className="text-red-700 hover:underline">traditional tank</Link> and <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless options</Link> - read our <Link href="/blog/tankless-vs-tank-water-heater" className="text-red-700 hover:underline">comparison guide</Link>.</li>
                <li><strong>Boiler Maintenance:</strong> Many South Brunswick homes use boiler systems that need seasonal attention. Prevent <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:underline">common winter boiler problems</Link> with regular maintenance.</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time for South Brunswick</h3>
              <p className="text-gray-700 mb-2">
                Our East Brunswick headquarters is approximately <strong>15 minutes</strong> from most South Brunswick locations. Kendall Park is the closest via Route 1, while Monmouth Junction, Dayton, Kingston, and Deans are all accessible within our rapid response window.
              </p>
              <p className="text-gray-700">
                For plumbing emergencies, we dispatch immediately. For scheduled service, we offer same-day and next-day appointments for South Brunswick homeowners.
              </p>
            </div>

            {/* Neighborhoods */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">South Brunswick Communities We Serve</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {["Kendall Park", "Monmouth Junction", "Dayton", "Kingston", "Deans", "Route 1 Corridor", "Route 130 Corridor", "Princeton Junction Area"].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
              ))}
            </div>

            {/* Blog Resources */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Plumbing Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <Link href="/blog/best-whole-house-water-filtration-systems" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Best Whole-House Water Filtration Systems</h3>
                <p className="text-gray-600 text-sm">Find the right filter for your home.</p>
              </Link>
              <Link href="/blog/tankless-vs-tank-water-heater" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Tankless vs Tank Water Heaters</h3>
                <p className="text-gray-600 text-sm">Compare your water heater options.</p>
              </Link>
              <Link href="/blog/signs-water-heater-dying" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Signs Your Water Heater Is Dying</h3>
                <p className="text-gray-600 text-sm">Know when it is time for a replacement.</p>
              </Link>
              <Link href="/blog/frozen-pipes-prevention-repair" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Frozen Pipe Prevention & Repair</h3>
                <p className="text-gray-600 text-sm">Protect your pipes during NJ winters.</p>
              </Link>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions - South Brunswick Plumbing</h2>
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
              <p className="text-gray-600 mb-4">We also serve these communities near South Brunswick.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick (HQ)</Link>
                <Link href="/service-areas/north-brunswick" className="text-red-700 hover:text-red-800 font-medium">North Brunswick</Link>
                <Link href="/service-areas/monroe-township" className="text-red-700 hover:text-red-800 font-medium">Monroe Township</Link>
                <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-medium">Edison</Link>
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
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in South Brunswick?</h2>
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
