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
  title: "Tankless Water Heater Installation NJ - Illyrian Plumber",
  description: "Professional tankless water heater installation in East Brunswick and Middlesex County, NJ. Gas and electric systems, free estimates, upfront pricing.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/tankless-water-heater-installation",
  },
  keywords: [
    "tankless water heater installation",
    "tankless water heater install",
    "tankless hot water heater installation",
    "gas tankless water heater installation",
    "electric tankless water heater installation",
    "tank to tankless conversion",
    "on demand water heater installation",
    "tankless water heater NJ",
    "tankless water heater cost NJ",
    "tankless water heater East Brunswick",
    "Middlesex County tankless water heater",
    "Navien tankless installation",
    "Rinnai tankless installation",
    "tankless water heater replacement",
    "tankless water heater maintenance NJ",
    "best tankless water heater NJ",
  ],
  openGraph: {
    title: "Tankless Water Heater Installation NJ - Illyrian Plumber",
    description: "Professional tankless water heater installation in East Brunswick and Middlesex County, NJ. Gas and electric systems, free estimates, upfront pricing.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/tankless-water-heater-installation",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/tankless-water-heater-installation.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber tankless water heater installation service in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tankless Water Heater Installation NJ - Illyrian Plumber",
    description: "Professional tankless water heater installation in East Brunswick and Middlesex County, NJ. Gas and electric systems, free estimates, upfront pricing.",
    images: ["https://www.illyrianplumber.com/images/tankless-water-heater-installation.jpg"],
  },
};

const faqData = [
  {
    question: "How much does tankless water heater installation cost in NJ?",
    answer: "Illyrian Plumber installs tankless water heaters throughout New Jersey for $2,800 to $6,500 installed, including the unit, permit, and inspection. The exact cost depends on the unit type (gas or electric), whether you are converting from a tank system, any gas line or electrical upgrades needed, and the installation location. We provide a free in-home estimate with a detailed written quote so you know the full cost before any work begins.",
  },
  {
    question: "Is it worth switching from a tank to a tankless water heater?",
    answer: "For many NJ homeowners, yes. Tankless water heaters provide endless hot water, use 20-34% less energy than a tank system, last nearly twice as long (20+ years versus 10-12 years for a tank), and free up valuable floor space. Pairing a tankless unit with a water softener helps protect that longer lifespan against New Jersey's hard water. The best way to know if it is right for your home is a free assessment.",
  },
  {
    question: "Do I need to upgrade my gas line for a tankless water heater?",
    answer: "In most tank-to-tankless conversions, yes. Traditional tank water heaters typically use smaller gas lines, while tankless units require larger capacity lines to handle their higher BTU demand. During your free estimate, we'll assess your current gas line and explain any upgrades needed.",
  },
  {
    question: "How long does tankless water heater installation take?",
    answer: "A standard tankless water heater installation typically takes 4-6 hours. Tank-to-tankless conversions requiring gas line upgrades and new venting can take 6-10 hours or may require a follow-up visit. We'll provide a time estimate specific to your installation during the assessment.",
  },
];

