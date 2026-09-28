import React from 'react';
import { 
  Leaf, 
  Recycle, 
  Globe, 
  TrendingDown, 
  ShieldCheck, 
  ArrowRight,
  Factory,
  Droplets,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { SavingsCalculator } from '../components/SavingsCalculator';

interface SustainabilityPageProps {
  onOpenRFQ: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onOpenRFQ }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12 bg-slate-50">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold">
          <Leaf className="w-3.5 h-3.5 text-emerald-700" />
          <span>Circular Economy & ESG Scope 3 Decarbonization</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Decarbonizing Polymer Supply Chains with rPET Flakes
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed font-normal">
          Recycled polyethylene terephthalate (rPET) cuts greenhouse gas emissions by up to 79% compared to virgin fossil-fuel PET resin, empowering brand owners and convertors to fulfill mandatory recycled content quotas and corporate net-zero pledges.
        </p>
      </div>

      {/* Interactive Savings Calculator */}
      <SavingsCalculator onOpenRFQ={onOpenRFQ} />

      {/* Life Cycle Assessment (LCA) Comparison Grid */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Life Cycle Assessment (LCA): Virgin PET vs Madina Corp rPET
          </h2>
          <p className="text-xs text-slate-500">
            Independent cradle-to-gate environmental audit compliant with ISO 14040/14044 methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-emerald-700 font-mono">-79%</div>
              <h3 className="text-base font-bold text-slate-900 mt-1">Carbon Footprint (GHG)</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Virgin PET requires approximately 2.3 kg CO₂e per kg of resin produced via paraxylene and MEG synthesis. Madina Corp mechanical rPET requires only 0.48 kg CO₂e/kg.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-sky-700 font-mono">-84%</div>
              <h3 className="text-base font-bold text-slate-900 mt-1">Water Footprint & Closed Loop</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Our advanced effluent treatment plant (ETP) recycles 92% of process water through ultra-filtration and reverse osmosis, minimizing freshwater intake.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-amber-700 font-mono">-67%</div>
              <h3 className="text-base font-bold text-slate-900 mt-1">Non-Renewable Energy Usage</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Eliminating petroleum extraction and high-pressure polymerization yields significant cumulative energy demand (CED) savings.
            </p>
          </div>
        </div>
      </div>

      {/* Closed-Loop Circularity Flowchart */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900">
          Closed-Loop Bottle-to-Bottle Circularity
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="font-mono text-emerald-800 font-bold text-sm">STAGE A</span>
            <h4 className="font-bold text-slate-900">Post-Consumer Collection</h4>
            <p className="text-slate-600 leading-relaxed font-normal">
              Municipal deposit-return systems (DRS) and curbside collections across Turkey & Southern Europe gather clear beverage containers.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="font-mono text-sky-800 font-bold text-sm">STAGE B</span>
            <h4 className="font-bold text-slate-900">Caustic Wash & Sortex</h4>
            <p className="text-slate-600 leading-relaxed font-normal">
              Bottles are ground, stripped of glues at 85°C, and optically sorted to &lt;30 ppm PVC and near-zero foreign color contamination.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="font-mono text-amber-800 font-bold text-sm">STAGE C</span>
            <h4 className="font-bold text-slate-900">Converting & Extrusion</h4>
            <p className="text-slate-600 leading-relaxed font-normal">
              Downstream packaging convertors extrude sheets or fibers, utilizing up to 100% rPET content in retail packaging.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="font-mono text-teal-800 font-bold text-sm">STAGE D</span>
            <h4 className="font-bold text-slate-900">Re-Recyclability</h4>
            <p className="text-slate-600 leading-relaxed font-normal">
              PET retains its linear molecular structure, allowing continuous mechanical and chemical recycling cycles for decades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
