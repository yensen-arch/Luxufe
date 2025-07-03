import React from "react";

export default function Wallpaper() {
  return (
    <div className="flex justify-center items-center py-16 bg-white">
      <div className="w-full max-w-6xl aspect-[16/9] bg-gray-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Wallpaper"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
} 