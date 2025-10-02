import Image from 'next/image'

interface SeamlessWayProps {
  data?: {
    image: {
      url: string;
      alt: string;
    };
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    badgeImage?: {
      url: string;
      alt: string;
    };
    buttonText?: string;
  };
}

export default function SeamlessWay({ data }: SeamlessWayProps) {
  // Fallback data if no Sanity data is provided
  const sectionData = {
    image: {
      url: 'https://picsum.photos/seed/resort-pool/1000/1200',
      alt: 'Effortless Travel',
      ...(data?.image || {})
    },
    title: data?.title || 'The Art of Effortless Travel',
    subtitle:
      data?.subtitle ||
      'We believe that true luxury lies in the details, where every moment is seamlessly orchestrated and every journey is as effortless as it is extraordinary.',
    paragraph1:
      data?.paragraph1 ||
      'More than just a travel service, we are curators of experience, ensuring that each trip is tailored with precision, care, and an uncompromising commitment to excellence.\nOur philosophy is built on three core pillars: Care, Comfort, and Consistency.',
    paragraph2:
      data?.paragraph2 ||
      "From anticipating a client's needs before they arise to ensuring smooth transitions between destinations, we want to eliminate friction and enhance the joy of discovery in every journey.",
    badgeImage: data?.badgeImage || {
      url: 'https://res.cloudinary.com/dqh2tacov/image/upload/v1750523100/LUXUFE_-_Badge_Logo_5_cgreed.png',
      alt: 'Luxufe Badge',
    },
    buttonText: data?.buttonText || 'FIND YOUR JOURNEY',
  };

  return (
    <section className="bg-white flex justify-center items-stretch mt-32 sm:mt-40 md:mt-60 mb-12 sm:mb-16 md:mb-20 h-auto md:h-[120vh]">
      <div className="flex flex-col md:flex-row w-full mx-auto h-full relative">
        {/* Left: Image */}
        <div className="w-full md:w-[56%] z-10 relative md:absolute -top-16 sm:-top-20 md:-top-30 h-80 sm:h-96 md:h-[120vh]">
          <Image
            src={sectionData.image.url}
            alt={sectionData.image.alt}
            width={1000}
            height={1200}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: Content */}
        <div className="relative w-full md:w-6/8 flex flex-col md:ml-auto px-6 sm:px-8 py-0 sm:py-0 md:py-12 md:pl-16 md:pr-20">
          {/* Overlapping Heading/Subheading */}
          <div className="relative md:absolute md:static md:ml-auto z-10 mt-0 md:mt-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-arpona text-[#23263a] font-bold leading-tight mb-4 sm:mb-6">
              {sectionData.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-slate-700 font-bold leading-snug max-w-full md:max-w-3xl mb-6 sm:mb-8 md:mb-10">
              {sectionData.subtitle}
            </p>
          </div>
          {/* Body Text */}
          <div className="relative md:mt-0 w-full md:w-3/7 z-10 md:ml-auto md:mr-20">
            <p className="text-sm sm:text-base md:text-md font-inter text-[#23263a] font-bold leading-relaxed mb-3 sm:mb-4">
              {sectionData.paragraph1}
            </p>
            <p className="text-sm sm:text-base md:text-md font-inter text-[#23263a] font-bold leading-relaxed mb-4 sm:mb-6">
              {sectionData.paragraph2}
            </p>
            <button className="mt-2 sm:mt-4 text-xs flex items-center gap-2 border-2 border-gray-300 text-[#23263a] px-4 py-3 sm:py-4 sm:px-6 md:px-8 lg:px-10">
              {sectionData.buttonText}
              <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={20} height={20} className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-5 lg:w-6 lg:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 