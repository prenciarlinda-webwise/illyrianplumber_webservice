import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Water Heater Installation East Brunswick NJ - Same-Day Service",
  description: "Professional water heater installation in East Brunswick and Middlesex County, NJ. Gas, electric, and tankless options. Same-day service available. Licensed plumbers. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/water-heater-installation",
  },
  keywords: [
    "water heater installation",
    "water heater installation east brunswick nj",
    "water heater installation nj",
    "water heater installation cost",
    "water heater installer near me",
    "new water heater installation",
    "gas water heater installation",
    "electric water heater installation",
    "50 gallon water heater installation",
    "water heater installation cost nj",
    "how much to install water heater",
    "water heater installation near me",
    "professional water heater installation",
    "same day water heater installation",
    "residential water heater installation nj",
  ],
  openGraph: {
    title: "Water Heater Installation East Brunswick NJ - Same-Day Service",
    description: "Professional water heater installation in East Brunswick and Middlesex County, NJ. Gas, electric, and tankless options. Same-day service available. Licensed plumbers.",
    type: "website",
  },
};

const faqData = [
  {
    question: "How much does water heater installation cost in NJ?",
    answer: "Water heater installation cost in New Jersey ranges from $1,200 to $3,500 for a standard 40-50 gallon tank unit including labor and materials. Tankless water heater installation costs $2,800 to $6,500 depending on the model and whether gas line or venting upgrades are needed. We provide free estimates with transparent, upfront pricing.",
  },
  {
    question: "How long does water heater installation take?",
    answer: "A standard tank water heater installation takes 2-4 hours. Tankless water heater installation takes 4-8 hours, especially if gas line upgrades, new venting, or electrical work is required. If we are replacing an existing unit, add about 30-60 minutes for draining and removing the old water heater. Same-day installation is available for standard tank units.",
  },
  {
    question: "Should I get a gas or electric water heater?",
    answer: "Gas water heaters heat water faster, cost less to operate (natural gas is cheaper than electricity in NJ), and work during power outages. Electric water heaters have a lower upfront cost, do not require venting, and are easier to install. If your home already has a gas line to the water heater location, gas is typically the better choice. If you only have electric service, an electric or heat pump water heater is the most practical option.",
  },
  {
    question: "Do I need a permit to install a water heater in NJ?",
    answer: "Yes, New Jersey requires a plumbing permit for water heater installation. The permit ensures the installation meets NJ Uniform Construction Code requirements for safety, venting, gas connections, and water supply. As licensed plumbers, we handle all permit applications and schedule the required municipal inspection for you. The permit cost is included in our installation price.",
  },
  {
    question: "Can you install a water heater the same day I call?",
    answer: "Yes, same-day water heater installation is available for standard tank units when we have the appropriate model in stock. If you have no hot water, we prioritize your call. Tankless installations and specialty units typically require scheduling 1-2 days in advance due to the additional work involved.",
  },
  {
    question: "What size water heater do I need?",
    answer: "For tank water heaters: 1-2 people need 30-40 gallons, 3-4 people need 40-50 gallons, and 5 or more people need 50-80 gallons. For tankless units, sizing is based on flow rate (GPM) and temperature rise. A typical 3-bathroom NJ home needs a unit rated for at least 8-10 GPM. We evaluate your specific needs during our free estimate.",
  },
  {
    question: "What brands do you install?",
    answer: "We install top-rated water heater brands including Rheem, Bradford White, AO Smith, Navien, and Rinnai. We select brands based on reliability, warranty coverage, energy efficiency, and value. During your free estimate, we recommend specific models based on your household size, hot water demand, and budget.",
  },
  {
    question: "Is a tankless water heater worth the extra cost?",
    answer: "Tankless water heaters cost more upfront ($2,800-$6,500 installed vs $1,200-$3,500 for tank units) but offer several long-term advantages: endless hot water on demand, up to 34% energy savings according to the DOE, a 20+ year lifespan versus 10-12 years for tanks, and they take up less space. For households with high hot water demand, a tankless unit typically pays for itself within 8-12 years through energy savings.",
  },
];

