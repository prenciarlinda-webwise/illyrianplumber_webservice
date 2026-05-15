import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Gas Line Safety Guide for NJ Homeowners (2026)",
  description: "Gas leak signs, what to do if you smell gas, NJ permit rules, and prevention. 2026 safety guide for Middlesex County homeowners from licensed master plumbers.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/gas-leak-detection-safety" },
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
    title: "Gas Line Safety Guide for NJ Homeowners (2026)",
    description: "Gas leak signs, what to do if you smell gas, NJ permit rules, and prevention from licensed master plumbers.",
    type: "article",
    publishedTime: "2025-01-24T08:00:00.000Z",
    modifiedTime: "2026-05-15T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function GasSafetyPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Gas Line Safety Guide for NJ Homeowners (2026)",
    description: "Gas leak signs, what to do if you smell gas, NJ permit and licensing rules, prevention checklist, and Middlesex County safety guidance from licensed master plumbers.",
    image: "https://www.illyrianplumber.com/images/gas-line-installation.jpg",
    author: {
      "@type": "Person",
      name: "Illyrian Plumber Team",
      worksFor: { "@id": "https://www.illyrianplumber.com/#organization" },
    },
    publisher: { "@id": "https://www.illyrianplumber.com/#organization" },
    datePublished: "2025-01-24T08:00:00.000Z",
    dateModified: "2026-05-15T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/gas-leak-detection-safety" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.illyrianplumber.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.illyrianplumber.com/blog" },
      { "@type": "ListItem", position: 3, name: "Gas Line Safety Guide for NJ Homeowners", item: "https://www.illyrianplumber.com/blog/gas-leak-detection-safety" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What does a gas leak smell like?", acceptedAnswer: { "@type": "Answer", text: "Natural gas is odorless on its own, but utilities add mercaptan, a sulfur compound that smells like rotten eggs. If you smell this distinctive odor in your home, treat it as a gas leak emergency. The smell may be faint near a small pinhole leak in a fitting or overwhelming near a larger line failure." } },
      { "@type": "Question", name: "What should I do if I smell gas in my house?", acceptedAnswer: { "@type": "Answer", text: "Leave the building immediately without turning any switches on or off, since a single spark can ignite leaked gas. Take pets and family members with you. Once safely outside and away from the home, call 911 and PSE&G at 1-800-880-7734. Do not return inside until emergency responders give the all-clear." } },
      { "@type": "Question", name: "How do I know if I have a gas leak in my home?", acceptedAnswer: { "@type": "Answer", text: "The most reliable signs are a rotten-egg smell, a hissing sound near gas lines or appliances, dead vegetation directly above buried gas lines, bubbling in standing water near a line, an unexplained spike in your gas bill, and pilot lights that keep going out. Physical symptoms include headaches, dizziness, nausea, and fatigue that improve when you leave the home." } },
      { "@type": "Question", name: "Who can legally work on gas lines in New Jersey?", acceptedAnswer: { "@type": "Answer", text: "In New Jersey, only state-licensed master plumbers are authorized to work on gas piping. All gas line installations, repairs, and modifications require a municipal permit and inspection. DIY gas line work is illegal under NJ Uniform Construction Code and extremely dangerous. Always verify your contractor holds an active NJ Master Plumber License before work begins." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
                <time dateTime="2026-05-15">Updated May 15, 2026</time>
                <span>12 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Gas line safety guide for NJ homeowners (2026)</h1>
              <p className="text-xl text-gray-300">Recognize a gas leak in seconds, know what to do in the first five minutes, and understand who can legally work on gas piping in New Jersey.</p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2025-01-24" updateDate="2026-05-15" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 max-w-3xl">
            <div className="bg-red-100 border-2 border-red-500 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-red-800 mb-2">Emergency: if you smell gas now</h2>
              <ol className="text-red-800 space-y-2">
                <li><strong>1.</strong> Leave the building immediately, do not turn switches on or off</li>
                <li><strong>2.</strong> Do not use phones, lighters, or anything that could spark</li>
                <li><strong>3.</strong> Once outside and away, call 911</li>
                <li><strong>4.</strong> Call PSE&G: 1-800-880-7734 or your gas provider</li>
                <li><strong>5.</strong> Do not return until cleared by emergency responders</li>
              </ol>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-5 mb-8">
              <p className="font-bold text-gray-900 mb-2">Quick answer</p>
              <p className="text-gray-800 leading-relaxed">
                A natural gas leak smells like rotten eggs (mercaptan added by utilities) and may also produce a hissing sound near gas lines, dead vegetation, or an unexplained gas-bill spike. If you suspect a leak, leave the home immediately, then from a safe distance call 911 and PSE&G at 1-800-880-7734. In New Jersey, only a licensed master plumber can legally repair gas piping.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                Natural gas is a safe, efficient fuel when installed and maintained by licensed professionals. It heats homes, powers water heaters and stoves, and fuels outdoor grills throughout Middlesex County, but gas leaks are serious emergencies that demand immediate action. If your home needs <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 underline">licensed gas line repair or installation in NJ</Link>, only a state-licensed master plumber can legally perform the work.
              </p>
              <p>
                This guide covers what every Middlesex County homeowner should know about gas safety, from recognizing a leak to maintaining your gas appliances and knowing when to call for help.
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
              <h2 className="text-lg font-bold text-gray-900 mb-4">Gas safety topics</h2>
              <ul className="space-y-2">
                <li><a href="#recognizing-leaks" className="text-red-700 hover:text-red-800">Recognizing gas leaks</a></li>
                <li><a href="#what-to-do" className="text-red-700 hover:text-red-800">What to do if you suspect a leak</a></li>
                <li><a href="#prevention" className="text-red-700 hover:text-red-800">Preventing gas leaks</a></li>
                <li><a href="#appliance-safety" className="text-red-700 hover:text-red-800">Gas appliance safety</a></li>
                <li><a href="#when-to-call" className="text-red-700 hover:text-red-800">When to call a professional</a></li>
              </ul>
            </nav>

            <section id="recognizing-leaks" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Recognizing gas leaks</h2>
              <p className="text-gray-700 mb-6">Natural gas is colorless and odorless in its natural state. NJ utilities add mercaptan, a sulfur compound, to give it a distinctive rotten-egg smell for safety detection. The U.S. Department of Transportation requires this odorant in nearly all natural gas distribution systems.</p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Signs of a gas leak</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-900">Sign</th>
                      <th className="text-left p-3 font-semibold text-gray-900">What it means</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="p-3 font-medium">Rotten-egg smell</td><td className="p-3">Mercaptan odorant from leaked natural gas, the most common sign</td></tr>
                    <tr><td className="p-3 font-medium">Hissing sound</td><td className="p-3">Pressurized gas escaping near a line, fitting, appliance, or meter</td></tr>
                    <tr><td className="p-3 font-medium">Dead vegetation</td><td className="p-3">Plants or grass dying in a strip directly over a buried gas line</td></tr>
                    <tr><td className="p-3 font-medium">Bubbling water</td><td className="p-3">Bubbles in puddles or wet ground near a buried line</td></tr>
                    <tr><td className="p-3 font-medium">White mist or dust</td><td className="p-3">Visible cloud blowing from the ground above a high-pressure line</td></tr>
                    <tr><td className="p-3 font-medium">Higher gas bills</td><td className="p-3">An unexplained spike in monthly usage with no usage change</td></tr>
                    <tr><td className="p-3 font-medium">Pilot light failures</td><td className="p-3">Pilot lights on appliances that repeatedly go out</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Physical symptoms of gas exposure</h3>
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
                <p className="text-red-700 font-semibold mt-3">These can indicate gas exposure. Leave immediately and seek fresh air.</p>
              </div>
            </section>

            <section id="what-to-do" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What to do if you suspect a leak</h2>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Preventing gas leaks</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Annual appliance inspection</h4>
                  <p className="text-gray-700">Have gas appliances (furnace, boiler, water heater) inspected annually by a licensed professional. They check connections, ventilation, and safe operation.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Know your shutoff valves</h4>
                  <p className="text-gray-700">Locate the main gas shutoff (usually at the meter) and individual appliance shutoffs. In an emergency you may need to turn off the gas, but the actual shutoff is usually best left to professionals.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Install gas detectors</h4>
                  <p className="text-gray-700">Natural gas detectors add a second layer of safety, especially overnight. Install near gas appliances but not directly beside them, where false positives are common.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Call before you dig</h4>
                  <p className="text-gray-700">Before any digging project, call 811 (NJ One Call) at least 3 business days ahead. They mark underground utilities including gas lines, free of charge. Hitting a gas line is dangerous and expensive. Learn more from <a href="https://www.nj.gov/bpu/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800 underline">the NJ Board of Public Utilities</a>, which oversees pipeline safety in New Jersey.</p>
                </div>
              </div>
            </section>

            <section id="appliance-safety" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Gas appliance safety tips</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Gas range and stove</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Keep burners clean</li>
                    <li>• Blue flame is normal, yellow indicates a problem</li>
                    <li>• Never use for heating the home</li>
                    <li>• Ensure proper ventilation when cooking</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Gas water heater</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Keep area clear of flammables</li>
                    <li>• Check pilot light periodically</li>
                    <li>• Ensure proper venting</li>
                    <li>• Annual professional inspection</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Gas furnace and boiler</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Change filters regularly</li>
                    <li>• Keep vents unobstructed</li>
                    <li>• Annual tune-up before heating season</li>
                    <li>• Listen for unusual sounds</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Gas dryer</h4>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to call a professional</h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="text-gray-700 mb-4"><strong>In New Jersey, only licensed master plumbers can legally work on gas lines.</strong> Call a professional for:</p>
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
                <h4 className="font-bold text-gray-900 mb-2">Never DIY gas work</h4>
                <p className="text-gray-700">Gas line work is not a DIY project under any circumstances. Improper installation causes leaks, carbon monoxide poisoning, explosions, and house fires. The risk to your family and neighbors is too high. Always hire licensed, insured professionals.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Middlesex County gas safety</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">PSE&amp;G service area</h4>
                  <p className="text-gray-700">Most of Middlesex County is served by PSE&amp;G for natural gas. Their 24/7 gas emergency line is 1-800-880-7734, save it in your phone now. <a href="https://nj.pseg.com/safety" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800 underline">PSE&amp;G publishes detailed gas safety guidance</a> for residential customers, including what to do during a suspected leak and how to identify gas appliance issues.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Aging gas infrastructure</h4>
                  <p className="text-gray-700">Many homes in <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 underline">East Brunswick</Link> and <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 underline">Edison</Link> have gas lines installed 40 to 60+ years ago. If you have older black iron or galvanized gas piping, consider having it inspected for corrosion and replaced where needed before it fails.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What does a gas leak smell like?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Natural gas is odorless on its own, but utilities add mercaptan, a sulfur compound that smells like rotten eggs. If you smell this distinctive odor in your home, treat it as a gas leak emergency. The smell may be faint near a small pinhole leak in a fitting or overwhelming near a larger line failure.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What should I do if I smell gas in my house?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Leave the building immediately without turning any switches on or off, since a single spark can ignite leaked gas. Take pets and family members with you. Once safely outside and away from the home, call 911 and PSE&amp;G at 1-800-880-7734. Do not return inside until emergency responders give the all-clear.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How do I know if I have a gas leak in my home?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">The most reliable signs are a rotten-egg smell, a hissing sound near gas lines or appliances, dead vegetation directly above buried gas lines, bubbling in standing water near a line, an unexplained spike in your gas bill, and pilot lights that keep going out. Physical symptoms include headaches, dizziness, nausea, and fatigue that improve when you leave the home.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Who can legally work on gas lines in New Jersey?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">In New Jersey, only state-licensed master plumbers are authorized to work on gas piping. All gas line installations, repairs, and modifications require a municipal permit and inspection. DIY gas line work is illegal under NJ Uniform Construction Code and extremely dangerous. Always verify your contractor holds an active NJ Master Plumber License before work begins.</p></div>
                </details>
              </div>
            </section>

            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Gas line services</h2>
              <p className="text-red-100 mb-6">From new installations to safety inspections, our licensed plumbers handle all gas line work throughout Middlesex County. We pull permits, coordinate inspections, and stand behind every job.</p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                <Link href="/services/gas-line-repair-installation" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Gas line services</Link>
              </div>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
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
                  <p className="font-bold text-gray-900 mb-3">Service areas</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li><Link href="/service-areas/east-brunswick" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>East Brunswick</Link></li>
                    <li><Link href="/service-areas/edison" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Edison</Link></li>
                    <li><Link href="/service-areas/sayreville" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Sayreville</Link></li>
                    <li><Link href="/service-areas/old-bridge" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Old Bridge</Link></li>
                    <li><Link href="/service-areas/monroe-township" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Monroe Township</Link></li>
                    <li><Link href="/service-areas/south-brunswick" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>South Brunswick</Link></li>
                    <li><Link href="/service-areas/north-brunswick" className="flex items-center gap-2 hover:text-red-700 transition"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>North Brunswick</Link></li>
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
