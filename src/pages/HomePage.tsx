import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  FlaskConical, 
  Globe, 
  Layers, 
  Package, 
  ShieldCheck, 
  Sparkles, 
  Truck, 
  FileText, 
  Award,
  ChevronRight,
  Eye
} from 'lucide-react';
import { PET_PRODUCTS, SAMPLE_IMAGES } from '../data/products';
import { COMPANY_INFO } from '../data/company';

interface HomePageProps {
  onSelectProduct: (productId: string) => void;
  onOpenRFQ: (productId?: string) => void;
  onOpenTDS: (productId: string) => void;
  setActivePage: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectProduct,
  onOpenRFQ,
  onOpenTDS,
  setActivePage
}) => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section with Factory Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Madina Corporation • Direct Manufacturer & Exporter</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
                Hot-Washed <span className="text-emerald-600">PET Flakes</span> Supplier
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-6 max-w-xl">
                Madina Corporation (madinacorp.com) supplies high-purity clear, light blue, and green recycled PET flakes engineered for polyester staple fiber (PSF), filament yarn, strapping bands, and sheet extrusion.
              </p>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-slate-200/80">
                <div className="bg-white/80 p-3 rounded-xl border border-slate-200">
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 font-mono">4,500 MT</div>
                  <div className="text-[11px] text-slate-500 font-medium">Monthly Output</div>
                </div>
                <div className="bg-white/80 p-3 rounded-xl border border-slate-200">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-600 font-mono">&lt; 30 PPM</div>
                  <div className="text-[11px] text-slate-500 font-medium">PVC Guaranteed</div>
                </div>
                <div className="bg-white/80 p-3 rounded-xl border border-slate-200">
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 font-mono">40' HC</div>
                  <div className="text-[11px] text-slate-500 font-medium">FOB / CIF Ready</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenRFQ()}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Quote & Sample</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActivePage('products')}
                  className="bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl border border-slate-300 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>View All Flakes</span>
                </button>
              </div>
            </div>

            {/* Right: Facility / Flakes Sample Image Hero */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                <img
                  src={SAMPLE_IMAGES.washLineFacility}
                  alt="Modern PET bottle wash line recycling facility"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-600/90 text-white text-[11px] font-semibold mb-1 backdrop-blur-xs">
                    <Factory className="w-3.5 h-3.5" />
                    <span>85°C Caustic Hot-Wash Line</span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    State-of-the-Art Processing & Optical Sorting Facility
                  </div>
                  <div className="text-xs text-slate-200">
                    Dual-stage hot washing, float-sink separation & NIR color sorters
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Hot-Washed Flake Products with Actual Samples */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Physical Product Samples
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">
              Hot-Washed PET Flakes
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              High-purity 8–12 mm polygon cut flakes sorted by color. Free from labels, caustic soda, and adhesives.
            </p>
          </div>
          
          <button
            onClick={() => setActivePage('specifications')}
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
          >
            <span>Compare Full Specifications Matrix</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Product Cards with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PET_PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Product Sample Image Header */}
                <div className="relative h-52 overflow-hidden bg-slate-100 border-b border-slate-100">
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
                  
                  {/* Purity Badge Overlay */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold shadow-xs ${product.accentBg}`}>
                      {product.purityGrade}
                    </span>
                  </div>

                  {/* Indicative Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold text-slate-800 shadow-xs border border-slate-200">
                    {product.priceRangeEstimate}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-slate-600 text-xs mb-4 line-clamp-2 leading-relaxed">
                    {product.shortTagline}
                  </p>

                  {/* Key Specs Grid */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-4 space-y-1.5 text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                      <span className="text-slate-500 font-medium">Intrinsic Viscosity:</span>
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
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-500 font-medium">Flake Cut Size:</span>
                      <span className="text-slate-900 font-mono font-semibold">{product.specifications.flakeSize}</span>
                    </div>
                  </div>

                  {/* Applications list */}
                  <div className="space-y-1">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Optimal Applications:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {product.applications.slice(0, 2).map((app, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{app.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onSelectProduct(product.id)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Flake Sample & Specs</span>
                </button>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenRFQ(product.id)}
                    className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold text-xs py-2 rounded-lg transition-colors text-center border border-emerald-200 cursor-pointer"
                  >
                    Request Quote
                  </button>
                  <button
                    onClick={() => onOpenTDS(product.id)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-2 rounded-lg transition-colors text-center cursor-pointer"
                  >
                    Download TDS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simplified Wash Line & Quality Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Processing Technology
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">
              How We Hot-Wash PET Flakes
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Our continuous 85°C caustic hot wash system strips glues, eliminates labels, and guarantees low PVC contamination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm mb-4">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">
                Dry Screening & Crushing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trommel removes sand and debris. Bottles are granulated into uniform 8–12 mm flakes with air label aspiration.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm mb-4">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">
                85°C Caustic Hot Wash
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Caustic soda (NaOH) bath at 85°C dissolves all glues, adhesive residues, and soft drink syrups completely.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm mb-4">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">
                Float-Sink Separation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Water tanks separate floating polyolefin bottle caps (PP/PE) from sinking high-density PET flakes (&lt;20 ppm).
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm mb-4">
                04
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">
                Optical Sort & De-dusting
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Optical cameras eject foreign colors and PVC fragments. Flakes are de-dusted and packed in 1,000kg jumbo bags.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setActivePage('quality-lab')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 bg-white px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm cursor-pointer"
            >
              <span>View Full Lab Quality Protocols & Equipment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Packaging & Shipping Section with Jumbo Bags Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                  Logistics & Packaging
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mt-1">
                  1,000 kg Export Jumbo Big Bags
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Every metric ton of hot-washed flakes is packed in heavy-duty woven polypropylene big bags with internal polyethylene moisture liners. Palletized and strapped for maritime transport.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Package className="w-4 h-4 text-emerald-600" />
                    <span>Jumbo Bag Weight</span>
                  </div>
                  <div className="font-mono text-base font-bold text-slate-900">1,000 - 1,100 KG</div>
                  <p className="text-slate-500 text-[11px]">With top spout & discharge valve</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-sky-600" />
                    <span>Container Load</span>
                  </div>
                  <div className="font-mono text-base font-bold text-slate-900">22 - 24 MT</div>
                  <p className="text-slate-500 text-[11px]">22 bags per 40ft High Cube</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-slate-700" />
                    <span>Incoterms</span>
                  </div>
                  <div className="font-mono text-base font-bold text-emerald-700">FOB / CIF</div>
                  <p className="text-slate-500 text-[11px]">Mersin / Izmir Ports, Turkey</p>
                </div>
              </div>
            </div>

            {/* Warehouse Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group">
                <img
                  src={SAMPLE_IMAGES.jumboBagsExport}
                  alt="1,000 kg Jumbo Bags of PET Flakes stacked in warehouse"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <div className="font-semibold text-white">Export Staging Warehouse</div>
                  <div className="text-slate-200 text-[11px]">Jumbo bags sealed with PE moisture liner on pallets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct RFQ / Sample Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-100 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Laboratory Samples Available</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Ready to Order or Test Our Flakes?
            </h2>
            <p className="text-emerald-100 text-sm mt-2 max-w-xl">
              We provide free 2 kg to 5 kg sample bags sent via international courier for your laboratory testing, along with complete batch Certificate of Analysis (COA).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenRFQ()}
              className="w-full sm:w-auto bg-white text-emerald-800 hover:bg-emerald-50 font-bold px-7 py-3.5 rounded-xl shadow-md transition-all text-sm cursor-pointer"
            >
              Request Free Sample / Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-emerald-800/60 hover:bg-emerald-800 text-white font-semibold text-sm transition-all border border-emerald-500/30"
            >
              Call Sales Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