const installationSteps = [
  { step: "1", title: "Free In-Home Estimate", desc: "We visit your home to assess the installation location, evaluate your hot water needs, inspect existing gas lines and electrical connections, and recommend the best water heater for your household and budget." },
  { step: "2", title: "Unit Selection and Ordering", desc: "Based on your household size, hot water demand, fuel source, and budget, we recommend specific models from top brands like Rheem, Bradford White, AO Smith, Navien, and Rinnai. We explain the pros and cons of each option." },
  { step: "3", title: "Permit Application", desc: "We pull the required NJ plumbing permit for your installation. This ensures your new water heater meets all NJ Uniform Construction Code requirements and protects your home insurance coverage." },
  { step: "4", title: "Old Unit Removal (If Applicable)", desc: "If replacing an existing water heater, we safely drain the tank, disconnect all gas, electric, and water supply lines, and remove the old unit from your home. We handle proper disposal." },
  { step: "5", title: "Professional Installation", desc: "We install your new water heater with all new fittings, supply connections, proper venting for gas units, expansion tank if required by NJ code, temperature and pressure relief valve, and seismic strapping." },
  { step: "6", title: "System Testing and Inspection", desc: "We fill the tank, check every connection for leaks, verify proper gas or electrical operation, test the temperature and pressure relief valve, and confirm the unit is heating correctly. We schedule the required municipal inspection." },
  { step: "7", title: "Walkthrough and Cleanup", desc: "You receive all warranty documentation, operating instructions, and maintenance recommendations including a flushing schedule. We clean up the work area completely and leave your home as we found it." },
];

