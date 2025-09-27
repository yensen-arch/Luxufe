import React from "react";
import Image from "next/image";
export default function BlogSidebar() {
  return (
    <aside className="flex flex-col items-start w-full max-w-xs">
      {/* Author Card */}
      <div className="mb-4 md:mb-6 w-full">
        <Image
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
          alt="Author"
          className="w-full h-32 md:h-40 object-cover"
          width={160}
          height={160}
        />
        <p className="my-3 md:my-4 text-xs font-bold text-slate-800 font-inter">
          Hello, we are Luxufe -The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by.
        </p>
        <a href="#" className="mt-2 inline-flex items-center gap-2 text-xs font-inter text-slate-700 font-bold hover:underline">
          ABOUT US <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={24} height={24} />
        </a>
      </div>
      <hr className="w-full my-4 md:my-6 border-slate-400" />
      {/* Explore Section */}
      <h3 className="text-lg md:text-2xl font-arpona text-slate-700 mb-3 md:mb-4 font-bold">Explore</h3>
      <button className="w-full border-2 border-slate-300 text-slate-700 py-3 md:py-4 mb-3 md:mb-4 font-inter font-bold flex items-center justify-center px-4 md:px-6 text-xs hover:bg-slate-50 transition">
        <span className="mr-2">EXPLORE WITH US</span>  <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={24} height={24} />
      </button>
      <button className="w-full border-2 border-slate-300 text-slate-700 py-2 md:py-4 mb-6 md:mb-8 font-inter font-bold flex items-center justify-center px-4 md:px-6 text-xs hover:bg-slate-50 transition">
        <span className="mr-2">SIGN UP TO BE INSPIRED</span>  <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={24} height={24} />
      </button>
      {/* Social Icons */}
      <div className="flex gap-4 md:gap-6 mt-2 text-lg md:text-2xl text-slate-400">
        <span><Image src="/Icon-simple-instagram-black.svg" alt="Instagram" width={24} height={24} /></span>
        <span><Image src="/Icon-awesome-facebook-black.svg" alt="Facebook" width={14} height={14} /></span>
        <span aria-label="TripAdvisor">
          <Image src="/Icon-awesome-tripadvisor-black.svg" alt="TripAdvisor" width={24} height={24} />
        </span>
        <span aria-label="Google">
          <Image src="/Icon-ionic-logo-google-black.svg" alt="Google" width={24} height={24} />
        </span>
      </div>
    </aside>
  );
} 