import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How to Clean and Replace a Shower Head (2026 Guide)",
  description: "How to clean a shower head and remove black gunk and calcium with a vinegar soak, plus how to replace a shower head and pick the right flow rate. Step-by-step NJ guide.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/how-to-clean-and-replace-a-shower-head" },
  keywords: [
    "how to clean a shower head",
    "how to clean shower head",
    "clean shower head",
    "how to replace a shower head",
    "how to change a shower head",
    "what is the black gunk on my shower head",
    "low flow shower head",
    "shower head flow rate",
    "gpm of shower",
    "how do you get rid of calcium deposits",
    "shower heads for low water pressure",
  ],
  openGraph: {
    title: "How to Clean and Replace a Shower Head (2026 Guide)",
    description: "Clean black gunk and calcium off your shower head and learn how to replace it and choose the right gpm flow rate.",
    type: "article",
    publishedTime: "2026-06-02T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

const faqs = [
  {
    question: "What is the black gunk on my shower head?",
    answer:
      "The black or pink slime on a shower head is biofilm, a mix of bacteria, mold, and mineral residue that builds up where water sits in the nozzles between uses. It is not dangerous to touch but it restricts flow and can drip onto you. A 30 minute soak in white vinegar dissolves it, and scrubbing the nozzles with an old toothbrush removes the rest.",
  },
  {
    question: "How do I clean a shower head without removing it?",
    answer:
      "Fill a plastic bag about half full with white vinegar, slip it over the shower head so the nozzles are submerged, and secure it with a rubber band or zip tie. Leave it for 30 minutes to several hours for heavy buildup, then remove the bag, scrub the face, and run hot water for a minute to flush the loosened scale. This works without any tools.",
  },
  {
    question: "How often should I replace a shower head?",
    answer:
      "Replace a shower head every 8 to 10 years, or sooner if cleaning no longer restores the spray, the finish is corroding, or it leaks at the neck. Hard water in many Middlesex County homes shortens that lifespan because mineral scale clogs the internal passages. If flow stays weak after a vinegar soak, the nozzles are permanently scaled and a new head is the fix.",
  },
  {
    question: "What shower head flow rate should I choose?",
    answer:
      "Standard shower heads are capped at 2.5 gallons per minute, and water-saving models run 1.5 to 2.0 gpm. A lower gpm head saves water and energy and is often required in new fixtures. If your water pressure is already low, choose a head designed for low pressure, which uses smaller, focused nozzles to keep the spray strong at a lower flow rate.",
  },
];

export default function HowToCleanAndReplaceAShowerHead() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Clean and Replace a Shower Head (2026 Guide)",
    description:
      "Step-by-step guide to cleaning black gunk and calcium off a shower head and replacing it, including how to choose the right gpm flow rate for New Jersey homes.",
    image: "https://www.illyrianplumber.com/images/shower-fixture-installation-nj.jpg",
    author: { "@type": "Organization", name: BUSINESS_INFO.name, url: "https://www.illyrianplumber.com" },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      logo: { "@type": "ImageObject", url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png" },
    },
    datePublished: "2026-06-02T08:00:00.000Z",
    dateModified: "2026-06-02T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/how-to-clean-and-replace-a-shower-head" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.illyrianplumber.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.illyrianplumber.com/blog" },
      { "@type": "ListItem", position: 3, name: "How to Clean and Replace a Shower Head", item: "https://www.illyrianplumber.com/blog/how-to-clean-and-replace-a-shower-head" },
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
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Bathroom Plumbing</span>
                <time dateTime="2026-06-02">June 2, 2026</time>
                <span>13 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How to clean and replace a shower head
              </h1>
              <p className="text-xl text-gray-300">
                Clear the black gunk and hard-water scale that weaken your spray, and learn how to swap in a new head and pick the right flow rate.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-06-02" />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  A weak, spitting, or crusted-over shower head is almost always caused by two things: biofilm in the nozzles and hard-water mineral scale clogging the spray holes. Both are easy to clean, and when cleaning no longer helps, replacing the head is a 15 minute job. If you would rather have it handled along with other fixtures, our <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-semibold">faucet and fixture installation</Link> team does it across Middlesex County. This guide covers how to clean a shower head, how to replace one, and how to choose the right flow rate.
                </p>
                <p className="text-gray-700">
                  Most of Central New Jersey has moderately hard water, so mineral buildup on fixtures is common. Cleaning every few months keeps the spray strong and extends the life of the head.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers serving Middlesex County, NJ since 2010. We handle <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">faucet and fixture installation</Link>, <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">bathroom remodeling</Link>, <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800">water filtration and softening</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
                </p>
              </div>

              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">In this guide</h2>
                <ul className="space-y-2">
                  <li><a href="#clean" className="text-red-700 hover:text-red-800">How to clean a shower head</a></li>
                  <li><a href="#gunk" className="text-red-700 hover:text-red-800">Black gunk and calcium deposits explained</a></li>
                  <li><a href="#replace" className="text-red-700 hover:text-red-800">How to replace a shower head</a></li>
                  <li><a href="#flow" className="text-red-700 hover:text-red-800">Flow rate and low water pressure</a></li>
                  <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently asked questions</a></li>
                </ul>
              </nav>

              <section id="clean" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to clean a shower head with vinegar</h2>
                <p className="text-gray-700 mb-4">
                  White vinegar dissolves mineral scale and loosens biofilm without harsh chemicals. You can clean the head in place or remove it for a deeper soak.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">The bag soak method (no removal)</h3>
                    <p className="text-gray-700">Fill a sturdy plastic bag halfway with white vinegar, slip it over the shower head until the nozzles are submerged, and secure it with a rubber band or zip tie. Leave it 30 minutes for light buildup or several hours for heavy scale. Remove the bag, scrub the face with an old toothbrush, and run hot water for a minute to flush debris.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">The full soak method (removed head)</h3>
                    <p className="text-gray-700">Unscrew the head by hand or with a wrench wrapped in cloth, then submerge it fully in a bowl of warm vinegar for a few hours. Poke each nozzle with a toothpick to clear it, rinse, and reinstall with fresh plumber's tape on the threads. This works best for badly clogged heads.</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Avoid soaking certain finishes, such as some brushed nickel and oil-rubbed bronze, for more than 30 minutes, since long vinegar exposure can dull the coating. Check the manufacturer guidance if your head has a specialty finish.
                </p>
              </section>

              <section id="gunk" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why black gunk and calcium keep coming back</h2>
                <p className="text-gray-700 mb-4">
                  The black or pink slime is biofilm, while the white crust is calcium and magnesium left behind as hard water evaporates. Cleaning removes them, but in a hard-water home they return within months. The root fix is treating the water itself.
                </p>
                <p className="text-gray-700">
                  If you also see scale on faucets, spotting on glassware, and soap that will not lather, your home likely has hard water. A water softener cuts the mineral content that scales fixtures, water heaters, and pipes throughout the house. Our <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800">water filtration and softening</Link> service addresses it at the source, and our guide on <Link href="/blog/whole-house-water-filter-worth-it" className="text-red-700 hover:text-red-800">whether a whole house water filter is worth it</Link> breaks down the tradeoffs.
                </p>
              </section>

              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Hard water wrecking your fixtures?</p>
                  <p className="text-gray-300 text-sm">Ask about water softening and filtration for your Middlesex County home.</p>
                </div>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
                </div>
              </div>

              <section id="replace" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to replace a shower head</h2>
                <p className="text-gray-700 mb-4">
                  When cleaning no longer restores the spray, replacement is quick and needs only a wrench and plumber's tape.
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                  <li>Twist the old head counterclockwise off the shower arm by hand, or use a wrench with a cloth to protect the finish.</li>
                  <li>Clean the threads on the shower arm and wipe away old tape and debris.</li>
                  <li>Wrap the threads clockwise with two or three layers of plumber's (PTFE) tape to seal the joint.</li>
                  <li>Hand-thread the new head on clockwise, then snug it about a quarter turn with the wrapped wrench. Do not overtighten.</li>
                  <li>Run the shower and check the connection at the arm for drips. A small leak usually means more tape or a slightly firmer turn.</li>
                </ol>
                <p className="text-gray-700">
                  If the shower arm itself is corroded or spins inside the wall, or you want to switch to a rain head or handheld setup that needs new plumbing, that is a job for a pro. Our <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">bathroom remodeling</Link> team handles valve and arm changes behind the wall.
                </p>
              </section>

              <section id="flow" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Flow rate, gpm, and low water pressure</h2>
                <p className="text-gray-700 mb-4">
                  Shower heads are rated in gallons per minute (gpm). Federal rules cap standard heads at 2.5 gpm, and water-saving models run 1.5 to 2.0 gpm. According to the <a href="https://www.epa.gov/watersense/showerheads" target="_blank" rel="noopener" className="text-red-700 hover:text-red-800">EPA WaterSense program</a>, a 2.0 gpm head can save a typical household thousands of gallons a year without a noticeable drop in a good design.
                </p>
                <p className="text-gray-700 mb-4">
                  If your shower feels weak, first rule out a clogged head with a vinegar soak and remove any flow restrictor buildup. If the pressure is low throughout the house, the head is not the problem. Our guide on <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:text-red-800">why water pressure is low</Link> walks through the causes. For a genuinely low-pressure home, choose a shower head designed for low pressure, which concentrates the flow through fewer, smaller nozzles to keep the spray firm.
                </p>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <details key={i} className="group bg-gray-50 rounded-lg">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                        <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                      </summary>
                      <div className="px-5 pb-5"><p className="text-gray-700">{faq.answer}</p></div>
                    </details>
                  ))}
                </div>
              </section>

              <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Upgrading your shower or bathroom?</h2>
                <p className="text-red-100 mb-6">
                  From fixture swaps to full bathroom remodels and water softening, our licensed plumbers serve East Brunswick, Edison, and all of Middlesex County, NJ.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                  <Link href="/services/toilet-and-faucet-installation" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Fixture Installation</Link>
                </div>
              </section>

              <section className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/why-is-water-pressure-low" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Why Is My Water Pressure Low?</h3>
                      <p className="text-sm text-gray-600">The real causes of weak water pressure.</p>
                    </div>
                  </Link>
                  <Link href="/blog/whole-house-water-filter-worth-it" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Is a Whole House Water Filter Worth It?</h3>
                      <p className="text-sm text-gray-600">Treating hard water at the source.</p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need a plumber?</p>
                  <p className="text-gray-600 text-sm mb-4">Fixture installation, bathroom remodels, and water treatment across Middlesex County.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/toilet-and-faucet-installation" className="text-gray-700 hover:text-red-700 transition">Toilet &amp; Faucet Installation</Link></li>
                    <li><Link href="/services/bathroom-remodeling" className="text-gray-700 hover:text-red-700 transition">Bathroom Remodeling</Link></li>
                    <li><Link href="/services/water-filtration-system" className="text-gray-700 hover:text-red-700 transition">Water Filtration</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Service Areas</p>
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
                  <p className="font-bold text-gray-900 mb-3">You might also like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition">Why Is My Water Pressure Low?</Link></li>
                    <li><Link href="/blog/whole-house-water-filter-worth-it" className="text-gray-700 hover:text-red-700 transition">Is a Whole House Water Filter Worth It?</Link></li>
                    <li><Link href="/blog/best-whole-house-water-filtration-systems" className="text-gray-700 hover:text-red-700 transition">Best Whole House Water Filtration Systems</Link></li>
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
