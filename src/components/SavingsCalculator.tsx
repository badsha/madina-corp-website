import React, { useState } from 'react';
import { 
  Leaf, 
  Flame, 
  Droplets, 
  Trash2, 
  TrendingUp, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface SavingsCalculatorProps {
  onOpenRFQ: () => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onOpenRFQ }) => {
  const [metricTons, setMetricTons] = useState<number>(200);

  const co2SavedMT = (metricTons * 1.82).toFixed(1);
  const crudeOilBarrels = Math.round(metricTons * 3.84);
  const energyKWh = Math.round(metricTons * 5774).toLocaleString();
  const bottlesDiverted = Math.round(metricTons * 50000).toLocaleString();

  return (
    <div className="bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/60 border border-emerald-200/90 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-emerald-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Leaf className="w-3.5 h-3.5 text-emerald-700" />
            <span>Scope 3 Decarbonization & ESG Impact</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Circular Economy & Environmental Savings Estimator
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-1">
            Calculate your manufacturing footprint reduction when switching from virgin fossil-based PET resin to Novaplast certified recycled flakes.
          </p>
        </div>

        {/* Input slider */}
        <div className="w-full lg:w-72 bg-white border border-emerald-200 p-4 rounded-2xl shrink-0 shadow-2xs">
          <div className="flex justify-between items-center text-xs font-bold mb-2">
            <span className="text-slate-700">Annual / Order Demand:</span>
            <span className="text-emerald-700 font-mono text-sm font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              {metricTons} MT
            </span>
          </div>
          <input
            type="range"
            min="20"
            max="2000"
            step="10"
            value={metricTons}
            onChange={(e) => setMetricTons(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono font-medium">
            <span>20 MT</span>
            <span>1,000 MT</span>
            <span>2,000 MT</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
            <Leaf className="w-4 h-4" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
            {co2SavedMT}
          </div>
          <p className="text-xs font-bold text-emerald-750 mt-0.5">Metric Tons CO₂e Prevented</p>
          <span className="text-[11px] text-slate-500 mt-1 block">79% lower emissions vs virgin resin</span>
        </div>

        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2">
            <Flame className="w-4 h-4" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
            {crudeOilBarrels.toLocaleString()}
          </div>
          <p className="text-xs font-bold text-amber-700 mt-0.5">Barrels Crude Oil Conserved</p>
          <span className="text-[11px] text-slate-500 mt-1 block">Avoided petrochemical extraction</span>
        </div>

        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-2">
            <Droplets className="w-4 h-4" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
            {energyKWh}
          </div>
          <p className="text-xs font-bold text-sky-700 mt-0.5">kWh Electricity Saved</p>
          <span className="text-[11px] text-slate-500 mt-1 block">Sufficient to power ~{Math.round(metricTons * 5774 / 3000)} homes</span>
        </div>

        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-2">
            <Trash2 className="w-4 h-4" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
            {bottlesDiverted}
          </div>
          <p className="text-xs font-bold text-teal-700 mt-0.5">Bottles Diverted from Landfills</p>
          <span className="text-[11px] text-slate-500 mt-1 block">100% post-consumer mechanical recycling</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-emerald-100">
        <div className="text-xs text-slate-600 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>GRS 4.0 Transaction Certificates include verified CO₂ offset documentation for corporate ESG filings.</span>
        </div>

        <button
          onClick={onOpenRFQ}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
        >
          <span>Request Supply Allocation for {metricTons} MT</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
