import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/regions/ContactUs";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import HotelHero from "@/components/hotels/HotelHero";
import HotelBrands from "@/components/hotels/HotelBrands";
import HotelsMain from "@/components/hotels/HotelsMain";
import PropertyPicks from "@/components/hotels/PropertyPicks";
import { getHotelsPageData, getLandingPageData } from "@/lib/sanity";

export default async function Hotels() {
  // Fetch data from Sanity CMS for both hotels page and landing page
  const [hotelsData, landingData] = await Promise.all([
    getHotelsPageData(),
    getLandingPageData()
  ]);

  return (
    <div>
      <Navbar />
      <HotelHero data={hotelsData?.hero} />
      <HotelBrands data={hotelsData?.brands} />
      <PropertyPicks />
      <HotelsMain />
      <NewsletterSignUp data={landingData?.newsletter} />
      <ContactUs />
      <Footer />
    </div>
  )
}