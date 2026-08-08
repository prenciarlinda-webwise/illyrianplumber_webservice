import { Metadata } from "next";
import Link from "next/link";
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
  title: "Water Filtration System Installation NJ - Illyrian Plumber",
  description: "Whole house water filtration, water softener, and reverse osmosis installation in East Brunswick and Middlesex County, NJ. Free consultations.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/water-filtration-system",
  },
  keywords: [
    "water filtration system",
    "whole house water filter",
    "water softener installation",
    "reverse osmosis system",
    "water treatment",
    "water purification",
    "water filter installation NJ",
    "water filtration installation East Brunswick",
    "home water filtration system",
    "well water filtration NJ",
    "water softener NJ",
    "drinking water filter installation",
    "water quality testing NJ",
    "Middlesex County water filtration",
    "sediment filter installation",
    "carbon water filter",
    "UV water purification",
  ],
  openGraph: {
    title: "Water Filtration System Installation NJ - Illyrian Plumber",
    description: "Whole house water filtration, water softener, and reverse osmosis installation in East Brunswick and Middlesex County, NJ. Free consultations.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/water-filtration-system",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/water-heater-repair-service.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber water filtration system installation in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Filtration System Installation NJ - Illyrian Plumber",
    description: "Whole house water filtration, water softener, and reverse osmosis installation in East Brunswick and Middlesex County, NJ. Free consultations.",
    images: ["https://www.illyrianplumber.com/images/water-heater-repair-service.jpg"],
  },
};

const faqData = [
  {
    question: "How much does a whole house water filtration system cost in NJ?",
    answer: "The cost of a whole house water filtration system in New Jersey typically ranges from $1,500 to $5,000 depending on the type of system, water quality issues being addressed, and the size of your home. Reverse osmosis systems for drinking water range from $300 to $1,500. We provide free water quality consultations with detailed quotes so you know exactly what to expect.",
  },
  {
    question: "What is the difference between a water filter and a water softener?",
    answer: "A water filter removes contaminants like chlorine, sediment, heavy metals, and chemicals from your water. A water softener specifically removes calcium and magnesium minerals that cause hard water. Many NJ homeowners benefit from both: a water softener to protect pipes and appliances, and a filtration system to improve water taste and safety.",
  },
  {
    question: "Is a reverse osmosis system worth it?",
    answer: "A reverse osmosis system removes up to 99% of dissolved contaminants including lead, fluoride, arsenic, nitrates, and pharmaceuticals. If you currently buy bottled water, an RO system pays for itself within 1-2 years while providing consistently pure drinking water. It is especially valuable for families with young children or anyone concerned about water purity.",
  },
  {
    question: "How long does water filtration system installation take?",
    answer: "A typical whole house water filtration system installation takes 3-5 hours. A water softener installation takes 2-4 hours. A reverse osmosis system under the kitchen sink takes 1-2 hours. More complex installations combining multiple systems may take a full day. We complete most installations in a single visit.",
  },
];