export default function WaterHeaterInstallationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Water Heater Installation",
    description: "Professional water heater installation in East Brunswick and Middlesex County, NJ. Gas, electric, tankless, and heat pump water heaters with same-day service available.",
    provider: {
      "@type": "Plumber",
      "@id": "https://www.illyrianplumber.com/#organization",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.zip,
      },
    },
    areaServed: BUSINESS_INFO.serviceAreas.map(area => ({ "@type": "City", name: area })),
    serviceType: "Water Heater Installation",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Water Heater Installation Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gas Water Heater Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electric Water Heater Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tankless Water Heater Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heat Pump Water Heater Installation" } },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Water Heater Installation Works",
    description: "Our professional water heater installation process from free estimate to final cleanup.",
    step: installationSteps.map((item) => ({
      "@type": "HowToStep",
      position: parseInt(item.step),
      name: item.title,
      text: item.desc,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/water-heater-repair-service.jpg"
            alt="Water heater installation service in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Same-Day Service Available</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Water Heater Installation in East Brunswick &amp; Middlesex County, NJ
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Professional water heater installation by licensed plumbers. Gas, electric, tankless, and heat pump options. Same-day service available with free estimates and upfront pricing.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
              </a>
              <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span>&#10003; Gas &amp; Electric Options</span>
              <span>&#10003; Same-Day Installation</span>
              <span>&#10003; Free Estimates</span>
              <span>&#10003; Licensed &amp; Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-3xl">

              {/* Direct Answer Paragraph */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  <strong>Water heater installation in East Brunswick, NJ</strong> costs between $1,200 and $3,500 for a standard tank unit, or $2,800 to $6,500 for tankless. Illyrian Plumber provides same-day professional installation with free estimates. We install gas, electric, tankless, and heat pump water heaters throughout Middlesex County, NJ. Every installation includes proper permitting, code-compliant connections, system testing, and a full manufacturer warranty.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in water heater installation and mechanical plumbing in Middlesex County, NJ. We offer <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800">water heater replacement</Link>, <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. {BUSINESS_INFO.stats.yearsExperience}+ years of experience and 750+ projects completed.
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700">
                  Whether you are installing a water heater in a new construction home, upgrading from an old inefficient unit, or switching fuel types, our licensed plumbers handle every aspect of the job. We work with top brands including <strong>Rheem, Bradford White, AO Smith, Navien, and Rinnai</strong> to match the right water heater to your household size, hot water demand, and budget. Not sure which type is right for your home? Our detailed guide on <Link href="/blog/tankless-vs-tank-water-heater" className="text-red-700 hover:text-red-800 underline">tankless vs tank water heaters</Link> breaks down the pros, cons, and costs of each option.
                </p>
              </div>

              {/* Types of Water Heaters We Install */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Water Heaters We Install</h2>
              <p className="text-lg text-gray-600 mb-6">
                There is no single water heater that works best for every home. The right choice depends on your household size, fuel availability, budget, and hot water usage patterns. Here are the four main types we install throughout East Brunswick and Middlesex County.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Gas Tank Water Heaters</h3>
                  <p className="text-gray-600 mb-4">The most common type in Middlesex County homes. Gas tank water heaters use a natural gas burner to heat 30-80 gallons of stored water. They heat water faster than electric models and cost less to operate because natural gas is cheaper than electricity in New Jersey.</p>
                  <ul className="text-gray-700 space-y-2 text-sm mb-4">
                    <li>- Faster recovery rate than electric</li>
                    <li>- Lower monthly operating cost</li>
                    <li>- Works during power outages</li>
                    <li>- 10-12 year average lifespan</li>
                    <li>- $1,500 - $3,000 installed</li>
                  </ul>
                  <p className="text-sm text-gray-500 font-medium">Brands: Rheem, Bradford White, AO Smith</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Electric Tank Water Heaters</h3>
                  <p className="text-gray-600 mb-4">Electric water heaters use heating elements inside the tank to warm water. They are easier to install because they do not require gas lines or venting, making them ideal for homes without natural gas service or locations where venting is impractical.</p>
                  <ul className="text-gray-700 space-y-2 text-sm mb-4">
                    <li>- Lower upfront installation cost</li>
                    <li>- No venting required</li>
                    <li>- Flexible placement options</li>
                    <li>- 10-12 year average lifespan</li>
                    <li>- $1,200 - $2,500 installed</li>
                  </ul>
                  <p className="text-sm text-gray-500 font-medium">Brands: Rheem, AO Smith, Bradford White</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tankless Water Heaters</h3>
                  <p className="text-gray-600 mb-4">Tankless (on-demand) water heaters heat water only when you need it, eliminating standby energy loss. According to the U.S. Department of Energy, tankless water heaters can be 24-34% more energy efficient than conventional tank units for homes that use 41 gallons or less of hot water daily.</p>
                  <ul className="text-gray-700 space-y-2 text-sm mb-4">
                    <li>- Endless hot water on demand</li>
                    <li>- Up to 34% energy savings (DOE)</li>
                    <li>- 20+ year lifespan</li>
                    <li>- Compact, wall-mounted design</li>
                    <li>- $2,800 - $6,500 installed</li>
                  </ul>
                  <p className="text-sm text-gray-500 font-medium">Brands: Navien, Rinnai, Rheem</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Heat Pump Water Heaters</h3>
                  <p className="text-gray-600 mb-4">Heat pump water heaters (hybrid electric) use electricity to move heat from the air to the water rather than generating heat directly. The DOE estimates they can be 2-3 times more energy efficient than conventional electric water heaters, making them the most efficient option available.</p>
                  <ul className="text-gray-700 space-y-2 text-sm mb-4">
                    <li>- 2-3x more efficient than standard electric (DOE)</li>
                    <li>- Lowest monthly operating cost</li>
                    <li>- May qualify for NJ Clean Energy rebates</li>
                    <li>- 13-15 year average lifespan</li>
                    <li>- $2,500 - $4,500 installed</li>
                  </ul>
                  <p className="text-sm text-gray-500 font-medium">Brands: Rheem, AO Smith, Bradford White</p>
                </div>
              </div>

              {/* Signs You Need a New Water Heater */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs You Need a New Water Heater</h2>
              <p className="text-lg text-gray-600 mb-6">
                Not every water heater problem requires a full installation. But when these signs are present, installing a new unit is the smarter financial decision. If you are unsure whether you need repair or replacement, our guide on <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:text-red-800 underline">signs your water heater is dying</Link> can help you decide.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  "Water heater is over 10-12 years old",
                  "Tank is leaking or visibly corroded",
                  "Rusty or discolored hot water",
                  "Not enough hot water for your household",
                  "Frequent repairs costing more each time",
                  "Strange rumbling or popping noises",
                  "Rising energy bills without increased usage",
                  "Water pooling around the base of the tank",
                ].map((sign, index) => (
                  <div key={index} className="flex items-center gap-3 bg-amber-50 rounded-lg p-4">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700">{sign}</span>
                  </div>
                ))}
              </div>

              {/* Water Heater Installation Cost in NJ */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Water Heater Installation Cost in NJ</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700">
                  The total <strong>water heater installation cost</strong> depends on the type of unit, capacity, fuel source, and any additional plumbing or electrical work needed. Below are typical price ranges for the Middlesex County, NJ area. All of our estimates are free and include upfront pricing with no hidden fees.
                </p>
              </div>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Installation Type</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Typical Cost (Installed)</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Expected Lifespan</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {[
                      { type: "40-Gallon Gas Tank", cost: "$1,500 - $2,500", life: "10-12 years" },
                      { type: "50-Gallon Gas Tank", cost: "$1,800 - $3,000", life: "10-12 years" },
                      { type: "75-Gallon Gas Tank", cost: "$2,500 - $3,500", life: "10-12 years" },
                      { type: "40-Gallon Electric Tank", cost: "$1,200 - $2,200", life: "10-12 years" },
                      { type: "50-Gallon Electric Tank", cost: "$1,500 - $2,800", life: "10-12 years" },
                      { type: "Heat Pump (Hybrid Electric)", cost: "$2,500 - $4,500", life: "13-15 years" },
                      { type: "Gas Tankless (Standard)", cost: "$2,800 - $4,500", life: "20+ years" },
                      { type: "Gas Tankless (High-End)", cost: "$4,500 - $6,500+", life: "20+ years" },
                      { type: "Electric Tankless", cost: "$1,800 - $3,500", life: "15-20 years" },
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
                <h3 className="font-bold text-gray-900 mb-2">What Affects Your Installation Cost?</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>- <strong>Unit type and capacity</strong> - Larger tanks and premium tankless brands cost more</li>
                  <li>- <strong>Fuel source</strong> - Gas units require proper venting and gas line sizing; electric units need adequate wiring and breaker capacity</li>
                  <li>- <strong>Installation location</strong> - Tight utility closets, attics, or crawl spaces may add labor time</li>
                  <li>- <strong>NJ code requirements</strong> - Expansion tank, drip pan, seismic strapping, or upgraded gas line may be required</li>
                  <li>- <strong>New installation vs replacement</strong> - First-time installations require running new supply lines, gas piping, or electrical circuits</li>
                  <li>- <strong>Permits and inspection</strong> - Required by NJ law and included in our pricing</li>
                </ul>
              </div>

              {/* Mid-content CTA */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Get a Free Installation Estimate</p>
                  <p className="text-gray-300 text-sm">We will help you choose the right water heater for your home and budget.</p>
                </div>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
                </div>
              </div>

              {/* Our Installation Process */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Water Heater Installation Process</h2>
              <p className="text-gray-700 mb-6">
                When you call Illyrian Plumber for <strong>water heater installation</strong>, here is exactly what happens from start to finish. Every step is designed to ensure a safe, code-compliant installation that lasts.
              </p>
              <div className="space-y-6 mb-12">
                {installationSteps.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose Professional Installation */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Professional Water Heater Installation</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700">
                  Water heater installation involves gas lines, electrical connections, water supply piping, and venting systems. In New Jersey, a licensed plumber is required by law for water heater installation. Here is why professional installation matters:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  { title: "NJ Code Compliance", desc: "Installations must meet NJ Uniform Construction Code. Licensed plumbers know the requirements for venting clearances, gas piping sizing, expansion tanks, T&P relief valves, and seismic strapping." },
                  { title: "Correct Sizing", desc: "An undersized water heater leaves you without enough hot water. An oversized unit wastes energy and money. We calculate the right size based on your household's actual demand and usage patterns." },
                  { title: "Safety First", desc: "Improper gas connections can cause carbon monoxide poisoning or gas leaks. Incorrect electrical wiring creates fire hazards. Faulty venting can release combustion gases into your home. Licensed plumbers ensure safe installation." },
                  { title: "Manufacturer Warranty", desc: "Most manufacturer warranties require professional installation by a licensed plumber. DIY or unlicensed installation voids the warranty on your new unit, leaving you unprotected." },
                  { title: "Permits and Inspections", desc: "NJ requires a plumbing permit and municipal inspection for every water heater installation. We handle the entire permit process and coordinate the inspection for you." },
                  { title: "Insurance Protection", desc: "Our work is backed by full liability insurance. If anything goes wrong during installation, you are completely protected. Unlicensed work may void your homeowner's insurance coverage." },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* NJ-Specific Info */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">NJ Water Heater Installation Requirements</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700">
                  New Jersey has specific code requirements and conditions that affect <strong>water heater installation</strong>. As local plumbers based in East Brunswick, we know these requirements inside and out:
                </p>
                <ul className="text-gray-700 space-y-3 list-disc pl-6">
                  <li><strong>Plumbing permit required</strong> - Every water heater installation in NJ requires a plumbing permit from the local construction office. We handle the application and coordinate the required inspection.</li>
                  <li><strong>Expansion tank</strong> - NJ code requires an expansion tank on closed-loop water systems. If your home has a backflow preventer or pressure-reducing valve, an expansion tank is mandatory.</li>
                  <li><strong>Proper venting for gas units</strong> - Gas water heaters must be vented to the exterior per NJ code. Direct-vent and power-vent models may be required depending on the installation location and proximity to windows or air intakes.</li>
                  <li><strong>Temperature and pressure relief valve</strong> - A T&P relief valve with a proper discharge pipe is required on every water heater. The discharge pipe must terminate within 6 inches of the floor or to the exterior.</li>
                  <li><strong>NJ Clean Energy rebates</strong> - New Jersey offers rebates for ENERGY STAR certified water heaters through the NJ Clean Energy Program. High-efficiency tank, tankless, and heat pump units may qualify for rebates that offset your installation cost.</li>
                  <li><strong>Hard water in Middlesex County</strong> - Local water hardness (5-8 grains per gallon) causes sediment buildup that shortens water heater life. We recommend annual <Link href="/blog/how-to-drain-flush-water-heater" className="text-red-700 hover:text-red-800 underline">flushing</Link> and may suggest a <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 underline">water softener</Link> to protect your investment.</li>
                </ul>
              </div>

              {/* Second Mid-content CTA */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Ready to Install a New Water Heater?</p>
                  <p className="text-gray-300 text-sm">Free estimates - same-day installation available.</p>
                </div>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
                </div>
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Water Heater Installation</h2>
              <div className="space-y-4 mb-12">
                {faqData.map((faq, index) => (
                  <details key={index} className="bg-gray-50 rounded-lg group">
                    <summary className="p-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 rounded-lg transition">
                      {faq.question}
                    </summary>
                    <p className="px-4 pb-4 text-gray-600 text-sm">{faq.answer}</p>
                  </details>
                ))}
              </div>

              {/* Related Services */}
              <div className="bg-gray-50 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800 font-medium">Water Heater Repair &#8594;</Link>
                  <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800 font-medium">Water Heater Replacement &#8594;</Link>
                  <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 font-medium">Tankless Water Heater Installation &#8594;</Link>
                  <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 font-medium">Gas Line Services &#8594;</Link>
                  <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800 font-medium">Boiler Repair &#8594;</Link>
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Plumbing &#8594;</Link>
                </div>
              </div>

              {/* Related Blog Posts */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Learn More About Water Heaters</h3>
                <div className="space-y-3">
                  <Link href="/blog/signs-water-heater-dying" className="block text-red-700 hover:text-red-800 font-medium">Signs Your Water Heater Is Dying - When to Replace &#8594;</Link>
                  <Link href="/blog/tankless-vs-tank-water-heater" className="block text-red-700 hover:text-red-800 font-medium">Tankless vs Tank Water Heater - Complete Comparison &#8594;</Link>
                  <Link href="/blog/how-much-does-a-tankless-water-heater-cost" className="block text-red-700 hover:text-red-800 font-medium">How Much Does a Tankless Water Heater Cost? &#8594;</Link>
                  <Link href="/blog/how-to-drain-flush-water-heater" className="block text-red-700 hover:text-red-800 font-medium">How to Drain and Flush Your Water Heater &#8594;</Link>
                  <Link href="/blog/how-long-water-heater-heat-up" className="block text-red-700 hover:text-red-800 font-medium">How Long Does a Water Heater Take to Heat Up? &#8594;</Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                {/* Call Now */}
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need a Water Heater Installed?</p>
                  <p className="text-gray-600 text-sm mb-4">Free estimates - same-day installation available.</p>
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
                    <li><Link href="/services/water-heater-replacement" className="text-gray-700 hover:text-red-700 transition">Water Heater Replacement</Link></li>
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
                    <li><Link href="/blog/how-to-drain-flush-water-heater" className="text-gray-700 hover:text-red-700 transition">How to Drain and Flush Your Water Heater</Link></li>
                    <li><Link href="/blog/how-long-water-heater-heat-up" className="text-gray-700 hover:text-red-700 transition">How Long Does a Water Heater Take to Heat Up?</Link></li>
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
          <h2 className="text-3xl font-bold mb-4">Get Your Water Heater Installed Today</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">Free estimates from licensed plumbers in Middlesex County, NJ. Same-day installation available for standard tank water heaters.</p>
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
