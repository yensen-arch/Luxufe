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
    <section className="bg-white flex justify-center items-stretch mt-60 mb-20 h-[120vh]">
      <div className="flex flex-col md:flex-row w-full mx-auto h-full relative">
        {/* Left: Image */}
        <div className="w-[56%] z-10 absolute -top-30 h-[120vh]">
          <Image
            src={sectionData.image.url}
            alt={sectionData.image.alt}
            width={1000}
            height={1200}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: Content */}
        <div className="relative w-6/8 bg-[#f5f6f7] flex flex-col ml-auto px-8 py-12 md:pl-16 md:pr-20">
          {/* Overlapping Heading/Subheading */}
          <div className="absolute md:static ml-auto z-10 mt-20">
            <h2 className="text-4xl md:text-6xl font-arpona text-[#23263a] font-bold leading-tight mb-6">
              {sectionData.title}
            </h2>
            <p className="text-xl md:text-2xl font-inter text-slate-700 font-bold leading-snug max-w-3xl mb-10">
              {sectionData.subtitle}
            </p>
          </div>
          {/* Body Text */}
          <div className="mt-44 md:mt-0 w-3/7 z-10 ml-auto mr-20">
            <p className="text-base md:text-md font-inter text-[#23263a] font-bold leading-relaxed mb-4">
              {sectionData.paragraph1}
            </p>
            <p className="text-base md:text-md font-inter text-[#23263a] font-bold leading-relaxed">
              {sectionData.paragraph2}
            </p>
            <button className="mt-4 text-xs flex items-center gap-2 border-2 border-gray-300 text-[#23263a] px-4 py-4 sm:px-6 sm:py-4 md:px-8 md:py-4 lg:px-10 lg:py-4">
              {sectionData.buttonText}
              <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={20} height={20} className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-5 lg:w-6 lg:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 