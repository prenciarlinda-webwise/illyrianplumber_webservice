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
  title: "Sump Pump Repair and Installation NJ - Illyrian Plumber",
  description: "Professional sump pump repair, installation, and battery backup systems in East Brunswick and Middlesex County, NJ. Same-day service. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/services/sump-pump-repair-install",
  },
  keywords: [
    "sump pump repair",
    "sump pump installation",
    "sump pump replacement",
    "battery backup sump pump",
    "basement flood protection",
    "sump pump service",
    "sump pump repair NJ",
    "sump pump installation NJ",
    "sump pump not working",
    "sump pump maintenance",
    "basement waterproofing NJ",
    "sump pump battery backup NJ",
    "submersible sump pump",
    "pedestal sump pump",
    "Middlesex County sump pump",
    "East Brunswick sump pump service",
    "emergency sump pump repair",
  ],
  openGraph: {
    title: "Sump Pump Repair and Installation NJ - Illyrian Plumber",
    description: "Professional sump pump repair, installation, and battery backup systems in East Brunswick and Middlesex County, NJ.",
    type: "website",
    url: "https://www.illyrianplumber.com/services/sump-pump-repair-install",
    siteName: "Illyrian Plumber",
    images: [
      {
        url: "https://www.illyrianplumber.com/images/professional-plumbing-services.jpg",
        width: 1200,
        height: 630,
        alt: "Illyrian Plumber sump pump repair and installation service in East Brunswick NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sump Pump Repair and Installation NJ - Illyrian Plumber",
    description: "Professional sump pump repair, installation, and battery backup systems in East Brunswick and Middlesex County, NJ.",
    images: ["https://www.illyrianplumber.com/images/professional-plumbing-services.jpg"],
  },
};

const faqData = [
  {
    question: "Why does my sump pump run constantly?",
    answer: "A sump pump that runs continuously may indicate a high water table, a stuck float switch, an undersized pump, a check valve problem, or underground water flowing faster than the pump can handle. It could also be caused by a broken or disconnected discharge pipe that sends water right back into the pit. Any of these issues should be addressed promptly to prevent pump burnout and basement flooding.",
  },
  {
    question: "Can I install a sump pump in a home that does not have one?",
    answer: "Yes. We install sump pump systems in homes that have never had one. This involves excavating a sump pit in the basement floor, installing the pump, running a discharge line to the exterior of the home, and connecting to a proper drainage point. If you are experiencing basement moisture, water seepage, or flooding during heavy rains, a sump pump system can solve the problem.",
  },
  {
    question: "What maintenance does a sump pump need?",
    answer: "Regular sump pump maintenance includes testing the pump by pouring water into the pit, cleaning the inlet screen, checking the float switch operation, inspecting the discharge line for blockages, testing the check valve, and verifying the battery backup charge. We recommend testing your pump at least every 3 months and having a professional inspection annually, especially before the rainy spring season.",
  },
  {
    question: "My sump pump is making loud noises - what does that mean?",
    answer: "Unusual sump pump noises can indicate several issues. Grinding or rattling often means the impeller is damaged or debris has entered the pump. A continuous humming without pumping suggests the pump is jammed or the impeller is frozen. Banging sounds when the pump shuts off indicate a missing or failed check valve allowing water to slam back down. Any unusual noise warrants prompt inspection to prevent complete failure.",
  },
];

export default function SumpPumpPage() {
  const serviceSchema = getServiceSchema({
    name: "Sump Pump Repair and Installation",
    description: "Professional sump pump repair and installation in East Brunswick, NJ. Protect your basement from flooding. Battery backup systems available.",
    slug: "sump-pump-repair-install",
  });

  const faqSchema = getFaqSchema(faqData);

  const howToSchema = getHowToSchema({
    name: "Sump Pump Installation Process",
    description: "Whether you need a new sump pump installation or a replacement of an existing system, our process ensures reliable performance for years to come.",
    steps: [
      {
        name: "Basement Assessment",
        text: "We evaluate your basement for water entry points, soil conditions, water table level, and existing drainage. This helps us determine the right pump size, type, and placement for optimal protection.",
      },
      {
        name: "Pump Selection",
        text: "Based on the assessment, we recommend the right pump type (submersible or pedestal), horsepower rating, and whether a battery backup system is needed. We explain the options and provide a detailed quote.",
      },
      {
        name: "Pit Preparation",
        text: "For new installations, we excavate the sump pit, install a proper pit liner, and add a gravel base for drainage. For replacements, we clean the existing pit and inspect it for structural integrity.",
      },
      {
        name: "Pump Installation",
        text: "We install the pump with proper float switch placement, connect the discharge line with a check valve to prevent backflow, and route the discharge to a safe exterior drainage point away from the foundation.",
      },
      {
        name: "Testing and Calibration",
        text: "We fill the pit to test pump activation, check discharge flow, verify the check valve operation, and test the battery backup system. We adjust float switch levels for optimal performance.",
      },
    ],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Sump Pump Repair & Installation", path: "/services/sump-pump-repair-install" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceHero
        tagline="Basement Flood Protection"
        heading="Sump Pump Repair and Installation in NJ"
        subheading="Protect your basement from flooding with a reliable sump pump system. We install, repair, and maintain sump pumps and battery backup systems to keep your Middlesex County home dry year-round."
        backgroundImage="/images/professional-plumbing-services.jpg"
        backgroundAlt="Sump pump repair and installation in East Brunswick NJ"
        service="Sump Pump Repair & Installation"
        bullets={["Battery Backup Available", "Same-Day Repair", "New & Existing Homes", "Licensed & Insured"]}
      />

      <StatsStrip />

      {/* About + signs + services + types -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* About Illyrian Plumber */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Illyrian Plumber, sump pump experts in Middlesex County</h2>
              <p className="text-gray-700 leading-relaxed">
                Illyrian Plumber has been protecting basements in East Brunswick and Middlesex County, NJ for over {BUSINESS_INFO.stats.yearsExperience} years. Our licensed plumbers specialize in sump pump repair, installation, replacement, and battery backup systems. We respond quickly to sump pump emergencies because we know that a failed pump during a storm means potential flood damage. Call us for same-day service and honest, upfront pricing.
              </p>
            </div>

            {/* Signs Your Sump Pump Needs Attention */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs your sump pump needs repair or replacement</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your sump pump is your basement&apos;s first line of defense against water damage. A failing pump can go unnoticed until a heavy rainstorm causes flooding. Knowing the warning signs helps you address problems before they lead to costly water damage. If you notice any of these signs, call Illyrian Plumber for a professional sump pump inspection.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Pump runs constantly or cycles rapidly",
                "Strange grinding or rattling noises",
                "Pump does not turn on when pit fills",
                "Visible rust or corrosion on the pump",
                "Water in basement despite pump running",
                "Pump is over 7-10 years old",
                "No battery backup system installed",
                "Irregular cycling on and off",
                "Pump vibrates excessively",
                "Musty or damp smell in basement",
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
              Regular maintenance helps prevent sump pump failures. Learn about proper care in our guide: <Link href="/blog/sump-pump-maintenance-guide" className="text-red-700 hover:text-red-800 font-medium">Sump Pump Maintenance Guide</Link>.
            </p>

            {/* Our Sump Pump Services */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our sump pump services</h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide complete sump pump services from new installations to emergency repairs. Whether your existing pump has failed, you need an upgrade, or you want to add battery backup protection, our licensed plumbers handle it all.
            </p>
            <div className="space-y-4 mb-12">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Sump pump installation</h3>
                <p className="text-gray-600">Complete sump pump installation including pit excavation, pump sizing, discharge line routing, and check valve installation. We size the pump to match your home&apos;s water volume and water table conditions. For new installations, we excavate the sump pit, pour a gravel base, set the pit liner, install the pump with proper float switch placement, and run the discharge line to a safe exterior drainage point away from your foundation.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Sump pump repair</h3>
                <p className="text-gray-600">We diagnose and repair all sump pump problems including stuck or broken float switches, burned out motors, damaged impellers, failed check valves, clogged inlet screens, and electrical issues. Our plumbers carry common replacement parts for same-day repairs. If your pump is beyond repair or approaching end-of-life, we will recommend replacement options rather than investing in expensive repairs on a failing unit.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Sump pump replacement</h3>
                <p className="text-gray-600">When your existing pump has reached the end of its lifespan or is no longer adequate for your needs, we provide complete replacement service. We remove the old pump, clean the pit, and install a properly sized replacement. If your old pump was undersized for your water table conditions, we will recommend a more powerful unit to ensure reliable performance.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Battery backup sump pump systems</h3>
                <p className="text-gray-600">A battery backup sump pump is essential protection for NJ homeowners. When the power goes out during a heavy storm, your primary pump stops working. A battery backup system automatically kicks in, running your pump for 8-12 hours on battery power. It also serves as a secondary pump if your primary unit fails for any reason. We install and maintain battery backup systems that provide reliable protection when you need it most.</p>
              </div>
            </div>

            {/* Types of Sump Pumps */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of sump pumps we install</h2>
            <p className="text-lg text-gray-600 mb-6">
              Choosing the right type of sump pump depends on your basement setup, water table level, and whether you have a finished basement. Here are the main types we install and their best applications.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Submersible sump pumps</h3>
                <p className="text-gray-600 mb-3">The motor and pump are completely enclosed in a waterproof housing that sits inside the sump pit, fully submerged when water enters. Submersible pumps are quieter than pedestal pumps, more powerful, and better suited for homes with high water tables or finished basements where noise matters. They handle larger volumes of water and are less likely to overheat because the surrounding water acts as a coolant.</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- Quieter operation for finished basements</li>
                  <li>- More powerful pumping capacity</li>
                  <li>- Water-cooled motor prevents overheating</li>
                  <li>- Sealed design prevents debris entry</li>
                </ul>
                <p className="mt-3 text-sm text-blue-700 font-medium">Recommended for most NJ homes</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pedestal sump pumps</h3>
                <p className="text-gray-600 mb-3">The motor sits on a pedestal above the sump pit with only the impeller assembly in the water. Pedestal pumps are more affordable, easier to service since the motor is accessible, and have a longer motor lifespan because it stays dry. They work well in shallow pits where a submersible pump would not fit, and are a good budget option for unfinished basements.</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- More affordable upfront cost</li>
                  <li>- Easier to access for maintenance</li>
                  <li>- Works in shallow sump pits</li>
                  <li>- Longer motor lifespan</li>
                </ul>
                <p className="mt-3 text-sm text-gray-500 font-medium">Budget-friendly option for unfinished basements</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark differentiator band */}
      <DifferentiatorGrid
        tone="band"
        heading="Why homeowners trust us for sump pump service"
        subheading="Basement flooding does not wait for business hours. Here is what backs up every sump pump call."
        items={[
          { icon: "clock", title: "Same-day service", description: "A failed pump during a storm cannot wait. We prioritize sump pump calls and get a licensed plumber out the same day." },
          { icon: "shield", title: "Licensed and insured", description: "Every technician holds a full NJ plumbing license and carries insurance on every installation and repair." },
          { icon: "dollar", title: "Upfront pricing", description: "You get a written quote before any pit is excavated or pump replaced. No surprise charges once we start." },
          { icon: "home", title: "Local to Middlesex County", description: `We have protected basements across East Brunswick and Middlesex County for over ${BUSINESS_INFO.stats.yearsExperience} years and know which neighborhoods fight the highest water tables.` },
          { icon: "wrench", title: "Battery backup specialists", description: "We install and service battery backup systems that keep pumping through power outages, exactly when your primary pump needs the help most." },
          { icon: "bolt", title: `${BUSINESS_INFO.stats.projectsCompleted} projects completed`, description: `Trusted by ${BUSINESS_INFO.stats.happyClients} homeowners across Central New Jersey, with a ${BUSINESS_INFO.reviews.rating} star rating on Google.` },
        ]}
      />

      {/* CTA + battery backup + process + problems + NJ factors -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Mid-page CTA Band */}
            <div className="bg-red-700 text-white rounded-xl p-8 mb-12 text-center">
              <h3 className="text-2xl font-bold mb-3">Sump pump not working? Call now.</h3>
              <p className="text-red-100 mb-6 max-w-xl mx-auto">Do not wait for the next storm. Get your sump pump inspected, repaired, or replaced before basement flooding occurs.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                  Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                </a>
                <a href={BUSINESS_INFO.phone2Link} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
                  Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Battery Backup Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Battery backup sump pumps, essential NJ protection</h2>
            <p className="text-lg text-gray-600 mb-6">
              In New Jersey, power outages and heavy storms go hand in hand. A battery backup sump pump ensures your basement stays protected even when the electricity goes out. Here is why we recommend battery backup for every Middlesex County home with a sump pump.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why battery backup is essential in NJ</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {[
                  { benefit: "Storm Power Protection", desc: "Keeps pumping during the heavy rain events that cause power outages" },
                  { benefit: "Primary Pump Backup", desc: "Activates automatically if the primary pump fails for any reason" },
                  { benefit: "Alarm System", desc: "Audible alarm alerts you when the backup activates or water level is high" },
                  { benefit: "8-12 Hours Runtime", desc: "Provides extended protection through long storms and outages" },
                  { benefit: "Peace of Mind", desc: "Protection while you are at work, traveling, or sleeping during storms" },
                  { benefit: "Insurance Protection", desc: "Some insurers offer discounts for homes with backup sump pump systems" },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 text-sm">{item.benefit}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-700">
                Pro tip: test your battery backup system every 3 months by unplugging the primary pump and pouring water into the pit. Replace the backup battery every 3-5 years for reliable performance.
              </p>
            </div>

            {/* Installation Process */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sump pump installation process</h2>
            <p className="text-lg text-gray-600 mb-6">
              Whether you need a new sump pump installation or a replacement of an existing system, our process ensures reliable performance for years to come.
            </p>
            <div className="space-y-4 mb-12">
              {[
                { step: "1", title: "Basement Assessment", desc: "We evaluate your basement for water entry points, soil conditions, water table level, and existing drainage. This helps us determine the right pump size, type, and placement for optimal protection." },
                { step: "2", title: "Pump Selection", desc: "Based on the assessment, we recommend the right pump type (submersible or pedestal), horsepower rating, and whether a battery backup system is needed. We explain the options and provide a detailed quote." },
                { step: "3", title: "Pit Preparation", desc: "For new installations, we excavate the sump pit, install a proper pit liner, and add a gravel base for drainage. For replacements, we clean the existing pit and inspect it for structural integrity." },
                { step: "4", title: "Pump Installation", desc: "We install the pump with proper float switch placement, connect the discharge line with a check valve to prevent backflow, and route the discharge to a safe exterior drainage point away from the foundation." },
                { step: "5", title: "Testing and Calibration", desc: "We fill the pit to test pump activation, check discharge flow, verify the check valve operation, and test the battery backup system. We adjust float switch levels for optimal performance." },
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

            {/* Common Problems */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common sump pump problems we fix</h2>
            <p className="text-lg text-gray-600 mb-6">
              Sump pumps are mechanical devices that work hard, often in harsh conditions. Here are the most common problems we diagnose and repair.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { title: "Stuck Float Switch", desc: "The most common cause of pump failure. The float gets stuck against the pit wall or tangled with wiring, preventing activation." },
                { title: "Burned Out Motor", desc: "Often caused by running continuously without cycling off. Usually means the pump is undersized or the float switch is stuck on." },
                { title: "Clogged Inlet Screen", desc: "Sediment and debris block the pump intake, reducing flow and causing the pump to work harder and overheat." },
                { title: "Failed Check Valve", desc: "Without a working check valve, water in the discharge line flows back into the pit, causing the pump to short-cycle constantly." },
                { title: "Frozen Discharge Line", desc: "In NJ winters, the discharge line can freeze if not properly routed or insulated, preventing water from leaving the pit." },
                { title: "Power Supply Issues", desc: "Tripped breakers, corroded connections, or GFCI outlet problems can prevent the pump from receiving power." },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* NJ Considerations */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why sump pumps are critical in New Jersey</h2>
            <p className="text-lg text-gray-600 mb-6">
              New Jersey&apos;s geography, climate, and soil conditions make sump pumps essential for many Middlesex County homes. Here are the local factors that increase basement flooding risk.
            </p>
            <div className="space-y-4 mb-12">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">High water tables in Middlesex County</h3>
                <p className="text-gray-600">Many areas of East Brunswick, Edison, Old Bridge, and Sayreville have high water tables due to their proximity to rivers, streams, and wetlands. A high water table means groundwater naturally pushes up against your foundation, and without a sump pump to manage this water, basement flooding is a regular occurrence during rainy seasons.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Heavy rainfall and nor&apos;easters</h3>
                <p className="text-gray-600">New Jersey receives 46-50 inches of rain annually, with the heaviest periods in spring and during nor&apos;easters. These intense rain events can dump several inches of water in hours, overwhelming natural drainage and raising the water table rapidly. Your sump pump needs to be in peak condition before storm season arrives.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Clay soil drainage issues</h3>
                <p className="text-gray-600">Much of Middlesex County has clay-heavy soil that does not drain well. Instead of absorbing into the ground, rainwater pools near foundations and seeps through cracks, joints, and porous concrete into basements. This slow, constant water intrusion is exactly what sump pumps are designed to manage.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">Winter freeze and spring thaw</h3>
                <p className="text-gray-600">NJ winters create a unique challenge. Frozen ground prevents water absorption, and when snow melts rapidly in spring, large volumes of water flow toward foundations. This is when many homeowners first discover their sump pump has failed during the winter months of inactivity. Protect your pipes from freeze damage too: <Link href="/blog/frozen-pipes-prevention-repair" className="text-red-700 hover:text-red-800 font-medium">Frozen Pipes Prevention and Repair</Link>.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-bleed dark testimonial band with photo backdrop */}
      <Testimonials
        heading="What Middlesex County basements look like after we visit"
        subheading="Reviews from real sump pump installs, repairs, and storm-season saves."
      />

      {/* Cost + FAQ + service areas + related -- narrow column */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Cost Guide */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sump pump cost guide</h2>
            <p className="text-lg text-gray-600 mb-6">
              Understanding sump pump costs helps you budget for this essential home protection system. Here are typical price ranges for our services in Middlesex County.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { title: "Pump Replacement (existing pit)", range: "$500 - $1,000", note: "Swap out old pump in existing sump pit" },
                { title: "New Installation (with pit)", range: "$1,500 - $3,000", note: "Complete installation including pit excavation" },
                { title: "Battery Backup Addition", range: "$500 - $1,200", note: "Add backup system to existing primary pump" },
                { title: "Sump Pump Repair", range: "$150 - $500", note: "Float switch, check valve, or motor repair" },
                { title: "Dual Pump System", range: "$2,000 - $4,000", note: "Primary submersible plus battery backup" },
                { title: "Annual Maintenance", range: "$100 - $200", note: "Inspection, cleaning, and testing" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-red-700 font-semibold text-lg mb-1">{item.range}</p>
                  <p className="text-gray-600 text-sm">{item.note}</p>
                </div>
              ))}
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sump pump service throughout Middlesex County</h3>
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
                  { label: "Water Leak Detection", href: "/services/water-leak-detection", description: "Find hidden leaks before they flood a basement" },
                  { label: "Emergency Plumbing", href: "/services/emergency-plumbing", description: "24/7 response for flooding and burst pipes" },
                  { label: "Whole House Repiping", href: "/services/whole-house-repiping", description: "For recurring pinhole leaks and old pipe" },
                  { label: "Water Heater Repair", href: "/services/water-heater-repair", description: "Repairs and replacements for tank and tankless units" },
                  { label: "Water Filtration Systems", href: "/services/water-filtration-system", description: "Protect pipes and appliances from hard water" },
                  { label: "Plumbing Safety Inspections", href: "/services/plumbing-safety-inspections", description: "Catch problems before they become emergencies" },
                ]}
              />
            </div>

            {/* Related Blog Posts */}
            <LinkCardGrid
              heading="Learn more about sump pumps"
              tone="dark"
              items={[
                { label: "Sump Pump Maintenance Guide", href: "/blog/sump-pump-maintenance-guide", badge: "Guide" },
                { label: "Battery Backup Sump Pump Guide", href: "/blog/battery-backup-sump-pump-guide", badge: "Guide" },
                { label: "Basement Flood Prevention Checklist", href: "/blog/basement-flood-prevention-checklist", badge: "Checklist" },
                { label: "Frozen Pipes Prevention and Repair", href: "/blog/frozen-pipes-prevention-repair", badge: "Guide" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Protect your basement from flooding</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">Get a free sump pump evaluation. We will inspect your system, recommend improvements, and provide upfront pricing.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Request Free Evaluation
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
