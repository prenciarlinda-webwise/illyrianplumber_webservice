import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import { LOCATION_DATA } from "@/lib/locationData";
import LeadForm from "@/components/LeadForm";
import LocationServiceDirectory from "@/components/LocationServiceDirectory";
import TrustBadges from "@/components/TrustBadges";
import Testimonials from "@/components/Testimonials";
import DifferentiatorGrid from "@/components/DifferentiatorGrid";
import StatsStrip from "@/components/StatsStrip";
import LinkCardGrid from "@/components/LinkCardGrid";

export const metadata: Metadata = {
  title: { absolute: "Emergency Plumber East Brunswick, NJ - 24/7 Licensed" },
  description: "Emergency plumber in East Brunswick NJ based at 697 Old Bridge Turnpike. Licensed 24/7 master plumbers, 5-15 min response. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/east-brunswick",
  },
  openGraph: {
    title: "Emergency Plumber East Brunswick, NJ - 24/7 Licensed",
    description: "24/7 emergency plumber based at 697 Old Bridge Turnpike, East Brunswick NJ. Water heaters, boilers, gas lines, repiping. Licensed NJ Master Plumbers.",
    type: "website",
    url: "https://www.illyrianplumber.com/service-areas/east-brunswick",
  },
};

export default function EastBrunswickPage() {
  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are you a 24 hour emergency plumber in East Brunswick, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Illyrian Plumber is a 24 hour emergency plumber based at 697 Old Bridge Turnpike in East Brunswick. We answer calls day or night, weekends and holidays included, and dispatch a licensed NJ master plumber to your address within 5 to 15 minutes for most East Brunswick locations.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a plumber cost in East Brunswick, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plumber rates in East Brunswick typically run: diagnostic service call from $95, common repairs $150 to $500, water heater replacement $1,500 to $3,500 tank or $3,500 to $6,500 tankless, boiler repair $250 to $1,200, gas line work $300 to $1,500. Every quote is written down and approved before work starts.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the closest emergency plumber near me in East Brunswick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Illyrian Plumber is headquartered at 697 Old Bridge Turnpike in East Brunswick, which puts us 5 to 15 minutes from any 08816 address - closer than any out-of-town competitor on most searches for emergency plumber near me. For after-hours emergencies, our on-call licensed master plumbers live inside the township and respond from East Brunswick itself, not from a neighboring borough or county.",
        },
      },
      {
        "@type": "Question",
        name: "Do you pull East Brunswick plumbing permits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We are licensed NJ Master Plumbers and pull all required permits from the East Brunswick Township Construction Office for water heater installations, gas line work, boiler replacements, and repiping. Permit costs are included in our quotes and we coordinate inspections on your behalf.",
        },
      },
      {
        "@type": "Question",
        name: "What should I know before hiring a plumber in East Brunswick NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Illyrian Plumber recommends checking four things before hiring any East Brunswick plumber: an active NJ Master Plumber license, proof of liability insurance, written upfront pricing before work starts, and local response time. Illyrian Plumber meets all four - we are licensed and insured, headquartered at 697 Old Bridge Turnpike, provide written quotes before any work begins, and typically arrive within 5 to 15 minutes anywhere in East Brunswick.",
        },
      },
    ],
  };

  const pageGraph = {
    "@context": "https://schema.org",
    "@graph": [
      faqSchema,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.illyrianplumber.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Areas",
            item: "https://www.illyrianplumber.com/service-areas",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "East Brunswick, NJ",
            item: "https://www.illyrianplumber.com/service-areas/east-brunswick",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraph) }} />

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

      <StatsStrip />

      {/* Local Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">24/7 emergency plumber based in East Brunswick</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                <strong>Illyrian Plumber is a licensed NJ Master Plumber in East Brunswick, NJ</strong>, headquartered at 697 Old Bridge Turnpike. We answer the phone day or night for emergency plumbing in East Brunswick, dispatch within minutes, and reach most addresses in 5 to 15 minutes. Every job comes with upfront written pricing, permits pulled from the East Brunswick Township Construction Office where required, and a real person on the line, never a call center.
              </p>
            </div>

            {/* Comprehensive Services Directory with near-me intro */}
            <LocationServiceDirectory location={LOCATION_DATA["east-brunswick"]} />

            {/* Trust badges row */}
            <div className="bg-gray-50 rounded-xl p-5 md:p-6 mb-12">
              <TrustBadges />
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why East Brunswick relies on Illyrian Plumber"
        items={[
          { icon: "home", title: "Local headquarters", description: "Our office sits at 697 Old Bridge Turnpike, right in East Brunswick, not in a neighboring town or county." },
          { icon: "clock", title: "5 to 15 minute response", description: "Most East Brunswick addresses see a licensed plumber arrive within 5 to 15 minutes of your call." },
          { icon: "shield", title: "Licensed and insured", description: "Every plumber on our team holds an active NJ Master Plumber license and carries full liability insurance." },
          { icon: "bolt", title: "24/7 emergency service", description: "Emergency plumbing service is available around the clock, including nights, weekends, and holidays." },
          { icon: "wrench", title: "Decade of local experience", description: "We have worked on East Brunswick homes for more than 10 years and know the plumbing quirks of Middlesex County's older housing stock." },
          { icon: "dollar", title: "Upfront written pricing", description: "You get a written quote before any work starts, with no hidden fees or surprise shop charges added to the bill." },
          { icon: "wrench", title: "Housing stock expertise", description: "We are experienced with the galvanized steel and polybutylene piping common in East Brunswick homes built between the 1960s and 1990s." },
          { icon: "dollar", title: "Free written estimates", description: "Free estimates are available on all major plumbing projects, valid for 30 days." },
        ]}
      />

      {/* Pricing, common issues, and remaining content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How much does a plumber cost in East Brunswick, NJ?</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common plumbing issues in East Brunswick homes</h2>
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

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band */}
      <Testimonials
        heading="What East Brunswick homeowners say"
        subheading="Real reviews from real service calls in East Brunswick and around Middlesex County."
      />

      {/* Response time, neighborhoods, FAQ, and related links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Response Time */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response time and availability</h3>
              <p className="text-gray-700 mb-2">
                Our Old Bridge Turnpike office puts us 5 to 15 minutes from any East Brunswick address during business hours. For after-hours emergencies, our on-call plumbers live locally and respond faster than any out-of-town competitor.
              </p>
              <p className="text-gray-700 mb-2">
                For East Brunswick plumbing emergencies (burst pipe, no hot water, active leak, gas smell) we dispatch the nearest available licensed plumber immediately and call you with a live ETA. Weekends, nights, and holidays included at the same rates as weekday emergency service, no surprise surcharge.
              </p>
              <p className="text-gray-700">
                For scheduled work, we offer flexible appointment windows including same-day and next-day availability when our crew has capacity. Free written estimates on any project over $500, valid for 30 days.
              </p>
            </div>

            {/* Neighborhoods */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">East Brunswick neighborhoods we serve</h2>
            <p className="text-lg text-gray-600 mb-6">
              From our Old Bridge Turnpike office, we cover every residential neighborhood in East Brunswick including:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {["Farrington Lake", "Crystal Springs", "Dunhams Corner", "Tamarack Hollow", "Brunswick Square", "Mid-State Mall Area", "Route 18 Corridor", "NJ Turnpike Exit 9 Area", "Cranbury Road", "Ryders Lane", "Milltown Road", "Route 527 Corridor"].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
              ))}
            </div>

            {/* Local Professional Plumbing Services with map */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Plumber in East Brunswick, NJ</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Illyrian Plumber has operated from East Brunswick since 2010. Our office at 697 Old Bridge Turnpike sits just off Route 18, minutes from Brunswick Square Mall, the Mid-State Mall corridor, and East Brunswick High School. We cover ZIP 08816 in full and travel Ryders Lane, Cranbury Road, Milltown Road, Dunhams Corner Road, and the Route 527 corridor daily.
                </p>
                <p>
                  We pull all required permits from the <a href="https://www.eastbrunswick.org/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">East Brunswick Township</a> Construction Office and operate under an active{" "}
                  <a href="https://www.njconsumeraffairs.gov/plu" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">NJ Master Plumber License</a>. Learn more about{" "}
                  <a href="https://en.wikipedia.org/wiki/East_Brunswick,_New_Jersey" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">East Brunswick on Wikipedia</a>.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
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
            <div className="mb-12">
              <LinkCardGrid
                heading="Helpful plumbing resources"
                items={[
                  { label: "How Tankless Water Heaters Work", href: "/blog/how-tankless-water-heaters-work", description: "Learn about on-demand hot water technology." },
                  { label: "Tankless Water Heater Cost Guide", href: "/blog/how-much-does-a-tankless-water-heater-cost", description: "Understand the investment before you buy." },
                  { label: "Gas Leak Detection & Safety", href: "/blog/gas-leak-detection-safety", description: "Know the signs and stay safe." },
                  { label: "Frozen Pipe Prevention & Repair", href: "/blog/frozen-pipes-prevention-repair", description: "Protect your pipes during NJ winters." },
                ]}
              />
            </div>

            {/* Nearby Service Areas */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby service areas</h3>
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
          <h2 className="text-3xl font-bold mb-4">Need an emergency plumber in East Brunswick?</h2>
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
