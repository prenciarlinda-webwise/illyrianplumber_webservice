import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "What Is Backflow Testing? Everything NJ Homeowners Need to Know - Illyrian Plumber",
  description:
    "Learn what backflow testing is, why it is required in NJ, how often it must be done, and how much it costs. Expert guide for Middlesex County homeowners from a certified backflow tester.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/what-is-backflow-testing" },
  keywords: [
    "what is backflow testing",
    "backflow testing",
    "backflow prevention testing",
    "why is backflow testing required",
    "how much does backflow testing cost",
    "how often is backflow testing required",
    "how long does backflow testing take",
    "backflow testing certification",
    "backflow preventer test NJ",
    "backflow testing East Brunswick NJ",
    "backflow testing Middlesex County",
    "certified backflow tester NJ",
    "backflow prevention device",
    "RPZ valve testing",
    "annual backflow test NJ",
    "cross connection control",
    "backflow test cost NJ",
    "NJ backflow regulations",
  ],
  openGraph: {
    title: "What Is Backflow Testing? Everything NJ Homeowners Need to Know",
    description:
      "Certified backflow testing explained for Middlesex County homeowners. Learn NJ requirements, costs, frequency, and what happens during a test.",
    type: "article",
    publishedTime: "2026-03-20T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function BackflowTestingPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is Backflow Testing? Everything NJ Homeowners Need to Know",
    description:
      "Certified backflow testing explained for Middlesex County, NJ homeowners. Learn NJ requirements, costs, frequency, and what happens during a test.",
    image:
      "https://www.illyrianplumber.com/images/professional-plumbing-services.jpg",
    author: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      url: "https://www.illyrianplumber.com",
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      logo: {
        "@type": "ImageObject",
        url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png",
      },
    },
    datePublished: "2026-03-20T08:00:00.000Z",
    dateModified: "2026-03-20T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.illyrianplumber.com/blog/what-is-backflow-testing",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I do backflow testing myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. In New Jersey, backflow testing must be performed by a licensed plumber who holds a backflow prevention certification from an approved testing organization. DIY testing is not legally recognized and will not satisfy municipal requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What is backflow testing certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Backflow testing certification is a credential earned by licensed plumbers who complete specialized training in cross-connection control. In NJ, certified testers are typically licensed through the American Backflow Prevention Association (ABPA) or a state-approved equivalent program.",
        },
      },
      {
        "@type": "Question",
        name: "How often is backflow testing required in NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most New Jersey municipalities require backflow prevention devices to be tested annually. Some higher-hazard applications may require more frequent testing. Check with your local water authority or municipality for the specific interval that applies to your property.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a backflow test take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard residential backflow test typically takes 15 to 30 minutes. Commercial properties with multiple devices or larger assemblies may take longer. The water supply to the device will be briefly interrupted during the test.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I skip backflow testing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skipping required backflow testing can result in fines from your municipality, potential water service shutoff, and liability if a backflow event causes contamination. It also leaves your home's water supply unprotected against contamination from irrigation chemicals, pool water, or boiler additives.",
        },
      },
      {
        "@type": "Question",
        name: "Does my homeowner's insurance cover backflow damage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard homeowner's insurance policies do not always cover water damage caused by backflow events. Some policies offer backflow endorsements as optional add-ons. Keeping your backflow device tested and in good working order is the best protection you have.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="bg-white">
        {/* Hero */}
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">
                  Water Quality
                </span>
                <time dateTime="2026-03-20">March 2026</time>
                <span>10 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                What Is Backflow Testing? Everything NJ Homeowners Need to Know
              </h1>
              <p className="text-xl text-gray-300">
                Annual backflow testing protects your drinking water from contamination. Here is what it involves, who needs it, and what it costs in Middlesex County.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-03-20" updateDate="2026-03-25" />
        </div>

        {/* Main layout */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-lg max-w-none">

                {/* Intro */}
                <p className="text-xl text-gray-700 leading-relaxed">
                  If your home has an irrigation system, a boiler, or a swimming pool, you likely need{" "}
                  <Link href="/services/backflow-prevention-testing" className="text-red-700 hover:text-red-800 font-medium">
                    backflow prevention testing
                  </Link>{" "}
                  every year under New Jersey law. Most Middlesex County homeowners have never seen the process and are not sure what it involves, why it matters, or what it costs. This guide answers every common question so you know exactly what to expect.
                </p>

                {/* About Illyrian box */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8 not-prose">
                  <p className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-2">About Illyrian Plumber</p>
                  <p className="text-gray-700 text-sm mb-4">
                    We are a licensed, certified plumbing company based in East Brunswick, NJ serving all of Middlesex County. Our certified backflow testers handle annual testing, device installation, and repairs for residential and commercial properties.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <Link href="/services/backflow-prevention-testing" className="text-red-700 hover:text-red-800 font-medium">Backflow Testing</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium">Water Filtration</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800 font-medium">Boiler Repair</Link>
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8 not-prose">
                  <p className="font-bold text-gray-900 mb-3">In This Guide</p>
                  <ol className="space-y-1.5 text-sm text-gray-700 list-decimal list-inside">
                    <li><a href="#what-is-backflow" className="text-red-700 hover:text-red-800">What Is Backflow?</a></li>
                    <li><a href="#what-is-backflow-testing" className="text-red-700 hover:text-red-800">What Is Backflow Testing?</a></li>
                    <li><a href="#why-required" className="text-red-700 hover:text-red-800">Why Is Backflow Testing Required?</a></li>
                    <li><a href="#who-needs-it" className="text-red-700 hover:text-red-800">Who Needs Backflow Testing in NJ?</a></li>
                    <li><a href="#how-often" className="text-red-700 hover:text-red-800">How Often Is Backflow Testing Required?</a></li>
                    <li><a href="#what-happens" className="text-red-700 hover:text-red-800">What Happens During a Backflow Test?</a></li>
                    <li><a href="#cost" className="text-red-700 hover:text-red-800">How Much Does Backflow Testing Cost?</a></li>
                    <li><a href="#device-types" className="text-red-700 hover:text-red-800">Types of Backflow Prevention Devices</a></li>
                    <li><a href="#if-it-fails" className="text-red-700 hover:text-red-800">What Happens If Your Test Fails?</a></li>
                    <li><a href="#faqs" className="text-red-700 hover:text-red-800">Backflow Testing FAQs</a></li>
                  </ol>
                </div>

                {/* Section 1 */}
                <h2 id="what-is-backflow" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  What Is Backflow?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Backflow is the reversal of water flow in a plumbing system. Under normal conditions, water travels in one direction - from the municipal supply into your home. When something disrupts the pressure in that system, water can flow backward, pulling potentially contaminated water from irrigation lines, boilers, pools, or other sources back into the clean water supply.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  There are two mechanisms that cause backflow:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Back-siphonage</strong> - A sudden drop in supply pressure (from a water main break, heavy fire hydrant use nearby, or a large demand surge) creates a siphon effect that pulls water backward through the plumbing.
                  </li>
                  <li>
                    <strong>Back-pressure</strong> - A downstream source reaches a pressure higher than the supply pressure and forces water in reverse. Boiler systems, pumps, and elevated tanks are common back-pressure sources.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  When backflow occurs, the contaminants that can enter the water supply range from fertilizers and pesticides from irrigation systems to boiler treatment chemicals, pool chlorine, and bacteria. These are known as cross-connection hazards - points where a non-potable (non-drinking) water source can make contact with the potable supply.
                </p>

                {/* Section 2 */}
                <h2 id="what-is-backflow-testing" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  What Is Backflow Testing?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Backflow testing is the process of verifying that a backflow prevention device - the mechanical assembly installed on your plumbing to stop reversed flow - is working correctly. A certified tester connects gauges to the device, pressurizes and depressurizes it in a controlled sequence, and records the pressure readings to confirm that all internal check valves, relief valves, and seals are functioning within acceptable tolerances.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The test does not check whether backflow has occurred. It checks whether the device is capable of preventing it. Think of it like a smoke detector battery test - you are confirming the protection is ready, not waiting until there is a fire.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At the end of the test, the certified tester fills out an official test report form that is submitted to your local water authority. This form records the device type, serial number, test date, pressure readings, pass or fail result, and the tester's certification number. You should receive a copy for your records.
                </p>

                {/* Section 3 */}
                <h2 id="why-required" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Why Is Backflow Testing Required?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  New Jersey follows the Safe Drinking Water Act and state-level cross-connection control regulations that require property owners with identified cross-connection hazards to install backflow prevention devices and have them tested on a regular schedule. The requirement is enforced by local water utilities and municipalities, not a suggestion.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The public health basis is straightforward. The municipal water system is a shared resource. If contaminated water from your property enters the distribution main during a backflow event, it can affect your neighbors and anyone downstream who is served by that main. High-profile backflow contamination incidents across the country led regulators to establish mandatory testing programs to catch failing devices before they cause harm.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In Middlesex County, towns such as East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick all have cross-connection control ordinances that align with state requirements. Failure to comply can result in written notices, fines, and in serious cases, water service shutoff until compliance is demonstrated.
                </p>

                {/* Section 4 */}
                <h2 id="who-needs-it" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Who Needs Backflow Testing in New Jersey?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Testing is required for any property where a cross-connection hazard exists. The most common situations for residential properties in Middlesex County include:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Irrigation and sprinkler systems</strong> - The most common residential trigger. Any in-ground lawn irrigation system connected to the municipal supply requires a backflow preventer and annual testing. Fertilizer injectors increase the risk classification.
                  </li>
                  <li>
                    <strong>Boiler systems</strong> - Hydronic heating boilers that connect to the water supply for makeup water require backflow protection. Boiler water often contains corrosion inhibitors and other additives that are unsafe to drink.
                  </li>
                  <li>
                    <strong>Swimming pools and hot tubs</strong> - Any pool with a direct connection to the water supply (fill line) needs a backflow preventer. Pool chemicals including chlorine and algaecides are a significant contamination risk.
                  </li>
                  <li>
                    <strong>Fire sprinkler systems</strong> - Residential and commercial fire suppression systems connected to the water main require testing, often at higher-hazard classifications because the water in sprinkler lines sits stagnant and can harbor bacteria.
                  </li>
                  <li>
                    <strong>Commercial properties</strong> - Restaurants, medical offices, car washes, and most businesses require backflow prevention on their service connection regardless of specific equipment. Commercial testing schedules are often the same as residential but devices may be larger and more complex.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  If you are unsure whether your property requires testing, contact your local water utility or call us. We can review your plumbing setup and tell you exactly what is required.
                </p>

                {/* Section 5 */}
                <h2 id="how-often" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  How Often Is Backflow Testing Required?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In New Jersey, the standard requirement is annual testing - once per calendar year per device. Most municipalities send reminder notices to registered property owners before the testing deadline. If you receive one of these notices, you typically have 30 to 60 days to complete the test and submit the results.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  There are situations that trigger a test outside the annual cycle:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Initial installation</strong> - Any newly installed backflow prevention device must be tested before it is placed in service. This confirms the device was installed correctly and is functioning as designed.
                  </li>
                  <li>
                    <strong>After repairs</strong> - If a device fails a test and is repaired or has parts replaced, it must be retested before the repair is considered complete. This verifies the fix resolved the failure.
                  </li>
                  <li>
                    <strong>After relocation</strong> - Moving or repiping around a device requires a new test.
                  </li>
                  <li>
                    <strong>High-hazard sites</strong> - Some municipalities classify certain businesses (medical facilities, car washes, chemical storage facilities) as high-hazard and may require semi-annual or quarterly testing.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Do not wait for a notice to schedule testing. Scheduling proactively in early spring - before irrigation season begins in East Brunswick and surrounding towns - avoids the late-season rush when certified testers are heavily booked.
                </p>

                {/* Mid CTA */}
                <div className="bg-red-700 text-white rounded-xl p-6 my-10 not-prose">
                  <p className="text-lg font-bold mb-2">Schedule Your Annual Backflow Test</p>
                  <p className="text-red-100 text-sm mb-4">
                    Certified backflow testing for homes and businesses throughout Middlesex County. Fast scheduling, official test reports submitted same day.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={BUSINESS_INFO.phoneLink}
                      className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition text-center text-sm"
                    >
                      Call Niti: {BUSINESS_INFO.phone}
                    </a>
                    <a
                      href={BUSINESS_INFO.phone2Link}
                      className="bg-red-800 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-red-900 transition text-center text-sm"
                    >
                      Call Danny: {BUSINESS_INFO.phone2}
                    </a>
                  </div>
                </div>

                {/* Section 6 */}
                <h2 id="what-happens" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  What Happens During a Backflow Test?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The testing process follows a standardized procedure defined by the American Water Works Association (AWWA) and required by NJ regulations. Here is what to expect when a certified tester arrives at your property:
                </p>
                <ol className="space-y-4 text-gray-700 list-decimal list-inside">
                  <li>
                    <strong>Device location and identification</strong> - The tester locates your backflow prevention assembly, records the manufacturer, model, and serial number, and verifies that the correct device type is installed for your hazard level.
                  </li>
                  <li>
                    <strong>Shutoff and connection</strong> - The tester closes the downstream shutoff valve to isolate the device, then connects a differential pressure test kit (test gauges) to the test cocks (small fittings) on the device body.
                  </li>
                  <li>
                    <strong>Pressure readings</strong> - The tester opens and closes specific valves in sequence to measure pressure differentials across the check valves and relief valve. Each reading is compared against the minimum acceptable threshold for that device type.
                  </li>
                  <li>
                    <strong>Pass or fail determination</strong> - If all readings meet or exceed the minimum thresholds, the device passes. If any reading falls below the threshold, the device fails and must be repaired before retesting.
                  </li>
                  <li>
                    <strong>Restoration and reporting</strong> - The tester removes the gauges, restores water flow, and completes the official test report. The report is submitted to your water authority and you receive a copy.
                  </li>
                </ol>
                <p className="text-gray-700 leading-relaxed">
                  The entire process typically takes <strong>15 to 30 minutes</strong> for a standard residential device. Your water will be off for most of that time, so plan accordingly if you are home during the test. Commercial properties with multiple devices take proportionally longer.
                </p>

                {/* Section 7 */}
                <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  How Much Does Backflow Testing Cost?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In New Jersey, backflow testing costs typically fall in the following ranges:
                </p>
                <div className="overflow-x-auto not-prose my-6">
                  <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-800">Property Type</th>
                        <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-800">Typical Cost Range</th>
                        <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-800">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="px-4 py-3 border border-gray-200">Residential (single device)</td>
                        <td className="px-4 py-3 border border-gray-200">$75 - $125</td>
                        <td className="px-4 py-3 border border-gray-200">Irrigation or boiler, standard RPZ or PVB</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border border-gray-200">Residential (multiple devices)</td>
                        <td className="px-4 py-3 border border-gray-200">$125 - $200</td>
                        <td className="px-4 py-3 border border-gray-200">Irrigation plus boiler, for example</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border border-gray-200">Commercial (small)</td>
                        <td className="px-4 py-3 border border-gray-200">$150 - $300</td>
                        <td className="px-4 py-3 border border-gray-200">Single larger assembly</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 border border-gray-200">Commercial (multiple/complex)</td>
                        <td className="px-4 py-3 border border-gray-200">$300+</td>
                        <td className="px-4 py-3 border border-gray-200">Multiple assemblies, larger valve sizes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Several factors affect the final cost:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Device type and size</strong> - Larger valve assemblies (1-inch and above) take more time and specialized gauges to test.</li>
                  <li><strong>Number of devices</strong> - Most testers offer a reduced per-device rate when testing multiple assemblies at one property in the same visit.</li>
                  <li><strong>Access difficulty</strong> - Devices that require moving equipment, accessing crawl spaces, or working in tight mechanical rooms take longer.</li>
                  <li><strong>Report filing fees</strong> - Some municipalities charge an administrative fee for processing test reports. This is paid to the town, not the tester.</li>
                  <li><strong>Repairs</strong> - If the device fails, repair costs are separate. Replacing internal seats and springs typically runs $50 to $150 in parts and labor for standard residential devices. A full device replacement costs more depending on the assembly type.</li>
                </ul>

                {/* Service Card */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.658-3.163M11.42 15.17l5.658-3.163M11.42 15.17V20.9m0-5.73l-5.658 3.163M11.42 15.17l5.658 3.163M6.762 17.333l-.007-4.666L11.42 9.504m6.762 4.666l-.007-4.666L11.42 9.504m0 0V3.1" /></svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Backflow Prevention and Testing</p>
                <p className="text-sm text-gray-600 mb-2">Certified backflow testing and prevention device installation for residential and commercial properties. Annual testing, certification, and repairs across Middlesex County, NJ.</p>
                <Link href="/services/backflow-prevention-testing" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            {/* Service Card */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.658-3.163M11.42 15.17l5.658-3.163M11.42 15.17V20.9m0-5.73l-5.658 3.163M11.42 15.17l5.658 3.163M6.762 17.333l-.007-4.666L11.42 9.504m6.762 4.666l-.007-4.666L11.42 9.504m0 0V3.1" /></svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Water Filtration Systems</p>
                <p className="text-sm text-gray-600 mb-2">Protect your water quality with whole-house filtration and reverse osmosis systems. Professional installation and maintenance.</p>
                <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

                {/* Section 8 */}
                <h2 id="device-types" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Types of Backflow Prevention Devices
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Not all backflow preventers are the same. The device required for your application depends on the hazard level of the cross-connection. Here are the main types you will encounter in residential and light commercial plumbing in New Jersey:
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  RPZ - Reduced Pressure Zone Assembly
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The RPZ is the highest-protection device and is required wherever a high-hazard cross-connection exists. It consists of two independent check valves with a pressure-monitored relief valve chamber between them. If either check valve fails, the relief valve opens and discharges water to the ground rather than allowing contaminated water to flow backward. RPZ assemblies are commonly required for irrigation systems with fertilizer injectors, fire sprinkler systems, and commercial applications. They must be installed above ground in a location that allows the relief valve to drain freely.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  DCVA - Double Check Valve Assembly
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The DCVA uses two independent check valves in series to prevent backflow. It is approved for low-to-moderate hazard applications where the risk of contamination is present but the contaminants would not be immediately dangerous to health. Residential fire sprinkler systems, some boiler connections, and standard irrigation systems in many municipalities use DCVA assemblies. Unlike the RPZ, a DCVA can be installed below ground in a vault, making it more flexible for landscaping situations.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  PVB - Pressure Vacuum Breaker
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The pressure vacuum breaker is a simpler device designed specifically to prevent back-siphonage. It consists of a spring-loaded check valve and an air inlet valve. When supply pressure drops, the air inlet opens and breaks the siphon before water can flow backward. PVBs are widely used on residential irrigation systems and must be installed at least 12 inches above the highest irrigation head in the system. They are not effective against back-pressure, so they are not appropriate for boilers or other pressurized systems.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  AVB - Atmospheric Vacuum Breaker
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The AVB is the simplest form of backflow protection and is typically used at individual fixtures or hose bibs as a supplemental measure. They cannot be used where continuous pressure is applied for more than 12 hours and are not a standalone solution for irrigation or boiler protection.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you are unsure which device is installed at your property or whether it matches your current hazard classification, have a certified plumber inspect it. Upgrading from a PVB to an RPZ is not uncommon when homeowners add fertilizer injectors to existing irrigation systems.
                </p>

                {/* Section 9 */}
                <h2 id="if-it-fails" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  What Happens If Your Backflow Test Fails?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A failed test means one or more internal components of the device are not holding pressure within the required tolerances. This does not necessarily mean your water has been contaminated - it means the protection against contamination is compromised and needs to be restored.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Here is what happens next:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>On-the-spot repair</strong> - Many certified testers carry common repair parts for standard assemblies. If the failure is due to worn check valve seats, fouled seats, or a weak spring, the tester may be able to make the repair immediately and retest the device in the same visit.
                  </li>
                  <li>
                    <strong>Scheduled repair and retest</strong> - If the repair requires parts that are not on hand, you will need to schedule a return visit. Most municipalities allow a short window (typically 30 days) to complete repairs after a failed test.
                  </li>
                  <li>
                    <strong>Full device replacement</strong> - If the device is old, heavily corroded, or a discontinued model that cannot be serviced, replacement is often the more economical path. A new device requires installation and an initial test to confirm it is operating correctly.
                  </li>
                  <li>
                    <strong>Reporting</strong> - The failed test result is still submitted to the water authority. Once the repair is complete and the device passes the retest, a passing report is submitted to close out the record.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Do not ignore a failed test notification. Unresolved failures lead to compliance violations that are more disruptive and costly to resolve later.
                </p>

                {/* FAQs */}
                <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-6">
                  Backflow Testing FAQs
                </h2>

                <div className="space-y-4 not-prose">
                  {[
                    {
                      question: "Can I do backflow testing myself?",
                      answer:
                        "No. In New Jersey, backflow testing must be performed by a licensed plumber who holds a backflow prevention certification from an approved testing organization. DIY testing is not legally recognized and will not satisfy municipal requirements.",
                    },
                    {
                      question: "What is backflow testing certification?",
                      answer:
                        "Backflow testing certification is a credential earned by licensed plumbers who complete specialized training in cross-connection control. In NJ, certified testers are typically licensed through the American Backflow Prevention Association (ABPA) or a state-approved equivalent program. Always verify your tester's certification before scheduling.",
                    },
                    {
                      question: "How often is backflow testing required in NJ?",
                      answer:
                        "Most New Jersey municipalities require annual testing. Some higher-hazard applications may require more frequent testing. Check with your local water authority or ask us to confirm the schedule that applies to your property and device type.",
                    },
                    {
                      question: "How long does a backflow test take?",
                      answer:
                        "A standard residential backflow test takes 15 to 30 minutes. Commercial properties with multiple devices or larger assemblies may take an hour or more. Water to the device will be shut off briefly during the test.",
                    },
                    {
                      question: "What happens if I skip backflow testing?",
                      answer:
                        "Skipping required testing can result in municipal fines, written notices of violation, and potential water service shutoff until compliance is demonstrated. It also means your water supply is unprotected against contamination from irrigation chemicals, pool water, or boiler additives.",
                    },
                    {
                      question: "Does my homeowner's insurance cover backflow damage?",
                      answer:
                        "Standard homeowner's insurance policies do not always cover water damage caused by backflow events. Some policies offer backflow endorsements as optional riders. Keeping your device tested and in good working order is the best protection you have.",
                    },
                  ].map((faq, i) => (
                    <details
                      key={i}
                      className="border border-gray-200 rounded-lg overflow-hidden group"
                    >
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer bg-white hover:bg-gray-50 transition font-semibold text-gray-900 list-none">
                        {faq.question}
                        <span className="ml-4 text-red-700 text-xl font-bold group-open:rotate-45 transition-transform duration-200 flex-shrink-0">
                          +
                        </span>
                      </summary>
                      <div className="px-5 py-4 bg-gray-50 text-gray-700 text-sm leading-relaxed border-t border-gray-200">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>

                {/* Final CTA */}
                <div className="bg-gray-900 text-white rounded-xl p-8 mt-10 not-prose">
                  <p className="text-xl font-bold mb-2">Ready to Schedule Your Backflow Test?</p>
                  <p className="text-gray-300 text-sm mb-6">
                    Illyrian Plumber provides certified backflow testing for homeowners and businesses throughout East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. We file the official test report with your municipality the same day.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={BUSINESS_INFO.phoneLink}
                      className="bg-red-700 text-white px-5 py-3 rounded-lg font-bold hover:bg-red-800 transition text-center"
                    >
                      Call Niti: {BUSINESS_INFO.phone}
                    </a>
                    <a
                      href={BUSINESS_INFO.phone2Link}
                      className="bg-gray-700 text-white px-5 py-3 rounded-lg font-bold hover:bg-gray-600 transition text-center"
                    >
                      Call Danny: {BUSINESS_INFO.phone2}
                    </a>
                    <Link
                      href="/services/backflow-prevention-testing"
                      className="border border-gray-500 text-gray-200 px-5 py-3 rounded-lg font-bold hover:border-gray-300 hover:text-white transition text-center"
                    >
                      Backflow Testing Service
                    </Link>
                  </div>
                </div>

                {/* Related Articles */}
                <section className="mt-12 not-prose">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/blog/whole-house-water-filter-worth-it" className="group">
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">
                          Is a Whole House Water Filter Worth It in NJ?
                        </h3>
                        <p className="text-sm text-gray-600">
                          Compare water filtration options and costs for Middlesex County homeowners.
                        </p>
                      </div>
                    </Link>
                    <Link href="/blog/best-whole-house-water-filtration-systems" className="group">
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">
                          11 Best Whole House Water Filtration Systems (2026)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Licensed plumber reviews of the top whole house water filter systems.
                        </p>
                      </div>
                    </Link>
                    <Link href="/blog/kitchen-sink-plumbing-diagram" className="group">
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">
                          Kitchen Sink Plumbing Diagram
                        </h3>
                        <p className="text-sm text-gray-600">
                          Understand your kitchen plumbing system.
                        </p>
                      </div>
                    </Link>
                    <Link href="/blog/how-to-unclog-kitchen-sink" className="group">
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">
                          How to Unclog a Kitchen Sink
                        </h3>
                        <p className="text-sm text-gray-600">
                          7 methods to clear a clogged kitchen drain.
                        </p>
                      </div>
                    </Link>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">

                {/* Call Now */}
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Schedule Backflow Testing</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Certified testing - official report filed same day.
                  </p>
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
                    {BUSINESS_INFO.serviceAreas.map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our Services</p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/services/backflow-prevention-testing" className="text-red-700 hover:text-red-800 font-medium transition">
                        Backflow Prevention &amp; Testing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/water-filtration-system" className="text-gray-700 hover:text-red-700 transition">
                        Water Filtration System
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/plumbing-safety-inspections" className="text-gray-700 hover:text-red-700 transition">
                        Plumbing Safety Inspections
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/boiler-repair-service" className="text-gray-700 hover:text-red-700 transition">
                        Boiler Repair Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">
                        Water Heater Repair
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">
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

                {/* You Might Also Like */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="/blog/kitchen-sink-plumbing-diagram"
                        className="text-gray-700 hover:text-red-700 transition leading-snug block"
                      >
                        Kitchen Sink Plumbing Diagram
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/how-to-unclog-kitchen-sink"
                        className="text-gray-700 hover:text-red-700 transition leading-snug block"
                      >
                        How to Unclog a Kitchen Sink
                      </Link>
                    </li>
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
                        href="/blog/why-is-water-pressure-low"
                        className="text-gray-700 hover:text-red-700 transition leading-snug block"
                      >
                        Why Is My Water Pressure Low?
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </article>
    </>
  );
}
