import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";
import {
  getServiceSchema,
  getFaqSchema,
  getBreadcrumbSchema,
  getHowToSchema,
} from "@/lib/schemas";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Water Heater Replacement East Brunswick NJ - Free Estimates",
  description: "Professional water heater replacement in East Brunswick & Middlesex County, NJ. Tank and tankless options. Same-day installation available. Free estimates. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/water-heater-replacement",
  },
  keywords: [
    "water heater replacement",
    "water heater replacement near me",
    "hot water heater replacement",
    "new water heater",
    "water heater installation",
    "water heater replacement cost",
    "replace water heater",
    "water heater installer near me",
    "water heater replacement NJ",
    "water heater replacement East Brunswick",
    "tank water heater installation",
    "tankless water heater replacement",
    "50 gallon water heater replacement",
    "water heater removal and installation",
    "water heater upgrade",
    "energy efficient water heater",
    "water heater replacement Middlesex County",
    "same day water heater installation",
    "residential water heater replacement",
    "gas water heater installation",
  ],
  openGraph: {
    title: "Water Heater Replacement East Brunswick NJ - Free Estimates",
    description: "Professional water heater replacement in East Brunswick & Middlesex County, NJ. Tank and tankless options. Same-day installation. Free estimates.",
    type: "website",
  },
};

