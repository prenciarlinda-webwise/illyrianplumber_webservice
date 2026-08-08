import type { ReactNode } from "react";

const ICONS: Record<string, ReactNode> = {
  shield: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
  clock: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  wrench: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  ),
  dollar: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m0-2c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  bolt: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  ),
  eye: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </>
  ),
  home: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  ),
};

export type Differentiator = {
  icon: keyof typeof ICONS;
  title: string;
  description: string;
};

type Props = {
  heading: string;
  subheading?: string;
  items: Differentiator[];
  /** "light" -- default, sits inline in a normal-width column.
   *  "band" -- full-bleed dark section, use as a direct section (not inside a narrow container). */
  tone?: "light" | "band";
};

export default function DifferentiatorGrid({ heading, subheading, items, tone = "light" }: Props) {
  const lgCols = items.length % 3 === 0 && items.length !== 4 ? "lg:grid-cols-3" : items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  const dark = tone === "band";

  const grid = (
    <div className={`grid sm:grid-cols-2 ${lgCols} gap-5 mt-6`}>
      {items.map((item) => (
        <div key={item.title} className={dark ? "bg-white/5 border border-white/10 rounded-xl p-5" : "bg-gray-50 rounded-xl p-5"}>
          <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-3 ${dark ? "bg-red-600" : "bg-red-700"}`}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {ICONS[item.icon]}
            </svg>
          </div>
          <h3 className={`font-bold mb-1.5 ${dark ? "text-white" : "text-gray-900"}`}>{item.title}</h3>
          <p className={`text-sm leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"}`}>{item.description}</p>
        </div>
      ))}
    </div>
  );

  if (dark) {
    return (
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{heading}</h2>
            {subheading && <p className="text-gray-400">{subheading}</p>}
          </div>
          {grid}
        </div>
      </section>
    );
  }

  return (
    <section className="py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{heading}</h2>
      {subheading && <p className="text-gray-600 mb-6 max-w-2xl">{subheading}</p>}
      {grid}
    </section>
  );
}
