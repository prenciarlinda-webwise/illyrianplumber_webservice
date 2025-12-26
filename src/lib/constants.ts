export const BUSINESS_INFO = {
  name: "Illyrian Plumber Corp",
  phone: "(718) 427-4396",
  phoneLink: "tel:+17184274396",
  phoneName: "Niti",
  phone2: "(732) 123-4567",  // UPDATE THIS with the actual second number
  phone2Link: "tel:+17321234567",  // UPDATE THIS with the actual second number
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
  tagline: "Your Trusted Plumbing Experts in New Jersey",
  description: "Illyrian Plumber Corp provides 24/7 professional plumbing services in East Brunswick, NJ and surrounding areas. Emergency repairs, water heaters, drain cleaning, and more.",
  founded: "2010",
  stats: {
    happyClients: "500+",
    projectsCompleted: "750+",
    yearsExperience: "10+",
    responseTime: "30 min",
  },
  socialMedia: {
    facebook: "https://facebook.com/illyrianplumber",
    instagram: "https://instagram.com/illyrianplumber",
    google: "https://g.page/illyrianplumber",
  },
  serviceAreas: [
    "East Brunswick",
    "New Brunswick",
    "South River",
    "North Brunswick",
    "Edison",
    "Sayreville",
    "Old Bridge",
    "Monroe Township",
    "South Brunswick",
    "Milltown",
    "Highland Park",
    "Spotswood",
  ],
  licenses: {
    nj: "NJ Master Plumber License #12345",
    insured: "Fully Licensed & Insured",
  },
};

export const SERVICES = {
  emergency: [
    {
      name: "Burst Pipe Repair",
      slug: "burst-pipe-repair",
      description: "Immediate response to burst pipes to minimize water damage",
    },
    {
      name: "Water Leak Detection",
      slug: "water-leak-detection",
      description: "Advanced leak detection technology to find hidden leaks",
    },
    {
      name: "Water Heater Emergency",
      slug: "water-heater-repair",
      description: "24/7 water heater repair and emergency replacement",
    },
    {
      name: "Gas Line Emergency",
      slug: "gas-line-services",
      description: "Emergency gas leak detection and repair services",
    },
    {
      name: "Sump Pump Repair",
      slug: "sump-pump-services",
      description: "Emergency sump pump repair and backup installation",
    },
  ],
  residential: [
    {
      name: "Kitchen Plumbing",
      slug: "kitchen-plumbing",
      description: "Complete kitchen plumbing installation and repairs",
    },
    {
      name: "Bathroom Plumbing",
      slug: "bathroom-plumbing",
      description: "Full bathroom plumbing services from fixtures to drains",
    },
    {
      name: "Water Heater Services",
      slug: "water-heater-repair",
      description: "Installation, repair, and maintenance of all water heaters",
    },
    {
      name: "Boiler & Radiant Heating",
      slug: "boiler-heating",
      description: "Expert boiler installation and radiant heating systems",
    },
    {
      name: "Drain Cleaning",
      slug: "drain-cleaning",
      description: "Professional drain cleaning and clog removal",
    },
    {
      name: "Water Filtration",
      slug: "water-filtration",
      description: "Water filtration and softener system installation",
    },
    {
      name: "Backflow Testing",
      slug: "backflow-testing",
      description: "Certified backflow prevention testing and installation",
    },
  ],
  commercial: [
    {
      name: "Commercial Plumbing",
      slug: "commercial-plumbing",
      description: "Full-service commercial plumbing solutions",
    },
    {
      name: "Plumbing Inspections",
      slug: "plumbing-inspections",
      description: "Comprehensive plumbing inspections and maintenance plans",
    },
    {
      name: "Tenant Improvements",
      slug: "tenant-improvements",
      description: "Rough-in plumbing and tenant improvement services",
    },
  ],
};

export const SERVICE_SILOS = [
  {
    id: "emergency",
    title: "Emergency Plumbing",
    shortTitle: "Emergency",
    href: "/services/emergency-plumbing",
    services: [
      { name: "24/7 Emergency Plumbing", href: "/services/emergency-plumbing" },
      { name: "Burst Pipe Repair", href: "/services/emergency-plumbing/burst-pipe-repair" },
      { name: "Water Leak Detection", href: "/services/emergency-plumbing/water-leak-detection" },
      { name: "Gas Leak Repair", href: "/services/emergency-plumbing/gas-leak-repair" },
      { name: "Slab Leak Detection", href: "/services/emergency-plumbing/slab-leak-detection" },
    ],
  },
  {
    id: "water-heater",
    title: "Water Heater Services",
    shortTitle: "Water Heaters",
    href: "/services/water-heater",
    services: [
      { name: "Water Heater Repair", href: "/services/water-heater/repair" },
      { name: "Water Heater Replacement", href: "/services/water-heater/replacement" },
      { name: "Tankless Water Heater", href: "/services/water-heater/tankless" },
      { name: "Water Heater Installation", href: "/services/water-heater/installation" },
      { name: "Gas Water Heater", href: "/services/water-heater/gas-water-heater" },
      { name: "Electric Water Heater", href: "/services/water-heater/electric-water-heater" },
    ],
  },
  {
    id: "kitchen-bathroom",
    title: "Kitchen & Bathroom",
    shortTitle: "Kitchen & Bath",
    href: "/services/kitchen-bathroom",
    services: [
      { name: "Faucet Repair", href: "/services/kitchen-bathroom/faucet-repair" },
      { name: "Toilet Repair", href: "/services/kitchen-bathroom/toilet-repair" },
      { name: "Garbage Disposal", href: "/services/kitchen-bathroom/garbage-disposal" },
      { name: "Sink Installation", href: "/services/kitchen-bathroom/sink-installation" },
      { name: "Shower & Tub", href: "/services/kitchen-bathroom/shower-tub" },
      { name: "Bathroom Remodel", href: "/services/kitchen-bathroom/bathroom-remodel" },
    ],
  },
  {
    id: "drain-sewer",
    title: "Drain & Sewer",
    shortTitle: "Drains & Sewer",
    href: "/services/drain-sewer",
    services: [
      { name: "Drain Cleaning", href: "/services/drain-sewer/drain-cleaning" },
      { name: "Hydro Jetting", href: "/services/drain-sewer/hydro-jetting" },
      { name: "Sewer Line Repair", href: "/services/drain-sewer/sewer-line-repair" },
      { name: "Camera Inspection", href: "/services/drain-sewer/camera-inspection" },
      { name: "Sump Pump", href: "/services/drain-sewer/sump-pump" },
    ],
  },
  {
    id: "commercial",
    title: "Commercial Plumbing",
    shortTitle: "Commercial",
    href: "/services/commercial",
    services: [
      { name: "Restaurant Plumbing", href: "/services/commercial/restaurant-plumbing" },
      { name: "Backflow Testing", href: "/services/commercial/backflow-testing" },
      { name: "Boiler Repair", href: "/services/commercial/boiler-repair" },
      { name: "Grease Trap", href: "/services/commercial/grease-trap" },
      { name: "Plumbing Inspections", href: "/services/commercial/plumbing-inspections" },
    ],
  },
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    megaMenu: true,
    children: SERVICE_SILOS,
  },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Blog", href: "/blog" },
  { name: "Tools", href: "/tools" },
  { name: "Contact", href: "/contact" },
];