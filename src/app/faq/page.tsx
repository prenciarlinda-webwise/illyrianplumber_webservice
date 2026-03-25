import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumbing FAQ - Common Questions Answered",
  description: "Answers to frequently asked plumbing questions. Learn about our services, pricing, emergency response, and more. Illyrian Plumber - East Brunswick, NJ.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/faq",
  },
  keywords: [
    "plumbing faq",
    "plumbing questions",
    "plumber questions",
    "plumbing cost",
    "emergency plumber",
    "plumbing help",
  ],
};

const faqCategories = [
  {
    category: "General Questions",
    faqs: [
      {
        question: "Are you licensed and insured?",
        answer: "Yes, we are fully licensed plumbers in the State of New Jersey and carry comprehensive liability insurance. We're happy to provide proof of licensing and insurance upon request.",
      },
      {
        question: "What areas do you serve?",
        answer: "We serve East Brunswick and surrounding communities in Central New Jersey, including New Brunswick, South River, North Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, Milltown, Highland Park, and Spotswood.",
      },
      {
        question: "Do you provide free estimates?",
        answer: "Yes, we provide free estimates for most plumbing projects. For service calls where we need to diagnose a problem, there's a service call fee that is waived if you proceed with the repair.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, checks, and all major credit cards (Visa, Mastercard, American Express, Discover). Payment is due upon completion of work.",
      },
    ],
  },
  {
    category: "Emergency Services",
    faqs: [
      {
        question: "Do you offer 24/7 emergency service?",
        answer: "Yes, we provide 24/7 emergency plumbing service for urgent situations like burst pipes, major leaks, sewage backups, and no-water emergencies. Call us anytime for emergencies.",
      },
      {
        question: "How quickly can you respond to an emergency?",
        answer: "We prioritize emergency calls and typically arrive within 30-60 minutes in our service area, depending on location and current call volume. We dispatch immediately for true emergencies.",
      },
      {
        question: "What qualifies as a plumbing emergency?",
        answer: "Plumbing emergencies include: burst or major leaking pipes, sewage backups, gas leaks, no water, flooding, and water heater failures in extreme weather. When in doubt, call us—we'll help you assess the situation.",
      },
      {
        question: "Is there an extra charge for emergency calls?",
        answer: "Emergency calls may have a service fee due to after-hours availability and urgent response. We always provide upfront pricing before starting any work—no surprises.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    faqs: [
      {
        question: "How do you price your services?",
        answer: "We provide upfront, flat-rate pricing for most services. Before starting any work, we'll explain what needs to be done and give you the exact cost. You approve the price before we begin.",
      },
      {
        question: "Do you charge by the hour?",
        answer: "For most repairs and services, we provide flat-rate pricing so you know the cost upfront. Some complex or diagnostic work may be billed hourly, but we'll always explain the pricing structure before starting.",
      },
      {
        question: "Do you require a deposit?",
        answer: "For standard service calls and repairs, no deposit is required. Larger projects or equipment orders may require a deposit. We'll discuss payment terms before scheduling.",
      },
    ],
  },
  {
    category: "Services",
    faqs: [
      {
        question: "What plumbing services do you offer?",
        answer: "We offer comprehensive plumbing services including: water heater repair/replacement, tankless water heater installation, boiler repair, leak detection and repair, bathroom and kitchen plumbing, whole house repiping, gas line services, and 24/7 emergency service.",
      },
      {
        question: "Do you work on commercial properties?",
        answer: "Yes, we provide commercial plumbing services for restaurants, retail, offices, and other businesses. We understand commercial needs including minimal disruption, code compliance, and specialized equipment.",
      },
      {
        question: "Can you install fixtures I've already purchased?",
        answer: "Yes, we install customer-supplied fixtures. Note that if there's a defect with the product, you'll need to handle the warranty with the supplier. We also supply quality fixtures if you prefer.",
      },
      {
        question: "Do you offer maintenance plans?",
        answer: "Yes, we offer maintenance plans for both residential and commercial clients. Regular maintenance prevents costly emergencies and extends the life of your plumbing systems. Contact us for details.",
      },
    ],
  },
  {
    category: "Water Heaters",
    faqs: [
      {
        question: "How long do water heaters last?",
        answer: "Traditional tank water heaters typically last 8-12 years. Tankless water heaters can last 20+ years with proper maintenance. Factors like water quality and usage affect lifespan.",
      },
      {
        question: "Should I repair or replace my water heater?",
        answer: "Generally, if your water heater is over 10 years old and needs a significant repair, replacement may be more economical. We'll give you honest advice based on your specific situation.",
      },
      {
        question: "How long does water heater replacement take?",
        answer: "Standard water heater replacement typically takes 2-4 hours. Switching from tank to tankless or changing fuel type may take longer due to additional installation requirements.",
      },
    ],
  },
  {
    category: "Gas Lines & Boilers",
    faqs: [
      {
        question: "How do I know if I have a gas leak?",
        answer: "Signs of a gas leak include the smell of rotten eggs, hissing sounds near gas lines, dead vegetation near gas pipes, or higher than normal gas bills. If you suspect a gas leak, evacuate immediately and call your gas company, then call us for repairs.",
      },
      {
        question: "How often should my boiler be serviced?",
        answer: "We recommend annual boiler maintenance to ensure safe and efficient operation. Regular service can extend the life of your boiler and prevent costly emergency repairs during the heating season.",
      },
      {
        question: "Can you install new gas lines for appliances?",
        answer: "Yes, we are licensed for gas line installation and can run new gas lines for stoves, dryers, water heaters, outdoor grills, and other gas appliances. All work is done to code with proper permits.",
      },
    ],
  },
];

export default function FAQPage() {
  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Find answers to common plumbing questions. Can&apos;t find what you&apos;re looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Quick Contact */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h2 className="font-bold text-gray-900">Have a specific question?</h2>
                  <p className="text-gray-600">We&apos;re happy to help. Call us or send a message.</p>
                </div>
                <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* FAQ Categories */}
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group bg-gray-50 rounded-lg">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                        <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-5">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            {/* Related Links */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Learn More About Our Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/emergency-plumbing" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Emergency Plumbing
                </Link>
                <Link href="/services/water-heater-repair" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Water Heater Services
                </Link>
                <Link href="/services/boiler-repair-service" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Boiler Repair
                </Link>
                <Link href="/services/bathroom-remodeling" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Bathroom Remodeling
                </Link>
                <Link href="/services/whole-house-repiping" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Whole House Repiping
                </Link>
                <Link href="/contact-us" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Still Have Questions?" description="Contact us directly. We're happy to answer any questions about your plumbing needs." />
    </>
  );
}
