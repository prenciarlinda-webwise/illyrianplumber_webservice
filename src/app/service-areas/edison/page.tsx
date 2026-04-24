import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Emergency Plumber in Edison, NJ",
  description: "Emergency plumber in Edison, NJ serving Clara Barton, Nixon, Stelton and all Edison Township. Licensed 24 hour plumber, tankless water heater installation, boiler repair, gas lines. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/edison",
  },
  openGraph: {
    title: "Emergency Plumber in Edison, NJ",
    description: "24/7 emergency plumber serving Edison, NJ. Tankless water heater installation, boiler repair, gas lines. Licensed NJ Master Plumbers.",
    type: "website",
  },
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
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are you a 24 hour emergency plumber in Edison, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Illyrian Plumber is a 24 hour emergency plumber in Edison, NJ. We answer calls day or night, including weekends and holidays, and dispatch a licensed NJ master plumber directly to your Edison home. Our East Brunswick headquarters is roughly 10 minutes from most Edison addresses via Route 18, Route 1, or Route 287.",
        },
      },
      {
        "@type": "Question",
        name: "How much does an emergency plumber cost in Edison, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Emergency plumber rates in Edison typically range from $150 to $450 depending on the job, time of day, and parts required. Illyrian Plumber provides upfront pricing before any work begins - you approve the quote before we start. There are no hidden fees, trip charges, or surprise add-ons on our invoices.",
        },
      },
      {
        "@type": "Question",
        name: "Do you install tankless water heaters in Edison, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Tankless water heater installation in Edison, NJ is one of our most requested services. We install gas and electric tankless units from Navien, Rinnai, and Rheem. Most Edison installations are completed in 4-8 hours and include all permits, venting, gas line sizing, and municipal inspection coordination. Pricing typically runs $2,800 to $6,500 installed.",
        },
      },
      {
        "@type": "Question",
        name: "Do you do boiler repair in Edison, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we repair and service residential boilers throughout Edison, NJ. Many Edison homes - especially in Clara Barton and older neighborhoods - rely on gas or oil boilers for heat and hot water. We handle no-heat emergencies, pressure and leak issues, pilot and ignition faults, and annual maintenance tune-ups.",
        },
      },
      {
        "@type": "Question",
        name: "How fast is your response time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical response time to Edison from our East Brunswick base is 10 minutes. Clara Barton and southern Edison via Route 18, Stelton and northern Edison via Route 1 or Route 287. For active emergencies like burst pipes or no hot water, we dispatch immediately and call you with a live arrival time.",
        },
      },
      {
        "@type": "Question",
        name: "Which neighborhoods do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve every Edison neighborhood - Clara Barton, Nixon, Stelton, Menlo Park, Bonhamtown, Oak Tree, the Route 1 and Route 287 corridors, and Raritan Center. Whether you are in a mid-century Clara Barton home or a newer townhome along Route 1, we can get to you fast.",
        },
      },
      {
        "@type": "Question",
        name: "Do you pull plumbing permits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We are licensed NJ Master Plumbers and pull all required permits from the Edison Township Construction Office for water heater installations, gas line work, boiler replacements, and repiping. Permit costs are included in our quotes and we coordinate inspections on your behalf.",
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
            {/* Left: copy + phone CTAs */}
            <div className="lg:col-span-3">
              <p className="text-red-400 font-medium mb-4">Serving Clara Barton, Nixon, Stelton & All Edison Neighborhoods</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Emergency Plumber in Edison, NJ
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Need a 24 hour emergency plumber in Edison, NJ? Illyrian Plumber dispatches licensed NJ master plumbers to Edison day or night, typically on-site within 10 minutes of our East Brunswick base via Route 18, Route 1, or Route 287.
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
            {/* Right: lead form */}
            <div className="lg:col-span-2">
              <LeadForm service="Emergency Plumber - Edison, NJ" />
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
                <strong>Illyrian Plumber is a 24 hour emergency plumber in Edison, NJ</strong>, reaching most Edison addresses within 10 minutes of our East Brunswick base. Licensed NJ Master Plumbers handle burst pipes, failed water heaters, gas leaks, main line backups, and boiler no-heat calls day or night, 365 days a year. Free estimates, upfront pricing, and permits pulled from Edison Township Construction on every job that requires one.
              </p>
              <p>
                When a plumbing emergency hits an Edison home, every minute counts. Our team is the emergency plumber Edison homeowners call because we are based in neighboring East Brunswick and answer the phone with a live dispatcher, not a call center. A licensed plumber is on the road to your Edison address within minutes of your call, with real parts and real tools to fix the problem on the first visit.
              </p>
              <p>
                Edison&apos;s housing mix (mid-century single-family homes in Clara Barton and Nixon, newer townhomes along the Route 1 corridor, and older Cape Cods near Menlo Park) each brings different plumbing failure modes. Aging galvanized supply lines, original cast-iron drain stacks, and 15-plus-year-old water heaters are the issues we see most often when we arrive for an emergency call in Edison Township. Decades of experience on Edison properties means we arrive knowing what to look for.
              </p>
              <p>
                Every emergency call gets upfront pricing before work starts, full NJ Master Plumber licensing, permit pulls from Edison Township Construction when required, and a 24/7 phone line answered by a real person. For non-emergency plumbing work in Edison NJ, we also offer same-day scheduled service when our crew has capacity, and free estimates on any major project.
              </p>
            </div>

            {/* Services Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Plumbing Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              A full range of residential plumbing for Edison homeowners. Click any service to learn more.
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
                <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">Water Leak Detection</Link>
                <Link href="/services/sump-pump-repair-install" className="text-red-700 hover:text-red-800 font-medium">Sump Pump Services</Link>
                <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-medium">Toilet & Faucet Install</Link>
                <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium">Water Filtration Systems</Link>
                <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections</Link>
                <Link href="/services/radiant-heating-plumbing" className="text-red-700 hover:text-red-800 font-medium">Radiant Heating</Link>
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Plumbing</Link>
              </div>
            </div>

            {/* Tankless Water Heater Installation in Edison */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tankless Water Heater Installation in Edison, NJ</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Tankless water heater installation in Edison, NJ is one of the most requested upgrades we handle in the township. Edison homes, particularly smaller Capes in Clara Barton and townhomes along the Route 1 corridor, benefit from the compact wall-mounted footprint, the endless on-demand hot water, and the 20-plus-year lifespan of a tankless unit. Typical installed cost for a tankless water heater Edison NJ project runs $2,800 to $6,500 depending on unit size and any gas line or venting upgrades.
              </p>
              <p>
                We install gas and electric tankless units from <strong>Navien, Rinnai, and Rheem</strong>, pull the required Edison Township plumbing permit, coordinate the municipal inspection, and register the manufacturer warranty. Most Edison tankless installs are completed in one day, and many qualify for NJ Clean Energy rebates that offset $300 to $700 of the installed price. For full service details, see our <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless water heater installation page</Link>.
              </p>
              <p>
                If you already have a tank unit in an Edison home and want to know whether switching to tankless is worth it, our licensed plumbers walk through the math with you during a free in-home estimate: household hot water demand, gas meter capacity, existing venting, and payback period based on your Edison utility rates. No pressure, no upsell.
              </p>
            </div>

            {/* Boiler Repair in Edison */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Boiler Repair in Edison, NJ</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Boiler repair in Edison is a core service. Many Edison homes, especially older Clara Barton and Nixon properties, run on gas or oil hydronic boilers for heat and hot water. Our licensed plumbers handle no-heat emergencies, low-pressure faults, leaking circulators, pilot and ignition problems, expansion tank issues, zone valve replacements, and annual tune-ups.
              </p>
              <p>
                Most Edison boiler repair calls are resolved on the first visit. If replacement is more economical than repair (typically when the unit is 20-plus years old or when the heat exchanger has failed) we quote both repair and replacement options upfront so you can decide with full information. No scare tactics, no one-size answer. See our <Link href="/services/boiler-repair-service" className="text-red-700 hover:underline">boiler repair service page</Link> for full pricing and scope details.
              </p>
            </div>

            {/* Why Choose Us */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Homeowners Choose Us</h2>
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

            {/* Mid-page CTA Band */}
            <div className="bg-red-700 text-white rounded-xl p-6 md:p-8 mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <p className="text-2xl font-bold mb-1">Got a plumbing emergency in Edison?</p>
                  <p className="text-red-100">Call now or request a free estimate. Typical Edison arrival in 10 minutes.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Plumbing Issues in Edison Homes</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Edison homes face a range of plumbing challenges depending on the age and type of construction. From 1950s Capes in Clara Barton to newer construction along the Route 1 corridor, here are the most common issues our Edison plumbers see on emergency calls and service visits throughout the township.
              </p>
              <ul className="space-y-3">
                <li><strong>Aging Water Heaters:</strong> Many Edison homes still run on 12 to 18 year old tank water heaters that are well past their service life. Watch for <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:underline">signs your water heater is dying</Link> like rusty hot water, popping sounds, or puddles at the base, and consider upgrading to a more efficient <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless water heater</Link> or a high-efficiency tank replacement.</li>
                <li><strong>Hard Water Buildup:</strong> Central New Jersey water is moderately hard, and the Edison municipal supply measures 5 to 8 grains per gallon. This causes mineral buildup in pipes, water heaters, and fixtures over time, shortens appliance lifespan, and leaves white crust on faucets. A <Link href="/services/water-filtration-system" className="text-red-700 hover:underline">water filtration system</Link> or softener can help protect your Edison home&apos;s plumbing.</li>
                <li><strong>Old Galvanized Pipes:</strong> Homes in Clara Barton, Nixon, and other older Edison neighborhoods may still have original galvanized steel supply pipes that corrode from the inside out. This causes <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:underline">low water pressure</Link>, rusty or brown water, and eventually pinhole leaks. Whole-house repiping with copper or PEX is often the permanent fix.</li>
                <li><strong>Boiler Maintenance:</strong> Many Edison homes rely on gas or oil hydronic boilers for heat and hot water. Regular annual maintenance prevents <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:underline">common winter boiler problems</Link> like no-heat calls, leaking circulators, and pressure faults, and keeps your system running at peak efficiency through NJ winters.</li>
                <li><strong>Sump Pump Failures:</strong> Basement-equipped Edison homes, particularly in flood-prone areas near the Raritan River and in lower-elevation neighborhoods, rely on sump pumps during heavy rain. Pumps that are 7 to 10 years old or lack a battery backup are a common emergency call after storms.</li>
                <li><strong>Frozen Pipes in Winter:</strong> Exterior walls in older Edison homes and uninsulated basements can freeze in January and February cold snaps. A burst pipe is one of the most expensive plumbing emergencies a homeowner can face, and preventive insulation is always cheaper than the repair.</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time &amp; Availability</h3>
              <p className="text-gray-700 mb-2">
                Our East Brunswick headquarters is approximately <strong>10 minutes</strong> from most Edison locations. We reach Clara Barton and southern Edison neighborhoods even faster via Route 18, while Stelton and northern Edison are a quick drive up Route 1 or Route 287. Raritan Center and the Oak Tree area are accessible in under 12 minutes in normal traffic.
              </p>
              <p className="text-gray-700 mb-2">
                For Edison plumbing emergencies (burst pipe, no hot water, active leak, sewer backup, gas smell) we dispatch the nearest available licensed plumber immediately and call you with a live ETA. Weekends, nights, and holidays included, at the same rates as weekday emergency service - no surprise surcharge.
              </p>
              <p className="text-gray-700">
                For scheduled plumbing service in Edison NJ, we offer flexible appointment windows including same-day and next-day availability when our crew has capacity. Free written estimates on any project over $500, valid for 30 days.
              </p>
            </div>

            {/* Neighborhoods */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Neighborhoods We Serve</h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide plumbing services to all Edison neighborhoods and surrounding areas, including:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {["Clara Barton", "Nixon", "Stelton", "Menlo Park", "Route 1 Corridor", "Route 287 Corridor", "Bonhamtown", "Raritan Center Area", "Oak Tree"].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
              ))}
            </div>

            {/* Local Professional Plumbing Services with map */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Professional Plumbing Services in Edison, NJ</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Illyrian Plumber serves every corner of Edison Township from our East Brunswick headquarters. Our licensed plumbers cover all Edison zip codes (08817, 08818, 08820, 08837) and travel the full Route 1, Route 18, Route 27, and Route 287 corridors daily. We work on residential properties near Menlo Park Mall, along the New Jersey Transit Edison Station corridor, and throughout the quieter residential grids of Clara Barton and Nixon.
                </p>
                <p>
                  As a licensed NJ Master Plumber and plumbing contractor serving Edison NJ, we handle the full scope of residential plumbing: water heater installation and repair, tankless water heater upgrades, boiler service, gas line work, whole-house repiping, drain cleaning, sump pump replacement, and 24/7 emergency plumbing. Permits are pulled from the Edison Township Construction Office, and all inspections are coordinated on your behalf.
                </p>
                <p>
                  When Edison homeowners search for a plumber Edison NJ, they want someone who knows the area, shows up quickly, and fixes the problem right the first time. That is exactly what Illyrian Plumber delivers - from Roosevelt Park to Oak Tree to the Raritan Center business district.
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
                  title="Edison NJ plumbing service area map"
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

            {/* Blog Resources - moved after FAQ, no h3 */}
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
              <Link href="/blog/signs-of-slab-leak-sewer-line" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Signs of a Slab Leak or Sewer Line Issue</p>
                <p className="text-gray-600 text-sm">Catch hidden leaks early.</p>
              </Link>
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
          <h2 className="text-3xl font-bold mb-4">Need an Emergency Plumber in Edison?</h2>
          <p className="text-xl text-red-100 mb-8">24/7 dispatch from our East Brunswick base. Typical Edison arrival in about 10 minutes.</p>
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
