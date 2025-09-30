import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Hero from "@/components/itineraries/generic-itineraries/Hero";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import CuratedForYou from "@/components/itineraries/generic-itineraries/CuratedForYou";
import ItineraryDetails from "@/components/itineraries/generic-itineraries/ItineraryDetails";

const GenericItineraries = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <ItineraryDetails />
        <CuratedForYou />
        <ContactUsJourneys />
        <Footer />
    </div>
  )
}

export default GenericItineraries