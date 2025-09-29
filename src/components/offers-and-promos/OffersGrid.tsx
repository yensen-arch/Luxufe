"use client";
import Image from "next/image";
import React, { useState } from "react";
import OfferCard from "./OfferCard";

const offers = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Marriott_logo.svg",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    date: "Book by: 31st March 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Marriott_logo.svg",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    date: "Book by: 31st March 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Marriott_logo.svg",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    date: "Book by: 31st March 2025",
  },
  // Add more dummy offers as needed
];

const totalResults = 10;
const resultsPerPage = 3;
const totalPages = Math.ceil(totalResults / resultsPerPage);

export default function OffersGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <section className="flex-1 bg-gray-100 min-h-screen">
      {/* Search */}
      <div className="border-b-2 border-gray-300 px-30  py-6">
        <h3 className="text-xs font-inter font-bold text-gray-700  tracking-widest">SEARCH</h3>
        <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 bg-transparent outline-none text-xs font-inter font-bold text-gray-400"
          />
          <button className="ml-2 bg-gray-700 text-white rounded-full p-2 flex items-center justify-center">
          <Image src="/luxufe-icon-ai-send-arrow-light.svg" alt="Search" width={16} height={16} className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
      <div className="mb-6 text-gray-400 text-sm font-inter font-bold px-30 py-6">Showing {resultsPerPage} of {totalResults} Results</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 px-30">
        {offers.map((offer, idx) => (
          <OfferCard
            key={idx}
            image={offer.image}
            logo={offer.logo}
            description={offer.description}
            date={offer.date}
          />
        ))}
      </div>
      {/* Pagination - Testimonials Style */}
      <div className="flex justify-center items-center gap-2 my-8 text-xs font-inter w-60 mx-auto">
        {/* Previous Button */}
        <button 
          onClick={handlePrevious}
          className={`${currentPage === 1 ? 'text-gray-400 font-light' : 'text-gray-600 font-bold hover:text-[#23263a]'}`}
          disabled={currentPage === 1}
        >
          &lt; Previous
        </button>
        
        {/* Active Page Number */}
        <span className="text-[#23263a] font-bold">
          {String(currentPage).padStart(2, "0")}
        </span>
        
        {/* Separator Line */}
        <div className="flex-1 h-px bg-gray-400 mx-2" />
        
        {/* Inactive Page Numbers */}
        {Array.from({ length: Math.min(3, totalPages - currentPage) }, (_, i) => {
          const pageNum = currentPage + i + 1;
          if (pageNum <= totalPages) {
            return (
              <span key={pageNum} className="text-gray-400 font-light">
                {String(pageNum).padStart(2, "0")}
              </span>
            );
          }
          return null;
        })}
        
        {/* Next Button */}
        <button 
          onClick={handleNext}
          className={`${currentPage === totalPages ? 'text-gray-400 font-light' : 'text-[#23263a] font-bold hover:text-gray-600'}`}
          disabled={currentPage === totalPages}
        >
          Next &gt;
        </button>
      </div>
    </section>
  );
} 