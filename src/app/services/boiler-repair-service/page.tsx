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
  title: "Boiler Repair Service East Brunswick, NJ - Illyrian Plumber",
  description: "Expert boiler repair, maintenance, and installation in East Brunswick and Middlesex County, NJ. All major brands, emergency service. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/boiler-repair-service",
  },
  keywords: [
    "boiler repair",
    "boiler repair near me",
    "boiler service",
    "boiler maintenance",
    "steam boiler repair",
    "hot water boiler repair",
    "boiler not working",
    "boiler installation",
    "boiler repair service",
    "boiler repair NJ",
    "boiler technician near me",
    "boiler repair East Brunswick",
    "boiler tune up",
    "boiler replacement",
    "emergency boiler repair",
    "boiler pressure problems",
    "radiator not heating",
    "boiler annual maintenance",
  ],
  openGraph: {
    title: "Boiler Repair Service East Brunswick, NJ - Illyrian Plumber",
    description: "Expert boiler repair, maintenance, and installation in East Brunswick and Middlesex County, NJ. All major brands, emergency service. Call (347) 461-4856.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/boiler-repair-service",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/boiler-repair-service-nj.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber boiler repair service in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boiler Repair Service East Brunswick, NJ - Illyrian Plumber",
    description: "Expert boiler repair, maintenance, and installation in East Brunswick and Middlesex County, NJ. All major brands, emergency service. Call (347) 461-4856.",
    images: ["https://www.illyrianplumber.com/images/boiler-repair-service-nj.jpg"],
  },
};

const faqData = [
  {
    question: "Why is my boiler not working?",
    answer: "There are many reasons a boiler may stop working. Common causes include a tripped circuit breaker or blown fuse, a faulty thermostat, low water pressure, a failed circulator pump, a broken zone valve, a malfunctioning gas valve, or sediment buildup in the system. Our boiler repair technicians can diagnose the exact problem and provide a fast, reliable repair. Call us and we will have a technician to your home quickly.",
  },
  {
    question: "How much does boiler repair cost?",
    answer: "Boiler repair costs depend on the type of repair needed and the parts required. Simple fixes like replacing a thermocouple or resetting a safety switch are on the lower end, while replacing a circulator pump, zone valve, or heat exchanger costs more. At Illyrian Plumber, we provide upfront pricing before starting any work so you know exactly what you are paying. Call us for a free diagnostic assessment.",
  },
  {
    question: "When should I replace my boiler instead of repairing it?",
    answer: "Consider replacing your boiler if it is over 15-20 years old, requires frequent repairs, has a cracked heat exchanger, or is significantly less efficient than modern boilers. Newer high-efficiency boilers can reduce your heating costs by 20-30%. If your annual repair costs are approaching 50% of the cost of a new boiler, replacement is usually the better investment. We can help you evaluate whether repair or replacement makes more sense for your situation.",
  },
  {
    question: "Why is my boiler making banging or kettling noises?",
    answer: "Banging, clanking, or kettling noises in a boiler are usually caused by limescale buildup on the heat exchanger, trapped air in the system, low water flow, or a faulty pump. Kettling - a sound like a boiling kettle - happens when scale restricts water flow through the heat exchanger, causing it to overheat. These noises should not be ignored as they indicate a problem that will worsen over time. Our technicians can flush your system, remove scale buildup, and restore quiet operation.",
  },
];

const faqSchema = getFaqSchema(faqData);

