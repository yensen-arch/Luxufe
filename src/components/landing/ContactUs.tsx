import { ArrowRight, Mail, CalendarDays, Info } from 'lucide-react';

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
    <section className="bg-[#a8d1cf] text-[#1a233a] py-24">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left */}
          <div className="text-center md:text-left mx-auto">
            <h2 className="text-6xl font-arpona font-bold mb-6">{sectionData.heading}</h2>
            <p className="max-w-md mx-auto md:mx-0 font-inter font-bold leading-relaxed">
              {sectionData.description}
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center w-5/6">
            <div className="flex flex-row items-center justify-between mb-8 font-inter font-bold w-full">
              <a href={`mailto:${sectionData.contactInfo.email}`} className="flex items-center gap-3 hover:underline">
                <Mail className="h-5 w-5" />
                <span>{sectionData.contactInfo.email}</span>
              </a>
              <a href="#" className="flex items-center gap-3 hover:underline">
                <CalendarDays className="h-5 w-5" />
                <span>Book an appointment</span>
              </a>
              <a href="#" className="flex items-center gap-3 hover:underline">
                <Info className="h-5 w-5" />
                <span>FAQ & Info</span>
              </a>
            </div>
            <button className="w-full group bg-[#1a233a] text-white py-4 flex items-center justify-center gap-3 font-inter font-semibold tracking-widest hover:bg-opacity-90 transition-all">
              ENQUIRE WITH US
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 