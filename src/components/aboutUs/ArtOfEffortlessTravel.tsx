import React from "react";

interface ArtOfEffortlessTravelProps {
  data?: {
    image: {
      url: string
      alt: string
    }
    title: string
    subtitle: string
    paragraph1: string
    paragraph2: string
    badgeImage?: {
      url: string
      alt: string
    }
  }
}

export default function ArtOfEffortlessTravel({ data }: ArtOfEffortlessTravelProps) {
  // Fallback data if no Sanity data is provided
  const sectionData = data || {
    image: {
      url: 'https://picsum.photos/seed/resort-pool/1000/1200',
      alt: 'Effortless Travel'
    },
    title: 'The Art of Effortless Travel',
    subtitle: 'We believe that true luxury lies in the details, where every moment is seamlessly orchestrated and every journey is as effortless as it is extraordinary.',
    paragraph1: 'More than just a travel service, we are curators of experience, ensuring that each trip is tailored with precision, care, and an uncompromising commitment to excellence.\nOur philosophy is built on three core pillars: Care, Comfort, and Consistency.',
    paragraph2: 'From anticipating a client\'s needs before they arise to ensuring smooth transitions between destinations, we want to eliminate friction and enhance the joy of discovery in every journey.',
    badgeImage: {
      url: 'https://res.cloudinary.com/dqh2tacov/image/upload/v1750523100/LUXUFE_-_Badge_Logo_5_cgreed.png',
      alt: 'Luxufe Badge'
    }
  }

  return (
    <section className="bg-white flex justify-center items-stretch mt-20 md:mt-40 lg:mt-60 mb-10 md:mb-15 lg:mb-20 h-auto md:h-[120vh] lg:h-[120vh]">
      <div className="flex flex-col lg:flex-row w-full mx-auto h-full relative">
        {/* Left: Image */}
        <div className="w-full h-[50vh] md:h-[60vh] lg:w-[56%] lg:z-10 lg:absolute lg:-top-30 lg:h-[120vh] order-1 lg:order-1">
          <img
            src={sectionData.image.url}
            alt={sectionData.image.alt}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: Content */}
        <div className="relative w-full lg:w-6/8 bg-[#f5f6f7] flex flex-col px-6 md:px-8 py-8 md:py-12 lg:ml-auto lg:px-8 lg:py-12 lg:pl-16 lg:pr-20 order-2 lg:order-2">
          {/* Overlapping Heading/Subheading */}
          <div className="lg:absolute lg:static lg:ml-auto z-10 mt-6 md:mt-8 lg:mt-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-arpona text-[#23263a] font-bold leading-tight mb-4 md:mb-5 lg:mb-6">
              {sectionData.title}
            </h2>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-inter text-slate-700 font-bold leading-snug max-w-3xl mb-6 md:mb-8 lg:mb-10">
              {sectionData.subtitle}
            </p>
          </div>
          {/* Body Text */}
          <div className="mt-6 md:mt-8 lg:mt-44 w-full lg:w-3/7 lg:z-10 lg:ml-auto lg:mr-20">
            <p className="text-sm md:text-base font-inter text-[#23263a] font-bold leading-relaxed mb-3 md:mb-4">
              {sectionData.paragraph1}
            </p>
            <p className="text-sm md:text-base font-inter text-[#23263a] font-bold leading-relaxed">
              {sectionData.paragraph2}
            </p>
          </div>
          {/* Watermark - Hidden on mobile for cleaner look */}
          {sectionData.badgeImage && (
            <div className="hidden lg:block lg:absolute lg:-bottom-18 lg:right-30">
              <img src={sectionData.badgeImage.url} alt={sectionData.badgeImage.alt} className="w-[135px] h-auto" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 