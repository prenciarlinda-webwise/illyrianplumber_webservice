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
  title: "Backflow Prevention & Testing NJ - Illyrian Plumber",
  description: "Certified backflow prevention testing, RPZ valve installation, and annual NJ certification reports in East Brunswick and Middlesex County. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/backflow-prevention-testing",
  },
  keywords: [
    "backflow testing",
    "backflow testing near me",
    "backflow testing services",
    "what is backflow testing",
    "backflow testing cost",
    "backflow testing certification",
    "backflow preventer testing",
    "backflow prevention testing",
    "backflow preventer installation",
    "RPZ valve testing NJ",
    "annual backflow test NJ",
    "backflow inspection East Brunswick",
    "backflow prevention Middlesex County",
    "certified backflow tester NJ",
    "backflow device installation NJ",
    "irrigation backflow preventer",
    "commercial backflow testing NJ",
  ],
  openGraph: {
    title: "Backflow Prevention & Testing NJ - Illyrian Plumber",
    description: "Certified backflow prevention testing, RPZ valve installation, and annual NJ certification reports in East Brunswick and Middlesex County.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/backflow-prevention-testing",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/professional-plumbing-services.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber certified backflow prevention testing in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backflow Prevention & Testing NJ - Illyrian Plumber",
    description: "Certified backflow prevention testing, RPZ valve installation, and annual NJ certification reports in East Brunswick and Middlesex County.",
    images: ["https://www.illyrianplumber.com/images/professional-plumbing-services.jpg"],
  },
};

const faqData = [
  {
    question: "What is backflow testing?",
    answer:
      "Backflow testing is an inspection of your backflow prevention device to verify it is working correctly and keeping contaminated water from flowing backward into the public drinking water supply. A certified tester uses calibrated gauges to check that the device's check valves and relief valve open and close at the correct pressures. If the device passes, a certification report is filed with your local water authority. If it fails, repairs or replacement are needed.",
  },
  {
    question: "How much does backflow testing cost in NJ?",
    answer:
      "Backflow testing in New Jersey typically costs $75 to $150 per device for a standard annual test and certification. RPZ (reduced pressure zone) assemblies require more detailed testing and may cost $100 to $175. If repairs are needed after a failed test, parts and labor are additional. We provide upfront pricing before any work begins.",
  },
  {
    question: "How often is backflow testing required in New Jersey?",
    answer:
      "New Jersey requires annual backflow preventer testing for most commercial, industrial, and irrigation system connections. Some residential connections with high-hazard conditions also require annual testing. Your local water authority in Middlesex County will notify you when your annual test is due, but it is your responsibility as the property owner to schedule and pay for the test.",
  },
  {
    question: "Who needs backflow prevention testing?",
    answer:
      "In New Jersey, backflow testing is required for any property that has a backflow prevention device installed. This includes commercial and industrial buildings, properties with irrigation systems, fire suppression systems, boiler systems, swimming pools, and any residential property where a backflow preventer was required as a condition of service. Homeowners with lawn irrigation systems almost always need annual backflow testing.",
  },
];

const faqSchema = getFaqSchema(faqData);

