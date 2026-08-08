import Image from "next/image";
import { BUSINESS_INFO, REVIEWS } from "@/lib/constants";

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.098 10.1c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.518-4.674z" />
    </svg>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type Props = {
  heading?: string;
  subheading?: string;
  /** "band" -- full-bleed dark section with real photo backdrop, cards float on top.
   *  "plain" -- inline white cards, no wrapping section (for use inside a narrow column). */
  variant?: "band" | "plain";
  backgroundImage?: string;
  backgroundAlt?: string;
};

function TestimonialCards() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {REVIEWS.slice(0, 3).map((review) => (
        <div key={review.author} className="bg-white rounded-xl p-5 shadow-xl flex flex-col">
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>
          <p className="text-gray-700 text-sm leading-relaxed flex-1">&quot;{review.text}&quot;</p>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
            <div className="w-9 h-9 rounded-full bg-red-700 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
              {initials(review.author)}
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-gray-900 text-sm truncate">{review.author}</p>
              <a
                href={BUSINESS_INFO.socialMedia.google}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-red-700"
              >
                Read full review on Google
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Testimonials({
  heading = "What homeowners are saying",
  subheading,
  variant = "band",
  backgroundImage = "/images/licensed-plumber-east-brunswick-nj.jpg",
  backgroundAlt = "Illyrian Plumber technician on a job in Middlesex County NJ",
}: Props) {
  if (variant === "plain") {
    return (
      <section>
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{heading}</h2>
            {subheading && <p className="text-gray-600 mt-1">{subheading}</p>}
          </div>
          <a
            href={BUSINESS_INFO.socialMedia.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-700 hover:text-red-800"
          >
            {BUSINESS_INFO.reviews.rating} ★ on Google ({BUSINESS_INFO.reviews.count}+ reviews) →
          </a>
        </div>
        <TestimonialCards />
      </section>
    );
  }

  return (
    <section className="relative bg-gray-900 py-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt={backgroundAlt} fill className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-yellow-400 font-bold text-sm uppercase tracking-wide mb-2">
            {BUSINESS_INFO.reviews.rating} ★ Rated &middot; {BUSINESS_INFO.reviews.count}+ Google reviews
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{heading}</h2>
          {subheading && <p className="text-gray-300">{subheading}</p>}
        </div>
        <TestimonialCards />
        <div className="text-center mt-8">
          <a
            href={BUSINESS_INFO.socialMedia.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white border border-white/30 rounded-full px-5 py-2 hover:bg-white/10 transition"
          >
            See all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
