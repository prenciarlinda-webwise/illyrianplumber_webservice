import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";
import {
  getLocalBusinessSchema,
  getServiceSchema,
  getFaqSchema,
  getBreadcrumbSchema,
} from "@/lib/schemas";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Boiler Repair Service East Brunswick NJ",
  description: "Expert boiler repair, maintenance, and installation in East Brunswick & Middlesex County NJ. Steam and hot water boiler repair, emergency boiler service, annual maintenance. Call (347) 461-4856.",
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
    title: "Boiler Repair Service East Brunswick NJ",
    description: "Expert boiler repair, maintenance, and installation in East Brunswick & Middlesex County NJ. Steam and hot water boiler repair, emergency service.",
    type: "website",
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
    question: "How often should I have my boiler serviced?",
    answer: "We recommend annual boiler maintenance before each heating season, ideally in early fall before you need to turn on your heat. Annual service includes cleaning the burner assembly, checking gas connections for leaks, testing safety controls, inspecting the heat exchanger, checking water pressure and temperature, and flushing the system if needed. Regular maintenance extends your boiler's lifespan, improves efficiency, and prevents unexpected breakdowns during cold weather.",
  },
  {
    question: "Do you repair both steam and hot water boilers?",
    answer: "Yes, we service and repair both steam boilers and hot water (hydronic) boilers. Steam boilers are common in older New Jersey homes and use steam pressure to heat cast iron radiators. Hot water boilers circulate heated water through baseboard radiators or radiant floor systems. Our technicians are experienced with both systems and carry parts for the most common repairs.",
  },
  {
    question: "When should I replace my boiler instead of repairing it?",
    answer: "Consider replacing your boiler if it is over 15-20 years old, requires frequent repairs, has a cracked heat exchanger, or is significantly less efficient than modern boilers. Newer high-efficiency boilers can reduce your heating costs by 20-30%. If your annual repair costs are approaching 50% of the cost of a new boiler, replacement is usually the better investment. We can help you evaluate whether repair or replacement makes more sense for your situation.",
  },
  {
    question: "Why is my boiler making banging or kettling noises?",
    answer: "Banging, clanking, or kettling noises in a boiler are usually caused by limescale buildup on the heat exchanger, trapped air in the system, low water flow, or a faulty pump. Kettling - a sound like a boiling kettle - happens when scale restricts water flow through the heat exchanger, causing it to overheat. These noises should not be ignored as they indicate a problem that will worsen over time. Our technicians can flush your system, remove scale buildup, and restore quiet operation.",
  },
  {
    question: "Do you offer emergency boiler repair service?",
    answer: "Yes, we provide emergency boiler repair service when your heat goes out during cold weather. A boiler failure in winter is a true emergency - frozen pipes, property damage, and unsafe living conditions can result from a home without heat. Call our emergency line and we will dispatch a technician as quickly as possible. We carry common boiler parts on our trucks for faster repairs.",
  },
  {
    question: "What boiler brands do you service?",
    answer: "We service and repair all major boiler brands including Weil-McLain, Burnham, Peerless, Crown, Buderus, Navien, Viessmann, Slant/Fin, and others. Whether you have a residential steam boiler, a hot water baseboard system, or a high-efficiency condensing boiler, our technicians have the training and experience to diagnose and repair it.",
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

  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <ServiceHero
        tagline="Heating Specialists"
        heading="Boiler Repair Service in East Brunswick, NJ"
        subheading="Expert boiler repair, maintenance, and installation for New Jersey homes and businesses. We service all types of steam and hot water boilers with fast, reliable service. Boiler not working? Call us now for same-day repair."
        backgroundImage="/images/boiler-repair-service-nj.jpg"
        backgroundAlt="Boiler repair service in East Brunswick NJ"
        service="Boiler Repair"
        bullets={["Steam & Hot Water Boilers", "All Major Brands", "Licensed & Insured", "Emergency Service"]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Main Content */}
            <div className="lg:w-2/3">

              {/* Intro */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  When your <strong>boiler is not working</strong> on a freezing New Jersey night, you need a <strong>boiler repair</strong> company that responds fast and fixes the problem right the first time. Illyrian Plumber provides expert <strong>boiler repair service</strong> throughout East Brunswick and Middlesex County, NJ. Our licensed technicians diagnose and repair all types of steam boilers, hot water boilers, and high-efficiency condensing boilers from every major manufacturer.
                </p>

                {/* About Illyrian Plumber */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6 not-prose">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">About Illyrian Plumber</h3>
                  <p className="text-gray-700 text-base">
                    Illyrian Plumber has been serving Middlesex County homeowners and businesses for over {BUSINESS_INFO.stats.yearsExperience} years. With {BUSINESS_INFO.stats.projectsCompleted} projects completed and {BUSINESS_INFO.stats.happyClients} satisfied clients, we are one of the most trusted plumbing and heating companies in Central New Jersey. Our licensed master plumbers specialize in boiler repair, water heater services, gas line work, emergency plumbing, and whole-house repiping. Based in East Brunswick, we deliver fast, dependable service to every customer.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Many older homes in Middlesex County rely on boiler systems for heating, and these systems require specialized knowledge to repair and maintain. Unlike forced air furnaces that heat air, boilers heat water (or create steam) and distribute it through radiators, baseboard heaters, or radiant floor systems. This means <strong>boiler repair</strong> requires a plumber with training in both plumbing and heating systems - exactly what our team provides.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you need an <strong>emergency boiler repair</strong> in the middle of winter, annual <strong>boiler maintenance</strong> to keep your system running efficiently, or a complete <strong>boiler installation</strong> to replace an aging unit, Illyrian Plumber has the expertise, parts, and equipment to handle the job. We service all major brands including Weil-McLain, Burnham, Peerless, Crown, Buderus, Navien, and Viessmann.
                </p>
              </div>

              {/* Services */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Boiler Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                From emergency repairs to annual maintenance, we keep your boiler running efficiently all winter. Our licensed technicians service all major boiler brands and types.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { title: "Boiler Repair", desc: "Fast diagnosis and repair for all boiler issues - no heat, leaks, strange noises, pressure problems" },
                  { title: "Boiler Maintenance", desc: "Annual tune-ups and cleaning to prevent breakdowns, improve efficiency, and extend boiler life" },
                  { title: "Boiler Installation", desc: "New boiler installation and old boiler replacement with high-efficiency modern systems" },
                ].map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>

              {/* Detailed Service Descriptions */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Boiler Repair Services in Detail</h2>

              <div className="space-y-8 mb-12">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Boiler Diagnostic & Repair</h3>
                  <p className="text-gray-700 mb-3">
                    When you call us for <strong>boiler repair near me</strong>, our technician arrives with the diagnostic tools and common replacement parts needed to fix most problems in a single visit. We start by listening to your description of the problem, then perform a systematic diagnostic that includes checking the thermostat and controls, testing the gas valve and ignition system, measuring water pressure and temperature, inspecting the circulator pump and zone valves, examining the heat exchanger for cracks or scale buildup, and testing all safety controls.
                  </p>
                  <p className="text-gray-700">
                    Once we identify the problem, we provide an upfront repair estimate before starting any work. Most <strong>boiler repairs</strong> can be completed the same day, getting your heat restored as quickly as possible.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Annual Boiler Maintenance</h3>
                  <p className="text-gray-700 mb-3">
                    Regular <strong>boiler maintenance</strong> is the single best thing you can do to prevent breakdowns, improve efficiency, and extend the life of your heating system. Our annual <strong>boiler tune up</strong> includes cleaning the burner assembly and combustion chamber, testing and adjusting gas pressure, inspecting and cleaning the heat exchanger, checking the flue and venting for proper draft, testing all safety controls and limit switches, checking water pressure and the expansion tank, lubricating the circulator pump, bleeding air from radiators, and testing the system through a full heating cycle.
                  </p>
                  <p className="text-gray-700">
                    We recommend scheduling your annual <strong>boiler service</strong> in early fall before the heating season begins. This ensures your system is ready for winter and gives us time to order any parts that may be needed before cold weather arrives.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Boiler Installation & Replacement</h3>
                  <p className="text-gray-700 mb-3">
                    If your boiler is beyond repair or more than 20 years old, a new <strong>boiler installation</strong> can dramatically improve your home comfort and reduce your heating bills. Modern high-efficiency boilers operate at 95% efficiency or higher, compared to 65-80% for older models. This means you get more heat from every dollar of gas you burn.
                  </p>
                  <p className="text-gray-700">
                    Our <strong>boiler replacement</strong> service includes helping you select the right size and type of boiler for your home, removing and disposing of your old boiler, installing the new unit with all necessary piping connections, connecting to your existing distribution system (radiators, baseboard, or radiant floor), testing the complete system, and providing instructions on operating your new boiler. We install boilers from all major manufacturers and can recommend the best option based on your home size, heating needs, and budget.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Boiler Repair</h3>
                  <p className="text-gray-700">
                    A boiler failure during a New Jersey winter is a true emergency. Without heat, pipes can freeze and burst, causing thousands of dollars in water damage. Our <strong>emergency boiler repair</strong> service provides fast response when your heat goes out during cold weather. We carry common boiler parts on our trucks including thermocouples, ignition controls, circulator pumps, zone valves, and pressure relief valves. This allows us to complete many emergency repairs in a single visit without waiting for parts. Call our emergency line anytime - day or night, weekdays or weekends - and we will dispatch a <strong>boiler technician near me</strong> to your home as quickly as possible.
                  </p>
                </div>
              </div>

              {/* Mid-content CTA */}
              <div className="bg-red-700 text-white rounded-xl p-6 mb-12 text-center">
                <h3 className="text-2xl font-bold mb-3">Boiler Not Working? We Can Help.</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Boiler Repair Work</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Boiler Problems We Fix</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Boiler Types We Service</h2>
              <p className="text-lg text-gray-600 mb-6">
                We repair and maintain every type of residential boiler system found in Middlesex County homes:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Steam Boilers</h3>
                  <p className="text-gray-600 mb-3">Traditional steam heating systems common in older NJ homes. We repair and maintain cast iron radiator systems, including valve replacement, pipe repairs, and pressuretrol adjustments.</p>
                  <p className="text-gray-600"><strong>Steam boiler repair</strong> requires specialized knowledge of steam pressure, water levels, and the unique components of steam heating systems. Our technicians have extensive experience with these older but reliable systems.</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Hot Water Boilers</h3>
                  <p className="text-gray-600 mb-3">Hydronic heating systems using circulating hot water through baseboard radiators or radiant floor tubing. More efficient and quieter than steam systems, hot water boilers are the most popular heating choice in modern NJ homes.</p>
                  <p className="text-gray-600"><strong>Hot water boiler repair</strong> involves circulator pumps, zone valves, expansion tanks, and the piping network that distributes heat throughout your home. We service both standard and high-efficiency condensing models.</p>
                </div>
              </div>

              {/* Maintenance Tips */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Boiler Maintenance Tips for Homeowners</h2>
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
              <p className="text-lg text-gray-700 mb-8">
                If you notice any changes in your boiler&apos;s performance, unusual smells, or visible leaks, do not wait for your annual service. Call us for a <strong>boiler repair near me</strong> appointment before a small issue becomes an expensive repair.
              </p>

              {/* Second CTA */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 text-center">
                <h3 className="text-2xl font-bold mb-3">Schedule Your Boiler Service Today</h3>
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

              {/* Related Blog Posts */}
              <div className="bg-gray-50 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources from Our Blog</h3>
                <p className="text-gray-600 mb-4">Learn more about boiler care and related plumbing topics:</p>
                <div className="space-y-3">
                  <Link href="/blog/common-boiler-problems-winter" className="block text-red-700 hover:text-red-800 font-medium">
                    Common Boiler Problems in Winter - Prevention & Solutions →
                  </Link>
                  <Link href="/blog/gas-leak-detection-safety" className="block text-red-700 hover:text-red-800 font-medium">
                    Gas Leak Detection & Safety - What Every Homeowner Should Know →
                  </Link>
                  <Link href="/blog/frozen-pipes-prevention-repair" className="block text-red-700 hover:text-red-800 font-medium">
                    Frozen Pipes Prevention & Repair Guide →
                  </Link>
                </div>
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Boiler Repair FAQs</h2>
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
                  <Link href="/services/radiant-heating-plumbing" className="text-red-700 hover:text-red-800 font-medium">Radiant Heating →</Link>
                  <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 font-medium">Gas Line Services →</Link>
                  <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800 font-medium">Water Heater Repair →</Link>
                  <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections →</Link>
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Plumbing →</Link>
                  <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping →</Link>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:w-1/3">
              <div className="lg:sticky lg:top-24 space-y-6">

                {/* Call Now Box */}
                <div className="bg-red-700 text-white rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Boiler Not Working?</h3>
                  <p className="text-red-100 mb-4 text-sm">Fast, expert boiler repair - call now</p>
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
                    <li><Link href="/services/radiant-heating-plumbing" className="text-red-700 hover:text-red-800">Radiant Heating</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">Whole House Repiping</Link></li>
                  </ul>
                </div>

                {/* Related Blog Posts */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Related Blog Posts</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/blog/common-boiler-problems-winter" className="text-red-700 hover:text-red-800">
                        Common Boiler Problems in Winter →
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/gas-leak-detection-safety" className="text-red-700 hover:text-red-800">
                        Gas Leak Detection & Safety →
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/frozen-pipes-prevention-repair" className="text-red-700 hover:text-red-800">
                        Frozen Pipes Prevention & Repair →
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
          <h2 className="text-3xl font-bold mb-4">Boiler Not Working?</h2>
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
    </>
  );
}
