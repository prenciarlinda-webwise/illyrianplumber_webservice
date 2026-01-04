import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Signs of a Slab Leak or Sewer Line Problem (And What to Do)",
  description: "Recognize warning signs of slab leaks and sewer line problems. Learn detection methods and repair options. Expert guide from NJ licensed plumbers.",
  keywords: [
    "signs of slab leak",
    "sewer line problems",
    "slab leak detection",
    "sewer line repair",
    "foundation leak",
    "underground water leak",
  ],
  openGraph: {
    title: "Signs of a Slab Leak or Sewer Line Problem",
    description: "Early detection saves money. Learn the warning signs of slab leaks and sewer problems.",
    type: "article",
    publishedTime: "2025-01-22T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function SlabLeakPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Signs of a Slab Leak or Sewer Line Problem",
    description: "Recognize warning signs of slab leaks and sewer line problems before major damage occurs.",
    image: "https://www.illyrianplumber.com/images/sewer-line-repair.jpg",
    author: { "@type": "Organization", name: BUSINESS_INFO.name, url: "https://www.illyrianplumber.com" },
    publisher: { "@type": "Organization", name: BUSINESS_INFO.name, logo: { "@type": "ImageObject", url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png" } },
    datePublished: "2025-01-22T08:00:00.000Z",
    dateModified: "2025-01-22T08:00:00.000Z",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.illyrianplumber.com/blog/signs-of-slab-leak-sewer-line" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What are the signs of a slab leak?", acceptedAnswer: { "@type": "Answer", text: "Common signs include: unexplained increase in water bills, sound of running water when nothing is on, warm spots on the floor, damp spots on flooring or carpet, cracks in foundation or walls, mold or mildew smell, and low water pressure throughout the house." } },
      { "@type": "Question", name: "How much does it cost to fix a slab leak?", acceptedAnswer: { "@type": "Answer", text: "Slab leak repair costs vary widely: $500-$2,000 for spot repair through the slab, $2,000-$5,000 for pipe re-routing, and $5,000-$15,000+ for complete under-slab repiping. The best repair method depends on leak location and pipe condition." } },
      { "@type": "Question", name: "What causes sewer line problems?", acceptedAnswer: { "@type": "Answer", text: "Common causes include tree root intrusion, aging pipes (clay, cast iron, or Orangeburg), ground shifting, bellied or sagging pipes, blockages from grease or debris, and corrosion. Homes over 40 years old are most at risk." } },
      { "@type": "Question", name: "How do I know if my sewer line is broken?", acceptedAnswer: { "@type": "Answer", text: "Warning signs include: multiple slow drains, gurgling sounds from drains, sewage odors indoors or outdoors, soggy patches in the yard, unusually green grass over sewer line, sewage backup, and pest problems (rats, insects attracted to breaks)." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-white">
        <header className="relative bg-gray-900 text-white py-16 md:py-24">
          <div className="absolute inset-0">
            <Image src="/images/sewer-line-repair.jpg" alt="Slab leak and sewer line detection" fill className="object-cover opacity-40" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Plumbing</span>
                <time dateTime="2025-01-22">January 22, 2025</time>
                <span>15 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Signs of a Slab Leak or Sewer Line Problem (And What to Do)</h1>
              <p className="text-xl text-gray-300">Underground plumbing problems are hidden but cause serious damage. Learn to recognize the warning signs before it&apos;s too late.</p>
            </div>
          </div>
        </header>

        <div className="border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-3xl mx-auto flex items-center gap-4">
              <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">IG</div>
              <div>
                <p className="font-semibold text-gray-900">Written by {BUSINESS_INFO.name}</p>
                <p className="text-sm text-gray-600">Licensed Master Plumbers serving Middlesex County, NJ since 2020</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                The plumbing you can&apos;t see is often the plumbing that causes the biggest problems. Slab leaks and sewer line issues hide beneath your foundation and yard, silently causing damage until warning signs finally appear.
              </p>
              <p>
                Early detection is critical. A slab leak caught early might cost a few hundred dollars to repair. Left undetected, it can undermine your foundation, cause mold problems, and result in tens of thousands in damage. Here&apos;s what every Middlesex County homeowner should know.
              </p>
            </div>

            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
              <ul className="space-y-2">
                <li><a href="#slab-leak-signs" className="text-red-700 hover:text-red-800">Signs of a Slab Leak</a></li>
                <li><a href="#slab-leak-causes" className="text-red-700 hover:text-red-800">What Causes Slab Leaks</a></li>
                <li><a href="#sewer-line-signs" className="text-red-700 hover:text-red-800">Signs of Sewer Line Problems</a></li>
                <li><a href="#sewer-line-causes" className="text-red-700 hover:text-red-800">Common Sewer Line Causes</a></li>
                <li><a href="#detection" className="text-red-700 hover:text-red-800">Professional Detection Methods</a></li>
                <li><a href="#repair-options" className="text-red-700 hover:text-red-800">Repair Options</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Middlesex County Considerations</a></li>
              </ul>
            </nav>

            <section id="slab-leak-signs" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Warning Signs of a Slab Leak</h2>
              <p className="text-gray-700 mb-6">A slab leak is a leak in the water lines running beneath your concrete foundation. Watch for these warning signs:</p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Unexplained High Water Bills", desc: "Sudden increase without usage change" },
                  { title: "Sound of Running Water", desc: "When all fixtures are off" },
                  { title: "Warm Spots on Floor", desc: "Hot water line leak beneath slab" },
                  { title: "Damp or Wet Flooring", desc: "Especially carpets or hardwood buckling" },
                  { title: "Low Water Pressure", desc: "Water escaping before reaching fixtures" },
                  { title: "Foundation Cracks", desc: "New cracks in slab or walls" },
                  { title: "Mold or Mildew Smell", desc: "Moisture promotes mold growth" },
                  { title: "Water Pooling", desc: "Around foundation exterior" },
                ].map((sign, index) => (
                  <div key={index} className="flex items-start gap-3 bg-red-50 rounded-lg p-4">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">{sign.title}</p>
                      <p className="text-sm text-gray-700">{sign.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Quick Test for Slab Leaks</h4>
                <p className="text-gray-700">Turn off all water-using fixtures. Locate your water meter and note the reading. Wait 2-3 hours without using any water. Check the meter again. If it has moved, you have a leak somewhere in your system.</p>
              </div>
            </section>

            <section id="slab-leak-causes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Causes Slab Leaks?</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Pipe Corrosion</h4>
                  <p className="text-gray-700">Copper pipes in older homes can corrode from the outside (due to soil conditions) or inside (due to water chemistry). Once corrosion creates a pinhole, it expands.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Ground Shifting</h4>
                  <p className="text-gray-700">Soil movement from settling, earthquakes, or erosion stresses pipes. Joints can separate and rigid pipes can crack.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Abrasion</h4>
                  <p className="text-gray-700">Pipes expand and contract with temperature changes. If they rub against concrete, gravel, or other pipes, they wear thin over time.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Poor Installation</h4>
                  <p className="text-gray-700">Pipes kinked during installation, improper soldering, or inadequate protection can lead to premature failure.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">High Water Pressure</h4>
                  <p className="text-gray-700">Consistent pressure above 80 PSI stresses pipes and fittings, especially older ones.</p>
                </div>
              </div>
            </section>

            <section id="sewer-line-signs" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Warning Signs of Sewer Line Problems</h2>
              <p className="text-gray-700 mb-6">Your sewer line carries waste from your home to the municipal sewer. Problems create unmistakable symptoms:</p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Multiple Slow Drains", desc: "All fixtures draining slowly" },
                  { title: "Gurgling Sounds", desc: "From drains or toilet when using water" },
                  { title: "Sewage Odors", desc: "Inside or outside the house" },
                  { title: "Sewage Backups", desc: "Waste coming up through floor drains" },
                  { title: "Soggy Yard Areas", desc: "Over sewer line path" },
                  { title: "Extra Green Grass", desc: "Sewage acts as fertilizer" },
                  { title: "Pest Problems", desc: "Rats or insects attracted to breaks" },
                  { title: "Foundation Issues", desc: "Leaking sewage erodes soil" },
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

            <section id="sewer-line-causes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Common Causes of Sewer Line Damage</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Tree Root Intrusion</h4>
                  <p className="text-gray-700">Tree roots seek water sources. They enter through small cracks or joints and grow inside pipes, eventually causing blockages and breaks.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Aging Pipe Materials</h4>
                  <p className="text-gray-700">Clay pipes (common pre-1970), cast iron, and Orangeburg (tar paper) pipes deteriorate with age. Many have exceeded their expected lifespan.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Bellied/Sagging Pipes</h4>
                  <p className="text-gray-700">Ground settling causes low spots where waste accumulates, leading to blockages and eventual breaks.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Grease and Debris</h4>
                  <p className="text-gray-700">Accumulated grease, &quot;flushable&quot; wipes, and other debris cause blockages that put pressure on pipe walls.</p>
                </div>
              </div>
            </section>

            <section id="detection" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Professional Detection Methods</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Slab Leak Detection</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Electronic listening:</strong> Sensitive equipment detects sound of water escaping</li>
                    <li><strong>Pressure testing:</strong> Isolates sections to locate leak</li>
                    <li><strong>Thermal imaging:</strong> Hot water leaks show as warm spots</li>
                    <li><strong>Video inspection:</strong> Camera inside accessible pipes</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sewer Line Inspection</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Video camera inspection:</strong> See inside the entire line</li>
                    <li><strong>Locator transmitter:</strong> Pinpoints exact location and depth</li>
                    <li><strong>Smoke testing:</strong> Reveals cracks and bad connections</li>
                    <li><strong>Dye testing:</strong> Confirms suspected leak locations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="repair-options" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Repair Options</h2>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Slab Leak Repairs</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Spot Repair</h4>
                  <p className="text-gray-700">Breaking through slab to repair specific leak. Best for single leaks in otherwise good pipes. Requires floor repair afterward.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Re-routing</h4>
                  <p className="text-gray-700">Abandoning under-slab pipes and running new lines through walls/ceiling. Avoids slab damage, often more cost-effective for multiple leaks.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Whole House Repiping</h4>
                  <p className="text-gray-700">If under-slab pipes are old and corroded throughout, complete replacement prevents future leaks.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Sewer Line Repairs</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Traditional Excavation</h4>
                  <p className="text-gray-700">Digging up the old pipe and replacing with new. Necessary for collapsed lines or severe damage.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Trenchless Pipe Lining</h4>
                  <p className="text-gray-700">Inserting epoxy-coated liner that cures inside existing pipe, creating pipe-within-a-pipe. Minimal excavation, faster recovery.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Pipe Bursting</h4>
                  <p className="text-gray-700">Breaking apart old pipe while pulling new pipe through. Trenchless method for severely damaged lines.</p>
                </div>
              </div>
            </section>

            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Middlesex County Considerations</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Older Home Stock</h4>
                  <p className="text-gray-700">Many Middlesex County homes were built in the 1950s-1970s with clay sewer lines and copper supply lines. These materials are now 50-70 years old -past their expected lifespan.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Tree-Lined Properties</h4>
                  <p className="text-gray-700">Established neighborhoods have mature trees. Oak, maple, and willow roots are particularly aggressive in seeking sewer lines.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Soil Conditions</h4>
                  <p className="text-gray-700">Our clay-heavy soil holds moisture and can shift with wet/dry cycles, stressing underground pipes.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What are the signs of a slab leak?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Common signs include unexplained high water bills, sound of running water when fixtures are off, warm spots on the floor, damp flooring, foundation cracks, mold smell, and low water pressure throughout the house.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much does slab leak repair cost?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Costs vary by repair method: $500-$2,000 for spot repair, $2,000-$5,000 for pipe re-routing, and $5,000-$15,000+ for complete under-slab repiping. The best option depends on leak location, pipe condition, and future risk.</p></div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How do I know if my sewer line is broken?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5"><p className="text-gray-700">Warning signs include multiple slow drains, gurgling sounds, sewage odors indoors or outdoors, soggy yard patches, unusually green grass over the sewer line path, sewage backups, and increased pest activity.</p></div>
                </details>
              </div>
            </section>

            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Suspect Underground Plumbing Problems?</h2>
              <p className="text-red-100 mb-6">Don&apos;t wait for minor signs to become major damage. We offer professional leak detection and sewer camera inspection to pinpoint problems accurately -before recommending any repairs.</p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Call {BUSINESS_INFO.phone}</a>
                <Link href="/services/water-leak-detection" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Leak Detection Services</Link>
              </div>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/why-is-water-pressure-low" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Why Is My Water Pressure Low?</h3>
                    <p className="text-sm text-gray-600">Leaks are a common cause of pressure problems.</p>
                  </div>
                </Link>
                <Link href="/services/sewer-line-repair-replacement" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Sewer Line Services</h3>
                    <p className="text-sm text-gray-600">Inspection, repair, and replacement options.</p>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
