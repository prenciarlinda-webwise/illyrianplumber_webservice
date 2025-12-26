import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import EmergencyBanner from "@/components/EmergencyBanner";
import { BUSINESS_INFO } from "@/lib/constants";

const serviceAreas: Record<string, { name: string; county: string; zip: string; description: string }> = {
  "plumber-east-brunswick": {
    name: "East Brunswick",
    county: "Middlesex",
    zip: "08816",
    description: "East Brunswick is our home base, allowing us to provide the fastest response times in the area. We know East Brunswick homes, from the older neighborhoods to newer developments.",
  },
  "plumber-new-brunswick": {
    name: "New Brunswick",
    county: "Middlesex",
    zip: "08901",
    description: "From Rutgers University area to downtown New Brunswick, we provide residential and commercial plumbing services throughout the city. Historic homes and modern buildings alike.",
  },
  "plumber-south-river": {
    name: "South River",
    county: "Middlesex",
    zip: "08882",
    description: "We serve South River with complete plumbing services. Whether you have an older home along Main Street or a newer property, we handle all plumbing needs.",
  },
  "plumber-north-brunswick": {
    name: "North Brunswick",
    county: "Middlesex",
    zip: "08902",
    description: "North Brunswick Township residents trust us for emergency plumbing, water heater service, and routine repairs. Fast service throughout the township.",
  },
  "plumber-edison": {
    name: "Edison",
    county: "Middlesex",
    zip: "08817",
    description: "Edison is one of New Jersey's largest townships, and we proudly serve its diverse neighborhoods with professional plumbing services.",
  },
  "plumber-sayreville": {
    name: "Sayreville",
    county: "Middlesex",
    zip: "08872",
    description: "From Parlin to Morgan, we provide plumbing services throughout Sayreville. Emergency service, repairs, and installations available.",
  },
  "plumber-old-bridge": {
    name: "Old Bridge",
    county: "Middlesex",
    zip: "08857",
    description: "Old Bridge Township residents rely on us for quality plumbing work. We service all areas including Madison Park, Brownville, and Cliffwood Beach.",
  },
  "plumber-monroe-township": {
    name: "Monroe Township",
    county: "Middlesex",
    zip: "08831",
    description: "We serve Monroe Township including active adult communities. Experienced with both newer construction and established homes.",
  },
  "plumber-south-brunswick": {
    name: "South Brunswick",
    county: "Middlesex",
    zip: "08852",
    description: "South Brunswick Township trusts us for professional plumbing. We serve Kendall Park, Monmouth Junction, Dayton, and surrounding areas.",
  },
  "plumber-milltown": {
    name: "Milltown",
    county: "Middlesex",
    zip: "08850",
    description: "Milltown's charming borough deserves quality plumbing service. We're familiar with the older homes common in the area.",
  },
  "plumber-highland-park": {
    name: "Highland Park",
    county: "Middlesex",
    zip: "08904",
    description: "Highland Park residents count on us for reliable plumbing. We understand the unique needs of this historic community.",
  },
  "plumber-spotswood": {
    name: "Spotswood",
    county: "Middlesex",
    zip: "08884",
    description: "Spotswood Borough residents trust Illyrian Plumber for professional service. Quick response times from our nearby location.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas[slug];

  if (!area) {
    return {
      title: "Service Area Not Found",
    };
  }

  return {
    title: `Plumber in ${area.name}, NJ | Illyrian Plumber`,
    description: `Professional plumbing services in ${area.name}, NJ. Emergency plumber, water heater repair, drain cleaning, and more. Call (718) 427-4396.`,
    keywords: [
      `${area.name.toLowerCase()} plumber`,
      `plumber ${area.name.toLowerCase()} nj`,
      `${area.name.toLowerCase()} plumbing`,
      `emergency plumber ${area.name.toLowerCase()}`,
      `plumber near ${area.name.toLowerCase()}`,
    ],
  };
}

export async function generateStaticParams() {
  return Object.keys(serviceAreas).map((slug) => ({
    slug,
  }));
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = serviceAreas[slug];

  if (!area) {
    notFound();
  }

  const services = [
    { name: "Emergency Plumbing", href: "/services/emergency-plumbing", desc: "24/7 emergency service for burst pipes, major leaks, and plumbing emergencies." },
    { name: "Water Heater Services", href: "/services/water-heater", desc: "Repair, replacement, and installation of tank and tankless water heaters." },
    { name: "Drain Cleaning", href: "/services/drain-sewer/drain-cleaning", desc: "Professional drain clearing for kitchen, bathroom, and main line clogs." },
    { name: "Leak Detection", href: "/services/emergency-plumbing/water-leak-detection", desc: "Advanced technology to find hidden leaks in walls, floors, and underground." },
    { name: "Kitchen & Bathroom", href: "/services/kitchen-bathroom", desc: "Faucets, toilets, sinks, showers, and complete fixture services." },
    { name: "Sewer Services", href: "/services/drain-sewer/sewer-line-repair", desc: "Camera inspection, sewer repair, and trenchless solutions." },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-red-200 mb-4">
              <Link href="/service-areas" className="hover:text-white transition">Service Areas</Link>
              <span>/</span>
              <span className="text-white">{area.name}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumber in {area.name}, NJ
            </h1>
            <p className="text-xl text-red-100 mb-6 max-w-2xl">
              Professional plumbing services for {area.name} homes and businesses. Licensed plumbers, 24/7 emergency service, and quality workmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold text-lg transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner variant="compact" serviceName={area.name} />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {area.name} Plumbing Services
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              {area.description}
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you need emergency repairs, routine maintenance, or a new installation, our licensed plumbers provide fast, reliable service throughout {area.name} ({area.zip}).
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Services Available in {area.name}</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="bg-gray-50 rounded-lg p-5 hover:bg-red-50 hover:border-red-200 border border-transparent transition group"
                >
                  <h4 className="font-semibold text-gray-900 group-hover:text-red-700 transition mb-1">
                    {service.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </Link>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-900 text-white rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Why {area.name} Chooses Illyrian Plumber</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Fast Response", desc: `Quick arrival times to ${area.name} from our nearby location` },
                  { title: "24/7 Availability", desc: "Emergency plumbing service any time, day or night" },
                  { title: "Upfront Pricing", desc: "Clear quotes before work begins—no surprises" },
                  { title: "Licensed & Insured", desc: "Full NJ licensing and liability coverage" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Areas */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(serviceAreas)
                  .filter(([s]) => s !== slug)
                  .slice(0, 6)
                  .map(([areaSlug, areaData]) => (
                    <Link
                      key={areaSlug}
                      href={`/service-areas/${areaSlug}`}
                      className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-700 transition"
                    >
                      {areaData.name}, NJ
                    </Link>
                  ))}
                <Link
                  href="/service-areas"
                  className="bg-red-100 px-4 py-2 rounded-full text-sm font-medium text-red-700 hover:bg-red-200 transition"
                >
                  View All Areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Need a Plumber in ${area.name}?`}
        description={`Contact us for fast, professional plumbing service in ${area.name}, NJ.`}
      />
    </>
  );
}
