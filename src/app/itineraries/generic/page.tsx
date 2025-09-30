import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Hero from "@/components/itineraries/generic-itineraries/Hero";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import CuratedForYou from "@/components/itineraries/generic-itineraries/CuratedForYou";

const GenericItineraries = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <CuratedForYou />
        <ContactUsJourneys />
        <Footer />
    </div>
  )
}

export default GenericItineraries