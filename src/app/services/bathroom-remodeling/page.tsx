import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";
import {
  getServiceSchema,
  getFaqSchema,
  getBreadcrumbSchema,
} from "@/lib/schemas";
import ServiceHero from "@/components/ServiceHero";
import Testimonials from "@/components/Testimonials";
import DifferentiatorGrid from "@/components/DifferentiatorGrid";
import StatsStrip from "@/components/StatsStrip";
import LinkCardGrid from "@/components/LinkCardGrid";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Plumbing in NJ - Illyrian Plumber",
  description: "Licensed bathroom remodel plumbing in East Brunswick and Middlesex County, NJ. Fixture installation, pipe relocation, shower conversions. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/bathroom-remodeling",
  },
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
  openGraph: {
    title: "Bathroom Remodeling Plumbing in NJ - Illyrian Plumber",
    description: "Licensed bathroom remodel plumbing in East Brunswick and Middlesex County, NJ. Fixture installation, pipe relocation, shower conversions. Call (347) 461-4856.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/bathroom-remodeling",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/bathroom-remodel-marble-shower.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber bathroom remodeling plumbing service in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Plumbing in NJ - Illyrian Plumber",
    description: "Licensed bathroom remodel plumbing in East Brunswick and Middlesex County, NJ. Fixture installation, pipe relocation, shower conversions. Call (347) 461-4856.",
    images: ["https://www.illyrianplumber.com/images/bathroom-remodel-marble-shower.jpg"],
  },
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
    question: "Can you add a bathroom to my home?",
    answer: "Yes, we handle all plumbing for new bathroom additions including running new supply lines, installing drain and vent lines, and connecting all fixtures. Adding a bathroom requires proper planning for drainage, venting, and water supply. We handle the complete plumbing scope from rough-in to final connections.",
  },
];

const faqSchema = getFaqSchema(faqData);

