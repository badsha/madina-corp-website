import React from 'react';
import { 
  Building2, 
  Factory, 
  Globe, 
  ShieldCheck, 
  Users, 
  Award, 
  ArrowRight,
  TrendingUp,
  MapPin,
  Clock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface AboutPageProps {
  onOpenRFQ: () => void;
  setActivePage: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenRFQ, setActivePage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12 bg-slate-50">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold">
          <Building2 className="w-3.5 h-3.5 text-emerald-700" />
          <span>Industrial Company Profile & Infrastructure</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          About Madina Corporation
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed font-normal">
          Founded in 2012, Madina Corporation (madinacorp.com) is a premier industrial manufacturer and exporter of mechanical recycled polymers and hot-washed PET flakes headquartered in the Aegean manufacturing hub of Izmir, Turkey.
        </p>
      </div>

      {/* Main Company Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Pioneering Industrial Mechanical Recycling for Global Convertors
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            With state-of-the-art washing lines engineered in Germany and Italy, Madina Corporation operates a 32,000 square meter processing facility with an annual processing throughput of 54,000 metric tons of post-consumer PET bottles.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            We partner with leading multinational textile fiber extruders, thermoformed packaging converters, and beverage brand owners across 48 countries. By strictly adhering to dual-stage 85°C caustic hot-wash chemical treatment, high-gravity centrifugal separation, and multi-channel optical Sortex sorting, we achieve purity levels (&lt;30 ppm PVC) that closely mirror virgin PET resin performance.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
            <div className="bg-white border border-slate-200 p-3.5 rounded-2xl shadow-2xs">
              <span className="text-xl font-extrabold text-emerald-700 font-mono">2012</span>
              <p className="text-[11px] text-slate-500 font-medium">Year Founded</p>
            </div>
            <div className="bg-white border border-slate-200 p-3.5 rounded-2xl shadow-2xs">
              <span className="text-xl font-extrabold text-sky-700 font-mono">75,000 MT</span>
              <p className="text-[11px] text-slate-500 font-medium">Annual Wash Capacity</p>
            </div>
            <div className="bg-white border border-slate-200 p-3.5 rounded-2xl col-span-2 sm:col-span-1 shadow-2xs">
              <span className="text-xl font-extrabold text-teal-700 font-mono">48 Countries</span>
              <p className="text-[11px] text-slate-500 font-medium">Global Customer Footprint</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">
            Manufacturing Locations & Logistics Hubs
          </h3>
          <div className="space-y-4 text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Headquarters & Central Wash Plant</span>
              </div>
              <p className="text-slate-600 pl-6">{COMPANY_INFO.headquarters.address}</p>
              <p className="text-slate-500 pl-6 font-medium">Tel: {COMPANY_INFO.headquarters.phone}</p>
            </div>

            <div className="space-y-1 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>European Commercial Hub (Hamburg)</span>
              </div>
              <p className="text-slate-600 pl-6">{COMPANY_INFO.europeanOffice.address}</p>
              <p className="text-slate-500 pl-6 font-medium">Tel: {COMPANY_INFO.europeanOffice.phone}</p>
            </div>

            <div className="space-y-1 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>Middle East Distribution (Dubai)</span>
              </div>
              <p className="text-slate-600 pl-6">{COMPANY_INFO.middleEastHub.address}</p>
              <p className="text-slate-500 pl-6 font-medium">Tel: {COMPANY_INFO.middleEastHub.phone}</p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenRFQ}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              Request Factory Tour / Audit Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Operational Pillars of Our Manufacturing Facility
          </h2>
          <p className="text-xs text-slate-500">
            Uncompromising standards across all production shifts and laboratory testing protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Batch-to-Batch Consistency</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Every single 1,000 kg Jumbo Bag is tagged with a unique barcoded batch number linked to automated laboratory records for IV, moisture, and color CIE L* coordinates.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
              <Factory className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">High Production Continuity</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Continuous 24/7 twin-line operation with strategic raw material bottle bale stockpiles guarantees dependable monthly supply schedules for long-term contract convertors.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">International Trade Fluency</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Expert export documentation desk managing Letters of Credit (L/C), EUR.1 / ATR movement certificates, Form A certificates of origin, and GRS Transaction Certificates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
