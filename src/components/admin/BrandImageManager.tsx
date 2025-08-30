"use client";
import { useState, useEffect } from "react";
import { Edit, SearchIcon, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { getHotelsWithFiltersAndGallery, getBrandCountries, getHotelGallery, getBrandByName, getHotelCardImages, getHotelHeroImage, updateHotelHeroImage } from "@/lib/database";
import ImageModal from "./ImageModal";
import AdminBrandSidebar from "./AdminBrandSidebar";
import AdminBrandGrid from "./AdminBrandGrid";

interface Hotel {
  id: string;
  hotel_name: string;
  brand: string;
  room_type: string;
  latitude?: string;
  longitude?: string;
  map_link?: string;
  hotel_link?: string;
  country: string;
  city: string;
  address?: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

interface Brand {
  id: string;
  name: string;
  description?: string;
}

interface BrandImageManagerProps {
  selectedBrand?: Brand;
}

export default function BrandImageManager({ selectedBrand }: BrandImageManagerProps) {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(false);
  const [availableCountries, setAvailableCountries] = useState<string[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    typeOfTravel: [] as string[],
    region: [] as string[]
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  
  // Edit mode states
  const [editMode, setEditMode] = useState(false);
  const [editingHotelId, setEditingHotelId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    alt: string;
    hotelName: string;
    position: 'top' | 'left' | 'right' | 'hero';
  } | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const cardsPerPage = 4;

  // Fetch available countries for the selected brand
  useEffect(() => {
    const fetchBrandCountries = async () => {
      if (!selectedBrand) {
        setAvailableCountries([]);
        setLoadingCountries(false);
        return;
      }

      setLoadingCountries(true);
      try {
        const countries = await getBrandCountries(selectedBrand.name);
        setAvailableCountries(countries);
      } catch (error) {
        console.error('Error fetching brand countries:', error);
        setAvailableCountries([]);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchBrandCountries();
  }, [selectedBrand]);

  // Fetch hotels based on filters
  useEffect(() => {
    const fetchHotels = async () => {
      if (!selectedBrand) {
        setHotels([]);
        setTotalCount(0);
        setTotalPages(0);
        return;
      }

      setLoading(true);
      try {
        const hotelData = await getHotelsWithFiltersAndGallery({
          brand: selectedBrand.name,
          search: filters.search,
          countries: filters.region.length > 0 ? filters.region : undefined,
          typeOfTravel: filters.typeOfTravel.length > 0 ? filters.typeOfTravel : undefined,
          page: currentPage,
          pageSize: cardsPerPage
        });
        
        setHotels(hotelData.data || []);
        setTotalCount(hotelData.count || 0);
        setTotalPages(Math.ceil((hotelData.count || 0) / cardsPerPage));
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setHotels([]);
        setTotalCount(0);
        setTotalPages(0);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [selectedBrand, filters.search, filters.region, filters.typeOfTravel, currentPage, refreshTrigger]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters.search, filters.region, filters.typeOfTravel]);

  const handleFiltersChange = (newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleClearFilter = (filterType: 'typeOfTravel' | 'region', value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].filter(item => item !== value)
    }));
  };

  const handleClearAllFilters = () => {
    setFilters({
      search: "",
      typeOfTravel: [],
      region: []
    });
  };

  // Edit mode handlers
  const handleEditClick = (hotelId: string) => {
    setEditMode(true);
    setEditingHotelId(hotelId);
  };

  const handleExitEditMode = () => {
    setEditMode(false);
    setEditingHotelId(null);
  };

  const handleImageClick = (imageUrl: string, imageAlt: string, hotelName: string) => {
    // Determine position based on the image alt text or URL
    let position: 'top' | 'left' | 'right' = 'top';
    
    if (imageAlt.includes('main view') || imageAlt.includes('top')) {
      position = 'top';
    } else if (imageAlt.includes('view 1') || imageAlt.includes('left')) {
      position = 'left';
    } else if (imageAlt.includes('view 2') || imageAlt.includes('right')) {
      position = 'right';
    }
    
    setSelectedImage({
      url: imageUrl,
      alt: imageAlt,
      hotelName,
      position
    });
  };

  const handleEditHeroClick = (hotelName: string) => {
    // Get the first image from gallery as default hero image
    const defaultHeroImage = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80";
    
    setSelectedImage({
      url: defaultHeroImage,
      alt: `${hotelName} hero image`,
      hotelName,
      position: 'hero'
    });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    // Refresh the hotels data to show updated card images
    setRefreshTrigger(prev => prev + 1);
  };

  if (!selectedBrand) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 font-inter">Please select a brand to manage images.</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col lg:flex-row h-full ${editMode ? 'relative' : ''}`}>
      {/* Blurred overlay when in edit mode */}
      {editMode && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"></div>
      )}
      
      {/* Sidebar */}
      <AdminBrandSidebar
        onFiltersChange={handleFiltersChange}
        availableCountries={availableCountries}
        loading={loading}
        loadingCountries={loadingCountries}
        filters={filters}
        editMode={editMode}
      />
      
      {/* Main Content */}
      <AdminBrandGrid
        hotels={hotels}
        loading={loading}
        filters={filters}
        onClearFilter={handleClearFilter}
        onClearAllFilters={handleClearAllFilters}
        currentPage={currentPage}
        totalPages={totalPages}
        totalCount={totalCount}
        onPageChange={setCurrentPage}
        cardsPerPage={cardsPerPage}
        editMode={editMode}
        editingHotelId={editingHotelId}
        onEditClick={handleEditClick}
        onExitEditMode={handleExitEditMode}
        onImageClick={handleImageClick}
        onEditHeroClick={handleEditHeroClick}
      />

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage.url}
          imageAlt={selectedImage.alt}
          hotelName={selectedImage.hotelName}
          position={selectedImage.position}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
