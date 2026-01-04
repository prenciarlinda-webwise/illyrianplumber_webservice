import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "24/7 Emergency Plumber Near Me - Same Day Plumber East Brunswick NJ",
  description: "Need a 24 hour plumber near me? Illyrian Group Corp provides 24/7 emergency plumbing services in East Brunswick & Middlesex County NJ. Same day plumber service for burst pipes, gas leaks, water heater failures. Call (347) 461-4856.",
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
  ],
};

const faqData = [
  {
    question: "Do you have a 24/7 plumber near me available right now?",
    answer: "Yes! Illyrian Group Corp provides 24/7 emergency plumbing services throughout East Brunswick, Edison, Old Bridge, Sayreville, and all of Middlesex County, NJ. Our emergency plumbers are available nights, weekends, and holidays. Call us any time at (347) 461-4856 or (718) 427-4396 for immediate assistance.",
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
          <div className="max-w-4xl mx-auto">

            {/* Intro Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                When you search for a <strong>24/7 plumber near me</strong> at 2 AM with water flooding your basement, you need a plumber who answers the phone and shows up fast. Illyrian Group Corp is your <strong>local emergency plumber</strong> serving East Brunswick, Edison, Sayreville, Old Bridge, and all of Middlesex County, NJ.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand that plumbing emergencies don&apos;t wait for convenient business hours. That&apos;s why we offer true <strong>24 hour emergency plumber</strong> service - nights, weekends, and holidays. When you need a <strong>same day plumber</strong>, we dispatch immediately and arrive quickly.
              </p>
            </div>

            {/* Emergency Situations */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Call a 24/7 Emergency Plumber</h2>
            <p className="text-lg text-gray-600 mb-6">
              Not sure if your situation requires an <strong>after hours plumber</strong>? These situations warrant an immediate call to our emergency line:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { situation: "Burst or Frozen Pipes", desc: "Water spraying or no water flow in winter" },
                { situation: "Major Water Leaks", desc: "Visible flooding or water damage spreading" },
                { situation: "Gas Leak or Gas Smell", desc: "Evacuate first, then call for emergency gas plumber" },
                { situation: "Sewer Line Backup", desc: "Sewage coming up through drains or toilets" },
                { situation: "Water Heater Failure", desc: "No hot water, leaking tank, or strange noises" },
                { situation: "Complete Loss of Water", desc: "No water anywhere in your home" },
                { situation: "Flooding from Any Source", desc: "Appliance failure, pipe break, or unknown source" },
                { situation: "Boiler Breakdown", desc: "No heat from boiler system in cold weather" },
              ].map((item, index) => (
                <div key={index} className="bg-red-50 border-l-4 border-red-600 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">{item.situation}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
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

            {/* Service Areas */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Emergency Plumber Service Areas</h3>
              <p className="text-gray-700 mb-4">
                Our <strong>24 hour plumber near me</strong> service covers all of Middlesex County, NJ:
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
                <Link href="/services/sewer-line-repair-replacement" className="text-red-700 hover:text-red-800 font-medium">Sewer Line Emergency →</Link>
                <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800 font-medium">Emergency Boiler Repair →</Link>
                <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">Water Leak Detection →</Link>
                <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Pipe Repair & Repiping →</Link>
              </div>
            </div>
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
