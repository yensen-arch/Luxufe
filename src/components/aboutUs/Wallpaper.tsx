import React from "react";

interface WallpaperProps {
  data?: {
    image: {
      url: string
      alt: string
    }
  }
}

export default function Wallpaper({ data }: WallpaperProps) {
  // Fallback data if no Sanity data is provided
  const wallpaperData = data || {
    image: {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      alt: 'Wallpaper'
    }
  }

  return (
    <div className="flex justify-center items-center py-16 bg-white">
      <div className="w-full max-w-6xl aspect-[16/9] bg-gray-100 overflow-hidden">
        <img
          src={wallpaperData.image.asset.url}
          alt={wallpaperData.image.alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
} 