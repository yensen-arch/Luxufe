"use client"
import { ArrowRight } from "lucide-react"

interface ElevateTravelProps {
  data?: {
    subtitle: string
    title: string
    paragraph1: string
    paragraph2: string
    buttonText: string
    image: {
      url: string
      alt: string
    }
  }
}

export default function ElevateTravel({ data }: ElevateTravelProps) {
  // Fallback data
  const fallbackData = {
    subtitle: 'Your next journey awaits',
    title: 'Elevate your travel\nwith Elevé by Luxufe.',
    paragraph1: 'Becoming a member of Elevé by Luxufe is effortless. Simply sign up to join and receive exclusive access to luxury perks, curated travel benefits, and insider privileges.',
    paragraph2: 'Members will be the first to know about VIP experiences, limited-time offers, and luxury travel enhancements delivered directly to their inbox.',
    buttonText: 'ELEVATE YOUR TRAVEL',
    image: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      alt: 'Luxury travel experience'
    }
  }

  const elevateData = data || fallbackData

  return (
    <section className="py-20 md:py-20 lg:py-20 overflow-hidden">
      <div className="container">
        <div className="relative flex flex-col lg:flex-row items-center lg:justify-end min-h-[120vh] lg:min-h-[120vh]">
          
          {/* Content Section */}
          <div className="bg-gray-100 w-full lg:w-6/8 mt-4 md:mt-6 lg:mt-8 h-auto lg:h-screen lg:mt-0 lg:absolute lg:left-0 p-6 md:p-8 lg:p-12 z-20 order-2 lg:order-1">
            <div className="transition-all duration-700 ease-in-out">
              <div className="w-full lg:w-1/2 lg:mr-auto lg:ml-20 lg:mt-20">
                <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bellarina italic text-[#23263a] mb-2 md:mb-3 lg:mb-4">{elevateData.subtitle}</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-arpona font-bold leading-tight mb-4 md:mb-6 lg:mb-8 text-gray-900">
                  {elevateData.title}
                </h2>
                <p className="text-sm md:text-base lg:text-md leading-relaxed mb-3 md:mb-4 max-w-full lg:max-w-4/5 font-inter font-bold">
                  {elevateData.paragraph1}
                </p>
                <p className="text-sm md:text-base lg:text-md leading-relaxed mb-6 md:mb-8 lg:mb-10 max-w-full lg:max-w-4/5 font-inter font-bold">
                  {elevateData.paragraph2}
                </p>
                <button className="group inline-flex items-center gap-2 md:gap-3 text-xs font-semibold tracking-widest border border-gray-400 px-4 md:px-5 lg:px-6 py-3 md:py-4 lg:py-5 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 font-inter font-bold">
                  {elevateData.buttonText}
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-3/7 h-auto lg:h-full z-40 lg:mr-20 order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src={elevateData.image.url}
                alt={elevateData.image.alt}
                className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