export default function BoilerRepairPage() {
  const serviceSchema = getServiceSchema({
    name: "Boiler Repair Service",
    description: "Expert boiler repair, maintenance, and installation in East Brunswick, NJ. Steam and hot water boilers. Emergency service available.",
    slug: "boiler-repair-service",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Boiler Repair Service", path: "/services/boiler-repair-service" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceHero
        tagline="Heating Specialists"
        heading="Boiler Repair Service in East Brunswick, NJ"
        subheading="Expert boiler repair, maintenance, and installation for New Jersey homes and businesses. We service all types of steam and hot water boilers with fast, reliable service. Boiler not working? Call us now for same-day repair."
        backgroundImage="/images/boiler-repair-service-nj.jpg"
        backgroundAlt="Boiler repair service in East Brunswick NJ"
        service="Boiler Repair"
        bullets={["Steam & Hot Water Boilers", "All Major Brands", "Licensed & Insured", "Emergency Service"]}
      />

      <StatsStrip />

      {/* Intro + services -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                When your boiler stops working on a freezing New Jersey night, you need a boiler repair company that responds fast and fixes the problem right the first time. Illyrian Plumber provides expert boiler repair service throughout East Brunswick and Middlesex County, NJ. Our licensed technicians diagnose and repair all types of steam boilers, hot water boilers, and high-efficiency condensing boilers from every major manufacturer.
              </p>

              {/* About Illyrian Plumber */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6 not-prose">
                <p className="text-lg font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-gray-700 text-base">
                  Illyrian Plumber has been serving Middlesex County homeowners and businesses for over {BUSINESS_INFO.stats.yearsExperience} years. With {BUSINESS_INFO.stats.projectsCompleted} projects completed and {BUSINESS_INFO.stats.happyClients} satisfied clients, we are one of the most trusted plumbing and heating companies in Central New Jersey. Our licensed master plumbers specialize in boiler repair, water heater services, gas line work, emergency plumbing, and whole-house repiping. Based in East Brunswick, we deliver fast, dependable service to every customer.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Many older homes in Middlesex County rely on boiler systems for heating, and these systems require specialized knowledge to repair and maintain. Unlike forced air furnaces that heat air, boilers heat water (or create steam) and distribute it through radiators, baseboard heaters, or radiant floor systems. This means boiler repair requires a plumber with training in both plumbing and heating systems, exactly what our team provides.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need an emergency repair in the middle of winter, annual maintenance to keep your system running efficiently, or a complete boiler installation to replace an aging unit, Illyrian Plumber has the expertise, parts, and equipment to handle the job. We service all major brands including Weil-McLain, Burnham, Peerless, Crown, Buderus, Navien, Viessmann, and Slant/Fin.
              </p>
            </div>

            {/* Services */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete boiler services</h2>
            <p className="text-lg text-gray-600 mb-8">
              From emergency repairs to annual maintenance, we keep your boiler running efficiently all winter. Our licensed technicians service all major boiler brands and types.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-4">
              {[
                { title: "Boiler repair", desc: "Fast diagnosis and repair for all boiler issues - no heat, leaks, strange noises, pressure problems" },
                { title: "Boiler maintenance", desc: "Annual tune-ups and cleaning to prevent breakdowns, improve efficiency, and extend boiler life" },
                { title: "Boiler installation", desc: "New boiler installation and old boiler replacement with high-efficiency modern systems" },
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why Middlesex County trusts us for boiler repair"
        subheading="Steam or hot water, any major brand. Here's what you get when you call Illyrian Plumber."
        items={[
          { icon: "wrench", title: "Every major brand", description: "Weil-McLain, Burnham, Peerless, Crown, Buderus, Navien, Viessmann, and Slant/Fin. One technician who knows them all." },
          { icon: "clock", title: "Same-day repair", description: "Our trucks carry the parts most boiler repairs need, so most jobs finish in a single visit." },
          { icon: "dollar", title: "Upfront pricing", description: "You approve the repair estimate before we start. No surprise charges once the work begins." },
          { icon: "shield", title: "Licensed & insured", description: `NJ Master Plumber license, full insurance, and over ${BUSINESS_INFO.stats.yearsExperience} years repairing steam and hot water systems in Middlesex County.` },
          { icon: "home", title: "Local, not a franchise", description: "Based in East Brunswick. We know the older boiler systems common in Middlesex County homes." },
          { icon: "bolt", title: "Emergency response", description: "A boiler failure in winter cannot wait. We dispatch fast when your heat goes out." },
        ]}
      />

      {/* Detail + gallery + problems + types + tips -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Detailed Service Descriptions */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Boiler repair services in detail</h2>

            <div className="space-y-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Boiler diagnostic &amp; repair</h3>
                <p className="text-gray-700 mb-3">
                  When you call us for <strong>boiler repair near me</strong>, our technician arrives with the diagnostic tools and common replacement parts needed to fix most problems in a single visit. We start by listening to your description of the problem, then perform a systematic diagnostic that includes checking the thermostat and controls, testing the gas valve and ignition system, measuring water pressure and temperature, inspecting the circulator pump and zone valves, examining the heat exchanger for cracks or scale buildup, and testing all safety controls.
                </p>
                <p className="text-gray-700">
                  Once we identify the problem, we provide an upfront repair estimate before starting any work. Most <strong>boiler repairs</strong> can be completed the same day, getting your heat restored as quickly as possible.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Annual boiler maintenance</h3>
                <p className="text-gray-700 mb-3">
                  Regular <strong>boiler maintenance</strong> is the single best thing you can do to prevent breakdowns, improve efficiency, and extend the life of your heating system. Our annual boiler tune up includes cleaning the burner assembly and combustion chamber, testing and adjusting gas pressure, inspecting and cleaning the heat exchanger, checking the flue and venting for proper draft, testing all safety controls and limit switches, checking water pressure and the expansion tank, lubricating the circulator pump, bleeding air from radiators, and testing the system through a full heating cycle.
                </p>
                <p className="text-gray-700">
                  We recommend scheduling your annual <strong>boiler service</strong> in early fall before the heating season begins. This ensures your system is ready for winter and gives us time to order any parts that may be needed before cold weather arrives.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Boiler installation &amp; replacement</h3>
                <p className="text-gray-700 mb-3">
                  If your boiler is beyond repair or more than 20 years old, a new <strong>boiler installation</strong> can dramatically improve your home comfort and reduce your heating bills. Modern high-efficiency boilers operate at 95% efficiency or higher, compared to 65-80% for older models. This means you get more heat from every dollar of gas you burn.
                </p>
                <p className="text-gray-700">
                  Our <strong>boiler replacement</strong> service includes helping you select the right size and type of boiler for your home, removing and disposing of your old boiler, installing the new unit with all necessary piping connections, connecting to your existing distribution system (radiators, baseboard, or radiant floor), testing the complete system, and providing instructions on operating your new boiler. We install boilers from all major manufacturers and can recommend the best option based on your home size, heating needs, and budget.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency boiler repair</h3>
                <p className="text-gray-700">
                  A boiler failure during a New Jersey winter is a true emergency. Without heat, pipes can freeze and burst, causing thousands of dollars in water damage. We provide fast response when your heat goes out during cold weather, carrying common boiler parts on our trucks including thermocouples, ignition controls, circulator pumps, zone valves, and pressure relief valves. This allows us to complete many emergency repairs in a single visit without waiting for parts. Call our emergency line anytime, day or night, weekdays or weekends, and we will dispatch a technician to your home as quickly as possible.
                </p>
              </div>
            </div>

            {/* Mid-page CTA Band */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12 text-center">
              <h3 className="text-2xl font-bold mb-3">Boiler not working? We can help.</h3>
              <p className="text-red-100 mb-4">Fast, expert boiler repair service throughout Middlesex County. Same-day service available.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our boiler repair work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { src: "/images/boiler-repair-service-nj.jpg", alt: "Boiler repair service" },
                { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Boiler pressure gauge service" },
                { src: "/images/copper-pipe-repiping-service.jpg", alt: "Boiler pipe connections" },
                { src: "/images/water-heater-maintenance-parts.jpg", alt: "Boiler parts and maintenance" },
                { src: "/images/tankless-water-heater-installation.jpg", alt: "Heating system installation" },
                { src: "/images/professional-plumbing-services.jpg", alt: "Professional plumbing service" },
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

            {/* Common Problems */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common boiler problems we fix</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our <strong>boiler repair</strong> technicians handle every type of boiler issue. Here are the most common problems homeowners call us about:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "No heat or insufficient heat throughout the home",
                "Boiler not firing or igniting",
                "Strange noises - banging, whistling, kettling",
                "Water leaks around the boiler or piping",
                "Pilot light keeps going out",
                "Boiler pressure too high or too low",
                "Thermostat not communicating with boiler",
                "Radiator not heating or heating unevenly",
                "Boiler short cycling (turning on and off rapidly)",
                "Frozen condensate pipe in cold weather",
              ].map((problem, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>

            {/* Boiler Types */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Boiler types we service</h2>
            <p className="text-lg text-gray-600 mb-6">
              We repair and maintain every type of residential boiler system found in Middlesex County homes:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Steam boilers</h3>
                <p className="text-gray-600 mb-3">Traditional steam heating systems common in older NJ homes. We repair and maintain cast iron radiator systems, including valve replacement, pipe repairs, and pressuretrol adjustments.</p>
                <p className="text-gray-600"><strong>Steam boiler repair</strong> requires specialized knowledge of steam pressure, water levels, and the unique components of steam heating systems. Our technicians have extensive experience with these older but reliable systems.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hot water boilers</h3>
                <p className="text-gray-600 mb-3">Hydronic heating systems using circulating hot water through baseboard radiators or radiant floor tubing. More efficient and quieter than steam systems, hot water boilers are the most popular heating choice in modern NJ homes.</p>
                <p className="text-gray-600"><strong>Hot water boiler repair</strong> involves circulator pumps, zone valves, expansion tanks, and the piping network that distributes heat throughout your home. We service both standard and high-efficiency condensing models.</p>
              </div>
            </div>

            {/* Maintenance Tips */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Boiler maintenance tips for homeowners</h2>
            <p className="text-lg text-gray-700 mb-4">
              While professional annual <strong>boiler maintenance</strong> is essential, there are several things you can do between service visits to keep your boiler running well:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4">
              <li>Check boiler pressure monthly during heating season - it should typically read between 12-15 PSI for hot water systems</li>
              <li>Bleed radiators if you notice cold spots at the top - trapped air reduces heating efficiency</li>
              <li>Keep the area around your boiler clear of storage and debris for proper ventilation</li>
              <li>Listen for unusual noises and report them to your plumber before they become major problems</li>
              <li>Check the condensate drain on high-efficiency boilers to make sure it is not frozen or blocked</li>
              <li>Test your carbon monoxide detectors monthly - boilers that are not functioning properly can produce CO</li>
            </ul>
            <p className="text-lg text-gray-700 mb-12">
              If you notice any changes in your boiler&apos;s performance, unusual smells, or visible leaks, do not wait for your annual service. Call us for a <strong>boiler repair near me</strong> appointment before a small issue becomes an expensive repair.
            </p>

            {/* Second CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-3">Schedule your boiler service today</h3>
              <p className="text-gray-300 mb-4">Expert boiler repair, maintenance, and installation. Serving all of Middlesex County, NJ.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
                  Call Niti: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                  Call Danny: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="What our boiler repair customers say"
        subheading="Real reviews from real heating and plumbing jobs across Middlesex County."
      />

      {/* FAQ + service areas + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Boiler repair FAQs</h2>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Boiler repair throughout Middlesex County</h3>
              <div className="flex flex-wrap gap-2">
                {["East Brunswick", "Edison", "Old Bridge", "Sayreville", "South Brunswick", "North Brunswick", "Monroe Township"].map((area) => {
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
                  { label: "Emergency Plumbing", href: "/services/emergency-plumbing", description: "24/7 response for burst pipes and no-heat emergencies" },
                  { label: "Water Heater Repair", href: "/services/water-heater-repair", description: "Same-day repair for all water heater brands" },
                  { label: "Gas Line Repair & Installation", href: "/services/gas-line-repair-installation", description: "Licensed gas line work and safety inspections" },
                  { label: "Radiant Heating", href: "/services/radiant-heating-plumbing", description: "Radiant floor heating installation and repair" },
                  { label: "Whole House Repiping", href: "/services/whole-house-repiping", description: "Full repiping for older homes and renovations" },
                  { label: "Plumbing Safety Inspections", href: "/services/plumbing-safety-inspections", description: "Catch problems before they become expensive repairs" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Helpful resources from our blog"
              tone="dark"
              items={[
                { label: "Common Boiler Problems in Winter", href: "/blog/common-boiler-problems-winter", badge: "Guide" },
                { label: "Gas Leak Detection & Safety", href: "/blog/gas-leak-detection-safety", badge: "Guide" },
                { label: "Frozen Pipes Prevention & Repair", href: "/blog/frozen-pipes-prevention-repair", badge: "Guide" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Boiler not working?</h2>
          <p className="text-xl text-red-100 mb-8">Get fast, expert boiler repair service today.</p>
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
