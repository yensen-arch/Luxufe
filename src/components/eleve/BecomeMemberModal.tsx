import React from "react";
import Image from "next/image";

interface BecomeMemberModalProps {
  open: boolean
  onClose: () => void
}

export default function BecomeMemberModal({ open, onClose }: BecomeMemberModalProps) {

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative bg-white shadow-2xl max-w-5xl w-full flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Info */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl lg:text-3xl font-arpona text-center lg:text-left font-bold mb-6 text-gray-700">Become a member</h2>
            <p className="mb-18 text-black font-inter font-bold text-sm w-full lg:w-7/8 leading-relaxed text-center lg:text-left">
              Loyalty should feel as effortless as your travels. With Elevé by Luxufe, every journey brings exclusive benefits, personalised perks, and priority access to unforgettable experiences. Because the more you explore with us, the more rewarding it becomes.
            </p>
            <div >
              <h3 className="uppercase text-xs border-b border-gray-400 pb-3 lg:text-sm text-left font-bold text-gray-500 mb-4 tracking-widest">MEMBER PERKS & BENEFITS</h3>
              <ul className="space-y-3 font-bold">
                <li className="flex items-center gap-3 border-b border-gray-400 pb-3 text-sm text-gray-600 font-inter">
                  <Image src="/luxufe-icon-star-grey.svg" alt="Star" width={16} height={16} />
                  Here is a perk that's included
                </li>
                <li className="flex items-center gap-3 border-b border-gray-400 pb-3 text-sm text-gray-600 font-inter">
                  <Image src="/luxufe-icon-star-grey.svg" alt="Star" width={16} height={16} />
                  List another perk right here for Eleve
                </li>
                <li className="flex items-center gap-3 border-b border-gray-400 pb-3 text-sm text-gray-600 font-inter">
                  <Image src="/luxufe-icon-star-grey.svg" alt="Star" width={16} height={16} />
                  Another one can go right here
                </li>
                <li className="flex items-center gap-3 border-b border-gray-400 pb-3 text-sm text-gray-600 font-inter">
                  <Image src="/luxufe-icon-star-grey.svg" alt="Star" width={16} height={16} />
                  List another perk right here for Eleve
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center lg:text-left leading-relaxed">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>
        
        {/* Right: Form */}
        <div className="lg:w-1/2 p-8 lg:p-12 bg-white relative flex flex-col">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="Close"
          >
            <Image src="/luxufe-icon-close-dark.svg" alt="Close" width={24} height={24} />
          </button>
          
          <form className="flex flex-col gap-4 mt-4">
            {/* Name fields */}
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="FIRST NAME" 
                className="flex-1 border border-gray-300 px-4 py-3 text-sm font-inter focus:outline-none focus:border-gray-500" 
              />
              <input 
                type="text" 
                placeholder="LAST NAME" 
                className="flex-1 border border-gray-300 px-4 py-3 text-sm font-inter focus:outline-none focus:border-gray-500" 
              />
            </div>
            
            {/* Email and Phone */}
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="flex-1 border border-gray-300 px-4 py-3 text-sm font-inter focus:outline-none focus:border-gray-500" 
              />
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  placeholder="NUMBER" 
                  className="w-full border border-gray-300 px-4 py-3 pr-20 text-sm font-inter focus:outline-none focus:border-gray-500" 
                />
                <div className="absolute right-0 top-0 h-full flex items-center pr-3">
                  <select className="text-sm font-inter bg-transparent border-none focus:outline-none cursor-pointer">
                    <option>United States +1</option>
                  </select>
                  <Image src="/luxufe-icon-simple-arrow-dark.svg" alt="Chevron Down" width={6} height={6} className="rotate-90"/>
                </div>
              </div>
            </div>
            
            {/* Country field */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="COUNTRY" 
                className="w-full border border-gray-300 px-4 py-3 pl-10 text-sm font-inter focus:outline-none focus:border-gray-500" 
              />
              <Image src="/luxufe-map-icon-large-location-pin-dark.svg" alt="Map Pin" width={16} height={16} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            
            {/* How did you find us */}
            <div>
              <div className="uppercase text-xs font-bold text-gray-500 mb-3 tracking-widest">HOW DID YOU FIND US?</div>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-2 text-sm font-inter cursor-pointer">
                  <input type="radio" name="findus" className="accent-[#23263a]" defaultChecked />
                  Referral
                </label>
                <label className="flex items-center gap-2 text-sm font-inter cursor-pointer">
                  <input type="radio" name="findus" className="accent-[#23263a]" />
                  Saw an ad
                </label>
                <label className="flex items-center gap-2 text-sm font-inter cursor-pointer">
                  <input type="radio" name="findus" className="accent-[#23263a]" />
                  Direct Search
                </label>
                <label className="flex items-center gap-2 text-sm font-inter cursor-pointer">
                  <input type="radio" name="findus" className="accent-[#23263a]" />
                  Article or News
                </label>
                <label className="flex items-center gap-2 text-sm font-inter cursor-pointer">
                  <input type="radio" name="findus" className="accent-[#23263a]" />
                  Social Media
                </label>
                <label className="flex items-center gap-2 text-sm font-inter cursor-pointer">
                  <input type="radio" name="findus" className="accent-[#23263a]" />
                  Other
                </label>
              </div>
            </div>
            
            {/* Referral field */}
            <input 
              type="text" 
              placeholder="WHO REFERRED YOU?" 
              className="border border-gray-300 px-4 py-3 text-sm font-inter focus:outline-none focus:border-gray-500" 
            />
            
            {/* Travel preferences */}
            <textarea 
              placeholder="SHARE SOME INFORMATION ON HOW YOU LIKE TO TRAVEL" 
              className="border border-gray-300 px-4 py-3 text-sm font-inter min-h-[100px] resize-none focus:outline-none focus:border-gray-500" 
            />
            
            {/* Submit button */}
            <button 
              type="submit" 
              className="mt-4 w-full bg-[#23263a] text-white py-4 font-inter font-bold text-sm tracking-widest hover:bg-[#1a1f2e] transition-colors"
            >
              SUBMIT REQUEST
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 