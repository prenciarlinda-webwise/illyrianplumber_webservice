import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  description?: string;
  variant?: "default" | "dark" | "light";
  showContactLink?: boolean;
}

export default function CTASection({
  title = "Ready to Get Started?",
  description = "Contact us today for a free estimate on your plumbing project.",
  variant = "default",
  showContactLink = true,
}: CTASectionProps) {
  const bgClass = {
    default: "bg-red-700 text-white",
    dark: "bg-gray-900 text-white",
    light: "bg-gray-100 text-gray-900",
  }[variant];

  const buttonPrimary = {
    default: "bg-white text-red-700 hover:bg-gray-100",
    dark: "bg-red-700 text-white hover:bg-red-800",
    light: "bg-red-700 text-white hover:bg-red-800",
  }[variant];

  const buttonSecondary = {
    default: "border-white text-white hover:bg-white hover:text-red-700",
    dark: "border-white text-white hover:bg-white hover:text-gray-900",
    light: "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
  }[variant];

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className={`text-xl mb-8 ${variant === "light" ? "text-gray-600" : "opacity-90"}`}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <a
              href={BUSINESS_INFO.phoneLink}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition ${buttonPrimary}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
            </a>
            <a
              href={BUSINESS_INFO.phone2Link}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition ${buttonPrimary}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
            </a>
            {showContactLink && (
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition border-2 ${buttonSecondary}`}
              >
                Free Estimate
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}