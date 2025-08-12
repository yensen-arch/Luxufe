"use client"
import { useState, useEffect } from "react";
import { Hotel } from "@/lib/database";
import { getHotelsWithFiltersAndGallery, getHotelGallery } from "@/lib/database";
import Link from "next/link";

interface OtherAmanHotelsProps {
  hotel: Hotel;
}

interface OtherHotel {
  hotel_name: string;
  city: string;
  country: string;
  image: string;
}

function StarRow() {
  return (
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 4l3.09 6.26L24 11.27l-5 4.87L20.18 22 14 18.27 7.82 22 9 16.14l-5-4.87 6.91-1.01L14 4z" stroke="#fff" strokeWidth="1.5" fill="none"/>
        </svg>
      ))}
    </div>
  );
}

// Convert brand name to slug format
function brandNameToSlug(brandName: string): string {
  const nameToSlugMap: { [key: string]: string } = {
    'Aman': 'aman',
    'Anantara': 'anantara',
    'Auberge Resorts': 'auberge-resorts',
    'Banyan Tree Hotels': 'banyan-tree-hotels',
    '&Beyond': 'andbeyond',
    'COMO Hotel and Resorts': 'como-hotel-and-resorts',
    'Fairmont Hotels': 'fairmont-hotels',
    'Four Seasons': 'four-seasons',
    'Kempinski Hotels': 'kempinski-hotels',
    'Marriott': 'marriott',
    'Mandarin Oriental': 'mandarin-oriental',
    'Oberoi Hotels': 'oberoi-hotels',
    'Raffles Hotels & Resorts': 'raffles-hotels-and-resorts',
    'Relais and Chateau': 'relais-and-chateau',
    'Ritz Carlton': 'ritz-carlton',
    'Rosewood': 'rosewood',
    'Shangri La Hotels': 'shangri-la-hotels',
    'Singita Hotels': 'singita-hotels',
    'Six Senses Hotels': 'six-senses-hotels',
    'Sofitel': 'sofitel',
    'Soneva': 'soneva',
    'Saint Regis Hotels': 'saint-regis-hotels',
    'Taj Hotels': 'taj-hotels',
    'Waldorf Astoria': 'waldorf-astoria',
    'Belmond': 'belmond',
    'The Ritz-Carlton': 'the-ritz-carlton',
    'St. Regis': 'st-regis',
    'The Red Carnation Hotel Collection': 'the-red-carnation-hotel-collection',
    'Waldorf Astoria Hotels & Resorts': 'waldorf-astoria-hotels-and-resorts',
    'Jumeirah Hotels & Resorts': 'jumeirah-hotels-and-resorts',
    'Sofitel Luxury Hotels': 'sofitel-luxury-hotels',
    'The Langham Hotels and Resorts': 'the-langham-hotels-and-resorts',
    'Kimpton Hotels': 'kimpton-hotels',
    'InterContinental Hotels & Resorts': 'intercontinental-hotels-and-resorts',
    'Hyatt Regency': 'hyatt-regency',
    'The Luxury Collection': 'the-luxury-collection',
    'Occidental Hotels & Resorts': 'occidental-hotels-and-resorts',
    'Fairmont Hotels & Resorts': 'fairmont-hotels-and-resorts',
    'Banyan Tree Hotels & Resorts': 'banyan-tree-hotels-and-resorts',
    'Casa Tua Hotel': 'casa-tua-hotel',
    'Shangri-La Hotels and Resorts': 'shangri-la-hotels-and-resorts',
    'Bvlgari Hotels & Resorts': 'bvlgari-hotels-and-resorts',
    'Park Hyatt': 'park-hyatt',
    'Le Meridien': 'le-meridien',
    'The Leading Hotels of the World': 'the-leading-hotels-of-the-world',
    'SLS Hotels': 'sls-hotels',
    'Six Senses Hotels Resorts Spas': 'six-senses-hotels-resorts-spas',
    'Ritz Paris': 'ritz-paris',
    'The Savoy': 'the-savoy',
    'COMO Hotels and Resorts': 'como-hotels-and-resorts',
    'Capella Hotels and Resorts': 'capella-hotels-and-resorts',
    'Thompson Hotels': 'thompson-hotels',
    'Ace Hotel': 'ace-hotel',
    'The NoMad Hotel': 'the-nomad-hotel'
  }
  return nameToSlugMap[brandName] || brandName.toLowerCase().replace(/\s+/g, '-')
}

