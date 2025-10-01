import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getHotelGallery, getBrandByName, getHotelCardImages } from "@/lib/database";
import Image from "next/image";

interface BrandCardProps {
  name: string;
  location: string;
  logo: string;
  description: string;
  brand?: string; // Add brand name to fetch brand logo
}

export default function BrandCard({ name, location, logo, description, brand }: BrandCardProps) {
  const router = useRouter();
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [cardImages, setCardImages] = useState<{
    top: string | null;
    left: string | null;
    right: string | null;
  } | null>(null);
  const [brandLogo, setBrandLogo] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
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
        console.log('🎯 BrandCard: Fetching gallery for hotel name:', name);
        
        // Fetch gallery images and card images in parallel
        const [images, cardImagesData] = await Promise.all([
          getHotelGallery(name),
          getHotelCardImages(name)
        ]);
        
        console.log('🎯 BrandCard: Gallery images received:', images.length, 'images');
        setGalleryImages(images);
        setCardImages(cardImagesData);
        
        // Reset image loading states when we get new images
        setImageLoading({
          top: false,
          bottomLeft: false,
          bottomRight: false
        });

        // Fetch brand logo if brand name is provided
        if (brand) {
          const brandData = await getBrandByName(brand);
          if (brandData?.logo) {
            setBrandLogo(brandData.logo);
          } else {
            setBrandLogo(getDefaultBrandLogo());
          }
        } else {
          setBrandLogo(logo || getDefaultBrandLogo());
        }
      } catch (error) {
        console.error('Error fetching data for', name, error);
        setBrandLogo(logo || getDefaultBrandLogo());
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [name, brand, logo]);

  // Get images with priority to card images, then fallback to gallery images
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

  const handleCardClick = () => {
    const encodedHotelName = encodeURIComponent(name);
    router.push(`/product/${encodedHotelName}`);
  };

  // Skeleton component
  const ImageSkeleton = ({ className }: { className: string }) => (
    <div className={`bg-gray-200 animate-pulse ${className}`}>
      <div className="w-full h-full bg-gray-300"></div>
    </div>
  );

  return (
    <div className="bg-white shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300" onClick={handleCardClick}>
      {/* Image Section - Three images layout */}
      <div className="relative">
        {/* Large Top Image - Use image 2 from gallery */}
        <div className="h-44 w-full mb-0.5 relative">
          {isLoading ? (
            <ImageSkeleton className="w-full h-full" />
          ) : !imageError.top ? (
            <Image 
              src={getImageUrl('top', "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80")} 
              alt={`${name} main view`} 
              width={500}
              height={500}
              className="w-full h-full object-cover"
              onLoad={() => handleImageLoad('top')}
              onError={() => handleImageError('top')}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image unavailable</span>
            </div>
          )}
        </div>
        
        {/* Two Smaller Bottom Images - Side by side */}
        <div className="flex h-44">
          <div className="flex-1 mr-0.5 relative">
            {isLoading ? (
              <ImageSkeleton className="w-full h-full" />
            ) : !imageError.bottomLeft ? (
              <Image 
                src={getImageUrl('left', "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80")} 
                alt={`${name} view 1`} 
                width={500}
                height={500}
                className="w-full h-full object-cover"
                onLoad={() => handleImageLoad('bottomLeft')}
                onError={() => handleImageError('bottomLeft')}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-xs">Image unavailable</span>
              </div>
            )}
          </div>
          <div className="flex-1 relative">
            {isLoading ? (
              <ImageSkeleton className="w-full h-full" />
            ) : !imageError.bottomRight ? (
              <Image 
                src={getImageUrl('right', "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80")} 
                alt={`${name} view 2`}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                onLoad={() => handleImageLoad('bottomRight')}
                onError={() => handleImageError('bottomRight')}
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
      <div className="px-6 py-4 bg-white">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            {isLoading ? (
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-arpona font-bold text-gray-800 mb-1">
                  {name}
                </h3>
                <p className="text-xs font-inter font-bold text-gray-500 tracking-widest uppercase">
                  {location}
                </p>
              </>
            )}
          </div>
          {isLoading ? (
            <div className="h-8 w-16 bg-gray-200 animate-pulse rounded"></div>
          ) : (
            <Image 
              src={brandLogo} 
              alt={`${brand || name} Logo`} 
              width={100}
              height={100}
              className="h-8 object-contain"
            />
          )}
        </div>
      </div>
      
      {/* Description Section */}
      <div className="px-6 py-4 bg-white">
        {isLoading ? (
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded w-4/6"></div>
          </div>
        ) : (
          <p className="text-sm font-inter text-gray-600 leading-relaxed line-clamp-3">
            {description}
          </p>
        )}
      </div>
      
      {/* Call-to-Action Button Section */}
      <div className="px-6 py-4 bg-white">
        {isLoading ? (
          <div className="w-full h-12 bg-gray-200 animate-pulse rounded"></div>
        ) : (
          <button onClick={handleCardClick} className="cursor-pointer w-full border border-gray-800 bg-white text-gray-800 font-inter font-bold text-xs py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            EXPLORE HOTEL
            <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={20} height={20} className="w-3 h-3 md:w-7 md:h-7 opacity-50" />
          </button>
        )}
      </div>
    </div>
  );
} 