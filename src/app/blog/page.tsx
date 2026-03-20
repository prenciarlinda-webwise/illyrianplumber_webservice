"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { BUSINESS_INFO } from "@/lib/constants";

const blogPosts = [
  // March 2026
  {
    title: "Kitchen Sink Plumbing Diagram - Parts, Connections & How It Works",
    slug: "kitchen-sink-plumbing-diagram",
    excerpt: "Complete guide to kitchen sink plumbing parts and connections. Understand supply lines, drain pipes, P-traps, and how single and double sink setups work.",
    category: "Kitchen Plumbing",
    date: "March 2026",
    image: "",
    readTime: "12 min read",
  },
  {
    title: "Kitchen Sink Clogged? How to Unclog a Kitchen Sink (7 Methods)",
    slug: "how-to-unclog-kitchen-sink",
    excerpt: "Step-by-step guide to unclogging a kitchen sink using 7 proven methods. From boiling water to plumber's snake, fix your clogged drain fast.",
    category: "Kitchen Plumbing",
    date: "March 2026",
    image: "",
    readTime: "14 min read",
  },
  {
    title: "What Is Backflow Testing? Everything NJ Homeowners Need to Know",
    slug: "what-is-backflow-testing",
    excerpt: "Learn what backflow testing is, why it is required in NJ, how much it costs, and how often you need it. Complete guide for homeowners.",
    category: "Water Quality",
    date: "March 2026",
    image: "",
    readTime: "10 min read",
  },
  {
    title: "Hydro Jetting Drain Cleaning: Complete Guide to Water Jet Sewer Cleaning",
    slug: "hydro-jetting-drain-cleaning-guide",
    excerpt: "Learn how hydro jetting works, when you need it, costs, and how it compares to snaking. Professional drain cleaning guide for NJ homeowners.",
    category: "Guides",
    date: "March 2026",
    image: "",
    readTime: "18 min read",
  },
  {
    title: "Sewer Camera Inspection: When You Need One and What It Reveals",
    slug: "sewer-camera-inspection-guide",
    excerpt: "Find out when you need a sewer camera inspection, what it costs, and what the camera reveals. Essential for home buyers and recurring drain problems.",
    category: "Guides",
    date: "March 2026",
    image: "",
    readTime: "18 min read",
  },
  {
    title: "Water Pipe Noises: 8 Causes and How to Fix Them",
    slug: "water-pipe-noises-causes-fixes",
    excerpt: "Banging, whistling, humming, or rattling pipes? Learn the 8 most common causes of water pipe noises and how to fix each one.",
    category: "Troubleshooting",
    date: "March 2026",
    image: "",
    readTime: "16 min read",
  },
  {
    title: "How to Drain and Flush a Water Heater (Step-by-Step Guide)",
    slug: "how-to-drain-flush-water-heater",
    excerpt: "Step-by-step guide to draining and flushing your water heater. Remove sediment, improve efficiency, and extend your water heater's lifespan.",
    category: "Maintenance",
    date: "March 2026",
    image: "",
    readTime: "15 min read",
  },
  {
    title: "Battery Backup Sump Pump: Complete Guide for NJ Homeowners",
    slug: "battery-backup-sump-pump-guide",
    excerpt: "Why every NJ homeowner needs a battery backup sump pump. Compare types, costs, top brands, and installation options to protect your basement.",
    category: "Maintenance",
    date: "March 2026",
    image: "",
    readTime: "16 min read",
  },
  {
    title: "11 Best Whole House Water Filtration Systems (2026 Expert Review)",
    slug: "best-whole-house-water-filtration-systems",
    excerpt: "Licensed plumbers tested and reviewed the 11 best whole house water filtration systems for 2026. Compare performance, cost, and which filter is best for your home.",
    category: "Water Quality",
    date: "March 2026",
    image: "",
    readTime: "25 min read",
  },
  {
    title: "How Much Does a Tankless Water Heater Cost? (2026 NJ Price Guide)",
    slug: "how-much-does-a-tankless-water-heater-cost",
    excerpt: "Tankless water heater costs range from $800-$4,500+ installed. See 2026 pricing by fuel type, brand, and installation factors with NJ-specific costs.",
    category: "Water Heaters",
    date: "March 2026",
    image: "/images/tankless-water-heater-installation.jpg",
    readTime: "18 min read",
  },
  {
    title: "Frozen Pipes: Prevention, Thawing & Emergency Repair Guide (NJ)",
    slug: "frozen-pipes-prevention-repair",
    excerpt: "Learn how to prevent frozen pipes, safely thaw them, and what to do if a pipe bursts. Complete NJ winter plumbing guide with costs and emergency steps.",
    category: "Emergency Tips",
    date: "March 2026",
    image: "",
    readTime: "18 min read",
  },
  {
    title: "Common Water Heater Problems and How to Fix Them (2026 Guide)",
    slug: "common-water-heater-problems",
    excerpt: "Troubleshoot 12 common water heater problems: no hot water, leaking, strange noises, pilot light issues, and more. DIY fixes and when to call a pro.",
    category: "Water Heaters",
    date: "March 2026",
    image: "/images/water-heater-maintenance-parts.jpg",
    readTime: "20 min read",
  },
  {
    title: "How Long Does a Water Heater Take to Heat Up? (2026)",
    slug: "how-long-water-heater-heat-up",
    excerpt: "Gas water heaters heat in 30-40 minutes, electric in 60-80 minutes, tankless is instant. See exact times by tank size, fuel type, and season.",
    category: "Water Heaters",
    date: "March 2026",
    image: "/images/water-heater-sediment-buildup.jpg",
    readTime: "16 min read",
  },
  {
    title: "Trenchless Sewer Repair: Methods, Costs & Complete Guide",
    slug: "trenchless-sewer-repair-guide",
    excerpt: "Compare trenchless sewer repair methods (pipe lining vs pipe bursting) with traditional replacement. Costs, timelines, and when each method is best.",
    category: "Guides",
    date: "March 2026",
    image: "",
    readTime: "18 min read",
  },
  // January 2025 (newest first: Jan 31 → Jan 6)
  {
    title: "Sump Pump Maintenance: The Complete Homeowner's Guide",
    slug: "sump-pump-maintenance-guide",
    excerpt: "Protect your basement from flooding with proper sump pump care. Learn maintenance tips, testing procedures, and when to replace your pump.",
    category: "Maintenance",
    date: "January 2025",
    image: "",
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
    title: "Is a Whole House Water Filter Worth It?",
    slug: "whole-house-water-filter-worth-it",
    excerpt: "Considering a whole house water filtration system? Learn the benefits, costs, and whether it's the right investment for your home.",
    category: "Water Quality",
    date: "January 2025",
    image: "",
    readTime: "8 min read",
  },
  {
    title: "Gas Leak Detection and Safety: What Every Homeowner Should Know",
    slug: "gas-leak-detection-safety",
    excerpt: "Gas leaks are dangerous. Learn how to detect gas leaks, what to do in an emergency, and how to keep your family safe.",
    category: "Safety",
    date: "January 2025",
    image: "/images/gas-line-pressure-gauge-installation.jpg",
    readTime: "7 min read",
  },
  {
    title: "Signs of a Slab Leak and Sewer Line Problems",
    slug: "signs-of-slab-leak-sewer-line",
    excerpt: "Hidden leaks can cause serious damage. Learn the warning signs of slab leaks and sewer line issues before they become costly emergencies.",
    category: "Emergency Tips",
    date: "January 2025",
    image: "",
    readTime: "8 min read",
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
    title: "Why Is My Water Pressure Low? Causes and Solutions",
    slug: "why-is-water-pressure-low",
    excerpt: "Frustrated by weak water pressure? Discover the common causes of low water pressure and practical solutions to restore strong flow.",
    category: "Troubleshooting",
    date: "January 2025",
    image: "",
    readTime: "7 min read",
  },
  {
    title: "7 Warning Signs Your Water Heater Is Dying",
    slug: "signs-water-heater-dying",
    excerpt: "Don't wait for a cold shower surprise. Learn the warning signs that your water heater needs replacement before it fails completely.",
    category: "Water Heaters",
    date: "January 2025",
    image: "/images/water-heater-repair-service.jpg",
    readTime: "6 min read",
  },
  {
    title: "How to Descale a Tankless Water Heater: Complete Maintenance Guide",
    slug: "how-to-descale-tankless-water-heater",
    excerpt: "Keep your tankless water heater running efficiently with regular descaling. Step-by-step instructions for DIY maintenance or when to call a pro.",
    category: "Maintenance",
    date: "January 2025",
    image: "",
    readTime: "7 min read",
  },
  {
    title: "What Size Tankless Water Heater Do I Need?",
    slug: "what-size-tankless-water-heater",
    excerpt: "Learn how to calculate the right tankless water heater size for your home. Our sizing guide covers flow rates, temperature rise, and household needs.",
    category: "Water Heaters",
    date: "January 2025",
    image: "",
    readTime: "9 min read",
  },
  {
    title: "Tankless vs Tank Water Heater: Which Is Best for Your Home?",
    slug: "tankless-vs-tank-water-heater",
    excerpt: "Compare tankless and traditional tank water heaters side by side. Discover costs, efficiency, lifespan, and which option saves you more money.",
    category: "Water Heaters",
    date: "January 2025",
    image: "",
    readTime: "10 min read",
  },
  {
    title: "How Tankless Water Heaters Work: The Complete Guide",
    slug: "how-tankless-water-heaters-work",
    excerpt: "Discover how tankless water heaters provide endless hot water on demand. Learn the technology, benefits, and if it's right for your New Jersey home.",
    category: "Water Heaters",
    date: "January 2025",
    image: "",
    readTime: "8 min read",
  },
];

const categories = [
  "All Posts",
  "Water Heaters",
  "Kitchen Plumbing",
  "Maintenance",
  "Boilers",
  "Troubleshooting",
  "Emergency Tips",
  "Safety",
  "Water Quality",
  "Renovations",
  "Guides",
];


export default function BlogPage() {
  const [showAll, setShowAll] = useState(false);
  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 6);

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
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {visiblePosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group">
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="bg-red-50 text-red-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
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
          {!showAll && blogPosts.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
              >
                Load More Posts
              </button>
            </div>
          )}
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
