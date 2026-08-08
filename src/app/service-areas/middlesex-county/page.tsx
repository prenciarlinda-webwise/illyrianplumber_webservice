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
  title: "Plumbers in Middlesex County, NJ - Illyrian Plumber",
  description: "Licensed NJ plumbers serving East Brunswick, Edison, Old Bridge, Monroe, and all Middlesex County. 24/7 emergency plumbing. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/middlesex-county",
  },
  openGraph: {
    title: "Plumbers in Middlesex County, NJ - Illyrian Plumber",
    description: "Licensed plumbers and 24/7 emergency plumbing services across Middlesex County, NJ. Serving every major township.",
    type: "website",
    url: "https://www.illyrianplumber.com/service-areas/middlesex-county",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/licensed-plumber-east-brunswick-nj.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber licensed plumber serving Middlesex County NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumbers in Middlesex County, NJ - Illyrian Plumber",
    description: "Licensed plumbers and 24/7 emergency plumbing services across Middlesex County, NJ. Serving every major township.",
    images: ["https://www.illyrianplumber.com/images/licensed-plumber-east-brunswick-nj.jpg"],
  },
};

export default function MiddlesexCountyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are you a 24 hour emergency plumber in Middlesex County?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Illyrian Plumber is a 24 hour emergency plumber serving all of Middlesex County, NJ. We answer calls day or night, including weekends and holidays, and dispatch a licensed NJ master plumber directly to your home. Response times vary by township, typically 10 to 25 minutes from our East Brunswick headquarters.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a plumber cost in Middlesex County?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plumber rates in Middlesex County typically run: diagnostic service call from $95, common repairs $150 to $500, water heater replacement $1,500 to $3,500 tank or $2,800 to $6,500 tankless, boiler repair $250 to $1,200, gas line work $300 to $1,500. Every quote is written down and approved before work starts.",
        },
      },
      {
        "@type": "Question",
        name: "Do you install tankless water heaters across Middlesex County?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We install gas and electric tankless water heaters from Navien, Rinnai, and Rheem throughout Middlesex County. Most installs are completed in one day and include permits, venting, and manufacturer warranty registration. Typical installed cost runs $2,800 to $6,500.",
        },
      },
      {
        "@type": "Question",
        name: "Do you pull plumbing permits across Middlesex County?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We are licensed NJ Master Plumbers and pull permits from the appropriate Construction Office in every Middlesex County municipality we serve. Permit costs are included in our quotes and we coordinate inspections on your behalf.",
        },
      },
    ],
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#quick-answer"],
    },
    url: "https://www.illyrianplumber.com/service-areas/middlesex-county",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-red-400 font-medium mb-4">Serving East Brunswick, Edison, Old Bridge, Monroe &amp; All Middlesex County</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Plumbers in Middlesex County, NJ
              </h1>
              <p id="quick-answer" className="text-xl text-gray-300 mb-8 max-w-2xl">
                Need a plumber in Middlesex County, NJ? Illyrian Plumber dispatches licensed NJ master plumbers to every Middlesex County township, day or night, for emergencies, water heaters, boilers, gas lines, and full plumbing service. Based in East Brunswick with typical response times of 10 to 25 minutes depending on your town.
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
              <LeadForm service="Middlesex County, NJ - County-wide" />
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* Local Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Trusted plumbing across Middlesex County</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                <strong>Illyrian Plumber provides full plumbing services across Middlesex County, NJ</strong>, covering the complete range of residential and light commercial plumbing in every major township in the county. Licensed NJ Master Plumbers handle burst pipes, failed water heaters, gas leaks, no-heat boiler emergencies, tankless installations, and 24/7 emergency plumbing from East Brunswick to Monroe Township.
              </p>
              <p>
                Middlesex County spans diverse housing stock, from 1950s Capes in Kendall Park and Madison Park to newer construction along the Route 1 and Route 18 corridors, and everything in between. We have worked on hundreds of homes across the county and know the common failure points for each era of construction and each township&apos;s permit process. That county-wide experience means we arrive prepared, whether your job is in Parlin, Clara Barton, Livingston Park, or Rossmoor.
              </p>
              <p>
                When a Middlesex County homeowner calls with a plumbing emergency, we answer the phone with a live dispatcher, not a call center. A licensed plumber is on the road within minutes. Our East Brunswick base lets us reach any Middlesex County address in 10 to 25 minutes depending on the town, with most urban and inner-ring addresses (Edison, North Brunswick, Old Bridge) in 15 minutes or less.
              </p>
              <p>
                Every Middlesex County plumbing call gets upfront written pricing before work starts, full NJ Master Plumber licensing, permit pulls from the appropriate township <a href="https://www.middlesexcountynj.gov/government" target="_blank" rel="noopener" className="text-red-700 hover:underline">Construction Office</a>, and a 24/7 phone line answered by a real person. No hidden fees, no shop surcharges, no trip charges.
              </p>
            </div>

            {/* Comprehensive Services Directory with near-me intro */}
            <LocationServiceDirectory location={LOCATION_DATA["middlesex-county"]} />

            {/* Trust badges row */}
            <div className="bg-gray-50 rounded-xl p-5 md:p-6 mb-12">
              <TrustBadges />
            </div>

            {/* Boiler H2 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Boiler repair in Middlesex County, NJ</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Boiler repair in Middlesex County, NJ is a core service. Many homes across the county, particularly in older sections of Monroe Township, East Brunswick, Old Bridge, and South Brunswick, run on gas or oil hydronic boilers for heat and hot water. Our licensed plumbers handle no-heat emergencies, leaking circulators, pilot and ignition faults, low-pressure issues, expansion tank replacement, zone valve overhaul, and annual tune-ups.
              </p>
              <p>
                Typical boiler repair cost in Middlesex County runs $250 to $1,200 depending on the failure. Most repairs are resolved on the first visit. If replacement is more economical than repair, we quote both options upfront. See our <Link href="/services/boiler-repair-service" className="text-red-700 hover:underline">boiler repair service page</Link> for full pricing and scope details.
              </p>
            </div>

            {/* Emergency Plumber H2 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency plumber across Middlesex County</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Our 24/7 emergency plumber line covers every Middlesex County township. Burst pipes, failed water heaters, gas leaks, no-heat boiler calls, and flooding are all handled by a licensed NJ Master Plumber on call around the clock. Weekends, nights, and holidays included at standard emergency rates, no surprise surcharges.
              </p>
              <p>
                Response times depend on the township but typical Middlesex County coverage is 10 to 25 minutes from our East Brunswick base. See the response time section below for town-by-town estimates.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="What county-wide coverage gets you"
        items={[
          { icon: "home", title: "East Brunswick headquarters", description: "Our office at 697 Old Bridge Turnpike in East Brunswick puts us in the heart of Middlesex County." },
          { icon: "home", title: "County-wide coverage", description: "One local office and one phone number reach every township in Middlesex County, no subcontractors." },
          { icon: "shield", title: "Licensed and insured", description: "Every job is handled by a licensed NJ Master Plumber with full insurance coverage." },
          { icon: "bolt", title: "24/7 emergency service", description: "Emergency plumbing is available around the clock, including nights, weekends, and holidays." },
          { icon: "wrench", title: "10+ years countywide", description: "We have worked on homes across Middlesex County for more than 10 years, from East Brunswick to Monroe Township." },
          { icon: "dollar", title: "Upfront pricing", description: "You see a written quote before any work starts, with no hidden fees or surprise charges." },
          { icon: "wrench", title: "Every township covered", description: "We know the Construction Office and permit process for each Middlesex County municipality we serve." },
          { icon: "dollar", title: "Free estimates", description: "Free written estimates are available on all major plumbing projects across the county." },
        ]}
      />

      {/* Mid-page CTA + common issues + response time + townships + map -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Mid-page CTA Band */}
            <div className="bg-red-700 text-white rounded-xl p-6 md:p-8 mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <p className="text-2xl font-bold mb-1">Need a plumber anywhere in Middlesex County?</p>
                  <p className="text-red-100">Call now or request a free estimate. County-wide 24/7 dispatch.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common plumbing issues across Middlesex County</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Middlesex County&apos;s diverse housing stock means we see a full range of plumbing issues across the county. Here are the patterns our plumbers notice most often during service calls and emergency dispatches.
              </p>
              <ul className="space-y-3">
                <li><strong>Aging Water Heaters:</strong> Tank water heaters 12 to 18 years old are the single most common issue countywide. Watch for <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:underline">signs your water heater is dying</Link> and consider upgrading to a <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless water heater</Link>.</li>
                <li><strong>Galvanized Supply Lines:</strong> 1950s-70s homes across Kendall Park, Clara Barton, Madison Park, Parlin, and Livingston Park often still have original galvanized steel pipes that corrode from the inside, causing <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:underline">low water pressure</Link>. <Link href="/services/whole-house-repiping" className="text-red-700 hover:underline">Whole-house repiping</Link> is the fix.</li>
                <li><strong>Hard Water Buildup:</strong> Central NJ water is moderately hard. This causes mineral buildup in pipes, water heaters, and fixtures. A <Link href="/services/water-filtration-system" className="text-red-700 hover:underline">water filtration system</Link> or softener can protect your plumbing.</li>
                <li><strong>Boiler Maintenance:</strong> Many Middlesex County homes rely on gas or oil boilers for heat. Regular annual maintenance prevents <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:underline">common winter boiler problems</Link>.</li>
                <li><strong>Sump Pump Failures:</strong> Basement-equipped homes in low-elevation areas (Sayreville near the Raritan, Old Bridge near Cliffwood Beach) rely on sump pumps. Pumps 7 to 10 years old or without battery backup are common emergency calls after storms.</li>
                <li><strong>Frozen Pipes in Winter:</strong> Exterior walls in older Middlesex County homes and uninsulated crawl spaces can freeze in January and February cold snaps. Preventive insulation is always cheaper than the repair.</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response time &amp; availability</h3>
              <p className="text-gray-700 mb-3">
                Response time varies by Middlesex County township. From our East Brunswick base:
              </p>
              <ul className="text-gray-700 space-y-1 list-disc list-inside mb-3">
                <li><strong>East Brunswick:</strong> 5 to 15 minutes (HQ)</li>
                <li><strong>Edison:</strong> about 10 minutes via Route 18</li>
                <li><strong>North Brunswick:</strong> about 10 minutes via Route 1</li>
                <li><strong>Old Bridge:</strong> 10 to 15 minutes via Route 9</li>
                <li><strong>Sayreville:</strong> 10 to 15 minutes via Route 9 or Route 35</li>
                <li><strong>South Brunswick:</strong> about 15 minutes via Route 1 or Route 130</li>
                <li><strong>Monroe Township:</strong> 15 to 20 minutes via Route 18 or NJ Turnpike</li>
              </ul>
              <p className="text-gray-700">
                For active emergencies we dispatch the nearest licensed plumber immediately and call with a live ETA. Free written estimates on any project over $500.
              </p>
            </div>

            {/* Towns We Serve */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Middlesex County townships we serve</h2>
            <p className="text-lg text-gray-600 mb-6">
              Click any township for a town-specific page with neighborhoods, local pricing, and FAQs.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              <Link href="/service-areas/east-brunswick" className="bg-gray-50 hover:bg-red-50 rounded-lg p-3 text-gray-700 font-medium transition">East Brunswick (HQ)</Link>
              <Link href="/service-areas/edison" className="bg-gray-50 hover:bg-red-50 rounded-lg p-3 text-gray-700 font-medium transition">Edison</Link>
              <Link href="/service-areas/old-bridge" className="bg-gray-50 hover:bg-red-50 rounded-lg p-3 text-gray-700 font-medium transition">Old Bridge</Link>
              <Link href="/service-areas/monroe-township" className="bg-gray-50 hover:bg-red-50 rounded-lg p-3 text-gray-700 font-medium transition">Monroe Township</Link>
              <Link href="/service-areas/sayreville" className="bg-gray-50 hover:bg-red-50 rounded-lg p-3 text-gray-700 font-medium transition">Sayreville</Link>
              <Link href="/service-areas/north-brunswick" className="bg-gray-50 hover:bg-red-50 rounded-lg p-3 text-gray-700 font-medium transition">North Brunswick</Link>
              <Link href="/service-areas/south-brunswick" className="bg-gray-50 hover:bg-red-50 rounded-lg p-3 text-gray-700 font-medium transition">South Brunswick</Link>
            </div>

            {/* Local Professional Plumbing Services with map */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Professional plumbing services in Middlesex County, NJ</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Illyrian Plumber is a licensed NJ Master Plumber and plumbing contractor serving every community in Middlesex County, NJ, including Piscataway and South Amboy. Our East Brunswick headquarters at 697 Old Bridge Turnpike sits in the heart of Central New Jersey, giving us direct access to the major arteries of the county: Route 1, Route 18, Route 9, Route 130, Route 27, Route 35, and the NJ Turnpike.
                </p>
                <p>
                  We handle the full scope of residential and light commercial plumbing across Middlesex County: boiler repair and replacement, water heater installation and repair, tankless water heater upgrades, gas line work, whole-house repiping, sump pump replacement, water filtration, bathroom remodeling, and 24/7 emergency plumbing. Permits are pulled from the appropriate township Construction Office for every job that requires one.
                </p>
                <p>
                  One number, one team, county-wide coverage. That is the Illyrian Plumber promise to Middlesex County homeowners.
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
                  title="Middlesex County NJ plumbing service area map"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed testimonial band */}
      <Testimonials
        heading="Trusted across Middlesex County"
        subheading="Real reviews from homeowners throughout the county."
      />

      {/* FAQ + resources -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

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
            <div className="mb-8">
              <LinkCardGrid
                heading="Helpful plumbing resources"
                items={[
                  { label: "Common Winter Boiler Problems", href: "/blog/common-boiler-problems-winter", description: "Prevent no-heat calls with these tips." },
                  { label: "Signs Your Water Heater Is Dying", href: "/blog/signs-water-heater-dying", description: "Know when it is time for a replacement." },
                  { label: "Tankless vs Tank Water Heaters", href: "/blog/tankless-vs-tank-water-heater", description: "Compare options for your home upgrade." },
                  { label: "Frozen Pipe Prevention & Repair", href: "/blog/frozen-pipes-prevention-repair", description: "Protect your pipes during NJ winters." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a plumber in Middlesex County?</h2>
          <p className="text-xl text-red-100 mb-8">24/7 dispatch from our East Brunswick base. County-wide coverage.</p>
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
