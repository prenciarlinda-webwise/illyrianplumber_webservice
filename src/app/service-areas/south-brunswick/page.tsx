import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Plumber in South Brunswick, NJ",
  description: "Plumber in South Brunswick, NJ serving Kendall Park, Monmouth Junction, Dayton, Kingston, and Deans. Licensed NJ master plumbers for boiler repair, water heater installation, emergency plumbing, and water filtration. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/south-brunswick",
  },
  openGraph: {
    title: "Plumber in South Brunswick, NJ",
    description: "Licensed plumber in South Brunswick, NJ. Boiler repair, water heater installation, tankless, water filtration, 24/7 emergency service.",
    type: "website",
  },
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
        name: "Are you a 24 hour emergency plumber in South Brunswick, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Illyrian Plumber is a 24 hour emergency plumber in South Brunswick, NJ. We answer calls day or night, including weekends and holidays, and dispatch a licensed NJ master plumber directly to your South Brunswick home. Typical response time to Kendall Park, Monmouth Junction, Dayton, Kingston, and Deans from our East Brunswick base is about 15 minutes via Route 1 or Route 130.",
        },
      },
      {
        "@type": "Question",
        name: "How much does an emergency plumber cost in South Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Emergency plumber rates in South Brunswick typically range from $150 to $450 depending on the job, time of day, and parts required. Illyrian Plumber provides upfront pricing before any work begins - you approve the quote before we start. No hidden fees, trip charges, or surprise add-ons on our invoices.",
        },
      },
      {
        "@type": "Question",
        name: "Do you do boiler repair in South Brunswick, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Boiler repair in South Brunswick, NJ is one of our core services. Many South Brunswick homes, particularly in Kendall Park and Monmouth Junction, run on gas or oil boilers for heat and hot water. We handle no-heat emergencies, leaking circulators, pilot and ignition faults, expansion tank replacement, and annual tune-ups. Typical cost runs $250 to $1,200 depending on the repair.",
        },
      },
      {
        "@type": "Question",
        name: "Do you install tankless water heaters in South Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We install gas and electric tankless water heaters from Navien, Rinnai, and Rheem throughout South Brunswick Township. Most installs are completed in one day and include permits, venting, and manufacturer warranty registration. Typical installed cost runs $2,800 to $6,500.",
        },
      },
      {
        "@type": "Question",
        name: "Do you install water filtration systems in South Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Water filtration is especially popular in Dayton and Kingston where some properties have well water. We install whole-house filtration, softeners, reverse osmosis, and specialty treatment for iron, manganese, and hardness issues. Every installation starts with a free water test.",
        },
      },
      {
        "@type": "Question",
        name: "How fast is your response time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical response time to South Brunswick from our East Brunswick base is 15 minutes via Route 1 or Route 130. Kendall Park is the closest; Monmouth Junction, Dayton, Kingston, and Deans are all within our rapid response window. For active emergencies we dispatch immediately and call you with a live ETA.",
        },
      },
      {
        "@type": "Question",
        name: "Which communities do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve every South Brunswick community including Kendall Park, Monmouth Junction, Dayton, Kingston, Deans, the Route 1 corridor, and the Route 130 corridor. Both municipal water and well water properties.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-red-400 font-medium mb-4">Serving Kendall Park, Monmouth Junction, Dayton, Kingston &amp; Deans</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Plumber in South Brunswick, NJ
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Need a plumber in South Brunswick, NJ? Illyrian Plumber is your licensed NJ master plumbing contractor for Kendall Park, Monmouth Junction, Dayton, Kingston, and Deans. Boiler repair, water heater installation, tankless upgrades, 24/7 emergency service, and more. Typical arrival from our East Brunswick base in 15 minutes via Route 1 or Route 130.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-3.5 rounded-lg font-semibold transition">
                  Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3.5 rounded-lg font-semibold transition">
                  Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <LeadForm service="Plumber - South Brunswick, NJ" />
            </div>
          </div>
        </div>
      </section>

      {/* Local Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Licensed Plumbing Contractor for South Brunswick Homes</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                <strong>Illyrian Plumber is a licensed plumber in South Brunswick, NJ</strong>, serving Kendall Park, Monmouth Junction, Dayton, Kingston, Deans, and every neighborhood along the Route 1 and Route 130 corridors. Our NJ Master Plumbers handle water heater installation, tankless upgrades, boiler repair, gas line work, drain cleaning, sump pump replacement, water filtration, bathroom remodeling, and 24/7 emergency plumbing. Free estimates and upfront written pricing on every South Brunswick job.
              </p>
              <p>
                South Brunswick Township is one of the fastest-growing communities in Middlesex County, with a blend of established neighborhoods in Kendall Park and Monmouth Junction, newer developments, and the more rural character of Dayton, Kingston, and Deans. That diversity creates varied plumbing challenges, from 1950s and 60s original galvanized pipes in Kendall Park to well water and septic systems in Dayton and Kingston. Our South Brunswick plumbers know the whole range.
              </p>
              <p>
                When a plumbing emergency hits a South Brunswick home, every minute counts. We answer our own phones with a live dispatcher. A licensed plumber is on the road to your South Brunswick home within minutes, with real parts and real tools to fix the problem on the first visit. Our East Brunswick office puts us 15 minutes from most South Brunswick addresses via Route 1 or Route 130.
              </p>
              <p>
                Every South Brunswick plumbing call gets upfront written pricing before work starts, full NJ Master Plumber licensing, permit pulls from the South Brunswick Township Construction Office when required, and a 24/7 phone line answered by a real person. Same-day scheduled service is available for non-emergency work when our crew has capacity.
              </p>
            </div>

            {/* Services Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Plumbing Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              A full range of residential plumbing for South Brunswick homeowners. Click any service to learn more.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Services Available</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">Water Leak Detection</Link>
                <Link href="/services/sump-pump-repair-install" className="text-red-700 hover:text-red-800 font-medium">Sump Pump Services</Link>
                <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-medium">Toilet &amp; Faucet Install</Link>
                <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium">Water Filtration Systems</Link>
                <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections</Link>
                <Link href="/services/radiant-heating-plumbing" className="text-red-700 hover:text-red-800 font-medium">Radiant Heating</Link>
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Plumbing</Link>
              </div>
            </div>

            {/* Boiler H2 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Boiler Repair in South Brunswick, NJ</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Boiler repair in South Brunswick, NJ is a core service for our team. Many South Brunswick homes, particularly in Kendall Park and Monmouth Junction, rely on gas or oil hydronic boilers for heat and hot water. Our licensed plumbers handle no-heat emergencies, leaking circulators, low-pressure faults, pilot and ignition problems, expansion tank issues, zone valve replacements, and annual tune-ups. Typical boiler repair cost in South Brunswick runs $250 to $1,200 depending on the failure.
              </p>
              <p>
                Most South Brunswick boiler repair calls are resolved on the first visit. If replacement is more economical than repair (typically when the unit is 20-plus years old or the heat exchanger has failed) we quote both options upfront. See our <Link href="/services/boiler-repair-service" className="text-red-700 hover:underline">boiler repair service page</Link> for full details.
              </p>
            </div>

            {/* Tankless H2 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tankless Water Heater Installation in South Brunswick</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Tankless water heater installation is a common upgrade in South Brunswick, particularly in newer Kendall Park and Monmouth Junction builds where families want endless on-demand hot water and a compact wall-mounted unit. Typical installed cost runs $2,800 to $6,500 depending on unit size and any gas line or venting upgrades. We install gas and electric units from <strong>Navien, Rinnai, and Rheem</strong>, pull the required South Brunswick Township plumbing permit, and register the manufacturer warranty. See our <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless water heater installation page</Link> for details.
              </p>
            </div>

            {/* Why Choose Us */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Homeowners Choose Us</h2>
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

            {/* Mid-page CTA Band */}
            <div className="bg-red-700 text-white rounded-xl p-6 md:p-8 mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <p className="text-2xl font-bold mb-1">Got a plumbing emergency in South Brunswick?</p>
                  <p className="text-red-100">Call now or request a free estimate. Typical arrival in 15 minutes.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-center whitespace-nowrap">
                    Call {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-700 transition text-center whitespace-nowrap">
                    Call {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>
            </div>

            {/* Common Issues */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Plumbing Issues in South Brunswick Homes</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                South Brunswick&apos;s mix of older and newer homes, municipal and well water, creates varied plumbing challenges. Here are the issues our South Brunswick plumbers see most often on service and emergency calls.
              </p>
              <ul className="space-y-3">
                <li><strong>Well Water Challenges:</strong> Properties in Dayton, Kingston, and Deans that rely on well water often need <Link href="/services/water-filtration-system" className="text-red-700 hover:underline">water filtration systems</Link> to address iron, manganese, and hardness issues. Learn about the <Link href="/blog/best-whole-house-water-filtration-systems" className="text-red-700 hover:underline">best whole-house water filtration systems</Link> available.</li>
                <li><strong>Aging Pipes in Kendall Park:</strong> Many Kendall Park homes built in the 1950s and 1960s still have original galvanized pipes that cause <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:underline">low water pressure</Link> and rusty water. <Link href="/services/whole-house-repiping" className="text-red-700 hover:underline">Whole-house repiping</Link> is often the best solution.</li>
                <li><strong>Water Heater Failures:</strong> If your water heater is showing <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:underline">signs of failure</Link>, it is time to consider a replacement. We offer both <Link href="/services/water-heater-replacement" className="text-red-700 hover:underline">traditional tank</Link> and <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless options</Link>.</li>
                <li><strong>Boiler Maintenance:</strong> Many South Brunswick homes use boiler systems that need seasonal attention. Prevent <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:underline">common winter boiler problems</Link> with regular annual maintenance.</li>
                <li><strong>Sump Pump Failures:</strong> Basement-equipped South Brunswick homes need working sump pumps during heavy rain. Pumps 7 to 10 years old or lacking battery backup are common emergency calls after storms.</li>
                <li><strong>Frozen Pipes in Winter:</strong> Exterior walls and uninsulated crawl spaces in older Kendall Park and Monmouth Junction homes can freeze in January and February cold snaps. Preventive insulation is always cheaper than the repair.</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time &amp; Availability</h3>
              <p className="text-gray-700 mb-2">
                Our East Brunswick headquarters is approximately <strong>15 minutes</strong> from most South Brunswick locations. Kendall Park is the closest via Route 1, while Monmouth Junction, Dayton, Kingston, and Deans are all within our rapid response window.
              </p>
              <p className="text-gray-700 mb-2">
                For active South Brunswick plumbing emergencies we dispatch the nearest available licensed plumber immediately and call you with a live ETA. Weekends, nights, and holidays included at the same rates as weekday emergency service.
              </p>
              <p className="text-gray-700">
                For scheduled plumbing service, we offer same-day and next-day appointments when our crew has capacity. Free written estimates on any project over $500.
              </p>
            </div>

            {/* Neighborhoods */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Neighborhoods We Serve</h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide plumbing services to every South Brunswick community, including:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {["Kendall Park", "Monmouth Junction", "Dayton", "Kingston", "Deans", "Route 1 Corridor", "Route 130 Corridor", "Princeton Junction Area"].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
              ))}
            </div>

            {/* Local Professional Plumbing Services with map */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Professional Plumbing Services in South Brunswick, NJ</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Illyrian Plumber serves every South Brunswick community from our East Brunswick headquarters. Our licensed plumbers cover all South Brunswick zip codes (08540, 08810, 08824, 08852) and travel Route 1, Route 130, Route 27, and Route 522 daily to reach Kendall Park, Monmouth Junction, Dayton, Kingston, Deans, and every other corner of the township.
                </p>
                <p>
                  As a licensed NJ Master Plumber and plumbing contractor serving South Brunswick, we handle the full scope of residential plumbing: boiler repair and service, water heater installation, tankless water heater upgrades, well water filtration and softening, gas line work, whole-house repiping, drain cleaning, sump pump replacement, and 24/7 emergency plumbing. Permits are pulled from the South Brunswick Township Construction Office, and all inspections are coordinated on your behalf.
                </p>
                <p>
                  Whether you are in a 1960s Cape in Kendall Park, a newer townhome in Monmouth Junction, or a Dayton property on well water, our South Brunswick plumbers arrive with the right parts and the right experience.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24465.8!2d-74.5353!3d40.4007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c4a8b8c61b0b%3A0x46b8e9e84b1f91b2!2sSouth%20Brunswick%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1761000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="South Brunswick NJ plumbing service area map"
                />
              </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-12">
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-lg group">
                  <summary className="p-4 cursor-pointer hover:text-red-700 transition list-none flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 pr-4 text-base">{faq.name}</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>

            {/* Blog Resources */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Plumbing Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <Link href="/blog/best-whole-house-water-filtration-systems" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Best Whole-House Water Filtration Systems</p>
                <p className="text-gray-600 text-sm">Find the right filter for your home.</p>
              </Link>
              <Link href="/blog/tankless-vs-tank-water-heater" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Tankless vs Tank Water Heaters</p>
                <p className="text-gray-600 text-sm">Compare your water heater options.</p>
              </Link>
              <Link href="/blog/signs-water-heater-dying" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Signs Your Water Heater Is Dying</p>
                <p className="text-gray-600 text-sm">Know when it is time for a replacement.</p>
              </Link>
              <Link href="/blog/frozen-pipes-prevention-repair" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Frozen Pipe Prevention &amp; Repair</p>
                <p className="text-gray-600 text-sm">Protect your pipes during NJ winters.</p>
              </Link>
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
          <p className="text-xl text-red-100 mb-8">Licensed NJ Master Plumbers. Typical South Brunswick arrival in 15 minutes.</p>
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

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 p-3">
        <div className="flex gap-2">
          <a href={BUSINESS_INFO.phoneLink} className="flex-1 bg-red-700 text-white px-4 py-3 rounded-lg font-bold text-center text-sm">
            Call {BUSINESS_INFO.phoneName}
          </a>
          <a href={BUSINESS_INFO.phone2Link} className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg font-bold text-center text-sm">
            Call {BUSINESS_INFO.phone2Name}
          </a>
        </div>
      </div>
    </>
  );
}
