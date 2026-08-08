import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";
import {
  getServiceSchema,
  getFaqSchema,
  getBreadcrumbSchema,
} from "@/lib/schemas";
import ServiceHero from "@/components/ServiceHero";
import Testimonials from "@/components/Testimonials";
import DifferentiatorGrid from "@/components/DifferentiatorGrid";
import StatsStrip from "@/components/StatsStrip";
import LinkCardGrid from "@/components/LinkCardGrid";

export const metadata: Metadata = {
  title: "Water Heater Repair East Brunswick, NJ - Illyrian Plumber",
  description: "Same-day water heater repair in East Brunswick and Middlesex County, NJ. Gas, electric, and tankless. Licensed, upfront pricing. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/water-heater-repair",
  },
  keywords: [
    "water heater repair",
    "water heater repair near me",
    "hot water heater repair",
    "water heater not working",
    "no hot water",
    "water heater service",
    "water heater troubleshooting",
    "water heater leaking",
    "water heater pilot light",
    "water heater repair NJ",
    "water heater repair East Brunswick",
    "hot water heater not working",
    "water heater repair cost",
    "emergency water heater repair",
    "gas water heater repair",
    "electric water heater repair",
    "tankless water heater repair",
    "water heater thermocouple replacement",
    "water heater element replacement",
    "water heater repair Middlesex County",
  ],
  openGraph: {
    title: "Water Heater Repair East Brunswick, NJ - Illyrian Plumber",
    description: "Same-day water heater repair in East Brunswick and Middlesex County, NJ. Gas, electric, and tankless units. Licensed plumbers fix it fast.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/water-heater-repair",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/water-heater-repair-service.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber water heater repair service in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Heater Repair East Brunswick, NJ - Illyrian Plumber",
    description: "Same-day water heater repair in East Brunswick and Middlesex County, NJ. Gas, electric, and tankless units. Licensed plumbers fix it fast.",
    images: ["https://www.illyrianplumber.com/images/water-heater-repair-service.jpg"],
  },
};

const faqData = [
  {
    question: "How much does water heater repair cost in NJ?",
    answer: "Water heater repair in New Jersey typically costs between $150 and $600 depending on the problem. Common repairs include thermocouple replacement ($150-$250), heating element replacement ($150-$300), thermostat replacement ($150-$350), and T&P valve replacement ($150-$300). We provide upfront pricing before starting any work.",
  },
  {
    question: "Why is my water heater not producing hot water?",
    answer: "For gas water heaters, the most common cause is a failed pilot light or bad thermocouple. For electric units, it is usually a burned-out heating element or tripped circuit breaker. Check your breaker panel first, then inspect the pilot light. If the problem persists, call a licensed plumber for diagnosis.",
  },
  {
    question: "Can a leaking water heater be repaired?",
    answer: "It depends on the source of the leak. Leaks from the T&P valve, drain valve, or pipe connections can usually be repaired. However, if the tank itself is leaking due to internal corrosion, the water heater must be replaced. A licensed plumber can determine the source and recommend the right solution.",
  },
  {
    question: "Do you offer emergency water heater repair?",
    answer: "Yes, Illyrian Plumber offers same-day and emergency water heater repair throughout Middlesex County, NJ, including East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. Call us and we will dispatch a licensed plumber as quickly as possible.",
  },
];

