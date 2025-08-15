import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/itineraries/land-itineraries/Hero";
import ItineraryDetails from "@/components/itineraries/land-itineraries/ItineraryDetails";
import PricingAndHotelsSection from "@/components/itineraries/land-itineraries/PricingAndHotels";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import OtherTrips from "@/components/itineraries/land-itineraries/OtherTrips";
import { getLandItinerary, getLandItineraryDates } from "@/lib/database";

export default async function LandItineraries() {
  // Fetch data for itinerary ID 1 (Tropical Escape)
  const itinerary = await getLandItinerary(1);
  const itineraryDates = await getLandItineraryDates(1);

  if (!itinerary) {
    return (
      <main>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-600">Itinerary not found</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Hero itinerary={itinerary} />
      <ItineraryDetails itinerary={itinerary} />
      <PricingAndHotelsSection itinerary={itinerary} itineraryDates={itineraryDates} />
      <OtherTrips />
      <ContactUsJourneys />
      <Footer />
    </main>
  );
}