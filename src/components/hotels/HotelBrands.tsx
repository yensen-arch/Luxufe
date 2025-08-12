"use client";
import React, { useState, useCallback, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { getBrands, Brand } from "@/lib/database";
import { brandNameToSlug } from "@/lib/utils";
import Link from "next/link";

interface HotelBrandsData {
  title: string;
  subtitle: string;
  description: string;
  brandLogos: Array<{
    name: string;
    logo: {
      url: string;
      alt: string;
    };
  }>;
  destinations: Array<{
    name: string;
    location: string;
    image: {
      url: string;
      alt: string;
    };
  }>;
}

interface HotelBrandsProps {
  data?: HotelBrandsData;
}

const defaultBrands = [
  { name: "BEYOND", logo: { url: "https://via.placeholder.com/120x60/000000/FFFFFF?text=BEYOND", alt: "BEYOND" } },
  { name: "BELMOND", logo: { url: "https://via.placeholder.com/120x60/000000/FFFFFF?text=BELMOND", alt: "BELMOND" } },
  { name: "CAPELLA HOTELS & RESORTS", logo: { url: "https://via.placeholder.com/120x60/000000/FFFFFF?text=CAPELLA", alt: "CAPELLA" } },
  { name: "Dorchester Collection", logo: { url: "https://via.placeholder.com/120x60/000000/FFFFFF?text=DORCHESTER", alt: "DORCHESTER" } },
  { name: "Fairmont HOTELS & RESORTS", logo: { url: "https://via.placeholder.com/120x60/000000/FFFFFF?text=FAIRMONT", alt: "FAIRMONT" } },
  { name: "One&Only RESORTS", logo: { url: "https://via.placeholder.com/120x60/000000/FFFFFF?text=ONE&ONLY", alt: "ONE&ONLY" } },
  { name: "ST REGIS", logo: { url: "https://via.placeholder.com/120x60/000000/FFFFFF?text=ST+REGIS", alt: "ST REGIS" } },
];

const defaultDestinations = [
  {
    name: "Singita Castleton",
    location: "Greater Kruger, South Africa",
    image: { url: "https://picsum.photos/seed/castleton/800/600", alt: "Singita Castleton" }
  },
  {
    name: "Palace Hotel",
    location: "Europe",
    image: { url: "https://picsum.photos/seed/palace/800/600", alt: "Palace Hotel" }
  },
  {
    name: "Taj Palace",
    location: "India",
    image: { url: "https://picsum.photos/seed/taj/800/600", alt: "Taj Palace" }
  }
];

export default function HotelBrands({ data }: HotelBrandsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  const [brandLogosRef, brandLogosApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [hotelBrands, setHotelBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Fetch hotel brands from database
  useEffect(() => {
    const fetchHotelBrands = async () => {
      try {
        setLoading(true);
        const brands = await getBrands();
        // Get brands that have logos
        const brandsWithLogos = brands.filter(brand => brand.logo);
        setHotelBrands(brandsWithLogos);
      } catch (error) {
        console.error('Error fetching hotel brands:', error);
        // Fallback to empty array if fetch fails
        setHotelBrands([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelBrands();
  }, []);

  // Auto-scroll for brand logos carousel
  useEffect(() => {
    if (!brandLogosApi) return;

    const autoScroll = () => {
      brandLogosApi.scrollNext();
    };

    const interval = setInterval(autoScroll, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [brandLogosApi]);

  // Fallback to hardcoded content if no data is provided
  const sectionData = data || {
    title: "Where You Stay, Matters",
    subtitle: "More than accommodation, these are destinations in their own right",
    description: "At Luxufe, we curate hotels with the same care we give to every journey. From iconic city landmarks to secluded hideaways, each property is chosen for its character, service, and ability to enhance your overall experience.",
    brandLogos: defaultBrands,
    destinations: defaultDestinations
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className=" mx-auto ">
        {/* Text Content */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arpona font-bold text-gray-800 mb-4 md:mb-6">
            {sectionData.title}
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl max-w-xl mx-auto font-arpona font-bold text-gray-600 mb-6 md:mb-8">
            {sectionData.subtitle}
          </h3>
          <p className="max-w-xl mx-auto text-sm md:text-base lg:text-sm font-inter font-bold text-gray-700 leading-relaxed">
            {sectionData.description}
          </p>
        </div>

        {/* Brand Logos - Auto-scrolling Carousel */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <div ref={brandLogosRef} className="overflow-hidden">
            <div className="flex">
              {loading ? (
                // Loading skeleton
                Array.from({ length: 10 }).map((_, index) => (
                  <div key={`skeleton-${index}`} className="flex-shrink-0 mx-4 md:mx-6 lg:mx-8">
                    <div className="h-8 md:h-10 lg:h-12 w-20 md:w-24 lg:w-32 bg-gray-200 animate-pulse rounded"></div>
                  </div>
                ))
              ) : hotelBrands.length > 0 ? (
                // Real hotel brand logos from database
                hotelBrands.map((brand, index) => {
                  const brandSlug = brandNameToSlug(brand.name);
                  return (
                    <div key={brand.id} className="flex-shrink-0 mx-4 md:mx-6 lg:mx-8">
                      <Link href={`/brand/${brandSlug}`} className="block">
                        <img 
                          src={brand.logo} 
                          alt={brand.name}
                          className="h-10 md:h-14 lg:h-18 w-auto opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                          onError={(e) => {
                            // Fallback to a placeholder or hide the image if it fails to load
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </Link>
                    </div>
                  );
                })
              ) : (
                // Fallback to hardcoded brands if no data from database
                sectionData.brandLogos.map((brand, index) => (
                  <div key={index} className="flex-shrink-0 mx-4 md:mx-6 lg:mx-8">
                    <img 
                      src={brand.logo.url} 
                      alt={brand.logo.alt}
                      className="h-8 md:h-10 lg:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {sectionData.destinations.map((destination, index) => (
                <div className="flex-[0_0_auto] min-w-0" key={index}>
                  <div className="relative mx-2 md:mx-4 lg:mx-6">
                    <div className="relative overflow-hidden">
                      <img 
                        src={destination.image.url} 
                        alt={destination.image.alt}
                        className="w-[300px] md:w-[400px] lg:w-[1000px] h-[200px] md:h-[250px] lg:h-[650px] object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                        <h4 className="text-white font-arpona text-lg md:text-xl lg:text-2xl mb-1">
                          {destination.name}
                        </h4>
                        <p className="text-white/90 font-inter text-sm md:text-base">
                          {destination.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-55 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-3 md:p-8 shadow-lg hover:bg-white transition-colors z-10"
          >
            <img src="/luxufe-icon-slider-arrow-dark.svg" alt="Arrow left" className="h-4 w-4 md:h-7 md:w-7 text-gray-800" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-55 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-3 md:p-8 shadow-lg hover:bg-white transition-colors z-10"
          >
            <img src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" className="h-4 w-4 md:h-7 md:w-7 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
} 