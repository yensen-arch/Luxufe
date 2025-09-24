import Image from "next/image";
import { Heart } from "lucide-react";
import { LandItinerary } from "@/lib/database";

interface HeroProps {
  itinerary: LandItinerary;
}

export default function Hero({ itinerary }: HeroProps) {
  // Parse gallery string to get first image for hero
  const galleryImages = itinerary.gallery ? JSON.parse(itinerary.gallery.replace(/'/g, '"')) : [];
  const heroImage = galleryImages.length > 0 ? galleryImages[0] : "/placeholder.svg";

  return (
    <>
      <section className="relative w-full flex flex-col justify-end h-screen">
        <div className="w-full ">
          {/* Background image */}
          <Image
            src={heroImage}
            alt={itinerary.itinerary_name}
            fill
            className="object-cover object-center opacity-90 "
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Content */}
          <div className="relative z-10 px-4 md:px-10 pb-6 md:pb-10 max-w-7xl mx-auto w-full">
            {/* Breadcrumb */}
            <div className="text-white text-xs font-inter font-bold mb-2 opacity-80">
              Home &gt; Journeys &gt; Land
            </div>
            {/* Title */}
            <h1 className="text-white text-3xl md:text-6xl font-arpona font-light mb-6 md:mb-8 leading-tight">
              {itinerary.itinerary_name}
            </h1>
          </div>
        </div>
      </section>
      {/* Details Section */}
      <section className="w-full bg-white  z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-10 py-6 md:py-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-30 w-full md:w-auto mb-4 md:mb-0">
            {/* Destinations */}
            <div>
              <div className="text-xs text-gray-500 font-bold mb-1">DESTINATIONS</div>
              <div className="flex items-center gap-2">
                <span className="text-sm md:text-md font-inter font-bold">{itinerary.destinations}</span>
                <span className="text-gray-400 cursor-pointer" title="View all destinations">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#A0AEC0" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#A0AEC0">i</text></svg>
                </span>
              </div>
            </div>
            {/* Duration */}
            <div>
              <div className="text-xs text-gray-500 font-semibold mb-1">DURATION</div>
              <div className="text-sm md:text-md font-inter font-bold">{itinerary.duration}</div>
            </div>
            {/* Price */}
            <div>
              <div className="text-xs text-gray-500 font-semibold mb-1">PRICE</div>
              <div className="text-sm md:text-md font-inter font-bold">From $18,550 per person</div>
            </div>
            {/* Journey Type */}
            <div>
              <div className="text-xs text-gray-500 font-semibold mb-1">JOURNEY TYPE</div>
              <div className="text-sm md:text-md font-inter font-bold">Land Journey</div>
            </div>
          </div>
          <button className="bg-[#A5C8CE] flex items-center gap-2 text-white text-base md:text-lg cursor-pointer font-arpona font-semibold px-6 md:px-8 py-2 md:py-3 shadow hover:bg-[#8bb3b8] transition w-full md:w-auto">
            <Heart className="text-white" />
            Add to Wishlist
          </button>
        </div>
      </section>
    </>
  );
} 