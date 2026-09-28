import { ProductGrade, WashLineStep } from '../types';

export const PET_PRODUCTS: ProductGrade[] = [
  {
    id: 'clear-hot-washed-aaa',
    slug: 'clear-hot-washed-pet-flakes',
    name: 'Clear Hot-Washed PET Flakes (Grade AAA)',
    shortTagline: 'Ultra-clean clear flakes with <30 ppm PVC and IV 0.76 dl/g for high-tenacity fiber and sheet extrusion.',
    category: 'Clear Flakes',
    colorCode: '#0284c7',
    accentBg: 'bg-sky-50 border-sky-200 text-sky-800',
    previewColor: 'from-sky-100/40 via-slate-100/30 to-sky-200/50',
    purityGrade: 'Grade AAA (Ultra Clean)',
    targetIndustries: [
      'Polyester Staple Fiber & Filament (PSF/POY)',
      'APET Clear Sheet & Thermoforming',
      'Packaging Strapping & Monofilament'
    ],
    description: 'Hot-washed clear PET flakes from 100% post-consumer clear beverage bottles. Washed at 85°C with caustic soda, float-sink density separation, and optical sorting to guarantee PVC contamination under 30 ppm.',
    detailedOverview: 'Engineered for converters requiring high optical clarity, stable intrinsic viscosity (IV 0.74–0.78 dl/g), and minimal impurities. Flakes undergo high-friction washing, double caustic hot washing at 85°C to strip glues and labels, followed by multi-channel optical sorting and de-dusting.',
    keyBenefits: [
      'PVC contamination strictly under 30 ppm prevents screen blocking',
      'Stable Intrinsic Viscosity (0.76 ± 0.02 dl/g) for smooth melt flow',
      'Moisture controlled below 0.5% with double-layer liner packing',
      'Free from label glue and caustic residues (neutral pH washed)',
      'Uniform flake size (8–12 mm) prevents extruder bridging'
    ],
    applications: [
      {
        title: 'Polyester Staple Fiber (PSF / POY / FDY)',
        description: 'Virgin-quality spinning for apparel, non-wovens, and spun yarns.',
        suitability: 'Optimal'
      },
      {
        title: 'APET Rigid Thermoforming Sheets',
        description: 'Clear sheet extrusion for food punnets, blister packs, and clamshells.',
        suitability: 'Optimal'
      },
      {
        title: 'High-Tenacity Strapping Band',
        description: 'Industrial strapping bands replacing steel packaging straps.',
        suitability: 'Recommended'
      }
    ],
    specifications: {
      intrinsicViscosity: '0.74 - 0.78 dl/g',
      moistureContent: '< 0.5%',
      pvcContamination: '< 30 ppm',
      polyolefinContamination: '< 20 ppm',
      metalContamination: '< 10 ppm',
      totalContamination: '< 50 ppm (0.005%)',
      flakeSize: '8 - 12 mm',
      bulkDensity: '0.38 - 0.44 g/cm³',
      meltingPoint: '254 - 256 °C',
      colorValues: {
        L: '≥ 85.0 (Bright White)',
        a: '-1.5 to +0.5',
        b: '≤ 2.0 (Zero Yellowing)'
      },
      dustContent: '< 0.05%',
      glueAdhesive: '< 20 ppm'
    },
    packagingOptions: [
      '1,000 kg Woven PP Jumbo Bags with PE Moisture Liner',
      '1,100 kg Big Bags on heat-treated ISPM-15 wooden pallets'
    ],
    containerLoad: '22 - 24 MT per 40ft High Cube Container',
    minOrderQuantity: '22 MT (One 40ft HC Container)',
    typicalLeadTime: '7 - 10 Business Days',
    origin: 'Turkey / Export Hub',
    certifications: ['GRS 4.0 Certified', 'ISO 9001:2015', 'ISO 14001', 'REACH'],
    priceRangeEstimate: '$950 - $1,050 / MT (FOB)',
    imageUrl: '/src/assets/images/clear_pet_flakes_1790608884059.jpg'
  },
  {
    id: 'light-blue-pet-flakes',
    slug: 'light-blue-pet-flakes',
    name: 'Light Blue PET Flakes (Grade A)',
    shortTagline: 'Uniform aqua/light blue flakes for fiber spinning, geotextiles, and colored strapping bands.',
    category: 'Colored Flakes',
    colorCode: '#0284c7',
    accentBg: 'bg-cyan-50 border-cyan-200 text-cyan-800',
    previewColor: 'from-cyan-200/40 via-sky-200/30 to-blue-300/40',
    purityGrade: 'Grade A (Fiber Quality)',
    targetIndustries: [
      'Hollow Conjugate Fiber (HCS)',
      'Nonwoven Geotextiles & Carpet Backing',
      'Industrial PET Strapping Bands'
    ],
    description: 'Hot-washed light blue PET flakes sorted from mineral water and carbonated drink bottles. Optical spectrophotometric sorting ensures uniform light blue hue and low contamination.',
    detailedOverview: 'A cost-effective alternative to clear flakes. The natural blue hue acts as an optical whitener in polyester fiber spinning, reducing the need for virgin masterbatch tinting. Thoroughly hot-washed to eliminate organic residues.',
    keyBenefits: [
      'Natural blue tint neutralizes yellowing in polyester fiber manufacturing',
      'Guaranteed PVC < 40 ppm for reliable continuous extrusion',
      'High thermal stability and consistent intrinsic viscosity (0.74 dl/g)',
      'Hot caustic washed and neutral-water rinsed to remove sugars and glues',
      'Uniform 8-12 mm polygon cut'
    ],
    applications: [
      {
        title: 'Hollow Conjugate Siliconized Fiber (HCS)',
        description: 'Pillow, cushion, and wadding fillings with high elasticity.',
        suitability: 'Optimal'
      },
      {
        title: 'Geotextiles & Civil Engineering Nonwovens',
        description: 'Needle-punched non-woven fabrics for roads, drainage, and civil works.',
        suitability: 'Optimal'
      },
      {
        title: 'Automotive Underbody Liners',
        description: 'Molded needle-felts for vehicle acoustic and interior trim panels.',
        suitability: 'Recommended'
      }
    ],
    specifications: {
      intrinsicViscosity: '0.73 - 0.77 dl/g',
      moistureContent: '< 0.6%',
      pvcContamination: '< 40 ppm',
      polyolefinContamination: '< 30 ppm',
      metalContamination: '< 10 ppm',
      totalContamination: '< 80 ppm (0.008%)',
      flakeSize: '8 - 12 mm',
      bulkDensity: '0.36 - 0.42 g/cm³',
      meltingPoint: '253 - 256 °C',
      colorValues: {
        L: '76.0 - 82.0',
        a: '-8.0 to -4.0 (Aqua)',
        b: '-6.0 to -1.5 (Cool blue)'
      },
      dustContent: '< 0.08%',
      glueAdhesive: '< 30 ppm'
    },
    packagingOptions: [
      '1,000 kg Woven PP Jumbo Bags with PE Liner',
      '1,050 kg Big Bags on export pallets'
    ],
    containerLoad: '22 - 23 MT per 40ft High Cube Container',
    minOrderQuantity: '22 MT (One 40ft HC Container)',
    typicalLeadTime: '5 - 10 Business Days',
    origin: 'Turkey / Export Hub',
    certifications: ['GRS 4.0 Certified', 'ISO 9001:2015', 'REACH'],
    priceRangeEstimate: '$880 - $960 / MT (FOB)',
    imageUrl: '/src/assets/images/blue_pet_flakes_1790608897250.jpg'
  },
  {
    id: 'green-pet-flakes',
    slug: 'green-pet-flakes',
    name: 'Green PET Flakes (Grade A)',
    shortTagline: 'Hot-washed emerald green flakes with high tensile strength for strapping bands, synthetic bristles, and nets.',
    category: 'Colored Flakes',
    colorCode: '#059669',
    accentBg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    previewColor: 'from-emerald-200/40 via-green-300/30 to-teal-400/40',
    purityGrade: 'Grade A (Technical Grade)',
    targetIndustries: [
      'PET Strapping Bands (Embossed & Smooth)',
      'Agricultural Nets & Vineyard Monofilaments',
      'Synthetic Bristles & Broom Fibers'
    ],
    description: 'Hot-washed green PET flakes sorted from beverage and sparkling water bottles. Known for high mechanical elongation recovery and tensile memory in strapping band extrusion.',
    detailedOverview: 'Processed through high-shear washing to eliminate syrup and glue residues. Green flakes provide excellent tensile properties when drawn into monofilaments or strapping bands at an economical raw material cost.',
    keyBenefits: [
      'High tensile strength and elongation recovery for strapping production',
      'Controlled green hue without dark opaque contaminants',
      'Washed with hot caustic soda to prevent extrusion fumes',
      'Low thermal shrinkage under high draw ratios',
      'Competitive price advantage over clear flakes'
    ],
    applications: [
      {
        title: 'PET Strapping Bands',
        description: 'Heavy duty pallet securing bands with high shock resistance.',
        suitability: 'Optimal'
      },
      {
        title: 'Agricultural Monofilaments & Vineyard Wire',
        description: 'UV-resistant replacement for steel trellis wires in greenhouses.',
        suitability: 'Optimal'
      },
      {
        title: 'Synthetic Bristles & Industrial Brooms',
        description: 'Durable extruded bristles for street sweepers and household brooms.',
        suitability: 'Recommended'
      }
    ],
    specifications: {
      intrinsicViscosity: '0.73 - 0.77 dl/g',
      moistureContent: '< 0.7%',
      pvcContamination: '< 50 ppm',
      polyolefinContamination: '< 40 ppm',
      metalContamination: '< 10 ppm',
      totalContamination: '< 100 ppm (0.01%)',
      flakeSize: '8 - 14 mm',
      bulkDensity: '0.35 - 0.42 g/cm³',
      meltingPoint: '252 - 255 °C',
      colorValues: {
        L: '55.0 - 68.0',
        a: '-22.0 to -14.0 (Green)',
        b: '6.0 to 14.0'
      },
      dustContent: '< 0.10%',
      glueAdhesive: '< 40 ppm'
    },
    packagingOptions: [
      '1,000 kg Woven PP Jumbo Bags with PE Liner',
      '1,100 kg Big Bags on export pallets'
    ],
    containerLoad: '21 - 23 MT per 40ft High Cube Container',
    minOrderQuantity: '21 MT',
    typicalLeadTime: '7 - 12 Business Days',
    origin: 'Turkey / Export Hub',
    certifications: ['GRS 4.0 Certified', 'ISO 9001:2015', 'REACH'],
    priceRangeEstimate: '$820 - $900 / MT (FOB)',
    imageUrl: '/src/assets/images/green_pet_flakes_1790608910563.jpg'
  }
];

