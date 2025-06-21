'use client'

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const partnersData = {
  'HOTEL PARTNERS': [
    { name: '&BEYOND', logoUrl: 'https://www.logoipsum.com/logo/logo-1.svg' },
    { name: 'BELMOND', logoUrl: 'https://www.logoipsum.com/logo/logo-2.svg' },
    { name: 'CAPELLA', logoUrl: 'https://www.logoipsum.com/logo/logo-3.svg' },
    { name: 'Dorchester Collection', logoUrl: 'https://www.logoipsum.com/logo/logo-4.svg' },
    { name: 'CAPELLA 2', logoUrl: 'https://www.logoipsum.com/logo/logo-5.svg' },
    { name: 'Fairmont', logoUrl: 'https://www.logoipsum.com/logo/logo-6.svg' },
    { name: 'One&Only', logoUrl: 'https://www.logoipsum.com/logo/logo-7.svg' },
    { name: 'St. Regis', logoUrl: 'https://www.logoipsum.com/logo/logo-8.svg' },
    { name: 'Oetker Collection', logoUrl: 'https://www.logoipsum.com/logo/logo-9.svg' },
    { name: 'St. Regis 2', logoUrl: 'https://www.logoipsum.com/logo/logo-10.svg' },
  ],
  'CRUISE LINE PARTNERS': [
    { name: 'Seabourn', logoUrl: 'https://www.logoipsum.com/logo/logo-11.svg' },
    { name: 'Silversea', logoUrl: 'https://www.logoipsum.com/logo/logo-12.svg' },
    { name: 'Regent Seven Seas', logoUrl: 'https://www.logoipsum.com/logo/logo-13.svg' },
    { name: 'Viking Ocean Cruises', logoUrl: 'https://www.logoipsum.com/logo/logo-14.svg' },
  ],
  'AIRLINE & JET PARTNERS': [
    { name: 'NetJets', logoUrl: 'https://www.logoipsum.com/logo/logo-15.svg' },
    { name: 'VistaJet', logoUrl: 'https://www.logoipsum.com/logo/logo-16.svg' },
    { name: 'Emirates', logoUrl: 'https://www.logoipsum.com/logo/logo-17.svg' },
    { name: 'Singapore Airlines', logoUrl: 'https://www.logoipsum.com/logo/logo-18.svg' },
  ],
};

type Tab = keyof typeof partnersData;

export default function LuxuryPartners() {
  const [activeTab, setActiveTab] = useState<Tab>('HOTEL PARTNERS');
  const tabs = Object.keys(partnersData) as Tab[];

  return (
    <section className="bg-gray-50 py-24 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-serif text-gray-600 italic mb-2">Excellence elevated</h3>
        <h2 className="text-5xl font-serif mb-12">Our trusted, luxury partners</h2>
        
        <div className="flex justify-center border-b border-gray-200 mb-12">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-semibold tracking-wider relative transition-colors ${
                activeTab === tab ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center">
          {partnersData[activeTab].map(partner => (
            <div key={partner.name} className="h-16 flex items-center justify-center">
               <img src={partner.logoUrl} alt={partner.name} className="max-h-full max-w-full h-auto w-auto filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <button className="group flex items-center gap-3 text-sm font-semibold tracking-widest border border-gray-400 px-6 py-3 hover:bg-gray-800 hover:text-white transition-colors mx-auto">
            ELITE PARTNERS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
} 