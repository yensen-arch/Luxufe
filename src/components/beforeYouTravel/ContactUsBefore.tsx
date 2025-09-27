import Image from 'next/image';
interface ContactUsBeforeProps {
  data?: {
    title: string
    description: string
    email: string
    appointmentText: string
    appointmentLink?: string
    faqText: string
    faqLink?: string
    buttonText: string
    buttonLink?: string
  }
}

export default function ContactUsBefore({ data }: ContactUsBeforeProps) {
  // Fallback data if no Sanity data is provided
  const contactData = data || {
    title: 'Here for you',
    description: 'Whether you need expert travel advice, personalised recommendations, or seamless support, don\'t hesitate to get in touch and let us craft your next effortless journey.',
    email: 'info@luxufe.com',
    appointmentText: 'Book an appointment',
    appointmentLink: '#',
    faqText: 'FAQ & Info',
    faqLink: '#',
    buttonText: 'ENQUIRE WITH US',
    buttonLink: '#'
  }

  return (
    <section className="bg-[#b9d6d9] text-[#1a233a]  py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left */}
          <div className="text-center lg:text-left mx-auto order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arpona font-bold mb-4 md:mb-5 lg:mb-6">{contactData.title}</h2>
            <p className="max-w-md mx-auto lg:mx-0 font-inter font-bold leading-relaxed text-sm md:text-base">
              {contactData.description}
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center w-full lg:w-5/6 order-1 lg:order-2">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-7 lg:mb-8 font-inter font-bold w-full gap-4 md:gap-6">
              <a href={`mailto:${contactData.email}`} className="flex items-center gap-2 md:gap-3 hover:underline text-sm md:text-base">
                <Image src="/luxufe-icons-email-dark.svg" alt="Mail" width={24} height={24} />
                <span>{contactData.email}</span>
              </a>
              <a href={contactData.appointmentLink || '#'} className="flex items-center gap-2 md:gap-3 hover:underline text-sm md:text-base">
                <Image src="/luxufe-icon-calendar.svg" alt="Calendar" width={24} height={24} />
                <span>{contactData.appointmentText}</span>
              </a>
              <a href={contactData.faqLink || '#'} className="flex items-center gap-2 md:gap-3 hover:underline text-sm md:text-base">
                <Image src="/luxufe-icon-call.svg" alt="Info" width={24} height={24} />
                <span>{contactData.faqText}</span>
              </a>
            </div>
            <button className="w-full group bg-[#1a233a] text-white py-3 md:py-4 flex items-center justify-center gap-2 md:gap-3 font-inter font-semibold tracking-widest hover:bg-opacity-90 transition-all text-xs md:text-sm">
              {contactData.buttonText}
              <Image src="/luxufe-icon-button-arrow-light.svg" alt="Arrow right" width={24} height={24} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 