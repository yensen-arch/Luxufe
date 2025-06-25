"use client";
import { useState } from "react";

const shipImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
];
const deckPlanImg = "https://images.unsplash.com/photo-1631727498498-5dd093268aea?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function VesselView() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? shipImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === shipImages.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full border-t border-gray-200 pt-12 pb-20">
      <div className="flex items-center justify-between mb-6 px-2 md:px-0">
        <h2 className="text-3xl md:text-4xl font-arpona font-light text-gray-900">The Ship: Scenic Azure</h2>
        <button className="border border-gray-300 rounded px-6 py-3 font-inter font-bold text-gray-900 flex items-center gap-2 hover:bg-gray-100 transition text-sm md:text-base">
          MORE ABOUT THIS SHIP <span className="text-xl">&rarr;</span>
        </button>
      </div>
      <div className="relative flex justify-center items-center mb-8">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-20 h-20 flex items-center justify-center text-3xl border-2 border-gray-200 hover:bg-gray-50 transition"
          onClick={prev}
          aria-label="Previous image"
        >
          &larr;
        </button>
        <img
          src={shipImages[current]}
          alt="Scenic Azure Ship"
          className="rounded w-full max-w-3xl h-[320px] object-cover"
        />
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-20 h-20 flex items-center justify-center text-3xl border-2 border-gray-200 hover:bg-gray-50 transition"
          onClick={next}
          aria-label="Next image"
        >
          &rarr;
        </button>
      </div>
      <div className="text-2xl font-arpona text-gray-900 mb-4 px-2 md:px-0">Deck Plan</div>
      <div className="flex justify-center">
        <img
          src={deckPlanImg}
          alt="Deck Plan"
          className="max-w-xl w-full h-auto"
        />
      </div>
    </div>
  );
} 