import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us - East Brunswick NJ",
  description: "Contact Illyrian Plumber for plumbing services in East Brunswick, NJ. Call (347) 461-4856 for 24/7 emergency service.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/contact-us",
  },
  keywords: [
    "contact plumber",
    "east brunswick plumber",
    "plumber phone number",
    "plumbing quote",
    "plumber near me",
  ],
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Plumber",
      "@id": "https://www.illyrianplumber.com/#organization",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      email: BUSINESS_INFO.email,
      address: { "@type": "PostalAddress", streetAddress: BUSINESS_INFO.address.street, addressLocality: BUSINESS_INFO.address.city, addressRegion: "NJ", postalCode: BUSINESS_INFO.address.zip, addressCountry: "US" },
      openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "5", bestRating: "5" },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Ready to get started? Contact us for a free estimate or to schedule service. We&apos;re here to help with all your plumbing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-white rounded-full animate-pulse" />
              <span className="text-white font-semibold">Plumbing Emergency? We&apos;re Available 24/7</span>
            </div>
            <a href={BUSINESS_INFO.phoneLink} className="inline-flex items-center gap-2 bg-white text-red-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call Now: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Phone Cards */}
              <a href={BUSINESS_INFO.phoneLink} className="bg-white border-2 border-red-700 rounded-xl p-6 text-center hover:bg-red-50 transition group">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition">
                  <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-1">Call {BUSINESS_INFO.phoneName}</p>
                <p className="text-2xl font-bold text-red-700">{BUSINESS_INFO.phone}</p>
              </a>

              <a href={BUSINESS_INFO.phone2Link} className="bg-white border-2 border-gray-300 rounded-xl p-6 text-center hover:border-red-700 hover:bg-red-50 transition group">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition">
                  <svg className="w-8 h-8 text-gray-700 group-hover:text-red-700 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-1">Call {BUSINESS_INFO.phone2Name}</p>
                <p className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition">{BUSINESS_INFO.phone2}</p>
              </a>
            </div>

            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-red-700 hover:text-red-800 text-sm">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600 text-sm">{BUSINESS_INFO.address.full}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                <p className="text-gray-600 text-sm">Emergency: 24/7</p>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-center">Service Areas</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {BUSINESS_INFO.serviceAreas.map((area, index) => (
                  <Link key={index} href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}`} className="bg-white px-4 py-2 rounded-full text-sm text-gray-600 hover:bg-red-50 hover:text-red-700 transition">
                    {area}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563312.4975387864!2d-76.04627729339961!3d40.06772212112381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a38fc2afc8255df%3A0x226b02ec0b6ff21a!2sIllyrian%20Plumber!5e0!3m2!1sen!2s!4v1767607369527!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Illyrian Plumber Location"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
