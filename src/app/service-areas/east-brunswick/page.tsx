import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import {
  getLocalBusinessSchema,
  getFaqSchema,
  getBreadcrumbSchema,
} from "@/lib/schemas";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Plumber in East Brunswick, NJ - Licensed Local Plumbing",
  description: "Local plumber in East Brunswick, NJ. Same day service from 697 Old Bridge Turnpike. Water heaters, boilers, gas lines, 24/7 emergency. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/service-areas/east-brunswick",
  },
  openGraph: {
    title: "Plumber in East Brunswick, NJ - Licensed Local Plumbing",
    description: "Local plumber in East Brunswick, NJ. Same day service from 697 Old Bridge Turnpike. Water heaters, boilers, gas lines, 24/7 emergency.",
    type: "website",
    url: "https://www.illyrianplumber.com/service-areas/east-brunswick",
    siteName: "Illyrian Plumber",
  },
};

const faqData = [
  {
    question: "How fast can a plumber reach my home in East Brunswick?",
    answer: "Because our office is at 697 Old Bridge Turnpike in East Brunswick, we can typically reach any address in the township within 5 to 15 minutes during business hours. For 24/7 emergencies, our on-call plumbers live locally and respond faster than any out-of-town competitor.",
  },
  {
    question: "How much does a plumber cost in East Brunswick, NJ?",
    answer: "Plumbing costs in East Brunswick vary by job. Typical ranges: service calls start around $95, standard repairs run $150 to $500, water heater replacement runs $1,500 to $3,500 for tank units or $3,500 to $6,500 for tankless, and major work like whole-house repiping is quoted individually. We provide upfront written estimates before starting any job, so there are no surprise charges.",
  },
  {
    question: "Are you a licensed plumber in East Brunswick, NJ?",
    answer: "Yes. Illyrian Plumber operates under an active New Jersey Master Plumber License and carries full liability insurance. Every job in East Brunswick is performed by or supervised by a licensed NJ master plumber, and we pull all required municipal permits for work that needs them.",
  },
  {
    question: "Do you handle emergency plumbing in East Brunswick after hours?",
    answer: "Yes. Our 24/7 emergency line covers nights, weekends, and holidays in East Brunswick and across Middlesex County. Call (347) 461-4856 any time for burst pipes, gas leaks, water heater failures, sewer backups, or any plumbing emergency. A real person answers the phone, not a call center.",
  },
];

const localBusinessSchema = getLocalBusinessSchema();
const faqSchema = getFaqSchema(faqData);
const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Service Areas", path: "/service-areas" },
  { name: "East Brunswick", path: "/service-areas/east-brunswick" },
]);

