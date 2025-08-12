"use client";
import React, { useState, useCallback } from "react";
import {  Bed, Bath, Mountain, Wifi, Coffee, Wine } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface RoomModalProps {
  room: {
    id: string;
    room_name: string;
    accommodation_type: string;
    amenities: string;
    description: string;
    features: string;
    room_size?: string | null;
    occupancy?: string | null;
    bed?: string | null;
    bath?: string | null;
    view?: string | null;
    floors?: string | null;
    hotel_name: string;
  };
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const RoomModal = ({ room, images, isOpen, onClose }: RoomModalProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Parse features into a more readable format
  const parseFeatures = (features: string) => {
    return features.split(',').map(feature => feature.trim());
  };

  // Parse amenities into categories
  const parseAmenities = (amenities: string) => {
    const amenityText = amenities.toLowerCase();
    const categories = {
      wifi: amenityText.includes('wifi'),
      coffee: amenityText.includes('coffee') || amenityText.includes('tea'),
      wine: amenityText.includes('wine') || amenityText.includes('champagne') || amenityText.includes('bar'),
      spa: amenityText.includes('spa') || amenityText.includes('onsen') || amenityText.includes('bath'),
      view: amenityText.includes('view') || amenityText.includes('garden') || amenityText.includes('mountain'),
      kitchen: amenityText.includes('kitchen') || amenityText.includes('dining'),
      tv: amenityText.includes('tv'),
      safe: amenityText.includes('safe'),
      private: amenityText.includes('private') || amenityText.includes('personal')
    };
    return categories;
  };

  const features = parseFeatures(room.features);
  const amenities = parseAmenities(room.amenities);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-7xl w-full max-h-[90vh] overflow-y-auto rounded-none">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b-2 border-gray-300">
          <div>
            <h2 className="text-3xl font-arpona font-bold text-gray-800">{room.room_name}</h2>
            <p className="text-lg font-inter text-gray-600 mt-1">{room.accommodation_type}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <img src="/luxufe-icon-close-dark.svg" alt="Close" width={20} height={20} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Image Carousel */}
          <div className="lg:w-2/3 p-6">
            <div className="relative">
              <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                  {images.map((image, index) => (
                    <div className="flex-[0_0_100%] min-w-0" key={index}>
                      <div className="relative">
                        <img 
                          src={image} 
                          alt={`${room.room_name} - Image ${index + 1}`}
                          className="w-full h-[400px] lg:h-[500px] object-cover"
                        />
                        <div className="absolute bottom-4 right-4  text-black px-3 py-1 text-sm font-inter">
                          {index + 1} / {images.length}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={scrollPrev}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full py-6 px-5 shadow-lg hover:bg-white transition-colors z-10"
              >
                <img src="/luxufe-icon-slider-arrow-dark.svg" alt="Left" width={20} height={20} />
              </button>
              <button
                onClick={scrollNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full py-6 px-5 shadow-lg hover:bg-white transition-colors z-10"
              >
                <img src="/luxufe-icon-button-arrow-dark.svg" alt="Right" width={20} height={20} />
              </button>
            </div>
          </div>

          {/* Room Details */}
          <div className="lg:w-1/3 p-6 bg-gray-50 border-l-2 border-gray-300">
            {/* Room Specifications */}
            <div className="mb-8">
              <h3 className="text-xl font-arpona font-bold text-gray-800 mb-4">Room Specifications</h3>
              <div className="space-y-3">
                {room.room_size && (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#23263a] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">㎡</span>
                    </div>
                    <div>
                      <p className="text-sm font-inter text-gray-600">Size</p>
                      <p className="font-inter font-bold text-gray-800">{room.room_size}</p>
                    </div>
                  </div>
                )}
                {room.occupancy && (
                  <div className="flex items-center gap-3">
                    <img src="/luxufe-icon-user-dark.svg" alt="User" width={20} height={20} />
                    <div>
                      <p className="text-sm font-inter text-gray-600">Occupancy</p>
                      <p className="font-inter font-bold text-gray-800">{room.occupancy}</p>
                    </div>
                  </div>
                )}
                {room.bed && (
                  <div className="flex items-center gap-3">
                    <Bed className="w-8 h-8 text-[#23263a]" />
                    <div>
                      <p className="text-sm font-inter text-gray-600">Bed Configuration</p>
                      <p className="font-inter font-bold text-gray-800">{room.bed}</p>
                    </div>
                  </div>
                )}
                {room.bath && (
                  <div className="flex items-center gap-3">
                    <Bath className="w-8 h-8 text-[#23263a]" />
                    <div>
                      <p className="text-sm font-inter text-gray-600">Bathroom</p>
                      <p className="font-inter font-bold text-gray-800">{room.bath}</p>
                    </div>
                  </div>
                )}
                {room.view && (
                  <div className="flex items-center gap-3">
                    <Mountain className="w-8 h-8 text-[#23263a]" />
                    <div>
                      <p className="text-sm font-inter text-gray-600">View</p>
                      <p className="font-inter font-bold text-gray-800">{room.view}</p>
                    </div>
                  </div>
                )}
                {room.floors && (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#23263a] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">F</span>
                    </div>
                    <div>
                      <p className="text-sm font-inter text-gray-600">Floor</p>
                      <p className="font-inter font-bold text-gray-800">{room.floors}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h3 className="text-xl font-arpona font-bold text-gray-800 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {amenities.wifi && (
                  <div className="flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-[#23263a]" />
                    <span className="text-sm font-inter text-gray-700">WiFi</span>
                  </div>
                )}
                {amenities.coffee && (
                  <div className="flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-[#23263a]" />
                    <span className="text-sm font-inter text-gray-700">Coffee/Tea</span>
                  </div>
                )}
                {amenities.wine && (
                  <div className="flex items-center gap-2">
                    <Wine className="w-5 h-5 text-[#23263a]" />
                    <span className="text-sm font-inter text-gray-700">Bar Service</span>
                  </div>
                )}
                {amenities.spa && (
                  <div className="flex items-center gap-2">
                    <img src="/images/spa.png" alt="Spa" width={20} height={20} />
                    <span className="text-sm font-inter text-gray-700">Spa Access</span>
                  </div>
                )}
                {amenities.view && (
                  <div className="flex items-center gap-2">
                    <Mountain className="w-5 h-5 text-[#23263a]" />
                    <span className="text-sm font-inter text-gray-700">Scenic Views</span>
                  </div>
                )}
                {amenities.kitchen && (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#23263a] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">K</span>
                    </div>
                    <span className="text-sm font-inter text-gray-700">Kitchen</span>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-arpona font-bold text-gray-800 mb-4">Included Features</h3>
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <img src="/luxufe-icon-star-dark.svg" alt="Star" width={20} height={20} />
                    <span className="text-sm font-inter text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-arpona font-bold text-gray-800 mb-4">Description</h3>
              <p className="text-sm font-inter text-gray-700 leading-relaxed">
                {room.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