export default function WaterFiltrationPage() {
  const serviceSchema = getServiceSchema({
    name: "Water Filtration System Installation",
    description: "Professional water filtration system installation in East Brunswick, NJ. Whole house filters, water softeners, and reverse osmosis systems.",
    slug: "water-filtration-system",
  });

  const faqSchema = getFaqSchema(faqData);

  const howToSchema = getHowToSchema({
    name: "Our Water Filtration Installation Process",
    description: "Every water filtration installation begins with understanding your specific water quality issues. Here is what to expect when you work with Illyrian Plumber for your water treatment needs.",
    steps: [
      {
        name: "Water Quality Assessment",
        text: "We test your water to identify hardness levels, pH, chlorine content, iron, lead, and other contaminants. This tells us exactly what needs to be filtered and which system will solve your problems.",
      },
      {
        name: "System Recommendation",
        text: "Based on your water test results, household size, and budget, we recommend the right filtration solution. We explain each option, what it removes, and provide a detailed written quote.",
      },
      {
        name: "Professional Installation",
        text: "Our licensed plumbers install your water filtration system with proper connections, bypass valves, and drain lines. We ensure correct flow rates and system programming for optimal performance.",
      },
      {
        name: "System Testing and Calibration",
        text: "After installation, we test the treated water to verify the system is working correctly. We calibrate settings, check water pressure, and confirm contaminant removal.",
      },
      {
        name: "Maintenance Training",
        text: "We walk you through your new system, explain filter change schedules, and provide maintenance instructions. We also offer ongoing maintenance plans for worry-free operation.",
      },
    ],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Water Filtration System", path: "/services/water-filtration-system" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceHero
        tagline="Clean Water Solutions"
        heading="Water Filtration System Installation in NJ"
        subheading="Clean, safe water for your entire home. We install whole house water filtration systems, water softeners, and reverse osmosis systems to improve your water quality throughout Middlesex County, NJ."
        backgroundImage="/images/water-heater-repair-service.jpg"
        backgroundAlt="Water filtration system installation in East Brunswick NJ"
        service="Water Filtration System"
        bullets={["Whole House Filters", "Water Softeners", "Reverse Osmosis", "Licensed & Insured"]}
      />

      <StatsStrip />

      {/* Intro + signs + solutions -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* About Illyrian Plumber */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Illyrian Plumber: your local water treatment experts</h2>
              <p className="text-gray-700 leading-relaxed">
                Illyrian Plumber has been serving East Brunswick and Middlesex County, NJ with professional plumbing services for over {BUSINESS_INFO.stats.yearsExperience} years. Our licensed plumbers specialize in water filtration system installation, water softener setup, and reverse osmosis system installation. We test your water quality first, then recommend the right water treatment solution for your home and budget. Every installation is backed by our workmanship guarantee.
              </p>
            </div>

            {/* Signs You Need Water Treatment */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs you need a water filtration system</h2>
            <p className="text-lg text-gray-600 mb-6">
              Many homeowners in Middlesex County, NJ do not realize how much their water quality affects daily life. Municipal water in East Brunswick, Edison, and surrounding towns is treated at the plant, but it picks up contaminants as it travels through aging infrastructure to your home. Well water homes face additional challenges with naturally occurring minerals and bacteria. Here are the most common signs that your home needs a water filtration or water treatment system.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Hard water stains and scale on faucets",
                "Chlorine taste or chemical smell in tap water",
                "Rusty, brown, or discolored water",
                "Dry skin and brittle hair after showering",
                "White spots on dishes and glassware",
                "Appliances wearing out faster than expected",
                "Concerns about lead, PFAS, or other contaminants",
                "Well water with sulfur smell or iron staining",
              ].map((sign, index) => (
                <div key={index} className="flex items-center gap-3 bg-blue-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mb-12">
              If you are experiencing any of these issues, a professional water quality assessment can identify the specific contaminants in your water and help us recommend the right filtration solution. Learn more about the benefits in our guide: <Link href="/blog/best-whole-house-water-filtration-systems" className="text-red-700 hover:text-red-800 font-medium">Best Whole House Water Filtration Systems</Link>.
            </p>

            {/* Water Treatment Solutions */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Water treatment solutions we install</h2>
            <p className="text-lg text-gray-600 mb-6">
              There is no single water filtration system that solves every water quality problem. The right solution depends on what is in your water and what you want to achieve. Here are the main water treatment systems we install for homes throughout New Jersey.
            </p>
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Whole house water filtration systems</h3>
                <p className="text-gray-600 mb-3">A whole house water filter installs on your main water line and filters all the water entering your home. Every tap, shower, and appliance gets clean, filtered water. These systems typically use a multi-stage filtration process that removes sediment, chlorine, chemicals, and other contaminants. For NJ homes on municipal water, a whole house carbon filter is often the best starting point because it removes chlorine and chloramines that affect taste, smell, and skin irritation.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Sediment removal</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Chlorine reduction</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Chemical filtration</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Better tasting water</span>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Water softener installation</h3>
                <p className="text-gray-600 mb-3">Water softeners use an ion exchange process to remove calcium and magnesium minerals that cause hard water. Middlesex County water ranges from moderately hard to hard depending on the source. Hard water causes white scale buildup on fixtures, reduces water heater efficiency by up to 30%, leaves spots on dishes, and causes dry skin. A properly sized water softener protects your entire plumbing system, extends the life of water heaters and appliances, and makes cleaning easier.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Eliminates scale</span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Extends appliance life</span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Softer skin and hair</span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Less soap needed</span>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reverse osmosis systems</h3>
                <p className="text-gray-600 mb-3">Reverse osmosis (RO) is the most thorough water purification method available for residential use. An RO system forces water through a semi-permeable membrane that removes up to 99% of dissolved contaminants including lead, fluoride, arsenic, nitrates, pharmaceuticals, and PFAS. We install under-sink reverse osmosis systems with a dedicated drinking water faucet. This gives you bottled-water quality from your tap and eliminates the cost and waste of buying plastic water bottles.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">99% contaminant removal</span>
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Under-sink installation</span>
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Dedicated faucet</span>
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Removes lead and PFAS</span>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">UV water purification</h3>
                <p className="text-gray-600 mb-3">Ultraviolet (UV) disinfection systems kill 99.99% of bacteria, viruses, and other microorganisms without adding chemicals to your water. UV purification is essential for well water homes in NJ where bacterial contamination is a concern. The system installs inline and uses UV light to destroy harmful organisms as water flows through. No chemicals, no taste change, and no water waste.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">Kills 99.99% bacteria</span>
                  <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">Chemical-free</span>
                  <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">Ideal for well water</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-12">
              Not sure which system is right for your home? Read our detailed comparison: <Link href="/blog/whole-house-water-filter-worth-it" className="text-red-700 hover:text-red-800 font-medium">Is a Whole House Water Filter Worth It?</Link>
            </p>

            {/* Mid-page CTA Band */}
            <div className="bg-red-700 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Get a free water quality consultation</h3>
              <p className="text-red-100 mb-6 max-w-xl mx-auto">We test your water, identify contaminants, and recommend the best filtration solution for your home and budget. No obligation.</p>
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

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why homeowners trust us with their water quality"
        subheading="Six reasons Middlesex County chooses Illyrian Plumber for filtration and softening."
        items={[
          { icon: "eye", title: "We test before we treat", description: "We test your water for hardness, pH, chlorine, iron, and lead before recommending anything, so you get a system sized to your actual water quality." },
          { icon: "shield", title: "Licensed and insured", description: "NJ Master Plumber license and full insurance back every filtration and softener installation we complete." },
          { icon: "dollar", title: "Free water quality consultations", description: "In-home water testing and a written quote come at no cost, with no obligation to buy." },
          { icon: "wrench", title: "Workmanship guarantee", description: "Every installation is backed by our guarantee, plus the full manufacturer warranty on your equipment." },
          { icon: "home", title: "Local to Middlesex County", description: "Based in East Brunswick, we know the hard water and well water issues specific to Central Jersey homes." },
          { icon: "clock", title: "Single-visit installation", description: "Most whole house filters and softeners install in one visit, typically 2 to 5 hours depending on system complexity." },
        ]}
      />

      {/* Process + local issues + cost + benefits + maintenance -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Installation Process */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our water filtration installation process</h2>
            <p className="text-lg text-gray-600 mb-6">
              Every water filtration installation begins with understanding your specific water quality issues. Here is what to expect when you work with Illyrian Plumber for your water treatment needs.
            </p>
            <div className="space-y-4 mb-12">
              {[
                { step: "1", title: "Water quality assessment", desc: "We test your water to identify hardness levels, pH, chlorine content, iron, lead, and other contaminants. This tells us exactly what needs to be filtered and which system will solve your problems." },
                { step: "2", title: "System recommendation", desc: "Based on your water test results, household size, and budget, we recommend the right filtration solution. We explain each option, what it removes, and provide a detailed written quote." },
                { step: "3", title: "Professional installation", desc: "Our licensed plumbers install your water filtration system with proper connections, bypass valves, and drain lines. We ensure correct flow rates and system programming for optimal performance." },
                { step: "4", title: "System testing and calibration", desc: "After installation, we test the treated water to verify the system is working correctly. We calibrate settings, check water pressure, and confirm contaminant removal." },
                { step: "5", title: "Maintenance training", desc: "We walk you through your new system, explain filter change schedules, and provide maintenance instructions. We also offer ongoing maintenance plans for worry-free operation." },
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

            {/* Common Water Problems in NJ */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common water quality issues in New Jersey</h2>
            <p className="text-lg text-gray-600 mb-6">
              New Jersey has some unique water quality challenges that make water filtration particularly important for homeowners in Middlesex County and surrounding areas.
            </p>
            <div className="space-y-4 mb-12">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Hard water throughout Middlesex County</h3>
                <p className="text-gray-600">Water hardness in East Brunswick, Edison, Old Bridge, and surrounding towns ranges from 7-12 grains per gallon. This level of hardness causes significant scale buildup in water heaters, reduces the lifespan of dishwashers and washing machines, and leaves mineral deposits on everything water touches. A water softener is the most effective solution for hard water problems.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Chlorine and disinfection byproducts</h3>
                <p className="text-gray-600">Municipal water systems in NJ use chlorine or chloramines to disinfect water. While this keeps water safe at the treatment plant, the chlorine remains in your water when it reaches your home. It affects the taste and smell of drinking water, dries out skin and hair, and can create disinfection byproducts. A whole house carbon filter removes chlorine from every water source in your home.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Lead in older homes</h3>
                <p className="text-gray-600">Many homes in Middlesex County built before 1986 have lead solder in copper pipe joints or lead service lines connecting to the municipal water main. Even low levels of lead are harmful, especially for children. A reverse osmosis system is the most reliable way to remove lead from drinking water at the point of use.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">PFAS contamination concerns</h3>
                <p className="text-gray-600">PFAS (per- and polyfluoroalkyl substances) have been detected in water supplies throughout New Jersey. These chemicals do not break down naturally and can accumulate in the body over time. Reverse osmosis and activated carbon filtration systems are effective at removing PFAS from drinking water.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Well water challenges</h3>
                <p className="text-gray-600">Homes on private wells in Monroe Township, South Brunswick, and other areas of Middlesex County face challenges with iron, manganese, sulfur bacteria, and potential bacterial contamination. Well water requires testing and often needs a multi-stage filtration approach including sediment filters, iron removal, and UV disinfection.</p>
              </div>
            </div>

            {/* Cost Guide */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Water filtration system cost guide</h2>
            <p className="text-lg text-gray-600 mb-6">
              The cost of water filtration system installation depends on the type of system, the complexity of installation, and any additional plumbing work needed. Here is a general overview of what to expect.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Whole house carbon filter", range: "$1,000 - $3,000", note: "Removes chlorine, chemicals, and sediment from all water" },
                { title: "Water softener", range: "$1,500 - $4,000", note: "Eliminates hard water minerals, protects plumbing" },
                { title: "Reverse osmosis system", range: "$300 - $1,500", note: "Under-sink drinking water purification" },
                { title: "UV disinfection system", range: "$500 - $1,500", note: "Kills bacteria and viruses for well water" },
                { title: "Whole house + softener combo", range: "$2,500 - $6,000", note: "Complete water treatment for the entire home" },
                { title: "Well water treatment system", range: "$3,000 - $8,000", note: "Multi-stage system for private well water" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-red-700 font-semibold text-lg mb-1">{item.range}</p>
                  <p className="text-gray-600 text-sm">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mb-12">
              These are general price ranges. Your actual cost depends on your specific water quality issues, home size, and plumbing configuration. We provide free assessments and written quotes with no hidden fees.
            </p>

            {/* Benefits */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of professional water treatment</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { title: "Healthier drinking water", desc: "Remove harmful contaminants including lead, PFAS, chlorine, and bacteria for safer water at every tap" },
                { title: "Better taste and smell", desc: "Eliminate chlorine taste, metallic flavors, and sulfur odors for water that tastes clean and fresh" },
                { title: "Protect your plumbing", desc: "Reduce scale buildup in pipes, water heaters, and fixtures that causes corrosion and blockages" },
                { title: "Extend appliance life", desc: "Water heaters, dishwashers, and washing machines last significantly longer with filtered, softened water" },
                { title: "Softer skin and hair", desc: "Removing chlorine and hard water minerals reduces skin dryness, eczema flare-ups, and hair damage" },
                { title: "Save money long-term", desc: "Eliminate bottled water purchases, reduce soap usage, and avoid premature appliance replacement" },
              ].map((benefit, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>

            {/* Maintenance */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Water filtration system maintenance</h2>
            <p className="text-lg text-gray-600 mb-6">
              All water treatment systems need regular maintenance to keep performing correctly, and New Jersey&apos;s mineral-heavy water makes this especially important. Water softeners also need salt added roughly once a month to keep the ion exchange process working. We offer maintenance plans so you never have to track these schedules yourself.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Recommended replacement schedule</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { task: "Replace sediment pre-filter", desc: "Prevents clogging and maintains water pressure", frequency: "Every 3-6 months" },
                  { task: "Replace carbon filter", desc: "Keeps chlorine and odor removal effective", frequency: "Every 6-12 months" },
                  { task: "Replace filtration tank media", desc: "Whole house system media loses effectiveness over time", frequency: "Every 5-10 years" },
                  { task: "Replace RO membrane", desc: "Maintains 99% contaminant removal rate", frequency: "Every 2-3 years" },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-3">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-semibold text-gray-900">{item.task}</p>
                      <span className="text-blue-700 text-sm font-medium">{item.frequency}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="Real reviews from water filtration and softener installs"
        subheading="Homeowners across Middlesex County trust us to get their water right."
      />

      {/* FAQ + service areas + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Water filtration installation throughout Middlesex County</h3>
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
                  { label: "Water Heater Repair", href: "/services/water-heater-repair", description: "Same-day repair for all brands" },
                  { label: "Water Heater Replacement", href: "/services/water-heater-replacement", description: "Upgrade an aging or failing tank" },
                  { label: "Tankless Water Heater Installation", href: "/services/tankless-water-heater-installation", description: "Endless hot water, protected from scale" },
                  { label: "Whole House Repiping", href: "/services/whole-house-repiping", description: "For homes with corroded or failing pipe" },
                  { label: "Water Leak Detection", href: "/services/water-leak-detection", description: "Find hidden leaks before they flood" },
                  { label: "Plumbing Inspections", href: "/services/plumbing-safety-inspections", description: "Catch problems before they become costly" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Learn more about water filtration"
              tone="dark"
              items={[
                { label: "Best Whole House Water Filtration Systems", href: "/blog/best-whole-house-water-filtration-systems", badge: "Guide" },
                { label: "Is a Whole House Water Filter Worth It?", href: "/blog/whole-house-water-filter-worth-it", badge: "Guide" },
                { label: "How to Clean a Refrigerator Water Line", href: "/blog/how-to-clean-refrigerator-water-line", badge: "How-to" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Improve your water quality today</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">Schedule a free water quality consultation. We will test your water, explain your options, and provide an honest recommendation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Request Free Consultation
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
