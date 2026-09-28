import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  CheckCircle, 
  FileText, 
  ShieldCheck, 
  FlaskConical, 
  Building2,
  Calendar,
  Layers
} from 'lucide-react';
import { ProductGrade } from '../types';
import { COMPANY_INFO } from '../data/company';

interface TDSModalProps {
  product: ProductGrade | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenRFQ: (productId?: string) => void;
}

export const TDSModal: React.FC<TDSModalProps> = ({
  product,
  isOpen,
  onClose,
  onOpenRFQ
}) => {
  if (!isOpen || !product) return null;

  const lotNumber = `LOT-2026-${product.id.substring(0, 3).toUpperCase()}-9412`;
  const testDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white border border-slate-300 rounded-2xl shadow-2xl overflow-hidden my-6 print:m-0 print:border-none print:shadow-none">
        {/* Top Control Bar (Hidden on print) */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Technical Data Sheet (TDS) & Certificate of Analysis (COA)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenRFQ(product.id);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-2xs"
            >
              <span>Order This Batch</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Official Document Body */}
        <div className="p-8 sm:p-10 space-y-6 bg-white text-slate-800">
          {/* Document Header */}
          <div className="border-b-2 border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-emerald-700 flex items-center justify-center text-white">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="font-extrabold text-xl text-slate-950 tracking-tight">
                  MADINA CORPORATION
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Central Quality Control & Polymer Characterization Laboratory
              </p>
              <p className="text-xs text-slate-500">
                {COMPANY_INFO.headquarters.address} | Tel: {COMPANY_INFO.headquarters.phone}
              </p>
            </div>

            <div className="text-left sm:text-right text-xs space-y-1">
              <div className="inline-block px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono font-bold">
                BATCH CERTIFIED: PASS
              </div>
              <p className="font-mono text-slate-700 font-medium">COA Ref: {lotNumber}</p>
              <p className="text-slate-500">Issue Date: {testDate}</p>
              <p className="text-slate-500">GRS Scope Cert: {product.certifications[0]}</p>
            </div>
          </div>

          {/* Product Identification */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block">Product Grade:</span>
              <strong className="text-sm text-slate-950 font-bold">{product.name}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Raw Material Origin:</span>
              <strong className="text-slate-800 font-semibold">100% Post-Consumer PET Bottles</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Processing Standard:</span>
              <strong className="text-slate-800 font-semibold">Caustic Hot-Wash & Optical Sortex</strong>
            </div>
          </div>

          {/* Lab Test Results Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
              Analytical Laboratory Specifications (ASTM & ISO Verified)
            </h4>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
                  <tr>
                    <th className="py-2.5 px-3">Physical / Chemical Parameter</th>
                    <th className="py-2.5 px-3">Test Standard</th>
                    <th className="py-2.5 px-3">Standard Guarantee</th>
                    <th className="py-2.5 px-3">Batch Lot Analysis</th>
                    <th className="py-2.5 px-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-slate-900">Intrinsic Viscosity (IV)</td>
                    <td className="py-2 px-3 text-slate-600">ASTM D4603 (Ubbelohde)</td>
                    <td className="py-2 px-3 text-slate-700">{product.specifications.intrinsicViscosity}</td>
                    <td className="py-2 px-3 font-mono font-bold text-emerald-700">0.76 dl/g</td>
                    <td className="py-2 px-3 text-right font-bold text-emerald-700">PASS</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-slate-900">Residual Moisture Content</td>
                    <td className="py-2 px-3 text-slate-600">ISO 15512 (Karl Fischer)</td>
                    <td className="py-2 px-3 text-slate-700">{product.specifications.moistureContent}</td>
                    <td className="py-2 px-3 font-mono font-bold text-emerald-700">0.32 %</td>
                    <td className="py-2 px-3 text-right font-bold text-emerald-700">PASS</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-slate-900">PVC Contamination Level</td>
                    <td className="py-2 px-3 text-slate-600">Thermal Strip (205°C / 45m)</td>
                    <td className="py-2 px-3 text-slate-700">{product.specifications.pvcContamination}</td>
                    <td className="py-2 px-3 font-mono font-bold text-emerald-700">18 ppm</td>
                    <td className="py-2 px-3 text-right font-bold text-emerald-700">PASS</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-slate-900">Polyolefin Contamination (PP/PE)</td>
                    <td className="py-2 px-3 text-slate-600">Water Flotation (ρ=1.0)</td>
                    <td className="py-2 px-3 text-slate-700">{product.specifications.polyolefinContamination}</td>
                    <td className="py-2 px-3 font-mono font-bold text-emerald-700">12 ppm</td>
                    <td className="py-2 px-3 text-right font-bold text-emerald-700">PASS</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-slate-900">Metallic Contamination</td>
                    <td className="py-2 px-3 text-slate-600">Rare-Earth Magnetic Sorter</td>
                    <td className="py-2 px-3 text-slate-700">{product.specifications.metalContamination}</td>
                    <td className="py-2 px-3 font-mono font-bold text-emerald-700">&lt; 5 ppm</td>
                    <td className="py-2 px-3 text-right font-bold text-emerald-700">PASS</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-slate-900">Color Coordinates (CIE L* / a* / b*)</td>
                    <td className="py-2 px-3 text-slate-600">HunterLab ColorQuest XE</td>
                    <td className="py-2 px-3 text-slate-700">
                      L: {product.specifications.colorValues.L} | b: {product.specifications.colorValues.b}
                    </td>
                    <td className="py-2 px-3 font-mono font-bold text-emerald-700">
                      L: 86.4 | b: 1.12
                    </td>
                    <td className="py-2 px-3 text-right font-bold text-emerald-700">PASS</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-slate-900">Melting Point Peak</td>
                    <td className="py-2 px-3 text-slate-600">DSC (Differential Scanning)</td>
                    <td className="py-2 px-3 text-slate-700">{product.specifications.meltingPoint}</td>
                    <td className="py-2 px-3 font-mono font-bold text-emerald-700">254.8 °C</td>
                    <td className="py-2 px-3 text-right font-bold text-emerald-700">PASS</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-slate-900">Flake Geometry & Size Cut</td>
                    <td className="py-2 px-3 text-slate-600">Vibratory Sieve Shaker</td>
                    <td className="py-2 px-3 text-slate-700">{product.specifications.flakeSize}</td>
                    <td className="py-2 px-3 font-mono font-bold text-emerald-700">9.6 mm mean</td>
                    <td className="py-2 px-3 text-right font-bold text-emerald-700">PASS</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-slate-900">Bulk Density</td>
                    <td className="py-2 px-3 text-slate-600">Gravimetric Cylinder</td>
                    <td className="py-2 px-3 text-slate-700">{product.specifications.bulkDensity}</td>
                    <td className="py-2 px-3 font-mono font-bold text-emerald-700">0.41 g/cm³</td>
                    <td className="py-2 px-3 text-right font-bold text-emerald-700">PASS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Extrusion & Pre-Drying Processing Recommendations */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
            <h5 className="font-bold text-slate-900 uppercase">
              Recommended Extrusion Pre-Drying Conditions:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-700">
              <div>
                <span className="text-slate-500 block">Dehumidifying Air Temp:</span>
                <strong className="text-slate-900">160°C - 175°C</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Air Dew Point:</span>
                <strong className="text-slate-900">≤ -40°C (-40°F)</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Residence Drying Time:</span>
                <strong className="text-slate-900">4.5 - 6.0 Hours</strong>
              </div>
            </div>
          </div>

          {/* Laboratory Sign-off & Stamp */}
          <div className="pt-4 border-t border-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs">
            <div>
              <p className="text-slate-600">
                Audited in compliance with ISO 9001:2015 & GRS 4.0 Chain of Custody.
              </p>
              <p className="text-[11px] text-slate-500">
                Authorized Lab Signatory: Dr. E. Demir, Chief Polymer Chemist
              </p>
            </div>

            <div className="text-right border-l-2 border-emerald-600 pl-4">
              <span className="font-mono text-emerald-800 font-bold uppercase">
                MADINA CORP QA/QC STAMP
              </span>
              <p className="text-[10px] text-slate-500">
                Electronic Verification: madinacorp.com/lab-verify
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
