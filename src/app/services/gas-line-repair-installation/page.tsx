import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gas Line Repair & Installation NJ",
  description: "Licensed gas line repair, installation, and safety inspections in East Brunswick & Middlesex County NJ. Expert gas plumbers for gas leak repair, appliance hookups, and new gas line installation. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/gas-line-repair-installation",
  },
  keywords: [
    "gas line repair",
    "gas line installation",
    "gas leak repair",
    "gas plumber",
    "gas pipe installation",
    "gas line inspection",
    "gas appliance hookup",
    "gas line repair cost",
    "gas plumber near me",
    "gas line repair near me",
    "gas line installation NJ",
    "gas leak detection",
    "gas pipe repair",
    "natural gas plumber",
    "gas line replacement",
    "gas stove hookup",
    "gas dryer hookup",
    "gas fireplace installation",
  ],
  openGraph: {
    title: "Gas Line Repair & Installation NJ",
    description: "Licensed gas line repair, installation, and safety inspections in East Brunswick & Middlesex County NJ. Gas leak repair, appliance hookups, and new gas lines.",
    type: "website",
  },
};

const faqData = [
  {
    question: "How do I know if I have a gas leak?",
    answer: "The most common sign of a gas leak is the smell of rotten eggs, which is added to natural gas as a safety measure. Other signs include a hissing or whistling sound near gas lines, dead or dying vegetation near your gas line, higher than normal gas bills, and visible corrosion or damage to gas pipes. If you suspect a gas leak, evacuate your home immediately, avoid using any electronics or light switches, and call your gas utility company from outside.",
  },
  {
    question: "How much does gas line repair cost?",
    answer: "Gas line repair costs vary depending on the type of repair, the location of the leak, and the materials needed. Simple connection repairs may cost less than major pipe replacements. At Illyrian Plumber, we always provide a detailed, upfront estimate before beginning any gas line work. Call us for a free assessment and quote. We believe in transparent pricing with no hidden fees.",
  },
  {
    question: "Do you need a licensed plumber for gas line work?",
    answer: "Yes, New Jersey law requires a licensed plumber for all gas line installation, repair, and modification. Working with gas lines is dangerous and improper work can lead to gas leaks, explosions, and carbon monoxide poisoning. Our plumbers are fully licensed and insured in New Jersey with extensive training in gas line systems. Never attempt gas line work yourself or hire an unlicensed contractor.",
  },
  {
    question: "Can you run a new gas line for my outdoor grill or fire pit?",
    answer: "Absolutely. We install new gas lines for outdoor grills, fire pits, pool heaters, outdoor kitchens, and patio heaters. A dedicated gas line eliminates the need for propane tanks and provides a consistent fuel supply. We handle all aspects of the installation including permits, trenching, pipe installation, and connection to your existing gas system.",
  },
  {
    question: "How long does gas line installation take?",
    answer: "A simple gas appliance hookup such as connecting a gas stove or dryer can often be completed in 1-2 hours. Running a new gas line from your meter to a new location typically takes 4-8 hours depending on the distance and complexity. Major gas line replacement projects may take 1-2 days. We will provide a time estimate during your initial consultation.",
  },
  {
    question: "Do you provide gas line inspections for home sales?",
    answer: "Yes, we provide comprehensive gas line safety inspections for real estate transactions, home purchases, and peace of mind. Our inspection includes checking all gas connections, testing for leaks with electronic detection equipment, verifying proper pipe sizing, inspecting gas appliance connections, and providing a detailed written report. Many home buyers and sellers request gas line inspections as part of the home inspection process.",
  },
  {
    question: "What types of gas appliances can you hook up?",
    answer: "We hook up all types of gas appliances including gas stoves and ranges, gas dryers, gas water heaters, tankless water heaters, gas fireplaces and inserts, gas boilers and furnaces, outdoor grills and fire pits, pool heaters, garage heaters, and generators. Each appliance hookup includes a leak test and safety verification.",
  },
  {
    question: "What should I do if I smell gas in my home?",
    answer: "If you smell gas, leave your home immediately. Do not turn on or off any lights, use your phone inside, or start your car in the garage. Once you are safely outside, call your gas utility company's emergency line, then call us for repairs. Do not re-enter the home until the gas company has confirmed it is safe. Gas leaks are extremely dangerous and should always be treated as an emergency.",
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

export default function GasLineRepairPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gas Line Repair & Installation",
    description: "Licensed gas line repair, installation, and safety inspections in East Brunswick, NJ. Expert gas plumbers for appliance hookups, leak repair, and new gas lines.",
    provider: { "@type": "Plumber", "@id": "https://www.illyrianplumber.com/#organization", name: BUSINESS_INFO.name, telephone: BUSINESS_INFO.phone },
    areaServed: BUSINESS_INFO.serviceAreas.map(area => ({ "@type": "City", name: area })),
    serviceType: "Gas Line Services",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/gas-line-pressure-gauge-installation.jpg"
            alt="Gas line repair and installation service in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Licensed Gas Plumbers</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Gas Line Repair & Installation in East Brunswick, NJ
            </h1>
            <p className="text-xl text-gray-200 mb-6 max-w-2xl">
              Professional gas line services from licensed plumbers. We handle gas leak repair, new gas line installation, gas appliance hookups, gas pipe replacement, and safety inspections throughout Middlesex County, NJ.
            </p>
            <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mb-6 max-w-2xl">
              <p className="text-red-200 font-medium">
                <strong>Smell gas?</strong> Leave immediately and call your gas company, then call us for repairs.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
              </a>
              <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span>✓ Gas Leak Repair</span>
              <span>✓ Appliance Hookups</span>
              <span>✓ Licensed & Insured</span>
              <span>✓ Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Main Content */}
            <div className="lg:w-2/3">

              {/* Intro */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you need a <strong>gas leak repair</strong>, a new <strong>gas line installation</strong> for a kitchen remodel, or a professional <strong>gas appliance hookup</strong>, Illyrian Plumber provides expert gas line services throughout East Brunswick and Middlesex County, NJ. Our licensed <strong>gas plumbers</strong> handle every aspect of residential and commercial gas piping with the expertise and attention to safety that gas work demands.
                </p>

                {/* About Illyrian Plumber */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6 not-prose">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">About Illyrian Plumber</h3>
                  <p className="text-gray-700 text-base">
                    Illyrian Plumber has been serving Middlesex County homeowners and businesses for over {BUSINESS_INFO.stats.yearsExperience} years. With {BUSINESS_INFO.stats.projectsCompleted} projects completed and {BUSINESS_INFO.stats.happyClients} satisfied clients, we are one of the most trusted plumbing companies in Central New Jersey. Our licensed master plumbers specialize in gas line work, water heater services, boiler repair, emergency plumbing, and whole-house repiping. Based in East Brunswick, we deliver fast, reliable service to every customer.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Gas line work is not something to take lightly. New Jersey law requires all gas line installation, repair, and modification to be performed by licensed plumbers. Improperly installed or repaired gas lines can lead to gas leaks, carbon monoxide poisoning, fires, and explosions. At Illyrian Plumber, every technician on our team is fully licensed and insured in the state of New Jersey with extensive training in gas piping systems. We follow all local and state building codes, pull necessary permits, and pressure test every connection to verify safety.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We serve homeowners across Middlesex County including East Brunswick, Edison, Old Bridge, Sayreville, Monroe Township, South Brunswick, and North Brunswick. Whether you are building a new home, renovating a kitchen, adding a gas fireplace, or dealing with a <strong>gas pipe repair</strong> emergency, our team has the experience and equipment to handle the job safely and efficiently.
                </p>
              </div>

              {/* Services */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Gas Line Services</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "Gas Leak Detection & Repair", desc: "Fast response to gas leaks with professional electronic detection, repair, and safety testing to protect your family" },
                  { title: "New Gas Line Installation", desc: "Run new gas lines for appliances, outdoor grills, fire pits, generators, and home additions" },
                  { title: "Gas Appliance Hookup", desc: "Connect gas stoves, dryers, water heaters, fireplaces, pool heaters, and boilers safely" },
                  { title: "Gas Line Inspection", desc: "Comprehensive safety inspections for real estate transactions, code compliance, and peace of mind" },
                  { title: "Gas Meter Upgrades", desc: "Coordinate with your utility company for increased gas capacity when adding new appliances" },
                  { title: "Gas Pipe Replacement", desc: "Replace old, corroded, or undersized gas piping with modern materials that meet current codes" },
                ].map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>

              {/* Detailed Service Descriptions */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Gas Line Services in Detail</h2>

              <div className="space-y-8 mb-12">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Gas Leak Repair - Emergency Response</h3>
                  <p className="text-gray-700 mb-3">
                    A <strong>gas leak repair</strong> requires immediate attention from a licensed <strong>gas plumber</strong>. Natural gas is highly flammable and can be lethal in confined spaces. Our emergency gas leak repair service includes rapid response, electronic leak detection to pinpoint the exact location, professional repair using code-compliant materials, and thorough pressure testing to verify the repair is complete and safe.
                  </p>
                  <p className="text-gray-700">
                    Common causes of gas leaks include corroded pipes, loose fittings, damaged appliance connectors, improper installations by unlicensed workers, and ground shifting that stresses buried gas lines. Our <strong>gas plumber near me</strong> team arrives equipped with the tools and materials needed to handle any gas leak situation. We also test for carbon monoxide to ensure your home is safe before we leave.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">New Gas Line Installation</h3>
                  <p className="text-gray-700 mb-3">
                    Planning a kitchen remodel and switching to a gas stove? Adding a gas fireplace to your living room? Want to connect a natural gas grill to eliminate propane tanks? Our <strong>gas line installation</strong> service handles every type of new gas line project. We work with you to plan the optimal route for new gas piping, handle all permit applications, install the lines using approved materials and methods, and test everything before connecting your appliances.
                  </p>
                  <p className="text-gray-700">
                    Our <strong>gas pipe installation</strong> team uses black iron pipe, corrugated stainless steel tubing (CSST), and other code-approved materials depending on the application. We size the pipe correctly based on the BTU requirements of your appliances and the distance from the gas meter to ensure proper gas flow. Undersized gas lines cause poor appliance performance and can be dangerous, which is why proper sizing by a licensed <strong>natural gas plumber</strong> is critical.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Gas Appliance Hookup</h3>
                  <p className="text-gray-700 mb-3">
                    Every gas appliance in your home needs a proper, code-compliant connection. Our <strong>gas appliance hookup</strong> service covers all types of gas-powered equipment including gas stoves and ranges, gas dryers, gas water heaters and tankless water heaters, gas fireplaces and inserts, boilers and furnaces, outdoor gas grills and fire pits, pool and spa heaters, and standby generators.
                  </p>
                  <p className="text-gray-700">
                    Each <strong>gas stove hookup</strong> or <strong>gas dryer hookup</strong> includes a flexible connector installation, shut-off valve installation or verification, leak testing on all connections, and verification that the appliance is operating correctly. We also verify that your gas line has adequate capacity for the new appliance. If a gas meter upgrade is needed, we coordinate directly with your utility company.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Gas Line Inspection</h3>
                  <p className="text-gray-700">
                    A professional <strong>gas line inspection</strong> is essential for home safety, real estate transactions, and insurance requirements. Our comprehensive gas line inspection includes testing all gas connections and fittings for leaks, inspecting the condition of gas piping throughout the home, verifying proper pipe sizing for all connected appliances, checking gas appliance connectors and shut-off valves, inspecting gas venting systems for proper operation, and providing a detailed written report of our findings. We recommend annual gas line inspections for homes with older gas piping systems to catch small problems before they become dangerous.
                  </p>
                </div>
              </div>

              {/* Mid-content CTA */}
              <div className="bg-red-700 text-white rounded-xl p-6 mb-12 text-center">
                <h3 className="text-2xl font-bold mb-3">Need Gas Line Service?</h3>
                <p className="text-red-100 mb-4">Licensed gas plumbers serving all of Middlesex County. Free estimates on all gas line work.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Gallery Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Gas Line Work</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {[
                  { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Gas line pressure testing" },
                  { src: "/images/copper-pipe-repiping-service.jpg", alt: "Gas pipe installation" },
                  { src: "/images/tankless-water-heater-installation.jpg", alt: "Gas appliance hookup" },
                  { src: "/images/boiler-repair-service-nj.jpg", alt: "Gas boiler service" },
                  { src: "/images/water-heater-repair-service.jpg", alt: "Gas water heater installation" },
                  { src: "/images/professional-plumbing-services.jpg", alt: "Professional gas plumber" },
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

              {/* Signs of Gas Line Problems */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs of Gas Line Problems</h2>
              <p className="text-lg text-gray-600 mb-6">
                Knowing the warning signs of gas line issues can save your life. Contact a <strong>gas plumber near me</strong> immediately if you notice any of these signs:
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Rotten egg smell (gas odor) anywhere in your home",
                    "Hissing or whistling sound near gas lines or appliances",
                    "Dead or dying vegetation near buried gas lines",
                    "Higher than normal gas bills without increased usage",
                    "Gas appliances not working properly or producing weak flames",
                    "Visible corrosion, rust, or damage on gas pipes",
                    "Soot or black marks around gas appliances",
                    "Physical symptoms like dizziness, nausea, or headaches",
                  ].map((sign, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-gray-700">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gas Line Repair Cost */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Gas Line Repair Cost - What to Expect</h2>
              <p className="text-lg text-gray-700 mb-4">
                The cost of <strong>gas line repair</strong> depends on several factors including the type and location of the problem, the materials needed, and whether permits are required. Simple fixes like tightening a loose fitting or replacing a flexible connector are on the lower end of the cost spectrum. More involved repairs such as replacing a corroded section of gas pipe or rerouting a gas line will cost more.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                New <strong>gas line installation</strong> costs depend on the distance from your gas meter to the new appliance location, the pipe size required, and whether the installation is inside or outside the home. Running a gas line through finished walls or ceilings requires more labor than installing pipe in an unfinished basement or crawl space.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                At Illyrian Plumber, we provide detailed, written estimates before beginning any gas line work. Our pricing is transparent and competitive - you will know exactly what you are paying for before we start. We never add hidden fees or surprise charges. Call us today for a free <strong>gas line repair cost</strong> estimate.
              </p>

              {/* Why Choose Licensed Gas Plumbers */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Licensed Gas Plumbers?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Gas work requires specialized licensing and training. NJ law requires licensed plumbers for all gas line work. Our technicians are fully licensed, insured, and experienced with residential and commercial gas systems. Here is why hiring a licensed <strong>gas plumber</strong> matters:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {[
                  { title: "Licensed & Insured", desc: "Full NJ licensing for all gas work - protecting you and your property" },
                  { title: "Code Compliant", desc: "All work meets local and state building codes with proper permits" },
                  { title: "Safety First", desc: "Pressure testing and leak detection on every job we complete" },
                  { title: "Proper Sizing", desc: "Correct pipe sizing for optimal gas flow to all appliances" },
                  { title: "Modern Materials", desc: "Code-approved piping materials for durability and safety" },
                  { title: "Full Warranties", desc: "Our work is backed by warranties for your peace of mind" },
                ].map((item, index) => (
                  <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Second CTA */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 text-center">
                <h3 className="text-2xl font-bold mb-3">Ready to Schedule Gas Line Service?</h3>
                <p className="text-gray-300 mb-4">Expert gas plumbers, transparent pricing, and professional results. Serving Middlesex County, NJ.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Related Blog Posts */}
              <div className="bg-gray-50 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources from Our Blog</h3>
                <p className="text-gray-600 mb-4">Learn more about gas safety and related plumbing topics:</p>
                <div className="space-y-3">
                  <Link href="/blog/gas-leak-detection-safety" className="block text-red-700 hover:text-red-800 font-medium">
                    Gas Leak Detection & Safety - What Every Homeowner Should Know →
                  </Link>
                  <Link href="/blog/common-boiler-problems-winter" className="block text-red-700 hover:text-red-800 font-medium">
                    Common Boiler Problems in Winter - Prevention & Solutions →
                  </Link>
                </div>
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Gas Line Repair & Installation FAQs</h2>
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
                  <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800 font-medium">Boiler Repair →</Link>
                  <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 font-medium">Tankless Installation →</Link>
                  <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800 font-medium">Water Heater Repair →</Link>
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Services →</Link>
                  <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections →</Link>
                  <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping →</Link>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:w-1/3">
              <div className="lg:sticky lg:top-24 space-y-6">

                {/* Call Now Box */}
                <div className="bg-red-700 text-white rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Call Our Gas Plumbers</h3>
                  <p className="text-red-100 mb-4 text-sm">Licensed, insured, and ready to help</p>
                  <a href={BUSINESS_INFO.phoneLink} className="block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition mb-3">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>

                {/* Service Areas */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Service Areas</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>East Brunswick, NJ</li>
                    <li>Edison, NJ</li>
                    <li>Old Bridge, NJ</li>
                    <li>Sayreville, NJ</li>
                    <li>South Brunswick, NJ</li>
                    <li>North Brunswick, NJ</li>
                    <li>Monroe Township, NJ</li>
                  </ul>
                  <Link href="/service-areas" className="text-red-700 hover:text-red-800 text-sm font-medium mt-3 block">
                    View All Service Areas →
                  </Link>
                </div>

                {/* Services */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Our Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">Emergency Plumbing</Link></li>
                    <li><Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">Water Heater Repair</Link></li>
                    <li><Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">Boiler Repair</Link></li>
                    <li><Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">Gas Line Services</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">Whole House Repiping</Link></li>
                    <li><Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">Tankless Water Heater</Link></li>
                  </ul>
                </div>

                {/* Related Blog Posts */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Related Blog Posts</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/blog/gas-leak-detection-safety" className="text-red-700 hover:text-red-800">
                        Gas Leak Detection & Safety →
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:text-red-800">
                        Common Boiler Problems in Winter →
                      </Link>
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
          <h2 className="text-3xl font-bold mb-4">Need Gas Line Service?</h2>
          <p className="text-xl text-red-100 mb-8">Contact our licensed gas plumbers today for a free estimate.</p>
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
