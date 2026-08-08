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
  title: "Commercial Plumbing East Brunswick, NJ - Illyrian Plumber",
  description: "Licensed commercial plumbing contractors serving East Brunswick and Middlesex County, NJ. Kitchen, bathroom, gas line, 24/7 service. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/commercial-plumbing",
  },
  keywords: [
    "commercial plumbing",
    "commercial plumbing near me",
    "commercial plumbing services",
    "commercial plumbing repair",
    "commercial plumbing contractors",
    "commercial plumbing maintenance",
    "commercial plumbing installation",
    "commercial plumbing company",
    "commercial plumber NJ",
    "commercial plumber East Brunswick",
    "commercial kitchen plumbing",
    "commercial bathroom plumbing",
    "commercial pipe repair",
    "commercial leak detection",
    "commercial gas line installation",
    "commercial rough-in plumbing",
    "Middlesex County commercial plumbing",
    "business plumber NJ",
  ],
  openGraph: {
    title: "Commercial Plumbing East Brunswick, NJ - Illyrian Plumber",
    description: "Licensed commercial plumbing contractors serving East Brunswick and Middlesex County, NJ. Kitchen, bathroom, gas line, 24/7 service. Call (347) 461-4856.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/commercial-plumbing",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/professional-plumbing-services.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber commercial plumbing services in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Plumbing East Brunswick, NJ - Illyrian Plumber",
    description: "Licensed commercial plumbing contractors serving East Brunswick and Middlesex County, NJ. Kitchen, bathroom, gas line, 24/7 service. Call (347) 461-4856.",
    images: ["https://www.illyrianplumber.com/images/professional-plumbing-services.jpg"],
  },
};

const faqData = [
  {
    question: "How much does commercial plumbing service cost?",
    answer: "Commercial plumbing costs vary depending on the scope of work, the type of business, and the materials required. Simple fixture repairs or replacements are on the lower end of the cost range, while new construction pipe layouts, commercial kitchen plumbing, and large-scale pipe repairs involve more materials and labor. At Illyrian Plumber, we provide detailed written estimates before beginning any commercial work so you know exactly what to expect. We offer transparent pricing with no hidden fees.",
  },
  {
    question: "How quickly can you respond to a commercial plumbing emergency?",
    answer: "We understand that plumbing problems in a commercial setting can halt your operations and cost you revenue. We offer 24/7 emergency commercial plumbing service throughout Middlesex County. For urgent situations such as burst pipes, major leaks, or gas line issues, we prioritize fast response to get your business back up and running as quickly as possible. Call us directly for the fastest response.",
  },
  {
    question: "Are you licensed for commercial plumbing work in New Jersey?",
    answer: "Yes. Illyrian Plumber holds all required New Jersey licenses and insurance for commercial plumbing work. All commercial plumbing in NJ must be performed by a licensed plumber and we ensure every job meets state and local building codes. We also handle all permit applications for commercial projects that require them, so your business remains fully compliant.",
  },
  {
    question: "Do you provide after-hours commercial plumbing service?",
    answer: "Yes. We offer after-hours and weekend commercial plumbing service for businesses that cannot afford daytime interruptions. Many of our commercial clients prefer to schedule non-emergency maintenance and installation work during evenings or weekends to minimize disruption to their operations. Call us to discuss a scheduling arrangement that works for your business.",
  },
];

const faqSchema = getFaqSchema(faqData);

