/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RFQModal } from './components/RFQModal';
import { TDSModal } from './components/TDSModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SpecificationsPage } from './pages/SpecificationsPage';
import { QualityLabPage } from './pages/QualityLabPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { LogisticsPage } from './pages/LogisticsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PET_PRODUCTS } from './data/products';
import { ProductGrade } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('clear-hot-washed-aaa');
  const [isRFQOpen, setIsRFQOpen] = useState<boolean>(false);
  const [rfqTargetProduct, setRfqTargetProduct] = useState<string | undefined>(undefined);
  const [isTDSOpen, setIsTDSOpen] = useState<boolean>(false);
  const [tdsTargetProduct, setTdsTargetProduct] = useState<ProductGrade | null>(PET_PRODUCTS[0]);

  // Open RFQ modal
  const handleOpenRFQ = (productId?: string) => {
    setRfqTargetProduct(productId || selectedProductId);
    setIsRFQOpen(true);
  };

  // Open TDS / COA modal
  const handleOpenTDS = (productId: string) => {
    const found = PET_PRODUCTS.find(p => p.id === productId) || PET_PRODUCTS[0];
    setTdsTargetProduct(found);
    setIsTDSOpen(true);
  };

  // Select Product and navigate to product detail
  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setActivePage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenRFQ={handleOpenRFQ}
        onSelectProduct={handleSelectProduct}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onSelectProduct={handleSelectProduct}
            setActivePage={setActivePage}
            onOpenRFQ={handleOpenRFQ}
            onOpenTDS={handleOpenTDS}
          />
        )}

        {activePage === 'products' && (
          <ProductsPage
            onSelectProduct={handleSelectProduct}
            onOpenRFQ={handleOpenRFQ}
            onOpenTDS={handleOpenTDS}
          />
        )}

        {activePage === 'product-detail' && (
          <ProductDetailPage
            productId={selectedProductId}
            onSelectProduct={handleSelectProduct}
            onOpenRFQ={handleOpenRFQ}
            onOpenTDS={handleOpenTDS}
            onBackToProducts={() => {
              setActivePage('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activePage === 'specifications' && (
          <SpecificationsPage
            onSelectProduct={handleSelectProduct}
            onOpenRFQ={handleOpenRFQ}
            onOpenTDS={handleOpenTDS}
          />
        )}

        {activePage === 'quality-lab' && (
          <QualityLabPage
            onOpenRFQ={handleOpenRFQ}
          />
        )}

        {activePage === 'sustainability' && (
          <SustainabilityPage
            onOpenRFQ={handleOpenRFQ}
          />
        )}

        {activePage === 'logistics' && (
          <LogisticsPage
            onOpenRFQ={handleOpenRFQ}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onOpenRFQ={handleOpenRFQ}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onOpenRFQ={handleOpenRFQ}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectProduct={handleSelectProduct}
        onOpenRFQ={handleOpenRFQ}
      />

      {/* Interactive Modals */}
      <RFQModal
        isOpen={isRFQOpen}
        onClose={() => setIsRFQOpen(false)}
        defaultProductId={rfqTargetProduct}
      />

      <TDSModal
        product={tdsTargetProduct}
        isOpen={isTDSOpen}
        onClose={() => setIsTDSOpen(false)}
        onOpenRFQ={handleOpenRFQ}
      />
    </div>
  );
}
