import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BUSINESS_INFO, SERVICE_SILOS } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.illyrianplumber.com",
  },
};

// LocalBusiness Schema for Homepage
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.illyrianplumber.com/#localbusiness",
  name: BUSINESS_INFO.name,
  image: "https://www.illyrianplumber.com/images/illyrian-plumber-logo.png",
  url: "https://www.illyrianplumber.com",
  telephone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_INFO.address.street,
    addressLocality: BUSINESS_INFO.address.city,
    addressRegion: BUSINESS_INFO.address.state,
    postalCode: BUSINESS_INFO.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.4286,
    longitude: -74.4154,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
};

// Review Schema for Testimonials
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.illyrianplumber.com/#reviews",
  name: BUSINESS_INFO.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Michael R.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2024-11-15",
      reviewBody: "Called at 2 AM with a burst pipe flooding my basement. They arrived within 30 minutes and had everything fixed before morning. Best emergency plumber in NJ!",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sarah L.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2024-10-20",
      reviewBody: "Illyrian Plumber installed our new tankless water heater quickly and professionally. Fair water heater installation cost, clean work, and the technician explained everything.",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "David K.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2024-09-10",
      reviewBody: "Best plumbing company I've used. They did a complete bathroom remodel plumbing job and it was seamless. Highly recommend for any plumbing repairs.",
    },
  ],
};

