import React from "react";

interface LoginHeroProps {
  data?: {
    leftImage?: {
      url: string;
      alt?: string;
    };
    scriptText?: string;
    heading?: string;
    description?: string;
    emailPlaceholder?: string;
    passwordPlaceholder?: string;
    buttonText?: string;
    belowText?: string;
    contactLinkText?: string;
    contactLinkHref?: string;
  };
}

const defaultData = {
  leftImage: {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    alt: "Cocktail being poured",
  },
  scriptText: "Welcome",
  heading: "Log in to view your benefits, saved journeys, and personal travel insights",
  description:
    "As a Luxufe client, your experience doesn’t end when the trip does. The Luxufe Rewards program is our way of offering you exclusive benefits, early access to curated experiences, and a seamless way to manage your travel preferences.",
  emailPlaceholder: "EMAIL ADDRESS",
  passwordPlaceholder: "PASSWORD",
  buttonText: "LOG IN",
  belowText: "If you’re not part of the Luxufe Membership and you’d like to be, please ",
  contactLinkText: "contact us",
  contactLinkHref: "#",
};

const LoginHero: React.FC<LoginHeroProps> = ({ data }) => {
  const d = { ...defaultData, ...data, leftImage: { ...defaultData.leftImage, ...data?.leftImage } };
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row">
      {/* Left image */}
      <div className="w-full md:w-1/2 h-screen md:h-auto relative">
        <img
          src={d.leftImage.url}
          alt={d.leftImage.alt || "Login visual"}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>
      {/* Right panel */}
      <div className="w-full md:w-1/2 bg-[#23263a] flex flex-col justify-center items-center px-6 md:px-16 py-16 md:py-0">
        <div className="w-full max-w-xl mx-auto text-center">
          <span className="font-bellarina text-4xl md:text-5xl text-white mb-6 block italic">{d.scriptText}</span>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-arpona font-normal mb-8 leading-tight">
            {d.heading}
          </h1>
          <p className="text-white text-base md:text-lg font-inter font-normal mb-10">
            {d.description}
          </p>
          <form className="flex flex-col md:flex-row gap-4 mb-8 w-full">
            <input
              type="email"
              placeholder={d.emailPlaceholder}
              className="flex-1 px-6 py-4 bg-transparent border border-gray-400 text-white placeholder-gray-300 font-inter font-bold text-base focus:outline-none focus:ring-2 focus:ring-[#a8d1cf]"
              autoComplete="email"
            />
            <input
              type="password"
              placeholder={d.passwordPlaceholder}
              className="flex-1 px-6 py-4 bg-transparent border border-gray-400 text-white placeholder-gray-300 font-inter font-bold text-base focus:outline-none focus:ring-2 focus:ring-[#a8d1cf]"
              autoComplete="current-password"
            />
          </form>
          <button
            type="submit"
            className="w-full bg-[#a8d1cf] text-[#23263a] font-inter font-bold py-4 text-lg tracking-widest transition-colors duration-200 hover:bg-[#7bb7b3] mb-6"
          >
            {d.buttonText}
          </button>
          <p className="text-white text-sm font-inter font-normal">
            {d.belowText}
            <a href={d.contactLinkHref} className="underline font-bold ml-1">
              {d.contactLinkText}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginHero; 