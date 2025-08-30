"use client";
import { useState, useEffect } from "react";
import { Edit, X } from "lucide-react";
import { getHotelGallery, getBrandByName, getHotelCardImages } from "@/lib/database";

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

interface AdminBrandGridProps {
  hotels: Hotel[];
  loading: boolean;
  filters: any;
  onClearFilter: (filterType: 'typeOfTravel' | 'region', value: string) => void;
  onClearAllFilters: () => void;
  currentPage: number;
  totalPages: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  cardsPerPage: number;
  editMode?: boolean;
  editingHotelId?: string | null;
  onEditClick?: (hotelId: string) => void;
  onExitEditMode?: () => void;
  onImageClick?: (imageUrl: string, imageAlt: string, hotelName: string) => void;
  onEditHeroClick?: (hotelName: string) => void;
  onManageRoomImages?: (hotelName: string) => void;
}

export default function AdminBrandGrid({ 
  hotels, 
  loading, 
  filters, 
  onClearFilter, 
  onClearAllFilters,
  currentPage,
  totalPages,
  totalCount,
  onPageChange,
  cardsPerPage,
  editMode,
  editingHotelId,
  onEditClick,
  onExitEditMode,
  onImageClick,
  onEditHeroClick,
  onManageRoomImages
}: AdminBrandGridProps) {
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const allSelectedFilters = [...filters.typeOfTravel, ...filters.region];
  const hasFilters = allSelectedFilters.length > 0;

  if (loading) {
    return (
      <div className="flex-1 bg-[#f7f7fa] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#a8d1cf] mx-auto mb-4"></div>
          <p className="text-gray-600 font-inter">Loading hotels...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#f7f7fa] overflow-y-auto">
      {/* Selected Filters */}
      <div className="border-b-2 border-gray-300 px-4 lg:px-8 py-3 lg:py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-4 h-18">
          <div className="flex flex-wrap gap-2">
            {filters.typeOfTravel.map((type: string) => (
              <span
                key={type}
                className="bg-gray-200 text-gray-500 px-2 lg:px-3 py-1 rounded-full text-xs font-inter font-bold flex items-center gap-1 lg:gap-2"
              >
                {type}
                <button
                  onClick={() => onClearFilter('typeOfTravel', type)}
                  className="hover:text-gray-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {filters.region.map((region: string) => (
              <span
                key={region}
                className="bg-gray-200 text-gray-500 px-2 lg:px-3 py-1 rounded-full text-xs font-inter font-bold flex items-center gap-1 lg:gap-2"
              >
                {region}
                <button
                  onClick={() => onClearFilter('region', region)}
                  className="hover:text-gray-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
          {hasFilters && (
            <>
              <div className="hidden sm:block border-l-2 border-gray-700 h-6"></div>
              <button
                onClick={onClearAllFilters}
                className="text-xs font-inter font-bold text-gray-700 hover:text-gray-700"
              >
                Clear all filters
              </button>
            </>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="px-4 lg:px-8 py-4 lg:py-6">
        <p className="text-xs lg:text-sm font-inter font-bold text-gray-500">
          Showing {startIndex + 1}-{Math.min(endIndex, totalCount)} of {totalCount} Results
        </p>
      </div>

      {/* Hotel Cards Grid */}
      {hotels.length === 0 ? (
        <div className="flex items-center justify-center py-12 lg:py-16">
          <div className="text-center">
            <p className="text-gray-600 font-inter text-base lg:text-lg mb-2">No hotels found</p>
            <p className="text-gray-500 font-inter text-xs lg:text-sm">Try adjusting your filters to see more results</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 px-4 lg:px-8 pb-4 lg:pb-8">
          {hotels.map((hotel) => (
            <AdminBrandCard
              key={hotel.id}
              hotel={hotel}
              editMode={editMode}
              isEditing={editingHotelId === hotel.id}
              onEditClick={onEditClick}
              onExitEditMode={onExitEditMode}
              onImageClick={onImageClick}
              onEditHeroClick={onEditHeroClick}
              onManageRoomImages={onManageRoomImages}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center py-8 lg:py-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8">
            <button 
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`font-inter text-xs lg:text-sm transition ${
                currentPage === 1 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              &lt; Previous
            </button>
            
            <div className="flex items-center gap-2 lg:gap-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => onPageChange(pageNum)}
                  className={`flex flex-col items-center ${
                    pageNum === currentPage ? 'text-gray-800' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className={`font-inter text-xs lg:text-sm ${pageNum === currentPage ? 'font-medium' : ''}`}>
                    {pageNum.toString().padStart(2, '0')}
                  </span>
                  {pageNum === currentPage && (
                    <div className="w-full h-0.5 bg-gray-500 mt-1"></div>
                  )}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`font-inter text-xs lg:text-sm transition ${
                currentPage === totalPages 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'text-gray-800 hover:text-gray-600'
              }`}
            >
              Next &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Admin Brand Card Component (Editable version)
function AdminBrandCard({ 
  hotel, 
  editMode, 
  isEditing, 
  onEditClick, 
  onExitEditMode, 
  onImageClick,
  onEditHeroClick,
  onManageRoomImages
}: { 
  hotel: Hotel;
  editMode?: boolean;
  isEditing?: boolean;
  onEditClick?: (hotelId: string) => void;
  onExitEditMode?: () => void;
  onImageClick?: (imageUrl: string, imageAlt: string, hotelName: string) => void;
  onEditHeroClick?: (hotelName: string) => void;
  onManageRoomImages?: (hotelName: string) => void;
}) {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [cardImages, setCardImages] = useState<{
    top: string | null;
    left: string | null;
    right: string | null;
  } | null>(null);
  const [brandLogo, setBrandLogo] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [showEditButton, setShowEditButton] = useState(false);
  const [imageLoading, setImageLoading] = useState({
    top: true,
    bottomLeft: true,
    bottomRight: true
  });
  const [imageError, setImageError] = useState({
    top: false,
    bottomLeft: false,
    bottomRight: false
  });

  // Get default brand logo fallback
  const getDefaultBrandLogo = () => {
    return 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg';
  };

  // Fetch hotel gallery images, card images, and brand logo
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        console.log('🎯 AdminBrandCard: Fetching gallery for hotel name:', hotel.hotel_name);
        
        // Fetch gallery images and card images in parallel
        const [images, cardImagesData] = await Promise.all([
          getHotelGallery(hotel.hotel_name),
          getHotelCardImages(hotel.hotel_name)
        ]);
        
        console.log('🎯 AdminBrandCard: Gallery images received:', images.length, 'images');
        setGalleryImages(images);
        setCardImages(cardImagesData);
        
        // Reset image loading states when we get new images
        setImageLoading({
          top: false,
          bottomLeft: false,
          bottomRight: false
        });

        // Fetch brand logo if brand name is provided
        if (hotel.brand) {
          const brandData = await getBrandByName(hotel.brand);
          if (brandData?.logo) {
            setBrandLogo(brandData.logo);
          } else {
            setBrandLogo(getDefaultBrandLogo());
          }
        } else {
          setBrandLogo(getDefaultBrandLogo());
        }
      } catch (error) {
        console.error('Error fetching data for', hotel.hotel_name, error);
        setBrandLogo(getDefaultBrandLogo());
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [hotel.hotel_name, hotel.brand]);

  const handleEditClick = () => {
    if (onEditClick) {
      onEditClick(hotel.id);
    }
  };

  // Get images from the gallery array (with fallbacks)
  const getImageUrl = (position: 'top' | 'left' | 'right', fallbackUrl: string) => {
    // First try to use card images if available
    if (cardImages) {
      const cardImage = cardImages[position];
      if (cardImage) {
        return cardImage;
      }
    }
    
    // Fallback to gallery images based on position
    const galleryIndex = position === 'top' ? 1 : position === 'left' ? 2 : 3;
    return galleryImages[galleryIndex] || fallbackUrl;
  };

  const handleImageLoad = (imageType: 'top' | 'bottomLeft' | 'bottomRight') => {
    setImageLoading(prev => ({ ...prev, [imageType]: false }));
  };

  const handleImageError = (imageType: 'top' | 'bottomLeft' | 'bottomRight') => {
    setImageLoading(prev => ({ ...prev, [imageType]: false }));
    setImageError(prev => ({ ...prev, [imageType]: true }));
  };

  const handleImageClick = (imageUrl: string, imageAlt: string, position: 'top' | 'left' | 'right') => {
    if (onImageClick && isEditing) {
      onImageClick(imageUrl, imageAlt, hotel.hotel_name);
    }
  };

  return (
    <div 
      className={`bg-white shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 relative ${
        isEditing ? 'z-50' : ''
      }`}
      onMouseEnter={() => setShowEditButton(true)}
      onMouseLeave={() => setShowEditButton(false)}
    >
      {/* Edit Button - Shows on hover */}
      {showEditButton && !editMode && (
        <button
          onClick={handleEditClick}
          className="absolute top-2 lg:top-4 right-2 lg:right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 p-1.5 lg:p-2 rounded-full shadow-lg transition-all duration-200"
        >
          <Edit className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" />
        </button>
      )}

      {/* Exit Edit Mode Button */}
      {isEditing && (
        <button
          onClick={onExitEditMode}
          className="absolute top-2 lg:top-4 right-2 lg:right-4 z-10 bg-red-500 hover:bg-red-600 text-white p-1.5 lg:p-2 rounded-full shadow-lg transition-all duration-200"
        >
          <X className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
      )}

      {/* Image Section - Three images layout */}
      <div className="relative">
        {/* Large Top Image */}
        <div className="h-32 sm:h-44 w-full mb-0.5 relative">
          {isLoading ? (
            <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          ) : !imageError.top ? (
            <img 
              src={getImageUrl('top', "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80")} 
              alt={`${hotel.hotel_name} main view`} 
              className={`w-full h-full object-cover transition-all duration-200 ${
                isEditing ? 'hover:border-4 hover:border-[#A5C8CE] hover:border-opacity-80 cursor-pointer' : ''
              }`}
              onLoad={() => handleImageLoad('top')}
              onError={() => handleImageError('top')}
              onClick={() => handleImageClick(
                getImageUrl('top', "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"),
                `${hotel.hotel_name} main view`,
                'top'
              )}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-xs sm:text-sm">Image unavailable</span>
            </div>
          )}
        </div>
        
        {/* Two Smaller Bottom Images - Side by side */}
        <div className="flex h-32 sm:h-44">
          <div className="flex-1 mr-0.5 relative">
            {isLoading ? (
              <div className="w-full h-full bg-gray-200 animate-pulse"></div>
            ) : !imageError.bottomLeft ? (
              <img 
                src={getImageUrl('left', "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80")} 
                alt={`${hotel.hotel_name} view 1`} 
                className={`w-full h-full object-cover transition-all duration-200 ${
                  isEditing ? 'hover:border-4 hover:border-[#A5C8CE] hover:border-opacity-80 cursor-pointer' : ''
                }`}
                onLoad={() => handleImageLoad('bottomLeft')}
                onError={() => handleImageError('bottomLeft')}
                onClick={() => handleImageClick(
                  getImageUrl('left', "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"),
                  `${hotel.hotel_name} view 1`,
                  'left'
                )}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-xs">Image unavailable</span>
              </div>
            )}
          </div>
          <div className="flex-1 relative">
            {isLoading ? (
              <div className="w-full h-full bg-gray-200 animate-pulse"></div>
            ) : !imageError.bottomRight ? (
              <img 
                src={getImageUrl('right', "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80")} 
                alt={`${hotel.hotel_name} view 2`}
                className={`w-full h-full object-cover transition-all duration-200 ${
                  isEditing ? 'hover:border-4 hover:border-[#A5C8CE] hover:border-opacity-80 cursor-pointer' : ''
                }`}
                onLoad={() => handleImageLoad('bottomRight')}
                onError={() => handleImageError('bottomRight')}
                onClick={() => handleImageClick(
                  getImageUrl('right', "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"),
                  `${hotel.hotel_name} view 2`,
                  'right'
                )}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-xs">Image unavailable</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Hotel Information Section */}
      <div className="px-4 lg:px-6 py-3 lg:py-4 bg-white">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            {isLoading ? (
              <div className="space-y-2">
                <div className="h-5 lg:h-6 bg-gray-200 animate-pulse rounded w-3/4"></div>
                <div className="h-3 lg:h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
              </div>
            ) : (
              <>
                <h3 className="text-lg lg:text-2xl font-arpona font-bold text-gray-800 mb-1">
                  {hotel.hotel_name}
                </h3>
                <p className="text-xs font-inter font-bold text-gray-500 tracking-widest uppercase">
                  {`${hotel.city} . ${hotel.country}`.toUpperCase()}
                </p>
              </>
            )}
          </div>
          {!isLoading && (
            <img 
              src={brandLogo}
              alt={`${hotel.brand} Logo`} 
              className="h-6 lg:h-8 object-contain"
              onError={(e) => {
                e.currentTarget.src = getDefaultBrandLogo();
              }}
            />
          )}
        </div>
      </div>
      
      {/* Description Section */}
      <div className="px-4 lg:px-6 py-3 lg:py-4 bg-white">
        {isLoading ? (
          <div className="space-y-2">
            <div className="h-3 lg:h-4 bg-gray-200 animate-pulse rounded w-full"></div>
            <div className="h-3 lg:h-4 bg-gray-200 animate-pulse rounded w-5/6"></div>
            <div className="h-3 lg:h-4 bg-gray-200 animate-pulse rounded w-4/6"></div>
          </div>
        ) : (
          <p className="text-xs lg:text-sm font-inter text-gray-600 leading-relaxed line-clamp-3">
            {hotel.description || "Experience luxury and tranquility in this exceptional destination."}
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="px-4 lg:px-6 py-2 lg:py-3 bg-gray-50 border-t border-gray-200 space-y-2">
        <button
          onClick={() => onEditHeroClick && onEditHeroClick(hotel.hotel_name)}
          className="w-full bg-[#23263a] text-white font-inter font-bold py-2 px-4 transition-all duration-200 hover:bg-[#1a1d2e] text-xs lg:text-sm"
        >
          Edit Hero Image
        </button>
        <button
          onClick={() => onManageRoomImages && onManageRoomImages(hotel.hotel_name)}
          className="w-full bg-[#A5C8CE] text-white font-inter font-bold py-2 px-4 transition-all duration-200 hover:bg-[#8bb3b8] text-xs lg:text-sm"
        >
          Manage Room Images
        </button>
      </div>
    </div>
  );
}
