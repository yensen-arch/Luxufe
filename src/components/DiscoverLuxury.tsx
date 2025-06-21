import { ArrowRight } from 'lucide-react';

export default function DiscoverLuxury() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-[#1a233a] text-white flex items-center justify-center p-12 sm:p-16 md:p-24">
            <div className="max-w-md">
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Unmatched care,<br/>
                effortless experiences
              </h2>
              <p className="mt-6 text-gray-300">
                Luxury travel is defined by the peace of mind it brings. Where every detail is thoughtfully arranged, allowing you to focus solely on the journey ahead. From seamless transitions to exceptional customer care, every aspect of your trip is designed to provide an effortless and unforgettable experience.
              </p>
              <button className="mt-10 group flex items-center gap-3 text-sm font-semibold tracking-widest border border-white/40 px-6 py-3 hover:bg-white hover:text-[#1a233a] transition-colors">
                DISCOVER LUXURY
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="h-[500px] lg:h-full w-full relative">
              <img 
                src="https://picsum.photos/seed/couple-joy/800/1000" 
                alt="A happy older couple enjoying a trip in a city."
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 text-white p-2 text-xs rounded-md">
                <p>iStock</p>
                <p>Credit: LeoPatrizi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 