import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "The Complete Guide to Commercial Plumbing Code Compliance",
  description:
    "Commercial plumbing code compliance explained: permits, grease traps, backflow prevention, and ADA fixtures. A practical guide for Middlesex County business owners.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/commercial-plumbing-code-compliance-guide" },
  keywords: [
    "commercial plumbing code compliance",
    "grease trap requirements",
    "commercial backflow prevention",
    "ADA plumbing fixtures",
    "plumbing permit inspection",
    "commercial plumbing code",
    "commercial plumbing permits NJ",
    "commercial plumbing inspection",
  ],
  openGraph: {
    title: "The Complete Guide to Commercial Plumbing Code Compliance",
    description:
      "Permits, grease traps, backflow prevention, and ADA fixtures explained for business owners who need their plumbing to pass inspection the first time.",
    type: "article",
    publishedTime: "2026-07-22T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function CommercialPlumbingCodeComplianceGuidePost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Complete Guide to Commercial Plumbing Code Compliance",
    description:
      "Commercial plumbing code compliance explained: permits, grease traps, backflow prevention, and ADA fixtures. A practical guide for Middlesex County business owners.",
    image: "https://www.illyrianplumber.com/images/professional-plumbing-services.jpg",
    author: {
      "@type": "Person",
      name: "Illyrian Plumber Team",
      jobTitle: "Licensed Master Plumber",
      worksFor: { "@id": "https://www.illyrianplumber.com/#organization" },
    },
    publisher: { "@id": "https://www.illyrianplumber.com/#organization" },
    datePublished: "2026-07-22T08:00:00.000Z",
    dateModified: "2026-07-22T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/commercial-plumbing-code-compliance-guide",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What plumbing code applies to commercial buildings in New Jersey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "New Jersey commercial buildings follow the plumbing subcode within the state's Uniform Construction Code (UCC), based on national model plumbing codes with New Jersey amendments. Local municipal Construction Offices enforce the code and issue permits. Requirements cover pipe sizing, fixture counts, backflow prevention, grease interceptors, and drainage, and they apply to new construction, renovations, and many equipment swaps.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a permit to replace a commercial water heater or fixture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most New Jersey municipalities, yes. Replacing a water heater, relocating a fixture, or adding new plumbing equipment in a commercial space typically requires a permit and inspection, even if the original installation was already permitted. Simple like-for-like fixture swaps sometimes qualify for a reduced permit process, but this varies by town, so it is worth confirming before work begins.",
        },
      },
      {
        "@type": "Question",
        name: "How often does a commercial grease trap need to be serviced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most municipalities and health departments require grease traps to be pumped and inspected on a schedule tied to usage volume, commonly every one to three months for active commercial kitchens. Health inspectors check service records during routine visits, so keeping a documented pumping schedule is part of staying compliant, not just good practice.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if a commercial plumbing inspection fails?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A failed inspection means the work does not meet code as installed. The inspector issues a written list of corrections, and the plumbing contractor must complete the fixes and schedule a re-inspection before the project can proceed or the space can open. For food service businesses, an open violation can also delay a health department license.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-white">
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Commercial Plumbing</span>
                <time dateTime="2026-07-22">July 2026</time>
                <span>11 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                The complete guide to commercial plumbing code compliance
              </h1>
              <p className="text-xl text-gray-300">
                Permits, grease traps, backflow prevention, and ADA fixtures explained so your next inspection goes smoothly the first time.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-07-22" updateDate="2026-07-22" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-lg max-w-none">

                <p className="text-xl text-gray-700 leading-relaxed">
                  If you own or manage a business in New Jersey, plumbing code compliance is not optional. A failed inspection can delay a grand opening, and a violation found during a health department visit can shut down a restaurant kitchen overnight. Illyrian Plumber provides{" "}
                  <Link href="/services/commercial-plumbing" className="text-red-700 hover:text-red-800 font-medium">
                    commercial plumbing services
                  </Link>{" "}
                  for businesses across Middlesex County, and this guide walks through what code compliance actually requires, from grease traps to backflow prevention to ADA fixtures.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8 not-prose">
                  <p className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-2">About Illyrian Plumber</p>
                  <p className="text-gray-700 text-sm mb-4">
                    Licensed commercial plumbing contractors serving restaurants, offices, retail stores, medical facilities, and multi-family buildings throughout East Brunswick and Middlesex County, NJ. We handle permit applications, inspections, and code compliance work for businesses of every size.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <Link href="/services/commercial-plumbing" className="text-red-700 hover:text-red-800 font-medium">Commercial Plumbing</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/services/backflow-prevention-testing" className="text-red-700 hover:text-red-800 font-medium">Backflow Testing</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Safety Inspections</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800 font-medium">Gas Line Services</Link>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8 not-prose">
                  <p className="font-bold text-gray-900 mb-3">In This Guide</p>
                  <ol className="space-y-1.5 text-sm text-gray-700 list-decimal list-inside">
                    <li><a href="#what-counts" className="text-red-700 hover:text-red-800">What Counts as Commercial Plumbing Under NJ Code</a></li>
                    <li><a href="#permits" className="text-red-700 hover:text-red-800">Permits and Inspections: the Compliance Pathway</a></li>
                    <li><a href="#grease-traps" className="text-red-700 hover:text-red-800">Grease Trap Requirements for Food Service</a></li>
                    <li><a href="#backflow" className="text-red-700 hover:text-red-800">Commercial Backflow Prevention Requirements</a></li>
                    <li><a href="#ada" className="text-red-700 hover:text-red-800">ADA Compliant Plumbing Fixtures</a></li>
                    <li><a href="#violations" className="text-red-700 hover:text-red-800">Common Code Violations We See</a></li>
                    <li><a href="#responsibility" className="text-red-700 hover:text-red-800">Who Is Responsible: Owner, Tenant, or Contractor</a></li>
                    <li><a href="#local" className="text-red-700 hover:text-red-800">Middlesex County Compliance Notes</a></li>
                    <li><a href="#schedule" className="text-red-700 hover:text-red-800">How Often to Schedule a Compliance Check</a></li>
                    <li><a href="#faqs" className="text-red-700 hover:text-red-800">Compliance FAQs</a></li>
                  </ol>
                </div>

                <h2 id="what-counts" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  What counts as commercial plumbing under NJ code
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Any plumbing system serving a business, not a private residence, falls under commercial plumbing code. That includes restaurants, offices, retail stores, medical and dental offices, schools, warehouses, hotels, and multi-family buildings with common-area systems. Commercial systems are held to a higher standard than residential ones because they serve more people, run at higher volumes, and often involve specialized equipment such as commercial kitchen fixtures, grease interceptors, and fire suppression connections.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  New Jersey enforces commercial plumbing requirements through the plumbing subcode of its Uniform Construction Code. The subcode sets minimum standards for pipe sizing, fixture counts based on occupancy, venting, drainage slope, backflow prevention, and materials. Local municipal Construction Offices apply and enforce the subcode for every commercial project in their jurisdiction, which is why requirements can differ slightly from one Middlesex County town to the next even though the underlying code is the same statewide.
                </p>

                <h2 id="permits" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Permits and inspections: the compliance pathway
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Most commercial plumbing work requires a permit before it starts, not after. A licensed plumber submits plans or a scope of work to the local Construction Office, pulls the permit, completes the installation, and then schedules a rough-in inspection (before walls close) and a final inspection (after fixtures are set and the system is pressurized). Skipping this sequence is one of the most common and most expensive mistakes we see, because opening walls back up to correct unpermitted work costs far more than doing it right the first time.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Working with a licensed{" "}
                  <Link href="/services/commercial-plumbing" className="text-red-700 hover:text-red-800 font-medium">
                    commercial plumbing contractor
                  </Link>{" "}
                  who handles the permit application on your behalf removes most of this friction. We coordinate directly with your general contractor and the local Construction Office so inspections are scheduled at the right point in the project instead of after the fact.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Plan review</strong> - larger buildouts require plumbing plans submitted for review before a permit is issued.</li>
                  <li><strong>Rough-in inspection</strong> - supply, drain, and vent lines are inspected before they are covered by walls or floors.</li>
                  <li><strong>Pressure test</strong> - supply and gas lines are pressure tested to confirm there are no leaks before fixtures are connected.</li>
                  <li><strong>Final inspection</strong> - fixtures, water heaters, and backflow devices are checked once the system is complete and operating.</li>
                </ul>

                <h2 id="grease-traps" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Grease trap requirements for food service
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Any commercial kitchen that generates fats, oils, or grease needs a grease interceptor between the kitchen drains and the sewer connection. This applies to full-service restaurants, cafes, cafeterias, and any food service operation with a three-compartment sink or commercial dishwasher. The interceptor traps grease before it reaches the municipal sewer system, where it would otherwise solidify and cause blockages.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sizing depends on the kitchen&apos;s water flow and grease load, which is why grease trap installation should be planned during the kitchen design phase rather than added afterward. Once installed, most municipalities and health departments require regular pumping and a service log, not just a one-time install. Health inspectors ask for that log during routine visits, and missing records are treated the same as a missing service.
                </p>

                <h2 id="backflow" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Commercial backflow prevention requirements
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Commercial buildings almost always require backflow prevention on the main service connection, regardless of what specific equipment is inside. Restaurants, medical offices, car washes, and buildings with fire sprinkler systems are treated as higher-hazard connections and are typically required to install a reduced pressure zone (RPZ) assembly rather than a simpler device. Our{" "}
                  <Link href="/services/backflow-prevention-testing" className="text-red-700 hover:text-red-800 font-medium">
                    backflow prevention and testing service
                  </Link>{" "}
                  covers installation, annual testing, and the official report filing that most water authorities require. We cover what backflow devices do and how testing works in more detail in our{" "}
                  <Link href="/blog/what-is-backflow-testing" className="text-red-700 hover:text-red-800 font-medium">
                    guide to backflow testing
                  </Link>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Commercial devices are frequently larger and more complex than residential ones, and testing typically needs to happen on the same annual schedule as residential devices unless your municipality classifies your business as high-hazard, which can require semi-annual or quarterly testing instead.
                </p>

                <div className="bg-red-700 text-white rounded-xl p-6 my-10 not-prose">
                  <p className="text-lg font-bold mb-2">Planning a commercial buildout or renovation?</p>
                  <p className="text-red-100 text-sm mb-4">
                    We handle permits, rough-in, and final inspection for commercial plumbing projects throughout Middlesex County.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition text-center text-sm">
                      Call Niti: {BUSINESS_INFO.phone}
                    </a>
                    <a href={BUSINESS_INFO.phone2Link} className="bg-red-800 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-red-900 transition text-center text-sm">
                      Call Danny: {BUSINESS_INFO.phone2}
                    </a>
                  </div>
                </div>

                <h2 id="ada" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  ADA compliant plumbing fixtures
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Public-facing commercial restrooms need fixtures and clearances that meet accessibility requirements under the Americans with Disabilities Act, in addition to the state plumbing subcode. This affects toilet height and clearance, sink height and knee clearance underneath, faucet operation (lever or sensor rather than a twist knob), grab bar placement, and the turning radius required inside the stall.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Toilet height</strong> - the seat typically needs to sit 17 to 19 inches above the floor, higher than a standard residential toilet.</li>
                  <li><strong>Clear floor space</strong> - at least a 60-inch turning radius (or an equivalent T-shaped space) is required inside an accessible stall.</li>
                  <li><strong>Sink and counter height</strong> - the counter surface generally sits no higher than 34 inches, with open knee clearance underneath.</li>
                  <li><strong>Faucet controls</strong> - lever handles, push-type, or sensor-activated controls are required rather than a twist knob that needs tight grasping to operate.</li>
                  <li><strong>Grab bars</strong> - required at a specific height and length beside and behind the toilet in accessible stalls.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  ADA requirements come up most often during new construction, restroom renovations, and tenant buildouts, since existing restrooms in older buildings are not automatically required to be retrofitted unless a renovation triggers it. When we handle a commercial restroom project, we select fixtures and set clearances to meet ADA requirements from the start rather than solving for it after the layout is already built.
                </p>

                <h2 id="violations" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Common code violations we see
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Across the commercial jobs we handle in Middlesex County, the same handful of issues come up repeatedly:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Missing or expired backflow testing</strong> - the single most common violation on commercial water accounts, often only discovered when the municipality sends a notice.</li>
                  <li><strong>Undersized or missing grease interceptors</strong> - common in older buildings that changed tenants from retail to food service without updating the plumbing.</li>
                  <li><strong>Unpermitted fixture additions</strong> - a break room sink or mop sink added without a permit during a quick renovation.</li>
                  <li><strong>Non-compliant restroom clearances</strong> - stalls or sinks installed without checking ADA clearance requirements first.</li>
                  <li><strong>Corroded galvanized supply lines</strong> - common in commercial buildings from the 1960s through 1980s that have never been repiped.</li>
                </ul>

                <h2 id="responsibility" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Who is responsible: owner, tenant, or contractor
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Compliance responsibility depends on your lease and the scope of the work. In an owner-occupied building, the property owner is on the hook for permits and code compliance across the whole system. In a leased commercial space, the lease usually spells out who handles what: many commercial leases put day-to-day fixture maintenance on the tenant and structural or base-building systems on the landlord, but grease traps, backflow devices, and any plumbing work tied to a tenant buildout are typically the tenant&apos;s responsibility to permit and maintain.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whoever is on the hook, the licensed plumbing contractor doing the work is responsible for pulling the correct permit and getting the job inspected. If you are a tenant taking over a space, it is worth asking your landlord for the building&apos;s plumbing permit history before signing, so you know what has already been brought up to code and what has not.
                </p>

                <h2 id="local" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  Middlesex County compliance notes
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Every Middlesex County town enforces the same New Jersey Uniform Construction Code, but permits are pulled through the local municipal Construction Office, and processing times and specific documentation requirements vary from town to town. Businesses in East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick each work with a different Construction Office, and we coordinate directly with whichever one applies to your project. Licensing information for New Jersey plumbing contractors is publicly available through the{" "}
                  <a href="https://www.njconsumeraffairs.gov/plu" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">
                    NJ State Board of Examiners of Master Plumbers
                  </a>, which is worth checking before hiring any contractor for commercial work.
                </p>

                <h2 id="schedule" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  How often to schedule a compliance check
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Do not wait for a violation notice. An annual{" "}
                  <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">
                    plumbing safety inspection
                  </Link>{" "}
                  catches most of the issues above before they turn into a failed health inspection or a municipal notice, and it lines up naturally with your annual backflow test. Restaurants and other high-turnover food service businesses benefit from checking grease trap service records more often, since that is the item health inspectors ask about most.
                </p>

                <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-6">
                  Compliance FAQs
                </h2>
                <div className="space-y-4 not-prose">
                  {[
                    {
                      question: "What plumbing code applies to commercial buildings in New Jersey?",
                      answer:
                        "New Jersey commercial buildings follow the plumbing subcode within the state's Uniform Construction Code (UCC), based on national model plumbing codes with New Jersey amendments. Local municipal Construction Offices enforce the code and issue permits. Requirements cover pipe sizing, fixture counts, backflow prevention, grease interceptors, and drainage, and they apply to new construction, renovations, and many equipment swaps.",
                    },
                    {
                      question: "Do I need a permit to replace a commercial water heater or fixture?",
                      answer:
                        "In most New Jersey municipalities, yes. Replacing a water heater, relocating a fixture, or adding new plumbing equipment in a commercial space typically requires a permit and inspection, even if the original installation was already permitted. Simple like-for-like fixture swaps sometimes qualify for a reduced permit process, but this varies by town, so it is worth confirming before work begins.",
                    },
                    {
                      question: "How often does a commercial grease trap need to be serviced?",
                      answer:
                        "Most municipalities and health departments require grease traps to be pumped and inspected on a schedule tied to usage volume, commonly every one to three months for active commercial kitchens. Health inspectors check service records during routine visits, so keeping a documented pumping schedule is part of staying compliant, not just good practice.",
                    },
                    {
                      question: "What happens if a commercial plumbing inspection fails?",
                      answer:
                        "A failed inspection means the work does not meet code as installed. The inspector issues a written list of corrections, and the plumbing contractor must complete the fixes and schedule a re-inspection before the project can proceed or the space can open. For food service businesses, an open violation can also delay a health department license.",
                    },
                  ].map((faq, i) => (
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

                <div className="bg-gray-900 text-white rounded-xl p-8 mt-10 not-prose">
                  <p className="text-xl font-bold mb-2">Need a commercial plumbing contractor who handles compliance?</p>
                  <p className="text-gray-300 text-sm mb-6">
                    Illyrian Plumber handles permits, inspections, grease traps, backflow devices, and ADA-compliant fixtures for businesses throughout East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-3 rounded-lg font-bold hover:bg-red-800 transition text-center">
                      Call Niti: {BUSINESS_INFO.phone}
                    </a>
                    <a href={BUSINESS_INFO.phone2Link} className="bg-gray-700 text-white px-5 py-3 rounded-lg font-bold hover:bg-gray-600 transition text-center">
                      Call Danny: {BUSINESS_INFO.phone2}
                    </a>
                    <Link href="/services/commercial-plumbing" className="border border-gray-500 text-gray-200 px-5 py-3 rounded-lg font-bold hover:border-gray-300 hover:text-white transition text-center">
                      Commercial Plumbing Service
                    </Link>
                  </div>
                </div>

                <section className="mt-12 not-prose">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/blog/what-is-backflow-testing" className="group">
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">What Is Backflow Testing?</h3>
                        <p className="text-sm text-gray-600">Everything NJ property owners need to know about annual backflow testing.</p>
                      </div>
                    </Link>
                    <Link href="/blog/gas-leak-detection-safety" className="group">
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Gas Leak Detection and Safety</h3>
                        <p className="text-sm text-gray-600">Know the signs and stay safe around commercial and residential gas lines.</p>
                      </div>
                    </Link>
                  </div>
                </section>

              </div>
            </div>

            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need Commercial Plumbing?</p>
                  <p className="text-gray-600 text-sm mb-4">Permits, inspections, and code compliance handled for you.</p>
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
                    <li><Link href="/services/commercial-plumbing" className="text-red-700 hover:text-red-800 font-medium transition">Commercial Plumbing</Link></li>
                    <li><Link href="/services/backflow-prevention-testing" className="text-gray-700 hover:text-red-700 transition">Backflow Prevention &amp; Testing</Link></li>
                    <li><Link href="/services/plumbing-safety-inspections" className="text-gray-700 hover:text-red-700 transition">Plumbing Safety Inspections</Link></li>
                    <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Services</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/what-is-backflow-testing" className="text-gray-700 hover:text-red-700 transition leading-snug block">What Is Backflow Testing?</Link></li>
                    <li><Link href="/blog/gas-leak-detection-safety" className="text-gray-700 hover:text-red-700 transition leading-snug block">Gas Leak Detection &amp; Safety</Link></li>
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
