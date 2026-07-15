import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "Basement flood prevention checklist for storm season",
  description: "A pre-storm basement checklist: sump pump testing, battery backup, discharge line care, and when to call a plumber. From licensed NJ master plumbers.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/basement-flood-prevention-checklist" },
  keywords: [
    "basement flood prevention checklist",
    "sump pump maintenance",
    "battery backup sump pump",
    "storm season basement prep",
    "french drain basement",
    "basement waterproofing",
    "sump pump testing",
    "how to prevent basement flooding",
  ],
  openGraph: {
    title: "Basement flood prevention checklist for storm season",
    description: "A pre-storm basement checklist from licensed NJ master plumbers: sump pump testing, battery backup, and when to call a pro.",
    type: "article",
    publishedTime: "2026-07-24T08:00:00.000Z",
    modifiedTime: "2026-07-24T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function BasementFloodPreventionPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Basement flood prevention checklist for storm season",
    description: "A pre-storm basement checklist covering sump pump testing, battery backup, discharge line care, french drains, and when to call a licensed plumber.",
    image: "https://www.illyrianplumber.com/images/professional-plumbing-services.jpg",
    author: {
      "@type": "Person",
      name: "Illyrian Plumber Team",
      worksFor: { "@id": "https://www.illyrianplumber.com/#organization" },
    },
    publisher: { "@id": "https://www.illyrianplumber.com/#organization" },
    datePublished: "2026-07-24T08:00:00.000Z",
    dateModified: "2026-07-24T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/basement-flood-prevention-checklist" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.illyrianplumber.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.illyrianplumber.com/blog" },
      { "@type": "ListItem", position: 3, name: "Basement Flood Prevention Checklist", item: "https://www.illyrianplumber.com/blog/basement-flood-prevention-checklist" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How far in advance should I prep my basement for storm season?", acceptedAnswer: { "@type": "Answer", text: "Run through this checklist at least two weeks before hurricane season begins in June and again before the heaviest spring rain in March. That gives enough time to order a replacement pump or schedule a repair if testing turns up a problem, instead of discovering a dead sump pump the night a nor'easter arrives." } },
      { "@type": "Question", name: "Will a battery backup really keep my sump pump running during a power outage?", acceptedAnswer: { "@type": "Answer", text: "Yes, for 6 to 12 hours depending on how often the pump cycles, which covers most storm-related outages. Power almost always fails at the same moment groundwater rises, since both are caused by the same storm, so a battery backup is one of the few upgrades that pays for itself the first time it activates." } },
      { "@type": "Question", name: "Do I need a french drain if I already have a sump pump?", acceptedAnswer: { "@type": "Answer", text: "Not always. A sump pump removes water that has already entered the pit; a french drain intercepts water in the soil before it reaches your foundation. Homes with a persistently high water table or a sump pump that cycles every few minutes during rain often benefit from adding one, but many Middlesex County basements do fine with a well-maintained pump alone." } },
      { "@type": "Question", name: "What should I do if my basement is already flooding right now?", acceptedAnswer: { "@type": "Answer", text: "Cut power to any submerged outlets or appliances at the breaker if it is safe to reach, move valuables to higher ground, and call an emergency plumber immediately rather than waiting to see if the water recedes. A pump that has already failed during an active storm needs same-day attention, not a scheduled visit." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-white">
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Storm prep</span>
                <time dateTime="2026-07-24">Published July 24, 2026</time>
                <span>9 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Basement flood prevention checklist for storm season</h1>
              <p className="text-xl text-gray-300">A working sump pump only helps if you check it before the storm, not during one. Here is the full pre-season walkthrough.</p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-07-24" updateDate="2026-07-24" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-5 mb-8">
                <p className="font-bold text-gray-900 mb-2">Quick answer</p>
                <p className="text-gray-800 leading-relaxed">
                  Before storm season, test your sump pump with 5 gallons of water, confirm the battery backup holds a charge, clear the discharge line and downspouts, and check window wells and foundation cracks for gaps. Budget 20 to 30 minutes for the full walkthrough, and schedule a professional inspection if your pump is over 7 years old or has never been serviced.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  When storm season hits central New Jersey, a basement with an untested sump pump is a flood waiting for the right amount of rain. Basements fill fastest where the water table already sits close to the surface, which is exactly why homeowners in <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 underline">Sayreville, NJ</Link> call us every year before the first nor&apos;easter, since parts of the borough near the Raritan River and Raritan Bay flood faster than upland Middlesex County towns.
                </p>
                <p>
                  This checklist is the same walkthrough our licensed plumbers use on service calls, condensed so you can run it yourself in under half an hour. If anything on the list fails, or if you would rather have a professional confirm your system is storm-ready, our <Link href="/services/sump-pump-repair-install" className="text-red-700 hover:text-red-800 underline">sump pump repair and installation team</Link> covers same-day inspections across Middlesex County.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/sump-pump-repair-install" className="text-red-700 hover:text-red-800">sump pump repair and installation</Link>, <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link>, and <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link> across East Brunswick, Edison, <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800">Sayreville</Link>, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
                </p>
              </div>

              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Checklist sections</h2>
                <ul className="space-y-2">
                  <li><a href="#pre-storm-checklist" className="text-red-700 hover:text-red-800">The pre-storm checklist</a></li>
                  <li><a href="#test-your-pump" className="text-red-700 hover:text-red-800">How to test your sump pump</a></li>
                  <li><a href="#warning-signs" className="text-red-700 hover:text-red-800">Signs your pump won&apos;t survive the next storm</a></li>
                  <li><a href="#sayreville" className="text-red-700 hover:text-red-800">Why some Middlesex County basements flood faster</a></li>
                  <li><a href="#diy-vs-pro" className="text-red-700 hover:text-red-800">DIY prep vs calling a plumber</a></li>
                  <li><a href="#cost-guide" className="text-red-700 hover:text-red-800">What it costs to get storm-ready</a></li>
                </ul>
              </nav>

              <section id="pre-storm-checklist" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The pre-storm checklist</h2>
                <p className="text-gray-700 mb-6">Work through this list at least two weeks before the season&apos;s first major storm. Following the <a href="https://www.ready.gov/floods" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800 underline">flood preparedness guidance from Ready.gov</a>, most basement flooding damage comes from equipment that was never tested, not from unusually severe weather.</p>
                <div className="space-y-4 mb-6">
                  {[
                    { title: "Test the primary pump", desc: "Pour 5 gallons of water into the pit and confirm the pump activates within a few seconds, moves the water out steadily, and shuts off cleanly when the float drops." },
                    { title: "Check the battery backup", desc: "Unplug the primary pump, pour water into the pit, and verify the backup activates and runs the pump on its own. Replace the backup battery every 3 to 5 years even if it still holds a charge." },
                    { title: "Clear the discharge line", desc: "Walk outside and confirm the discharge pipe empties well away from the foundation, is not blocked by leaves or a screen clogged with debris, and has not been crushed by landscaping work." },
                    { title: "Clean gutters and downspouts", desc: "Roof water that cannot drain away from the house adds directly to the load your sump pump has to handle. Extend downspouts at least 4 to 6 feet from the foundation." },
                    { title: "Inspect window wells and foundation cracks", desc: "Check window well covers for gaps and seal visible foundation cracks with hydraulic cement. These are common entry points that a sump pump cannot compensate for." },
                    { title: "Consider a french drain for chronic problem areas", desc: "If one section of the basement takes on water even with a working pump, an interior or exterior french drain can intercept water in the soil before it reaches the foundation." },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                      <div className="w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="test-your-pump" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to test your sump pump in 5 minutes</h2>
                <p className="text-gray-700 mb-6">This is the exact test our plumbers run on a service call. It takes longer to read than to do.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                  <ol className="space-y-3 text-gray-700">
                    <li><strong>1.</strong> Remove the pit cover and check for debris around the intake screen</li>
                    <li><strong>2.</strong> Confirm the pump sits upright and the float switch swings freely</li>
                    <li><strong>3.</strong> Slowly pour 5 gallons of water into the pit</li>
                    <li><strong>4.</strong> Watch the pump activate as the water level rises</li>
                    <li><strong>5.</strong> Confirm the water clears from the pit within 10 to 15 seconds</li>
                    <li><strong>6.</strong> Verify the pump shuts off cleanly once the float drops</li>
                    <li><strong>7.</strong> Step outside and confirm water is discharging away from the foundation</li>
                  </ol>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">A common mistake</h4>
                  <p className="text-gray-700 text-sm">Testing the pump by lifting the float manually only proves the switch works, not that the pump can actually clear real water volume. Always use the water-pour test, not the manual-lift shortcut.</p>
                </div>
              </section>

              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Failed the test?</p>
                  <p className="text-gray-300 text-sm">Same-day sump pump repair across Middlesex County.</p>
                </div>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">
                    Call Niti
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">
                    Call Danny
                  </a>
                </div>
              </div>

              <section id="warning-signs" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Signs your pump won&apos;t survive the next storm</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { title: "Pump is over 7 years old", desc: "Submersible pumps average 7 to 10 years of service life before internal wear catches up with them." },
                    { title: "No battery backup installed", desc: "A pump with no backup power is a coin flip during any storm strong enough to knock out electricity." },
                    { title: "Grinding or rattling during the test", desc: "Usually means the impeller is damaged or debris has worked its way into the housing." },
                    { title: "Slow to clear the test water", desc: "A pump that takes 30-plus seconds to clear 5 gallons is losing capacity and may not keep up during heavy rain." },
                    { title: "Visible rust on the housing", desc: "Corrosion is a sign the unit is nearing the end of its service life even if it still runs." },
                    { title: "Discharge line frozen or crushed last winter", desc: "Any damage from last season needs to be repaired before the next storm, not left for later." },
                  ].map((sign, index) => (
                    <div key={index} className="flex items-start gap-3 bg-amber-50 rounded-lg p-4">
                      <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">{sign.title}</p>
                        <p className="text-sm text-gray-700">{sign.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="sayreville" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why some Middlesex County basements flood faster</h2>
                <p className="text-gray-700 mb-4">
                  Not every basement in Middlesex County faces the same flood risk. <Link href="/service-areas/sayreville" className="text-red-700 hover:text-red-800 underline">Sayreville</Link> sits on low, sandy ground close to the Raritan Bay, which is why basement flooding and sump pump failures hit harder here than in the upland parts of the county. Properties near the Raritan River and in the lower-elevation neighborhoods around Parlin and Morgan lean on their sump pumps during every significant rain event, and pumps in these zones that are 7 to 10 years old or missing a battery backup are our most common emergency calls after a storm.
                </p>
                <p className="text-gray-700">
                  If you are in Sayreville or a similarly low-lying section of the county, treat the pre-storm checklist above as mandatory rather than optional, and consider testing more often than the once- or twice-a-year schedule that works fine in higher-elevation neighborhoods.
                </p>
              </section>

              <section id="diy-vs-pro" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">DIY prep vs calling a plumber</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Handle it yourself if</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>- The pump passes the 5-gallon water test cleanly</li>
                      <li>- The battery backup holds a charge and activates properly</li>
                      <li>- Gutters, downspouts, and the discharge line are clear</li>
                      <li>- The pump is under 7 years old with no unusual noise</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Call a plumber if</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>- The pump fails the water test or runs slowly</li>
                      <li>- You hear grinding, rattling, or humming without pumping</li>
                      <li>- There is no battery backup and your basement is finished</li>
                      <li>- Water is already entering the basement right now</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700">
                  Our <Link href="/services/sump-pump-repair-install" className="text-red-700 hover:text-red-800 underline">sump pump repair and installation service</Link> covers everything from a same-day float switch fix to a full new system with battery backup, and every visit starts with the same test described above so you know exactly what is wrong before we quote a repair.
                </p>
              </section>

              <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
                <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                  <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">Related service: sump pump repair and installation</p>
                  <p className="text-sm text-gray-600 mb-2">Same-day inspections, repairs, and battery backup installation across Middlesex County.</p>
                  <Link href="/services/sump-pump-repair-install" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn more</Link>
                </div>
              </div>

              <section id="cost-guide" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What it costs to get storm-ready</h2>
                <p className="text-gray-700 mb-6">If your checklist turns up a problem, here is what to expect from a licensed plumber in Middlesex County.</p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { title: "Annual maintenance visit", range: "$100 - $200", note: "Inspection, cleaning, and full water test" },
                    { title: "Sump pump repair", range: "$150 - $500", note: "Float switch, check valve, or motor repair" },
                    { title: "Pump replacement (existing pit)", range: "$500 - $1,000", note: "Swap an old pump in an existing sump pit" },
                    { title: "Battery backup addition", range: "$500 - $1,200", note: "Add a backup system to an existing primary pump" },
                    { title: "New installation (with pit)", range: "$1,500 - $3,000", note: "Complete install including pit excavation" },
                    { title: "Dual pump system", range: "$2,000 - $4,000", note: "Primary submersible plus battery backup" },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-red-700 font-semibold text-lg mb-1">{item.range}</p>
                      <p className="text-gray-600 text-sm">{item.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
                <div className="space-y-4">
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">How far in advance should I prep my basement for storm season?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5"><p className="text-gray-700">Run through this checklist at least two weeks before hurricane season begins in June and again before the heaviest spring rain in March. That gives enough time to order a replacement pump or schedule a repair if testing turns up a problem, instead of discovering a dead sump pump the night a nor&apos;easter arrives.</p></div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Will a battery backup really keep my sump pump running during a power outage?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5"><p className="text-gray-700">Yes, for 6 to 12 hours depending on how often the pump cycles, which covers most storm-related outages. Power almost always fails at the same moment groundwater rises, since both are caused by the same storm, so a battery backup is one of the few upgrades that pays for itself the first time it activates.</p></div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Do I need a french drain if I already have a sump pump?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5"><p className="text-gray-700">Not always. A sump pump removes water that has already entered the pit; a french drain intercepts water in the soil before it reaches your foundation. Homes with a persistently high water table or a sump pump that cycles every few minutes during rain often benefit from adding one, but many Middlesex County basements do fine with a well-maintained pump alone.</p></div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">What should I do if my basement is already flooding right now?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5"><p className="text-gray-700">Cut power to any submerged outlets or appliances at the breaker if it is safe to reach, move valuables to higher ground, and call an emergency plumber immediately rather than waiting to see if the water recedes. A pump that has already failed during an active storm needs same-day attention, not a scheduled visit.</p></div>
                  </details>
                </div>
              </section>

              <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Get your basement storm-ready</h2>
                <p className="text-red-100 mb-6">Free sump pump assessment for Sayreville and Middlesex County homeowners. We test, repair, or replace before the next storm finds the weak point for you.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                  <Link href="/services/sump-pump-repair-install" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Sump pump services</Link>
                </div>
              </section>

              <section className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/sump-pump-maintenance-guide" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Sump pump maintenance guide</h3>
                      <p className="text-sm text-gray-600">The full year-round maintenance schedule.</p>
                    </div>
                  </Link>
                  <Link href="/blog/battery-backup-sump-pump-guide" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Battery backup sump pump guide</h3>
                      <p className="text-sm text-gray-600">Why backup power matters and how to choose one.</p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need a plumber?</p>
                  <p className="text-gray-600 text-sm mb-4">Same-day sump pump inspection before the next storm.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Service areas</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/east-brunswick" className="hover:text-red-700 transition">East Brunswick</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/edison" className="hover:text-red-700 transition">Edison</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/sayreville" className="hover:text-red-700 transition">Sayreville</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/old-bridge" className="hover:text-red-700 transition">Old Bridge</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/monroe-township" className="hover:text-red-700 transition">Monroe Township</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/south-brunswick" className="hover:text-red-700 transition">South Brunswick</Link></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span><Link href="/service-areas/north-brunswick" className="hover:text-red-700 transition">North Brunswick</Link></li>
                  </ul>
                  <Link href="/service-areas" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Service Areas</Link>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/sump-pump-repair-install" className="text-gray-700 hover:text-red-700 transition">Sump Pump Repair &amp; Install</Link></li>
                    <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You might also like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/sump-pump-maintenance-guide" className="text-gray-700 hover:text-red-700 transition">Sump Pump Maintenance Guide</Link></li>
                    <li><Link href="/blog/battery-backup-sump-pump-guide" className="text-gray-700 hover:text-red-700 transition">Battery Backup Sump Pump Guide</Link></li>
                    <li><Link href="/blog/frozen-pipes-prevention-repair" className="text-gray-700 hover:text-red-700 transition">Frozen Pipes Prevention and Repair</Link></li>
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