export default function CommercialPlumbingPage() {
  const serviceSchema = getServiceSchema({
    name: "Commercial Plumbing Services",
    description: "Licensed commercial plumbing contractors serving East Brunswick and Middlesex County, NJ. Commercial kitchen plumbing, bathroom fixtures, pipe repair, leak detection, gas lines, and rough-in plumbing for businesses.",
    slug: "commercial-plumbing",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Commercial Plumbing", path: "/services/commercial-plumbing" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceHero
        tagline="Licensed Commercial Plumbers"
        heading="Commercial Plumbing Services"
        subheading="Expert commercial plumbing repair, installation, and maintenance for businesses throughout Middlesex County, NJ. From commercial kitchen buildouts to emergency pipe repairs, our licensed contractors keep your operations running without interruption."
        backgroundImage="/images/professional-plumbing-services.jpg"
        backgroundAlt="Commercial plumbing services in East Brunswick NJ"
        service="Commercial Plumbing"
        bullets={["Licensed & Insured", "Code Compliant", "Minimal Downtime", "24/7 Emergency"]}
      />

      <StatsStrip />

      {/* Intro + kitchen + bathroom plumbing -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                When your business depends on reliable plumbing, you need a commercial plumbing contractor who shows up on time, works efficiently, and gets the job done right the first time. Whether you are dealing with a plumbing emergency that threatens your operations or planning a full commercial kitchen buildout, Illyrian Plumber provides the commercial plumbing services that businesses throughout East Brunswick and Middlesex County rely on. For urgent needs, our{" "}
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">
                  24/7 emergency plumbing service
                </Link>{" "}
                is always available to minimize downtime for your business.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-2">About Illyrian Plumber</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Illyrian Plumber has been serving Middlesex County homeowners and businesses for over {BUSINESS_INFO.stats.yearsExperience} years. With {BUSINESS_INFO.stats.projectsCompleted} projects completed and {BUSINESS_INFO.stats.happyClients} satisfied clients, we are one of the most trusted plumbing companies in Central New Jersey. Our licensed master plumbers handle commercial kitchen plumbing, pipe installation and repair, leak detection, gas line services, and remodeling rough-in work for businesses of all sizes. Based in East Brunswick, we serve clients across Middlesex County with fast, professional service and transparent pricing.
              </p>
            </div>

            {/* Commercial Kitchen Plumbing */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial kitchen plumbing</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              A commercial kitchen demands more from its plumbing than any other space in a business. High-volume usage, health department compliance requirements, and the need for minimal downtime make it essential to work with a <strong>commercial plumbing contractor</strong> who understands the specific requirements of food service environments. We work with your general contractor and health department to make sure your kitchen passes every required inspection, and our team has extensive experience with restaurant and commercial kitchen plumbing throughout Middlesex County.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Gas appliance hookups", desc: "Safe, code-compliant connections for commercial ranges, ovens, fryers, and steamers with pressure testing on every line" },
                { title: "Triple sink plumbing", desc: "Proper installation of three-compartment sinks with correct drain sizing and trap configurations required by health codes" },
                { title: "Commercial faucet installation", desc: "Pre-rinse units, pot filler faucets, and high-volume commercial faucets installed to spec" },
                { title: "Grease trap connections", desc: "Grease trap plumbing connections and proper drain line sizing to keep your kitchen compliant" },
                { title: "Ice machine and dishwasher lines", desc: "Dedicated water supply and drain connections for commercial dishwashers and ice machines" },
                { title: "Mop sink installation", desc: "Service sink and floor drain installation in kitchen utility areas" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Commercial Bathroom Plumbing */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial bathroom plumbing</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Commercial restrooms face far greater demand than residential bathrooms and require fixtures rated for high-traffic use. Whether you are installing a new commercial bathroom, upgrading fixtures to meet ADA requirements, or repairing plumbing in an existing facility, our team handles all aspects of <strong>commercial bathroom plumbing</strong> for offices, restaurants, retail stores, schools, and medical offices throughout Middlesex County.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {[
                { title: "Commercial toilet installation", desc: "Flushometer toilets, pressure-assist toilets, and wall-mounted commercial toilets for high-traffic restrooms" },
                { title: "Urinal installation and repair", desc: "Urinal rough-in, installation, and repair including flush valve replacement and clog repair" },
                { title: "ADA compliant fixtures", desc: "Fixture selection and installation that meets ADA requirements for accessible restrooms" },
                { title: "Commercial sink and faucet repair", desc: "Lavatory sink repair, faucet replacement, and sensor faucet installation for commercial restrooms" },
                { title: "Partition and carrier installation", desc: "In-wall carrier installation for wall-hung fixtures and rough-in work for restroom partitions" },
                { title: "Water pressure balancing", desc: "Pressure regulation to ensure consistent flush performance in multi-stall commercial restrooms" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why Middlesex County businesses choose us"
        subheading="Licensed, code-compliant work that keeps your business open."
        items={[
          { icon: "shield", title: "Licensed & insured", description: "Full NJ commercial plumbing licensing and insurance on every project, so your business stays compliant." },
          { icon: "wrench", title: "Code-compliant work", description: "Permits, inspections, and pressure testing handled correctly the first time, on new construction and renovations alike." },
          { icon: "clock", title: "Minimal downtime", description: "We schedule around your hours, including evenings and weekends, to keep your operation running." },
          { icon: "dollar", title: "Transparent estimates", description: "A detailed written estimate before work begins. No surprise charges on the invoice." },
          { icon: "bolt", title: "24/7 emergency response", description: "Burst pipes, gas leaks, and major leaks get priority dispatch to limit downtime and damage." },
          { icon: "home", title: "Local to Middlesex County", description: "Based in East Brunswick, not a national chain. We know the commercial buildings and codes in Central NJ." },
        ]}
      />

      {/* Pipe, leak detection, gas line, remodel, maintenance -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Mid-page CTA Band */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-10 text-center">
              <h3 className="text-2xl font-bold mb-3">Need a commercial plumber?</h3>
              <p className="text-red-100 mb-4">Licensed commercial plumbing contractors serving all of Middlesex County. Free estimates on all commercial projects.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
                  Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Commercial Water Pipe Installation and Repair */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial water pipe installation and repair</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Commercial buildings place heavy demands on water supply systems. From new construction pipe layouts to emergency repairs on aging commercial pipe systems, our licensed plumbers provide complete <strong>commercial plumbing installation</strong> and repair services for businesses throughout East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
            </p>
            <div className="space-y-4 mb-10">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">New construction pipe layout</h3>
                <p className="text-gray-600">Complete water supply and drain line layout for new commercial construction projects. We coordinate with your general contractor, pull the required permits, and install all rough-in plumbing to meet NJ code and pass inspection. Our team works efficiently to stay on your construction schedule.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Tenant buildout plumbing</h3>
                <p className="text-gray-600">New tenants taking over commercial space often require plumbing modifications to suit their business needs. We handle all plumbing changes for tenant buildouts including relocating fixtures, adding new supply and drain connections, and modifying existing systems to meet the new occupancy requirements.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Commercial pipe repair</h3>
                <p className="text-gray-600">When pipes fail in a commercial building, fast repair is essential to limit water damage and get your facility back to normal. Our <strong>commercial plumbing repair</strong> team handles burst pipes, pinhole leaks, corroded supply lines, and failed pipe joints in commercial buildings of all sizes. We carry the materials needed for most commercial pipe repairs on our service vehicles.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Commercial repiping</h3>
                <p className="text-gray-600">Older commercial buildings with galvanized steel or deteriorating copper pipes may develop recurring leaks, low water pressure, and water quality issues that signal it is time for full repiping. We assess your building&apos;s plumbing system and provide a detailed plan and quote for complete commercial repiping with minimal disruption to your operations.</p>
              </div>
            </div>

            {/* Commercial Leak Detection */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial leak detection and repair</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Undetected leaks in a commercial building can cause extensive structural damage, promote mold growth, and result in dramatically higher water bills. Our professional <strong>commercial leak detection</strong> service uses advanced technology to locate leaks quickly and accurately without unnecessary demolition. Our{" "}
              <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">
                leak detection service
              </Link>{" "}
              serves both residential and commercial clients throughout Middlesex County.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {[
                { title: "Slab leak detection", desc: "Electronic leak detection to locate supply line leaks beneath concrete slabs in commercial buildings without unnecessary excavation" },
                { title: "Wall and ceiling leak investigation", desc: "Locate the source of leaks inside walls and ceilings using moisture meters before opening up finished surfaces" },
                { title: "Supply pipe camera inspection", desc: "Camera inspection of water supply piping to identify cracks, corrosion, and connection issues without unnecessary demolition" },
                { title: "Water meter leak testing", desc: "Isolation testing to determine whether water loss is occurring in supply lines, fixtures, or connections" },
                { title: "Commercial slab leak repair", desc: "Targeted repair or rerouting of supply lines once a slab leak is located, minimizing disruption to your business" },
                { title: "Emergency leak response", desc: "Fast response to active leaks in commercial buildings to minimize water damage and downtime" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Commercial Gas Line Services */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial gas line services</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Commercial gas lines require licensed professionals with specific training and experience. Whether you are building out a restaurant kitchen, adding gas-powered equipment to a commercial space, or dealing with a suspected gas line problem, our licensed gas plumbers provide complete <strong>commercial gas line installation</strong> and repair throughout Middlesex County. All gas work is done in full compliance with NJ code, including permit applications and pressure testing.
            </p>
            <div className="space-y-4 mb-10">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Gas lines for commercial kitchens</h3>
                <p className="text-gray-600">New gas line installation for commercial ranges, ovens, fryers, broilers, steamers, and other commercial cooking equipment. We size gas lines properly for your equipment&apos;s BTU requirements, pull required permits, and pressure test all connections before connecting equipment. We coordinate with your kitchen equipment supplier and general contractor to meet your project timeline.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Commercial gas line pressure testing</h3>
                <p className="text-gray-600">Pressure testing of new and existing commercial gas lines to verify integrity and detect any leaks before equipment is put into service. We provide documentation of pressure test results, which is required by the NJ Division of Fire Safety and for insurance purposes in many commercial applications.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Gas appliance hookups</h3>
                <p className="text-gray-600">Safe, code-compliant connections for all types of commercial gas appliances including cooking equipment, water heaters, boilers, unit heaters, and gas-fired HVAC equipment. Every hookup includes a leak test and verification that the connection meets manufacturer specifications and local code requirements.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Commercial gas line repair</h3>
                <p className="text-gray-600">Emergency and scheduled repair of commercial gas piping including corroded pipe sections, failed fittings, and damaged flexible connectors. If you suspect a gas line problem in your commercial building, call us immediately. We will respond quickly and safely address the problem to protect your employees, customers, and property.</p>
              </div>
            </div>

            {/* Commercial Remodeling and Rough-In */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial remodeling and rough-in plumbing</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Renovating or expanding your commercial space requires careful coordination between plumbing and every other trade on the job. Rough-in plumbing means installing the supply lines, drain lines, and vent pipes, including sleeves through concrete slabs where needed, before walls and floors are closed up. Our rough-in and remodeling plumbing services support general contractors, property owners, and business owners throughout Middlesex County on commercial renovation projects of every scale, and we coordinate closely with contractors and inspectors so rough-in passes inspection the first time.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {[
                { title: "Kitchen and bath rough-in", desc: "Supply line, drain, and vent rough-in for new kitchen and bathroom construction in commercial spaces" },
                { title: "Fixture relocation", desc: "Moving existing plumbing fixtures to new locations during renovations, including all supply, drain, and vent work" },
                { title: "Code compliance upgrades", desc: "Updating plumbing systems in older commercial buildings to meet current NJ code requirements" },
                { title: "Laundry room rough-in", desc: "Washer supply and drain connections for commercial laundry rooms in hotels, apartment buildings, and care facilities" },
                { title: "Medical and dental office plumbing", desc: "Specialized plumbing rough-in and fixture installation for medical offices, dental practices, and healthcare facilities" },
                { title: "New bathroom addition", desc: "Complete plumbing for adding new bathrooms to existing commercial buildings, including all tie-ins to existing supply and waste systems" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mid-content CTA 2 */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-10 text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to schedule commercial plumbing service?</h3>
              <p className="text-gray-300 mb-4">Licensed commercial plumbing contractors. Transparent pricing. Minimal business disruption. Serving Middlesex County, NJ.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
                  Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                  Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Commercial Plumbing Maintenance Plans */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial plumbing maintenance plans</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Preventive maintenance is far less expensive than emergency repairs. A plumbing problem that goes undetected in a commercial building can result in water damage, code violations, and costly downtime. Our <strong>commercial plumbing maintenance</strong> plans give business owners peace of mind and help catch small issues before they become big problems.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What our maintenance plans include</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Scheduled inspection of all visible plumbing fixtures and connections",
                  "Water pressure testing throughout the building",
                  "Inspection and testing of all shut-off valves",
                  "Water heater inspection and maintenance",
                  "Checking for signs of leaks, corrosion, and wear",
                  "Inspection of visible supply and drain lines",
                  "Testing of backflow prevention devices",
                  "Written report with findings and recommendations",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Contact us to discuss a maintenance schedule that fits your business. We offer quarterly, semi-annual, and annual maintenance plans for commercial clients throughout Middlesex County.
              </p>
            </div>

            {/* Industries We Serve */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries we serve</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our <strong>commercial plumbing company</strong> serves businesses across a wide range of industries in East Brunswick and throughout Middlesex County. We understand that each type of business has unique plumbing requirements and we tailor our services accordingly.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {[
                { title: "Restaurants and food service", desc: "Commercial kitchens, health code compliance, grease trap connections, high-volume fixtures" },
                { title: "Office buildings", desc: "Restroom maintenance, fixture upgrades, water heater service, break room plumbing" },
                { title: "Retail stores", desc: "Restroom plumbing, employee break room fixtures, new tenant buildouts" },
                { title: "Medical and dental offices", desc: "Specialized fixtures, sterilization room plumbing, ADA compliance, healthcare-grade installations" },
                { title: "Schools and educational facilities", desc: "High-traffic restrooms, drinking fountains, cafeteria plumbing, code compliance" },
                { title: "Warehouses and industrial", desc: "Floor drain maintenance, utility sink installation, water heater service, facility plumbing" },
                { title: "Hotels and lodging", desc: "Multi-unit bathroom plumbing, laundry room service, commercial water heater systems" },
                { title: "Multi-family buildings", desc: "Apartment and condo plumbing, common area fixtures, building-wide water systems" },
                { title: "New commercial construction", desc: "Full rough-in plumbing, coordination with GC schedules, permit management, inspections" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="What our commercial clients say"
        subheading="Real reviews from real plumbing jobs across Middlesex County."
      />

      {/* FAQ + service areas + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Commercial plumbing FAQs</h2>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial plumbing throughout Middlesex County</h3>
              <p className="text-gray-600 mb-4">We provide commercial plumbing near me service throughout East Brunswick and Middlesex County, NJ.</p>
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
                  { label: "Emergency Plumbing", href: "/services/emergency-plumbing", description: "24/7 response for burst pipes and major leaks" },
                  { label: "Gas Line Repair & Installation", href: "/services/gas-line-repair-installation", description: "Licensed commercial and residential gas line work" },
                  { label: "Water Leak Detection", href: "/services/water-leak-detection", description: "Locate hidden leaks without unnecessary demolition" },
                  { label: "Whole House Repiping", href: "/services/whole-house-repiping", description: "Full repiping for aging commercial and residential pipe" },
                  { label: "Water Heater Repair", href: "/services/water-heater-repair", description: "Same-day repair for commercial and residential units" },
                  { label: "Boiler Repair", href: "/services/boiler-repair-service", description: "Steam and hot water boiler service for any building" },
                  { label: "Plumbing Safety Inspections", href: "/services/plumbing-safety-inspections", description: "Code compliance inspections for commercial properties" },
                  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling", description: "ADA-compliant fixture upgrades and renovations" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Helpful resources from our blog"
              tone="dark"
              items={[
                { label: "Gas Leak Detection & Safety", href: "/blog/gas-leak-detection-safety", badge: "Guide" },
                { label: "Signs of a Slab Leak or Sewer Line Problem", href: "/blog/signs-of-slab-leak-sewer-line", badge: "Guide" },
                { label: "Why Is My Water Pressure Low?", href: "/blog/why-is-water-pressure-low", badge: "Guide" },
                { label: "Water Pipe Noises: Causes and Fixes", href: "/blog/water-pipe-noises-causes-fixes", badge: "Guide" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to schedule commercial plumbing service?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact Illyrian Plumber for a free estimate on any commercial plumbing project. Licensed contractors, transparent pricing, and minimal downtime for your business.
          </p>
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
