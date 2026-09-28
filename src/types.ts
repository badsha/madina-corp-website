export interface ProductSpec {
  intrinsicViscosity: string; // e.g. "0.74 - 0.78 dl/g"
  moistureContent: string;    // e.g. "< 0.5%"
  pvcContamination: string;   // e.g. "< 30 ppm"
  polyolefinContamination: string; // e.g. "< 20 ppm"
  metalContamination: string; // e.g. "< 10 ppm"
  totalContamination: string; // e.g. "< 0.03%"
  flakeSize: string;          // e.g. "8 - 12 mm"
  bulkDensity: string;        // e.g. "0.38 - 0.45 g/cm³"
  meltingPoint: string;       // e.g. "252 - 256 °C"
  colorValues: {
    L: string; // Lightness
    a: string; // Red-Green
    b: string; // Yellow-Blue
  };
  dustContent: string;        // e.g. "< 0.1%"
  glueAdhesive: string;       // e.g. "< 25 ppm"
}

export interface ProductGrade {
  id: string;
  slug: string;
  name: string;
  shortTagline: string;
  category: 'Clear Flakes' | 'Colored Flakes' | 'rPET Pellets' | 'Specialty Resin';
  colorCode: string;
  accentBg: string;
  previewColor: string;
  purityGrade: string; // e.g., "AAA Ultra-Purity", "Grade A Industrial", "Food Grade"
  targetIndustries: string[];
  description: string;
  detailedOverview: string;
  keyBenefits: string[];
  applications: {
    title: string;
    description: string;
    suitability: 'Optimal' | 'Recommended' | 'Standard';
  }[];
  specifications: ProductSpec;
  packagingOptions: string[];
  containerLoad: string;
  minOrderQuantity: string;
  typicalLeadTime: string;
  origin: string;
  certifications: string[];
  priceRangeEstimate: string; // e.g., "$940 - $1,050 / MT"
  imageUrl?: string;
}

export interface RFQFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  productGradeId: string;
  orderQuantityMT: number;
  orderType: 'spot' | 'monthly_contract' | 'sample_only';
  packagingPreference: string;
  incoterm: 'CIF' | 'FOB' | 'CFR' | 'DAP' | 'EXW';
  destinationPort: string;
  targetDeliveryMonth: string;
  additionalNotes: string;
  requireSample: boolean;
}

export interface CertificationItem {
  name: string;
  code: string;
  issuedBy: string;
  description: string;
  validUntil: string;
  badge: string;
}

export interface WashLineStep {
  stepNumber: number;
  title: string;
  equipment: string;
  purpose: string;
  parameters: string;
}
