import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative w-full flex flex-col justify-end h-screen">
        <div className="w-full ">
          {/* Background image */}
          <Image
            src="https://picsum.photos/seed/picsum/1920/1080"
            alt="Delightful Douro Ship"
            fill
            className="object-cover object-center opacity-90 "
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Content */}
          <div className="relative z-10 px-10 pb-10 max-w-7xl mx-auto w-full">
            {/* Breadcrumb */}
            <div className="text-white text-xs font-inter font-bold mb-2 opacity-80">
              Home &gt; Journeys &gt; Cruises
            </div>
            {/* Title */}
            <h1 className="text-white text-6xl font-arpona font-light mb-8 leading-tight">
              Delightful Douro
            </h1>
          </div>
        </div>
      </section>
      {/* Details Section */}
      <section className="w-full bg-white shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-8">
          <div className="flex gap-16">
            {/* Destinations */}
            <div>
              <div className="text-xs text-gray-500  font-bold mb-1">DESTINATIONS</div>
              <div className="flex items-center gap-2">
                <span className="text-md font-inter font-bold ">12 Destinations</span>
                <span className="text-gray-400 cursor-pointer" title="View all destinations">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#A0AEC0" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#A0AEC0">i</text></svg>
                </span>
              </div>
            </div>
            {/* Duration */}
            <div>
              <div className="text-xs text-gray-500  font-semibold mb-1">DURATION</div>
              <div className="text-md font-inter font-bold ">24 Nights, 9 Stops</div>
            </div>
            {/* Price */}
            <div>
              <div className="text-xs text-gray-500  font-semibold mb-1">PRICE</div>
              <div className="text-md font-inter font-bold ">From $4,495 per person</div>
            </div>
            {/* Ship */}
            <div>
              <div className="text-xs text-gray-500  font-semibold mb-1">SHIP</div>
              <div className="text-md font-inter font-bold ">Scenic Azure</div>
            </div>
          </div>
          <button className="bg-[#A5C8CE] text-white text-lg font-semibold px-8 py-3 shadow hover:bg-[#8bb3b8] transition">Book this Journey</button>
        </div>
      </section>
    </>
  );
} 