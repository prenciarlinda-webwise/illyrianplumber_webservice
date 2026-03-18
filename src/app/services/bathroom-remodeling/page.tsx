import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Plumber NJ",
  description: "Professional bathroom remodeling plumbing services in East Brunswick & Middlesex County, NJ. Fixture installation, pipe relocation, shower conversion, vanity plumbing, and complete bathroom renovation plumbing. Call (347) 461-4856.",
  keywords: [
    "bathroom remodeling plumber",
    "bathroom plumbing",
    "bathroom renovation",
    "fixture installation",
    "bathroom remodel cost",
    "bathroom remodel NJ",
    "bathroom plumbing renovation",
    "shower installation NJ",
    "bathroom fixture upgrade",
    "vanity plumbing installation",
    "tub to shower conversion",
    "bathroom rough-in plumbing",
    "pipe relocation bathroom",
    "bathroom remodel East Brunswick",
    "bathroom plumber near me",
    "bathroom remodel Middlesex County",
    "walk-in shower plumbing",
  ],
};

const faqData = [
  {
    question: "How much does bathroom remodeling plumbing cost in NJ?",
    answer: "Bathroom remodeling plumbing costs in New Jersey typically range from $2,500 to $8,000 depending on the scope of work. Simple fixture replacements cost less, while complete pipe relocations and rough-in work for new layouts cost more. We provide free estimates so you know the exact cost before work begins. Call Illyrian Plumber for a detailed quote.",
  },
  {
    question: "Do I need a licensed plumber for a bathroom remodel?",
    answer: "Yes, New Jersey requires a licensed plumber for any work involving water supply lines, drain lines, gas connections, and fixture installations. Using a licensed plumber ensures code compliance, proper permits, and protects your investment. Illyrian Plumber is fully licensed and insured for all bathroom remodeling plumbing in Middlesex County.",
  },
  {
    question: "How long does the plumbing phase of a bathroom remodel take?",
    answer: "The plumbing phase typically takes 2-5 days depending on scope. Rough-in work (moving pipes, adding new lines) takes 1-3 days while walls are open. Final fixture installation takes 1-2 days after tile and finishes are complete. Complex layouts or pipe relocations may add additional time.",
  },
  {
    question: "Can you move plumbing for a new bathroom layout?",
    answer: "Absolutely. We regularly relocate supply lines, drain lines, and vent stacks for new bathroom layouts. Whether you want to move your shower, relocate the toilet, or add a double vanity, we handle all pipe relocation work. This is best done during a full remodel when walls are already open.",
  },
  {
    question: "Should I upgrade my pipes during a bathroom remodel?",
    answer: "If your home has older galvanized or polybutylene pipes, a bathroom remodel is the ideal time to upgrade to modern PEX or copper. Since walls are already open, the additional cost is minimal compared to doing it later. We inspect your existing pipes during the consultation and recommend upgrades when necessary.",
  },
  {
    question: "Do you coordinate with my general contractor?",
    answer: "Yes, we work directly with your general contractor or renovation team to ensure plumbing work is scheduled at the right phases. We handle rough-in before drywall goes up, and final fixture installation after tile and finishes are complete. Proper coordination prevents delays and rework.",
  },
  {
    question: "What bathroom fixtures do you install?",
    answer: "We install all bathroom fixtures including toilets, vanity sinks, faucets, shower heads, shower valves, bathtubs, freestanding tub fillers, bidets, and heated towel racks. We work with all major brands including Kohler, Moen, Delta, American Standard, TOTO, and Grohe.",
  },
  {
    question: "Can you add a bathroom to my home?",
    answer: "Yes, we handle all plumbing for new bathroom additions including running new supply lines, installing drain and vent lines, and connecting all fixtures. Adding a bathroom requires proper planning for drainage, venting, and water supply. We handle the complete plumbing scope from rough-in to final connections.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BathroomRemodelingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bathroom Remodeling Plumbing",
    description: "Professional bathroom remodeling plumbing services in East Brunswick, NJ. Fixture installation, pipe relocation, and complete bathroom plumbing.",
    provider: { "@type": "Plumber", "@id": "https://www.illyrianplumber.com/#organization", name: BUSINESS_INFO.name, telephone: BUSINESS_INFO.phone },
    areaServed: BUSINESS_INFO.serviceAreas.map(area => ({ "@type": "City", name: area })),
    serviceType: "Bathroom Remodeling",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/bathroom-remodel-marble-shower.jpg"
            alt="Bathroom remodeling plumbing service in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Renovation Plumbing Specialists</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bathroom Remodeling Plumbing
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Transform your bathroom with expert plumbing services. From fixture upgrades to complete bathroom renovations, we handle all the plumbing work for your remodel project in East Brunswick and throughout Middlesex County, NJ.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
              </a>
              <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span>&#10003; Fixture Installation</span>
              <span>&#10003; Complete Renovations</span>
              <span>&#10003; Licensed &amp; Insured</span>
              <span>&#10003; Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-3xl">

              {/* Intro + About Blurb */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  A <strong>bathroom remodel</strong> is one of the most impactful home improvement projects you can take on - but the plumbing is the foundation that makes everything work. Whether you are upgrading fixtures, changing your bathroom layout, or building an entirely new bathroom, professional plumbing ensures proper water flow, drainage, and code compliance for years of trouble-free use.
                </p>
              </div>

              {/* About Illyrian Plumber */}
              <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 mb-10">
                <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensed master plumbers specializing in bathroom remodeling plumbing and fixture installation in Middlesex County, NJ. We offer <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">toilet and faucet installation</Link>, <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, <Link href="/services/radiant-heating-plumbing" className="text-red-700 hover:text-red-800">radiant floor heating</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
                </p>
              </div>

              {/* Bathroom Plumbing Services */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bathroom Plumbing Services We Offer</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every bathroom renovation requires careful plumbing planning and execution. Our licensed plumbers handle every aspect of <strong>bathroom remodeling plumbing</strong> - from initial design consultation through final fixture connections and testing.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "Fixture Installation", desc: "Install new toilets, sinks, faucets, showers, and tubs. We work with all brands and styles to match your vision and budget." },
                  { title: "Pipe Relocation", desc: "Moving plumbing for new layouts. Relocate supply and waste lines to accommodate your new bathroom design." },
                  { title: "Shower & Tub Installation", desc: "Walk-in showers, soaking tubs, tub-to-shower conversions, and complete shower system installations with proper waterproofing." },
                  { title: "Vanity Plumbing", desc: "Connect single or double vanities with proper water supply and drainage. We handle undermount, vessel, and wall-mounted sinks." },
                  { title: "Water Supply Upgrades", desc: "Upgrade old galvanized pipes to modern PEX during your remodel. Improve water pressure and flow to all new fixtures." },
                  { title: "Rough-In Plumbing", desc: "Complete rough-in for new construction or major bathroom additions including supply, drain, and vent lines." },
                ].map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>

              {/* Mid-Content CTA */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Planning a Bathroom Remodel?</h3>
                <p className="text-gray-600 mb-4">Get a free plumbing consultation and detailed estimate for your project.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Why Bathroom Remodeling Plumbing Matters */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Professional Bathroom Plumbing Matters</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  The plumbing behind your walls is what makes your beautiful new bathroom actually function. Improper plumbing during a remodel leads to leaks, low water pressure, drainage problems, and even mold growth. These issues can damage your new tile, flooring, and finishes - turning your dream bathroom into an expensive headache.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A licensed <strong>bathroom remodeling plumber</strong> understands NJ plumbing codes, proper venting requirements, and the correct pipe sizing needed for each fixture. We ensure your shower has adequate water pressure, your drains flow freely, and every connection is leak-free. When walls are closed up after the remodel, you need confidence that the plumbing behind them was done right.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Many homeowners in <strong>East Brunswick</strong>, <strong>Edison</strong>, and throughout <strong>Middlesex County</strong> hire general contractors for their bathroom remodel but use Illyrian Plumber specifically for the plumbing work. Our licensed plumbers coordinate seamlessly with your contractor to ensure plumbing is completed at the right phase of construction.
                </p>
              </div>

              {/* Gallery Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Bathroom Remodeling Work</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {[
                  { src: "/images/bathroom-remodel-marble-shower.jpg", alt: "Marble shower bathroom remodel" },
                  { src: "/images/bathroom-renovation-glass-shower-door.jpg", alt: "Glass shower door installation" },
                  { src: "/images/bathroom-vanity-sink-installation.jpg", alt: "Vanity sink installation" },
                  { src: "/images/bathroom-plumbing-services-nj.jpg", alt: "Bathroom plumbing services" },
                  { src: "/images/bathroom-rough-in-plumbing.jpg", alt: "Bathroom rough-in plumbing" },
                  { src: "/images/bathroom-plumber-near-me.jpg", alt: "Professional bathroom plumber" },
                ].map((image, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Remodeling Process */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Bathroom Remodeling Plumbing Process</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our proven process ensures your <strong>bathroom renovation plumbing</strong> is completed correctly, on schedule, and within budget. We coordinate with your contractor at every phase.
              </p>
              <div className="space-y-4 mb-12">
                {[
                  { step: "1", title: "Design Consultation", desc: "We review your remodel plans, discuss plumbing requirements, fixture placement, pipe routing, and any relocations needed. We identify potential challenges early so there are no surprises during construction." },
                  { step: "2", title: "Planning & Permits", desc: "We create a detailed plumbing plan that meets all NJ code requirements and pull necessary permits. We coordinate with your general contractor on scheduling and access." },
                  { step: "3", title: "Rough-In Work", desc: "While walls are open, we install or relocate supply lines, drains, and vents. This is the most critical phase - proper rough-in ensures everything works perfectly when finished." },
                  { step: "4", title: "Fixture Installation", desc: "After tile, flooring, and finishes are complete, we return to install and connect all fixtures - toilets, sinks, faucets, showers, and tubs." },
                  { step: "5", title: "Testing & Inspection", desc: "We test all connections under pressure, check for leaks, verify proper drainage, and ensure everything works perfectly. We schedule code inspection if required." },
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

              {/* Bathroom Remodel Cost Breakdown */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bathroom Remodel Plumbing Cost Guide</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Understanding <strong>bathroom remodel cost</strong> for the plumbing portion helps you budget accurately. Plumbing typically represents 15-25% of a total bathroom renovation budget. Here is a general guide for common plumbing tasks during a bathroom remodel in New Jersey:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { task: "Toilet replacement (standard)", range: "$300 - $600" },
                  { task: "Vanity faucet installation", range: "$200 - $400" },
                  { task: "Shower valve replacement", range: "$400 - $800" },
                  { task: "Tub-to-shower conversion", range: "$1,500 - $3,500" },
                  { task: "Pipe relocation (per fixture)", range: "$500 - $1,500" },
                  { task: "Complete rough-in (new bathroom)", range: "$3,000 - $7,000" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-50 rounded-lg p-4">
                    <span className="text-gray-700 font-medium">{item.task}</span>
                    <span className="text-red-700 font-bold whitespace-nowrap ml-4">{item.range}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-12">
                *Prices are estimates and vary based on fixture selection, complexity, and existing conditions. Contact us for an accurate quote for your specific project.
              </p>

              {/* Popular Bathroom Upgrades */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Bathroom Upgrades We Install</h2>
              <p className="text-lg text-gray-600 mb-6">
                These are the most requested <strong>bathroom renovation</strong> upgrades from our Middlesex County homeowners. Each requires proper plumbing to function correctly.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {[
                  "Walk-in shower conversion",
                  "Dual vanity installation",
                  "Tankless water heater",
                  "Heated floor system",
                  "Low-flow fixtures",
                  "Modern faucets & hardware",
                  "Freestanding tub filler",
                  "Rain shower head system",
                  "Bidet installation",
                ].map((upgrade, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <span className="text-gray-800 font-medium">{upgrade}</span>
                  </div>
                ))}
              </div>

              {/* Mid-Content CTA 2 */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 text-center">
                <h3 className="text-xl font-bold mb-2">Ready to Start Your Bathroom Remodel?</h3>
                <p className="text-gray-300 mb-4">Free plumbing consultation for your renovation project. We work with your contractor.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Call Niti: {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold transition">
                    Call Danny: {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Why Choose Licensed Plumber */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose a Licensed Plumber for Remodeling?</h3>
                <p className="text-gray-700 mb-4">
                  Hiring an unlicensed handyman for bathroom plumbing is one of the most common - and costly - mistakes homeowners make. Here is why a licensed plumber is essential for your <strong>bathroom remodel in NJ</strong>:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Code-compliant installations",
                    "Proper permits pulled",
                    "Warranty on workmanship",
                    "Coordination with contractors",
                    "Hidden issue detection",
                    "Future problem prevention",
                    "Insurance protection",
                    "Proper venting and drainage",
                  ].map((reason, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Bathroom Plumbing Mistakes */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Bathroom Plumbing Mistakes to Avoid</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  During our years of <strong>bathroom remodeling plumbing</strong> work across Middlesex County, we have seen many costly mistakes made by unlicensed workers. Avoiding these common errors saves you money and prevents future headaches:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  "Inadequate drain slope causing slow drainage",
                  "Missing or improper vent connections",
                  "Wrong pipe size for fixtures",
                  "No shut-off valves at each fixture",
                  "Mixing incompatible pipe materials",
                  "Improper shower pan drainage",
                  "Not testing under pressure before closing walls",
                  "Ignoring code requirements for permits",
                ].map((mistake, index) => (
                  <div key={index} className="flex items-center gap-3 bg-amber-50 rounded-lg p-4">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700">{mistake}</span>
                  </div>
                ))}
              </div>

              {/* Blog Link */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Helpful Reading</h3>
                <p className="text-gray-700 mb-4">Planning your remodel? Read our detailed guide on what to expect:</p>
                <Link href="/blog/how-long-bathroom-remodel-take" className="text-red-700 hover:text-red-800 font-semibold">
                  How Long Does a Bathroom Remodel Take? Complete Timeline Guide &rarr;
                </Link>
              </div>

              {/* Service Areas */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bathroom Remodeling Plumber Service Areas</h3>
                <p className="text-gray-700 mb-4">
                  We provide professional <strong>bathroom remodeling plumbing</strong> throughout Middlesex County, NJ:
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bathroom Remodeling Plumbing FAQs</h2>
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

              {/* Related Services */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-medium">Toilet &amp; Faucet Installation &rarr;</Link>
                  <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 font-medium">Tankless Water Heaters &rarr;</Link>
                  <Link href="/services/radiant-heating-plumbing" className="text-red-700 hover:text-red-800 font-medium">Radiant Floor Heating &rarr;</Link>
                  <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping &rarr;</Link>
                  <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium">Water Filtration System &rarr;</Link>
                  <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-[6rem] space-y-6">
                {/* Call Now */}
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                  <p className="text-lg font-bold text-gray-900 mb-1">Need a Plumber?</p>
                  <p className="text-gray-600 text-sm mb-4">Expert plumbing for bathroom remodels.</p>
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
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>East Brunswick</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Edison</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Sayreville</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Old Bridge</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>Monroe Township</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>South Brunswick</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0"></span>North Brunswick</li>
                  </ul>
                </div>

                {/* Services */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Our Services</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/toilet-and-faucet-installation" className="text-gray-700 hover:text-red-700 transition">Toilet &amp; Faucet Installation</Link></li>
                    <li><Link href="/services/tankless-water-heater-installation" className="text-gray-700 hover:text-red-700 transition">Tankless Water Heater</Link></li>
                    <li><Link href="/services/radiant-heating-plumbing" className="text-gray-700 hover:text-red-700 transition">Radiant Floor Heating</Link></li>
                    <li><Link href="/services/whole-house-repiping" className="text-gray-700 hover:text-red-700 transition">Whole House Repiping</Link></li>
                    <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                    <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                  </ul>
                  <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
                </div>

                {/* Related Blog */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-bold text-gray-900 mb-3">Helpful Articles</p>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/blog/how-long-bathroom-remodel-take" className="text-gray-700 hover:text-red-700 transition leading-snug block">How Long Does a Bathroom Remodel Take?</Link>
                    </li>
                    <li>
                      <Link href="/blog/why-is-water-pressure-low" className="text-gray-700 hover:text-red-700 transition leading-snug block">Why Is My Water Pressure Low?</Link>
                    </li>
                    <li>
                      <Link href="/blog/tankless-vs-tank-water-heater" className="text-gray-700 hover:text-red-700 transition leading-snug block">Tankless vs Tank Water Heater</Link>
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
          <h2 className="text-3xl font-bold mb-4">Planning a Bathroom Remodel?</h2>
          <p className="text-xl text-red-100 mb-8">Get a free plumbing consultation for your project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
