import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Common Water Heater Problems & How to Fix Them (2026)",
  description: "Diagnose 12+ common water heater problems: no hot water, leaking, strange noises, pilot light issues. Expert repair guide from licensed NJ plumbers.",
  keywords: [
    "common water heater problems",
    "water heater not working",
    "hot water heater problems",
    "water heater troubleshooting",
    "water heater not heating",
    "no hot water",
    "water heater pilot light won't stay lit",
    "water heater leaking from bottom",
    "water heater making noise",
    "hot water heater not working",
    "water heater thermocouple",
    "water heater element",
    "electric water heater not working",
    "gas water heater problems",
    "water heater repair",
    "water heater leaking from top",
    "water heater rumbling noise",
    "smelly hot water",
    "rusty hot water",
    "tankless water heater error codes",
    "water heater repair near me",
    "water heater repair NJ",
    "hot water heater troubleshooting",
    "water heater not heating water",
    "water heater repair cost",
  ],
  openGraph: {
    title: "Common Water Heater Problems & How to Fix Them (2026)",
    description: "Diagnose 12+ common water heater problems with our expert troubleshooting guide. Learn when to DIY and when to call a licensed NJ plumber.",
    type: "article",
    publishedTime: "2026-03-18T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function CommonWaterHeaterProblemsPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Common Water Heater Problems & How to Fix Them",
    description: "Diagnose 12+ common water heater problems: no hot water, leaking, strange noises, pilot light issues. Expert repair guide from licensed NJ plumbers.",
    image: "https://www.illyrianplumber.com/images/water-heater-repair-service.jpg",
    author: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      url: "https://www.illyrianplumber.com",
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      logo: {
        "@type": "ImageObject",
        url: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png",
      },
    },
    datePublished: "2026-03-18T08:00:00.000Z",
    dateModified: "2026-03-18T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/common-water-heater-problems",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is my water heater not producing hot water?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For gas water heaters, the most common cause is a failed pilot light or bad thermocouple (costs $20-$50 for the part). For electric water heaters, it's usually a burned-out heating element ($10-$30 each) or tripped circuit breaker. Check your breaker panel first, then inspect the pilot light or elements.",
        },
      },
      {
        "@type": "Question",
        name: "How much does water heater repair cost in New Jersey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Water heater repair costs in New Jersey typically range from $150-$600. Common repairs include thermocouple replacement ($150-$250), heating element replacement ($150-$300), thermostat replacement ($150-$350), and T&P valve replacement ($150-$300). Emergency repairs and after-hours service may cost an additional $100-$200.",
        },
      },
      {
        "@type": "Question",
        name: "Why is my water heater leaking from the bottom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A water heater leaking from the bottom is usually caused by a faulty drain valve (easy fix, $10-$30 part) or internal tank corrosion (requires replacement). If water is pooling beneath the tank and not coming from the drain valve, the inner tank lining has likely failed and you need a new water heater.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my hot water smell like rotten eggs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rotten egg smell in hot water is caused by hydrogen sulfide gas, produced when sulfate-reducing bacteria react with the magnesium anode rod. Replace the magnesium anode rod with an aluminum/zinc anode rod ($20-$40 part). Flushing the tank with hydrogen peroxide can also kill the bacteria. If the smell persists, a licensed plumber can install a powered anode rod ($100-$200).",
        },
      },
      {
        "@type": "Question",
        name: "Why is my water heater making a popping or rumbling noise?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Popping, rumbling, or banging noises from a water heater are caused by sediment buildup at the bottom of the tank. Hard water minerals settle and harden, trapping water underneath that turns to steam and creates those sounds. Drain and flush your water heater annually to prevent this. In Middlesex County, NJ, the moderately hard water (5-8 grains per gallon) makes regular flushing especially important.",
        },
      },
      {
        "@type": "Question",
        name: "Should I repair or replace my water heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Replace your water heater if: it's over 10-12 years old (check the serial number for manufacture date), the tank is leaking, repairs cost more than 50% of a new unit, you're experiencing frequent breakdowns, or your energy bills have increased significantly. Repair if: the unit is under 8 years old, the problem is a single component failure (thermocouple, element, valve), and the tank itself is not corroded.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my pilot light keep going out?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A pilot light that won't stay lit is most commonly caused by a faulty thermocouple ($20-$50 part), which is a safety sensor that detects the flame. Other causes include a dirty pilot tube, drafty location, or a failing gas valve. Thermocouple replacement is straightforward for a professional plumber and typically costs $150-$250 including labor.",
        },
      },
      {
        "@type": "Question",
        name: "What does a tankless water heater error code mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tankless water heater error codes vary by brand. Common codes include: Navien E003 (ignition failure), Rinnai 11 (no ignition), Rheem/Ruud C7/76 (abnormal flame rod current), and Noritz 12 (flame failure). Most error codes indicate ignition issues, gas supply problems, venting blockages, or scale buildup. Always refer to your owner's manual and call a licensed technician for persistent error codes.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I flush my water heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should flush your tank water heater at least once per year, or every 6 months if you have hard water. In Middlesex County, NJ, where water hardness averages 5-8 grains per gallon, annual flushing is the minimum recommendation. Tankless water heaters should be descaled with vinegar every 12-18 months. Regular maintenance extends your water heater's lifespan by 2-5 years.",
        },
      },
      {
        "@type": "Question",
        name: "Why is my hot water rusty or discolored?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rusty or brown hot water typically means the anode rod is depleted and the tank is beginning to corrode internally. If only the hot water is discolored (cold water is clear), the problem is your water heater. Replace the anode rod ($20-$50 for the part, $150-$300 with professional installation). If the tank itself is corroded through, the unit needs replacement.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="bg-white">
        {/* Hero Section */}
        <header className="relative bg-gray-900 text-white py-16 md:py-24">
          <div className="absolute inset-0">
            <Image
              src="/images/water-heater-maintenance-parts.jpg"
              alt="Common water heater problems and troubleshooting guide"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full">Water Heaters</span>
                <time dateTime="2026-03-18">March 18, 2026</time>
                <span>22 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                12 Common Water Heater Problems & How to Fix Them (2026 Troubleshooting Guide)
              </h1>
              <p className="text-xl text-gray-300">
                Your water heater stopped working. Before you panic, use this expert guide to diagnose the problem, understand the cause, and know whether it&apos;s a $20 DIY fix or a call to a licensed plumber.
              </p>
            </div>
          </div>
        </header>

        {/* Author Box */}
        <div className="border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-3xl mx-auto flex items-center gap-4">
              <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                IG
              </div>
              <div>
                <p className="font-semibold text-gray-900">Written by Illyrian Plumber</p>
                <p className="text-sm text-gray-600">Licensed Master Plumbers serving Middlesex County, NJ since 2020</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                A water heater that stops working is more than an inconvenience -it disrupts your entire household. No hot showers, no clean dishes, no warm water for laundry. According to the U.S. Department of Energy, water heating accounts for about 20% of your home&apos;s energy use, making it the second-largest energy expense after heating and cooling.
              </p>
              <p className="text-gray-700">
                The good news? Most water heater problems have identifiable causes, and many have straightforward fixes. As licensed plumbers who have repaired and replaced thousands of water heaters across Middlesex County, NJ -from 40-gallon Rheem tanks in East Brunswick colonials to Navien tankless units in Edison townhomes -we&apos;ve seen every problem in this guide dozens of times. If your unit needs professional attention, our <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800 underline">water heater repair service</Link> can help. And if you&apos;re wondering whether repair or replacement makes more sense, check out our guide on <Link href="/blog/signs-water-heater-dying" className="text-red-700 hover:text-red-800 underline">signs your water heater is dying</Link>.
              </p>
              <p className="text-gray-700">
                Below, we cover the 12 most common water heater problems for both gas and electric models, including tankless-specific issues. For each problem, you&apos;ll find the <strong>symptoms</strong>, the <strong>likely cause</strong>, whether a <strong>DIY fix</strong> is possible, and <strong>when to call a professional</strong>.
              </p>
            </div>

            {/* About Illyrian Plumber */}
            <div className="bg-gray-50 border-l-4 border-red-700 rounded-r-lg p-5 my-8">
              <p className="font-bold text-gray-900 mb-2">About Illyrian Plumber</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Licensed master plumbers specializing in high-end mechanical plumbing and water heating systems in Middlesex County, NJ. We offer <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800">tankless water heater installation</Link>, <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800">water heater repair</Link>, <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800">boiler repair</Link>, <Link href="/services/sewer-line-repair-replacement" className="text-red-700 hover:text-red-800">sewer line repair</Link>, <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:text-red-800">gas line services</Link>, and <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800">24/7 emergency plumbing</Link> across East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, and North Brunswick. 750+ projects completed since 2010.
              </p>
            </div>

            {/* Quick Diagnostic Table */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Water Heater Problems: Quick Diagnostic Table</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-red-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Symptom</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Likely Cause</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">DIY?</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">Est. Cost</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-red-100">
                      <td className="py-3 px-2">No hot water at all</td>
                      <td className="py-3 px-2">Pilot light / element / breaker</td>
                      <td className="text-center py-3 px-2">Maybe</td>
                      <td className="text-center py-3 px-2">$0-$300</td>
                    </tr>
                    <tr className="border-b border-red-100">
                      <td className="py-3 px-2">Not enough hot water</td>
                      <td className="py-3 px-2">Thermostat / dip tube / sediment</td>
                      <td className="text-center py-3 px-2">Some</td>
                      <td className="text-center py-3 px-2">$0-$350</td>
                    </tr>
                    <tr className="border-b border-red-100">
                      <td className="py-3 px-2">Water too hot</td>
                      <td className="py-3 px-2">Thermostat set too high</td>
                      <td className="text-center py-3 px-2">Yes</td>
                      <td className="text-center py-3 px-2">$0</td>
                    </tr>
                    <tr className="border-b border-red-100">
                      <td className="py-3 px-2">Leaking from top</td>
                      <td className="py-3 px-2">T&P valve / inlet connections</td>
                      <td className="text-center py-3 px-2">Some</td>
                      <td className="text-center py-3 px-2">$20-$300</td>
                    </tr>
                    <tr className="border-b border-red-100">
                      <td className="py-3 px-2">Leaking from bottom</td>
                      <td className="py-3 px-2">Drain valve / tank corrosion</td>
                      <td className="text-center py-3 px-2">Maybe</td>
                      <td className="text-center py-3 px-2">$10-$2,500+</td>
                    </tr>
                    <tr className="border-b border-red-100">
                      <td className="py-3 px-2">Rumbling / popping noise</td>
                      <td className="py-3 px-2">Sediment buildup</td>
                      <td className="text-center py-3 px-2">Yes</td>
                      <td className="text-center py-3 px-2">$0</td>
                    </tr>
                    <tr className="border-b border-red-100">
                      <td className="py-3 px-2">Pilot light keeps going out</td>
                      <td className="py-3 px-2">Thermocouple / gas valve</td>
                      <td className="text-center py-3 px-2">No</td>
                      <td className="text-center py-3 px-2">$150-$400</td>
                    </tr>
                    <tr className="border-b border-red-100">
                      <td className="py-3 px-2">Rusty / brown water</td>
                      <td className="py-3 px-2">Depleted anode rod / corrosion</td>
                      <td className="text-center py-3 px-2">Some</td>
                      <td className="text-center py-3 px-2">$20-$300</td>
                    </tr>
                    <tr className="border-b border-red-100">
                      <td className="py-3 px-2">Rotten egg smell</td>
                      <td className="py-3 px-2">Bacteria + anode rod reaction</td>
                      <td className="text-center py-3 px-2">Yes</td>
                      <td className="text-center py-3 px-2">$20-$200</td>
                    </tr>
                    <tr className="border-b border-red-100">
                      <td className="py-3 px-2">Slow recovery</td>
                      <td className="py-3 px-2">Sediment / undersized unit / element</td>
                      <td className="text-center py-3 px-2">Some</td>
                      <td className="text-center py-3 px-2">$0-$350</td>
                    </tr>
                    <tr className="border-b border-red-100">
                      <td className="py-3 px-2">High energy bills</td>
                      <td className="py-3 px-2">Sediment / age / inefficiency</td>
                      <td className="text-center py-3 px-2">Some</td>
                      <td className="text-center py-3 px-2">$0-$2,500+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2">Tankless error code</td>
                      <td className="py-3 px-2">Ignition / scale / venting</td>
                      <td className="text-center py-3 px-2">No</td>
                      <td className="text-center py-3 px-2">$150-$500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">In This Guide</h2>
              <ul className="space-y-2">
                <li><a href="#no-hot-water" className="text-red-700 hover:text-red-800">1. No Hot Water (Gas vs Electric)</a></li>
                <li><a href="#not-enough-hot-water" className="text-red-700 hover:text-red-800">2. Not Enough Hot Water</a></li>
                <li><a href="#water-too-hot" className="text-red-700 hover:text-red-800">3. Water Too Hot</a></li>
                <li><a href="#water-heater-leaking" className="text-red-700 hover:text-red-800">4. Water Heater Leaking (Top vs Bottom)</a></li>
                <li><a href="#strange-noises" className="text-red-700 hover:text-red-800">5. Strange Noises (Rumbling, Popping, Sizzling, Screeching)</a></li>
                <li><a href="#pilot-light" className="text-red-700 hover:text-red-800">6. Pilot Light Won&apos;t Stay Lit / Thermocouple Issues</a></li>
                <li><a href="#rusty-water" className="text-red-700 hover:text-red-800">7. Rusty or Discolored Water</a></li>
                <li><a href="#smelly-water" className="text-red-700 hover:text-red-800">8. Smelly Water (Rotten Egg / Hydrogen Sulfide)</a></li>
                <li><a href="#slow-recovery" className="text-red-700 hover:text-red-800">9. Slow Hot Water Recovery</a></li>
                <li><a href="#high-energy-bills" className="text-red-700 hover:text-red-800">10. High Energy Bills From Your Water Heater</a></li>
                <li><a href="#tankless-problems" className="text-red-700 hover:text-red-800">11. Tankless Water Heater Problems</a></li>
                <li><a href="#repair-vs-replace" className="text-red-700 hover:text-red-800">12. When to Repair vs Replace Your Water Heater</a></li>
                <li><a href="#repair-cost-table" className="text-red-700 hover:text-red-800">Water Heater Repair Cost Comparison</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Water Heater Problems in Middlesex County, NJ</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Problem 1: No Hot Water */}
            <section id="no-hot-water" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">1. No Hot Water -The Most Common Water Heater Problem</h2>

              <p className="text-gray-700 mb-4">
                No hot water is the number-one reason homeowners call for water heater repair. The cause depends entirely on whether you have a gas or electric water heater, and the troubleshooting steps are different for each.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Gas Water Heater: No Hot Water</h3>
                  <p className="text-sm text-gray-700 mb-3"><strong>Symptoms:</strong> No hot water from any faucet. Water is completely cold.</p>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Common Causes:</p>
                  <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                    <li><strong>Pilot light is out</strong> -The most common cause. Check the viewing window at the bottom of the tank for a small blue flame.</li>
                    <li><strong>Failed thermocouple</strong> -This safety device detects the pilot flame. When it fails, it shuts off gas supply. Honeywell and White-Rodgers thermocouples cost $8-$20 at hardware stores.</li>
                    <li><strong>Faulty gas control valve</strong> -The gas valve (Honeywell WT8840 series is common on Rheem/Ruud units) regulates gas flow. When it fails, no gas reaches the burner.</li>
                    <li><strong>Gas supply interrupted</strong> -Check that other gas appliances are working. The gas shutoff valve near the water heater may be turned off.</li>
                  </ul>
                  <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                    <p className="text-sm text-gray-800"><strong>DIY Fix:</strong> Relight the pilot following the instructions on your unit&apos;s label. On most A.O. Smith, Rheem, and Bradford White models, turn the gas knob to &quot;Pilot,&quot; press and hold the igniter button for 60 seconds, then set to &quot;On.&quot;</p>
                  </div>
                  <div className="mt-3 p-3 bg-red-100 rounded-lg">
                    <p className="text-sm text-gray-800"><strong>Call a Pro If:</strong> The pilot won&apos;t stay lit after relighting, you smell gas, or the gas valve needs replacement ($200-$400 installed).</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Electric Water Heater: No Hot Water</h3>
                  <p className="text-sm text-gray-700 mb-3"><strong>Symptoms:</strong> No hot water from any faucet. Water is completely cold.</p>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Common Causes:</p>
                  <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                    <li><strong>Tripped circuit breaker</strong> -Electric water heaters run on a dedicated 30-amp, 240V circuit. Check your breaker panel for a tripped breaker.</li>
                    <li><strong>Tripped high-temperature cutoff (ECO)</strong> -The reset button (red button behind the upper access panel) trips when water exceeds 180°F. Press to reset.</li>
                    <li><strong>Burned-out heating element</strong> -Electric water heaters have two elements (upper and lower). Screw-in elements from brands like Camco or Reliance cost $10-$30 each. The upper element heats first; if it fails, you get zero hot water.</li>
                    <li><strong>Failed thermostat</strong> -The upper or lower thermostat controls when each element fires. Replacement thermostats cost $10-$25.</li>
                  </ul>
                  <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                    <p className="text-sm text-gray-800"><strong>DIY Fix:</strong> Reset the circuit breaker (flip it fully OFF, then ON). Press the red ECO reset button behind the upper access panel. <strong>Warning:</strong> Turn off power at the breaker before removing access panels.</p>
                  </div>
                  <div className="mt-3 p-3 bg-red-100 rounded-lg">
                    <p className="text-sm text-gray-800"><strong>Call a Pro If:</strong> The breaker trips repeatedly, the reset button trips again within hours, or heating elements need replacement (requires draining the tank and working with 240V wiring).</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Problem 2: Not Enough Hot Water */}
            <section id="not-enough-hot-water" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">2. Not Enough Hot Water</h2>

              <p className="text-gray-700 mb-4">
                Running out of hot water during a shower is a telltale sign something is wrong. If you used to have plenty of hot water and now you don&apos;t, the problem is usually one of these:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Symptoms & Causes</h3>
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <strong>Sediment buildup in the tank</strong> -This is the most common cause in Middlesex County due to our moderately hard water (5-8 grains per gallon). Sediment displaces hot water volume. A 50-gallon tank with 10 gallons of sediment effectively becomes a 40-gallon tank. You&apos;ll notice this problem gets worse over time.
                  </li>
                  <li>
                    <strong>Broken dip tube</strong> -The dip tube directs cold incoming water to the bottom of the tank. When it cracks or deteriorates (common on units manufactured 1993-1997 with defective Perflex dip tubes), cold water mixes with hot water at the top, giving you lukewarm output. Replacement cost: $10-$30 for the part, $150-$300 installed.
                  </li>
                  <li>
                    <strong>Lower heating element failure (electric)</strong> -When only the lower element fails on an electric water heater, the upper element still heats the top portion of the tank. You&apos;ll get some hot water, but it runs out quickly -typically within 10-15 minutes instead of 30-40.
                  </li>
                  <li>
                    <strong>Thermostat set too low</strong> -The Department of Energy recommends 120°F. If someone turned it down, you&apos;ll notice reduced hot water output, especially in winter when incoming cold water in NJ drops to 40-45°F.
                  </li>
                  <li>
                    <strong>Undersized water heater</strong> -If you&apos;ve added a bathroom, a dishwasher, or have more people living in the home, your 40-gallon tank may no longer be sufficient. A family of 4+ typically needs a 50-gallon tank or a tankless unit.
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">DIY Fix</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Flush the tank:</strong> Connect a garden hose to the drain valve at the bottom. Turn off the cold water supply and power/gas. Open the drain valve and let water flow until it runs clear. This removes sediment and can restore lost capacity. Do this annually.
                </p>
                <p className="text-gray-700">
                  <strong>Check the thermostat:</strong> On gas models, the temperature dial is on the gas control valve. On electric models, adjust the thermostats behind the upper and lower access panels (turn off power first). Set to 120°F for a balance of comfort and energy savings.
                </p>
              </div>
            </section>

            {/* Problem 3: Water Too Hot */}
            <section id="water-too-hot" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">3. Water Too Hot</h2>

              <p className="text-gray-700 mb-4">
                Scalding water from your faucets is not just uncomfortable -it&apos;s dangerous. Water at 150°F can cause a third-degree burn in just 2 seconds. The Consumer Product Safety Commission reports over 3,800 scald injuries per year from tap water.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Causes</h3>
                <ul className="space-y-3 text-gray-700 list-disc pl-5">
                  <li><strong>Thermostat set too high</strong> -Someone may have cranked it up. Factory defaults on A.O. Smith and Rheem units are often 120-125°F, but they can be adjusted up to 150°F+.</li>
                  <li><strong>Faulty thermostat (electric)</strong> -A stuck thermostat on an electric water heater can fail in the &quot;on&quot; position, continuously heating water well past the set temperature. This is why the ECO (high-limit reset) exists -it trips at 180°F as a safety measure.</li>
                  <li><strong>Faulty gas control valve (gas)</strong> -If the gas valve doesn&apos;t properly modulate gas flow, the burner may fire longer than necessary.</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">DIY Fix</h3>
                <p className="text-gray-700 mb-3">
                  Turn the thermostat down to 120°F. Use a cooking thermometer at the faucet nearest the water heater to verify the actual output temperature. Wait 2-3 hours between adjustments for the tank to stabilize.
                </p>
                <p className="text-gray-700">
                  <strong>Call a Pro If:</strong> The water remains dangerously hot after lowering the thermostat. A stuck thermostat or faulty gas valve needs professional replacement. If the ECO (high-limit reset) keeps tripping, the thermostat is likely faulty and should be replaced immediately ($150-$350 installed).
                </p>
              </div>
            </section>

            {/* Problem 4: Leaking */}
            <section id="water-heater-leaking" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">4. Water Heater Leaking (Top vs Bottom)</h2>

              <p className="text-gray-700 mb-4">
                A leaking water heater requires immediate attention. Where the leak originates tells you whether it&apos;s a $20 fix or a full replacement. Here&apos;s how to tell the difference:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Leaking From the Top</h3>
                  <p className="text-sm text-gray-700 mb-3"><strong>Good news:</strong> Top leaks are usually repairable.</p>
                  <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                    <li><strong>Loose cold water inlet or hot water outlet connections</strong> -Tighten the fittings with a pipe wrench. Apply Teflon tape if threads are leaking.</li>
                    <li><strong>T&P (temperature and pressure) relief valve</strong> -If the T&P valve is dripping, it may be doing its job (relieving excess pressure) or it may be faulty. A Watts or Cash Acme T&P valve costs $15-$30.</li>
                    <li><strong>Corroded anode rod port</strong> -The anode rod fitting on top can corrode over time, especially with hard water.</li>
                  </ul>
                  <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                    <p className="text-sm text-gray-800"><strong>DIY Fix:</strong> Tighten connections. Replace the T&P valve if it&apos;s leaking even with normal pressure (under 80 PSI). Test with a pressure gauge on a hose bib -if your home pressure exceeds 80 PSI, you need a pressure reducing valve.</p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Leaking From the Bottom</h3>
                  <p className="text-sm text-gray-700 mb-3"><strong>This could be serious.</strong> Bottom leaks may indicate tank failure.</p>
                  <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                    <li><strong>Drain valve dripping</strong> -The brass or plastic drain valve at the bottom can leak if it&apos;s not fully closed or if the washer is worn. A replacement drain valve costs $8-$15.</li>
                    <li><strong>T&P valve discharge</strong> -The T&P valve&apos;s overflow tube runs down the side to the bottom. Water pooling at the base may actually be coming from the T&P valve above.</li>
                    <li><strong>Internal tank failure</strong> -If water is seeping from the bottom of the tank shell itself, the inner glass lining has cracked and the steel tank is corroding through. <strong>This cannot be repaired.</strong> You need a new water heater.</li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-100 rounded-lg">
                    <p className="text-sm text-gray-800"><strong>Important:</strong> If the tank itself is leaking, turn off the gas/power and cold water supply immediately. A leaking tank can release 40-80 gallons of water into your home, causing significant water damage. Call a plumber for emergency water heater replacement.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Problem 5: Strange Noises */}
            <section id="strange-noises" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">5. Water Heater Making Strange Noises</h2>

              <p className="text-gray-700 mb-4">
                A noisy water heater is trying to tell you something. Different sounds indicate different problems. Here&apos;s your guide to water heater noises and what they mean:
              </p>

              <div className="space-y-6 mb-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Rumbling or Popping</h3>
                  <p className="text-gray-700 mb-2"><strong>What it sounds like:</strong> Deep rumbling, like a pot of water about to boil. Popping or crackling sounds, especially during heating cycles.</p>
                  <p className="text-gray-700 mb-2"><strong>Cause:</strong> Sediment buildup at the bottom of the tank. Water trapped beneath hardened mineral deposits turns to steam, creating these sounds. This is extremely common in Middlesex County where municipal water contains calcium and magnesium at 5-8 GPG (grains per gallon).</p>
                  <p className="text-gray-700"><strong>Fix:</strong> Drain and flush the tank. For severe buildup, let the tank soak with white vinegar overnight through the drain valve. Prevention: flush annually and consider a water softener if your home has hard water over 7 GPG.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Sizzling or Hissing</h3>
                  <p className="text-gray-700 mb-2"><strong>What it sounds like:</strong> A sizzle or hiss, like water hitting a hot pan. Typically heard on gas water heaters.</p>
                  <p className="text-gray-700 mb-2"><strong>Cause:</strong> Condensation dripping onto the hot burner assembly. This is normal during heavy use or when a cold tank is first heating up. However, persistent sizzling on an electric water heater may indicate a leaking element gasket, allowing water to drip onto the element.</p>
                  <p className="text-gray-700"><strong>Fix:</strong> On gas units, occasional sizzling is normal -no action needed. On electric units, turn off power and check element gaskets for leaks. Replace gaskets or elements if leaking ($10-$30 per element).</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Screeching or High-Pitched Whining</h3>
                  <p className="text-gray-700 mb-2"><strong>What it sounds like:</strong> A high-pitched whine or screech, often when hot water is being used.</p>
                  <p className="text-gray-700 mb-2"><strong>Cause:</strong> A partially closed valve restricting water flow. Check the inlet valve on top of the water heater and any valves on the hot water lines. The pressure relief valve can also make a whistling sound if system pressure is too high.</p>
                  <p className="text-gray-700"><strong>Fix:</strong> Open all valves fully. If the T&P valve is whistling, check your home&apos;s water pressure with a gauge. Normal residential pressure should be 40-80 PSI. If it&apos;s above 80 PSI, install a pressure reducing valve (PRV) or adjust your existing one.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Ticking or Tapping</h3>
                  <p className="text-gray-700 mb-2"><strong>What it sounds like:</strong> Rhythmic ticking or tapping from the pipes connected to the water heater.</p>
                  <p className="text-gray-700 mb-2"><strong>Cause:</strong> Thermal expansion. As the water heats and cools, pipes expand and contract against wood framing, hangers, or straps. This is normal and not harmful.</p>
                  <p className="text-gray-700"><strong>Fix:</strong> Install foam pipe insulation or adjust pipe hangers to allow movement. This is cosmetic -the sound is not damaging anything.</p>
                </div>
              </div>
            </section>

            {/* Problem 6: Pilot Light */}
            <section id="pilot-light" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">6. Pilot Light Won&apos;t Stay Lit / Thermocouple Issues</h2>

              <p className="text-gray-700 mb-4">
                A pilot light that keeps going out is one of the most frustrating gas water heater problems. You relight it, it works for a few hours or days, then it goes out again. Here&apos;s why:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Cause #1: Failed Thermocouple (Most Common)</h3>
                <p className="text-gray-700 mb-3">
                  The thermocouple is a small metal probe that sits in the pilot flame. It generates a tiny electrical current (measured in millivolts) when heated. This current tells the gas valve that the pilot is lit. When a thermocouple fails, it can&apos;t generate enough current, and the gas valve shuts off the pilot as a safety measure.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Part cost:</strong> A universal thermocouple (Honeywell CQ100A, fits most brands) costs $8-$20 at Home Depot or Lowes. Brand-specific thermocouples from Rheem, A.O. Smith, or Bradford White may cost $15-$30.
                </p>
                <p className="text-gray-700">
                  <strong>Professional replacement cost:</strong> $150-$250 including labor. This is one of the most common water heater repairs we perform across East Brunswick, Edison, and Old Bridge.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Cause #2: Dirty Pilot Tube</h3>
                <p className="text-gray-700 mb-3">
                  The pilot orifice can become clogged with dust or debris, producing a weak flame that doesn&apos;t properly heat the thermocouple. A weak yellow flame (instead of a strong blue one) indicates a dirty pilot tube.
                </p>
                <p className="text-gray-700">
                  <strong>Fix:</strong> Turn off the gas. Use a needle or compressed air to clear the pilot orifice. This is a free fix but requires some comfort working near gas components.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Cause #3: Drafty Location</h3>
                <p className="text-gray-700 mb-3">
                  If your water heater is in a garage, basement near windows, or near a dryer vent, air currents can blow out the pilot light. This is especially common in New Jersey during winter when cold drafts increase.
                </p>
                <p className="text-gray-700">
                  <strong>Fix:</strong> Eliminate drafts around the water heater. Do NOT enclose the water heater in a way that restricts combustion air -gas water heaters need ventilation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Cause #4: Failing Gas Control Valve</h3>
                <p className="text-gray-700 mb-3">
                  If you&apos;ve replaced the thermocouple and the pilot still won&apos;t stay lit, the gas control valve itself may be defective. The Honeywell gas valve is the most common type found on residential water heaters.
                </p>
                <p className="text-gray-700">
                  <strong>Replacement cost:</strong> $200-$400 for parts and labor. At this price point, if your water heater is over 8 years old, consider whether replacement makes more financial sense.
                </p>
              </div>
            </section>

            {/* Problem 7: Rusty Water */}
            {/* Mid-content CTA */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">Can&apos;t fix it yourself?</p>
                <p className="text-gray-300 text-sm">Professional water heater repair - same day service in Middlesex County.</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm whitespace-nowrap">Call Niti</a>
                <a href={BUSINESS_INFO.phone2Link} className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm whitespace-nowrap">Call Danny</a>
              </div>
            </div>

            <section id="rusty-water" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">7. Rusty or Discolored Hot Water</h2>

              <p className="text-gray-700 mb-4">
                Brown, orange, or rust-colored hot water is alarming, but the cause is usually straightforward. The first step is to determine if the discoloration is only in the hot water or in both hot and cold:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <strong>Only hot water is discolored:</strong> The problem is your water heater. The anode rod is depleted and the tank is beginning to corrode. The sacrificial anode rod (made of magnesium or aluminum) is designed to corrode instead of the tank. When it&apos;s gone, the tank itself starts rusting.
                  </li>
                  <li>
                    <strong>Both hot and cold are discolored:</strong> The problem is your water supply, not your water heater. This could be a water main break, municipal line flushing, or corroded galvanized pipes in older homes (common in pre-1970s homes in North Brunswick and Sayreville).
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">The Anode Rod Fix</h3>
                <p className="text-gray-700 mb-3">
                  Check and replace the anode rod. On most A.O. Smith, Rheem, and Bradford White models, the anode rod is accessible from a hex-head bolt on top of the tank (use a 1-1/16&quot; socket).
                </p>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li><strong>Magnesium anode rod</strong> -$15-$25, best for most water. Standard on most water heaters.</li>
                  <li><strong>Aluminum/zinc anode rod</strong> -$20-$35, better if you have sulfur smell issues.</li>
                  <li><strong>Powered anode rod (Corro-Protec)</strong> -$100-$200, never needs replacement, eliminates both corrosion and smell. We recommend these for Middlesex County homes.</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  <strong>Professional installation:</strong> $150-$300 total. Anode rods should be inspected every 3-5 years and replaced when less than 1/2&quot; thick or heavily corroded.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-sm text-gray-800"><strong>Warning:</strong> If the tank itself has visible rust holes or is leaking rusty water from the shell, the tank has corroded through and cannot be saved. You need a water heater replacement. Continuing to use a corroded tank risks flooding.</p>
              </div>
            </section>

            {/* Problem 8: Smelly Water */}
            <section id="smelly-water" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">8. Smelly Hot Water (Rotten Egg / Hydrogen Sulfide)</h2>

              <p className="text-gray-700 mb-4">
                A rotten egg smell from your hot water is caused by hydrogen sulfide (H2S) gas. This happens when sulfate-reducing bacteria (SRB) in the tank react with the magnesium anode rod, producing hydrogen sulfide. The smell is unpleasant but generally not dangerous at the concentrations found in residential water heaters.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Step-by-Step Fix</h3>
                <ol className="space-y-3 text-gray-700 list-decimal pl-5">
                  <li>
                    <strong>Flush the tank</strong> -Drain the entire tank through the drain valve to remove stagnant water and bacteria.
                  </li>
                  <li>
                    <strong>Sanitize with hydrogen peroxide</strong> -Pour 2-3 gallons of 3% hydrogen peroxide into the tank through the anode rod port or hot water outlet. Fill the tank with water and let it sit for 2 hours. This kills the sulfate-reducing bacteria. Do NOT use bleach, as it accelerates anode rod corrosion.
                  </li>
                  <li>
                    <strong>Replace the magnesium anode rod</strong> -Switch to an aluminum/zinc anode rod ($20-$35), which doesn&apos;t react with the bacteria the same way magnesium does.
                  </li>
                  <li>
                    <strong>Increase temperature temporarily</strong> -Set the thermostat to 140°F for 8 hours to kill bacteria, then lower back to 120°F. (Be careful of scald risk during this period.)
                  </li>
                </ol>
              </div>

              <p className="text-gray-700">
                <strong>Persistent smell?</strong> Consider a Corro-Protec powered anode rod, which uses a small electrical current to prevent both corrosion and bacterial growth. We install these regularly in Monroe Township and South Brunswick homes where well water or aging municipal lines contribute to sulfur issues.
              </p>
            </section>

            {/* Problem 9: Slow Recovery */}
            <section id="slow-recovery" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">9. Slow Hot Water Recovery Time</h2>

              <p className="text-gray-700 mb-4">
                Recovery time is how long your water heater takes to reheat a full tank of water. For reference, here are typical recovery times for a 50-gallon tank raising water temperature by 90°F (from 40°F incoming to 130°F):
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm bg-gray-50 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-100">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Water Heater Type</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">BTU/Watt Rating</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Recovery Time (50 gal)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Gas (standard)</td>
                      <td className="text-center py-3 px-4">40,000 BTU</td>
                      <td className="text-center py-3 px-4">40-50 minutes</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Gas (high-recovery)</td>
                      <td className="text-center py-3 px-4">50,000-65,000 BTU</td>
                      <td className="text-center py-3 px-4">25-35 minutes</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Electric (standard)</td>
                      <td className="text-center py-3 px-4">4,500 watts</td>
                      <td className="text-center py-3 px-4">60-80 minutes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Electric (high-watt)</td>
                      <td className="text-center py-3 px-4">5,500 watts</td>
                      <td className="text-center py-3 px-4">45-60 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                <strong>If recovery time has increased significantly</strong>, the causes are similar to &quot;not enough hot water&quot;:
              </p>

              <ul className="space-y-3 text-gray-700 list-disc pl-5 mb-6">
                <li><strong>Sediment buildup</strong> -Insulates the burner or elements from the water, reducing heat transfer efficiency. Flush the tank.</li>
                <li><strong>Failing lower heating element (electric)</strong> -If only the upper element is working, only the top 1/3 of the tank heats quickly. The rest heats by convection, which is extremely slow.</li>
                <li><strong>Gas burner issues</strong> -A dirty burner or partially clogged burner orifice reduces BTU output. A gas water heater burner that should produce a clean blue flame but shows yellow/orange tips needs cleaning.</li>
                <li><strong>Cold inlet temperature in winter</strong> -In New Jersey, incoming water temperature drops from ~70°F in summer to ~40°F in winter. This 30°F difference means your water heater works 50% harder in winter. This is normal but exacerbates existing issues.</li>
              </ul>

              <p className="text-gray-700">
                <strong>When to upgrade:</strong> If your household regularly runs out of hot water and the unit is functioning properly, you likely need a larger tank (move from 40 to 50 or 50 to 75 gallons) or a <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 underline">tankless water heater</Link> that provides unlimited hot water on demand.
              </p>
            </section>

            {/* Problem 10: High Energy Bills */}
            <section id="high-energy-bills" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">10. High Energy Bills From Your Water Heater</h2>

              <p className="text-gray-700 mb-4">
                If your gas or electric bill has spiked and nothing else has changed, your water heater may be the culprit. Water heating accounts for 14-20% of the average home&apos;s energy costs -about $400-$600 per year for a family of four in New Jersey.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Causes of Increased Water Heater Energy Use</h3>
                <ul className="space-y-3 text-gray-700 list-disc pl-5">
                  <li><strong>Sediment insulation</strong> -A layer of sediment forces the burner or element to run longer to heat the same amount of water. A tank with heavy sediment can use 20-40% more energy.</li>
                  <li><strong>Aging unit losing efficiency</strong> -A 10-year-old water heater with an EF (Energy Factor) of 0.58 uses 30-40% more energy than a new ENERGY STAR model with a UEF (Uniform Energy Factor) of 0.92+.</li>
                  <li><strong>Standby heat loss</strong> -Older tanks with thin insulation (R-6 to R-8) lose more heat than newer models (R-16 to R-24). You can add an insulation blanket ($20-$35 at Home Depot) to reduce standby losses by 25-45%.</li>
                  <li><strong>Thermostat set too high</strong> -Each 10°F reduction in temperature saves 3-5% on water heating costs. Lowering from 140°F to 120°F saves $36-$61 annually.</li>
                  <li><strong>Hot water leaks</strong> -A dripping hot water faucet at 1 drip per second wastes 1,661 gallons per year. That&apos;s $35-$80 in wasted water heating energy.</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Energy-Saving Checklist</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#10003;</span> Set thermostat to 120°F</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#10003;</span> Flush tank annually to remove sediment</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#10003;</span> Add tank insulation blanket (R-8+ for older units)</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#10003;</span> Insulate hot water pipes (first 6 feet from tank)</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#10003;</span> Fix all hot water leaks</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#10003;</span> Install low-flow showerheads (saves 25-60% on hot water use)</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#10003;</span> Consider upgrading to a high-efficiency or tankless unit if your water heater is 10+ years old</li>
                </ul>
              </div>
            </section>

            {/* Problem 11: Tankless Problems */}
            <section id="tankless-problems" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">11. Tankless Water Heater Problems</h2>

              <p className="text-gray-700 mb-4">
                Tankless water heaters are more reliable than tank models overall, but they have their own unique issues. As <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 underline">tankless water heater installation specialists</Link> in Middlesex County, we see these problems regularly:
              </p>

              <div className="space-y-6 mb-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Error Codes by Brand</h3>
                  <p className="text-gray-700 mb-4">
                    Tankless water heaters display error codes when something goes wrong. Here are the most common codes we encounter:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-semibold text-gray-900">Brand</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-900">Code</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-900">Meaning</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-900">Common Fix</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-3">Navien</td>
                          <td className="py-2 px-3">E003</td>
                          <td className="py-2 px-3">Ignition failure</td>
                          <td className="py-2 px-3">Check gas supply, clean igniter</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-3">Navien</td>
                          <td className="py-2 px-3">E012</td>
                          <td className="py-2 px-3">Flame loss</td>
                          <td className="py-2 px-3">Gas pressure, venting blockage</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-3">Navien</td>
                          <td className="py-2 px-3">E016</td>
                          <td className="py-2 px-3">Overheating</td>
                          <td className="py-2 px-3">Descale, check flow sensor</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-3">Rinnai</td>
                          <td className="py-2 px-3">Code 11</td>
                          <td className="py-2 px-3">No ignition</td>
                          <td className="py-2 px-3">Gas valve, igniter, venting</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-3">Rinnai</td>
                          <td className="py-2 px-3">Code 12</td>
                          <td className="py-2 px-3">Flame failure</td>
                          <td className="py-2 px-3">Gas supply, flame rod</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-3">Rinnai</td>
                          <td className="py-2 px-3">Code LC</td>
                          <td className="py-2 px-3">Scale buildup</td>
                          <td className="py-2 px-3">Descale with vinegar</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-3">Rheem/Ruud</td>
                          <td className="py-2 px-3">C7 76</td>
                          <td className="py-2 px-3">Flame rod current abnormal</td>
                          <td className="py-2 px-3">Clean/replace flame rod</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-3">Noritz</td>
                          <td className="py-2 px-3">Code 11</td>
                          <td className="py-2 px-3">No ignition</td>
                          <td className="py-2 px-3">Gas supply, igniter</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Noritz</td>
                          <td className="py-2 px-3">Code 12</td>
                          <td className="py-2 px-3">Flame failure</td>
                          <td className="py-2 px-3">Flame rod, gas pressure</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Cold Water Sandwich Effect</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Symptom:</strong> You get hot water, then a burst of cold water, then hot again. This happens when you turn off the hot water briefly (between showers, for example) and turn it back on.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Cause:</strong> The hot water sitting in the pipes is followed by cold water that entered the unit before the burner reignites. The burner has a 2-5 second delay before firing, during which cold water flows through.
                  </p>
                  <p className="text-gray-700">
                    <strong>Fix:</strong> Some Navien models (NPE-A2 series) include a built-in recirculation buffer tank that eliminates this. For other brands, a small 2-5 gallon mini-tank buffer ($150-$300) installed downstream can solve the issue. Rinnai&apos;s RUR series models also have built-in recirculation.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Scale Buildup / Descaling Required</h3>
                  <p className="text-gray-700 mb-3">
                    Tankless water heaters need descaling every 12-18 months, especially in Middlesex County where water hardness ranges from 5-8 GPG. Scale restricts flow through the heat exchanger, reduces efficiency, and triggers error codes.
                  </p>
                  <p className="text-gray-700">
                    <strong>DIY descaling:</strong> Using a descaling pump kit ($100-$150 at Amazon) and 4 gallons of food-grade white vinegar, you can flush the heat exchanger through the service valves. Takes about 60-90 minutes. See our <Link href="/blog/how-to-descale-tankless-water-heater" className="text-red-700 hover:text-red-800 underline">complete descaling guide</Link> for step-by-step instructions.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Minimum Flow Rate Not Met</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Symptom:</strong> The unit won&apos;t fire when a single low-flow faucet is turned on.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Cause:</strong> Tankless units require a minimum flow rate (typically 0.4-0.6 GPM) to activate. Low-flow faucets or partially open valves may not trigger the unit.
                  </p>
                  <p className="text-gray-700">
                    <strong>Fix:</strong> Open the faucet fully. If using a low-flow aerator (0.5 GPM), consider switching to a 1.0-1.5 GPM aerator. Some newer models like the Navien NPE-2 series activate at as low as 0.26 GPM.
                  </p>
                </div>
              </div>
            </section>

            {/* Problem 12: Repair vs Replace */}
            <section id="repair-vs-replace" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">12. When to Repair vs Replace Your Water Heater</h2>

              <p className="text-gray-700 mb-4">
                This is the most important decision you&apos;ll make about your water heater. Spending $350 on a repair for a unit that needs replacing in 6 months is wasted money. Replacing a unit that just needs a $20 part is equally wasteful.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4">Repair Your Water Heater If:</h3>
                  <ul className="space-y-3 text-gray-700 list-disc pl-5">
                    <li>The unit is <strong>under 8 years old</strong></li>
                    <li>The problem is a single component: thermocouple, element, thermostat, T&P valve, or drain valve</li>
                    <li>Repair cost is <strong>less than 50%</strong> of a new unit</li>
                    <li>The <strong>tank is not leaking</strong> from the shell</li>
                    <li>You haven&apos;t had multiple repairs in the past year</li>
                    <li>The unit still meets your household&apos;s hot water needs</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4">Replace Your Water Heater If:</h3>
                  <ul className="space-y-3 text-gray-700 list-disc pl-5">
                    <li>The unit is <strong>over 10-12 years old</strong> (check the serial number -the first four digits are usually the month and year)</li>
                    <li>The <strong>tank is leaking</strong> from the bottom or sides</li>
                    <li>Repair costs exceed <strong>50% of a new unit</strong></li>
                    <li>You&apos;ve needed <strong>2+ repairs</strong> in the past 12 months</li>
                    <li><strong>Rusty water</strong> persists after anode rod replacement</li>
                    <li>Your energy bills have increased significantly with no other explanation</li>
                    <li>The unit produces <strong>rumbling noises</strong> even after flushing (hardened sediment that won&apos;t flush indicates severe buildup)</li>
                    <li>You want to upgrade to a more efficient or larger-capacity unit</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">The 50% Rule</h3>
                <p className="text-gray-700">
                  Here&apos;s the math: A new 50-gallon gas water heater installed in Middlesex County costs $1,200-$2,200. A new electric unit costs $1,000-$1,800. If a repair costs more than $600-$1,100, replacement makes more financial sense, especially if the unit is over 8 years old. <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800 underline">Learn about our water heater replacement services</Link>.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">How to Find Your Water Heater&apos;s Age</h3>
                <p className="text-gray-700 mb-3">
                  The serial number on the manufacturer&apos;s label contains the manufacture date. Here&apos;s how to decode it for common brands:
                </p>
                <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                  <li><strong>Rheem/Ruud:</strong> First 4 digits = MMYY (e.g., 0318 = March 2018)</li>
                  <li><strong>A.O. Smith/State/American:</strong> First 4 digits = YYMM (e.g., 1803 = March 2018)</li>
                  <li><strong>Bradford White:</strong> First letter = year (A=2020, B=2021, C=2022, D=2023, E=2024, F=2025), second letter = month (A=Jan, B=Feb, etc.)</li>
                  <li><strong>Navien:</strong> Check the data plate; manufacture date is printed directly</li>
                  <li><strong>Rinnai:</strong> Serial number format includes year in first 2 digits</li>
                </ul>
              </div>
            </section>

            {/* Repair Cost Comparison Table */}
            {/* Mid-content CTA 2 */}
            <div className="bg-red-700 text-white rounded-xl p-6 mb-12">
              <p className="font-bold text-lg mb-1">Can&apos;t fix it yourself?</p>
              <p className="text-red-100 text-sm mb-4">Our licensed plumbers diagnose and repair all water heater brands - gas, electric, and tankless. Same-day service available.</p>
              <div className="flex flex-wrap gap-3">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">Call Niti: {BUSINESS_INFO.phone}</a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition text-sm">Call Danny: {BUSINESS_INFO.phone2}</a>
              </div>
            </div>

            {/* Service Card */}
            <div className="border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition">
              <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Related Service: Water Heater Repair</p>
                <p className="text-sm text-gray-600 mb-2">Professional water heater repair for all brands and types. We diagnose the problem, explain your options, and fix it right the first time.</p>
                <Link href="/services/water-heater-repair" className="text-red-700 hover:text-red-800 font-medium text-sm">Learn More</Link>
              </div>
            </div>

            <section id="repair-cost-table" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Water Heater Repair Cost Comparison (2026 NJ Prices)</h2>

              <p className="text-gray-700 mb-6">
                Below are typical water heater repair costs in Middlesex County, NJ. Prices include parts and labor from a licensed plumber. DIY part costs are also listed for comparison:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Repair</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">DIY Part Cost</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Pro Cost (Parts + Labor)</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Difficulty</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Thermocouple replacement</td>
                      <td className="text-center py-3 px-4">$8-$20</td>
                      <td className="text-center py-3 px-4">$150-$250</td>
                      <td className="text-center py-3 px-4">Moderate</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Heating element (electric)</td>
                      <td className="text-center py-3 px-4">$10-$30</td>
                      <td className="text-center py-3 px-4">$150-$300</td>
                      <td className="text-center py-3 px-4">Moderate</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Thermostat replacement</td>
                      <td className="text-center py-3 px-4">$10-$25</td>
                      <td className="text-center py-3 px-4">$150-$350</td>
                      <td className="text-center py-3 px-4">Moderate</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">T&P relief valve</td>
                      <td className="text-center py-3 px-4">$15-$30</td>
                      <td className="text-center py-3 px-4">$150-$300</td>
                      <td className="text-center py-3 px-4">Easy-Moderate</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Drain valve replacement</td>
                      <td className="text-center py-3 px-4">$8-$15</td>
                      <td className="text-center py-3 px-4">$100-$200</td>
                      <td className="text-center py-3 px-4">Easy</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Anode rod replacement</td>
                      <td className="text-center py-3 px-4">$15-$35</td>
                      <td className="text-center py-3 px-4">$150-$300</td>
                      <td className="text-center py-3 px-4">Moderate</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Gas control valve</td>
                      <td className="text-center py-3 px-4">$100-$200</td>
                      <td className="text-center py-3 px-4">$200-$400</td>
                      <td className="text-center py-3 px-4">Pro Only</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Dip tube replacement</td>
                      <td className="text-center py-3 px-4">$10-$30</td>
                      <td className="text-center py-3 px-4">$150-$300</td>
                      <td className="text-center py-3 px-4">Moderate</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4">Tankless descaling</td>
                      <td className="text-center py-3 px-4">$30-$50 (vinegar + pump kit)</td>
                      <td className="text-center py-3 px-4">$150-$300</td>
                      <td className="text-center py-3 px-4">Moderate</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Full tank replacement</td>
                      <td className="text-center py-3 px-4">N/A</td>
                      <td className="text-center py-3 px-4">$1,000-$2,500+</td>
                      <td className="text-center py-3 px-4">Pro Only</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 italic">
                * Prices are estimates for Middlesex County, NJ as of 2026. Actual costs may vary based on brand, model, accessibility, and whether the repair is during business hours or emergency/after-hours.
              </p>
            </section>

            {/* Middlesex County Section */}
            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Water Heater Problems Specific to Middlesex County, NJ</h2>

              <p className="text-gray-700 mb-4">
                Living in Middlesex County creates some unique challenges for water heaters. After over a decade of servicing homes from East Brunswick to Monroe Township, here are the area-specific factors we see affecting water heater performance:
              </p>

              <div className="space-y-6 mb-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Hard Water & Sediment Buildup</h3>
                  <p className="text-gray-700">
                    Middlesex County water hardness averages 5-8 grains per gallon (GPG), classified as moderately hard. This accelerates sediment accumulation in tank water heaters and scale buildup in tankless units. Homes in Edison and Sayreville that get water from the Middlesex Water Company tend to have slightly harder water than those in East Brunswick or South Brunswick on the New Brunswick city supply. We recommend annual tank flushing and tankless descaling every 12 months for most Middlesex County homes. Installing a whole-house <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 underline">water softener</Link> can significantly extend your water heater&apos;s lifespan.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Cold Incoming Water in Winter</h3>
                  <p className="text-gray-700">
                    New Jersey winters drop incoming cold water temperatures to 38-45°F (compared to 65-75°F in summer). This means your water heater needs to raise the temperature by 75-82°F to reach 120°F -nearly double the summer workload. This is the primary reason homeowners in North Brunswick, Old Bridge, and Monroe Township notice hot water running out faster between November and March. It&apos;s not a malfunction -it&apos;s physics -but it exposes undersized units and marginal components.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Aging Housing Stock</h3>
                  <p className="text-gray-700">
                    Many homes in East Brunswick, Sayreville, and North Brunswick were built in the 1960s-1980s with galvanized steel water pipes. As these pipes corrode internally, they can contribute to discolored water and restrict flow to the water heater. If you&apos;re seeing rusty water from both hot and cold taps in a home with original plumbing, the issue may be the pipes rather than (or in addition to) the water heater. Our <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 underline">whole-house repiping service</Link> replaces outdated galvanized pipes with modern copper or PEX.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">NJ Permit & Code Requirements</h3>
                  <p className="text-gray-700">
                    New Jersey requires a plumbing permit for water heater installation and replacement. In Middlesex County, the local building department inspects the installation to ensure compliance with the NJ Uniform Construction Code. Gas water heaters require proper venting (atmospheric or power-vent), a seismic strap in some installations, an expansion tank (required by most NJ municipalities since 2016), and GFCI protection for electric units in certain locations. Always hire a licensed plumber who pulls the proper permits.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Service Areas We Cover</h3>
                <p className="text-gray-700 mb-3">
                  We provide same-day water heater repair and replacement throughout Middlesex County:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-700">
                  <span className="bg-white px-3 py-2 rounded text-center">East Brunswick</span>
                  <span className="bg-white px-3 py-2 rounded text-center">Edison</span>
                  <span className="bg-white px-3 py-2 rounded text-center">Sayreville</span>
                  <span className="bg-white px-3 py-2 rounded text-center">Old Bridge</span>
                  <span className="bg-white px-3 py-2 rounded text-center">Monroe Township</span>
                  <span className="bg-white px-3 py-2 rounded text-center">South Brunswick</span>
                  <span className="bg-white px-3 py-2 rounded text-center">North Brunswick</span>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why is my water heater not producing hot water?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">For gas water heaters, the most common cause is a failed pilot light or bad thermocouple (costs $20-$50 for the part). For electric water heaters, it&apos;s usually a burned-out heating element ($10-$30 each) or tripped circuit breaker. Check your breaker panel first, then inspect the pilot light or elements.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much does water heater repair cost in New Jersey?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Water heater repair costs in New Jersey typically range from $150-$600. Common repairs include thermocouple replacement ($150-$250), heating element replacement ($150-$300), thermostat replacement ($150-$350), and T&P valve replacement ($150-$300). Emergency repairs and after-hours service may cost an additional $100-$200.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why is my water heater leaking from the bottom?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">A water heater leaking from the bottom is usually caused by a faulty drain valve (easy fix, $10-$30 part) or internal tank corrosion (requires replacement). If water is pooling beneath the tank and not coming from the drain valve, the inner tank lining has likely failed and you need a new water heater.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why does my hot water smell like rotten eggs?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Rotten egg smell in hot water is caused by hydrogen sulfide gas, produced when sulfate-reducing bacteria react with the magnesium anode rod. Replace the magnesium anode rod with an aluminum/zinc anode rod ($20-$40 part). Flushing the tank with hydrogen peroxide can also kill the bacteria. If the smell persists, a licensed plumber can install a powered anode rod ($100-$200).</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why is my water heater making a popping or rumbling noise?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Popping, rumbling, or banging noises from a water heater are caused by sediment buildup at the bottom of the tank. Hard water minerals settle and harden, trapping water underneath that turns to steam and creates those sounds. Drain and flush your water heater annually to prevent this. In Middlesex County, NJ, the moderately hard water (5-8 grains per gallon) makes regular flushing especially important.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Should I repair or replace my water heater?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Replace your water heater if: it&apos;s over 10-12 years old, the tank is leaking, repairs cost more than 50% of a new unit, you&apos;re experiencing frequent breakdowns, or your energy bills have increased significantly. Repair if: the unit is under 8 years old, the problem is a single component failure (thermocouple, element, valve), and the tank itself is not corroded.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why does my pilot light keep going out?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">A pilot light that won&apos;t stay lit is most commonly caused by a faulty thermocouple ($20-$50 part), which is a safety sensor that detects the flame. Other causes include a dirty pilot tube, drafty location, or a failing gas valve. Thermocouple replacement is straightforward for a professional plumber and typically costs $150-$250 including labor.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What does a tankless water heater error code mean?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Tankless water heater error codes vary by brand. Common codes include: Navien E003 (ignition failure), Rinnai Code 11 (no ignition), Rheem/Ruud C7 76 (abnormal flame rod current), and Noritz Code 12 (flame failure). Most error codes indicate ignition issues, gas supply problems, venting blockages, or scale buildup. Always refer to your owner&apos;s manual and call a licensed technician for persistent error codes.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How often should I flush my water heater?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">You should flush your tank water heater at least once per year, or every 6 months if you have hard water. In Middlesex County, NJ, where water hardness averages 5-8 grains per gallon, annual flushing is the minimum recommendation. Tankless water heaters should be descaled with vinegar every 12-18 months. Regular maintenance extends your water heater&apos;s lifespan by 2-5 years.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Why is my hot water rusty or discolored?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Rusty or brown hot water typically means the anode rod is depleted and the tank is beginning to corrode internally. If only the hot water is discolored (cold water is clear), the problem is your water heater. Replace the anode rod ($20-$50 for the part, $150-$300 with professional installation). If the tank itself is corroded through, the unit needs replacement.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Water Heater Not Working? We Can Help.</h2>
              <p className="text-red-100 mb-6">
                If you&apos;ve tried troubleshooting and still have water heater problems, our licensed plumbers provide same-day water heater repair across Middlesex County. We work on all brands -Rheem, A.O. Smith, Bradford White, Navien, Rinnai, Noritz, and more. No diagnostic fee with repair. Available 24/7 for emergencies.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/services/water-heater-repair" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  Water Heater Repair Services
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/signs-water-heater-dying" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Signs Your Water Heater Is Dying</h3>
                    <p className="text-sm text-gray-600">Know when it&apos;s time to replace your water heater before it fails completely.</p>
                  </div>
                </Link>
                <Link href="/blog/tankless-vs-tank-water-heater" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Tankless vs Tank Water Heater</h3>
                    <p className="text-sm text-gray-600">Complete cost and performance comparison for NJ homeowners.</p>
                  </div>
                </Link>
                <Link href="/blog/how-to-descale-tankless-water-heater" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">How to Descale a Tankless Water Heater</h3>
                    <p className="text-sm text-gray-600">Step-by-step descaling guide to maintain your tankless unit.</p>
                  </div>
                </Link>
              </div>
            </section>
          </div>
          {/* Sidebar */}
          <aside className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="sticky top-[6rem] space-y-6">
              {/* Call Now */}
              <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-red-700">
                <p className="text-lg font-bold text-gray-900 mb-1">Need a Plumber?</p>
                <p className="text-gray-600 text-sm mb-4">Expert water heater repair and diagnostics - same day service available.</p>
                <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-red-800 transition w-full mb-2">Call Niti: {BUSINESS_INFO.phone}</a>
                <a href={BUSINESS_INFO.phone2Link} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition w-full">Call Danny: {BUSINESS_INFO.phone2}</a>
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
                  <li><Link href="/services/tankless-water-heater-installation" className="text-gray-700 hover:text-red-700 transition">Tankless Water Heater Installation</Link></li>
                  <li><Link href="/services/water-heater-repair" className="text-gray-700 hover:text-red-700 transition">Water Heater Repair</Link></li>
                  <li><Link href="/services/water-heater-replacement" className="text-gray-700 hover:text-red-700 transition">Water Heater Replacement</Link></li>
                  <li><Link href="/services/boiler-repair-service" className="text-gray-700 hover:text-red-700 transition">Boiler Repair</Link></li>
                  <li><Link href="/services/gas-line-repair-installation" className="text-gray-700 hover:text-red-700 transition">Gas Line Services</Link></li>
                  <li><Link href="/services/emergency-plumbing" className="text-gray-700 hover:text-red-700 transition">Emergency Plumbing</Link></li>
                </ul>
                <Link href="/services" className="inline-block text-red-700 hover:text-red-800 font-medium text-sm mt-3">All Services</Link>
              </div>
              {/* Related Blogs */}
              <div className="bg-white rounded-xl shadow-md p-5">
                <p className="font-bold text-gray-900 mb-3">You Might Also Like</p>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/blog/signs-water-heater-dying" className="text-gray-700 hover:text-red-700 transition">Signs Your Water Heater Is Dying</Link></li>
                  <li><Link href="/blog/tankless-vs-tank-water-heater" className="text-gray-700 hover:text-red-700 transition">Tankless vs Tank Water Heater</Link></li>
                  <li><Link href="/blog/how-to-descale-tankless-water-heater" className="text-gray-700 hover:text-red-700 transition">How to Descale a Tankless Water Heater</Link></li>
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
