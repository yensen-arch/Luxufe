"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: {
    brandLogo: string;
    brandName: string;
    heroImage: string;
    title: string;
    description: string;
    details: string;
    validFrom: string;
    validTo: string;
    location: string;
    terms: string;
    contactLink: string;
  };
}

export default function OfferModal({ isOpen, onClose, data }: OfferModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Default data for testing
  const defaultData = {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Four_Seasons_logo.svg/2560px-Four_Seasons_logo.svg.png",
    brandName: "FOUR SEASONS",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    title: "Save up to 30% off at the Four Seasons Resort Marrakech, Morocco",
    description: "Nestled in 40 acres of beautiful Moorish gardens, the Four Seasons Marrakech provides a luxurious retreat for even the most discerning guests. This elegant hotel has been finished in a contemporary style and is just a short walk from the bustling Medina.",
    details: "Book 3 nights or more and receive up to 30% off on select dates and room types.",
    validFrom: "March 2025",
    validTo: "December 2026",
    location: "Marrakech, Morocco",
    terms: "Terms & Conditions Apply. Contact the team for info.",
    contactLink: "#"
  };

  const offerData = data || defaultData;

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className={`fixed left-0 top-0 h-full w-full sm:w-80 md:w-140 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Section - Image & Branding */}
        <div className="relative h-1/3 sm:h-2/6 w-full overflow-hidden">
          <img 
            src={offerData.heroImage} 
            alt="Four Seasons Resort Marrakech" 
            className="w-full h-full object-cover"
          />
          
          {/* Brand Logo Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg">
              <img 
                src={offerData.brandLogo} 
                alt={offerData.brandName}
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </div>
          </div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
          >
            <Image src="/luxufe-icon-close-dark.svg" alt="Close" width={20} height={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-6 pt-2 overflow-y-auto">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold font-arpona text-gray-900 mb-3 sm:mb-4 leading-tight">
            {offerData.title}
          </h2>
          
          {/* Description */}
          <p className="text-gray-700 text-xs font-bold font-inter leading-relaxed mb-4 sm:mb-6">
            {offerData.description}
          </p>
          
          {/* Divider */}
          <div className="border-t-2 border-gray-400 mb-4 sm:mb-6"></div>
          
          {/* Details List */}
          <div className="space-y-3 sm:space-y-4 mb-4">
            {/* Details */}
            <div className="flex items-start gap-2 sm:gap-3">
                <Image src="/luxufe-icon-call.svg" alt="Info" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
              <div className='flex flex-row w-full'>
                <span className="text-xs font-bold font-inter text-gray-600 uppercase tracking-wide">Details</span>
                <p className="text-xs w-3/4 text-gray-700 font-bold font-inter ml-auto">{offerData.details}</p>
              </div>
            </div>
            
            {/* Valid Period */}
            <div className="flex items-start gap-2 sm:gap-3">
                <Image src="/luxufe-icon-calendar.svg" alt="Calendar" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
              <div className='flex flex-row w-full'>
                <span className="text-xs font-bold font-inter text-gray-600 uppercase tracking-wide">Valid</span>
                <p className="text-xs w-3/4 text-gray-700 font-bold font-inter ml-auto">
                  From {offerData.validFrom} - {offerData.validTo}
                </p>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-start gap-2 sm:gap-3">
                <Image src="/luxufe-map-icon-large-location-pin-dark.svg" alt="Map Pin" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
              <div className='flex flex-row w-full'>
                <span className="text-xs font-bold font-inter text-gray-600 uppercase tracking-wide">Location</span>
                <p className="text-xs w-3/4 text-gray-700 font-bold font-inter ml-auto">{offerData.location}</p>
              </div>
            </div>
            
            {/* Terms */}
            <div className="flex items-start gap-2 sm:gap-3 w-full">
                <Image src="/luxufe-icon-country-train-adventures.svg" alt="File Text" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
              <div className='flex flex-row w-full'>
                <span className="text-xs font-bold font-inter text-gray-600 uppercase tracking-wide">Terms</span>
                <p className="text-xs w-3/4 text-gray-700 font-bold font-inter ml-auto">
                  {offerData.terms.split('Contact the team')[0]}
                  <a 
                    href={offerData.contactLink} 
                    className="underline hover:text-gray-900 transition-colors"
                  >
                    Contact the team
                  </a>
                  {offerData.terms.split('Contact the team')[1]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - CTA Buttons */}
        <div className="px-4 sm:px-6">
          {/* Primary CTA */}
          <div className=' border-t-2 p-4 sm:p-6 border-gray-400 space-y-3'>
          <button className="w-full bg-gray-900 font-inter text-white py-3 px-4 font-semibold text-xs uppercase tracking-wide hover:bg-white hover:text-gray-900 border-gray-900 border-1 border-gray-900 transition-colors flex items-center justify-center gap-2">
            Discuss This Offer
            <Image src="/luxufe-icon-button-arrow-light.svg" alt="Arrow right" width={20} height={20} className="sm:w-6 sm:h-6" />
          </button>
          
          {/* Secondary CTA */}
          <button className="w-full font-inter border-2 border-gray-300 text-gray-700 py-3 px-4 font-semibold text-xs uppercase tracking-wide hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            More Offers From This Brand
            <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={20} height={20} className="sm:w-6 sm:h-6" />
          </button>
          </div>
        </div>
      </div>
    </>
  );
} 