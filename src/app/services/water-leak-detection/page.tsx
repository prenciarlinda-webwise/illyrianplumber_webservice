import { Metadata } from "next";
import Link from "next/link";
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
  title: "24/7 Emergency Leak Detection NJ - Illyrian Plumber",
  description: "Emergency leak detection in NJ. We pinpoint hidden slab, underground, and pipe leaks fast with non-invasive tools and upfront pricing. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/water-leak-detection",
  },
  keywords: [
    "water leak detection",
    "leak detection",
    "slab leak detection",
    "hidden water leak",
    "leak detection service",
    "find water leak",
    "water leak repair",
    "water leak detection NJ",
    "slab leak repair NJ",
    "underground leak detection",
    "pipe leak detection",
    "water leak detection East Brunswick",
    "Middlesex County leak detection",
    "non-invasive leak detection",
    "plumbing leak repair NJ",
    "ceiling leak detection",
    "water damage prevention",
  ],
  openGraph: {
    title: "24/7 Emergency Leak Detection NJ - Illyrian Plumber",
    description: "Emergency leak detection across New Jersey. Find hidden slab, underground, and pipe leaks with advanced non-invasive technology. Upfront pricing.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/water-leak-detection",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/water-heater-repair-service.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber water leak detection service in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Emergency Leak Detection NJ - Illyrian Plumber",
    description: "Emergency leak detection across New Jersey. Find hidden slab, underground, and pipe leaks with advanced non-invasive technology. Upfront pricing.",
    images: ["https://www.illyrianplumber.com/images/water-heater-repair-service.jpg"],
  },
};

const faqData = [
  {
    question: "How much does water leak detection cost in NJ?",
    answer: "Water leak detection costs in New Jersey typically range from $150 to $500 depending on the type of leak and complexity of detection required. Slab leak detection using specialized equipment may cost more due to the advanced technology involved. We provide upfront pricing before starting any work, and if you proceed with repairs, the detection fee is often applied toward the repair cost.",
  },
  {
    question: "How do you detect a water leak without tearing up my walls or floors?",
    answer: "We use non-invasive leak detection technology including acoustic listening devices, thermal imaging cameras, moisture meters, and video pipe inspection cameras. These tools allow us to pinpoint the exact location of a leak behind walls, under floors, or beneath concrete slabs without unnecessary demolition. We only open walls or floors once we know exactly where the leak is.",
  },
  {
    question: "What are the signs of a slab leak?",
    answer: "Common signs of a slab leak include warm or hot spots on the floor, the sound of running water when all fixtures are off, unexplained increases in water bills, cracks in the foundation or walls, mold or mildew smell near the floor, and damp or wet carpet or flooring. If you notice any of these signs, contact a professional immediately as slab leaks can cause serious structural damage if left untreated.",
  },
  {
    question: "Can a water leak increase my water bill significantly?",
    answer: "Yes. Even a small, hidden water leak can waste thousands of gallons per month. A pinhole leak in a supply line can waste 2,000-3,000 gallons per month. A running toilet can waste 200 gallons per day. A slab leak can waste even more. If your water bill has increased by 25% or more without a change in usage, a hidden leak is likely the cause.",
  },
];

