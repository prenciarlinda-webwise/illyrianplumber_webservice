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
  title: "Plumbing Safety Inspection Services NJ - Illyrian Plumber",
  description: "Plumbing safety inspections in East Brunswick and Middlesex County, NJ. Home buyer inspections, gas line testing, and detailed reports. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/plumbing-safety-inspections",
  },
  keywords: [
    "plumbing inspection",
    "home plumbing inspection",
    "plumbing safety inspection",
    "pre-purchase plumbing inspection",
    "plumbing evaluation",
    "plumbing inspection cost",
    "plumbing inspection NJ",
    "home buyer plumbing inspection",
    "plumbing safety check",
    "plumbing assessment",
    "annual plumbing inspection",
    "real estate plumbing inspection",
    "gas line inspection NJ",
    "plumbing inspection East Brunswick",
    "plumbing inspection Middlesex County",
    "plumbing code inspection",
    "residential plumbing inspection",
  ],
  openGraph: {
    title: "Plumbing Safety Inspection Services NJ - Illyrian Plumber",
    description: "Plumbing safety inspections in East Brunswick and Middlesex County, NJ. Home buyer inspections, gas line testing, and detailed reports. Call (347) 461-4856.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/plumbing-safety-inspections",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/professional-plumbing-services.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber safety inspection service in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumbing Safety Inspection Services NJ - Illyrian Plumber",
    description: "Plumbing safety inspections in East Brunswick and Middlesex County, NJ. Home buyer inspections, gas line testing, and detailed reports. Call (347) 461-4856.",
    images: ["https://www.illyrianplumber.com/images/professional-plumbing-services.jpg"],
  },
};

const faqData = [
  {
    question: "How much does a plumbing inspection cost in NJ?",
    answer: "A professional plumbing inspection in New Jersey typically costs $150-$400 depending on the size of the home and scope of the inspection. A basic visual inspection is on the lower end, while a comprehensive inspection including water pressure testing, gas line checks, and backflow prevention testing costs more. Contact Illyrian Plumber for exact pricing.",
  },
  {
    question: "Do I need a plumbing inspection before buying a home?",
    answer: "Absolutely. A standard home inspection only provides a basic overview of plumbing. A dedicated pre-purchase plumbing inspection by a licensed plumber goes much deeper - checking pipe materials, water pressure, drainage flow, gas connections, and identifying issues that could cost thousands to repair. This gives you negotiating power and protects your investment.",
  },
  {
    question: "How often should I get a plumbing inspection?",
    answer: "We recommend annual plumbing inspections for homes over 20 years old and every 2-3 years for newer homes. If you have an older home with galvanized pipes, a well water system, or a septic system, more frequent inspections are advisable. Annual inspections catch small problems before they become expensive emergencies.",
  },
  {
    question: "Can a plumbing inspection help sell my home?",
    answer: "Yes. A pre-sale plumbing inspection lets you address issues before listing, preventing surprises during buyer inspections. You can fix problems on your own timeline and budget rather than under negotiation pressure. Some sellers include the inspection report as a selling point to demonstrate the home has been well-maintained.",
  },
];

const faqSchema = getFaqSchema(faqData);

