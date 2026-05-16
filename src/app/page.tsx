import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BUSINESS_INFO, SERVICE_SILOS } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";
import TrustBadges from "@/components/TrustBadges";

const homeFaqs = [
  {
    question: "What plumbing services does Illyrian Plumber offer in New Jersey?",
    answer: "We provide a full range of residential and light commercial plumbing including 24/7 emergency plumbing, water heater repair and replacement, tankless water heater installation, boiler repair, gas line repair and installation, whole-house repiping, sump pump service, water leak detection, water filtration systems, bathroom remodeling plumbing, kitchen plumbing, toilet and faucet installation, backflow prevention testing, and plumbing safety inspections. Every job is performed by licensed NJ master plumbers.",
  },
  {
    question: "What New Jersey towns do you service?",
    answer: "We are based in East Brunswick and cover all of Middlesex County including East Brunswick, Edison, Sayreville, Old Bridge, Monroe Township, South Brunswick, North Brunswick, New Brunswick, Piscataway, and neighboring towns like Somerset and Middletown. If you are unsure whether we cover your address, call (347) 461-4856 and ask.",
  },
  {
    question: "Are you a licensed plumber in NJ?",
    answer: "Yes. Illyrian Plumber operates under an active New Jersey Master Plumber License and carries full liability insurance. Every job across our service area is performed by or supervised by a licensed NJ master plumber, and we pull all required municipal permits for work that needs them.",
  },
  {
    question: "Do you answer calls after hours for plumbing emergencies?",
    answer: "Yes. Our 24/7 emergency line is answered by a real person day or night, nights, weekends, and holidays included. We do not use call centers or voicemail for emergencies. Call (347) 461-4856 or (718) 427-4396 any time and a licensed plumber will be dispatched to your home.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Plumbers East Brunswick, NJ - 24/7 Emergency Plumbing" },
  description: "Need an emergency plumber in East Brunswick NJ? Licensed master plumbers for water heaters, boilers, gas lines and 24/7 service. Call (347) 461-4856.",
  alternates: {
    canonical: "https://www.illyrianplumber.com",
  },
};

const homeGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.illyrianplumber.com/#website",
      url: "https://www.illyrianplumber.com",
      name: BUSINESS_INFO.name,
      publisher: { "@id": "https://www.illyrianplumber.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.illyrianplumber.com/#webpage",
      url: "https://www.illyrianplumber.com",
      name: "Plumbers East Brunswick, NJ - 24/7 Emergency Plumbing",
      description: "Licensed NJ master plumbers in East Brunswick. 24/7 emergency plumbing, water heater repair, boiler service, gas line work, and whole-house repiping across Middlesex County.",
      isPartOf: { "@id": "https://www.illyrianplumber.com/#website" },
      about: { "@id": "https://www.illyrianplumber.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.illyrianplumber.com/images/professional-plumbing-services.jpg",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      mainEntity: homeFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
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
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/50" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: copy + trust */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 bg-red-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              24/7 Emergency Plumber Available Now
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Plumbers in{" "}
              <span className="text-red-500">East Brunswick, NJ</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
              Licensed NJ master plumbers serving East Brunswick and all of Middlesex County. 24/7 emergency response, water heater repair, boiler service, gas line work, and whole-house repiping. Typical arrival in 30 minutes.
            </p>

            <TrustBadges />
          </div>

          {/* Right: lead form */}
          <div className="lg:col-span-2">
            <LeadForm service="General Inquiry" />
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
    mechanical: "/images/boiler-repair-service-nj.jpg",
    residential: "/images/modern-bathroom-shower-remodel.jpg",
    commercial: "/images/professional-plumbing-services.jpg",
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Plumbing services in East Brunswick and Middlesex County
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From 24-hour emergency repairs to water heater installation, we handle every residential and light commercial plumbing need across Middlesex County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_SILOS.map((silo) => (
            <div key={silo.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
              {/* Service Image */}
              <Link href={silo.services[0]?.href || "/services"} className="block relative h-48 overflow-hidden">
                <Image
                  src={siloImages[silo.id] || "/images/plumbing-services.jpg"}
                  alt={`${silo.title} in East Brunswick NJ`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {silo.title}
                </p>
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
                <Link href="/services" className="inline-flex items-center text-red-700 font-semibold text-sm hover:text-red-800">
                  View All Services
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

function ResidentialPlumbingNJSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Residential plumbing services across New Jersey
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Illyrian Plumber operates as a residential plumbing service in NJ from our East Brunswick headquarters at 697 Old Bridge Turnpike, covering all of Middlesex County and the surrounding central New Jersey corridor. Every job is performed by a licensed NJ Master Plumber, permitted through the appropriate municipal Construction Office, and quoted in writing before any work begins.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Residential plumbing services we run across New Jersey include{" "}
            <Link href="/services/water-heater-installation" className="text-red-700 hover:underline">tank and tankless water heater installation</Link>,{" "}
            <Link href="/services/boiler-repair-service" className="text-red-700 hover:underline">hydronic boiler repair</Link>,{" "}
            <Link href="/services/gas-line-repair-installation" className="text-red-700 hover:underline">gas line work</Link>,{" "}
            <Link href="/services/whole-house-repiping" className="text-red-700 hover:underline">whole-house repiping</Link>,{" "}
            <Link href="/services/sump-pump-repair-install" className="text-red-700 hover:underline">sump pump install</Link>,{" "}
            <Link href="/services/water-filtration-system" className="text-red-700 hover:underline">whole-house water filtration</Link>,{" "}
            <Link href="/services/bathroom-remodeling" className="text-red-700 hover:underline">bathroom remodel plumbing</Link>, and{" "}
            <Link href="/services/emergency-plumbing" className="text-red-700 hover:underline">24/7 emergency dispatch</Link>.
          </p>
          <p className="text-lg text-gray-700">
            Active NJ towns we cover from our East Brunswick base include{" "}
            <Link href="/service-areas/east-brunswick" className="text-red-700 hover:underline">East Brunswick</Link>,{" "}
            <Link href="/service-areas/edison" className="text-red-700 hover:underline">Edison</Link>,{" "}
            <Link href="/service-areas/sayreville" className="text-red-700 hover:underline">Sayreville</Link>,{" "}
            <Link href="/service-areas/old-bridge" className="text-red-700 hover:underline">Old Bridge</Link>,{" "}
            <Link href="/service-areas/monroe-township" className="text-red-700 hover:underline">Monroe Township</Link>,{" "}
            <Link href="/service-areas/south-brunswick" className="text-red-700 hover:underline">South Brunswick</Link>,{" "}
            <Link href="/service-areas/north-brunswick" className="text-red-700 hover:underline">North Brunswick</Link>, and the broader{" "}
            <Link href="/service-areas/middlesex-county" className="text-red-700 hover:underline">Middlesex County</Link>. Call <a href={BUSINESS_INFO.phoneLink} className="text-red-700 hover:underline font-semibold">{BUSINESS_INFO.phone}</a> to confirm coverage for your NJ address.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    {
      title: "24/7 Emergency Response",
      description: "Plumbing emergencies don't wait. We're available around the clock, every day of the year.",
    },
    {
      title: "Licensed & Insured",
      description: "Fully licensed master plumbers with comprehensive insurance. Your property is protected.",
    },
    {
      title: "Upfront Pricing",
      description: "No hidden fees. Get a detailed quote before we start. What we quote is what you pay.",
    },
    {
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
              Why East Brunswick homeowners trust Illyrian Plumber
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              For over 15 years, we have built our reputation on honest work, fair prices, and exceptional service. When you call Illyrian Plumber, you get master plumbers who care about doing the job right.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-semibold text-gray-900 mb-1">{reason.title}</p>
                  <p className="text-sm text-gray-600">{reason.description}</p>
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
            Recent plumbing projects in East Brunswick
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
          <Link href="/services/bathroom-remodeling" className="inline-flex items-center gap-2 text-red-700 font-semibold hover:text-red-800">
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
      name: "Donna Penn",
      location: "Google Review",
      text: "Illyrian Plumbers did a fantastic job with our emergency plumbing issue. Our plumber was professional and thorough with our repair. A burst pipe is never a good situation, but the response by Illyrian Plumbers turned our messy emergency into a smooth repair.",
      rating: 5,
    },
    {
      name: "Drin Gjonbalaj",
      location: "Google Review",
      text: "Illyrian Plumbing replaced our old oil boiler with a Navien combi boiler, and the whole experience was great from start to finish. They showed up on time, were very professional, and clearly knew what they were doing.",
      rating: 5,
    },
    {
      name: "Sam Kadric",
      location: "Google Review",
      text: "Dardan and his team were amazing. They did a full renovation including all new plumbing. The professionalism and communication by the team was terrific. Dardan helped me stay in my budget and timeline.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What East Brunswick homeowners say
          </h2>
          <p className="text-xl text-gray-400">
            Real Google reviews from across Middlesex County, NJ.
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
            Licensed master plumbers serving Middlesex County, NJ
          </h2>
          <p className="text-xl text-gray-600">
            NJ Master Plumber License holders, fully insured, covering Middlesex County and neighboring towns from our East Brunswick headquarters.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Service Areas Grid */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {BUSINESS_INFO.serviceAreas.map((area, index) => (
                <Link
                  key={index}
                  href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-gray-100 hover:bg-red-50 rounded-lg p-4 text-center transition group"
                >
                  <span className="text-gray-700 group-hover:text-red-700 font-medium">
                    {area}, NJ
                  </span>
                </Link>
              ))}
            </div>
            <Link href="/service-areas" className="text-red-700 hover:text-red-800 font-semibold inline-flex items-center gap-2">
              View All Service Areas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={BUSINESS_INFO.mapEmbedUrl}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Illyrian Plumber Location"
              className="w-full h-full min-h-[350px]"
            />
          </div>
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
            <p className="text-3xl md:text-4xl font-bold mb-4">
              Need a Plumber? Call Now for Fast Service
            </p>
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
              href="/contact-us"
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

function EmergencyPlumberSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Emergency plumber in East Brunswick, NJ
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Illyrian Plumber answers the phone day or night for emergency plumbing in East Brunswick. Burst pipes, gas leaks, sewer backups, no hot water, and no heat all qualify for 24/7 dispatch. A licensed NJ Master Plumber is on the road from our 697 Old Bridge Turnpike office within minutes of the call, with parts and tools to fix the problem on the first visit.
          </p>
          <p className="text-lg text-gray-700">
            Typical response time across East Brunswick is 30 minutes or less. Weekends, nights, and holidays included at the same emergency rates. Call <a href={BUSINESS_INFO.phoneLink} className="text-red-700 hover:underline font-semibold">{BUSINESS_INFO.phone}</a> or <a href={BUSINESS_INFO.phone2Link} className="text-red-700 hover:underline font-semibold">{BUSINESS_INFO.phone2}</a> for immediate service.
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const rows = [
    { item: "Diagnostic service call", price: "from $95" },
    { item: "Common plumbing repair", price: "$150 - $500" },
    { item: "Water heater replacement (tank)", price: "$1,500 - $3,500" },
    { item: "Tankless water heater installation", price: "$2,800 - $6,500" },
    { item: "Boiler repair", price: "$250 - $1,200" },
    { item: "Gas line repair or install", price: "$300 - $1,500" },
    { item: "Emergency / after-hours plumbing", price: "$150 - $450" },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Plumber prices in East Brunswick, NJ
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Every Illyrian Plumber quote is written down and approved before work starts. No trip charges, no shop fees, no surprise add-ons. Final pricing depends on the job scope and parts required.
          </p>
          <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white mb-4">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-900">Service</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-900">Typical East Brunswick price</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-t border-gray-200">
                    <td className="px-4 py-3 text-gray-800">{r.item}</td>
                    <td className="px-4 py-3 text-gray-900 font-medium">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">
            Permits pulled from the East Brunswick Township Construction Office for water heater installs, gas line work, boiler replacements, and repiping. Permit costs are included in the quote.
          </p>
        </div>
      </div>
    </section>
  );
}

function EastBrunswickCoverageSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Plumber in East Brunswick, NJ
          </h3>
          <p className="text-lg text-gray-700">
            Our East Brunswick office on Old Bridge Turnpike puts us 5 to 15 minutes from every East Brunswick address, covering ZIP 08816 and every neighborhood: Farrington Lake, Crystal Springs, Dunhams Corner, Tamarack Hollow Park, the Brunswick Square Mall corridor, the Route 18 business district, and the NJ Turnpike Exit 9 area. We pull all required permits from the{" "}
            <a href="https://www.eastbrunswick.org/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">East Brunswick Township</a> Construction Office, and our crew works under an active{" "}
            <a href="https://www.njconsumeraffairs.gov/plu" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">NJ Master Plumber License</a>. Learn more about{" "}
            <a href="https://en.wikipedia.org/wiki/East_Brunswick,_New_Jersey" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">East Brunswick on Wikipedia</a>, or call us for service across any nearby Middlesex County town.
          </p>
        </div>
      </div>
    </section>
  );
}

function QuickAnswersSection() {
  const qa = [
    {
      q: "How much does a plumber cost per hour in East Brunswick, NJ?",
      a: "Plumber hourly rates in East Brunswick typically run $95 to $175 for standard service work. Most plumbing jobs are quoted by the project rather than the hour. Our diagnostic service call starts at $95 and the final job quote is written down and approved before any work begins.",
    },
    {
      q: "How fast can you get a plumber to East Brunswick?",
      a: "Our office is on Old Bridge Turnpike in East Brunswick, so most East Brunswick addresses see a licensed plumber within 30 minutes during business hours. For 24/7 emergencies, on-call plumbers respond as soon as the next call clears. We text a live ETA on dispatch.",
    },
    {
      q: "Do I need a permit for plumbing work in East Brunswick?",
      a: "Yes. Water heater replacements, gas line work, boiler installations, repiping, and most main-stack work require a permit from the East Brunswick Township Construction Office. Illyrian Plumber pulls the permit, includes the cost in the quote, and coordinates the municipal inspection on your behalf.",
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Quick answers about plumbing in East Brunswick
          </h2>
          <div className="space-y-6">
            {qa.map((item) => (
              <div key={item.q}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Plumbing questions East Brunswick homeowners ask
          </h2>
          <p className="text-xl text-gray-600">
            Quick answers on services, coverage, licensing, and after-hours availability.
          </p>
        </div>
        <div className="space-y-4">
          {homeFaqs.map((faq, index) => (
            <details key={index} className="bg-white rounded-lg shadow-sm group">
              <summary className="p-5 cursor-pointer list-none flex justify-between items-center">
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <span className="text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0">+</span>
              </summary>
              <div className="px-5 pb-5 text-gray-700">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraph) }}
      />

      <HeroSection />
      <StatsSection />
      <EmergencyPlumberSection />
      <ServicesSection />
      <ResidentialPlumbingNJSection />
      <WhyChooseUsSection />
      <PricingSection />
      <WorkGallerySection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <EastBrunswickCoverageSection />
      <QuickAnswersSection />
      <FaqSection />
      <EmergencyCTASection />

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
