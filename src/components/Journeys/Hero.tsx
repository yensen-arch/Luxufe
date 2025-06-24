import Image from "next/image";

export default function Hero() {
  return (
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
        {/* Details Row */}
        {/* <div className="flex flex-wrap gap-8 items-center bg-white/90 rounded-lg p-6 shadow-lg max-w-4xl">
          <div className="flex flex-col min-w-[120px]">
            <span className="text-xs font-inter text-gray-500 tracking-widest">DESTINATIONS</span>
            <span className="text-lg font-arpona font-light">12 Destinations <span className="ml-1 text-gray-400 cursor-pointer" title="Number of destinations">&#9432;</span></span>
          </div>
          <div className="flex flex-col min-w-[120px]">
            <span className="text-xs font-inter text-gray-500 tracking-widest">DURATION</span>
            <span className="text-lg font-arpona font-light">24 Nights, 9 Stops</span>
          </div>
          <div className="flex flex-col min-w-[160px]">
            <span className="text-xs font-inter text-gray-500 tracking-widest">PRICE</span>
            <span className="text-lg font-arpona font-light">From $4,495 per person</span>
          </div>
          <div className="flex flex-col min-w-[120px]">
            <span className="text-xs font-inter text-gray-500 tracking-widest">SHIP</span>
            <span className="text-lg font-arpona font-light">Scenic Azure</span>
          </div>
          <div className="flex-1 flex justify-end">
            <button className="bg-[#B3D6D3] text-white font-inter text-lg px-8 py-3 rounded-md shadow font-semibold hover:bg-[#a0cfc8] transition">Book this Journey</button>
          </div>
        </div> */}
      </div>
    </section>
  );
} 