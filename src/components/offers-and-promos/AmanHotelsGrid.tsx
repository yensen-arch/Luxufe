"use client";
import React, { useState } from "react";

// Dummy data for Aman hotels
const hotels = [
  {
    name: "Amangiri",
    location: "CANYON POINT, UTAH · USA",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Blending into untouched red-rock country on over 900 acres of the Colorado Plateau, Amangiri and its satellite, Camp Sarika, reflect dual aspects of this ancient desert landscape.",
  },
  {
    name: "Aman New York",
    location: "NEW YORK · USA",
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Manhattan’s landmark Crown Building is reimagined as Aman New York, where the city’s original architectural splendour and Aman’s harmonious design language collide...",
  },
  {
    name: "Amanera",
    location: "PLAYA GRANDE · DOMINICAN REPUBLIC",
    images: [
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Backed by jungle, fronted by a sweep of Atlantic Ocean, Amanera enjoys a panoramic clifftop perch on the Dominican Republic’s pristine north coast beaches.",
  },
  {
    name: "Amangani",
    location: "JACKSON HOLE · USA",
    images: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "In the foothills of the Tetons, near the year-round mountain resort of Jackson Hole, Amangani looks out across the peaks and plains of the Snake River Valley.",
  },
];

const totalResults = 10;
const resultsPerPage = 3;
const totalPages = Math.ceil(totalResults / resultsPerPage);

function AmanLogo() {
  return (
    <svg width="80" height="28" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="22" textAnchor="middle" fontFamily="Arpona, serif" fontSize="22" fill="#23263a" letterSpacing="10">AMAN</text>
      <rect x="18" y="7" width="44" height="2" rx="1" fill="#23263a" />
    </svg>
  );
}

function HotelCard({ hotel }: { hotel: typeof hotels[0] }) {
  return (
    <div className="bg-white shadow-lg rounded-none overflow-hidden flex flex-col mb-12">
      {/* Image collage */}
      <div className="grid grid-cols-2 grid-rows-2 h-64 w-full">
        {hotel.images.map((img, i) => (
          <img key={i} src={img} alt={hotel.name} className="object-cover w-full h-full" />
        ))}
      </div>
      {/* Content */}
      <div className="flex flex-col gap-2 p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-arpona text-[#23263a] font-normal mb-0">{hotel.name}</h3>
          <AmanLogo />
        </div>
        <div className="text-xs font-inter text-gray-500 tracking-widest mb-2">{hotel.location}</div>
        <hr className="my-2 border-gray-200" />
        <div className="text-sm font-inter text-gray-500 mb-4">{hotel.description}</div>
        <button className="w-full border-2 border-gray-400 font-inter font-bold text-[#23263a] text-xs py-4 flex items-center justify-center gap-2 hover:bg-gray-100 transition mb-2 tracking-widest">
          EXPLORE HOTEL <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
}

export default function AmanHotelsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedHotels = hotels.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);

  return (
    <section className="flex-1 bg-[#f7f7fa] min-h-screen px-0 md:px-10">
      {/* Header */}
      <div className="pt-16 pb-2 text-center">
        <h1 className="text-5xl md:text-6xl font-arpona text-[#23263a] font-normal mb-2">Aman Hotels, Lodges & more</h1>
        <div className="text-lg font-inter text-gray-500 mb-10">Handpicked for their setting, silence, and soul</div>
      </div>
      {/* Search and filters row */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-4 md:px-0 mb-10">
        <div className="flex-1 flex items-center bg-white border border-gray-200 rounded-full px-6 py-4 shadow-md max-w-xl mx-auto md:mx-0">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 bg-transparent outline-none text-base font-inter text-gray-500"
          />
          <button className="ml-4 bg-[#23263a] text-white rounded-full p-3 flex items-center justify-center shadow">
            <span className="text-xl">&#8594;</span>
          </button>
        </div>
        <div className="flex-1 flex items-center gap-4 justify-center md:justify-start w-full">
          <button className="bg-gray-200 text-gray-600 rounded-full px-6 py-2 text-xs font-inter font-bold flex items-center gap-2">
            Caribbean Islands <span className="ml-1">×</span>
          </button>
          <button className="text-xs font-inter font-bold text-gray-400 hover:underline">Clear all filters</button>
        </div>
      </div>
      {/* Main content row */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-[#f7f7fa] border-r-2 border-gray-200 px-6 pb-10">
          <div className="mb-10">
            <h3 className="text-2xl font-arpona text-[#23263a] mb-6">Type of travel</h3>
            <div className="flex flex-wrap gap-3 mb-10">
              {["Family Friendly", "Adults Only", "Villas", "Beach & Resorts", "Safari & Wilderness", "Ski Resorts", "Sport & Hobbies", "Hotels", "Food & Wine"].map((type) => (
                <button key={type} className="bg-gray-200 text-gray-600 rounded-full px-5 py-2 text-xs font-inter font-bold flex items-center gap-2">{type}</button>
              ))}
            </div>
            <h3 className="text-2xl font-arpona text-[#23263a] mb-6">Region</h3>
            <div className="flex flex-wrap gap-3">
              {["Australia & New Zealand", "Caribbean Islands", "Central America & Mexico", "Asia"].map((region) => (
                <button key={region} className="bg-gray-200 text-gray-600 rounded-full px-5 py-2 text-xs font-inter font-bold flex items-center gap-2">{region}</button>
              ))}
            </div>
          </div>
        </aside>
        {/* Grid and results */}
        <div className="flex-1 px-2 md:px-10">
          <div className="mb-6 text-gray-400 text-sm font-inter font-bold">Showing {paginatedHotels.length} of {totalResults} Results</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {paginatedHotels.map((hotel, idx) => (
              <HotelCard key={hotel.name + idx} hotel={hotel} />
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center gap-8 my-8 text-gray-500 font-inter font-bold text-xs">
            <button className="hover:underline" disabled={currentPage === 1} onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>&lt; Previous</button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`px-2 ${i + 1 === currentPage ? "text-[#23263a] font-bold" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
            <button className="hover:underline" disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}>Next &gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
} 