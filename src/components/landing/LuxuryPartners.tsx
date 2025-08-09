'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getBrands, Brand } from '@/lib/database';

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
  const [activeTab, setActiveTab] = useState<Tab>('HOTEL PARTNERS');
  const [hotelBrands, setHotelBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Fetch hotel brands from database
  useEffect(() => {
    const fetchHotelBrands = async () => {
      try {
        setLoading(true);
        const brands = await getBrands();
        // Get first 10 brands that have logos
        const brandsWithLogos = brands.filter(brand => brand.logo).slice(0, 10);
        setHotelBrands(brandsWithLogos);
      } catch (error) {
        console.error('Error fetching hotel brands:', error);
        // Fallback to empty array if fetch fails
        setHotelBrands([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelBrands();
  }, []);

  // Fallback to hardcoded content if no data is provided
  const sectionData = data || {
    heading: "Our trusted, luxury partners",
    description: "Excellence elevated",
    partners: hotelBrands.map(brand => ({
      name: brand.name,
      logo: {
        url: brand.logo || '',
        alt: brand.name
      },
      description: brand.description || ""
    }))
  };

  const tabs = Object.keys(defaultPartnersData) as Tab[];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-24 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 text-center">
        <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bellarina font-medium text-gray-600 italic mb-4 sm:mb-6">{sectionData.description}</h3>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-arpona font-medium my-8 sm:my-12 lg:my-16">{sectionData.heading}</h2>
        
        <div className="flex flex-wrap justify-center mb-8 sm:mb-10 lg:mb-12 gap-2 sm:gap-4">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm font-inter font-bold tracking-wider relative transition-colors ${
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

        <div className="w-full sm:w-5/6 lg:w-3/4 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-y-8 sm:gap-y-12 lg:gap-y-24 items-center justify-items-center">
          {activeTab === 'HOTEL PARTNERS' ? (
            loading ? (
              // Loading skeleton for hotel partners
              Array.from({ length: 10 }).map((_, index) => (
                <div key={`skeleton-${index}`} className="my-1 sm:my-2 h-12 sm:h-14 lg:h-16 flex items-center justify-center px-2 sm:px-4">
                  <div className="max-h-full max-w-full h-auto w-auto bg-gray-200 animate-pulse rounded" style={{ width: '80px', height: '40px' }} />
                </div>
              ))
            ) : (
              // Real hotel brand logos from database
              hotelBrands.map(brand => (
                <div key={brand.id} className="my-1 sm:my-2 h-12 sm:h-14 lg:h-16 flex items-center justify-center px-2 sm:px-4">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-h-full max-w-full h-auto w-auto opacity-600 transition-all duration-900"
                    onError={(e) => {
                      // Fallback to a placeholder or hide the image if it fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))
            )
          ) : (
            // Use hardcoded data for cruises and jets
            defaultPartnersData[activeTab].map(partner => (
              <div key={partner.name} className="my-1 sm:my-2 h-12 sm:h-14 lg:h-16 flex items-center justify-center px-2 sm:px-4">
                <img src={partner.logoUrl} alt={partner.name} className="max-h-full max-w-full h-auto w-auto opacity-600 transition-all duration-900" />
              </div>
            ))
          )}
        </div>
        
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <Link href="/partners"> 
            <button className="group cursor-pointer flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-inter font-bold tracking-widest border border-gray-400 px-4 sm:px-6 py-2 sm:py-3 hover:bg-gray-800 hover:text-white transition-colors mx-auto">
              ELITE PARTNERS
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
} 