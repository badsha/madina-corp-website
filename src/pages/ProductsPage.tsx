import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Package, 
  Sparkles, 
  ShieldCheck,
  Eye 
} from 'lucide-react';
import { PET_PRODUCTS } from '../data/products';

interface ProductsPageProps {
  onSelectProduct: (productId: string) => void;
  onOpenRFQ: (productId?: string) => void;
  onOpenTDS: (productId: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  onOpenRFQ,
  onOpenTDS
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
          Product Catalog & Physical Samples
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-3">
          Hot-Washed PET Flakes
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Supplying 100% post-consumer bottle flakes washed at 85°C with caustic soda. Guaranteed low PVC (&lt;30 to &lt;50 ppm), low moisture (&lt;0.5%), and stable intrinsic viscosity for smooth extrusion.
        </p>
      </div>

      {/* 3 Core Product Cards with Sample Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PET_PRODUCTS.map((product) => (
          <div 
            key={product.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Product Sample Image Container */}
              <div className="relative h-56 overflow-hidden bg-slate-100 border-b border-slate-100">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={`${product.name} sample photo`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${product.previewColor}`} />
                )}

                {/* Badges on Image */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold shadow-xs ${product.accentBg}`}>
                    {product.purityGrade}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-xs font-mono font-bold text-slate-800 shadow-xs border border-slate-200">
                  {product.priceRangeEstimate}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: product.colorCode }} />
                  <span className="text-xs font-semibold text-slate-500">{product.category}</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h2>

                <p className="text-slate-600 text-xs mb-5 leading-relaxed">
                  {product.description}
                </p>

                {/* Technical Specifications Table */}
                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 mb-5 space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Intrinsic Viscosity (IV):</span>
                    <span className="text-slate-900 font-mono font-bold">{product.specifications.intrinsicViscosity}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">PVC Contamination:</span>
                    <span className="text-emerald-700 font-mono font-bold">{product.specifications.pvcContamination}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Moisture Content:</span>
                    <span className="text-slate-900 font-mono font-semibold">{product.specifications.moistureContent}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Flake Size Cut:</span>
                    <span className="text-slate-900 font-mono font-semibold">{product.specifications.flakeSize}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 font-medium">Melting Point:</span>
                    <span className="text-slate-900 font-mono font-semibold">{product.specifications.meltingPoint}</span>
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-5">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key End Uses:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {product.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>{app.title}:</strong> {app.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Packaging info */}
                <div className="text-xs text-slate-500 mb-2 flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <Package className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{product.containerLoad} (1,000kg Big Bags)</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 space-y-2">
              <button
                onClick={() => onSelectProduct(product.id)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Full Specifications</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onOpenRFQ(product.id)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 rounded-xl transition-colors text-center cursor-pointer shadow-sm shadow-emerald-600/20"
                >
                  Request Quote
                </button>
                <button
                  onClick={() => onOpenTDS(product.id)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-2.5 rounded-xl transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download TDS</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quality commitment callout */}
      <div className="bg-slate-100 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-bold text-slate-900 text-lg mb-1">
            Need customized flake sizes or specific Intrinsic Viscosity (IV)?
          </h3>
          <p className="text-slate-600 text-sm">
            We can calibrate granulator screen sizes (6mm to 14mm) and select bottle feedstock to match your precise extruder requirements.
          </p>
        </div>
        <button
          onClick={() => onOpenRFQ()}
          className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-xl whitespace-nowrap cursor-pointer shrink-0"
        >
          Contact Technical Sales
        </button>
      </div>
    </div>
  );
};
