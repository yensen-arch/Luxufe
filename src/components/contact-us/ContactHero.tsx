import React from "react";
import { Phone, Mail, CalendarDays } from 'lucide-react';

function ContactInfoSection() {
  return (
    <section className="w-full bg-white py-10 flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {/* Call Us */}
          <div className="flex flex-col items-center text-center">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6">
              <Phone className="w-8 h-8 text-[#23263a]" />
            </span>
            <h3 className="text-xl font-arpona font-medium mb-4">Call Us</h3>
            <div className="text-xs font-inter font-bold text-[#23263a] mb-2">+12 345 5678 8999 or<br/>+12 345 5678 8999</div>
          </div>
          {/* Email Us */}
          <div className="flex flex-col items-center text-center">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6">
              <Mail className="w-8 h-8 text-[#23263a]" />
            </span>
            <h3 className="text-xl font-arpona font-medium mb-4">Email Us</h3>
            <div className="text-xs font-inter font-bold text-[#23263a] mb-2">Send us an email on<br/><a href="mailto:info@luxufe.com" className="underline text-[#7bb7b3]">info@luxufe.com</a></div>
          </div>
          {/* Book a call */}
          <div className="flex flex-col items-center text-center">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6">
              <CalendarDays className="w-8 h-8 text-[#23263a]" />
            </span>
            <h3 className="text-xl font-arpona font-medium mb-4">Book a call</h3>
            <div className="text-xs font-inter font-bold text-[#23263a] mb-2">Schedule a call with us<br/> on <a href="#" className="underline text-[#7bb7b3]">Calendly</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactHero() {
  return (
    <>
      <section className="relative w-full h-[90vh] min-h-[600px] mb-0 flex items-center justify-center">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Sydney Opera House and Harbour Bridge"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
          <span className="font-bellarina text-4xl md:text-5xl text-white mb-4 block">Contact Us</span>
          <h1 className="text-white text-5xl md:text-6xl font-arpona font-medium mb-8 leading-tight">
            Here for You, Wherever You Are
          </h1>
          <button
            className="border-1 border-gray-400 text-white px-8 py-4 bg-transparent hover:bg-white hover:text-gray-900 transition font-inter font-bold text-xs flex items-center justify-center gap-2 tracking-widest mt-4"
          >
            JUMP TO QUIZ <span className="ml-2">→</span>
          </button>
        </div>
      </section>
      {/* Below-hero text section */}
      <section className="w-full bg-white py-16 md:py-20 flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-2xl md:text-3xl text-[#23263a] text-center font-arpona font-medium">
            Whether you need expert travel advice, personalized recommendations, or seamless support, we’re always ready to assist you at every step of your journey.
          </p>
        </div>
      </section>
      {/* Contact info icons and data section */}
      <ContactInfoSection />
    </>
  );
} 