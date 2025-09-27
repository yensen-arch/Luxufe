import Image from "next/image";
const offers = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Marriott_logo.svg",
    offer: "Save up to 45% plus complimentary half board at JW Marriott, Mauritius",
    date: "Book by: 31st March 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Four_Seasons_logo.svg",
    offer: "Save up to 30% off at the Four Seasons Resort Marrakech, Morocco",
    date: "Book by: 30th August 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Belmond_logo.svg",
    offer: "Save up to 45% plus complimentary half board at JW Marriott, Mauritius",
    date: "Book by: 31st March 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Marriott_logo.svg",
    offer: "Save up to 45% plus complimentary half board at JW Marriott, Mauritius",
    date: "Book by: 31st March 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Four_Seasons_logo.svg",
    offer: "Save up to 30% off at the Four Seasons Resort Marrakech, Morocco",
    date: "Book by: 30th August 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Belmond_logo.svg",
    offer: "Save up to 45% plus complimentary half board at JW Marriott, Mauritius",
    date: "Book by: 31st March 2025",
  },
];

export default function LatestGreatestGrid() {
  return (
    <section className="w-full bg-white pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {offers.map((offer, idx) => (
            <div key={idx} className="bg-white shadow-lg border border-slate-200 overflow-hidden flex flex-col">
              <div className="relative h-60 md:h-75 lg:h-110">
                <img
                  src={offer.image}
                  alt="Offer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 md:bottom-5 lg:bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-full z-10">
                  <img
                    src={offer.logo}
                    alt="Brand Logo"
                    className="h-6 md:h-7 lg:h-8 xl:h-10 bg-white/80 px-3 md:px-4 py-1 md:py-2 rounded max-w-[120px] md:max-w-[140px] object-contain shadow"
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 items-center justify-between px-3 md:px-4 py-1">
                <div className="text-center mb-3 md:mb-4">
                  <p className="text-lg md:text-xl lg:text-2xl w-full lg:w-3/4 mx-auto font-arpona text-[#23263a] font-bold my-3 md:my-4">{offer.offer}</p>
                  <p className="text-xs text-slate-500 font-bold font-inter mb-3 md:mb-4">{offer.date}</p>
                </div>
                <a
                  href="#"
                  className="w-full bg-[#23263a] text-white font-inter font-bold text-xs md:text-xs lg:text-xs py-2 md:py-2.5 lg:py-3 rounded-none flex items-center justify-center gap-2 hover:bg-black transition mb-2"
                >
                  MORE INFO <Image src="/luxufe-icon-button-arrow-light.svg" alt="Arrow right" width={34} height={34} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-8 md:mb-10 lg:mt-12 gap-4 md:gap-5 lg:gap-6">
          <button className="text-slate-500 text-xs font-inter font-bold hover:underline">LOAD MORE +</button>
          <button className="border-2 border-slate-300 px-6 md:px-7 lg:px-8 py-3 md:py-4 lg:py-5 font-inter font-bold text-[#23263a] flex items-center gap-2 text-xs rounded-none hover:bg-[#f5f5f5] transition-colors">
            DISCUSS A PROMOTION WITH US <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
} 