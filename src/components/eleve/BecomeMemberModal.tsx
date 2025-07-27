import React from "react";
import { X, Star } from "lucide-react";

interface BecomeMemberModalProps {
  open: boolean
  onClose: () => void
  data?: {
    title: string
    description: string
    perksTitle: string
    perks: string[]
    footerText?: string
    formTitle: string
    radioOptions: string[]
    submitButtonText: string
  }
}

export default function BecomeMemberModal({ open, onClose, data }: BecomeMemberModalProps) {
  // Fallback data
  const fallbackData = {
    title: 'Become a member',
    description: 'Loyalty should feel as effortless as your travels. With Elevé by Luxufe, every journey brings exclusive benefits, personalised perks, and priority access to unforgettable experiences. Because the more you explore with us, the more rewarding it becomes.',
    perksTitle: 'Member Perks & Benefits',
    perks: [
      "Here is a perk that's included",
      "List another perk right here for Eleve",
      "Another one can go right here",
      "List another perk right here for Eleve",
    ],
    footerText: 'Lorem ipsum dolor  elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
    formTitle: 'How did you find us?',
    radioOptions: [
      "Referral",
      "Direct Search",
      "Saw an ad",
      "Article or News",
      "Social Media",
      "Other",
    ],
    submitButtonText: 'SUBMIT REQUEST'
  }

  const modalData = data || fallbackData

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 md:p-6 lg:p-8">
      <div className="relative bg-white shadow-2xl max-w-6xl w-full flex flex-col lg:flex-row overflow-hidden max-h-[90vh] lg:max-h-none">
        {/* Left: Info */}
        <div className="lg:w-1/2 p-4 md:p-6 lg:p-10 flex flex-col justify-between order-2 lg:order-1">
          <div>
            <h2 className="text-2xl md:text-3xl font-arpona font-bold mb-4 md:mb-5 lg:mb-6 text-[#23263a]">{modalData.title}</h2>
            <p className="mb-6 md:mb-7 lg:mb-8 text-black font-inter font-bold text-xs md:text-sm w-full lg:w-6/8">
              {modalData.description}
            </p>
            <div className="mb-6 md:mb-7 lg:mb-8 w-full lg:w-6/8 border-b border-gray-400">
              <h3 className="uppercase text-xs font-bold text-gray-500 mb-3 md:mb-4 tracking-widest">{modalData.perksTitle}</h3>
              <ul className="divide-y divide-gray-400">
                {modalData.perks.map((perk, i) => (
                  <li key={i} className="flex text-xs items-center gap-2 md:gap-3 py-2 md:py-3 text-gray-500 font-inter font-bold">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {modalData.footerText && (
            <p className="text-xs text-gray-500 mt-6 md:mt-7 lg:mt-8 w-full lg:w-6/8">{modalData.footerText}</p>
          )}
        </div>
        {/* Right: Form */}
        <div className="lg:w-1/2 p-4 md:p-6 lg:p-10 bg-white relative flex flex-col order-1 lg:order-2">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 md:top-6 lg:top-10 right-4 md:right-6 lg:-right-3 text-gray-600 hover:text-gray-700"
            aria-label="Close"
          >
            <X className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer" />
          </button>
          <form className="flex flex-col gap-3 md:gap-4 mt-2">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <input type="text" placeholder="FIRST NAME" className="flex-1 border border-gray-400 font-bold px-3 md:px-4 py-2 md:py-3 text-[0.6rem] font-inter w-full md:w-1/2" />
              <input type="text" placeholder="LAST NAME" className="flex-1 border border-gray-400 font-bold px-3 md:px-4 py-2 md:py-3 text-[0.6rem] font-inter w-full md:w-1/2" />
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">    
              <input type="email" placeholder="EMAIL" className="flex-1 border border-gray-400 font-bold px-3 md:px-4 py-2 md:py-3 text-[0.6rem] font-inter w-full md:w-1/2" />
              <input type="text" placeholder="NUMBER" className="flex-1 border border-gray-400 font-bold px-3 md:px-4 py-2 md:py-3 text-[0.6rem] font-inter w-full md:w-1/2" />
            </div>
            <input type="text" placeholder="COUNTRY" className="border border-gray-400 font-bold px-3 md:px-4 py-2 md:py-3 text-[0.6rem] font-inter" />
            <div>
              <div className="uppercase text-xs font-bold text-gray-500 mb-2 tracking-widest">{modalData.formTitle}</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-2 font-bold">
                {modalData.radioOptions.map((option, i) => (
                  <label key={option} className="flex items-center gap-2 text-xs font-inter">
                    <input type="radio" name="findus" className="accent-[#23263a]" defaultChecked={i === 0} />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <input type="text" placeholder="WHO REFERRED YOU?" className="border border-gray-400 font-bold px-3 md:px-4 py-2 md:py-3 text-[0.6rem] font-inter" />
            <textarea placeholder="SHARE SOME INFORMATION ON HOW YOU LIKE TO TRAVEL" className="border border-gray-400 font-bold px-3 md:px-4 py-2 md:py-3 text-[0.6rem] font-inter min-h-[60px] md:min-h-[80px]" />
            <button type="submit" className="mt-3 md:mt-4 w-full bg-[#23263a] text-white py-3 md:py-4 font-inter font-bold text-[0.6rem] tracking-widest border border-gray-400 hover:bg-white hover:text-[#23263a] transition">{modalData.submitButtonText}</button>
          </form>
        </div>
      </div>
    </div>
  );
} 