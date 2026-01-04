import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "7 Warning Signs Your Water Heater Is Dying (And What to Do)",
  description: "Learn the warning signs your water heater is failing. Age, rust, leaks, and more. Know when to repair vs replace. Expert NJ plumber advice.",
  keywords: [
    "signs water heater is dying",
    "water heater replacement signs",
    "when to replace water heater",
    "water heater lifespan",
    "water heater failing",
    "old water heater symptoms",
  ],
  openGraph: {
    title: "7 Warning Signs Your Water Heater Is Dying (And What to Do)",
    description: "Know when your water heater needs repair or replacement. Expert guide from NJ licensed plumbers.",
    type: "article",
    publishedTime: "2025-01-15T08:00:00.000Z",
    authors: ["Illyrian Plumber"],
  },
};

export default function WaterHeaterDyingPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "7 Warning Signs Your Water Heater Is Dying (And What to Do)",
    description: "Learn the warning signs your water heater is failing and when to repair vs replace.",
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
    datePublished: "2025-01-15T08:00:00.000Z",
    dateModified: "2025-01-15T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/blog/signs-water-heater-dying",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long do water heaters last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional tank water heaters last 10-12 years on average, while tankless water heaters can last 20-25 years with proper maintenance. Water quality, usage patterns, and maintenance frequency all affect lifespan. If your tank water heater is over 10 years old, start planning for replacement.",
        },
      },
      {
        "@type": "Question",
        name: "What are the signs a water heater is going bad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common signs include: age over 10 years, rusty or discolored water, rumbling or popping noises, water pooling around the base, inconsistent water temperature, reduced hot water supply, and visible rust or corrosion on the tank. Multiple symptoms indicate replacement is likely needed.",
        },
      },
      {
        "@type": "Question",
        name: "Is it worth repairing a 10 year old water heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generally, no. At 10 years, a tank water heater is nearing the end of its typical lifespan. Repairs may extend life by a year or two, but replacement is usually more cost-effective. Consider repair only for minor issues if the unit is under 8 years old and in good overall condition.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if my water heater needs to be replaced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Replace your water heater if: it's over 10 years old (tank) or 20 years old (tankless), there's active leaking from the tank, multiple components have failed, rust is visible on the tank body, or you're making frequent repairs. A professional inspection can confirm whether repair or replacement is best.",
        },
      },
      {
        "@type": "Question",
        name: "Can a water heater last 20 years?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tank water heaters rarely last 20 years -the tank eventually corrodes regardless of maintenance. Tankless water heaters can last 20-25 years because they don't store water. If your tank water heater is still working at 15+ years, it's borrowed time -replace it before it fails catastrophically.",
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
              src="/images/water-heater-repair-service.jpg"
              alt="Water heater showing signs of failure"
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
                <time dateTime="2025-01-15">January 15, 2025</time>
                <span>12 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                7 Warning Signs Your Water Heater Is Dying (And What to Do)
              </h1>
              <p className="text-xl text-gray-300">
                Don&apos;t wait for a flood or cold shower. Learn to recognize the signs your water heater is failing so you can plan ahead.
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
                <p className="font-semibold text-gray-900">Written by {BUSINESS_INFO.name}</p>
                <p className="text-sm text-gray-600">Licensed Master Plumbers serving Middlesex County, NJ since 2020</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                Nobody wants to discover their water heater has failed -especially during a cold New Jersey morning when you&apos;re trying to shower. But water heaters don&apos;t die suddenly. They give warning signs for weeks or months before complete failure.
              </p>
              <p>
                Knowing how to read these warning signs gives you time to plan, budget, and schedule a replacement on your terms -rather than scrambling for emergency service when water is flooding your basement. After responding to countless failed water heaters throughout Middlesex County, we&apos;ve compiled the seven most common signs your water heater is reaching the end of its life.
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">The 7 Warning Signs</h2>
              <ul className="space-y-2">
                <li><a href="#sign-1" className="text-red-700 hover:text-red-800">1. Age: The #1 Predictor</a></li>
                <li><a href="#sign-2" className="text-red-700 hover:text-red-800">2. Rusty or Discolored Water</a></li>
                <li><a href="#sign-3" className="text-red-700 hover:text-red-800">3. Strange Noises</a></li>
                <li><a href="#sign-4" className="text-red-700 hover:text-red-800">4. Water Pooling Around Base</a></li>
                <li><a href="#sign-5" className="text-red-700 hover:text-red-800">5. Inconsistent Temperature</a></li>
                <li><a href="#sign-6" className="text-red-700 hover:text-red-800">6. Reduced Hot Water Supply</a></li>
                <li><a href="#sign-7" className="text-red-700 hover:text-red-800">7. Visible Rust and Corrosion</a></li>
                <li><a href="#repair-vs-replace" className="text-red-700 hover:text-red-800">Repair vs Replace Decision</a></li>
                <li><a href="#middlesex-county" className="text-red-700 hover:text-red-800">Middlesex County Considerations</a></li>
                <li><a href="#faq" className="text-red-700 hover:text-red-800">Frequently Asked Questions</a></li>
              </ul>
            </nav>

            {/* Sign 1 */}
            <section id="sign-1" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">1</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Age: The #1 Predictor of Failure</h2>
              </div>

              <p className="text-gray-700 mb-6">
                The single most reliable indicator that your water heater is dying? Its age. Like all appliances, water heaters have a finite lifespan, and once they pass that threshold, failure becomes increasingly likely.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Average Water Heater Lifespans</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-red-700 mb-2">10-12 years</p>
                    <p className="text-gray-700">Traditional tank water heaters</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-green-600 mb-2">20-25 years</p>
                    <p className="text-gray-700">Tankless water heaters</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">How to Find Your Water Heater&apos;s Age</h3>

              <p className="text-gray-700 mb-4">
                Check the manufacturer&apos;s label on your tank. The serial number typically contains the manufacture date, though the format varies by brand:
              </p>

              <ul className="space-y-3 text-gray-700 mb-6">
                <li><strong>Common formats:</strong> The first four digits often represent the year and month (e.g., &quot;0915&quot; = September 2015)</li>
                <li><strong>Letter codes:</strong> Some brands use letters where A=January, B=February, etc., followed by two digits for the year</li>
                <li><strong>If unsure:</strong> Search the manufacturer&apos;s website or call them with the serial number</li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Age Action Guide</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Under 8 years:</strong> Normal operation expected. Annual maintenance recommended.</li>
                  <li><strong>8-10 years:</strong> Monitor closely for other warning signs. Start budgeting for replacement.</li>
                  <li><strong>10-12 years:</strong> Begin shopping for a replacement. Schedule inspection.</li>
                  <li><strong>12+ years:</strong> Replace proactively -you&apos;re on borrowed time.</li>
                </ul>
              </div>
            </section>

            {/* Sign 2 */}
            <section id="sign-2" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">2</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Rusty or Discolored Water</h2>
              </div>

              <p className="text-gray-700 mb-6">
                If rusty or brownish water is coming from your hot water taps (but not the cold), it&apos;s a strong indication that the inside of your water heater tank is corroding.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Serious: Tank Corrosion</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Rust from hot taps only</li>
                    <li>• Worsening over time</li>
                    <li>• Tank is 8+ years old</li>
                    <li>• Anode rod is depleted</li>
                  </ul>
                  <p className="text-sm font-semibold text-red-700 mt-3">Likely needs replacement</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Less Serious: Other Causes</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Rust from hot AND cold taps</li>
                    <li>• Occurs after vacation/non-use</li>
                    <li>• Galvanized supply pipes</li>
                    <li>• Municipal water issues</li>
                  </ul>
                  <p className="text-sm font-semibold text-green-700 mt-3">May not be the water heater</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">The Anode Rod Connection</h4>
                <p className="text-gray-700">
                  Inside your tank is a &quot;sacrificial anode rod&quot; -a metal rod that attracts corrosive elements to protect the tank lining. Once this rod is depleted (typically after 3-5 years), the tank itself starts corroding. Regular anode rod replacement can extend tank life, but once rust appears in the water, the damage may be irreversible.
                </p>
              </div>
            </section>

            {/* Sign 3 */}
            <section id="sign-3" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">3</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Strange Noises: Rumbling, Popping, Banging</h2>
              </div>

              <p className="text-gray-700 mb-6">
                As water heaters age, sediment builds up on the bottom of the tank. When the burner heats the tank, trapped water under this sediment layer boils and creates rumbling, popping, or banging sounds.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Rumbling Sounds</h4>
                  <p className="text-gray-700">Low, continuous rumbling indicates significant sediment buildup. The heater works harder to heat water through the sediment layer, reducing efficiency and accelerating tank wear.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Popping Sounds</h4>
                  <p className="text-gray-700">Sharp popping sounds occur when steam bubbles escape from beneath hardened sediment deposits. This indicates more severe buildup that may not be fully removable.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Banging or Knocking</h4>
                  <p className="text-gray-700">Loud banging can indicate &quot;water hammer&quot; (a plumbing issue) or severe internal problems. If it happens only when the burner cycles, it&apos;s likely tank-related.</p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Can Flushing Help?</h4>
                <p className="text-gray-700">
                  If caught early (noises just starting in a younger tank), annual flushing can remove sediment and quiet the tank. However, once sediment has hardened over years, flushing may not help, and noises will persist or worsen. Regular annual flushing prevents this problem.
                </p>
              </div>
            </section>

            {/* Sign 4 */}
            <section id="sign-4" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">4</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Water Pooling Around the Base</h2>
              </div>

              <p className="text-gray-700 mb-6">
                Water around your water heater is never a good sign. While not always catastrophic, any moisture near the tank requires immediate investigation.
              </p>

              <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/water-heater-maintenance-parts.jpg"
                  alt="Water heater inspection and maintenance"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 p-3 bg-gray-50">Regular inspection can catch leaks before they cause major damage.</p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Leak Sources</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold text-green-700 mb-2">Repairable Leaks</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• T&P relief valve discharge</li>
                    <li>• Inlet/outlet connection drips</li>
                    <li>• Drain valve leaking</li>
                    <li>• Condensation (high humidity)</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold text-red-700 mb-2">Requires Replacement</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Tank body leak</li>
                    <li>• Seam corrosion failure</li>
                    <li>• Bottom of tank leaking</li>
                    <li>• Any expanding leak</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Emergency Action</h4>
                <p className="text-gray-700">
                  If water is actively leaking from the tank body, turn off the water supply and power/gas immediately. Place towels or a bucket to catch water and call for emergency service. A leaking tank can rupture without warning, releasing 40-80 gallons of water.
                </p>
              </div>
            </section>

            {/* Sign 5 */}
            <section id="sign-5" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">5</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Inconsistent Water Temperature</h2>
              </div>

              <p className="text-gray-700 mb-6">
                When your shower alternates between comfortable and scalding, or your hot water &quot;goes cold&quot; mid-use, your water heater is struggling.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Possible Causes</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-500 text-xl">⚙️</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Failing Thermostat</h4>
                      <p className="text-gray-700 text-sm">Thermostats can fail over time, causing erratic temperature control. Often repairable if the tank is otherwise healthy.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl">🔥</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Failing Heating Element (Electric)</h4>
                      <p className="text-gray-700 text-sm">Electric water heaters have upper and lower heating elements. When one fails, you may get lukewarm water or reduced capacity. Elements are replaceable.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-500 text-xl">🪨</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Sediment Buildup</h4>
                      <p className="text-gray-700 text-sm">Sediment insulates water from the heating source, causing slow recovery and inconsistent temperatures. In gas heaters, sediment reduces burner efficiency.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">🔄</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Dip Tube Failure</h4>
                      <p className="text-gray-700 text-sm">The dip tube directs cold incoming water to the bottom of the tank. If it breaks, cold water mixes with hot at the top, causing inconsistent temperatures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sign 6 */}
            <section id="sign-6" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">6</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Reduced Hot Water Supply</h2>
              </div>

              <p className="text-gray-700 mb-6">
                If your 50-gallon tank used to give three long showers but now runs out after one and a half, something is wrong. Reduced capacity is a common sign of an aging water heater.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Why Hot Water Supply Decreases</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Sediment displacement:</strong> As sediment builds up, it occupies space that previously held hot water. A tank rated for 50 gallons may only hold 30-35 gallons of usable water.</li>
                  <li><strong>Heating element issues:</strong> Failing elements (electric) or burner problems (gas) mean slower recovery times between uses.</li>
                  <li><strong>Thermostat creep:</strong> Thermostats can drift over time, heating water to lower temperatures than set.</li>
                  <li><strong>Increased household demand:</strong> Has your family grown? Have you added fixtures? Sometimes it&apos;s not the heater -you may simply need more capacity.</li>
                </ul>
              </div>
            </section>

            {/* Sign 7 */}
            <section id="sign-7" className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl">7</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Visible Rust and Corrosion</h2>
              </div>

              <p className="text-gray-700 mb-6">
                External rust on the tank or around fittings indicates moisture exposure and advancing corrosion. While some surface rust is normal on older units, significant rust is a warning sign.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Minor Concern</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Light rust on fittings only</li>
                    <li>• Surface rust on jacket</li>
                    <li>• Rust around drain valve</li>
                    <li>• Unit under 8 years old</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Major Concern</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Rust on tank body itself</li>
                    <li>• Rust flaking or scaling</li>
                    <li>• Rust combined with moisture</li>
                    <li>• Rust near seams or welds</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700">
                <strong>Important:</strong> If you can see rust on the outside of the tank body (not just fittings or jacket), internal corrosion is likely more advanced. Combined with any of the other warning signs, visible rust strongly suggests replacement.
              </p>
            </section>

            {/* Repair vs Replace Section */}
            <section id="repair-vs-replace" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Repair vs Replace: Making the Decision</h2>

              <p className="text-gray-700 mb-6">
                Not every problem requires replacement. Here&apos;s a practical guide to the repair vs. replace decision:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The 50% Rule</h3>
                <p className="text-gray-700 mb-4">
                  If a repair costs more than 50% of a new unit, replacement usually makes more financial sense -especially if the unit is over 8 years old.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Consider Repair If:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      Unit is under 8 years old
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      Single component failure
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      No leaks from tank body
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      No rust in water
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      First major repair needed
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4">Consider Replacement If:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-red-600">✗</span>
                      Unit is 10+ years old
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-600">✗</span>
                      Multiple warning signs present
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-600">✗</span>
                      Tank is leaking
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-600">✗</span>
                      Rust in hot water
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-600">✗</span>
                      Frequent repairs needed
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Consider Upgrading to Tankless</h4>
                <p className="text-gray-700">
                  If you&apos;re replacing a tank water heater anyway, this is the perfect time to consider upgrading to tankless. While the upfront cost is higher, tankless units last 20-25 years (vs 10-12 for tanks), provide endless hot water, and save 20-34% on water heating energy costs.
                </p>
                <Link href="/blog/tankless-vs-tank-water-heater" className="text-red-700 hover:text-red-800 font-medium mt-2 inline-block">
                  Read our Tankless vs Tank Comparison →
                </Link>
              </div>
            </section>

            {/* Middlesex County Section */}
            <section id="middlesex-county" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Middlesex County Considerations</h2>

              <p className="text-gray-700 mb-6">
                Living in Central New Jersey affects water heater lifespan and replacement decisions:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Hard Water Impact</h4>
                  <p className="text-gray-700">Middlesex County&apos;s moderately hard water (7-10 grains per gallon) accelerates sediment buildup. Water heaters in our area often show sediment-related symptoms earlier than units in soft water regions. Annual flushing is essential here.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">High Demand Seasons</h4>
                  <p className="text-gray-700">Our cold winters mean higher hot water demand. Failing units are more noticeable when you&apos;re taking hotter, longer showers. Most emergency calls come in winter -schedule replacement before the cold season hits.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Basement Installations</h4>
                  <p className="text-gray-700">Most Middlesex County homes have basement water heaters. This is actually good news -basement leaks cause less damage than units on upper floors. Still, a drain pan and water alarm are worthwhile investments.</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How long do water heaters last?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Traditional tank water heaters last 10-12 years on average, while tankless water heaters can last 20-25 years with proper maintenance. Water quality, usage patterns, and maintenance frequency all affect lifespan. If your tank water heater is over 10 years old, start planning for replacement.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Is it worth repairing a 10 year old water heater?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Generally, no. At 10 years, a tank water heater is nearing the end of its typical lifespan. Repairs may extend life by a year or two, but replacement is usually more cost-effective -especially since the remaining lifespan is uncertain. Consider repair only for minor issues if the unit is under 8 years old and in good overall condition.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">Can a water heater last 20 years?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">Tank water heaters rarely last 20 years -the tank eventually corrodes regardless of maintenance. Tankless water heaters can last 20-25 years because they don&apos;t store water. If your tank water heater is still working at 15+ years, it&apos;s borrowed time -replace it before it fails catastrophically and floods your home.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">What should I do if my water heater is leaking?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">First, turn off the water supply and power/gas to the unit. Then determine if the leak is coming from the tank itself (replacement needed) or a fitting/valve (possibly repairable). Place towels or a bucket to catch water and call for service. If water is actively flowing from the tank body, this is an emergency -a tank can rupture without warning.</p>
                  </div>
                </details>

                <details className="group bg-gray-50 rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">How much does water heater replacement cost?</h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700">In New Jersey, tank water heater replacement typically costs $1,200-$2,500 including installation. Tankless water heater installation runs $2,500-$4,500+ depending on the unit selected and any gas line upgrades needed. We provide free estimates and can explain all your options based on your specific situation.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Concerned About Your Water Heater?</h2>
              <p className="text-red-100 mb-6">
                If you&apos;ve noticed any of these warning signs, don&apos;t wait for complete failure. Our licensed plumbers can inspect your water heater, diagnose issues, and recommend repair or replacement options. Free estimates on new installations.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/services/water-heater-replacement" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
                  View Replacement Options
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/tankless-vs-tank-water-heater" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Tankless vs Tank: Complete Comparison</h3>
                    <p className="text-sm text-gray-600">Compare your replacement options.</p>
                  </div>
                </Link>
                <Link href="/blog/how-to-descale-tankless-water-heater" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-700 mb-2">Tankless Maintenance Guide</h3>
                    <p className="text-sm text-gray-600">Keep your new tankless running efficiently.</p>
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
