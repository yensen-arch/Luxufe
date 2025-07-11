import React from "react";

export default function WaysToTravelVideoSection() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 -top-180 w-[80vw] z-20 flex flex-col items-center">
      <div className="relative w-full h-[720px] flex items-center justify-center bg-white shadow-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80"
          alt="Video Preview"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
} 