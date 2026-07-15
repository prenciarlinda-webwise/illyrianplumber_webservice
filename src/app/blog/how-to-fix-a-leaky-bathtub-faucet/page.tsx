import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "How to Fix a Leaky Bathtub Faucet (Step-by-Step 2026)",
  description: "How to fix a leaky bathtub faucet: shut off the water, identify your valve type, and replace the worn cartridge or washer that causes the drip. Plus when to call a NJ plumber.",
  alternates: { canonical: "https://www.illyrianplumber.com/blog/how-to-fix-a-leaky-bathtub-faucet" },
  keywords: [
    "how to fix a leaky bathtub faucet",
    "how to fix a leaky faucet",
    "how to fix a leaking faucet",
    "how do you fix a leaky bathtub faucet",
    "how to fix a leaky bathtub tap",
    "dripping bathtub faucet",
    "bathtub faucet cartridge replacement",
    "faucet washer replacement",
  ],
  openGraph: {
    title: "How to Fix a Leaky Bathtub Faucet (Step-by-Step 2026)",
    description: "Stop a dripping bathtub faucet by replacing the worn cartridge or washer. Step-by-step guide for NJ homeowners.",
    type: "article",
    publishedTime: "2026-06-02T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

const faqs = [
  {
    question: "Why does my bathtub faucet drip after I shut it off?",
    answer:
      "A constant drip from the spout means the part that seals the water flow has worn out. In an older two-handle faucet it is usually a rubber washer or seat. In a single-handle faucet it is the cartridge. Mineral-heavy water in many Middlesex County homes wears these parts faster. Replacing the worn component stops the drip, and the repair is inexpensive compared to the water it wastes.",
  },
  {
    question: "How do I know if I have a compression, cartridge, or ball faucet?",
    answer:
      "Two separate handles for hot and cold usually mean a compression or washer-style valve that uses rubber washers. A single handle that moves up and down and side to side is a cartridge or ball faucet. The exact cartridge varies by brand, so the most reliable approach is to remove the old one and match it at the store or look up the faucet model number.",
  },
  {
    question: "Can a dripping faucet really raise my water bill?",
    answer:
      "Yes. A faucet dripping once per second wastes more than 3,000 gallons a year, according to the US EPA, which adds up on both the water and the sewer portion of your bill. A hot-water drip wastes energy too, since the water heater keeps reheating water that goes down the drain. Fixing a drip quickly pays for the cheap replacement part many times over.",
  },
  {
    question: "When should I call a plumber for a leaky tub faucet?",
    answer:
      "Call a plumber if the leak comes from behind the wall rather than the spout, if the valve body or pipe is corroded, if water stains appear on the ceiling below the tub, or if the shutoff valves will not stop the water. These point to a problem inside the wall that needs a licensed plumber, and a hidden leak should be found and repaired before it damages framing and drywall.",
  },
];

export default function HowToFixALeakyBathtubFaucet() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Fix a Leaky Bathtub Faucet (Step-by-Step 2026)",
    description:
      "Step-by-step guide to fixing a leaky bathtub faucet by identifying the valve type and replacing the worn cartridge or washer, plus when to call a licensed Middlesex County NJ plumber.",
    image: "https://www.illyrianplumber.com/images/faucet-installation-service.jpg",
    author: { "@type": "Organization", name: BUSINESS_INFO.name, url: "https://www.illyrianplumber.com" },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      logo: { "@type": "ImageObject", url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png" },
    },
    datePublished: "2026-06-02T08:00:00.000Z",
    dateModified: "2026-06-02T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/how-to-fix-a-leaky-bathtub-faucet" },
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
      { "@type": "ListItem", position: 3, name: "How to Fix a Leaky Bathtub Faucet", item: "https://www.illyrianplumber.com/blog/how-to-fix-a-leaky-bathtub-faucet" },
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
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Toilet &amp; Faucet</span>
                <time dateTime="2026-06-02">June 2, 2026</time>
                <span>12 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How to fix a leaky bathtub faucet
              </h1>
              <p className="text-xl text-gray-300">
                A constant drip almost always traces to one worn part. Identify your valve type, swap the cartridge or washer, and stop the leak in an afternoon.
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
                  A bathtub faucet that drips after you shut it off is wasting water around the clock, and the fix is usually a single worn part that costs a few dollars. Whether you have an older two-handle valve or a modern single-handle cartridge, the repair follows the same path. If you would rather not open up the valve, or the leak is coming from inside the wall, our <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-semibold">faucet and fixture installation</Link> team handles it across Middlesex County. This guide shows how to fix a leaky bathtub faucet step by step.
                </p>
                <p className="text-gray-700">
                  Set aside an hour, pick up a repair kit that matches your faucet brand, and have the worn part out before your trip to the hardware store so you can match it exactly.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers serving Middlesex County, NJ since 2010. We handle <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">faucet and fixture installation</Link>, <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">bathroom remodeling</Link>, <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.
                </p>
              </div>

              <nav className="bg-gray-50 rounded-xl p-6 my-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">In this guide</h2>
                <ul className="space-y-2">
                  <li><a href="#cause" className="text-red-700 hover:text-red-800">What causes a leaky bathtub faucet</a></li>
                  <li><a href="#shutoff" className="text-red-700 hover:text-red-800">Shut off the water and prep</a></li>
                  <li><a href="#repair" className="text-red-700 hover:text-red-800">Replace the cartridge or washer</a></li>
                  <li><a href="#pro" className="text-red-700 hover:text-red-800">When to call a plumber</a></li>
                  <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently asked questions</a></li>
                </ul>
              </nav>

              <section id="cause" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What causes a leaky bathtub faucet</h2>
                <p className="text-gray-700 mb-4">
                  A faucet seals the water with a soft, movable part that presses against a fixed surface. Over years of use that part wears, and water seeps past it as a drip. Which part depends on your valve type.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Compression (two handles):</strong> a rubber washer and the valve seat wear out. The oldest and most common style in older homes.</li>
                  <li><strong>Cartridge (single or double handle):</strong> a replaceable cartridge controls flow and temperature. When it wears, the spout drips.</li>
                  <li><strong>Ball and ceramic disc:</strong> internal seals or the disc wear. Repair kits are brand specific.</li>
                </ul>
              </section>

              <section id="shutoff" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Step 1: Shut off the water and prep</h2>
                <p className="text-gray-700 mb-4">
                  Bathtubs rarely have local shutoff valves, so you will usually close the main supply. Our guide on <Link href="/blog/how-to-shut-off-water-to-your-house" className="text-red-700 hover:text-red-800">how to shut off the water to your house</Link> shows exactly where to find the main valve.
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>Close the main water valve, then open the tub faucet to drain the line and confirm the water is off.</li>
                  <li>Cover the tub drain with a rag so small screws and parts cannot fall in.</li>
                  <li>Lay out a towel and keep the parts in order as you remove them so reassembly is easy.</li>
                </ol>
              </section>

              <section id="repair" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Step 2: Replace the cartridge or washer</h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Remove the handle</h3>
                    <p className="text-gray-700">Pry off the decorative cap, remove the screw underneath, and pull the handle straight off. If it is stuck from mineral buildup, a handle puller helps. Then unscrew the trim sleeve or escutcheon to expose the valve.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Pull the worn part</h3>
                    <p className="text-gray-700">For a cartridge faucet, remove the retaining clip or nut and pull the cartridge straight out with pliers or a cartridge puller. For a compression faucet, unscrew the stem and remove the washer and screw at the bottom, and inspect the seat for pitting.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Match and install the new part</h3>
                    <p className="text-gray-700">Take the old cartridge or washer to the store to match it exactly, or use the faucet model number. Coat O-rings with plumber's grease, insert the new part in the same orientation, and reassemble in reverse order. Reseat a worn valve seat or use a seat-dressing tool if needed.</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Test for leaks</h3>
                    <p className="text-gray-700">Turn the main water back on slowly, then run the faucet and watch the spout for drips and the handle for seepage. Open the highest faucet in the house first to clear trapped air, as covered in the shutoff guide above.</p>
                  </div>
                </div>
              </section>

              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Leak coming from behind the wall?</p>
                  <p className="text-gray-300 text-sm">That is a job for a licensed plumber. We serve all of Middlesex County.</p>
                </div>
                <div className="flex gap-3">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
                </div>
              </div>

              <section id="pro" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to call a plumber</h2>
                <p className="text-gray-700 mb-4">
                  Replacing a washer or cartridge is a confident do-it-yourself repair. Call a licensed plumber if the leak is behind the wall instead of at the spout, if the valve body or supply pipe is corroded, if you see water stains on the ceiling below the tub, or if the shutoff will not fully stop the water. These signal a problem inside the wall.
                </p>
                <p className="text-gray-700">
                  A leak you can hear but not see should be traced quickly. Our <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link> service pinpoints hidden leaks without opening walls, and if you are already planning updates, our <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">bathroom remodeling</Link> team can replace an aging valve assembly entirely.
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
                <h2 className="text-2xl font-bold mb-4">Faucet leak you would rather not chase?</h2>
                <p className="text-red-100 mb-6">
                  Our licensed plumbers repair and replace tub, shower, and sink faucets across East Brunswick, Edison, and all of Middlesex County, NJ.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                  <Link href="/services/toilet-and-faucet-installation" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Faucet Installation</Link>
                </div>
              </section>

              <section className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/how-to-fix-running-toilet" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Fix a Running Toilet</h3>
                      <p className="text-sm text-gray-600">Stop the other most common bathroom water-waster.</p>
                    </div>
                  </Link>
                  <Link href="/blog/how-to-fix-leaking-pipe" className="group">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Fix a Leaking Pipe</h3>
                      <p className="text-sm text-gray-600">Emergency steps and permanent repairs.</p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need a plumber?</p>
                  <p className="text-gray-600 text-sm mb-4">Faucet repair, fixture installation, and leak detection across Middlesex County.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                  <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
                  <p className="text-center text-xs text-gray-500 mt-2">Available 24/7</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/toilet-and-faucet-installation" className="text-gray-700 hover:text-red-700 transition">Toilet &amp; Faucet Installation</Link></li>
                    <li><Link href="/services/bathroom-remodeling" className="text-gray-700 hover:text-red-700 transition">Bathroom Remodeling</Link></li>
                    <li><Link href="/services/water-leak-detection" className="text-gray-700 hover:text-red-700 transition">Water Leak Detection</Link></li>
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
                    <li><Link href="/blog/how-to-fix-running-toilet" className="text-gray-700 hover:text-red-700 transition">How to Fix a Running Toilet</Link></li>
                    <li><Link href="/blog/how-to-fix-leaking-pipe" className="text-gray-700 hover:text-red-700 transition">How to Fix a Leaking Pipe</Link></li>
                    <li><Link href="/blog/how-to-shut-off-water-to-your-house" className="text-gray-700 hover:text-red-700 transition">How to Shut Off the Water to Your House</Link></li>
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