export default function BathroomRemodelingPage() {
  const serviceSchema = getServiceSchema({
    name: "Bathroom Remodeling Plumbing",
    description: "Professional bathroom remodeling plumbing services in East Brunswick, NJ. Fixture installation, pipe relocation, and complete bathroom plumbing.",
    slug: "bathroom-remodeling",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Bathroom Remodeling", path: "/services/bathroom-remodeling" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceHero
        tagline="Renovation Plumbing Specialists"
        heading="Bathroom Remodeling Plumbing"
        subheading="Transform your bathroom with expert plumbing services. From fixture upgrades to complete bathroom renovations, we handle all the plumbing work for your remodel project in East Brunswick and throughout Middlesex County, NJ."
        backgroundImage="/images/bathroom-remodel-marble-shower.jpg"
        backgroundAlt="Bathroom remodeling plumbing service in East Brunswick NJ"
        service="Bathroom Remodeling"
        bullets={["Fixture Installation", "Complete Renovations", "Licensed & Insured", "Free Estimates"]}
      />

      <StatsStrip />

      {/* Intro + about + services grid + why it matters + gallery -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                A bathroom remodel is one of the most impactful home improvement projects you can take on, but the plumbing is the foundation that makes everything work. Whether you are upgrading fixtures, changing your bathroom layout, or building an entirely new bathroom, professional plumbing ensures proper water flow, drainage, and code compliance for years of trouble-free use.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Illyrian Plumber - licensed bathroom remodeling specialists in New Jersey</h2>
              <p className="text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in bathroom remodeling plumbing and fixture installation in Middlesex County, NJ. We offer <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800">toilet and faucet installation</Link>, <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, <Link href="/services/radiant-heating-plumbing" className="text-red-700 hover:text-red-800">radiant floor heating</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            {/* Bathroom Plumbing Services */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bathroom plumbing services we offer</h2>
            <p className="text-lg text-gray-600 mb-6">
              Every bathroom renovation requires careful plumbing planning and execution. Our licensed plumbers handle every aspect of bathroom remodeling plumbing, from initial design consultation through final fixture connections and testing.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Fixture installation", desc: "Install new toilets, sinks, faucets, showers, and tubs from trusted brands like Kohler, Moen, Delta, American Standard, TOTO, and Grohe, matched to your style and budget." },
                { title: "Pipe relocation", desc: "Moving plumbing for new layouts. We relocate supply lines, drain lines, and vent stacks to accommodate your new bathroom design, best handled while walls are already open during a full remodel." },
                { title: "Shower & tub installation", desc: "Walk-in showers, soaking tubs, tub-to-shower conversions, and complete shower system installations with proper waterproofing." },
                { title: "Vanity plumbing", desc: "Connect single or double vanities with proper water supply and drainage. We handle undermount, vessel, and wall-mounted sinks." },
                { title: "Water supply upgrades", desc: "Upgrade old galvanized or polybutylene pipes to modern PEX during your remodel, while walls are already open and the added cost is minimal. Improve water pressure and flow to all new fixtures." },
                { title: "Rough-in plumbing", desc: "Complete rough-in for new construction or major bathroom additions including supply, drain, and vent lines." },
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* Mid-page CTA Band */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planning a bathroom remodel?</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why professional bathroom plumbing matters</h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">
                The plumbing behind your walls is what makes your beautiful new bathroom actually function. Improper plumbing during a remodel leads to leaks, low water pressure, drainage problems, and even mold growth. These issues can damage your new tile, flooring, and finishes, turning your dream bathroom into an expensive headache.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A licensed bathroom remodeling plumber understands NJ plumbing codes, proper venting requirements, and the correct pipe sizing needed for each fixture. We ensure your shower has adequate water pressure, your drains flow freely, and every connection is leak-free. When walls are closed up after the remodel, you need confidence that the plumbing behind them was done right.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Many homeowners in East Brunswick, Edison, and throughout Middlesex County hire general contractors for their bathroom remodel but use Illyrian Plumber specifically for the plumbing work. Our licensed plumbers coordinate seamlessly with your contractor, handling rough-in before drywall goes up and returning for final fixture installation once tile and finishes are complete, so scheduling stays on track and rework is avoided.
              </p>
            </div>

            {/* Gallery Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our bathroom remodeling work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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

          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why homeowners trust us with their remodel"
        subheading="A bathroom remodel only works if the plumbing behind the walls is done right the first time."
        items={[
          { icon: "shield", title: "Licensed and code-compliant", description: "Every installation meets NJ plumbing code with the correct permits pulled, protecting your investment and your resale value." },
          { icon: "wrench", title: "Full workmanship warranty", description: "We stand behind every connection we make and carry full insurance, so you are covered if anything needs attention later." },
          { icon: "clock", title: "Scheduled around your contractor", description: "We handle rough-in before drywall goes up and return for fixture installation once tile and finishes are complete, keeping your timeline on track." },
          { icon: "eye", title: "We catch hidden issues", description: "Old pipe material, undersized drains, and missing vents get flagged during consultation, before they turn into a problem behind a closed wall." },
          { icon: "dollar", title: "Free estimates, no surprises", description: "You get a detailed quote before any work begins, so there are no surprise charges once your bathroom is torn open." },
          { icon: "home", title: "750+ projects in Middlesex County", description: "Over 10 years remodeling bathrooms across East Brunswick, Edison, and the surrounding towns, not a national franchise passing through." },
        ]}
      />

      {/* Process + cost + upgrades + mistakes -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Remodeling Process */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our bathroom remodeling plumbing process</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our proven process ensures your bathroom renovation plumbing is completed correctly, on schedule, and within budget. We coordinate with your contractor at every phase.
            </p>
            <div className="space-y-4 mb-12">
              {[
                { step: "1", title: "Design consultation", desc: "We review your remodel plans, discuss plumbing requirements, fixture placement, pipe routing, and any relocations needed, and inspect your existing pipe condition to flag galvanized or polybutylene lines that should be upgraded while the walls are open. We identify potential challenges early so there are no surprises during construction." },
                { step: "2", title: "Planning & permits", desc: "We create a detailed plumbing plan that meets all NJ code requirements and pull necessary permits. We coordinate with your general contractor on scheduling and access." },
                { step: "3", title: "Rough-in work", desc: "While walls are open, we install or relocate supply lines, drains, and vents. This is the most critical phase - proper rough-in ensures everything works perfectly when finished." },
                { step: "4", title: "Fixture installation", desc: "After tile, flooring, and finishes are complete, we return to install and connect all fixtures - toilets, sinks, faucets, showers, and tubs." },
                { step: "5", title: "Testing & inspection", desc: "We test all connections under pressure, check for leaks, verify proper drainage, and ensure everything works perfectly. We schedule code inspection if required." },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bathroom remodel plumbing cost guide</h2>
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">
                Understanding bathroom remodel cost for the plumbing portion helps you budget accurately. Plumbing typically represents 15-25% of a total bathroom renovation budget. Here is a general guide for common plumbing tasks during a bathroom remodel in New Jersey:
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular bathroom upgrades we install</h2>
            <p className="text-lg text-gray-600 mb-6">
              These are the most requested bathroom renovation upgrades from our Middlesex County homeowners. Each requires proper plumbing to function correctly.
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
              <h3 className="text-xl font-bold mb-2">Ready to start your bathroom remodel?</h3>
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

            {/* Common Bathroom Plumbing Mistakes */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common bathroom plumbing mistakes to avoid</h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">
                During our years of bathroom remodeling plumbing work across Middlesex County, we have seen many costly mistakes made by unlicensed workers. Avoiding these common errors saves you money and prevents future headaches:
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
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Helpful reading</h3>
              <p className="text-gray-700 mb-4">Planning your remodel? Read our detailed guide on what to expect:</p>
              <Link href="/blog/how-long-bathroom-remodel-take" className="text-red-700 hover:text-red-800 font-semibold">
                Read: How Long Does a Bathroom Remodel Take? Complete Timeline Guide &rarr;
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="Trusted by Middlesex County homeowners"
        subheading="Real reviews from real bathroom remodeling projects."
      />

      {/* FAQ + service areas + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bathroom remodeling plumbing FAQs</h2>
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

            {/* Service Areas -- pill cloud */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bathroom remodeling plumbing throughout Middlesex County</h3>
              <div className="flex flex-wrap gap-2">
                {["East Brunswick", "Edison", "North Brunswick", "South Brunswick", "Old Bridge", "Sayreville", "Monroe Township", "New Brunswick", "Highland Park", "Milltown", "South River", "Spotswood"].map((area) => {
                  const slug = area.toLowerCase().replace(/\s+/g, "-");
                  const hasPage = ["east-brunswick", "edison", "north-brunswick", "south-brunswick", "old-bridge", "sayreville", "monroe-township"].includes(slug);
                  return hasPage ? (
                    <Link key={area} href={`/service-areas/${slug}`} className="bg-red-50 px-3 py-1.5 rounded-full text-sm font-medium text-red-700 border border-red-200 hover:bg-red-100 transition">{area}</Link>
                  ) : (
                    <span key={area} className="bg-gray-100 px-3 py-1.5 rounded-full text-sm text-gray-600 border border-gray-200">{area}</span>
                  );
                })}
              </div>
            </div>

            {/* Related Services */}
            <div className="mb-8">
              <LinkCardGrid
                heading="Related services"
                items={[
                  { label: "Toilet & Faucet Installation", href: "/services/toilet-and-faucet-installation", description: "Fixture swaps and new installations" },
                  { label: "Tankless Water Heater Installation", href: "/services/tankless-water-heater-installation", description: "Compact, efficient hot water upgrade" },
                  { label: "Radiant Floor Heating", href: "/services/radiant-heating-plumbing", description: "Heated floors for a new bathroom" },
                  { label: "Whole House Repiping", href: "/services/whole-house-repiping", description: "Replace old galvanized or polybutylene pipe" },
                  { label: "Water Heater Repair", href: "/services/water-heater-repair", description: "Fix leaks and restore hot water fast" },
                  { label: "Emergency Plumbing", href: "/services/emergency-plumbing", description: "24/7 response for burst pipes and leaks" },
                  { label: "Water Filtration System", href: "/services/water-filtration-system", description: "Protect new fixtures from hard water" },
                  { label: "Plumbing Inspections", href: "/services/plumbing-safety-inspections", description: "Catch problems before your remodel starts" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Helpful articles for your remodel"
              tone="dark"
              items={[
                { label: "How Long Does a Bathroom Remodel Take?", href: "/blog/how-long-bathroom-remodel-take", badge: "Guide" },
                { label: "Why Is My Water Pressure Low?", href: "/blog/why-is-water-pressure-low", badge: "Guide" },
                { label: "Tankless vs Tank Water Heater", href: "/blog/tankless-vs-tank-water-heater", badge: "Comparison" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning a bathroom remodel?</h2>
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

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 p-3">
        <div className="flex gap-2">
          <a href={BUSINESS_INFO.phoneLink} className="flex-1 bg-red-700 text-white px-4 py-3 rounded-lg font-bold text-center text-sm">
            Call {BUSINESS_INFO.phoneName}
          </a>
          <a href={BUSINESS_INFO.phone2Link} className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg font-bold text-center text-sm">
            Call {BUSINESS_INFO.phone2Name}
          </a>
        </div>
      </div>
    </>
  );
}
