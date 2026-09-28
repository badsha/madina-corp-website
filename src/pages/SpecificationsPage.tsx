import React from 'react';
import { 
  Download, 
  FileText, 
  FlaskConical, 
  Printer, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PET_PRODUCTS, QA_TESTING_PROTOCOLS } from '../data/products';

interface SpecificationsPageProps {
  onOpenRFQ: (productId?: string) => void;
  onOpenTDS: (productId: string) => void;
  onSelectProduct: (productId: string) => void;
}

export const SpecificationsPage: React.FC<SpecificationsPageProps> = ({
  onOpenRFQ,
  onOpenTDS,
  onSelectProduct
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
            Comparative Matrix
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-2">
            Hot-Washed PET Flakes Specifications
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Side-by-side technical comparison of our 3 hot-washed flake grades. Every shipment is tested according to ASTM D5991, ASTM D4603, and ASTM D6869.
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="self-start md:self-auto inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-sm cursor-pointer"
        >
          <Printer className="w-4 h-4 text-slate-500" />
          <span>Print Spec Sheet</span>
        </button>
      </div>

      {/* Side-by-Side Comparison Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-4 px-5 font-bold text-slate-900 w-1/4">Specification Parameter</th>
                {PET_PRODUCTS.map((prod) => (
                  <th key={prod.id} className="py-4 px-5 text-center w-1/4 border-l border-slate-200">
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: prod.colorCode }} />
                      <span className="font-bold text-slate-900 text-sm">{prod.name}</span>
                    </div>
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${prod.accentBg}`}>
                      {prod.purityGrade}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/80">
                <td className="py-3 px-5 font-semibold text-slate-900 bg-slate-50/50">Intrinsic Viscosity (IV)</td>
                {PET_PRODUCTS.map((p) => (
                  <td key={p.id} className="py-3 px-5 text-center font-mono font-bold text-emerald-700 border-l border-slate-100">
                    {p.specifications.intrinsicViscosity}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3 px-5 font-semibold text-slate-900 bg-slate-50/50">PVC Contamination</td>
                {PET_PRODUCTS.map((p) => (
                  <td key={p.id} className="py-3 px-5 text-center font-mono font-bold text-emerald-700 border-l border-slate-100">
                    {p.specifications.pvcContamination}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3 px-5 font-semibold text-slate-900 bg-slate-50/50">Moisture Content</td>
                {PET_PRODUCTS.map((p) => (
                  <td key={p.id} className="py-3 px-5 text-center font-mono text-slate-900 border-l border-slate-100">
                    {p.specifications.moistureContent}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3 px-5 font-semibold text-slate-900 bg-slate-50/50">Polyolefin (PP/PE) Content</td>
                {PET_PRODUCTS.map((p) => (
                  <td key={p.id} className="py-3 px-5 text-center font-mono text-slate-900 border-l border-slate-100">
                    {p.specifications.polyolefinContamination}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3 px-5 font-semibold text-slate-900 bg-slate-50/50">Metal Contamination</td>
                {PET_PRODUCTS.map((p) => (
                  <td key={p.id} className="py-3 px-5 text-center font-mono text-slate-900 border-l border-slate-100">
                    {p.specifications.metalContamination}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3 px-5 font-semibold text-slate-900 bg-slate-50/50">Flake Size Cut</td>
                {PET_PRODUCTS.map((p) => (
                  <td key={p.id} className="py-3 px-5 text-center font-mono text-slate-900 border-l border-slate-100">
                    {p.specifications.flakeSize}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3 px-5 font-semibold text-slate-900 bg-slate-50/50">Bulk Density</td>
                {PET_PRODUCTS.map((p) => (
                  <td key={p.id} className="py-3 px-5 text-center font-mono text-slate-900 border-l border-slate-100">
                    {p.specifications.bulkDensity}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3 px-5 font-semibold text-slate-900 bg-slate-50/50">Melting Point</td>
                {PET_PRODUCTS.map((p) => (
                  <td key={p.id} className="py-3 px-5 text-center font-mono text-slate-900 border-l border-slate-100">
                    {p.specifications.meltingPoint}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3 px-5 font-semibold text-slate-900 bg-slate-50/50">Dust / Fines (&lt;500µm)</td>
                {PET_PRODUCTS.map((p) => (
                  <td key={p.id} className="py-3 px-5 text-center font-mono text-slate-900 border-l border-slate-100">
                    {p.specifications.dustContent}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3 px-5 font-semibold text-slate-900 bg-slate-50/50">Container Load (40' HC)</td>
                {PET_PRODUCTS.map((p) => (
                  <td key={p.id} className="py-3 px-5 text-center font-mono text-slate-900 border-l border-slate-100">
                    {p.containerLoad}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3 px-5 font-semibold text-slate-900 bg-slate-50/50">Standard Packaging</td>
                {PET_PRODUCTS.map((p) => (
                  <td key={p.id} className="py-3 px-5 text-center text-slate-600 border-l border-slate-100">
                    1,000 kg Jumbo Bags
                  </td>
                ))}
              </tr>
              {/* Actions row */}
              <tr className="bg-slate-50">
                <td className="py-4 px-5 font-bold text-slate-900">Direct Actions</td>
                {PET_PRODUCTS.map((p) => (
                  <td key={p.id} className="py-4 px-5 text-center border-l border-slate-200">
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => onOpenRFQ(p.id)}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg text-xs transition-colors cursor-pointer shadow-sm"
                      >
                        Request Quote
                      </button>
                      <button
                        onClick={() => onOpenTDS(p.id)}
                        className="w-full bg-white hover:bg-slate-100 text-slate-700 font-semibold py-1.5 rounded-lg text-xs border border-slate-300 transition-colors cursor-pointer"
                      >
                        View TDS / COA
                      </button>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quality Testing Protocols */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="max-w-2xl mb-6">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
            Quality Assurance
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Standard Testing Protocols
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Every production batch undergoes mandatory lab testing before shipment release.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {QA_TESTING_PROTOCOLS.map((protocol, idx) => (
            <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">{protocol.testName}</span>
                <span className="text-emerald-700 font-mono font-semibold">{protocol.specificationTarget}</span>
              </div>
              <div className="text-slate-500">Method: {protocol.standard} • Frequency: {protocol.frequency}</div>
              <p className="text-slate-600">{protocol.significance}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
