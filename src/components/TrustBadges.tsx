import { BUSINESS_INFO } from "@/lib/constants";

// TODO: Replace these with the real values once the user provides them
const GMB_RATING = 4.9; // real average rating from Google Business Profile
const GMB_REVIEW_COUNT = 50; // real count of Google reviews

function Star({ filled }: { filled: number }) {
  return (
    <svg viewBox="0 0 20 20" className="w-4 h-4" aria-hidden="true">
      <defs>
        <linearGradient id={`star-${filled}`}>
          <stop offset={`${filled * 100}%`} stopColor="#fbbf24" />
          <stop offset={`${filled * 100}%`} stopColor="#e5e7eb" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#star-${filled})`}
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.098 10.1c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.518-4.674z"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const diff = rating - (i - 1);
        const fill = Math.max(0, Math.min(1, diff));
        return <Star key={i} filled={fill} />;
      })}
    </div>
  );
}

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center gap-3 md:gap-4">
      {/* Google Reviews badge */}
      <a
        href={BUSINESS_INFO.socialMedia.google}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition"
      >
        <svg viewBox="0 0 48 48" className="w-5 h-5" aria-hidden="true">
          <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1">
            <span className="font-bold text-gray-900 text-sm">{GMB_RATING}</span>
            <StarRating rating={GMB_RATING} />
          </div>
          <span className="text-[11px] text-gray-600">{GMB_REVIEW_COUNT}+ Google Reviews</span>
        </div>
      </a>

      {/* Licensed & Insured */}
      <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-2 rounded-lg shadow-sm">
        <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-gray-900 text-sm">Licensed & Insured</span>
          <span className="text-[11px] text-gray-600">NJ Master Plumber</span>
        </div>
      </div>

      {/* Years in business */}
      <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-2 rounded-lg shadow-sm">
        <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-gray-900 text-sm">{BUSINESS_INFO.stats.yearsExperience} Years</span>
          <span className="text-[11px] text-gray-600">Serving Middlesex County</span>
        </div>
      </div>

      {/* 24/7 Availability */}
      <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-2 rounded-lg shadow-sm">
        <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-gray-900 text-sm">24/7 Response</span>
          <span className="text-[11px] text-gray-600">Emergency Service</span>
        </div>
      </div>
    </div>
  );
}
