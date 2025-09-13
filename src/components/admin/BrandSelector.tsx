"use client";
import { useState, useEffect } from "react";
import { Search, ChevronDown, Check } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Brand {
  id: string;
  name: string;
  description?: string;
  brand_image?: string;
}

interface BrandSelectorProps {
  onBrandSelect: (brand: Brand) => void;
  selectedBrand?: Brand;
}

// Simple function to fetch brand names from the database
const fetchBrandNames = async (): Promise<Brand[]> => {
  try {
    const { data, error } = await supabase
      .from('brands')
      .select('id, name, description, brand_image')
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching brands:', error);
      return [];
    }

    // Transform to match our interface
    return data?.map(item => ({
      id: item.id,
      name: item.name,
      description: item.description,
      brand_image: item.brand_image
    })) || [];
  } catch (error) {
    console.error('Error fetching brands:', error);
    return [];
  }
};

export default function BrandSelector({ onBrandSelect, selectedBrand }: BrandSelectorProps) {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch brands from database
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true);
        const brandsData = await fetchBrandNames();
        setBrands(brandsData);
        setFilteredBrands(brandsData);
      } catch (error) {
        console.error('Error fetching brands:', error);
        setBrands([]);
        setFilteredBrands([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  // Filter brands based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredBrands(brands);
    } else {
      const filtered = brands.filter(brand =>
        brand.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBrands(filtered);
    }
  }, [searchTerm, brands]);

  const handleBrandSelect = (brand: Brand) => {
    onBrandSelect(brand);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm("");
    }
  };

  return (
    <div className="w-full max-w-md">
      <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
        Select Hotel Brand
      </label>
      
      <div className="relative">
        <button
          type="button"
          onClick={handleToggle}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 shadow-sm hover:border-[#A5C8CE] focus:outline-none focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent transition-colors"
        >
          <span className={`font-inter text-sm ${selectedBrand ? 'text-gray-900' : 'text-gray-500'}`}>
            {selectedBrand ? selectedBrand.name : 'Choose a brand...'}
          </span>
          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300  shadow-lg max-h-60 overflow-hidden">
            {/* Search Input */}
            <div className="p-3 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search brands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent font-inter text-sm"
                />
              </div>
            </div>

            {/* Brands List */}
            <div className="max-h-48 overflow-y-auto">
              {loading ? (
                <div className="p-4 text-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#A5C8CE] mx-auto"></div>
                  <p className="text-sm text-gray-500 font-inter mt-2">Loading brands...</p>
                </div>
              ) : filteredBrands.length === 0 ? (
                <div className="p-4 text-center">
                  <p className="text-sm text-gray-500 font-inter">
                    {searchTerm ? 'No brands found matching your search.' : 'No brands available.'}
                  </p>
                </div>
              ) : (
                <div className="py-1">
                  {filteredBrands.map((brand) => (
                    <button
                      key={brand.id}
                      onClick={() => handleBrandSelect(brand)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                        selectedBrand?.id === brand.id ? 'bg-[#A5C8CE]/10' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div>
                          <p className="font-inter font-bold text-sm text-gray-900">
                            {brand.name}
                          </p>
                          {brand.description && (
                            <p className="font-inter text-xs text-gray-500 truncate max-w-48">
                              {brand.description}
                            </p>
                          )}
                        </div>
                      </div>
                      {selectedBrand?.id === brand.id && (
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

      {/* Selected Brand Info */}
      {selectedBrand && (
        <div className="mt-3 p-3 bg-gray-50 ">
          <div className="flex items-center space-x-3">
            <div>
              <p className="font-inter font-bold text-sm text-gray-900">
                {selectedBrand.name}
              </p>
              {selectedBrand.description && (
                <p className="font-inter text-xs text-gray-600">
                  {selectedBrand.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
