"use client"
import { ArrowRight } from "lucide-react"

export default function TravelChoice() {

  return (
    <section className="py-40 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center lg:justify-end min-h-[650px]">
          
          {/* Content Section */}
          <div className="bg-gray-100 w-6/8 mt-8 h-screen lg:mt-0 lg:absolute lg:left-0 p-12 z-20">
            <div className="transition-all duration-700 ease-in-out">
              <div className="w-1/2 mr-auto ml-20 mt-20">
                <p className="text-2xl md:text-4xl font-bellarina italic text-[#23263a] mb-4">Your next journey awaits</p>
                <h2 className="text-4xl lg:text-5xl font-arpona font-bold leading-tight mb-8 text-gray-900">
                  Elevate your travel<br />with Elevé by Luxufe.
                </h2>
                <p className="text-md leading-relaxed mb-4 max-w-4/5 font-inter font-bold">
                  Becoming a member of Elevé by Luxufe is effortless. Simply sign up to join and receive exclusive access to luxury perks, curated travel benefits, and insider privileges.
                </p>
                <p className="text-md leading-relaxed mb-10 max-w-4/5 font-inter font-bold">
                  Members will be the first to know about VIP experiences, limited-time offers, and luxury travel enhancements delivered directly to their inbox.
                </p>
                <button className="group inline-flex items-center gap-3 text-xs font-semibold tracking-widest border border-gray-400 px-6 py-5 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 font-inter font-bold">
                  ELEVATE YOUR TRAVEL
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-1/2 z-40 mr-20">
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                alt="Cocktail"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