export default function EastBrunswickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <ServiceHero
        tagline="OUR HOME BASE - EAST BRUNSWICK, NJ"
        heading="Plumber in East Brunswick, NJ"
        subheading="Illyrian Plumber is based at 697 Old Bridge Turnpike, in the heart of East Brunswick. As your local plumbing contractor, we serve every neighborhood in the township with same-day appointments and faster emergency response than any out-of-town competitor."
        backgroundImage="/images/professional-plumbing-services.jpg"
        backgroundAlt="Licensed plumber in East Brunswick NJ from Illyrian Plumber"
        service="Plumbing in East Brunswick"
        bullets={["NJ Master Plumber", "Fully Insured", "Same Day Service", "24/7 Emergency Response"]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Local Plumber Based in East Brunswick</h2>
          <p className="text-lg text-gray-700 mb-4">
            When homeowners in East Brunswick search for a <strong>plumber in East Brunswick NJ</strong>, they usually need someone fast, licensed, and local. Illyrian Plumber checks every box. Our office sits on Old Bridge Turnpike, a short drive from Route 18, Ryders Lane, Cranbury Road, and every residential neighborhood in the township. We are not a national franchise operating out of a call center in another state. We are a family-run plumbing contractor that lives and works in Middlesex County, and East Brunswick is our home base.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Most homes in East Brunswick were built between the 1960s and the 1990s, which means the plumbing systems in this community are aging into the repair-and-replace window. Galvanized steel piping from the 70s is corroding, original water heaters installed during renovations are beyond their service life, and boilers that were top-of-the-line in 1985 are running inefficiently. Our team has worked on hundreds of East Brunswick homes and can tell within the first 10 minutes whether your issue is a quick repair or something that needs a longer conversation about replacement.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We answer our own phones. We pull our own permits. We carry the right parts on our trucks so a typical repair gets finished in one visit, not three. And because we are close, if you call with a burst pipe at 2 AM, we are not driving in from two counties away.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our team is made up of licensed NJ master plumbers and journeyman technicians, all of whom live in the Central NJ area. When you call, you talk to a real person who can ask the right follow-up questions to scope your job accurately. That conversation matters. The difference between a $200 repair and a $2,000 repair often comes down to whether the plumber asks you the right questions before heading out. We do, and we price the job before we start, not after.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            We also stand behind our work with written warranties on parts and labor. If something we installed does not perform the way we said it would, we come back and make it right. That is the difference between a local plumbing contractor with a reputation to protect and a dispatcher sending you a rotating cast of subcontractors from out of town.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Plumbing Services in East Brunswick</h2>
          <p className="text-lg text-gray-700 mb-6">
            We handle every residential and light commercial plumbing need for East Brunswick homeowners and businesses. Pick the service you need, or call us to describe the problem and we will point you to the right fix.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { href: "/services/emergency-plumbing", title: "24/7 Emergency Plumbing", desc: "Burst pipes, gas leaks, sewer backups, flooding. Fast response in East Brunswick." },
              { href: "/services/water-heater-replacement", title: "Water Heater Replacement", desc: "Tank and tankless water heater installation with full permit handling." },
              { href: "/services/water-heater-repair", title: "Water Heater Repair", desc: "Same day water heater repair for gas and electric units." },
              { href: "/services/tankless-water-heater-installation", title: "Tankless Water Heater Installation", desc: "Convert from tank to tankless with gas line and venting upgrades." },
              { href: "/services/boiler-repair-service", title: "Boiler Repair & Installation", desc: "Boiler service for East Brunswick homes with hot water or steam heat." },
              { href: "/services/gas-line-repair-installation", title: "Gas Line Repair & Installation", desc: "Licensed NJ gas line work, leak testing, and appliance hookups." },
              { href: "/services/whole-house-repiping", title: "Whole House Repiping", desc: "Replace old galvanized or polybutylene piping with PEX or copper." },
              { href: "/services/water-leak-detection", title: "Water Leak Detection", desc: "Find hidden leaks behind walls, under slabs, and inside ceilings." },
              { href: "/services/sump-pump-repair-install", title: "Sump Pump Repair & Install", desc: "Sump pumps and battery backups for East Brunswick basements." },
              { href: "/services/water-filtration-system", title: "Water Filtration Systems", desc: "Whole-house filtration and softeners for NJ hard water." },
              { href: "/services/bathroom-remodeling", title: "Bathroom Remodeling", desc: "Complete plumbing for bathroom renovations and additions." },
              { href: "/services/commercial-plumbing", title: "Commercial Plumbing", desc: "Light commercial plumbing for East Brunswick storefronts and offices." },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition group"
              >
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">{service.title}</p>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-lg text-gray-700 mb-10">
            Not sure which service you need? Call us and describe the problem. Most calls get diagnosed over the phone in under 5 minutes, and we can tell you whether it is a quick repair or something we need to inspect in person.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">24/7 Emergency Plumber in East Brunswick</h2>
          <p className="text-lg text-gray-700 mb-4">
            Plumbing emergencies do not wait for business hours. A pipe that bursts at midnight can dump hundreds of gallons of water into your home before sunrise. Our 24/7 emergency plumber line in East Brunswick covers all after-hours situations including burst pipes, major leaks, gas leaks, sewer backups, water heater failures, and flooding from any source.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            The first thing to do in most water emergencies is shut off the main water valve, which is usually near your meter in the basement or garage. Then call us at <a href={BUSINESS_INFO.phoneLink} className="text-red-700 font-semibold hover:underline">{BUSINESS_INFO.phone}</a>. We will walk you through any additional containment steps while a licensed plumber is on the way.
          </p>
          <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-5 mb-6">
            <p className="font-bold text-gray-900 mb-1">If you smell gas, leave the house first.</p>
            <p className="text-gray-700 text-sm">Do not switch lights on or off, do not use your phone inside, and call your gas utility from outside. Then call us.</p>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            The most common emergencies we respond to in East Brunswick are winter frozen pipe bursts, aging water heaters that crack overnight, and sewer line backups from tree root intrusion in older properties. Each one has a clear containment step you can take while we are in transit. For a burst pipe, close the main water valve and open the lowest faucet in the house to relieve pressure. For a leaking water heater, shut off both the water supply valve on the cold inlet and the gas or electric supply to the unit. For a sewer backup, stop using every drain and toilet in the house until we arrive.
          </p>
          <p className="text-lg text-gray-700 mb-10">
            We keep our emergency trucks stocked with pipe-fitting materials, water heater components for the top five brands sold in New Jersey, gas leak detection equipment, sewer snakes, and wet-vac gear. That means most emergency calls in East Brunswick are fully resolved in a single visit without a follow-up.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Much Does a Plumber Cost in East Brunswick, NJ?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Plumber pricing in East Brunswick depends on the job, the materials, and whether the work needs a permit. Here are honest ranges so you can plan ahead.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-900">Service</th>
                  <th className="text-left p-3 font-semibold text-gray-900">Typical Range in East Brunswick</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="p-3">Diagnostic service call</td><td className="p-3">From $95</td></tr>
                <tr><td className="p-3">Common repair (faucet, toilet, small leak)</td><td className="p-3">$150 to $500</td></tr>
                <tr><td className="p-3">Water heater replacement (40 to 50 gal tank)</td><td className="p-3">$1,500 to $3,500</td></tr>
                <tr><td className="p-3">Tankless water heater installation</td><td className="p-3">$3,500 to $6,500+</td></tr>
                <tr><td className="p-3">Boiler repair</td><td className="p-3">$250 to $1,200</td></tr>
                <tr><td className="p-3">Gas line repair</td><td className="p-3">$300 to $1,500</td></tr>
                <tr><td className="p-3">Sump pump installation</td><td className="p-3">$600 to $1,800</td></tr>
                <tr><td className="p-3">Emergency / after-hours service</td><td className="p-3">Trip charge + repair cost, quoted upfront</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            What drives plumber cost variation in East Brunswick? Three things. First, accessibility, a water heater sitting in an open garage is cheaper to swap than one tucked into an attic crawl space. Second, code upgrades, older East Brunswick homes often need expansion tanks, sediment traps, or updated venting to meet current NJ Uniform Construction Code, and those add material and time. Third, permit requirements, work that needs a municipal permit takes an extra site visit for inspection, which is built into our quote.
          </p>
          <p className="text-lg text-gray-700 mb-10">
            Every estimate is written down and approved before work starts. If the job is simple, we often finish in the same visit. If it is larger, we walk you through options at different price points so you can pick what fits your budget. We do not add hidden trip charges, fuel surcharges, or shop fees on top of the quote.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Neighborhoods We Serve in East Brunswick</h2>
          <p className="text-lg text-gray-700 mb-4">
            From our Old Bridge Turnpike office, our plumbers regularly travel Route 18, Route 1, Cranbury Road, Milltown Road, Ryders Lane, Dunhams Corner Road, and the Route 527 corridor. We serve every residential neighborhood in East Brunswick including the areas near Farrington Lake, Crystal Springs, Dunhams Corner, Tamarack Hollow Park, Brunswick Square Mall, Mid-State Mall, East Brunswick Community Arts Center, and East Brunswick High School. We also handle commercial plumbing for storefronts and offices along the Route 18 business corridor.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Because East Brunswick sits next to NJ Turnpike Exit 9 and the Parkway, we can also be in neighboring towns like Edison, Old Bridge, Sayreville, New Brunswick, Milltown, Spotswood, and Monroe Township within minutes. If you are unsure whether we cover your specific address, call and ask.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Older neighborhoods in East Brunswick, particularly homes built during the 1960s and 1970s expansion, often share common plumbing issues. Galvanized steel supply lines are corroding from the inside, reducing water pressure year after year. Original cast iron drain stacks are cracking at joints. Copper feed lines installed near the transition to PEX era can develop pinhole leaks. Polybutylene piping, which was used in some 1980s and early 1990s builds, is failing and requires replacement. We have repiped dozens of East Brunswick homes to modern PEX or copper, and we know which streets and subdivisions are most likely to have these problems based on the year they were built.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Newer construction in East Brunswick, including homes built in the last 20 years, generally has PEX supply lines and PVC drain stacks. The common issues in newer homes are different, failing pressure reducing valves, hot water recirculation pumps wearing out, and toilet flappers or fill valves needing replacement. These are simpler fixes, and we usually handle them in a single visit.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563311.7530137168!2d-76.0434024528995!3d40.067754562570364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a38fc2afc8255df%3A0x226b02ec0b6ff21a!2sIllyrian%20Plumber!5e0!3m2!1sen!2s!4v1776836216694!5m2!1sen!2s"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Illyrian Plumber office in East Brunswick, NJ"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">East Brunswick Plumbing FAQs</h2>
          <div className="space-y-4 mb-12">
            {faqData.map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg group">
                <summary className="p-5 cursor-pointer list-none flex justify-between items-center">
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <span className="text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-700">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* Nearby service areas */}
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-xl font-bold text-gray-900 mb-3">Nearby Service Areas</p>
            <p className="text-gray-600 mb-4">We also cover these Middlesex County towns from our East Brunswick location.</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link href="/service-areas/edison" className="text-red-700 hover:text-red-800 font-medium">Plumber Edison, NJ</Link>
              <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 font-medium">Plumber Sayreville, NJ</Link>
              <Link href="/service-areas/old-bridge" className="text-red-700 hover:text-red-800 font-medium">Plumber Old Bridge, NJ</Link>
              <Link href="/service-areas/south-brunswick" className="text-red-700 hover:text-red-800 font-medium">Plumber South Brunswick, NJ</Link>
              <Link href="/service-areas/north-brunswick" className="text-red-700 hover:text-red-800 font-medium">Plumber North Brunswick, NJ</Link>
              <Link href="/service-areas/monroe-township" className="text-red-700 hover:text-red-800 font-medium">Plumber Monroe Township, NJ</Link>
              <Link href="/service-areas/middlesex-county" className="text-red-700 hover:text-red-800 font-medium">All of Middlesex County</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
