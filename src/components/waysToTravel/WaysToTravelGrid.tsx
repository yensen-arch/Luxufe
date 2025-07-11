import React from "react";
import Image from "next/image";

const journeys = [
  {
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    logo: "https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png",
    logoSub: "LUXURY CRUISES",
    title: "Luxury Cruises",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: true,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png",
    logoSub: "LUXURY TRAIN JOURNEYS",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png",
    logoSub: "LUXURY TRAIN JOURNEYS",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png",
    logoSub: "LUXURY TRAIN JOURNEYS",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },{
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png",
    logoSub: "LUXURY TRAIN JOURNEYS",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },{
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png",
    logoSub: "LUXURY TRAIN JOURNEYS",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },
  // Add more cards as needed
];

export default function WaysToTravelGrid() {
  return (
    <section className="bg-white py-24 flex flex-col items-center">
      {/* Heading Section */}
      <div className="mb-16 text-center">
        <p className="text-3xl md:text-5xl font-bellarina mb-2">Ways to Travel</p>
        <h2 className="text-5xl md:text-6xl font-arpona font-bold mb-6">Your journey, your way.</h2>
        <p className="text-lg md:text-md font-inter font-bold text-[#23263a] max-w-2/5 mx-auto">
          Travel is personal. We all have different wants, needs, and desires when we consider where, when, and how you travel. Let Luxufe tailor your next travel experience for you.
        </p>
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
                <div className="flex flex-col items-center mt-auto justify-center">
                  <Image src={j.logo} alt={j.title} width={150} height={150} />
                  <span className="text-white text-[0.7rem] font-bold font-inter tracking-widest my-2 drop-shadow-lg">{j.logoSub}</span>
                </div>
              </div>
            </div>
            {/* Lower Section */}
            <div className={`flex flex-col flex-1 p-8 ${j.highlight ? "bg-[#17696A] text-white" : "bg-white text-[#23263a]"}`}>
              <h3 className="text-3xl font-arpona font-normal mb-4">{j.title}</h3>
              <p className="text-md font-inter font-bold mb-8">{j.description}</p>
              <button className={`flex items-center gap-2 text-md font-inter font-bold tracking-widest ${j.highlight ? "text-white" : "text-[#17696A]"}`}>
                {j.button} <span className="ml-2">&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 