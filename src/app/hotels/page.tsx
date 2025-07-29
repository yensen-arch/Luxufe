import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/regions/ContactUs";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import HotelHero from "@/components/hotels/HotelHero";

export default function Hotels() {
  return (
    <div>
      <Navbar />
      <HotelHero />
      <NewsletterSignUp />
      <ContactUs />
      <Footer />
    </div>
  )
}