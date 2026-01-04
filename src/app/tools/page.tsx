import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumbing Tools & Resources - Illyrian Plumber",
  description: "Free plumbing calculators, maintenance checklists, emergency guides, and helpful resources from Illyrian Plumber Corp. Everything you need to maintain your home plumbing.",
  keywords: [
    "plumbing calculator",
    "water heater sizing",
    "plumbing maintenance checklist",
    "emergency plumbing guide",
    "plumbing resources",
  ],
};

const calculators = [
  {
    title: "Water Heater Size Calculator",
    description: "Find the right water heater capacity for your household based on number of bathrooms and family size.",
    icon: "🔥",
    href: "/tools/water-heater-calculator",
  },
  {
    title: "Water Usage Calculator",
    description: "Estimate your monthly water usage and find ways to reduce your water bill.",
    icon: "💧",
    href: "/tools/water-usage-calculator",
  },
  {
    title: "Plumbing Cost Estimator",
    description: "Get a rough estimate for common plumbing projects to help you budget.",
    icon: "💰",
    href: "/tools/cost-estimator",
  },
];

const guides = [
  {
    title: "Emergency Plumbing Guide",
    description: "Step-by-step instructions for handling common plumbing emergencies until help arrives.",
    icon: "🚨",
    downloadable: true,
  },
  {
    title: "Seasonal Maintenance Checklist",
    description: "A complete checklist to keep your plumbing in top shape throughout the year.",
    icon: "✅",
    downloadable: true,
  },
  {
    title: "Water Heater Maintenance Guide",
    description: "Learn how to flush your water heater and extend its lifespan.",
    icon: "📖",
    downloadable: true,
  },
  {
    title: "Pipe Freeze Prevention Checklist",
    description: "Essential steps to protect your pipes during New Jersey winters.",
    icon: "❄️",
    downloadable: true,
  },
];

const faqs = [
  {
    question: "What should I do if I have a burst pipe?",
    answer: "Immediately shut off your main water valve, then call us for emergency service. Open faucets to drain remaining water and avoid electrical outlets near the leak.",
  },
  {
    question: "How often should I have my water heater serviced?",
    answer: "We recommend annual maintenance for tank water heaters, including flushing sediment and checking the anode rod. Tankless units should be descaled annually.",
  },
  {
    question: "Why is my water bill suddenly high?",
    answer: "A sudden spike usually indicates a leak. Check toilets (put food coloring in the tank), look for wet spots, and monitor your water meter. Call us for leak detection if needed.",
  },
  {
    question: "How do I know if my water heater needs replacing?",
    answer: "Signs include: age over 10 years, rusty water, rumbling noises, inconsistent temperature, or frequent repairs needed. We offer free water heater assessments.",
  },
  {
    question: "How do I know if I need a new water heater?",
    answer: "Signs include: age over 10 years, rusty water, rumbling noises, inconsistent temperature, or frequent repairs. We offer free assessments.",
  },
];

export default function ToolsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/professional-plumbing-services.jpg"
            alt="Plumbing tools and resources"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-gray-900/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Plumbing Tools & Resources</h1>
            <p className="text-xl text-gray-300">
              Free calculators, guides, and checklists to help you understand and maintain your home's plumbing system.
            </p>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Calculators</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use our free calculators to help plan your plumbing projects and estimate costs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {calculators.map((calc) => (
              <div key={calc.title} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition">
                <span className="text-5xl mb-4 block">{calc.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{calc.title}</h3>
                <p className="text-gray-600 mb-6">{calc.description}</p>
                <span className="inline-block bg-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Guides & Checklists</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download our expert guides to help you maintain your plumbing and handle emergencies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {guides.map((guide) => (
              <div key={guide.title} className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition">
                <span className="text-3xl">{guide.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                  <button className="text-red-700 font-medium text-sm hover:text-red-800 transition inline-flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Quick Reference */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Emergency Quick Reference</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <span>🚰</span> Burst Pipe
                </h3>
                <ol className="space-y-2 text-red-100">
                  <li>1. Turn off main water valve immediately</li>
                  <li>2. Open faucets to drain remaining water</li>
                  <li>3. Turn off electricity if water is near outlets</li>
                  <li>4. Call us for emergency service</li>
                </ol>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <span>🔥</span> No Hot Water
                </h3>
                <ol className="space-y-2 text-red-100">
                  <li>1. Check if pilot light is on (gas heaters)</li>
                  <li>2. Check circuit breaker (electric heaters)</li>
                  <li>3. Wait 30 minutes for recovery</li>
                  <li>4. Call us if still no hot water</li>
                </ol>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <span>🚽</span> Overflowing Toilet
                </h3>
                <ol className="space-y-2 text-red-100">
                  <li>1. Remove tank lid, push flapper down</li>
                  <li>2. Turn off water valve behind toilet</li>
                  <li>3. Use a plunger with steady pressure</li>
                  <li>4. Call us if plunging doesn't work</li>
                </ol>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <span>⚠️</span> Gas Leak Smell
                </h3>
                <ol className="space-y-2 text-red-100">
                  <li>1. DO NOT turn on lights or appliances</li>
                  <li>2. Open windows and evacuate</li>
                  <li>3. Call gas company from outside</li>
                  <li>4. Call us once cleared safe</li>
                </ol>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="inline-flex items-center gap-2 bg-white text-red-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                24/7 Emergency: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-6">
                      <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/faq" className="text-red-700 font-medium hover:text-red-800 transition">
                View All FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Water Shutoff Locator */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Your Water Shut-Off Valve</h2>
                  <p className="text-gray-600 mb-6">
                    Knowing where your main water shut-off valve is located can save your home from water damage in an emergency.
                  </p>
                  <h3 className="font-semibold text-gray-900 mb-3">Common Locations:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Basement - near the front foundation wall</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Crawl space - along the wall facing the street</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Utility closet or mechanical room</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Near water meter (inside or outside)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl mb-4 block">🔧</span>
                    <p className="text-gray-600 text-sm">
                      Can't find your shut-off valve? We can help locate and label it during a service call.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Help With Your Plumbing?"
        description="Our expert team is ready to assist with any plumbing question or issue."
      />
    </>
  );
}
