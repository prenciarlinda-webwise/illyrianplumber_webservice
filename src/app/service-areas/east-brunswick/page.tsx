import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumber in East Brunswick NJ",
  description: "Licensed plumber in East Brunswick, NJ. Water heaters, boilers, gas lines, repiping, and emergency plumbing. Located at 697 Old Bridge Turnpike. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/east-brunswick",
  },
  keywords: [
    "east brunswick plumber",
    "plumber near me east brunswick",
    "emergency plumber east brunswick",
    "water heater repair east brunswick",
    "plumbing services east brunswick nj",
    "plumber east brunswick nj",
    "licensed plumber east brunswick",
    "boiler repair east brunswick",
    "drain cleaning east brunswick",
    "gas line repair east brunswick",
    "24 hour plumber east brunswick",
    "tankless water heater east brunswick",
  ],
};

export default function EastBrunswickPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://www.illyrianplumber.com/#organization",
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    url: "https://www.illyrianplumber.com/service-areas/east-brunswick",
    address: { "@type": "PostalAddress", streetAddress: BUSINESS_INFO.address.street, addressLocality: BUSINESS_INFO.address.city, addressRegion: "NJ", postalCode: BUSINESS_INFO.address.zip, addressCountry: "US" },
    areaServed: { "@type": "City", name: "East Brunswick", containedInPlace: { "@type": "State", name: "New Jersey" } },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "5", bestRating: "5" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can a plumber get to East Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because our office is located at 697 Old Bridge Turnpike in East Brunswick, we can typically arrive within 5 minutes for emergency calls. We are the closest professional plumber for East Brunswick residents.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing services do you offer in East Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a full range of plumbing services in East Brunswick including water heater repair and replacement, tankless water heater installation, boiler repair, gas line services, drain cleaning, whole-house repiping, bathroom remodeling, sump pump installation, and 24/7 emergency plumbing.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer emergency plumbing in East Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide 24/7 emergency plumbing services in East Brunswick. As local residents ourselves, we can reach any East Brunswick address in about 5 minutes, making us the fastest emergency plumbing response in town.",
        },
      },
      {
        "@type": "Question",
        name: "Are you licensed and insured to do plumbing work in East Brunswick, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Illyrian Plumber is fully licensed and insured in the state of New Jersey. Our team holds NJ Master Plumber licenses and we carry comprehensive liability insurance for all work performed in East Brunswick and throughout Middlesex County.",
        },
      },
      {
        "@type": "Question",
        name: "What are common plumbing problems in East Brunswick homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "East Brunswick homes commonly experience aging water heaters (especially in homes built in the 1970s-1990s), hard water buildup causing pipe corrosion, old galvanized pipe deterioration, sump pump failures during heavy rain, and boiler issues during winter months. We handle all of these issues regularly.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a plumber cost in East Brunswick, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plumbing costs in East Brunswick vary by the type of service needed. We provide upfront, transparent pricing before any work begins - no hidden fees or surprise charges. Call us for a free estimate on your specific plumbing project.",
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
            <p className="text-red-400 font-medium mb-4">Our Home Base</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumber in East Brunswick, NJ
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Illyrian Plumber is headquartered right here in East Brunswick at 697 Old Bridge Turnpike. As your neighborhood plumber, we deliver the fastest response times in town - often arriving within 5 minutes for emergency calls. From Dunhams Corner to the Route 18 corridor, we know every street and every neighborhood in East Brunswick because this is our home.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Local East Brunswick Plumbing Experts</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                East Brunswick is more than just our service area - it is where we live and work. Our office at 697 Old Bridge Turnpike puts us right in the heart of the community, giving us unmatched response times for residents throughout the township. Whether you live near Dunhams Corner, along the Old Bridge Turnpike corridor, close to the Route 18 shopping areas, or in any of East Brunswick's established residential neighborhoods, we can be at your door in minutes.
              </p>
              <p>
                Many East Brunswick homes were built between the 1960s and 1990s, which means aging plumbing infrastructure is a growing concern. Galvanized pipes from that era are reaching the end of their lifespan, water heaters installed during renovations may be 10-15 years old, and original boiler systems need regular maintenance to keep running efficiently through New Jersey winters. Our team has worked on hundreds of East Brunswick homes and understands the specific plumbing challenges this community faces.
              </p>
              <p>
                As licensed NJ Master Plumbers with over 10 years of experience, we bring professional-grade expertise with the personal attention of a local business. We are proud members of this community and treat every East Brunswick home as if it were our own.
              </p>
            </div>

            {/* Services Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing Services in East Brunswick</h2>
            <p className="text-lg text-gray-600 mb-6">
              We offer a complete range of residential plumbing services in East Brunswick. Click any service below to learn more about what we offer.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[...SERVICE_PAGES.featured, ...SERVICE_PAGES.residential.slice(0, 3)].map((service) => (
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

            {/* Additional Services List */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Services Available in East Brunswick</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why East Brunswick Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Located right here in East Brunswick at 697 Old Bridge Turnpike",
                "5-minute response times - we are the closest plumber in town",
                "Known and trusted in the community for over 10 years",
                "Licensed NJ Master Plumbers with full insurance coverage",
                "24/7 emergency service - nights, weekends, and holidays",
                "Upfront pricing with no hidden fees or surprise charges",
                "Experienced with East Brunswick's older home plumbing systems",
                "Free estimates on all major plumbing projects",
              ].map((reason, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4">
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>

            {/* Common Plumbing Issues */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Plumbing Issues in East Brunswick Homes</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                After servicing hundreds of homes in East Brunswick, we have identified the most common plumbing problems our neighbors face. Understanding these issues can help you catch small problems before they become expensive emergencies.
              </p>
              <ul className="space-y-3">
                <li><strong>Aging Water Heaters:</strong> Many East Brunswick homes still have tank water heaters that are 10-15 years old. If your water heater is showing <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:underline">signs of failure</Link>, it is time to call for an inspection before it leaks and causes water damage.</li>
                <li><strong>Hard Water and Pipe Corrosion:</strong> Central New Jersey water can be hard on pipes, especially older galvanized steel lines. We see significant buildup and corrosion in homes built before 1990, often requiring <Link href="/services/whole-house-repiping" className="text-red-700 hover:underline">whole-house repiping</Link>.</li>
                <li><strong>Boiler Problems in Winter:</strong> East Brunswick winters put heavy demand on boiler systems. <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:underline">Common boiler issues</Link> include no heat, strange noises, and pilot light failures - all of which we can diagnose and repair quickly.</li>
                <li><strong>Sump Pump Failures:</strong> Many East Brunswick properties sit in areas with high water tables, making <Link href="/services/sump-pump-repair-install" className="text-red-700 hover:underline">sump pump maintenance</Link> critical - especially during spring rain season. Check out our <Link href="/blog/sump-pump-maintenance-guide" className="text-red-700 hover:underline">sump pump maintenance guide</Link> for tips.</li>
                <li><strong>Frozen Pipes:</strong> During extreme cold snaps, exposed or poorly insulated pipes can freeze and burst. Read our guide on <Link href="/blog/frozen-pipes-prevention-repair" className="text-red-700 hover:underline">frozen pipe prevention and repair</Link> to protect your home.</li>
                <li><strong>Low Water Pressure:</strong> If you are experiencing <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:underline">low water pressure</Link>, it could be a sign of corroded pipes, a failing pressure regulator, or municipal supply issues.</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fastest Response Time in East Brunswick</h3>
              <p className="text-gray-700 mb-2">
                Because we are headquartered at 697 Old Bridge Turnpike, East Brunswick is our fastest service area. We can typically arrive within <strong>5 minutes</strong> for emergency calls during business hours. Even after hours, our on-call technicians live locally and can respond faster than any competitor.
              </p>
              <p className="text-gray-700">
                For non-emergency service, we offer same-day and next-day appointments for East Brunswick residents. Call us to schedule a time that works for you.
              </p>
            </div>

            {/* Location / Map */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our East Brunswick Location</h3>
              <p className="text-gray-700 mb-4"><strong>Address:</strong> {BUSINESS_INFO.address.full}</p>
              <p className="text-gray-600 mb-6">
                Conveniently located to serve all of East Brunswick, including neighborhoods near Farrington Lake, Crystal Springs, Dunhams Corner, and the Route 18 corridor. We are just minutes from every corner of the township.
              </p>
              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563312.4975387864!2d-76.04627729339961!3d40.06772212112381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a38fc2afc8255df%3A0x226b02ec0b6ff21a!2sIllyrian%20Plumber!5e0!3m2!1sen!2s!4v1767607369527!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Illyrian Plumber East Brunswick Location"
                  className="w-full"
                />
              </div>
            </div>

            {/* Helpful Resources */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Plumbing Resources</h2>
            <p className="text-gray-600 mb-4">Browse our blog for tips and guides on maintaining your East Brunswick home's plumbing system.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <Link href="/blog/signs-water-heater-dying" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Signs Your Water Heater Is Dying</h3>
                <p className="text-gray-600 text-sm">Know when it is time to replace your water heater.</p>
              </Link>
              <Link href="/blog/tankless-vs-tank-water-heater" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Tankless vs Tank Water Heaters</h3>
                <p className="text-gray-600 text-sm">Compare the options for your home.</p>
              </Link>
              <Link href="/blog/frozen-pipes-prevention-repair" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Frozen Pipe Prevention & Repair</h3>
                <p className="text-gray-600 text-sm">Protect your pipes during NJ winters.</p>
              </Link>
              <Link href="/blog/common-boiler-problems-winter" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">Common Boiler Problems in Winter</h3>
                <p className="text-gray-600 text-sm">Troubleshoot boiler issues before calling for service.</p>
              </Link>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions - East Brunswick Plumbing</h2>
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
              <p className="text-gray-600 mb-4">We also serve these neighboring communities from our East Brunswick headquarters.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-medium">Edison</Link>
                <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 font-medium">Sayreville</Link>
                <Link href="/service-areas/old-bridge" className="text-red-700 hover:text-red-800 font-medium">Old Bridge</Link>
                <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick</Link>
                <Link href="/service-areas/north-brunswick" className="text-red-700 hover:text-red-800 font-medium">North Brunswick</Link>
                <Link href="/service-areas/monroe-township" className="text-red-700 hover:text-red-800 font-medium">Monroe Township</Link>
                <Link href="/service-areas/middlesex-county" className="text-red-700 hover:text-red-800 font-medium">All of Middlesex County</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in East Brunswick?</h2>
          <p className="text-xl text-red-100 mb-8">Your local plumbing experts are just a call away. Available 24/7 for emergencies.</p>
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
