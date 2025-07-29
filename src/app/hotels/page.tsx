import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/regions/ContactUs";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import HotelHero from "@/components/hotels/HotelHero";
import HotelBrands from "@/components/hotels/HotelBrands";
import HotelsMain from "@/components/hotels/HotelsMain";
import PropertyPicks from "@/components/hotels/PropertyPicks";

export default function Hotels() {
  return (
    <div>
      <Navbar />
      <HotelHero />
      <HotelBrands />
      <PropertyPicks />
      <HotelsMain />
      <NewsletterSignUp />
      <ContactUs />
      <Footer />
    </div>
  )
}