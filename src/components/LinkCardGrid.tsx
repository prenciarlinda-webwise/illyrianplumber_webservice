import Link from "next/link";

export type LinkCardItem = {
  label: string;
  href: string;
  description?: string;
  badge?: string;
};

type Props = {
  heading: string;
  subheading?: string;
  items: LinkCardItem[];
  tone?: "light" | "dark";
};

export default function LinkCardGrid({ heading, subheading, items, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <section className={`py-10 px-6 md:px-8 rounded-2xl ${dark ? "bg-gray-900" : "bg-gray-50 border border-gray-200"}`}>
      <h2 className={`text-2xl font-bold mb-1 ${dark ? "text-white" : "text-gray-900"}`}>{heading}</h2>
      {subheading && (
        <p className={`mb-6 ${dark ? "text-gray-400" : "text-gray-600"}`}>{subheading}</p>
      )}
      {!subheading && <div className="mb-5" />}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`group flex items-start justify-between gap-3 rounded-xl p-4 transition ${
              dark
                ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                : "bg-white hover:border-red-300 hover:shadow-md border border-gray-200"
            }`}
          >
            <div className="min-w-0">
              {item.badge && (
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wide text-red-600 mb-1">
                  {item.badge}
                </span>
              )}
              <p className={`font-semibold text-sm ${dark ? "text-white" : "text-gray-900"}`}>{item.label}</p>
              {item.description && (
                <p className={`text-xs mt-1 leading-snug ${dark ? "text-gray-400" : "text-gray-500"}`}>{item.description}</p>
              )}
            </div>
            <svg
              className={`w-4 h-4 flex-shrink-0 mt-0.5 transition group-hover:translate-x-0.5 ${dark ? "text-gray-500 group-hover:text-red-400" : "text-gray-300 group-hover:text-red-500"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
}
