import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/itineraries/jet-itineraries/Hero";
import ItineraryDetails from "@/components/itineraries/jet-itineraries/ItineraryDetails";


export default function JetItineraries() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ItineraryDetails />
      <Footer />
    </main>
  );
}