export const SAMPLE_IMAGES = {
  clearFlakes: '/src/assets/images/clear_pet_flakes_1790608884059.jpg',
  blueFlakes: '/src/assets/images/blue_pet_flakes_1790608897250.jpg',
  greenFlakes: '/src/assets/images/green_pet_flakes_1790608910563.jpg',
  washLineFacility: '/src/assets/images/pet_washline_plant_1790608951698.jpg',
  jumboBagsExport: '/src/assets/images/jumbo_bags_export_1790608966725.jpg'
};

export const WASH_LINE_PROCESS: WashLineStep[] = [
  {
    stepNumber: 1,
    title: 'Bale Opening & Dry Trommel Screening',
    equipment: 'Hydraulic De-baler & Rotary Trommel',
    purpose: 'Breaks compressed bottle bales and removes loose sand, bottle caps, and fine debris before washing.',
    parameters: 'Screen aperture 40mm, continuous throughput 4.5 MT/hour.'
  },
  {
    stepNumber: 2,
    title: 'Wet Granulation & Label Separation',
    equipment: 'Heavy-Duty Wet Granulator & Air Zig-Zag Classifier',
    purpose: 'Crushes bottles into uniform 8-12 mm flakes with water cooling while aspirating out plastic bottle labels.',
    parameters: 'Flake cut 8 - 12 mm polygon, label aspiration efficiency > 99.2%.'
  },
  {
    stepNumber: 3,
    title: 'Caustic Hot Washing (85°C)',
    equipment: 'Twin Continuous Hot Wash Reactors',
    purpose: 'Uses 85°C caustic soda (NaOH 1.5–2%) and specialized surfactants to dissolve label glues, soft drink sugars, and chemical residues.',
    parameters: 'Temperature: 85°C ± 2°C, chemical residence time: 18 minutes.'
  },
  {
    stepNumber: 4,
    title: 'Float-Sink Tank Density Separation',
    equipment: 'Hydrodynamic Float-Sink Separation Tanks',
    purpose: 'Polyolefin caps and rings (PP/PE density < 1.0 g/cm³) float to the top and are skimmed away, while clean PET flakes (density 1.38 g/cm³) sink.',
    parameters: 'Separation water density 1.00 g/cm³, PP/PE contamination reduced to < 20 ppm.'
  },
  {
    stepNumber: 5,
    title: 'Friction Rinsing & Centrifugal Drying',
    equipment: 'High-Speed Friction Washer & Centrifuge',
    purpose: 'Vigorously rinses off all caustic residues with fresh water until neutral pH 7.0 is reached, followed by centrifugal moisture extraction.',
    parameters: 'Rinse pH: 6.8 - 7.2, post-centrifuge moisture: < 0.5%.'
  },
  {
    stepNumber: 6,
    title: 'Optical Color & NIR Polymer Sorting',
    equipment: 'Multi-Channel Optical Sortex & NIR Camera Sorter',
    purpose: 'High-speed optical cameras identify and air-blast any stray colored flakes, dark specks, or PVC fragments.',
    parameters: 'Full-spectrum RGB + NIR cameras, PVC detection down to < 30 ppm.'
  },
  {
    stepNumber: 7,
    title: 'Anti-Static De-dusting & Jumbo Bag Packing',
    equipment: 'Cyclone Elutriator & Automated Big-Bag Filling Station',
    purpose: 'Removes all electrostatic dust fines (< 500 microns) before automated filling into 1,000 kg moisture-barrier jumbo bags with weight printouts.',
    parameters: 'Dust fines < 0.05%, bag weight tolerance ± 0.5 kg.'
  }
];

