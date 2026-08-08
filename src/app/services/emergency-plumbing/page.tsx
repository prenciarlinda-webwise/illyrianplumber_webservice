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
  title: "Emergency Plumbing Repair Middlesex County NJ - (347) 461-4856 - Illyrian Plumber",
  description: "Need emergency plumbing repair in Middlesex County, NJ? Illyrian offers 24/7 same day service for burst pipes, gas leaks, and flooding in East Brunswick, Edison, Sayreville, and surrounding towns. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/emergency-plumbing",
  },
  openGraph: {
    title: "Emergency Plumbing Repair Middlesex County NJ - (347) 461-4856 - Illyrian Plumber",
    description: "Need emergency plumbing repair in Middlesex County, NJ? Illyrian offers 24/7 same day service for burst pipes, gas leaks, and flooding in East Brunswick, Edison, Sayreville, and surrounding towns. Call (347) 461-4856.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/emergency-plumbing",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/emergency-plumbing-services-nj.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber 24/7 emergency plumbing service in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Plumbing Repair Middlesex County NJ - (347) 461-4856 - Illyrian Plumber",
    description: "Need emergency plumbing repair in Middlesex County, NJ? Illyrian offers 24/7 same day service for burst pipes, gas leaks, and flooding in East Brunswick, Edison, Sayreville, and surrounding towns. Call (347) 461-4856.",
    images: ["https://www.illyrianplumber.com/images/emergency-plumbing-services-nj.jpg"],
  },
};

const faqData = [
  {
    question: "Do you have a 24/7 plumber near me available right now?",
    answer: "Yes! Illyrian Plumber provides 24/7 emergency plumbing services throughout East Brunswick, Edison, Old Bridge, Sayreville, and all of Middlesex County, NJ. Our emergency plumbers are available nights, weekends, and holidays. Call us any time at (347) 461-4856 or (718) 427-4396 for immediate assistance.",
  },
  {
    question: "Can I get a same day plumber for my emergency?",
    answer: "Absolutely. We offer same day plumber service for all plumbing emergencies. When you call our emergency line, we dispatch a licensed plumber immediately. Most emergency calls in our service area receive a response within 30-60 minutes, depending on your location and current demand.",
  },
  {
    question: "What qualifies as a plumbing emergency?",
    answer: "A plumbing emergency is any situation that could cause significant property damage, health hazards, or leave you without essential services. This includes burst pipes, major water leaks, gas leaks, complete loss of water, water heater failures (especially in winter), and flooding. If you're unsure, call us - we're happy to assess your situation.",
  },
  {
    question: "How much does a 24 hour emergency plumber cost?",
    answer: "Emergency plumbing costs vary based on the type of repair needed, not just the time of day. While after-hours service may include a trip charge, we always provide upfront pricing before starting any work. We believe in fair, transparent pricing - you'll know exactly what you're paying before we begin. Call us for a free assessment of your emergency.",
  },
  {
    question: "Do you provide emergency gas plumber services?",
    answer: "Yes, we handle emergency gas plumber calls for gas leaks and gas line issues. If you smell gas, evacuate immediately and call your gas company first, then call us. Our licensed plumbers are trained in gas line repair and can respond quickly to make your home safe again.",
  },
  {
    question: "What should I do while waiting for the emergency plumber?",
    answer: "For water emergencies: Shut off the main water valve (usually near your water meter). For water heater issues: Turn off power (electric) or gas supply. For gas leaks: Evacuate, don't use electronics, and call from outside. These steps can minimize damage while you wait for our arrival.",
  },
  {
    question: "Do you offer after hours plumber service on weekends and holidays?",
    answer: "Yes, we're a true 24/7 plumbing service. Our after hours plumber service is available every night, every weekend, and every holiday - including Christmas, Thanksgiving, and New Year's. Plumbing emergencies don't take holidays, and neither do we.",
  },
  {
    question: "How fast can you get a plumber to my house?",
    answer: "For emergencies in East Brunswick and nearby areas, we typically arrive within 30-60 minutes. Response times for Edison, Sayreville, Old Bridge, and other Middlesex County towns may vary slightly based on distance and traffic. When you call, we'll give you an estimated arrival time.",
  },
  {
    question: "Do you handle frozen pipe emergencies in winter?",
    answer: "Yes, frozen and burst pipe emergencies are one of our most common winter calls. We respond quickly to thaw frozen pipes before they burst and repair burst pipes that have already caused water damage. We also provide preventive advice to help you avoid frozen pipes in the future.",
  },
  {
    question: "How can I find a reliable emergency plumber in NJ?",
    answer: "Illyrian Plumber is a licensed, insured NJ Master Plumber offering true 24/7 emergency service across East Brunswick, Edison, Old Bridge, Sayreville, and all of Middlesex County. Look for an active NJ Master Plumber license, real customer reviews, upfront pricing before work starts, and a live person answering the phone at 2 AM - not a call center. We meet all four and typically arrive within 30-60 minutes.",
  },
  {
    question: "What are the common causes of plumbing emergencies in New Jersey?",
    answer: "The most common causes Illyrian Plumber responds to in New Jersey are frozen and burst pipes during winter freeze-thaw cycles, failed water heaters, gas leaks from aging fittings, and sump pump failures during heavy storms. Aging galvanized and polybutylene supply lines in older Middlesex County homes are frequently the root cause behind burst-pipe calls.",
  },
];

