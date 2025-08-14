import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/itineraries/jet-itineraries/Hero";
import ItineraryDetails from "@/components/itineraries/jet-itineraries/ItineraryDetails";
import PricingAndSeatsSection from "@/components/itineraries/jet-itineraries/PricingAndSeats";

export default function JetItineraries() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ItineraryDetails />
      <PricingAndSeatsSection />
      <Footer />
    </main>
  );
}