export default function WaterHeaterRepairPage() {
  const serviceSchema = getServiceSchema({
    name: "Water Heater Repair",
    description: "Same-day water heater repair in East Brunswick and Middlesex County, NJ. Gas, electric, and tankless water heater diagnostics and repair by licensed plumbers.",
    slug: "water-heater-repair",
  });

  const faqSchema = getFaqSchema(faqData);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Water Heater Repair", path: "/services/water-heater-repair" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceHero
        tagline="Same-Day Service Available"
        heading="Water Heater Repair in East Brunswick & Middlesex County, NJ"
        subheading="Same-day water heater repair for all brands and types. No hot water? Strange noises? Leaking tank? Our licensed plumbers diagnose and fix the problem fast."
        backgroundImage="/images/water-heater-repair-service.jpg"
        backgroundAlt="Water heater repair service in East Brunswick NJ"
        service="Water Heater Repair"
        bullets={["All Brands Serviced", "Gas & Electric", "Licensed & Insured", "Same-Day Repair"]}
      />

      <StatsStrip />

      {/* Intro + common problems + troubleshooting -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                When your water heater stops working, life at home grinds to a halt. No hot showers, no clean dishes, no warm water for laundry. Whether you have a gas, electric, or tankless water heater, Illyrian Plumber provides fast, reliable <strong>water heater repair</strong> across East Brunswick and all of Middlesex County, NJ. Our licensed plumbers carry common replacement parts on every service truck so most repairs are completed in a single visit.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in water heating systems and mechanical plumbing in Middlesex County, NJ. We offer <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800">water heater replacement</Link>, <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700">
                A water heater that stops working is one of the most common emergency plumbing calls we receive. The good news is that most water heater problems have identifiable causes and can be fixed quickly by a licensed professional, from a pilot light that will not stay lit to a tank leaking from the base. We have the tools and expertise to get your hot water running again, and if you want more background before we arrive, our guide on <Link href="/blog/common-water-heater-problems" className="text-red-700 hover:text-red-800 underline">common water heater problems</Link> covers additional troubleshooting tips.
              </p>
              <p className="text-gray-700">
                We understand that going without hot water is not something you can wait days to resolve. That is why we offer same-day service throughout Middlesex County. When you call, we schedule the earliest available appointment and arrive with the parts and tools needed to handle the most common repairs on the spot.
              </p>
            </div>

            {/* Common Problems Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common water heater problems we fix</h2>
            <p className="text-gray-700 mb-6">
              Over the past decade, we have repaired thousands of water heaters in homes across Middlesex County. These are the problems we see most often. For a more in-depth look at diagnosing each of these issues, check out our blog post on <Link href="/blog/common-water-heater-problems" className="text-red-700 hover:text-red-800 underline">common water heater problems and how to fix them</Link>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { problem: "No hot water", desc: "Complete loss of hot water from gas or electric units. Often caused by pilot light failure, tripped breaker, or bad thermocouple." },
                { problem: "Not enough hot water", desc: "Running out of hot water too quickly. Could be sediment buildup, a failing dip tube, or an undersized unit." },
                { problem: "Water too hot", desc: "Scalding water or inconsistent temperatures. Usually a thermostat set too high or a stuck mixing valve." },
                { problem: "Strange noises", desc: "Popping, rumbling, or banging sounds from sediment buildup heating and cracking at the bottom of the tank." },
                { problem: "Rusty or smelly water", desc: "Discolored water or rotten egg smell. Points to a depleted anode rod or bacteria in the tank." },
                { problem: "Leaking tank", desc: "Water pooling around the base of the unit. May be a valve issue or internal tank corrosion." },
                { problem: "Pilot light issues", desc: "Pilot won't stay lit or the igniter fails. Thermocouple failure is the most common cause, though a dirty pilot tube, a drafty install location, or a failing gas valve can also be to blame." },
                { problem: "Thermostat problems", desc: "Temperature control not responding. Could need recalibration or full thermostat replacement." },
                { problem: "Slow hot water recovery", desc: "Takes too long for hot water to come back after use. Often caused by sediment or a failing heating element." },
                { problem: "High energy bills", desc: "A struggling water heater works harder and uses more energy. Sediment, age, and failing parts all reduce efficiency." },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">{item.problem}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Water Heater Troubleshooting */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Water heater troubleshooting: what to check before you call</h2>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700">
                Before calling for water heater repair near me, there are a few things you can safely check yourself. These simple steps resolve about 15% of the calls we receive:
              </p>
              <ol className="text-gray-700 space-y-3 list-decimal pl-6">
                <li><strong>Check your circuit breaker</strong> - If you have an electric water heater and have no hot water, check your electrical panel. A tripped breaker is the simplest fix and costs nothing.</li>
                <li><strong>Check the thermostat setting</strong> - Your water heater thermostat should be set to 120 degrees F. If it was accidentally bumped or adjusted, this could explain temperature issues.</li>
                <li><strong>Check the pilot light</strong> - For gas water heaters, look through the viewing window at the bottom of the unit. If the pilot light is out, follow the manufacturer&apos;s relighting instructions on the label.</li>
                <li><strong>Check for visible leaks</strong> - Look at all pipe connections, the T&P valve discharge tube, and the drain valve. Note where the water is coming from before calling.</li>
                <li><strong>Check the gas supply</strong> - Make sure your gas supply valve is in the ON position. If other gas appliances in your home are also not working, the problem may be your gas supply, not the water heater.</li>
              </ol>
              <p className="text-gray-700 mt-4">
                If none of these steps solve the problem, it is time to call a licensed plumber. Attempting to repair gas components, electrical wiring, or internal tank parts yourself can be dangerous and may void your warranty. Our guide on <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:text-red-800 underline">signs your water heater is dying</Link> can help you determine whether repair or replacement is the smarter investment.
              </p>
            </div>

            {/* Mid-page CTA Band */}
            <div className="bg-gray-900 text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">No hot water? We can help.</p>
                <p className="text-gray-300 text-sm">Same-day water heater repair in Middlesex County, NJ.</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why choose a licensed plumber for water heater repair"
        subheading="Water heaters involve gas lines, electrical wiring, and pressure systems. Working on them without the right training can be dangerous, here's why hiring a licensed plumber matters."
        items={[
          { icon: "shield", title: "Safety first", description: "Gas leaks, electrical shock, and scalding water are real risks. Every technician is trained to work safely with all water heater types." },
          { icon: "wrench", title: "Code compliance", description: "NJ plumbing codes set specific standards for venting, gas piping, and electrical connections. We make sure every repair meets them." },
          { icon: "dollar", title: "Warranty protection", description: "Many manufacturer warranties require professional service. DIY work or unlicensed repairs can void your coverage." },
          { icon: "eye", title: "Accurate diagnosis", description: "Water heater symptoms can have multiple causes. We use proper diagnostic tools and years of experience to find the real problem." },
          { icon: "home", title: "Insurance coverage", description: "Licensed plumbers carry liability insurance, so you're protected if anything goes wrong during a repair." },
          { icon: "clock", title: "Long-term reliability", description: "A repair done right the first time lasts. Incorrect repairs often lead to repeated failures and can damage other components." },
        ]}
      />

      {/* Types + process + cost + repair vs replace -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Types of Water Heaters We Repair */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of water heaters we repair</h2>
            <p className="text-gray-700 mb-6">
              Our technicians are trained and experienced with every type of residential water heater. Whether you have a traditional tank model or a modern tankless unit, we can diagnose and repair it.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gas water heaters</h3>
                <p className="text-gray-600 mb-4">Tank and tankless gas water heaters are the most common type in Middlesex County homes. We handle all gas water heater repairs including:</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>- Pilot light and igniter repair</li>
                  <li>- Thermocouple and thermopile replacement</li>
                  <li>- Gas valve diagnosis and service</li>
                  <li>- Burner cleaning, repair, and replacement</li>
                  <li>- Venting inspection and correction</li>
                  <li>- Gas leak detection at connections</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electric water heaters</h3>
                <p className="text-gray-600 mb-4">Electric water heaters are reliable but their heating elements and thermostats do wear out. Common electric water heater repairs include:</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>- Upper and lower heating element replacement</li>
                  <li>- Thermostat testing and replacement</li>
                  <li>- High-limit reset button diagnosis</li>
                  <li>- Electrical connection inspection</li>
                  <li>- Wiring and breaker troubleshooting</li>
                  <li>- Anode rod inspection and replacement</li>
                </ul>
              </div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tankless water heaters</h3>
              <p className="text-gray-600 mb-4">Tankless units require specialized knowledge. Error codes, scale buildup, and ignition failures are common. We repair all major tankless brands including Navien, Rinnai, Noritz, and Rheem. If you want to learn more about how these systems work, read our guide on <Link href="/blog/how-long-water-heater-heat-up" className="text-red-700 hover:text-red-800 underline">how long it takes a water heater to heat up</Link>.</p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>- Error code diagnosis and resolution</li>
                <li>- Descaling and flush service</li>
                <li>- Ignition system repair</li>
                <li>- Flow sensor and flame rod service</li>
                <li>- Venting and combustion air issues</li>
                <li>- PCB board diagnosis</li>
              </ul>
            </div>

            {/* Our Repair Process */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our water heater repair process</h2>
            <p className="text-gray-700 mb-6">
              When you call Illyrian Plumber for hot water heater repair, here is exactly what to expect. We believe in transparency and clear communication at every step.
            </p>
            <div className="space-y-6 mb-12">
              {[
                { step: "1", title: "Call and schedule", desc: "Call Niti or Danny. We will ask about your water heater type, the symptoms you are experiencing, and schedule the earliest available appointment. For emergencies, we prioritize same-day service." },
                { step: "2", title: "Arrival and inspection", desc: "Our licensed plumber arrives on time with a fully stocked service truck. We inspect the water heater, check for error codes, test components, and identify the root cause of the problem." },
                { step: "3", title: "Diagnosis and options", desc: "We explain what is wrong, what caused it, and present your repair options with upfront pricing. If the unit is old and repair costs are high, we will give you an honest recommendation about whether replacement makes more sense." },
                { step: "4", title: "Repair", desc: "Once you approve, we complete the repair. Most common repairs - thermocouple, element, thermostat, valve replacements - are completed in 1-2 hours using parts we carry on the truck." },
                { step: "5", title: "Testing and verification", desc: "We test the water heater thoroughly after the repair. We check for leaks, verify proper operation, test temperature output, and make sure everything is working correctly before we leave." },
                { step: "6", title: "Documentation", desc: "You receive documentation of the work performed, parts used, and any warranty information. We also provide maintenance recommendations to help extend your water heater's lifespan." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cost Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Water heater repair cost in New Jersey</h2>
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-gray-700">
                The cost of water heater repair depends on the type of water heater, the specific problem, and the parts required. Below are typical price ranges for common repairs in the New Jersey / Middlesex County area. These are general estimates - your actual cost will be quoted before any work begins.
              </p>
            </div>
            <div className="overflow-x-auto mb-12">
              <table className="w-full text-sm border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Repair type</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Typical cost</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Time</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    { repair: "Thermocouple replacement", cost: "$150 - $250", time: "30-60 min" },
                    { repair: "Heating element replacement", cost: "$150 - $300", time: "45-90 min" },
                    { repair: "Thermostat replacement", cost: "$150 - $350", time: "45-90 min" },
                    { repair: "T&P valve replacement", cost: "$150 - $300", time: "30-60 min" },
                    { repair: "Gas valve replacement", cost: "$300 - $500", time: "1-2 hours" },
                    { repair: "Anode rod replacement", cost: "$150 - $300", time: "30-60 min" },
                    { repair: "Drain valve replacement", cost: "$100 - $200", time: "30-60 min" },
                    { repair: "Dip tube replacement", cost: "$150 - $300", time: "1-2 hours" },
                    { repair: "Tankless descaling", cost: "$200 - $350", time: "1-2 hours" },
                    { repair: "Tankless error code repair", cost: "$200 - $500", time: "1-3 hours" },
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4">{item.repair}</td>
                      <td className="text-center py-3 px-4">{item.cost}</td>
                      <td className="text-center py-3 px-4">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Repair vs Replace */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Repair vs replace: honest advice</h2>
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-gray-700">
                We give you honest advice. If your water heater is over 10-12 years old or repair costs exceed 50% of replacement cost, we may recommend a new unit. We will explain all your options so you can make the best decision for your home and budget. For a deeper look at when replacement is the right call, read our blog post on <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:text-red-800 underline">signs your water heater is dying</Link>.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Repair makes sense if:</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>- Water heater is under 8 years old</li>
                  <li>- Problem is a single component failure</li>
                  <li>- Repair cost is under $400</li>
                  <li>- Tank is not corroded or leaking</li>
                  <li>- No history of repeated breakdowns</li>
                  <li>- Energy bills have been normal</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Consider replacement if:</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>- Water heater is over 10-12 years old</li>
                  <li>- Repair costs exceed 50% of new unit price</li>
                  <li>- Tank is leaking or visibly corroded</li>
                  <li>- Frequent repairs have been needed</li>
                  <li>- Energy bills are unusually high</li>
                  <li>- You want to upgrade to tankless</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  See our <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800 underline">water heater replacement</Link> page for details.
                </p>
              </div>
            </div>

            {/* Mid-content CTA 2 */}
            <div className="bg-gray-900 text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Need a water heater repair quote?</p>
                <p className="text-gray-300 text-sm">Licensed plumbers, upfront pricing, no surprises.</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="Trusted by homeowners across Middlesex County"
        subheading="Real reviews from real water heater repair calls."
      />

      {/* NJ considerations + gallery + areas + brands + FAQ + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* NJ Specific Considerations */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">NJ-specific water heater considerations</h2>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700">
                New Jersey has specific requirements and conditions that affect water heater repair and maintenance:
              </p>
              <ul className="text-gray-700 space-y-3 list-disc pl-6">
                <li><strong>Hard water in Middlesex County</strong> - Water hardness in our area averages 5-8 grains per gallon. This accelerates sediment buildup in tank water heaters and scale buildup in tankless units, making annual flushing and regular maintenance essential.</li>
                <li><strong>NJ plumbing permits</strong> - Certain water heater repairs, especially those involving gas lines or venting modifications, require permits in New Jersey. We handle all permit requirements for you.</li>
                <li><strong>Cold winters</strong> - NJ winters put extra demand on water heaters. Cold incoming water temperatures (as low as 40 degrees F in January) mean your water heater has to work harder, which can expose weaknesses in failing components.</li>
                <li><strong>Older homes</strong> - Many homes in East Brunswick, Edison, and Old Bridge were built in the 1960s-1980s with original plumbing. These aging systems often need more frequent water heater service and may require updated connections.</li>
                <li><strong>NJ energy efficiency rebates</strong> - If repair is not cost-effective and you need a replacement, New Jersey offers rebates for high-efficiency water heaters through the NJ Clean Energy Program. We can help you take advantage of these incentives.</li>
              </ul>
            </div>

            {/* Gallery Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our water heater work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { src: "/images/water-heater-repair-near-me.jpg", alt: "Water heater repair service" },
                { src: "/images/water-heater-sediment-buildup.jpg", alt: "Water heater maintenance" },
                { src: "/images/water-heater-maintenance-parts.jpg", alt: "Water heater parts and service" },
                { src: "/images/tankless-water-heater-installation.jpg", alt: "Tankless water heater" },
                { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Gas line service for water heaters" },
                { src: "/images/copper-pipe-repiping-service.jpg", alt: "Water heater pipe connections" },
              ].map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Middlesex County Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Water heater repair in Middlesex County, NJ</h2>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700">
                Illyrian Plumber is based in East Brunswick, NJ and provides water heater repair near me service to all of Middlesex County. Our central location means fast response times to every community we serve:
              </p>
              <ul className="text-gray-700 space-y-2 list-disc pl-6">
                <li><strong>East Brunswick</strong> - Our home base. Same-day service available for all East Brunswick neighborhoods.</li>
                <li><strong>Edison</strong> - One of the largest townships in NJ with a wide mix of water heater types. We service Edison daily.</li>
                <li><strong>Sayreville</strong> - Including Parlin and South Amboy border areas. Many older homes with aging water heaters.</li>
                <li><strong>Old Bridge</strong> - Large community with homes from the 1960s-2020s. We handle everything from original tank units to modern tankless systems.</li>
                <li><strong>Monroe Township</strong> - Including active adult communities with high hot water demand.</li>
                <li><strong>South Brunswick</strong> - Including Kendall Park, Dayton, and Kingston areas.</li>
                <li><strong>North Brunswick</strong> - Close to our East Brunswick base for the fastest possible response times.</li>
              </ul>
            </div>

            {/* Service Areas -- pill cloud */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Water heater repair throughout Middlesex County</h3>
              <div className="flex flex-wrap gap-2">
                {["East Brunswick", "Edison", "Old Bridge", "Sayreville", "South Brunswick", "North Brunswick", "Monroe Township", "Piscataway", "South Amboy"].map((area) => {
                  const slug = area.toLowerCase().replace(/\s+/g, "-");
                  const hasPage = ["east-brunswick", "edison", "old-bridge", "sayreville", "south-brunswick", "north-brunswick", "monroe-township"].includes(slug);
                  return hasPage ? (
                    <Link key={area} href={`/service-areas/${slug}`} className="bg-red-50 px-3 py-1.5 rounded-full text-sm font-medium text-red-700 border border-red-200 hover:bg-red-100 transition">{area}</Link>
                  ) : (
                    <span key={area} className="bg-gray-100 px-3 py-1.5 rounded-full text-sm text-gray-600 border border-gray-200">{area}</span>
                  );
                })}
              </div>
            </div>

            {/* Brands We Service */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Water heater brands we service</h2>
            <p className="text-gray-700 mb-4">
              We repair all major residential water heater brands. Our trucks are stocked with common parts for faster service:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {[
                "Rheem", "AO Smith", "Bradford White", "Navien",
                "Rinnai", "Noritz", "State", "Kenmore",
                "GE", "Whirlpool", "Bosch", "Takagi",
              ].map((brand, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 text-center text-gray-700 font-medium text-sm">
                  {brand}
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently asked questions about water heater repair</h2>
            <div className="space-y-4 mb-12">
              {faqData.map((faq, index) => (
                <details key={index} className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            {/* Related Services */}
            <div className="mb-8">
              <LinkCardGrid
                heading="Related services"
                items={[
                  { label: "Water Heater Replacement", href: "/services/water-heater-replacement", description: "For units beyond repair or over 10 years old" },
                  { label: "Tankless Water Heater Installation", href: "/services/tankless-water-heater-installation", description: "Upgrade to on-demand hot water" },
                  { label: "Gas Line Services", href: "/services/gas-line-repair-installation", description: "Gas leaks and line repair" },
                  { label: "Emergency Plumbing", href: "/services/emergency-plumbing", description: "24/7 response for plumbing emergencies" },
                  { label: "Boiler Repair", href: "/services/boiler-repair-service", description: "No-heat calls and leaking circulators" },
                  { label: "Plumbing Safety Inspections", href: "/services/plumbing-safety-inspections", description: "Catch problems before they become emergencies" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Learn more about water heaters"
              tone="dark"
              items={[
                { label: "Common Water Heater Problems", href: "/blog/common-water-heater-problems", badge: "Guide" },
                { label: "Signs Your Water Heater Is Dying", href: "/blog/signs-water-heater-dying", badge: "Guide" },
                { label: "How Long Does a Water Heater Take to Heat Up?", href: "/blog/how-long-water-heater-heat-up", badge: "How-to" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">No hot water?</h2>
          <p className="text-xl text-red-100 mb-8">Get same-day water heater repair from licensed plumbers in Middlesex County, NJ.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Call {BUSINESS_INFO.phone2}
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
