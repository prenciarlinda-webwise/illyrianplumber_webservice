import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_PAGES } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Emergency Plumber in Sayreville, NJ",
  description: "Emergency plumber in Sayreville, NJ. Licensed 24 hour plumber serving Parlin, Morgan, Ernston, Melrose. Water heater installation, boiler repair, gas lines. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/sayreville",
  },
  openGraph: {
    title: "Emergency Plumber in Sayreville, NJ",
    description: "24/7 emergency plumber serving Sayreville, NJ. Water heater installation, tankless, boiler repair, gas lines.",
    type: "website",
  },
};

export default function SayrevillePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://www.illyrianplumber.com/#organization",
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    url: "https://www.illyrianplumber.com/service-areas/sayreville",
    address: { "@type": "PostalAddress", streetAddress: BUSINESS_INFO.address.street, addressLocality: BUSINESS_INFO.address.city, addressRegion: "NJ", postalCode: BUSINESS_INFO.address.zip, addressCountry: "US" },
    areaServed: { "@type": "City", name: "Sayreville", containedInPlace: { "@type": "State", name: "New Jersey" } },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "5", bestRating: "5" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are you a 24 hour emergency plumber in Sayreville, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Illyrian Plumber is a 24 hour emergency plumber in Sayreville, NJ. We answer calls day or night, including weekends and holidays, and dispatch a licensed NJ master plumber directly to your Sayreville home. Typical response time to Parlin, Morgan, Ernston, Melrose, and Sayreville proper from our East Brunswick base is about 10 to 15 minutes via Route 9 or Route 35.",
        },
      },
      {
        "@type": "Question",
        name: "How much does an emergency plumber cost in Sayreville?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Emergency plumber rates in Sayreville typically range from $150 to $450 depending on the job, time of day, and parts required. Illyrian Plumber provides upfront pricing before any work begins. No hidden fees, trip charges, or surprise add-ons on our invoices.",
        },
      },
      {
        "@type": "Question",
        name: "Do you install water heaters in Sayreville, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We install tank and tankless water heaters throughout Sayreville. Typical tank replacement runs $1,500 to $3,500. Tankless installation runs $2,800 to $6,500. All installs include the Sayreville plumbing permit, municipal inspection, and disposal of the old unit.",
        },
      },
      {
        "@type": "Question",
        name: "Do you do boiler repair in Sayreville?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Boiler repair in Sayreville is a core service. Many Sayreville homes, particularly in Parlin and Morgan, run on gas or oil boilers. We handle no-heat emergencies, leaking circulators, pilot faults, expansion tank replacement, and annual tune-ups.",
        },
      },
      {
        "@type": "Question",
        name: "How fast is your response time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical response time to Sayreville from our East Brunswick base is 10 to 15 minutes via Route 9 or Route 35. For active emergencies we dispatch immediately and call you with a live ETA. Weekends, nights, and holidays included at standard emergency rates.",
        },
      },
      {
        "@type": "Question",
        name: "Which neighborhoods do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve every Sayreville neighborhood including Parlin, Morgan, Ernston, Melrose, Sayreville proper, the South Amboy border area, the Route 9 corridor, and the Garden State Parkway area.",
        },
      },
      {
        "@type": "Question",
        name: "Do you pull plumbing permits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We are licensed NJ Master Plumbers and pull all required permits from the Sayreville Borough Construction Office for water heater installations, gas line work, boiler replacements, and repiping. Permit costs are included in our quotes and we coordinate inspections on your behalf.",
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
              <p className="text-red-400 font-medium mb-4">Serving Parlin, Morgan, Ernston, Melrose &amp; Sayreville Proper</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Emergency Plumber in Sayreville, NJ
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Need an emergency plumber in Sayreville, NJ? Illyrian Plumber dispatches licensed NJ master plumbers to every Sayreville neighborhood day or night, typically on-site within 10 to 15 minutes of our East Brunswick base via Route 9 or Route 35.
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
              <LeadForm service="Emergency Plumber - Sayreville, NJ" />
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
                <strong>Illyrian Plumber is a 24 hour emergency plumber in Sayreville, NJ</strong>, serving Parlin, Morgan, Ernston, Melrose, Sayreville proper, and the South Amboy border neighborhoods. Licensed NJ Master Plumbers handle burst pipes, failed water heaters, gas leaks, sewer backups, boiler no-heat calls, and sump pump failures day or night, 365 days a year. Free estimates and upfront written pricing on every Sayreville job.
              </p>
              <p>
                Sayreville Borough has a mix of mid-century family neighborhoods in Parlin and Morgan, newer construction near the Route 9 corridor, and light commercial along the Garden State Parkway. Each comes with its own plumbing challenges. Older galvanized supply lines and aging water heaters are the most common issues we see on Sayreville service calls.
              </p>
              <p>
                When a plumbing emergency hits a Sayreville home, every minute counts. We answer our own phones with a live dispatcher, not a call center. A licensed plumber is on the road to your Sayreville address within minutes, with real parts and real tools to fix the problem on the first visit. Our East Brunswick base puts us 10 to 15 minutes from most Sayreville addresses.
              </p>
              <p>
                Every Sayreville plumbing call gets upfront written pricing before work starts, full NJ Master Plumber licensing, permit pulls from the Sayreville Borough Construction Office when required, and a 24/7 phone line answered by a real person. For non-emergency work we also offer same-day scheduled service when our crew has capacity.
              </p>
            </div>

            {/* Services Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Plumbing Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              A full range of residential plumbing for Sayreville homeowners. Click any service to learn more.
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

            {/* Water Heater H2 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Water Heater Installation in Sayreville, NJ</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Water heater installation in Sayreville, NJ is one of our most requested services. We install tank and tankless water heaters for Sayreville homeowners, matching the right unit to your household hot water demand, fuel source, and budget. Typical tank replacement in Sayreville runs $1,500 to $3,500. Tankless installation runs $2,800 to $6,500.
              </p>
              <p>
                We install top brands including <strong>Rheem, Bradford White, AO Smith, Navien, and Rinnai</strong>. Every Sayreville installation includes the plumbing permit, municipal inspection, removal and disposal of the old unit, and manufacturer warranty registration. See our <Link href="/services/water-heater-installation" className="text-red-700 hover:underline">water heater installation page</Link> for full pricing detail.
              </p>
            </div>

            {/* Boiler H2 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Boiler Repair in Sayreville, NJ</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Boiler repair in Sayreville is a core service. Many older Sayreville homes, particularly in Parlin and Morgan, rely on gas or oil hydronic boilers for heat and hot water. Our licensed plumbers handle no-heat emergencies, leaking circulators, pilot and ignition faults, expansion tank replacement, zone valve overhaul, and annual tune-ups. Typical boiler repair cost in Sayreville runs $250 to $1,200. See our <Link href="/services/boiler-repair-service" className="text-red-700 hover:underline">boiler repair service page</Link> for details.
              </p>
            </div>

            {/* Why Choose Us */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "10-15 minute response from our East Brunswick headquarters",
                "Easy access via Route 9, Route 35, and the Garden State Parkway",
                "Licensed NJ Master Plumbers with full insurance",
                "24/7 emergency plumbing service available",
                "Over 10 years of experience in Middlesex County",
                "Upfront pricing - no hidden fees or surprise charges",
                "Experienced with Sayreville's mid-century housing stock",
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
                  <p className="text-2xl font-bold mb-1">Got a plumbing emergency in Sayreville?</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Plumbing Issues in Sayreville Homes</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                Sayreville&apos;s housing stock ranges from mid-century Capes in Parlin and Morgan to newer construction along the Route 9 corridor. Here are the issues our Sayreville plumbers see most often on service and emergency calls.
              </p>
              <ul className="space-y-3">
                <li><strong>Aging Water Heaters:</strong> Many Sayreville homes run on 12 to 18 year old tank water heaters past their service life. Watch for <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:underline">signs your water heater is dying</Link> and consider a <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:underline">tankless upgrade</Link>.</li>
                <li><strong>Galvanized Supply Lines:</strong> Older Parlin and Morgan homes often still have original galvanized steel pipes that corrode from the inside out, causing <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:underline">low water pressure</Link> and rusty water. <Link href="/services/whole-house-repiping" className="text-red-700 hover:underline">Whole-house repiping</Link> with PEX or copper is the permanent fix.</li>
                <li><strong>Boiler Maintenance:</strong> Many Sayreville homes rely on gas or oil boilers for heat. Regular annual maintenance prevents <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:underline">common winter boiler problems</Link> and no-heat calls in January and February.</li>
                <li><strong>Sump Pump Failures:</strong> Properties near the Raritan River and in lower-elevation Sayreville neighborhoods rely on sump pumps during heavy rain. Pumps 7 to 10 years old or without battery backup are common emergency calls after storms. See our <Link href="/blog/sump-pump-maintenance-guide" className="text-red-700 hover:underline">sump pump maintenance guide</Link>.</li>
                <li><strong>Hard Water Buildup:</strong> Central NJ water is moderately hard. This causes mineral buildup in pipes, water heaters, and fixtures. A <Link href="/services/water-filtration-system" className="text-red-700 hover:underline">water filtration system</Link> or softener can protect your plumbing.</li>
                <li><strong>Frozen Pipes in Winter:</strong> Exterior walls in older Sayreville homes and uninsulated crawl spaces can freeze in January and February cold snaps. Preventive insulation is always cheaper than repair.</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time &amp; Availability</h3>
              <p className="text-gray-700 mb-2">
                Our East Brunswick headquarters is approximately <strong>10 to 15 minutes</strong> from most Sayreville addresses via Route 9 or Route 35. Parlin and the South Amboy border are the fastest; Morgan and Ernston are within our rapid response window.
              </p>
              <p className="text-gray-700 mb-2">
                For active Sayreville plumbing emergencies we dispatch the nearest available licensed plumber immediately and call you with a live ETA. Weekends, nights, and holidays included at the same rates as weekday emergency service.
              </p>
              <p className="text-gray-700">
                For scheduled plumbing service, we offer same-day and next-day appointments when our crew has capacity. Free written estimates on any project over $500.
              </p>
            </div>

            {/* Neighborhoods */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Neighborhoods We Serve</h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide plumbing services to every Sayreville neighborhood, including:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {["Parlin", "Morgan", "South Amboy Border", "Route 9 Corridor", "Garden State Parkway Area", "Sayreville Proper", "Ernston", "Melrose"].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium">{area}</div>
              ))}
            </div>

            {/* Local Professional Plumbing Services with map */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Professional Plumbing Services in Sayreville, NJ</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Illyrian Plumber serves every Sayreville neighborhood from our East Brunswick headquarters. Our licensed plumbers cover all Sayreville zip codes (08872, 08859) and travel Route 9, Route 35, Route 18, and the Garden State Parkway daily to reach Parlin, Morgan, Ernston, Melrose, Sayreville proper, and the South Amboy border.
                </p>
                <p>
                  As a licensed NJ Master Plumber and plumbing contractor serving Sayreville NJ, we handle the full scope of residential plumbing: water heater installation, tankless water heater upgrades, boiler repair, gas line work, whole-house repiping, drain cleaning, sump pump replacement, water filtration, and 24/7 emergency plumbing. Permits are pulled from the Sayreville Borough Construction Office, and all inspections are coordinated on your behalf.
                </p>
                <p>
                  Whether you need a boiler tune-up in Parlin or a tankless water heater install in Morgan, our Sayreville plumbers arrive with the right parts and the right expertise for the job.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24416.51!2d-74.3558!3d40.4593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c2b3d56d5a6f%3A0x13ec0d7ff3bc5b08!2sSayreville%2C%20NJ!5e0!3m2!1sen!2sus!4v1761000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sayreville NJ plumbing service area map"
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
              <Link href="/blog/sump-pump-maintenance-guide" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Sump Pump Maintenance Guide</p>
                <p className="text-gray-600 text-sm">Keep your sump pump running when you need it most.</p>
              </Link>
              <Link href="/blog/signs-water-heater-dying" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Signs Your Water Heater Is Dying</p>
                <p className="text-gray-600 text-sm">Know when it is time for a replacement.</p>
              </Link>
              <Link href="/blog/frozen-pipes-prevention-repair" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Frozen Pipe Prevention &amp; Repair</p>
                <p className="text-gray-600 text-sm">Protect your pipes during NJ winters.</p>
              </Link>
              <Link href="/blog/common-boiler-problems-winter" className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group">
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">Common Winter Boiler Problems</p>
                <p className="text-gray-600 text-sm">Prevent no-heat calls with these tips.</p>
              </Link>
            </div>

            {/* Nearby Service Areas */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Service Areas</h3>
              <p className="text-gray-600 mb-4">We also serve these communities near Sayreville.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-medium">East Brunswick (HQ)</Link>
                <Link href="/service-areas/old-bridge" className="text-red-700 hover:text-red-800 font-medium">Old Bridge</Link>
                <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-medium">Edison</Link>
                <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">South Brunswick</Link>
                <Link href="/service-areas/north-brunswick" className="text-red-700 hover:text-red-800 font-medium">North Brunswick</Link>
                <Link href="/service-areas/middlesex-county" className="text-red-700 hover:text-red-800 font-medium">All of Middlesex County</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need an Emergency Plumber in Sayreville?</h2>
          <p className="text-xl text-red-100 mb-8">24/7 dispatch from our East Brunswick base. Typical Sayreville arrival in 10 to 15 minutes.</p>
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
