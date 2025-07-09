import React from "react";

export default function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white text-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
      <div className="relative z-10 p-4 flex flex-col items-center justify-center w-full">
        <p className="text-3xl md:text-4xl mb-6 font-bellarina" style={{fontFamily: 'Bellarina, serif'}}>Your journey, your way</p>
        <h1 className="text-4xl md:text-6xl font-arpona font-light mb-6 leading-tight">
          Tailor-made Travel,<br />
          Designed Around You
        </h1>
        <p className="mt-2 max-w-xl mx-auto font-inter text-lg font-bold">
          Discover journeys that begin with your vision and end in<br />unforgettable experiences
        </p>
      </div>
    </div>
  );
} 