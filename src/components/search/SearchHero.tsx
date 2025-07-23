import { BookOpen, Building2, MapPin } from "lucide-react";
import React from "react";



export default function SearchHero() {
  return (
    <section className="relative w-full h-[80vh] shadow-lg flex flex-col justify-end">
      {/* Background Image */}
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80"
        alt="Africa Landscape"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full w-full max-w-7xl mx-auto px-8">
        <div className="mt-24">
          <div className="text-white text-sm mb-4 font-inter font-bold text-center opacity-80">
            Home &gt; Destinations &gt; Regions &gt; Africa
          </div>
          <h1 className="text-5xl md:text-7xl font-arpona text-white font-bold mb-4 flex items-center gap-4">
            Luxury Hotels & Stays in <span className="font-bellarina text-5xl md:text-7xl">South Africa</span>
          </h1>
        </div>
      </div>
    </section>
  );
} 