export default function TanklessWaterHeaterInstallationPage() {
  const faqSchema = getFaqSchema(faqData);

  const serviceSchema = getServiceSchema({
    name: "Tankless Water Heater Installation",
    description: "Professional tankless water heater installation services in New Jersey. Gas and electric tankless systems installed by licensed master plumbers.",
    slug: "tankless-water-heater-installation",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Tankless Water Heater Installation", path: "/services/tankless-water-heater-installation" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceHero
        tagline="Free In-Home Estimates"
        heading="Tankless Water Heater Installation in NJ"
        subheading="Professional tankless water heater installation by licensed NJ plumbers. Get endless hot water with expert, code-compliant installation. Free estimates with transparent, upfront pricing throughout Middlesex County."
        backgroundImage="/images/tankless-water-heater-installation.jpg"
        backgroundAlt="Tankless water heater installation service in East Brunswick NJ"
        service="Tankless Water Heater Installation"
        bullets={["Gas & Electric Systems", "Licensed & Insured", "All Major Brands"]}
      />

      <StatsStrip />

      {/* Intro + benefits + factors -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* About Illyrian Plumber */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Illyrian Plumber: tankless water heater installation experts in New Jersey</h2>
              <p className="text-gray-700 leading-relaxed">
                Illyrian Plumber has been serving East Brunswick and Middlesex County, NJ with professional plumbing services for over {BUSINESS_INFO.stats.yearsExperience} years. Our licensed master plumbers specialize in tankless water heater installation, tank-to-tankless conversions, and gas line upgrades. We have installed hundreds of tankless systems from top brands including Navien, Rinnai, and Rheem. Every installation is code-compliant, permit-included, and backed by our workmanship guarantee.
              </p>
            </div>

            {/* Free Estimate callout (merged from quick info box) */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Get a free tankless water heater installation estimate</h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Every home is different. The cost of your tankless water heater installation depends on factors like your existing infrastructure, the type of unit, and any upgrades needed. We provide free in-home assessments with detailed, written quotes so you know exactly what to expect, with no surprises and no hidden fees.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Free estimates</span>
                <span>&middot;</span>
                <span>Serving Middlesex County, NJ</span>
              </div>
            </div>

            {/* Why Tankless */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why choose a tankless water heater?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Tankless water heaters, also known as on-demand water heaters, heat water only when you need it, eliminating the energy waste of keeping a large tank hot 24/7. For New Jersey homeowners, switching to a tankless system offers significant benefits that make it a smart long-term investment. Learn more about the differences in our detailed comparison: <Link href="/blog/tankless-vs-tank-water-heater" className="text-red-700 hover:text-red-800 font-medium">Tankless vs. Tank Water Heater</Link>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Endless hot water", desc: "Never run out of hot water during back-to-back showers, laundry, or dishwashing. Perfect for large families or homes with high hot water demand." },
                { title: "Energy efficiency", desc: "Tankless units only heat water on demand, eliminating standby heat loss. Most homeowners see a 20-34% reduction in water heating energy costs." },
                { title: "Space-saving design", desc: "Wall-mounted tankless units free up valuable floor space compared to bulky 40-80 gallon tanks. Ideal for small homes, condos, or utility closets." },
                { title: "Longer lifespan", desc: "Tankless water heaters typically last 20+ years with proper maintenance, nearly double the 10-12 year lifespan of traditional tank heaters." },
                { title: "No flood risk", desc: "Without a large tank of stored water, you eliminate the risk of catastrophic tank failure and water damage to your home." },
                { title: "Increased home value", desc: "Energy-efficient upgrades like tankless water heaters appeal to homebuyers and can increase your property value." },
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>

            {/* Gallery Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our tankless installation work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { src: "/images/tankless-water-heater-installation.jpg", alt: "Tankless water heater installation" },
                { src: "/images/water-heater-repair-service.jpg", alt: "Water heater service" },
                { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Gas line installation for tankless" },
                { src: "/images/water-heater-maintenance-parts.jpg", alt: "Water heater parts and maintenance" },
                { src: "/images/copper-pipe-repiping-service.jpg", alt: "Water line connections" },
                { src: "/images/water-heater-sediment-buildup.jpg", alt: "Water heater maintenance" },
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

            {/* What Affects Your Installation */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What affects your tankless water heater installation cost?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Every tankless water heater installation is unique. During your free assessment, we evaluate several factors to provide an accurate quote and ensure your system performs optimally. For a detailed cost breakdown, read our guide: <Link href="/blog/how-much-does-a-tankless-water-heater-cost" className="text-red-700 hover:text-red-800 font-medium">How Much Does a Tankless Water Heater Cost?</Link>
            </p>

            <div className="space-y-4 mb-12">
              {[
                {
                  title: "Gas vs. electric unit selection",
                  desc: "Gas tankless water heaters offer higher flow rates (8-11 GPM) and are ideal for whole-house applications in NJ's cold climate. Electric units (2-5 GPM) work well for point-of-use applications. We'll recommend the right type based on your hot water needs."
                },
                {
                  title: "Existing infrastructure",
                  desc: "Your home's current gas line capacity, electrical panel, and venting system all impact the installation. Older homes may require upgrades to support a tankless unit's higher demands."
                },
                {
                  title: "Tank-to-tankless conversion",
                  desc: "Converting from a traditional tank water heater to tankless typically requires additional work including gas line upgrades (tankless units need larger gas lines), new venting systems, and water line modifications."
                },
                {
                  title: "Installation location",
                  desc: "Installing in the same location as your existing water heater is simpler. Moving to a new location requires additional piping, venting, and potentially structural considerations."
                },
                {
                  title: "Venting requirements",
                  desc: "Gas tankless water heaters require proper venting to safely exhaust combustion gases. We install Category III stainless steel or PVC venting systems to code specifications."
                },
                {
                  title: "Permit and inspection",
                  desc: "New Jersey requires permits for water heater installations. We handle all permit applications and schedule required inspections, ensuring your installation meets all local codes."
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mid-page CTA Band */}
            <div className="bg-red-700 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to go tankless?</h3>
              <p className="text-red-100 mb-6 max-w-xl mx-auto">Schedule your free in-home assessment. We evaluate your needs, explain options, and provide a detailed quote with no obligation.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
                  Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why Middlesex County chooses us for tankless installation"
        subheading="Six reasons homeowners trust Illyrian Plumber with their hot water system."
        items={[
          { icon: "wrench", title: "Licensed NJ master plumbers", description: "Every technician is a fully licensed, insured NJ plumber with hands-on training in tankless installation and gas line upgrades." },
          { icon: "clock", title: "Hundreds of installs completed", description: "We have installed hundreds of tankless systems across Middlesex County and know the quirks of older East Brunswick and Edison homes." },
          { icon: "dollar", title: "Free estimates, no surprises", description: "A free in-home assessment gets you a detailed written quote before any work starts, so you know the full cost upfront." },
          { icon: "shield", title: "Full warranty protection", description: "Our installation work is backed by a workmanship guarantee, plus you keep the full manufacturer warranty on your unit." },
          { icon: "home", title: "We handle every permit", description: "We pull all required township permits and schedule inspections, so you never have to deal with code compliance yourself." },
          { icon: "bolt", title: "Local service, fast response", description: "Based in East Brunswick, we respond faster than a national chain and know Middlesex County's homes and infrastructure." },
        ]}
      />

      {/* Comparison + sizing + process + brands + maintenance -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Gas vs Electric */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gas vs. electric tankless water heaters</h2>
            <p className="text-lg text-gray-600 mb-6">
              Choosing between gas and electric tankless water heaters depends on your hot water needs, home setup, and preferences. Here&apos;s how they compare for New Jersey homes.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gas tankless</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>High flow rate (8-11 GPM)</li>
                  <li>Ideal for whole-house use</li>
                  <li>Works well in cold NJ winters</li>
                  <li>Lower operating costs</li>
                </ul>
                <p className="text-sm text-gray-600 mb-2"><strong>Considerations:</strong></p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>May need gas line upgrade</li>
                  <li>Requires proper venting</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600 font-medium">Recommended for most NJ homes</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Electric tankless</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>Compact, easy to install</li>
                  <li>No venting required</li>
                  <li>Lower upfront cost</li>
                  <li>Good for point-of-use</li>
                </ul>
                <p className="text-sm text-gray-600 mb-2"><strong>Considerations:</strong></p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>Lower flow rate (2-5 GPM)</li>
                  <li>May need electrical upgrade</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600 font-medium">Best for single bathroom or kitchen</p>
              </div>
            </div>

            {/* Sizing Guide */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing the right size tankless water heater</h2>
            <p className="text-lg text-gray-600 mb-6">
              Proper sizing is critical for tankless water heater performance. An undersized unit will not keep up with your hot water demand, while an oversized unit costs more than necessary. We size every installation based on your specific needs, but here is a general guide for NJ homes. For a more detailed sizing guide, read: <Link href="/blog/what-size-tankless-water-heater" className="text-red-700 hover:text-red-800 font-medium">What Size Tankless Water Heater Do I Need?</Link>
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { title: "1-2 bathroom home", desc: "6-8 GPM gas or 4-5 GPM electric. Handles 1-2 simultaneous hot water uses." },
                { title: "2-3 bathroom home", desc: "8-10 GPM gas recommended. Supports showers, dishwasher, and laundry simultaneously." },
                { title: "3-4 bathroom home", desc: "10-11 GPM gas unit. May need multiple units or a recirculation system for large homes." },
                { title: "Point-of-use application", desc: "2-4 GPM electric. Single fixture like a bathroom sink or kitchen." },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Installation Process */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our tankless water heater installation process</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Illyrian Plumber, we follow a thorough installation process to ensure your tankless water heater is installed correctly, safely, and to code. Here&apos;s what to expect when you work with us.
            </p>

            <div className="space-y-4 mb-12">
              {[
                { step: "1", title: "Free in-home assessment", desc: "We evaluate your hot water needs, inspect gas line capacity, assess electrical availability, and measure for venting requirements. This visit is free with no obligation - you'll receive a detailed written quote." },
                { step: "2", title: "Unit selection", desc: "Based on your assessment, we recommend the right tankless water heater for your home. We'll explain the options, discuss brands, and help you choose the best fit for your needs and budget." },
                { step: "3", title: "Permit acquisition", desc: "We handle all permit applications with your local municipality. In New Jersey, water heater installations require plumbing permits and inspections to ensure safety and code compliance." },
                { step: "4", title: "Infrastructure preparation", desc: "If converting from tank to tankless, we upgrade your gas lines to the required capacity, run any needed electrical, and prepare the mounting location. This ensures your new unit performs optimally." },
                { step: "5", title: "Professional installation", desc: "We mount the tankless unit to a load-bearing wall with proper clearances, connect all water lines, and install code-compliant venting (Category III stainless steel or PVC for gas units)." },
                { step: "6", title: "System testing", desc: "We thoroughly test all connections for leaks, verify proper combustion and venting, check flow rates at multiple fixtures, and set your preferred temperature (typically 120 degrees F for safety)." },
                { step: "7", title: "Inspection and walkthrough", desc: "We schedule the required permit inspection and provide a complete walkthrough of your new system, including how to operate it, maintenance requirements, and warranty information." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                  <div className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Brands */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tankless water heater brands we install</h2>
            <p className="text-lg text-gray-600 mb-6">
              We install and service all major tankless water heater brands. Each offers different features, efficiency ratings, and warranty terms. During your assessment, we&apos;ll recommend the best option based on your specific needs.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { brand: "Navien", note: "Premium condensing technology, highest efficiency" },
                { brand: "Rinnai", note: "Industry leader, excellent warranty coverage" },
                { brand: "Rheem", note: "Great value, widely available replacement parts" },
                { brand: "Noritz", note: "Commercial-grade durability, reliable performance" },
                { brand: "Bosch", note: "Compact design, budget-friendly option" },
                { brand: "Takagi", note: "Proven performance, long operational lifespan" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                  <h3 className="font-bold text-gray-900 text-lg">{item.brand}</h3>
                  <p className="text-sm text-gray-600">{item.note}</p>
                </div>
              ))}
            </div>

            {/* Second Mid-Content CTA */}
            <div className="bg-red-700 text-white rounded-xl p-8 mb-12 text-center">
              <h3 className="text-2xl font-bold mb-3">Get your free tankless installation estimate</h3>
              <p className="text-red-100 mb-6 max-w-xl mx-auto">We will assess your home, recommend the right unit, and provide a detailed written quote. No obligation, no hidden fees.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
                  Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Maintenance */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tankless water heater maintenance</h2>
            <p className="text-lg text-gray-600 mb-6">
              Proper maintenance extends your tankless water heater&apos;s lifespan and ensures efficient operation. New Jersey&apos;s hard water makes regular maintenance especially important.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended maintenance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { task: "Flush heat exchanger", desc: "Remove mineral scale buildup with descaling solution to maintain efficiency", frequency: "Annually" },
                  { task: "Clean inlet filter", desc: "Remove debris from the water inlet screen to ensure proper flow", frequency: "Annually" },
                  { task: "Inspect venting system", desc: "Check for blockages, corrosion, or damage to exhaust venting", frequency: "Annually" },
                  { task: "Test safety controls", desc: "Verify pressure relief valve and error code systems function properly", frequency: "Annually" },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-3">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-semibold text-gray-900">{item.task}</p>
                      <span className="text-green-700 text-sm font-medium">{item.frequency}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-700">
                <strong>Pro tip:</strong> Consider installing a water softener to reduce scale buildup. This can extend maintenance intervals and improve your unit&apos;s efficiency and lifespan.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="Real reviews from tankless water heater installations"
        subheading="See what homeowners across Middlesex County think of their new hot water system."
      />

      {/* FAQ + service areas + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tankless water heater installation throughout Middlesex County</h3>
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
                  { label: "Water Heater Repair", href: "/services/water-heater-repair", description: "Same-day repair for all brands" },
                  { label: "Water Heater Replacement", href: "/services/water-heater-replacement", description: "Upgrade an aging or failing tank" },
                  { label: "Gas Line Services", href: "/services/gas-line-repair-installation", description: "Upgrades for higher BTU tankless demand" },
                  { label: "Boiler Repair", href: "/services/boiler-repair-service", description: "No-heat calls and leaking circulators" },
                  { label: "Whole House Repiping", href: "/services/whole-house-repiping", description: "For homes with outdated supply lines" },
                  { label: "Water Filtration Systems", href: "/services/water-filtration-system", description: "Protect your unit from scale buildup" },
                  { label: "Plumbing Inspections", href: "/services/plumbing-safety-inspections", description: "Catch issues before they affect your system" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Learn more about tankless water heaters"
              tone="dark"
              items={[
                { label: "How Much Does a Tankless Water Heater Cost?", href: "/blog/how-much-does-a-tankless-water-heater-cost", badge: "Guide" },
                { label: "Tankless vs. Tank Water Heater", href: "/blog/tankless-vs-tank-water-heater", badge: "Guide" },
                { label: "What Size Tankless Water Heater Do I Need?", href: "/blog/what-size-tankless-water-heater", badge: "Guide" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to upgrade to a tankless water heater?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us for a free in-home assessment. We&apos;ll evaluate your needs, explain your options, and provide a detailed quote with no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Request Free Estimate
            </Link>
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
