import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Toilet and Faucet Installation NJ - Illyrian Group Corp",
  description: "Professional toilet and faucet installation in East Brunswick, NJ. Upgrade your fixtures with expert plumbing installation. All brands. Call (347) 461-4856.",
  keywords: [
    "toilet installation",
    "faucet installation",
    "toilet replacement",
    "faucet replacement",
    "fixture installation",
    "bathroom fixtures",
  ],
};

export default function ToiletFaucetPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/bathroom-remodel-marble-shower.jpg"
            alt="Toilet and faucet installation in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Fixture Specialists</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Toilet and Faucet Installation
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Professional installation of toilets, faucets, and bathroom fixtures. We work with all major brands and ensure proper installation for years of trouble-free use.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href={BUSINESS_INFO.phoneLink} className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
              </a>
              <a href={BUSINESS_INFO.phone2Link} className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg">
                Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span>✓ All Major Brands</span>
              <span>✓ Proper Installation</span>
              <span>✓ Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Toilet Installation Services</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Toilet Replacement</h3>
                <p className="text-gray-600 mb-4">Remove old toilet, install new one with new wax ring, supply line, and hardware. Test for proper operation.</p>
                <ul className="space-y-2">
                  {[
                    "Old toilet removal & disposal",
                    "New wax ring and bolts",
                    "New supply line",
                    "Caulking and testing",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Toilet Types We Install</h3>
                <p className="text-gray-600 mb-4">We install all toilet styles and brands for residential applications.</p>
                <ul className="space-y-2">
                  {[
                    "Two-piece toilets",
                    "One-piece toilets",
                    "Comfort height toilets",
                    "Water-saving models",
                    "ADA compliant toilets",
                    "Smart toilets",
                  ].map((type, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Faucet Installation Services</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { title: "Bathroom Faucets", desc: "Single-handle, widespread, and centerset faucets for vanities" },
                { title: "Kitchen Faucets", desc: "Pull-down, pull-out, and traditional kitchen faucets" },
                { title: "Shower Fixtures", desc: "Shower heads, valves, and complete shower systems" },
                { title: "Tub Faucets", desc: "Tub spouts, freestanding tub fillers, and roman tub faucets" },
                { title: "Utility Faucets", desc: "Laundry, utility sink, and outdoor faucets" },
                { title: "Touchless Faucets", desc: "Motion-activated faucets for kitchens and baths" },
              ].map((service, index) => (
                <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs You Need New Fixtures</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Constant dripping or leaking",
                "Rust or corrosion visible",
                "Handles difficult to turn",
                "Low water pressure from fixture",
                "Outdated appearance",
                "Repair parts no longer available",
                "Toilet runs constantly",
                "Wobbling or loose toilet",
              ].map((sign, index) => (
                <div key={index} className="flex items-center gap-3 bg-amber-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Brands We Work With</h3>
              <p className="text-gray-700 mb-4">We install fixtures from all major manufacturers including Kohler, Moen, Delta, American Standard, TOTO, Grohe, and more. Bring your own fixtures or let us help you choose.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800 font-medium">Bathroom Remodeling →</Link>
                <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800 font-medium">Water Heater Replacement →</Link>
                <Link href="/services/water-filtration-system" className="text-red-700 hover:text-red-800 font-medium">Water Filtration →</Link>
                <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Fixtures Installed?</h2>
          <p className="text-xl text-red-100 mb-8">Professional installation for toilets, faucets, and more.</p>
          <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block">
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}