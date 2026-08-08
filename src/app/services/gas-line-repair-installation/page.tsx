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
  title: "Gas Line Repair and Installation NJ - Illyrian Plumber",
  description: "Licensed gas line repair and installation in East Brunswick and Middlesex County, NJ. Gas leak repair, appliance hookups, and new lines. Call (347) 461-4856.",
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
    title: "Gas Line Repair and Installation NJ - Illyrian Plumber",
    description: "Licensed gas line repair and installation in East Brunswick and Middlesex County, NJ. Gas leak repair, appliance hookups, and new lines.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/gas-line-repair-installation",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/gas-line-pressure-gauge-installation.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber gas line repair and installation service in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gas Line Repair and Installation NJ - Illyrian Plumber",
    description: "Licensed gas line repair and installation in East Brunswick and Middlesex County, NJ. Gas leak repair, appliance hookups, and new lines.",
    images: ["https://www.illyrianplumber.com/images/gas-line-pressure-gauge-installation.jpg"],
  },
};

const faqData = [
  {
    question: "How much does gas line repair cost?",
    answer: "Gas line repair costs vary depending on the type of repair, the location of the leak, and the materials needed. Simple connection repairs may cost less than major pipe replacements. At Illyrian Plumber, we always provide a detailed, upfront estimate before beginning any gas line work. Call us for a free assessment and quote. We believe in transparent pricing with no hidden fees.",
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
    question: "What should I do if I smell gas in my home?",
    answer: "If you smell gas, leave your home immediately. Do not turn on or off any lights, use your phone inside, or start your car in the garage. Once you are safely outside, call your gas utility company's emergency line, then call us for repairs. Do not re-enter the home until the gas company has confirmed it is safe. Gas leaks are extremely dangerous and should always be treated as an emergency.",
  },
];

const faqSchema = getFaqSchema(faqData);

