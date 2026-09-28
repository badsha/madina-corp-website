import React, { useState } from 'react';
import { 
  Sparkles, 
  ZoomIn, 
  Check, 
  Layers, 
  Eye, 
  Sliders, 
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { ProductGrade } from '../types';

interface FlakeVisualizerProps {
  product: ProductGrade;
  onOpenTDS: () => void;
  onOpenRFQ: () => void;
}

export const FlakeVisualizer: React.FC<FlakeVisualizerProps> = ({
  product,
  onOpenTDS,
  onOpenRFQ
}) => {
  const [zoomLevel, setZoomLevel] = useState<1 | 2 | 4>(1);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md">
      {/* Visual Header */}
      <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
            High-Resolution Optical Sample Inspection
          </span>
        </div>

        {/* Zoom Selector */}
        <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-0.5 text-xs shadow-2xs">
          <span className="text-[10px] text-slate-500 px-1.5 hidden sm:inline font-medium">Magnify:</span>
          {([1, 2, 4] as const).map((z) => (
            <button
              key={z}
              onClick={() => setZoomLevel(z)}
              className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
                zoomLevel === z 
                  ? 'bg-emerald-600 text-white font-bold shadow-2xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {z}x
            </button>
          ))}
        </div>
      </div>

      {/* Visual Representation Stage */}
      <div className="relative aspect-video sm:aspect-[21/9] bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 overflow-hidden flex items-center justify-center p-6 select-none border-b border-slate-200">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e140_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e140_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Flake cluster simulation */}
        <div 
          className="relative transition-transform duration-300 flex items-center justify-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Main sample tray representation */}
          <div className="relative w-72 h-44 sm:w-96 sm:h-56 rounded-2xl border-2 border-slate-300 bg-white/90 shadow-xl p-4 flex flex-wrap items-center justify-center gap-2 overflow-hidden backdrop-blur-md">
            {/* Ambient glow matching product tint */}
            <div 
              className="absolute -inset-10 opacity-20 blur-2xl pointer-events-none" 
              style={{ backgroundColor: product.colorCode }}
            />

            {/* Generated crystalline flake shapes */}
            {Array.from({ length: 28 }).map((_, i) => {
              const rot = (i * 37) % 360;
              const scale = 0.75 + ((i % 5) * 0.1);

              return (
                <div
                  key={i}
                  className="relative transition-all duration-300 hover:scale-125 hover:z-20 cursor-crosshair group"
                  style={{
                    transform: `rotate(${rot}deg) scale(${scale})`,
                    margin: '-4px'
                  }}
                >
                  <div 
                    className={`w-6 h-8 sm:w-8 sm:h-10 clip-polygon border shadow-sm transition-all ${
                      product.id === 'clear-hot-washed-aaa'
                        ? 'bg-gradient-to-tr from-sky-50 via-white to-slate-200 border-sky-300/80 shadow-sky-500/10'
                        : product.id === 'light-blue-pet-flakes'
                        ? 'bg-gradient-to-tr from-cyan-200 via-sky-300 to-blue-300 border-cyan-400 shadow-cyan-500/20'
                        : product.id === 'green-pet-flakes'
                        ? 'bg-gradient-to-tr from-emerald-300 via-green-400 to-teal-400 border-emerald-500 shadow-emerald-500/20'
                        : product.id === 'amber-brown-pet-flakes'
                        ? 'bg-gradient-to-tr from-amber-400 via-yellow-600 to-amber-700 border-amber-600 shadow-amber-800/20'
                        : product.id === 'food-grade-rpet-pellets'
                        ? 'w-5 h-6 rounded-full bg-gradient-to-tr from-slate-50 via-white to-emerald-100 border-emerald-300 shadow-emerald-400/20'
                        : 'bg-gradient-to-tr from-slate-300 via-emerald-600 to-blue-600 border-slate-400'
                    }`}
                    style={{
                      clipPath: product.id === 'food-grade-rpet-pellets' 
                        ? 'ellipse(45% 48% at 50% 50%)' 
                        : 'polygon(15% 0%, 90% 12%, 100% 85%, 25% 100%, 0% 55%)'
                    }}
                  >
                    {/* Light refraction glint */}
                    <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white blur-[0.5px]"></div>
                  </div>
                </div>
              );
            })}

            {/* Scale watermark indicator */}
            <div className="absolute bottom-2 right-3 bg-white/90 px-2 py-0.5 rounded text-[10px] text-slate-700 font-mono border border-slate-300 shadow-2xs font-semibold">
              Cut: {product.specifications.flakeSize}
            </div>
            <div className="absolute top-2 left-3 bg-emerald-50 px-2 py-0.5 rounded text-[10px] text-emerald-800 font-mono border border-emerald-200 shadow-2xs flex items-center gap-1 font-bold">
              <Check className="w-3 h-3 text-emerald-700" />
              <span>Optical Sortex Pass</span>
            </div>
          </div>
        </div>

        {/* Bottom floating specs badge */}
        <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
          <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-[11px] text-slate-700 flex items-center gap-3 pointer-events-auto shadow-sm">
            <span>PVC: <strong className="text-emerald-700 font-bold">{product.specifications.pvcContamination}</strong></span>
            <span className="text-slate-300">|</span>
            <span>Moisture: <strong className="text-amber-700 font-bold">{product.specifications.moistureContent}</strong></span>
            <span className="text-slate-300">|</span>
            <span>IV: <strong className="text-sky-700 font-bold">{product.specifications.intrinsicViscosity}</strong></span>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={onOpenTDS}
              className="bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 transition-colors cursor-pointer shadow-2xs"
            >
              View Full Lab TDS
            </button>
            <button
              onClick={onOpenRFQ}
              className="bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs transition-colors cursor-pointer"
            >
              Order Sample Batch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
