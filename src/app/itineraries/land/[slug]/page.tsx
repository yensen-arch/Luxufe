import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/itineraries/land-itineraries/Hero";
import ItineraryDetails from "@/components/itineraries/land-itineraries/ItineraryDetails";
import PricingAndHotelsSection from "@/components/itineraries/land-itineraries/PricingAndHotels";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import OtherTrips from "@/components/itineraries/land-itineraries/OtherTrips";
import { getLandItinerary, getLandItineraryDates } from "@/lib/database";
import { notFound } from "next/navigation";

interface LandItineraryPageProps {
  params: {
    slug: string;
  };
}

export default async function LandItineraryPage({ params }: LandItineraryPageProps) {
  // Get itinerary ID from URL
  const itineraryId = parseInt(params.slug);
  
  // Fetch data for the specific itinerary
  const itinerary = await getLandItinerary(itineraryId);
  const itineraryDates = await getLandItineraryDates(itineraryId);

  if (!itinerary) {
    notFound();
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
