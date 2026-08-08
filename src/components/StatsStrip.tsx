import { BUSINESS_INFO } from "@/lib/constants";

type Stat = {
  value: string;
  label: string;
};

type Props = {
  stats?: Stat[];
};

const DEFAULT_STATS: Stat[] = [
  { value: BUSINESS_INFO.stats.projectsCompleted, label: "Projects completed" },
  { value: BUSINESS_INFO.stats.yearsExperience, label: "Years in Middlesex County" },
  { value: `${BUSINESS_INFO.reviews.rating}★`, label: `${BUSINESS_INFO.reviews.count}+ Google reviews` },
  { value: "24/7", label: "Real person answers" },
];

export default function StatsStrip({ stats = DEFAULT_STATS }: Props) {
  return (
    <section className="bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-700/20 via-transparent to-red-700/20" />
      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y divide-gray-700 md:divide-y-0 md:divide-x">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center ${i > 1 ? "pt-6 md:pt-0" : ""} md:px-4`}>
              <p className="text-3xl md:text-4xl font-extrabold text-white leading-none mb-1">{stat.value}</p>
              <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
