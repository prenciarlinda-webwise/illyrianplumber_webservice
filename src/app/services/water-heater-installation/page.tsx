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
  title: "Same-Day Water Heater Installation NJ - Illyrian Plumber",
  description: "Professional water heater installation in East Brunswick and Middlesex County, NJ. Gas, electric, and tankless options. Same-day service, licensed plumbers.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/water-heater-installation",
  },
  keywords: [
    "water heater installation",
    "water heater installation east brunswick nj",
    "water heater installation nj",
    "water heater installation cost",
    "water heater installer near me",
    "new water heater installation",
    "gas water heater installation",
    "electric water heater installation",
    "50 gallon water heater installation",
    "water heater installation cost nj",
    "how much to install water heater",
    "water heater installation near me",
    "professional water heater installation",
    "same day water heater installation",
    "residential water heater installation nj",
  ],
  openGraph: {
    title: "Same-Day Water Heater Installation NJ - Illyrian Plumber",
    description: "Professional water heater installation in East Brunswick and Middlesex County, NJ. Gas, electric, and tankless options. Same-day service, licensed plumbers.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/water-heater-installation",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/water-heater-repair-service.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber water heater installation service in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Same-Day Water Heater Installation NJ - Illyrian Plumber",
    description: "Professional water heater installation in East Brunswick and Middlesex County, NJ. Gas, electric, and tankless options. Same-day service, licensed plumbers.",
    images: ["https://www.illyrianplumber.com/images/water-heater-repair-service.jpg"],
  },
};

const faqData = [
  {
    question: "How much does water heater installation cost in NJ?",
    answer: "Water heater installation cost in New Jersey ranges from $1,200 to $3,500 for a standard 40-50 gallon tank unit including labor and materials. Tankless water heater installation costs $2,800 to $6,500 depending on the model and whether gas line or venting upgrades are needed. We provide free estimates with transparent, upfront pricing.",
  },
  {
    question: "How long does water heater installation take?",
    answer: "A standard tank water heater installation takes 2-4 hours. Tankless water heater installation takes 4-8 hours, especially if gas line upgrades, new venting, or electrical work is required. If we are replacing an existing unit, add about 30-60 minutes for draining and removing the old water heater. Same-day installation is available for standard tank units.",
  },
  {
    question: "Do I need a permit to install a water heater in NJ?",
    answer: "Yes, New Jersey requires a plumbing permit for water heater installation. The permit ensures the installation meets NJ Uniform Construction Code requirements for safety, venting, gas connections, and water supply. As licensed plumbers, we handle all permit applications and schedule the required municipal inspection for you. The permit cost is included in our installation price.",
  },
  {
    question: "Can you install a water heater the same day I call?",
    answer: "Yes, same-day water heater installation is available for standard tank units when we have the appropriate model in stock. If you have no hot water, we prioritize your call. Tankless installations and specialty units typically require scheduling 1-2 days in advance due to the additional work involved.",
  },
];

const installationSteps = [
  { step: "1", title: "Free in-home estimate", desc: "We evaluate your hot water needs, inspect existing connections, and recommend the right unit for your household and budget." },
  { step: "2", title: "Permit and unit selection", desc: "We pull the required NJ plumbing permit and order your selected unit from Rheem, Bradford White, AO Smith, Navien, or Rinnai." },
  { step: "3", title: "Professional installation", desc: "Old unit removed, new unit installed with code-compliant connections, expansion tank, T&P relief valve, and venting as required." },
  { step: "4", title: "Testing and inspection", desc: "Full leak and operation check, municipal inspection coordinated, warranty documentation and maintenance schedule handed off." },
];

type WaterHeaterIcon = "flame" | "bolt" | "infinity" | "leaf";

