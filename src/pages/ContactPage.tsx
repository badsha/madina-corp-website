import React, { useState } from 'react';
import { 
  Building2, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  Globe, 
  MessageSquare,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ContactPageProps {
  onOpenRFQ?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productOfInterest: 'clear-hot-washed-aaa',
    quantityMT: '22',
    incoterm: 'FOB',
    destinationPort: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
          Direct Sales Desk
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-2">
          Contact Our Export Team
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Get in touch directly with our commercial desk for current FOB / CIF pricing, sample dispatch, or container availability.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-900 text-lg">
              Factory & Sales Headquarters
            </h3>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Plant & Export Terminal:</div>
                  <p>{COMPANY_INFO.locations[0].address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Direct Sales & WhatsApp:</div>
                  <p className="font-mono">{COMPANY_INFO.contact.phone}</p>
                  <p className="font-mono text-slate-500">{COMPANY_INFO.contact.directExportDesk}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Official Web Domain:</div>
                  <p className="font-mono text-emerald-700">madinacorp.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Official Inquiries:</div>
                  <p className="font-mono text-emerald-700">{COMPANY_INFO.contact.salesEmail}</p>
                  <p className="font-mono text-slate-500">{COMPANY_INFO.contact.rfqEmail}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Working Hours:</div>
                  <p>{COMPANY_INFO.contact.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Export Ports Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-xs space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">
              Major Shipping Terminals
            </h4>
            <div className="space-y-2 text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="font-medium text-slate-900">Port of Mersin, Turkey:</span>
                <span>Direct Mediterranean & Gulf Lines</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="font-medium text-slate-900">Port of Izmir, Turkey:</span>
                <span>Direct European & Americas Feeders</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-medium text-slate-900">Incoterms Available:</span>
                <span className="font-mono font-bold text-emerald-700">FOB, CIF, CFR, DAP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact / RFQ Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-1">
              Send an Inquiry or Sample Request
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Fill out your requirements below. Our export sales manager will respond with formal quotation within 2 hours.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base">Inquiry Received Successfully</h3>
                <p className="text-xs max-w-md mx-auto text-emerald-700">
                  Thank you, <strong>{formData.name}</strong>. A technical sales engineer has been assigned to your request and will send full pricing and COA to <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-emerald-600 text-white font-semibold text-xs px-5 py-2 rounded-xl mt-2 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Global Plastics Converters"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="buyer@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Flake Grade</label>
                    <select
                      value={formData.productOfInterest}
                      onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="clear-hot-washed-aaa">Clear Hot-Washed (Grade AAA)</option>
                      <option value="light-blue-pet-flakes">Light Blue Hot-Washed (Grade A)</option>
                      <option value="green-pet-flakes">Green Hot-Washed (Grade A)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Volume (Metric Tons)</label>
                    <input
                      type="number"
                      min="20"
                      step="1"
                      value={formData.quantityMT}
                      onChange={(e) => setFormData({ ...formData, quantityMT: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Incoterm</label>
                    <select
                      value={formData.incoterm}
                      onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="FOB">FOB Mersin/Izmir</option>
                      <option value="CIF">CIF Destination Port</option>
                      <option value="CFR">CFR Destination Port</option>
                      <option value="DAP">DAP Factory Door</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Destination Port & Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify destination port, target arrival month, or whether you need a 2-5kg test sample dispatched."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-colors cursor-pointer text-sm shadow-md shadow-emerald-600/20"
                >
                  Send Inquiry & Request Pricing
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
