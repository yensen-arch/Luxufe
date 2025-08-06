"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { getHotelGallery } from "@/lib/database";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// Custom styles for the carousel
const swiperStyles = `
  .swiper-slide {
    transition: all 0.3s ease;
    opacity: 0.4;
    transform: scale(0.8);
  }
  
  .swiper-slide-active {
    opacity: 1;
    transform: scale(1);
  }
  
  .swiper-slide-prev,
  .swiper-slide-next {
    opacity: 0.7;
    transform: scale(0.9);
  }
  
  .swiper-slide-prev {
    transform: scale(0.9) translateX(10%);
  }
  
  .swiper-slide-next {
    transform: scale(0.9) translateX(-10%);
  }
`;

interface HotelImage {
  id: number;
  src: string;
  alt: string;
}

interface HotelCarouselProps {
  hotel: {
    hotel_name: string;
  };
}

const HotelCarousel: React.FC<HotelCarouselProps> = ({ hotel }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch hotel gallery images
  useEffect(() => {
    const fetchGalleryImages = async () => {
      setIsLoading(true);
      try {
        const images = await getHotelGallery(hotel.hotel_name);
        setGalleryImages(images);
      } catch (error) {
        console.error('Error fetching gallery images for', hotel.hotel_name, error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGalleryImages();
  }, [hotel.hotel_name]);

  // Create image objects from gallery data
  const images: HotelImage[] = galleryImages.length > 0 
    ? galleryImages.map((src, index) => ({
        id: index + 1,
        src,
        alt: `${hotel.hotel_name} - Image ${index + 1}`
      }))
    : [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
          alt: "Hotel pool area at dusk"
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
          alt: "Luxury bedroom with wooden headboard"
        },
        {
          id: 3,
          src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
          alt: "Hotel interior with mountain views"
        }
      ];

  // Skeleton component for loading state
  const CarouselSkeleton = () => (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-3 gap-8 w-full max-w-4xl">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-full">
              <div className="w-full h-full bg-gray-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full py-20 bg-gradient-to-b from-blue-50 to-gray-100">
      <style dangerouslySetInnerHTML={{ __html: swiperStyles }} />
      <div className="mx-auto px-0">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-arpona font-bold text-[#212121] text-center mb-12 sm:mb-16">
          Your stay, frame-by-frame
        </h2>
        
        {/* Carousel Container */}
        {isLoading ? (
          <CarouselSkeleton />
        ) : (
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2}
              spaceBetween={100}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              loop={true}
              modules={[EffectCoverflow]}
              className="w-full h-full"
            >
              {images.map((image) => (
                <SwiperSlide 
                  key={image.id} 
                  className="w-full"
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows - Positioned on sides of central image */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-[calc(50%-400px)] top-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm transition-all duration-300 z-10 group hover:bg-gray-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
            
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-[calc(50%-400px)] top-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm transition-all duration-300 z-10 group hover:bg-gray-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HotelCarousel;