const waterHeaterTypes: {
  name: string;
  price: string;
  life: string;
  pros: string[];
  highlight: boolean;
  icon: WaterHeaterIcon;
}[] = [
  {
    name: "Gas tank",
    price: "$1,500 - $3,000",
    life: "10-12 yrs",
    pros: ["Faster recovery", "Lower operating cost", "Works during outages"],
    highlight: false,
    icon: "flame",
  },
  {
    name: "Electric tank",
    price: "$1,200 - $2,500",
    life: "10-12 yrs",
    pros: ["Lower upfront cost", "No venting required", "Flexible placement"],
    highlight: false,
    icon: "bolt",
  },
  {
    name: "Tankless",
    price: "$2,800 - $6,500",
    life: "20+ yrs",
    pros: ["Endless hot water", "Up to 34% energy savings", "Wall-mounted, compact"],
    highlight: true,
    icon: "infinity",
  },
  {
    name: "Heat pump",
    price: "$2,500 - $4,500",
    life: "13-15 yrs",
    pros: ["2-3x more efficient than electric", "May qualify for NJ rebates", "Lowest monthly cost"],
    highlight: false,
    icon: "leaf",
  },
];

const installationIncludes = [
  "New water heater from Rheem, Bradford White, AO Smith, Navien, or Rinnai",
  "All new supply connections, fittings, and shut-off valves",
  "Code-compliant venting for gas units (direct-vent or power-vent as required)",
  "Expansion tank where required by NJ code",
  "Temperature & pressure relief valve with proper discharge piping",
  "NJ plumbing permit and municipal inspection coordination",
  "Removal and disposal of your old unit",
  "Full-system leak and operation testing",
  "Manufacturer warranty registration",
];

const maintenanceTips = [
  { title: "Flush the tank annually", desc: "Sediment buildup is the #1 cause of early water heater failure in Middlesex County's hard water." },
  { title: "Test the T&P relief valve", desc: "Lift the valve lever once a year to make sure it releases water freely. A stuck valve is a safety hazard." },
  { title: "Check the anode rod every 3 years", desc: "This sacrificial rod protects the tank from corrosion. Replacing it can double the life of your water heater." },
  { title: "Set the thermostat to 120°F", desc: "Hotter settings waste energy, risk scalding, and accelerate sediment buildup." },
  { title: "Insulate the tank and pipes", desc: "An insulation blanket and pipe wrap can reduce standby heat loss by up to 45% (DOE)." },
];

