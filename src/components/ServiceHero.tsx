import Image from "next/image";
import LeadForm from "./LeadForm";
import TrustBadges from "./TrustBadges";

type Props = {
  tagline?: string;
  heading: string;
  subheading: string;
  backgroundImage: string;
  backgroundAlt: string;
  service: string;
  bullets?: string[];
};

export default function ServiceHero({
  tagline,
  heading,
  subheading,
  backgroundImage,
  backgroundAlt,
  service,
  bullets,
}: Props) {
  return (
    <section className="relative bg-gray-900 text-white py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/50" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: copy + trust */}
          <div className="lg:col-span-3">
            {tagline && (
              <p className="text-yellow-400 font-bold mb-3 text-sm md:text-base tracking-wide">
                {tagline}
              </p>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              {heading}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
              {subheading}
            </p>
            {bullets && bullets.length > 0 && (
              <ul className="mb-6 grid sm:grid-cols-2 gap-x-4 gap-y-2 max-w-xl">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm md:text-base text-gray-200">
                    <svg className="w-5 h-5 flex-shrink-0 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            <TrustBadges />
          </div>

          {/* Right: lead form */}
          <div className="lg:col-span-2">
            <LeadForm service={service} />
          </div>
        </div>
      </div>
    </section>
  );
}
