 import Link from "next/link";

interface RelatedService {
  title: string;
  href: string;
  description: string;
}

interface RelatedServicesProps {
  title?: string;
  services: RelatedService[];
  variant?: "grid" | "list" | "compact";
}

export default function RelatedServices({
  title = "Related Services",
  services,
  variant = "grid"
}: RelatedServicesProps) {
  if (variant === "compact") {
    return (
      <div className="bg-gray-50 rounded-lg p-6">
        <p className="font-semibold text-gray-900 mb-4">{title}</p>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index}>
              <Link
                href={service.href}
                className="flex items-center gap-2 text-gray-700 hover:text-red-700 transition group"
              >
                <svg className="w-4 h-4 text-red-700 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (variant === "list") {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition group border border-gray-100"
              >
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-red-700 transition">
                    {service.title}
                  </p>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-red-700 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default grid layout
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all group border border-gray-100"
            >
              <p className="font-semibold text-lg text-gray-900 group-hover:text-red-700 transition mb-2">
                {service.title}
              </p>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <span className="inline-flex items-center text-red-700 font-medium text-sm">
                Learn More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}