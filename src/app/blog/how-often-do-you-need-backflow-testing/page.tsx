import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How Often Is Backflow Testing Required? (2026 Guide)",
  description:
    "Find out how often you actually need backflow testing in New Jersey, what triggers an off-cycle test, and what happens if you miss your annual deadline.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/how-often-do-you-need-backflow-testing" },
  keywords: [
    "how often do you need backflow testing",
    "backflow preventer testing",
    "annual backflow test",
    "backflow test certification",
    "RPZ testing",
    "how often is backflow testing required NJ",
    "backflow testing schedule",
    "backflow testing frequency",
    "missed backflow test",
    "backflow test deadline",
  ],
  openGraph: {
    title: "How Often Is Backflow Testing Required? (2026 Guide)",
    description:
      "How often you actually need backflow testing in New Jersey, what triggers an off-cycle test, and what happens if you miss your deadline.",
    type: "article",
    publishedTime: "2026-08-01T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function BackflowTestingFrequencyPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Often Is Backflow Testing Required? (2026 Guide)",
    description:
      "How often you actually need backflow testing in New Jersey, what triggers an off-cycle test, and what happens if you miss your deadline.",
    image: "https://www.illyrianplumber.com/images/professional-plumbing-services.jpg",
    author: {
      "@type": "Person",
      name: "Illyrian Plumber Team",
      jobTitle: "Licensed Master Plumber",
      worksFor: { "@id": "https://www.illyrianplumber.com/#organization" },
    },
    publisher: { "@id": "https://www.illyrianplumber.com/#organization" },
    datePublished: "2026-08-01T08:00:00.000Z",
    dateModified: "2026-08-01T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/how-often-do-you-need-backflow-testing",
    },
  };

  const faqData = [
    {
      question: "Does the annual testing clock reset if I install a new backflow device mid-year?",
      answer:
        "Yes. A newly installed backflow prevention device must be tested before it goes into service, and that initial test date becomes your new annual anchor point, not the calendar year. Replace a failed device in June, and your next required test is typically due the following June, not the next January.",
    },
    {
      question: "What happens if I sell my home without a current backflow test on file?",
      answer:
        "Some New Jersey municipalities check backflow compliance during a title search or require a current certification before signing off on a sale. An expired or missing test can delay closing. If you are listing a home with an irrigation system, boiler, or pool fill line, schedule the test before you list.",
    },
    {
      question: "Can I test my own backflow prevention device to save money?",
      answer:
        "No. New Jersey requires backflow tests to be performed by a certified tester using calibrated gauges, and self-reported results are not accepted by water authorities. Testing it yourself will not satisfy your municipality's requirement and can void the manufacturer's warranty if internal components are disturbed incorrectly.",
    },
    {
      question: "Is backflow testing frequency different for commercial properties?",
      answer:
        "The standard interval is still annual for most commercial connections, but high-hazard applications such as fire suppression systems, medical facilities, and food service equipment are sometimes classified for semi-annual testing by the local water authority. Multi-device commercial properties should confirm each device's schedule individually rather than assuming they align.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-white">
        {/* Hero */}
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Water Quality</span>
                <time dateTime="2026-08-01">August 2026</time>
                <span>8 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How often is backflow testing required?
              </h1>
              <p className="text-xl text-gray-300">
                Most devices need testing once a year, but the exact date, the trigger events that move up your schedule, and the penalty for missing a deadline all depend on your device history and your municipality.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-08-01" updateDate="2026-08-01" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-lg max-w-none">
                {/* Intro - primary link within first 40-60 words */}
                <p className="text-xl text-gray-700 leading-relaxed">
                  Most New Jersey properties with an irrigation system, boiler, or fire sprinkler line need a backflow test every single year, not just once at installation. If you already know you have a device but are unsure exactly how often testing applies to you, Illyrian Plumber&apos;s{" "}
                  <Link href="/services/backflow-prevention-testing" className="text-red-700 hover:text-red-800 font-medium">
                    backflow prevention testing
                  </Link>{" "}
                  team breaks down the real schedule below, including what moves your test date up and what happens if a deadline slips past.
                </p>

                {/* Quick answer box */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8 not-prose">
                  <p className="font-bold text-gray-900 mb-2">Quick answer</p>
                  <p className="text-gray-700 text-sm">
                    Nearly every backflow prevention device in New Jersey requires testing once every 12 months. The anchor date is set by your device&apos;s install date or last passing test, not the calendar year, and certain events (repairs, relocation, high-hazard classification) can require a test sooner.
                  </p>
                </div>

                {/* About Illyrian box */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8 not-prose">
                  <p className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-2">About Illyrian Plumber</p>
                  <p className="text-gray-700 text-sm mb-4">
                    Licensed, NJ DEP certified plumbing company based in East Brunswick, NJ serving all of Middlesex County. Our certified testers track your device history so you never miss a compliance deadline.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <Link href="/services/backflow-prevention-testing" className="text-red-700 hover:text-red-800 font-medium">Backflow Testing</Link>
                    <span className="text-gray-300">-</span>
                    <Link href="/services/commercial-plumbing" className="text-red-700 hover:text-red-800 font-medium">Commercial Plumbing</Link>
                    <span className="text-gray-300">-</span>
                    <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections</Link>
                    <span className="text-gray-300">-</span>
                    <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium">Water Filtration</Link>
                  </div>
                </div>

                {/* TOC */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8 not-prose">
                  <p className="font-bold text-gray-900 mb-3">In this guide</p>
                  <ol className="space-y-1.5 text-sm text-gray-700 list-decimal list-inside">
                    <li><a href="#anchor-date" className="text-red-700 hover:text-red-800">What your annual testing date is actually anchored to</a></li>
                    <li><a href="#hazard-frequency" className="text-red-700 hover:text-red-800">Why hazard classification changes your schedule</a></li>
                    <li><a href="#off-cycle" className="text-red-700 hover:text-red-800">Events that trigger an off-cycle test</a></li>
                    <li><a href="#missed-deadline" className="text-red-700 hover:text-red-800">What happens if you miss your deadline</a></li>
                    <li><a href="#find-schedule" className="text-red-700 hover:text-red-800">How to find your exact schedule</a></li>
                    <li><a href="#best-timing" className="text-red-700 hover:text-red-800">The best time of year to schedule</a></li>
                    <li><a href="#what-testing-involves" className="text-red-700 hover:text-red-800">What actually happens during the test</a></li>
                    <li><a href="#faqs" className="text-red-700 hover:text-red-800">Backflow testing frequency FAQs</a></li>
                  </ol>
                </div>

                <h2 id="anchor-date" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  What your annual testing date is actually anchored to
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Homeowners often assume backflow testing runs on the calendar year, like a car registration. It does not. Your required interval is measured from your device&apos;s <strong>install date or last passing test</strong>, whichever came most recently. A device installed and tested for the first time in September is due again the following September, regardless of when your neighbor&apos;s test falls.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This matters most when a device changes hands or gets replaced partway through the year. Your water utility tracks the device by its serial number and address, not by a fixed municipal date, so two identical properties on the same street can legitimately be on different testing schedules.
                </p>

                <h2 id="hazard-frequency" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Why hazard classification changes your schedule
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Annual testing is the default for most residential and light commercial connections in New Jersey. But your local water authority assigns a hazard classification to every connection, and that classification can shorten the interval. A standard residential irrigation system with a Pressure Vacuum Breaker (PVB) or Double Check Valve Assembly (DCVA) almost always stays on the annual cycle.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Higher-hazard connections, most often Reduced Pressure Zone (RPZ) assemblies protecting fire suppression lines, boilers with chemical treatment, or facilities with fertilizer injection, are sometimes moved to a semi-annual or even quarterly schedule at the water authority&apos;s discretion. If you are unsure which category your device falls into, an <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">inspection of your plumbing system</Link> will confirm both the device type and the classification your municipality has on file.
                </p>

                <h2 id="off-cycle" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Events that trigger an off-cycle test
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Four situations reset or accelerate your schedule outside the normal annual window:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>New installation</strong> - any newly installed device must pass a test before it is placed in service, which becomes the new anchor date going forward.
                  </li>
                  <li>
                    <strong>Repair after a failure</strong> - if a device fails its annual test and is repaired, it must be retested immediately, not at the next annual date.
                  </li>
                  <li>
                    <strong>Relocation or repiping</strong> - moving a device, or repiping the line it sits on, requires a fresh test once the work is complete.
                  </li>
                  <li>
                    <strong>Change in use or hazard level</strong> - adding a fertilizer injector to an existing irrigation system, for example, can reclassify a DCVA connection to require an RPZ and a new test cycle.
                  </li>
                </ul>

                {/* Mid CTA */}
                <div className="bg-red-700 text-white rounded-xl p-6 my-10 not-prose">
                  <p className="text-lg font-bold mb-2">Not sure when your test is due?</p>
                  <p className="text-red-100 text-sm mb-4">
                    We look up your device history and schedule your annual backflow test before your municipality sends a notice.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition text-center text-sm">
                      Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                    </a>
                    <a href={BUSINESS_INFO.phone2Link} className="bg-red-800 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-red-900 transition text-center text-sm">
                      Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                    </a>
                  </div>
                </div>

                <h2 id="missed-deadline" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  What happens if you miss your deadline
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Water authorities in Middlesex County typically send a reminder notice 30 to 60 days before your device is due, and most allow a short grace window after the deadline before enforcement starts. Past that window, the usual sequence is a written notice of violation, then a fine, and in continued non-compliance cases, a shutoff of water service to the property until a passing test is filed.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Enforcement timelines vary by town, and some municipalities are stricter with commercial and high-hazard connections than with standard residential irrigation setups. Either way, an overdue test is one of the easier compliance problems to fix. Most residential tests take under 30 minutes once a certified tester is on site.
                </p>

                <h2 id="find-schedule" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  How to find your exact schedule
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Three ways to confirm your specific due date: check the most recent notice from your water utility, look at the date on your last passing test report (add 12 months as a starting estimate), or call a certified tester who can pull your device&apos;s record by address. For a deeper walkthrough of what the test itself involves and what devices cost to test, see our companion guide on{" "}
                  <Link href="/blog/what-is-backflow-testing" className="text-red-700 hover:text-red-800 font-medium">
                    what backflow testing actually is
                  </Link>{" "}
                  and how the process works step by step.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cross-connection control programs like this are a standard part of municipal water safety in the United States. If you want the underlying engineering explanation for why the interval matters, the{" "}
                  <a href="https://en.wikipedia.org/wiki/Backflow_prevention_device" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800 font-medium">
                    Wikipedia entry on backflow prevention devices
                  </a>{" "}
                  is a good plain-English reference for the underlying mechanics.
                </p>

                <h2 id="best-timing" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  The best time of year to schedule
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Even though your due date is tied to your install or last-test anniversary, you are usually free to test early. Scheduling in early spring, before Middlesex County irrigation systems switch on for the season, avoids the late-spring rush when certified testers are booked out and irrigation companies are simultaneously turning systems on for the summer. Testing early also gives you a buffer if the device fails and needs a part on backorder.
                </p>

                <h2 id="what-testing-involves" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  What actually happens during the test
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A certified tester connects a calibrated test gauge to the backflow prevention device and checks that each internal check valve and relief valve holds pressure the way it is designed to. For a Double Check Valve Assembly, that means confirming both check valves seal correctly under pressure. For a Reduced Pressure Zone assembly, the tester also verifies that the relief valve opens and discharges water if the zone between the two checks loses pressure, which is the mechanism that protects the drinking water supply if a check valve fails.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Most residential tests take 20 to 30 minutes start to finish, and the water supply to the tested line is shut off briefly during the process. Commercial properties with multiple devices, or devices feeding fire suppression systems, can take longer because each connection is tested and documented separately. The tester fills out a certified test report with the device serial number, test date, and pass or fail result, then files a copy with your municipal water authority. Keep a copy for your own records as well, since some water utilities take several weeks to update their system after a test is filed.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If a device fails, the tester will identify which component failed (commonly a worn check valve seat or a relief valve that will not open at the correct differential) and can usually complete the repair on the same visit, followed immediately by a retest. A device that fails and is not repaired cannot be left in service, since it is no longer confirmed to protect the water supply.
                </p>

                {/* Service card */}
                <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
                  <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.658-3.163M11.42 15.17l5.658-3.163M11.42 15.17V20.9m0-5.73l-5.658 3.163M11.42 15.17l5.658 3.163M6.762 17.333l-.007-4.666L11.42 9.504m6.762 4.666l-.007-4.666L11.42 9.504m0 0V3.1" /></svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-1">Backflow Prevention and Testing</p>
                    <p className="text-sm text-gray-600 mb-2">Certified annual testing, device installation, and repairs for residential and commercial properties across Middlesex County, NJ.</p>
                    <Link href="/services/backflow-prevention-testing" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
                  </div>
                </div>

                {/* FAQs */}
                <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-6">
                  Backflow testing frequency FAQs
                </h2>
                <div className="space-y-4 not-prose">
                  {faqData.map((faq, i) => (
                    <details key={i} className="border border-gray-200 rounded-lg overflow-hidden group">
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer bg-white hover:bg-gray-50 transition font-semibold text-gray-900 list-none">
                        {faq.question}
                        <span className="ml-4 text-red-700 text-xl font-bold group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                      </summary>
                      <div className="px-5 py-4 bg-gray-50 text-gray-700 text-sm leading-relaxed border-t border-gray-200">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>

                {/* Final CTA */}
                <div className="bg-gray-900 text-white rounded-xl p-8 mt-10 not-prose">
                  <p className="text-xl font-bold mb-2">Keep your backflow testing on schedule</p>
                  <p className="text-gray-300 text-sm mb-6">
                    Illyrian Plumber provides certified backflow testing for homeowners and businesses throughout East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick, and files your test report the same day.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-3 rounded-lg font-bold hover:bg-red-800 transition text-center">
                      Call Niti: {BUSINESS_INFO.phone}
                    </a>
                    <a href={BUSINESS_INFO.phone2Link} className="bg-gray-700 text-white px-5 py-3 rounded-lg font-bold hover:bg-gray-600 transition text-center">
                      Call Danny: {BUSINESS_INFO.phone2}
                    </a>
                    <Link href="/services/backflow-prevention-testing" className="border border-gray-500 text-gray-200 px-5 py-3 rounded-lg font-bold hover:border-gray-300 hover:text-white transition text-center">
                      Backflow Testing Service
                    </Link>
                  </div>
                </div>

                {/* Related Articles */}
                <section className="mt-12 not-prose">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/blog/what-is-backflow-testing" className="group">
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">What Is Backflow Testing? Everything NJ Homeowners Need to Know</h3>
                        <p className="text-sm text-gray-600">The full process, device types, and cost breakdown.</p>
                      </div>
                    </Link>
                    <Link href="/blog/whole-house-water-filter-worth-it" className="group">
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Is a Whole House Water Filter Worth It in NJ?</h3>
                        <p className="text-sm text-gray-600">Compare water filtration options and costs for Middlesex County homeowners.</p>
                      </div>
                    </Link>
                    <Link href="/blog/best-whole-house-water-filtration-systems" className="group">
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Best Whole House Water Filtration Systems</h3>
                        <p className="text-sm text-gray-600">Licensed plumber reviews of the top whole house water filter systems.</p>
                      </div>
                    </Link>
                    <Link href="/blog/why-is-water-pressure-low" className="group">
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Why Is My Water Pressure Low?</h3>
                        <p className="text-sm text-gray-600">Common causes and fixes for low water pressure in NJ homes.</p>
                      </div>
                    </Link>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Schedule backflow testing</p>
                  <p className="text-gray-600 text-sm mb-4">Certified testing - official report filed same day.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Service Areas</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    {BUSINESS_INFO.serviceAreas.map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>
                        <Link href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-red-700 transition">
                          {area}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/service-areas" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Service Areas</Link>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our Services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/backflow-prevention-testing" className="text-red-700 hover:text-red-800 font-medium transition">Backflow Prevention &amp; Testing</Link></li>
                    <li><Link href="/services/commercial-plumbing" className="text-gray-700 hover:text-red-700 transition">Commercial Plumbing</Link></li>
                    <li><Link href="/services/plumbing-safety-inspections" className="text-gray-700 hover:text-red-700 transition">Plumbing Safety Inspections</Link></li>
                    <li><Link href="/services/water-filtration-system" className="text-gray-700 hover:text-red-700 transition">Water Filtration System</Link></li>
                    <li><Link href="/services/boiler-repair-service" className="text-gray-700 hover:text-red-700 transition">Boiler Repair Service</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You might also like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/what-is-backflow-testing" className="text-gray-700 hover:text-red-700 transition leading-snug block">What Is Backflow Testing?</Link></li>
                    <li><Link href="/blog/whole-house-water-filter-worth-it" className="text-gray-700 hover:text-red-700 transition leading-snug block">Is a Whole House Water Filter Worth It?</Link></li>
                    <li><Link href="/blog/best-whole-house-water-filtration-systems" className="text-gray-700 hover:text-red-700 transition leading-snug block">Best Whole House Water Filtration Systems</Link></li>
                    <li><Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition leading-snug block">Why Is My Water Pressure Low?</Link></li>
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
