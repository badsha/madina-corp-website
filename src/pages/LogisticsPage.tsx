import React from 'react';
import { 
  Truck, 
  Ship, 
  Anchor, 
  Package, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Globe
} from 'lucide-react';
import { GLOBAL_PORTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';

interface LogisticsPageProps {
  onOpenRFQ: () => void;
}

export const LogisticsPage: React.FC<LogisticsPageProps> = ({ onOpenRFQ }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12 bg-slate-50">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold">
          <Truck className="w-3.5 h-3.5 text-emerald-700" />
          <span>Global Ocean Freight & Incoterms Supply Chain</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          International Logistics & Container Dispatch
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed font-normal">
          Operating dedicated export staging terminals at Port of Mersin and Port of Izmir (Aliaga). Direct shipping lines to Western Europe, North America, Latin America, and the Middle East with guaranteed moisture barrier packaging.
        </p>
      </div>

      {/* Primary Shipping Hubs Table */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Major Direct Export Sea Ports & Typical Ocean Transit Times
          </h2>
          <p className="text-xs text-slate-500">
            Standard port-to-port ocean transit days based on premier carrier rotations (MSC, Maersk, CMA CGM, Hapag-Lloyd).
          </p>
        </div>

        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-700 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4">Port Name & Hub</th>
                  <th className="py-3.5 px-4">Country</th>
                  <th className="py-3.5 px-4">UN/LOCODE</th>
                  <th className="py-3.5 px-4">Transit to North Europe</th>
                  <th className="py-3.5 px-4">Transit to North America</th>
                  <th className="py-3.5 px-4">Transit to Asia / ME</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {GLOBAL_PORTS.map((port, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <Anchor className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{port.name}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-600 font-medium">{port.country}</td>
                    <td className="py-3 px-4 font-mono text-sky-700 font-bold">{port.code}</td>
                    <td className="py-3 px-4 text-slate-700 font-medium">{port.transitEU}</td>
                    <td className="py-3 px-4 text-slate-700 font-medium">{port.transitUS}</td>
                    <td className="py-3 px-4 text-slate-700 font-medium">{port.transitAsia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Incoterms 2020 Supported */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900">
          Commercial Incoterms® 2020 Flexibility
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
            <span className="text-emerald-800 font-bold font-mono text-sm">CIF / CFR</span>
            <h4 className="font-bold text-slate-900 text-xs">Cost, Insurance & Freight</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
              We manage ocean freight and marine insurance directly to your designated destination port. Preferred by 80% of our international buyers.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
            <span className="text-sky-800 font-bold font-mono text-sm">FOB</span>
            <h4 className="font-bold text-slate-900 text-xs">Free On Board (Mersin / Izmir)</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
              Cargo cleared through Turkish customs and loaded onto buyer&apos;s nominated vessel. Ideal for clients with global corporate carrier contracts.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
            <span className="text-amber-800 font-bold font-mono text-sm">DAP</span>
            <h4 className="font-bold text-slate-900 text-xs">Delivered At Place (EU Mainland)</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
              Direct road freight via mega-trailers (up to 24 MT) directly to your factory or warehouse doorstep within European territory.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
            <span className="text-teal-800 font-bold font-mono text-sm">EXW</span>
            <h4 className="font-bold text-slate-900 text-xs">Ex Works (Free Zone Plant)</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
              Collection directly from our Izmir Aliaga or Mersin bonded logistics warehouses with export documentation provided.
            </p>
          </div>
        </div>
      </div>

      {/* Packaging & Anti-Moisture Engineering */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <Package className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-slate-900">
              Industrial Jumbo Big Bags (FIBC)
            </h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Our standard export packaging consists of heavy-duty, circular-woven polypropylene 1,000 kg and 1,100 kg Big Bags fitted with high-barrier co-extruded Polyethylene (PE) inner liners. This hermetically seals the flakes against marine humidity, sea spray, and condensation during voyage.
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Top filling spout with dust-proof drawstring</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Bottom discharge valve for automated hopper emptying</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>4 corner heavy lifting loops (SWL: 1,500 kg, Safety Factor 5:1)</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <Truck className="w-5 h-5 text-sky-600" />
            <h3 className="text-base font-bold text-slate-900">
              Container Loadability & Staging
            </h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Standard ocean load per 40ft High Cube (HC) container accommodates 22 Jumbo Bags (22 to 24.5 MT depending on flake bulk density). Containers are inspected for floor integrity, lined with heavy kraft paper, and equipped with suspended calcium chloride moisture poles.
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>22 Metric Tons Net weight per 40ft High Cube container</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>ISPM-15 heat-treated certified wooden pallets on request</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>High-security ISO 17712 bolt container seals attached</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Need a Freight Quote to Your Destination Port?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
            Provide your preferred discharge port and target volume. Our logistics desk responds with firm shipping space schedules.
          </p>
        </div>

        <button
          onClick={onOpenRFQ}
          className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shrink-0 cursor-pointer flex items-center gap-2 shadow-xs"
        >
          <span>Calculate CIF / FOB Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
