import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gas Line Safety: What Every Homeowner Should Know",
  description: "Learn gas leak signs, safety procedures, and when to call for help. Essential gas line safety guide from licensed NJ plumbers.",
  keywords: [
    "gas leak detection",
    "gas line safety",
    "gas leak signs",
    "gas line installation",
    "natural gas safety",
    "gas leak smell",
    "what to do gas leak",
    "gas line repair",
    "gas leak in house",
    "how to detect gas leak",
    "gas pipe leak detection",
    "natural gas leak symptoms",
    "gas line inspection",
  ],
  openGraph: {
    title: "Gas Line Safety: What Every Homeowner Should Know",
    description: "Essential gas safety knowledge for every homeowner. Know the signs and what to do.",
    type: "article",
    publishedTime: "2025-01-24T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function GasSafetyPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Gas Line Safety: What Every Homeowner Should Know",
    description: "Essential gas leak detection and safety information for homeowners.",
    image: "https://www.illyrianplumber.com/images/gas-line-installation.jpg",
    author: { "@type": "Organization", name: BUSINESS_INFO.name, url: "https://www.illyrianplumber.com" },
    publisher: { "@type": "Organization", name: BUSINESS_INFO.name, logo: { "@type": "ImageObject", url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png" } },
    datePublished: "2025-01-24T08:00:00.000Z",
    dateModified: "2026-03-18T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/gas-leak-detection-safety" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What does a gas leak smell like?", acceptedAnswer: { "@type": "Answer", text: "Natural gas is odorless, but utilities add mercaptan -a chemical that smells like rotten eggs or sulfur. If you smell this distinctive odor, treat it as a gas leak. The smell may be faint near small leaks or overwhelming near large ones." } },
      { "@type": "Question", name: "What should I do if I smell gas?", acceptedAnswer: { "@type": "Answer", text: "Leave the building immediately without turning any lights or switches on or off. Don't use your phone inside. Once safely outside, call 911 and your gas company's emergency line. Don't return until cleared by professionals." } },
      { "@type": "Question", name: "How do I know if I have a gas leak?", acceptedAnswer: { "@type": "Answer", text: "Signs include: rotten egg smell, hissing or whistling sound near gas lines, dead plants near gas lines, bubbling in standing water, higher than normal gas bills, and pilot lights frequently going out. Physical symptoms include headaches, dizziness, and nausea." } },
      { "@type": "Question", name: "Who can work on gas lines in NJ?", acceptedAnswer: { "@type": "Answer", text: "In New Jersey, only licensed plumbers are authorized to work on gas piping. DIY gas line work is illegal and extremely dangerous. All gas line work requires permits and inspection. Always hire a licensed, insured professional." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-white">
        <header className="relative bg-gray-900 text-white py-16 md:py-24">
          <div className="absolute inset-0">
            <Image src="/images/gas-line-pressure-gauge-installation.jpg" alt="Gas leak detection and safety guide for homeowners" fill className="object-cover opacity-40" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Safety</span>
                <time dateTime="2025-01-24">January 24, 2025</time>
                <span>12 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Gas Line Safety: What Every Homeowner Should Know</h1>
              <p className="text-xl text-gray-300">Natural gas powers many homes, but requires respect. Learn the warning signs of gas leaks and essential safety procedures.</p>
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
            <div className="bg-red-100 border-2 border-red-500 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-red-800 mb-2">Emergency: If You Smell Gas Now</h2>
              <ol className="text-red-800 space-y-2">
                <li><strong>1.</strong> Leave the building immediately -don&apos;t turn switches on or off</li>
                <li><strong>2.</strong> Don&apos;t use phones, lighters, or anything that could spark</li>
                <li><strong>3.</strong> Once outside and away, call 911</li>
                <li><strong>4.</strong> Call PSE&G: 1-800-880-7734 or your gas provider</li>
                <li><strong>5.</strong> Don&apos;t return until cleared by emergency responders</li>
              </ol>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                Natural gas is a safe, efficient fuel when handled properly. It heats homes, powers water heaters and stoves, and fuels outdoor grills throughout Middlesex County. But gas leaks are serious emergencies that require immediate action.
              </p>
              <p>
                This guide covers what every homeowner should know about gas safety -from recognizing leaks to maintaining your gas appliances.
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
              <h2 className="text-lg font-bold text-gray-900 mb-4">Gas Safety Topics</h2>
              <ul className="space-y-2">
                <li><a href="#recognizing-leaks" className="text-red-700 hover:text-red-800">Recognizing Gas Leaks</a></li>
                <li><a href="#what-to-do" className="text-red-700 hover:text-red-800">What to Do If You Suspect a Leak</a></li>
                <li><a href="#prevention" className="text-red-700 hover:text-red-800">Preventing Gas Leaks</a></li>
                <li><a href="#appliance-safety" className="text-red-700 hover:text-red-800">Gas Appliance Safety</a></li>
                <li><a href="#when-to-call" className="text-red-700 hover:text-red-800">When to Call a Professional</a></li>
              </ul>
            </nav>

            <section id="recognizing-leaks" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Recognizing Gas Leaks</h2>
              <p className="text-gray-700 mb-6">Natural gas is colorless and odorless in its natural state. Utility companies add mercaptan -a sulfur compound -to give it a distinctive &quot;rotten egg&quot; smell for safety detection.</p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Signs of a Gas Leak</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Rotten Egg Smell", desc: "Distinctive sulfur odor -the most common sign" },
                  { title: "Hissing Sound", desc: "Near gas lines, appliances, or meter" },
                  { title: "Dead Vegetation", desc: "Plants dying over buried gas lines" },
                  { title: "Bubbling Water", desc: "In puddles or wet areas near lines" },
                  { title: "White Mist or Dust", desc: "Blowing from ground or near lines" },
                  { title: "Higher Gas Bills", desc: "Unexplained increase in usage" },
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

              <h3 className="text-xl font-bold text-gray-900 mb-4">Physical Symptoms of Gas Exposure</h3>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="text-gray-700 mb-3">If you experience these symptoms in your home and they improve when you leave:</p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                  <li>• Headaches</li>
                  <li>• Dizziness</li>
                  <li>• Nausea</li>
                  <li>• Fatigue</li>
                  <li>• Difficulty breathing</li>
                  <li>• Eye and throat irritation</li>
                </ul>
                <p className="text-red-700 font-semibold mt-3">These could indicate gas exposure. Leave immediately and seek fresh air.</p>
              </div>
            </section>

            <section id="what-to-do" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What to Do If You Suspect a Leak</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-800">DO:</h4>
                  <ul className="text-gray-700 space-y-1 mt-2">
                    <li>✓ Leave the area immediately</li>
                    <li>✓ Take others with you, including pets</li>
                    <li>✓ Leave doors open as you exit (aids ventilation)</li>
                    <li>✓ Move well away from the building</li>
                    <li>✓ Call 911 and gas company from a safe distance</li>
                    <li>✓ Warn neighbors if appropriate</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-800">DON&apos;T:</h4>
                  <ul className="text-gray-700 space-y-1 mt-2">
                    <li>✗ Turn light switches on or off -sparks can ignite gas</li>
                    <li>✗ Use your phone inside the building</li>
                    <li>✗ Start your car in an attached garage</li>
                    <li>✗ Use matches, lighters, or flames</li>
                    <li>✗ Try to find or fix the leak yourself</li>
                    <li>✗ Return until professionals give the all-clear</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Mid-content CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Smell gas?</p>
                <p className="text-gray-300 text-sm">Call immediately - 24/7 gas line emergency service.</p>
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

            <section id="prevention" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Preventing Gas Leaks</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Annual Appliance Inspection</h4>
                  <p className="text-gray-700">Have gas appliances (furnace, boiler, water heater) inspected annually by a licensed professional. They&apos;ll check connections, ventilation, and safe operation.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Know Your Shutoff Valves</h4>
                  <p className="text-gray-700">Locate the main gas shutoff (usually at the meter) and individual appliance shutoffs. In an emergency, you may need to turn off gas -but usually leave this to professionals.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Install Gas Detectors</h4>
                  <p className="text-gray-700">Natural gas detectors provide an additional layer of safety, especially useful while sleeping. Install near gas appliances but not directly beside them.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Call Before You Dig</h4>
                  <p className="text-gray-700">Before any digging project, call 811 (NJ One Call). They&apos;ll mark underground utilities including gas lines -free of charge. Hitting a gas line is dangerous and expensive.</p>
                </div>
              </div>
            </section>

            <section id="appliance-safety" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Gas Appliance Safety Tips</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Gas Range/Stove</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Keep burners clean</li>
                    <li>• Blue flame is normal; yellow indicates a problem</li>
                    <li>• Never use for heating the home</li>
                    <li>• Ensure proper ventilation when cooking</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Gas Water Heater</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Keep area clear of flammables</li>
                    <li>• Check pilot light periodically</li>
                    <li>• Ensure proper venting</li>
                    <li>• Annual professional inspection</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Gas Furnace/Boiler</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Change filters regularly</li>
                    <li>• Keep vents unobstructed</li>
                    <li>• Annual tune-up before heating season</li>
                    <li>• Listen for unusual sounds</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Gas Dryer</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Clean lint trap after every use</li>
                    <li>• Clean dryer vent annually</li>
                    <li>• Ensure proper exhaust ventilation</li>
                    <li>• Use rigid metal vent pipe</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Mid-content CTA 2 */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Smell gas?</p>
              <p className="text-red-100 text-sm mb-4">Call immediately - 24/7 gas line emergency service.</p>
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
                <p className="font-bold text-gray-900 mb-1">Related Service: Gas Line Repair</p>
                <p className="text-sm text-gray-600 mb-2">Licensed gas line installation, repair, and safety inspections. All work permitted and inspected. Serving all of Middlesex County.</p>
                <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            <section id="when-to-call" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to Call a Professional</h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="text-gray-700 mb-4"><strong>In New Jersey, only licensed plumbers can legally work on gas lines.</strong> Call a professional for:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Installing new gas appliances</li>
                  <li>• Running gas lines to new locations</li>
                  <li>• Replacing old or corroded gas piping</li>
                  <li>• Converting appliances from electric to gas</li>
                  <li>• Annual safety inspections</li>
                  <li>• Any gas line modifications</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Never DIY Gas Work</h4>
                <p className="text-gray-700">Gas line work is not a DIY project under any circumstances. Improper installation causes leaks, carbon monoxide poisoning, explosions, and house fires. The risk to your family and neighbors is too high. Always hire licensed, insured professionals.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Middlesex County Gas Safety</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">PSE&G Service Area</h4>
                  <p className="text-gray-700">Most of Middlesex County is served by PSE&G for natural gas. Their 24/7 gas emergency line is 1-800-880-7734. Save this number in your phone.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Aging Gas Infrastructure</h4>
                  <p className="text-gray-700">Many Middlesex County homes have gas lines installed 40-60+ years ago. If you have older black iron or galvanized gas piping, consider having it inspected for corrosion and safety.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What does a gas leak smell like?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Natural gas itself is odorless, but utilities add mercaptan -a chemical that smells like rotten eggs or sulfur. This distinctive smell makes gas leaks detectable. If you smell it, treat it as a gas leak emergency.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Who can work on gas lines in NJ?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">In New Jersey, only licensed plumbers are authorized to work on gas piping. All gas line work requires permits and inspections. DIY gas work is illegal and dangerous. Always verify your contractor is licensed and insured.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How often should gas appliances be inspected?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Gas appliances should be professionally inspected annually. This is especially important for heating equipment (furnaces, boilers) which should be serviced before each heating season. Regular inspection catches potential issues before they become dangerous.</p></div>
                </details>
              </div>
            </section>

            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Gas Line Services</h2>
              <p className="text-red-100 mb-6">From new installations to safety inspections, our licensed plumbers handle all gas line work throughout Middlesex County. We ensure safe, code-compliant installations every time.</p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                <Link href="/services/gas-line-repair-installation" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Gas Line Services</Link>
              </div>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/common-boiler-problems-winter" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Common Boiler Problems in Winter</h3>
                    <p className="text-sm text-gray-600">Many boilers run on natural gas -keep them running safely.</p>
                  </div>
                </Link>
                <Link href="/services/plumbing-safety-inspections" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Plumbing Safety Inspections</h3>
                    <p className="text-sm text-gray-600">Comprehensive inspection including gas line checks.</p>
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
                  <p className="text-gray-600 text-sm mb-4">24/7 gas line emergency service.</p>
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
                      <Link href="/blog/common-boiler-problems-winter" className="text-gray-700 hover:text-red-700 transition leading-snug block">Common Boiler Problems in Winter</Link>
                    </li>
                    <li>
                      <Link href="/blog/signs-of-slab-leak-sewer-line" className="text-gray-700 hover:text-red-700 transition leading-snug block">Signs of a Slab Leak or Sewer Line Problem</Link>
                    </li>
                    <li>
                      <Link href="/blog/frozen-pipes-prevention-repair" className="text-gray-700 hover:text-red-700 transition leading-snug block">Frozen Pipes Prevention and Repair</Link>
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
