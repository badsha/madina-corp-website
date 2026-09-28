import React from 'react';
import { 
  CheckCircle2, 
  FlaskConical, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Thermometer, 
  Award, 
  ArrowRight,
  Gauge,
  Factory
} from 'lucide-react';
import { WASH_LINE_PROCESS, SAMPLE_IMAGES, PET_PRODUCTS } from '../data/products';
import { CERTIFICATIONS_LIST } from '../data/company';

interface QualityLabPageProps {
  onOpenRFQ: () => void;
}

export const QualityLabPage: React.FC<QualityLabPageProps> = ({ onOpenRFQ }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
          Factory Operations & Testing
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-3">
          Hot-Washing & Quality Assurance
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          How our automated 7-stage hot-washing line cleans post-consumer PET bottles into ultra-pure flakes with guaranteed PVC &lt;30 ppm.
        </p>
      </div>

      {/* Facility & Sample Showcase Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group bg-slate-900">
          <img
            src={SAMPLE_IMAGES.washLineFacility}
            alt="Automated 85C caustic hot wash plant"
            referrerPolicy="no-referrer"
            className="w-full h-72 sm:h-96 object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <span className="px-2.5 py-1 rounded bg-emerald-600 text-white text-xs font-bold inline-flex items-center gap-1.5 mb-2">
              <Factory className="w-3.5 h-3.5" />
              <span>Plant Facility Photo</span>
            </span>
            <h3 className="text-xl font-bold">Continuous 85°C Caustic Wash Line</h3>
            <p className="text-xs text-slate-200 mt-1 max-w-lg">
              Automated de-baling, rotary trommels, dual hot caustic chemical reactors, sink-float tanks, and multi-channel optical sorters.
            </p>
          </div>
        </div>

        {/* 3 Real Flakes Samples Visual */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center justify-between">
            <span>Physical Output Samples</span>
            <span className="text-xs font-normal text-slate-500">Laboratory macro shots</span>
          </h3>

          <div className="space-y-3">
            {PET_PRODUCTS.map((prod) => (
              <div key={prod.id} className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 border border-slate-100">
                {prod.imageUrl && (
                  <img
                    src={prod.imageUrl}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0"
                  />
                )}
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate">{prod.name}</div>
                  <div className="text-[11px] text-emerald-700 font-mono font-semibold">
                    PVC: {prod.specifications.pvcContamination} • IV: {prod.specifications.intrinsicViscosity}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    Flake size: {prod.specifications.flakeSize}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 mt-3 text-center">
            <button
              onClick={onOpenRFQ}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Request free 2-5kg sample bag for your lab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* The 7 Steps of the Wash Line */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          The 7-Stage Hot-Wash Line
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WASH_LINE_PROCESS.map((step) => (
            <div 
              key={step.stepNumber}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-emerald-300 transition-all flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-sm">
                0{step.stepNumber}
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-base">
                    {step.title}
                  </h3>
                </div>
                <div className="text-xs font-medium text-emerald-700">
                  {step.equipment}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.purpose}
                </p>
                <div className="text-[11px] text-slate-500 font-mono bg-slate-50 p-2 rounded-lg border border-slate-100 mt-2">
                  Parameters: {step.parameters}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications and Compliance */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="max-w-2xl mb-6">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
            International Compliance
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Audited Certifications
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Our facilities and flakes are regularly audited by international inspection bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS_LIST.map((cert, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">{cert.name}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  {cert.badge}
                </span>
              </div>
              <div className="text-xs text-slate-500 font-medium">Issued by: {cert.issuedBy}</div>
              <p className="text-xs text-slate-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Free Sample Call to Action */}
      <div className="bg-emerald-600 text-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md shadow-emerald-600/20">
        <div>
          <h3 className="text-2xl font-bold">Request a Free Lab Sample</h3>
          <p className="text-emerald-100 text-sm mt-1 max-w-lg">
            We courier 2kg to 5kg of our hot-washed flakes with full Certificate of Analysis (COA) so you can verify our IV, PVC, and moisture in your own lab.
          </p>
        </div>
        <button
          onClick={onOpenRFQ}
          className="bg-white text-emerald-800 hover:bg-emerald-50 font-bold px-6 py-3 rounded-xl text-sm whitespace-nowrap cursor-pointer shadow-sm"
        >
          Request Sample Bag
        </button>
      </div>
    </div>
  );
};
