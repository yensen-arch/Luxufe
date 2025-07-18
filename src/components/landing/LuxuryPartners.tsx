'use client'

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Partner {
  name: string;
  logo: {
    url: string;
    alt: string;
  };
  description: string;
}

interface LuxuryPartnersData {
  heading: string;
  description: string;
  partners: Partner[];
}

interface LuxuryPartnersProps {
  data?: LuxuryPartnersData;
}

const defaultPartnersData = {
  'HOTEL PARTNERS': [
    { name: '&BEYOND', logoUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_mjJSw5TamVPloUqcsexkByMBgwdknm4uSa9nG8mQfyU6M=s160-c-k-c0x00ffffff-no-rj' },
    { name: 'BELMOND', logoUrl: 'https://imgs.search.brave.com/AiYi_6N0bNwwy7IxP24suDIAJZe2WIXPqf7X5dqwRHI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMS8xYy9CZWxtb25kX0xvZ28ucG5nLzUxMnB4LUJlbG1vbmRfTG9nby5wbmc' },
    { name: 'CAPELLA', logoUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_mjJSw5TamVPloUqcsexkByMBgwdknm4uSa9nG8mQfyU6M=s160-c-k-c0x00ffffff-no-rj' },
    { name: 'Dorchester Collection', logoUrl: 'https://imgs.search.brave.com/AiYi_6N0bNwwy7IxP24suDIAJZe2WIXPqf7X5dqwRHI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMS8xYy9CZWxtb25kX0xvZ28ucG5nLzUxMnB4LUJlbG1vbmRfTG9nby5wbmc' },
    { name: 'CAPELLA 2', logoUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_mjJSw5TamVPloUqcsexkByMBgwdknm4uSa9nG8mQfyU6M=s160-c-k-c0x00ffffff-no-rj' },
    { name: 'Fairmont', logoUrl: 'https://imgs.search.brave.com/AiYi_6N0bNwwy7IxP24suDIAJZe2WIXPqf7X5dqwRHI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMS8xYy9CZWxtb25kX0xvZ28ucG5nLzUxMnB4LUJlbG1vbmRfTG9nby5wbmc' },
    { name: 'One&Only', logoUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_mjJSw5TamVPloUqcsexkByMBgwdknm4uSa9nG8mQfyU6M=s160-c-k-c0x00ffffff-no-rj' },
    { name: 'St. Regis', logoUrl: 'https://imgs.search.brave.com/AiYi_6N0bNwwy7IxP24suDIAJZe2WIXPqf7X5dqwRHI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMS8xYy9CZWxtb25kX0xvZ28ucG5nLzUxMnB4LUJlbG1vbmRfTG9nby5wbmc' },
    { name: 'Oetker Collection', logoUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_mjJSw5TamVPloUqcsexkByMBgwdknm4uSa9nG8mQfyU6M=s160-c-k-c0x00ffffff-no-rj' },
    { name: 'St. Regis 2', logoUrl: 'https://imgs.search.brave.com/AiYi_6N0bNwwy7IxP24suDIAJZe2WIXPqf7X5dqwRHI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMS8xYy9CZWxtb25kX0xvZ28ucG5nLzUxMnB4LUJlbG1vbmRfTG9nby5wbmc' },
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

type Tab = keyof typeof defaultPartnersData;

export default function LuxuryPartners({ data }: LuxuryPartnersProps) {
  // Fallback to hardcoded content if no data is provided
  const sectionData = data || {
    heading: "Our trusted, luxury partners",
    description: "Excellence elevated",
    partners: defaultPartnersData['HOTEL PARTNERS'].map(partner => ({
      name: partner.name,
      logo: {
        url: partner.logoUrl,
        alt: partner.name
      },
      description: ""
    }))
  };

  const [activeTab, setActiveTab] = useState<Tab>('HOTEL PARTNERS');
  const tabs = Object.keys(defaultPartnersData) as Tab[];

  return (
    <section className="bg-gray-50 py-24 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-5xl font-bellarina font-medium text-gray-600 italic mb-6">{sectionData.description}</h3>
        <h2 className="text-6xl font-arpona font-medium my-16">{sectionData.heading}</h2>
        
        <div className="flex justify-center mb-12">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-inter font-bold tracking-wider relative transition-colors ${
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

        <div className="w-3/4 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-24 items-center justify-items-center">
          {defaultPartnersData[activeTab].map(partner => (
            <div key={partner.name} className="my-2 h-16 flex items-center justify-center">
               <img src={partner.logoUrl} alt={partner.name} className="max-h-full max-w-full h-auto w-auto  opacity-600 transition-all duration-900" />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <button className="group flex items-center gap-3 text-sm font-inter font-bold tracking-widest border border-gray-400 px-6 py-3 hover:bg-gray-800 hover:text-white transition-colors mx-auto">
            ELITE PARTNERS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
} 