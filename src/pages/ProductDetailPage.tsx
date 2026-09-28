import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Download, 
  FileText, 
  Globe, 
  Package, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  Truck 
} from 'lucide-react';
import { PET_PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';

interface ProductDetailPageProps {
  productId: string;
  onSelectProduct: (productId: string) => void;
  onOpenRFQ: (productId?: string) => void;
  onOpenTDS: (productId: string) => void;
  onBackToProducts: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId,
  onSelectProduct,
  onOpenRFQ,
  onOpenTDS,
  onBackToProducts
}) => {
  const product = PET_PRODUCTS.find((p) => p.id === productId) || PET_PRODUCTS[0];
  
  // Quick inline RFQ form state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryQuantity, setInquiryQuantity] = useState('22');
  const [inquiryNotes, setInquiryNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-10">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <button 
          onClick={onBackToProducts}
          className="hover:text-emerald-600 flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Hot-Washed Flakes</span>
        </button>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <span className="text-slate-900 font-semibold">{product.name}</span>
      </div>

      {/* Main Product Showcase Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Product Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${product.accentBg}`}>
                {product.purityGrade}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                In Stock & Ready for Export
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Origin: {product.origin}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              {product.detailedOverview}
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Technical Highlights:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {product.keyBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => onOpenRFQ(product.id)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>Request Quotation / Sample</span>
              </button>

              <button
                onClick={() => onOpenTDS(product.id)}
                className="bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm px-5 py-3 rounded-xl border border-slate-300 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Download TDS & Certificate</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Flake Preview & Quick Specs Box */}
          <div className="lg:col-span-5 space-y-6">
            {/* Real Visual Flake Sample Photograph */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100 group">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={`${product.name} macro laboratory sample photo`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${product.previewColor}`} />
                )}
                
                {/* Visual badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/95 text-slate-800 backdrop-blur-xs border border-slate-200 shadow-xs">
                    Laboratory Sample Photo
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <div className="w-5 h-5 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: product.colorCode }} />
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <div className="bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-lg text-[11px] font-medium">
                    Cut: {product.specifications.flakeSize}
                  </div>
                  <div className="bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg font-mono font-bold text-slate-900 border border-slate-200 shadow-xs">
                    {product.priceRangeEstimate}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Optical Sortex & De-dusted</span>
                </span>
                <span className="text-slate-400">|</span>
                <span>Moisture &lt; 0.5%</span>
                <span className="text-slate-400">|</span>
                <span>PVC {product.specifications.pvcContamination}</span>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                <Send className="w-4 h-4 text-emerald-600" />
                <span>Instant Quote for {product.name}</span>
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Direct reply with FOB/CIF pricing within 2 hours.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-xs space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Inquiry Sent Successfully!</span>
                  </div>
                  <p>Our sales manager will send the formal quotation and COA to your email shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleQuickInquiry} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Global Textiles Ltd"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="buyer@company.com"
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Quantity (MT)
                      </label>
                      <input
                        type="number"
                        min="20"
                        step="1"
                        value={inquiryQuantity}
                        onChange={(e) => setInquiryQuantity(e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Destination Port / Notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. CIF Rotterdam or sample request"
                      value={inquiryNotes}
                      onChange={(e) => setInquiryNotes(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg text-xs transition-colors cursor-pointer"
                  >
                    Submit Quick RFQ
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Complete Technical Specifications & Laboratory Parameters */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="max-w-2xl mb-6">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
            Laboratory Analysis
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Technical Specifications Sheet
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Tested in accordance with ASTM and ISO polymer standards. Every 40ft container is accompanied by a batch Certificate of Analysis (COA).
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4">Guaranteed Specification</th>
                <th className="py-3 px-4">Testing Method</th>
                <th className="py-3 px-4">Converter Significance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-semibold text-slate-900">Intrinsic Viscosity (IV)</td>
                <td className="py-3 px-4 font-mono font-bold text-emerald-700">{product.specifications.intrinsicViscosity}</td>
                <td className="py-3 px-4 text-slate-500">ASTM D4603 (Ubbelohde)</td>
                <td className="py-3 px-4 text-slate-600">Stable molecular weight; prevents melt dripping and filament breaks.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-semibold text-slate-900">PVC Contamination</td>
                <td className="py-3 px-4 font-mono font-bold text-emerald-700">{product.specifications.pvcContamination}</td>
                <td className="py-3 px-4 text-slate-500">Thermal Bake Test @ 260°C</td>
                <td className="py-3 px-4 text-slate-600">Protects extruder screws and spinnerets from hydrochloric acid corrosion.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-semibold text-slate-900">Moisture Content</td>
                <td className="py-3 px-4 font-mono font-bold text-slate-900">{product.specifications.moistureContent}</td>
                <td className="py-3 px-4 text-slate-500">ASTM D6869 Karl Fischer</td>
                <td className="py-3 px-4 text-slate-600">Eliminates hydrolytic degradation during pre-crystallization and drying.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-semibold text-slate-900">Polyolefin (PP/PE) Caps</td>
                <td className="py-3 px-4 font-mono text-slate-900">{product.specifications.polyolefinContamination}</td>
                <td className="py-3 px-4 text-slate-500">Float-Sink Density Test</td>
                <td className="py-3 px-4 text-slate-600">Prevents un-melted gels, fish-eyes, and surface defects in sheets.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-semibold text-slate-900">Metal Contamination</td>
                <td className="py-3 px-4 font-mono text-slate-900">{product.specifications.metalContamination}</td>
                <td className="py-3 px-4 text-slate-500">Magnetic & Eddy-Current Separator</td>
                <td className="py-3 px-4 text-slate-600">Zero metal particles to avoid melt filter blockages and die damage.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-semibold text-slate-900">Flake Size Cut</td>
                <td className="py-3 px-4 font-mono text-slate-900">{product.specifications.flakeSize}</td>
                <td className="py-3 px-4 text-slate-500">Sieve Analysis</td>
                <td className="py-3 px-4 text-slate-600">Uniform polygon cut for consistent feeding into single or twin-screw extruders.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-semibold text-slate-900">Melting Point</td>
                <td className="py-3 px-4 font-mono text-slate-900">{product.specifications.meltingPoint}</td>
                <td className="py-3 px-4 text-slate-500">DSC Differential Scanning</td>
                <td className="py-3 px-4 text-slate-600">Standard PET polymer thermal transition.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-semibold text-slate-900">Dust & Fines (&lt;500µm)</td>
                <td className="py-3 px-4 font-mono text-slate-900">{product.specifications.dustContent}</td>
                <td className="py-3 px-4 text-slate-500">Air Elutriation Sieve</td>
                <td className="py-3 px-4 text-slate-600">Reduces smoke in extruder feed throats and minimizes polymer degradation.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Packaging & Logistics Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Packaging Specifications</h3>
              <p className="text-xs text-slate-500">Standardized export jumbo bags</p>
            </div>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-700">
            {product.packagingOptions.map((opt, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{opt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-sky-50 text-sky-600 rounded-xl border border-sky-100">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Shipping & Loading Terms</h3>
              <p className="text-xs text-slate-500">Container loading capacity</p>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-500">Container Payload:</span>
              <span className="font-mono font-bold text-slate-900">{product.containerLoad}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-500">Minimum Order Quantity (MOQ):</span>
              <span className="font-mono font-bold text-slate-900">{product.minOrderQuantity}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-500">Production & Dispatch Lead Time:</span>
              <span className="font-mono font-bold text-slate-900">{product.typicalLeadTime}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-500">Loading Ports:</span>
              <span className="font-mono font-bold text-slate-900">Mersin & Izmir Ports, Turkey</span>
            </div>
          </div>
        </div>
      </div>

      {/* Switcher to Other Flake Grades */}
      <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
        <h3 className="font-bold text-slate-900 text-sm mb-4">
          Other Hot-Washed Flake Grades:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PET_PRODUCTS.filter((p) => p.id !== product.id).map((other) => (
            <div 
              key={other.id}
              onClick={() => onSelectProduct(other.id)}
              className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                {other.imageUrl ? (
                  <img
                    src={other.imageUrl}
                    alt={other.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0"
                  />
                ) : (
                  <div className="w-3.5 h-3.5 rounded-full shrink-0" style={{ backgroundColor: other.colorCode }} />
                )}
                <div>
                  <div className="font-bold text-slate-900 text-sm group-hover:text-emerald-600 transition-colors">
                    {other.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    PVC: {other.specifications.pvcContamination} • IV: {other.specifications.intrinsicViscosity}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
