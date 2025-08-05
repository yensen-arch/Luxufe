import { ArrowRight, Mail, CalendarDays, Info } from 'lucide-react';

interface ContactUsProps {
  data?: {
    heading?: string;
    description?: string;
    contactInfo?: {
      phone?: string;
      email?: string;
      address?: string;
    };
  };
}

export default function ContactUs({ data }: ContactUsProps) {
  // Fallback content if no data is provided
  const heading = data?.heading || "Your Luxury Experience, Your Way";
  const description = data?.description || "Begin a stay, or an entire journey, centred around luxury.";
  const email = data?.contactInfo?.email || "info@luxufe.com";

  return (
    <section className="bg-[#f5f6f7] text-[#23263B] py-12 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-30">
          {/* Left: Agent photo and text */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 flex-1 w-full md:w-auto">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Agent"
              className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-arpona mb-3 md:mb-4 font-bold">{heading}</h2>
              <p className="w-full md:w-3/4 font-inter text-md md:text-md font-bold">
                {description}
              </p>
            </div>
          </div>
          {/* Right: Contact options and button */}
          <div className="flex flex-col items-center flex-1 w-full gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 font-inter font-bold text-sm md:text-base w-full">
              <a href={`mailto:${email}`} className="flex items-center gap-2 hover:underline w-full md:w-auto justify-center md:justify-start">
                <Mail className="h-4 w-4 md:h-5 md:w-5" />
                <span>{email}</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline w-full md:w-auto justify-center md:justify-start">
                <CalendarDays className="h-4 w-4 md:h-5 md:w-5" />
                <span>Book an appointment</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline w-full md:w-auto justify-center md:justify-start">
                <Info className="h-4 w-4 md:h-5 md:w-5" />
                <span>FAQ & Info</span>
              </a>
            </div>
            <button className="w-full group bg-[#23263B] text-white py-3 md:py-4 flex items-center justify-center gap-3 font-inter font-semibold text-xs hover:bg-opacity-90 transition-all rounded-none">
              ENQUIRE WITH US
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 