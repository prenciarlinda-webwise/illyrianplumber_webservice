import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Emergency Plumber in East Brunswick, NJ",
  description: "Emergency plumber in East Brunswick, NJ based at 697 Old Bridge Turnpike. Licensed 24 hour plumber, tankless water heater installation, boiler repair, gas lines. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/east-brunswick",
  },
  openGraph: {
    title: "Emergency Plumber in East Brunswick, NJ",
    description: "24/7 emergency plumber based in East Brunswick, NJ. Tankless water heater installation, boiler repair, gas lines. Licensed NJ Master Plumbers.",
    type: "website",
  },
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
    aggregateRating: { "@type": "AggregateRating", ratingValue: BUSINESS_INFO.reviews.rating, reviewCount: BUSINESS_INFO.reviews.count, bestRating: BUSINESS_INFO.reviews.bestRating },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are you a 24 hour emergency plumber in East Brunswick, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Illyrian Plumber is a 24 hour emergency plumber based right in East Brunswick, NJ at 697 Old Bridge Turnpike. We answer calls day or night, including weekends and holidays, and dispatch a licensed NJ master plumber directly to your door. Most East Brunswick addresses are 5 to 15 minutes from our office.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a plumber cost in East Brunswick, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plumbing rates in East Brunswick typically run: diagnostic service call from $95, common repairs $150 to $500, water heater replacement $1,500 to $3,500 for tank or $3,500 to $6,500 for tankless, boiler repair $250 to $1,200, gas line work $300 to $1,500. Every quote is written down and approved before work starts. No hidden trip charges or shop fees.",
        },
      },
      {
        "@type": "Question",
        name: "Do you install tankless water heaters in East Brunswick, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Tankless water heater installation in East Brunswick, NJ is one of our most requested upgrades. We install gas and electric tankless units from Navien, Rinnai, and Rheem. Most installs are completed in one day and include all permits, venting, and gas line sizing. Typical installed cost runs $3,500 to $6,500.",
        },
      },
      {
        "@type": "Question",
        name: "Do you do boiler repair in East Brunswick, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we repair and service residential boilers throughout East Brunswick. Many older East Brunswick homes built in the 1960s-1970s run on gas or oil hydronic boilers. We handle no-heat emergencies, leaking circulators, pilot and ignition problems, expansion tank issues, and annual maintenance tune-ups.",
        },
      },
      {
        "@type": "Question",
        name: "How fast is your response time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Response time to any East Brunswick address is typically 5 to 15 minutes during business hours, since our office is on Old Bridge Turnpike in the heart of the township. For 24/7 emergencies, our on-call plumbers live locally and respond faster than any out-of-town competitor. Active emergencies get a live ETA call.",
        },
      },
      {
        "@type": "Question",
        name: "Which neighborhoods do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve every residential and commercial neighborhood in East Brunswick including Farrington Lake, Crystal Springs, Dunhams Corner, Tamarack Hollow Park, the Brunswick Square Mall area, Mid-State Mall corridor, the Route 18 business corridor, and the NJ Turnpike Exit 9 area. No part of East Brunswick is too small or too remote.",
        },
      },
      {
        "@type": "Question",
        name: "Do you pull plumbing permits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We are licensed NJ Master Plumbers and pull all required permits from the East Brunswick Township Construction Office for water heater installations, gas line work, boiler replacements, and repiping. Permit costs are included in our quotes and we coordinate inspections on your behalf.",
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
              <p className="text-red-400 font-medium mb-4">HQ at 697 Old Bridge Turnpike - Serving Every East Brunswick Neighborhood</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Emergency Plumber in East Brunswick, NJ
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Need an emergency plumber in East Brunswick, NJ? Illyrian Plumber is based right here on Old Bridge Turnpike. Licensed NJ master plumbers, 5 to 15 minute response times, and same-day service for every East Brunswick neighborhood from Farrington Lake to the Route 18 corridor.
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
              <LeadForm service="Emergency Plumber - East Brunswick, NJ" />
            </div>
          </div>
        </div>
      </section>

      {/* Local Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">24/7 Emergency Response from Our Home Base</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                <strong>Illyrian Plumber is an emergency plumber in East Brunswick, NJ</strong>, headquartered at 697 Old Bridge Turnpike in the heart of the township. Licensed NJ Master Plumbers handle burst pipes, failed water heaters, gas leaks, main line backups, and boiler no-heat calls day or night, 365 days a year. Free estimates, upfront pricing, and permits pulled from East Brunswick Township Construction on every job that requires one.
              </p>
              <p>
                When a plumbing emergency hits an East Brunswick home, every minute counts. We answer our own phones with a live dispatcher, not a call center. A licensed plumber is on the road to your door within minutes, with real parts and real tools to fix the problem on the first visit. Because we are local, you are not waiting for someone driving in from two counties away.
              </p>
              <p>
                Most homes in East Brunswick were built between the 1960s and the 1990s, which means the plumbing systems are aging into the repair-and-replace window. Galvanized steel piping from the 70s is corroding, original water heaters are beyond their service life, and boilers that were top-of-the-line in 1985 are running inefficiently. Our team has worked on hundreds of East Brunswick homes and can diagnose a problem within the first 10 minutes.
              </p>
              <p>
                Every East Brunswick plumbing service call gets upfront written pricing before work starts, full NJ Master Plumber licensing, permit coordination with East Brunswick Township Construction, and a 24/7 phone line answered by a real person. For non-emergency work we also offer same-day scheduled service when our crew has capacity, and free estimates on any major project over $500.
              </p>
            </div>

            {/* Services Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Plumbing Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              A full range of residential and light commercial plumbing for East Brunswick homeowners. Click any service to learn more.
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
                <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-medium">Toilet & Faucet Install</Link>
                <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium">Water Filtration Systems</Link>
                <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections</Link>
                <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800 font-medium">Bathroom Remodeling</Link>
                <Link href="/services/commercial-plumbing" className="text-red-700 hover:text-red-800 font-medium">Commercial Plumbing</Link>
              </div>
            </div>

            {/* Tankless H2 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tankless Water Heater Installation in East Brunswick, NJ</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Tankless water heater installation in East Brunswick, NJ is one of our most requested upgrades. East Brunswick homes benefit from the compact wall-mounted footprint, the endless on-demand hot water, and the 20-plus-year lifespan of a tankless unit. Typical installed cost for a tankless water heater East Brunswick NJ project runs $3,500 to $6,500 depending on unit size and any gas line or venting upgrades.
              </p>
              <p>
                We install gas and electric tankless units from <strong>Navien, Rinnai, and Rheem</strong>, pull the required East Brunswick Township plumbing permit, coordinate the municipal inspection, and register the manufacturer warranty. Most installs are completed in one day, and many qualify for NJ Clean Energy rebates that offset $300 to $700 of the installed price. For full service details, see our <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless water heater installation page</Link>.
              </p>
            </div>

            {/* Boiler H2 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Boiler Repair in East Brunswick, NJ</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Boiler repair in East Brunswick is a core service. Many older East Brunswick homes, particularly those built in the 1960s and 1970s, run on gas or oil hydronic boilers for heat and hot water. Our licensed plumbers handle no-heat emergencies, low-pressure faults, leaking circulators, pilot and ignition problems, expansion tank issues, zone valve replacements, and annual tune-ups. Typical boiler repair cost in East Brunswick runs $250 to $1,200 depending on the failure.
              </p>
              <p>
                Most East Brunswick boiler repair calls are resolved on the first visit. If replacement is more economical than repair (typically when the unit is 20-plus years old or the heat exchanger has failed) we quote both options upfront. See our <Link href="/services/boiler-repair-service" className="text-red-700 hover:underline">boiler repair service page</Link> for full pricing and scope details.
              </p>
            </div>

            {/* Gas Line H2 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gas Line Repair in East Brunswick, NJ</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Gas line repair in East Brunswick, NJ requires a licensed master plumber under NJ code. We handle new appliance hookups, gas leak detection and repair, gas line replacement for older East Brunswick homes with undersized lines, and stove or dryer relocations. If you smell gas, leave the house immediately, call your utility, then call us. Typical gas line work runs $300 to $1,500 depending on scope.
              </p>
            </div>

            {/* Why Choose Us */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Based in East Brunswick at 697 Old Bridge Turnpike",
                "5 to 15 minute response time inside the township",
                "Licensed NJ Master Plumbers with full insurance",
                "24/7 emergency plumbing service available",
                "Over 10 years of experience in Middlesex County",
                "Upfront written pricing - no hidden fees or shop charges",
                "Experienced with East Brunswick's 1960s-1990s housing stock",
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
                  <p className="text-2xl font-bold mb-1">Got a plumbing emergency in East Brunswick?</p>
                  <p className="text-red-100">Call now or request a free estimate. Typical arrival in 5 to 15 minutes.</p>
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

            {/* Pricing Table - EB unique */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Much Does a Plumber Cost in East Brunswick, NJ?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-6">
              <p>
                Plumber pricing in East Brunswick depends on the job, the materials, and whether the work needs a permit. Here are honest ranges so you can plan ahead.
              </p>
            </div>
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-gray-900">Service</th>
                    <th className="text-left p-3 font-semibold text-gray-900">Typical Range in East Brunswick</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="p-3">Diagnostic service call</td><td className="p-3">From $95</td></tr>
                  <tr><td className="p-3">Common repair (faucet, toilet, small leak)</td><td className="p-3">$150 to $500</td></tr>
                  <tr><td className="p-3">Water heater replacement (40 to 50 gal tank)</td><td className="p-3">$1,500 to $3,500</td></tr>
                  <tr><td className="p-3">Tankless water heater installation</td><td className="p-3">$3,500 to $6,500+</td></tr>
                  <tr><td className="p-3">Boiler repair</td><td className="p-3">$250 to $1,200</td></tr>
                  <tr><td className="p-3">Gas line repair</td><td className="p-3">$300 to $1,500</td></tr>
                  <tr><td className="p-3">Sump pump installation</td><td className="p-3">$600 to $1,800</td></tr>
                  <tr><td className="p-3">Emergency / after-hours service</td><td className="p-3">Trip charge + repair cost, quoted upfront</td></tr>
                </tbody>
              </table>
            </div>

            {/* Common Issues */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Plumbing Issues in East Brunswick Homes</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                East Brunswick homes face a range of plumbing challenges depending on age and construction. From 1960s splits in Dunhams Corner to newer builds along Cranbury Road, here are the issues our East Brunswick plumbers see most often on emergency calls and service visits.
              </p>
              <ul className="space-y-3">
                <li><strong>Aging Water Heaters:</strong> Many East Brunswick homes still run on 12 to 18 year old tank water heaters past their service life. Watch for <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:underline">signs your water heater is dying</Link> and consider upgrading to a more efficient <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless water heater</Link>.</li>
                <li><strong>Corroded Galvanized Pipes:</strong> Homes built in the 1960s and 70s often still have original galvanized steel supply pipes that corrode from the inside out, causing <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:underline">low water pressure</Link> and rusty water. Whole-house repiping with PEX or copper is the permanent fix.</li>
                <li><strong>Polybutylene Piping:</strong> Some 1980s and early 1990s East Brunswick builds used polybutylene, which is now known to fail. If your home has gray plastic supply lines, replacement is strongly recommended.</li>
                <li><strong>Hard Water Buildup:</strong> Central NJ water is moderately hard. This causes mineral buildup in pipes, water heaters, and fixtures over time. A <Link href="/services/water-filtration-system" className="text-red-700 hover:underline">water filtration system</Link> or softener can protect your plumbing.</li>
                <li><strong>Boiler Maintenance:</strong> Many East Brunswick homes rely on gas or oil boilers for heat. Regular annual maintenance prevents no-heat calls and keeps efficiency high through NJ winters.</li>
                <li><strong>Frozen Pipes in Winter:</strong> Exterior walls in older East Brunswick homes and uninsulated basements can freeze in January and February cold snaps. Preventive insulation is always cheaper than repair.</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time &amp; Availability</h3>
              <p className="text-gray-700 mb-2">
                Our Old Bridge Turnpike office puts us 5 to 15 minutes from any East Brunswick address during business hours. For after-hours emergencies, our on-call plumbers live locally and respond faster than any out-of-town competitor.
              </p>
              <p className="text-gray-700 mb-2">
                For East Brunswick plumbing emergencies (burst pipe, no hot water, active leak, sewer backup, gas smell) we dispatch the nearest available licensed plumber immediately and call you with a live ETA. Weekends, nights, and holidays included at the same rates as weekday emergency service, no surprise surcharge.
              </p>
              <p className="text-gray-700">
                For scheduled work, we offer flexible appointment windows including same-day and next-day availability when our crew has capacity. Free written estimates on any project over $500, valid for 30 days.
              </p>
            </div>

            {/* Neighborhoods */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Neighborhoods We Serve</h2>
            <p className="text-lg text-gray-600 mb-6">
              From our Old Bridge Turnpike office, we cover every residential neighborhood in East Brunswick including:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {["Farrington Lake", "Crystal Springs", "Dunhams Corner", "Tamarack Hollow", "Brunswick Square", "Mid-State Mall Area", "Route 18 Corridor", "NJ Turnpike Exit 9 Area", "Cranbury Road", "Ryders Lane", "Milltown Road", "Route 527 Corridor"].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
              ))}
            </div>

            {/* Local Professional Plumbing Services with map */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Professional Plumbing Services in East Brunswick, NJ</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Illyrian Plumber has called East Brunswick home for over a decade. Our office at 697 Old Bridge Turnpike sits just off Route 18, minutes from Brunswick Square Mall, the Mid-State Mall corridor, and East Brunswick High School. We cover every zip code in the township (08816) and travel Ryders Lane, Cranbury Road, Milltown Road, Dunhams Corner Road, and the Route 527 corridor daily.
                </p>
                <p>
                  As a licensed NJ Master Plumber and plumbing contractor serving East Brunswick NJ, we handle the full scope of residential plumbing: water heater installation and repair, tankless water heater upgrades, boiler service, gas line work, whole-house repiping, drain cleaning, sump pump replacement, and 24/7 emergency plumbing. Permits are pulled from the East Brunswick Township Construction Office, and all inspections are coordinated on your behalf.
                </p>
                <p>
                  When East Brunswick homeowners need a local plumber, they want someone who actually lives and works in the community. That is exactly what Illyrian Plumber delivers, from Farrington Lake to the NJ Turnpike Exit 9 area.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  src={BUSINESS_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Illyrian Plumber office in East Brunswick, NJ"
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
              <Link href="/blog/how-tankless-water-heaters-work" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">How Tankless Water Heaters Work</p>
                <p className="text-gray-600 text-sm">Learn about on-demand hot water technology.</p>
              </Link>
              <Link href="/blog/how-much-does-a-tankless-water-heater-cost" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Tankless Water Heater Cost Guide</p>
                <p className="text-gray-600 text-sm">Understand the investment before you buy.</p>
              </Link>
              <Link href="/blog/gas-leak-detection-safety" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Gas Leak Detection &amp; Safety</p>
                <p className="text-gray-600 text-sm">Know the signs and stay safe.</p>
              </Link>
              <Link href="/blog/frozen-pipes-prevention-repair" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Frozen Pipe Prevention &amp; Repair</p>
                <p className="text-gray-600 text-sm">Protect your pipes during NJ winters.</p>
              </Link>
            </div>

            {/* Nearby Service Areas */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Service Areas</h3>
              <p className="text-gray-600 mb-4">We also serve these Middlesex County towns from our East Brunswick location.</p>
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
          <h2 className="text-3xl font-bold mb-4">Need an Emergency Plumber in East Brunswick?</h2>
          <p className="text-xl text-red-100 mb-8">Based right here at 697 Old Bridge Turnpike. Typical arrival in 5 to 15 minutes.</p>
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