export default function PlumbingInspectionsPage() {
  const serviceSchema = getServiceSchema({
    name: "Plumbing Safety Inspections",
    description: "Professional plumbing inspections in East Brunswick, NJ. Home buyer inspections, annual maintenance checks, and safety evaluations.",
    slug: "plumbing-safety-inspections",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Plumbing Safety Inspections", path: "/services/plumbing-safety-inspections" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceHero
        tagline="Comprehensive Evaluations"
        heading="Plumbing Safety Inspections"
        subheading="Comprehensive plumbing inspections for home buyers, sellers, and homeowners. Identify problems before they become expensive emergencies. Serving East Brunswick and all of Middlesex County, NJ."
        backgroundImage="/images/professional-plumbing-services.jpg"
        backgroundAlt="Plumbing safety inspections in East Brunswick NJ"
        service="Plumbing Safety Inspections"
        bullets={["Home Buyer Inspections", "Detailed Reports", "Licensed & Insured", "Gas Line Testing"]}
      />

      <StatsStrip />

      {/* Intro + types + gallery -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Your home&apos;s plumbing system is largely hidden behind walls, under floors, and underground, making it easy to overlook until something goes wrong. A professional plumbing inspection reveals the true condition of your pipes, water heater, gas lines, and fixtures before small issues become major emergencies. Whether you are buying a home, selling, or just want peace of mind, a plumbing safety inspection is one of the smartest investments you can make.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 mb-10">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in plumbing inspections and diagnostics in Middlesex County, NJ. We offer <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800">water leak detection</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800">water heater replacement</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            {/* Types of Inspections */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of plumbing inspections</h2>
            <p className="text-lg text-gray-600 mb-6">
              We offer several types of plumbing inspections tailored to your specific needs. Each includes a detailed written report with findings and recommendations.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Home Buyer Inspection", desc: "Thorough inspection before purchasing a home. Identify hidden plumbing issues that could cost thousands to repair. Use findings for negotiation or to plan future repairs." },
                { title: "Pre-Sale Inspection", desc: "Prepare your home for sale by identifying and addressing plumbing issues before they become negotiation points. Show buyers your plumbing is well-maintained." },
                { title: "Annual Maintenance Check", desc: "Preventive inspection to catch small problems before they become major repairs. Recommended annually for homes over 20 years old." },
                { title: "Gas Line Safety Inspection", desc: "Check gas lines and connections for leaks and safety. Required for some insurance and real estate transactions. Includes combustible gas detection testing." },
              ].map((type, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>

            {/* Mid-page CTA Band */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule a plumbing inspection</h3>
              <p className="text-gray-600 mb-4">Know the true condition of your plumbing. Detailed report included.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Call Niti: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Call Danny: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Gallery Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our inspection work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: "/images/professional-plumbing-services.jpg", alt: "Professional plumbing inspection" },
                { src: "/images/water-heater-repair-service.jpg", alt: "Water heater inspection" },
                { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Gas line safety testing" },
                { src: "/images/copper-pipe-repiping-service.jpg", alt: "Pipe condition inspection" },
                { src: "/images/water-heater-sediment-buildup.jpg", alt: "Water heater evaluation" },
                { src: "/images/boiler-repair-service-nj.jpg", alt: "Boiler safety inspection" },
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
        heading="What makes our inspections different"
        items={[
          { icon: "shield", title: "Licensed NJ Master Plumbers", description: "Every inspection is performed by a fully licensed, insured plumber, not a subcontractor or an apprentice." },
          { icon: "eye", title: "Detailed written report", description: "You get a full report with photos and priority ratings for every issue we find, not just a verbal summary." },
          { icon: "bolt", title: "Gas line testing included", description: "Combustible gas detection testing is part of every comprehensive inspection at no extra charge." },
          { icon: "dollar", title: "Upfront pricing", description: "You know the cost before we start. No surprise fees added once we're on-site." },
          { icon: "home", title: "Local to Middlesex County", description: "750+ projects completed since 2010 in East Brunswick and the surrounding towns we know well, not a national franchise." },
          { icon: "clock", title: "Same-week scheduling", description: "Book an inspection and get on the calendar within days, whether you're buying, selling, or checking on an older home." },
        ]}
      />

      {/* What we inspect + cost + benefits -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Why Get a Plumbing Inspection */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why a plumbing inspection matters</h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">
                Many homeowners in East Brunswick, Edison, and throughout Middlesex County have older homes with aging plumbing systems. Galvanized pipes corrode from the inside, slowly reducing water flow and quality without any visible signs. Water heaters near the end of their lifespan can fail catastrophically, flooding basements and causing thousands in water damage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A home plumbing inspection catches these issues early. We have inspected hundreds of homes in our service area and routinely find problems that homeowners had no idea existed - corroded pipes hidden behind walls, gas connections with small leaks, water heaters with failing anodes, and improperly done repairs from previous owners. Catching these issues early saves money and prevents emergencies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For home buyers, a pre-purchase plumbing inspection is especially valuable. Standard home inspections only scratch the surface of plumbing - they check that water runs and drains but do not assess pipe condition, water pressure adequacy, gas line integrity, or remaining equipment life. Our detailed inspection gives you the complete picture.
              </p>
            </div>

            {/* What We Inspect */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What we inspect</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our comprehensive plumbing safety inspection covers every major component of your home&apos;s plumbing system:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Water supply lines and shut-off valves",
                  "Water heater condition, age, and safety",
                  "Visible pipes for leaks and corrosion",
                  "Fixture operation and condition",
                  "Static and dynamic water pressure testing",
                  "Toilet operation, seals, and flanges",
                  "Gas lines, connections, and leak testing",
                  "Sump pump operation and discharge",
                  "Main shut-off valve functionality",
                  "Signs of hidden water damage",
                  "Pipe materials and remaining lifespan",
                  "Boiler and heating system safety",
                  "Drain flow and drainage performance",
                  "Backflow prevention devices",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Plumbing Inspection Cost */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing inspection cost guide</h2>
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">
                Understanding plumbing inspection cost helps you budget for this important service. The cost of an inspection is minimal compared to the potential repair costs of undetected plumbing problems.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { task: "Basic visual inspection", range: "$150 - $250" },
                { task: "Comprehensive inspection", range: "$250 - $400" },
                { task: "Pre-purchase buyer inspection", range: "$250 - $400" },
                { task: "Gas line safety inspection", range: "$100 - $200" },
                { task: "Backflow prevention testing (add-on)", range: "$100 - $200" },
                { task: "Water quality testing (add-on)", range: "$50 - $150" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-50 rounded-lg p-4">
                  <span className="text-gray-700 font-medium">{item.task}</span>
                  <span className="text-red-700 font-bold whitespace-nowrap ml-4">{item.range}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mb-12">
              *Prices vary based on home size and scope. Contact us for exact pricing for your situation.
            </p>

            {/* Why Get Inspected */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why get a plumbing inspection?</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { title: "Avoid surprises", desc: "Know the true condition of your plumbing before problems surprise you" },
                { title: "Save money", desc: "Catch small problems before they escalate into expensive emergency repairs" },
                { title: "Peace of mind", desc: "Confidence that your home's plumbing systems are safe and functional" },
                { title: "Negotiating power", desc: "Use inspection findings as leverage in home purchase negotiations" },
                { title: "Insurance compliance", desc: "Meet insurance requirements for coverage and claims documentation" },
                { title: "Preventive care", desc: "Extend the life of your plumbing systems with early intervention" },
              ].map((benefit, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>

            {/* Mid-Content CTA 2 */}
            <div className="bg-gray-900 text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Protect your home with a plumbing inspection</h3>
              <p className="text-gray-300 mb-4">Comprehensive inspections with detailed written reports. Same-week scheduling available.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Call Niti: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold transition">
                  Call Danny: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="Trusted by homeowners across Middlesex County"
        subheading="Real reviews from real plumbing inspections and safety evaluations."
      />

      {/* Report + FAQ + service areas + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Inspection Report */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your inspection report</h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">
                After your inspection, you receive a detailed written report documenting the condition of your plumbing systems, any issues found, and recommended repairs or upgrades. Each finding is rated by priority - from immediate safety concerns to long-term maintenance recommendations. The report includes photos of problem areas for your reference.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This plumbing evaluation report can be used for real estate transactions, insurance purposes, or planning future maintenance. For home buyers, it provides documentation to support repair requests or price negotiations. For homeowners, it creates a maintenance roadmap so you can budget for repairs over time rather than dealing with emergencies.
              </p>
            </div>

            {/* Common Issues We Find */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Common issues we find during inspections</h3>
              <p className="text-gray-700 mb-4">
                After hundreds of home plumbing inspections in Middlesex County, these are the most common problems we discover:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Corroded galvanized pipes nearing failure",
                  "Water heater past expected lifespan",
                  "Slow leaks causing hidden mold and rot",
                  "Improper previous repairs by unlicensed workers",
                  "Outdated pipe materials (polybutylene, lead)",
                  "Missing or seized shut-off valves",
                  "Gas leaks at appliance connections",
                  "Failed or undersized sump pumps",
                  "Inadequate water pressure",
                  "Missing backflow prevention devices",
                ].map((issue, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700">{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing inspection FAQs</h2>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plumbing inspections throughout Middlesex County</h3>
              <div className="flex flex-wrap gap-2">
                {["East Brunswick", "Edison", "Old Bridge", "Sayreville", "South Brunswick", "North Brunswick", "Monroe Township"].map((area) => {
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
                  { label: "Water Leak Detection", href: "/services/water-leak-detection", description: "Find hidden leaks before they cause damage" },
                  { label: "Whole House Repiping", href: "/services/whole-house-repiping", description: "Replace aging or corroded supply lines" },
                  { label: "Gas Line Services", href: "/services/gas-line-repair-installation", description: "Installation, repair, and safety testing" },
                  { label: "Water Heater Replacement", href: "/services/water-heater-replacement", description: "Upgrade an aging or failing water heater" },
                  { label: "Emergency Plumbing", href: "/services/emergency-plumbing", description: "24/7 response for urgent plumbing issues" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Helpful reading"
              tone="dark"
              items={[
                { label: "Signs of a Slab Leak or Sewer Line Problem", href: "/blog/signs-of-slab-leak-sewer-line", badge: "Guide" },
                { label: "Why Is My Water Pressure Low?", href: "/blog/why-is-water-pressure-low", badge: "Guide" },
                { label: "Signs Your Water Heater Is Dying", href: "/blog/signs-water-heater-dying", badge: "Guide" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule a plumbing inspection</h2>
          <p className="text-xl text-red-100 mb-8">Know the true condition of your plumbing. Detailed report included.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Request Inspection
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
