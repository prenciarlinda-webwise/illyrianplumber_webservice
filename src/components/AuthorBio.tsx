import { BUSINESS_INFO } from "@/lib/constants";

interface AuthorBioProps {
  publishDate: string;
  updateDate?: string;
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function AuthorBio({ publishDate, updateDate }: AuthorBioProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Illyrian Plumber Team",
    jobTitle: "Licensed Master Plumber",
    worksFor: { "@id": "https://www.illyrianplumber.com/#organization" },
    knowsAbout: [
      "Plumbing",
      "Water Heaters",
      "Boiler Systems",
      "Gas Line Installation",
    ],
  };

  return (
    <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 mb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        {/* Author avatar placeholder */}
        <div className="flex-shrink-0 w-14 h-14 bg-red-700 rounded-full flex items-center justify-center">
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          {/* Author name and title */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="font-semibold text-gray-900">
              Written by {BUSINESS_INFO.name}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-full px-2.5 py-0.5">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Expert Reviewed
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-0.5">Licensed Master Plumbers</p>

          {/* Credentials */}
          <p className="text-sm text-gray-600 mt-2">
            NJ Licensed Master Plumber | {BUSINESS_INFO.stats.yearsExperience} Years
            Experience | Serving Middlesex County, NJ
          </p>

          {/* Dates */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
            <span>Published: {formatDate(publishDate)}</span>
            {updateDate && (
              <span>Last Updated: {formatDate(updateDate)}</span>
            )}
            <span className="inline-flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Reviewed for accuracy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
