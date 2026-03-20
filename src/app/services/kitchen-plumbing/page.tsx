import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kitchen Plumbing Services East Brunswick NJ - Repair, Remodel, Installation",
  description: "Expert kitchen plumbing services in East Brunswick and Middlesex County, NJ. Kitchen sink plumbing, repair, remodel, garbage disposal, dishwasher hookup. Licensed kitchen plumbing company. Call (347) 461-4856.",
  keywords: [
    "kitchen plumbing",
    "kitchen sink plumbing",
    "kitchen plumbing repair",
    "kitchen plumbing services",
    "kitchen plumbing remodel",
    "kitchen plumbing near me",
    "under kitchen sink plumbing",
    "kitchen plumbing company",
    "kitchen plumber East Brunswick",
    "kitchen plumber NJ",
    "kitchen plumbing Middlesex County",
    "garbage disposal installation",
    "dishwasher hookup",
    "kitchen faucet repair",
    "kitchen sink repair",
    "kitchen drain repair",
    "kitchen remodel plumbing",
    "kitchen plumbing cost NJ",
    "kitchen plumbing East Brunswick",
    "kitchen plumbing Edison NJ",
  ],
};

const faqData = [
  {
    question: "How much does kitchen plumbing repair cost in NJ?",
    answer: "Kitchen plumbing repair costs in New Jersey typically range from $150-$500 depending on the issue. A leaking kitchen faucet repair runs $150-$250, while under-sink drain repairs cost $200-$400. More complex repairs like supply line replacement or garbage disposal installation range from $250-$500. Contact Illyrian Plumber for a free estimate on your specific kitchen plumbing issue.",
  },
  {
    question: "What does kitchen plumbing remodel work involve?",
    answer: "A kitchen plumbing remodel typically involves moving or adding supply lines, relocating the drain stack connection, installing a new sink and faucet, hooking up a dishwasher, and adding a garbage disposal. If you are moving the sink to a new location, rough-in plumbing is required. We handle all aspects of kitchen remodel plumbing from rough-in to final fixture installation.",
  },
  {
    question: "How long does a kitchen plumbing remodel take?",
    answer: "A basic kitchen plumbing remodel - swapping a sink, faucet, and garbage disposal - typically takes 4-8 hours in one visit. If you are relocating the sink or adding new supply and drain lines as part of a larger kitchen renovation, rough-in work takes 1-2 days. The timeline depends on the extent of the remodel and access to existing plumbing.",
  },
  {
    question: "Can you hook up a dishwasher to my kitchen plumbing?",
    answer: "Yes, we install and hook up dishwashers as part of our kitchen plumbing services. Dishwasher installation requires a hot water supply connection, a drain line connection to the garbage disposal or sink drain, and a dedicated electrical circuit. We handle the plumbing connections and can coordinate with an electrician if a new circuit is needed.",
  },
  {
    question: "What are common under-kitchen-sink plumbing problems?",
    answer: "Common under-sink plumbing problems include leaking P-trap connections, corroded drain pipes, failing basket strainers, dripping supply shut-off valves, and garbage disposal leaks. Many under-sink leaks go unnoticed until water damage appears on the cabinet floor. We diagnose and repair all under-sink plumbing issues quickly.",
  },
  {
    question: "When should I call a plumber for kitchen plumbing?",
    answer: "Call a plumber when you notice slow drains that do not clear with a plunger, persistent leaks under the sink, low water pressure at the kitchen faucet, no hot water at the sink, a leaking or non-functioning garbage disposal, or any signs of water damage around the sink area. Kitchen plumbing problems that go unrepaired often lead to mold, rot, and costly water damage.",
  },
  {
    question: "Do you install garbage disposals?",
    answer: "Yes, garbage disposal installation is one of our most common kitchen plumbing services. We install all major brands including InSinkErator and Waste King. Installation involves mounting the unit to the sink drain, connecting the discharge drain to the P-trap, and wiring or connecting to the existing electrical outlet. We also replace failed disposals and repair disposal drain leaks.",
  },
  {
    question: "Can you run a new water line for a refrigerator or pot filler?",
    answer: "Absolutely. We install refrigerator water lines for ice makers and water dispensers, pot filler faucets above the stove, and filtered water lines for under-sink water filter systems. Running a new supply line requires tapping into the existing cold water supply and routing copper or braided stainless tubing to the appliance location.",
  },
];

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

