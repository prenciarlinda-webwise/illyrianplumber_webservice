import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Emergency Plumber in Old Bridge, NJ",
  description: "Emergency plumber in Old Bridge, NJ. Licensed 24 hour plumber serving Madison Park, Laurence Harbor, Brownville, Cliffwood Beach. Water heater replacement, tankless install, boiler repair. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/old-bridge",
  },
  openGraph: {
    title: "Emergency Plumber in Old Bridge, NJ",
    description: "24/7 emergency plumber serving Old Bridge, NJ. Water heater replacement, tankless installation, boiler repair, water filtration.",
    type: "website",
  },
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
        name: "Are you a 24 hour emergency plumber in Old Bridge, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Illyrian Plumber is a 24 hour emergency plumber in Old Bridge, NJ. We answer calls day or night, including weekends and holidays, and dispatch a licensed NJ master plumber directly to your Old Bridge home. Typical response time to Old Bridge from our East Brunswick base is about 10 to 15 minutes via Route 9 or Route 516.",
        },
      },
      {
        "@type": "Question",
        name: "How much does water heater replacement cost in Old Bridge, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Water heater replacement cost in Old Bridge typically runs $1,500 to $3,500 for a standard 40 to 50 gallon tank unit, or $2,800 to $6,500 for a tankless water heater. All our quotes include permits from Old Bridge Township Construction, municipal inspection, and disposal of the old unit. No hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "Do you install tankless water heaters in Old Bridge, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Tankless water heater install in Old Bridge, NJ is one of our most requested upgrades. We install gas and electric tankless units from Navien, Rinnai, and Rheem. Most installs are completed in one day and many qualify for NJ Clean Energy rebates. Typical installed cost runs $2,800 to $6,500.",
        },
      },
      {
        "@type": "Question",
        name: "Do you do boiler repair in Old Bridge, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Boiler repair in Old Bridge is a core service. Many older Old Bridge homes, particularly in Madison Park and Brownville, run on gas or oil boilers for heat and hot water. We handle no-heat emergencies, leaking circulators, pilot and ignition faults, expansion tank replacement, and annual tune-ups.",
        },
      },
      {
        "@type": "Question",
        name: "Do you install water filtration systems in Old Bridge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Water filtration installation in Old Bridge, NJ is a popular request, especially in neighborhoods with hard water or older municipal supply lines. We install whole-house filtration and softeners, under-sink reverse osmosis, and well water treatment systems. Free water test included with every estimate.",
        },
      },
      {
        "@type": "Question",
        name: "How fast is your response time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical response time to Old Bridge from our East Brunswick base is 10 to 15 minutes. Madison Park and central Old Bridge are the fastest via Route 9, while Laurence Harbor and Cliffwood Beach are closer to 12 to 15 minutes. For active emergencies we dispatch immediately and call you with a live ETA.",
        },
      },
      {
        "@type": "Question",
        name: "Which neighborhoods do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve every Old Bridge neighborhood including Madison Park, Laurence Harbor, Brownville, Cliffwood Beach, Southwood, and the Route 9 and Route 516 corridors. No part of Old Bridge Township is outside our service area.",
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
              <p className="text-red-400 font-medium mb-4">Serving Madison Park, Laurence Harbor, Brownville, Cliffwood Beach</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Emergency Plumber in Old Bridge, NJ
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Need an emergency plumber in Old Bridge, NJ? Illyrian Plumber dispatches licensed NJ master plumbers to every Old Bridge neighborhood day or night, typically on-site within 10 to 15 minutes of our East Brunswick base via Route 9 or Route 516.
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
              <LeadForm service="Emergency Plumber - Old Bridge, NJ" />
            </div>
          </div>
        </div>
      </section>

      {/* Local Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">24/7 Emergency Response, Day or Night</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                <strong>Illyrian Plumber is a 24 hour emergency plumber in Old Bridge, NJ</strong>, covering Madison Park, Laurence Harbor, Brownville, Cliffwood Beach, Southwood, and every Old Bridge Township neighborhood. Licensed NJ Master Plumbers handle burst pipes, failed water heaters, gas leaks, main line backups, sump pump failures, and boiler no-heat calls day or night, 365 days a year. Free estimates and upfront pricing on every Old Bridge job.
              </p>
              <p>
                Old Bridge Township sits close enough to our East Brunswick base that we reach most Old Bridge addresses in 10 to 15 minutes via Route 9 or Route 516. For an active plumbing emergency, that proximity matters. A burst pipe can dump hundreds of gallons into a home before sunrise, and every minute we shave off response time saves the homeowner money and stress.
              </p>
              <p>
                Old Bridge&apos;s housing is varied. Laurence Harbor and Cliffwood Beach sit near the waterfront, where sump pumps and flood protection are essential. Madison Park and Brownville are older established neighborhoods where galvanized supply lines and aging water heaters are the most common issues. Newer construction along the Route 9 corridor has more modern systems but still runs into typical failures with age.
              </p>
              <p>
                Every Old Bridge plumbing call gets upfront written pricing before work starts, full NJ Master Plumber licensing, permit pulls from the Old Bridge Township Construction Office when required, and a 24/7 phone line answered by a real person. No call center, no voicemail. Same-day scheduled service is available for non-emergency work when our crew has capacity.
              </p>
            </div>

            {/* Services Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Plumbing Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              A full range of residential plumbing for Old Bridge homeowners. Click any service to learn more.
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

            {/* Water Heater Replacement H2 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Water Heater Replacement Cost in Old Bridge, NJ</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Water heater replacement cost in Old Bridge, NJ typically runs $1,500 to $3,500 for a standard 40 to 50 gallon tank unit, or $2,800 to $6,500 for a tankless water heater. Final cost depends on tank size, fuel type (gas versus electric), and whether any gas line, venting, or electrical upgrades are required. We install top brands including Rheem, Bradford White, AO Smith, Navien, and Rinnai.
              </p>
              <p>
                Every Old Bridge water heater replacement includes the unit, labor, all new supply connections, a required expansion tank where NJ code mandates one, a code-compliant temperature and pressure relief valve, disposal of the old unit, the Old Bridge Township plumbing permit, and municipal inspection coordination. See our <Link href="/services/water-heater-replacement" className="text-red-700 hover:underline">water heater replacement page</Link> for full details.
              </p>
            </div>

            {/* Tankless H2 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tankless Water Heater Install in Old Bridge, NJ</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Tankless water heater install in Old Bridge, NJ is one of our most requested upgrades, particularly for homes where space is tight or the existing tank is at end of life. Tankless units deliver endless on-demand hot water, a compact wall-mounted footprint, and a 20-plus-year lifespan. Typical installed cost runs $2,800 to $6,500 depending on unit size and gas line or venting work.
              </p>
              <p>
                We install gas and electric tankless units from <strong>Navien, Rinnai, and Rheem</strong>. Most Old Bridge installs are completed in a single day. Many qualify for NJ Clean Energy rebates that offset $300 to $700 of the installed price. See our <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless water heater installation page</Link> for full service details.
              </p>
            </div>

            {/* Water Filtration H2 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Water Filtration Installation in Old Bridge, NJ</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Water filtration installation in Old Bridge, NJ is common in neighborhoods with hard municipal water or aging supply lines that can leave grit, sediment, or discoloration at the tap. We install whole-house filtration and softeners, under-sink reverse osmosis systems, and specialty treatment for iron, manganese, or chlorine reduction. Every installation starts with a free water test so we recommend the right system for your Old Bridge home. See our <Link href="/services/water-filtration-system" className="text-red-700 hover:underline">water filtration page</Link> for full details.
              </p>
            </div>

            {/* Why Choose Us */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "10 to 15 minute response time from our East Brunswick headquarters",
                "Easy access via Route 9, Route 516, and Route 18",
                "Licensed NJ Master Plumbers with full insurance",
                "24/7 emergency plumbing service available",
                "Over 10 years of experience in Middlesex County",
                "Upfront pricing - no hidden fees or surprise charges",
                "Familiar with Old Bridge's older home plumbing systems",
                "Sump pump experts for flood-prone waterfront areas",
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
                  <p className="text-2xl font-bold mb-1">Got a plumbing emergency in Old Bridge?</p>
                  <p className="text-red-100">Call now or request a free estimate. Typical arrival in 10 to 15 minutes.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Plumbing Issues in Old Bridge Homes</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Old Bridge&apos;s varied housing stock and geography create specific plumbing challenges. From waterfront homes in Cliffwood Beach to older builds in Brownville, here are the issues our Old Bridge plumbers see most often on service and emergency calls.
              </p>
              <ul className="space-y-3">
                <li><strong>Aging Galvanized Pipes:</strong> Many homes in Brownville, Madison Park, and other established Old Bridge neighborhoods were built with galvanized steel supply pipes that corrode from the inside out. This causes <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:underline">low water pressure</Link> and rusty or discolored water. <Link href="/services/whole-house-repiping" className="text-red-700 hover:underline">Whole-house repiping</Link> with PEX or copper is the permanent fix.</li>
                <li><strong>Water Heater Failures:</strong> Homes built in the 1970s and 1980s may be on their second or third water heater. Units installed 10-plus years ago are reaching end of life. Look for <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:underline">signs your water heater is dying</Link> and consider a <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless upgrade</Link>.</li>
                <li><strong>Sump Pump Issues:</strong> Properties near Laurence Harbor and Cliffwood Beach often deal with high water tables and flood risk. A reliable <Link href="/services/sump-pump-repair-install" className="text-red-700 hover:underline">sump pump system</Link> with battery backup is essential. Pumps 7 to 10 years old are the most common emergency call after heavy storms.</li>
                <li><strong>Winter Boiler Problems:</strong> Many Old Bridge homes rely on boilers for heat. Regular annual maintenance can prevent <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:underline">common winter boiler issues</Link> like no heat, strange noises, pilot light failures, and leaking circulators.</li>
                <li><strong>Hard Water Buildup:</strong> Central NJ water is moderately hard, and some Old Bridge supply areas measure higher than average. This causes scale buildup in pipes, water heaters, and fixtures. A <Link href="/services/water-filtration-system" className="text-red-700 hover:underline">water filtration system</Link> or softener can protect your plumbing.</li>
                <li><strong>Frozen Pipes in Winter:</strong> Exterior walls in older Old Bridge homes and uninsulated crawl spaces can freeze in January and February cold snaps. A burst pipe is one of the most expensive plumbing emergencies a homeowner can face.</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time &amp; Availability</h3>
              <p className="text-gray-700 mb-2">
                Our East Brunswick headquarters is approximately <strong>10 to 15 minutes</strong> from most Old Bridge locations. Madison Park and central Old Bridge are fastest via Route 9. Laurence Harbor and Cliffwood Beach run closer to 12 to 15 minutes depending on traffic on Route 35 and Route 516.
              </p>
              <p className="text-gray-700 mb-2">
                For active Old Bridge plumbing emergencies (burst pipe, no hot water, active leak, sewer backup, gas smell) we dispatch the nearest available licensed plumber immediately and call you with a live ETA. Weekends, nights, and holidays included at the same rates as weekday service, no surprise surcharge.
              </p>
              <p className="text-gray-700">
                For scheduled Old Bridge plumbing service, we offer same-day and next-day appointments when our crew has capacity. Free written estimates on any project over $500, valid for 30 days.
              </p>
            </div>

            {/* Neighborhoods */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Neighborhoods We Serve</h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide plumbing services to every Old Bridge neighborhood, including:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {["Madison Park", "Laurence Harbor", "Brownville", "Cliffwood Beach", "Route 9 Corridor", "Route 516 Corridor", "Old Bridge Proper", "Southwood"].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
              ))}
            </div>

            {/* Local Professional Plumbing Services with map */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Professional Plumbing Services in Old Bridge, NJ</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Illyrian Plumber serves every Old Bridge neighborhood from our East Brunswick headquarters. Our licensed plumbers cover all Old Bridge zip codes (08857, 07747) and travel Route 9, Route 516, Route 35, and Route 18 daily to reach Madison Park, Laurence Harbor, Brownville, Cliffwood Beach, Southwood, and every other corner of the township.
                </p>
                <p>
                  As a licensed NJ Master Plumber and plumbing contractor serving Old Bridge NJ, we handle the full scope of residential plumbing: water heater replacement, tankless water heater installation, boiler repair, gas line work, whole-house repiping, drain cleaning, sump pump replacement and battery backup installation, water filtration systems, and 24/7 emergency plumbing. Permits are pulled from the Old Bridge Township Construction Office, and all inspections are coordinated on your behalf.
                </p>
                <p>
                  Whether you live in a waterfront home in Laurence Harbor that needs a robust sump pump system, or a Madison Park split-level that needs a water heater replacement, our Old Bridge plumbers arrive with the right parts and the right expertise for the job.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24449.92!2d-74.3651!3d40.4049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c2c4cdf5f75f%3A0xebccf0e4bbc52abd!2sOld%20Bridge%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1761000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Old Bridge NJ plumbing service area map"
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
              <Link href="/blog/signs-water-heater-dying" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Signs Your Water Heater Is Dying</p>
                <p className="text-gray-600 text-sm">Know when it is time for a replacement.</p>
              </Link>
              <Link href="/blog/tankless-vs-tank-water-heater" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Tankless vs Tank Water Heaters</p>
                <p className="text-gray-600 text-sm">Compare options for your home upgrade.</p>
              </Link>
              <Link href="/blog/sump-pump-maintenance-guide" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Sump Pump Maintenance Guide</p>
                <p className="text-gray-600 text-sm">Essential for Old Bridge waterfront homes.</p>
              </Link>
              <Link href="/blog/common-boiler-problems-winter" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Common Winter Boiler Problems</p>
                <p className="text-gray-600 text-sm">Prevent no-heat calls with these tips.</p>
              </Link>
            </div>

            {/* Nearby Service Areas */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Service Areas</h3>
              <p className="text-gray-600 mb-4">We also serve these communities near Old Bridge.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick (HQ)</Link>
                <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 font-medium">Sayreville</Link>
                <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-medium">Edison</Link>
                <Link href="/service-areas/monroe-township" className="text-red-700 hover:text-red-800 font-medium">Monroe Township</Link>
                <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick</Link>
                <Link href="/service-areas/middlesex-county" className="text-red-700 hover:text-red-800 font-medium">All of Middlesex County</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need an Emergency Plumber in Old Bridge?</h2>
          <p className="text-xl text-red-100 mb-8">24/7 dispatch from our East Brunswick base. Typical Old Bridge arrival in 10 to 15 minutes.</p>
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
