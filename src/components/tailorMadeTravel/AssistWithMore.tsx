"use client"
import React, { useCallback, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const assistItems = [
  {
    title: "Local & International flights",
    description: "Lorem ipsum dolor sit amet, consetetur",
    imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Travel insurance",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    imageUrl: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Hotel reservations",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
];

export default function AssistWithMore() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? assistItems.length - 1 : prev - 1));
  }, []);

  const scrollNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === assistItems.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <section className="w-full my-24 relative">
      <div className=" mx-auto gap-0 items-center px-4 flex grid grid-cols-12 ">
        {/* Left Side */}
        <div className="md:col-span-9 flex flex-col items-start justify-center h-[100vh] py-12 bg-[#f8f8fa]">
          <div className="mb-4 ml-20">
            <span className="font-bellarina text-6xl text-[#23263a] block mb-2">There for you</span>
            <h2 className="text-6xl font-arpona font-bold text-[#23263a] mb-4 leading-tight">We can assist<br />with more</h2>
            <p className="font-inter text-[#23263a] text-base mb-8 max-w-xs font-bold">
              From flights to hotel reservations, we’ll handle it all so you can relax.
            </p>
            <div className="flex gap-6 mt-4">
              <button
                onClick={scrollPrev}
                className="bg-white rounded-full p-5 shadow-md border border-gray-200 hover:bg-gray-100 transition flex items-center justify-center"
              >
                <ArrowLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button
                onClick={scrollNext}
                className="bg-white rounded-full p-5 shadow-md border border-gray-200 hover:bg-gray-100 transition flex items-center justify-center"
              >
                <ArrowRight className="h-6 w-6 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
        {/* Right Side - Carousel */}
        <div className="flex absolute right-0 top-1/2 -translate-y-1/2">
          <div className="flex gap-8 w-full justify-center">
            {assistItems.slice(currentIndex, currentIndex + 2).map((item, idx) => (
              <div
                key={item.title}
                className="relative w-[420px] h-[420px] bg-white rounded-none overflow-hidden shadow-md flex flex-col justify-end"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="relative z-20 p-6 text-center">
                  <h3 className="text-white text-2xl font-arpona  mb-2 drop-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="text-white text-xs font-inter font-bold drop-shadow-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
    </section>
  );
} 