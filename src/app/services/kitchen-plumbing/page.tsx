import { Metadata } from "next";
import Link from "next/link";
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
  title: "Kitchen Plumbing Repair and Remodel in NJ - Illyrian Plumber",
  description: "Licensed kitchen plumbing repair and remodel in East Brunswick and Middlesex County, NJ. Sink, faucet, disposal, and dishwasher hookups. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/kitchen-plumbing",
  },
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
  openGraph: {
    title: "Kitchen Plumbing Repair and Remodel in NJ - Illyrian Plumber",
    description: "Licensed kitchen plumbing repair and remodel in East Brunswick and Middlesex County, NJ. Sink, faucet, disposal, and dishwasher hookups. Call (347) 461-4856.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/kitchen-plumbing",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/professional-plumbing-services.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber kitchen plumbing service in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Plumbing Repair and Remodel in NJ - Illyrian Plumber",
    description: "Licensed kitchen plumbing repair and remodel in East Brunswick and Middlesex County, NJ. Sink, faucet, disposal, and dishwasher hookups. Call (347) 461-4856.",
    images: ["https://www.illyrianplumber.com/images/professional-plumbing-services.jpg"],
  },
};

const faqData = [
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
];

const faqSchema = getFaqSchema(faqData);

export default function KitchenPlumbingPage() {
  const serviceSchema = getServiceSchema({
    name: "Kitchen Plumbing Services",
    description: "Professional kitchen plumbing services in East Brunswick, NJ. Kitchen sink plumbing, repair, remodel, garbage disposal, dishwasher hookup, and appliance connections throughout Middlesex County.",
    slug: "kitchen-plumbing",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Kitchen Plumbing", path: "/services/kitchen-plumbing" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceHero
        tagline="Kitchen Plumbing Specialists"
        heading="Kitchen Plumbing Services"
        subheading="Complete kitchen plumbing repair, remodel, and installation throughout East Brunswick and Middlesex County, NJ. From a leaking kitchen sink to a full kitchen plumbing remodel, our licensed plumbers handle it all."
        backgroundImage="/images/professional-plumbing-services.jpg"
        backgroundAlt="Kitchen plumbing services in East Brunswick NJ"
        service="Kitchen Plumbing"
        bullets={["Repair & Remodel", "Same-Day Service", "Licensed & Insured", "Free Estimates"]}
      />

      <StatsStrip />

      {/* Intro + about + repair services + remodel services -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                The kitchen is the most heavily used plumbing area in any home, and when something goes wrong it disrupts your entire household. Whether you need kitchen plumbing repair for a dripping faucet or a clogged drain, or you are planning a full kitchen plumbing remodel as part of a renovation, Illyrian Plumber provides reliable, licensed <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">plumbing and remodeling services</Link> across Middlesex County, NJ.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Illyrian Plumber - licensed kitchen plumbing specialists in New Jersey</h2>
              <p className="text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in kitchen and residential plumbing in Middlesex County, NJ since 2010. We offer <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">toilet and faucet installation</Link>, <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800">water filtration systems</Link>, <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> throughout East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed.
              </p>
            </div>

            {/* Kitchen Plumbing Repair Services */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kitchen plumbing repair services</h2>
            <p className="text-lg text-gray-600 mb-6">
              Fast, reliable kitchen plumbing repair keeps your kitchen running smoothly. Our plumbers diagnose and fix kitchen plumbing problems the same day in most cases across East Brunswick and surrounding Middlesex County communities.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kitchen faucet repair</h3>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kitchen sink repair</h3>
                <p className="text-gray-600 mb-4">From slow drains to a leaking basket strainer, we handle all types of kitchen sink plumbing repairs quickly and cleanly.</p>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Garbage disposal repair</h3>
                <p className="text-gray-600 mb-4">A jammed, leaking, or non-functioning garbage disposal is one of the most common kitchen plumbing calls we receive. We repair and replace all disposal brands, including InSinkErator and Waste King.</p>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Under-sink plumbing repair</h3>
                <p className="text-gray-600 mb-4">The cabinet under your kitchen sink contains multiple plumbing connections that can develop leaks over time. We inspect and repair all under kitchen sink plumbing components.</p>
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

            {/* Mid-page CTA Band */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Need kitchen plumbing repair?</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kitchen plumbing remodel services</h2>
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">
                Planning a kitchen renovation? Kitchen plumbing remodel work is one of the most important phases of any kitchen project. Moving a sink, adding an island, or relocating appliances all require licensed plumbing work. Getting it right the first time saves you from costly corrections during or after your renovation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our kitchen plumbers work alongside your contractor or independently to handle every plumbing aspect of your remodel. We provide rough-in plumbing before the cabinetry goes in, return for trim-out once cabinets and counters are installed, and coordinate with your timeline to keep the project moving.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { title: "Rough-in plumbing", desc: "New supply and drain rough-in before cabinets and countertops are installed." },
                { title: "Sink relocation", desc: "Move the kitchen sink to a new location, including drain stack tie-in and new supply lines." },
                { title: "Island plumbing", desc: "Add a prep sink or wet bar to a kitchen island with proper drain venting." },
                { title: "Fixture replacement", desc: "Swap out the existing sink and faucet as part of a countertop upgrade or cabinet refresh." },
                { title: "New appliance hookups", desc: "Connect dishwashers, refrigerator ice maker lines, and instant hot water dispensers." },
                { title: "Drain and vent upgrades", desc: "Upgrade undersized drain lines or add proper venting to eliminate slow-drain issues." },
              ].map((service, index) => (
                <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why Middlesex County calls us for kitchen plumbing"
        subheading="Kitchens don't wait for a convenient time to break. Here's what to expect when you call us."
        items={[
          { icon: "shield", title: "Licensed master plumbers", description: "Every technician is a fully licensed NJ plumber, trained on today's fixtures, disposals, and appliance connections." },
          { icon: "clock", title: "Same-day repair in most cases", description: "Faucet, sink, and disposal problems are diagnosed and fixed in a single visit, not scheduled out for next week." },
          { icon: "wrench", title: "All major brands serviced", description: "InSinkErator, Waste King, Kohler, Moen, Delta, and more. We carry parts for the fixtures and disposals homeowners actually have." },
          { icon: "dollar", title: "Free estimates, upfront pricing", description: "You approve the cost before we start. No surprise charges once the cabinet doors are open." },
          { icon: "home", title: "Remodel coordination done right", description: "We handle rough-in before cabinets go in and return for trim-out after counters, working on your contractor's timeline." },
          { icon: "bolt", title: "750+ projects since 2010", description: "A local Middlesex County plumbing company, not a call center, with over a decade of kitchen plumbing experience." },
        ]}
      />

      {/* Sink plumbing + appliances + cost -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Kitchen Sink Plumbing */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kitchen sink plumbing</h2>
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">
                Proper kitchen sink plumbing involves more than just connecting a drain. Every kitchen sink installation requires correctly sized drain lines, a properly configured P-trap and vent, tight supply connections, and a leak-free basket strainer seal. Our plumbers ensure every component is installed to code so you get trouble-free performance for years.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What goes into kitchen sink plumbing</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Supply side</p>
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
                  <p className="font-semibold text-gray-800 mb-2">Drain side</p>
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
                Under kitchen sink plumbing gets crowded quickly once a garbage disposal, dishwasher drain, and water filter are added. Our plumbers organize and configure these connections neatly so the cabinet space remains functional and accessible for future service. We use quality materials and proper clamp fittings to prevent the drips and slow leaks that commonly develop under kitchen sinks over time.
              </p>
            </div>

            {/* Kitchen Appliance Plumbing */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kitchen appliance plumbing</h2>
            <p className="text-lg text-gray-600 mb-6">
              Modern kitchens have more appliances requiring plumbing connections than ever before. Our kitchen plumbing services include all appliance hookups and new water line installations.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                {
                  title: "Dishwasher hookup",
                  desc: "Complete dishwasher installation including hot water supply connection, drain line to disposal or standpipe, and secure mounting. We coordinate with an electrician if a dedicated circuit is needed."
                },
                {
                  title: "Refrigerator water line",
                  desc: "Run a dedicated 1/4-inch copper or stainless supply line for your refrigerator ice maker and water dispenser."
                },
                {
                  title: "Garbage disposal",
                  desc: "Install or replace InSinkErator, Waste King, or any brand disposal with proper drain and electrical connections."
                },
                {
                  title: "Pot filler installation",
                  desc: "Install a wall-mounted pot filler above the range with a new hot water supply line roughed in through the wall."
                },
                {
                  title: "Instant hot water",
                  desc: "Install an under-sink instant hot water dispenser with its own dedicated supply and drain connection."
                },
                {
                  title: "Under-sink water filter",
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
              <h3 className="text-xl font-bold mb-2">Kitchen plumbing help in East Brunswick, NJ</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kitchen plumbing cost guide</h2>
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">
                Understanding typical kitchen plumbing costs in New Jersey helps you plan your budget. These ranges reflect common jobs in Middlesex County. Exact pricing depends on your home&apos;s existing plumbing, access, and the scope of work required.
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

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="Trusted for kitchen plumbing across Middlesex County"
        subheading="Real reviews from real kitchen repair and remodel jobs."
      />

      {/* Signs + service areas + FAQ + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Signs You Need Kitchen Plumbing Help */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs you need kitchen plumbing help</h2>
            <p className="text-lg text-gray-600 mb-6">
              Do not wait for a small problem to become a costly repair. These are the warning signs that mean it is time to call a kitchen plumbing company:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Slow or gurgling kitchen drain",
                "Water pooling under the sink cabinet",
                "Dripping faucet that won't stop",
                "Low water pressure at the kitchen tap",
                "No hot water at the kitchen faucet",
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

            {/* Service Areas -- pill cloud */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kitchen plumbing throughout Middlesex County</h3>
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

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kitchen plumbing FAQs</h2>
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
            <div className="mb-8">
              <LinkCardGrid
                heading="Related services"
                items={[
                  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling", description: "Fixture installation and pipe relocation" },
                  { label: "Toilet & Faucet Installation", href: "/services/toilet-and-faucet-installation", description: "Fixture swaps and new installations" },
                  { label: "Water Filtration System", href: "/services/water-filtration-system", description: "Better water quality at every tap" },
                  { label: "Water Leak Detection", href: "/services/water-leak-detection", description: "Find hidden leaks before they cause damage" },
                  { label: "Whole House Repiping", href: "/services/whole-house-repiping", description: "Replace old galvanized or polybutylene pipe" },
                  { label: "Emergency Plumbing", href: "/services/emergency-plumbing", description: "24/7 response for burst pipes and flooding" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Helpful articles from our blog"
              subheading="Learn more about home plumbing and water quality."
              tone="dark"
              items={[
                { label: "Why Is My Water Pressure Low?", href: "/blog/why-is-water-pressure-low", badge: "Guide" },
                { label: "Is a Whole House Water Filter Worth It?", href: "/blog/whole-house-water-filter-worth-it", badge: "Guide" },
                { label: "How Long Does a Bathroom Remodel Take?", href: "/blog/how-long-bathroom-remodel-take", badge: "Guide" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Your local kitchen plumbing company in East Brunswick, NJ</h2>
          <p className="text-xl text-red-100 mb-8">Repair, remodel, or new installation. We handle all kitchen plumbing in Middlesex County.</p>
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
