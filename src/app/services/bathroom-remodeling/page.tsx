import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Plumbing NJ - Illyrian Group Corp",
  description: "Professional bathroom remodeling plumbing services in East Brunswick, NJ. Fixture installation, pipe relocation, and complete bathroom plumbing. Call (347) 461-4856.",
  keywords: [
    "bathroom remodeling plumber",
    "bathroom plumbing",
    "bathroom renovation",
    "fixture installation",
    "bathroom remodel",
    "plumbing renovation",
  ],
};

export default function BathroomRemodelingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/bathroom-remodel-marble-shower.jpg"
            alt="Bathroom remodeling plumbing service in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Renovation Plumbing Specialists</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bathroom Remodeling Plumbing
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Transform your bathroom with expert plumbing services. From fixture upgrades to complete bathroom renovations, we handle all the plumbing work for your remodel project.
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
              <span>✓ Fixture Installation</span>
              <span>✓ Complete Renovations</span>
              <span>✓ Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bathroom Plumbing Services</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Fixture Installation", desc: "Install new toilets, sinks, faucets, showers, and tubs. We work with all brands and styles." },
                { title: "Pipe Relocation", desc: "Moving plumbing for new layouts. Relocate supply and waste lines as needed." },
                { title: "Shower & Tub Installation", desc: "Walk-in showers, soaking tubs, and complete shower system installations." },
                { title: "Vanity Plumbing", desc: "Connect single or double vanities with proper water supply and drainage." },
                { title: "Water Supply Upgrades", desc: "Upgrade old galvanized pipes to modern PEX during your remodel." },
                { title: "Rough-In Plumbing", desc: "Complete rough-in for new construction or major bathroom additions." },
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* Gallery Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Bathroom Remodeling Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { src: "/images/bathroom-remodel-marble-shower.jpg", alt: "Marble shower bathroom remodel" },
                { src: "/images/bathroom-renovation-glass-shower-door.jpg", alt: "Glass shower door installation" },
                { src: "/images/bathroom-vanity-sink-installation.jpg", alt: "Vanity sink installation" },
                { src: "/images/bathroom-plumbing-services-nj.jpg", alt: "Bathroom plumbing services" },
                { src: "/images/bathroom-rough-in-plumbing.jpg", alt: "Bathroom rough-in plumbing" },
                { src: "/images/bathroom-plumber-near-me.jpg", alt: "Professional bathroom plumber" },
              ].map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Remodeling Process</h2>
            <div className="space-y-4 mb-12">
              {[
                { step: "1", title: "Design Consultation", desc: "Review your remodel plans and discuss plumbing requirements, fixture placement, and any relocations needed." },
                { step: "2", title: "Planning & Permits", desc: "Create a plumbing plan that meets code requirements and coordinate with your contractor." },
                { step: "3", title: "Rough-In Work", desc: "Install or relocate supply lines, drains, and vents while walls are open." },
                { step: "4", title: "Fixture Installation", desc: "Install and connect all fixtures once finishes are complete." },
                { step: "5", title: "Testing & Inspection", desc: "Test all connections, check for leaks, and ensure everything works properly." },
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

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Bathroom Upgrades</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                "Walk-in shower conversion",
                "Dual vanity installation",
                "Tankless water heater",
                "Heated floor system",
                "Low-flow fixtures",
                "Modern faucets & hardware",
              ].map((upgrade, index) => (
                <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <span className="text-gray-800 font-medium">{upgrade}</span>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose a Licensed Plumber for Remodeling?</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Code-compliant installations",
                  "Proper permits pulled",
                  "Warranty on workmanship",
                  "Coordination with contractors",
                  "Hidden issue detection",
                  "Future problem prevention",
                ].map((reason, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/toilet-and-faucet-installation" className="text-red-700 hover:text-red-800 font-medium">Toilet & Faucet Installation →</Link>
                <Link href="/services/tankless-water-heater-installation" className="text-red-700 hover:text-red-800 font-medium">Tankless Water Heaters →</Link>
                <Link href="/services/radiant-heating-plumbing" className="text-red-700 hover:text-red-800 font-medium">Radiant Floor Heating →</Link>
                <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning a Bathroom Remodel?</h2>
          <p className="text-xl text-red-100 mb-8">Get a free plumbing consultation for your project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.phoneLink} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}