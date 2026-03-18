import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Common Boiler Problems in Winter (And How to Fix Them)",
  description: "Troubleshoot common boiler problems: no heat, strange noises, pilot light issues. Expert winter boiler repair guide from NJ licensed plumbers.",
  keywords: [
    "common boiler problems",
    "boiler not working",
    "boiler troubleshooting",
    "boiler repair",
    "boiler no heat",
    "boiler pilot light",
    "boiler making noise",
    "boiler leaking water",
    "boiler pressure too low",
    "boiler keeps turning off",
    "boiler radiator not heating",
    "boiler kettling",
    "boiler short cycling",
    "winter boiler problems",
  ],
  openGraph: {
    title: "Common Boiler Problems in Winter (And How to Fix Them)",
    description: "Fix common boiler issues before calling for service. Expert troubleshooting guide.",
    type: "article",
    publishedTime: "2025-01-20T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function BoilerProblemsPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Common Boiler Problems in Winter (And How to Fix Them)",
    description: "Troubleshoot common boiler problems and learn when to call a professional.",
    image: "https://www.illyrianplumber.com/images/boiler-repair-service.jpg",
    author: { "@type": "Organization", name: BUSINESS_INFO.name, url: "https://www.illyrianplumber.com" },
    publisher: { "@type": "Organization", name: BUSINESS_INFO.name, logo: { "@type": "ImageObject", url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png" } },
    datePublished: "2025-01-20T08:00:00.000Z",
    dateModified: "2026-03-18T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/common-boiler-problems-winter" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Why is my boiler not producing heat?", acceptedAnswer: { "@type": "Answer", text: "Common causes include: thermostat set too low, no power to the boiler, pilot light out (older models), low water pressure in the system, or a faulty zone valve. Check these basics before calling for service." } },
      { "@type": "Question", name: "Why is my boiler making banging noises?", acceptedAnswer: { "@type": "Answer", text: "Banging or kettling noises usually indicate limescale buildup on the heat exchanger, low water pressure, or air in the system. The noise is caused by water boiling and steaming within the buildup. Professional descaling may be needed." } },
      { "@type": "Question", name: "How often should a boiler be serviced?", acceptedAnswer: { "@type": "Answer", text: "Boilers should be serviced annually, ideally in early fall before the heating season. Annual service includes cleaning, safety checks, and efficiency testing. Regular maintenance extends boiler life and prevents mid-winter breakdowns." } },
      { "@type": "Question", name: "Why does my boiler keep turning off?", acceptedAnswer: { "@type": "Answer", text: "Common causes include low water pressure, a faulty thermostat, frozen condensate pipe (condensing boilers), pump failure, or the boiler overheating due to limescale. Check the pressure gauge first -it should read 1-1.5 bar when cold." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-white">
        <header className="relative bg-gray-900 text-white py-16 md:py-24">
          <div className="absolute inset-0">
            <Image src="/images/boiler-repair-service-nj.jpg" alt="Common boiler problems in winter and how to fix them" fill className="object-cover opacity-40" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Heating</span>
                <time dateTime="2025-01-20">January 20, 2025</time>
                <span>14 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Common Boiler Problems in Winter (And How to Fix Them)</h1>
              <p className="text-xl text-gray-300">Troubleshoot your boiler issues before calling for service. Learn which problems you can fix yourself and when you need a professional.</p>
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
                There&apos;s nothing worse than waking up to a cold house in the middle of a New Jersey winter. Boiler problems always seem to happen at the worst possible time -during the coldest nights when you need heat the most.
              </p>
              <p>
                Before you panic, many common boiler issues have simple solutions you can try yourself. This guide covers the most frequent boiler problems we see throughout Middlesex County, what you can safely troubleshoot at home, and when it&apos;s time to call a professional.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/sewer-line-repair-replacement" className="text-red-700 hover:text-red-800">sewer line repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Common Boiler Problems</h2>
              <ul className="space-y-2">
                <li><a href="#no-heat" className="text-red-700 hover:text-red-800">No Heat or Hot Water</a></li>
                <li><a href="#strange-noises" className="text-red-700 hover:text-red-800">Strange Noises (Banging, Whistling)</a></li>
                <li><a href="#pilot-light" className="text-red-700 hover:text-red-800">Pilot Light Issues</a></li>
                <li><a href="#low-pressure" className="text-red-700 hover:text-red-800">Low Boiler Pressure</a></li>
                <li><a href="#radiator-issues" className="text-red-700 hover:text-red-800">Cold Radiators</a></li>
                <li><a href="#leaking" className="text-red-700 hover:text-red-800">Boiler Leaking</a></li>
                <li><a href="#cycling" className="text-red-700 hover:text-red-800">Short Cycling</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Middlesex County Tips</a></li>
              </ul>
            </nav>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Safety First</h2>
              <p className="text-gray-700">If you smell gas, leave your home immediately and call 911 and your gas company from outside. Never troubleshoot a boiler if you smell gas. For all other issues, turn off the boiler before inspecting.</p>
            </div>

            <section id="no-heat" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">No Heat or Hot Water</h2>
              <p className="text-gray-700 mb-6">The most common winter complaint. Before calling for service, check these potential causes:</p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Thermostat Settings</h4>
                  <p className="text-gray-700">Verify the thermostat is set to &quot;heat&quot; and the temperature is above the current room temperature. Check batteries if it&apos;s battery-powered. Try setting it 5 degrees higher.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Power Supply</h4>
                  <p className="text-gray-700">Check if the boiler has power. Look for illuminated controls or indicator lights. Check the circuit breaker and the emergency shutoff switch (often mistaken for a light switch near the boiler).</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Pilot Light (Older Boilers)</h4>
                  <p className="text-gray-700">Standing pilot boilers need the pilot lit. If it&apos;s out, follow manufacturer instructions to relight. If it won&apos;t stay lit, the thermocouple may need replacement.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">System Pressure</h4>
                  <p className="text-gray-700">Check the pressure gauge. Most boilers need 12-15 PSI when cold. Low pressure can prevent the boiler from firing. You may need to add water through the fill valve.</p>
                </div>
              </div>
            </section>

            <section id="strange-noises" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Strange Noises: Banging, Whistling, Gurgling</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Banging/Kettling</h4>
                  <p className="text-gray-700 text-sm">Usually limescale buildup on heat exchanger causing water to boil. Requires professional descaling.</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Whistling</h4>
                  <p className="text-gray-700 text-sm">Often caused by air in the system or restricted water flow. Bleed radiators and check for blockages.</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Gurgling</h4>
                  <p className="text-gray-700 text-sm">Air trapped in radiators or pipes. Bleed radiators starting from lowest level, working up.</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Humming</h4>
                  <p className="text-gray-700 text-sm">Could be normal pump operation, but loud humming may indicate a failing circulator pump.</p>
                </div>
              </div>
            </section>

            <section id="pilot-light" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Pilot Light Issues</h2>
              <p className="text-gray-700 mb-6">If your older boiler has a standing pilot that keeps going out, common causes include:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li><strong>Drafts:</strong> Check for drafts near the boiler that could blow out the pilot</li>
                <li><strong>Faulty thermocouple:</strong> This safety device shuts off gas if it doesn&apos;t sense the pilot flame. A worn thermocouple won&apos;t keep the pilot lit</li>
                <li><strong>Dirty pilot orifice:</strong> Dust or debris can restrict the pilot flame</li>
                <li><strong>Gas supply issues:</strong> Make sure the gas valve is fully open</li>
              </ul>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-gray-700"><strong>Pro tip:</strong> Modern boilers use electronic ignition instead of standing pilots. If you&apos;re tired of pilot problems, upgrading to a newer high-efficiency boiler eliminates this issue entirely -and saves on fuel costs.</p>
              </div>
            </section>

            {/* Dark CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Boiler not working?</p>
                <p className="text-gray-300 text-sm">Emergency boiler repair - we respond in 30 minutes</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
              </div>
            </div>

            <section id="low-pressure" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Low Boiler Pressure</h2>
              <p className="text-gray-700 mb-4">Check your boiler&apos;s pressure gauge. Normal cold pressure is 12-15 PSI. Low pressure prevents proper circulation and heat distribution.</p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">How to Repressurize Your Boiler</h3>
                <ol className="space-y-2 text-gray-700">
                  <li><strong>1.</strong> Locate the filling loop (flexible hose with valves connecting water supply to boiler)</li>
                  <li><strong>2.</strong> Turn off the boiler and let it cool</li>
                  <li><strong>3.</strong> Open both valves on the filling loop slowly</li>
                  <li><strong>4.</strong> Watch the pressure gauge -stop when it reaches 12-15 PSI</li>
                  <li><strong>5.</strong> Close both valves firmly</li>
                  <li><strong>6.</strong> If pressure drops again quickly, you likely have a leak -call a professional</li>
                </ol>
              </div>
            </section>

            <section id="radiator-issues" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Cold Radiators</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Cold at the Top, Warm at Bottom</h4>
                  <p className="text-gray-700">Air is trapped in the radiator. Bleed the radiator using a radiator key until water flows steadily.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Cold at the Bottom, Warm at Top</h4>
                  <p className="text-gray-700">Sludge buildup is blocking flow. The system needs professional power flushing.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Entire Radiator Cold</h4>
                  <p className="text-gray-700">Check the thermostatic valve (TRV) isn&apos;t turned off. The valve may be stuck. Try turning it fully on and off several times.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Some Radiators Cold, Others Hot</h4>
                  <p className="text-gray-700">System may need balancing. This involves adjusting lockshield valves to ensure even heat distribution. Usually a professional job.</p>
                </div>
              </div>
            </section>

            <section id="leaking" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Boiler Leaking</h2>
              <p className="text-gray-700 mb-6">Any boiler leak requires professional attention. However, identifying the source helps:</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Pressure Relief Valve</h4>
                  <p className="text-gray-700 text-sm">If dripping, pressure may be too high, or the valve itself may be faulty. Don&apos;t ignore this -it&apos;s a safety device.</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Pipe Connections</h4>
                  <p className="text-gray-700 text-sm">Leaks at fittings may just need tightening, but corroded connections need replacement.</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Heat Exchanger</h4>
                  <p className="text-gray-700 text-sm">Internal leaks are serious. Often means the boiler needs replacement.</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Pump Seal</h4>
                  <p className="text-gray-700 text-sm">Circulator pump leaks often can be repaired by replacing the seal or pump.</p>
                </div>
              </div>
              <p className="text-gray-700"><strong>Important:</strong> Turn off the boiler if you see an active leak and call for service. Water and electricity don&apos;t mix.</p>
            </section>

            <section id="cycling" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Short Cycling (Boiler Keeps Turning On and Off)</h2>
              <p className="text-gray-700 mb-6">When a boiler repeatedly starts and stops without completing a heating cycle, common causes include:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li><strong>Low water pressure:</strong> Check and repressurize if needed</li>
                <li><strong>Faulty thermostat:</strong> May be reading temperature incorrectly</li>
                <li><strong>Oversized boiler:</strong> A boiler too large for the home heats too quickly and cycles off</li>
                <li><strong>Pump issues:</strong> If circulation is poor, the boiler overheats and shuts down</li>
                <li><strong>Blockage:</strong> Scale or sludge restricting water flow causes overheating</li>
              </ul>
            </section>

            {/* Red CTA */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Boiler not working?</p>
              <p className="text-red-100 text-sm mb-4">Emergency boiler repair - we respond in 30 minutes</p>
              <div className="flex flex-wrap gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">Call Niti: {BUSINESS_INFO.phone}</a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">Call Danny: {BUSINESS_INFO.phone2}</a>
              </div>
            </div>

            {/* Service Card */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Related Service: Boiler Repair</p>
                <p className="text-sm text-gray-600 mb-2">Emergency and scheduled boiler repair services. We diagnose and fix all boiler types including steam, hot water, and high-efficiency condensing boilers.</p>
                <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Middlesex County Boiler Tips</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Fall Maintenance is Essential</h4>
                  <p className="text-gray-700">Schedule annual boiler service in September or October -before the heating season rush. Middlesex County winters are too cold to risk a mid-January breakdown.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Hard Water Effects</h4>
                  <p className="text-gray-700">Our moderately hard water contributes to limescale buildup in boilers. Annual chemical treatment and periodic power flushing extend boiler life significantly.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Older Homes, Older Boilers</h4>
                  <p className="text-gray-700">Many Middlesex County homes have boilers 20-30+ years old. While these units are durable, they&apos;re far less efficient than modern systems. If repair costs are mounting, consider upgrading to a high-efficiency model.</p>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why is my boiler not producing heat?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Common causes include: thermostat set too low, no power to the boiler, pilot light out (older models), low water pressure in the system, or a faulty zone valve. Check these basics before calling for service.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How often should a boiler be serviced?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Boilers should be serviced annually, ideally in early fall before the heating season. Annual service includes cleaning, safety checks, and efficiency testing. Regular maintenance extends boiler life and prevents mid-winter breakdowns.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why is my boiler making banging noises?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Banging or kettling noises usually indicate limescale buildup on the heat exchanger, causing water to boil and steam. This can also be caused by low water pressure or air in the system. Professional descaling is typically needed to resolve the issue.</p></div>
                </details>
              </div>
            </section>

            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Boiler Problems? We Can Help</h2>
              <p className="text-red-100 mb-6">From emergency repairs to annual maintenance, our licensed technicians keep Middlesex County homes warm all winter. Same-day service available for heating emergencies.</p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                <Link href="/services/boiler-repair-service" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Boiler Services</Link>
              </div>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/signs-water-heater-dying" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs Your Water Heater Is Dying</h3>
                    <p className="text-sm text-gray-600">Similar warning signs apply to boilers too.</p>
                  </div>
                </Link>
                <Link href="/services/radiant-heating-plumbing" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Radiant Heating Services</h3>
                    <p className="text-sm text-gray-600">Upgrade your heating system efficiency.</p>
                  </div>
                </Link>
              </div>
            </section>
          </div>
          {/* Sidebar */}
          <aside className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="sticky top-[6rem] space-y-6">
              <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                <p className="text-lg font-bold text-gray-900 mb-1">Need a Plumber?</p>
                <p className="text-gray-600 text-sm mb-4">Emergency boiler repair and heating service in Middlesex County.</p>
                <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
                <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
              </div>
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
              <div className="bg-white rounded-xl shadow-md p-5">
                <p className="font-bold text-gray-900 mb-3">Our Services</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/services/tankless-water-heater-installation" className="text-gray-700 hover:text-red-700 transition">Tankless Water Heater Installation</Link></li>
                  <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                  <li><Link href="/services/water-heater-replacement" className="text-gray-700 hover:text-red-700 transition">Water Heater Replacement</Link></li>
                  <li><Link href="/services/boiler-repair-service" className="text-gray-700 hover:text-red-700 transition">Boiler Repair</Link></li>
                  <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Services</Link></li>
                  <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                </ul>
                <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5">
                <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/blog/gas-leak-detection-safety" className="text-gray-700 hover:text-red-700 transition leading-snug block">Gas Leak Detection and Safety Guide</Link></li>
                  <li><Link href="/blog/signs-water-heater-dying" className="text-gray-700 hover:text-red-700 transition leading-snug block">7 Signs Your Water Heater Is Dying</Link></li>
                  <li><Link href="/blog/frozen-pipes-prevention-repair" className="text-gray-700 hover:text-red-700 transition leading-snug block">Frozen Pipes: Prevention and Repair</Link></li>
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
