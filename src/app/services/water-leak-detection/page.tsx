import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Water Leak Detection East Brunswick NJ - Illyrian Group Corp",
  description: "Professional water leak detection in East Brunswick, NJ. Find hidden leaks in walls, floors, and slabs. Advanced technology, minimal disruption. Call (347) 461-4856.",
  keywords: [
    "water leak detection",
    "leak detection",
    "slab leak detection",
    "hidden water leak",
    "leak detection service",
    "find water leak",
  ],
};

export default function WaterLeakDetectionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/water-heater-repair-service.jpg"
            alt="Water leak detection service in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Advanced Detection Technology</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Water Leak Detection
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Advanced leak detection technology to find hidden water leaks in walls, ceilings, floors, and slabs. We locate the leak precisely before any unnecessary demolition.
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
              <span>✓ Non-Invasive Methods</span>
              <span>✓ Precise Location</span>
              <span>✓ Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs of Hidden Water Leaks</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Unexplained high water bills",
                "Sound of running water",
                "Wet spots on walls or floors",
                "Musty or moldy smell",
                "Warm spots on floor (slab leak)",
                "Low water pressure",
                "Cracks in foundation",
                "Water meter spinning when off",
              ].map((sign, index) => (
                <div key={index} className="flex items-center gap-3 bg-amber-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Leaks We Detect</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Slab Leaks", desc: "Leaks in pipes beneath your concrete foundation. We locate precisely before any drilling." },
                { title: "Wall Leaks", desc: "Hidden leaks inside walls from supply lines or fixtures." },
                { title: "Underground Leaks", desc: "Leaks in main water lines or outdoor plumbing." },
                { title: "Ceiling Leaks", desc: "Leaks from upstairs plumbing affecting lower levels." },
              ].map((type, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Detection Methods</h2>
            <p className="text-lg text-gray-600 mb-8">
              We use non-invasive technology to pinpoint leaks without tearing up your home. Once located, we provide repair options and quotes.
            </p>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping →</Link>
                <Link href="/services/sewer-line-repair-replacement" className="text-red-700 hover:text-red-800 font-medium">Sewer Line Repair →</Link>
                <Link href="/services/emergency-plumbing" className="text-red-700 hover:text-red-800 font-medium">Emergency Services →</Link>
                <Link href="/services/plumbing-safety-inspections" className="text-red-700 hover:text-red-800 font-medium">Plumbing Inspections →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Suspect a Hidden Leak?</h2>
          <p className="text-xl text-red-100 mb-8">Schedule a professional leak detection service.</p>
          <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block">
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}