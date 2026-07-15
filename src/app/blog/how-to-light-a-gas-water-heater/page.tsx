import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How to Light a Gas Water Heater and Set the Temp (2026)",
  description: "How to light a gas water heater and relight the pilot safely, plus how to adjust the temperature and turn the unit off. Step-by-step guide for NJ homeowners.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/how-to-light-a-gas-water-heater" },
  keywords: [
    "how to light a gas water heater",
    "how to turn on gas water heater",
    "how do you relight a water heater",
    "how to turn up temp on hot water heater",
    "how to turn hot water up on hot water heater",
    "how to turn off a water heater",
    "how does a hot water heater work",
    "water heater pilot light",
  ],
  openGraph: {
    title: "How to Light a Gas Water Heater and Set the Temp (2026)",
    description: "Relight the pilot safely, adjust the temperature, and know when to call a pro. Step-by-step gas water heater guide.",
    type: "article",
    publishedTime: "2026-06-02T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

const faqs = [
  {
    question: "How do I relight the pilot on a gas water heater?",
    answer:
      "Turn the gas control knob to Off and wait five minutes for any gas to clear. Set the knob to Pilot, hold it down to release gas to the pilot, and press the igniter button until the flame lights, then keep holding for about 30 seconds. Release the knob, confirm the pilot stays lit, and turn the knob to On. If your heater has a sealed chamber, follow the lighting label printed on the unit.",
  },
  {
    question: "What temperature should I set my water heater to?",
    answer:
      "Set the water heater to 120 degrees Fahrenheit. The US Department of Energy recommends 120 degrees to prevent scalding and reduce standby energy loss, while still being hot enough for daily use. The thermostat dial on a gas heater often shows Low, Hot, A, B, C, or Very Hot rather than numbers, so 120 degrees usually falls around the Hot or A-B setting. Test the water at a tap and adjust from there.",
  },
  {
    question: "Why won't my water heater pilot light stay lit?",
    answer:
      "The most common cause is a worn thermocouple, the safety sensor that shuts off gas if it does not detect the pilot flame. A dirty pilot orifice, a loose thermocouple connection, or a tripped gas valve can also be the issue. If the pilot lights but goes out as soon as you release the knob, the thermocouple is the likely culprit and should be replaced by a licensed plumber.",
  },
  {
    question: "How do I turn off a gas water heater?",
    answer:
      "To turn it off normally, set the gas control knob to Off. To shut it down for service or a leak, also close the gas shutoff valve on the supply line near the unit and close the cold water inlet valve on top of the tank. Never leave a gas heater running if you smell gas. Leave the house and call your gas utility first, then a licensed plumber.",
  },
];

export default function HowToLightAGasWaterHeater() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Light a Gas Water Heater and Set the Temp (2026)",
    description:
      "Step-by-step guide to lighting and relighting a gas water heater pilot, adjusting the temperature to 120 degrees, and turning the unit off safely, plus when to call a licensed Middlesex County NJ plumber.",
    image: "https://www.illyrianplumber.com/images/water-heater-repair-service.jpg",
    author: { "@type": "Organization", name: BUSINESS_INFO.name, url: "https://www.illyrianplumber.com" },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      logo: { "@type": "ImageObject", url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png" },
    },
    datePublished: "2026-06-02T08:00:00.000Z",
    dateModified: "2026-06-02T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/how-to-light-a-gas-water-heater" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.illyrianplumber.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.illyrianplumber.com/blog" },
      { "@type": "ListItem", position: 3, name: "How to Light a Gas Water Heater", item: "https://www.illyrianplumber.com/blog/how-to-light-a-gas-water-heater" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-white">
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Water Heaters</span>
                <time dateTime="2026-06-02">June 2, 2026</time>
                <span>12 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How to light a gas water heater
              </h1>
              <p className="text-xl text-gray-300">
                Lost hot water after a pilot went out? Relight it safely, set the right temperature, and know the warning signs that mean it is time to call a pro.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-06-02" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-lg max-w-none">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-5 mb-6">
                  <p className="text-sm text-yellow-900 font-medium mb-1">Safety first</p>
                  <p className="text-sm text-yellow-800">If you smell gas, do not try to light the heater. Leave the house, do not use switches or phones inside, and call your gas utility from outside, then a licensed plumber. A rotten-egg odor means gas is present and lighting anything is dangerous.</p>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  When a gas water heater loses its pilot flame, the hot water stops, and relighting it is usually a five minute job you can do safely by following the steps below. This guide also covers setting the temperature and turning the unit off. If the pilot will not stay lit or you are uneasy working with gas, our <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800 font-semibold">water heater repair</Link> team handles it across Middlesex County. Work slowly and follow the lighting instructions printed on a label on your specific heater, since models vary.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers serving Middlesex County, NJ since 2010. We specialize in <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800">water heater replacement</Link>, <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
                </p>
              </div>

              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">In this guide</h2>
                <ul className="space-y-2">
                  <li><a href="#light" className="text-red-700 hover:text-red-800">How to light or relight the pilot</a></li>
                  <li><a href="#temp" className="text-red-700 hover:text-red-800">How to adjust the temperature</a></li>
                  <li><a href="#off" className="text-red-700 hover:text-red-800">How to turn the water heater off</a></li>
                  <li><a href="#pro" className="text-red-700 hover:text-red-800">When to call a plumber</a></li>
                  <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently asked questions</a></li>
                </ul>
              </nav>

              <section id="light" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to light or relight the pilot</h2>
                <p className="text-gray-700 mb-4">
                  Modern heaters use a push-button piezo igniter, so you rarely need a match. Read the label on your unit first, then follow these steps.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Step 1: Turn off the gas and wait</h3>
                    <p className="text-gray-700">Turn the gas control knob to Off and wait a full five minutes. This lets any unburned gas clear out of the chamber so it is safe to light. Do not rush this step. If you smell gas at any point, stop and follow the safety notice above.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Step 2: Set the knob to Pilot and ignite</h3>
                    <p className="text-gray-700">Turn the knob to Pilot, press and hold it down to send gas to the pilot, and press the red igniter button repeatedly until the pilot flame lights. On older units without an igniter, hold a long lighter at the pilot opening while pressing the knob.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Step 3: Hold, then switch to On</h3>
                    <p className="text-gray-700">Keep holding the knob down for about 30 seconds after the pilot lights. This warms the thermocouple so it keeps the gas valve open. Slowly release the knob. If the pilot stays lit, turn the knob to On and set the temperature. If it goes out, repeat once, then see the troubleshooting section.</p>
                  </div>
                </div>
              </section>

              <section id="temp" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to adjust the water heater temperature</h2>
                <p className="text-gray-700 mb-4">
                  The temperature dial is on the front of the gas control valve. Many dials show Low, Hot, A, B, C, and Very Hot instead of numbers. To turn the hot water up, rotate toward Hot or Very Hot, and to lower it, rotate toward Low.
                </p>
                <p className="text-gray-700 mb-4">
                  Set it to about 120 degrees Fahrenheit. The <a href="https://www.energy.gov/energysaver/water-heating" target="_blank" rel="noopener" className="text-red-700 hover:text-red-800">US Department of Energy</a> recommends 120 degrees to balance scald safety, bacteria control, and energy savings. Since the dial is not precise, run the hot water at a faucet for a minute and check it with a thermometer, then nudge the dial and recheck after a couple of hours.
                </p>
                <p className="text-gray-700">
                  If you constantly run out of hot water even at a higher setting, the tank may be undersized or failing. Our guides on <Link href="/blog/how-long-water-heater-heat-up" className="text-red-700 hover:text-red-800">how long a water heater takes to heat up</Link> and <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:text-red-800">signs your water heater is dying</Link> can help you tell the difference.
                </p>
              </section>

              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">No hot water and the pilot won&apos;t hold?</p>
                  <p className="text-gray-300 text-sm">Our water heater techs serve Middlesex County, 24/7.</p>
                </div>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
                </div>
              </div>

              <section id="off" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to turn the water heater off</h2>
                <p className="text-gray-700 mb-4">
                  For everyday purposes, turning the gas control knob to Off shuts the heater down. For service, a leak, or a long absence, take two more steps.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Turn the gas control knob to Off.</li>
                  <li>Close the gas shutoff valve on the supply line near the heater by turning the lever so it crosses the pipe.</li>
                  <li>If you are draining the tank, close the cold water inlet valve on top and connect a hose to the drain valve.</li>
                </ul>
                <p className="text-gray-700">
                  If you are shutting the heater because the whole house water is off, our <Link href="/blog/how-to-shut-off-water-to-your-house" className="text-red-700 hover:text-red-800">water shutoff guide</Link> walks through the rest of the steps. Never let an electric or gas tank keep heating when it has no water in it.
                </p>
              </section>

              <section id="pro" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to call a plumber</h2>
                <p className="text-gray-700 mb-4">
                  Call a licensed plumber if the pilot lights but will not stay lit after two tries, which usually points to a worn thermocouple, if you smell gas, if you see water pooling under the tank, if the burner makes loud popping or rumbling sounds, or if the water never gets hot enough despite a correct setting. Gas components and venting affect safety, so they should be serviced by a professional.
                </p>
                <p className="text-gray-700">
                  Our team repairs pilot, thermocouple, gas valve, and venting issues through our <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link> service, and when a tank is past its service life we handle <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800">water heater replacement</Link> across Middlesex County.
                </p>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <details key={i} className="group bg-gray-50 rounded-lg">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                        <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                      </summary>
                      <div className="px-5 pb-5"><p className="text-gray-700">{faq.answer}</p></div>
                    </details>
                  ))}
                </div>
              </section>

              <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Water heater trouble in Middlesex County?</h2>
                <p className="text-red-100 mb-6">
                  From pilot and thermocouple repairs to full replacements, our licensed plumbers serve East Brunswick, Edison, and all of Middlesex County, NJ.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                  <Link href="/services/water-heater-repair" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Water Heater Repair</Link>
                </div>
              </section>

              <section className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/signs-water-heater-dying" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs Your Water Heater Is Dying</h3>
                      <p className="text-sm text-gray-600">Know when repair turns into replacement.</p>
                    </div>
                  </Link>
                  <Link href="/blog/common-water-heater-problems" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Common Water Heater Problems</h3>
                      <p className="text-sm text-gray-600">Diagnose the most frequent failures.</p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">No hot water?</p>
                  <p className="text-gray-600 text-sm mb-4">Water heater repair and replacement across Middlesex County, 24/7.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                    <li><Link href="/services/water-heater-replacement" className="text-gray-700 hover:text-red-700 transition">Water Heater Replacement</Link></li>
                    <li><Link href="/services/tankless-water-heater-installation" className="text-gray-700 hover:text-red-700 transition">Tankless Installation</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Service Areas</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/east-brunswick" className="hover:text-red-700 transition">East Brunswick</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/edison" className="hover:text-red-700 transition">Edison</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/sayreville" className="hover:text-red-700 transition">Sayreville</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/old-bridge" className="hover:text-red-700 transition">Old Bridge</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/monroe-township" className="hover:text-red-700 transition">Monroe Township</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/south-brunswick" className="hover:text-red-700 transition">South Brunswick</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/north-brunswick" className="hover:text-red-700 transition">North Brunswick</Link></li>
                  </ul>
                  <Link href="/service-areas" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Service Areas</Link>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You might also like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/signs-water-heater-dying" className="text-gray-700 hover:text-red-700 transition">Signs Your Water Heater Is Dying</Link></li>
                    <li><Link href="/blog/common-water-heater-problems" className="text-gray-700 hover:text-red-700 transition">Common Water Heater Problems</Link></li>
                    <li><Link href="/blog/how-to-drain-flush-water-heater" className="text-gray-700 hover:text-red-700 transition">How to Drain and Flush a Water Heater</Link></li>
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
