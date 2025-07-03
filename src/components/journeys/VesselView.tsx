"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const shipImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
];
const deckPlanImg = "https://images.unsplash.com/photo-1631727498498-5dd093268aea?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function VesselView() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const changeImage = (nextIdx: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(nextIdx);
      setFade(true);
    }, 250);
  };

  const prev = () => changeImage(current === 0 ? shipImages.length - 1 : current - 1);
  const next = () => changeImage(current === shipImages.length - 1 ? 0 : current + 1);

  return (
    <div className="w-4/5 py-12 px-12">
      <div className="flex items-center justify-between mb-6 px-2 md:px-0">
        <h2 className="text-3xl font-arpona font-bold text-gray-900">The Ship: Scenic Azure</h2>
        <button className="border border-gray-300 px-6 py-2 font-inter font-bold text-gray-900 flex items-center gap-2 hover:bg-gray-100 transition text-xs">
          MORE ABOUT THIS SHIP <span className="text-base">&rarr;</span>
        </button>
      </div>
      <div className="relative flex justify-center items-center mb-8">
        <button
          className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-20 h-20 flex items-center justify-center text-3xl border-2 border-gray-200 hover:bg-gray-50 transition"
          onClick={prev}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <img
          src={shipImages[current]}
          alt="Scenic Azure Ship"
          className={`w-full max-w-3xl h-[320px] object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        />
        <button
          className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-20 h-20 flex items-center justify-center text-3xl border-2 border-gray-200 hover:bg-gray-50 transition"
          onClick={next}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="text-2xl font-arpona text-gray-900 mb-4 px-2 md:px-0">Deck Plan</div>
      <div className="flex justify-center">
        <img
          src={deckPlanImg}
          alt="Deck Plan"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
} 