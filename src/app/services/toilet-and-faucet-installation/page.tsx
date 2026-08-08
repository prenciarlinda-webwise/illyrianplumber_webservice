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
  title: "Toilet and Faucet Installation NJ - Illyrian Plumber",
  description: "Professional toilet and faucet installation in East Brunswick and Middlesex County, NJ. All major brands, upfront pricing, same-day service available.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/toilet-and-faucet-installation",
  },
  keywords: [
    "toilet installation",
    "faucet installation",
    "toilet replacement",
    "faucet replacement",
    "fixture installation",
    "toilet repair",
    "toilet installation cost",
    "toilet installation NJ",
    "faucet installation near me",
    "toilet plumber East Brunswick",
    "kitchen faucet installation",
    "bathroom faucet replacement",
    "toilet replacement cost NJ",
    "ADA toilet installation",
    "touchless faucet installation",
    "low-flow toilet installation",
    "fixture upgrade plumber",
  ],
  openGraph: {
    title: "Toilet and Faucet Installation NJ - Illyrian Plumber",
    description: "Professional toilet and faucet installation in East Brunswick and Middlesex County, NJ. All major brands, upfront pricing, same-day service available.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/toilet-and-faucet-installation",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/bathroom-remodel-marble-shower.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber toilet and faucet installation service in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toilet and Faucet Installation NJ - Illyrian Plumber",
    description: "Professional toilet and faucet installation in East Brunswick and Middlesex County, NJ. All major brands, upfront pricing, same-day service available.",
    images: ["https://www.illyrianplumber.com/images/bathroom-remodel-marble-shower.jpg"],
  },
};

const faqData = [
  {
    question: "How much does toilet installation cost in NJ?",
    answer: "Toilet installation in New Jersey typically costs $200-$500 for a standard replacement, which includes removing the old toilet, installing a new wax ring and supply line, setting the new toilet, and testing. Costs vary based on the toilet type (standard, comfort height, wall-mounted) and any additional work needed such as flange repair. Contact Illyrian Plumber for an exact quote.",
  },
  {
    question: "How much does faucet installation cost?",
    answer: "Faucet installation typically costs $150-$350 depending on the type and complexity. A simple single-handle bathroom faucet swap is on the lower end, while kitchen faucets with pull-down sprayers or wall-mounted faucets cost more due to additional connections. We install customer-provided faucets or help you select the right one.",
  },
  {
    question: "How long does it take to install a new toilet?",
    answer: "A standard toilet replacement takes about 1-2 hours for a professional plumber. This includes removing the old toilet, inspecting and possibly replacing the flange, installing a new wax ring, setting the toilet, connecting the water supply, and testing for leaks. Wall-mounted toilets or situations requiring flange repair may take longer.",
  },
  {
    question: "Can I install a toilet myself or do I need a plumber?",
    answer: "While some handy homeowners can replace a toilet, hiring a licensed plumber ensures proper installation and prevents costly mistakes. Improper wax ring seals cause leaks and water damage. A crooked installation leads to cracking. If you have an older home with non-standard flanges or need the toilet relocated, professional installation is essential.",
  },
];

const faqSchema = getFaqSchema(faqData);

