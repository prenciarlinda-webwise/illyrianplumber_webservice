import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Radiant Floor Heating Installation NJ - Illyrian Group Corp",
  description: "Professional radiant floor heating installation and repair in East Brunswick, NJ. Hydronic heating systems for comfortable, efficient warmth. Call (347) 461-4856.",
  keywords: [
    "radiant floor heating",
    "hydronic heating",
    "radiant heat installation",
    "floor heating system",
    "radiant heating repair",
    "in-floor heating",
  ],
};

export default function RadiantHeatingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Radiant Floor Heating",
    description: "Professional radiant floor heating installation and repair in East Brunswick, NJ. Hydronic heating systems for comfortable, efficient warmth.",
    provider: { "@type": "Plumber", "@id": "https://www.illyrianplumber.com/#organization", name: BUSINESS_INFO.name, telephone: BUSINESS_INFO.phone },
    areaServed: BUSINESS_INFO.serviceAreas.map(area => ({ "@type": "City", name: area })),
    serviceType: "Radiant Heating",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/copper-pipe-repiping-service.jpg"
            alt="Radiant floor heating installation in East Brunswick NJ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-red-400 font-semibold mb-4">Premium Heating Solution</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Radiant Floor Heating
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Experience the ultimate comfort with radiant floor heating. Warm floors, even heat distribution, and energy efficiency. We install and service hydronic radiant heating systems.
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
              <span>✓ Hydronic Systems</span>
              <span>✓ Installation & Repair</span>
              <span>✓ Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Radiant Floor Heating</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Even, consistent warmth",
                "No cold spots or drafts",
                "Silent operation",
                "No dust circulation",
                "Energy efficient",
                "Warm floors in winter",
                "Compatible with all flooring",
                "Increases home value",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-green-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Gallery Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Radiant Heating Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { src: "/images/copper-pipe-repiping-service.jpg", alt: "Radiant heating pipe installation" },
                { src: "/images/boiler-repair-service-nj.jpg", alt: "Boiler for radiant heating" },
                { src: "/images/bathroom-remodel-marble-shower.jpg", alt: "Heated bathroom floor" },
                { src: "/images/gas-line-pressure-gauge-installation.jpg", alt: "Heating system testing" },
                { src: "/images/water-heater-maintenance-parts.jpg", alt: "Heating system components" },
                { src: "/images/professional-plumbing-services.jpg", alt: "Professional heating installation" },
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

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Radiant Heating Services</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "New System Installation", desc: "Complete hydronic radiant heating installation for new construction or major renovations." },
                { title: "System Repair", desc: "Diagnose and repair radiant heating issues including leaks, pump failures, and zone problems." },
                { title: "Boiler Integration", desc: "Connect radiant systems to new or existing boilers for optimal efficiency." },
                { title: "Zone Control Setup", desc: "Install thermostats and controls for independent room-by-room temperature control." },
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Hydronic Radiant Heating Works</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <p className="text-gray-700 mb-4">
                Hydronic radiant heating uses warm water circulating through tubing installed beneath your floor. A boiler heats the water, and pumps distribute it through zones controlled by thermostats.
              </p>
              <div className="space-y-3">
                {[
                  { step: "1", text: "Boiler heats water to optimal temperature" },
                  { step: "2", text: "Pumps circulate water through PEX tubing under floors" },
                  { step: "3", text: "Heat radiates upward, warming the room evenly" },
                  { step: "4", text: "Thermostats control each zone independently" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ideal Applications</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { title: "Bathrooms", desc: "Warm tile floors year-round" },
                { title: "Basements", desc: "Comfortable finished spaces" },
                { title: "Kitchens", desc: "No cold feet while cooking" },
                { title: "Additions", desc: "Perfect for new spaces" },
                { title: "Garages", desc: "Heated workshop areas" },
                { title: "Whole Home", desc: "Complete radiant systems" },
              ].map((app, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">{app.title}</h3>
                  <p className="text-gray-600 text-sm">{app.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/boiler-repair-service" className="text-red-700 hover:text-red-800 font-medium">Boiler Repair →</Link>
                <Link href="/services/water-heater-replacement" className="text-red-700 hover:text-red-800 font-medium">Water Heater Replacement →</Link>
                <Link href="/services/bathroom-remodeling" className="text-red-700 hover:text-red-800 font-medium">Bathroom Remodeling →</Link>
                <Link href="/services/whole-house-repiping" className="text-red-700 hover:text-red-800 font-medium">Whole House Repiping →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Radiant Heating?</h2>
          <p className="text-xl text-red-100 mb-8">Get a consultation for your home.</p>
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