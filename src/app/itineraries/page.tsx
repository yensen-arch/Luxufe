import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/partners/ContactUs";
import Hero from "@/components/itineraries/Hero";
import ItinerariesGrid from "@/components/itineraries/ItinerariesGrid";

export default function ItinerariesPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ItinerariesGrid />
      <ContactUs />
      <Footer />
    </main>
  );
}