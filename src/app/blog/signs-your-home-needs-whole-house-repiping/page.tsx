import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "8 Signs You Need Whole House Repiping (2026 Guide)",
  description: "Rusty water, falling pressure, or repeat pinhole leaks? Here are 8 warning signs your NJ home needs whole house repiping, plus real cost ranges and PEX vs copper.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/signs-your-home-needs-whole-house-repiping" },
  keywords: [
    "signs you need whole house repiping",
    "whole house repiping cost",
    "galvanized pipe replacement",
    "polybutylene pipe replacement",
    "low water pressure old house",
    "PEX vs copper repipe",
    "repiping a house",
    "when to repipe a house",
    "pinhole leaks copper pipe",
    "rusty water old pipes",
  ],
  openGraph: {
    title: "8 Signs You Need Whole House Repiping (2026 Guide)",
    description: "8 warning signs your home needs whole house repiping, plus real cost ranges and PEX vs copper compared.",
    type: "article",
    publishedTime: "2026-07-15T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function SignsYouNeedWholeHouseRepiping() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "8 Signs You Need Whole House Repiping (2026 Guide)",
    description: "8 warning signs your NJ home needs whole house repiping, from rusty water to recurring pinhole leaks, plus real cost ranges and a PEX vs copper comparison.",
    image: "https://www.illyrianplumber.com/images/residential-pex-plumbing-install.jpg",
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
    datePublished: "2026-07-15T08:00:00.000Z",
    dateModified: "2026-07-15T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/signs-your-home-needs-whole-house-repiping",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does whole house repiping cost in New Jersey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whole house repiping in New Jersey typically runs $4,000 to $15,000. A small two-bedroom home repiped in PEX can come in around $4,000 to $6,000, while a larger four-bedroom home repiped in copper can reach $10,000 to $15,000. PEX generally costs 30 to 40 percent less than copper. We provide a free in-home assessment with a detailed written quote before any work begins.",
        },
      },
      {
        "@type": "Question",
        name: "How long does whole house repiping take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most whole house repiping projects take 2 to 5 days. A small single-story home is often completed in 2 to 3 days, while a larger two-story home with multiple bathrooms typically takes 3 to 5 days. Most homeowners stay in the home during the work, and water service is restored at the end of each work day.",
        },
      },
      {
        "@type": "Question",
        name: "Should I choose PEX or copper when repiping my house?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PEX is the more popular choice for modern repiping. It is flexible, resists corrosion and scale, handles freeze-thaw cycles well, and costs significantly less than copper. Copper lasts 50-plus years and has a long track record, but aggressive water chemistry in some NJ municipalities can eventually cause pitting corrosion. We help you weigh both during your free estimate based on your home and water conditions.",
        },
      },
      {
        "@type": "Question",
        name: "Is it dangerous to leave polybutylene pipes in a home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Polybutylene pipe is not immediately dangerous, but it degrades from the inside when exposed to chlorine in municipal water and chlorine-based cleaning agents, and it does not show damage until it fails, often suddenly. Insurers increasingly flag it during underwriting, and many home inspectors call it out during sale transactions. If your home has gray plastic supply lines installed between the mid-1970s and mid-1990s, we recommend a professional inspection.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-white">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Whole House Repiping</span>
                <time dateTime="2026-07-15">July 2026</time>
                <span>11 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                8 signs you need whole house repiping
              </h1>
              <p className="text-xl text-gray-300">
                Rusty water, falling pressure, and pinhole leaks in different rooms are rarely isolated problems. Here is how to tell whether your home&apos;s supply lines are failing system-wide.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 pt-8">
          <AuthorBio publishDate="2026-07-15" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 min-w-0 max-w-3xl">

              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Corroded galvanized pipes, brittle polybutylene lines, and copper pitted with pinhole leaks are the three biggest reasons Middlesex County homeowners call Illyrian Plumber about rusty water, falling pressure, or a leak in a new spot every few months. When those symptoms show up together, it is usually time to consider <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-semibold">whole house repiping</Link> rather than another spot repair.
                </p>
                <p className="text-gray-700">
                  Repiping an entire home is a bigger job than fixing one leak, and it is not something to jump to at the first sign of a problem. But certain patterns point directly to a supply-line system that is failing everywhere at once, not just at one fitting. Below are the eight signs we see most often before a Middlesex County homeowner decides to repipe, what each one actually means, and what a repipe costs and takes to complete.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
                </p>
              </div>

              {/* Table of Contents */}
              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">In this guide</h2>
                <ul className="space-y-2">
                  <li><a href="#signs" className="text-red-700 hover:text-red-800">8 signs you need whole house repiping</a></li>
                  <li><a href="#cost" className="text-red-700 hover:text-red-800">Whole house repiping cost and timeline</a></li>
                  <li><a href="#pex-vs-copper" className="text-red-700 hover:text-red-800">PEX vs copper</a></li>
                  <li><a href="#local" className="text-red-700 hover:text-red-800">Repiping in Middlesex County homes</a></li>
                  <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently asked questions</a></li>
                </ul>
              </nav>

              {/* Signs Section */}
              <section id="signs" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">8 signs you need whole house repiping</h2>
                <p className="text-gray-700 mb-6">
                  Any one of these on its own might just need a spot repair. Two or more together, especially in a home over 40 years old, is what typically points to a system-wide problem.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">1. Rusty or discolored water</h3>
                    <p className="text-gray-700 text-sm">Brown, yellow, or reddish water, especially right after you turn on a tap that has not been used in a few hours, usually means the inside of a galvanized steel pipe is corroding and shedding rust into the water. If it clears after a minute of running water, the corrosion is likely widespread rather than local to one fixture.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">2. Water pressure that keeps dropping</h3>
                    <p className="text-gray-700 text-sm">Corrosion and mineral scale build up on the inside walls of old pipes, narrowing the usable diameter over years. If pressure has dropped gradually across the whole house rather than at a single fixture, the restriction is likely inside the supply lines themselves. Our guide on <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:text-red-800 font-semibold">why water pressure is low</Link> covers the fixture-level causes to rule out first.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">3. Pinhole leaks in more than one location</h3>
                    <p className="text-gray-700 text-sm">A single pinhole leak can be a one-off defect. A second or third pinhole leak in a different room within a year or two is a strong sign that the copper piping is failing systemically from pitting corrosion, and that ongoing spot repairs will keep costing money without solving the underlying problem.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">4. Visible gray plastic pipe (polybutylene)</h3>
                    <p className="text-gray-700 text-sm">Homes built or renovated between the mid-1970s and mid-1990s sometimes used polybutylene supply piping, a gray plastic pipe that degrades from the inside when exposed to chlorine and chlorine byproducts in municipal water. Polybutylene was the subject of a well-documented class action settlement in the 1990s and most plumbers recommend replacing it proactively rather than waiting for a failure. See <a href="https://en.wikipedia.org/wiki/Polybutylene" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800 underline">Wikipedia&apos;s overview of polybutylene pipe</a> for background on the material.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">5. Frequent leak repairs at different fittings</h3>
                    <p className="text-gray-700 text-sm">If you have called a plumber for a leak more than twice in the last two years, and each repair has been at a different joint or fitting, the pattern points to age-related pipe failure rather than bad luck. Repeated <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-semibold">leak detection</Link> calls to the same home in a short window is one of the clearest signals we see.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">6. A knocking or banging sound in the walls</h3>
                    <p className="text-gray-700 text-sm">Water hammer and banging pipes can be caused by loose pipe straps, but in older homes it is frequently a symptom of scaled-up, narrowed supply lines that create pressure surges when a valve closes. Our <Link href="/blog/water-pipe-noises-causes-fixes" className="text-red-700 hover:text-red-800 font-semibold">water pipe noise guide</Link> walks through the full range of causes.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">7. A home inspection flagged the supply piping</h3>
                    <p className="text-gray-700 text-sm">Buying or selling a home in Middlesex County almost always includes a plumbing inspection, and inspectors routinely flag galvanized steel and polybutylene supply lines as a material condition. If a report calls out the pipe material by name, that is a strong signal worth acting on before or during a sale.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">8. Your home is over 40 years old and has never been repiped</h3>
                    <p className="text-gray-700 text-sm">Galvanized steel supply lines have an expected service life of roughly 40 to 50 years before internal corrosion becomes a real problem. If your home was built before the mid-1980s and still has its original supply piping, age alone is a reason to have it evaluated, even without an active symptom yet.</p>
                  </div>
                </div>
              </section>

              {/* Mid-content CTA */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12">
                <p className="text-lg font-bold mb-2">Seeing two or more of these signs?</p>
                <p className="text-gray-300 text-sm mb-4">A free in-home assessment tells you exactly what is happening inside your walls, and whether repiping or a targeted repair is the right call. Licensed master plumbers serving all of Middlesex County.</p>
                <div className="flex flex-wrap gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="border border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition text-sm">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Cost Section */}
              <section id="cost" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Whole house repiping cost and timeline</h2>
                <p className="text-gray-700 mb-4">
                  Whole house repiping in New Jersey typically runs $4,000 to $15,000. A small two-bedroom home repiped in PEX can come in around $4,000 to $6,000. A larger four-bedroom home repiped in copper can reach $10,000 to $15,000. The final number depends on home size, number of fixtures, pipe material, accessibility of existing pipes, and number of stories.
                </p>
                <p className="text-gray-700 mb-4">
                  Most projects take 2 to 5 days. A small single-story home is often finished in 2 to 3 days, while a larger two-story home with multiple bathrooms typically takes 3 to 5 days. Most homeowners stay in the house during the work. We work section by section and restore water service by the end of each work day, then patch and clean up daily. Full <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-semibold">whole house repiping</Link> pricing and scope detail, including what happens to walls and ceilings during the work, is on our service page.
                </p>
              </section>

              {/* PEX vs Copper */}
              <section id="pex-vs-copper" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">PEX vs copper for a whole house repipe</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                    <p className="font-bold text-green-800 mb-3">PEX</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> 30-40% less expensive than copper</li>
                      <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Flexible, fewer access holes needed</li>
                      <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Resists corrosion and scale buildup</li>
                      <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Handles freeze-thaw cycles better</li>
                      <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> 25+ year manufacturer warranty</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <p className="font-bold text-blue-800 mb-3">Copper</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> 50+ year track record</li>
                      <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> Rigid, holds shape without support</li>
                      <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">&#10003;</span> Naturally resists bacteria growth</li>
                      <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">&#10007;</span> Can develop pitting corrosion over decades in aggressive water</li>
                      <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">&#10007;</span> Higher material and labor cost</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700">
                  Most Middlesex County homeowners choose PEX today for the cost savings and corrosion resistance, but copper remains a sound choice, especially for exposed runs. We walk through both options and recommend the right fit during your free in-home assessment.
                </p>
              </section>

              {/* Local Relevance */}
              <section id="local" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Repiping in Middlesex County homes</h2>
                <p className="text-gray-700">
                  Housing stock across <Link href="/service-areas/east-brunswick" className="text-red-700 hover:text-red-800 font-semibold">East Brunswick</Link> and the rest of Middlesex County spans several eras that each carry their own supply-line risk. 1960s and 70s splits and Capes commonly still run on original galvanized steel. Some homes built or renovated from the mid-1970s through the mid-1990s used polybutylene. Newer construction is more often copper or early PEX, which is more durable but not immune to pitting or installation defects over 20 to 30 years. Because we have repiped hundreds of homes across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick, our estimators recognize the typical piping era for a given neighborhood and township permit process before they even open the walls.
                </p>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Whole house repiping FAQs</h2>
                <div className="space-y-3">
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">How much does whole house repiping cost in New Jersey?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">Whole house repiping in New Jersey typically runs $4,000 to $15,000. A small two-bedroom home repiped in PEX can come in around $4,000 to $6,000, while a larger four-bedroom home repiped in copper can reach $10,000 to $15,000. PEX generally costs 30 to 40 percent less than copper. We provide a free in-home assessment with a detailed written quote before any work begins.</p>
                    </div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">How long does whole house repiping take?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">Most whole house repiping projects take 2 to 5 days. A small single-story home is often completed in 2 to 3 days, while a larger two-story home with multiple bathrooms typically takes 3 to 5 days. Most homeowners stay in the home during the work, and water service is restored at the end of each work day.</p>
                    </div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Should I choose PEX or copper when repiping my house?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">PEX is the more popular choice for modern repiping. It is flexible, resists corrosion and scale, handles freeze-thaw cycles well, and costs significantly less than copper. Copper lasts 50-plus years and has a long track record, but aggressive water chemistry in some NJ municipalities can eventually cause pitting corrosion. We help you weigh both during your free estimate based on your home and water conditions.</p>
                    </div>
                  </details>
                  <details className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">Is it dangerous to leave polybutylene pipes in a home?</h3>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">Polybutylene pipe is not immediately dangerous, but it degrades from the inside when exposed to chlorine in municipal water and chlorine-based cleaning agents, and it does not show damage until it fails, often suddenly. Insurers increasingly flag it during underwriting, and many home inspectors call it out during sale transactions. If your home has gray plastic supply lines installed between the mid-1970s and mid-1990s, we recommend a professional inspection.</p>
                    </div>
                  </details>
                </div>
              </section>

              {/* Final CTA */}
              <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Think your home needs repiping?</h2>
                <p className="text-red-100 mb-6">
                  Our licensed master plumbers provide free in-home assessments across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick, with a written quote before any work starts.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                  <Link href="/contact-us" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                    Request Online Estimate
                  </Link>
                </div>
              </section>

              {/* Related Articles */}
              <section className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link href="/blog/why-is-water-pressure-low" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Why is my water pressure low?</h3>
                      <p className="text-sm text-gray-600">Diagnose and fix low water pressure in your NJ home.</p>
                    </div>
                  </Link>
                  <Link href="/blog/signs-of-slab-leak-sewer-line" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs of a slab leak or sewer line problem</h3>
                      <p className="text-sm text-gray-600">Know the warning signs before damage spreads.</p>
                    </div>
                  </Link>
                  <Link href="/blog/water-pipe-noises-causes-fixes" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Water pipe noises: 8 causes and fixes</h3>
                      <p className="text-sm text-gray-600">What that knocking or banging in your walls means.</p>
                    </div>
                  </Link>
                </div>
              </section>

            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need a plumber?</p>
                  <p className="text-gray-600 text-sm mb-4">Whole house repiping and leak repair throughout Middlesex County, NJ.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
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
                  <Link href="/service-areas" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All service areas</Link>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                    <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
                    <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                    <li><Link href="/services/plumbing-safety-inspections" className="text-gray-700 hover:text-red-700 transition">Plumbing Inspections</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All services</Link>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">You might also like</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition">Why is my water pressure low?</Link></li>
                    <li><Link href="/blog/signs-of-slab-leak-sewer-line" className="text-gray-700 hover:text-red-700 transition">Signs of a slab leak or sewer line problem</Link></li>
                    <li><Link href="/blog/water-pipe-noises-causes-fixes" className="text-gray-700 hover:text-red-700 transition">Water pipe noises: 8 causes and fixes</Link></li>
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
