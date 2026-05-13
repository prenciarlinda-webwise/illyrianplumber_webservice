import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import {
  getServiceSchema,
  getFaqSchema,
  getBreadcrumbSchema,
} from "@/lib/schemas";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Toilet and Faucet Installation NJ",
  description: "Professional toilet and faucet installation in East Brunswick & Middlesex County, NJ. Toilet replacement, faucet upgrade, fixture installation for all major brands. Call (347) 461-4856.",
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
    title: "Toilet and Faucet Installation NJ",
    description: "Professional toilet and faucet installation in East Brunswick & Middlesex County, NJ. Toilet replacement, faucet upgrade, and fixture installation for all major brands.",
    type: "website",
  },
};

const faqData = [
  {
    question: "How much does toilet installation cost in NJ?",
    answer: "Toilet installation in New Jersey typically costs $200-$500 for a standard replacement, which includes removing the old toilet, installing a new wax ring and supply line, setting the new toilet, and testing. Costs vary based on the toilet type (standard, comfort height, wall-mounted) and any additional work needed such as flange repair. Contact Illyrian Plumber for an exact quote.",
  },
  {
    question: "How long does it take to install a new toilet?",
    answer: "A standard toilet replacement takes about 1-2 hours for a professional plumber. This includes removing the old toilet, inspecting and possibly replacing the flange, installing a new wax ring, setting the toilet, connecting the water supply, and testing for leaks. Wall-mounted toilets or situations requiring flange repair may take longer.",
  },
  {
    question: "Can I install a toilet myself or do I need a plumber?",
    answer: "While some handy homeowners can replace a toilet, hiring a licensed plumber ensures proper installation and prevents costly mistakes. Improper wax ring seals cause leaks and water damage. A crooked installation leads to cracking. If you have an older home with non-standard flanges or need the toilet relocated, professional installation is essential.",
  },
  {
    question: "How much does faucet installation cost?",
    answer: "Faucet installation typically costs $150-$350 depending on the type and complexity. A simple single-handle bathroom faucet swap is on the lower end, while kitchen faucets with pull-down sprayers or wall-mounted faucets cost more due to additional connections. We install customer-provided faucets or help you select the right one.",
  },
  {
    question: "What brands of toilets and faucets do you install?",
    answer: "We install all major brands including Kohler, Moen, Delta, American Standard, TOTO, Grohe, Pfister, Brizo, and more. You can purchase your own fixtures or we can help you choose based on your needs and budget. We have experience with standard and premium fixture lines.",
  },
  {
    question: "How do I know when to replace my toilet?",
    answer: "Consider replacing your toilet if it runs constantly, requires frequent repairs, has visible cracks, wobbles on the base, is more than 20 years old, or uses more than 1.6 gallons per flush. Modern low-flow toilets use 1.28 GPF or less, saving hundreds of gallons per year and reducing your water bill.",
  },
  {
    question: "Do you repair toilets or only replace them?",
    answer: "We do both. Common toilet repairs include replacing fill valves, flappers, flush handles, and wax rings. We also fix running toilets, weak flushes, and leaking bases. However, if your toilet needs frequent repairs or is outdated, replacement is often more cost-effective in the long run.",
  },
  {
    question: "Can you install a bidet or bidet seat?",
    answer: "Yes, we install standalone bidets, bidet seats (like TOTO Washlet), and bidet attachments. Bidet seats require a nearby electrical outlet and proper water connections. We handle all the plumbing and can advise on electrical requirements for powered bidet seats.",
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

      {/* Two-Column Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-3xl">

              {/* Intro */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Toilets and faucets are the most-used fixtures in your home - and when they are not working properly, you notice immediately. Whether you are dealing with a constantly running toilet, a dripping faucet, or simply want to upgrade to modern, water-efficient fixtures, <strong>professional installation</strong> ensures everything works perfectly from day one.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 mb-10">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in fixture installation and bathroom plumbing in Middlesex County, NJ. We offer <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">bathroom remodeling</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800">water filtration</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
                </p>
              </div>

              {/* Toilet Installation Services */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Toilet Installation Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                A properly installed toilet prevents leaks, conserves water, and operates reliably for decades. Our <strong>toilet installation</strong> service covers everything from basic replacements to complex relocations.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Toilet Replacement</h3>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Toilet Types We Install</h3>
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

              {/* Mid-Content CTA */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Need a Toilet or Faucet Installed?</h3>
                <p className="text-gray-600 mb-4">Same-day fixture installation available. All brands welcome.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Toilet Repair Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Toilet Repair Services</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Not every toilet problem requires a full replacement. Our <strong>toilet repair</strong> service addresses common issues quickly and affordably. We carry parts for most major brands and can often complete repairs in a single visit.
                </p>
              </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Faucet Installation Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                A new faucet transforms the look and function of your kitchen or bathroom. Our <strong>faucet installation</strong> service ensures proper connections, no leaks, and optimal water flow for every faucet type.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {[
                  { title: "Bathroom Faucets", desc: "Single-handle, widespread, and centerset faucets for vanities" },
                  { title: "Kitchen Faucets", desc: "Pull-down, pull-out, and traditional kitchen faucets with sprayers" },
                  { title: "Shower Fixtures", desc: "Shower heads, valves, and complete shower systems" },
                  { title: "Tub Faucets", desc: "Tub spouts, freestanding tub fillers, and roman tub faucets" },
                  { title: "Utility Faucets", desc: "Laundry, utility sink, and outdoor hose bibs" },
                  { title: "Touchless Faucets", desc: "Motion-activated faucets for kitchens and bathrooms" },
                ].map((service, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>

              {/* Why Professional Installation */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Professional Fixture Installation Matters</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  DIY toilet and faucet installation seems straightforward, but small mistakes lead to big problems. A toilet installed without a proper wax ring seal will leak sewage water beneath the floor, causing rot and mold. A faucet with loose connections drips constantly, wasting water and staining your sink.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our licensed plumbers in <strong>East Brunswick</strong> and throughout <strong>Middlesex County</strong> ensure every fixture is installed correctly the first time. We check water pressure, inspect supply valves, verify drain connections, and test everything before we leave. If your existing plumbing has issues - corroded valves, damaged flanges, or inadequate supply lines - we address those problems during installation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Professional <strong>fixture installation</strong> also protects your manufacturer warranty. Many fixture warranties require professional installation - a DIY install that leads to a defect claim may be denied by the manufacturer.
                </p>
              </div>

              {/* Signs You Need New Fixtures */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs You Need New Fixtures</h2>
              <p className="text-lg text-gray-600 mb-6">
                If you notice any of these warning signs, it may be time for a <strong>toilet replacement</strong> or <strong>faucet replacement</strong>:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
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

              {/* Toilet Installation Cost Guide */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Toilet and Faucet Installation Cost Guide</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Understanding <strong>toilet installation cost</strong> and faucet installation pricing helps you budget for your fixture upgrade. Here are typical costs for installation in New Jersey:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
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
                <h3 className="text-xl font-bold mb-2">Upgrade Your Fixtures Today</h3>
                <p className="text-gray-300 mb-4">Professional installation for any toilet or faucet brand. Same-day service available.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold transition">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Brands */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Brands We Work With</h3>
                <p className="text-gray-700 mb-4">We install fixtures from all major manufacturers. Bring your own fixtures or let us help you choose the best option for your needs and budget.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Kohler", "Moen", "Delta", "American Standard", "TOTO", "Grohe", "Pfister", "Brizo"].map((brand, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 text-center font-medium text-gray-800 shadow-sm">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>

              {/* Water Saving Benefits */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Save Water with Modern Fixtures</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Upgrading to modern, water-efficient toilets and faucets is one of the easiest ways to reduce your water bill. Older toilets use 3.5-7 gallons per flush, while modern <strong>low-flow toilets</strong> use just 1.28 gallons. That is a savings of hundreds of gallons per month for a typical family. WaterSense-labeled faucets reduce flow by 30% without sacrificing performance, saving both water and the energy used to heat it.
                </p>
              </div>

              {/* Blog Links */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Helpful Reading</h3>
                <p className="text-gray-700 mb-4">Learn more about bathroom plumbing and water pressure:</p>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog/how-long-bathroom-remodel-take" className="text-red-700 hover:text-red-800 font-semibold">
                      How Long Does a Bathroom Remodel Take? &rarr;
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:text-red-800 font-semibold">
                      Why Is My Water Pressure Low? &rarr;
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service Areas */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Toilet and Faucet Installation Service Areas</h3>
                <p className="text-gray-700 mb-4">
                  We provide professional <strong>toilet and faucet installation</strong> throughout Middlesex County, NJ:
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Toilet and Faucet Installation FAQs</h2>
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
                  <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800 font-medium">Bathroom Remodeling &rarr;</Link>
                  <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800 font-medium">Water Heater Replacement &rarr;</Link>
                  <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium">Water Filtration &rarr;</Link>
                  <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections &rarr;</Link>
                  <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping &rarr;</Link>
                  <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Plumbing &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                {/* Call Now */}
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need Fixtures Installed?</p>
                  <p className="text-gray-600 text-sm mb-4">Professional toilet and faucet installation.</p>
                  <a
                    href={BUSINESS_INFO.phoneLink}
                    className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2"
                  >
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a
                    href={BUSINESS_INFO.phone2Link}
                    className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full"
                  >
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>

                {/* Service Areas */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Service Areas</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>East Brunswick</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Edison</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Sayreville</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Old Bridge</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Monroe Township</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>South Brunswick</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>North Brunswick</li>
                  </ul>
                </div>

                {/* Services */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our Services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/bathroom-remodeling" className="text-gray-700 hover:text-red-700 transition">Bathroom Remodeling</Link></li>
                    <li><Link href="/services/tankless-water-heater-installation" className="text-gray-700 hover:text-red-700 transition">Tankless Water Heater</Link></li>
                    <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                    <li><Link href="/services/water-filtration-system" className="text-gray-700 hover:text-red-700 transition">Water Filtration</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>

                {/* Related Blog */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Helpful Articles</p>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/blog/how-long-bathroom-remodel-take" className="text-gray-700 hover:text-red-700 transition leading-snug block">How Long Does a Bathroom Remodel Take?</Link>
                    </li>
                    <li>
                      <Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition leading-snug block">Why Is My Water Pressure Low?</Link>
                    </li>
                    <li>
                      <Link href="/blog/tankless-vs-tank-water-heater" className="text-gray-700 hover:text-red-700 transition leading-snug block">Tankless vs Tank Water Heater</Link>
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
          <h2 className="text-3xl font-bold mb-4">Need Fixtures Installed?</h2>
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
    </>
  );
}
