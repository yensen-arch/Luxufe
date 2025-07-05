import React from "react";
import { Facebook, Instagram } from "lucide-react";

export default function BlogSidebar() {
  return (
    <aside className="flex flex-col items-start w-full max-w-xs">
      {/* Author Card */}
      <div className="mb-6 w-full">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
          alt="Author"
          className="w-full h-40 object-cover"
        />
        <p className="my-4 text-xs font-bold text-slate-700 font-inter">
          Hello, we are Luxufe -The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by.
        </p>
        <a href="#" className="mt-2 inline-flex items-center gap-2 text-xs font-inter text-slate-700 font-bold hover:underline">
          ABOUT US <span className="ml-1">&rarr;</span>
        </a>
      </div>
      <hr className="w-full my-6 border-slate-300" />
      {/* Explore Section */}
      <h3 className="text-xl font-arpona text-slate-700 mb-4 font-bold">Explore</h3>
      <button className="w-full border border-slate-300 text-slate-700 py-3 mb-4 font-inter font-bold flex items-center justify-center px-6 text-xs  hover:bg-slate-50 transition">
        EXPLORE WITH US <span className="ml-2">&rarr;</span>
      </button>
      <button className="w-full border border-slate-300 text-slate-700 py-3 mb-8 font-inter font-bold flex items-center justify-center px-6 text-xs  hover:bg-slate-50 transition">
        SIGN UP TO BE INSPIRED <span className="ml-2">&rarr;</span>
      </button>
      {/* Social Icons */}
      <div className="flex gap-6 mt-2 text-2xl text-slate-400">
        <span><Instagram className="h-7 w-7" aria-label="Instagram" /></span>
        <span><Facebook className="h-7 w-7" aria-label="Facebook" /></span>
        <span aria-label="TripAdvisor">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="12" r="3.5" stroke="#94a3b8" strokeWidth="1.5" fill="white" />
            <circle cx="16.5" cy="12" r="3.5" stroke="#94a3b8" strokeWidth="1.5" fill="white" />
            <circle cx="7.5" cy="12" r="1.5" fill="#94a3b8" />
            <circle cx="16.5" cy="12" r="1.5" fill="#94a3b8" />
            <path d="M2 12c2-2 6-2 8 0" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
            <path d="M22 12c-2-2-6-2-8 0" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
          </svg>
        </span>
        <span aria-label="Google">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M21.805 12.082c0-.638-.057-1.252-.163-1.837H12.22v3.48h5.43a4.637 4.637 0 0 1-2.01 3.045v2.522h3.25c1.9-1.75 2.915-4.33 2.915-7.21z" fill="#94a3b8"/>
              <path d="M12.22 22c2.43 0 4.47-.805 5.96-2.18l-3.25-2.522c-.9.6-2.05.96-3.32.96-2.55 0-4.71-1.72-5.48-4.03H3.77v2.57A9.78 9.78 0 0 0 12.22 22z" fill="#94a3b8"/>
              <path d="M6.74 14.228a5.89 5.89 0 0 1 0-3.756v-2.57H3.77a9.78 9.78 0 0 0 0 8.896l2.97-2.57z" fill="#94a3b8"/>
              <path d="M12.22 7.54c1.32 0 2.5.454 3.43 1.345l2.57-2.57C16.69 4.805 14.65 4 12.22 4A9.78 9.78 0 0 0 3.77 7.902l2.97 2.57c.77-2.31 2.93-4.03 5.48-4.03z" fill="#94a3b8"/>
            </g>
          </svg>
        </span>
      </div>
    </aside>
  );
} 