function TypeIcon({ name }: { name: WaterHeaterIcon }) {
  const common = "w-10 h-10";
  if (name === "flame") {
    return (
      <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.24 17 7.172 17.657 8.5 18 9.5 18 10.5c0 1.485.5 2.5 1.657 3.843z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    );
  }
  if (name === "bolt") {
    return (
      <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }
  if (name === "infinity") {
    return (
      <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m12.728 0L5.636 18.364M5.636 5.636l12.728 12.728" />
      </svg>
    );
  }
  return (
    <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21c3 0 7-1 7.5-8M12 3c0 0 2 3 5 3s4-3 4-3-2 9-9 9c-1.75 0-3-.5-4-1.5" />
    </svg>
  );
}

export default function WaterHeaterInstallationPage() {
  const serviceSchema = getServiceSchema({
    name: "Water Heater Installation",
    description: "Professional water heater installation in East Brunswick and Middlesex County, NJ. Gas, electric, tankless, and heat pump water heaters with same-day service available.",
    slug: "water-heater-installation",
  });

  const faqSchema = getFaqSchema(faqData);

  const howToSchema = getHowToSchema({
    name: "How Water Heater Installation Works",
    description: "Our professional water heater installation process from free estimate to final cleanup.",
    steps: installationSteps.map((item) => ({
      name: item.title,
      text: item.desc,
    })),
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Water Heater Installation", path: "/services/water-heater-installation" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceHero
        tagline="Same-Day Service Available"
        heading="Water Heater Installation"
        subheading="Licensed plumbers installing gas, electric, tankless, and heat pump water heaters. Free estimates, upfront pricing, permits included."
        backgroundImage="/images/water-heater-repair-service.jpg"
        backgroundAlt="Water heater installation service in East Brunswick NJ"
        service="Water Heater Installation"
        bullets={["Gas & Electric Options", "Same-Day Installation", "Free Estimates", "Licensed & Insured"]}
      />

      <StatsStrip />

      {/* Quick Answer + Cost Table */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            <strong>Water heater installation in East Brunswick, NJ</strong> costs between $1,200 and $3,500 for a standard tank unit, or $2,800 to $6,500 for tankless. Illyrian Plumber provides same-day professional installation with free estimates, full permitting, and a manufacturer warranty on every unit.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Installation Type</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Typical Cost</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Lifespan</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  { type: "40-Gallon Gas Tank", cost: "$1,500 - $2,500", life: "10-12 years" },
                  { type: "50-Gallon Gas Tank", cost: "$1,800 - $3,000", life: "10-12 years" },
                  { type: "50-Gallon Electric Tank", cost: "$1,500 - $2,800", life: "10-12 years" },
                  { type: "Heat Pump (Hybrid Electric)", cost: "$2,500 - $4,500", life: "13-15 years" },
                  { type: "Gas Tankless", cost: "$2,800 - $6,500", life: "20+ years" },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0">
                    <td className="py-3 px-4">{item.type}</td>
                    <td className="text-center py-3 px-4 font-medium">{item.cost}</td>
                    <td className="text-center py-3 px-4">{item.life}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Price ranges include labor, materials, and NJ permit. Final cost confirmed during free estimate.</p>
        </div>
      </section>

      {/* Water Heater Types - Navy band */}
      <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-700 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-red-700 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Types of water heaters we install</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Four proven options. We match the right unit to your household size, fuel source, and budget.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {waterHeaterTypes.map((type) => (
              <div
                key={type.name}
                className={`rounded-xl p-6 bg-white shadow-lg transition hover:-translate-y-1 ${type.highlight ? "ring-4 ring-red-500 relative" : ""}`}
              >
                {type.highlight && (
                  <span className="absolute -top-3 left-6 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Most Popular</span>
                )}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${type.highlight ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-900"}`}>
                  <TypeIcon name={type.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{type.name}</h3>
                <p className="text-2xl font-bold text-red-700 mb-1">{type.price}</p>
                <p className="text-xs text-gray-500 mb-4">Installed - {type.life} lifespan</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {type.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-blue-100 text-sm max-w-3xl mx-auto mt-8 text-center">
            Sizing depends on your household: 1-2 people typically need a 30-40 gallon tank, 3-4 people need 40-50 gallons, and homes with 5 or more people need 50-80 gallons. Tankless units are sized by flow rate instead of tank size; a typical 3-bathroom Middlesex County home needs a unit rated for at least 8-10 GPM. We confirm the right size for your household during your free estimate.
          </p>
        </div>
      </section>

      {/* Mid-page CTA Band */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-red-700 text-white rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <p className="text-2xl font-bold mb-1">Ready for a new water heater?</p>
                <p className="text-red-100">Call now or request a free estimate. Same-day installation available in Middlesex County.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-center whitespace-nowrap">
                  Call {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-700 transition text-center whitespace-nowrap">
                  Call {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why homeowners pick us for water heater installation"
        items={[
          { icon: "dollar", title: "Free in-home estimates", description: "We evaluate your hot water needs and give you an exact installation price before any work begins, no guessing and no surprise add-ons." },
          { icon: "shield", title: "Permits and inspections handled", description: "NJ requires a plumbing permit for every water heater installation. We pull the permit, schedule the municipal inspection, and handle the paperwork." },
          { icon: "clock", title: "Same-day installation available", description: "If you have no hot water, we prioritize your call. Standard tank installations are often completed the same day." },
          { icon: "wrench", title: "Every major brand", description: "We install Rheem, Bradford White, AO Smith, Navien, and Rinnai units and recommend the model that fits your household and budget." },
          { icon: "home", title: "Local Middlesex County plumbers", description: `Based in East Brunswick, not a national chain. ${BUSINESS_INFO.stats.projectsCompleted} completed projects since ${BUSINESS_INFO.founded}.` },
          { icon: "bolt", title: "Full-system testing before we leave", description: "Every installation gets a complete leak and operation check, plus warranty registration, before we consider the job finished." },
        ]}
      />

      {/* Everything Included split */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/images/tankless-water-heater-installation.jpg"
                alt="Licensed plumber performing water heater installation in East Brunswick NJ"
                width={720}
                height={540}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">NJ Master Plumber</div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-bold text-red-700 uppercase tracking-wide mb-2">Complete Installation</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything included in our installation</h2>
              <p className="text-gray-600 mb-6">No surprise fees. No return trips for missing parts. Every installation includes the full scope below - the price we quote is the price you pay.</p>
              <ul className="space-y-3">
                {installationIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-900 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our installation process</h2>
            <p className="text-gray-600">From first call to final inspection - here&apos;s what to expect.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-10 bg-red-700 text-white">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold mb-1">Ready for a new water heater?</p>
            <p className="text-red-100">Free estimate. Same-day installation available.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-center">
              Call {BUSINESS_INFO.phone}
            </a>
            <a href={BUSINESS_INFO.phone2Link} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-700 transition text-center">
              Call {BUSINESS_INFO.phone2}
            </a>
          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="What East Brunswick homeowners say about our installs"
        subheading="Real reviews from recent water heater installations across Middlesex County."
      />

      {/* Maintenance Tips split */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-bold text-red-700 uppercase tracking-wide mb-2">Keep It Running Longer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">5 maintenance tips for your new water heater</h2>
              <p className="text-gray-600 mb-8">A well-maintained water heater lasts 30-50% longer. Here&apos;s what we recommend to Middlesex County homeowners to get the most out of your investment.</p>
              <ol className="space-y-5">
                {maintenanceTips.map((tip, i) => (
                  <li key={tip.title} className="flex gap-4">
                    <div className="w-9 h-9 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">{tip.title}</p>
                      <p className="text-sm text-gray-600">{tip.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/water-heater-maintenance-parts.jpg"
                alt="Water heater maintenance parts and anode rod replacement"
                width={720}
                height={540}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service areas + FAQ + related -- narrow column */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Service Areas -- pill cloud */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Water heater installation throughout Middlesex County</h3>
              <div className="flex flex-wrap gap-2">
                {["East Brunswick", "Edison", "Old Bridge", "Sayreville", "South Brunswick", "North Brunswick", "Monroe Township"].map((area) => {
                  const slug = area.toLowerCase().replace(/\s+/g, "-");
                  const hasPage = ["east-brunswick", "edison", "old-bridge", "sayreville", "south-brunswick", "north-brunswick", "monroe-township"].includes(slug);
                  return hasPage ? (
                    <Link key={area} href={`/service-areas/${slug}`} className="bg-red-50 px-3 py-1.5 rounded-full text-sm font-medium text-red-700 border border-red-200 hover:bg-red-100 transition">{area}</Link>
                  ) : (
                    <span key={area} className="bg-gray-100 px-3 py-1.5 rounded-full text-sm text-gray-600 border border-gray-200">{area}</span>
                  );
                })}
              </div>
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently asked questions about water heater installation</h2>
            <p className="text-gray-600 mb-6">Everything East Brunswick homeowners ask about water heater installation cost, timing, and permits.</p>
            <div className="space-y-4 mb-12">
              {faqData.map((faq, index) => (
                <details key={index} className="bg-white rounded-lg shadow-sm group">
                  <summary className="p-5 cursor-pointer list-none flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 pr-4 text-base">{faq.question}</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>

            {/* Related Services */}
            <div className="mb-8">
              <LinkCardGrid
                heading="Related plumbing services"
                items={[
                  { label: "Water Heater Repair", href: "/services/water-heater-repair", description: "Same-day repair for all major brands" },
                  { label: "Water Heater Replacement", href: "/services/water-heater-replacement", description: "Upgrade an aging or failing tank unit" },
                  { label: "Tankless Water Heater", href: "/services/tankless-water-heater-installation", description: "Endless hot water in a compact wall-mounted unit" },
                  { label: "Gas Line Services", href: "/services/gas-line-repair-installation", description: "Gas line installation, repair, and safety inspections" },
                  { label: "Boiler Repair", href: "/services/boiler-repair-service", description: "Repair and maintenance for boiler heating systems" },
                  { label: "24/7 Emergency Plumbing", href: "/services/emergency-plumbing", description: "Fast response for burst pipes, gas leaks, and flooding" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Learn more about water heaters"
              tone="dark"
              items={[
                { label: "Signs Your Water Heater Is Dying", href: "/blog/signs-water-heater-dying", badge: "Guide" },
                { label: "Tankless vs Tank Water Heater", href: "/blog/tankless-vs-tank-water-heater", badge: "Guide" },
                { label: "How Long Does a Water Heater Take to Heat Up?", href: "/blog/how-long-water-heater-heat-up", badge: "Guide" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get your water heater installed today</h2>
          <p className="text-lg text-red-100 mb-8">Licensed plumbers serving East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-700 transition">
              Call {BUSINESS_INFO.phone2}
            </a>
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