export default function OtherAmanHotels({ hotel }: OtherAmanHotelsProps) {
  const [otherHotels, setOtherHotels] = useState<OtherHotel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOtherHotels = async () => {
      setIsLoading(true);
      try {
        // Fetch other hotels from the same brand, excluding the current hotel
        const hotelsResponse = await getHotelsWithFiltersAndGallery({
          brand: hotel.brand
        });

        // Extract the hotels array from the response
        const hotels = hotelsResponse.data || [];

        // Filter out the current hotel and take up to 3 others
        const otherHotelsData = hotels
          .filter((h: Hotel) => h.hotel_name !== hotel.hotel_name)
          .slice(0, 3);

        // Fetch gallery images for each hotel
        const hotelsWithImages = await Promise.all(
          otherHotelsData.map(async (hotelData: Hotel) => {
            const galleryImages = await getHotelGallery(hotelData.hotel_name);
            return {
              hotel_name: hotelData.hotel_name,
              city: hotelData.city,
              country: hotelData.country,
              image: galleryImages.length > 0 
                ? galleryImages[0] 
                : "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80"
            };
          })
        );

        setOtherHotels(hotelsWithImages);
      } catch (error) {
        console.error('Error fetching other hotels:', error);
        // Fallback to empty array
        setOtherHotels([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOtherHotels();
  }, [hotel.brand, hotel.hotel_name]);

  // Skeleton component for loading state
  const HotelSkeleton = () => (
    <div className="relative overflow-hidden rounded-none shadow-lg h-[320px] bg-gray-200 animate-pulse">
      <div className="absolute inset-0 bg-gray-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex gap-1 mb-2 justify-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-5 h-5 bg-gray-400 rounded"></div>
          ))}
        </div>
        <div className="h-6 bg-gray-400 rounded w-3/4 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-400 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#f7f7fa] py-24 flex flex-col items-center justify-center">
      {/* Script Heading */}
      <div className="mb-2">
        <span className="font-bellarina text-4xl text-[#23263a]">Keep exploring</span>
      </div>
      {/* Main Heading */}
      <h2 className="text-5xl md:text-6xl font-arpona text-[#23263a] font-medium text-center mb-16">Other {hotel.brand} Hotels</h2>
      
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 w-full max-w-6xl">
        {isLoading ? (
          // Show skeletons while loading
          [...Array(3)].map((_, i) => <HotelSkeleton key={i} />)
        ) : otherHotels.length > 0 ? (
          // Show actual hotels
          otherHotels.map((hotelData, i) => (
            <div key={i} className="cursor-pointer relative group overflow-hidden rounded-none shadow-lg h-[320px] flex items-end justify-center">
              <Link href={`/product/${hotelData.hotel_name}`}>
              <img 
                src={hotelData.image} 
                alt={hotelData.hotel_name} 
                className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 z-10" />
              <div className="relative z-20 p-6 w-full text-center flex flex-col items-center justify-end">
                <StarRow />
                <h3 className="text-white text-2xl font-arpona font-normal mb-1 drop-shadow-lg">{hotelData.hotel_name}</h3>
                <p className="text-white text-sm font-inter opacity-90">{hotelData.city}, {hotelData.country}</p>
              </div>
              </Link>
            </div>
          ))
        ) : (
          // Show fallback if no other hotels found
          [...Array(3)].map((_, i) => (
            <div key={i} className="relative group overflow-hidden rounded-none shadow-lg h-[320px] flex items-end justify-center">
              <img 
                src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80" 
                alt="Hotel placeholder" 
                className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 z-10" />
              <div className="relative z-20 p-6 w-full text-center flex flex-col items-center justify-end">
                <StarRow />
                <h3 className="text-white text-2xl font-arpona font-normal mb-1 drop-shadow-lg">More {hotel.brand.toUpperCase()} Hotels</h3>
                <p className="text-white text-sm font-inter opacity-90">Coming Soon</p>
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Button */}
      <Link 
        href={`/brand/${brandNameToSlug(hotel.brand)}`}
        className="mt-4 px-12 py-5 cursor-pointer border-2 border-gray-300 font-inter font-bold text-[#23263a] text-xs flex items-center justify-center gap-2 tracking-widest hover:bg-gray-100 transition-all" 
        style={{ minWidth: 320 }}
      >
        EXPLORE ALL {hotel.brand.toUpperCase()} HOTELS <span className="ml-2">→</span>
      </Link>
    </section>
  );
} 