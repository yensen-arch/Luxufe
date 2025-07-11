import React from "react";

const offers = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Marriott_logo.svg",
    title: "AMAN",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    date: "Book by: 31st March 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Marriott_logo.svg",
    title: "AMAN",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    date: "Book by: 31st March 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Marriott_logo.svg",
    title: "AMAN",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    date: "Book by: 31st March 2025",
  },
  // Add more dummy offers as needed
];

const totalResults = 10;
const currentPage = 1;
const resultsPerPage = 3;
const totalPages = Math.ceil(totalResults / resultsPerPage);

export default function OffersGrid() {
  return (
    <section className="flex-1 bg-[#f7f7fa] p-12 min-h-screen">
      <div className="mb-6 text-gray-400 text-sm font-inter font-bold">Showing 3 of 10 Results</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {offers.map((offer, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <div className="relative h-64 w-full">
              <img src={offer.image} alt="Offer" className="w-full h-full object-cover" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-full z-10">
                <img src={offer.logo} alt="Brand Logo" className="h-10 bg-white/80 px-4 py-2 rounded max-w-[140px] object-contain shadow" />
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center justify-between px-8 py-8">
              <div className="text-center mb-4">
                <h3 className="text-3xl font-arpona font-bold text-[#23263a] mb-4">{offer.title}</h3>
                <p className="text-lg font-inter text-[#23263a] mb-2">{offer.description}</p>
                <p className="text-xs text-gray-400 font-inter font-bold mb-4">{offer.date}</p>
              </div>
              <button className="w-full bg-[#23263a] text-white font-inter font-bold text-md py-4 rounded-none flex items-center justify-center gap-2 hover:bg-black transition mb-2">
                MORE INFO <span className="ml-2">&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center items-center gap-8 mt-8 text-gray-400 font-inter font-bold text-lg">
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