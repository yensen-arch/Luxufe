"use client"

import React, { useState, useEffect } from "react";
import { getFeaturedCruiseBrands } from "@/lib/database";
import Image from "next/image";
interface CruisePartner {
  image: string;
  logo: React.ReactNode;
  name: string;
  suites: number;
  itineraries: number;
}

// Default partners as fallback
const defaultPartners: CruisePartner[] = [
  {
    image: "/luxufe-image-silversea.png",
    logo: (
      <span className="text-lg font-arpona font-bold tracking-widest">SILVERSEA</span>
    ),
    name: "SILVERSEA",
    suites: 50,
    itineraries: 12,
  },
  {
    image: "/luxufe-image-ponant.png",
    logo: (
      <span className="text-lg font-arpona font-bold tracking-widest">PONANT</span>
    ),
    name: "PONANT",
    suites: 50,
    itineraries: 12,
  },
  {
    image: "/luxufe-image-abercrombie-kent.png",
    logo: (
      <span className="text-lg font-arpona font-bold tracking-widest">AK</span>
    ),
    name: "ABERCROMBIE & KENT",
    suites: 50,
    itineraries: 12,
  },
];

export default function TrustedCruisePartners() {
  const [partners, setPartners] = useState<CruisePartner[]>(defaultPartners);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        const cruiseBrands = await getFeaturedCruiseBrands(3);
        
        if (cruiseBrands.length >= 3) {
          // If we have 3 or more brands, use real data
          const realPartners: CruisePartner[] = cruiseBrands.map((brand, index) => ({
            image: brand.cover || `/luxufe-image-${brand.name.toLowerCase().replace(/ /g, '-')}.png`,
            logo: brand.logo_horizontal ? (
              <Image 
                src={brand.logo_horizontal} 
                alt={brand.name}
                width={24}
                height={24}
                className="max-h-8 w-auto"
              />
            ) : (
              <span className="text-lg font-arpona font-bold tracking-widest">
                {brand.name.toUpperCase()}
              </span>
            ),
            name: brand.name.toUpperCase(),
            suites: brand.ship_count,
            itineraries: brand.itinerary_count,
          }));
          setPartners(realPartners);
        } else if (cruiseBrands.length > 0) {
          // If we have some brands but not 3, mix real data with defaults
          const mixedPartners: CruisePartner[] = [];
          
          // Add real brands first
          cruiseBrands.forEach((brand) => {
            mixedPartners.push({
              image: brand.cover || `/luxufe-image-${brand.name.toLowerCase().replace(/ /g, '-')}.png`,
              logo: brand.logo_horizontal ? (
                <Image 
                  src={brand.logo_horizontal} 
                  alt={brand.name}
                  width={24}
                  height={24}
                  className="max-h-8 w-auto"
                />
              ) : (
                <span className="text-lg font-arpona font-bold tracking-widest">
                  {brand.name.toUpperCase()}
                </span>
              ),
              name: brand.name.toUpperCase(),
              suites: brand.ship_count,
              itineraries: brand.itinerary_count,
            });
          });
          
          // Fill remaining slots with defaults
          const remainingSlots = 3 - cruiseBrands.length;
          for (let i = 0; i < remainingSlots; i++) {
            mixedPartners.push(defaultPartners[i]);
          }
          
          setPartners(mixedPartners);
        } else {
          // If no brands found, use defaults
          setPartners(defaultPartners);
        }
      } catch (error) {
        console.error('Error fetching cruise brands:', error);
        // Fallback to default partners on error
        setPartners(defaultPartners);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <section className="py-24 bg-[#f7f7f8]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="font-bellarina text-3xl md:text-5xl text-[#23263a] mb-4">Trusted Cruise Partners</h3>
        <h2 className="text-3xl md:text-4xl font-arpona font-bold text-gray-600 mb-12">
          We collaborate with the world's most exceptional<br />cruise lines and vessels
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {partners.map((partner, idx) => (
            <div key={idx} className="bg-white shadow p-2 flex flex-col items-center border-4 border-white transition-all">
              <Image src={partner.image} alt={partner.name} className="w-full h-56 object-cover  mb-6" width={24} height={24} />
              <div className="bg-white px-2 py-4 shadow -mt-10 mb-6 z-10 relative flex items-center justify-center min-w-[180px]">
                {partner.logo}
              </div>
              <hr className="w-full my-4 border-gray-200" />
              <div className="flex justify-center gap-8 w-full">
                <div className="flex items-center gap-2 text-[#23263a] font-inter font-bold text-xs">
                  <Image src="/luxufe-icon-suites-beds-dark.svg" alt="Bed" width={24} height={24} className="w-5 h-5" />
                  {partner.suites} ships
                </div>
                <div className="flex items-center gap-2 text-[#23263a] font-inter font-bold text-xs">
                  <Image src="/luxufe-icon-cruise-ship-dark.svg" alt="Briefcase" width={20} height={20} className="w-5 h-5" />
                  {partner.itineraries} Itineraries
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button className="flex items-center gap-2 border border-gray-400 px-8 py-4 bg-[#f7f7f8] text-[#23263a] font-inter font-bold text-xs tracking-widest hover:bg-gray-100 transition-all">
            ALL CRUISE PARTNERS <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={24} height={24} className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
} 