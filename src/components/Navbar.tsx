import React, { useState } from 'react';
import { 
  Building2, 
  ChevronDown, 
  Globe, 
  Mail, 
  Menu, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  X,
  Layers,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PET_PRODUCTS } from '../data/products';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenRFQ: (productId?: string) => void;
  onSelectProduct: (productId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenRFQ,
  onSelectProduct
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setProductDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (productId: string) => {
    onSelectProduct(productId);
    setMobileMenuOpen(false);
    setProductDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top utility bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Manufacturer & Exporter of Hot-Washed PET Flakes</span>
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ISO 9001 • GRS 4.0 • Monthly Capacity: 4,500 MT</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href={`mailto:${COMPANY_INFO.contact.salesEmail}`} 
              className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.contact.salesEmail}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} 
              className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                  MADINA
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase">
                  CORP
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium tracking-wide">
                madinacorp.com • PET Flakes
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activePage === 'home' 
                  ? 'text-emerald-600 bg-emerald-50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Home
            </button>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                onMouseEnter={() => setProductDropdownOpen(true)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activePage === 'products' || activePage === 'product-detail'
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Hot-Washed Flakes</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {/* Dropdown Menu */}
              {productDropdownOpen && (
                <div 
                  onMouseLeave={() => setProductDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-80 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-100">
                    Our 3 Flake Grades
                  </div>
                  {PET_PRODUCTS.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => handleProductClick(prod.id)}
                      className="p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors group flex items-start gap-3"
                    >
                      <div className="w-3 h-3 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: prod.colorCode }} />
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                          {prod.name}
                        </div>
                        <div className="text-xs text-slate-700">
                          IV: {prod.specifications.intrinsicViscosity} • PVC: {prod.specifications.pvcContamination}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-slate-100 mt-1 pt-1.5">
                    <button
                      onClick={() => handleNavClick('products')}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-emerald-600 hover:bg-emerald-50 rounded-lg flex items-center justify-between"
                    >
                      <span>View All Flakes</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('specifications')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activePage === 'specifications' 
                  ? 'text-emerald-600 bg-emerald-50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Specifications
            </button>

            <button
              onClick={() => handleNavClick('quality-lab')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activePage === 'quality-lab' 
                  ? 'text-emerald-600 bg-emerald-50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Wash Process & QA
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activePage === 'contact' 
                  ? 'text-emerald-600 bg-emerald-50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenRFQ()}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>Request Quote / Sample</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold ${
              activePage === 'home' ? 'text-emerald-600 bg-emerald-50' : 'text-slate-700'
            }`}
          >
            Home
          </button>
          
          <div className="px-4 py-1 text-xs font-semibold text-slate-700 uppercase">
            Hot-Washed Flakes:
          </div>
          {PET_PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={() => handleProductClick(prod.id)}
              className="w-full text-left pl-6 pr-4 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>{prod.name}</span>
              <span className="text-xs text-slate-700 font-mono">PVC {prod.specifications.pvcContamination}</span>
            </button>
          ))}

          <button
            onClick={() => handleNavClick('specifications')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold ${
              activePage === 'specifications' ? 'text-emerald-600 bg-emerald-50' : 'text-slate-700'
            }`}
          >
            Specifications Matrix
          </button>

          <button
            onClick={() => handleNavClick('quality-lab')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold ${
              activePage === 'quality-lab' ? 'text-emerald-600 bg-emerald-50' : 'text-slate-700'
            }`}
          >
            Wash Line & QA
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold ${
              activePage === 'contact' ? 'text-emerald-600 bg-emerald-50' : 'text-slate-700'
            }`}
          >
            Contact & Location
          </button>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-2.5 rounded-xl text-center shadow-md shadow-emerald-600/20"
            >
              Request Quote / Free Lab Sample
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
