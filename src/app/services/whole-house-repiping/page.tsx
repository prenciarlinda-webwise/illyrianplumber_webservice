import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";
import {
  getServiceSchema,
  getFaqSchema,
  getBreadcrumbSchema,
  getHowToSchema,
} from "@/lib/schemas";
import ServiceHero from "@/components/ServiceHero";
import Testimonials from "@/components/Testimonials";
import DifferentiatorGrid from "@/components/DifferentiatorGrid";
import StatsStrip from "@/components/StatsStrip";
import LinkCardGrid from "@/components/LinkCardGrid";

export const metadata: Metadata = {
  title: "Whole House Repiping Services in NJ - Illyrian Plumber",
  description: "Whole house repiping in East Brunswick and Middlesex County, NJ. PEX and copper pipe replacement for older homes with free written quotes. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/whole-house-repiping",
  },
  keywords: [
    "whole house repiping",
    "home repiping",
    "repiping cost",
    "pipe replacement",
    "repipe house",
    "repiping service",
    "PEX repiping",
    "copper repiping",
    "repiping NJ",
    "whole house repiping cost NJ",
    "galvanized pipe replacement",
    "polybutylene pipe replacement",
    "repiping East Brunswick NJ",
    "Middlesex County repiping",
    "water pipe replacement",
    "home repiping service NJ",
    "old pipe replacement",
  ],
  openGraph: {
    title: "Whole House Repiping Services in NJ - Illyrian Plumber",
    description: "Whole house repiping in East Brunswick and Middlesex County, NJ. PEX and copper pipe replacement for older homes with free written quotes.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/whole-house-repiping",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/copper-pipe-repiping-service.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber whole house repiping service in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whole House Repiping Services in NJ - Illyrian Plumber",
    description: "Whole house repiping in East Brunswick and Middlesex County, NJ. PEX and copper pipe replacement for older homes with free written quotes.",
    images: ["https://www.illyrianplumber.com/images/copper-pipe-repiping-service.jpg"],
  },
};

const faqData = [
  {
    question: "How much does whole house repiping cost in NJ?",
    answer: "Whole house repiping costs in New Jersey typically range from $4,000 to $15,000 depending on the size of your home, number of fixtures, pipe material chosen (PEX or copper), accessibility of existing pipes, and the number of stories. A small 2-bedroom home may cost $4,000-$6,000 with PEX, while a large 4-bedroom home with copper could cost $10,000-$15,000. We provide free in-home assessments with detailed written quotes.",
  },
  {
    question: "How long does whole house repiping take?",
    answer: "Most whole house repiping projects take 2-5 days depending on the size and complexity of your home. A small single-story home may be completed in 2-3 days. A larger two-story home with multiple bathrooms typically takes 3-5 days. We work efficiently to minimize disruption and restore your water service as quickly as possible.",
  },
  {
    question: "Will repiping damage my walls and ceilings?",
    answer: "Modern repiping techniques minimize wall openings. We create small access holes at strategic locations to route new pipes, and we use flexible PEX tubing that can be fished through walls with fewer openings than rigid copper. After the repiping is complete, we patch all access holes. Many homeowners choose to have the patching done by their own painter or contractor for a seamless finish.",
  },
  {
    question: "Can I stay in my home during repiping?",
    answer: "Yes. Most homeowners stay in their home during the repiping process. We work section by section, so you may be without water for portions of each day, but we restore water service at the end of each work day. We also protect your home with drop cloths and clean up daily.",
  },
];

