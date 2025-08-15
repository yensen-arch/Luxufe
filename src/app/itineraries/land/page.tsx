import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/itineraries/land-itineraries/Hero";
import ItineraryDetails from "@/components/itineraries/land-itineraries/ItineraryDetails";
import PricingAndHotelsSection from "@/components/itineraries/land-itineraries/PricingAndHotels";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import OtherTrips from "@/components/itineraries/land-itineraries/OtherTrips";

export default function LandItineraries() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ItineraryDetails />
      <PricingAndHotelsSection />
      <OtherTrips />
      <ContactUsJourneys />
      <Footer />
    </main>
  );
}