

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

interface ContactUsData {
  heading: string;
  description: string;
  contactInfo: ContactInfo;
}

interface ContactUsProps {
  data?: ContactUsData;
}

export default function ContactUs({ data }: ContactUsProps) {
  // Fallback to hardcoded content if no data is provided
  const sectionData = data || {
    heading: "Contact Us",
    description: "Whether you need expert travel advice, personalised recommendations, or seamless support, don't hesitate to get in touch and let us craft your next effortless journey.",
    contactInfo: {
      phone: "+1 (555) 123-4567",
      email: "info@luxufe.com",
      address: "123 Luxury Street, Suite 100, New York, NY 10001"
    }
  };

  return (
    <section className="bg-[#b9d6d9] text-[#1a233a] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left */}
          <div className="text-center md:text-left mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-arpona font-bold mb-4 sm:mb-6">{sectionData.heading}</h2>
            <p className="max-w-md mx-auto md:mx-0 font-inter font-bold leading-relaxed text-sm sm:text-base">
              {sectionData.description}
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center w-full md:w-5/6">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 font-inter font-bold w-full gap-4 sm:gap-6">
              <a href={`mailto:${sectionData.contactInfo.email}`} className="flex items-center gap-2 sm:gap-3 hover:underline text-sm sm:text-base">
                <img src="/luxufe-icons-email-dark.svg" alt="Mail" className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="break-all">{sectionData.contactInfo.email}</span>
              </a>
              <a href="#" className="flex items-center gap-2 sm:gap-3 hover:underline text-sm sm:text-base">
                <img src="/luxufe-icon-calendar.svg" alt="Calendar" className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>Book an appointment</span>
              </a>
              <a href="#" className="flex items-center gap-2 sm:gap-3 hover:underline text-sm sm:text-base">
                <img src="/luxufe-icon-call.svg" alt="Info" className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>FAQ & Info</span>
              </a>
            </div>
            <button className="w-full group bg-[#1a233a] text-white py-3 sm:py-4 flex items-center justify-center gap-2 sm:gap-3 font-inter font-semibold tracking-widest hover:bg-opacity-90 transition-all text-sm sm:text-base">
              ENQUIRE WITH US
              <img src="/luxufe-icon-button-arrow-light.svg" alt="Arrow right" className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 