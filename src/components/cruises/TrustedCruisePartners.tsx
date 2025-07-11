import React from "react";
import { Bed, Briefcase, ArrowRight } from "lucide-react";

const partners = [
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    logo: (
      <span className="text-lg font-arpona font-bold tracking-widest">SILVERSEA</span>
    ),
    name: "SILVERSEA",
    suites: 50,
    itineraries: 12,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: (
      <span className="text-lg font-arpona font-bold tracking-widest">PONANT</span>
    ),
    name: "PONANT",
    suites: 50,
    itineraries: 12,
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    logo: (
      <span className="text-lg font-arpona font-bold tracking-widest">AK</span>
    ),
    name: "ABERCROMBIE & KENT",
    suites: 50,
    itineraries: 12,
  },
];

export default function TrustedCruisePartners() {
  return (
    <section className="py-24 bg-[#f7f7f8]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="font-bellarina text-3xl md:text-5xl text-[#23263a] mb-4">Trusted Cruise Partners</h3>
        <h2 className="text-3xl md:text-4xl font-arpona font-bold text-gray-600 mb-12">
          We collaborate with the world’s most exceptional<br />cruise lines and vessels
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {partners.map((partner, idx) => (
            <div key={idx} className="bg-white shadow p-2 flex flex-col items-center border-4 border-white transition-all">
              <img src={partner.image} alt={partner.name} className="w-full h-56 object-cover  mb-6" />
              <div className="bg-white px-2 py-2 shadow -mt-10 mb-6 z-10 relative flex items-center justify-center min-w-[180px]">
                {partner.logo}
              </div>
              <hr className="w-full my-4 border-gray-200" />
              <div className="flex justify-center gap-8 w-full">
                <div className="flex items-center gap-2 text-[#23263a] font-inter font-bold text-xs">
                  <Bed className="w-5 h-5" />
                  {partner.suites} suites
                </div>
                <div className="flex items-center gap-2 text-[#23263a] font-inter font-bold text-xs">
                  <Briefcase className="w-5 h-5" />
                  {partner.itineraries} Itineraries
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button className="flex items-center gap-2 border border-gray-400 px-8 py-4 bg-[#f7f7f8] text-[#23263a] font-inter font-bold text-xs tracking-widest hover:bg-gray-100 transition-all">
            ALL CRUISE PARTNERS <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
} 