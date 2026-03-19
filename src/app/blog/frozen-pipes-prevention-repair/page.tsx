import { Metadata } from "next";

import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Frozen Pipes: Prevention, Thawing & Repair Guide (NJ)",
  description: "Learn how to prevent frozen pipes, thaw them safely, and when to call a plumber. Expert frozen pipe repair guide for New Jersey homeowners.",
  keywords: [
    "frozen pipes",
    "how to prevent pipes from freezing",
    "how to thaw frozen pipes",
    "pipes freeze temperature",
    "frozen pipe repair",
    "what to do if pipes freeze",
    "how to unfreeze pipes",
    "frozen water pipes",
    "pipes burst from freezing",
    "prevent pipes from freezing",
    "frozen pipe burst",
    "how to keep pipes from freezing",
    "at what temperature do pipes freeze",
    "frozen pipes what to do",
    "winter plumbing tips NJ",
    "frozen pipe repair near me",
    "burst pipe emergency plumber",
    "pipe insulation for winter",
    "frozen pipes in walls",
    "how to fix frozen pipes",
  ],
  openGraph: {
    title: "Frozen Pipes: Prevention, Thawing & Repair Guide (NJ)",
    description: "Complete guide to frozen pipe prevention, safe thawing, and emergency repair for New Jersey homeowners.",
    type: "article",
    publishedTime: "2026-03-18T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function FrozenPipesPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Frozen Pipes: Prevention, Thawing & Repair Guide for NJ Homeowners",
    description: "Complete guide to frozen pipe prevention, safe thawing methods, and emergency repair for New Jersey homeowners in Middlesex County.",
    image: "https://www.illyrianplumber.com/images/emergency-plumbing-service.jpg",
    author: { "@type": "Organization", name: BUSINESS_INFO.name, url: "https://www.illyrianplumber.com" },
    publisher: { "@type": "Organization", name: BUSINESS_INFO.name, logo: { "@type": "ImageObject", url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png" } },
    datePublished: "2026-03-18T08:00:00.000Z",
    dateModified: "2026-03-18T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/frozen-pipes-prevention-repair" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "At what temperature do pipes freeze?", acceptedAnswer: { "@type": "Answer", text: "Pipes are at risk of freezing when outdoor temperatures drop below 20°F (-6°C) for an extended period. The risk begins when temperatures fall below 32°F (0°F), but most pipes won't freeze until the temperature remains at or below 20°F for several hours, especially pipes in unheated or poorly insulated areas." } },
      { "@type": "Question", name: "How do I thaw frozen pipes safely?", acceptedAnswer: { "@type": "Answer", text: "Open the faucet first, then apply gentle heat starting from the faucet end and working toward the frozen section. Use a hair dryer, heat lamp, heating pad, or warm towels. Never use an open flame, propane torch, or charcoal stove -these create fire and carbon monoxide hazards. If you cannot locate or access the frozen section, call a licensed plumber." } },
      { "@type": "Question", name: "How can I tell if my pipes are frozen?", acceptedAnswer: { "@type": "Answer", text: "Common signs include: no water or only a trickle when you turn on a faucet, visible frost or ice on exposed pipes, unusual sounds (banging, clanking, or gurgling) when running water, bulging or distorted pipe sections, and strange odors coming from drains (frozen sewage lines). If you suspect frozen pipes, act quickly to prevent bursting." } },
      { "@type": "Question", name: "What should I do if a frozen pipe bursts?", acceptedAnswer: { "@type": "Answer", text: "Immediately shut off your main water valve to stop the flow. Turn off electricity in affected areas if water is near electrical outlets or panels. Call a licensed emergency plumber right away. Move valuables away from the water, and begin removing standing water to minimize damage. Document everything with photos for insurance purposes." } },
      { "@type": "Question", name: "How much does frozen pipe repair cost?", acceptedAnswer: { "@type": "Answer", text: "Thawing a frozen pipe typically costs $100-$300. Repairing a burst pipe ranges from $400-$1,500 depending on location and severity. If a burst pipe causes water damage, total costs including restoration can reach $5,000-$15,000 or more. Prevention measures like pipe insulation cost as little as $50-$200 for a whole house." } },
      { "@type": "Question", name: "Should I leave faucets dripping to prevent frozen pipes?", acceptedAnswer: { "@type": "Answer", text: "Yes, letting faucets drip slightly during extreme cold is one of the most effective short-term prevention methods. Even a small trickle keeps water moving through the pipes, which makes freezing much less likely. Focus on faucets served by pipes running through exterior walls, unheated spaces, or along outside walls. Both hot and cold lines should drip." } },
      { "@type": "Question", name: "Do pipes always burst when they freeze?", acceptedAnswer: { "@type": "Answer", text: "No, pipes do not always burst when they freeze, but the risk is significant. Pipes burst because expanding ice creates tremendous pressure -up to 25,000 PSI -in the pipe section between the ice blockage and a closed faucet. Copper and rigid plastic (PVC, CPVC) pipes are more likely to burst than flexible PEX piping, which can expand slightly to accommodate ice." } },
      { "@type": "Question", name: "What pipes are most at risk of freezing in a New Jersey home?", acceptedAnswer: { "@type": "Answer", text: "In New Jersey homes, the most vulnerable pipes include those running through exterior walls (especially north-facing), unheated garages, crawl spaces, attics, and basements without adequate insulation. Outdoor hose bibs and sprinkler lines are also at high risk. Older homes in Middlesex County built before modern insulation codes are particularly susceptible." } },
      { "@type": "Question", name: "Will my homeowner's insurance cover burst pipe damage?", acceptedAnswer: { "@type": "Answer", text: "Most standard homeowner's insurance policies in New Jersey cover sudden and accidental water damage from burst pipes, including repair costs and resulting water damage. However, coverage may be denied if the insurer determines you failed to maintain adequate heat or take reasonable precautions. Always review your specific policy and document damage with photos before cleanup." } },
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
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Emergency Tips</span>
                <time dateTime="2026-03-18">March 18, 2026</time>
                <span>22 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Frozen Pipes: Complete Prevention, Thawing & Repair Guide for NJ Homeowners
              </h1>
              <p className="text-xl text-gray-300">
                Everything you need to know about preventing frozen pipes, safely thawing them, and what to do in a burst pipe emergency. Expert advice from licensed Middlesex County plumbers.
              </p>
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
                Frozen pipes are one of the most common and costly <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 underline">emergency plumbing</Link> problems in New Jersey winters. Every year, thousands of homeowners across Middlesex County deal with pipes that freeze, crack, and burst - causing thousands of dollars in water damage that could have been prevented.
              </p>
              <p>
                According to the Insurance Institute for Business &amp; Home Safety, frozen pipes are the single largest cause of property damage during winter, with the average insurance claim exceeding $10,000. The good news? Most frozen pipe disasters are entirely preventable with the right preparation.
              </p>
              <p>
                As licensed plumbers who respond to frozen pipe emergencies throughout East Brunswick, Edison, Sayreville, Old Bridge, and the surrounding Middlesex County area every winter, we&apos;ve seen firsthand what works and what doesn&apos;t. If you&apos;re dealing with a burst pipe right now, call us - our emergency service is available 24/7. This comprehensive guide covers everything from prevention to emergency response, so you can protect your home when temperatures plummet. You may also want to read our guide on <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:text-red-800 underline">common boiler problems in winter</Link> to keep your entire heating system running smoothly.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/sewer-line-repair-replacement" className="text-red-700 hover:text-red-800">sewer line repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Frozen Pipes Prevention & Repair Guide</h2>
              <ul className="space-y-2">
                <li><a href="#freeze-temperature" className="text-red-700 hover:text-red-800">At What Temperature Do Pipes Freeze?</a></li>
                <li><a href="#pipes-at-risk" className="text-red-700 hover:text-red-800">Which Pipes Are Most at Risk?</a></li>
                <li><a href="#signs-frozen" className="text-red-700 hover:text-red-800">Signs Your Pipes Are Frozen</a></li>
                <li><a href="#prevention" className="text-red-700 hover:text-red-800">How to Prevent Frozen Pipes (14+ Tips)</a></li>
                <li><a href="#thawing" className="text-red-700 hover:text-red-800">How to Thaw Frozen Pipes Safely</a></li>
                <li><a href="#burst-pipe" className="text-red-700 hover:text-red-800">What to Do If a Pipe Bursts</a></li>
                <li><a href="#cost" className="text-red-700 hover:text-red-800">Cost of Frozen Pipe Repair vs Prevention</a></li>
                <li><a href="#nj-winter" className="text-red-700 hover:text-red-800">NJ &amp; Middlesex County Winter Considerations</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Middlesex County Frozen Pipe Services</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Emergency Warning Box */}
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-red-800 mb-2">Burst Pipe Emergency?</h2>
              <p className="text-gray-700 mb-3">If a pipe has already burst: <strong>shut off your main water valve immediately</strong>, turn off electricity near the affected area, and call us right away. We provide 24/7 emergency plumbing service throughout Middlesex County.</p>
              <a href={BUSINESS_INFO.phoneLink} className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Call {BUSINESS_INFO.phone} Now</a>
            </div>

            {/* At What Temperature Do Pipes Freeze */}
            <section id="freeze-temperature" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">At What Temperature Do Pipes Freeze?</h2>
              <p className="text-gray-700 mb-4">
                Understanding the exact temperatures that put your pipes at risk is critical for prevention. While water freezes at 32°F (0°C), the temperature at which your home&apos;s pipes actually freeze depends on several factors, including insulation, pipe material, wind exposure, and how long the cold lasts.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Pipe Freezing Temperature Thresholds</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-blue-200">
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Temperature Range</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Risk Level</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">What Happens</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">32°F (0°C)</td>
                        <td className="py-3 px-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">Low Risk</span></td>
                        <td className="py-3 px-2">Water can begin to freeze; outdoor faucets and exposed pipes start to be at risk</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">28°F (-2°C)</td>
                        <td className="py-3 px-2"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">Moderate Risk</span></td>
                        <td className="py-3 px-2">Pipes in uninsulated areas (garages, crawl spaces) begin to freeze within 3-6 hours</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">20°F (-6°C)</td>
                        <td className="py-3 px-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">High Risk</span></td>
                        <td className="py-3 px-2">Most unprotected pipes will freeze within hours; pipes in exterior walls at serious risk</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">10°F (-12°C)</td>
                        <td className="py-3 px-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Severe Risk</span></td>
                        <td className="py-3 px-2">Even well-insulated pipes can freeze; indoor pipes in poorly heated rooms at risk</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 font-medium">0°F (-18°C) or below</td>
                        <td className="py-3 px-2"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Extreme Risk</span></td>
                        <td className="py-3 px-2">All pipes at risk; burst pipe emergencies common even in well-maintained homes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                The critical threshold that most plumbers reference is <strong>20°F (-6°C)</strong>. When outdoor temperatures remain at or below 20°F for six or more hours, the risk of frozen pipes increases dramatically. This is the &quot;alert temperature&quot; that should trigger your freeze prevention measures.
              </p>
              <p className="text-gray-700 mb-4">
                However, it&apos;s important to understand that indoor pipe temperature is what actually matters, not outdoor air temperature. A pipe running through an insulated interior wall may stay well above freezing even when it&apos;s 10°F outside. Conversely, a pipe in an uninsulated exterior wall or unheated crawl space can freeze when outdoor temps are still in the high 20s.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-amber-800 mb-2">Wind Chill Matters</h3>
                <p className="text-gray-700">Wind chill significantly accelerates pipe freezing. A 25°F day with 20 mph winds effectively acts like 13°F on exposed pipes. This is especially relevant for pipes running along exterior walls on the windward side of your home, or in crawl spaces with inadequate vapor barriers.</p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">How Quickly Do Pipes Freeze?</h3>
              <p className="text-gray-700 mb-4">
                The time it takes for pipes to freeze depends on the temperature, pipe material, insulation, and whether the water is flowing. Here are general guidelines:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Uninsulated pipes at 20°F:</strong> Can freeze in as little as 3-6 hours</li>
                <li><strong>Insulated pipes at 20°F:</strong> May take 12-24 hours or longer to freeze</li>
                <li><strong>Uninsulated pipes at 0°F:</strong> Can freeze in as little as 1-3 hours</li>
                <li><strong>Pipes with running water:</strong> Much more resistant to freezing due to water movement</li>
                <li><strong>Stagnant water in pipes:</strong> Freezes faster than moving water</li>
              </ul>
            </section>

            {/* Which Pipes Are Most at Risk */}
            <section id="pipes-at-risk" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Which Pipes Are Most at Risk of Freezing?</h2>
              <p className="text-gray-700 mb-6">
                Not all pipes in your home face equal risk. Knowing which pipes are most vulnerable helps you prioritize your prevention efforts and respond quickly when temperatures drop.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Pipes Along Exterior Walls</h3>
                  <p className="text-gray-700">Pipes running through exterior walls -especially north-facing walls that receive the least sunlight -are the most commonly frozen pipes we see in Middlesex County homes. Many older New Jersey homes have kitchen sink supply lines in exterior walls with minimal insulation. Bathrooms built on outside corners are also at heightened risk.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Unheated Garages &amp; Attached Structures</h3>
                  <p className="text-gray-700">If water supply lines run through your garage -which is common for homes with laundry rooms or utility sinks in the garage -these are extremely vulnerable. Attached garages are often the coldest part of the house, and garage pipes have little protection from outside temperatures, especially when the garage door is opened frequently.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Crawl Spaces &amp; Basements</h3>
                  <p className="text-gray-700">Pipes in unheated crawl spaces and unfinished basements are particularly susceptible, especially where insulation has deteriorated or was never properly installed. In many Middlesex County homes built in the 1950s-1970s, crawl space insulation has degraded significantly. Supply lines running along basement rim joists (where the foundation meets the frame) are a common freeze point.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Attic Spaces</h3>
                  <p className="text-gray-700">Pipes running through attics -including supply lines for upstairs bathrooms -are at risk when attic temperatures drop below freezing. Poor attic insulation or gaps in insulation around pipes can expose them to freezing conditions. Attic pipes are also harder to access for thawing, making prevention especially important.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Outdoor Hose Bibs &amp; Sprinkler Lines</h3>
                  <p className="text-gray-700">Outdoor faucets (hose bibs) and irrigation system supply lines are the most exposed pipes on your property. If not properly winterized and shut off with interior shut-off valves, they can freeze and cause the connected interior pipe to burst inside the wall -resulting in hidden water damage.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Pipes Near Windows, Vents, or Openings</h3>
                  <p className="text-gray-700">Supply lines that pass near poorly sealed windows, dryer vents, electrical outlets on exterior walls, or other openings where cold air infiltrates are at increased risk. Even a small crack or gap can channel freezing air directly onto a pipe and cause a localized freeze point.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Pipe Material Matters</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-blue-200">
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Pipe Material</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Freeze Resistance</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Burst Risk</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">PEX</td>
                        <td className="py-3 px-2">Best</td>
                        <td className="py-3 px-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Low</span></td>
                        <td className="py-3 px-2">Flexible; can expand slightly with ice without bursting</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">Copper</td>
                        <td className="py-3 px-2">Moderate</td>
                        <td className="py-3 px-2"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">Moderate</span></td>
                        <td className="py-3 px-2">Rigid; can split at joints and straight sections</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">CPVC</td>
                        <td className="py-3 px-2">Poor</td>
                        <td className="py-3 px-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">High</span></td>
                        <td className="py-3 px-2">Becomes brittle in cold; shatters rather than splits</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">PVC</td>
                        <td className="py-3 px-2">Poor</td>
                        <td className="py-3 px-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">High</span></td>
                        <td className="py-3 px-2">Very rigid; commonly used for drain lines; cracks easily</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 font-medium">Galvanized Steel</td>
                        <td className="py-3 px-2">Moderate</td>
                        <td className="py-3 px-2"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">Moderate</span></td>
                        <td className="py-3 px-2">Strong but corroded joints are weak points; common in older NJ homes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-700">
                If your home has older galvanized steel or CPVC piping in vulnerable areas, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">whole-house repiping</Link> with modern PEX can dramatically reduce your freeze and burst risk while also improving water pressure and quality.
              </p>
            </section>

            {/* Signs Your Pipes Are Frozen */}
            <section id="signs-frozen" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Signs Your Pipes Are Frozen</h2>
              <p className="text-gray-700 mb-6">
                Early detection of frozen pipes is critical. The sooner you identify a freeze, the better your chances of thawing the pipe before it bursts. Here are the warning signs every New Jersey homeowner should know:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">No Water or Reduced Flow</h3>
                  <p className="text-gray-700">The most obvious sign is turning on a faucet and getting no water or just a trickle. If it&apos;s extremely cold outside and one or more faucets aren&apos;t producing water, a frozen pipe is the most likely culprit. Note which faucets are affected -this helps locate the frozen section. If only one faucet is affected, the freeze is likely near that fixture. If multiple faucets on the same line are affected, the freeze is further upstream.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Visible Frost on Exposed Pipes</h3>
                  <p className="text-gray-700">Check exposed pipes in your basement, crawl space, garage, and under sinks along exterior walls. Visible frost or ice accumulation on the outside of a pipe is a clear indicator. You may also notice condensation that has frozen into a layer of ice, or the pipe may feel extremely cold to the touch -much colder than surrounding pipes that still have flowing water.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Strange Sounds When Running Water</h3>
                  <p className="text-gray-700">Unusual banging, clanking, bubbling, or whistling sounds when you turn on a faucet can indicate that ice is partially blocking the pipe. You might hear gurgling as water tries to push past an ice dam, or banging as water pressure builds behind a blockage. These sounds mean the pipe is partially frozen and could fully freeze or burst at any moment.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Bulging or Distorted Pipes</h3>
                  <p className="text-gray-700">When water freezes, it expands by approximately 9%. This expansion can cause visible bulging or distortion in the pipe. If you notice any pipe section that looks swollen, misshapen, or has developed a visible bulge, do not attempt to thaw it yourself -the pipe is likely on the verge of bursting. Call a licensed plumber immediately.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Unusual Odors From Drains</h3>
                  <p className="text-gray-700">If your drain or sewer line is partially or fully frozen, odors that would normally flow down and out of the pipe have nowhere to go. Strange or foul smells emanating from your drains can indicate a frozen waste line. This is less common than frozen supply lines but can occur during severe cold snaps, especially in older homes with shallow drain lines.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Damp Walls or Ceiling Stains</h3>
                  <p className="text-gray-700">If a pipe inside a wall or ceiling has frozen and cracked (but hasn&apos;t fully burst yet), you may notice damp spots, water stains, or new discoloration on walls or ceilings. This often indicates a slow leak from a hairline crack and is a sign that a full burst could be imminent. Investigate immediately.</p>
                </div>
              </div>
            </section>

            {/* Mid-content CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Burst pipe emergency?</p>
                <p className="text-gray-300 text-sm">Our 24/7 emergency plumbers respond fast across Middlesex County.</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
              </div>
            </div>

            {/* How to Prevent Frozen Pipes */}
            <section id="prevention" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to Prevent Pipes From Freezing: 16 Expert Tips</h2>
              <p className="text-gray-700 mb-6">
                Prevention is far cheaper and less stressful than dealing with a burst pipe emergency. Here are the most effective ways to keep your pipes from freezing during a New Jersey winter, organized from quick fixes to long-term solutions.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Fixes for an Incoming Cold Snap</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">1. Let Faucets Drip</h3>
                  <p className="text-gray-700">When temperatures are expected to drop below 20°F, allow faucets fed by vulnerable pipes to drip slightly. A slow, steady drip -even a pencil-lead-width stream -keeps water moving through the pipes and relieves pressure buildup. Focus on faucets on exterior walls and the farthest fixtures from the main water entry. Run both hot and cold lines.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">2. Open Cabinet Doors</h3>
                  <p className="text-gray-700">Open kitchen and bathroom cabinet doors to let warm household air circulate around pipes under sinks, especially those on exterior walls. This is one of the simplest and most effective short-term measures. If you have small children, temporarily relocate any cleaning chemicals or hazardous materials stored under the sink.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">3. Keep Your Thermostat Consistent</h3>
                  <p className="text-gray-700">Set your thermostat to the same temperature day and night -at least 55°F. Many homeowners lower the heat at night to save energy, but during extreme cold, this can cause pipes in walls and attic spaces to freeze. The small increase in heating costs is far less than the cost of a burst pipe repair and water damage restoration.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">4. Keep the Garage Door Closed</h3>
                  <p className="text-gray-700">If water supply lines run through your garage, keep the garage door closed as much as possible. An open garage door lets frigid air reach pipes that may have minimal insulation. Even brief periods with the door open during extreme cold can drop the garage temperature enough to freeze exposed pipes.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">5. Apply Temporary Heat Sources</h3>
                  <p className="text-gray-700">Place a portable space heater (with safety tip-over protection) in areas with vulnerable pipes, such as crawl spaces, garages, or basements. A single heat lamp pointed at an exposed pipe section can also prevent freezing. Never leave space heaters unattended or near flammable materials.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Seasonal Preparation (Before Winter)</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">6. Insulate Exposed Pipes</h3>
                  <p className="text-gray-700">Install foam pipe insulation (pipe sleeves) on all exposed pipes in unheated areas -basement, crawl space, attic, and garage. Foam sleeves cost as little as $1-$3 per six-foot section and are easy to install. For extra protection in the most vulnerable areas, use fiberglass pipe wrap with a vapor barrier, or wrap pipes with thermostat-controlled heat tape (heat cable).</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">7. Install Electric Heat Tape (Heat Cable)</h3>
                  <p className="text-gray-700">Electric heat tape wraps around pipes and uses a thermostat to apply low-level heat when temperatures drop. This is the gold standard for preventing frozen pipes in high-risk areas. Self-regulating heat cables are the safest option -they automatically adjust heat output based on the pipe temperature. Professional installation costs $200-$500 per pipe run but can save thousands in potential damage.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">8. Disconnect and Drain Outdoor Hoses</h3>
                  <p className="text-gray-700">Before the first freeze, disconnect all garden hoses from outdoor faucets. Close the interior shut-off valve for each outdoor hose bib (if your home has them), and open the exterior faucet to drain any remaining water. Leaving a hose connected traps water in the faucet and the pipe behind it, almost guaranteeing a freeze and potential burst.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">9. Install Frost-Free Hose Bibs</h3>
                  <p className="text-gray-700">If your outdoor faucets are not frost-free (anti-siphon) models, consider upgrading them. Frost-free hose bibs have a long stem that places the actual shut-off valve inside the heated portion of the wall, significantly reducing freeze risk. This is a relatively inexpensive upgrade that provides years of protection.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">10. Seal Air Leaks Near Pipes</h3>
                  <p className="text-gray-700">Inspect your home for air leaks near pipes -especially around where pipes penetrate exterior walls, near electrical outlets on exterior walls, around dryer vents, and at the rim joist in your basement. Seal gaps with caulk, spray foam, or weatherstripping. Even a tiny gap can channel enough cold air to freeze a nearby pipe.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">11. Winterize Your Sprinkler System</h3>
                  <p className="text-gray-700">If you have an irrigation system, have it professionally blown out with compressed air before the first freeze. Residual water in sprinkler lines will freeze and can crack underground pipes and sprinkler heads. Many New Jersey landscaping companies offer this service in October and November.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Long-Term Solutions</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">12. Reroute Vulnerable Pipes</h3>
                  <p className="text-gray-700">If you have pipes that freeze repeatedly, consider having them rerouted away from exterior walls and unheated spaces. While this is a more significant investment, it permanently eliminates the freeze risk for those lines. During a <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">whole-house repiping</Link> project, we routinely reroute pipes away from vulnerable areas.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">13. Improve Insulation in Key Areas</h3>
                  <p className="text-gray-700">Adding insulation to attics, crawl spaces, and exterior walls protects pipes and reduces heating costs. Focus on areas where pipes are located. Insulating crawl space walls rather than the ceiling can keep the entire crawl space warmer, protecting all pipes within. For older Middlesex County homes, this upgrade often qualifies for NJ Clean Energy rebates.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">14. Upgrade to PEX Piping</h3>
                  <p className="text-gray-700">PEX (cross-linked polyethylene) piping is significantly more freeze-resistant than copper, CPVC, or galvanized steel. Its flexibility allows it to expand slightly when water freezes inside, dramatically reducing the chance of bursting. If you&apos;re dealing with recurring frozen pipe issues, repiping vulnerable sections with PEX is a smart long-term investment.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">15. Install a Smart Water Leak Detection System</h3>
                  <p className="text-gray-700">Modern leak detection systems can monitor pipe temperatures and water flow, alerting you to potential freezes before they happen. Some systems can even automatically shut off your main water valve if a burst is detected, minimizing water damage. These systems are especially valuable for vacation homes or if you travel during winter. For professional-grade <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">water leak detection</Link>, our team can assess your home&apos;s vulnerability.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">16. Never Turn Off Heat When Away</h3>
                  <p className="text-gray-700">If you&apos;re leaving your home for vacation during winter, never turn the heat completely off. Set the thermostat to at least 55°F. Ask a trusted neighbor to check on your home daily during extreme cold. Consider draining the water system entirely if you&apos;ll be away for an extended period -a plumber can help you properly winterize the home and reopen it when you return.</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-amber-800 mb-2">NJ Homeowner Tip</h3>
                <p className="text-gray-700">Many New Jersey homeowner insurance policies require that you maintain adequate heat in your home during winter. If a pipe bursts because you turned off the heat or let it drop below a certain temperature, your insurer may deny the claim. Review your policy for specific winter maintenance requirements.</p>
              </div>
            </section>

            {/* How to Thaw Frozen Pipes Safely */}
            <section id="thawing" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to Thaw Frozen Pipes Safely (Step by Step)</h2>
              <p className="text-gray-700 mb-6">
                If you&apos;ve identified a frozen pipe, quick but careful action can prevent it from bursting. Here is the safe, step-by-step process for thawing frozen pipes:
              </p>

              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-red-800 mb-2">DANGER: What NOT to Do</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Never use a propane torch or open flame</strong> -this is a fire hazard and can cause pipe solder to melt, worsening the problem</li>
                  <li><strong>Never use a charcoal grill or camp stove indoors</strong> -carbon monoxide poisoning risk is deadly</li>
                  <li><strong>Never pour boiling water directly on a frozen pipe</strong> -the thermal shock can crack the pipe immediately</li>
                  <li><strong>Never use a kerosene or gasoline heater</strong> in enclosed spaces near pipes</li>
                  <li><strong>Never attempt to thaw a pipe you suspect has already burst</strong> -the ice may be acting as a plug; thawing it will release a flood</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Step-by-Step Thawing Process</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-700">
                  <h3 className="font-bold text-gray-900 mb-2">Step 1: Open the Faucet</h3>
                  <p className="text-gray-700">Before applying any heat, open both the hot and cold handles of the affected faucet. This serves two critical purposes: it relieves pressure buildup in the pipe (reducing burst risk), and it allows you to monitor your progress -as the ice melts, water will begin to trickle and eventually flow normally.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-700">
                  <h3 className="font-bold text-gray-900 mb-2">Step 2: Locate the Frozen Section</h3>
                  <p className="text-gray-700">Trace the pipe from the faucet back toward the main line. Feel for sections that are extremely cold, look for visible frost or ice, and check areas near exterior walls, unheated spaces, or drafty locations. The frozen section will feel noticeably colder than the rest of the pipe. If you can&apos;t find or access the frozen area, call a licensed plumber.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-700">
                  <h3 className="font-bold text-gray-900 mb-2">Step 3: Apply Heat Starting From the Faucet End</h3>
                  <p className="text-gray-700">This is critical: always start applying heat closest to the faucet and work your way toward the frozen section. Starting from the frozen blockage can trap expanding steam and ice between the heat source and the closed faucet end, building dangerous pressure. Use one of these safe heat sources:</p>
                  <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                    <li><strong>Hair dryer:</strong> The most common and effective method. Sweep it back and forth along the pipe.</li>
                    <li><strong>Heat lamp or portable heater:</strong> Position it to warm the area around the pipe. Keep at least 3 feet from flammable materials.</li>
                    <li><strong>Electric heating pad:</strong> Wrap it around the frozen section for gentle, consistent heat.</li>
                    <li><strong>Hot towels:</strong> Soak towels in hot water and wrap them around the pipe. Replace as they cool.</li>
                    <li><strong>Electrical heat tape:</strong> If you have it available, wrap it around the pipe and plug it in.</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-700">
                  <h3 className="font-bold text-gray-900 mb-2">Step 4: Be Patient and Monitor</h3>
                  <p className="text-gray-700">Thawing a frozen pipe can take 30 minutes to several hours depending on the length of the frozen section and the severity of the freeze. Keep the faucet open and monitor the water flow. You&apos;ll first see a slow trickle, then a gradual increase. Don&apos;t stop applying heat until full water pressure is restored.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-700">
                  <h3 className="font-bold text-gray-900 mb-2">Step 5: Check for Leaks</h3>
                  <p className="text-gray-700">Once the pipe is thawed and water is flowing, carefully inspect the entire length of the previously frozen pipe and its joints for leaks. Even a small crack can cause significant damage over time. Check walls and ceilings downstream of the pipe for any signs of moisture. If you find any leaks, shut off the water and call a plumber immediately.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Thawing Pipes Inside Walls</h3>
              <p className="text-gray-700 mb-4">
                Frozen pipes inside walls are more challenging to thaw safely. Here are your options:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Turn up the heat:</strong> Increase your home&apos;s thermostat and give it time. Opening the cabinet below the sink and placing a fan to blow warm air into the wall cavity can help.</li>
                <li><strong>Use an infrared heat lamp:</strong> Aim it at the wall section where the pipe is frozen. The infrared heat penetrates the wall surface to warm the pipe behind it.</li>
                <li><strong>Cut an access hole:</strong> As a last resort, carefully cut a small access hole in the drywall to directly apply heat to the pipe. This is better than a burst pipe flooding your wall cavity.</li>
                <li><strong>Call a professional:</strong> If you&apos;re unsure or uncomfortable, a licensed plumber has tools and experience to thaw pipes in walls safely and efficiently.</li>
              </ul>
            </section>

            {/* What to Do If a Pipe Bursts */}
            <section id="burst-pipe" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What to Do If a Frozen Pipe Bursts</h2>
              <p className="text-gray-700 mb-6">
                A burst pipe can release 4-8 gallons of water per minute -that&apos;s hundreds of gallons per hour flooding your home. Fast action in the first few minutes makes a massive difference in total damage. Here is your emergency action plan:
              </p>

              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-red-800 mb-3">Emergency Steps -Do These Immediately</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                  <li><strong>Shut off the main water valve.</strong> Every household member should know where this is located. In most Middlesex County homes, it&apos;s in the basement near the front foundation wall, or where the water line enters the house. Turn it clockwise to close.</li>
                  <li><strong>Turn off electricity</strong> in the affected area at the circuit breaker, especially if water is near electrical outlets, appliances, or panels. Standing water and electricity are a lethal combination.</li>
                  <li><strong>Call an emergency plumber.</strong> Time matters. A licensed plumber can stop the damage and begin repairs immediately. <a href={BUSINESS_INFO.phoneLink} className="text-red-700 font-semibold">Call us at {BUSINESS_INFO.phone}</a> for 24/7 emergency response.</li>
                  <li><strong>Open faucets to drain remaining water</strong> in the pipes. This reduces pressure and minimizes additional leakage. Flush toilets once to empty the tanks.</li>
                  <li><strong>Begin removing standing water</strong> using towels, mops, a wet/dry vacuum, or buckets. The faster you remove water, the less damage to flooring, drywall, and belongings.</li>
                  <li><strong>Move valuables and furniture</strong> away from the affected area. Elevate items on blocks if water is still present.</li>
                  <li><strong>Document everything with photos and video</strong> before cleanup. This documentation is essential for your insurance claim.</li>
                  <li><strong>Contact your homeowner&apos;s insurance company</strong> as soon as possible to report the claim and get guidance on their specific documentation and contractor requirements.</li>
                </ol>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-amber-800 mb-2">Know Your Shut-Off Valve Location</h3>
                <p className="text-gray-700">Every second counts during a burst pipe. Locate your main water shut-off valve <em>now</em>, before an emergency. Label it clearly so any household member can find and operate it. Test it periodically to make sure it turns freely -shut-off valves can seize from disuse. If your valve is old or difficult to turn, consider having us install a new quarter-turn ball valve that operates instantly.</p>
              </div>
            </section>

            {/* Cost of Frozen Pipe Repair vs Prevention */}
            <section id="cost" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Cost of Frozen Pipe Repair vs Prevention</h2>
              <p className="text-gray-700 mb-6">
                The economics of frozen pipe prevention are overwhelmingly in favor of taking action before winter hits. Here&apos;s how the costs break down:
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Prevention Costs</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-blue-200">
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Prevention Measure</th>
                        <th className="text-right py-3 px-2 font-semibold text-gray-900">Estimated Cost</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Effectiveness</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2">Foam pipe insulation sleeves (whole house)</td>
                        <td className="py-3 px-2 text-right">$50 - $200</td>
                        <td className="py-3 px-2">High</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2">Electric heat tape (per pipe run)</td>
                        <td className="py-3 px-2 text-right">$50 - $200</td>
                        <td className="py-3 px-2">Very High</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2">Professional heat cable installation</td>
                        <td className="py-3 px-2 text-right">$200 - $500</td>
                        <td className="py-3 px-2">Very High</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2">Frost-free hose bib installation</td>
                        <td className="py-3 px-2 text-right">$150 - $350</td>
                        <td className="py-3 px-2">High</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2">Sealing air leaks around pipes</td>
                        <td className="py-3 px-2 text-right">$25 - $100</td>
                        <td className="py-3 px-2">Moderate-High</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2">Smart water leak detector</td>
                        <td className="py-3 px-2 text-right">$50 - $500</td>
                        <td className="py-3 px-2">High (early warning)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2">Keeping faucets dripping (extra water cost per winter)</td>
                        <td className="py-3 px-2 text-right">$5 - $15</td>
                        <td className="py-3 px-2">Moderate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Repair &amp; Damage Costs</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-red-200">
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Repair Scenario</th>
                        <th className="text-right py-3 px-2 font-semibold text-gray-900">Estimated Cost</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-red-100">
                        <td className="py-3 px-2">Professional pipe thawing</td>
                        <td className="py-3 px-2 text-right">$100 - $300</td>
                      </tr>
                      <tr className="border-b border-red-100">
                        <td className="py-3 px-2">Burst pipe repair (accessible location)</td>
                        <td className="py-3 px-2 text-right">$400 - $1,000</td>
                      </tr>
                      <tr className="border-b border-red-100">
                        <td className="py-3 px-2">Burst pipe repair (inside wall/ceiling)</td>
                        <td className="py-3 px-2 text-right">$1,000 - $4,000</td>
                      </tr>
                      <tr className="border-b border-red-100">
                        <td className="py-3 px-2">Drywall repair &amp; painting</td>
                        <td className="py-3 px-2 text-right">$300 - $1,500</td>
                      </tr>
                      <tr className="border-b border-red-100">
                        <td className="py-3 px-2">Flooring replacement (water damage)</td>
                        <td className="py-3 px-2 text-right">$1,000 - $5,000</td>
                      </tr>
                      <tr className="border-b border-red-100">
                        <td className="py-3 px-2">Mold remediation</td>
                        <td className="py-3 px-2 text-right">$1,500 - $6,000</td>
                      </tr>
                      <tr className="border-b border-red-100">
                        <td className="py-3 px-2">Emergency after-hours plumbing call</td>
                        <td className="py-3 px-2 text-right">$200 - $500</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 font-bold">Total cost of a serious burst pipe incident</td>
                        <td className="py-3 px-2 text-right font-bold">$5,000 - $15,000+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                The math is clear: spending $100-$500 on prevention can save you $5,000-$15,000 or more in repair and damage costs. For the average Middlesex County homeowner, a comprehensive winterization of your plumbing system typically costs under $500 and provides protection for years.
              </p>
              <p className="text-gray-700">
                Beyond the direct financial costs, consider the disruption: a burst pipe can make portions of your home uninhabitable for days or weeks while repairs are completed, drying equipment runs, and mold testing is performed. The inconvenience and stress are significant, and entirely avoidable with proper preparation.
              </p>
            </section>

            {/* Mid-content CTA 2 */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Frozen pipe? Don&apos;t wait - call now</p>
              <p className="text-red-100 text-sm mb-4">Every minute counts with frozen pipes. Our licensed plumbers provide emergency thawing and burst pipe repair across Middlesex County.</p>
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
                <p className="font-bold text-gray-900 mb-1">Related Service: Emergency Plumbing</p>
                <p className="text-sm text-gray-600 mb-2">24/7 emergency plumbing service for burst pipes, frozen pipes, and water damage situations. Fast response times across Middlesex County, NJ.</p>
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            {/* NJ/Middlesex County Winter Considerations */}
            <section id="nj-winter" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">New Jersey &amp; Middlesex County Winter Considerations</h2>
              <p className="text-gray-700 mb-6">
                Understanding the specific climate conditions in central New Jersey helps you prepare effectively and know when your pipes are at greatest risk.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Middlesex County Winter Climate Data</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-blue-200">
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Factor</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Details</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">Average January Low</td>
                        <td className="py-3 px-2">22°F - 25°F (-6°C to -4°C)</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">Coldest Recorded Temperatures</td>
                        <td className="py-3 px-2">-10°F to -15°F during polar vortex events</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">Days Below 20°F (Pipe Freeze Risk)</td>
                        <td className="py-3 px-2">15-30 days per winter on average</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">Frost Line Depth</td>
                        <td className="py-3 px-2">36 inches (NJ building code requirement for water mains)</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2 font-medium">Highest Risk Months</td>
                        <td className="py-3 px-2">December through February (peak: January)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 font-medium">Average Snowfall</td>
                        <td className="py-3 px-2">25-30 inches per winter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Middlesex County Homes Are Particularly Vulnerable</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Older Housing Stock</h3>
                  <p className="text-gray-700">Many homes in East Brunswick, Edison, Old Bridge, and Sayreville were built in the 1950s-1970s during the post-war suburban boom. These homes often have galvanized steel or copper pipes with inadequate insulation by modern standards. Original pipe insulation may have deteriorated significantly over 50-70 years. Homes of this era also commonly have pipes routed through exterior walls -a practice that modern plumbing codes discourage.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Crawl Space Construction</h3>
                  <p className="text-gray-700">A significant number of homes in Monroe Township, South Brunswick, and surrounding areas are built on crawl space foundations rather than full basements. Crawl spaces with inadequate insulation or ventilation expose plumbing to near-outdoor temperatures during winter. Improperly vented crawl spaces may actually channel cold air directly across pipe runs.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">NJ Frost Line Depth</h3>
                  <p className="text-gray-700">New Jersey&apos;s frost line depth is 36 inches, meaning the ground can freeze to a depth of three feet during severe winters. Water main connections and underground supply lines that were installed at improper depths (a common issue in some older developments) can freeze even underground. If you&apos;ve experienced frozen water at the main -where no water comes in at all -the freeze may be in the underground supply line, requiring professional thawing equipment.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Polar Vortex Events</h3>
                  <p className="text-gray-700">Central New Jersey has experienced increasing frequency of polar vortex events that bring temperatures well below zero for multiple days. These extreme cold events overwhelm standard winterization measures. During the 2014 and 2019 polar vortex events, plumbing companies across Middlesex County saw a surge in emergency burst pipe calls. With these events becoming more frequent, robust freeze protection is more important than ever.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Power Outage Risk</h3>
                  <p className="text-gray-700">Winter storms in central NJ frequently cause power outages. Without power, your heating system stops, and indoor temperatures drop rapidly. Pipes that are marginally protected under normal heating conditions can freeze within hours of a power outage during extreme cold. Having a backup plan -whether it&apos;s a generator, draining the system, or relocating to a heated location -is essential for Middlesex County homeowners.</p>
                </div>
              </div>
            </section>

            {/* Middlesex County Section */}
            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frozen Pipe Services in Middlesex County</h2>
              <p className="text-gray-700 mb-6">
                As licensed plumbers based in East Brunswick, we provide emergency frozen pipe services throughout Middlesex County. Our team responds to calls 24/7 during winter freeze events, and we carry the specialized equipment needed to thaw pipes safely and repair bursts quickly.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Frozen Pipe Services Include:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><strong>Emergency pipe thawing</strong> using professional-grade equipment that safely thaws pipes without damage</li>
                <li><strong>Burst pipe repair</strong> with same-day service to stop water damage immediately</li>
                <li><strong>Pipe insulation installation</strong> to prevent future freezes in vulnerable areas</li>
                <li><strong>Heat cable installation</strong> for pipes in high-risk locations</li>
                <li><strong>Whole-house winterization assessments</strong> to identify and fix vulnerabilities before winter</li>
                <li><strong>Emergency shut-off valve upgrades</strong> so you can stop water instantly during a burst</li>
                <li><strong>Repiping of frequently frozen pipe sections</strong> to permanently eliminate freeze points</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Areas We Serve</h3>
              <p className="text-gray-700 mb-4">
                We provide frozen pipe prevention and emergency repair services throughout the Middlesex County area, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {BUSINESS_INFO.serviceAreas.map((area) => (
                  <div key={area} className="bg-gray-50 rounded-lg p-3 text-center text-gray-700 font-medium">
                    {area}
                  </div>
                ))}
              </div>
              <p className="text-gray-700">
                With our location in East Brunswick, we can reach most Middlesex County locations within 30 minutes for emergency calls. During severe freeze events, we prioritize burst pipe emergencies to minimize water damage for our neighbors and community.
              </p>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Frozen Pipes</h2>

              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">At what temperature do pipes freeze?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Pipes are at risk of freezing when outdoor temperatures drop below 20°F (-6°C) for an extended period. The risk begins when temperatures fall below 32°F, but most pipes won&apos;t freeze until the temperature remains at or below 20°F for several hours. Pipes in unheated or poorly insulated areas such as crawl spaces, garages, attics, and exterior walls are the most vulnerable.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How do I thaw frozen pipes safely?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">First, open the affected faucet to relieve pressure. Then apply gentle heat starting from the faucet end and working toward the frozen section. Use a hair dryer, heat lamp, heating pad, or warm towels. Never use an open flame, propane torch, or charcoal stove. If you can&apos;t locate the frozen section or it&apos;s inside a wall, call a licensed plumber for professional thawing.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How can I tell if my pipes are frozen?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Common signs include: no water or only a trickle when you turn on a faucet, visible frost or ice on exposed pipes, unusual sounds like banging or gurgling when running water, bulging or distorted pipe sections, and strange odors from drains. If you notice any of these signs during cold weather, act quickly -the sooner you address a frozen pipe, the less likely it is to burst.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What should I do if a frozen pipe bursts?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Immediately shut off your main water valve. Turn off electricity in affected areas if water is near electrical outlets or panels. Call a licensed emergency plumber. Open all faucets to drain remaining water from the system. Move valuables away from the water, and begin removing standing water. Document everything with photos for your insurance claim.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much does frozen pipe repair cost?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Professional pipe thawing typically costs $100-$300. Burst pipe repair ranges from $400-$1,500 for accessible locations, and $1,000-$4,000 for pipes inside walls. If water damage occurs, total costs including drywall repair, flooring replacement, and mold remediation can reach $5,000-$15,000 or more. Prevention measures like pipe insulation cost as little as $50-$200 for a whole house.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Should I leave faucets dripping to prevent frozen pipes?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Yes, letting faucets drip slightly during extreme cold is one of the most effective short-term prevention methods. Even a small trickle keeps water moving through the pipes, which makes freezing much less likely. Focus on faucets served by pipes in exterior walls and unheated spaces. Run both the hot and cold lines. The extra water cost is typically only pennies per day.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Do pipes always burst when they freeze?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">No, but the risk is significant. Pipes burst because expanding ice creates tremendous pressure between the blockage and a closed faucet. Copper and rigid plastic pipes (PVC, CPVC) are more likely to burst than flexible PEX piping. However, you should always treat a frozen pipe as an emergency, because there&apos;s no way to know for certain whether the pipe has cracked until it thaws.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What pipes are most at risk of freezing in a New Jersey home?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">The most vulnerable pipes include those in exterior walls (especially north-facing), unheated garages, crawl spaces, attics, and unfinished basements. Outdoor hose bibs and sprinkler lines are also at high risk. Older homes in Middlesex County built before modern insulation standards are particularly susceptible due to thinner walls and deteriorated insulation.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Will my homeowner&apos;s insurance cover burst pipe damage?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Most standard homeowner&apos;s insurance policies in New Jersey cover sudden and accidental water damage from burst pipes, including the pipe repair and resulting water damage. However, coverage may be denied if the insurer determines you failed to maintain adequate heat or take reasonable precautions. Always document damage with photos before cleanup and contact your insurer promptly.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Frozen Pipes? We&apos;re Here 24/7</h2>
              <p className="text-red-100 mb-6">
                Whether you need emergency burst pipe repair, professional pipe thawing, or want to winterize your plumbing before the next cold snap, our licensed plumbers are ready to help. We serve all of Middlesex County with fast response times and expert service.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/services/emergency-plumbing" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  Emergency Plumbing Services
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/common-boiler-problems-winter" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Common Boiler Problems in Winter</h3>
                    <p className="text-sm text-gray-600">Troubleshoot heating issues before they lead to frozen pipes.</p>
                  </div>
                </Link>
                <Link href="/blog/why-is-water-pressure-low" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Why Is My Water Pressure Low?</h3>
                    <p className="text-sm text-gray-600">Low pressure can be an early sign of frozen or damaged pipes.</p>
                  </div>
                </Link>
                <Link href="/blog/signs-of-slab-leak-sewer-line" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs of a Slab Leak or Sewer Line Issue</h3>
                    <p className="text-sm text-gray-600">Hidden leaks from freeze damage and how to detect them.</p>
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
                <p className="text-gray-600 text-sm mb-4">Frozen pipes or burst pipe emergency? We respond 24/7 across Middlesex County.</p>
                <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
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
                  <li><Link href="/services/water-heater-replacement" className="text-gray-700 hover:text-red-700 transition">Water Heater Replacement</Link></li>
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
                  <li><Link href="/blog/common-boiler-problems-winter" className="text-gray-700 hover:text-red-700 transition">Common Boiler Problems in Winter</Link></li>
                  <li><Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition">Why Is My Water Pressure Low?</Link></li>
                  <li><Link href="/blog/signs-of-slab-leak-sewer-line" className="text-gray-700 hover:text-red-700 transition">Signs of a Slab Leak or Sewer Line Issue</Link></li>
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