function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/professional-plumbing-services.jpg"
          alt="Professional plumber providing emergency plumbing services in East Brunswick NJ"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/40" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            24/7 Emergency Plumber Available Now
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional Plumbing Services in{" "}
            <span className="text-red-500">East Brunswick, NJ</span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            24-hour emergency plumber serving Central New Jersey. Water heater repair, drain cleaning, gas line services, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-lg font-medium text-sm transition-all shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
            </a>
            <a
              href={BUSINESS_INFO.phone2Link}
              className="inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-lg font-medium text-sm transition-all shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-5 py-3 rounded-lg font-medium text-sm transition-all"
            >
              Free Estimate
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 items-center text-xs text-gray-300">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Licensed & Insured
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Satisfaction Guaranteed
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free Estimates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: BUSINESS_INFO.stats.happyClients, label: "Happy Clients" },
    { value: BUSINESS_INFO.stats.projectsCompleted, label: "Projects Completed" },
    { value: BUSINESS_INFO.stats.yearsExperience, label: "Years Experience" },
    { value: BUSINESS_INFO.stats.responseTime, label: "Avg Response" },
  ];

  return (
    <section className="bg-red-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-red-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const siloImages: Record<string, string> = {
    emergency: "/images/emergency-plumbing-services-nj.jpg",
    "water-heater": "/images/tankless-water-heater-installation.jpg",
    "kitchen-bathroom": "/images/modern-bathroom-shower-remodel.jpg",
    "drain-sewer": "/images/drain-vent-pipe-installation.jpg",
    commercial: "/images/commercial-copper-pipe-installation.jpg",
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Plumbing Services in East Brunswick, NJ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From 24-hour emergency repairs to water heater installation, we handle all your residential and commercial plumbing needs in Middlesex County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_SILOS.map((silo) => (
            <div key={silo.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
              {/* Service Image */}
              <Link href={silo.href} className="block relative h-48 overflow-hidden">
                <Image
                  src={siloImages[silo.id] || "/images/plumbing-services.jpg"}
                  alt={`${silo.title} in East Brunswick NJ`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {silo.title}
                </h3>
              </Link>

              {/* Service Links */}
              <div className="p-5">
                <ul className="space-y-2 mb-4">
                  {silo.services.slice(0, 4).map((service) => (
                    <li key={service.href}>
                      <Link href={service.href} className="text-gray-700 hover:text-red-700 text-sm flex items-center gap-2">
                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={silo.href} className="inline-flex items-center text-red-700 font-semibold text-sm hover:text-red-800">
                  View All {silo.shortTitle} Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            View All Plumbing Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Emergency Response",
      description: "Plumbing emergencies don't wait. We're available around the clock, every day of the year.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Licensed & Insured",
      description: "Fully licensed master plumbers with comprehensive insurance. Your property is protected.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Upfront Pricing",
      description: "No hidden fees. Get a detailed quote before we start. What we quote is what you pay.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "100% Satisfaction Guarantee",
      description: "We stand behind our work. Not satisfied? We'll make it right, guaranteed.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/bathroom-remodel-marble-shower.jpg"
                  alt="Bathroom remodel with marble shower"
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/boiler-repair-service-nj.jpg"
                  alt="Boiler repair service in NJ"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/copper-pipe-repiping-service.jpg"
                  alt="Copper pipe repiping service"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/water-heater-repair-service.jpg"
                  alt="Water heater repair service"
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why East Brunswick Trusts Illyrian Plumber
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              For over 15 years, we have built our reputation on honest work, fair prices, and exceptional service. When you call Illyrian Plumber, you get master plumbers who care about doing the job right.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-700">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{reason.title}</h3>
                    <p className="text-sm text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkGallerySection() {
  const galleryImages = [
    { src: "/images/bathroom-renovation-glass-shower-door.jpg", alt: "Bathroom renovation with glass shower door" },
    { src: "/images/double-vanity-bathroom-installation.jpg", alt: "Double vanity bathroom installation" },
    { src: "/images/walk-in-shower-glass-door-install.jpg", alt: "Walk-in shower installation" },
    { src: "/images/bathroom-vanity-sink-installation.jpg", alt: "Bathroom vanity sink installation" },
    { src: "/images/shower-fixture-installation-nj.jpg", alt: "Shower fixture installation" },
    { src: "/images/pex-water-line-rough-in.jpg", alt: "PEX water line installation" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quality craftsmanship on every project. See examples of our plumbing work across East Brunswick and Central New Jersey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services/kitchen-bathroom/bathroom-remodel" className="inline-flex items-center gap-2 text-red-700 font-semibold hover:text-red-800">
            View More Bathroom Remodel Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michael R.",
      location: "East Brunswick, NJ",
      text: "Called at 2 AM with a burst pipe flooding my basement. They arrived within 30 minutes and had everything fixed before morning. Best emergency plumber in NJ!",
      rating: 5,
    },
    {
      name: "Sarah L.",
      location: "Edison, NJ",
      text: "Illyrian Plumber installed our new tankless water heater quickly and professionally. Fair water heater installation cost, clean work, and the technician explained everything.",
      rating: 5,
    },
    {
      name: "David K.",
      location: "New Brunswick, NJ",
      text: "Best plumbing company I've used. They did a complete bathroom remodel plumbing job and it was seamless. Highly recommend for any plumbing repairs.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-400">
            Join thousands of satisfied homeowners across Central New Jersey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6">&quot;{testimonial.text}&quot;</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreasSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Plumber Near Me - Serving Central New Jersey
          </h2>
          <p className="text-xl text-gray-600">
            Professional plumbing services throughout Middlesex County and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {BUSINESS_INFO.serviceAreas.map((area, index) => (
            <Link
              key={index}
              href={`/service-areas/plumber-${area.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-gray-100 hover:bg-red-50 rounded-lg p-4 text-center transition group"
            >
              <span className="text-gray-700 group-hover:text-red-700 font-medium">
                {area}, NJ
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/service-areas" className="text-red-700 hover:text-red-800 font-semibold inline-flex items-center gap-2">
            View All Service Areas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function EmergencyCTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/emergency-plumbing-services-nj.jpg"
          alt="Emergency plumbing services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-red-700/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Plumber? Call Now for Fast Service
            </h2>
            <p className="text-xl text-red-100">
              24-hour emergency plumber ready to help. Free estimates on all plumbing services.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-red-700 px-5 py-3 rounded-lg font-medium text-sm transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
            </a>
            <a
              href={BUSINESS_INFO.phone2Link}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-red-700 px-5 py-3 rounded-lg font-medium text-sm transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-red-700 text-white px-5 py-3 rounded-lg font-medium text-sm transition-all"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <WorkGallerySection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <EmergencyCTASection />
    </>
  );
}