export default function BackflowPreventionPage() {
  const serviceSchema = getServiceSchema({
    name: "Backflow Prevention Testing and Installation",
    description:
      "Certified backflow prevention testing, annual certification, and backflow preventer installation in East Brunswick, NJ and Middlesex County.",
    slug: "backflow-prevention-testing",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Backflow Prevention Testing", path: "/services/backflow-prevention-testing" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceHero
        tagline="Certified Backflow Testing"
        heading="Backflow Prevention and Testing"
        subheading="NJ-certified backflow testing, annual certification reports, and backflow preventer installation. Protecting your drinking water and keeping you compliant with local regulations throughout Middlesex County."
        backgroundImage="/images/professional-plumbing-services.jpg"
        backgroundAlt="Certified backflow prevention testing in East Brunswick NJ"
        service="Backflow Prevention Testing"
        bullets={["NJ Certified Testers", "Official Certification Reports", "RPZ & DCVA Testing", "Licensed & Insured"]}
      />

      <StatsStrip />

      {/* Intro + what is backflow testing + device installation -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Backflow prevention is a critical part of any complete{" "}
              <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium">
                water quality and safety plan
              </Link>{" "}
              for your home or business. Without a functioning backflow preventer, contaminated water from irrigation systems, boilers, or industrial equipment can flow backward into the public drinking water supply when pressure drops. New Jersey requires annual backflow testing and certification for most backflow prevention devices, and non-compliance can result in water service shutoff. Illyrian Plumber provides certified backflow testing, device installation, and official report filing for homeowners and businesses throughout East Brunswick and Middlesex County.
            </p>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 mb-10">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                NJ-licensed master plumbers specializing in mechanical plumbing and water safety services in Middlesex County. We offer{" "}
                <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800">plumbing safety inspections</Link>,{" "}
                <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800">water filtration systems</Link>,{" "}
                <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800">water heater replacement</Link>,{" "}
                <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, and{" "}
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link>{" "}
                across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. {BUSINESS_INFO.stats.projectsCompleted} projects completed since {BUSINESS_INFO.founded}.
              </p>
            </div>

            {/* What Is Backflow Testing */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is backflow testing?</h2>
            <p className="text-lg text-gray-600 mb-4">
              Backflow is the unintended reversal of water flow in a plumbing system. Under normal conditions, water flows from the municipal supply into your building. However, when water pressure drops due to main breaks, heavy firefighting demand, or pump failures, the pressure differential can cause water to flow backward. If your property has a connected system like an irrigation line, a boiler, a swimming pool, or industrial equipment, contaminated water from those systems can be pulled back into the clean drinking water supply.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              This contamination risk is serious. Backflow incidents have introduced fertilizers, pesticides, bacteria, heavy metals, and industrial chemicals into public water mains. Backflow prevention devices are mechanical assemblies installed on your water service connection that physically block this reverse flow. But like any mechanical device, they can fail over time. Internal check valves can wear, corrode, or become fouled with debris, and the relief valve can become stuck.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Backflow testing is the annual process of verifying that your prevention device is functioning correctly. A certified tester attaches calibrated pressure gauges to the device and runs a series of checks on each internal component. If the device passes, a certification report is submitted to your water authority. If it fails, the device must be repaired or replaced before the water service can remain active.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { title: "Protects public water", desc: "Prevents contaminated water from flowing back into municipal supply lines" },
                { title: "NJ required annually", desc: "New Jersey law requires annual testing and certification for most devices" },
                { title: "Verifies device function", desc: "Confirms check valves and relief valve operate within specification" },
                { title: "Official report filed", desc: "Certification paperwork submitted directly to your local water authority" },
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Backflow Prevention Device Installation */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Backflow prevention device installation</h2>
            <p className="text-lg text-gray-600 mb-6">
              Choosing the right backflow prevention device depends on the hazard level of the connection being protected. New Jersey plumbing code and your local water authority specify which device type is required for each application. Installing an undersized or inappropriate device can result in failed inspections and required replacement at your expense. We assess your specific situation and install the correct device type.
            </p>
            <div className="space-y-5 mb-12">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reduced pressure zone (RPZ) assembly</h3>
                <p className="text-gray-600 mb-3">
                  The RPZ assembly is the highest level of backflow protection and is required where the water connection poses a high contamination hazard. This includes irrigation systems with fertilizer or pesticide injection, boiler systems using chemical additives, fire suppression systems, and industrial or commercial water connections. The RPZ uses two independent check valves with a relief valve between them. If either check valve fails, the relief valve opens and discharges water to prevent backflow. RPZ assemblies must be installed above ground and cannot be buried.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Highest hazard protection</span>
                  <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Chemical injection systems</span>
                  <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Fire suppression lines</span>
                  <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Commercial connections</span>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Double check valve assembly (DCVA)</h3>
                <p className="text-gray-600 mb-3">
                  The double check valve assembly is used for moderate hazard connections. It contains two independent spring-loaded check valves and can be installed horizontally, vertically, or below grade, making it a popular choice for residential and light commercial irrigation systems that do not use chemical injection. A DCVA is a good fit for standard lawn irrigation in East Brunswick, Edison, and Old Bridge where the only concern is non-toxic water intrusion rather than chemical contamination.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Moderate hazard protection</span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Residential irrigation</span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Can be installed underground</span>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pressure vacuum breaker (PVB)</h3>
                <p className="text-gray-600 mb-3">
                  The pressure vacuum breaker is the simplest and most cost-effective option for residential irrigation systems without chemical injection. It must be installed at least 12 inches above the highest irrigation head and cannot be used in applications where the device will be under constant pressure. PVBs are common for seasonal irrigation systems in residential neighborhoods throughout Middlesex County. They cannot be buried and must be protected from freezing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Lowest cost option</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Residential irrigation only</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Above-ground installation</span>
                </div>
              </div>
            </div>

            {/* Mid-page CTA Band */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule your annual backflow test</h3>
              <p className="text-gray-600 mb-4">NJ-certified testers. Official reports filed with your water authority.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why Middlesex County trusts our backflow testing"
        subheading="Backflow compliance comes down to two things: a properly certified tester and a report that actually gets filed. Here's how we handle both."
        items={[
          { icon: "shield", title: "NJ DEP certified testers", description: "Every test is performed by a tester holding a valid New Jersey DEP Backflow Prevention Tester certification." },
          { icon: "wrench", title: "Calibrated ASSE 1060 gauges", description: "Our differential pressure gauges are maintained to ASSE 1060 standards, so results hold up with any water authority." },
          { icon: "dollar", title: "Upfront, itemized pricing", description: "You know the testing cost before we start, and any repair options are quoted separately with no surprises." },
          { icon: "bolt", title: "Same-week scheduling", description: "Call when you get your annual testing notice and we get a certified tester out before your deadline." },
          { icon: "eye", title: "Report filed for you", description: "We complete and submit the official NJ test report directly to your local water authority, so there's no paperwork on your end." },
          { icon: "home", title: "Local to Middlesex County", description: `${BUSINESS_INFO.stats.yearsExperience} years and ${BUSINESS_INFO.stats.projectsCompleted} projects for homes and businesses across East Brunswick and Middlesex County.` },
        ]}
      />

      {/* Testing process + who needs it + cost -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Annual Backflow Testing and Certification */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Annual backflow testing and certification</h2>
            <p className="text-lg text-gray-600 mb-4">
              New Jersey requires annual testing and certification for backflow prevention devices on regulated connections. The Middlesex County water authorities, including those serving East Brunswick, Edison, Sayreville, Old Bridge, and surrounding towns, each maintain their own compliance programs and will send notices when your device is due for testing. Failing to test on schedule can result in a notice of violation and, ultimately, shutoff of your water service.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Only testers holding a valid New Jersey DEP Backflow Prevention Tester certification, earned by passing a state exam and demonstrating proper use of test equipment, are authorized to perform tests and issue official reports. Illyrian Plumber employs certified testers who use properly calibrated test gauges maintained to ASSE 1060 standards. After your test, we complete and submit the official NJ test report form to your local water authority on your behalf, so you have no paperwork to manage.
            </p>
            <div className="space-y-4 mb-12">
              {[
                { step: "1", title: "Schedule your test", desc: "Call us when you receive your annual testing notice, or proactively before the deadline. We schedule promptly to keep you in compliance." },
                { step: "2", title: "On-site testing", desc: "Our certified tester arrives at your property and attaches calibrated differential pressure gauges to your backflow device. We test each check valve and the relief valve for proper operation. The test takes 15 to 30 minutes." },
                { step: "3", title: "Pass or fail assessment", desc: "If the device passes, we document the test results on the official NJ form. If the device fails, we explain exactly which component failed and provide repair or replacement options with pricing." },
                { step: "4", title: "Repairs if needed", desc: "Many failed backflow devices can be repaired on the same visit by replacing worn check valve seats, springs, or relief valve components. If the device is beyond repair, we can replace it with the correct unit." },
                { step: "5", title: "Official report filed", desc: "We submit the completed test report to your local water authority confirming your device has passed certification. You receive a copy for your records." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 bg-gray-50 rounded-lg p-4">
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

            {/* When Do You Need Backflow Testing */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">When do you need backflow testing?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Not every property requires a backflow preventer, but many do. If you have any of the following systems on your property, you almost certainly have a backflow preventer that requires annual testing. Residential testing is typically a single irrigation backflow preventer, while commercial properties often have multiple devices, including RPZ assemblies on fire suppression or boiler lines, which makes commercial testing more involved and typically priced accordingly.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  category: "Residential",
                  items: [
                    "In-ground lawn irrigation system",
                    "Boiler with chemical water treatment",
                    "Swimming pool with direct water fill",
                    "Outdoor hose connection in commercial zone",
                    "Radiant floor heating system",
                    "Water softener with bypass connection",
                  ],
                },
                {
                  category: "Commercial",
                  items: [
                    "Fire suppression sprinkler systems",
                    "Cooling towers and HVAC systems",
                    "Restaurant and food service equipment",
                    "Medical and dental facility water lines",
                    "Car wash and industrial equipment",
                    "Any connection with chemical injection",
                  ],
                },
              ].map((col, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-3">{col.category} applications</h3>
                  <ul className="space-y-2">
                    {col.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <svg className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mb-12">
              If you are unsure whether your property requires backflow testing, contact us. We can inspect your water connections and advise on what is required under current NJ and local Middlesex County regulations.
            </p>

            {/* Backflow Testing Cost Guide */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Backflow testing cost guide</h2>
            <p className="text-lg text-gray-600 mb-6">
              Backflow testing is one of the most affordable required plumbing services. The cost to test is minimal compared to the potential consequences of an untested device, including water service shutoff and public health liability.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Pressure vacuum breaker test", range: "$75 - $125", note: "Residential irrigation, simplest device type" },
                { title: "Double check valve assembly test", range: "$85 - $140", note: "Residential or light commercial irrigation" },
                { title: "RPZ assembly test", range: "$100 - $175", note: "High hazard connections, fire suppression, boilers" },
                { title: "Multiple device testing", range: "Call for pricing", note: "Discounted rates when testing multiple devices at one site" },
                { title: "Backflow device repair", range: "$75 - $250", note: "Replacing worn check valves or relief valve seats" },
                { title: "Backflow device replacement", range: "$300 - $900+", note: "Full device replacement, depends on type and location" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-red-700 font-semibold text-lg mb-1">{item.range}</p>
                  <p className="text-gray-600 text-sm">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mb-12">
              *Prices vary based on device type, accessibility, and any repairs needed. Contact us for exact pricing.
            </p>

            {/* Mid-Content CTA 2 */}
            <div className="bg-gray-900 text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Need backflow testing or installation?</h3>
              <p className="text-gray-300 mb-4">We test, certify, repair, and install backflow prevention devices across Middlesex County. Same-week scheduling available.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold transition">
                  Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="What our Middlesex County customers say"
        subheading="Real reviews from real backflow, plumbing, and water service calls."
      />

      {/* NJ requirements + signs + FAQ + service areas + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* NJ Backflow Testing Requirements */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">NJ backflow testing requirements</h2>
            <p className="text-lg text-gray-600 mb-4">
              New Jersey backflow prevention requirements are governed by the New Jersey Safe Drinking Water Act and NJ Administrative Code Title 7, Chapter 10. These regulations require water purveyors to implement backflow prevention programs that include mandatory device installation, annual testing, and record keeping.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Middlesex County water utilities, including those serving East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick, each operate their own compliance programs under the state framework. Property owners receive annual testing notices from their utility. After testing, the certified tester submits a completed test report directly to the water authority. The property owner is responsible for the cost of testing and any necessary repairs.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key NJ requirements</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Annual testing required for all regulated devices",
                  "Testing must be performed by NJ DEP certified tester",
                  "Calibrated test gauges required (ASSE 1060 standards)",
                  "Official test report submitted to water authority",
                  "Failed devices must be repaired or replaced promptly",
                  "Property owner is responsible for all testing costs",
                  "Records must be maintained by water authority",
                  "Non-compliance can result in water service shutoff",
                ].map((req, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Signs of Backflow Problems */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs of backflow problems</h2>
            <p className="text-lg text-gray-600 mb-6">
              A failing backflow preventer does not always give obvious warning signs before it allows contamination into your water supply. However, there are some indicators that your device may need testing or replacement.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { sign: "Discolored or foul-smelling water", detail: "Brown, yellow, or bad-smelling water from taps may indicate backflow has occurred" },
                { sign: "Visible water discharge near the device", detail: "Water dripping from the RPZ relief valve indicates the device is operating abnormally" },
                { sign: "Reduced water pressure", detail: "A partially seized backflow preventer can restrict water flow and drop pressure" },
                { sign: "Overdue annual test notice", detail: "A notice from your water authority means your device needs testing now" },
                { sign: "Visible corrosion on the device", detail: "Heavy rust or mineral buildup on the assembly exterior suggests internal problems" },
                { sign: "Device is 10 or more years old", detail: "Most backflow preventers have a functional life of 10 to 15 years before replacement is recommended" },
              ].map((item, index) => (
                <div key={index} className="bg-red-50 border border-red-100 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{item.sign}</h3>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Backflow testing FAQs</h2>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Backflow testing throughout Middlesex County</h3>
              <div className="flex flex-wrap gap-2">
                {["East Brunswick", "Edison", "North Brunswick", "South Brunswick", "Old Bridge", "Sayreville", "Monroe Township", "New Brunswick", "Highland Park", "Milltown", "South River", "Spotswood"].map((area) => {
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
                  { label: "Plumbing Safety Inspections", href: "/services/plumbing-safety-inspections", description: "Catch code and safety issues before they fail an inspection" },
                  { label: "Water Filtration Systems", href: "/services/water-filtration-system", description: "Whole-house filtration and softening" },
                  { label: "Water Leak Detection", href: "/services/water-leak-detection", description: "Find hidden leaks before they cause damage" },
                  { label: "Boiler Repair Service", href: "/services/boiler-repair-service", description: "Repair and maintenance for chemically-treated boiler loops" },
                  { label: "Whole House Repiping", href: "/services/whole-house-repiping", description: "Replace aging supply lines feeding your system" },
                  { label: "Emergency Plumbing", href: "/services/emergency-plumbing", description: "24/7 response for urgent plumbing issues" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Learn more about water quality"
              tone="dark"
              items={[
                { label: "Is a Whole House Water Filter Worth It?", href: "/blog/whole-house-water-filter-worth-it", badge: "Guide" },
                { label: "Best Whole House Water Filtration Systems", href: "/blog/best-whole-house-water-filtration-systems", badge: "Guide" },
                { label: "Signs Your Water Heater Is Dying", href: "/blog/signs-water-heater-dying", badge: "Guide" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule your backflow test today</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Stay compliant with NJ requirements and protect your drinking water. Certified testing, same-week scheduling, and official reports filed for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Request Backflow Testing
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