export default function KitchenPlumbingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kitchen Plumbing Services",
    description: "Professional kitchen plumbing services in East Brunswick, NJ. Kitchen sink plumbing, repair, remodel, garbage disposal, dishwasher hookup, and appliance connections throughout Middlesex County.",
    provider: { "@type": "Plumber", "@id": "https://www.illyrianplumber.com/#organization", name: BUSINESS_INFO.name, telephone: BUSINESS_INFO.phone },
    areaServed: BUSINESS_INFO.serviceAreas.map(area => ({ "@type": "City", name: area })),
    serviceType: "Kitchen Plumbing",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/professional-plumbing-services.jpg"
            alt="Kitchen plumbing services in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Kitchen Plumbing Specialists</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kitchen Plumbing Services
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Complete kitchen plumbing repair, remodel, and installation throughout East Brunswick and Middlesex County, NJ. From a leaking kitchen sink to a full kitchen plumbing remodel, our licensed plumbers handle it all.
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
              <span>&#10003; Repair &amp; Remodel</span>
              <span>&#10003; Same-Day Service</span>
              <span>&#10003; Licensed &amp; Insured</span>
              <span>&#10003; Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-3xl">

              {/* Intro */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  The kitchen is the most heavily used plumbing area in any home, and when something goes wrong it disrupts your entire household. Whether you need <strong>kitchen plumbing repair</strong> for a dripping faucet or a clogged drain, or you are planning a full <strong>kitchen plumbing remodel</strong> as part of a renovation, Illyrian Plumber provides reliable, licensed <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">plumbing and remodeling services</Link> across Middlesex County, NJ.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 mb-10">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in kitchen and residential plumbing in Middlesex County, NJ since 2010. We offer <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">toilet and faucet installation</Link>, <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800">water filtration systems</Link>, <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> throughout East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed.
                </p>
              </div>

              {/* Kitchen Plumbing Repair Services */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kitchen Plumbing Repair Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fast, reliable <strong>kitchen plumbing repair</strong> keeps your kitchen running smoothly. Our plumbers diagnose and fix kitchen plumbing problems the same day in most cases across East Brunswick and surrounding Middlesex County communities.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Kitchen Faucet Repair</h3>
                  <p className="text-gray-600 mb-4">Dripping faucets waste thousands of gallons of water per year. We repair and replace all faucet styles including single-handle, two-handle, pull-down, and pull-out kitchen faucets from all major brands.</p>
                  <ul className="space-y-2">
                    {[
                      "Dripping or leaking faucet repair",
                      "Loose or stiff handle repair",
                      "Low pressure at kitchen faucet",
                      "Spray head and diverter repair",
                      "Complete faucet replacement",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Kitchen Sink Repair</h3>
                  <p className="text-gray-600 mb-4">From slow drains to a leaking basket strainer, we handle all types of <strong>kitchen sink plumbing</strong> repairs quickly and cleanly.</p>
                  <ul className="space-y-2">
                    {[
                      "Slow or clogged kitchen drain",
                      "Leaking basket strainer or drain",
                      "P-trap repair and replacement",
                      "Sink cracking or mounting issues",
                      "Double-basin drain reconfiguration",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Garbage Disposal Repair</h3>
                  <p className="text-gray-600 mb-4">A jammed, leaking, or non-functioning garbage disposal is one of the most common kitchen plumbing calls we receive. We repair and replace all disposal brands.</p>
                  <ul className="space-y-2">
                    {[
                      "Disposal not turning on",
                      "Leaking disposal flange or seals",
                      "Humming but not grinding",
                      "Disposal drain clog",
                      "Full garbage disposal replacement",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Under-Sink Plumbing Repair</h3>
                  <p className="text-gray-600 mb-4">The cabinet under your kitchen sink contains multiple plumbing connections that can develop leaks over time. We inspect and repair all <strong>under kitchen sink plumbing</strong> components.</p>
                  <ul className="space-y-2">
                    {[
                      "Supply shut-off valve replacement",
                      "Braided supply hose repair",
                      "Drain assembly and P-trap",
                      "Dishwasher drain line repair",
                      "Water filter line connections",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mid-Content CTA 1 */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Need Kitchen Plumbing Repair?</h3>
                <p className="text-gray-600 mb-4">Same-day kitchen plumbing service available throughout Middlesex County, NJ.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Kitchen Plumbing Remodel Services */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kitchen Plumbing Remodel Services</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Planning a kitchen renovation? <strong>Kitchen plumbing remodel</strong> work is one of the most important phases of any kitchen project. Moving a sink, adding an island, or relocating appliances all require licensed plumbing work. Getting it right the first time saves you from costly corrections during or after your renovation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our kitchen plumbers work alongside your contractor or independently to handle every plumbing aspect of your remodel. We provide rough-in plumbing before the cabinetry goes in, return for trim-out once cabinets and counters are installed, and coordinate with your timeline to keep the project moving.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  { title: "Rough-In Plumbing", desc: "New supply and drain rough-in before cabinets and countertops are installed." },
                  { title: "Sink Relocation", desc: "Move the kitchen sink to a new location, including drain stack tie-in and new supply lines." },
                  { title: "Island Plumbing", desc: "Add a prep sink or wet bar to a kitchen island with proper drain venting." },
                  { title: "Fixture Replacement", desc: "Swap out the existing sink and faucet as part of a countertop upgrade or cabinet refresh." },
                  { title: "New Appliance Hookups", desc: "Connect dishwashers, refrigerator ice maker lines, and instant hot water dispensers." },
                  { title: "Drain and Vent Upgrades", desc: "Upgrade undersized drain lines or add proper venting to eliminate slow-drain issues." },
                ].map((service, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>

              {/* Kitchen Sink Plumbing */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kitchen Sink Plumbing</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Proper <strong>kitchen sink plumbing</strong> involves more than just connecting a drain. Every kitchen sink installation requires correctly sized drain lines, a properly configured P-trap and vent, tight supply connections, and a leak-free basket strainer seal. Our plumbers ensure every component is installed to code so you get trouble-free performance for years.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Goes Into Kitchen Sink Plumbing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Supply Side</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      {[
                        "Hot and cold shut-off valves",
                        "Braided stainless supply hoses",
                        "Proper water pressure balance",
                        "Connections for faucet and spray",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Drain Side</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      {[
                        "Basket strainer and sink flange",
                        "P-trap connection to drain stack",
                        "Air admittance valve or vent tie-in",
                        "Garbage disposal drain connection",
                        "Dishwasher drain high-loop",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Under kitchen sink plumbing</strong> gets crowded quickly once a garbage disposal, dishwasher drain, and water filter are added. Our plumbers organize and configure these connections neatly so the cabinet space remains functional and accessible for future service. We use quality materials and proper clamp fittings to prevent the drips and slow leaks that commonly develop under kitchen sinks over time.
                </p>
              </div>

              {/* Kitchen Appliance Plumbing */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kitchen Appliance Plumbing</h2>
              <p className="text-lg text-gray-600 mb-6">
                Modern kitchens have more appliances requiring plumbing connections than ever before. Our <strong>kitchen plumbing services</strong> include all appliance hookups and new water line installations.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {[
                  {
                    title: "Dishwasher Hookup",
                    desc: "Complete dishwasher installation including hot water supply connection, drain line to disposal or standpipe, and secure mounting."
                  },
                  {
                    title: "Refrigerator Water Line",
                    desc: "Run a dedicated 1/4-inch copper or stainless supply line for your refrigerator ice maker and water dispenser."
                  },
                  {
                    title: "Garbage Disposal",
                    desc: "Install or replace InSinkErator, Waste King, or any brand disposal with proper drain and electrical connections."
                  },
                  {
                    title: "Pot Filler Installation",
                    desc: "Install a wall-mounted pot filler above the range with a new hot water supply line roughed in through the wall."
                  },
                  {
                    title: "Instant Hot Water",
                    desc: "Install an under-sink instant hot water dispenser with its own dedicated supply and drain connection."
                  },
                  {
                    title: "Under-Sink Water Filter",
                    desc: "Hook up a reverse osmosis or under-sink filter system with dedicated filtered water faucet and drain line."
                  },
                ].map((appliance, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{appliance.title}</h3>
                    <p className="text-gray-600 text-sm">{appliance.desc}</p>
                  </div>
                ))}
              </div>

              {/* Mid-Content CTA 2 */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 text-center">
                <h3 className="text-xl font-bold mb-2">Kitchen Plumbing Near Me - East Brunswick NJ</h3>
                <p className="text-gray-300 mb-4">Licensed kitchen plumbing company serving Middlesex County. Repairs, remodels, and installations.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold transition">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Kitchen Plumbing Cost Guide */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kitchen Plumbing Cost Guide</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Understanding typical <strong>kitchen plumbing</strong> costs in New Jersey helps you plan your budget. These ranges reflect common jobs in Middlesex County. Exact pricing depends on your home's existing plumbing, access, and the scope of work required.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {[
                  { task: "Kitchen faucet repair", range: "$150 - $250" },
                  { task: "Kitchen faucet replacement", range: "$175 - $350" },
                  { task: "Kitchen sink installation", range: "$250 - $500" },
                  { task: "Garbage disposal installation", range: "$200 - $400" },
                  { task: "Dishwasher hookup", range: "$150 - $300" },
                  { task: "Under-sink drain repair", range: "$175 - $350" },
                  { task: "Refrigerator water line", range: "$150 - $300" },
                  { task: "Kitchen plumbing rough-in (remodel)", range: "$800 - $2,500+" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-50 rounded-lg p-4">
                    <span className="text-gray-700 font-medium">{item.task}</span>
                    <span className="text-red-700 font-bold whitespace-nowrap ml-4">{item.range}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-12">
                *Prices reflect labor costs in the East Brunswick and Middlesex County area. Material costs are additional. Contact us for a free estimate.
              </p>

              {/* Signs You Need Kitchen Plumbing Help */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs You Need Kitchen Plumbing Help</h2>
              <p className="text-lg text-gray-600 mb-6">
                Do not wait for a small problem to become a costly repair. These are the warning signs that mean it is time to call a <strong>kitchen plumbing company</strong>:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  "Slow or gurgling kitchen drain",
                  "Water pooling under the sink cabinet",
                  "Dripping faucet that won't stop",
                  "Low water pressure at the kitchen tap",
                  "Garbage disposal leaking or not working",
                  "Water stains or mold on cabinet floor",
                  "Foul smell from the kitchen drain",
                  "Dishwasher not draining properly",
                  "Rust-colored water from kitchen faucet",
                  "Banging pipes when using the kitchen",
                ].map((sign, index) => (
                  <div key={index} className="flex items-center gap-3 bg-amber-50 rounded-lg p-4">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700">{sign}</span>
                  </div>
                ))}
              </div>

              {/* Blog Links */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Helpful Reading</h3>
                <p className="text-gray-700 mb-4">Learn more about home plumbing and water quality from our blog:</p>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:text-red-800 font-semibold">
                      Why Is My Water Pressure Low? &rarr;
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/whole-house-water-filter-worth-it" className="text-red-700 hover:text-red-800 font-semibold">
                      Is a Whole House Water Filter Worth It? &rarr;
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service Areas */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kitchen Plumbing Service Areas</h3>
                <p className="text-gray-700 mb-4">
                  We provide <strong>kitchen plumbing services near you</strong> throughout Middlesex County, NJ:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-700">
                  <span>East Brunswick</span>
                  <span>Edison</span>
                  <span>Old Bridge</span>
                  <span>Sayreville</span>
                  <span>South Brunswick</span>
                  <span>North Brunswick</span>
                  <span>Monroe Township</span>
                  <span>And surrounding areas</span>
                </div>
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kitchen Plumbing FAQs</h2>
              <div className="space-y-4 mb-12">
                {faqData.map((faq, index) => (
                  <details key={index} className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>

              {/* Related Services */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800 font-medium">Bathroom Remodeling &rarr;</Link>
                  <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-medium">Toilet &amp; Faucet Installation &rarr;</Link>
                  <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium">Water Filtration System &rarr;</Link>
                  <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">Water Leak Detection &rarr;</Link>
                  <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping &rarr;</Link>
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Plumbing &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                {/* Call Now */}
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Kitchen Plumbing Help?</p>
                  <p className="text-gray-600 text-sm mb-4">Licensed kitchen plumbers serving Middlesex County, NJ.</p>
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
                    <li><Link href="/services/toilet-and-faucet-installation" className="text-gray-700 hover:text-red-700 transition">Toilet &amp; Faucet Installation</Link></li>
                    <li><Link href="/services/bathroom-remodeling" className="text-gray-700 hover:text-red-700 transition">Bathroom Remodeling</Link></li>
                    <li><Link href="/services/water-filtration-system" className="text-gray-700 hover:text-red-700 transition">Water Filtration</Link></li>
                    <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>

                {/* Related Blog */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Helpful Articles</p>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition leading-snug block">Why Is My Water Pressure Low?</Link>
                    </li>
                    <li>
                      <Link href="/blog/whole-house-water-filter-worth-it" className="text-gray-700 hover:text-red-700 transition leading-snug block">Is a Whole House Water Filter Worth It?</Link>
                    </li>
                    <li>
                      <Link href="/blog/how-long-bathroom-remodel-take" className="text-gray-700 hover:text-red-700 transition leading-snug block">How Long Does a Bathroom Remodel Take?</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Your Local Kitchen Plumbing Company in East Brunswick, NJ</h2>
          <p className="text-xl text-red-100 mb-8">Repair, remodel, or new installation - we handle all kitchen plumbing in Middlesex County.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
