import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "24/7 Emergency Plumber Near Me - Same Day Plumber East Brunswick NJ",
  description: "Need a 24 hour plumber near me? Illyrian Plumber provides 24/7 emergency plumbing services in East Brunswick & Middlesex County NJ. Same day plumber service for burst pipes, gas leaks, water heater failures. Call (347) 461-4856.",
  keywords: [
    "24 7 plumber near me",
    "same day plumber near me",
    "24 hour plumber near me",
    "emergency plumber near me",
    "24/7 plumber",
    "local emergency plumber",
    "24 hour emergency plumber",
    "same day plumber",
    "after hours plumber",
    "emergency gas plumber",
    "plumber 24 hour service",
    "need a plumber today",
    "emergency plumbing services",
    "emergency plumber East Brunswick",
    "emergency plumber Middlesex County",
    "burst pipe repair NJ",
    "emergency sewer backup plumber",
    "weekend plumber NJ",
    "night plumber near me",
  ],
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
    answer: "A plumbing emergency is any situation that could cause significant property damage, health hazards, or leave you without essential services. This includes burst pipes, major water leaks, sewer backups, gas leaks, complete loss of water, water heater failures (especially in winter), and flooding. If you're unsure, call us - we're happy to assess your situation.",
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
    answer: "For water emergencies: Shut off the main water valve (usually near your water meter). For water heater issues: Turn off power (electric) or gas supply. For gas leaks: Evacuate, don't use electronics, and call from outside. For sewer backups: Stop using water and plumbing fixtures. These steps can minimize damage while you wait for our arrival.",
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
    question: "Can you help with a sewer backup emergency?",
    answer: "Absolutely. Sewer backups are serious health hazards that require immediate attention. Our emergency plumbers arrive equipped to clear sewer blockages, perform video camera inspections to diagnose the cause, and restore proper drainage. We handle tree root intrusions, collapsed sewer lines, and all types of sewer emergencies.",
  },
];