const faqSchema = getFaqSchema(faqData);

const serviceSchema = getServiceSchema({
  name: "24/7 Emergency Plumbing Service",
  description:
    "24 hour emergency plumber services including burst pipe repair, water heater emergencies, gas leak response, and flooding repair. Same day plumber service available.",
  slug: "emergency-plumbing",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Emergency Plumbing", path: "/services/emergency-plumbing" },
]);
export default function EmergencyPlumbingPage() {
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
        tagline="24/7 EMERGENCY PLUMBER AVAILABLE NOW"
        heading="24/7 Emergency Plumbing Repair in Middlesex County, NJ"
        subheading="Need a plumber right now? Illyrian's emergency plumbing repair team responds fast to burst pipes, water heater failures, gas leaks, and flooding throughout Middlesex County. Same day service, day or night, from our East Brunswick base - we arrive when you need us most."
        backgroundImage="/images/emergency-plumbing-services-nj.jpg"
        backgroundAlt="24/7 Emergency plumber responding to plumbing emergency in East Brunswick NJ"
        service="Emergency Plumbing"
        bullets={["24/7 Availability", "Same Day Service", "Licensed & Insured", "Fast Response"]}
      />

      {/* Urgency Banner */}
      <section className="bg-yellow-500 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-900 font-bold text-lg">
            Plumbing Emergency? Don&apos;t Wait - Call Our 24 Hour Plumber Hotline: <a href={BUSINESS_INFO.phoneLink} className="underline">{BUSINESS_INFO.phone}</a>
          </p>
        </div>
      </section>

      <StatsStrip />

      {/* Intro + situations + what to do + repairs -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Intro Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                When water is flooding your basement at 2 AM, you need someone who answers the phone and shows up, not a call center. Illyrian Plumber serves East Brunswick, Edison, Sayreville, Old Bridge, and all of Middlesex County with true around-the-clock emergency response.
              </p>

              {/* About Illyrian Plumber */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6 not-prose">
                <p className="text-lg font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-gray-700 text-base">
                  Illyrian Plumber has been serving Middlesex County homeowners and businesses for over {BUSINESS_INFO.stats.yearsExperience} years. With {BUSINESS_INFO.stats.projectsCompleted} projects completed and {BUSINESS_INFO.stats.happyClients} satisfied clients, we are one of the most trusted plumbing companies in Central New Jersey. Our team of licensed master plumbers specializes in emergency plumbing, water heater services, boiler repair, gas line work, and whole-house repiping. Based in East Brunswick, we respond faster than any national chain because we are local, dedicated, and always ready.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Plumbing emergencies don&apos;t wait for business hours, so neither do we. Burst pipe at midnight, gas leak on a holiday, water heater failure on a Sunday morning: whatever the hour, we dispatch immediately and get there fast.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Too many Middlesex County homeowners have called a plumber mid-emergency and reached a voicemail or an answering service. When you call Illyrian Plumber, a real person picks up and dispatches a plumber on the spot. No call centers, no third-party answering services. Every minute matters during an emergency, so we skip the middleman.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our trucks stay fully stocked with the parts and equipment for the most common emergency repairs, from pipe fittings and water heater components to leak detection tools and gas line parts. That means most jobs get finished in a single visit, no waiting on a backordered part or a second appointment.
              </p>
            </div>

            {/* Emergency Situations */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Call a 24/7 Emergency Plumber</h2>
            <p className="text-lg text-gray-600 mb-6">
              Not sure if your situation warrants an after-hours call? These are the situations that need an immediate call to our emergency line:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { situation: "Burst or Frozen Pipes", desc: "Water spraying or no water flow in winter - frozen pipes can burst and cause thousands in damage if not addressed quickly" },
                { situation: "Major Water Leaks", desc: "Visible flooding or water damage spreading - every minute of delay means more water damage to your home" },
                { situation: "Gas Leak or Gas Smell", desc: "Evacuate first, then call for emergency gas plumber - gas leaks are life-threatening and require immediate response" },
                { situation: "Water Heater Failure", desc: "No hot water, leaking tank, or strange noises - especially dangerous if your water heater is gas-powered" },
                { situation: "Complete Loss of Water", desc: "No water anywhere in your home - could indicate a main line break or frozen supply lines" },
                { situation: "Flooding from Any Source", desc: "Appliance failure, pipe break, or unknown source - quick response prevents structural damage and mold growth" },
                { situation: "Boiler Breakdown", desc: "No heat from boiler system in cold weather - a boiler failure in winter is a true emergency for your family's safety" },
              ].map((item, index) => (
                <div key={index} className="bg-red-50 border-l-4 border-red-600 rounded-lg p-4">
                  <p className="font-bold text-gray-900">{item.situation}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mid-page CTA Band */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12 text-center">
              <p className="text-2xl font-bold mb-3">Experiencing a Plumbing Emergency Right Now?</p>
              <p className="text-red-100 mb-4">Our emergency plumbers are standing by 24/7. Fast response throughout Middlesex County.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
                  Call Niti: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  Call Danny: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* What To Do */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What To Do While Waiting for the Emergency Plumber</h2>
            <p className="text-lg text-gray-600 mb-6">
              When you call our emergency line, we&apos;ll walk you through these steps to minimize damage while we&apos;re on our way:
            </p>
            <div className="space-y-4 mb-12">
              {[
                { step: "1", title: "Shut Off the Main Water Valve", desc: "Located near your water meter (usually in the basement or outside). Turn clockwise to close. This stops all water flow to your home and prevents further flooding." },
                { step: "2", title: "Turn Off Your Water Heater", desc: "For electric heaters, flip the breaker. For gas heaters, turn the gas valve to 'off' position. Never leave a water heater running without water supply." },
                { step: "3", title: "For Gas Leaks - Evacuate Immediately", desc: "Leave the house, don't flip any switches or use electronics, and call your gas company from outside. Then call us. Our emergency gas plumber will respond quickly." },
                { step: "4", title: "Document the Damage", desc: "Take photos and videos for insurance purposes. Note when you first noticed the problem and what you did to mitigate it." },
                { step: "5", title: "Clear the Area", desc: "Move furniture, electronics, and valuables away from water if safe to do so. Place towels or buckets to contain spreading water." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 bg-gray-50 rounded-lg p-5">
                  <div className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Common Emergency Repairs Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Emergency Plumbing Repairs We Handle</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team handles every type of plumbing emergency. Here are the most common repairs we perform for homeowners across Middlesex County:
            </p>
            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Burst pipe repair</h3>
                <p className="text-gray-700">Burst pipes are the most common winter emergency call we get. Pipes burst when water inside them freezes and expands, creating immense pressure. Our plumbers arrive with pipe repair clamps, replacement sections, and soldering equipment to stop the leak and complete a permanent repair, then inspect adjacent pipes for other sections at risk of freezing. For homes with recurring frozen pipe issues, we recommend insulation upgrades and heat tape installation to prevent future emergencies.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Water heater emergencies</h3>
                <p className="text-gray-700">A leaking or failing water heater can release 40-80 gallons of water into your home in minutes. We respond to leaking tanks, failed relief valves, gas control valve failures, and pilot light issues, carrying replacement parts for the most common water heater brands so most repairs happen on the spot. If your water heater is beyond repair, we provide same-day replacement options to restore your hot water quickly.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gas leak emergency response</h3>
                <p className="text-gray-700">Gas leaks are the most dangerous plumbing emergency. If you smell the rotten egg odor of natural gas, evacuate your home immediately and call your gas utility company first, then call us. Our licensed plumbers are trained in gas leak detection and repair, using electronic gas detectors to pinpoint leaks, performing professional repairs, and pressure testing all connections to verify safety before restoring your gas service.</p>
              </div>
            </div>

            {/* Frozen Pipes Blog Link Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-xl font-bold text-gray-900 mb-3">Prevent Frozen Pipe Emergencies</p>
              <p className="text-gray-700 mb-3">
                Frozen pipes are one of the leading causes of emergency plumber calls during New Jersey winters. Learn how to protect your home with our detailed guide.
              </p>
              <Link href="/blog/frozen-pipes-prevention-repair" className="text-red-700 hover:text-red-800 font-semibold">
                Read: Frozen Pipes Prevention & Repair Guide →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why choose our 24/7 emergency plumbing service"
        subheading="When you need a plumber today, you need someone reliable, fast, and professional. Here's what sets us apart."
        items={[
          { icon: "clock", title: "True 24/7 availability", description: "A real person answers 24 hours a day, 365 days a year. No answering service taking messages, you reach us directly." },
          { icon: "bolt", title: "Fast response times", description: "For East Brunswick and nearby towns, we typically arrive within 30-60 minutes, dispatching the closest available plumber." },
          { icon: "shield", title: "Same-day service", description: "Every emergency call gets same-day service. Not 'the next available appointment,' we come now, when you need us." },
          { icon: "dollar", title: "Upfront pricing", description: "Clear pricing before any work starts. No surprise fees, no bait-and-switch, you'll know exactly what you're paying." },
          { icon: "wrench", title: "Licensed master plumbers", description: "Every technician is a fully licensed NJ plumber, arriving prepared with the tools and parts for most common emergencies." },
          { icon: "home", title: "Local to Middlesex County", description: "Based in East Brunswick, not a national call center. We know the area, the homes, and the common issues in Central NJ." },
        ]}
      />

      {/* Second CTA + gallery -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Second CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 text-center">
              <p className="text-2xl font-bold mb-3">Don&apos;t Let a Plumbing Emergency Ruin Your Home</p>
              <p className="text-gray-300 mb-4">Fast, professional emergency plumbing service - day or night. Serving all of Middlesex County, NJ.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
                  Call Niti: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                  Call Danny: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Gallery Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Emergency Plumbing Work</h2>
            <p className="text-lg text-gray-600 mb-6">
              From burst pipe repairs to water heater emergencies, see examples of our professional plumbing work throughout Middlesex County.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: "/images/copper-pipe-repiping-service.jpg", alt: "Emergency pipe repair service" },
                { src: "/images/water-heater-repair-service.jpg", alt: "Emergency water heater repair" },
                { src: "/images/boiler-repair-service-nj.jpg", alt: "Emergency boiler repair" },
                { src: "/images/pex-water-line-rough-in.jpg", alt: "Water line repair and installation" },
                { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Gas line emergency service" },
                { src: "/images/commercial-copper-pipe-installation.jpg", alt: "Professional pipe installation" },
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

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="What Middlesex County homeowners say"
        subheading="Real reviews from real emergency calls."
      />

      {/* Cost + service areas + local + FAQ + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Emergency Cost Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Plumber Cost - What to Expect</h2>
            <p className="text-lg text-gray-700 mb-4">
              One of the most common questions we get is about cost. We believe in full transparency, so here is what you should know about emergency plumbing pricing:
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Emergency plumbing costs depend on the type of repair, the materials needed, and the complexity of the job - not simply the time of day. A simple faucet repair will cost less than a burst pipe repair that requires drywall access and pipe replacement. At Illyrian Plumber, we always provide an upfront estimate before beginning any work. You will never be surprised by hidden fees or charges you did not agree to.
            </p>
            <p className="text-lg text-gray-700 mb-12">
              While some plumbing companies charge premium rates for after-hours service, we keep our emergency pricing fair and competitive. We would rather earn your trust and become your go-to plumber for all future needs than overcharge you during a stressful situation. Call us for a free assessment of your emergency - there is no obligation and no pressure.
            </p>

            {/* Service Areas -- pill cloud */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 emergency plumber service areas</h3>
              <p className="text-gray-600 mb-4">Our emergency plumbers cover all of Middlesex County, NJ. No matter where you are located in Central New Jersey, we can reach you quickly.</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "East Brunswick", href: "/service-areas/east-brunswick" },
                  { label: "Edison", href: "/service-areas/edison" },
                  { label: "Old Bridge", href: "/service-areas/old-bridge" },
                  { label: "Sayreville", href: "/service-areas/sayreville" },
                  { label: "South Brunswick", href: "/service-areas/south-brunswick" },
                  { label: "North Brunswick", href: "/service-areas/north-brunswick" },
                  { label: "Monroe Township", href: "/service-areas/monroe-township" },
                  { label: "Middlesex County", href: "/service-areas/middlesex-county" },
                ].map((area) => (
                  <Link key={area.href} href={area.href} className="bg-red-50 px-3 py-1.5 rounded-full text-sm font-medium text-red-700 border border-red-200 hover:bg-red-100 transition">{area.label}</Link>
                ))}
              </div>
            </div>

            {/* Local Plumbing Contractor Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing Contractor in East Brunswick, NJ</h2>
            <p className="text-lg text-gray-700 mb-4">
              Illyrian Plumber is headquartered at <strong>697 Old Bridge Turnpike, East Brunswick, NJ 08816</strong>, just off Route 18 and a short drive from NJ Turnpike Exit 9. From our East Brunswick location, our emergency plumbers can reach most of Middlesex County within 30 to 60 minutes, including Edison, Old Bridge, Sayreville, Monroe Township, South Brunswick, and North Brunswick.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We serve homeowners and businesses throughout the area, including neighborhoods near Brunswick Square Mall, Mid-State Mall, Tamarack Hollow Park, East Brunswick Community Arts Center, and East Brunswick High School. Our trucks regularly travel Route 18, Route 1, Cranbury Road, Ryders Lane, and Milltown Road responding to emergency plumbing calls. We also service commercial properties along the Route 18 corridor and medical offices near Saint Peter&apos;s University Hospital and Robert Wood Johnson University Hospital in neighboring New Brunswick.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Because we are a true local plumbing contractor and not a national franchise, we know the homes, the water main layouts, and the common plumbing issues specific to Central New Jersey. Older homes in East Brunswick and Sayreville often have galvanized or polybutylene piping that needs replacement, while newer developments in Monroe Township and South Brunswick frequently call us for tankless water heater installations and whole-house water filtration. Whatever your address, we are the closest 24/7 emergency plumber to you.
            </p>
            <div className="rounded-xl overflow-hidden shadow-md mb-12">
              <iframe
                src={BUSINESS_INFO.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Illyrian Plumber location in East Brunswick, NJ"
              />
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Plumber FAQs</h2>
            <div className="space-y-4 mb-12">
              {faqData.map((faq, index) => (
                <details key={index} className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
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
                heading="Related emergency services"
                items={[
                  { label: "Emergency Water Heater Repair", href: "/services/water-heater-repair", description: "Leaking tanks, no hot water, failed valves" },
                  { label: "Emergency Gas Line Services", href: "/services/gas-line-repair-installation", description: "Gas leaks and line repair" },
                  { label: "Emergency Boiler Repair", href: "/services/boiler-repair-service", description: "No-heat calls and leaking circulators" },
                  { label: "Water Leak Detection", href: "/services/water-leak-detection", description: "Find hidden leaks before they flood" },
                  { label: "Pipe Repair & Repiping", href: "/services/whole-house-repiping", description: "For recurring pinhole leaks and old pipe" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Helpful resources from our blog"
              subheading="Learn more about preventing plumbing emergencies and staying safe."
              tone="dark"
              items={[
                { label: "Frozen Pipes Prevention & Repair", href: "/blog/frozen-pipes-prevention-repair", badge: "Guide" },
                { label: "Gas Leak Detection & Safety", href: "/blog/gas-leak-detection-safety", badge: "Guide" },
                { label: "Signs of a Slab Leak or Sewer Line Problem", href: "/blog/signs-of-slab-leak-sewer-line", badge: "Guide" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-3xl font-bold mb-4">Need a 24/7 Plumber Right Now?</p>
          <p className="text-xl text-red-100 mb-8">Don&apos;t wait - our same day plumber service is standing by.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Call {BUSINESS_INFO.phone2}
            </a>
          </div>
          <p className="mt-6 text-red-200">Available 24 hours a day, 7 days a week, including holidays</p>
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
