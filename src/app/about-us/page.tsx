import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Illyrian Plumber - Licensed NJ Plumbing Company",
  description: "Learn about Illyrian Plumber Corp, your trusted licensed plumber in East Brunswick, NJ. Family-owned, 24/7 service, and committed to quality workmanship.",
  keywords: [
    "about illyrian plumber",
    "east brunswick plumber",
    "nj plumbing company",
    "licensed plumber nj",
    "family plumbing company",
  ],
};

const values = [
  { title: "Integrity", desc: "Honest assessments, upfront pricing, and recommendations based on your best interest—not ours." },
  { title: "Quality", desc: "We do the job right the first time, using quality materials and proven techniques." },
  { title: "Reliability", desc: "We show up on time, complete work as promised, and stand behind everything we do." },
  { title: "Respect", desc: "We treat your home like our own—clean work, protecting your property, and courteous service." },
];

const stats = [
  { number: "24/7", label: "Emergency Service" },
  { number: "100%", label: "Licensed & Insured" },
  { number: BUSINESS_INFO.stats.happyClients, label: "Happy Customers" },
  { number: "5★", label: "Customer Rating" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/licensed-plumber-east-brunswick-nj.jpg"
            alt="Licensed plumber team in East Brunswick NJ"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Illyrian Plumber</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Your trusted local plumber serving East Brunswick, NJ and surrounding areas. Licensed, insured, and committed to quality workmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-red-700 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                <div className="text-red-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Illyrian Plumber Corp was founded with a simple mission: provide honest, reliable plumbing services that homeowners and businesses can trust. Based in East Brunswick, New Jersey, we serve Middlesex County and surrounding areas with professional plumbing solutions.
                </p>
                <p>
                  We understand that plumbing problems are stressful. That&apos;s why we focus on clear communication, upfront pricing, and quality work that lasts. When you call us, you&apos;ll speak to real people who care about solving your problem—not just making a sale.
                </p>
                <p>
                  Our team of licensed plumbers brings years of experience to every job, from simple repairs to complex installations. We invest in ongoing training and modern equipment to provide the best service possible.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/boiler-repair-service-nj.jpg"
                  alt="Illyrian Plumber technician performing boiler repair service in New Jersey"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <div className="space-y-4 mb-12">
              {[
                { title: "Licensed & Insured", desc: "Full New Jersey plumbing license and comprehensive liability insurance for your protection." },
                { title: "24/7 Emergency Service", desc: "Plumbing emergencies don't follow business hours. We're available around the clock for urgent situations." },
                { title: "Upfront Pricing", desc: "No surprises. We provide clear quotes before starting work so you know exactly what to expect." },
                { title: "Satisfaction Guaranteed", desc: "We stand behind our work. If you're not satisfied, we'll make it right." },
                { title: "Local Knowledge", desc: "We know Central New Jersey plumbing codes, common issues in local homes, and the best solutions for our area." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <svg className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Work Gallery */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image src="/images/bathroom-renovation-glass-shower-door.jpg" alt="Bathroom renovation with glass shower door" width={400} height={300} className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image src="/images/tankless-water-heater-installation.jpg" alt="Tankless water heater installation" width={400} height={300} className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image src="/images/copper-pipe-repiping-service.jpg" alt="Copper pipe repiping service" width={400} height={300} className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image src="/images/bathroom-vanity-sink-installation.jpg" alt="Bathroom vanity sink installation" width={400} height={300} className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image src="/images/pex-water-line-rough-in.jpg" alt="PEX water line installation" width={400} height={300} className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image src="/images/double-vanity-bathroom-installation.jpg" alt="Double vanity bathroom installation" width={400} height={300} className="w-full h-48 object-cover" />
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
              <p className="text-gray-600 mb-4">
                We proudly serve East Brunswick and surrounding communities in Central New Jersey:
              </p>
              <div className="flex flex-wrap gap-2">
                {BUSINESS_INFO.serviceAreas.map((area, index) => (
                  <Link key={index} href={`/service-areas/plumber-${area.toLowerCase().replace(/\s+/g, "-")}`} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition">
                    {area}, NJ
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-900 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Address</h4>
                  <p className="text-white">{BUSINESS_INFO.address.full}</p>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Phone</h4>
                  <div className="space-y-1">
                    <a href={BUSINESS_INFO.phoneLink} className="text-white hover:text-red-400 transition font-semibold block">
                      {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                    </a>
                    <a href={BUSINESS_INFO.phone2Link} className="text-white hover:text-red-400 transition font-semibold block">
                      {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Email</h4>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-red-400 transition">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Hours</h4>
                  <p className="text-white">24/7 Emergency Service</p>
                  <p className="text-gray-400 text-sm">Office: Mon-Fri 8am-6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Work Together?" description="Contact us for honest, reliable plumbing service you can trust." />
    </>
  );
}
