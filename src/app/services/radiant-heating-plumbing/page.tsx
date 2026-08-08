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
  title: "Radiant Floor Heating Installation NJ - Illyrian Plumber",
  description: "Radiant floor heating installation and repair in East Brunswick, NJ. Hydronic systems, boiler integration, and free estimates. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/radiant-heating-plumbing",
  },
  keywords: [
    "radiant floor heating",
    "hydronic heating",
    "radiant heat installation",
    "floor heating system",
    "radiant heating repair",
    "in-floor heating",
    "radiant heat cost",
    "radiant floor heating NJ",
    "hydronic radiant heating installation",
    "heated floor installation",
    "radiant heat plumber",
    "PEX radiant heating",
    "zone heating system",
    "boiler radiant heat",
    "radiant floor heating cost NJ",
    "heated bathroom floor",
    "radiant heating Middlesex County",
  ],
  openGraph: {
    title: "Radiant Floor Heating Installation NJ - Illyrian Plumber",
    description: "Radiant floor heating installation and repair in East Brunswick, NJ. Hydronic systems, boiler integration, and free estimates. Call (347) 461-4856.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/radiant-heating-plumbing",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/copper-pipe-repiping-service.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber radiant floor heating installation in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radiant Floor Heating Installation NJ - Illyrian Plumber",
    description: "Radiant floor heating installation and repair in East Brunswick, NJ. Hydronic systems, boiler integration, and free estimates. Call (347) 461-4856.",
    images: ["https://www.illyrianplumber.com/images/copper-pipe-repiping-service.jpg"],
  },
};

const faqData = [
  {
    question: "How much does radiant floor heating installation cost in NJ?",
    answer: "Radiant floor heating installation in New Jersey typically costs $6-$16 per square foot for hydronic systems, depending on the complexity and whether it is new construction or a retrofit. A typical bathroom (50 sq ft) costs $1,500-$3,000, while a whole-house system can range from $15,000-$45,000. This includes PEX tubing, manifolds, pumps, and controls. Boiler costs are additional if a new one is needed. Contact Illyrian Plumber for an accurate estimate.",
  },
  {
    question: "Can radiant floor heating be installed in an existing home?",
    answer: "Yes, radiant floor heating can be retrofitted into existing homes, though it is more complex and costly than new construction installation. Methods include installing tubing in joist bays below the existing floor, using thin above-floor panels, or installing during a flooring renovation when the subfloor is accessible. The best time to add radiant heating is during a bathroom remodel or basement finishing project.",
  },
  {
    question: "What flooring works best with radiant floor heating?",
    answer: "Tile and stone are the best conductors for radiant floor heating, providing the most efficient heat transfer. Engineered hardwood works well with proper temperature limits. Laminate is compatible with most systems. Carpet reduces efficiency but can work with higher water temperatures. Vinyl and LVP are compatible with temperature-controlled systems. We can advise on the best setup for your flooring choice.",
  },
  {
    question: "Can radiant floor heating be my only heat source?",
    answer: "In many cases, yes. A properly designed radiant floor heating system can be the sole heat source for a home in New Jersey. This requires a proper heat loss calculation to ensure the system can handle the coldest days. In some cases, supplemental heat may be recommended for rooms with large windows or high ceilings. We perform heat loss calculations as part of our design process.",
  },
];

const faqSchema = getFaqSchema(faqData);

