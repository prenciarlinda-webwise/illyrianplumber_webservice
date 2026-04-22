import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import {
  getLocalBusinessSchema,
  getServiceSchema,
  getFaqSchema,
  getBreadcrumbSchema,
} from "@/lib/schemas";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Commercial Plumbing Services East Brunswick NJ - Repair, Installation, Maintenance",
  description: "Licensed commercial plumbing contractors serving East Brunswick and Middlesex County, NJ. Commercial kitchen plumbing, bathroom fixtures, pipe repair, leak detection, gas lines, and rough-in plumbing for businesses. Call (347) 461-4856.",
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
    title: "Commercial Plumbing Services East Brunswick NJ",
    description: "Licensed commercial plumbing contractors serving East Brunswick and Middlesex County, NJ. Kitchen plumbing, bathroom fixtures, pipe repair, and gas lines for businesses.",
    type: "website",
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
    question: "What types of businesses do you serve?",
    answer: "We serve a wide range of commercial clients throughout East Brunswick and Middlesex County including restaurants and food service establishments, office buildings, retail stores, medical and dental offices, schools and educational facilities, warehouses and industrial buildings, hotels and lodging, multi-family residential buildings, and new commercial construction projects. If your business has plumbing needs, we can help.",
  },
  {
    question: "Do you offer commercial plumbing maintenance plans?",
    answer: "Yes. We offer scheduled commercial plumbing maintenance plans tailored to the needs of your business. Regular maintenance helps prevent costly emergency repairs, keeps your plumbing code compliant, and extends the life of your fixtures and pipes. Maintenance visits include inspection of all fixtures, checking water pressure, inspecting visible pipe connections, and testing shut-off valves. Contact us to discuss a maintenance schedule that works for your business.",
  },
  {
    question: "Are you licensed for commercial plumbing work in New Jersey?",
    answer: "Yes. Illyrian Plumber holds all required New Jersey licenses and insurance for commercial plumbing work. All commercial plumbing in NJ must be performed by a licensed plumber and we ensure every job meets state and local building codes. We also handle all permit applications for commercial projects that require them, so your business remains fully compliant.",
  },
  {
    question: "Can you handle plumbing for a commercial kitchen buildout or remodel?",
    answer: "Absolutely. Commercial kitchen plumbing is one of our specialties. We handle complete kitchen buildouts including gas line installation and pressure testing, triple sink and prep sink plumbing, grease trap connections, commercial dishwasher hookups, commercial faucet installation, and proper drainage layout. We work with your contractor and health department requirements to ensure your kitchen passes all inspections.",
  },
  {
    question: "Do you provide after-hours commercial plumbing service?",
    answer: "Yes. We offer after-hours and weekend commercial plumbing service for businesses that cannot afford daytime interruptions. Many of our commercial clients prefer to schedule non-emergency maintenance and installation work during evenings or weekends to minimize disruption to their operations. Call us to discuss a scheduling arrangement that works for your business.",
  },
  {
    question: "What is involved in commercial plumbing rough-in work?",
    answer: "Commercial rough-in plumbing refers to the installation of supply lines, drain lines, and vent pipes before walls and floors are closed up during construction or renovation. Our rough-in work includes laying out water supply lines to all fixture locations, installing drain and waste lines at proper slopes, setting vent pipe connections, placing sleeves through concrete slabs where needed, and coordinating with general contractors and inspectors. Rough-in must pass inspection before the project can proceed to finish work.",
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

  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <ServiceHero
        tagline="Licensed Commercial Plumbers"
        heading="Commercial Plumbing Services"
        subheading="Expert commercial plumbing repair, installation, and maintenance for businesses throughout Middlesex County, NJ. From commercial kitchen buildouts to emergency pipe repairs, our licensed contractors keep your operations running without interruption."
        backgroundImage="/images/professional-plumbing-services.jpg"
        backgroundAlt="Commercial plumbing services in East Brunswick NJ"
        service="Commercial Plumbing"
        bullets={["Licensed & Insured", "Code Compliant", "Minimal Downtime", "24/7 Emergency"]}
      />

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Main Content */}
            <div className="lg:w-2/3">

              {/* Intro */}
              <div className="prose prose-lg max-w-none mb-10">
                <p className="text-lg text-gray-700 leading-relaxed">
                  When your business depends on reliable plumbing, you need a <strong>commercial plumbing contractor</strong> who shows up on time, works efficiently, and gets the job done right the first time. Whether you are dealing with a plumbing emergency that threatens your operations or planning a full commercial kitchen buildout, Illyrian Plumber provides the <strong>commercial plumbing services</strong> that businesses throughout East Brunswick and Middlesex County rely on. For urgent needs, our{" "}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Kitchen Plumbing</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                A commercial kitchen demands more from its plumbing than any other space in a business. High-volume usage, health department compliance requirements, and the need for minimal downtime make it essential to work with a <strong>commercial plumbing contractor</strong> who understands the specific requirements of food service environments. Our team has extensive experience with restaurant and commercial kitchen plumbing throughout Middlesex County.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Gas Appliance Hookups", desc: "Safe, code-compliant connections for commercial ranges, ovens, fryers, and steamers with pressure testing on every line" },
                  { title: "Triple Sink Plumbing", desc: "Proper installation of three-compartment sinks with correct drain sizing and trap configurations required by health codes" },
                  { title: "Commercial Faucet Installation", desc: "Pre-rinse units, pot filler faucets, and high-volume commercial faucets installed to spec" },
                  { title: "Grease Trap Connections", desc: "Grease trap plumbing connections and proper drain line sizing to keep your kitchen compliant" },
                  { title: "Ice Machine and Dishwasher Lines", desc: "Dedicated water supply and drain connections for commercial dishwashers and ice machines" },
                  { title: "Mop Sink Installation", desc: "Service sink and floor drain installation in kitchen utility areas" },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Commercial Bathroom Plumbing */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Bathroom Plumbing</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Commercial restrooms face far greater demand than residential bathrooms and require fixtures rated for high-traffic use. Whether you are installing a new commercial bathroom, upgrading fixtures to meet ADA requirements, or repairing plumbing in an existing facility, our team handles all aspects of <strong>commercial bathroom plumbing</strong> for offices, restaurants, retail stores, schools, and medical offices throughout Middlesex County.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { title: "Commercial Toilet Installation", desc: "Flushometer toilets, pressure-assist toilets, and wall-mounted commercial toilets for high-traffic restrooms" },
                  { title: "Urinal Installation and Repair", desc: "Urinal rough-in, installation, and repair including flush valve replacement and clog repair" },
                  { title: "ADA Compliant Fixtures", desc: "Fixture selection and installation that meets ADA requirements for accessible restrooms" },
                  { title: "Commercial Sink and Faucet Repair", desc: "Lavatory sink repair, faucet replacement, and sensor faucet installation for commercial restrooms" },
                  { title: "Partition and Carrier Installation", desc: "In-wall carrier installation for wall-hung fixtures and rough-in work for restroom partitions" },
                  { title: "Water Pressure Balancing", desc: "Pressure regulation to ensure consistent flush performance in multi-stall commercial restrooms" },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Mid-content CTA 1 */}
              <div className="bg-red-700 text-white rounded-xl p-6 mb-10 text-center">
                <h3 className="text-2xl font-bold mb-3">Need a Commercial Plumber?</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Water Pipe Installation and Repair</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Commercial buildings place heavy demands on water supply systems. From new construction pipe layouts to emergency repairs on aging commercial pipe systems, our licensed plumbers provide complete <strong>commercial plumbing installation</strong> and repair services for businesses throughout East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
              </p>
              <div className="space-y-4 mb-10">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">New Construction Pipe Layout</h3>
                  <p className="text-gray-600">Complete water supply and drain line layout for new commercial construction projects. We coordinate with your general contractor, pull the required permits, and install all rough-in plumbing to meet NJ code and pass inspection. Our team works efficiently to stay on your construction schedule.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Tenant Buildout Plumbing</h3>
                  <p className="text-gray-600">New tenants taking over commercial space often require plumbing modifications to suit their business needs. We handle all plumbing changes for tenant buildouts including relocating fixtures, adding new supply and drain connections, and modifying existing systems to meet the new occupancy requirements.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Commercial Pipe Repair</h3>
                  <p className="text-gray-600">When pipes fail in a commercial building, fast repair is essential to limit water damage and get your facility back to normal. Our <strong>commercial plumbing repair</strong> team handles burst pipes, pinhole leaks, corroded supply lines, and failed pipe joints in commercial buildings of all sizes. We carry the materials needed for most commercial pipe repairs on our service vehicles.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Commercial Repiping</h3>
                  <p className="text-gray-600">Older commercial buildings with galvanized steel or deteriorating copper pipes may develop recurring leaks, low water pressure, and water quality issues that signal it is time for full repiping. We assess your building's plumbing system and provide a detailed plan and quote for complete commercial repiping with minimal disruption to your operations.</p>
                </div>
              </div>

              {/* Commercial Leak Detection */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Leak Detection and Repair</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Undetected leaks in a commercial building can cause extensive structural damage, promote mold growth, and result in dramatically higher water bills. Our professional <strong>commercial leak detection</strong> service uses advanced technology to locate leaks quickly and accurately without unnecessary demolition. Our{" "}
                <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">
                  leak detection service
                </Link>{" "}
                serves both residential and commercial clients throughout Middlesex County.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { title: "Slab Leak Detection", desc: "Electronic leak detection to locate supply line leaks beneath concrete slabs in commercial buildings without unnecessary excavation" },
                  { title: "Wall and Ceiling Leak Investigation", desc: "Locate the source of leaks inside walls and ceilings using moisture meters and pipe cameras before opening up finished surfaces" },
                  { title: "Pipe Camera Inspection", desc: "Video camera inspection of drain lines and supply pipes to identify cracks, corrosion, and blockages inside the pipe" },
                  { title: "Water Meter Leak Testing", desc: "Isolation testing to determine whether water loss is occurring in supply lines, fixtures, or connections" },
                  { title: "Commercial Slab Leak Repair", desc: "Targeted repair or rerouting of supply lines once a slab leak is located, minimizing disruption to your business" },
                  { title: "Emergency Leak Response", desc: "Fast response to active leaks in commercial buildings to minimize water damage and downtime" },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Commercial Gas Line Services */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Gas Line Services</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Commercial gas lines require licensed professionals with specific training and experience. Whether you are building out a restaurant kitchen, adding gas-powered equipment to a commercial space, or dealing with a suspected gas line problem, our licensed gas plumbers provide complete <strong>commercial gas line installation</strong> and repair throughout Middlesex County. All gas work is done in full compliance with NJ code, including permit applications and pressure testing.
              </p>
              <div className="space-y-4 mb-10">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Gas Lines for Commercial Kitchens</h3>
                  <p className="text-gray-600">New gas line installation for commercial ranges, ovens, fryers, broilers, steamers, and other commercial cooking equipment. We size gas lines properly for your equipment's BTU requirements, pull required permits, and pressure test all connections before connecting equipment. We coordinate with your kitchen equipment supplier and general contractor to meet your project timeline.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Commercial Gas Line Pressure Testing</h3>
                  <p className="text-gray-600">Pressure testing of new and existing commercial gas lines to verify integrity and detect any leaks before equipment is put into service. We provide documentation of pressure test results, which is required by the NJ Division of Fire Safety and for insurance purposes in many commercial applications.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Gas Appliance Hookups</h3>
                  <p className="text-gray-600">Safe, code-compliant connections for all types of commercial gas appliances including cooking equipment, water heaters, boilers, unit heaters, and gas-fired HVAC equipment. Every hookup includes a leak test and verification that the connection meets manufacturer specifications and local code requirements.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Commercial Gas Line Repair</h3>
                  <p className="text-gray-600">Emergency and scheduled repair of commercial gas piping including corroded pipe sections, failed fittings, and damaged flexible connectors. If you suspect a gas line problem in your commercial building, call us immediately. We will respond quickly and safely address the problem to protect your employees, customers, and property.</p>
                </div>
              </div>

              {/* Commercial Remodeling and Rough-In */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Remodeling and Rough-In Plumbing</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Renovating or expanding your commercial space requires careful coordination between plumbing and every other trade on the job. Our rough-in and remodeling plumbing services support general contractors, property owners, and business owners throughout Middlesex County on commercial renovation projects of every scale.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { title: "Kitchen and Bath Rough-In", desc: "Supply line, drain, and vent rough-in for new kitchen and bathroom construction in commercial spaces" },
                  { title: "Fixture Relocation", desc: "Moving existing plumbing fixtures to new locations during renovations, including all supply, drain, and vent work" },
                  { title: "Code Compliance Upgrades", desc: "Updating plumbing systems in older commercial buildings to meet current NJ code requirements" },
                  { title: "Laundry Room Rough-In", desc: "Washer supply and drain connections for commercial laundry rooms in hotels, apartment buildings, and care facilities" },
                  { title: "Medical and Dental Office Plumbing", desc: "Specialized plumbing rough-in and fixture installation for medical offices, dental practices, and healthcare facilities" },
                  { title: "New Bathroom Addition", desc: "Complete plumbing for adding new bathrooms to existing commercial buildings, including all tie-ins to existing supply and waste systems" },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Mid-content CTA 2 */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-10 text-center">
                <h3 className="text-2xl font-bold mb-3">Ready to Schedule Commercial Plumbing Service?</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Plumbing Maintenance Plans</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Preventive maintenance is far less expensive than emergency repairs. A plumbing problem that goes undetected in a commercial building can result in water damage, code violations, and costly downtime. Our <strong>commercial plumbing maintenance</strong> plans give business owners peace of mind and help catch small issues before they become big problems.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What Our Maintenance Plans Include</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our <strong>commercial plumbing company</strong> serves businesses across a wide range of industries in East Brunswick and throughout Middlesex County. We understand that each type of business has unique plumbing requirements and we tailor our services accordingly.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {[
                  { title: "Restaurants and Food Service", desc: "Commercial kitchens, health code compliance, grease trap connections, high-volume fixtures" },
                  { title: "Office Buildings", desc: "Restroom maintenance, fixture upgrades, water heater service, break room plumbing" },
                  { title: "Retail Stores", desc: "Restroom plumbing, employee break room fixtures, new tenant buildouts" },
                  { title: "Medical and Dental Offices", desc: "Specialized fixtures, sterilization room plumbing, ADA compliance, healthcare-grade installations" },
                  { title: "Schools and Educational Facilities", desc: "High-traffic restrooms, drinking fountains, cafeteria plumbing, code compliance" },
                  { title: "Warehouses and Industrial", desc: "Floor drain maintenance, utility sink installation, water heater service, facility plumbing" },
                  { title: "Hotels and Lodging", desc: "Multi-unit bathroom plumbing, laundry room service, commercial water heater systems" },
                  { title: "Multi-Family Buildings", desc: "Apartment and condo plumbing, common area fixtures, building-wide water systems" },
                  { title: "New Commercial Construction", desc: "Full rough-in plumbing, coordination with GC schedules, permit management, inspections" },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-gray-600 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Service Areas Grid */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Plumbing Service Areas</h2>
              <p className="text-lg text-gray-700 mb-6">
                We provide <strong>commercial plumbing near me</strong> service throughout East Brunswick and Middlesex County, NJ. Our service area includes:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
                {[
                  { name: "East Brunswick", href: "/service-areas/east-brunswick" },
                  { name: "Edison", href: "/service-areas/edison" },
                  { name: "Sayreville", href: "/service-areas/sayreville" },
                  { name: "Old Bridge", href: "/service-areas/old-bridge" },
                  { name: "Monroe Township", href: "/service-areas/monroe-township" },
                  { name: "South Brunswick", href: "/service-areas/south-brunswick" },
                  { name: "North Brunswick", href: "/service-areas/north-brunswick" },
                ].map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center text-red-700 hover:text-red-800 hover:bg-red-50 hover:border-red-200 font-medium text-sm transition"
                  >
                    {area.name}, NJ
                  </Link>
                ))}
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Commercial Plumbing FAQs</h2>
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
                  <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 font-medium">Gas Line Repair &amp; Installation &#8594;</Link>
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Plumbing &#8594;</Link>
                  <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">Water Leak Detection &#8594;</Link>
                  <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping &#8594;</Link>
                  <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Safety Inspections &#8594;</Link>
                  <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800 font-medium">Bathroom Remodeling &#8594;</Link>
                </div>
              </div>

            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:w-1/3">
              <div className="lg:sticky lg:top-24 space-y-6">

                {/* Call Now Card */}
                <div className="bg-red-700 text-white rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Call Our Commercial Plumbers</h3>
                  <p className="text-red-100 mb-4 text-sm">Licensed, insured, and ready to help your business</p>
                  <a href={BUSINESS_INFO.phoneLink} className="block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition mb-3">
                    Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                    Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                  </a>
                  <p className="text-red-200 text-xs mt-3">24/7 Emergency Service Available</p>
                </div>

                {/* Service Areas */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Service Areas</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>East Brunswick, NJ</li>
                    <li>Edison, NJ</li>
                    <li>Sayreville, NJ</li>
                    <li>Old Bridge, NJ</li>
                    <li>Monroe Township, NJ</li>
                    <li>South Brunswick, NJ</li>
                    <li>North Brunswick, NJ</li>
                  </ul>
                  <Link href="/service-areas" className="text-red-700 hover:text-red-800 text-sm font-medium mt-3 block">
                    View All Service Areas &#8594;
                  </Link>
                </div>

                {/* Our Services */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Our Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">Emergency Plumbing</Link></li>
                    <li><Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">Gas Line Services</Link></li>
                    <li><Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">Water Leak Detection</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">Whole House Repiping</Link></li>
                    <li><Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">Water Heater Repair</Link></li>
                    <li><Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">Boiler Repair</Link></li>
                    <li><Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800">Plumbing Inspections</Link></li>
                    <li><Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">Bathroom Remodeling</Link></li>
                  </ul>
                </div>

                {/* Helpful Articles */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Helpful Articles</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/blog/gas-leak-detection-safety" className="text-red-700 hover:text-red-800">
                        Gas Leak Detection &amp; Safety &#8594;
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/signs-of-slab-leak-sewer-line" className="text-red-700 hover:text-red-800">
                        Signs of a Slab Leak &#8594;
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:text-red-800">
                        Why Is My Water Pressure Low? &#8594;
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/water-pipe-noises-causes-fixes" className="text-red-700 hover:text-red-800">
                        Water Pipe Noises - Causes and Fixes &#8594;
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
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Commercial Plumbing Service?</h2>
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
    </>
  );
}
