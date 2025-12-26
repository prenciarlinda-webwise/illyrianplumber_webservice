import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

interface EmergencyBannerProps {
  variant?: "default" | "compact" | "inline";
  serviceName?: string;
}

export default function EmergencyBanner({ variant = "default", serviceName }: EmergencyBannerProps) {
  if (variant === "inline") {
    return (
      <div className="bg-red-50 border-l-4 border-red-700 p-4 my-6">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-red-800">
              {serviceName ? `${serviceName} Emergency?` : "Plumbing Emergency?"}
            </h4>
            <p className="text-red-700 text-sm mt-1">
              We offer <Link href="/services/emergency-plumbing" className="font-semibold underline hover:no-underline">24/7 emergency plumbing services</Link>.
              Call <a href={BUSINESS_INFO.phoneLink} className="font-semibold">{BUSINESS_INFO.phone}</a> now.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href="/services/emergency-plumbing"
        className="flex items-center justify-between bg-gradient-to-r from-red-700 to-red-800 text-white p-4 rounded-lg hover:from-red-800 hover:to-red-900 transition-all group"
      >
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          <span className="font-semibold">24/7 Emergency Service Available</span>
        </div>
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    );
  }

  // Default full banner
  return (
    <section className="bg-gradient-to-r from-red-700 via-red-800 to-red-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                {serviceName ? `${serviceName} Emergency?` : "Plumbing Emergency?"}
              </h3>
              <p className="text-red-100">
                Don&apos;t wait! Our <Link href="/services/emergency-plumbing" className="underline hover:no-underline font-semibold">emergency plumbers</Link> are available 24/7.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/services/emergency-plumbing"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition"
            >
              Emergency Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}