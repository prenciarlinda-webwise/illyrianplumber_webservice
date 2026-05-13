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
  title: "Backflow Prevention & Testing East Brunswick NJ - Certified Testing",
  description:
    "Certified backflow prevention testing and installation in East Brunswick and Middlesex County, NJ. Annual backflow testing, RPZ valve installation, and NJ-required certification reports. Call (347) 461-4856.",
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
    title: "Backflow Prevention & Testing East Brunswick NJ - Certified Testing",
    description: "Certified backflow prevention testing and installation in East Brunswick and Middlesex County, NJ. Annual testing, RPZ valve installation, and NJ certification reports.",
    type: "website",
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
  {
    question: "What happens during a backflow test?",
    answer:
      "During a backflow test, a certified tester shuts off the downstream water supply and attaches calibrated differential pressure gauges to the test cocks on your backflow prevention device. The tester checks that each check valve closes tightly and holds pressure, and that the relief valve opens at the correct pressure differential. The entire test takes 15 to 30 minutes. Results are recorded on a state-approved test form and submitted to your water authority.",
  },
  {
    question: "What is NJ backflow testing certification?",
    answer:
      "Backflow testing certification in New Jersey means the test must be performed by a tester who holds a valid NJ DEP Backflow Prevention Tester certification. This certification requires passing a state exam and demonstrating proper use of test equipment. The tester must also use calibrated test gauges. Illyrian Plumber employs NJ-certified backflow testers who file official reports with your local water authority after every test.",
  },
  {
    question: "What is the difference between residential and commercial backflow testing?",
    answer:
      "Residential backflow testing most commonly involves irrigation system backflow preventers such as pressure vacuum breakers (PVB) or double check valve assemblies. Commercial backflow testing is more complex, often involving RPZ assemblies on fire suppression systems, boiler connections, or process water lines. Commercial properties may have multiple devices requiring testing. Both require certified testers and official report submission, but commercial testing is typically more involved and priced accordingly.",
  },
  {
    question: "What types of backflow prevention devices are there?",
    answer:
      "The three most common backflow prevention devices are the Reduced Pressure Zone (RPZ) assembly, the Double Check Valve Assembly (DCVA), and the Pressure Vacuum Breaker (PVB). RPZ assemblies provide the highest level of protection and are required where there is a high contamination hazard such as irrigation with fertilizer injection or chemical facilities. Double check valves are used for moderate hazard connections like irrigation without chemical injection. Pressure vacuum breakers are the simplest and least expensive option for above-ground, non-continuous-pressure irrigation applications.",
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

      {/* Two-Column Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-3xl">

              {/* Intro */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Backflow prevention is a critical part of any complete{" "}
                  <Link
                    href="/services/water-filtration-system"
                    className="text-red-700 hover:text-red-800 font-medium"
                  >
                    water quality and safety plan
                  </Link>{" "}
                  for your home or business. Without a functioning backflow preventer, contaminated
                  water from irrigation systems, boilers, or industrial equipment can flow backward
                  into the public drinking water supply when pressure drops. New Jersey requires
                  annual <strong>backflow testing</strong> and certification for most backflow
                  prevention devices, and non-compliance can result in water service shutoff.
                  Illyrian Plumber provides certified backflow testing, device installation, and
                  official report filing for homeowners and businesses throughout East Brunswick and
                  Middlesex County.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 mb-10">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  NJ-licensed master plumbers specializing in mechanical plumbing and water safety
                  services in Middlesex County. We offer{" "}
                  <Link
                    href="/services/plumbing-safety-inspections"
                    className="text-red-700 hover:text-red-800"
                  >
                    plumbing safety inspections
                  </Link>
                  ,{" "}
                  <Link
                    href="/services/water-filtration-system"
                    className="text-red-700 hover:text-red-800"
                  >
                    water filtration systems
                  </Link>
                  ,{" "}
                  <Link
                    href="/services/water-heater-replacement"
                    className="text-red-700 hover:text-red-800"
                  >
                    water heater replacement
                  </Link>
                  ,{" "}
                  <Link
                    href="/services/whole-house-repiping"
                    className="text-red-700 hover:text-red-800"
                  >
                    whole house repiping
                  </Link>
                  , and{" "}
                  <Link
                    href="/services/emergency-plumbing"
                    className="text-red-700 hover:text-red-800"
                  >
                    24/7 emergency plumbing
                  </Link>{" "}
                  across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South
                  Brunswick, and North Brunswick. 750+ projects completed since 2010.
                </p>
              </div>

              {/* What Is Backflow Testing */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Backflow Testing?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Backflow is the unintended reversal of water flow in a plumbing system. Under
                normal conditions, water flows from the municipal supply into your building.
                However, when water pressure drops due to main breaks, heavy firefighting demand,
                or pump failures, the pressure differential can cause water to flow backward. If
                your property has a connected system like an irrigation line, a boiler, a swimming
                pool, or industrial equipment, contaminated water from those systems can be pulled
                back into the clean drinking water supply.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                This contamination risk is serious. Backflow incidents have introduced fertilizers,
                pesticides, bacteria, heavy metals, and industrial chemicals into public water
                mains. Backflow prevention devices are mechanical assemblies installed on your
                water service connection that physically block this reverse flow. But like any
                mechanical device, they can fail over time. Internal check valves can wear,
                corrode, or become fouled with debris. The relief valve can become stuck.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Backflow testing</strong> is the annual process of verifying that your
                prevention device is functioning correctly. A certified tester attaches calibrated
                pressure gauges to the device and runs a series of checks on each internal
                component. If the device passes, a certification report is submitted to your water
                authority. If it fails, the device must be repaired or replaced before the water
                service can remain active.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  {
                    icon: "shield",
                    title: "Protects Public Water",
                    desc: "Prevents contaminated water from flowing back into municipal supply lines",
                  },
                  {
                    icon: "doc",
                    title: "NJ Required Annually",
                    desc: "New Jersey law requires annual testing and certification for most devices",
                  },
                  {
                    icon: "check",
                    title: "Verifies Device Function",
                    desc: "Confirms check valves and relief valve operate within specification",
                  },
                  {
                    icon: "report",
                    title: "Official Report Filed",
                    desc: "Certification paperwork submitted directly to your local water authority",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Backflow Prevention Device Installation */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Backflow Prevention Device Installation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Choosing the right backflow prevention device depends on the hazard level of the
                connection being protected. New Jersey plumbing code and your local water authority
                specify which device type is required for each application. Installing an
                undersized or inappropriate device can result in failed inspections and required
                replacement at your expense. We assess your specific situation and install the
                correct device type.
              </p>
              <div className="space-y-5 mb-12">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Reduced Pressure Zone (RPZ) Assembly
                  </h3>
                  <p className="text-gray-600 mb-3">
                    The RPZ assembly is the highest level of backflow protection and is required
                    where the water connection poses a high contamination hazard. This includes
                    irrigation systems with fertilizer or pesticide injection, boiler systems using
                    chemical additives, fire suppression systems, and industrial or commercial water
                    connections. The RPZ uses two independent check valves with a relief valve
                    between them. If either check valve fails, the relief valve opens and discharges
                    water to prevent backflow. RPZ assemblies must be installed above ground and
                    cannot be buried.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                      Highest hazard protection
                    </span>
                    <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                      Chemical injection systems
                    </span>
                    <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                      Fire suppression lines
                    </span>
                    <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                      Commercial connections
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Double Check Valve Assembly (DCVA)
                  </h3>
                  <p className="text-gray-600 mb-3">
                    The double check valve assembly is used for moderate hazard connections. It
                    contains two independent spring-loaded check valves and can be installed
                    horizontally, vertically, or below grade, making it a popular choice for
                    residential and light commercial irrigation systems that do not use chemical
                    injection. A DCVA is a good fit for standard lawn irrigation in East Brunswick,
                    Edison, and Old Bridge where the only concern is non-toxic water intrusion
                    rather than chemical contamination.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                      Moderate hazard protection
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                      Residential irrigation
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                      Can be installed underground
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Pressure Vacuum Breaker (PVB)
                  </h3>
                  <p className="text-gray-600 mb-3">
                    The pressure vacuum breaker is the simplest and most cost-effective option for
                    residential irrigation systems without chemical injection. It must be installed
                    at least 12 inches above the highest irrigation head and cannot be used in
                    applications where the device will be under constant pressure. PVBs are common
                    for seasonal irrigation systems in residential neighborhoods throughout
                    Middlesex County. They cannot be buried and must be protected from freezing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      Lowest cost option
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      Residential irrigation only
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      Above-ground installation
                    </span>
                  </div>
                </div>
              </div>

              {/* Mid-Content CTA 1 */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Schedule Your Annual Backflow Test
                </h3>
                <p className="text-gray-600 mb-4">
                  NJ-certified testers. Official reports filed with your water authority.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={BUSINESS_INFO.phoneLink}
                    className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                  </a>
                  <a
                    href={BUSINESS_INFO.phone2Link}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Annual Backflow Testing and Certification */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Annual Backflow Testing and Certification
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                New Jersey requires annual testing and certification for backflow prevention
                devices on regulated connections. The Middlesex County water authorities, including
                those serving East Brunswick, Edison, Sayreville, Old Bridge, and surrounding
                towns, each maintain their own compliance programs and will send notices when your
                device is due for testing. Failing to test on schedule can result in a notice of
                violation and, ultimately, shutoff of your water service.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Only testers holding a valid New Jersey DEP Backflow Prevention Tester
                certification are authorized to perform tests and issue official reports. Illyrian
                Plumber employs certified testers who use properly calibrated test gauges maintained
                to ASSE 1060 standards. After your test, we complete and submit the official NJ
                test report form to your local water authority on your behalf, so you have no
                paperwork to manage.
              </p>
              <div className="space-y-4 mb-12">
                {[
                  {
                    step: "1",
                    title: "Schedule Your Test",
                    desc: "Call us when you receive your annual testing notice, or proactively before the deadline. We schedule promptly to keep you in compliance.",
                  },
                  {
                    step: "2",
                    title: "On-Site Testing",
                    desc: "Our certified tester arrives at your property and attaches calibrated differential pressure gauges to your backflow device. We test each check valve and the relief valve for proper operation. The test takes 15 to 30 minutes.",
                  },
                  {
                    step: "3",
                    title: "Pass or Fail Assessment",
                    desc: "If the device passes, we document the test results on the official NJ form. If the device fails, we explain exactly which component failed and provide repair or replacement options with pricing.",
                  },
                  {
                    step: "4",
                    title: "Repairs If Needed",
                    desc: "Many failed backflow devices can be repaired on the same visit by replacing worn check valve seats, springs, or relief valve components. If the device is beyond repair, we can replace it with the correct unit.",
                  },
                  {
                    step: "5",
                    title: "Official Report Filed",
                    desc: "We submit the completed test report to your local water authority confirming your device has passed certification. You receive a copy for your records.",
                  },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                When Do You Need Backflow Testing?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Not every property requires a backflow preventer, but many do. If you have any of
                the following systems on your property, you almost certainly have a backflow
                preventer that requires annual testing.
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
                    <h3 className="font-bold text-gray-900 mb-3">{col.category} Applications</h3>
                    <ul className="space-y-2">
                      {col.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <svg
                            className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
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
                If you are unsure whether your property requires backflow testing, contact us. We
                can inspect your water connections and advise on what is required under current NJ
                and local Middlesex County regulations.
              </p>

              {/* Backflow Testing Cost Guide */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Backflow Testing Cost Guide
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Backflow testing is one of the most affordable required plumbing services. The
                cost to test is minimal compared to the potential consequences of an untested
                device, including water service shutoff and public health liability.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    title: "Pressure Vacuum Breaker Test",
                    range: "$75 - $125",
                    note: "Residential irrigation, simplest device type",
                  },
                  {
                    title: "Double Check Valve Assembly Test",
                    range: "$85 - $140",
                    note: "Residential or light commercial irrigation",
                  },
                  {
                    title: "RPZ Assembly Test",
                    range: "$100 - $175",
                    note: "High hazard connections, fire suppression, boilers",
                  },
                  {
                    title: "Multiple Device Testing",
                    range: "Call for pricing",
                    note: "Discounted rates when testing multiple devices at one site",
                  },
                  {
                    title: "Backflow Device Repair",
                    range: "$75 - $250",
                    note: "Replacing worn check valves or relief valve seats",
                  },
                  {
                    title: "Backflow Device Replacement",
                    range: "$300 - $900+",
                    note: "Full device replacement, depends on type and location",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                  >
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-red-700 font-semibold text-lg mb-1">{item.range}</p>
                    <p className="text-gray-600 text-sm">{item.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-12">
                *Prices vary based on device type, accessibility, and any repairs needed. Contact
                us for exact pricing.
              </p>

              {/* Mid-Content CTA 2 */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 text-center">
                <h3 className="text-xl font-bold mb-2">Need Backflow Testing or Installation?</h3>
                <p className="text-gray-300 mb-4">
                  We test, certify, repair, and install backflow prevention devices across
                  Middlesex County. Same-week scheduling available.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={BUSINESS_INFO.phoneLink}
                    className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                  </a>
                  <a
                    href={BUSINESS_INFO.phone2Link}
                    className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* NJ Backflow Testing Requirements */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                NJ Backflow Testing Requirements
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                New Jersey backflow prevention requirements are governed by the New Jersey Safe
                Drinking Water Act and NJ Administrative Code Title 7, Chapter 10. These
                regulations require water purveyors to implement backflow prevention programs that
                include mandatory device installation, annual testing, and record keeping.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Middlesex County water utilities, including those serving East Brunswick, Edison,
                Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick,
                each operate their own compliance programs under the state framework. Property
                owners receive annual testing notices from their utility. After testing, the
                certified tester submits a completed test report directly to the water authority.
                The property owner is responsible for the cost of testing and any necessary repairs.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Key NJ Requirements</h3>
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
                      <svg
                        className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signs of Backflow Problems */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Signs of Backflow Problems
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A failing backflow preventer does not always give obvious warning signs before it
                allows contamination into your water supply. However, there are some indicators
                that your device may need testing or replacement.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  {
                    sign: "Discolored or foul-smelling water",
                    detail:
                      "Brown, yellow, or bad-smelling water from taps may indicate backflow has occurred",
                  },
                  {
                    sign: "Visible water discharge near the device",
                    detail:
                      "Water dripping from the RPZ relief valve indicates the device is operating abnormally",
                  },
                  {
                    sign: "Reduced water pressure",
                    detail:
                      "A partially seized backflow preventer can restrict water flow and drop pressure",
                  },
                  {
                    sign: "Overdue annual test notice",
                    detail:
                      "A notice from your water authority means your device needs testing now",
                  },
                  {
                    sign: "Visible corrosion on the device",
                    detail:
                      "Heavy rust or mineral buildup on the assembly exterior suggests internal problems",
                  },
                  {
                    sign: "Device is 10 or more years old",
                    detail:
                      "Most backflow preventers have a functional life of 10 to 15 years before replacement is recommended",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-red-50 border border-red-100 rounded-lg p-4"
                  >
                    <h3 className="font-bold text-gray-900 mb-1">{item.sign}</h3>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                ))}
              </div>

              {/* Blog Links */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Helpful Reading</h3>
                <p className="text-gray-700 mb-4">
                  Learn more about keeping your water safe and clean:
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/blog/whole-house-water-filter-worth-it"
                      className="text-red-700 hover:text-red-800 font-semibold"
                    >
                      Is a Whole House Water Filter Worth It? &rarr;
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/best-whole-house-water-filtration-systems"
                      className="text-red-700 hover:text-red-800 font-semibold"
                    >
                      Best Whole House Water Filtration Systems &rarr;
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service Areas */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Backflow Testing Service Areas
                </h3>
                <p className="text-gray-700 mb-4">
                  We provide certified backflow prevention testing throughout Middlesex County, NJ:
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Backflow Testing FAQs
              </h2>
              <div className="space-y-4 mb-12">
                {faqData.map((faq, index) => (
                  <details key={index} className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0">
                        +
                      </span>
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
                  <Link
                    href="/services/plumbing-safety-inspections"
                    className="text-red-700 hover:text-red-800 font-medium"
                  >
                    Plumbing Safety Inspections &rarr;
                  </Link>
                  <Link
                    href="/services/water-filtration-system"
                    className="text-red-700 hover:text-red-800 font-medium"
                  >
                    Water Filtration Systems &rarr;
                  </Link>
                  <Link
                    href="/services/water-leak-detection"
                    className="text-red-700 hover:text-red-800 font-medium"
                  >
                    Water Leak Detection &rarr;
                  </Link>
                  <Link
                    href="/services/whole-house-repiping"
                    className="text-red-700 hover:text-red-800 font-medium"
                  >
                    Whole House Repiping &rarr;
                  </Link>
                  <Link
                    href="/services/boiler-repair-service"
                    className="text-red-700 hover:text-red-800 font-medium"
                  >
                    Boiler Repair Service &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">

                {/* Call Now */}
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">
                    Schedule Backflow Testing
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    Certified testers. Official reports filed.
                  </p>
                  <a
                    href={BUSINESS_INFO.phoneLink}
                    className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2"
                  >
                    Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                  </a>
                  <a
                    href={BUSINESS_INFO.phone2Link}
                    className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full"
                  >
                    Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                  </a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>

                {/* Service Areas */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Service Areas</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    {BUSINESS_INFO.serviceAreas.map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Our Services */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our Services</p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/services/plumbing-safety-inspections"
                        className="text-gray-700 hover:text-red-700 transition"
                      >
                        Plumbing Inspections
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/water-filtration-system"
                        className="text-gray-700 hover:text-red-700 transition"
                      >
                        Water Filtration Systems
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/water-leak-detection"
                        className="text-gray-700 hover:text-red-700 transition"
                      >
                        Water Leak Detection
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/boiler-repair-service"
                        className="text-gray-700 hover:text-red-700 transition"
                      >
                        Boiler Repair Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/whole-house-repiping"
                        className="text-gray-700 hover:text-red-700 transition"
                      >
                        Whole House Repiping
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/emergency-plumbing"
                        className="text-gray-700 hover:text-red-700 transition"
                      >
                        Emergency Plumbing
                      </Link>
                    </li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3"
                  >
                    All Services
                  </Link>
                </div>

                {/* Helpful Articles */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Helpful Articles</p>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="/blog/whole-house-water-filter-worth-it"
                        className="text-gray-700 hover:text-red-700 transition leading-snug block"
                      >
                        Is a Whole House Water Filter Worth It?
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/best-whole-house-water-filtration-systems"
                        className="text-gray-700 hover:text-red-700 transition leading-snug block"
                      >
                        Best Whole House Water Filtration Systems
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/signs-water-heater-dying"
                        className="text-gray-700 hover:text-red-700 transition leading-snug block"
                      >
                        Signs Your Water Heater Is Dying
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
          <h2 className="text-3xl font-bold mb-4">
            Schedule Your Backflow Test Today
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Stay compliant with NJ requirements and protect your drinking water. Certified
            testing, same-week scheduling, and official reports filed for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/contact-us"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition"
            >
              Request Backflow Testing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
