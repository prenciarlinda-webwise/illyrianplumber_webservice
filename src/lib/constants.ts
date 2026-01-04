export const BUSINESS_INFO = {
  name: "Illyrian Group Corp",
  phone: "(347) 461-4856",
  phoneLink: "tel:+13474614856",
  phoneName: "Niti",
  phone2: "(718) 427-4396",
  phone2Link: "tel:+17184274396",
  phone2Name: "Danny",
  email: "info@illyriangroupllc.com",
  address: {
    street: "697 Old Bridge Turnpike",
    city: "East Brunswick",
    state: "NJ",
    zip: "08816",
    full: "697 Old Bridge Turnpike, East Brunswick, NJ 08816",
  },
  hours: "24/7 Emergency Service",
  tagline: "High-End Mechanical Plumbing & Water Heating Specialists",
  description: "Illyrian Group Corp provides expert mechanical plumbing services in East Brunswick, NJ and Middlesex County. Specializing in water heaters, boiler systems, gas lines, and whole-house repiping.",
  founded: "2010",
  stats: {
    happyClients: "500+",
    projectsCompleted: "750+",
    yearsExperience: "10+",
    responseTime: "30 min",
  },
  socialMedia: {
    facebook: "https://facebook.com/illyriangroupcorp",
    instagram: "https://instagram.com/illyriangroupcorp",
    google: "https://g.page/illyriangroupcorp",
  },
  serviceAreas: [
    "East Brunswick",
    "Edison",
    "Sayreville",
    "Old Bridge",
    "Monroe Township",
    "South Brunswick",
    "North Brunswick",
  ],
  licenses: {
    nj: "NJ Master Plumber License #12345",
    insured: "Fully Licensed & Insured",
  },
};

export const SERVICE_PAGES = {
  featured: [
    {
      name: "Tankless Water Heater Installation",
      href: "/services/tankless-water-heater-installation",
      description: "Expert tankless water heater installation with gas line upgrades",
    },
    {
      name: "Sewer Line Repair & Replacement",
      href: "/services/sewer-line-repair-replacement",
      description: "Structural sewer line repair and trenchless replacement",
    },
    {
      name: "Boiler Repair Service",
      href: "/services/boiler-repair-service",
      description: "Expert boiler repair, maintenance, and installation",
    },
    {
      name: "Gas Line Repair & Installation",
      href: "/services/gas-line-repair-installation",
      description: "Licensed gas line installation, repair, and safety inspections",
    },
    {
      name: "Whole House Repiping",
      href: "/services/whole-house-repiping",
      description: "Complete home repiping for older homes and renovations",
    },
    {
      name: "Emergency Plumbing",
      href: "/services/emergency-plumbing",
      description: "24/7 emergency response for burst pipes, gas leaks, and water leaks",
    },
  ],
  residential: [
    {
      name: "Water Heater Repair",
      href: "/services/water-heater-repair",
      description: "Same-day water heater repair for all brands",
    },
    {
      name: "Water Heater Replacement",
      href: "/services/water-heater-replacement",
      description: "Professional water heater replacement and upgrades",
    },
    {
      name: "Water Leak Detection",
      href: "/services/water-leak-detection",
      description: "Advanced leak detection technology for hidden leaks",
    },
    {
      name: "Sump Pump Repair & Install",
      href: "/services/sump-pump-repair-install",
      description: "Sump pump installation, repair, and battery backup systems",
    },
    {
      name: "Water Filtration System",
      href: "/services/water-filtration-system",
      description: "Whole-house water filtration and softener installation",
    },
    {
      name: "Radiant Heating Plumbing",
      href: "/services/radiant-heating-plumbing",
      description: "Radiant floor heating installation and repair",
    },
    {
      name: "Bathroom Remodeling",
      href: "/services/bathroom-remodeling",
      description: "Complete bathroom plumbing for remodels and renovations",
    },
    {
      name: "Toilet & Faucet Installation",
      href: "/services/toilet-and-faucet-installation",
      description: "Upgrade to high-efficiency toilets and modern fixtures",
    },
    {
      name: "Plumbing Safety Inspections",
      href: "/services/plumbing-safety-inspections",
      description: "Comprehensive plumbing inspections for code compliance",
    },
  ],
};

export const SERVICE_SILOS = [
  {
    id: "emergency",
    title: "Emergency Services",
    shortTitle: "Emergency",
    services: [
      { name: "24/7 Emergency Plumbing", href: "/services/emergency-plumbing" },
      { name: "Water Leak Detection", href: "/services/water-leak-detection" },
      { name: "Gas Line Repair", href: "/services/gas-line-repair-installation" },
    ],
  },
  {
    id: "water-heater",
    title: "Water Heater Services",
    shortTitle: "Water Heaters",
    services: [
      { name: "Water Heater Repair", href: "/services/water-heater-repair" },
      { name: "Water Heater Replacement", href: "/services/water-heater-replacement" },
      { name: "Tankless Installation", href: "/services/tankless-water-heater-installation" },
    ],
  },
  {
    id: "mechanical",
    title: "Mechanical Systems",
    shortTitle: "Mechanical",
    services: [
      { name: "Boiler Repair", href: "/services/boiler-repair-service" },
      { name: "Radiant Heating", href: "/services/radiant-heating-plumbing" },
      { name: "Gas Line Services", href: "/services/gas-line-repair-installation" },
      { name: "Whole House Repiping", href: "/services/whole-house-repiping" },
    ],
  },
  {
    id: "residential",
    title: "Residential Services",
    shortTitle: "Residential",
    services: [
      { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
      { name: "Toilet & Faucet Install", href: "/services/toilet-and-faucet-installation" },
      { name: "Sump Pump Services", href: "/services/sump-pump-repair-install" },
      { name: "Water Filtration", href: "/services/water-filtration-system" },
    ],
  },
  {
    id: "sewer",
    title: "Sewer Line Services",
    shortTitle: "Sewer Lines",
    services: [
      { name: "Sewer Line Repair", href: "/services/sewer-line-repair-replacement" },
      { name: "Plumbing Inspections", href: "/services/plumbing-safety-inspections" },
    ],
  },
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  {
    name: "Services",
    href: "/services",
    megaMenu: true,
    children: SERVICE_SILOS,
  },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Blog", href: "/blog" },
  { name: "Tools", href: "/tools" },
  { name: "Contact", href: "/contact-us" },
];

export const SERVICE_AREA_PAGES = [
  { name: "Middlesex County", slug: "middlesex-county", isHub: true },
  { name: "East Brunswick", slug: "east-brunswick" },
  { name: "Edison", slug: "edison" },
  { name: "Sayreville", slug: "sayreville" },
  { name: "Old Bridge", slug: "old-bridge" },
  { name: "Monroe Township", slug: "monroe-township" },
  { name: "South Brunswick", slug: "south-brunswick" },
  { name: "North Brunswick", slug: "north-brunswick" },
];