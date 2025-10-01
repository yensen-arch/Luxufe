"use client";
import { useState } from "react";
import Image from "next/image";
const voyageData = [
  {
    titlePart1: "Unforgettable voyages,",
    description:
      "Set sail on a journey where every detail is designed for your ultimate comfort and discovery. From elegant ocean liners to intimate yacht charters, Luxufe curates the most exclusive cruise experiences, blending luxurious accommodation with breathtaking destinations.",
    imageUrl: "https://picsum.photos/seed/yacht-luxury/1200/900",
    buttonText: "LUXURY CRUISES",
  },
  {
    titlePart1: "Exclusive rail journeys,",
    description:
      "Embark on a classic adventure aboard some of the world's most iconic trains. Traverse stunning landscapes in unparalleled comfort, enjoying gourmet dining and exquisite service. A journey by rail is a return to the golden age of travel.",
    imageUrl: "https://picsum.photos/seed/luxury-train/1200/900",
    buttonText: "CLASSIC TRAINS",
  },
  {
    titlePart1: "Private jet charters,",
    description:
      "Experience the pinnacle of convenience and luxury with our private jet charters. Skip the queues and travel on your own schedule to any destination worldwide. Enjoy personalized service and unmatched comfort from takeoff to landing.",
    imageUrl: "https://picsum.photos/seed/private-jet/1200/900",
    buttonText: "PRIVATE JETS",
  },
];

export default function SetSail() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? voyageData.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === voyageData.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const currentVoyage = voyageData[currentIndex];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center lg:justify-start min-h-[650px]">
          {/* Image Section */}
          <div className="w-3/6 h-full z-10 ml-20">
            <div className="relative overflow-hidden shadow-2xl">
              <Image
                src={
                  currentVoyage.imageUrl ||
                  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                }
                width={1200}
                height={900}
                alt={currentVoyage.titlePart1}
                className={`w-full h-[600px] object-cover transition-all duration-700 ease-in-out ${
                  isTransitioning
                    ? "opacity-0 scale-105"
                    : "opacity-100 scale-100"
                }`}
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-10 hidden lg:flex">
            <button
              onClick={goToPrevious}
              className="bg-white rounded-full p-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              disabled={isTransitioning}
            >
              <Image
                src="/luxufe-icon-slider-arrow-dark.svg"
                alt="Arrow left"
                width={24}
                height={24}
                className="h-3 w-3 md:h-7 md:w-7 text-gray-800"
              />
            </button>
            <button
              onClick={goToNext}
              className="bg-white rounded-full p-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              disabled={isTransitioning}
            >
              <Image
                src="/luxufe-icon-button-arrow-dark.svg"
                alt="Arrow right"
                width={24}
                height={24}
                className="h-4 w-4 md:h-7 md:w-7 text-gray-800"
              />
            </button>
          </div>

          {/* Content Section */}
          <div className="bg-gray-100 w-6/8 mt-8 h-[120vh] lg:mt-0 lg:absolute lg:right-0 p-12">
            <div
              className={`transition-all duration-700 ease-in-out  ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <div className="w-1/2 ml-auto md:mt-40">
                <div className="inline-flex bg-white items-center justify-center shadow-lg w-18 h-18 border border-gray-300 rounded-full mb-8">
                  <Image
                    src="/luxufe-travel-style-cruises.svg"
                    alt="Cruises"
                    width={28}
                    height={28}
                    className="h-8 w-8 text-gray-600"
                  />
                </div>

                <h2 className="text-4xl ml-auto lg:text-4xl font-bold leading-tight mb-8 text-gray-900 font-arpona">
                  {currentVoyage.titlePart1}
                  <br />
                  unparalleled
                </h2>

                <p className="text-lg leading-relaxed mb-10 max-w-lg font-inter font-bold">
                  {currentVoyage.description}
                </p>

                <button className="group inline-flex items-center gap-3 text-xs font-semibold tracking-widest border-2 border-gray-300 px-8 py-4 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 font-inter font-bold">
                  {currentVoyage.buttonText}
                  <Image
                    src="/luxufe-icon-button-arrow-dark.svg"
                    alt="Arrow right"
                    width={24}
                    height={24}
                    className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
