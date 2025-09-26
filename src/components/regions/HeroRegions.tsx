import React from "react";
import { MapPin, Building2, BookOpen } from "lucide-react";
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
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden mb-10">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80"
        alt="Africa Landscape"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Content */}
      <div className="relative z-20 flex items-center justify-between h-full w-full max-w-7xl mx-auto px-8">
        <div className="flex-1">
          <div className="mt-24">
            <div className="text-white text-sm mb-4 font-inter opacity-80">
              Home &gt; Destinations &gt; Regions &gt; {continentName}
            </div>
            <h1 className="text-5xl md:text-7xl font-arpona text-white font-bold mb-4 flex items-center gap-4">
              Discover <span className="font-bellarina text-5xl md:text-7xl">{continentName}</span>
            </h1>
            <p className="text-lg md:text-2xl text-white font-inter mb-8 max-w-2xl">
              From iconic landscapes to legendary hospitality, {continentName} redefines luxury through experience
            </p>
            {/* Stats Row */}
            <div className="flex items-center gap-8 text-white text-base md:text-lg font-inter font-semibold mb-2">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" /> {continentData?.countryCount || 0} Countries
              </span>
              <span className="flex items-center gap-2">
                <Building2 className="w-5 h-5" /> {continentData?.hotelCount || 0} Properties
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> 0 Itineraries
              </span>
            </div>
          </div>
        </div>
        {/* Continent SVG */}
        {continentSVG && (
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={continentSVG}
              alt={`${continentName} outline`}
              width={400}
              height={500}
              className="opacity-90"
            />
          </div>
        )}
      </div>
      {/* Bottom Navigation Row */}
      <nav className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full z-30 ">
        <div className="bg-white flex justify-center items-center gap-8 py-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#23263a] font-inter font-semibold text-sm px-2 transition-colors hover:text-[#6c6f7b]"
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