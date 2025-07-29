import { Search } from "lucide-react";
import React from "react";

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
const currentPage = 1;
const resultsPerPage = 3;
const totalPages = Math.ceil(totalResults / resultsPerPage);

export default function HotelGrid() {
  return (
    <section className="flex-1 bg-[#f7f7fa] min-h-screen">
      {/* Search */}
      <div className="border-b-2 border-gray-300 px-30  py-6">
        <h3 className="text-xs font-inter font-bold text-gray-500  tracking-widest">SEARCH</h3>
        <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 bg-transparent outline-none text-xs font-inter font-bold text-gray-500"
          />
          <button className="ml-2 bg-[#23263a] text-white rounded-full p-2 flex items-center justify-center">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="mb-6 text-gray-400 text-sm font-inter font-bold px-30 py-6">Showing 3 of 10 Results</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 px-30">
        {offers.map((offer, idx) => (
          <div key={idx} className="bg-white shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-64 w-full">
              <img src={offer.image} alt="Offer" className="w-full h-full object-cover" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-full z-10">
                <img src={offer.logo} alt="Brand Logo" className="h-10 bg-white/80 px-4 py-2 rounded max-w-[140px] object-contain shadow" />
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center justify-between px-4 py-2">
              <div className="text-center mb-4">
                <p className="text-lg font-inter font-bold w-3/5 mx-auto text-[#23263a] my-4">{offer.description}</p>
                <p className="text-xs text-gray-500 font-inter font-bold mb-4">{offer.date}</p>
              </div>
              <button className="w-full bg-[#23263a] text-white font-inter font-bold text-xs py-4 rounded-none flex items-center justify-center gap-2 hover:bg-black transition mb-2">
                MORE INFO <span className="ml-2">&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center items-center gap-8 my-8 text-gray-500 font-inter font-bold text-xs">
        <button className="hover:underline" disabled={currentPage === 1}>&lt; Previous</button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-2 ${i + 1 === currentPage ? "text-[#23263a] font-bold" : ""}`}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
        <button className="hover:underline" disabled={currentPage === totalPages}>Next &gt;</button>
      </div>
    </section>
  );
} 