export default function RadiantHeatingPage() {
  const serviceSchema = getServiceSchema({
    name: "Radiant Floor Heating",
    description: "Professional radiant floor heating installation and repair in East Brunswick, NJ. Hydronic heating systems for comfortable, efficient warmth.",
    slug: "radiant-heating-plumbing",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Radiant Floor Heating", path: "/services/radiant-heating-plumbing" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceHero
        tagline="Premium Heating Solution"
        heading="Radiant Floor Heating"
        subheading="Experience the ultimate comfort with radiant floor heating. Warm floors, even heat distribution, and energy efficiency. We install and service hydronic radiant heating systems throughout East Brunswick and Middlesex County, NJ."
        backgroundImage="/images/copper-pipe-repiping-service.jpg"
        backgroundAlt="Radiant floor heating installation in East Brunswick NJ"
        service="Radiant Floor Heating"
        bullets={["Hydronic Systems", "Installation & Repair", "Licensed & Insured", "Free Estimates"]}
      />

      <StatsStrip />

      {/* Intro + benefits + how it works + gallery -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Radiant floor heating is one of the most comfortable ways to heat a home. Instead of blowing hot air through ducts, a hydronic heating system circulates warm water through tubing beneath your floors, radiating gentle, even warmth upward. The result is consistent temperatures, no cold spots, no drafts, and no dust circulation, just steady comfort from the ground up.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 mb-10">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in hydronic radiant heating and boiler systems in Middlesex County, NJ. We offer <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800">water heater replacement</Link>, <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800">bathroom remodeling</Link>, <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800">whole house repiping</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            {/* Benefits */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of radiant floor heating</h2>
            <p className="text-lg text-gray-600 mb-6">
              Homeowners who switch to radiant floor heating consistently report higher comfort levels and lower heating bills. Here is why this premium heating solution is gaining popularity in New Jersey homes:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Even, consistent warmth throughout rooms",
                "No cold spots or drafts near windows",
                "Completely silent operation",
                "No dust or allergen circulation",
                "25-30% more energy efficient than forced air",
                "Warm floors in winter - no cold feet",
                "Compatible with all flooring types",
                "Increases home value significantly",
                "No visible radiators or baseboard",
                "Zone-by-zone temperature control",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-green-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Mid-page CTA Band */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interested in radiant floor heating?</h3>
              <p className="text-gray-600 mb-4">Get a free consultation and estimate for your home.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Call Niti: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Call Danny: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* How It Works */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How hydronic radiant heating works</h2>
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">
                Hydronic radiant heating uses warm water circulating through PEX tubing installed beneath your floor. Unlike electric radiant mats that only warm small areas, hydronic systems can efficiently heat entire homes. With proper installation, the PEX tubing itself lasts 50+ years, circulator pumps typically run 15-20 years, and boilers last 15-30 years, so a well-designed system provides decades of reliable heat with minimal upkeep.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <div className="space-y-3">
                {[
                  { step: "1", text: "Boiler heats water to optimal temperature (typically 80-120 degrees F - much lower than baseboard systems)" },
                  { step: "2", text: "Circulator pumps push warm water through PEX tubing installed in a serpentine pattern under your floors" },
                  { step: "3", text: "Heat radiates upward through the floor surface, warming objects and people directly" },
                  { step: "4", text: "Zone thermostats control each area independently - heat only the rooms you use" },
                  { step: "5", text: "Cooled water returns to the boiler to be reheated and circulated again" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our radiant heating work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: "/images/copper-pipe-repiping-service.jpg", alt: "Radiant heating pipe installation" },
                { src: "/images/boiler-repair-service-nj.jpg", alt: "Boiler for radiant heating" },
                { src: "/images/bathroom-remodel-marble-shower.jpg", alt: "Heated bathroom floor" },
                { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Heating system testing" },
                { src: "/images/water-heater-maintenance-parts.jpg", alt: "Heating system components" },
                { src: "/images/professional-plumbing-services.jpg", alt: "Professional heating installation" },
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
        heading="What sets our radiant heating installs apart"
        items={[
          { icon: "shield", title: "Licensed master plumbers", description: "NJ-licensed plumbers handle every step, from manifold layout and tubing runs to boiler sizing and commissioning." },
          { icon: "wrench", title: "Correct boiler integration", description: "We size boilers specifically for radiant loads and install proper mixing valves so the system runs efficiently from day one." },
          { icon: "eye", title: "Heat loss calculations included", description: "Whole-house designs start with a real heat loss calculation, so your system is sized to handle the coldest New Jersey days." },
          { icon: "dollar", title: "Free estimates", description: "Get a no-obligation consultation and written quote before you commit to a system." },
          { icon: "home", title: "Local to Middlesex County", description: "750+ projects completed since 2010 in East Brunswick and the towns around it, not a national installer." },
          { icon: "clock", title: "Fast repair response", description: "Existing system not heating right? We diagnose circulator, zone valve, and air lock issues quickly to get your floors warm again." },
        ]}
      />

      {/* Services + cost + applications -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Our Services */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our radiant heating services</h2>
            <p className="text-lg text-gray-600 mb-6">
              From new radiant heat installation to system repairs and maintenance, our licensed plumbers handle every aspect of hydronic radiant heating systems.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "New System Installation", desc: "Complete hydronic radiant heating installation for new construction or major renovations. We design, install, and commission entire systems from boiler to manifold to tubing." },
                { title: "System Repair", desc: "Diagnose and repair radiant heating issues including leaks, pump failures, zone valve problems, air locks, and uneven heating. We also perform maintenance such as system flushing, pressure testing, and anti-freeze replacement." },
                { title: "Boiler Integration", desc: "Connect radiant systems to new or existing boilers for optimal efficiency. We size boilers correctly for radiant applications and set up proper mixing valves." },
                { title: "Zone Control Setup", desc: "Install thermostats, zone valves, and controls for independent room-by-room temperature control. Maximize comfort while minimizing energy waste." },
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* Radiant Heat Cost Guide */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Radiant floor heating cost guide</h2>
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">
                Understanding radiant heat cost helps you budget for this premium heating upgrade. While the upfront investment is higher than forced-air systems, the long-term energy savings and superior comfort make radiant heating an excellent value for New Jersey homeowners.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { task: "Bathroom radiant floor (50 sq ft)", range: "$1,500 - $3,000" },
                { task: "Kitchen radiant floor (150 sq ft)", range: "$3,000 - $5,500" },
                { task: "Basement radiant floor (500 sq ft)", range: "$5,000 - $10,000" },
                { task: "Whole house system (1,500 sq ft)", range: "$15,000 - $30,000" },
                { task: "Boiler for radiant system", range: "$4,000 - $8,000" },
                { task: "Zone controls and thermostats", range: "$500 - $2,000" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-50 rounded-lg p-4">
                  <span className="text-gray-700 font-medium">{item.task}</span>
                  <span className="text-red-700 font-bold whitespace-nowrap ml-4">{item.range}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mb-12">
              *Prices are estimates and vary based on accessibility, flooring type, and system complexity. Contact us for an accurate quote for your specific project.
            </p>

            {/* Ideal Applications */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ideal applications for radiant heating</h2>
            <p className="text-lg text-gray-600 mb-6">
              In-floor heating works beautifully in many areas of your home. These are the most popular applications for our Middlesex County customers:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { title: "Bathrooms", desc: "Warm tile floors year-round - no more cold feet stepping out of the shower" },
                { title: "Basements", desc: "Transform cold basements into comfortable living spaces with consistent warmth" },
                { title: "Kitchens", desc: "Comfortable cooking and gathering space with warm floors under your feet" },
                { title: "Additions", desc: "Perfect for new spaces where extending existing ductwork is impractical" },
                { title: "Garages", desc: "Heated workshop and garage areas for year-round use and comfort" },
                { title: "Whole Home", desc: "Complete radiant systems that replace traditional forced-air heating entirely" },
              ].map((app, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">{app.title}</h3>
                  <p className="text-gray-600 text-sm">{app.desc}</p>
                </div>
              ))}
            </div>

            {/* Mid-Content CTA 2 */}
            <div className="bg-gray-900 text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Warm floors are just a call away</h3>
              <p className="text-gray-300 mb-4">Free radiant heating consultation for your home. We design and install complete systems.</p>
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
        heading="Warm floors, happy Middlesex County homeowners"
        subheading="Real reviews from radiant heating installs and repairs across the area."
      />

      {/* Comparison + problems + FAQ + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Radiant vs Forced Air */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Radiant floor heating vs forced air</h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">
                Many homeowners ask how radiant floor heating compares to traditional forced-air systems. The differences are significant in terms of comfort, efficiency, and indoor air quality. Forced-air systems blow heated air through ducts, creating temperature stratification where the ceiling is warm and the floor is cold. Radiant systems heat from the floor up, putting warmth exactly where you need it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Forced-air systems also circulate dust, pet dander, and allergens through your home every time the blower runs. Radiant heating eliminates this entirely since there are no ducts or blowers, a significant benefit for allergy sufferers. Additionally, duct systems typically lose 20-30% of heated air through leaks, while hydronic radiant systems deliver nearly 100% of the heat produced to your living spaces.
              </p>
            </div>

            {/* Common Radiant Heating Problems */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common radiant heating problems we fix</h2>
            <p className="text-lg text-gray-600 mb-6">
              If your existing floor heating system is not working properly, our experienced plumbers can diagnose and repair the issue quickly:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Uneven heating between zones",
                "System not producing enough heat",
                "Circulator pump failure",
                "Air lock in tubing loops",
                "Zone valve malfunction",
                "Boiler not firing for radiant system",
                "Leaking PEX tubing or fittings",
                "Thermostat not communicating",
              ].map((problem, index) => (
                <div key={index} className="flex items-center gap-3 bg-amber-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Radiant floor heating FAQs</h2>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Radiant floor heating throughout Middlesex County</h3>
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
                  { label: "Boiler Repair", href: "/services/boiler-repair-service", description: "No-heat calls and leaking circulators" },
                  { label: "Water Heater Replacement", href: "/services/water-heater-replacement", description: "Upgrade an aging or failing water heater" },
                  { label: "Tankless Water Heater", href: "/services/tankless-water-heater-installation", description: "Endless hot water with a compact footprint" },
                  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling", description: "Plumbing for remodels and heated floors" },
                  { label: "Whole House Repiping", href: "/services/whole-house-repiping", description: "Replace aging or corroded supply lines" },
                  { label: "Gas Line Services", href: "/services/gas-line-repair-installation", description: "Installation, repair, and safety testing" },
                  { label: "Emergency Plumbing", href: "/services/emergency-plumbing", description: "24/7 response for urgent plumbing issues" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Helpful reading"
              tone="dark"
              items={[
                { label: "Common Boiler Problems in Winter", href: "/blog/common-boiler-problems-winter", badge: "Guide" },
                { label: "How Long Does a Bathroom Remodel Take?", href: "/blog/how-long-bathroom-remodel-take", badge: "Guide" },
                { label: "Tankless vs Tank Water Heater", href: "/blog/tankless-vs-tank-water-heater", badge: "Guide" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in radiant heating?</h2>
          <p className="text-xl text-red-100 mb-8">Get a consultation for your home. Free estimates on all installations.</p>
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
