import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumbing Blog - Tips & Advice - Illyrian Plumber",
  description: "Expert plumbing tips, maintenance advice, and DIY guides from the licensed plumbers at Illyrian Plumber Corp. Learn how to prevent common plumbing problems.",
  keywords: [
    "plumbing blog",
    "plumbing tips",
    "plumbing advice",
    "DIY plumbing",
    "plumbing maintenance",
  ],
};

const blogPosts = [
  {
    title: "How Tankless Water Heaters Work: The Complete Guide",
    slug: "how-tankless-water-heaters-work",
    excerpt: "Discover how tankless water heaters provide endless hot water on demand. Learn the technology, benefits, and if it's right for your New Jersey home.",
    category: "Water Heaters",
    date: "January 2025",
    image: "/images/tankless-water-heater-installation.jpg",
    readTime: "8 min read",
  },
  {
    title: "Tankless vs Tank Water Heater: Which Is Best for Your Home?",
    slug: "tankless-vs-tank-water-heater",
    excerpt: "Compare tankless and traditional tank water heaters side by side. Discover costs, efficiency, lifespan, and which option saves you more money.",
    category: "Water Heaters",
    date: "January 2025",
    image: "/images/tankless-water-heater-installation.jpg",
    readTime: "10 min read",
  },
  {
    title: "What Size Tankless Water Heater Do I Need?",
    slug: "what-size-tankless-water-heater",
    excerpt: "Learn how to calculate the right tankless water heater size for your home. Our sizing guide covers flow rates, temperature rise, and household needs.",
    category: "Water Heaters",
    date: "January 2025",
    image: "/images/tankless-water-heater-installation.jpg",
    readTime: "9 min read",
  },
  {
    title: "How to Descale a Tankless Water Heater: Complete Maintenance Guide",
    slug: "how-to-descale-tankless-water-heater",
    excerpt: "Keep your tankless water heater running efficiently with regular descaling. Step-by-step instructions for DIY maintenance or when to call a pro.",
    category: "Maintenance",
    date: "January 2025",
    image: "/images/tankless-water-heater-installation.jpg",
    readTime: "7 min read",
  },
  {
    title: "7 Warning Signs Your Water Heater Is Dying",
    slug: "signs-water-heater-dying",
    excerpt: "Don't wait for a cold shower surprise. Learn the warning signs that your water heater needs replacement before it fails completely.",
    category: "Water Heaters",
    date: "January 2025",
    image: "/images/tankless-water-heater-installation.jpg",
    readTime: "6 min read",
  },
  {
    title: "Why Is My Water Pressure Low? Causes and Solutions",
    slug: "why-is-water-pressure-low",
    excerpt: "Frustrated by weak water pressure? Discover the common causes of low water pressure and practical solutions to restore strong flow.",
    category: "Troubleshooting",
    date: "January 2025",
    image: "/images/professional-plumbing-services.jpg",
    readTime: "7 min read",
  },
  {
    title: "Common Boiler Problems in Winter and How to Fix Them",
    slug: "common-boiler-problems-winter",
    excerpt: "Keep your home warm this winter. Learn about common boiler issues, troubleshooting tips, and when to call a professional for repairs.",
    category: "Boilers",
    date: "January 2025",
    image: "/images/boiler-repair-service-nj.jpg",
    readTime: "8 min read",
  },
  {
    title: "Signs of a Slab Leak and Sewer Line Problems",
    slug: "signs-of-slab-leak-sewer-line",
    excerpt: "Hidden leaks can cause serious damage. Learn the warning signs of slab leaks and sewer line issues before they become costly emergencies.",
    category: "Emergency Tips",
    date: "January 2025",
    image: "/images/professional-plumbing-services.jpg",
    readTime: "8 min read",
  },
  {
    title: "Gas Leak Detection and Safety: What Every Homeowner Should Know",
    slug: "gas-leak-detection-safety",
    excerpt: "Gas leaks are dangerous. Learn how to detect gas leaks, what to do in an emergency, and how to keep your family safe.",
    category: "Safety",
    date: "January 2025",
    image: "/images/professional-plumbing-services.jpg",
    readTime: "7 min read",
  },
  {
    title: "Is a Whole House Water Filter Worth It?",
    slug: "whole-house-water-filter-worth-it",
    excerpt: "Considering a whole house water filtration system? Learn the benefits, costs, and whether it's the right investment for your home.",
    category: "Water Quality",
    date: "January 2025",
    image: "/images/professional-plumbing-services.jpg",
    readTime: "8 min read",
  },
  {
    title: "How Long Does a Bathroom Remodel Take?",
    slug: "how-long-bathroom-remodel-take",
    excerpt: "Planning a bathroom renovation? Get realistic timelines for different project scopes and learn what factors affect your remodel duration.",
    category: "Renovations",
    date: "January 2025",
    image: "/images/bathroom-renovation-glass-shower-door.jpg",
    readTime: "7 min read",
  },
  {
    title: "Sump Pump Maintenance: The Complete Homeowner's Guide",
    slug: "sump-pump-maintenance-guide",
    excerpt: "Protect your basement from flooding with proper sump pump care. Learn maintenance tips, testing procedures, and when to replace your pump.",
    category: "Maintenance",
    date: "January 2025",
    image: "/images/professional-plumbing-services.jpg",
    readTime: "8 min read",
  },
];

const categories = [
  "All Posts",
  "Water Heaters",
  "Maintenance",
  "Boilers",
  "Troubleshooting",
  "Emergency Tips",
  "Safety",
  "Water Quality",
  "Renovations",
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/professional-plumbing-services.jpg"
            alt="Plumbing tips and advice blog"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-gray-900/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Plumbing Blog</h1>
            <p className="text-xl text-gray-300">
              Expert tips, maintenance advice, and helpful guides from your trusted local plumbers in New Jersey.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b sticky top-[72px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  category === "All Posts"
                    ? "bg-red-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-red-700 font-medium hover:text-red-800 transition text-sm"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Get plumbing tips, seasonal maintenance reminders, and exclusive offers delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none"
              />
              <button
                type="submit"
                className="bg-red-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Plumbing Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { tip: "Never pour grease down your drain - it solidifies and causes clogs", icon: "🚫" },
              { tip: "Know where your main water shut-off valve is located", icon: "🔧" },
              { tip: "Fix small leaks quickly - they waste water and can cause damage", icon: "💧" },
              { tip: "Schedule annual water heater maintenance for longer life", icon: "📅" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <p className="text-gray-300">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Plumbing Question?"
        description="Our expert plumbers are happy to help. Call us for advice or to schedule a service."
      />
    </>
  );
}
