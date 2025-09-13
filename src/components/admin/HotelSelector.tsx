"use client";
import { useState, useEffect } from "react";
import { Search, ChevronDown, Check } from "lucide-react";
import { getHotelsWithFiltersAndGallery } from "@/lib/database";

interface Brand {
  id: string;
  name: string;
  description?: string;
  brand_image?: string;
}

interface Hotel {
  id: string;
  hotel_name: string;
  brand: string;
  city: string;
  country: string;
}

interface HotelSelectorProps {
  selectedBrand?: Brand;
  onHotelSelect: (hotel: Hotel) => void;
  selectedHotel?: Hotel;
}

export default function HotelSelector({ selectedBrand, onHotelSelect, selectedHotel }: HotelSelectorProps) {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch hotels when brand changes
  useEffect(() => {
    const fetchHotels = async () => {
      if (!selectedBrand) {
        setHotels([]);
        setFilteredHotels([]);
        return;
      }

      try {
        setLoading(true);
        const result = await getHotelsWithFiltersAndGallery({
          brand: selectedBrand.name,
          pageSize: 1000 // Get all hotels for the brand
        });
        
        setHotels(result.data);
        setFilteredHotels(result.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setHotels([]);
        setFilteredHotels([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [selectedBrand]);

  // Filter hotels based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredHotels(hotels);
    } else {
      const filtered = hotels.filter(hotel =>
        hotel.hotel_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredHotels(filtered);
    }
  }, [searchTerm, hotels]);

  const handleHotelSelect = (hotel: Hotel) => {
    onHotelSelect(hotel);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleToggle = () => {
    if (!selectedBrand) return;
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm("");
    }
  };

  if (!selectedBrand) {
    return (
      <div className="w-full">
        <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
          Select Hotel
        </label>
        <div className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-500 font-inter text-sm">
          Please select a brand first
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
        Select Hotel
      </label>
      
      <div className="relative">
        <button
          type="button"
          onClick={handleToggle}
          disabled={!selectedBrand}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 shadow-sm hover:border-[#A5C8CE] focus:outline-none focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          <span className={`font-inter text-sm ${selectedHotel ? 'text-gray-900' : 'text-gray-500'}`}>
            {selectedHotel ? selectedHotel.hotel_name : 'Choose a hotel...'}
          </span>
          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 shadow-lg max-h-60 overflow-hidden">
            {/* Search Input */}
            <div className="p-3 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search hotels..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent font-inter text-sm"
                />
              </div>
            </div>

            {/* Hotels List */}
            <div className="max-h-48 overflow-y-auto">
              {loading ? (
                <div className="p-4 text-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#A5C8CE] mx-auto"></div>
                  <p className="text-sm text-gray-500 font-inter mt-2">Loading hotels...</p>
                </div>
              ) : filteredHotels.length === 0 ? (
                <div className="p-4 text-center">
                  <p className="text-sm text-gray-500 font-inter">
                    {searchTerm ? 'No hotels found matching your search.' : 'No hotels available for this brand.'}
                  </p>
                </div>
              ) : (
                <div className="py-1">
                  {filteredHotels.map((hotel) => (
                    <button
                      key={hotel.id}
                      onClick={() => handleHotelSelect(hotel)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                        selectedHotel?.id === hotel.id ? 'bg-[#A5C8CE]/10' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div>
                          <p className="font-inter font-bold text-sm text-gray-900">
                            {hotel.hotel_name}
                          </p>
                          <p className="font-inter text-xs text-gray-500">
                            {hotel.city}, {hotel.country}
                          </p>
                        </div>
                      </div>
                      {selectedHotel?.id === hotel.id && (
                        <Check className="w-5 h-5 text-[#A5C8CE]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Selected Hotel Info */}
      {selectedHotel && (
        <div className="mt-3 p-3 bg-gray-50 rounded-md">
          <div className="flex items-center space-x-3">
            <div>
              <p className="font-inter font-bold text-sm text-gray-900">
                {selectedHotel.hotel_name}
              </p>
              <p className="font-inter text-xs text-gray-600">
                {selectedHotel.city}, {selectedHotel.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
