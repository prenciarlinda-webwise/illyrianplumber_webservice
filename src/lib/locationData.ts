// Per-location data for the service-area pages.
// Each city has UNIQUE prose for the "emergency plumber near me" intro and
// for every silo intro. Non-templatized copy is the page-seo rule that
// stops Google from treating these as duplicate location pages.

export type LocationData = {
  slug: string;
  name: string;
  fullName: string;
  eta: string;
  routes: string[];
  zips: string[];
  neighborhoods: string[];
  emergencyNearMeIntro: string;
  siloIntros: {
    emergency: string;
    "water-heater": string;
    mechanical: string;
    residential: string;
    commercial: string;
  };
};

// Service-level blurbs are intentionally short factual labels that describe
// the service itself, not the city. The city anchor comes from the H3 and
// the surrounding silo intro paragraph, which IS city-unique.
export const SERVICE_BLURBS: Record<string, string> = {
  "/services/emergency-plumbing":
    "24/7 dispatch for burst pipes, no hot water, gas leaks, and no-heat calls.",
  "/services/water-leak-detection":
    "Acoustic and thermal imaging to locate hidden leaks behind walls and slabs.",
  "/services/gas-line-repair-installation":
    "Licensed gas line repair, installation, and PSE&G inspection coordination.",
  "/services/water-heater-repair":
    "Same-day repair for tank and tankless units, every major brand.",
  "/services/water-heater-replacement":
    "Tank swap-out with old-unit disposal and written labor warranty.",
  "/services/water-heater-installation":
    "New 40 to 50 gallon tank installs with permit and inspection included.",
  "/services/tankless-water-heater-installation":
    "Navien, Rinnai, and Rheem units sized to your hot-water demand.",
  "/services/boiler-repair-service":
    "Hydronic boiler repair, annual tune-ups, and no-heat emergency dispatch.",
  "/services/radiant-heating-plumbing":
    "Radiant floor heating layout, install, and zone-control troubleshooting.",
  "/services/whole-house-repiping":
    "Full repipe in PEX or copper for galvanized and polybutylene homes.",
  "/services/bathroom-remodeling":
    "Bath plumbing for remodels: drains, supply, fixtures, and venting.",
  "/services/toilet-and-faucet-installation":
    "Toilet swaps, faucet upgrades, angle stops, and hose bib replacements.",
  "/services/kitchen-plumbing":
    "Disposals, dishwashers, pot fillers, and sink rough-in work.",
  "/services/sump-pump-repair-install":
    "Primary and battery-backup sump pump installs for finished basements.",
  "/services/water-filtration-system":
    "Whole-house carbon filtration and softeners for hard central NJ water.",
  "/services/backflow-prevention-testing":
    "Annual backflow testing and certified RPZ or DCVA device installation.",
  "/services/plumbing-safety-inspections":
    "Pre-purchase plumbing inspection report for buyers and sellers.",
  "/services/commercial-plumbing":
    "Restaurants, offices, retail, and multi-family. Code-compliant work.",
};

