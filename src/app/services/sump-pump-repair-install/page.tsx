import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sump Pump Repair and Installation NJ - Illyrian Group Corp",
  description: "Professional sump pump repair and installation in East Brunswick, NJ. Protect your basement from flooding. Battery backup systems available. Call (347) 461-4856.",
  keywords: [
    "sump pump repair",
    "sump pump installation",
    "sump pump replacement",
    "battery backup sump pump",
    "basement flood protection",
    "sump pump service",
  ],
};

export default function SumpPumpPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/professional-plumbing-services.jpg"
            alt="Sump pump repair and installation in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Basement Flood Protection</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sump Pump Repair and Installation
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Protect your basement from flooding with a reliable sump pump system. We install, repair, and maintain sump pumps to keep your home dry year-round.
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
              <span>✓ Battery Backup Available</span>
              <span>✓ New & Existing Homes</span>
              <span>✓ Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs Your Sump Pump Needs Attention</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Pump runs constantly",
                "Strange noises during operation",
                "Pump does not turn on",
                "Visible rust or corrosion",
                "Water in basement despite pump",
                "Pump is over 7-10 years old",
                "No battery backup system",
                "Irregular cycling on/off",
              ].map((sign, index) => (
                <div key={index} className="flex items-center gap-3 bg-amber-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Sump Pump Services</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "New Installation", desc: "Complete sump pump installation including pit excavation, pump sizing, and discharge line setup." },
                { title: "Pump Repair", desc: "Diagnose and repair all sump pump issues - switches, motors, impellers, and electrical problems." },
                { title: "Battery Backup Systems", desc: "Add a battery backup to keep your pump running during power outages." },
                { title: "Pump Replacement", desc: "Upgrade to a more powerful or efficient pump for better protection." },
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Sump Pumps We Install</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Submersible Pumps</h3>
                <p className="text-gray-600 mb-3">Installed inside the sump pit, quieter operation, better for finished basements. More powerful for high water tables.</p>
                <p className="text-sm text-blue-700">Recommended for most homes</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pedestal Pumps</h3>
                <p className="text-gray-600 mb-3">Motor sits above pit, easier to service, more affordable. Good for shallow pits or budget-conscious installations.</p>
                <p className="text-sm text-gray-500">Economical option</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Battery Backup - Essential Protection</h3>
              <p className="text-gray-700 mb-4">Power outages often happen during storms - exactly when you need your sump pump most. A battery backup ensures continuous protection when the power goes out.</p>
              <ul className="space-y-2">
                {[
                  "Runs pump during power outages",
                  "Alarms when primary pump fails",
                  "8-12 hours of backup power",
                  "Peace of mind during storms",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/water-leak-detection" className="text-red-700 hover:text-red-800 font-medium">Water Leak Detection →</Link>
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Services →</Link>
                <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping →</Link>
                <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Basement</h2>
          <p className="text-xl text-red-100 mb-8">Get a free sump pump evaluation.</p>
          <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block">
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}