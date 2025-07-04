import React from "react";
import { X, Star } from "lucide-react";

const perks = [
  "Here is a perk that's included",
  "List another perk right here for Eleve",
  "Another one can go right here",
  "List another perk right here for Eleve",
];

const radioOptions = [
  "Referral",
  "Direct Search",
  "Saw an ad",
  "Article or News",
  "Social Media",
  "Other",
];

export default function BecomeMemberModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative bg-white shadow-2xl max-w-6xl px-10 w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left: Info */}
        <div className="md:w-1/2 p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-arpona font-bold mb-6 text-[#23263a]">Become a member</h2>
            <p className="mb-8 text-black font-inter font-bold text-sm w-6/8">
              Loyalty should feel as effortless as your travels. With Elevé by Luxufe, every journey brings exclusive benefits, personalised perks, and priority access to unforgettable experiences. Because the more you explore with us, the more rewarding it becomes.
            </p>
            <div className="mb-8 w-6/8 border-b border-gray-400">
              <h3 className="uppercase text-xs font-bold text-gray-500 mb-4 tracking-widest">Member Perks & Benefits</h3>
              <ul className="divide-y divide-gray-400">
                {perks.map((perk, i) => (
                  <li key={i} className="flex text-xs items-center gap-3 py-3 text-gray-500 font-inter font-bold">
                    <Star className="w-5 h-5 text-gray-400" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-8 w-6/8">Lorem ipsum dolor  elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>
        {/* Right: Form */}
        <div className="md:w-1/2 p-10 bg-white relative flex flex-col">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-10 -right-3 text-gray-600 hover:text-gray-700"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <form className="flex flex-col gap-4 mt-2">
            <div className="flex gap-4">
              <input type="text" placeholder="FIRST NAME" className="flex-1 border border-gray-400 font-bold px-4 py-3 text-[0.6rem] font-inter w-1/2" />
              <input type="text" placeholder="LAST NAME" className="flex-1 border border-gray-400 font-bold px-4 py-3 text-[0.6rem] font-inter w-1/2" />
            </div>
            <div className="flex gap-4">    
              <input type="email" placeholder="EMAIL" className="flex-1 border border-gray-400 font-bold px-4 py-3 text-[0.6rem] font-inter w-1/2" />
              <input type="text" placeholder="NUMBER" className="flex-1 border border-gray-400 font-bold px-4 py-3 text-[0.6rem] font-inter w-1/2" />
            </div>
            <input type="text" placeholder="COUNTRY" className="border border-gray-400 font-bold px-4 py-3 text-[0.6rem] font-inter" />
            <div>
              <div className="uppercase text-xs font-bold text-gray-500 mb-2 tracking-widest">How did you find us?</div>
              <div className="grid grid-cols-3 gap-2 mb-2 font-bold">
                {radioOptions.map((option, i) => (
                  <label key={option} className="flex items-center gap-2 text-xs font-inter">
                    <input type="radio" name="findus" className="accent-[#23263a]" defaultChecked={i === 0} />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <input type="text" placeholder="WHO REFERRED YOU?" className="border border-gray-400 font-bold px-4 py-3 text-[0.6rem] font-inter" />
            <textarea placeholder="SHARE SOME INFORMATION ON HOW YOU LIKE TO TRAVEL" className="border border-gray-400 font-bold px-4 py-3 text-[0.6rem] font-inter min-h-[80px]" />
            <button type="submit" className="mt-4 w-full bg-[#23263a] text-white py-4  font-inter font-bold text-[0.6rem] tracking-widest border border-gray-400 hover:bg-white hover:text-[#23263a] transition">SUBMIT REQUEST</button>
          </form>
        </div>
      </div>
    </div>
  );
} 