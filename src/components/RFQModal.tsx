import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Calculator, 
  Package, 
  Ship, 
  ShieldCheck, 
  FileCheck,
  Building,
  Mail,
  User,
  Phone,
  Globe,
  Download,
  Copy
} from 'lucide-react';
import { PET_PRODUCTS } from '../data/products';
import { RFQFormData } from '../types';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProductId?: string;
}

export const RFQModal: React.FC<RFQModalProps> = ({
  isOpen,
  onClose,
  defaultProductId
}) => {
  const [selectedProduct, setSelectedProduct] = useState(defaultProductId || PET_PRODUCTS[0].id);
  const [formData, setFormData] = useState<RFQFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    productGradeId: defaultProductId || PET_PRODUCTS[0].id,
    orderQuantityMT: 22,
    orderType: 'spot',
    packagingPreference: '1,000 kg Jumbo Bags with PE Moisture Liner',
    incoterm: 'CIF',
    destinationPort: '',
    targetDeliveryMonth: 'Next Available Vessel (7-14 Days)',
    additionalNotes: '',
    requireSample: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [rfqTicketId, setRfqTicketId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (defaultProductId) {
      setSelectedProduct(defaultProductId);
      setFormData(prev => ({ ...prev, productGradeId: defaultProductId }));
    }
  }, [defaultProductId]);

  if (!isOpen) return null;

  const activeProductObj = PET_PRODUCTS.find(p => p.id === formData.productGradeId) || PET_PRODUCTS[0];

  const containerCount = Math.ceil(formData.orderQuantityMT / 22);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `MDC-${new Date().getFullYear()}-RFQ-${Math.floor(10000 + Math.random() * 90000)}`;
    setRfqTicketId(generatedId);
    setSubmitted(true);
  };

  const handleCopyTicket = () => {
    navigator.clipboard?.writeText(rfqTicketId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Request Formal Quotation & Lab Sample
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Direct export inquiry with guaranteed factory pricing response within 4 hours
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-extrabold text-slate-900">
                Quotation Request Logged Successfully
              </h4>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span> from <span className="font-bold text-slate-900">{formData.companyName}</span>. Your inquiry has been routed to our Senior Export Director.
              </p>
            </div>

            {/* Ticket Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 max-w-md mx-auto text-left space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs text-slate-500 font-mono font-semibold">INQUIRY REFERENCE:</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-emerald-700 font-mono">{rfqTicketId}</span>
                  <button 
                    onClick={handleCopyTicket}
                    className="p-1 text-slate-500 hover:text-slate-800 rounded hover:bg-slate-200 text-xs flex items-center gap-1 font-medium"
                    title="Copy ID"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-500 block">Selected Product:</span>
                  <p className="font-bold text-slate-800">{activeProductObj.name}</p>
                </div>
                <div>
                  <span className="text-slate-500 block">Volume:</span>
                  <p className="font-bold text-slate-800">{formData.orderQuantityMT} Metric Tons (~{containerCount}x 40' HC)</p>
                </div>
                <div>
                  <span className="text-slate-500 block">Incoterms:</span>
                  <p className="font-bold text-slate-800">{formData.incoterm} {formData.destinationPort || 'Standard Sea Port'}</p>
                </div>
                <div>
                  <span className="text-slate-500 block">Sample Dispatch:</span>
                  <p className="font-bold text-emerald-700">{formData.requireSample ? '1 kg Free Sample Requested' : 'Spec Only'}</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              A formal Proforma Invoice / Quotation Sheet & Certificate of Analysis (COA) is being dispatched to <strong className="text-slate-800">{formData.email}</strong>.
            </p>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Step 1: Product Selection & Live Parameters */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                <span>1. Select Required Polymer / PET Flake Grade</span>
                <span className="text-emerald-700 font-bold text-xs lowercase">
                  Est: {activeProductObj.priceRangeEstimate}
                </span>
              </label>

              <select
                value={formData.productGradeId}
                onChange={(e) => setFormData({ ...formData, productGradeId: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 font-medium"
              >
                {PET_PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    {prod.name} ({prod.category}) — IV: {prod.specifications.intrinsicViscosity}
                  </option>
                ))}
              </select>

              {/* Quick Spec Badge Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 block">Intrinsic Viscosity:</span>
                  <span className="font-bold text-sky-700 font-mono">{activeProductObj.specifications.intrinsicViscosity}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">PVC Contamination:</span>
                  <span className="font-bold text-emerald-700 font-mono">{activeProductObj.specifications.pvcContamination}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Moisture:</span>
                  <span className="font-bold text-amber-700 font-mono">{activeProductObj.specifications.moistureContent}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Bulk Density:</span>
                  <span className="font-bold text-slate-700 font-mono">{activeProductObj.specifications.bulkDensity}</span>
                </div>
              </div>
            </div>

            {/* Step 2: Commercial & Shipping Terms */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Order Volume (Metric Tons):
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    step="1"
                    required
                    value={formData.orderQuantityMT}
                    onChange={(e) => setFormData({ ...formData, orderQuantityMT: Number(e.target.value) })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 font-medium"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-500 font-bold">MT</span>
                </div>
                <span className="text-[11px] text-slate-500 block mt-1">
                  ≈ {containerCount} x 40ft HC (22 MT/ctr)
                </span>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Incoterms 2020:
                </label>
                <select
                  value={formData.incoterm}
                  onChange={(e) => setFormData({ ...formData, incoterm: e.target.value as any })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 font-medium"
                >
                  <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                  <option value="FOB">FOB (Mersin / Izmir Port)</option>
                  <option value="CFR">CFR (Cost & Freight)</option>
                  <option value="DAP">DAP (Delivered at Place)</option>
                  <option value="EXW">EXW (Ex Works Free Zone)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Destination Port / City:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hamburg, Santos, Charleston"
                  required
                  value={formData.destinationPort}
                  onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 font-medium"
                />
              </div>
            </div>

            {/* Packaging & Samples */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Packaging Specification:
                </label>
                <select
                  value={formData.packagingPreference}
                  onChange={(e) => setFormData({ ...formData, packagingPreference: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 font-medium"
                >
                  <option value="1,000 kg Jumbo Bags with PE Moisture Liner">1,000 kg PP Big Bags with PE Moisture Liner</option>
                  <option value="1,100 kg Octabin Boxes with Pallets">1,100 kg Octabins on ISPM-15 Heat Treated Pallets</option>
                  <option value="25 kg Multi-wall Kraft Paper Bags">25 kg Multi-wall Kraft Bags (Food Grade)</option>
                  <option value="Bulk Sea Container Liner">Bulk Dry Sea Container Liner (24 MT)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Contract Nature:
                </label>
                <select
                  value={formData.orderType}
                  onChange={(e) => setFormData({ ...formData, orderType: e.target.value as any })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 font-medium"
                >
                  <option value="spot">Single Spot Shipment</option>
                  <option value="monthly_contract">Annual / Monthly Recurring Supply Contract</option>
                  <option value="sample_only">Trial Batch / Sample Evaluation Only</option>
                </select>
              </div>
            </div>

            {/* Sample checkbox */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between">
              <label className="flex items-center gap-2.5 text-xs text-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.requireSample}
                  onChange={(e) => setFormData({ ...formData, requireSample: e.target.checked })}
                  className="w-4 h-4 rounded text-emerald-600 accent-emerald-600 bg-white border-slate-300"
                />
                <span className="font-bold text-emerald-900">
                  Include 1.0 kg Free Verified Laboratory Sample with Certificate of Analysis (COA)
                </span>
              </label>
              <span className="text-[11px] bg-white text-emerald-800 px-2 py-0.5 rounded font-mono font-bold border border-emerald-200">
                DHL Express
              </span>
            </div>

            {/* Step 3: Company & Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Full Name / Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Thomas Vance"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 font-medium"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Company / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Polymer Solutions Ltd"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 font-medium"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Corporate Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 font-medium"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Phone / WhatsApp (With Country Code) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+49 170 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 font-medium"
                />
              </div>
            </div>

            {/* Note */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Specific Technical Requirements or Target Extrusion Application (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. IV tolerance window, specific filtration mesh requirements, target CFR port delivery date..."
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 font-medium"
              />
            </div>

            {/* Actions */}
            <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 inline text-emerald-600 mr-1" />
                GRS 4.0 Transaction Certificate (TC) provided with all bill of ladings.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 sm:w-auto px-6 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