export default function WholeHouseRepipingPage() {
  const serviceSchema = getServiceSchema({
    name: "Whole House Repiping",
    description: "Complete home repiping services in East Brunswick, NJ. Replace old, corroded pipes with modern materials. Expert installation, minimal disruption.",
    slug: "whole-house-repiping",
  });

  const faqSchema = getFaqSchema(faqData);

  const howToSchema = getHowToSchema({
    name: "Our Whole House Repiping Process",
    description: "Repiping your home is a significant project, and we take a careful, systematic approach to ensure everything is done right with minimal disruption to your daily life. Here is what to expect when you work with Illyrian Plumber.",
    steps: [
      {
        name: "Free Inspection and Planning",
        text: "We inspect all accessible plumbing, identify pipe materials and condition, count fixtures, and assess wall and ceiling accessibility. We then create a detailed plan and provide a written quote covering materials, labor, permits, and timeline.",
      },
      {
        name: "Permit Acquisition",
        text: "We pull all required plumbing permits from your local municipality. In NJ, repiping requires permits and inspections to ensure the work meets current plumbing codes. We handle the entire permit process for you.",
      },
      {
        name: "Home Preparation",
        text: "We protect your home with drop cloths, dust barriers, and floor protection. We work section by section, shutting off water only to the areas being worked on when possible. We explain the daily plan so you know what to expect.",
      },
      {
        name: "Old Pipe Removal and New Installation",
        text: "We create strategic access points in walls and ceilings, remove old pipes, and install new PEX or copper supply lines to every fixture in your home. PEX flexibility allows us to route pipes with fewer wall openings than rigid materials.",
      },
      {
        name: "Fixture Connections and Pressure Testing",
        text: "All fixtures are reconnected to the new pipe system. We pressure test every line to verify there are no leaks and ensure proper water flow to all fixtures throughout the home.",
      },
      {
        name: "Wall Patching and Cleanup",
        text: "We patch all access holes, clean up thoroughly, and leave your home in good condition. We recommend waiting 2-3 weeks before painting patched areas to allow joint compound to fully cure.",
      },
      {
        name: "Final Inspection",
        text: "We schedule and attend the required municipal inspection. The inspector verifies the work meets code, and you receive documentation that the repiping was done properly - important for insurance and resale.",
      },
    ],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Whole House Repiping", path: "/services/whole-house-repiping" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceHero
        tagline="Complete Pipe Replacement"
        heading="Whole House Repiping in NJ"
        subheading="Complete home repiping for older homes, renovations, and pipe failure. We replace deteriorating pipes with modern, long-lasting PEX or copper for decades of reliable service throughout Middlesex County."
        backgroundImage="/images/copper-pipe-repiping-service.jpg"
        backgroundAlt="Whole house repiping service in East Brunswick NJ"
        service="Whole House Repiping"
        bullets={["PEX & Copper Options", "Minimal Disruption", "Free Estimates", "Licensed & Insured"]}
      />

      <StatsStrip />

      {/* Intro + signs + pipe types -- narrow readable column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* About Illyrian Plumber */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Illyrian Plumber: expert home repiping services</h2>
              <p className="text-gray-700 leading-relaxed">
                Illyrian Plumber provides professional whole house repiping services throughout East Brunswick and Middlesex County, NJ. With over {BUSINESS_INFO.stats.yearsExperience} years of experience and {BUSINESS_INFO.stats.projectsCompleted} completed projects, our licensed plumbers specialize in replacing old, corroded galvanized steel, polybutylene, and lead pipes with modern PEX or copper piping systems. We handle everything from permits to final inspection, with minimal disruption to your daily life.
              </p>
            </div>

            {/* Signs You Need Repiping */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs your home needs repiping</h2>
            <p className="text-lg text-gray-600 mb-6">
              Older homes in Middlesex County, particularly those built before 1970, often have plumbing systems that are nearing or past their expected lifespan. Galvanized steel pipes, which were standard in homes built from the 1920s through 1960s, typically last 40-60 years before internal corrosion becomes severe enough to affect water quality and pressure. Here are the warning signs that indicate your home may need complete repiping.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Rusty, brown, or discolored water from taps",
                "Low water pressure throughout the home",
                "Frequent pipe leaks in different locations",
                "Visible corrosion or green patina on pipes",
                "Home built before 1970 with original plumbing",
                "Polybutylene (gray plastic) pipes present",
                "Lead pipes or lead solder joints",
                "Planning a major renovation or addition",
                "Water tastes metallic or has an odor",
                "Insurance company requiring pipe replacement",
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
              Low water pressure is one of the first signs of deteriorating pipes. Learn about all the causes in our guide: <Link href="/blog/why-is-water-pressure-low" className="text-red-700 hover:text-red-800 font-medium">Why Is My Water Pressure Low?</Link>
            </p>

            {/* Types of Pipes We Replace */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of pipes we replace</h2>
            <p className="text-lg text-gray-600 mb-6">
              Different eras of home construction used different pipe materials, each with their own failure modes and concerns. Here are the most common pipe types we replace in Middlesex County homes.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Galvanized steel pipes</h3>
                <p className="text-gray-600">The most common pipe material in homes built from the 1920s through the 1960s. Galvanized pipes corrode from the inside out over 40-60 years, restricting water flow and introducing rust into your water. The corrosion builds up layer by layer, gradually reducing pipe diameter until water pressure drops noticeably. By the time you see rusty water or low pressure, the pipes are significantly deteriorated throughout the home.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Polybutylene pipes</h3>
                <p className="text-gray-600">Used extensively in NJ homes built from the late 1970s through the mid-1990s. Polybutylene (gray plastic) pipes were once considered a modern alternative but are now known to fail prematurely. Chlorine in municipal water degrades the pipe material from the inside, causing it to become brittle and crack. Unlike metal pipes that develop slow leaks, polybutylene often fails catastrophically, bursting without warning and causing major water damage.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Lead pipes and lead solder</h3>
                <p className="text-gray-600">Homes built before 1986 may have lead service lines or copper pipes joined with lead solder. Lead in drinking water is a serious health concern, especially for children. The EPA and New Jersey DEP have strict guidelines on lead levels in drinking water. If your home has lead pipes or lead solder, repiping eliminates this health hazard permanently.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Deteriorating copper pipes</h3>
                <p className="text-gray-600">While copper typically lasts 50+ years, aggressive water chemistry in some NJ municipalities can cause pitting corrosion that leads to pinhole leaks. If your home has had multiple pinhole leak repairs in different locations, the copper piping may be failing systemically and repiping is more cost-effective than ongoing spot repairs.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="What makes our repiping process different"
        subheading="Repiping is disruptive by nature. Here's how we keep it manageable for your household."
        items={[
          { icon: "wrench", title: "PEX and copper, your choice", description: "We install both pipe materials and help you choose based on budget and priorities, not a one-size-fits-all default." },
          { icon: "clock", title: "Water restored every night", description: "We work section by section and restore water service at the end of each work day, even in the middle of a multi-day project." },
          { icon: "shield", title: "Permits handled for you", description: "We pull every required Middlesex County plumbing permit and schedule the inspections, so paperwork is never your problem." },
          { icon: "dollar", title: "Free written assessment", description: "A licensed plumber inspects your existing pipes and gives a detailed, itemized quote before any work starts." },
          { icon: "home", title: "Local to Middlesex County", description: `${BUSINESS_INFO.stats.yearsExperience} years and ${BUSINESS_INFO.stats.projectsCompleted} projects completed for homes across East Brunswick, Edison, and surrounding towns.` },
          { icon: "eye", title: "Minimal wall openings", description: "Flexible PEX routing and strategic access points mean less drywall repair by the time the job is done." },
        ]}
      />

      {/* Materials + process + cost + gallery -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Pipe Materials We Use */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pipe materials we install</h2>
            <p className="text-lg text-gray-600 mb-6">
              We offer two proven pipe materials for whole house repiping. Both meet all New Jersey plumbing codes and provide decades of reliable service. During your free assessment, we will explain the advantages of each and help you choose the right material for your home and budget.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">PEX piping</h3>
                <p className="text-gray-600 mb-3">PEX (cross-linked polyethylene) is the most popular choice for modern repiping. It is flexible, making it easier to route through walls with fewer access holes. PEX resists corrosion and scale buildup, handles freeze-thaw cycles better than rigid pipes, and costs significantly less than copper. PEX comes with a 25+ year warranty and is approved for both hot and cold water lines.</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- More affordable than copper</li>
                  <li>- Faster installation with fewer wall openings</li>
                  <li>- Freeze-resistant flexibility</li>
                  <li>- Corrosion and scale resistant</li>
                  <li>- 25+ year warranty</li>
                </ul>
                <p className="mt-3 text-sm text-blue-700 font-medium">Most popular choice for NJ repiping</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Copper piping</h3>
                <p className="text-gray-600 mb-3">Copper is the traditional premium pipe material with a proven track record spanning over a century. It offers superior durability, natural antibacterial properties, and excellent heat conductivity for hot water lines. Copper adds value to your home and is preferred by many homebuyers. Properly installed copper piping lasts 50+ years.</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- 50+ year proven lifespan</li>
                  <li>- Adds home resale value</li>
                  <li>- Natural antibacterial properties</li>
                  <li>- Excellent for hot water lines</li>
                  <li>- Recyclable and environmentally friendly</li>
                </ul>
                <p className="mt-3 text-sm text-gray-500 font-medium">Premium option, higher investment</p>
              </div>
            </div>

            {/* Mid-page CTA Band */}
            <div className="bg-red-700 text-white rounded-xl p-8 mb-12 text-center">
              <h3 className="text-2xl font-bold mb-3">Get a free repiping assessment</h3>
              <p className="text-red-100 mb-6 max-w-xl mx-auto">We inspect your existing pipes, explain your options, and provide a detailed written quote with no obligation.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
                  Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Repiping Process */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our whole house repiping process</h2>
            <p className="text-lg text-gray-600 mb-6">
              Repiping your home is a significant project, and we take a careful, systematic approach to ensure everything is done right with minimal disruption to your daily life. Here is what to expect when you work with Illyrian Plumber.
            </p>
            <div className="space-y-4 mb-12">
              {[
                { step: "1", title: "Free inspection and planning", desc: "We inspect all accessible plumbing, identify pipe materials and condition, count fixtures, and assess wall and ceiling accessibility. We then create a detailed plan and provide a written quote covering materials, labor, permits, and timeline." },
                { step: "2", title: "Permit acquisition", desc: "We pull all required plumbing permits from your local municipality. In NJ, repiping requires permits and inspections to ensure the work meets current plumbing codes. We handle the entire permit process for you." },
                { step: "3", title: "Home preparation", desc: "We protect your home with drop cloths, dust barriers, and floor protection. We work section by section, shutting off water only to the areas being worked on when possible. We explain the daily plan so you know what to expect." },
                { step: "4", title: "Old pipe removal and new installation", desc: "We create strategic access points in walls and ceilings, remove old pipes, and install new PEX or copper supply lines to every fixture in your home. PEX flexibility allows us to route pipes with fewer wall openings than rigid materials." },
                { step: "5", title: "Fixture connections and pressure testing", desc: "All fixtures are reconnected to the new pipe system. We pressure test every line to verify there are no leaks and ensure proper water flow to all fixtures throughout the home." },
                { step: "6", title: "Wall patching and cleanup", desc: "We patch all access holes, clean up thoroughly, and leave your home in good condition. We recommend waiting 2-3 weeks before painting patched areas to allow joint compound to fully cure." },
                { step: "7", title: "Final inspection", desc: "We schedule and attend the required municipal inspection. The inspector verifies the work meets code, and you receive documentation that the repiping was done properly, which matters for insurance and resale." },
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

            {/* Cost Guide */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Whole house repiping cost factors</h2>
            <p className="text-lg text-gray-600 mb-6">
              The cost of repiping your home depends on several factors. Here is what influences the price so you can understand what to expect during your free estimate.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { title: "Home size", desc: "Larger homes with more bathrooms and fixtures require more pipe material and labor" },
                { title: "Number of stories", desc: "Multi-story homes require more vertical pipe runs and may need more wall access" },
                { title: "Pipe material choice", desc: "PEX is more affordable than copper. PEX repiping typically costs 30-40% less" },
                { title: "Accessibility", desc: "Finished basements, slab foundations, and limited wall access increase labor time" },
                { title: "Number of fixtures", desc: "Each bathroom, kitchen, laundry, and outdoor connection adds to the scope" },
                { title: "Permit and inspection fees", desc: "Required permits and inspections vary by municipality in Middlesex County" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Gallery */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our repiping work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: "/images/copper-pipe-repiping-service.jpg", alt: "Copper pipe repiping" },
                { src: "/images/water-heater-repair-service.jpg", alt: "Water line connections" },
                { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Pipe pressure testing" },
                { src: "/images/water-heater-maintenance-parts.jpg", alt: "Plumbing parts installation" },
                { src: "/images/tankless-water-heater-installation.jpg", alt: "Water heater pipe connections" },
                { src: "/images/professional-plumbing-services.jpg", alt: "Professional plumbing work" },
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

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="What Middlesex County homeowners say"
        subheading="Real reviews from real repiping and pipe replacement jobs."
      />

      {/* NJ considerations + FAQ + service areas + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* NJ Considerations */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Repiping considerations for NJ homeowners</h2>
            <p className="text-lg text-gray-600 mb-6">
              New Jersey has specific factors that make repiping particularly important for homeowners in Middlesex County and surrounding areas.
            </p>
            <div className="space-y-4 mb-12">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Freeze protection</h3>
                <p className="text-gray-600">New Jersey winters bring temperatures well below freezing. Old galvanized pipes in exterior walls and unheated spaces are especially vulnerable to freezing and bursting. PEX piping is more freeze-resistant than rigid pipes because it can expand slightly without cracking. During repiping, we also reroute pipes away from exterior walls and unheated spaces when possible. Read more about protecting your pipes: <Link href="/blog/frozen-pipes-prevention-repair" className="text-red-700 hover:text-red-800 font-medium">Frozen Pipes Prevention and Repair</Link>.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">NJ plumbing code requirements</h3>
                <p className="text-gray-600">New Jersey follows the Uniform Construction Code, which requires permits and inspections for repiping work. This protects homeowners by ensuring the work meets safety and quality standards. All repiping must be done by licensed plumbers. We handle the entire permit process and ensure your repiping meets all current code requirements, and the permit cost is included in our quotes so it never shows up as a surprise line item later.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Insurance and real estate impact</h3>
                <p className="text-gray-600">Homeowners insurance companies in NJ are increasingly aware of the risks posed by galvanized and polybutylene pipes. Some insurers require replacement of polybutylene pipes as a condition of coverage. When selling your home, a repiped plumbing system is a significant selling point that can increase your home value and eliminate a common inspection issue.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Middlesex County home ages</h3>
                <p className="text-gray-600">Many homes in East Brunswick, Edison, Old Bridge, North Brunswick, and South Brunswick were built during the post-war housing boom of the 1950s-1960s. These homes typically have galvanized steel pipes that are now 60-70 years old, well past their expected lifespan. Homes built in the 1980s-1990s may have polybutylene pipes that are also due for replacement. A plumbing inspection can determine the condition of your pipes and whether repiping is needed.</p>
              </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Repiping services throughout Middlesex County</h3>
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
                  { label: "Water Leak Detection", href: "/services/water-leak-detection", description: "Find hidden leaks before they force a full repipe" },
                  { label: "Water Heater Repair", href: "/services/water-heater-repair", description: "Same-day repair for all major brands" },
                  { label: "Water Heater Replacement", href: "/services/water-heater-replacement", description: "Upgrade an aging tank during your repiping project" },
                  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling", description: "New pipe runs for full bathroom renovations" },
                  { label: "Plumbing Safety Inspections", href: "/services/plumbing-safety-inspections", description: "Catch pipe problems before they become emergencies" },
                  { label: "Water Filtration Systems", href: "/services/water-filtration-system", description: "Protect new pipes from hard water buildup" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Learn more about repiping"
              tone="dark"
              items={[
                { label: "Why Is My Water Pressure Low?", href: "/blog/why-is-water-pressure-low", badge: "Guide" },
                { label: "Frozen Pipes Prevention and Repair", href: "/blog/frozen-pipes-prevention-repair", badge: "Guide" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to repipe your home?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">Get a free repiping assessment and detailed quote. We will explain your options and provide honest recommendations.</p>
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