// FAQ Schema
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

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "24/7 Emergency Plumbing Service",
  description: "24 hour emergency plumber services including burst pipe repair, water heater emergencies, gas leak response, sewer backup, and flooding repair. Same day plumber service available.",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
    },
  },
  areaServed: {
    "@type": "State",
    name: "New Jersey",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: BUSINESS_INFO.phone,
    availableLanguage: "English",
  },
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

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

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/emergency-plumbing-services-nj.jpg"
            alt="24/7 Emergency plumber responding to plumbing emergency in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-yellow-400 font-bold mb-4 text-lg">24/7 EMERGENCY PLUMBER AVAILABLE NOW</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              24 Hour Emergency Plumber Near Me in East Brunswick, NJ
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Need a plumber right now? Our 24/7 emergency plumbers respond fast to burst pipes, water heater failures, gas leaks, and flooding. Same day plumber service throughout Middlesex County - we arrive when you need us most.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href={BUSINESS_INFO.phoneLink} className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Call Now: {BUSINESS_INFO.phone}
              </a>
              <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Or Call: {BUSINESS_INFO.phone2}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span>✓ 24/7 Availability</span>
              <span>✓ Same Day Service</span>
              <span>✓ Licensed & Insured</span>
              <span>✓ Fast Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-yellow-500 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-900 font-bold text-lg">
            Plumbing Emergency? Don&apos;t Wait - Call Our 24 Hour Plumber Hotline: <a href={BUSINESS_INFO.phoneLink} className="underline">{BUSINESS_INFO.phone}</a>
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Main Content */}
            <div className="lg:w-2/3">

              {/* Intro Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  When you search for a <strong>24/7 plumber near me</strong> at 2 AM with water flooding your basement, you need a plumber who answers the phone and shows up fast. Illyrian Plumber is your <strong>local emergency plumber</strong> serving East Brunswick, Edison, Sayreville, Old Bridge, and all of Middlesex County, NJ.
                </p>

                {/* About Illyrian Plumber */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6 not-prose">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">About Illyrian Plumber</h3>
                  <p className="text-gray-700 text-base">
                    Illyrian Plumber has been serving Middlesex County homeowners and businesses for over {BUSINESS_INFO.stats.yearsExperience} years. With {BUSINESS_INFO.stats.projectsCompleted} projects completed and {BUSINESS_INFO.stats.happyClients} satisfied clients, we are one of the most trusted plumbing companies in Central New Jersey. Our team of licensed master plumbers specializes in emergency plumbing, water heater services, boiler repair, gas line work, and whole-house repiping. Based in East Brunswick, we respond faster than any national chain because we are local, dedicated, and always ready.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  We understand that plumbing emergencies don&apos;t wait for convenient business hours. That&apos;s why we offer true <strong>24 hour emergency plumber</strong> service - nights, weekends, and holidays. When you need a <strong>same day plumber</strong>, we dispatch immediately and arrive quickly. Whether it is a burst pipe at midnight, a gas leak on a holiday, or a sewer backup on a Sunday morning, our <strong>after hours plumber</strong> team is ready to respond.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Many homeowners in Middlesex County have experienced the frustration of calling a plumber during an emergency only to reach a voicemail or an answering service. At Illyrian Plumber, we answer every call personally. When you call our <strong>emergency plumbing services</strong> line, you speak directly with someone who can dispatch a plumber immediately. We do not use call centers or third-party answering services because we know that every minute counts during a plumbing emergency.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our <strong>emergency plumber East Brunswick</strong> team carries fully stocked trucks with the parts and equipment needed for the most common emergency repairs. This means we can often complete your repair in a single visit without needing to source parts or schedule a follow-up. From pipe fittings and water heater components to sewer line equipment and gas line repair tools, we come prepared.
                </p>
              </div>

              {/* Emergency Situations */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Call a 24/7 Emergency Plumber</h2>
              <p className="text-lg text-gray-600 mb-6">
                Not sure if your situation requires an <strong>after hours plumber</strong>? These situations warrant an immediate call to our emergency line:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  { situation: "Burst or Frozen Pipes", desc: "Water spraying or no water flow in winter - frozen pipes can burst and cause thousands in damage if not addressed quickly" },
                  { situation: "Major Water Leaks", desc: "Visible flooding or water damage spreading - every minute of delay means more water damage to your home" },
                  { situation: "Gas Leak or Gas Smell", desc: "Evacuate first, then call for emergency gas plumber - gas leaks are life-threatening and require immediate response" },
                  { situation: "Sewer Line Backup", desc: "Sewage coming up through drains or toilets - a serious health hazard that needs emergency sewer backup plumber service" },
                  { situation: "Water Heater Failure", desc: "No hot water, leaking tank, or strange noises - especially dangerous if your water heater is gas-powered" },
                  { situation: "Complete Loss of Water", desc: "No water anywhere in your home - could indicate a main line break or frozen supply lines" },
                  { situation: "Flooding from Any Source", desc: "Appliance failure, pipe break, or unknown source - quick response prevents structural damage and mold growth" },
                  { situation: "Boiler Breakdown", desc: "No heat from boiler system in cold weather - a boiler failure in winter is a true emergency for your family's safety" },
                ].map((item, index) => (
                  <div key={index} className="bg-red-50 border-l-4 border-red-600 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900">{item.situation}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Mid-content CTA */}
              <div className="bg-red-700 text-white rounded-xl p-6 mb-12 text-center">
                <h3 className="text-2xl font-bold mb-3">Experiencing a Plumbing Emergency Right Now?</h3>
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
                When you call our <strong>24 hour plumber hotline</strong>, we&apos;ll guide you through these steps to minimize damage while we&apos;re on our way:
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
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Common Emergency Repairs Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Emergency Plumbing Repairs We Handle</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our <strong>24/7 plumber</strong> team handles every type of plumbing emergency. Here are the most common emergency repairs we perform for homeowners across Middlesex County:
              </p>
              <div className="space-y-6 mb-12">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Burst Pipe Repair</h3>
                  <p className="text-gray-700">Burst pipes are the most common reason homeowners search for a <strong>night plumber near me</strong> during winter months. Pipes burst when water inside them freezes and expands, creating immense pressure. Our emergency plumbers arrive with pipe repair clamps, replacement sections, and soldering equipment to stop the leak and complete a permanent repair. We also inspect adjacent pipes to identify other sections at risk of freezing. For homes with recurring frozen pipe issues, we recommend insulation upgrades and heat tape installation to prevent future emergencies.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Water Heater Emergencies</h3>
                  <p className="text-gray-700">A leaking or failing water heater can release 40-80 gallons of water into your home in minutes. Our <strong>same day plumber</strong> team responds to water heater emergencies including leaking tanks, failed relief valves, gas control valve failures, and pilot light issues. We carry replacement parts for the most common water heater brands and can often complete repairs on the spot. If your water heater is beyond repair, we provide same-day replacement options to restore your hot water quickly.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sewer Backup and Drain Emergencies</h3>
                  <p className="text-gray-700">Sewer backups create unsanitary conditions that require immediate attention from an <strong>emergency sewer backup plumber</strong>. Raw sewage backing up into your home is a health hazard that can contaminate your living space. Our emergency plumbers use professional drain cleaning equipment and sewer cameras to clear blockages and identify the root cause, whether it is tree root intrusion, a collapsed pipe, or a grease buildup. We restore proper drainage and advise on preventive measures.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Gas Leak Emergency Response</h3>
                  <p className="text-gray-700">Gas leaks are the most dangerous plumbing emergency. If you smell the rotten egg odor of natural gas, evacuate your home immediately and call your gas utility company first, then call our <strong>emergency gas plumber</strong> line. Our licensed plumbers are trained in gas leak detection and repair. We use electronic gas detectors to pinpoint leaks, perform professional repairs, and pressure test all connections to verify safety before restoring your gas service.</p>
                </div>
              </div>

              {/* Frozen Pipes Blog Link Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Prevent Frozen Pipe Emergencies</h3>
                <p className="text-gray-700 mb-3">
                  Frozen pipes are one of the leading causes of emergency plumber calls during New Jersey winters. Learn how to protect your home with our detailed guide.
                </p>
                <Link href="/blog/frozen-pipes-prevention-repair" className="text-red-700 hover:text-red-800 font-semibold">
                  Read: Frozen Pipes Prevention & Repair Guide →
                </Link>
              </div>

              {/* Why Choose Us */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our 24/7 Emergency Plumbing Service</h2>
              <p className="text-lg text-gray-600 mb-6">
                When you <strong>need a plumber today</strong>, you need someone reliable, fast, and professional. Here&apos;s what sets our emergency plumbing service apart:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "True 24/7 Availability", desc: "Our phone is answered by a real person 24 hours a day, 7 days a week, 365 days a year. We don't use answering services that take messages - when you call, you reach us directly." },
                  { title: "Fast Response Times", desc: "For East Brunswick and nearby towns, we typically arrive within 30-60 minutes. We dispatch the closest available plumber to your location immediately." },
                  { title: "Same Day Plumber Service", desc: "Every emergency call gets same day service. We don't schedule you for 'the next available appointment' - we come now, when you need us." },
                  { title: "Upfront Emergency Pricing", desc: "We provide clear pricing before starting any work. No surprise fees, no bait-and-switch tactics. You'll know exactly what you're paying." },
                  { title: "Licensed Master Plumbers", desc: "Every emergency technician is a fully licensed NJ plumber with experience handling high-pressure situations. We arrive prepared with the tools and parts for most common emergencies." },
                  { title: "Local to Middlesex County", desc: "Based in East Brunswick, we're your local emergency plumber - not a national call center. We know the area, the homes, and the common plumbing issues in Central NJ." },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Second CTA */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 text-center">
                <h3 className="text-2xl font-bold mb-3">Don&apos;t Let a Plumbing Emergency Ruin Your Home</h3>
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
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

              {/* Emergency Cost Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Plumber Cost - What to Expect</h2>
              <p className="text-lg text-gray-700 mb-4">
                One of the most common questions homeowners have when searching for a <strong>24 hour emergency plumber</strong> is about cost. We believe in full transparency, so here is what you should know about emergency plumbing pricing:
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Emergency plumbing costs depend on the type of repair, the materials needed, and the complexity of the job - not simply the time of day. A simple faucet repair will cost less than a burst pipe repair that requires drywall access and pipe replacement. At Illyrian Plumber, we always provide an upfront estimate before beginning any work. You will never be surprised by hidden fees or charges you did not agree to.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                While some plumbing companies charge premium rates for after-hours service, we keep our emergency pricing fair and competitive. We would rather earn your trust and become your go-to plumber for all future needs than overcharge you during a stressful situation. Call us for a free assessment of your emergency - there is no obligation and no pressure.
              </p>

              {/* Related Blog Posts */}
              <div className="bg-gray-50 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources from Our Blog</h3>
                <p className="text-gray-600 mb-4">Learn more about preventing plumbing emergencies and staying safe:</p>
                <div className="space-y-3">
                  <Link href="/blog/frozen-pipes-prevention-repair" className="block text-red-700 hover:text-red-800 font-medium">
                    Frozen Pipes Prevention & Repair - How to Protect Your Home This Winter →
                  </Link>
                  <Link href="/blog/gas-leak-detection-safety" className="block text-red-700 hover:text-red-800 font-medium">
                    Gas Leak Detection & Safety - What Every Homeowner Should Know →
                  </Link>
                  <Link href="/blog/signs-of-slab-leak-sewer-line" className="block text-red-700 hover:text-red-800 font-medium">
                    Signs of a Slab Leak or Sewer Line Problem →
                  </Link>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Emergency Plumber Service Areas</h3>
                <p className="text-gray-700 mb-4">
                  Our <strong>24 hour plumber near me</strong> service covers all of Middlesex County, NJ. No matter where you are located in Central New Jersey, our emergency plumbers can reach you quickly.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-700">
                  <span>East Brunswick</span>
                  <span>Edison</span>
                  <span>Old Bridge</span>
                  <span>Sayreville</span>
                  <span>South Brunswick</span>
                  <span>North Brunswick</span>
                  <span>Monroe Township</span>
                  <span>And surrounding areas</span>
                </div>
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Plumber FAQs</h2>
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Emergency Services</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800 font-medium">Emergency Water Heater Repair →</Link>
                  <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 font-medium">Emergency Gas Line Services →</Link>
                  <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800 font-medium">Emergency Boiler Repair →</Link>
                  <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">Water Leak Detection →</Link>
                  <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Pipe Repair & Repiping →</Link>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:w-1/3">
              <div className="lg:sticky lg:top-24 space-y-6">

                {/* Call Now Box */}
                <div className="bg-red-700 text-white rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">24/7 Emergency Line</h3>
                  <p className="text-red-100 mb-4 text-sm">Speak directly with a plumber - no answering service</p>
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
                    <li><Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">Water Leak Detection</Link></li>
                  </ul>
                </div>

                {/* Related Blog Posts */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Related Blog Posts</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/blog/frozen-pipes-prevention-repair" className="text-red-700 hover:text-red-800">
                        Frozen Pipes Prevention & Repair →
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/gas-leak-detection-safety" className="text-red-700 hover:text-red-800">
                        Gas Leak Detection & Safety →
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/signs-of-slab-leak-sewer-line" className="text-red-700 hover:text-red-800">
                        Signs of Slab Leak or Sewer Line Problems →
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
          <h2 className="text-3xl font-bold mb-4">Need a 24/7 Plumber Right Now?</h2>
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
    </>
  );
}
