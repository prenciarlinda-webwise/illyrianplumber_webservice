import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Browse all pages on the Illyrian Plumber website including services, service areas, and helpful plumbing articles.",
};

const sitemapData = {
  main: [
    { url: "/", label: "Home" },
    { url: "/about-us", label: "About Us" },
    { url: "/contact-us", label: "Contact Us" },
    { url: "/faq", label: "FAQ" },
    { url: "/services", label: "Services" },
    { url: "/service-areas", label: "Service Areas" },
    { url: "/blog", label: "Blog" },
  ],
  services: [
    { url: "/services/tankless-water-heater-installation", label: "Tankless Water Heater Installation" },
    { url: "/services/water-heater-repair", label: "Water Heater Repair" },
    { url: "/services/water-heater-replacement", label: "Water Heater Replacement" },
    { url: "/services/sewer-line-repair-replacement", label: "Sewer Line Repair & Replacement" },
    { url: "/services/boiler-repair-service", label: "Boiler Repair Service" },
    { url: "/services/gas-line-repair-installation", label: "Gas Line Repair & Installation" },
    { url: "/services/whole-house-repiping", label: "Whole House Repiping" },
    { url: "/services/emergency-plumbing", label: "Emergency Plumbing" },
    { url: "/services/water-leak-detection", label: "Water Leak Detection" },
    { url: "/services/sump-pump-repair-install", label: "Sump Pump Repair & Install" },
    { url: "/services/water-filtration-system", label: "Water Filtration System" },
    { url: "/services/radiant-heating-plumbing", label: "Radiant Heating Plumbing" },
    { url: "/services/bathroom-remodeling", label: "Bathroom Remodeling" },
    { url: "/services/toilet-and-faucet-installation", label: "Toilet & Faucet Installation" },
    { url: "/services/plumbing-safety-inspections", label: "Plumbing Safety Inspections" },
  ],
  serviceAreas: [
    { url: "/service-areas/middlesex-county", label: "Middlesex County" },
    { url: "/service-areas/east-brunswick", label: "East Brunswick" },
    { url: "/service-areas/edison", label: "Edison" },
    { url: "/service-areas/sayreville", label: "Sayreville" },
    { url: "/service-areas/old-bridge", label: "Old Bridge" },
    { url: "/service-areas/monroe-township", label: "Monroe Township" },
    { url: "/service-areas/south-brunswick", label: "South Brunswick" },
    { url: "/service-areas/north-brunswick", label: "North Brunswick" },
  ],
  blog: [
    { url: "/blog/how-tankless-water-heaters-work", label: "How Tankless Water Heaters Work" },
    { url: "/blog/how-to-descale-tankless-water-heater", label: "How to Descale a Tankless Water Heater" },
    { url: "/blog/signs-water-heater-dying", label: "Signs Your Water Heater Is Dying" },
    { url: "/blog/tankless-vs-tank-water-heater", label: "Tankless vs Tank Water Heater" },
    { url: "/blog/what-size-tankless-water-heater", label: "What Size Tankless Water Heater Do I Need?" },
    { url: "/blog/why-is-water-pressure-low", label: "Why Is My Water Pressure Low?" },
    { url: "/blog/whole-house-water-filter-worth-it", label: "Is a Whole House Water Filter Worth It?" },
    { url: "/blog/sump-pump-maintenance-guide", label: "Sump Pump Maintenance Guide" },
    { url: "/blog/common-boiler-problems-winter", label: "Common Boiler Problems in Winter" },
    { url: "/blog/how-long-bathroom-remodel-take", label: "How Long Does a Bathroom Remodel Take?" },
    { url: "/blog/gas-leak-detection-safety", label: "Gas Leak Detection & Safety" },
    { url: "/blog/signs-of-slab-leak-sewer-line", label: "Signs of a Slab Leak or Sewer Line Issue" },
  ],
  legal: [
    { url: "/privacy-policy", label: "Privacy Policy" },
    { url: "/terms-of-service", label: "Terms of Service" },
  ],
};

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Sitemap</h1>
        <p className="text-gray-600 mb-12">Browse all pages on our website</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Main Pages
            </h2>
            <ul className="space-y-2">
              {sitemapData.main.map((page) => (
                <li key={page.url}>
                  <Link
                    href={page.url}
                    className="text-red-600 hover:text-red-700 hover:underline transition"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Services
            </h2>
            <ul className="space-y-2">
              {sitemapData.services.map((page) => (
                <li key={page.url}>
                  <Link
                    href={page.url}
                    className="text-red-600 hover:text-red-700 hover:underline transition"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Service Areas
            </h2>
            <ul className="space-y-2">
              {sitemapData.serviceAreas.map((page) => (
                <li key={page.url}>
                  <Link
                    href={page.url}
                    className="text-red-600 hover:text-red-700 hover:underline transition"
                  >
                    {page.label}, NJ
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Blog Articles
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {sitemapData.blog.map((page) => (
                <li key={page.url}>
                  <Link
                    href={page.url}
                    className="text-red-600 hover:text-red-700 hover:underline transition"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Legal
            </h2>
            <ul className="space-y-2">
              {sitemapData.legal.map((page) => (
                <li key={page.url}>
                  <Link
                    href={page.url}
                    className="text-red-600 hover:text-red-700 hover:underline transition"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
