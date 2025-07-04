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
      <div className="relative bg-white rounded-lg shadow-2xl max-w-5xl w-full mx-4 flex flex-col md:flex-row overflow-hidden">
        {/* Left: Info */}
        <div className="md:w-1/2 p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-arpona font-bold mb-6 text-[#23263a]">Become a member</h2>
            <p className="mb-8 text-[#23263a] font-inter text-base">
              Loyalty should feel as effortless as your travels. With Elevé by Luxufe, every journey brings exclusive benefits, personalised perks, and priority access to unforgettable experiences. Because the more you explore with us, the more rewarding it becomes.
            </p>
            <div className="mb-8">
              <h3 className="uppercase text-xs font-bold text-gray-500 mb-4 tracking-widest">Member Perks & Benefits</h3>
              <ul className="divide-y divide-gray-200">
                {perks.map((perk, i) => (
                  <li key={i} className="flex items-center gap-3 py-3 text-[#23263a] font-inter text-base">
                    <Star className="w-5 h-5 text-gray-400" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>
        {/* Right: Form */}
        <div className="md:w-1/2 p-10 bg-white relative flex flex-col">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-700"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <form className="flex flex-col gap-4 mt-2">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="flex-1 border border-gray-300 rounded px-4 py-3 text-base font-inter" />
              <input type="text" placeholder="Last Name" className="flex-1 border border-gray-300 rounded px-4 py-3 text-base font-inter" />
            </div>
            <div className="flex gap-4">
              <input type="email" placeholder="Email" className="flex-1 border border-gray-300 rounded px-4 py-3 text-base font-inter" />
              <input type="text" placeholder="Number" className="flex-1 border border-gray-300 rounded px-4 py-3 text-base font-inter" />
            </div>
            <input type="text" placeholder="Country" className="border border-gray-300 rounded px-4 py-3 text-base font-inter" />
            <div>
              <div className="uppercase text-xs font-bold text-gray-500 mb-2 tracking-widest">How did you find us?</div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                {radioOptions.map((option, i) => (
                  <label key={option} className="flex items-center gap-2 text-sm font-inter">
                    <input type="radio" name="findus" className="accent-[#23263a]" defaultChecked={i === 0} />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <input type="text" placeholder="Who referred you?" className="border border-gray-300 rounded px-4 py-3 text-base font-inter" />
            <textarea placeholder="Share some information on how you like to travel" className="border border-gray-300 rounded px-4 py-3 text-base font-inter min-h-[80px]" />
            <button type="submit" className="mt-4 w-full bg-[#23263a] text-white py-4 rounded font-inter font-bold text-base tracking-widest hover:bg-[#181a2a] transition">SUBMIT REQUEST</button>
          </form>
        </div>
      </div>
    </div>
  );
} 