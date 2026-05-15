import Link from "next/link";
import { SERVICE_SILOS } from "@/lib/constants";
import { LocationData, SERVICE_BLURBS } from "@/lib/locationData";

const SILO_HEADINGS: Record<string, string> = {
  emergency: "Emergency plumbing near me in",
  "water-heater": "Water heater services in",
  mechanical: "Mechanical systems in",
  residential: "Residential plumbing in",
  commercial: "Commercial plumbing in",
};

export default function LocationServiceDirectory({ location }: { location: LocationData }) {
  return (
    <>
      {/* Near-me intro - high-value snippet bait targeting "{service} near me {city}" */}
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Emergency plumber near me in {location.name}
      </h2>
      <div className="prose prose-lg max-w-none text-gray-700 mb-8">
        <p>{location.emergencyNearMeIntro}</p>
      </div>

      {/* Full service directory with per-silo intros and per-service blurbs */}
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Every plumbing service we offer in {location.name}
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Full residential and light commercial plumbing for {location.name} homes and businesses. Each
        service runs from our East Brunswick office at 697 Old Bridge Turnpike, with arrival times typically
        in {location.eta}.
      </p>

      <div className="space-y-10 mb-12">
        {SERVICE_SILOS.map((silo) => {
          const heading = SILO_HEADINGS[silo.id] ?? `${silo.title} in`;
          const intro = location.siloIntros[silo.id as keyof typeof location.siloIntros];
          const isEmergency = silo.id === "emergency";
          return (
            <div key={silo.id}>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {heading} {location.name}
              </h3>
              {intro && <p className="text-gray-700 mb-5 leading-relaxed">{intro}</p>}
              <div
                className={`grid sm:grid-cols-2 ${isEmergency ? "md:grid-cols-3" : "md:grid-cols-2"} gap-3`}
              >
                {silo.services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="bg-gray-50 hover:bg-red-50 rounded-lg p-4 transition border border-transparent hover:border-red-200 block group"
                  >
                    <p className="font-semibold text-gray-900 group-hover:text-red-700 transition mb-1">
                      {service.name} - {location.name}
                    </p>
                    <p className="text-sm text-gray-600 leading-snug">
                      {SERVICE_BLURBS[service.href] ?? ""}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