export const QA_TESTING_PROTOCOLS = [
  {
    testName: 'PVC Contamination (Thermal Hot Plate Test)',
    standard: 'ASTM D5991 / In-house 260°C bake test',
    frequency: 'Every 2 Metric Tons',
    specificationTarget: '< 30 ppm for Clear AAA / < 40 ppm for Light Blue',
    significance: 'Prevents hydrochloric acid degradation and extruder spinneret corrosion.'
  },
  {
    testName: 'Intrinsic Viscosity (IV)',
    standard: 'ASTM D4603 (Ubbelohde Capillary Viscometer)',
    frequency: 'Every production lot (20 MT)',
    specificationTarget: '0.74 - 0.78 dl/g (±0.02 dl/g batch stability)',
    significance: 'Ensures uniform polymer chain length and melt flow index during fiber/sheet extrusion.'
  },
  {
    testName: 'Moisture Content (Karl Fischer Titration)',
    standard: 'ASTM D6869 coulometric titration',
    frequency: 'Before packaging each jumbo bag',
    specificationTarget: '< 0.5% by weight',
    significance: 'Guarantees flakes will not undergo hydrolytic degradation during pre-drying.'
  },
  {
    testName: 'Color Spectrophotometer (L*, a*, b*)',
    standard: 'HunterLab / CIE L*a*b* D65 10° Illuminant',
    frequency: 'Every 4 Metric Tons',
    specificationTarget: 'Clear AAA: L* ≥ 85.0, b* ≤ 2.0 (Clean bright white)',
    significance: 'Maintains strict color consistency across container shipments.'
  },
  {
    testName: 'Float / Sink Polyolefin Test (PP/PE)',
    standard: 'Water density flotation (1.00 g/cm³)',
    frequency: 'Every 2 Metric Tons',
    specificationTarget: '< 20 ppm PP/PE caps & rings',
    significance: 'Eliminates un-melted fish-eyes and surface flaws in extruded films.'
  }
];

