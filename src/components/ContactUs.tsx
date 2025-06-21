import { ArrowRight, Mail, CalendarDays, Info } from 'lucide-react';

export default function ContactUs() {
  return (
    <section className="bg-[#cde4e3] text-gray-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-serif mb-6">Contact Us</h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-700">
          Whether you need expert travel advice, personalised recommendations, or seamless support, don't hesitate to get in touch and let us craft your next effortless journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
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
        <button className="group bg-[#1a233a] text-white py-4 px-8 flex items-center justify-center gap-3 font-semibold tracking-widest hover:bg-gray-800 transition-colors mx-auto">
          ENQUIRE WITH US
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  )
} 