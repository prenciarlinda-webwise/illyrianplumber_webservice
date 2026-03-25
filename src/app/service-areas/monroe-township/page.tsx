import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumber in Monroe Township NJ",
  description: "Licensed plumber in Monroe Township, NJ. Water heaters, boilers, gas lines, repiping, and emergency plumbing. Serving Rossmoor, Concordia, Clearbrook, and all Monroe communities. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/monroe-township",
  },
  keywords: [
    "monroe township plumber",
    "plumber near me monroe township",
    "emergency plumber monroe township",
    "water heater repair monroe township",
    "plumbing services monroe township nj",
    "plumber monroe township nj",
    "licensed plumber monroe township",
    "boiler repair monroe township",
    "drain cleaning monroe township",
    "plumber rossmoor nj",
    "plumber concordia monroe",
    "plumber clearbrook monroe",
  ],
};

export default function MonroeTownshipPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://www.illyrianplumber.com/#organization",
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    url: "https://www.illyrianplumber.com/service-areas/monroe-township",
    address: { "@type": "PostalAddress", streetAddress: BUSINESS_INFO.address.street, addressLocality: BUSINESS_INFO.address.city, addressRegion: "NJ", postalCode: BUSINESS_INFO.address.zip, addressCountry: "US" },
    areaServed: { "@type": "City", name: "Monroe Township", containedInPlace: { "@type": "State", name: "New Jersey" } },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "5", bestRating: "5" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can you get to Monroe Township for a plumbing emergency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We can reach most Monroe Township locations within 15-20 minutes from our East Brunswick headquarters. We travel via Route 18 and the NJ Turnpike for quick access to Rossmoor, Concordia, Clearbrook, and all Monroe Township communities.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing services do you offer in Monroe Township?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a full range of plumbing services in Monroe Township including water heater repair and replacement, tankless water heater installation, boiler repair, gas line services, whole-house repiping, bathroom remodeling, sump pump services, water filtration, and 24/7 emergency plumbing.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer emergency plumbing in Monroe Township?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide 24/7 emergency plumbing services throughout Monroe Township. Whether you live in Rossmoor, Concordia, Clearbrook, Greenbriar, or any other Monroe community, our team is available nights, weekends, and holidays for urgent plumbing problems.",
        },
      },
      {
        "@type": "Question",
        name: "Do you service the adult communities in Monroe Township?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We regularly service Monroe Township's adult communities including Rossmoor, Concordia, Clearbrook, and Greenbriar. We understand the specific plumbing needs of these communities, from water heater replacements to boiler maintenance and bathroom accessibility upgrades.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing problems are common in Monroe Township homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monroe Township homes - especially in adult communities - commonly experience aging water heaters, boiler system issues, outdated plumbing fixtures, and hard water buildup. Many properties also benefit from water filtration system installation to address water quality concerns.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with bathroom remodeling in Monroe Township?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide full bathroom remodeling services in Monroe Township, including accessibility upgrades that are popular in the adult communities. From fixture installation to complete plumbing overhauls, we handle all the plumbing aspects of your bathroom renovation.",
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
            <p className="text-red-400 font-medium mb-4">Serving Rossmoor, Concordia, Clearbrook & More</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumber in Monroe Township, NJ
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional plumbing services in Monroe Township, NJ. Illyrian Plumber proudly serves Rossmoor, Concordia, Clearbrook, Greenbriar, and all Monroe Township communities. We bring expert plumbing solutions with 15-20 minute response times from our East Brunswick headquarters.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Plumbing for Monroe Township Communities</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Monroe Township is known throughout Middlesex County for its thriving adult communities and family-friendly neighborhoods. From the well-established Rossmoor and Concordia developments to Clearbrook and Greenbriar, Monroe Township is home to thousands of residents who depend on reliable plumbing to keep their homes comfortable and safe. Illyrian Plumber has been serving these communities for over a decade, earning a reputation for honest work and fair pricing.
              </p>
              <p>
                Many Monroe Township properties - particularly in the adult communities - were built between the 1960s and 1980s. While these homes are well-constructed, their plumbing systems are reaching the age where maintenance and upgrades become essential. Water heaters, boilers, and original pipe systems all have finite lifespans, and proactive replacement can prevent costly emergency repairs down the road. Our team has extensive experience working in Monroe Township's adult communities, and we understand both the plumbing needs and the expectations of these homeowners.
              </p>
              <p>
                From our East Brunswick headquarters, we reach Monroe Township in 15-20 minutes via Route 18 and the NJ Turnpike. We offer same-day appointments when available and always provide upfront pricing before starting any work. Whether you need a routine repair or a complete plumbing overhaul, Illyrian Plumber is the team Monroe Township residents trust.
              </p>
            </div>

            {/* Services Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing Services in Monroe Township</h2>
            <p className="text-lg text-gray-600 mb-6">
              We offer comprehensive residential plumbing services throughout Monroe Township. Click any service to learn more.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Services Available in Monroe Township</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Monroe Township Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "15-20 minute response from our East Brunswick headquarters",
                "Experienced with Monroe Township adult communities",
                "Licensed NJ Master Plumbers with full insurance",
                "24/7 emergency plumbing service available",
                "Over 10 years serving Middlesex County homeowners",
                "Upfront pricing - no hidden fees or surprise charges",
                "Bathroom accessibility upgrade specialists",
                "Free estimates on all major plumbing projects",
              ].map((reason, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4">
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>

            {/* Common Issues */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Plumbing Issues in Monroe Township Homes</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Monroe Township's housing mix - from adult communities to single-family homes - creates specific plumbing challenges. Here are the most common issues we address.
              </p>
              <ul className="space-y-3">
                <li><strong>Aging Water Heaters:</strong> Many Monroe Township homes, particularly in Rossmoor and Concordia, have water heaters that are 10-15+ years old. Watch for <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:underline">signs your water heater is dying</Link> and consider upgrading to a more efficient <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless water heater</Link> - learn <Link href="/blog/how-much-does-a-tankless-water-heater-cost" className="text-red-700 hover:underline">how much they cost</Link>.</li>
                <li><strong>Boiler System Maintenance:</strong> Many adult community homes rely on boilers for heat. Regular servicing can prevent <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:underline">common winter boiler problems</Link> and extend the life of your system.</li>
                <li><strong>Hard Water Issues:</strong> Monroe Township water can be hard on plumbing fixtures and pipes. A <Link href="/services/water-filtration-system" className="text-red-700 hover:underline">whole-house water filtration system</Link> can help protect your plumbing and improve water quality. Learn if <Link href="/blog/whole-house-water-filter-worth-it" className="text-red-700 hover:underline">a whole-house water filter is worth it</Link>.</li>
                <li><strong>Outdated Plumbing Fixtures:</strong> Original fixtures from the 1970s-1980s are less efficient and may no longer meet modern standards. Our <Link href="/services/bathroom-remodeling" className="text-red-700 hover:underline">bathroom remodeling services</Link> can modernize your space - find out <Link href="/blog/how-long-bathroom-remodel-take" className="text-red-700 hover:underline">how long a bathroom remodel takes</Link>.</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time for Monroe Township</h3>
              <p className="text-gray-700 mb-2">
                From our East Brunswick office, we can reach most Monroe Township locations in <strong>15-20 minutes</strong>. We travel via Route 18 and the NJ Turnpike to reach Rossmoor, Concordia, Clearbrook, Greenbriar, and surrounding neighborhoods efficiently.
              </p>
              <p className="text-gray-700">
                For non-emergency service, we offer flexible scheduling with same-day and next-day appointments when available. Our team is respectful of community guidelines and quiet hours in adult communities.
              </p>
            </div>

            {/* Neighborhoods */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Monroe Township Communities We Serve</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {["Rossmoor", "Concordia", "Clearbrook", "Greenbriar", "Monroe Village", "Encore", "Stonebridge", "The Ponds", "Jamesburg Border"].map((area) => (
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
              <Link href="/blog/how-much-does-a-tankless-water-heater-cost" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Tankless Water Heater Cost Guide</h3>
                <p className="text-gray-600 text-sm">Understand the investment before upgrading.</p>
              </Link>
              <Link href="/blog/whole-house-water-filter-worth-it" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Is a Whole-House Water Filter Worth It?</h3>
                <p className="text-gray-600 text-sm">Improve your water quality at home.</p>
              </Link>
              <Link href="/blog/how-long-bathroom-remodel-take" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">How Long Does a Bathroom Remodel Take?</h3>
                <p className="text-gray-600 text-sm">Plan your renovation timeline.</p>
              </Link>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions - Monroe Township Plumbing</h2>
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
              <p className="text-gray-600 mb-4">We also serve these communities near Monroe Township.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick (HQ)</Link>
                <Link href="/service-areas/old-bridge" className="text-red-700 hover:text-red-800 font-medium">Old Bridge</Link>
                <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick</Link>
                <Link href="/service-areas/north-brunswick" className="text-red-700 hover:text-red-800 font-medium">North Brunswick</Link>
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
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in Monroe Township?</h2>
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