export const GLOBAL_PORTS = [
  {
    name: 'Port of Mersin',
    portName: 'Port of Mersin',
    country: 'Turkey',
    code: 'TRMER',
    transitEU: '8 - 12 Days',
    transitUS: '18 - 22 Days',
    transitAsia: '14 - 18 Days',
    leadTimeDays: '3 - 7 days (Loading port)',
    commonIncoterm: 'FOB / CIF',
    notes: 'Primary export terminal with direct weekly container feeder lines.'
  },
  {
    name: 'Port of Izmir (Aliaga)',
    portName: 'Port of Izmir (Aliaga)',
    country: 'Turkey',
    code: 'TRIZM',
    transitEU: '6 - 10 Days',
    transitUS: '16 - 20 Days',
    transitAsia: '16 - 20 Days',
    leadTimeDays: '3 - 7 days (Loading port)',
    commonIncoterm: 'FOB / CIF',
    notes: 'Aegean industrial hub loading port for European destinations.'
  },
  {
    name: 'Port of Rotterdam',
    portName: 'Port of Rotterdam',
    country: 'Netherlands',
    code: 'NLRTM',
    transitEU: 'Direct Inbound',
    transitUS: '10 - 12 Days',
    transitAsia: '22 - 28 Days',
    leadTimeDays: '10 - 14 days sea transit',
    commonIncoterm: 'CIF / CFR / DAP',
    notes: 'Regular liner service directly into Western Europe industrial hubs.'
  },
  {
    name: 'Port of Hamburg',
    portName: 'Port of Hamburg',
    country: 'Germany',
    code: 'DEHAM',
    transitEU: 'Direct Inbound',
    transitUS: '11 - 14 Days',
    transitAsia: '24 - 30 Days',
    leadTimeDays: '12 - 16 days sea transit',
    commonIncoterm: 'CIF / CFR',
    notes: 'Weekly container departures with full customs clearance documents.'
  },
  {
    name: 'Jebel Ali Port (Dubai)',
    portName: 'Jebel Ali Port (Dubai)',
    country: 'UAE',
    code: 'AEJEA',
    transitEU: '14 - 18 Days',
    transitUS: '24 - 28 Days',
    transitAsia: '8 - 12 Days',
    leadTimeDays: '12 - 15 days sea transit',
    commonIncoterm: 'CIF / CFR',
    notes: 'Major hub for Gulf textile and strapping band manufacturers.'
  }
];
