"use client"

import { Facebook, Instagram } from 'lucide-react';

interface TravelChoiceProps {
  data?: {
    title: string
    description: string
    socialLinks: Array<{
      platform: string
      url?: string
      enabled: boolean
    }>
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
    socialLinks: [
      { platform: 'instagram', enabled: true },
      { platform: 'facebook', enabled: true },
      { platform: 'tripadvisor', enabled: true },
      { platform: 'google', enabled: true }
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      alt: 'Luxury travel choice'
    }
  }

  const travelData = data || fallbackData

  // Social media icon mapping
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" aria-label="Instagram" />
      case 'facebook':
        return <Facebook className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" aria-label="Facebook" />
      case 'tripadvisor':
        return (
          <span aria-label="TripAdvisor">
            <svg className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="12" r="3.5" stroke="#23263a" strokeWidth="1.5" fill="white" />
              <circle cx="16.5" cy="12" r="3.5" stroke="#23263a" strokeWidth="1.5" fill="white" />
              <circle cx="7.5" cy="12" r="1.5" fill="#23263a" />
              <circle cx="16.5" cy="12" r="1.5" fill="#23263a" />
              <path d="M2 12c2-2 6-2 8 0" stroke="#23263a" strokeWidth="1.5" fill="none" />
              <path d="M22 12c-2-2-6-2-8 0" stroke="#23263a" strokeWidth="1.5" fill="none" />
            </svg>
          </span>
        )
      case 'google':
        return (
          <span aria-label="Google">
            <svg className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M21.805 12.082c0-.638-.057-1.252-.163-1.837H12.22v3.48h5.43a4.637 4.637 0 0 1-2.01 3.045v2.522h3.25c1.9-1.75 2.915-4.33 2.915-7.21z" fill="#4285F4"/>
                <path d="M12.22 22c2.43 0 4.47-.805 5.96-2.18l-3.25-2.522c-.9.6-2.05.96-3.32.96-2.55 0-4.71-1.72-5.48-4.03H3.77v2.57A9.78 9.78 0 0 0 12.22 22z" fill="#34A853"/>
                <path d="M6.74 14.228a5.89 5.89 0 0 1 0-3.756v-2.57H3.77a9.78 9.78 0 0 0 0 8.896l2.97-2.57z" fill="#FBBC05"/>
                <path d="M12.22 7.54c1.32 0 2.5.454 3.43 1.345l2.57-2.57C16.69 4.805 14.65 4 12.22 4A9.78 9.78 0 0 0 3.77 7.902l2.97 2.57c.77-2.31 2.93-4.03 5.48-4.03z" fill="#EA4335"/>
              </g>
            </svg>
          </span>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
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
                  {travelData.socialLinks
                    .filter(link => link.enabled)
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

