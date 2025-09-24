"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { LandItineraryDate, getHotelHeroImage, getHotelGallery } from "@/lib/database";

interface PricingOptionsProps {
  itineraryDates: LandItineraryDate[];
  hotelsByCategories: {
    types: Array<{
      category: string;
      hotels: Array<{
        name: string;
        city: string;
        country: string;
        day?: string;
      }>;
    }>;
  };
}

export default function PricingOptions({ itineraryDates, hotelsByCategories }: PricingOptionsProps) {
  const [selectedDate, setSelectedDate] = useState<LandItineraryDate | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [hotelImages, setHotelImages] = useState<{[key: string]: string}>({});
  const [loadingImages, setLoadingImages] = useState<{[key: string]: boolean}>({});
  const router = useRouter();

  // Debug logging
  useEffect(() => {
    console.log('PricingOptions - itineraryDates received:', itineraryDates);
    console.log('PricingOptions - selectedDate:', selectedDate);
  }, [itineraryDates, selectedDate]);

  // Set initial selected date when data is available
  useEffect(() => {
    if (itineraryDates && itineraryDates.length > 0 && !selectedDate) {
      console.log('PricingOptions - Setting initial selected date:', itineraryDates[0]);
      setSelectedDate(itineraryDates[0]);
    }
  }, [itineraryDates, selectedDate]);

  // Extract unique pricing categories from ALL dates
  const pricingCategories = useMemo(() => {
    const allCategories = new Set<string>();
    itineraryDates.forEach(date => {
      if (date.adult_pricing) {
        Object.keys(date.adult_pricing).forEach(category => {
          allCategories.add(category);
        });
      }
    });
    return Array.from(allCategories);
  }, [itineraryDates]);

  console.log('PricingOptions - pricingCategories:', pricingCategories);

  // Helper function to get hotels for a specific category
  const getHotelsForCategory = (category: string) => {
    const categoryData = hotelsByCategories?.types?.find(type => type.category === category);
    return categoryData?.hotels || [];
  };

  // Handle category click
  const handleCategoryClick = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  // Handle hotel click - navigate to hotel page
  const handleHotelClick = (hotelName: string) => {
    const encodedHotelName = encodeURIComponent(hotelName);
    router.push(`/product/${encodedHotelName}`);
  };

  // Fetch hotel hero images when category expands
  useEffect(() => {
    const fetchHotelImages = async () => {
      if (expandedCategory) {
        const hotelsForCategory = getHotelsForCategory(expandedCategory);
        console.log('🔍 PricingOptions: Fetching images for hotels:', hotelsForCategory.map(h => h.name));
        
        // Process hotels in parallel
        const imagePromises = hotelsForCategory.map(async (hotel) => {
          if (!hotelImages[hotel.name] && !loadingImages[hotel.name]) {
            setLoadingImages(prev => ({ ...prev, [hotel.name]: true }));
            try {
              console.log('🔍 PricingOptions: Fetching images for:', hotel.name);
              // Fetch both hero image and gallery images
              const [heroImage, galleryImages] = await Promise.all([
                getHotelHeroImage(hotel.name),
                getHotelGallery(hotel.name)
              ]);
              
              console.log('✅ PricingOptions: Hero image result for', hotel.name, ':', heroImage);
              console.log('✅ PricingOptions: Gallery images count for', hotel.name, ':', galleryImages.length);
              
              // Use hero image if available, otherwise fall back to first gallery image, then placeholder
              const finalImage = heroImage || (galleryImages.length > 0 
                ? galleryImages[0] 
                : `/placeholder.svg`);
              
              setHotelImages(prev => ({ ...prev, [hotel.name]: finalImage }));
            } catch (error) {
              console.error(`❌ PricingOptions: Error fetching images for ${hotel.name}:`, error);
              const fallbackImage = `/placeholder.svg`;
              setHotelImages(prev => ({ ...prev, [hotel.name]: fallbackImage }));
            } finally {
              setLoadingImages(prev => ({ ...prev, [hotel.name]: false }));
            }
          }
        });

        await Promise.all(imagePromises);
      }
    };

    fetchHotelImages();
  }, [expandedCategory]);

  // Get hotel image URL
  const getHotelImageUrl = (hotelName: string) => {
    return hotelImages[hotelName] || `/placeholder.svg`;
  };

  // Don't render if no data
  if (!itineraryDates || itineraryDates.length === 0) {
    return (
      <div className="w-full max-w-4xl px-4 md:px-8 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-arpona font-bold text-gray-900 mb-4">
          Pricing & Options
        </h2>
        <div className="text-gray-500 font-inter font-bold">No pricing data available</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl px-4 md:px-8 py-8 md:py-12">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-arpona font-bold text-gray-900 mb-4">
        Pricing & Options
      </h2>

      {/* Date Selection */}
      <div className="mb-8">
        <div className="text-gray-900 font-inter font-bold text-sm mb-3">Available departure dates:</div>
        <div className="flex flex-wrap gap-2">
          {itineraryDates.map((date) => (
            <button
              key={date.id}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full border font-inter font-bold text-sm transition-all duration-300 ${
                selectedDate?.id === date.id
                  ? "bg-white text-[#A5C8CE] border-[#A5C8CE]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }`}
              onClick={() => setSelectedDate(date)}
            >
              {date.date}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Table */}
      <div className="overflow-hidden max-w-4xl">
        {/* Table Header */}
        <div className="grid grid-cols-3 border-b-2 border-gray-300">
          <div className="py-4 md:py-6">
            <p className="text-gray-700 font-inter font-bold text-xs">
              Land Arrangements, Per Person (2025)
            </p>
          </div>
          <div className="p-4 md:p-6 text-center">
            <h3 className="text-gray-700 font-inter font-bold text-xs uppercase tracking-wider">
              Adult Pricing
            </h3>
          </div>
          <div className="p-4 md:p-6 text-center">
            <h3 className="text-gray-700 font-inter font-bold text-xs uppercase tracking-wider">
              Children Pricing
            </h3>
          </div>
        </div>

        {/* Table Rows */}
        {selectedDate && pricingCategories.map((category: string, index: number) => {
          const isExpanded = expandedCategory === category;
          const hotelsForCategory = getHotelsForCategory(category);
          
          return (
            <div key={index} className="border-b-2 border-gray-300">
              {/* Pricing Row - Clickable */}
              <div 
                className="grid grid-cols-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => handleCategoryClick(category)}
              >
                <div className="p-4 md:p-6 flex items-center">
                  <span className="text-gray-900 font-inter font-bold text-sm md:text-xl">
                    {category}
                  </span>
                </div>
                <div className="p-4 md:p-6 text-center">
                  <span className="text-gray-900 font-arpona font-bold text-lg md:text-xl">
                    ${selectedDate.adult_pricing[category] ? Number(selectedDate.adult_pricing[category]).toFixed(0) : 'N/A'}
                  </span>
                </div>
                <div className="p-4 md:p-6 text-center">
                  <span className="text-gray-900 font-arpona font-bold text-lg md:text-xl">
                    ${selectedDate.children_pricing[category] ? Number(selectedDate.children_pricing[category]).toFixed(0) : 'N/A'}
                  </span>
                </div>
              </div>
              
              {/* Expandable Hotel Details */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{
                  maxHeight: isExpanded ? 800 : 0,
                  opacity: isExpanded ? 1 : 0
                }}
                aria-hidden={!isExpanded}
              >
                <div className="bg-gray-50 p-4 md:p-6">
                  <h4 className="text-lg font-arpona font-bold text-gray-900 mb-4">
                    {category} Hotels
                  </h4>
                  {hotelsForCategory.length > 0 ? (
                    <div className="space-y-4">
                      {hotelsForCategory.map((hotel, hotelIndex) => (
                        <div 
                          key={hotelIndex} 
                          className="bg-white p-4  border border-gray-300 cursor-pointer hover:shadow-lg transition-shadow duration-200 flex items-center justify-between"
                          onClick={() => handleHotelClick(hotel.name)}
                        >
                          <div className="flex-1">
                            {hotel.day && (
                              <p className="text-lg font-arpona font-bold text-gray-600 mb-1">
                                Day {hotel.day}
                              </p>
                            )}
                            <h5 className="text-md font-arpona font-bold text-gray-900 mb-1 hover:text-[#A5C8CE] transition-colors">
                              {hotel.name}
                            </h5>
                            <p className="text-sm font-inter font-bold text-gray-600">
                              {hotel.city}, {hotel.country}
                            </p>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <div className="relative w-20 h-16 md:w-34 md:h-24 overflow-hidden">
                              {loadingImages[hotel.name] ? (
                                <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                                  <div className="w-6 h-6 border-2 border-[#A5C8CE] border-t-transparent rounded-full animate-spin"></div>
                                </div>
                              ) : (
                                <img
                                  src={getHotelImageUrl(hotel.name)}
                                  alt={`${hotel.name} in ${hotel.city}`}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                                  onError={(e) => {
                                    e.currentTarget.src = "/placeholder.svg";
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 font-inter text-sm">
                      No hotels specified for {category} category
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8 md:mt-12 w-full">
        <button className="inline-flex w-full items-center justify-center gap-2 border-2 border-gray-300 px-6 md:px-8 py-3 md:py-4 font-inter font-bold text-gray-900 hover:bg-gray-50 transition-colors duration-300 text-xs">
          CONTACT US FOR DETAILS
          <img src="/luxufe-icon-button-arrow-dark.svg" alt="arrow-right" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
