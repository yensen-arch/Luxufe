"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// Custom styles for the carousel
const swiperStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }
  
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
  const images: HotelImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
      alt: "Hotel patio with mountain view"
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
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
      alt: "Hotel spa and wellness area"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
      alt: "Hotel dining experience"
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <style dangerouslySetInnerHTML={{ __html: swiperStyles }} />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-arpona font-bold text-[#23263a] text-center mb-12 sm:mb-16">
          Your stay, frame-by-frame
        </h2>
        
        {/* Carousel Container */}
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="w-full h-full"
          >
            {images.map((image) => (
              <SwiperSlide 
                key={image.id} 
                className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%]"
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button
            className="swiper-button-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
          </button>
          
          <button
            className="swiper-button-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 group"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 swiper-pagination-bullet ${
                  index === 0 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-gray-600 font-inter">
            Swipe or use arrows to explore more of {hotel.hotel_name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HotelCarousel; 