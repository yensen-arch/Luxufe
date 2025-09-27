"use client"
import Image from 'next/image';
interface TravelChoiceProps {
  data?: {
    title: string
    description: string
    image: {
      url: string
      alt: string
    }
  }
}

export default function TravelChoice({ data }: TravelChoiceProps) {
  // Fallback data
  const fallbackData = {
    title: 'Your Travel,\nYour Choice',
    description: 'Share your thoughts on luxury travel and see how fellow discerning travelers vote on the week\'s hottest destinations, experiences, and trends.',
    image: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      alt: 'Luxury travel choice'
    }
  }

  const travelData = data || fallbackData

  // Hardcoded social links
  const socialLinks = [
    { platform: 'instagram', enabled: true },
    { platform: 'facebook', enabled: true },
    { platform: 'tripadvisor', enabled: true },
    { platform: 'google', enabled: true }
  ]

  // Social media icon mapping
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Image src="/Icon-simple-instagram-black.svg" alt="Instagram" width={24} height={24} />
      case 'facebook':
        return <Image src="/Icon-awesome-facebook-black.svg" alt="Facebook" width={14} height={14} />
      case 'tripadvisor':
        return <Image src="/Icon-awesome-tripadvisor-black.svg" alt="TripAdvisor" width={34} height={34} />
      case 'google':
        return <Image src="/Icon-ionic-logo-google-black.svg" alt="Google" width={24} height={24} />        
      default:
        return null
    }
  }

  return (
    <section className="py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="container">
        <div className="relative flex flex-col lg:flex-row items-center lg:justify-end min-h-[400px] md:min-h-[500px] lg:min-h-[650px]">
          
          {/* Content Section */}
          <div className="bg-gray-100 w-full lg:w-6/8 mt-4 md:mt-6 lg:mt-8 h-auto lg:h-screen lg:mt-0 lg:absolute lg:left-0 p-6 md:p-8 lg:p-12 z-20 order-2 lg:order-1">
            <div className="transition-all duration-700 ease-in-out">
              <div className="w-full lg:w-1/2 lg:mr-auto lg:ml-20 lg:mt-40 flex flex-col items-start">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arpona text-[#23263a] mb-4 md:mb-6 lg:mb-8 font-bold">
                  {travelData.title}
                </h2>
                <p className="text-sm md:text-base lg:text-md leading-relaxed mb-6 md:mb-8 lg:mb-10 max-w-full lg:max-w-3/5 font-bold font-inter text-[#23263a]">
                  {travelData.description}
                </p>
                <div className="flex gap-4 md:gap-5 lg:gap-6 mt-2 text-lg md:text-xl lg:text-2xl text-[#23263a]">
                  {socialLinks
                    .filter((link) => link.enabled)
                    .map((link, index) => (
                      <span key={index}>
                        {getSocialIcon(link.platform)}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 z-40 lg:mr-20 order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src={travelData.image.url}
                alt={travelData.image.alt}
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

