import { Metadata } from "next";

import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sump Pump Maintenance: The Complete Homeowner's Guide",
  description: "Keep your sump pump ready for storms. Learn testing procedures, maintenance schedule, and when to replace. Expert NJ plumber guide.",
  keywords: [
    "sump pump maintenance",
    "sump pump testing",
    "sump pump battery backup",
    "sump pump troubleshooting",
    "how to test sump pump",
    "sump pump replacement",
    "how does a sump pump work",
    "sump pump not working",
    "sump pump check valve",
    "sump pump float switch",
    "sump pump running constantly",
    "sump pump noise",
    "sump pump installation",
    "basement flooding prevention",
  ],
  openGraph: {
    title: "Sump Pump Maintenance Guide",
    description: "Complete sump pump maintenance guide for NJ homeowners.",
    type: "article",
    publishedTime: "2025-01-31T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function SumpPumpPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sump Pump Maintenance: The Complete Homeowner's Guide",
    description: "Keep your sump pump ready for storms with proper maintenance.",
    image: "https://www.illyrianplumber.com/images/sump-pump-installation.jpg",
    author: { "@type": "Organization", name: BUSINESS_INFO.name, url: "https://www.illyrianplumber.com" },
    publisher: { "@type": "Organization", name: BUSINESS_INFO.name, logo: { "@type": "ImageObject", url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png" } },
    datePublished: "2025-01-31T08:00:00.000Z",
    dateModified: "2026-03-18T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/sump-pump-maintenance-guide" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How often should I test my sump pump?", acceptedAnswer: { "@type": "Answer", text: "Test your sump pump at least quarterly -ideally before each season. Also test before any predicted heavy rain. Testing takes just a few minutes: pour water into the pit until the float activates. The pump should start, remove the water, and shut off automatically." } },
      { "@type": "Question", name: "How long do sump pumps last?", acceptedAnswer: { "@type": "Answer", text: "A quality sump pump lasts 7-10 years on average with proper maintenance. Pumps that run frequently (high water table areas) may need replacement sooner. Battery backups typically last 3-5 years. If your pump is over 7 years old, consider proactive replacement." } },
      { "@type": "Question", name: "Do I need a battery backup for my sump pump?", acceptedAnswer: { "@type": "Answer", text: "Yes, especially in New Jersey where storms often cause power outages. A battery backup keeps your sump pump running during outages -exactly when you need it most. It's inexpensive insurance against a flooded basement." } },
      { "@type": "Question", name: "Why is my sump pump running constantly?", acceptedAnswer: { "@type": "Answer", text: "Constant running can indicate: stuck float switch, high water table, undersized pump, check valve failure, or plumbing issue draining into the pit. A stuck float is most common -try cleaning or adjusting it. If the problem persists, call a professional." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-white">
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Maintenance</span>
                <time dateTime="2025-01-31">January 31, 2025</time>
                <span>12 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Sump Pump Maintenance: The Complete Homeowner&apos;s Guide</h1>
              <p className="text-xl text-gray-300">Your sump pump protects your basement from flooding -but only if it works when you need it. Here&apos;s how to keep it ready.</p>
            </div>
          </div>
        </header>

        <div className="border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-3xl mx-auto flex items-center gap-4">
              <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">IG</div>
              <div>
                <p className="font-semibold text-gray-900">Written by Illyrian Plumber</p>
                <p className="text-sm text-gray-600">Licensed Master Plumbers serving Middlesex County, NJ since 2020</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                Your sump pump sits quietly in the basement, ignored for months at a time -until a heavy rain comes and you need it desperately. Unfortunately, that&apos;s when many homeowners discover their pump has failed.
              </p>
              <p>
                A flooded basement is expensive and heartbreaking. The good news? Simple maintenance prevents most sump pump failures. This guide covers everything Middlesex County homeowners need to know about keeping their sump pump ready for New Jersey&apos;s storms.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Maintenance Topics</h2>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-red-700 hover:text-red-800">How Your Sump Pump Works</a></li>
                <li><a href="#testing" className="text-red-700 hover:text-red-800">How to Test Your Sump Pump</a></li>
                <li><a href="#maintenance-schedule" className="text-red-700 hover:text-red-800">Maintenance Schedule</a></li>
                <li><a href="#battery-backup" className="text-red-700 hover:text-red-800">Battery Backup Importance</a></li>
                <li><a href="#warning-signs" className="text-red-700 hover:text-red-800">Warning Signs of Failure</a></li>
                <li><a href="#replacement" className="text-red-700 hover:text-red-800">When to Replace</a></li>
              </ul>
            </nav>

            <section id="how-it-works" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How Your Sump Pump Works</h2>
              <p className="text-gray-700 mb-6">Understanding your sump pump helps you maintain it properly:</p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1. Water collection:</strong> Groundwater flows into the sump pit through drain tiles or naturally through the soil</li>
                  <li><strong>2. Float activation:</strong> As water rises, the float switch triggers the pump to turn on</li>
                  <li><strong>3. Pumping:</strong> The pump moves water up and out through the discharge pipe</li>
                  <li><strong>4. Check valve:</strong> Prevents pumped water from flowing back into the pit</li>
                  <li><strong>5. Discharge:</strong> Water exits through a pipe leading outside, away from the foundation</li>
                  <li><strong>6. Shut off:</strong> When water level drops, the float lowers and the pump turns off</li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Pedestal Pumps</h4>
                  <p className="text-gray-700 text-sm">Motor sits above the pit, out of water. Easier to service, louder operation, less powerful. Lasts 25-30 years.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Submersible Pumps</h4>
                  <p className="text-gray-700 text-sm">Entire unit sits in the pit underwater. Quieter, more powerful, handles debris better. Lasts 7-10 years.</p>
                </div>
              </div>
            </section>

            <section id="testing" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to Test Your Sump Pump</h2>
              <p className="text-gray-700 mb-6">Test your sump pump at least quarterly. Here&apos;s the proper procedure:</p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Step-by-Step Testing</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1.</strong> Remove the pit cover and inspect the pit for debris</li>
                  <li><strong>2.</strong> Check that the pump is upright and the float moves freely</li>
                  <li><strong>3.</strong> Pour 5 gallons of water slowly into the pit</li>
                  <li><strong>4.</strong> Watch the pump activate as water rises</li>
                  <li><strong>5.</strong> Verify water is pumped out quickly</li>
                  <li><strong>6.</strong> Confirm pump shuts off when water level drops</li>
                  <li><strong>7.</strong> Check discharge outside -water should flow freely, away from foundation</li>
                  <li><strong>8.</strong> Listen for unusual sounds during operation</li>
                </ol>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">What to Look For</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Pump activates at proper water level (not too high or low)</li>
                  <li>• Water evacuates within 10-15 seconds for 5 gallons</li>
                  <li>• No grinding, rattling, or unusual noises</li>
                  <li>• Pump shuts off cleanly when water is gone</li>
                  <li>• Discharge pipe flows freely outside</li>
                </ul>
              </div>
            </section>

            {/* Mid-content CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Sump pump not working?</p>
                <p className="text-gray-300 text-sm">Same-day sump pump repair and installation.</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">
                  Call Niti
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">
                  Call Danny
                </a>
              </div>
            </div>

            <section id="maintenance-schedule" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Complete Maintenance Schedule</h2>

              <div className="space-y-6">
                <div className="bg-white border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Monthly Tasks</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Check that pump is plugged in and power indicator is on
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Verify battery backup is charged (if equipped)
                    </li>
                  </ul>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quarterly Tasks</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Perform full water test (pour water, watch operation)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Clean debris from pit
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Check float switch movement
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Test battery backup operation
                    </li>
                  </ul>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Annual Tasks</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Remove pump and clean thoroughly
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Inspect check valve
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Clean sump pit completely
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Check discharge pipe for blockages
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Verify discharge location hasn&apos;t shifted
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Replace backup battery (every 3-5 years)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="battery-backup" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Battery Backup Is Essential</h2>

              <p className="text-gray-700 mb-6">When do storms cause the most basement water? When they also cause power outages. Without a battery backup, your sump pump is useless exactly when you need it most.</p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-3">New Jersey Reality Check</h4>
                <p className="text-gray-700">Major storms regularly cause widespread outages in Middlesex County. Without backup power, even a premium sump pump can&apos;t protect your basement during extended outages. A battery backup provides hours of protection -often enough to outlast the outage.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Battery Backup Benefits</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Protection during power outages</li>
                    <li>• Backup if primary pump fails</li>
                    <li>• Alarm system warns of problems</li>
                    <li>• Peace of mind during storms</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Battery Maintenance</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Test quarterly</li>
                    <li>• Check water level (if applicable)</li>
                    <li>• Replace every 3-5 years</li>
                    <li>• Keep connections clean</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="warning-signs" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Warning Signs of Pump Failure</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { title: "Strange Noises", desc: "Grinding, rattling, or humming indicates motor problems" },
                  { title: "Runs Constantly", desc: "May indicate stuck float, failing check valve, or high water table" },
                  { title: "Won't Turn On", desc: "Power issue, tripped breaker, or motor failure" },
                  { title: "Cycles Rapidly", desc: "Float switch problems or undersized pump" },
                  { title: "Vibrates Excessively", desc: "Impeller damage or motor bearing failure" },
                  { title: "Visible Rust", desc: "Corrosion shortens pump life significantly" },
                  { title: "Pumps Slowly", desc: "Clogged intake, worn impeller, or motor weakening" },
                  { title: "Water in Basement", desc: "Pump not keeping up -needs service or replacement" },
                ].map((sign, index) => (
                  <div key={index} className="flex items-start gap-3 bg-amber-50 rounded-lg p-4">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">{sign.title}</p>
                      <p className="text-sm text-gray-700">{sign.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Mid-content CTA 2 */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Sump pump not working?</p>
              <p className="text-red-100 text-sm mb-4">Same-day sump pump repair and installation.</p>
              <div className="flex flex-wrap gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">
                  Call Niti: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">
                  Call Danny: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Service Card */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Related Service: Sump Pump Repair</p>
                <p className="text-sm text-gray-600 mb-2">Same-day sump pump repair, replacement, and battery backup installation. Serving all of Middlesex County.</p>
                <Link href="/services/sump-pump-repair-install" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            <section id="replacement" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to Replace Your Sump Pump</h2>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Replace If:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pump is over 7-10 years old (submersible)</li>
                  <li>• Pump is over 15-20 years old (pedestal)</li>
                  <li>• Multiple failures or repairs needed</li>
                  <li>• Pump runs but doesn&apos;t remove water efficiently</li>
                  <li>• Visible damage or heavy corrosion</li>
                  <li>• Motor makes grinding/failing sounds</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Proactive Replacement</h4>
                <p className="text-gray-700">Don&apos;t wait for failure. If your pump is approaching the end of its expected life, replace it proactively -before a storm reveals it&apos;s failed. The cost of a new pump is far less than water damage restoration.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Middlesex County Considerations</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">High Water Table Areas</h4>
                  <p className="text-gray-700">Parts of Middlesex County have high water tables. Pumps in these areas run more frequently and may need replacement sooner. Consider upgrading to a higher-capacity pump if yours runs constantly during wet seasons.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Storm Season Readiness</h4>
                  <p className="text-gray-700">Test your pump before hurricane season (June-November) and before spring rain season. New Jersey gets significant rain in spring and during tropical systems -your pump needs to be ready.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Freeze Protection</h4>
                  <p className="text-gray-700">Discharge lines can freeze in winter, causing backups. Ensure your discharge pipe has proper pitch and consider a freeze guard or larger diameter pipe to prevent ice blockages.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How often should I test my sump pump?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Test your sump pump at least quarterly -ideally before each season. Also test before any predicted heavy rain. Testing takes just a few minutes and can reveal problems before they cause flooding.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How long do sump pumps last?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Submersible sump pumps typically last 7-10 years. Pedestal pumps can last 15-25 years since the motor stays dry. Battery backups need replacement every 3-5 years. Pumps that run frequently may need replacement sooner.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why is my sump pump running constantly?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Constant running can indicate: stuck or misadjusted float switch, high water table, undersized pump, failed check valve allowing water to flow back, or a plumbing drain incorrectly connected to the pit. Try cleaning and adjusting the float first.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Do I really need a battery backup?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">In New Jersey, absolutely yes. Our storms frequently cause power outages, and that&apos;s exactly when groundwater levels rise most. A battery backup is inexpensive insurance against a flooded basement -typically $300-500 for years of protection.</p></div>
                </details>
              </div>
            </section>

            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Sump Pump Services</h2>
              <p className="text-red-100 mb-6">From annual maintenance to emergency replacement, we keep Middlesex County basements dry. Don&apos;t wait for a storm to discover your pump has failed -schedule a maintenance check today.</p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                <Link href="/services/sump-pump-repair-install" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Sump Pump Services</Link>
              </div>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/signs-of-slab-leak-sewer-line" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs of Slab Leak</h3>
                    <p className="text-sm text-gray-600">Another water intrusion concern for homeowners.</p>
                  </div>
                </Link>
                <Link href="/blog/why-is-water-pressure-low" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Low Water Pressure Causes</h3>
                    <p className="text-sm text-gray-600">Troubleshoot plumbing issues in your home.</p>
                  </div>
                </Link>
              </div>
            </section>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                {/* Call Now */}
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need a Plumber?</p>
                  <p className="text-gray-600 text-sm mb-4">Same-day sump pump repair and installation.</p>
                  <a
                    href={BUSINESS_INFO.phoneLink}
                    className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2"
                  >
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a
                    href={BUSINESS_INFO.phone2Link}
                    className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full"
                  >
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>

                {/* Service Areas */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Service Areas</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>East Brunswick</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Edison</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Sayreville</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Old Bridge</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Monroe Township</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>South Brunswick</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>North Brunswick</li>
                  </ul>
                </div>

                {/* Services */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our Services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/tankless-water-heater-installation" className="text-gray-700 hover:text-red-700 transition">Tankless Water Heater Installation</Link></li>
                    <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                    <li><Link href="/services/boiler-repair-service" className="text-gray-700 hover:text-red-700 transition">Boiler Repair</Link></li>
                    <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Services</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>

                {/* Related Blogs */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/blog/frozen-pipes-prevention-repair" className="text-gray-700 hover:text-red-700 transition leading-snug block">Frozen Pipes Prevention and Repair</Link>
                    </li>
                    <li>
                      <Link href="/blog/signs-of-slab-leak-sewer-line" className="text-gray-700 hover:text-red-700 transition leading-snug block">Signs of a Slab Leak or Sewer Line Problem</Link>
                    </li>
                    <li>
                      <Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition leading-snug block">Why Is My Water Pressure Low?</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
