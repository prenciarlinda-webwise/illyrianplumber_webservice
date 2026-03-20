import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumbing Safety Inspections NJ",
  description: "Professional plumbing inspections in East Brunswick & Middlesex County, NJ. Home buyer inspections, pre-purchase plumbing evaluations, annual maintenance checks, and safety assessments. Call (347) 461-4856.",
  keywords: [
    "plumbing inspection",
    "home plumbing inspection",
    "plumbing safety inspection",
    "pre-purchase plumbing inspection",
    "plumbing evaluation",
    "plumbing inspection cost",
    "plumbing inspection NJ",
    "home buyer plumbing inspection",
    "plumbing safety check",
    "plumbing assessment",
    "annual plumbing inspection",
    "real estate plumbing inspection",
    "gas line inspection NJ",
    "plumbing inspection East Brunswick",
    "plumbing inspection Middlesex County",
    "plumbing code inspection",
    "residential plumbing inspection",
  ],
};

const faqData = [
  {
    question: "How much does a plumbing inspection cost in NJ?",
    answer: "A professional plumbing inspection in New Jersey typically costs $150-$400 depending on the size of the home and scope of the inspection. A basic visual inspection is on the lower end, while a comprehensive inspection including water pressure testing, gas line checks, and camera inspection of drain lines costs more. Contact Illyrian Plumber for exact pricing.",
  },
  {
    question: "What does a plumbing inspection include?",
    answer: "A comprehensive plumbing inspection covers water supply lines and valves, water heater condition, visible pipes for leaks and corrosion, fixture operation, water pressure testing, toilet seals and operation, gas line connections, sump pump function, shut-off valve operation, pipe materials and age assessment, and signs of hidden water damage. You receive a detailed written report with findings and recommendations.",
  },
  {
    question: "Do I need a plumbing inspection before buying a home?",
    answer: "Absolutely. A standard home inspection only provides a basic overview of plumbing. A dedicated pre-purchase plumbing inspection by a licensed plumber goes much deeper - checking pipe materials, water pressure, drainage flow, gas connections, and identifying issues that could cost thousands to repair. This gives you negotiating power and protects your investment.",
  },
  {
    question: "How often should I get a plumbing inspection?",
    answer: "We recommend annual plumbing inspections for homes over 20 years old and every 2-3 years for newer homes. If you have an older home with galvanized pipes, a well water system, or a septic system, more frequent inspections are advisable. Annual inspections catch small problems before they become expensive emergencies.",
  },
  {
    question: "What problems do plumbing inspections typically find?",
    answer: "Common issues found during plumbing inspections include corroded or aging pipes nearing failure, water heaters at or past their expected lifespan, slow leaks causing hidden water damage, improper previous repairs that do not meet code, outdated pipe materials like polybutylene or lead, missing or non-functional shut-off valves, gas leaks at connections, and failing sump pumps.",
  },
  {
    question: "Can a plumbing inspection help sell my home?",
    answer: "Yes. A pre-sale plumbing inspection lets you address issues before listing, preventing surprises during buyer inspections. You can fix problems on your own timeline and budget rather than under negotiation pressure. Some sellers include the inspection report as a selling point to demonstrate the home has been well-maintained.",
  },
  {
    question: "Do you provide a written inspection report?",
    answer: "Yes, every plumbing inspection includes a detailed written report documenting the condition of all inspected systems, any issues found, photos of problem areas, and recommended repairs or upgrades with priority levels. This report can be used for real estate transactions, insurance purposes, or planning future maintenance.",
  },
  {
    question: "Do you inspect gas lines during a plumbing inspection?",
    answer: "Yes, gas line inspection is included in our comprehensive plumbing inspection. We check all visible gas connections, test for leaks using a combustible gas detector, verify proper pipe materials and sizing, and inspect gas appliance connections. Gas safety is a critical part of any thorough plumbing evaluation.",
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

export default function PlumbingInspectionsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plumbing Safety Inspections",
    description: "Professional plumbing inspections in East Brunswick, NJ. Home buyer inspections, annual maintenance checks, and safety evaluations.",
    provider: { "@type": "Plumber", "@id": "https://www.illyrianplumber.com/#organization", name: BUSINESS_INFO.name, telephone: BUSINESS_INFO.phone },
    areaServed: BUSINESS_INFO.serviceAreas.map(area => ({ "@type": "City", name: area })),
    serviceType: "Plumbing Inspection",
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
            alt="Plumbing safety inspections in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Comprehensive Evaluations</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Plumbing Safety Inspections
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Comprehensive plumbing inspections for home buyers, sellers, and homeowners. Identify problems before they become expensive emergencies. Serving East Brunswick and all of Middlesex County, NJ.
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
              <span>&#10003; Home Buyer Inspections</span>
              <span>&#10003; Detailed Reports</span>
              <span>&#10003; Licensed &amp; Insured</span>
              <span>&#10003; Gas Line Testing</span>
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
                  Your home&apos;s plumbing system is largely hidden behind walls, under floors, and underground - making it easy to overlook until something goes wrong. A professional <strong>plumbing inspection</strong> reveals the true condition of your pipes, water heater, gas lines, and fixtures before small issues become major emergencies. Whether you are buying a home, selling, or just want peace of mind, a <strong>plumbing safety inspection</strong> is one of the smartest investments you can make.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 mb-10">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in plumbing inspections and diagnostics in Middlesex County, NJ. We offer <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800">water heater replacement</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
                </p>
              </div>

              {/* Types of Inspections */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Plumbing Inspections</h2>
              <p className="text-lg text-gray-600 mb-6">
                We offer several types of <strong>plumbing inspections</strong> tailored to your specific needs. Each includes a detailed written report with findings and recommendations.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "Home Buyer Inspection", desc: "Thorough inspection before purchasing a home. Identify hidden plumbing issues that could cost thousands to repair. Use findings for negotiation or to plan future repairs." },
                  { title: "Pre-Sale Inspection", desc: "Prepare your home for sale by identifying and addressing plumbing issues before they become negotiation points. Show buyers your plumbing is well-maintained." },
                  { title: "Annual Maintenance Check", desc: "Preventive inspection to catch small problems before they become major repairs. Recommended annually for homes over 20 years old." },
                  { title: "Gas Line Safety Inspection", desc: "Check gas lines and connections for leaks and safety. Required for some insurance and real estate transactions. Includes combustible gas detection testing." },
                ].map((type, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600">{type.desc}</p>
                  </div>
                ))}
              </div>

              {/* Mid-Content CTA */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule a Plumbing Inspection</h3>
                <p className="text-gray-600 mb-4">Know the true condition of your plumbing. Detailed report included.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Why Get a Plumbing Inspection */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why a Plumbing Inspection Matters</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Many homeowners in <strong>East Brunswick</strong>, <strong>Edison</strong>, and throughout <strong>Middlesex County</strong> have older homes with aging plumbing systems. Galvanized pipes corrode from the inside, slowly reducing water flow and quality without any visible signs. Water heaters near the end of their lifespan can fail catastrophically, flooding basements and causing thousands in water damage.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A <strong>home plumbing inspection</strong> catches these issues early. We have inspected hundreds of homes in our service area and routinely find problems that homeowners had no idea existed - corroded pipes hidden behind walls, gas connections with small leaks, water heaters with failing anodes, and improperly done repairs from previous owners. Catching these issues early saves money and prevents emergencies.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For home buyers, a <strong>pre-purchase plumbing inspection</strong> is especially valuable. Standard home inspections only scratch the surface of plumbing - they check that water runs and drains but do not assess pipe condition, water pressure adequacy, gas line integrity, or remaining equipment life. Our detailed inspection gives you the complete picture.
                </p>
              </div>

              {/* Gallery Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Inspection Work</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {[
                  { src: "/images/professional-plumbing-services.jpg", alt: "Professional plumbing inspection" },
                  { src: "/images/water-heater-repair-service.jpg", alt: "Water heater inspection" },
                  { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Gas line safety testing" },
                  { src: "/images/copper-pipe-repiping-service.jpg", alt: "Pipe condition inspection" },
                  { src: "/images/water-heater-sediment-buildup.jpg", alt: "Water heater evaluation" },
                  { src: "/images/boiler-repair-service-nj.jpg", alt: "Boiler safety inspection" },
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

              {/* What We Inspect */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Inspect</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive <strong>plumbing safety inspection</strong> covers every major component of your home&apos;s plumbing system:
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Water supply lines and shut-off valves",
                    "Water heater condition, age, and safety",
                    "Visible pipes for leaks and corrosion",
                    "Fixture operation and condition",
                    "Static and dynamic water pressure testing",
                    "Toilet operation, seals, and flanges",
                    "Gas lines, connections, and leak testing",
                    "Sump pump operation and discharge",
                    "Main shut-off valve functionality",
                    "Signs of hidden water damage",
                    "Pipe materials and remaining lifespan",
                    "Boiler and heating system safety",
                    "Drain flow and drainage performance",
                    "Backflow prevention devices",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plumbing Inspection Cost */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing Inspection Cost Guide</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Understanding <strong>plumbing inspection cost</strong> helps you budget for this important service. The cost of an inspection is minimal compared to the potential repair costs of undetected plumbing problems.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { task: "Basic visual inspection", range: "$150 - $250" },
                  { task: "Comprehensive inspection", range: "$250 - $400" },
                  { task: "Pre-purchase buyer inspection", range: "$250 - $400" },
                  { task: "Gas line safety inspection", range: "$100 - $200" },
                  { task: "Camera drain line inspection (add-on)", range: "$150 - $350" },
                  { task: "Water quality testing (add-on)", range: "$50 - $150" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-50 rounded-lg p-4">
                    <span className="text-gray-700 font-medium">{item.task}</span>
                    <span className="text-red-700 font-bold whitespace-nowrap ml-4">{item.range}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-12">
                *Prices vary based on home size and scope. Contact us for exact pricing for your situation.
              </p>

              {/* Why Get Inspected */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Get a Plumbing Inspection?</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {[
                  { title: "Avoid Surprises", desc: "Know the true condition of your plumbing before problems surprise you" },
                  { title: "Save Money", desc: "Catch small problems before they escalate into expensive emergency repairs" },
                  { title: "Peace of Mind", desc: "Confidence that your home&apos;s plumbing systems are safe and functional" },
                  { title: "Negotiating Power", desc: "Use inspection findings as leverage in home purchase negotiations" },
                  { title: "Insurance Compliance", desc: "Meet insurance requirements for coverage and claims documentation" },
                  { title: "Preventive Care", desc: "Extend the life of your plumbing systems with early intervention" },
                ].map((benefit, index) => (
                  <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              {/* Mid-Content CTA 2 */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 text-center">
                <h3 className="text-xl font-bold mb-2">Protect Your Home with a Plumbing Inspection</h3>
                <p className="text-gray-300 mb-4">Comprehensive inspections with detailed written reports. Same-week scheduling available.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold transition">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Inspection Report */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Inspection Report</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  After your inspection, you receive a detailed written report documenting the condition of your plumbing systems, any issues found, and recommended repairs or upgrades. Each finding is rated by priority - from immediate safety concerns to long-term maintenance recommendations. The report includes photos of problem areas for your reference.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This <strong>plumbing evaluation</strong> report can be used for real estate transactions, insurance purposes, or planning future maintenance. For home buyers, it provides documentation to support repair requests or price negotiations. For homeowners, it creates a maintenance roadmap so you can budget for repairs over time rather than dealing with emergencies.
                </p>
              </div>

              {/* Common Issues We Find */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Issues We Find During Inspections</h3>
                <p className="text-gray-700 mb-4">
                  After hundreds of <strong>home plumbing inspections</strong> in Middlesex County, these are the most common problems we discover:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Corroded galvanized pipes nearing failure",
                    "Water heater past expected lifespan",
                    "Slow leaks causing hidden mold and rot",
                    "Improper previous repairs by unlicensed workers",
                    "Outdated pipe materials (polybutylene, lead)",
                    "Missing or seized shut-off valves",
                    "Gas leaks at appliance connections",
                    "Failed or undersized sump pumps",
                    "Inadequate water pressure",
                    "Missing backflow prevention devices",
                  ].map((issue, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-gray-700">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blog Links */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Helpful Reading</h3>
                <p className="text-gray-700 mb-4">Learn more about common plumbing problems to watch for:</p>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog/signs-of-slab-leak-sewer-line" className="text-red-700 hover:text-red-800 font-semibold">
                      Signs of a Slab Leak or Sewer Line Problem &rarr;
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:text-red-800 font-semibold">
                      Why Is My Water Pressure Low? &rarr;
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service Areas */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Plumbing Inspection Service Areas</h3>
                <p className="text-gray-700 mb-4">
                  We provide professional <strong>plumbing safety inspections</strong> throughout Middlesex County, NJ:
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing Inspection FAQs</h2>
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
                  <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">Water Leak Detection &rarr;</Link>
                  <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping &rarr;</Link>
                  <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 font-medium">Gas Line Services &rarr;</Link>
                  <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800 font-medium">Water Heater Replacement &rarr;</Link>
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Plumbing &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                {/* Call Now */}
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Schedule an Inspection</p>
                  <p className="text-gray-600 text-sm mb-4">Comprehensive plumbing evaluations.</p>
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
                    <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                    <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Services</Link></li>
                    <li><Link href="/services/water-heater-replacement" className="text-gray-700 hover:text-red-700 transition">Water Heater Replacement</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>

                {/* Related Blog */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Helpful Articles</p>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/blog/signs-of-slab-leak-sewer-line" className="text-gray-700 hover:text-red-700 transition leading-snug block">Signs of a Slab Leak or Sewer Line Problem</Link>
                    </li>
                    <li>
                      <Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition leading-snug block">Why Is My Water Pressure Low?</Link>
                    </li>
                    <li>
                      <Link href="/blog/signs-water-heater-dying" className="text-gray-700 hover:text-red-700 transition leading-snug block">Signs Your Water Heater Is Dying</Link>
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
          <h2 className="text-3xl font-bold mb-4">Schedule a Plumbing Inspection</h2>
          <p className="text-xl text-red-100 mb-8">Know the true condition of your plumbing. Detailed report included.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Request Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
