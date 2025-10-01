import React from "react";
import { ArrowRight } from "lucide-react";

interface ItinerariesGridProps {
  data?: {
    subtitle: string;
    title: string;
    description: string;
  };
}

const journeys = [
  {
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Cruises",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: true,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },{
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },{
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },
  // Add more cards as needed
];

export default function ItinerariesGrid({ data }: ItinerariesGridProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayTitle = data?.title || "Ways to Travel with Luxufe";

  return (
    <section className="bg-white py-24 flex flex-col items-center">
      {/* Heading Section */}
      <div className="mb-16 text-center">
        <div className="text-2xl md:text-3xl font-arpona text-gray-600 font-bold mb-30 md:max-w-2/4 mx-auto px-4">
            From iconic destinations to once-in-a-lifetime adventures, every Luxufe journey
            is crafted to match your pace, preferences, and passions. Whether you seek cultural immersion,
            luxury cruising, or private escapes, your next extraordinary journey starts here.
        </div>
        <h2 className="text-4xl md:text-5xl font-arpona font-bold my-6">{displayTitle}</h2>
      </div>
      {/* Grid Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {journeys.map((j, idx) => (
          <div
            key={idx}
            className={`flex flex-col bg-white shadow-lg overflow-hidden transition-all duration-300 ${j.highlight ? "border-t-8 border-[#17696A]" : ""}`}
          >
            {/* Image + Overlay */}
            <div className="relative h-80 w-full">
              <img src={j.image} alt={j.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0  h-full flex flex-col items-center justify-center bg-black/20">
              </div>
            </div>
            {/* Lower Section */}
            <div className={`flex flex-col flex-1 p-8 ${j.highlight ? "bg-[#17696A] text-white" : "bg-white text-[#23263a]"}`}>
              <h3 className="text-3xl font-arpona font-normal mb-4">{j.title}</h3>
              <p className="text-sm font-inter font-bold mb-8 text-gray-500">{j.description}</p>
              <button className={`flex items-center gap-2 text-md font-inter font-bold tracking-widest ${j.highlight ? "text-white" : "text-[#17696A]"}`}>
                {j.button} <span className="ml-2">&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Centered Button */}
      <div className="w-full flex items-center justify-center mt-8">
        <button className="flex items-center justify-center gap-2 text-xs font-inter border-2 border-gray-300 text-gray-600 px-2 my-8 py-3 hover:bg-black hover:text-white transition font-bold tracking-widest">
            MORE WAYS TO JOURNEY WITH LUXUFE <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}