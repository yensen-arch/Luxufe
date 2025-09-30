import React from "react";
import Image from "next/image";

const navLinks = [
  { label: "Overview", href: "#" },
  { label: "Countries", href: "#" },
  { label: "Ways to travel", href: "#" },
  { label: "Information", href: "#" },
];

interface HeroRegionsProps {
  continentName: string;
  continentData?: {
    hotelCount: number;
    countryCount: number;
  };
}

const HeroRegions = ({ continentName, continentData }: HeroRegionsProps) => {
  // Get the appropriate SVG based on continent name
  const getContinentSVG = (continent: string) => {
    const continentLower = continent.toLowerCase();
    if (continentLower === 'africa') {
      return '/luxufe-region-africa.svg';
    } else if (continentLower === 'europe') {
      return '/luxufe-region-Europe.svg';
    }
    return null;
  };

  const continentSVG = getContinentSVG(continentName);

  return (
    <section className="relative w-full h-[100vh] md:h-[110vh] flex items-center justify-center overflow-hidden mb-6 md:mb-10 shadow-lg">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80"
        alt="Africa Landscape"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Content */}
      <div className="md:pt-0 pt-62 relative z-20 flex flex-col md:flex-row items-center justify-between h-full w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex-1 w-full md:w-auto">
          <div className="px-2 md:px-0">
            <div className="text-white text-xs font-bold mb-4 md:mb-4 font-inter">
              Home &gt; Destinations &gt; Regions &gt; {continentName}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-arpona text-white mb-4 md:mb-4 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
              <span className="font-bold">Discover </span><span className="font-bellarina text-4xl md:text-5xl lg:text-7xl"> {continentName}</span>
            </h1>
            <p className="text-base md:text-lg lg:text-md font-bold text-white font-inter mb-8 md:mb-8 max-w-xl leading-relaxed">
              From iconic landscapes to legendary hospitality, {continentName} redefines luxury through experience
            </p>
            {/* Stats Row */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 text-white text-base md:text-base lg:text-lg font-inter font-semibold mb-4">
              <span className="flex items-center gap-3">
                <Image src="/luxufe-icon-location-pin-white.svg" alt="Country" width={16} height={16} className="md:w-[15px] md:h-[15px]" /> {continentData?.countryCount || 0} Countries
              </span>
              <span className="flex items-center gap-3">
                <Image src="/luxufe-icon-destination-properties-white.svg" alt="Property" width={18} height={18} className="md:w-[18px] md:h-[18px]" /> {continentData?.hotelCount || 0} Properties
              </span>
              <span className="flex items-center gap-3">
                <Image src="/luxufe-icon-destinations-itineraries-white.svg" alt="Itinerary" width={18} height={18} className="md:w-[18px] md:h-[18px]" /> 0 Itineraries
              </span>
            </div>
          </div>
        </div>
        {/* Continent SVG */}
        {continentSVG && (
          <div className="hidden md:block">
            <Image
              src={continentSVG}
              alt={`${continentName} outline`}
              width={400}
              height={500}
              className="opacity-50"
            />
          </div>
        )}
      </div>
      {/* Bottom Navigation Row */}
      <nav className="absolute hidden md:block left-1/2 -translate-x-1/2 bottom-0 w-full z-30">
        <div className="bg-white flex flex-row justify-center items-center gap-4 md:gap-8 py-4 md:py-6 shadow-lg font-bold overflow-x-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#23263a] font-inter text-sm md:text-md px-2 transition-colors hover:text-[#6c6f7b] whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default HeroRegions; 