export const LOCATION_DATA: Record<string, LocationData> = {
  "east-brunswick": {
    slug: "east-brunswick",
    name: "East Brunswick",
    fullName: "East Brunswick, NJ",
    eta: "5 to 15 minutes",
    routes: ["Route 18", "Cranbury Road", "Ryders Lane"],
    zips: ["08816"],
    neighborhoods: [
      "Farrington Lake",
      "Dunhams Corner",
      "Tamarack Hollow",
      "Crystal Springs",
      "Mid-State Mall area",
      "Route 18 corridor",
    ],
    emergencyNearMeIntro:
      "When East Brunswick homeowners search for an emergency plumber near me, proximity is the question that actually matters. Our office at 697 Old Bridge Turnpike puts a licensed NJ master plumber 5 to 15 minutes from any 08816 address. Burst pipes, no-hot-water calls, gas smells, and no-heat calls get same-shift dispatch any hour, weekend, or holiday. The phone is answered by a live dispatcher, not an after-hours routing service. Written prices are quoted before any work starts, and our trucks carry real parts so most East Brunswick emergency calls close on the first visit.",
    siloIntros: {
      emergency:
        "Emergency plumbing is the largest chunk of our East Brunswick call volume, especially during winter freeze-thaw cycles along Cranbury Road and Ryders Lane. The three services below are the ones most often searched as \"emergency plumber near me\" or \"24/7 plumber near me\" by 08816 residents. We keep a dispatcher live around the clock and an on-call plumber under 15 minutes from any address inside the township.",
      "water-heater":
        "Water heater work is our second-largest East Brunswick category because the township's 1960s and 1970s housing stock cycles through tank units roughly every 12 to 15 years. We carry stock from Bradford White, AO Smith, Navien, and Rinnai, so a same-day swap is realistic when a tank fails on a Saturday morning. Every install includes a permit pulled from East Brunswick Township Construction.",
      mechanical:
        "East Brunswick winters are long and a lot of older homes south of Route 18 still run on hydronic boilers. Annual boiler maintenance, radiant floor heating tune-ups, and whole-house repiping for galvanized or polybutylene supply lines are the mechanical jobs we book most often around the 08816 ZIP.",
      residential:
        "Day-to-day residential plumbing in East Brunswick covers bathroom remodels around Brunswick Square, kitchen plumbing during Dunhams Corner renovations, sump pump installs in basement-equipped Farrington Lake homes, and water filtration systems for the moderately hard municipal supply that reaches most addresses on Cranbury Road.",
      commercial:
        "East Brunswick commercial plumbing covers the Route 18 retail strip, light commercial near Mid-State Mall, and multi-tenant office buildings along Cranbury Road. We rough in new construction, repair active leaks, and run backflow certification on schedule for property managers in the 08816 area.",
    },
  },

  edison: {
    slug: "edison",
    name: "Edison",
    fullName: "Edison, NJ",
    eta: "10 minutes",
    routes: ["Route 18", "Route 1", "Route 287"],
    zips: ["08817", "08820", "08837"],
    neighborhoods: [
      "Clara Barton",
      "Nixon",
      "Stelton",
      "Menlo Park",
      "Bonhamtown",
      "Oak Tree",
    ],
    emergencyNearMeIntro:
      "Edison residents searching for a 24 hour emergency plumber near me get a real answer from our East Brunswick base: a licensed master plumber on the road within minutes of the call, on most Edison driveways inside 10 minutes via Route 18, Route 1, or Route 287. We dispatch for burst pipes, failed water heaters, gas leaks, and no-heat boiler calls day or night, including weekends and holidays. There is no surprise after-hours surcharge layered on top of the repair, and every emergency call comes with a live ETA before the truck arrives.",
    siloIntros: {
      emergency:
        "Edison's mix of mid-century Clara Barton single-family homes and newer Route 1 townhomes generates a steady stream of emergency calls year-round. Burst pipes during January freezes, sudden water-heater failures, and gas-smell calls all route to the same 24/7 dispatch line. These three services are what Edison homeowners ask for when they type \"emergency plumber near me\" into Google after midnight.",
      "water-heater":
        "Water heater installs and repairs are one of Edison's most requested categories. Compact townhomes along the Route 1 corridor especially benefit from tankless conversion, while older Clara Barton and Nixon Capes still run on 40 and 50 gallon tank units that we replace every week. NJ Clean Energy rebates can offset $300 to $700 of the install price on qualifying tankless units.",
      mechanical:
        "Older Edison neighborhoods (especially the original Clara Barton and Stelton grids) still depend on gas and oil hydronic boilers for heat and hot water. Boiler service, radiant heating troubleshooting, gas line work, and whole-house repiping are the mechanical-system jobs we run most often inside the 08817 and 08820 ZIPs.",
      residential:
        "Routine residential plumbing in Edison ranges from bathroom remodels in Oak Tree, kitchen plumbing upgrades during Stelton renovations, and sump pump replacements in flood-prone homes near the Raritan River, to backflow testing for properties on Edison Township Water Department service connections.",
      commercial:
        "Commercial plumbing in Edison covers Raritan Center industrial tenants, Menlo Park Mall area retail, and Route 1 office condos. We work on restaurant grease lines, multi-tenant restroom remodels, and code-compliant new-construction rough-ins for general contractors operating inside Edison Township.",
    },
  },

  sayreville: {
    slug: "sayreville",
    name: "Sayreville",
    fullName: "Sayreville, NJ",
    eta: "12 to 18 minutes",
    routes: ["Route 9", "Route 35", "Garden State Parkway Exit 124"],
    zips: ["08872", "08879"],
    neighborhoods: [
      "Parlin",
      "Morgan",
      "Ernston",
      "Melrose",
      "President Park",
      "Sayreville Borough",
    ],
    emergencyNearMeIntro:
      "Searching for an emergency plumber near me in Sayreville? Our crews reach Parlin (08859) and Sayreville (08872) addresses inside 12 to 18 minutes from East Brunswick via Route 9 or Garden State Parkway Exit 124. We answer the phone live overnight, dispatch for burst pipes and failed water heaters every day of the year, and bring stock for the failures we see most often in Sayreville's mix of older borough homes and newer Parlin developments. Pricing is quoted in writing before any work starts.",
    siloIntros: {
      emergency:
        "Sayreville sits on low, sandy ground close to the Raritan Bay, so basement flooding and sump pump failures hit harder here than in upland Middlesex towns. The three emergency services below are the most-searched \"plumber near me\" calls from Sayreville Borough, Parlin, and Morgan. Live dispatcher, real ETA, no after-hours upcharge.",
      "water-heater":
        "Sayreville's housing mix runs from 1950s borough Capes to newer Parlin townhomes. Water heater replacement is constant because corrosion runs faster near the bay's salt air, especially in unfinished basements. We carry tank and tankless stock and pull Sayreville Borough plumbing permits on every install.",
      mechanical:
        "Hydronic boilers heat a lot of Sayreville's older homes, and gas line work is common across the 08872 and 08859 ZIPs. Boiler tune-ups, no-heat calls, and gas line repair are the mechanical jobs we run most often in town, with whole-house repiping reserved for the 1960s galvanized homes near Ernston.",
      residential:
        "Day-to-day residential plumbing in Sayreville covers bathroom remodels in Parlin, kitchen plumbing rough-ins for President Park renovations, and sump pump replacements (often with battery backup) for the lower-lying homes near the river. Water filtration is a regular ask because Sayreville's well-supplied pockets test on the harder end.",
      commercial:
        "Commercial plumbing in Sayreville covers Route 9 retail, food-service tenants near Sayreville Center, and the multi-family complexes off Bordentown Avenue. Backflow testing, grease trap maintenance, and code-compliant fit-outs make up most of the commercial calendar inside borough limits.",
    },
  },

  "old-bridge": {
    slug: "old-bridge",
    name: "Old Bridge",
    fullName: "Old Bridge, NJ",
    eta: "10 to 15 minutes",
    routes: ["Route 9", "Route 35", "Garden State Parkway Exits 117 to 120"],
    zips: ["08857"],
    neighborhoods: [
      "Madison Park",
      "Laurence Harbor",
      "Brownville",
      "Cliffwood Beach",
      "Sayre Woods South",
      "Old Bridge proper",
    ],
    emergencyNearMeIntro:
      "Old Bridge is the township we reach fastest after East Brunswick itself. A 10 to 15 minute response time covers every 08857 address from Madison Park down to Cliffwood Beach when you call the emergency plumber near me line. Burst pipes, no hot water, gas smells, and no-heat boiler calls all get same-shift dispatch with a live ETA. Old Bridge homes built in the 1960s and 1970s are well-represented in our weekly emergency volume because the original galvanized supply lines and 70s-era cast-iron drains are now well past their service life.",
    siloIntros: {
      emergency:
        "Old Bridge's wide split between bayfront Cliffwood Beach properties and inland Madison Park neighborhoods means our emergency calls run the full plumbing failure spectrum: salt-air corroded supply, frozen exposed pipes in unconditioned crawlspaces, and aging drain stacks giving out under normal load. Live dispatch around the clock for all three services below.",
      "water-heater":
        "Tank water heater swaps are constant in Old Bridge because so many homes still run original 1970s and 1980s units. Tankless conversion is increasingly popular along the Route 9 corridor where homeowners want to reclaim utility closet space. We pull Old Bridge Township Construction Office permits on every water heater install.",
      mechanical:
        "Mechanical work in Old Bridge skews heavily to gas line repair and boiler service. The township's older neighborhoods south of Route 516 still rely on gas-fired hydronic boilers, and whole-house repiping is a once-per-decade project for homes where galvanized supply is producing rusty water.",
      residential:
        "Routine residential plumbing in Old Bridge covers bathroom remodels in Sayre Woods South, kitchen plumbing for Madison Park renovations, sump pump replacements for finished basements in Brownville, and water filtration for the harder-end town water that feeds most 08857 connections.",
      commercial:
        "Commercial plumbing in Old Bridge handles Route 9 retail, light commercial in Madison Park, and multi-family complexes near the Garden State Parkway. Backflow testing, restaurant plumbing, and tenant fit-outs make up most of the commercial book inside the township.",
    },
  },

  "monroe-township": {
    slug: "monroe-township",
    name: "Monroe Township",
    fullName: "Monroe Township, NJ",
    eta: "15 to 25 minutes",
    routes: ["NJ Turnpike Exit 8A", "Route 33", "Cranbury-Half Acre Road"],
    zips: ["08831"],
    neighborhoods: [
      "Rossmoor",
      "Concordia",
      "Clearbrook",
      "Greenbriar at Whittingham",
      "Encore at Monroe",
      "Stonebridge",
    ],
    emergencyNearMeIntro:
      "Monroe Township residents looking for a 24 hour emergency plumber near me get response times of 15 to 25 minutes from our East Brunswick base via NJ Turnpike Exit 8A. A high share of Monroe's 08831 housing sits inside 55-plus active-adult communities like Rossmoor, Concordia, Clearbrook, and Greenbriar at Whittingham, so we routinely coordinate with HOA management offices on after-hours access. Burst pipes, no-heat calls, and gas-leak calls get same-shift dispatch any day of the week, with a written quote before any work begins.",
    siloIntros: {
      emergency:
        "Monroe Township's active-adult communities generate a different emergency mix than the typical Middlesex town. Hidden slow leaks behind finished walls, master-bath supply failures while owners winter out of state, and water-heater rupture during seasonal returns are the three failure modes we see most. All three emergency services below carry live overnight dispatch.",
      "water-heater":
        "Water heaters in Monroe Township's HOA communities frequently sit in tight utility closets that drive specific install choices. We carry low-profile 40-gallon and slim-build 50-gallon tank stock plus Navien and Rinnai tankless units sized for typical Rossmoor and Concordia floor plans. HOA-approved venting and condensate routing is part of every quote.",
      mechanical:
        "Mechanical systems in Monroe Township are dominated by gas-fired boilers and forced-air gas furnaces with attached water heaters. Boiler maintenance contracts, radiant heating zone repairs, and gas line work for kitchen or laundry expansions are the most common mechanical asks from 08831 homeowners.",
      residential:
        "Routine residential plumbing in Monroe Township covers age-in-place bathroom remodels in Clearbrook and Greenbriar at Whittingham, comfort-height toilet swaps across Rossmoor, water filtration for moderately hard town water, and backflow testing where required by the HOA management.",
      commercial:
        "Commercial plumbing in Monroe Township concentrates around NJ Turnpike Exit 8A retail and the medical office park along Route 33. Backflow certification, restaurant grease line work, and code-compliant fit-outs are the bulk of commercial activity inside 08831.",
    },
  },

  "north-brunswick": {
    slug: "north-brunswick",
    name: "North Brunswick",
    fullName: "North Brunswick, NJ",
    eta: "12 to 18 minutes",
    routes: ["Route 1", "Route 130", "Route 18"],
    zips: ["08902"],
    neighborhoods: [
      "Rutgers area",
      "Livingston Park",
      "North Brunswick Square",
      "Renaissance",
      "Adams Lane",
      "Route 130 corridor",
    ],
    emergencyNearMeIntro:
      "North Brunswick covers a wide span of housing - from rental properties near the Rutgers campus to older single-family homes around Livingston Park to newer Renaissance condos. When residents type emergency plumber near me into a phone at 2 AM, the variable that matters is whether anyone will pick up the call live. We do, every night. East Brunswick to any 08902 address runs 12 to 18 minutes via Route 1 or Route 130. Burst pipe, no hot water, no heat, gas smell - we dispatch with a live ETA before the truck arrives.",
    siloIntros: {
      emergency:
        "North Brunswick's rental-heavy Rutgers-adjacent housing produces a steady stream of midnight emergency calls: clogged tubs, no-hot-water complaints from tenants, and frozen exposed pipes in older sublet houses. All three emergency services below run 24/7 dispatch with no surprise after-hours fee tacked on the invoice.",
      "water-heater":
        "Water heater replacement is in heavy rotation across North Brunswick because so many rental properties run their tank units to absolute failure. We carry stock for same-day swap, install Bradford White, AO Smith, Navien, and Rinnai, and pull North Brunswick Township construction permits on every install.",
      mechanical:
        "Mechanical work in North Brunswick covers gas-fired hydronic boilers in older Livingston Park homes, radiant heating zones in newer Renaissance condos, and whole-house repiping for the 1960s-era galvanized supply that still feeds parts of the township east of Route 130.",
      residential:
        "Routine residential plumbing in North Brunswick covers bathroom remodels in the Adams Lane area, kitchen plumbing for sublet conversion projects, sump pump installs for finished basements in the lower Adams Lane neighborhoods, and water filtration for the harder municipal supply on the south side of town.",
      commercial:
        "Commercial plumbing in North Brunswick handles Route 130 retail tenants, restaurant grease trap work near Route 1, multi-family rental complexes around the Rutgers campus, and backflow testing for the township's commercial water connections.",
    },
  },

  "south-brunswick": {
    slug: "south-brunswick",
    name: "South Brunswick",
    fullName: "South Brunswick, NJ",
    eta: "18 to 25 minutes",
    routes: ["Route 1", "Route 130", "Route 522"],
    zips: ["08810", "08824", "08852"],
    neighborhoods: [
      "Kendall Park",
      "Monmouth Junction",
      "Dayton",
      "Kingston",
      "Deans",
      "Route 1 corridor",
    ],
    emergencyNearMeIntro:
      "South Brunswick is one of our farther-out service areas, and we are still the local plumber near me answer for emergency dispatch across Kendall Park (08824), Monmouth Junction (08852), and Dayton (08810). Response runs 18 to 25 minutes from East Brunswick via Route 1 or Route 130, with a live dispatcher overnight and a written quote on every emergency job before work begins. Many South Brunswick homes sit on well water rather than municipal supply, which changes the diagnostic on water-pressure complaints and on water heater service life.",
    siloIntros: {
      emergency:
        "South Brunswick's mix of older Kendall Park split-levels, Monmouth Junction Capes, and newer Route 522 developments means our emergency call mix includes well-pump-adjacent supply issues alongside the standard burst-pipe and no-heat boiler work. All three services below run with live overnight dispatch and a real ETA.",
      "water-heater":
        "South Brunswick has a high percentage of well water homes, which shortens tank water heater life and makes anode rod replacement a real recurring service. Tankless conversion in Kendall Park and Monmouth Junction homes is common when homeowners want endless hot water with less mineral buildup. Every install includes a permit pulled from South Brunswick Township Construction.",
      mechanical:
        "Mechanical work in South Brunswick covers gas-fired hydronic boilers in older Dayton and Kingston homes, gas line installations for kitchen and outdoor grill upgrades, and whole-house repiping projects for the 1960s and 1970s housing stock around Kendall Park.",
      residential:
        "Routine residential plumbing in South Brunswick covers bathroom remodels in Monmouth Junction, kitchen plumbing for Kendall Park renovations, sump pump installs and battery-backup systems for the finished basements common in Dayton, and water filtration sized for the well-supplied homes that dominate parts of 08824.",
      commercial:
        "Commercial plumbing in South Brunswick handles Route 1 retail tenants, Route 522 industrial space, and the multi-tenant office parks near Monmouth Junction. Backflow certification, restaurant fit-out, and code-compliant new construction rough-ins make up the bulk of commercial work inside the township.",
    },
  },

  "middlesex-county": {
    slug: "middlesex-county",
    name: "Middlesex County",
    fullName: "Middlesex County, NJ",
    eta: "5 to 25 minutes depending on town",
    routes: ["NJ Turnpike", "Garden State Parkway", "Route 1", "Route 18", "Route 287"],
    zips: ["08816", "08817", "08820", "08837", "08857", "08831", "08902", "08824", "08872"],
    neighborhoods: [
      "East Brunswick",
      "Edison",
      "Old Bridge",
      "Sayreville",
      "Monroe Township",
      "North Brunswick",
      "South Brunswick",
    ],
    emergencyNearMeIntro:
      "Middlesex County is the full service area, not a single town. When residents anywhere in the county search emergency plumber near me, the practical answer is which town they are calling from and how far we have to drive. Inside East Brunswick (08816) we arrive in 5 to 15 minutes. Inside Edison (08817 to 08837), 10 minutes. Old Bridge (08857), 10 to 15. Sayreville, North Brunswick, South Brunswick, and Monroe Township run 12 to 25 minutes depending on traffic and route. Every county-wide emergency call gets the same live dispatcher, the same written quote, and the same NJ Master Plumber license behind the work.",
    siloIntros: {
      emergency:
        "County-wide emergency plumbing is the largest single service Illyrian Plumber runs. Burst pipes during January freeze-thaw cycles, flooding during summer storms, and gas-smell calls year-round all route to the same 24/7 line. Whichever Middlesex County town you are calling from, the three services below are the most-requested emergency dispatches.",
      "water-heater":
        "Across Middlesex County, water heater work is the second-largest service category. Tank replacements run heavy in the older neighborhoods of East Brunswick, Old Bridge, and Sayreville, while tankless conversions dominate in newer Edison Route 1 townhomes and South Brunswick Kendall Park homes with growing hot-water demand.",
      mechanical:
        "Hydronic boilers, radiant heating systems, gas line work, and whole-house repiping show up across every Middlesex County town we serve. The mechanical book skews to the older housing stock in East Brunswick, Sayreville, and Old Bridge. Annual maintenance contracts are common with property managers across the county.",
      residential:
        "Routine residential plumbing across Middlesex County covers bathroom remodels, kitchen plumbing rough-ins, sump pump replacements, water filtration installs, and backflow testing. Every job is permitted with the correct municipal construction office, whether East Brunswick, Edison, Old Bridge, or any other town inside the county.",
      commercial:
        "Commercial plumbing across Middlesex County covers Route 1, Route 9, Route 18, and Route 287 retail strips, restaurant tenants, multi-family complexes, and tenant fit-outs in office and industrial parks. Backflow certification, grease trap maintenance, and code-compliant new-construction plumbing are the most requested commercial services.",
    },
  },
};