export default function WaterLeakDetectionPage() {
  const serviceSchema = getServiceSchema({
    name: "Water Leak Detection",
    description: "Professional water leak detection in East Brunswick, NJ. Find hidden leaks in walls, floors, and slabs. Advanced technology, minimal disruption.",
    slug: "water-leak-detection",
  });

  const faqSchema = getFaqSchema(faqData);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Water Leak Detection", path: "/services/water-leak-detection" },
  ]);

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#quick-answer"],
    },
    url: "https://www.illyrianplumber.com/services/water-leak-detection",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <ServiceHero
        tagline="Advanced Detection Technology"
        heading="Water Leak Detection Services in New Jersey"
        subheading="Emergency and same-day leak detection to find hidden water leaks in walls, ceilings, floors, and slabs. We pinpoint the leak precisely before any unnecessary demolition. Serving homeowners across New Jersey from our East Brunswick base in Middlesex County."
        backgroundImage="/images/water-heater-repair-service.jpg"
        backgroundAlt="Water leak detection service in East Brunswick NJ"
        service="Water Leak Detection"
        bullets={["Non-Invasive Methods", "Precise Location", "Same-Day Service", "Licensed & Insured"]}
      />

      <StatsStrip />

      {/* Intro + signs + types -- narrow readable column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* About Illyrian Plumber */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Illyrian Plumber - Professional Leak Detection Specialists in New Jersey</h2>
              <p className="text-gray-700 leading-relaxed">
                Illyrian Plumber has been protecting New Jersey homes for over {BUSINESS_INFO.stats.yearsExperience} years, with our base in East Brunswick, Middlesex County. Our licensed plumbers use advanced, non-invasive leak detection technology to find hidden water leaks without tearing apart your home. We locate the problem first, then provide honest repair options and affordable, upfront pricing with no hidden fees. When you search for leak detection near me and suspect a hidden leak, fast action prevents costly water damage - call us for emergency, same-day leak detection service.
              </p>
            </div>

            {/* Emergency Leak Detection AEO block */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Do you offer emergency leak detection in New Jersey?</h2>
            <p id="quick-answer" className="text-lg text-gray-600 mb-3">
              Yes. Illyrian Plumber provides emergency, same-day leak detection across Middlesex County, NJ. A licensed plumber arrives with acoustic, thermal, and moisture equipment to locate hidden slab, underground, and pipe leaks fast, then gives upfront repair pricing before any work starts. For an active leak, call now for immediate dispatch.
            </p>
            <p className="text-gray-600 mb-12">
              Most leaks are located within 1-3 hours. Simple wall or ceiling leaks often take less than an hour; slab leaks or underground leaks needing acoustic detection and thermal imaging can take 2-4 hours.
            </p>

            {/* Signs of Hidden Leaks */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs of Hidden Water Leaks</h2>
            <p className="text-lg text-gray-600 mb-6">
              Hidden water leaks can cause thousands of dollars in damage before you even notice them. Water leaking behind walls, under floors, or beneath your foundation slowly damages structural materials, promotes mold growth, and wastes water. Knowing the warning signs helps you catch leaks early and minimize damage. If you notice any of these signs in your Middlesex County home, contact Illyrian Plumber for professional leak detection.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Unexplained increase in water bills",
                "Sound of running water when all fixtures are off",
                "Wet spots, stains, or bubbling on walls",
                "Musty or moldy smell in certain areas",
                "Warm or hot spots on the floor (slab leak)",
                "Sudden drop in water pressure",
                "Cracks in foundation or walls",
                "Water meter spinning when nothing is running",
                "Damp or warped flooring",
                "Unexplained mold or mildew growth",
              ].map((sign, index) => (
                <div key={index} className="flex items-center gap-3 bg-amber-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mb-12">
              Learn more about the warning signs of serious plumbing issues in our detailed guide: <Link href="/blog/signs-of-slab-leak-sewer-line" className="text-red-700 hover:text-red-800 font-medium">Signs of a Slab Leak or Sewer Line Problem</Link>.
            </p>

            {/* Types of Leaks */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Water Leaks We Detect and Repair</h2>
            <p className="text-lg text-gray-600 mb-6">
              Not all water leaks are the same. Different types of leaks require different detection methods and repair approaches. We handle both detection and repair, and for most leaks we can complete both in the same visit; larger issues like a slab leak that needs repiping get a detailed plan and a scheduled follow-up.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Slab Leak Detection and Repair</h3>
                <p className="text-gray-600">Slab leaks occur when water supply lines or drain lines beneath your concrete foundation develop cracks or corrosion. They are among the most damaging types of leaks because they can undermine your foundation, cause uneven settling, and create conditions for mold growth. We use acoustic listening equipment and thermal imaging to pinpoint slab leaks precisely, minimizing the amount of concrete that needs to be accessed for repair. In some cases, we may recommend rerouting the leaking pipe above the slab rather than repairing it under the concrete.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Wall and Ceiling Leaks</h3>
                <p className="text-gray-600">Leaks inside walls and ceilings are caused by failing pipe joints, corroded supply lines, or fixture connections that have loosened over time. These leaks often show up as water stains, bubbling paint, or soft drywall. We use moisture meters and thermal imaging to map the exact path of water behind walls and locate the source - which is not always where the visible damage appears. Water travels along pipes, joists, and framing before showing up at the lowest point.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Underground Water Line Leaks</h3>
                <p className="text-gray-600">The water service line running from the street to your home can develop leaks from corrosion, tree root intrusion, ground shifting, or age. Signs include wet spots in the yard, low water pressure, and unexplained water bill increases. We use acoustic leak detection to find the exact location of underground leaks so repairs can be made with minimal excavation.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Pinhole Leaks in Copper Pipes</h3>
                <p className="text-gray-600">Older homes in Middlesex County with copper plumbing are prone to pinhole leaks caused by internal corrosion. These tiny leaks can go undetected for months, slowly causing water damage inside walls. If your home has multiple pinhole leaks, it may be a sign that your copper pipes are failing and a whole house repiping should be considered.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="What sets our leak detection apart"
        items={[
          { icon: "eye", title: "Non-invasive first", description: "We find the exact leak location before opening any wall or floor, so you never pay to fix what wasn't broken." },
          { icon: "clock", title: "Same-day dispatch", description: "Call before noon and a licensed plumber is typically on-site with detection equipment the same day." },
          { icon: "dollar", title: "Upfront pricing", description: "You approve the quote before any work starts. The detection fee is credited toward the repair if you move forward." },
          { icon: "shield", title: "Licensed & insured", description: "NJ Master Plumber license, full insurance, and 750+ completed projects across Middlesex County since 2010." },
        ]}
      />

      {/* Technology + CTA -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Detection Methods */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Leak Detection Technology</h2>
            <p className="text-lg text-gray-600 mb-6">
              We invest in advanced, non-invasive leak detection equipment that allows us to find hidden leaks without tearing apart your home. Our technology locates leaks accurately so repairs are targeted and efficient.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Acoustic Listening Devices", desc: "Electronic amplification equipment that detects the sound of water escaping from pressurized pipes behind walls, under floors, and beneath concrete slabs. Different leak types produce distinct sound patterns." },
                { title: "Thermal Imaging Cameras", desc: "Infrared cameras detect temperature differences in walls and floors caused by water leaks. Hot water leaks and slab leaks create thermal signatures that are invisible to the naked eye but clearly visible on thermal imaging." },
                { title: "Moisture Meters", desc: "Professional-grade moisture detection instruments measure moisture levels inside walls, under floors, and in ceilings. This helps us map the extent of water damage and trace the leak back to its source." },
                { title: "Video Pipe Inspection", desc: "Waterproof camera systems that travel inside drain lines and sewer pipes to identify cracks, breaks, root intrusion, and other problems. This technology eliminates guesswork for underground pipe issues." },
              ].map((method, index) => (
                <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm">{method.desc}</p>
                </div>
              ))}
            </div>

            {/* Mid-page CTA Band */}
            <div className="bg-red-700 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Suspect a Hidden Water Leak?</h3>
              <p className="text-red-100 mb-6 max-w-xl mx-auto">Do not wait for a small leak to become a major problem. Call now for same-day leak detection service in Middlesex County.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
                  Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="What Middlesex County homeowners say"
        subheading="Real reviews from real leak detection and repair jobs."
      />

      {/* Process + costs + FAQ + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Detection Process */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Leak Detection Process</h2>
            <p className="text-lg text-gray-600 mb-6">
              When you call Illyrian Plumber for leak detection, we follow a systematic process to find the leak quickly and accurately. Here is what to expect.
            </p>
            <div className="space-y-4 mb-12">
              {[
                { step: "1", title: "Initial Assessment", desc: "We discuss your symptoms - water bill increases, visible damage, sounds, or smells. This helps us determine which detection methods will be most effective and where to focus our search." },
                { step: "2", title: "Visual Inspection", desc: "We inspect visible plumbing, check under sinks, examine water heater connections, and look for signs of moisture, staining, or damage throughout your home." },
                { step: "3", title: "Pressure Testing", desc: "We test your water system pressure to determine if there is a leak on the supply side. A pressure drop over time confirms an active leak in the pressurized system." },
                { step: "4", title: "Electronic Detection", desc: "Using acoustic devices, thermal imaging, and moisture meters, we systematically scan the areas of concern to pinpoint the exact location and extent of the leak." },
                { step: "5", title: "Leak Location Report", desc: "We mark the exact location of the leak and explain what we found. We show you the evidence from our detection equipment so you understand the problem." },
                { step: "6", title: "Repair Options and Quote", desc: "We provide repair options with upfront pricing. For most leaks, we can complete the repair the same day. For larger issues, we schedule the work at your convenience." },
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

            {/* Water Leak Damage Costs */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Real Cost of Ignoring Water Leaks</h2>
            <p className="text-lg text-gray-600 mb-6">
              Many homeowners delay leak detection because the visible signs seem minor. However, hidden water leaks cause damage that compounds over time, making early detection far more cost-effective than waiting.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { title: "Water Waste", desc: "A small leak wastes 2,000-3,000 gallons per month, adding $20-$50+ to monthly water bills" },
                { title: "Structural Damage", desc: "Water weakens framing, subfloors, and drywall. Slab leaks can undermine foundations" },
                { title: "Mold Growth", desc: "Moisture behind walls creates ideal conditions for mold within 24-48 hours of sustained dampness" },
                { title: "Flooring Damage", desc: "Water under hardwood, laminate, or carpet causes warping, buckling, and must be replaced" },
                { title: "Electrical Hazards", desc: "Water reaching electrical wiring or outlets creates serious safety risks" },
                { title: "Decreased Property Value", desc: "Unresolved water damage and mold issues can significantly reduce your home value" },
              ].map((item, index) => (
                <div key={index} className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              The scale of the waste is well documented: the EPA&apos;s WaterSense program estimates the average U.S. household&apos;s leaks can waste more than 10,000 gallons of water every year (
              <a href="https://www.epa.gov/watersense/fix-leak-week" target="_blank" rel="noopener" className="text-red-700 hover:text-red-800 underline">source: EPA WaterSense</a>
              ). Most New Jersey homeowners insurance policies cover the resulting water damage to flooring, walls, and belongings, but typically not the cost of the detection itself or repairing the pipe - worth confirming with your carrier if you suspect a slab leak.
            </p>

            {/* NJ Considerations */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Water Leak Concerns for New Jersey Homeowners</h2>
            <p className="text-lg text-gray-600 mb-6">
              New Jersey homes face specific water leak risks related to our climate, aging infrastructure, and local conditions.
            </p>
            <div className="space-y-4 mb-12">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Freeze-Thaw Cycles</h3>
                <p className="text-gray-600">New Jersey winters bring repeated freeze-thaw cycles that stress water pipes, especially in unheated spaces like crawl spaces, attics, and exterior walls. Frozen pipes can crack or burst, causing hidden leaks that may not be noticed until the pipe thaws. Low water pressure after a cold snap is a warning sign that a pipe may have been damaged.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Aging Infrastructure in Middlesex County</h3>
                <p className="text-gray-600">Many homes in East Brunswick, Edison, Old Bridge, and surrounding Middlesex County towns were built in the 1950s-1970s with galvanized steel or early copper plumbing. These pipes are now 50-70 years old and increasingly prone to internal corrosion, pinhole leaks, and joint failures. If your home has original plumbing from this era, regular leak inspections are essential.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">High Water Table Areas</h3>
                <p className="text-gray-600">Parts of Middlesex County have high water tables that put additional pressure on underground pipes and foundations. Combined with New Jersey clay soils that expand and contract with moisture changes, this creates conditions where slab leaks and underground pipe failures are more common than in other regions.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Storm-Related Leak Risks</h3>
                <p className="text-gray-600">Heavy rainstorms and nor&apos;easters can overwhelm drainage systems and shift soil around underground pipes. After major storms, it is worth checking for signs of new leaks, especially if your home experienced any flooding or ground saturation. Sump pump failures during storms can also lead to water damage that masks plumbing leaks.</p>
              </div>
            </div>

            {/* Prevention Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h3 className="font-bold text-gray-900 mb-3">Preventing Water Leaks Before They Start</h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-700 text-sm">
                <li>• Schedule regular plumbing inspections</li>
                <li>• Monitor your water bill for unexplained jumps</li>
                <li>• Check under sinks and around water heaters for moisture</li>
                <li>• Know where your main water shut-off valve is</li>
                <li>• Insulate exposed pipes before winter</li>
                <li>• Consider a whole-house leak detection alert system</li>
              </ul>
            </div>

            {/* Low Water Pressure link */}
            <p className="text-gray-600 mb-12">
              Experiencing low water pressure? It could be a sign of a hidden leak. Read our guide: <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:text-red-800 font-medium">Why Is My Water Pressure Low?</Link>
            </p>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leak detection throughout Middlesex County</h3>
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
                  { label: "Emergency Plumbing", href: "/services/emergency-plumbing", description: "24/7 response for burst pipes and flooding" },
                  { label: "Whole House Repiping", href: "/services/whole-house-repiping", description: "For homes with repeated pinhole leaks" },
                  { label: "Water Heater Repair", href: "/services/water-heater-repair", description: "Leaking tanks and failed valves" },
                  { label: "Sump Pump Services", href: "/services/sump-pump-repair-install", description: "Install, repair, and battery backup" },
                  { label: "Plumbing Inspections", href: "/services/plumbing-safety-inspections", description: "Catch problems before they become leaks" },
                  { label: "Water Filtration Systems", href: "/services/water-filtration-system", description: "Protect pipes from hard water buildup" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Learn more about water leaks"
              tone="dark"
              items={[
                { label: "Signs of a Slab Leak or Sewer Line Problem", href: "/blog/signs-of-slab-leak-sewer-line", badge: "Guide" },
                { label: "Why Is My Water Pressure Low?", href: "/blog/why-is-water-pressure-low", badge: "Guide" },
                { label: "Why Is My Sewer Bill So High?", href: "/blog/why-is-my-sewer-bill-so-high", badge: "Guide" },
                { label: "How to Clean a Refrigerator Water Line", href: "/blog/how-to-clean-refrigerator-water-line", badge: "How-to" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Do Not Let a Hidden Leak Damage Your Home</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">Schedule professional leak detection today. We find the leak fast, explain your options, and provide upfront pricing for repairs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Request Service
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