export default function GasLineRepairPage() {
  const serviceSchema = getServiceSchema({
    name: "Gas Line Repair & Installation",
    description: "Licensed gas line repair, installation, and safety inspections in East Brunswick, NJ. Expert gas plumbers for appliance hookups, leak repair, and new gas lines.",
    slug: "gas-line-repair-installation",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gas Line Repair & Installation", path: "/services/gas-line-repair-installation" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceHero
        tagline="Licensed Gas Plumbers"
        heading="Gas Line Repair & Installation in East Brunswick, NJ"
        subheading="Professional gas line services from licensed plumbers. We handle gas leak repair, new gas line installation, gas appliance hookups, gas pipe replacement, and safety inspections throughout Middlesex County, NJ."
        backgroundImage="/images/gas-line-pressure-gauge-installation.jpg"
        backgroundAlt="Gas line repair and installation service in East Brunswick NJ"
        service="Gas Line Repair & Installation"
        bullets={["Gas Leak Repair", "Appliance Hookups", "Licensed & Insured", "Free Estimates"]}
      />

      <StatsStrip />

      {/* Intro + services + detail -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need a gas leak repair, a new gas line installation for a kitchen remodel, or a professional gas appliance hookup, Illyrian Plumber provides expert gas line services throughout East Brunswick and Middlesex County, NJ. Our licensed gas plumbers handle every aspect of residential and commercial gas piping with the expertise and attention to safety that gas work demands.
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
                We serve homeowners across Middlesex County including East Brunswick, Edison, Old Bridge, Sayreville, Monroe Township, South Brunswick, and North Brunswick. Whether you are building a new home, renovating a kitchen, adding a gas fireplace, or dealing with a gas pipe repair emergency, our team has the experience and equipment to handle the job safely and efficiently.
              </p>
            </div>

            {/* Services */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our gas line services</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gas line services in detail</h2>

            <div className="space-y-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gas leak repair, emergency response</h3>
                <p className="text-gray-700 mb-3">
                  A gas leak repair requires immediate attention from a licensed gas plumber. Natural gas is highly flammable and can be lethal in confined spaces. Our emergency gas leak repair service includes rapid response, electronic leak detection to pinpoint the exact location, professional repair using code-compliant materials, and thorough pressure testing to verify the repair is complete and safe.
                </p>
                <p className="text-gray-700">
                  Common causes of gas leaks include corroded pipes, loose fittings, damaged appliance connectors, improper installations by unlicensed workers, and ground shifting that stresses buried gas lines. Our gas plumber team arrives equipped with the tools and materials needed to handle any gas leak situation. We also test for carbon monoxide to ensure your home is safe before we leave.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">New gas line installation</h3>
                <p className="text-gray-700 mb-3">
                  Planning a kitchen remodel and switching to a gas stove? Adding a gas fireplace to your living room? Want to connect a natural gas grill to eliminate propane tanks? Our gas line installation service handles every type of new gas line project. We work with you to plan the optimal route for new gas piping, handle all permit applications, install the lines using approved materials and methods, and test everything before connecting your appliances.
                </p>
                <p className="text-gray-700">
                  Our gas pipe installation team uses black iron pipe, corrugated stainless steel tubing (CSST), and other code-approved materials depending on the application. We size the pipe correctly based on the BTU requirements of your appliances and the distance from the gas meter to ensure proper gas flow. Undersized gas lines cause poor appliance performance and can be dangerous, which is why proper sizing by a licensed natural gas plumber is critical.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gas appliance hookup</h3>
                <p className="text-gray-700 mb-3">
                  Every gas appliance in your home needs a proper, code-compliant connection. Our gas appliance hookup service covers all types of gas-powered equipment including gas stoves and ranges, gas dryers, gas water heaters and tankless water heaters, gas fireplaces and inserts, boilers and furnaces, outdoor gas grills and fire pits, pool and spa heaters, and standby generators.
                </p>
                <p className="text-gray-700">
                  Each gas stove hookup or gas dryer hookup includes a flexible connector installation, shut-off valve installation or verification, leak testing on all connections, and verification that the appliance is operating correctly. We also verify that your gas line has adequate capacity for the new appliance. If a gas meter upgrade is needed, we coordinate directly with your utility company.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gas line inspection</h3>
                <p className="text-gray-700">
                  A professional gas line inspection is essential for home safety, real estate transactions, and insurance requirements. Our comprehensive gas line inspection includes testing all gas connections and fittings for leaks, inspecting the condition of gas piping throughout the home, verifying proper pipe sizing for all connected appliances, checking gas appliance connectors and shut-off valves, inspecting gas venting systems for proper operation, and providing a detailed written report of our findings. We recommend annual gas line inspections for homes with older gas piping systems to catch small problems before they become dangerous.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why choose our gas line plumbers"
        subheading="Gas work demands specialized licensing and training. Here is what that looks like on every job."
        items={[
          { icon: "shield", title: "Fully licensed and insured", description: "Every gas line technician holds an active NJ plumbing license, required by state law for gas piping work, and carries full insurance coverage." },
          { icon: "wrench", title: "Code compliant work", description: "We pull the required permits and install every gas line to current state and local building codes, not shortcuts." },
          { icon: "eye", title: "Pressure tested and verified", description: "Every connection gets a pressure test and electronic leak check before we consider a job finished." },
          { icon: "bolt", title: "Correct pipe sizing", description: "We size gas piping to the BTU load of your appliances and the distance from the meter, so every appliance gets full gas flow." },
          { icon: "home", title: "Code-approved materials", description: "We install with black iron pipe, CSST, and other materials approved for durability and long-term safety." },
          { icon: "dollar", title: "Backed by a warranty", description: "Our gas line repairs and installations are backed by a workmanship warranty for your peace of mind." },
        ]}
      />

      {/* CTA + gallery + signs + cost -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Mid-page CTA Band */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12 text-center">
              <h3 className="text-2xl font-bold mb-3">Need gas line service?</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our gas line work</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs of gas line problems</h2>
            <p className="text-lg text-gray-600 mb-6">
              Knowing the warning signs of gas line issues can save your life. Contact a gas plumber immediately if you notice any of these signs:
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gas line repair cost, what to expect</h2>
            <p className="text-lg text-gray-700 mb-4">
              The cost of gas line repair depends on several factors including the type and location of the problem, the materials needed, and whether permits are required. Simple fixes like tightening a loose fitting or replacing a flexible connector are on the lower end of the cost spectrum. More involved repairs such as replacing a corroded section of gas pipe or rerouting a gas line will cost more.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              New gas line installation costs depend on the distance from your gas meter to the new appliance location, the pipe size required, and whether the installation is inside or outside the home. Running a gas line through finished walls or ceilings requires more labor than installing pipe in an unfinished basement or crawl space.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              At Illyrian Plumber, we provide detailed, written estimates before beginning any gas line work. Our pricing is transparent and competitive: you will know exactly what you are paying for before we start, and we never add hidden fees or surprise charges. Call us today for a free gas line repair cost estimate.
            </p>

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="What our gas line customers say"
        subheading="Real reviews from licensed gas leak repairs and new installations."
      />

      {/* Second CTA + FAQ + service areas + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Second CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to schedule gas line service?</h3>
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

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gas line repair & installation FAQs</h2>
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

            {/* Service Areas -- pill cloud */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gas line service throughout Middlesex County</h3>
              <div className="flex flex-wrap gap-2">
                {["East Brunswick", "Edison", "North Brunswick", "South Brunswick", "Old Bridge", "Sayreville", "Monroe Township", "New Brunswick", "Highland Park", "Milltown", "South River", "Spotswood"].map((area) => {
                  const slug = area.toLowerCase().replace(/\s+/g, "-");
                  const hasPage = ["east-brunswick", "edison", "north-brunswick", "south-brunswick", "old-bridge", "sayreville", "monroe-township"].includes(slug);
                  return hasPage ? (
                    <Link key={area} href={`/service-areas/${slug}`} className="bg-red-50 px-3 py-1.5 rounded-full text-sm font-medium text-red-700 border border-red-200 hover:bg-red-100 transition">{area}</Link>
                  ) : (
                    <span key={area} className="bg-gray-100 px-3 py-1.5 rounded-full text-sm text-gray-600 border border-gray-200">{area}</span>
                  );
                })}
              </div>
            </div>

            {/* Related Services */}
            <div className="mb-8">
              <LinkCardGrid
                heading="Related services"
                items={[
                  { label: "Emergency Plumbing", href: "/services/emergency-plumbing", description: "24/7 response for burst pipes and gas leaks" },
                  { label: "Water Heater Repair", href: "/services/water-heater-repair", description: "Repairs and replacements for tank and tankless units" },
                  { label: "Boiler Repair", href: "/services/boiler-repair-service", description: "No-heat calls and leaking circulators" },
                  { label: "Tankless Water Heater Installation", href: "/services/tankless-water-heater-installation", description: "Endless hot water with a gas line assessment" },
                  { label: "Whole House Repiping", href: "/services/whole-house-repiping", description: "Replace old galvanized or polybutylene pipe" },
                  { label: "Plumbing Safety Inspections", href: "/services/plumbing-safety-inspections", description: "Catch gas and water issues before they become emergencies" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Learn more about gas line safety"
              tone="dark"
              items={[
                { label: "Gas Leak Detection & Safety", href: "/blog/gas-leak-detection-safety", badge: "Guide" },
                { label: "Common Boiler Problems in Winter", href: "/blog/common-boiler-problems-winter", badge: "Guide" },
                { label: "How to Light a Gas Water Heater", href: "/blog/how-to-light-a-gas-water-heater", badge: "How-to" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need gas line service?</h2>
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
