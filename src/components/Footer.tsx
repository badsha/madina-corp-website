import React from 'react';
import { 
  Building2, 
  ChevronRight, 
  Globe, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Truck,
  Layers,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PET_PRODUCTS } from '../data/products';

interface FooterProps {
  setActivePage: (page: string) => void;
  onSelectProduct: (productId: string) => void;
  onOpenRFQ: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActivePage,
  onSelectProduct,
  onOpenRFQ
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    scrollToTop();
  };

  const handleProductClick = (productId: string) => {
    onSelectProduct(productId);
    scrollToTop();
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 mt-20 text-slate-600 text-xs">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Brief */}
          <div className="space-y-4">
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  MADINA CORP
                </span>
                <p className="text-[11px] text-slate-500 font-medium">
                  madinacorp.com • PET Flakes Supplier
                </p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Industrial manufacturer and exporter of hot-washed clear, light blue, and green PET flakes. Supplying high-tenacity fiber spinners, thermoforming sheet extruders, and strapping band manufacturers globally.
            </p>

            <div className="text-slate-500 text-[11px] pt-1">
              Monthly Production: <span className="font-semibold text-slate-800">4,500 MT</span> • Port of Mersin & Izmir
            </div>
          </div>

          {/* Core Products */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-sm tracking-wide">
              Hot-Washed Flakes
            </h4>
            <ul className="space-y-2">
              {PET_PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <button
                    onClick={() => handleProductClick(prod.id)}
                    className="hover:text-emerald-600 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                    <span>{prod.name}</span>
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => handleNavClick('specifications')}
                  className="font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>View Specifications Matrix →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-sm tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('products')}
                  className="hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('specifications')}
                  className="hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  Technical Specifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('quality-lab')}
                  className="hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  Wash Line & Quality Testing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenRFQ}
                  className="text-emerald-700 font-semibold hover:text-emerald-800 cursor-pointer"
                >
                  Request Quotation / Sample
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Dispatch */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-sm tracking-wide">
              Sales Desk & Dispatch
            </h4>
            <div className="space-y-2.5 text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.locations[0].address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-mono">{COMPANY_INFO.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-mono">{COMPANY_INFO.contact.salesEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>FOB Mersin & Izmir / CIF Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Madina Corporation (madinacorp.com). All rights reserved. Recycled Hot-Washed PET Flakes Supplier.
          </div>
          <div className="flex items-center gap-4">
            <span>ISO 9001:2015</span>
            <span>•</span>
            <span>GRS 4.0 Certified</span>
            <span>•</span>
            <span>REACH Compliant</span>
            <button
              onClick={scrollToTop}
              className="ml-4 p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
