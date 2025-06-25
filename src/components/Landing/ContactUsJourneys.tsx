import { ArrowRight, Mail, CalendarDays, Info } from 'lucide-react';

export default function ContactUsJourneys() {
  return (
    <section className="bg-[#f5f6f7] text-[#23263B] py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left: Agent photo and text */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 flex-1">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Agent"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
            />
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-arpona font-light mb-2 leading-tight">Looking for something<br/>More personalised?</h2>
              <p className="max-w-md font-inter text-lg text-gray-700">
                Our team is always available to guide you and ensure your experience is perfectly matched to your preferences.
              </p>
            </div>
          </div>
          {/* Right: Contact options and button */}
          <div className="flex flex-col items-center md:items-end flex-1 w-full gap-6">
            <div className="flex flex-row flex-wrap items-center justify-center md:justify-end gap-8 font-inter font-bold text-base w-full">
              <a href="mailto:info@luxufe.com" className="flex items-center gap-2 hover:underline">
                <Mail className="h-5 w-5" />
                <span>info@luxufe.com</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <CalendarDays className="h-5 w-5" />
                <span>Book an appointment</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <Info className="h-5 w-5" />
                <span>FAQ & Info</span>
              </a>
            </div>
            <button className="w-full md:w-[340px] group bg-[#23263B] text-white py-5 flex items-center justify-center gap-3 font-inter font-semibold tracking-widest hover:bg-opacity-90 transition-all text-lg rounded-none">
              ENQUIRE WITH US
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 