export default function WaterHeaterReplacementPage() {
  const serviceSchema = getServiceSchema({
    name: "Water Heater Replacement",
    description: "Professional water heater replacement and installation in East Brunswick and Middlesex County, NJ. Tank and tankless options with same-day installation available.",
    slug: "water-heater-replacement",
  });

  const faqSchema = getFaqSchema([
    {
      question: "How much does water heater replacement cost in NJ?",
      answer: "Water heater replacement cost in New Jersey ranges from $1,500 to $3,500 for a standard 40-50 gallon tank unit (including installation and removal of the old unit). Tankless water heater installation costs $3,500 to $6,500 or more depending on the model and any gas line or venting upgrades needed. We provide free estimates with upfront pricing.",
    },
    {
      question: "How long does it take to replace a water heater?",
      answer: "A standard tank water heater replacement takes 2-4 hours. Tankless water heater installation takes 4-8 hours, especially if gas line upgrades, new venting, or electrical work is required. Same-day installation is available for standard tank replacements when the unit is in stock.",
    },
    {
      question: "Should I replace my water heater with a tank or tankless unit?",
      answer: "Tank water heaters have lower upfront cost ($1,500-$3,500 installed) and proven reliability. Tankless units cost more upfront ($3,500-$6,500+) but offer endless hot water, lower monthly energy bills (up to 30% savings), and a 20+ year lifespan versus 10-12 years for tanks. The best choice depends on your household size, hot water demand, and budget.",
    },
    {
      question: "When should I replace my water heater?",
      answer: "Replace your water heater if it is over 10-12 years old, the tank is leaking or corroded, you are experiencing frequent repairs, rusty water is coming from the hot tap, or your energy bills have increased significantly. If repair costs exceed 50% of the price of a new unit, replacement is usually the better investment.",
    },
    {
      question: "Do I need a permit to replace a water heater in NJ?",
      answer: "Yes, New Jersey requires a plumbing permit for water heater replacement. The permit ensures the installation meets NJ Uniform Construction Code requirements for safety, venting, and connections. As licensed plumbers, we handle all permit applications and schedule the required inspection for you.",
    },
    {
      question: "What is included in your water heater replacement service?",
      answer: "Our water heater replacement includes the new unit, removal and disposal of the old water heater, all fittings and connections, proper venting for gas units, expansion tank if required by code, permit and inspection, system testing, and warranty documentation. We leave the area clean when the job is done.",
    },
    {
      question: "Can you install a tankless water heater where I had a tank?",
      answer: "Yes, we frequently convert homes from tank to tankless water heaters. The conversion typically requires upgrading the gas line to a larger diameter, installing new stainless steel venting, and possibly adding a condensate drain. We handle all aspects of the conversion and ensure everything meets NJ code requirements.",
    },
    {
      question: "What size water heater do I need for my home?",
      answer: "For tank water heaters: 1-2 people need 30-40 gallons, 3-4 people need 40-50 gallons, and 5+ people need 50-80 gallons. For tankless, sizing is based on temperature rise and flow rate (GPM). A typical 3-bathroom NJ home needs a unit rated for at least 8-10 GPM. We evaluate your specific needs and recommend the right size during our free estimate.",
    },
  ]);

  const howToSchema = getHowToSchema({
    name: "Our Water Heater Replacement Process",
    description: "When you call Illyrian Plumber for a water heater installation, here is exactly what happens from start to finish.",
    steps: [
      {
        name: "Free Estimate",
        text: "Call us to schedule a free estimate. We will evaluate your current water heater, assess your household's hot water needs, inspect the installation location, and recommend the best replacement options for your budget and requirements.",
      },
      {
        name: "Unit Selection",
        text: "Based on your household size, hot water demand, available space, and budget, we recommend specific models. We work with top brands including Rheem, AO Smith, Bradford White, Navien, and Rinnai. We explain the pros and cons of each option.",
      },
      {
        name: "Permits",
        text: "We pull the required NJ plumbing permit for the installation. This ensures your new water heater meets all NJ Uniform Construction Code requirements and protects your home insurance coverage.",
      },
      {
        name: "Old Unit Removal",
        text: "We safely disconnect and remove your old water heater, including draining the tank, disconnecting gas/electric supply, and removing the old unit from your home. We handle disposal of the old unit.",
      },
      {
        name: "New Installation",
        text: "We install your new water heater with all new fittings, connections, proper venting (gas units), expansion tank if required, and seismic strapping. Every connection is tested for leaks.",
      },
      {
        name: "Testing and Inspection",
        text: "We fill the new tank, test all connections, verify proper operation, check temperature output, and ensure everything is working perfectly. We schedule the required municipal inspection.",
      },
      {
        name: "Documentation and Cleanup",
        text: "You receive all warranty documentation, operation instructions, and maintenance recommendations. We clean up the work area and leave your home as we found it.",
      },
    ],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Water Heater Replacement", path: "/services/water-heater-replacement" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceHero
        tagline="Same-Day Installation Available"
        heading="Water Heater Replacement in East Brunswick & Middlesex County, NJ"
        subheading="Professional water heater replacement with same-day installation available. We remove your old unit, install a new energy-efficient water heater, and handle all permits and inspections."
        backgroundImage="/images/water-heater-repair-service.jpg"
        backgroundAlt="Water heater replacement service in East Brunswick NJ"
        service="Water Heater Replacement"
        bullets={["Tank & Tankless Options", "Free Estimates", "Licensed & Insured", "Permits Included"]}
      />

      {/* Main Content + Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-3xl">

              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  When your water heater reaches the end of its life, you need a reliable replacement installed quickly and correctly. Illyrian Plumber provides professional <strong>water heater replacement</strong> across East Brunswick and all of Middlesex County, NJ. We handle everything from selecting the right unit for your household to removing the old one, installing the new water heater, pulling permits, and scheduling inspections. Same-day installation is available for standard tank replacements.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in water heater installation and mechanical plumbing in Middlesex County, NJ. We offer <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700">
                  A <strong>new water heater</strong> is one of the most important investments you can make for your home. The right unit provides reliable hot water for 10-20+ years, lowers your energy bills, and gives you peace of mind. Whether you are replacing a failing tank unit, upgrading to a high-efficiency model, or switching to a tankless system, our licensed plumbers will help you make the right choice. Not sure if you need repair or replacement? Our blog post on <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:text-red-800 underline">signs your water heater is dying</Link> can help you decide.
                </p>
                <p className="text-gray-700">
                  If you are comparing tank and tankless options, our detailed guide on <Link href="/blog/tankless-vs-tank-water-heater" className="text-red-700 hover:text-red-800 underline">tankless vs tank water heaters</Link> breaks down the pros, cons, and costs of each type to help you make an informed decision.
                </p>
              </div>

              {/* When to Replace */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Replace Your Water Heater</h2>
              <p className="text-gray-700 mb-6">
                Not every water heater problem means you need a <strong>hot water heater replacement</strong>. But when the signs point to a unit that is past its useful life, replacement is the smarter financial decision. Here are the key indicators:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  { sign: "Unit is 10-15 years old", detail: "Tank water heaters typically last 10-12 years. Even if still running, efficiency drops significantly after this age." },
                  { sign: "Frequent repairs needed", detail: "If you have called for repairs more than twice in the past year, the cost of ongoing fixes exceeds the value of the unit." },
                  { sign: "Rusty water from hot tap", detail: "Discolored hot water (but clear cold water) indicates internal tank corrosion that cannot be reversed." },
                  { sign: "Visible tank corrosion", detail: "Rust, flaking, or white mineral deposits on the outside of the tank signal advanced deterioration." },
                  { sign: "Water pooling around base", detail: "A tank leak at the base means the inner lining has failed. This cannot be repaired and will only get worse." },
                  { sign: "Insufficient hot water", detail: "If your household has not grown but you are running out of hot water faster than before, the unit is losing capacity." },
                  { sign: "Rising energy bills", detail: "An aging water heater works harder to produce the same amount of hot water, consuming more energy each month." },
                  { sign: "Strange noises from tank", detail: "Persistent rumbling, popping, or banging despite flushing indicates heavy sediment buildup that may be permanent." },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-amber-50 rounded-lg p-4">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">{item.sign}</span>
                      <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Replacement Options */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Water Heater Replacement Options</h2>
              <p className="text-gray-700 mb-6">
                We install both tank and tankless water heaters. Each type has advantages depending on your household size, hot water usage, budget, and space constraints.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tank Water Heaters</h3>
                  <p className="text-gray-600 mb-4">Traditional 30-80 gallon storage tanks. The most common type in Middlesex County homes. Reliable, affordable, and straightforward to install.</p>
                  <ul className="text-gray-700 space-y-2 text-sm mb-4">
                    <li>- Lower upfront cost ($1,500 - $3,500 installed)</li>
                    <li>- Proven, reliable technology</li>
                    <li>- 10-12 year average lifespan</li>
                    <li>- Available in gas and electric models</li>
                    <li>- Simple, same-day replacement in most cases</li>
                    <li>- Wide range of sizes (30-80 gallons)</li>
                  </ul>
                  <p className="text-sm text-gray-500 font-medium">Best for: Budget-conscious homeowners, straightforward replacements</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tankless Water Heaters</h3>
                  <p className="text-gray-600 mb-4">On-demand hot water with no storage tank. Growing in popularity in NJ for their efficiency and endless hot water supply.</p>
                  <ul className="text-gray-700 space-y-2 text-sm mb-4">
                    <li>- Endless hot water on demand</li>
                    <li>- Up to 30% energy savings</li>
                    <li>- 20+ year lifespan</li>
                    <li>- Compact wall-mounted design</li>
                    <li>- Higher upfront cost ($3,500 - $6,500+ installed)</li>
                    <li>- May require gas line and venting upgrades</li>
                  </ul>
                  <p className="text-sm text-gray-500 font-medium">Best for: Large families, high hot water demand, long-term savings</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700">
                  For a detailed comparison of these two options including long-term cost analysis, read our blog post on <Link href="/blog/tankless-vs-tank-water-heater" className="text-red-700 hover:text-red-800 underline">tankless vs tank water heaters</Link>. If you are specifically interested in tankless pricing, our guide on <Link href="/blog/how-much-does-a-tankless-water-heater-cost" className="text-red-700 hover:text-red-800 underline">how much a tankless water heater costs</Link> covers everything from unit selection to installation expenses.
                </p>
              </div>

              {/* Mid-content CTA */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Need a Free Replacement Estimate?</p>
                  <p className="text-gray-300 text-sm">We will help you choose the right water heater for your home and budget.</p>
                </div>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
                </div>
              </div>

              {/* Water Heater Replacement Cost */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Water Heater Replacement Cost in New Jersey</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700">
                  The total <strong>water heater replacement cost</strong> depends on the type of unit, the size, fuel source, and any additional work needed (gas line upgrades, venting changes, etc.). Below are typical price ranges for the Middlesex County, NJ area. All of our estimates are free and include upfront pricing with no hidden fees.
                </p>
              </div>
              <div className="overflow-x-auto mb-12">
                <table className="w-full text-sm border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Replacement Type</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Typical Cost (Installed)</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Lifespan</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {[
                      { type: "40-Gallon Gas Tank", cost: "$1,500 - $2,500", life: "10-12 years" },
                      { type: "50-Gallon Gas Tank", cost: "$1,800 - $3,000", life: "10-12 years" },
                      { type: "75-Gallon Gas Tank", cost: "$2,500 - $3,500", life: "10-12 years" },
                      { type: "40-Gallon Electric Tank", cost: "$1,200 - $2,200", life: "10-12 years" },
                      { type: "50-Gallon Electric Tank", cost: "$1,500 - $2,800", life: "10-12 years" },
                      { type: "Gas Tankless (Standard)", cost: "$3,500 - $5,000", life: "20+ years" },
                      { type: "Gas Tankless (High-End)", cost: "$5,000 - $6,500+", life: "20+ years" },
                      { type: "Electric Tankless", cost: "$2,000 - $3,500", life: "15-20 years" },
                      { type: "Tank-to-Tankless Conversion", cost: "$4,500 - $7,000+", life: "20+ years" },
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4">{item.type}</td>
                        <td className="text-center py-3 px-4">{item.cost}</td>
                        <td className="text-center py-3 px-4">{item.life}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
                <h3 className="font-bold text-gray-900 mb-2">What Affects Your Replacement Cost?</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>- <strong>Unit type and size</strong> - Larger tanks and premium tankless brands cost more</li>
                  <li>- <strong>Fuel source</strong> - Gas units require proper venting; electric units need adequate wiring</li>
                  <li>- <strong>Location of the unit</strong> - Tight utility closets, attics, or basements may add labor time</li>
                  <li>- <strong>Code requirements</strong> - NJ code may require an expansion tank, drip pan, or upgraded gas line</li>
                  <li>- <strong>Tank-to-tankless conversion</strong> - Switching from a tank to tankless requires gas line and venting upgrades</li>
                  <li>- <strong>Permits and inspection</strong> - Required in NJ and included in our pricing</li>
                </ul>
              </div>

              {/* Our Replacement Process */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Water Heater Replacement Process</h2>
              <p className="text-gray-700 mb-6">
                When you call Illyrian Plumber for a <strong>water heater installation</strong>, here is exactly what happens from start to finish:
              </p>
              <div className="space-y-6 mb-12">
                {[
                  { step: "1", title: "Free Estimate", desc: "Call us to schedule a free estimate. We will evaluate your current water heater, assess your household's hot water needs, inspect the installation location, and recommend the best replacement options for your budget and requirements." },
                  { step: "2", title: "Unit Selection", desc: "Based on your household size, hot water demand, available space, and budget, we recommend specific models. We work with top brands including Rheem, AO Smith, Bradford White, Navien, and Rinnai. We explain the pros and cons of each option." },
                  { step: "3", title: "Permits", desc: "We pull the required NJ plumbing permit for the installation. This ensures your new water heater meets all NJ Uniform Construction Code requirements and protects your home insurance coverage." },
                  { step: "4", title: "Old Unit Removal", desc: "We safely disconnect and remove your old water heater, including draining the tank, disconnecting gas/electric supply, and removing the old unit from your home. We handle disposal of the old unit." },
                  { step: "5", title: "New Installation", desc: "We install your new water heater with all new fittings, connections, proper venting (gas units), expansion tank if required, and seismic strapping. Every connection is tested for leaks." },
                  { step: "6", title: "Testing and Inspection", desc: "We fill the new tank, test all connections, verify proper operation, check temperature output, and ensure everything is working perfectly. We schedule the required municipal inspection." },
                  { step: "7", title: "Documentation and Cleanup", desc: "You receive all warranty documentation, operation instructions, and maintenance recommendations. We clean up the work area and leave your home as we found it." },
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

              {/* What Is Included */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Included in Every Replacement</h2>
              <div className="bg-green-50 rounded-xl p-6 mb-12">
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "New water heater unit",
                    "Old unit removal and disposal",
                    "All fittings and connections",
                    "Proper venting (gas units)",
                    "Expansion tank if required",
                    "NJ plumbing permit",
                    "Municipal inspection scheduling",
                    "Complete system testing",
                    "Warranty documentation",
                    "Maintenance recommendations",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mid-content CTA 2 */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Ready to Replace Your Water Heater?</p>
                  <p className="text-gray-300 text-sm">Free estimates - same-day installation available.</p>
                </div>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
                </div>
              </div>

              {/* Why Choose a Licensed Plumber */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Hire a Licensed Plumber for Water Heater Replacement</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700">
                  Water heater installation involves gas lines, electrical connections, venting, and water supply lines. In New Jersey, a licensed plumber is required by law for water heater replacement. Here is why this matters:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  { title: "NJ Code Compliance", desc: "Water heater installations must meet NJ Uniform Construction Code. Licensed plumbers know the requirements for venting, gas piping, expansion tanks, and safety devices." },
                  { title: "Proper Sizing", desc: "An undersized water heater will not meet your needs. An oversized one wastes energy. We calculate the right size based on your household's actual demand." },
                  { title: "Safety", desc: "Improper gas connections, venting, or electrical work can cause carbon monoxide poisoning, gas leaks, or fires. Licensed plumbers ensure safe installation." },
                  { title: "Warranty Protection", desc: "Most manufacturer warranties require professional installation. DIY or unlicensed installation voids the warranty on your new unit." },
                  { title: "Permit and Inspection", desc: "NJ requires a plumbing permit and inspection for water heater replacement. We handle the entire permit process for you." },
                  { title: "Insurance Coverage", desc: "Our work is backed by liability insurance. If anything goes wrong during installation, you are fully protected." },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* NJ-Specific Considerations */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">NJ-Specific Water Heater Replacement Considerations</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700">
                  New Jersey has specific requirements and conditions that affect <strong>water heater installation</strong>:
                </p>
                <ul className="text-gray-700 space-y-3 list-disc pl-6">
                  <li><strong>Expansion tanks required</strong> - NJ code requires an expansion tank on closed-loop water systems. If your home has a backflow preventer or pressure-reducing valve, an expansion tank is mandatory with a new water heater.</li>
                  <li><strong>Proper venting for gas units</strong> - Gas water heaters must be properly vented to the exterior. Upgrading from atmospheric venting to power venting or direct venting may be required depending on the installation location.</li>
                  <li><strong>Hard water considerations</strong> - Middlesex County water hardness (5-8 grains per gallon) affects water heater lifespan. We recommend annual flushing and may suggest a water softener to extend the life of your new unit.</li>
                  <li><strong>NJ Clean Energy rebates</strong> - New Jersey offers rebates for ENERGY STAR water heaters through the NJ Clean Energy Program. High-efficiency tank and tankless units may qualify for rebates that offset your replacement cost.</li>
                  <li><strong>Permit requirements</strong> - All water heater replacements in NJ require a plumbing permit. We handle the permit application, coordinate the inspection, and ensure everything passes on the first visit.</li>
                  <li><strong>Seismic strapping</strong> - While not required in NJ, we install seismic strapping on all tank water heaters as a best practice to prevent tipping and damage.</li>
                </ul>
              </div>

              {/* Gallery Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Water Heater Installation Work</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {[
                  { src: "/images/water-heater-repair-service.jpg", alt: "Water heater replacement" },
                  { src: "/images/tankless-water-heater-installation.jpg", alt: "Tankless water heater installation" },
                  { src: "/images/water-heater-repair-near-me.jpg", alt: "Water heater service" },
                  { src: "/images/water-heater-sediment-buildup.jpg", alt: "Water heater maintenance" },
                  { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Gas water heater connection" },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Water Heater Replacement in Middlesex County, NJ</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700">
                  Illyrian Plumber is based in East Brunswick and provides <strong>water heater replacement near me</strong> service throughout Middlesex County. We know the local building codes, permit requirements, and water conditions in every community we serve:
                </p>
                <ul className="text-gray-700 space-y-2 list-disc pl-6">
                  <li><strong>East Brunswick</strong> - Our home base. Same-day replacement available. We have installed hundreds of water heaters in East Brunswick homes.</li>
                  <li><strong>Edison</strong> - Large township with diverse housing stock from 1950s ranches to new construction. We handle all installation types.</li>
                  <li><strong>Sayreville</strong> - Including Parlin. Many homes in this area have original water heaters from the 1990s and early 2000s that are due for replacement.</li>
                  <li><strong>Old Bridge</strong> - Extensive residential development with homes spanning multiple decades. We frequently upgrade older 40-gallon units to 50-gallon or tankless systems.</li>
                  <li><strong>Monroe Township</strong> - Including active adult communities. We install water heaters sized for both individual homes and townhome configurations.</li>
                  <li><strong>South Brunswick</strong> - Including Kendall Park, Dayton, and Kingston. Quick response times from our East Brunswick location.</li>
                  <li><strong>North Brunswick</strong> - Adjacent to East Brunswick for the fastest possible service and installation scheduling.</li>
                </ul>
              </div>

              {/* Sizing Guide */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Size Water Heater Do You Need?</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700">
                  Choosing the right size water heater is critical. An undersized unit will leave you with cold showers. An oversized unit wastes energy and money. Here are general guidelines:
                </p>
              </div>
              <div className="overflow-x-auto mb-12">
                <table className="w-full text-sm border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Household Size</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Tank Size</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Tankless GPM</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">1-2 people</td>
                      <td className="text-center py-3 px-4">30-40 gallons</td>
                      <td className="text-center py-3 px-4">5-6 GPM</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">3-4 people</td>
                      <td className="text-center py-3 px-4">40-50 gallons</td>
                      <td className="text-center py-3 px-4">7-8 GPM</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">5-6 people</td>
                      <td className="text-center py-3 px-4">50-75 gallons</td>
                      <td className="text-center py-3 px-4">8-10 GPM</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">7+ people</td>
                      <td className="text-center py-3 px-4">75-80 gallons</td>
                      <td className="text-center py-3 px-4">10+ GPM</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Water Heater Replacement</h2>
              <div className="space-y-4 mb-12">
                {[
                  { q: "How much does water heater replacement cost in NJ?", a: "Water heater replacement in New Jersey ranges from $1,500 to $3,500 for a standard 40-50 gallon tank unit installed. Tankless water heater installation costs $3,500 to $6,500+ depending on the model and upgrades needed. We provide free estimates with upfront pricing." },
                  { q: "How long does it take to replace a water heater?", a: "A standard tank replacement takes 2-4 hours. Tankless installation takes 4-8 hours, especially if gas line upgrades or new venting is required. Same-day installation is available for tank replacements." },
                  { q: "Should I get a tank or tankless water heater?", a: "Tanks cost less upfront ($1,500-$3,500) and last 10-12 years. Tankless units cost more ($3,500-$6,500+) but offer endless hot water, up to 30% energy savings, and a 20+ year lifespan. The best choice depends on your household size, budget, and hot water demand." },
                  { q: "When should I replace my water heater?", a: "Replace when the unit is over 10-12 years old, the tank is leaking or corroded, repairs are frequent, rusty water comes from the hot tap, or energy bills have risen. If repair costs exceed 50% of a new unit, replacement is the better investment." },
                  { q: "Do I need a permit to replace a water heater in NJ?", a: "Yes, NJ requires a plumbing permit for water heater replacement. We handle all permit applications and schedule the required municipal inspection for you." },
                  { q: "What is included in your replacement service?", a: "Everything: new unit, old unit removal and disposal, all fittings and connections, proper venting, expansion tank if needed, NJ permit, inspection scheduling, system testing, warranty documentation, and cleanup." },
                  { q: "Can you convert my tank water heater to tankless?", a: "Yes, we frequently convert homes from tank to tankless. The conversion requires gas line upgrades, new venting, and possibly a condensate drain. We handle the entire conversion and ensure NJ code compliance." },
                  { q: "What size water heater do I need?", a: "For tanks: 30-40 gallons for 1-2 people, 40-50 gallons for 3-4 people, 50-75 gallons for 5-6 people. For tankless, sizing is based on temperature rise and flow rate. We assess your specific needs during our free estimate." },
                ].map((faq, index) => (
                  <details key={index} className="bg-gray-50 rounded-lg group">
                    <summary className="p-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 rounded-lg transition">
                      {faq.q}
                    </summary>
                    <p className="px-4 pb-4 text-gray-600 text-sm">{faq.a}</p>
                  </details>
                ))}
              </div>

              {/* Related Services */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800 font-medium">Water Heater Repair</Link>
                  <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 font-medium">Tankless Installation</Link>
                  <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 font-medium">Gas Line Services</Link>
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Services</Link>
                  <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800 font-medium">Boiler Repair</Link>
                  <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping</Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                {/* Call Now */}
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need a New Water Heater?</p>
                  <p className="text-gray-600 text-sm mb-4">Free estimates - tank and tankless options available.</p>
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
                    <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                    <li><Link href="/services/tankless-water-heater-installation" className="text-gray-700 hover:text-red-700 transition">Tankless Water Heater Installation</Link></li>
                    <li><Link href="/services/boiler-repair-service" className="text-gray-700 hover:text-red-700 transition">Boiler Repair</Link></li>
                    <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Services</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>
                {/* Related Blogs */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Related Articles</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/signs-water-heater-dying" className="text-gray-700 hover:text-red-700 transition">Signs Your Water Heater Is Dying</Link></li>
                    <li><Link href="/blog/tankless-vs-tank-water-heater" className="text-gray-700 hover:text-red-700 transition">Tankless vs Tank Water Heater</Link></li>
                    <li><Link href="/blog/how-much-does-a-tankless-water-heater-cost" className="text-gray-700 hover:text-red-700 transition">How Much Does a Tankless Water Heater Cost?</Link></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a New Water Heater?</h2>
          <p className="text-xl text-red-100 mb-8">Get a free replacement estimate from licensed plumbers in Middlesex County, NJ.</p>
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
    </>
  );
}