export default function ToiletFaucetPage() {
  const serviceSchema = getServiceSchema({
    name: "Toilet and Faucet Installation",
    description: "Professional toilet and faucet installation in East Brunswick, NJ. Upgrade your fixtures with expert plumbing installation. All brands.",
    slug: "toilet-and-faucet-installation",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Toilet and Faucet Installation", path: "/services/toilet-and-faucet-installation" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceHero
        tagline="Fixture Specialists"
        heading="Toilet and Faucet Installation"
        subheading="Professional installation of toilets, faucets, and bathroom fixtures. We work with all major brands and ensure proper installation for years of trouble-free use throughout East Brunswick and Middlesex County, NJ."
        backgroundImage="/images/bathroom-remodel-marble-shower.jpg"
        backgroundAlt="Toilet and faucet installation in East Brunswick NJ"
        service="Toilet and Faucet Installation"
        bullets={["All Major Brands", "Proper Installation", "Licensed & Insured", "Free Estimates"]}
      />

      <StatsStrip />

      {/* Intro + toilet install + toilet repair + faucet install -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* About Illyrian Plumber */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Illyrian Plumber - fixture installation specialists in East Brunswick, NJ</h2>
              <p className="text-gray-700 leading-relaxed">
                Illyrian Plumber has installed toilets, faucets, and bathroom fixtures for homeowners across Middlesex County for over {BUSINESS_INFO.stats.yearsExperience} years. Our licensed plumbers work with every major fixture manufacturer, from budget-friendly models to premium lines, and every job includes a full leak test before we consider it done. If you are searching for toilet installation near me or need a faucet swapped out, call us for same-day service and upfront pricing.
              </p>
            </div>

            {/* Intro Content */}
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Toilets and faucets are the most-used fixtures in your home, and when they are not working properly, you notice immediately. Whether you are dealing with a constantly running toilet, a dripping faucet, or simply want to upgrade to modern, water-efficient fixtures, professional installation ensures everything works perfectly from day one.
            </p>

            {/* Toilet Installation Services */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Toilet installation services</h2>
            <p className="text-lg text-gray-600 mb-6">
              A properly installed toilet prevents leaks, conserves water, and operates reliably for decades. Our toilet installation service covers everything from basic replacements to complex relocations.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Toilet replacement</h3>
                <p className="text-gray-600 mb-4">Remove old toilet, install new one with new wax ring, supply line, and hardware. Test for proper operation and leak-free seal.</p>
                <ul className="space-y-2">
                  {[
                    "Old toilet removal & disposal",
                    "New wax ring and bolts",
                    "New supply line connection",
                    "Caulking and leak testing",
                    "Flange inspection and repair",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Toilet types we install</h3>
                <p className="text-gray-600 mb-4">We install all toilet styles and brands for residential and commercial applications.</p>
                <ul className="space-y-2">
                  {[
                    "Two-piece toilets",
                    "One-piece toilets",
                    "Comfort height toilets",
                    "Water-saving models (1.28 GPF)",
                    "ADA compliant toilets",
                    "Smart toilets and bidet seats",
                    "Wall-mounted toilets",
                  ].map((type, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mid-page CTA Band */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Need a toilet or faucet installed?</h3>
              <p className="text-gray-600 mb-4">Same-day fixture installation available. All brands welcome.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Toilet Repair Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Toilet repair services</h2>
            <p className="text-lg text-gray-600 mb-6">
              Not every toilet problem requires a full replacement. Our toilet repair service addresses common issues quickly and affordably. We carry parts for most major brands and can often complete repairs in a single visit, though if your toilet needs frequent repairs or is outdated, replacement is usually the more cost-effective option in the long run.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Running toilet - fill valve or flapper replacement",
                "Weak flush - flush valve and jet cleaning",
                "Leaking base - wax ring replacement",
                "Wobbling toilet - flange repair and re-setting",
                "Phantom flush - flapper seal replacement",
                "Slow fill - supply line and valve service",
              ].map((repair, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{repair}</span>
                </div>
              ))}
            </div>

            {/* Faucet Installation Services */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Faucet installation services</h2>
            <p className="text-lg text-gray-600 mb-6">
              A new faucet transforms the look and function of your kitchen or bathroom. Our faucet installation service ensures proper connections, no leaks, and optimal water flow for every faucet type.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { title: "Bathroom faucets", desc: "Single-handle, widespread, and centerset faucets for vanities" },
                { title: "Kitchen faucets", desc: "Pull-down, pull-out, and traditional kitchen faucets with sprayers" },
                { title: "Shower fixtures", desc: "Shower heads, valves, and complete shower systems" },
                { title: "Tub faucets", desc: "Tub spouts, freestanding tub fillers, and roman tub faucets" },
                { title: "Utility faucets", desc: "Laundry, utility sink, and outdoor hose bibs" },
                { title: "Touchless faucets", desc: "Motion-activated faucets for kitchens and bathrooms" },
              ].map((service, index) => (
                <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why homeowners choose us for fixture installation"
        items={[
          { icon: "wrench", title: "All major brands installed", description: "From Kohler and Moen to TOTO and Grohe, we install and service every major toilet and faucet brand, or help you pick the right one for your budget." },
          { icon: "shield", title: "Warranty-safe installation", description: "Many fixture manufacturers require professional installation to honor the warranty. Our licensed plumbers install to code so your warranty stays valid." },
          { icon: "clock", title: "Same-day fixture service", description: "Most toilet and faucet installations are completed in a single visit, often the same day you call." },
          { icon: "dollar", title: "Free estimates, upfront pricing", description: "You will know the exact installation cost before we start, with no surprise charges once the job is underway." },
          { icon: "home", title: "Local Middlesex County plumbers", description: `Based in East Brunswick, not a national chain. ${BUSINESS_INFO.stats.projectsCompleted} completed projects since ${BUSINESS_INFO.founded}.` },
          { icon: "eye", title: "Careful inspection every visit", description: "We check water pressure, supply valves, and drain connections before we leave, catching problems your old fixtures may have been hiding." },
        ]}
      />

      {/* Why professional install + signs + cost + brands + water savings -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Why Professional Installation */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why professional fixture installation matters</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DIY toilet and faucet installation seems straightforward, but small mistakes lead to big problems. A toilet installed without a proper wax ring seal will leak sewage water beneath the floor, causing rot and mold. A faucet with loose connections drips constantly, wasting water and staining your sink.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our licensed plumbers in East Brunswick and throughout Middlesex County make sure every fixture is installed correctly the first time. We check water pressure, inspect supply valves, verify drain connections, and test everything before we leave. If your existing plumbing has issues, such as corroded valves, damaged flanges, or inadequate supply lines, we address those problems during installation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-12">
              Professional installation also protects your manufacturer warranty. Many fixture warranties require professional installation, and a DIY install that leads to a defect claim may be denied by the manufacturer.
            </p>

            {/* Signs You Need New Fixtures */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs you need new fixtures</h2>
            <p className="text-lg text-gray-600 mb-6">
              If you notice any of these warning signs, it may be time for a toilet or faucet replacement:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                "Constant dripping or leaking",
                "Rust or corrosion visible on fixture",
                "Handles difficult to turn",
                "Low water pressure from fixture",
                "Outdated appearance affecting home value",
                "Repair parts no longer available",
                "Toilet runs constantly after repair",
                "Wobbling or loose toilet base",
                "Mineral buildup reducing flow",
                "Water stains around fixture base",
              ].map((sign, index) => (
                <div key={index} className="flex items-center gap-3 bg-amber-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mb-12">
              As a general rule, consider replacing a toilet once it is more than 20 years old or uses more than 1.6 gallons per flush. Modern low-flow models use 1.28 GPF or less, which can save hundreds of gallons of water per year.
            </p>

            {/* Toilet Installation Cost Guide */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Toilet and faucet installation cost guide</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Understanding toilet and faucet installation cost helps you budget for your fixture upgrade. Here are typical costs for installation in New Jersey:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-2">
              {[
                { task: "Standard toilet replacement", range: "$200 - $500" },
                { task: "Comfort height / ADA toilet", range: "$300 - $600" },
                { task: "Wall-mounted toilet", range: "$500 - $1,200" },
                { task: "Bathroom faucet installation", range: "$150 - $300" },
                { task: "Kitchen faucet installation", range: "$175 - $350" },
                { task: "Touchless faucet installation", range: "$200 - $400" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-50 rounded-lg p-4">
                  <span className="text-gray-700 font-medium">{item.task}</span>
                  <span className="text-red-700 font-bold whitespace-nowrap ml-4">{item.range}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mb-12">
              *Prices are for installation labor only and do not include the cost of the fixture. Prices vary based on complexity and existing plumbing condition.
            </p>

            {/* Mid-Content CTA 2 */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 text-center">
              <h3 className="text-xl font-bold mb-2">Upgrade your fixtures today</h3>
              <p className="text-gray-300 mb-4">Professional installation for any toilet or faucet brand. Same-day service available.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold transition">
                  Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Brands */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Brands we work with</h3>
              <p className="text-gray-700 mb-4">We install fixtures from all major manufacturers. Bring your own fixtures or let us help you choose the best option for your needs and budget.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {["Kohler", "Moen", "Delta", "American Standard", "TOTO", "Grohe", "Pfister", "Brizo"].map((brand, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 text-center font-medium text-gray-800 shadow-sm">
                    {brand}
                  </div>
                ))}
              </div>
              <p className="text-gray-700 text-sm">
                We also install standalone bidets and bidet seats, including TOTO Washlet models. Bidet seats need a nearby electrical outlet, and we handle the water connections and can advise you on the electrical requirements for powered units.
              </p>
            </div>

            {/* Water Saving Benefits */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Save water with modern fixtures</h2>
            <p className="text-gray-700 leading-relaxed">
              Upgrading to modern, water-efficient toilets and faucets is one of the easiest ways to reduce your water bill. Older toilets use 3.5-7 gallons per flush, while modern low-flow toilets use just 1.28 gallons, a savings of hundreds of gallons per month for a typical family. WaterSense-labeled faucets reduce flow by 30% without sacrificing performance, saving both water and the energy used to heat it.
            </p>

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="Homeowners trust our fixture installations"
        subheading="Real reviews from toilet, faucet, and fixture upgrade jobs across Middlesex County."
      />

      {/* Service areas + FAQ + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Service Areas -- pill cloud */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Toilet and faucet installation throughout Middlesex County</h3>
              <div className="flex flex-wrap gap-2">
                {["East Brunswick", "Edison", "Old Bridge", "Sayreville", "South Brunswick", "North Brunswick", "Monroe Township"].map((area) => {
                  const slug = area.toLowerCase().replace(/\s+/g, "-");
                  const hasPage = ["east-brunswick", "edison", "old-bridge", "sayreville", "south-brunswick", "north-brunswick", "monroe-township"].includes(slug);
                  return hasPage ? (
                    <Link key={area} href={`/service-areas/${slug}`} className="bg-red-50 px-3 py-1.5 rounded-full text-sm font-medium text-red-700 border border-red-200 hover:bg-red-100 transition">{area}</Link>
                  ) : (
                    <span key={area} className="bg-gray-100 px-3 py-1.5 rounded-full text-sm text-gray-600 border border-gray-200">{area}</span>
                  );
                })}
              </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Toilet and faucet installation FAQs</h2>
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
            <div className="mb-8">
              <LinkCardGrid
                heading="Related services"
                items={[
                  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling", description: "Full bathroom plumbing for remodels and renovations" },
                  { label: "Water Heater Replacement", href: "/services/water-heater-replacement", description: "Upgrade an aging or failing water heater" },
                  { label: "Tankless Water Heater", href: "/services/tankless-water-heater-installation", description: "Endless hot water in a compact wall-mounted unit" },
                  { label: "Water Heater Repair", href: "/services/water-heater-repair", description: "Same-day repair for all major brands" },
                  { label: "Whole House Repiping", href: "/services/whole-house-repiping", description: "For homes with old, corroded, or leaking supply lines" },
                  { label: "Water Filtration Systems", href: "/services/water-filtration-system", description: "Protect new fixtures from hard water buildup" },
                  { label: "Plumbing Inspections", href: "/services/plumbing-safety-inspections", description: "Catch problems before they turn into repairs" },
                  { label: "Emergency Plumbing", href: "/services/emergency-plumbing", description: "24/7 response for burst pipes and major leaks" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Helpful reading"
              subheading="Learn more about bathroom plumbing and water pressure."
              tone="dark"
              items={[
                { label: "How Long Does a Bathroom Remodel Take?", href: "/blog/how-long-bathroom-remodel-take", badge: "Guide" },
                { label: "Why Is My Water Pressure Low?", href: "/blog/why-is-water-pressure-low", badge: "Guide" },
                { label: "Tankless vs Tank Water Heater", href: "/blog/tankless-vs-tank-water-heater", badge: "Guide" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need fixtures installed?</h2>
          <p className="text-xl text-red-100 mb-8">Professional installation for toilets, faucets, and more.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Request Quote
            </Link>
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
