import React from "react";
import Image from "next/image";
interface ContactInfoSectionProps {
  data?: {
    callUs: {
      title: string;
      phoneNumbers: string[];
    };
    emailUs: {
      title: string;
      email: string;
    };
    bookACall: {
      title: string;
      description: string;
      linkText: string;
      linkUrl?: string;
    };
  };
}

function ContactInfoSection({ data }: ContactInfoSectionProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const callUsTitle = data?.callUs?.title || "Call Us";
  const phoneNumbers = data?.callUs?.phoneNumbers || ["+12 345 5678 8999", "+12 345 5678 8999"];
  const emailUsTitle = data?.emailUs?.title || "Email Us";
  const emailAddress = data?.emailUs?.email || "info@luxufe.com";
  const bookACallTitle = data?.bookACall?.title || "Book a call";
  const bookACallDescription = data?.bookACall?.description || "Schedule a call with us";
  const linkText = data?.bookACall?.linkText || "Calendly";
  const linkUrl = data?.bookACall?.linkUrl || "#";

  return (
    <section className="w-full bg-white py-8 md:py-10 flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 md:gap-0">
          {/* Call Us */}
          <div className="flex flex-col items-center text-center">
            <span className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 border border-gray-400 rounded-full bg-white shadow-md mb-4 md:mb-6">
              <Image src="/luxufe-icon-call.svg" alt="Call" width={24} height={24} className="w-6 h-6 md:w-8 md:h-8 text-[#23263a]" />
            </span>
            <h3 className="text-lg md:text-xl font-arpona font-medium mb-3 md:mb-4">{callUsTitle}</h3>
            <div className="text-xs font-inter font-bold text-[#23263a] mb-2">
              {phoneNumbers.join(' or<br/>')}
            </div>
          </div>
          {/* Email Us */}
          <div className="flex flex-col items-center text-center">
            <span className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 border border-gray-400 rounded-full bg-white shadow-md mb-4 md:mb-6">
              <Image src="/luxufe-icons-email-dark.svg" alt="Email" width={24} height={24} className="w-6 h-6 md:w-8 md:h-8 text-[#23263a]" />
            </span>
            <h3 className="text-lg md:text-xl font-arpona font-medium mb-3 md:mb-4">{emailUsTitle}</h3>
            <div className="text-xs font-inter font-bold text-[#23263a] mb-2">
              Send us an email on<br/>
              <a href={`mailto:${emailAddress}`} className="underline text-[#7bb7b3]">{emailAddress}</a>
            </div>
          </div>
          {/* Book a call */}
          <div className="flex flex-col items-center text-center">
            <span className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 border border-gray-400 rounded-full bg-white shadow-md mb-4 md:mb-6">
              <Image src="/luxufe-icon-calendar.svg" alt="Calendar" width={24} height={24} className="w-6 h-6 md:w-8 md:h-8 text-[#23263a]" />
            </span>
            <h3 className="text-lg md:text-xl font-arpona font-medium mb-3 md:mb-4">{bookACallTitle}</h3>
            <div className="text-xs font-inter font-bold text-[#23263a] mb-2">
              {bookACallDescription}<br/>
              on <a href={linkUrl} className="underline text-[#7bb7b3]">{linkText}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactHeroProps {
  data?: {
    backgroundImage: {
      asset: {
        url: string;
      };
      alt: string | null;
    };
    subtitle: string;
    title: string;
    buttonText: string;
    description: string;
    contactInfo: {
      callUs: {
        title: string;
        phoneNumbers: string[];
      };
      emailUs: {
        title: string;
        email: string;
      };
      bookACall: {
        title: string;
        description: string;
        linkText: string;
        linkUrl?: string;
      };
    };
  };
}

export default function ContactHero({ data }: ContactHeroProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayBackgroundImage = data?.backgroundImage?.asset?.url || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80";
  const displaySubtitle = data?.subtitle || "Contact Us";
  const displayTitle = data?.title || "Here for You, Wherever You Are";
  const displayButtonText = data?.buttonText || "JUMP TO QUIZ";
  const displayDescription = data?.description || "Whether you need expert travel advice, personalized recommendations, or seamless support, we're always ready to assist you at every step of your journey.";

  return (
    <>
      <section className="relative w-full h-screen mb-0 flex items-center justify-center">
        {/* Background image */}
        <img
          src={displayBackgroundImage}
          alt="Sydney Opera House and Harbour Bridge"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
          <span className="font-bellarina text-3xl md:text-4xl lg:text-5xl text-white mb-3 md:mb-4 block">{displaySubtitle}</span>
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-arpona font-medium mb-6 md:mb-8 leading-tight px-2 md:px-0">
            {displayTitle}
          </h1>
          <button
            className="border-1 border-gray-400 text-white px-6 md:px-8 py-3 md:py-5 bg-transparent hover:bg-white hover:text-gray-900 transition font-inter font-bold text-xs flex items-center justify-center gap-2 tracking-widest mt-2 md:mt-4"
          >
            {displayButtonText} <Image src="/luxufe-icon-button-arrow-light.svg" alt="arrow right" width={20} height={20} className="w-3 h-3 md:w-7 md:h-6 lg:w-8 lg:h-6" />
          </button>
        </div>
      </section>
      {/* Below-hero text section */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-20 flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg md:text-2xl lg:text-3xl text-[#23263a] text-center font-arpona font-medium">
            {displayDescription}
          </p>
        </div>
      </section>
      {/* Contact info icons and data section */}
      <ContactInfoSection data={data?.contactInfo} />
    </>
  );
} 